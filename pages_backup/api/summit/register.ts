:pages_backup/api/summit/register.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase/client";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method not allowed' })
:pages_backup/api/summit/register.ts
  }

  }
  try {
  try {;
    const { name, email, role, country, source } = req.body || {};
  }
  try {}
';
import type { NextApiRequest, NextApiResponse } from 'next';

  try {;
    const { name, email, role, country, source } = req.body || {};

    const { name, email, role, country, source } = req.body |{}
    if (!name |!email |!role |!country) {}
      return res.status(400).json({ error: "Missing required fields" });

    }
    const { data, error } = await supabase"
      .from("summit_registrations")
      .insert([]
        {}
          name,
          email,
          role,
          country,"
          source: source || "zion-global-2025",
          created_at: new Date().toISOString(),
        },
      ])"
      .select("*")
      .single();

    country,'
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString()}])'
      .select('*')

      .single();
    if (error) {}
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true, registration: data });
:pages_backup/api/summit/register.ts
  } catch (e: any) {
return res.status(500).json({ error: e?.message |"Unknown error" });

  } catch (e: any) {}
    return res && res.status(200).json({ ok: true, registration: data });
  } catch (e: any) {}
  }

}

"
          source: source || "zion - global - 2025",
          created_at: new Date ().toISOString (),
        },
      ]);"
      .select ("*");
      .single ();
;
    // Check condition;
if ( {) {}
  $2;
}
      return res.status (500).json ({ error: error.message });
    }
    return res.status (200).json ({ ok: true, registration: data });
  } catch (e: any) {"
    return res.status (500).json ({ error: e?.message || "Unknown error" });

  }
}

'
    return res.status(500).json({ error: e?.message || 'Unknown error' })

  }
}
} catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const { name, email, role, country, source } = req.body || {};
    if (!name || !email || !role || !country) {;
      return res.status(400).json({ error: 'Missing required fields' });
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
    const { data, error } = await supabase;'
      .from('summit_registrations');
      .insert([;
        {;
          name;
          email,;
          role,;
          country,;'
          source: source || 'zion-global-2025';
          created_at: new Date().toISOString()}]);'
      .select('*');
      .single();
    if (error) {;
      return res.status(500).json({ error: error.message });
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
    return res.status(500).json({ error: e?.message || "Unknown error" });

  }
}
:pages_backup/api/summit/register.ts
'"
