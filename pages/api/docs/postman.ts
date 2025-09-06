function toPostman() {
  return {
    info: {

      { key: "baseUrl", value: "https://api.zion.os" }
      { key: "token", value: "" }
    ]
  }

}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
}

=======
      
      name: 'Zion OS API',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
=======
import type { NextApiRequest, NextApiResponse } from './next';
import v1 from "../../../data / api - docs / v1";
/**
 * to_postman - Function description
 */
function to_postman() {
  return {
    info: {
      name: "Zion OS API",
      schema:;
        "https://schema.getpostman.com / json / collection / v2.1.0 / collection.json",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    },
    item: v1.sections.flat_map ((section) =>;
      section.endpoints.map ((ep) => ({
        name: `${section.title} - ${ep.title}`,
        request: {
          method: ep.method,
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toPostman())
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          header: [;
            {
              key: "Authorization",
              value: "Bearer {{token}}",
              disabled: !(ep.auth || []).includes ("jwt"),
            },
          ],
          url: {
            raw: `{{base_url}}${ep.path}`,
            host: ["{{base_url}}"],
            path: ep.path.replace (/^\//, "").split ("/"),
          },
          body: ep.requestBodySchema;
            ? { mode: "raw", raw: JSON.stringify ({}, null, 2) }
            : undefined,
        },
      })),
    ),
    variable: [;
      { key: "base_url", value: "https://api.zion.os" },
      { key: "token", value: "" },
    ],
  }
}
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "application / json");
  res.status (200).json (to_postman ());
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
