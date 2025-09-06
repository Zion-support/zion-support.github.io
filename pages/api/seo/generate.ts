import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }
  
  res.status(200).json({ message: "Endpoint working" });
}
 - A compelling H1 - 2-3 subsections with H2/H3 - Short paragraphs, bullet lists - Strong call-to-action for Zion Marketplace const user = `Topic: $ {
  prompt 
}Region: $ {
  region || 'global' 
}Service focus: $ {
  service || 'general' 
}Audience: buyers looking to hire talent or rent equipment Tone: professional, modern, trustworthy`;
}
}