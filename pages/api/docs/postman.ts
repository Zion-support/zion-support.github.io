<<<<<<< HEAD
<<<<<<< HEAD


    info: {

        "https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json",
=======
<<<<<<< HEAD
"https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    },
    item: v1 && v1.sections.flatMap((section) =>
      section && section.endpoints.map((ep) => ({
        name: `${section && section.title} - ${ep && ep.title}`,
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toPostman() {
  return {
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
function toPostman() {
  return {
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postmanCollection = {
    info: {

      name: "Zion OS API"
      schema:
        "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    }

    item: v1.sections.flatMap((section) =>
      section.endpoints.map((ep) => ({
        name: `${section.title} - ${ep.title}`
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  res.status(200).json(postmanCollection);
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
      { key: 'token', value: '' }]  } catch (error) {
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
  res.status(200).json(toPostman());
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      { key: "baseUrl", value: "https://api && api.zion.os" },
      { key: "token", value: "" },
    ],
  };
<<<<<<< HEAD

=======
}
=======
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          header: [;
            {
              key: "Authorization",
              value: "Bearer {{token}}",
              disabled: !(ep.auth || []).includes ("jwt"),
            },
          ],
          url: {
            raw: `{{base_url}}${ep.path}`,
            host: ["{{base_url}}"],
            path: ep.path.replace (/^\//, "").split ("/"),
          },
          body: ep.requestBodySchema;
            ? { mode: "raw", raw: JSON.stringify ({}, null, 2) }
            : undefined,
        },
      })),
    ),
    variable: [;
      { key: "base_url", value: "https://api.zion.os" },
      { key: "token", value: "" },
    ],
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  }
}
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "application / json");
  res.status (200).json (to_postman ());
}
<<<<<<< HEAD
=======

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
      { key: "baseUrl", value: "https://api.zion.os" },
      { key: "token", value: "" },
    ],
  };
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toPostman());
}
  res.status(200).json(postmanCollection);
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
      { key: 'token', value: '' }]  } catch (error) {
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
  res.status(200).json(toPostman());
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
