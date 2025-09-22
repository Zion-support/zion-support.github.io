:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD

import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const configPath = path.join(process.cwd(), "data", "dao", "config.json");
const cachePath = path.join(process.cwd(), "data", "dao", "metrics.json");
:pages_backup/api/dao/metrics.ts
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const configPath = null;
    return res.status(200).json(result)
origin/cursor/automate-test-improve-and-merge-code-2533
async function fetchJson(url: string) {
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/dao/metrics.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
:pages/api-disabled/api/dao/metrics.ts
;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts

const configPath = path && path.join(process && process.cwd(), "data", "dao", "config && config.json");
const cachePath = path && path.join(process && process.cwd(), "data", "dao", "metrics && metrics.json");
;

:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
async function fetchJson(url: string) {;
async function fetchJson(url: string) {
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
  const resp = await fetch(url);
;
const configPath = path.join(process.cwd(), 'datadaoconfig.json'),;
const cachePath = path.join(process.cwd(), 'datadaometrics.json'),;
async function fetchJson(url: string) {;
;

:pages_backup/api/dao/metrics.ts

<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
:pages/api/dao/metrics.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
const configPath = path.join(process.cwd(), "data", "dao", "config.json");
const cachePath = path.join(process.cwd(), "data", "dao", "metrics.json");
:pages/api/dao/metrics.ts

async function fetchJson(url: string) {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

}

const configPath = path && path.join(process && process.cwd(), "data", "dao", "config && config.json");
const cachePath = path && path.join(process && process.cwd(), "data", "dao", "metrics && metrics.json");
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/dao/metrics.ts

:pages_backup/api/dao/metrics.ts
function readJson(p: string) {

}
function writeJson(p: string, v: any) {
  fs.writeFileSync(p, JSON.stringify(v, null, 2));
  return resp.json();
:pages/api-disabled/api/dao/metrics.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/api/dao/metrics.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/dao/metrics.ts

function readJson(p: string) {
=======
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
;

function readJson(p: string) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/dao/metrics.ts
  return JSON.parse(fs.readFileSync(p, "utf-8"));

========

  return resp.json();

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, "utf-8"));
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

  return resp.json();

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, "utf-8"));
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}

}

}

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, "utf-8"));
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
;
function readJson(p: string) {;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
}
function writeJson(p: string, v: any) {;
  fs && fs.writeFileSync(p, JSON && JSON.stringify(v, null, 2));
}

}
;
function readJson(p: string) {;

:pages_backup/api/dao/metrics.ts

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {;
  return JSON.parse(fs.readFileSync(p, "utf-8"));
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
=======
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  return JSON.parse(fs.readFileSync(p, "utf-8"));
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts

function readJson(p: string) {;
  return JSON.parse(fs.readFileSync(p, "utf-8"));
:pages_backup/api/dao/metrics.ts
;
function readJson(p: string) {;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
}
function writeJson(p: string, v: any) {;
=======
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
}

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
origin/cursor/automate-test-improve-and-merge-code-2533
}

function writeJson(p: string, v: any) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/dao/metrics.ts
  fs.writeFileSync(p, JSON.stringify(v, null, 2));
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api/dao/metrics.ts
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts

:pages_backup/api/dao/metrics.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/dao/metrics.ts
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/dao/metrics.ts
========

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  fs.writeFileSync(p, JSON.stringify(v, null, 2))
}

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
export default async function handler(
  _req: NextApiRequest;
  res: NextApiResponse
:pages/api/dao/metrics.ts
) {
<<<<<<< HEAD
;
export default async function handler(req, res) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  try {

  try {;
;
export default async function handler(req, res) {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  try {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/dao/metrics.ts
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json()
}
<:pages/api-disabled/api/dao/metrics.ts
;
function readJson(p: string) {;
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}
;
function writeJson(p: string, v: any) {;
  fs.writeFileSync(p, JSON.stringify(v, null, 2))
}
;
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
:pages_backup/api/dao/metrics.ts

<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts

;
export default async function handler(req, res) {

:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
  try {
=======
ursor/fix-website-loading-errors-and-merge-6662
  try {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  try {;

;
export default async function handler(req, res) {

  try {;
;
export default async function handler(req, res) {

ursor/fix-website-loading-errors-and-merge-6662
  try {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
  try {;
;
export default async function handler(req, res) {;
  try {
;
export default async function handler(req, res) {
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
  try {;
;
export default async function handler(req, res) {;
  try {
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api/dao/metrics.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/dao/metrics.ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/dao/metrics.ts
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
try {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
    const cfg = readJson(configPath);
    const cache = readJson(cachePath);
    const now = Date && Date.now();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api/dao/metrics.ts
<<<<<<< HEAD
<<<<<<< HEAD

  }
    const uniqueAddresses = new Set(txs.flatMap((t: any) => [t.from?.toLowerCase(), t.to?.toLowerCase()]).filter(Boolean));
    const participationRate = uniqueAddresses.size ? Math.min(100, Math.round((uniqueAddresses.size / Math.max(10, uniqueAddresses.size)) * 100)) : 0;
    const result = {
      updatedAt: now, tokenDistribution: distribution,
      topHolders,
      activeProposals,
      governanceParticipationRate: participationRate
    };
    writeJson(cachePath, result);
    return res.status(200).json(result)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to load DAO metrics' })
  }
}
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/dao/metrics.ts
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
    }

:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
:pages/api-disabled/api/dao/metrics.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {
      return res.status(200).json({ ...cache, cached: true });
    }

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {
return res.status(200).json({ ...cache, cached: true });
    }
    const apiKey = process.env.ETHERSCAN_API_KEY |"";
    const tokenAddr = cfg.token.address;

// Top holders (using Etherscan token holder endpoint alternative: token supply holders is limited; use rich list approximation via token transactions + unique addresses)
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/dao/metrics.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.
=======
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/dao/metrics.ts
    const transfersUrl = `${cfg && cfg.etherscanBaseUrl}?module=account&action=tokentx&contractaddress=${tokenAddr}&page=1&offset=200&sort=desc${apiKey ? `&apikey=${apiKey}` : ""}`;
    const transfersJson = await fetchJson(transfersUrl);
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
;
    const txs = transfersJson?.result || [];
;
    const holderToDelta: Record<string, bigint> = {};
:pages/api-disabled/api/dao/metrics.ts
========
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {
      return res.status(200).json({ ...cache, cached: true })
    }
    // Top holders (using Etherscan token holder endpoint alternative: token supply holders is limited, use rich list approximation via token transactions + unique addresses)
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.
    const transfersUrl = `${cfg && cfg.etherscanBaseUrl}?module=account&action=tokentx&contractaddress=${tokenAddr}&page=1&offset=200&sort=desc${apiKey ? `&apikey=${apiKey}` : ""}`;
    const transfersJson = await fetchJson(transfersUrl);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
    const txs = transfersJson?.result || [];

    const holderToDelta: Record<string, bigint> = {};

:pages_backup/api/dao/metrics.ts

<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/dao/metrics.ts
    const entries = Object && Object.entries(holderToDelta)
    const entries = Object.entries(holderToDelta)
=======
    for (const tx of txs) {
      const value = BigInt(tx.value || '0');
      const from = (tx.from || '').toLowerCase();
      const to = (tx.to || '').toLowerCase();
      if (from) holderToDelta[from] = (holderToDelta[from] || 0n) - value;
      if (to) holderToDelta[to] = (holderToDelta[to] || 0n) + value
    }
    const entries = Object.entries(holderToDelta)
    const txs = transfersJson?.result || [];
    const holderToDelta: Record<string, bigint> = {};

origin/cursor/automate-test-improve-and-merge-code-2533
    const txs = transfersJson?.result || [];

    const holderToDelta: Record<string, bigint> = {};

    const entries = Object && Object.entries(holderToDelta)
    const entries = Object.entries(holderToDelta)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
origin/cursor/automate-test-improve-and-merge-code-2533
      .map(([address, delta]) => ({ address, netDelta: delta }))
      .sort((a, b) => (b && b.netDelta > a && a.netDelta ? 1 : -1))
      .slice(0, 10);
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    const topHolders = entries && entries.map((e) => ({
      address: e && e.address,
      amount: e && e.netDelta.toString(),

    }));
    // Token distribution buckets (very rough: based on netDelta approximation)

const topHolders = entries && entries.map((e) => ({
      address: e && e.address,
      amount: e && e.netDelta.toString(),
    }));
    // Token distribution buckets (very rough: based on netDelta approximation)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
    const total = entries && entries.reduce(
      (acc, e) => acc + (BigInt(e && e.amount) > 0n ? BigInt(e && e.amount) : 0n)
      0n
    );
:pages_backup/api/dao/metrics.ts
    const distribution = entries && entries.map((e) => ({;
      address: e && e.address;
      percent:;
        total > 0n ? Number((BigInt(e && e.amount) * 10000n) / total) / 100 : 0
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
=======
    const distribution = entries && entries.map((e) => ({
      address: e && e.address
      percent:

        total > 0n ? Number((BigInt(e && e.amount) * 10000n) / total) / 100 : 0,
        total > 0n ? Number((BigInt(e && e.amount) * 10000n) / total) / 100 : 0
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
    const topHolders = entries.map((e) => ({ address: e.address, amount: e.netDelta.toString() }));
    // Token distribution buckets (very rough: based on netDelta approximation);
    const total = entries.reduce((acc, e) => acc + (BigInt(e.amount) > 0n ? BigInt(e.amount) : 0n), 0n);
    const distribution = entries.map((e) => ({;
      address: e.address;
      percent: total > 0n ? Number((BigInt(e.amount) * 10000n) / total) / 100 : 0
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }));
    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.;
    const activeProposals: any[] = [];

    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample)
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
=======

        total > 0n ? Number((BigInt(e && e.amount) * 10000n) / total) / 100 : 0,

    }));
    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.
    const activeProposals: any[] = [];

    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample)

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
        .flatMap((t: any) => [t && t.from?.toLowerCase(), t && t.to?.toLowerCase()])

const topHolders = entries.map(e => ({
      address: e.address;
      amount: e.netDelta.toString();
    }));
    // Token distribution buckets (very rough: based on netDelta approximation)
    const total = entries.reduce(
      (acc, e) => acc + (BigInt(e.amount) > 0n ? BigInt(e.amount) : 0n)
      0n
    );
    const distribution = entries.map(e => ({
      address: e.address;
      percent:
        total > 0n ? Number((BigInt(e.amount) * 10000n) / total) / 100 : 0;
    }));
    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.
    const activeProposals: any[] = [];
// Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample)
    const uniqueAddresses = new Set(
      txs
        .flatMap((t: any) => [t.from?.toLowerCase(), t.to?.toLowerCase()])
origin/cursor/automate-test-improve-and-merge-code-2533
        .filter(Boolean)
    );
    const participationRate = uniqueAddresses && uniqueAddresses.size
      ? Math && Math.min(
          100;
          Math && Math.round(

            (uniqueAddresses && uniqueAddresses.size / Math && Math.max(10, uniqueAddresses && uniqueAddresses.size)) * 100,
          ),

            (uniqueAddresses && uniqueAddresses.size / Math && Math.max(10, uniqueAddresses && uniqueAddresses.size)) * 100,
          ),

            (uniqueAddresses && uniqueAddresses.size / Math && Math.max(10, uniqueAddresses && uniqueAddresses.size)) * 100
          )
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
        )
      : 0;
    const result = {;
      updatedAt: now;
      tokenDistribution: distribution;
      topHolders;
      activeProposals;
      governanceParticipationRate: participationRate
    }
    writeJson(cachePath, result);
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
import { NextApiRequest, NextApiResponse  } from './next';
import fs from './fs';
import path from './path';
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/dao/metrics.ts
========
import { NextApiRequest, NextApiResponse  } from './next';
import fs from './fs';
import path from './path';

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======
import { NextApiRequest, NextApiResponse  } from './next';
import fs from './fs';
import path from './path';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
return res && res.status(200).json(result);

    return res && res.status(200).json(result);

    return res && res.status(200).json(result);

import { NextApiRequest, NextApiResponse  } from './next';
import fs from './fs';
import path from './path';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
;
const config_path = path.join (process.cwd (), "data", "dao", "config.json");
const cache_path = path.join (process.cwd (), "data", "dao", "metrics.json");
;
async /**
 * fetch_json - Function description
 */;
function fetch_json() {;
  const resp = await fetch (url);
  if (throw new Error (`HTTP ${resp.status}`)) {
  $2
}
  return resp.json ();
}
/**
 * read_json - Function description
 */;
function read_json() {;
  return JSON.parse (fs.readFileSync (p, "utf - 8"));
}
/**
 * write_json - Function description
 */;
function write_json() {;
  fs.writeFileSync (p, JSON.stringify (v, null, 2));
}
export default async /**
 * handler - Function description
 */;
function handler() {;
  try {;
    const cfg = read_json (config_path);
    const cache = read_json (cache_path);
    const now = Date.now ();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    // Check condition;
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
    const top_holders = entries.map ((e) => ({;
      address: e.address;
      amount: e.net_delta.to_string ()
    }));
;
    // Token distribution buckets (very rough: based on net_delta approximation);
    const total = entries.reduce (
      (acc, e) => acc + (BigInt (e.amount) > 0n ? BigInt (e.amount) : 0n)
      0n
    );
    const distribution = entries.map ((e) => ({;
      address: e.address;
      percent:;
        total > 0n ? Number ((BigInt (e.amount) * 10000n) / total) / 100 : 0
    }));
;
    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.;
    const active_proposals: any[] = [];
;
    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample);
    const unique_addresses = new Set (;
      txs;
        .flat_map ((t: any) => [t.from?.toLowerCase (), t.to?.toLowerCase ()]);
        .filter (Boolean)
    );
    const participation_rate = unique_addresses.size;
      ? Math.min (
          100;
          Math.round (
            (unique_addresses.size / Math.max (10, unique_addresses.size)) * 100
          )
        );
      : 0;
;
    const result = {;
      updated_at: now;
      token_distribution: distribution;
      top_holders;
      active_proposals;
      governanceParticipationRate: participation_rate
    }
    write_json (cache_path, result);
    return res.status (200).json (result);
    return res.status(200).json(result);
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
:pages_backup/api/dao/metrics.ts
<<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
<<<<<<< HEAD:pages/api-disabled/api/dao/metrics.ts
  }
}
<<<<<<< HEAD
  } catch (error) {
=======
========
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
origin/cursor/integrate-build-improve-and-re-verify-2156
}
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

    return res;
      .status (500);
      .json ({ error: e?.message ?? "Failed to load DAO metrics" });
  }

}
}
}
  }
}
origin/cursor/integrate-build-improve-and-re-verify-2156
}
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
}
    return res
      .status(500)
      .json({ error: e?.message ?? "Failed to load DAO metrics" });
    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {;
      return res.status(200).json({ ...cache, cached: true });
:pages/api/dao/metrics.ts
      } catch (error) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
:pages/api/dao/metrics.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/dao/metrics.ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/dao/metrics.ts
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/dao/metrics.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  }
}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/dao/metrics.ts
