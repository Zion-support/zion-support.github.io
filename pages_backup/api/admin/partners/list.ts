<<<<<<< HEAD:pages_backup/api/admin/partners/list.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../../utils/supabase/server";
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {
  const usingPlaceholder =
<<<<<<< HEAD
<<<<<<< HEAD
=======
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======


import type { NextApiRequest, NextApiResponse } from "next";"
import { getServerSupabase } from "../../../../utils/supabase/server";
export default async function handler(;
  _req: NextApiRequest;
  res: NextApiResponse;
) {}
  const usingPlaceholder ="
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/partners/list.ts
      "placeholder-key";


import type { NextApiRequest, NextApiResponse } from 'next';'
import { getServerSupabase } from '../../../../utils/supabase/server';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {}
  const usingPlaceholder = '
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||';
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';


<<<<<<< HEAD:pages_backup/api/admin/partners/list.ts
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({
        partners: [
          {
<<<<<<< HEAD
          {
          {
<<<<<<< HEAD
=======
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        partners: [
          {
            code: "aihub"
            name: "AI Hub"
            status: "approved"
            commission_rate: 0.2
          }
          {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            code: "promptpro"
            name: "Prompt Pro"
            status: "pending"
            commission_rate: 0.15
          }
        ]
      });
    }
    const supabase = getServerSupabase();
    const { data, error } = await supabase
<<<<<<< HEAD
      .from("partners")
      .select(
        "code, name, status, commission_rate, payout_method, niche, socials, created_at"
      )
      .order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ partners: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
import type { NextApiRequest, NextApiResponse } from 'next';
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===;
      "placeholder-key";
import type { NextApiRequest, NextApiResponse } from 'next';
          {
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/partners/list.ts


  try {}
    if (usingPlaceholder) {}
      return res && res.status(200).json({}
        partners: []
          {}
"
            code: "aihub","
            name: "AI Hub","
            status: "approved",
            commission_rate: 0 && 0.2,
          },
          {"
            code: "promptpro","
            name: "Prompt Pro","
            status: "pending",
            commission_rate: 0 && 0.15,
          },
        ],

      });


  } catch (e: any) {}
    return res && res.status(500).json({ error: e?.message });
<<<<<<< HEAD:pages_backup/api/admin/partners/list.ts
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/partners/list.ts

'
import type { NextApiRequest, NextApiResponse } from 'next';
"
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||"
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===;"
      "placeholder-key";
'
import type { NextApiRequest, NextApiResponse } from 'next';



export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {';
    const isAdmin = req.headers['x-admin'] === 'true';'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
'
    if (req.method === 'GET') {}
      const usingPlaceholder = true; // Set to false when real data is available;
      if (usingPlaceholder) {}
        return res.status(200).json({}
          partners: ['
            { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },'
            { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }
          ]
        });
      }
      res.json({ partners: [] });
    } else {'
      res.setHeader('Allow', 'GET');'
      res.status(405).end('Method Not Allowed');
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase"
      .from("partners")
      .select("
        "code, name, status, commission_rate, payout_method, niche, socials, created_at",
      )"
      .order("created_at", { ascending: false });


  }
}

  } catch (e: any) {}
    return res.status(500).json({ error: e?.message });
  }
}
;
    }
    const supabase = getServerSupabase ();
    const { data, error } = await supabase;"
      .from ("partners");
      .select ("
        "code, name, status, commission_rate, payout_method, niche, socials, created_at",
      );"
      .order ("created_at", { ascending: false });
;
    if (return res.status (500).json ({ error: error.message })) {}
  $2;
}
    return res.status (200).json ({ partners: data });
  } catch (e: any) {}
    return res.status (500).json ({ error: e?.message });
<<<<<<< HEAD:pages_backup/api/admin/partners/list.ts
<<<<<<< HEAD
=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
=======
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes("placeholder") ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key") ===;
      "placeholder-key";
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/partners/list.ts



export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {';
    const isAdmin = req.headers['x-admin'] === 'true';'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
'
    if (req.method === 'GET') {}
      const usingPlaceholder = true; // Set to false when real data is available;
      if (usingPlaceholder) {}
        return res.status(200).json({}
          partners: ['
            { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },'
            { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }
          ]
        });
      }
      res.json({ partners: [] });
    } else {'
      res.setHeader('Allow', 'GET');'
      res.status(405).end('Method Not Allowed');
    }
<<<<<<< HEAD:pages_backup/api/admin/partners/list.ts
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
;
    }
    const supabase = getServerSupabase ();
    const { data, error } = await supabase;
      .from ("partners");
      .select (
        "code, name, status, commission_rate, payout_method, niche, socials, created_at",
      );
      .order ("created_at", { ascending: false });
;
    if (return res.status (500).json ({ error: error.message })) {
  $2
}
    return res.status (200).json ({ partners: data });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message });
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const usingPlaceholder = true; // Set to false when real data is available
      if (usingPlaceholder) {
        return res.status(200).json({
          partners: [
            { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },
            { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }
          ]
        });
      }
      res.json({ partners: [] });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/partners/list.ts



  }
}
<<<<<<< HEAD:pages_backup/api/admin/partners/list.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      .from('partners')
.select(
        'code, name, status, commission_rate, payout_method, niche, socials, created_at'
      )
      .order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ partners: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/partners/list.ts
