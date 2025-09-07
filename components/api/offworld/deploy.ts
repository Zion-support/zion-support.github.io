import type { NextApiRequest, NextApiResponse } from 'next';

}
const outDir = null;}
    return res.status(200).json({ cid, provider })export default async function handler() {if (req.method !== 'POST')return res.status(405).json({ error: 'Method not allowed',}
})try {// Ensure export;}
}
const outDir = path.resolve(process.cwd(), 'out')try {execSync('npm run export', { stdio: 'inherit' },
} catch (e) {// attempt minimal static export;}
      try {execSync('next build && next export', { stdio: 'inherit' })} catch (e2) {}
   ,
}

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

  } catch (error: any) {}
    return res.status(500).json({ error: error?.message |'Unknown error',}
})
    return res && res.status(200).json({ cid, provider });
  } catch (error: any) {}
    return res && res.status(500).json({ error: error?.message || 'Unknown error',}
});
  }    return res && res.status(200).json({ cid, provider })
  } catch (error: any) {}
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
 ,
};

}
  try {// Ensure export;}
}
const out_dir = path.resolve (process.cwd (), 'out')try {exec_sync ('npm run export', { stdio: 'inherit' },
} catch (e) {// attempt minimal static export;}
      try {exec_sync ('next build && next export', { stdio: 'inherit' })} catch (e2) {}
   ,
}
    if () {) {$2;}
}
      return res;
        .status (500).json ({ error: 'Export failed, no out/ directory found' })}      exec_sync ('npm run export', { stdio: 'inherit' },
} catch (e) {// attempt minimal static export;}
      try {exec_sync ('next build && next export', { stdio: 'inherit' },
}
    if () {) {$2;}
}
      return res;
        .status (500).json ({ error: 'Export failed, no out/ directory found' })return res.status (500).json ({ error: 'Export failed, no out/ directory found' })}

const { cid, provider } = await add_directory (out_dir)if (return res.status (500).json ({ error: 'IPFS upload failed',}
})) {$2;}
}
    return res.status (200).json ({ cid, provider })} catch (error: any) {return res.status (500).json ({ error: error?.message || 'Unknown error' },
}    return res.status (200).json ({ cid, provider })} catch (error: any) {return res.status (500).json ({ error: error?.message || 'Unknown error' })}
}
    return res.status(500).json({ error: error?.message || 'Unknown error' })}}
}
  }

}
,
}
  }
}
}
origin/cursor/automate-test-improve-and-merge-code-2533

