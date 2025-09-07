;
const memoryStore: { q: string, ts: number }[] = []

    return res.status (204).end ();

  }

    const counts = new Map<string, number>();
    for (const { q } of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n }));

const memoryStore: { q: string, ts: number }[] = [],

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;