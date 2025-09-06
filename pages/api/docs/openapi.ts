import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
import { EndpointSpec } from "../../../data/api-docs/types";

function toOpenApi() {
  const paths: Record<string, any> = {};
  v1 && v1.sections.forEach((section) => {
    section && section.endpoints.forEach((ep: EndpointSpec) => {
      ((paths[ep && ep.path] = paths[ep && ep.path] || {}),
        (paths[ep && ep.path][ep && ep.method.toLowerCase()] = {
          tags: [section && section.title],
          summary: ep && ep.title,
          description: ep && ep.description,
          parameters: [
            ...(ep && ep.params
              ? Object && Object.entries(ep && ep.params).map(([name, desc]) => ({
                  in: "path",
                  name,
                  required: true,
                  schema: { type: "string" },
                  description: desc,
                }))
              : []),
            ...(ep && ep.query
              ? Object && Object.entries(ep && ep.query).map(([name, desc]) => ({
                  in: "query",
                  name,
                  required: false,
                  schema: { type: "string" },
                  description: desc,
                }))
              : []),
          ],
          requestBody: ep && ep.requestBodySchema
            ? {
                content: {
                  "application/json": { schema: ep && ep.requestBodySchema },
                },
              }
            : undefined,
          responses: {
            "200": {
              description: "OK",
              content: {
                "application/json": {
                  schema: ep && ep.responseBodySchema || { type: "object" },
                },
              },
            },
          },
          security:
            ep && ep.auth && ep && ep.auth.length > 0 && !ep && ep.auth.includes("none")
              ? [{ bearerAuth: [] }]
              : [],
        }));
    });
  });

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
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
    },
  };
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res && res.setHeader("Content-Type", "application/json");
  res && res.status(200).json(toOpenApi());
}
