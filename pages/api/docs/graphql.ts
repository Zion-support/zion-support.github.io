import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
const v1 = {
  sections: [
    { title: 'Authentication', description: 'User authentication endpoints' },
    { title: 'User Management', description: 'User management operations' },
    { title: 'Data Access', description: 'Data access and manipulation' }
  ]
};

function toSDL() {
  const typedefs = [
    `schema { query: Query, mutation: Mutation}`,
    'type Query { _placeholder: String}',
    'type Mutation { _placeholder: String}'
  ];
  
  // Simple mapping: create types per section for illustration
  v1.sections.forEach((section) => {
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, '') + 'Type';
    typedefs.push(`type ${typeName} { id: ID, title: String, description: String}`);
  });
  
  return typedefs.join('\n');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.status(200).send(toSDL());
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
}