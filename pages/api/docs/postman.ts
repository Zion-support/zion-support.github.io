import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toPostman() {
  return {
    info: {
<<<<<<< HEAD
      name: 'Zion OS API';
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'},
=======
      name: "Zion OS API"
      schema:
        "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    item: v1.sections.flatMap((section) =>
      section.endpoints.map((ep) => ({
        name: `${section.title} - ${ep.title}`
        request: {
<<<<<<< HEAD
          method: ep.method;
          header: [{ key: 'Authorization', value: 'Bearer {{token}}', disabled: !(ep.auth || []).includes('jwt') }],
=======
          method: ep.method
          header: [
            {
              key: "Authorization"
              value: "Bearer {{token}}"
              disabled: !(ep.auth |[]).includes("jwt")
            }
          ]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
<<<<<<< HEAD
      { key: 'baseUrl', value: 'https://api.zion.os' };
      { key: 'token', value: '' }]}
=======
      { key: "baseUrl", value: "https://api.zion.os" }
      { key: "token", value: "" }
    ]
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toPostman())
}
=======
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toPostman());
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
