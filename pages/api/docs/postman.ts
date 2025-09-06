

    info: {

      name: "Zion OS API"
      schema:
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postmanCollection = {
    info: {
      name: 'Zion Tech Group API',
      description: 'Postman collection for Zion Tech Group API',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: [
      {
        name: 'Health Check',
        request: {
          method: 'GET',
          header: [],
          url: {
            raw: '{{baseUrl}}/api/health',
            host: ['{{baseUrl}}'],
            path: ['api', 'health']
          }
        }
      }
    ],
    variable: [
      {
        key: 'baseUrl',
        value: 'https://api.ziontechgroup.com'
      }
    ]
  };
=======
      { key: "baseUrl", value: "https://api.zion.os" },
      { key: "token", value: "" },
    ],
  };

