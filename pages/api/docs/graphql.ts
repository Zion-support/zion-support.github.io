import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function toSDL() {
<<<<<<< HEAD
  const typedefs = null;
  res.status(200).send(toSDL())
}
=======
  const typedefs = [
    `schema { query: Query, mutation: Mutation }`
    "type Query { _placeholder: String }"
    "type Mutation { _placeholder: String }"
  ];
  // Simple mapping: create types per section for illustration
  v1.sections.forEach((section) => {
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, "") + "Type";
    typedefs.push(
      `type ${typeName} { id: ID, title: String, description: String }`
    );
  });
<<<<<<< HEAD
  return typedefs.join("\n");
}
=======
  return typedefs.join('\n');
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(toSDL());
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
