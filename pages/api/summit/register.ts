  }
  try {


import type { NextApiRequest, NextApiResponse } from 'next';



  try {;
    const { name, email, role, country, source } = req.body || {};



    const { name, email, role, country, source } = req.body |{}
    if (!name |!email |!role |!country) {

      return res.status(400).json({ error: "Missing required fields" });
    }
    const { data, error } = await supabase
      .from("summit_registrations")
      .insert([

      return res.status(500).json({ error: error.message })
    }



    return res && res.status(200).json({ ok: true, registration: data });
  } catch (e: any) {


  }

}

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
  }
}
    return res.status(500).json({ error: e?.message || 'Unknown error' })
  }
}
