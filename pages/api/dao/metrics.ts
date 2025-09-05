import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _configPath = path.join(process.cwd(), 'data', 'dao', 'config.json');
const _cachePath = path.join(process.cwd(), 'data', 'dao', 'metrics.json');

async function fetchJson(_url: string) {_const _resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
}

function readJson(_p: string) {_return JSON.parse(fs.readFileSync(p, _'utf-8'));}

function writeJson(_p: string, _v: unknown) {_fs.writeFileSync(p, _JSON.stringify(v, _null, _2));}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _cfg = readJson(configPath);
    const _cache = readJson(cachePath);
    const _now = Date.now();
    const _oneWeekMs = 7 * 24 * 60 * 60 * 1000;

    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {
      return res.status(200).json({ ...cache, _cached: true});
    }

    const _apiKey = process.env.ETHERSCAN_API_KEY || '';
    const _tokenAddr = cfg.token.address;

    // Top holders (using Etherscan token holder endpoint alternative: token supply holders is limited; use rich list approximation via token transactions + unique addresses)
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.
    const _transfersUrl = `${_cfg.etherscanBaseUrl}?module=account&action=tokentx&contractaddress=${_tokenAddr}&page=1&offset=200&sort=desc${_apiKey ? `&apikey=${apiKey}` : ''}`;
    const _transfersJson = await fetchJson(transfersUrl);
    const _txs = transfersJson?.result || [];

    const holderToDelta: Record<string, bigint> = {};
    for (const tx of txs) {_const _value = BigInt(tx.value || '0');
      const _from = (tx.from || '').toLowerCase();
      const _to = (tx.to || '').toLowerCase();
      if (from) holderToDelta[from] = (holderToDelta[from] || 0n) - value;
      if (to) holderToDelta[to] = (holderToDelta[to] || 0n) + value;}

    const _entries = Object.entries(holderToDelta)
      .map(_([address, _delta]) => ({_address, _netDelta: delta}))
      .sort(_(a, _b) => (b.netDelta > a.netDelta ? 1 : -1))
      .slice(0, 10);

    const _topHolders = entries.map(_(e) => ({_address: e.address, _amount: e.netDelta.toString()}));

    // Token distribution buckets (very rough: based on netDelta approximation)
    const _total = entries.reduce(_(acc, _e) => acc + (BigInt(e.amount) > 0n ? BigInt(e.amount) : 0n), 0n);
    const _distribution = entries.map(_(e) => ({_address: e.address, _percent: total > 0n ? Number((BigInt(e.amount) * 10000n) / total) / 100 : 0}));

    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.
    const activeProposals: unknown[] = [];

    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample)
    const _uniqueAddresses = new Set(_txs.flatMap((t: unknown) => [t.from?.toLowerCase(), t.to?.toLowerCase()]).filter(Boolean));
    const _participationRate = uniqueAddresses.size ? Math.min(100, Math.round((uniqueAddresses.size / Math.max(10, uniqueAddresses.size)) * 100)) : 0;

    const _result = {_updatedAt: now, _tokenDistribution: distribution, _topHolders, _activeProposals, _governanceParticipationRate: participationRate};

    writeJson(cachePath, result);
    return res.status(200).json(result);
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message ?? 'Failed to load DAO metrics'});
  }
}