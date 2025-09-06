



import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
const configPath = path.join(process.cwd(), "data", "dao", "config.json");
const cachePath = path.join(process.cwd(), "data", "dao", "metrics.json");
async function fetchJson(url: string) {
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


const configPath = path && path.join(process && process.cwd(), "data", "dao", "config && config.json");
const cachePath = path && path.join(process && process.cwd(), "data", "dao", "metrics && metrics.json");



async function fetchJson(url: string) {
  const resp = await fetch(url);

const configPath = path.join(process.cwd(), 'datadaoconfig.json'),;
const cachePath = path.join(process.cwd(), 'datadaometrics.json'),;
async function fetchJson(url: string) {;



  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, "utf-8"));
;
function readJson(p: string) {;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
function writeJson(p: string, v: any) {
  fs.writeFileSync(p, JSON.stringify(v, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {

  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json()
}

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}

function writeJson(p: string, v: any) {
  fs.writeFileSync(p, JSON.stringify(v, null, 2))
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {

=======

;
export default async function handler(req, res) {

=======
  try {;
;
export default async function handler(req, res) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  try {
    const cfg = readJson(configPath);
    const cache = readJson(cachePath);
    const now = Date && Date.now();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {
      return res.status(200).json({ ...cache, cached: true });
    }



    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.
    const transfersUrl = `${cfg && cfg.etherscanBaseUrl}?module=account&action=tokentx&contractaddress=${tokenAddr}&page=1&offset=200&sort=desc${apiKey ? `&apikey=${apiKey}` : ""}`;
    const transfersJson = await fetchJson(transfersUrl);

    const txs = transfersJson?.result || [];

    const holderToDelta: Record<string, bigint> = {};


    const entries = Object && Object.entries(holderToDelta)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .map(([address, delta]) => ({ address, netDelta: delta }))
      .sort((a, b) => (b && b.netDelta > a && a.netDelta ? 1 : -1))
      .slice(0, 10);


    const topHolders = entries && entries.map((e) => ({
      address: e && e.address,
      amount: e && e.netDelta.toString(),

    }));
    // Token distribution buckets (very rough: based on netDelta approximation)

    const total = entries && entries.reduce(
      (acc, e) => acc + (BigInt(e && e.amount) > 0n ? BigInt(e && e.amount) : 0n),
      0n,
    );
    const distribution = entries && entries.map((e) => ({
      address: e && e.address,
      percent:
        total > 0n ? Number((BigInt(e && e.amount) * 10000n) / total) / 100 : 0,

    }));
    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.
    const activeProposals: any[] = [];


    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample)

        .flatMap((t: any) => [t && t.from?.toLowerCase(), t && t.to?.toLowerCase()])
        .filter(Boolean),
    );
    const participationRate = uniqueAddresses && uniqueAddresses.size
      ? Math && Math.min(
          100,
          Math && Math.round(
            (uniqueAddresses && uniqueAddresses.size / Math && Math.max(10, uniqueAddresses && uniqueAddresses.size)) * 100,
          ),

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

  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? "Failed to load DAO metrics" });
    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {;
      return res.status(200).json({ ...cache, cached: true });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
const config_path = path.join (process.cwd (), "data", "dao", "config.json");
const cache_path = path.join (process.cwd (), "data", "dao", "metrics.json");
;
async /**
 * fetch_json - Function description
 */
function fetch_json() {
  const resp = await fetch (url);
  if (throw new Error (`HTTP ${resp.status}`)) {
  $2
}
  return resp.json ();
}
/**
 * read_json - Function description
 */
function read_json() {
  return JSON.parse (fs.readFileSync (p, "utf - 8"));
}
/**
 * write_json - Function description
 */
function write_json() {
  fs.writeFileSync (p, JSON.stringify (v, null, 2));
}
export default async /**
 * handler - Function description
 */
function handler() {
  try {
    const cfg = read_json (config_path);
    const cache = read_json (cache_path);
    const now = Date.now ();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ ...cache, cached: true });
    }
    const api_key = process.env.ETHERSCAN_API_KEY || "";
    const token_addr = cfg.token.address;
;
    // Top holders (using Etherscan token holder endpoint alternative: token supply holders is limited; use rich list approximation via token transactions + unique addresses);
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.;
    const transfers_url = `${cfg.etherscanBaseUrl}?module = account & action = tokentx & contractaddress=${token_addr}&page = 1&offset = 200 & sort = desc${api_key ? `&apikey=${api_key}` : ""}`;
    const transfers_json = await fetch_json (transfers_url);
    const txs = transfers_json?.result || [];
    const holderToDelta: Record < string, bigint> = {}
;
    const entries = Object.entries (holderToDelta);
      .map (([address, delta]) => ({ address, net_delta: delta }));
      .sort ((a, b) => (b.net_delta > a.net_delta ? 1 : -1));
      .slice (0, 10);
;
    const top_holders = entries.map ((e) => ({
      address: e.address,
      amount: e.net_delta.to_string (),
    }));
;
    // Token distribution buckets (very rough: based on net_delta approximation);
    const total = entries.reduce (
      (acc, e) => acc + (BigInt (e.amount) > 0n ? BigInt (e.amount) : 0n),
      0n,
    );
    const distribution = entries.map ((e) => ({
      address: e.address,
      percent:;
        total > 0n ? Number ((BigInt (e.amount) * 10000n) / total) / 100 : 0,
    }));
;
    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.;
    const active_proposals: any[] = [];
;
    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample);
    const unique_addresses = new Set (
      txs;
        .flat_map ((t: any) => [t.from?.toLowerCase (), t.to?.toLowerCase ()]);
        .filter (Boolean),
    );
    const participation_rate = unique_addresses.size;
      ? Math.min (
          100,
          Math.round (
            (unique_addresses.size / Math.max (10, unique_addresses.size)) * 100,
          ),
        );
      : 0;
;
    const result = {
      updated_at: now,
      token_distribution: distribution,
      top_holders,
      active_proposals,
      governanceParticipationRate: participation_rate,
    }
    write_json (cache_path, result);
    return res.status (200).json (result);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch (e: any) {

    return res;
      .status (500);
      .json ({ error: e?.message ?? "Failed to load DAO metrics" });
  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
