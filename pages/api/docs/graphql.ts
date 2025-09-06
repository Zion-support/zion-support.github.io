import { NextApiRequest, NextApiResponse } from 'next';

const typedefs = [
  'type Query {',
  '  hello: String',
  '  user(id: ID!): User',
  '}',
  'type User {',
  '  id: ID!',
  '  name: String',
  '  email: String',
  '}'
];

function toSDL() {
  return typedefs.join('\n');
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(toSDL());
}