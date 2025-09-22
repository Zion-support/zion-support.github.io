export default function handler(req, res) {
  // Disallow methods other than GET and HEAD
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    res.status(405).end('Method Not Allowed');
    return;
  }

  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Health-Check', 'true');

  // For HEAD, send headers only
  if (req.method === 'HEAD') {
    res.status(200).end();
    return;
  }

  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
}