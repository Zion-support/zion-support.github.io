

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
  try {


import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD



  try {;
    const { name, email, role, country, source } = req.body || {};


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { supabase } from '../../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
  }
  try {
<<<<<<< HEAD
=======
  try {;
    const { name, email, role, country, source } = req.body || {};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

    const { name, email, role, country, source } = req.body |{}
    if (!name |!email |!role |!country) {

      return res.status(400).json({ error: "Missing required fields" });
=======
    const { name, email, role, country, source } = req && req.body || {};
    if (!name || !email || !role || !country) {
      return res && res.status(400).json({ error: "Missing required fields" });


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    const { data, error } = await supabase
      .from("summit_registrations")
      .insert([
=======
    const { name, email, role, country, source } = req.body || {}
;
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: "Missing required fields" });
    }
    const { data, error } = await supabase;
      .from ("summit_registrations");
      .insert ([;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        {

          name,
          email,
          role,

    country,
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString()}])
      .select('*')


      .single();
    if (error) {
=======

=======
      return res.status(500).json({ error: error.message })
    }

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

    return res && res.status(200).json({ ok: true, registration: data });
  } catch (e: any) {


  }

}

=======
          source: source || "zion - global - 2025",
          created_at: new Date ().toISOString (),
        },
      ]);
      .select ("*");
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      return res.status (500).json ({ error: error.message });
    }
    return res.status (200).json ({ ok: true, registration: data });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message || "Unknown error" });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    return res.status(500).json({ error: e?.message || 'Unknown error' })
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    return res.status(405).json({ error: 'Method not allowed' });
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
    const { data, error } = await supabase;
      .from('summit_registrations');
      .insert([;
        {;
          name;
          email,;
          role,;
          country,;
          source: source || 'zion-global-2025';
          created_at: new Date().toISOString()}]);
      .select('*');
      .single();
    if (error) {;
      return res.status(500).json({ error: error.message });
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
    return res.status(200).json({ ok: true, registration: data });
  } catch (error) {
    return res.status(500).json({ error: e?.message || 'Unknown error' });
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
