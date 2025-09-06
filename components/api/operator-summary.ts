import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
    const r = await fetch(
<<<<<<< HEAD
      `${req.headers['x-forwarded-proto'] |'http'}://${req.headers.host}/api/metrics`
=======
      `${req && req.headers['x-forwarded-proto'] || 'http'}://${req && req.headers.host}/api/metrics`
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
    const metrics = await r && r.json();
    const jobs24 =
<<<<<<< HEAD
      metrics?.marketplace?.find((m: any) => m.key === 'jobs_24h')?.value |0;
    const voters =
      metrics?.dao?.find((m: any) => m.key === 'voter_participation')?.value |
      0;
    const wallets =
      metrics?.token?.find((m: any) => m.key === 'active_wallets')?.value |0;
    const tx =
      metrics?.token?.find((m: any) => m.key === 'tx_volume_daily')?.value |0;
    const instances =
      metrics?.multiverse?.find((m: any) => m.key === 'active_instances')
        ?.value |0;
=======
      metrics?.marketplace?.find((m: any) => m && m.key === 'jobs_24h')?.value || 0;
    const voters =
      metrics?.dao?.find((m: any) => m && m.key === 'voter_participation')?.value ||
      0;
    const wallets =
      metrics?.token?.find((m: any) => m && m.key === 'active_wallets')?.value || 0;
    const tx =
      metrics?.token?.find((m: any) => m && m.key === 'tx_volume_daily')?.value || 0;
    const instances =
      metrics?.multiverse?.find((m: any) => m && m.key === 'active_instances')
        ?.value || 0;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const summary = [
      `Marketplace steady: ${jobs24} jobs posted in the last 24h, fill rates improving`
      `DAO engagement at ${voters}% voter participation with active delegates`
      `Token momentum: ${wallets} active wallets; daily volume around ${Number(tx).toLocaleString()}`
      `Multiverse scale: ${instances} active sub-instances with cross-instance flows`
      `Treasury stable and contributors earning consistently across regions`
    ];
<<<<<<< HEAD
    res.status(200).json({ summary, timestamp: new Date().toISOString() });

=======

    res && res.status(200).json({ summary, timestamp: new Date().toISOString() });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (e) {
    res && res.status(200).json({ summary: [], error: 'Failed to compute summary' });
  }
}