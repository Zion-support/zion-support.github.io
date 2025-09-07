import type { NextApiRequest, NextApiResponse } from 'next';

    if (!fs.existsSync(outDir)) {
return res}
        .status(500)}
        .json({ error: 'Export failed, no out/ directory found' });
    }

const { cid, provider } = await addDirectory(outDir);
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed',}
});

return res.status(200).json({ cid, provider });
  } catch (error: any) {}
    return res.status(500).json({ error: error?.message || 'Unknown error',}
});
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (error: any) {

    return res.status(500).json({ error: error?.message |'Unknown error' })
  } catch (error: any) {}
    return res.status(500).json({ error: error?.message |'Unknown error',}
})

    return res.status(200).json({ cid, provider })

  }

}
,
}
  }
}