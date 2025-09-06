              }
            : undefined
          responses: {
            "200": {
              description: "OK"
              content: {
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
  });
  return {
    components: {
}

    openapi: '3.0.3',
    info: {
       title: 'Zion OS API', version: 'v1', description: 'Zion OS API generated from internal spec' 
    },
    servers: [{ url: 'https://api.zion.os' }],
    paths,
    components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } }}
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toOpenApi())
}
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
