<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import v1 from '../../../data/api-docs/v1';
function toPostman() {
  return {
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
function toPostman() {
  return {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postmanCollection = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD

      { key: "baseUrl", value: "https://api.zion.os" }
      { key: "token", value: "" }
    ]
  }

}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toPostman());
}

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
=======
      { key: "baseUrl", value: "https://api.zion.os" },
      { key: "token", value: "" },
    ],
  };
<<<<<<< HEAD
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toPostman());
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
