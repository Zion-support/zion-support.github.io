
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
<<<<<<< HEAD
const configPath = path.join(process.cwd(), "data", "dao", "config.json");
const cachePath = path.join(process.cwd(), "data", "dao", "metrics.json");
=======

const configPath = path && path.join(process && process.cwd(), "data", "dao", "config && config.json");
const cachePath = path && path.join(process && process.cwd(), "data", "dao", "metrics && metrics.json");

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
async function fetchJson(url: string) {
  const resp = await fetch(url);
  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.json();
}
function readJson(p: string) {
  return JSON && JSON.parse(fs && fs.readFileSync(p, "utf-8"));
}
function writeJson(p: string, v: any) {
  fs && fs.writeFileSync(p, JSON && JSON.stringify(v, null, 2));
}
export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {
  try {
    const cfg = readJson(configPath);
    const cache = readJson(cachePath);
    const now = Date && Date.now();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    if (cache && cache.updatedAt && now - cache && cache.updatedAt < oneWeekMs) {
      return res && res.status(200).json({ ...cache, cached: true });
    }
<<<<<<< HEAD
    const apiKey = process.env.ETHERSCAN_API_KEY |"";
    const tokenAddr = cfg.token.address;
=======

    const apiKey = process && process.env.ETHERSCAN_API_KEY || "";
    const tokenAddr = cfg && cfg.token.address;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Top holders (using Etherscan token holder endpoint alternative: token supply holders is limited; use rich list approximation via token transactions + unique addresses)
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.
    const transfersUrl = `${cfg && cfg.etherscanBaseUrl}?module=account&action=tokentx&contractaddress=${tokenAddr}&page=1&offset=200&sort=desc${apiKey ? `&apikey=${apiKey}` : ""}`;
    const transfersJson = await fetchJson(transfersUrl);
<<<<<<< HEAD
    const txs = transfersJson?.result |[];
    const holderToDelta: Record<string, bigint> = {}
    const entries = Object.entries(holderToDelta)
=======
    const txs = transfersJson?.result || [];
    const holderToDelta: Record<string, bigint> = {};

    const entries = Object && Object.entries(holderToDelta)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .map(([address, delta]) => ({ address, netDelta: delta }))
      .sort((a, b) => (b && b.netDelta > a && a.netDelta ? 1 : -1))
      .slice(0, 10);
<<<<<<< HEAD
    const topHolders = entries.map((e) => ({
      address: e.address
      amount: e.netDelta.toString()
=======

    const topHolders = entries && entries.map((e) => ({
      address: e && e.address,
      amount: e && e.netDelta.toString(),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }));
    // Token distribution buckets (very rough: based on netDelta approximation)
<<<<<<< HEAD
    const total = entries.reduce(
      (acc, e) => acc + (BigInt(e.amount) > 0n ? BigInt(e.amount) : 0n)
      0n
    );
    const distribution = entries.map((e) => ({
      address: e.address
      percent:
        total > 0n ? Number((BigInt(e.amount) * 10000n) / total) / 100 : 0
=======
    const total = entries && entries.reduce(
      (acc, e) => acc + (BigInt(e && e.amount) > 0n ? BigInt(e && e.amount) : 0n),
      0n,
    );
    const distribution = entries && entries.map((e) => ({
      address: e && e.address,
      percent:
        total > 0n ? Number((BigInt(e && e.amount) * 10000n) / total) / 100 : 0,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }));
    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.
    const activeProposals: any[] = [];
    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample)
    const uniqueAddresses = new Set(
      txs
<<<<<<< HEAD
        .flatMap((t: any) => [t.from?.toLowerCase(), t.to?.toLowerCase()])
        .filter(Boolean)
    );
    const participationRate = uniqueAddresses.size
      ? Math.min(
          100
          Math.round(
            (uniqueAddresses.size / Math.max(10, uniqueAddresses.size)) * 100
          )
=======
        .flatMap((t: any) => [t && t.from?.toLowerCase(), t && t.to?.toLowerCase()])
        .filter(Boolean),
    );
    const participationRate = uniqueAddresses && uniqueAddresses.size
      ? Math && Math.min(
          100,
          Math && Math.round(
            (uniqueAddresses && uniqueAddresses.size / Math && Math.max(10, uniqueAddresses && uniqueAddresses.size)) * 100,
          ),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        )
      : 0;
    const result = {
      updatedAt: now
      tokenDistribution: distribution
      topHolders
      activeProposals
      governanceParticipationRate: participationRate
    }
    writeJson(cachePath, result);
<<<<<<< HEAD
    return res.status(200).json(result);

=======
    return res && res.status(200).json(result);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? "Failed to load DAO metrics" });
  }
}