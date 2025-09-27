import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url, w, h, q, f, blur } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  try {
    // Validate URL
    const imageUrl = new URL(url);
    
    // Basic security check - only allow certain domains
    const allowedDomains = [
      "ziontechgroup.com",
      "zion.app",
      "images.unsplash.com",
      "via.placeholder.com"
    ];
    
    if (!allowedDomains.some(domain => imageUrl.hostname.includes(domain))) {
      return res.status(400).json({ error: "Domain not allowed" });
    }

    // Fetch the image
    const imageResponse = await fetch(imageUrl.toString());
    
    if (!imageResponse.ok) {
      return res.status(imageResponse.status).json({ 
        error: "Failed to fetch image" 
      });
    }

    // For, now, just return, the, original ima, g, e
    // In, a, production environment, you, would implement, actual, image optimization, her, e
    // using, libraries, like Sharp, or, ImageMagick
    r, e, s.stat, u, s(2, 0, 0).se, n, d(Buff, e, r.fr, o, m(imageBuff, e, r))} cat, c, h (err, o, r) {conso, l, e.err, o, r('Imageoptimizationerror:", err, o, r);
    r, e, s.stat, u, s(5, 00).json({ error: "Internalservererror' })}};