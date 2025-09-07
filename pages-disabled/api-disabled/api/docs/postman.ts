<<<<<<< HEAD:pages/api/docs/postman.ts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toPostman() {
  return {
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/docs/postman.ts
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
function toPostman() {;
  return {;
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:pages/api/docs/postman.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postmanCollection = {
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    info: {

      name: "Zion OS API"
      schema:
        "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    }

    item: v1.sections.flatMap((section) =>
      section.endpoints.map((ep) => ({
        name: `${section.title} - ${ep.title}`

        request: {
          method: ep && ep.method,
          header: [
            {
            : undefined,
        },
      })),
    ),
<<<<<<< HEAD
    variable: [

      { key: "baseUrl", value: "https://api.zion.os" }
      { key: "token", value: "" }
    ]
  }
}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res && res.setHeader("Content-Type", "application/json");
  res && res.status(200).json(toPostman());
}
      name: 'Zion OS API',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default function handler($2) {;
  const postmanCollection = {;
    info: {

        "https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json"
    }
    item: v1 && v1.sections.flatMap((section) =>;
      section && section.endpoints.map((ep) => ({;
        name: `${section && section.title} - ${ep && ep.title}`;
        request: {;
          method: ep && ep.method;
          header: [
            {
            : undefined
        }
      }))
    );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/docs/postman.ts
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    }
    item: [
      {;
        name: 'Health Check';
        request: {;
          method: 'GET';
          header: [];
          url: {
<<<<<<< HEAD:pages/api/docs/postman.ts
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      { key: "baseUrl", value: "https://api.zion.os" },
      { key: "token", value: "" },
    ],
=======
      { key: "baseUrl", value: "https://api.zion.os" }
      { key: "token", value: "" }
    ]
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/docs/postman.ts
  };
}
;
export default function handler($2) {;
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toPostman());
}
  res.status(200).json(postmanCollection);
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toPostman() {;
  return {;
    info: {;
      name: 'Zion OS API',;
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'},;
    item: v1.sections.flatMap((section) =>;
      section.endpoints.map((ep) => ({;
        name: `${section.title} - ${ep.title}`,;
        request: {;
          method: ep.method,;
          header: [{ key: 'Authorization', value: 'Bearer {{token}}', disabled: !(ep.auth || []).includes('jwt') }],;
          url: {;
            raw: `{{baseUrl}}${ep.path}`,;
            host: ['{{baseUrl}}'],;
            path: ep.path.replace(/^\//, '').split('/')},;
          body: ep.requestBodySchema ? { mode: 'raw', raw: JSON.stringify({}, null, 2) } : undefined}}));
    ),;
    variable: [;
      { key: 'baseUrl', value: 'https://api.zion.os' },;
      { key: 'token', value: '' }]  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler($2) {;
  try {;
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toPostman());
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages/api/docs/postman.ts
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
    variable: [
<<<<<<< HEAD
      { key: "baseUrl", value: "https://api && api.zion.os" },
      { key: "token", value: "" },
    ],
  };

      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
import type { NextApiRequest, NextApiResponse } from './next';
import v1 from "../../../data / api - docs / v1";
/**
 * to_postman - Function description
 */
function to_postman() {
  return {
    info: {
      name: "Zion OS API",
      schema:;
        "https://schema.getpostman.com / json / collection / v2.1.0 / collection.json",
    },
item: v1.sections.flat_map ((section) =>;
      section.endpoints.map ((ep) => ({
        name: `${section.title} - ${ep.title}`,
        request: {
          method: ep.method,

          header: [;
            {
              key: "Authorization",
              value: "Bearer {{token}}",
              disabled: !(ep.auth || []).includes ("jwt"),
            },
          ],
          url: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            raw: `{{base_url}}${ep.path}`,
            host: ["{{base_url}}"],
            path: ep.path.replace (/^\//, "").split ("/"),
          },
=======
            raw: `{{base_url}}${ep.path}`;
            host: ["{{base_url}}"];
            path: ep.path.replace (/^\//, "").split ("/")
          }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/docs/postman.ts
          body: ep.requestBodySchema;
            ? { mode: "raw", raw: JSON.stringify ({}, null, 2) }
            : undefined
        }
      }))
    );
    variable: [;
      { key: "base_url", value: "https://api.zion.os" }
      { key: "token", value: "" }
    ]

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
