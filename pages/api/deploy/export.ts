


import type { NextApiRequest, NextApiResponse } from 'next',;
;


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id |typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })











  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

