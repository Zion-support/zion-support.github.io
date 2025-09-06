import type { NextApiRequest, NextApiResponse } from 'next';
import { readFile, writeFile } from '../../../utils/fsdb';

const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes
const cachePath = 'dao-metrics-cache.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check cache first
    const cached = readFile(cachePath, null);
    if (cached && Date.now() - cached.updatedAt < CACHE_DURATION_MS) {
      return res.status(200).json(cached);
    }

    // TODO: Replace with actual data sources
    // For now, return mock data
    const now = Date.now();
    
    // Mock token distribution data
    const mockHolders = [
      { address: '0x1234...5678', amount: '1000000' },
      { address: '0x2345...6789', amount: '500000' },
      { address: '0x3456...7890', amount: '250000' }
    ];

    const entries = mockHolders.map(h => ({
      address: h.address,
      amount: h.amount,
      netDelta: BigInt(h.amount)
    }));

    const topHolders = entries.map((e) => ({ address: e.address, amount: e.netDelta.toString() }));

    // Token distribution buckets (very rough: based on netDelta approximation)
    const total = entries.reduce((acc, e) => acc + (BigInt(e.amount) > 0n ? BigInt(e.amount) : 0n), 0n);
    const distribution = entries.map((e) => ({
      address: e.address,
      percent: total > 0n ? Number((BigInt(e.amount) * 10000n) / total) / 100 : 0
    }));

    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.
    const activeProposals: any[] = [];

    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample)
    const uniqueAddresses = new Set(entries.map(e => e.address.toLowerCase()));
    const participationRate = uniqueAddresses.size ? Math.min(100, Math.round((uniqueAddresses.size / Math.max(10, uniqueAddresses.size)) * 100)) : 0;

    const result = {
      updatedAt: now,
      tokenDistribution: distribution,
      topHolders,
      activeProposals,
      governanceParticipationRate: participationRate
    };

    writeFile(cachePath, result);
    return res.status(200).json(result);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to load DAO metrics' });
  }
}