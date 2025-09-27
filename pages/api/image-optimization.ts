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
    new URL(url);
    
    // Simulate image optimization
    const optimizedUrl = `${url}?w=${w || 800}&h=${h || 600}&q=${q || 80}&f=${f || 'webp'}&blur=${blur || 0}`;
    
    res.status(200).json({
      success: true,
      originalUrl: url,
      optimizedUrl: optimizedUrl,
      parameters: {
        width: w || 800,
        height: h || 600,
        quality: q || 80,
        format: f || 'webp',
        blur: blur || 0
      },
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Image optimization error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}