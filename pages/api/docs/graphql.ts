<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";

function toSDL() {




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


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
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "text / plain");
  res.status (200).send (toSDL ());
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
