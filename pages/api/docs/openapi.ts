<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
import { EndpointSpec } from "../../../data/api-docs/types";
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import v1 from '../../../data/api-docs/v1';
import { EndpointSpec } from '[^']*';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
import { EndpointSpec } from "../../../data/api-docs/types";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function toOpenApi() {
  const paths: Record<string, any> = {}
  v1.sections.forEach((section) => {
    section.endpoints.forEach((ep: EndpointSpec) => {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
import { EndpointSpec } from '[^']*';
function toOpenApi() {
  const paths: Record<string, any> = {}
  v1.sections.forEach((section) => {
    section.endpoints.forEach((ep: EndpointSpec) => {

      ((paths[ep.path] = paths[ep.path] |{})
        (paths[ep.path][ep.method.toLowerCase()] = {
          tags: [section.title]
          summary: ep.title
          description: ep.description
          parameters: [
            ...(ep.params
              ? Object.entries(ep.params).map(([name, desc]) => ({
                  in: "path"
                  name
                  required: true
                  schema: { type: "string" }
                  description: desc
                }))
              : [])
            ...(ep.query
              ? Object.entries(ep.query).map(([name, desc]) => ({
                  in: "query"
                  name
                  required: false
                  schema: { type: "string" }
                  description: desc
                }))
              : [])
          ]
          requestBody: ep.requestBodySchema
            ? {
                content: {
                  "application/json": { schema: ep.requestBodySchema }
                }
                  in: "path",
                  name,
                  required: true,
                  schema: { type: "string" },
                  description: desc,
                }));
              : []),
            ...(ep && ep.query
              ? Object && Object.entries(ep && ep.query).map(([name, desc]) => ({
                  in: "query",
                  name,
                  required: false,
                  schema: { type: "string" },
                  description: desc,
                }));
              : []),
          ],
          requestBody: ep && ep.requestBodySchema
            ? {
                content: {
                  "application/json": { schema: ep && ep.requestBodySchema },
                },
              }
            : undefined
          responses: {
            "200": {
              description: "OK"
              content: {
                "application/json": {
                  schema: ep.responseBodySchema |{ type: "object" }
                }
              }
            }
          }
                },
              },
            },
          },
          security:
            ep && ep.auth && ep && ep.auth.length > 0 && !ep && ep.auth.includes("none")
              ? [{ bearerAuth: [] }]
              : []
          security:;
            ep.auth && ep.auth.length > 0 && !ep.auth.includes ("none");
              ? [{ bearer_auth: [] }];
              : [],
        }));
    });
  });
  return {
    openapi: "3.0.3"
    info: {
      title: "Zion OS API"
      version: "v1"
      description: "Zion OS API generated from internal spec"
    }
    servers: [{ url: "https://api.zion.os" }]
    paths
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
    },
  };

<<<<<<< HEAD
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toOpenApi());
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}

    openapi: '3.0.3',
    info: {
       title: 'Zion OS API', version: 'v1', description: 'Zion OS API generated from internal spec' 
    },
    servers: [{ url: 'https://api.zion.os' }],
    paths,
    components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } }}
}

=======
=======
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
res.setHeader("Content-Type", "application/json");
  res.status(200).json(toOpenApi());
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const openapi = {
    openapi: '3.0.3',
    info: {
      title: 'Zion Tech Group API',
      version: '1.0.0',
      description: 'API documentation for Zion Tech Group services'
    },
    servers: [{
      url: 'https://api.zion.os'
    }],
    paths: {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  res.status(200).json(openapi);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
import { EndpointSpec } from '../../../data/api-docs/types';
function toOpenApi() {;
  const paths: Record<string, any> = {};
  v1.sections.forEach((section) => {;
    section.endpoints.forEach((ep: EndpointSpec) => {;
      paths[ep.path] = paths[ep.path] || {},;
      paths[ep.path][ep.method.toLowerCase()] = {;
        tags: [section.title],;
        summary: ep.title,;
        description: ep.description,;
        parameters: [;
          ...(ep.params ? Object.entries(ep.params).map(([name, desc]) => ({ in: 'path', name, required: true, schema: { type: 'string' }, description: desc })) : []),;
          ...(ep.query ? Object.entries(ep.query).map(([name, desc]) => ({ in: 'query', name, required: false, schema: { type: 'string' }, description: desc })) : [])],;
        requestBody: ep.requestBodySchema ? { content: { 'application/json': { schema: ep.requestBodySchema } } } : undefined,;
        responses: {;
          '200': { description: 'OK', content: { 'application/json': { schema: ep.responseBodySchema || { type: 'object' } } } }},;
        security: ep.auth && ep.auth.length > 0 && !ep.auth.includes('none') ? [{ bearerAuth: [] }] : []  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    });
  }),;
  return {;
    openapi: '3.0.3',;
    info: { title: 'Zion OS API', version: 'v1', description: 'Zion OS API generated from internal spec' },;
    servers: [{ url: 'https://api.zion.os' }],;
    paths,;
    components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler(req, res) {
  try {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toOpenApi())
}
<<<<<<< HEAD
      security_schemes: {
        bearer_auth: { type: "http", scheme: "bearer", bearer_format: "JWT" },
      },
    },
  }
}
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "application / json");
  res.status (200).json (toOpenApi ());
}
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
