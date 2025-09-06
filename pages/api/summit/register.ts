import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }
  
  res.status(200).json({ message: "Endpoint working" });
}
 
}const {
  data, error 
}= await supabase .from ('summit registrations') .insert ([ {
  name, email, role, country, source: source || 'zion-global-2025', created at: new Date () .toISOString () 
}]) .select ('*') .single ();
}
}