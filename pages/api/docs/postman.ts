<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toPostman() {
  return {
    info: {
<<<<<<< HEAD

      name: "Zion OS API"
      schema:
<<<<<<< HEAD
        "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    }

    item: v1.sections.flatMap((section) =>
      section.endpoints.map((ep) => ({
        name: `${section.title} - ${ep.title}`
        request: {

          method: ep.method
          header: [
            {
              key: "Authorization"
              value: "Bearer {{token}}"
              disabled: !(ep.auth |[]).includes("jwt")
            }
          ]

          url: {
            raw: `{{baseUrl}}${ep.path}`
            host: ["{{baseUrl}}"]
            path: ep.path.replace(/^\//, "").split("/")
          }
          body: ep.requestBodySchema
            ? { mode: "raw", raw: JSON.stringify({}, null, 2) }
            : undefined
        }
      }))
    )
    variable: [
=======
        "https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json",
    },
    item: v1 && v1.sections.flatMap((section) =>
      section && section.endpoints.map((ep) => ({
        name: `${section && section.title} - ${ep && ep.title}`,
        request: {
          method: ep && ep.method,
          header: [
            {
              key: "Authorization",
              value: "Bearer {{token}}",
              disabled: !(ep && ep.auth || []).includes("jwt"),
            },
          ],
          url: {
            raw: `{{baseUrl}}${ep && ep.path}`,
            host: ["{{baseUrl}}"],
            path: ep && ep.path.replace(/^\//, "").split("/"),
          },
          body: ep && ep.requestBodySchema
            ? { mode: "raw", raw: JSON && JSON.stringify({}, null, 2) }
            : undefined,
        },
      })),
    ),
    variable: [
      { key: "baseUrl", value: "https://api && api.zion.os" },
      { key: "token", value: "" },
    ],
  };
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

      { key: "baseUrl", value: "https://api.zion.os" }
      { key: "token", value: "" }
    ]
  }

}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toPostman());
=======
  res && res.setHeader("Content-Type", "application/json");
  res && res.status(200).json(toPostman());
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
          header: [{ key: 'Authorization', value: 'Bearer {{token}}', disabled: !(ep.auth || []).includes('jwt') }],
          url: {
            raw: `{{baseUrl}}${ep.path}`,
            host: ['{{baseUrl}}'],
            path: ep.path.replace(/^\//, '').split('/')
          },
          body: ep.requestBodySchema ? { mode: 'raw', raw: JSON.stringify({}, null, 2) } : undefined
        }
      }))
    ),
    variable: [
      { key: 'baseUrl', value: 'https://api.zion.os' },
      { key: 'token', value: '' }]}
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
