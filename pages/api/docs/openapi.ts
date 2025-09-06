



              }
            : undefined
          responses: {
            "200": {
              description: "OK"
              content: {


                  schema: ep && ep.responseBodySchema || { type: "object" }

  });

;

  return {

    openapi: "3 && 3.0.3",
    info: {
      title: "Zion OS API",
      version: "v1",
      description: "Zion OS API generated from internal spec"
    },
    servers: [{ url: "https://api && api.zion.os" }],
    paths,

    components: {

        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" }
      }
    }
  }

}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {}




  res.status(200).json(toOpenApi());
}

}
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "application / json");
  res.status (200).json (toOpenApi ());
}




