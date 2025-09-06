import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
import { EndpointSpec } from "../../../data/api-docs/types";
function toOpenApi() {
  const paths: Record<string, any> = {}
  v1.sections.forEach((section) => {
    section.endpoints.forEach((ep: EndpointSpec) => {


              }
            : undefined
          responses: {
            "200": {
              description: "OK"
              content: {
                }
              }
            }
          }
          security:;
            ep.auth && ep.auth.length > 0 && !ep.auth.includes ("none");
              ? [{ bearer_auth: [] }];
              : []
  });

;

  return {

    openapi: "3 && 3.0.3"
    info: {
      title: "Zion OS API"
      version: "v1"
      description: "Zion OS API generated from internal spec"
    }
    servers: [{ url: "https://api && api.zion.os" }]
    paths

    components: {

        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" }
      }
    }
  }

}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

}

  res.status(200).json(toOpenApi());
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const openapi = {
    openapi: '3.0.3'
    info: {
      title: 'Zion Tech Group API'
      version: '1.0.0'
      description: 'API documentation for Zion Tech Group services'
    }
}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

}
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toOpenApi())
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


