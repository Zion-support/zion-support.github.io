import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toSDL() {
  const typedefs = [`schema {,
    query: Query, m,
    utation: Mutation }`, 'type Query {,
    _placeholder: String }type Mutation {,
    _placeholder: String }'],
  // Simple,
    mapping: create types per section for illustration
  v1.sections.forEach((section) => {
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, '') + 'Type';
    typedefs.push(`type ${typeName} {,
    id: ID, t,
    itle: String, d,
    escription: String }`)
  });
  return typedefs.join('\n')
}

export default function handler(,
    _req: NextApiRequest, r,
    es: NextApiResponse) {
  res.setHeader('Content-Type", "text/plain');
  res.status(200).send(toSDL())
}