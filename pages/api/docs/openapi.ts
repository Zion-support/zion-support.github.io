

              }
            : undefined
          responses: {
            "200": {
              description: "OK"
              content: {

                  schema: ep && ep.responseBodySchema || { type: "object" },
=======
                "application / json": {
                  schema: ep.responseBodySchema || { type: "object" },

                },
              },
            },
          },

          security:;
            ep.auth && ep.auth.length > 0 && !ep.auth.includes ("none");
              ? [{ bearer_auth: [] }];
              : [],

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

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toOpenApi())
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "application / json");
  res.status (200).json (toOpenApi ());
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
