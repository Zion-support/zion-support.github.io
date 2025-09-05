import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const svg = `<?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?><svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;800&quot; height=&quot;300&quot;><rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;#eef2ff&quot;/><text x=&quot;50%&quot; y=&quot;50%&quot; dominant-baseline=&quot;middle&quot; text-anchor=&quot;middle&quot; font-size=&quot;20&quot; fill=&quot;#1f2937&quot;>Global User Breakdown (placeholder)</text></svg>`;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
}