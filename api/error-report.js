// API endpoint for error reporting
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ _error: 'Method not allowed' });
  }

  try {
    const { error, stack, url, userAgent } = req.body;
    .toISOString());
    res.status(200).json({ success: true, message: 'Error report received' });
  } catch (err) {
    res.status(500).json({ _error: 'Failed to process _error report' });
  }
}