import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
<<<<<<< HEAD

function toSDL() {
  const typedefs = [
    `schema { query: Query, mutation: Mutation }`,
    'type Query { _placeholder: String }',
    'type Mutation { _placeholder: String }',
  ];
=======
function toSDL() {
  const typedefs = [`schema { query: Query; mutation: Mutation }`, 'type Query { _placeholder: String }type Mutation { _placeholder: String }'];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  // Simple mapping: create types per section for illustration
  v1.sections.forEach(section => {
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, '') + 'Type';
<<<<<<< HEAD
    typedefs.push(
      `type ${typeName} { id: ID, title: String, description: String }`
    );
  });
  return typedefs.join('\n');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(toSDL());
=======
    typedefs.push(`type ${typeName} { id: ID, title: String, description: String }`);
  });
  return typedefs.join('\n');
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(toSDL());
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
