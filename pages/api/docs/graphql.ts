import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
function toSDL() {
  const typedefs = [`schema { query: Query, mutation: Mutation }`, 'type Query { _placeholder: String }type Mutation { _placeholder: String }'];
  // Simple mapping: create types per section for illustration
  v1.sections.forEach((section) => {
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, '') + 'Type';
    typedefs.push(`type ${typeName} { id: ID, title: String, description: String }`)
  });
  return typedefs.join('\n')
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(toSDL());
=======
function toSDL() {
  const typedefs = [`schema { query: Query, mutation: Mutation }`, 'type Query { _placeholder: String }type Mutation { _placeholder: String }'];
  // Simple mapping: create types per section for illustration
  v1.sections.forEach((section) => {
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, '') + 'Type';
    typedefs.push(`type ${typeName} { id: ID, title: String, description: String }`)
  });
  return typedefs.join('\n')
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typetext/plain');
  res.status(200).send(toSDL())
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('Content-Typetext/plain');
  res.status(200).send(toSDL())
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
