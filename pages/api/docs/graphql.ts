<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function toSDL() {
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  return typedefs.join("\n");
}
<<<<<<< HEAD
=======
  return typedefs.join('\n');
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(toSDL());
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
=======

export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
res.setHeader("Content-Type", "text/plain");
  res.status(200).send(toSDL());
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function toSDL() {;
  const typedefs = [`schema { query: Query, mutation: Mutation }`, 'type Query { _placeholder: String }type Mutation { _placeholder: String }'],;
  // Simple mapping: create types per section for illustration;
  v1.sections.forEach((section) => {;
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, '') + 'Type',;
    typedefs.push(`type ${typeName} { id: ID, title: String, description: String }`);
  }),;
  return typedefs.join('\n');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler(req, res) {
  try {
  res.setHeader('Content-Typetext/plain');
  res.status(200).send(toSDL());
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
