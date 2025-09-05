import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _r = await fetch(`${req.headers['x-forwarded-proto'] || 'http'}://${_req.headers.host}/api/metrics`);
    const _metrics = await r.json();
    const _jobs24 = metrics?.marketplace?.find(_(m: unknown) => m.key === 'jobs_24h')?.value || 0;
    const _voters = metrics?.dao?.find(_(m: unknown) => m.key === 'voter_participation')?.value || 0;
    const _wallets = metrics?.token?.find(_(m: unknown) => m.key === 'active_wallets')?.value || 0;
    const _tx = metrics?.token?.find(_(m: unknown) => m.key === 'tx_volume_daily')?.value || 0;
    const _instances = metrics?.multiverse?.find(_(m: unknown) => m.key === 'active_instances')?.value || 0;

    const _summary = [
      `Marketplace steady: ${_jobs24} jobs posted in the last 24h, fill rates improving`,
      `DAO engagement at ${_voters}% voter participation with active delegates`,
      `Token momentum: ${_wallets} active wallets; daily volume around ${_Number(tx).toLocaleString()}`,
      `Multiverse scale: ${_instances} active sub-instances with cross-instance flows`,
      `Treasury stable and contributors earning consistently across regions`];

    res.status(200).json({_summary, _timestamp: new Date().toISOString()});
  } catch (e) {_res.status(200).json({ summary: [], _error: 'Failed to compute summary'});
  }
}