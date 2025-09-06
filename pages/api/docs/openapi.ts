<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
import { EndpointSpec } from "../../../data/api-docs/types";
function toOpenApi() {
  const paths: Record<string, any> = {}
  v1.sections.forEach((section) => {
    section.endpoints.forEach((ep: EndpointSpec) => {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


              }
            : undefined
          responses: {
            "200": {
              description: "OK"
              content: {
<<<<<<< HEAD
=======

                  schema: ep && ep.responseBodySchema || { type: "object" },
=======
                "application / json": {
                  schema: ep.responseBodySchema || { type: "object" },

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                },
              },
            },
          },
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          security:;
            ep.auth && ep.auth.length > 0 && !ep.auth.includes ("none");
              ? [{ bearer_auth: [] }];
              : [],
<<<<<<< HEAD
=======

        }));
    });

=======
import { EndpointSpec } from '../../../data/api-docs/types';
function toOpenApi() {
  const paths: Record<string, any> = {};
  v1.sections.forEach((section) => {
    section.endpoints.forEach((ep: EndpointSpec) => {
      paths[ep.path] = paths[ep.path] || {};
      paths[ep.path][ep.method.toLowerCase()] = {
        tags: [section.title], summary: ep.title,
        description: ep.description,
        parameters: [
          ...(ep.params ? Object.entries(ep.params).map(([name, desc]) => ({ in: 'path', name, required: true, schema: { type: 'string' }, description: desc })) : []),
          ...(ep.query ? Object.entries(ep.query).map(([name, desc]) => ({ in: 'query', name, required: false, schema: { type: 'string' }, description: desc })) : [])
        ],
        requestBody: ep.requestBodySchema ? { content: { 'application/json': { schema: ep.requestBodySchema } } } : undefined,
        responses: {
          '200': { description: 'OK', content: { 'application/json': { schema: ep.responseBodySchema || { type: 'object' } } } }
        },
        security: ep.auth && ep.auth.length > 0 && !ep.auth.includes('none') ? [{ bearerAuth: [] }] : []}
    })

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  });

;

  return {

    openapi: "3 && 3.0.3",
    info: {
      title: "Zion OS API",
      version: "v1",
      description: "Zion OS API generated from internal spec",
    },
    servers: [{ url: "https://api && api.zion.os" }],
    paths,

    components: {

        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" }
      }
    }
  }

}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

}

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
res.setHeader("Content-Type", "application/json");
=======
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/json");
>>>>>>> main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  res.status(200).json(toOpenApi());
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const openapi = {
    openapi: '3.0.3',
    info: {
      title: 'Zion Tech Group API',
      version: '1.0.0',
      description: 'API documentation for Zion Tech Group services'
    },
}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

}
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toOpenApi())
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      security_schemes: {
        bearer_auth: { type: "http", scheme: "bearer", bearer_format: "JWT" },
      },
    },
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "application / json");
  res.status (200).json (toOpenApi ());
}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
