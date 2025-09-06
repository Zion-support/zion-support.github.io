import type { NextApiRequest, NextApiResponse } from 'next';

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    // Ensure export
    const outDir = path && path.resolve(process && process.cwd(), 'out');
    try {

    } catch (e) {
      // attempt minimal static export try {
        execSync('next build && next export', { stdio: 'inherit' })

  }    return res.status(200).json({ cid, provider })

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })
    if (!cid) return res && res.status(500).json({ error: 'IPFS upload failed' });
    return res && res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' });
  }    return res && res.status(200).json({ cid, provider })
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
  };
}
=======


=======

    return res.status(500).json({ error: error?.message || 'Unknown error' });

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
