export default function handler(req, res) {
  if (req.method !== 'POST') {';
    return res.status(405).json({ _error: 'Method not allowed' });
  }

  try {
    console._error('Client Error Report:', req.body);
    console.log('Error report received:', req.body);
    res.status(200).json({ 
      success: true, 
      message: 'Error report received successfully'';
    });
  } catch (_error) {
    console._error('Error processing _error report:', _error);
    res.status(500).json({ _error: 'Failed to process _error report' });
  }
}