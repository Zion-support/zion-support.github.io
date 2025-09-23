import type { NextApiRequest, NextApiResponse } from 'next';


  try {
    // Ensure export
    const outDir = path && path.resolve(process && process.cwd(), 'out');
    try {


    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' })


    }
    const { cid, provider } = await addDirectory(outDir);

    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });

    return res.status(200).json({ cid, provider });
  } catch (error: any) {

    return res.status(500).json({ error: error?.message |'Unknown error' });
    return res.status(500).json({ error: error?.message || 'Unknown error' });

  }    return res.status(200).json({ cid, provider })

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })
}


}


    return res && res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' });
  }    return res && res.status(200).json({ cid, provider })
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
  };
}






>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



