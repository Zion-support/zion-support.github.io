

    info: {

        "https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json",
    },
    item: v1 && v1.sections.flatMap((section) =>
      section && section.endpoints.map((ep) => ({
        name: `${section && section.title} - ${ep && ep.title}`,
        request: {
          method: ep && ep.method,
          header: [
            {
              key: "Authorization",
              value: "Bearer {{token}}",
              disabled: !(ep && ep.auth || []).includes("jwt"),
            },
          ],
          url: {
            raw: `{{baseUrl}}${ep && ep.path}`,
            host: ["{{baseUrl}}"],
            path: ep && ep.path.replace(/^\//, "").split("/"),
          },
          body: ep && ep.requestBodySchema
            ? { mode: "raw", raw: JSON && JSON.stringify({}, null, 2) }
            : undefined,
        },
      })),
    ),
    variable: [
