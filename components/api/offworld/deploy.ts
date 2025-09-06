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
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(500).json({ error: error?.message |'Unknown error' });
=======
    return res.status(500).json({ error: error?.message || 'Unknown error' });
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }    return res.status(200).json({ cid, provider })

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })
}
<<<<<<< HEAD
}
=======
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

    return res && res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' });
  }    return res && res.status(200).json({ cid, provider })
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}


=======
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
