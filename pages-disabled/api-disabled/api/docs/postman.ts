:pages/api/docs/postman.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toPostman() {
  return {
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
function toPostman() {;
  return {;
import type { NextApiRequest, NextApiResponse } from 'next';
:pages/api/docs/postman.ts
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

        request: {
          method: ep && ep.method,
          header: [
            {
            : undefined,
        },
      })),
    ),
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
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    }
    item: [
      {;
        name: 'Health Check';
        request: {;
          method: 'GET';
          header: [];
          url: {
:pages/api/docs/postman.ts
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
:pages/api/docs/postman.ts
            raw: `{{base_url}}${ep.path}`,
            host: ["{{base_url}}"],
            path: ep.path.replace (/^\//, "").split ("/"),
          },
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

