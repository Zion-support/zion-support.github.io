import { Composio } from '@composio/core';

const apiKey = process.env.COMPOSIO_API_KEY;
const connectionId = process.env.COMPOSIO_1PASSWORD_CONNECTION_ID;
const vaultId = process.env.ONEPASSWORD_VAULT_ID || 'qvoxujxka43fr3kyzmb3qsidpi';

if (!apiKey) {
  throw new Error('COMPOSIO_API_KEY is missing');
}
if (!connectionId) {
  throw new Error('COMPOSIO_1PASSWORD_CONNECTION_ID is missing');
}

function fail(message, extra) {
  const suffix = extra ? `\n${JSON.stringify(extra).slice(0, 2000)}` : '';
  throw new Error(`${message}${suffix}`);
}

function unwrap(result) {
  if (result == null) {
    fail('Composio tool returned an empty result');
  }
  if (result.error) {
    fail(typeof result.error === 'string' ? result.error : JSON.stringify(result.error), result);
  }
  if (result.successful === false || result.success === false) {
    fail(result.message || 'Composio tool returned unsuccessful', result);
  }
  const data = result.data ?? result;
  if (data && (data.successful === false || data.success === false || data.error)) {
    fail(data.error || data.message || 'Nested Composio result was unsuccessful', data);
  }
  return data?.data ?? data;
}

function asList(value, key) {
  if (Array.isArray(value)) return value;
  if (Array.isArray(value?.[key])) return value[key];
  fail(`Expected an array or object.${key}[] for ${key}`, value);
}

function vaultRecordId(vault) {
  return vault?.id || vault?.vault_id || vault?.uuid || '';
}

function vaultRecordName(vault) {
  return vault?.name || vault?.title || vault?.label || '';
}

function itemTitle(item) {
  return item?.title || item?.name || item?.label || item?.id || '';
}

async function toolkitVersion(composio) {
  const toolkit = await composio.toolkits.get('_1password');
  const version = toolkit?.meta?.version || toolkit?.version;
  if (!version || version === 'latest') {
    fail('Could not resolve a pinned _1password toolkit version', toolkit?.meta || toolkit);
  }
  return version;
}

const composio = new Composio({ apiKey });
const version = await toolkitVersion(composio);

// TypeScript SDK param is connectedAccountId:
// https://docs.composio.dev/docs/auth-configuration/connected-accounts
const executeOpts = { connectedAccountId: connectionId, version };

const vaultsResult = await composio.tools.execute('_1PASSWORD_LIST_VAULTS', {
  ...executeOpts,
  arguments: {},
});
const itemsResult = await composio.tools.execute('_1PASSWORD_LIST_ITEMS', {
  ...executeOpts,
  arguments: { vault_id: vaultId },
});

const vaultList = asList(unwrap(vaultsResult), 'vaults');
const itemList = asList(unwrap(itemsResult), 'items');
const summary = {
  connectionId,
  vaultId,
  toolkitVersion: version,
  vaultCount: vaultList.length,
  vaults: vaultList.map((v) => ({ id: vaultRecordId(v), name: vaultRecordName(v) })),
  itemCount: itemList.length,
  titles: itemList.map(itemTitle),
};

console.log(JSON.stringify(summary, null, 2));

if (!vaultList.some((v) => vaultRecordId(v) === vaultId)) {
  fail(`Vault ${vaultId} was not returned by _1PASSWORD_LIST_VAULTS`, summary.vaults);
}
if (itemList.length < 1) {
  fail(`Vault ${vaultId} returned no items`);
}
