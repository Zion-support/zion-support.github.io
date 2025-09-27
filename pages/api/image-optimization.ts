import { NextApiRequest  NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest  res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })}

  const { url  w  h  q  f  blur } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parameter is required' })}

  try {
    // Validate URL
    const imageUrl = new URL(url);
    
    // Basic security check - only allow certain domains
    const allowedDomains = [
      'ziontechgroup.com',
      'zion.app',
      'images.unsplash.com',
      'via.placeholder.com'];
    
    if (!allowedDomains.some(domain => imageUrl.hostname.includes(domain))) {
      return res.status(400).json({ error: 'Domain not allowed' })}

    // Fetch the image
    const imageResponse = await fetch(imageUrl.toString());
    
    if (!imageResponse.ok) {
      return res.status(imageResponse.status).json({ 
        error: 'Failed to fetch image' 
      })}

    const imageBuffer = await imageResponse.arrayBuffer();
    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';

    // Set appropriate headers
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public  max-age=31536000, immutable');
    
    if (w) res.setHeader('X-Image-Width', w as string);
    if (h) res.setHeader('X-Image-Height', h as string);
    if (q) res.setHeader('X-Image-Quality', q as string);
    if (f) res.setHeader('X-Image-Format', f as string);

    // For now  just return the original image
    // In a production environment  you would implement actual image optimization here
    // using libraries like Sharp or ImageMagick
    res.status(200).send(Buffer.from(imageBuffer))} catch (error) {
    console.error('Image optimization error:', error);
    res.status(500).json({ error: 'Internal server error' })}
}