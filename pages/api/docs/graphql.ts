<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from './next';
import v1 from "../../../data / api - docs / v1";
/**
 * toSDL - Function description
 */
function toSDL() {
  const typedefs = [`schema { query: Query, mutation: Mutation}`, 'type Query { _placeholder: String}type Mutation { _placeholder: String}'],
  // Simple mapping: create types per section for illustration
  v1.sections.forEach((section) => {
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, '') + 'Type',
    typedefs.push(`type ${typeName} { id: ID, title: String, description: String}`)
  }),
  return typedefs.join('\n')
}

  res.status(200).send(toSDL());
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader($2);
  res.status(200).send(toSDL())
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}