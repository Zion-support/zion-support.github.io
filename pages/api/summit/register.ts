


  }
  try {


import type { NextApiRequest, NextApiResponse } from 'next';



  try {;
    const { name, email, role, country, source } = req.body || {};


    if (!name || !email || !role || !country) {
      return res.status(400).json({ error: "Missing required fields" });
    }



    const { name, email, role, country, source } = req.body |{}
    if (!name |!email |!role |!country) {

      return res.status(400).json({ error: "Missing required fields" });


    }
    const { data, error } = await supabase
      .from("summit_registrations")
      .insert([




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



  }

}
