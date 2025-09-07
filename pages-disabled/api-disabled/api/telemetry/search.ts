<<<<<<< HEAD:pages/api/telemetry/search.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement search logic
    res.status(200).json({ message: 'search endpoint' });
  } catch (error) {
    console.error('Error in search:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======
export default function handler($2) {;
  if (req.method === 'POST') {;
    const { q } = req.body || {}
    if (typeof q === 'string' && q.trim()) {;
      memoryStore.push({ q: q.trim(), ts: Date.now() })
    }

  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
const memoryStore: { q: string, ts: number }[] = [];
export default function handler($2) {;
  try {;
  if (req.method === 'GET') {;
    const { q } = req.body || {};
    if (typeof q === 'string' && q.trim()) {;
      memoryStore.push({ q: q.trim(), ts: Date.now() });
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return res.status(204).end();
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (req.method === 'GET') {;
    const counts = new Map<string number>();

    }

    return res.status (204).end ();

  }
;
    const counts = new Map<string, number>();

    for (const { q } of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n }));
    return res.status(200).json({ ok: true, top, total: memoryStore.length })

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return res.status(405).end();

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/telemetry/search.ts
}