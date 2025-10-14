// API endpoint for error reporting
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ _error: 'Method not allowed' });
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  try {
    const { error, stack, url, userAgent } = req.body;
    .toISOString());
    res.status(200).json({ success: true, message: 'Error report received' });
  } catch (err) {
    res.status(500).json({ _error: 'Failed to process _error report' });
    console.error('Client Error Report:', req.body)
    console.log('Error report received:', req.body)
    res.status(200).json({ success: true, message: 'Error report received' })
  } catch (_error) {
    console.error('Error processing error report:', error)
    res.status(500).json({ error: 'Failed to process error report' })
  }
}