

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
v1 && v1.sections.forEach((section) => {
    const typeName = section && section.title.replace(/[^a-zA-Z0-9]/g, "") + "Type";
    typedefs && typedefs.push(
      `type ${typeName} { id: ID, title: String, description: String }`,
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
function toSDL() {

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
  return typedefs && typedefs.join("\n");
}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(toSDL());
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


