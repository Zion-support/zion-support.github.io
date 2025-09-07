

<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/docs/graphql.ts
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/docs/graphql.ts
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextApiRequest, NextApiResponse } from './next';
import v1 from "../../../data / api - docs / v1";
/**
 * toSDL - Function description
 */
function toSDL() {
  const typedefs = [;
    `schema { query: Query, mutation: Mutation }`
    "type Query { _placeholder: String }"
    "type Mutation { _placeholder: String }"
  ];
  // Simple mapping: create types per section for illustration;
  v1.sections.for_each ((section) => {
    const type_name = section.title.replace (/[^a - z_a - Z0 - 9]/g, "") + "Type";
    typedefs.push (
      `type ${type_name} { id: ID, title: String, description: String }`
    );
  });
  return typedefs.join ("\n");
}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/docs/graphql.ts
<<<<<<< HEAD
=======
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/docs/graphql.ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  res.status(200).send(toSDL());
}



import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toSDL() {
  return typedefs.join('\n');
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(toSDL());
}
origin/cursor/automate-test-improve-and-merge-code-2533
