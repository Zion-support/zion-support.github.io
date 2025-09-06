
    info: {}
        "https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json",
    },
    item: v1 && v1.sections.flatMap((section) =>
      section && section.endpoints.map((ep) => ({}
        name: `${section && section.title} - ${ep && ep.title}`,
        request: {}
          method: ep && ep.method,
          header: []
            {}
            : undefined,
        },
      })),
    ),
`
            raw: `{{base_url}}${ep.path}`,"
            host: ["{{base_url}}"],"
            path: ep.path.replace (/^\//, "").split ("/"),
          },
          body: ep.requestBodySchema;"
            ? { mode: "raw", raw: JSON.stringify ({}, null, 2) }
            : undefined,
        },
      })),
    ),
    variable: [;"
      { key: "base_url", value: "https://api.zion.os" },"
      { key: "token", value: "" },
    ],

"`