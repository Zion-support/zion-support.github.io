// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    console.error('Error processing error report:', err);
    res.status(500).json({ error: 'Failed to process error report' });
  }
}