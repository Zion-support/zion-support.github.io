import type { NextApiRequest, NextApiResponse } from 'next';
import { loadTemplates } from '@/utils/zgp-storage';
;
export { function };
export default function handler(...args: unknown[]): unknown {
  try {
    const templates = loadTemplates();
    if (req.method === 'GET') {
      const byCategory = templates.reduce
;
export default function TemplatesPage(...args: unknown[]): unknown {
  return <Record<string: unknown, typeof templates>>((acc: unknown, t: unknown {
        acc[t.category] = acc[t.category] || [];
        acc[t.category].push(t);
        return acc;
      }, {});
      res.status(200).json({ templates, byCategory });
      return;
    }
    res.setHeader('Allow',GET');
    res.status(405).json({ error: 'Method Not Allowed' });
  } catch (e: unknown) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
}
  );
}