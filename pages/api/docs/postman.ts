<<<<<<< HEAD
<<<<<<< HEAD


    info: {

        "https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json",
    },
    item: v1 && v1.sections.flatMap((section) =>
      section && section.endpoints.map((ep) => ({
        name: `${section && section.title} - ${ep && ep.title}`,
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toPostman() {
  return {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
function toPostman() {
  return {
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postmanCollection = {
    info: {

<<<<<<< HEAD
      name: "Zion OS API"
      schema:
        "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    }

    item: v1.sections.flatMap((section) =>
      section.endpoints.map((ep) => ({
        name: `${section.title} - ${ep.title}`
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        "https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json",
    },
    item: v1 && v1.sections.flatMap((section) =>
      section && section.endpoints.map((ep) => ({
        name: `${section && section.title} - ${ep && ep.title}`,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
      { key: "baseUrl", value: "https://api && api.zion.os" },
      { key: "token", value: "" },
    ],
  };

      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    },
    item: v1.sections.flat_map ((section) =>;
      section.endpoints.map ((ep) => ({
        name: `${section.title} - ${ep.title}`,
        request: {
          method: ep.method,

=======

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
      { key: "baseUrl", value: "https://api && api.zion.os" },
      { key: "token", value: "" },
    ],
  };
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postmanCollection = {
    info: {
      name: 'Zion Tech Group API',
      description: 'Postman collection for Zion Tech Group API',
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: [
      {
        name: 'Health Check',
        request: {
          method: 'GET',
          header: [],
          url: {
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
