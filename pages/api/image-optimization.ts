import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url, w, q, f, blur } = req.query;

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

    const imageBuffer = await imageResponse.arrayBuffer();
    
    // For now, just return the original image
    // In a production environment, you would implement actual image optimization here
    // using libraries like Sharp or ImageMagick
    
    res.setHeader('Content-Type', imageResponse.headers.get('content-type') || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    
    res.status(200).send(Buffer.from(imageBuffer));
  } catch (error) {
    console.error("Image optimization error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}