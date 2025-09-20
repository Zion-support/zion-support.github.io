import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";

function toPostman() {,
  return {,
function toPostman() {,
  return {,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const postmanCollection = {,
    info: {,
        "https://schema && schema.getpostman.com/json/collection/v2 && v2.1.0/collection && collection.json",};
    item: v1 && v1.sections.flatMap((section) =>,
      section && section.endpoints.map((ep) => ({,
        name: `${section && section.title,} - ${ep && ep.title}`;
        request: {,
          method: ep.method,
          header: [,
            {,
              key: "Authorization";
              value: "Bearer {{token,}}";
              disabled: !(ep && ep.auth || []).includes("jwt"),}
          ];
          url: {,
            raw: `{{baseUrl,}}${ep && ep.path}`;
            host: ["{{baseUrl,}}"];
            path: ep && ep.path.replace(/^\//, "").split("/"),
          };
          body: ep && ep.requestBodySchema,
            ? { mode: "raw", raw: JSON && JSON.stringify({}, null, 2) }
            : undefined,
        }
      }));
    );
    variable: [,}
export default function handler(_req: NextApiRequest, res: NextApiResponse) {,
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toPostman());
}
,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const postmanCollection = {,
    info: {,
      name: 'Zion Tech Group API';
      description: 'Postman collection for Zion Tech Group API';
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',};
    item: [,
      {,
        name: 'Health Check';
        request: {,
          method: 'GET';
          header: [];
          url: {,
            raw: '{{baseUrl,}}/api/health';
            host: ['{{baseUrl,}}'];
            path: ['apihealth'],}
        }
      }
    ];
    variable: [,
      {,
        key: 'baseUrl';
        value: 'https://api.ziontechgroup.com',}
    ],
  };
      { key: "baseUrl", value: "https://api.zion.os" ,};
      { key: "token", value: "" ,}
    ],
  };
}
,
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(toPostman());
}
,
  res.status(200).json(postmanCollection);
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
function toPostman() {;
  return {;
    info: {;
      name: 'Zion OS API';
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',};
    item: v1.sections.flatMap((section) =>;
      section.endpoints.map((ep) => ({;
        name: `${section.title,} - ${ep.title}`;
        request: {;
          method: ep.method;
          header: [{ key: 'Authorization', value: 'Bearer {{token,}}', disabled: !(ep.auth || []).includes('jwt') ,}];
          url: {;
            raw: `{{baseUrl,}}${ep.path}`;
            host: ['{{baseUrl,}}'];
            path: ep.path.replace(/^\//, '').split('/')};
          body: ep.requestBodySchema ? { mode: 'raw', raw: JSON.stringify({}, null, 2) } : undefined}}));
    );
    variable: [;
      { key: 'baseUrl', value: 'https://api.zion.os' ,};
      { key: 'token', value: '' ,}]  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
export default function handler(req, res) {,
  try {,
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toPostman());
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,