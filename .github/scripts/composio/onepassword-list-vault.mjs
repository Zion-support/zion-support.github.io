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

function unwrap(result) {
  const data = result?.data ?? result;
  if (data?.successful === false) {
    throw new Error(data?.error || data?.message || 'Composio tool returned unsuccessful');
  }
  return data?.data ?? data;
}

function asList(value, key) {
  if (Array.isArray(value)) return value;
  if (Array.isArray(value?.[key])) return value[key];
  return [];
}

const composio = new Composio({ apiKey });

// TypeScript SDK uses connectedAccountId (not connection_id).
// dangerouslySkipVersionCheck allows toolkit version "latest" on tools.execute().
const vaultsResult = await composio.tools.execute('_1PASSWORD_LIST_VAULTS', {
  connectedAccountId: connectionId,
  arguments: {},
  dangerouslySkipVersionCheck: true,
});
const itemsResult = await composio.tools.execute('_1PASSWORD_LIST_ITEMS', {
  connectedAccountId: connectionId,
  arguments: { vault_id: vaultId },
  dangerouslySkipVersionCheck: true,
});

const vaultList = asList(unwrap(vaultsResult), 'vaults');
const itemList = asList(unwrap(itemsResult), 'items');
const summary = {
  connectionId,
  vaultId,
  vaultCount: vaultList.length,
  vaults: vaultList.map((v) => ({ id: v.id, name: v.name })),
  itemCount: itemList.length,
  titles: itemList.map((i) => i.title),
};

console.log(JSON.stringify(summary, null, 2));

if (vaultList.length < 1 || !vaultList.some((v) => v.id === vaultId)) {
  throw new Error(`Vault ${vaultId} was not returned by _1PASSWORD_LIST_VAULTS`);
}
if (itemList.length < 1) {
  throw new Error(`Vault ${vaultId} returned no items`);
}
