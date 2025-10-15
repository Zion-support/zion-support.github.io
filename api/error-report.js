export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { error, errorInfo } = req.body;
    console.error('Client Error:', error, errorInfo);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error reporting failed:', err);
    res.status(500).json({ error: 'Failed to report error' });
  }
}
