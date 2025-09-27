import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { url, width, height, quality } = req.query;

    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    // Fetch the image
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(400).json({ error: 'Failed to fetch image' });
    }

    const imageBuffer = await response.arrayBuffer();

    // Set appropriate headers
    res.setHeader('Content-Type', response.headers.get('content-type') || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

    // For now, just return the original image
    // In a production environment, you would implement actual image optimization here
    // using libraries like Sharp or ImageMagick
    res.status(200).send(Buffer.from(imageBuffer));
  } catch (error) {
    console.error('Image optimization error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}