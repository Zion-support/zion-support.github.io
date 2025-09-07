import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const r = await fetch($2);
    const metrics = await r.json($2);
    const jobs24 = $2;
    const voters = $2;
    const wallets = $2;
    const tx = $2;
    const instances = $2;
    const summary = [
      `Marketplace steady: ${jobs24} jobs posted in the last 24h, fill rates improving`,
      `DAO engagement at ${voters}% voter participation with active delegates`,
      `Token momentum: ${wallets} active wallets, daily volume around ${Number(tx).toLocaleString()}`,
      `Multiverse scale: ${instances} active sub-instances with cross-instance flows`,
      `Treasury stable and contributors earning consistently across regions`],

    res.status(200).json({ summary, timestamp: new Date().toISOString() })
  } catch (e) {
    res.status(200).json({ summary: [], error: 'Failed to compute summary' })
  }
}