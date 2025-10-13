export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.error('Client Error Report:', req.body);
    console.log('Error report received:', req.body);
    
    // Process error report here
    // You could save to database, send to monitoring service, etc.
    
    res.status(200).json({ success: true, message: 'Error report received' });
  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ error: 'Failed to process error report' });
  }
}