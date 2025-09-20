
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
function toSDL() {,
import type { NextApiRequest, NextApiResponse } from './next';
import v1 from "../../../data / api - docs / v1";
/**,
 * toSDL - Function description,
 */,
function toSDL() {,
  const typedefs = [,
    `schema { query: Query, mutation: Mutation ,}`,
    "type Query { _placeholder: String ,}",
    "type Mutation { _placeholder: String ,}",
  ];
  // Simple mapping: create types per section for illustration,
  v1.sections.forEach((section) => {,
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, "") + "Type";
    typedefs.push(,
      `type ${typeName} { id: ID, title: String, description: String ,}`,
    );
  });
  return typedefs.join("\n");
}
,
function toSDL() {;
  const typedefs = [`schema { query: Query, mutation: Mutation ,}`, 'type Query { _placeholder: String ,}type Mutation { _placeholder: String ,}'];
  // Simple mapping: create types per section for illustration;
  v1.sections.forEach((section) => {;
    const typeName = section.title.replace(/[^a-zA-Z0-9]/g, '') + 'Type';
    typedefs.push(`type ${typeName} { id: ID, title: String, description: String ,}`);
  });
  return typedefs.join('\n');
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
export default function handler(req, res) {,
  try {,
  res.setHeader('Content-Typetext/plain');
  res.status(200).send(toSDL());
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,