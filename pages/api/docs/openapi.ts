function toOpenApi() {
                  in: "path",
                  name,
                  required: true,
                  schema: { type: "string" },
                  description: desc,
                }));
              : []),
                  in: "query",
                  name,
                  required: false,
                  schema: { type: "string" },
                  description: desc,
                }));
              : []),
          ],
                },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
          security:
            ep && ep.auth && ep && ep.auth.length > 0 && !ep && ep.auth.includes("none")
              ? [{ bearerAuth: [] }]
              : []
=======
          security:;
            ep.auth && ep.auth.length > 0 && !ep.auth.includes ("none");
              ? [{ bearer_auth: [] }];
              : [],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }));
    });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  });
  return {
    components: {
}

=======
    openapi: '3.0.3',
    info: {
       title: 'Zion OS API', version: 'v1', description: 'Zion OS API generated from internal spec' 
    },
    servers: [{ url: 'https://api.zion.os' }],
    paths,
    components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } }}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toOpenApi())
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
