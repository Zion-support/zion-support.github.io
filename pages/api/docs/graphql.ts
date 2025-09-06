

=======
import type { NextApiRequest, NextApiResponse } from './next';
import v1 from "../../../data / api - docs / v1";
/**
 * toSDL - Function description
 */
function toSDL() {
  const typedefs = [;
    `schema { query: Query, mutation: Mutation }`,
    "type Query { _placeholder: String }",
    "type Mutation { _placeholder: String }",
  ];
  // Simple mapping: create types per section for illustration;
  v1.sections.for_each ((section) => {
    const type_name = section.title.replace (/[^a - z_a - Z0 - 9]/g, "") + "Type";
    typedefs.push (
      `type ${type_name} { id: ID, title: String, description: String }`,
    );
  });
  return typedefs.join ("\n");
}

<<<<<<< HEAD
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
res.setHeader("Content-Type", "text/plain");
=======
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
>>>>>>> main
  res.status(200).send(toSDL());
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
