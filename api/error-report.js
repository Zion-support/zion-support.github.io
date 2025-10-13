/// Fixed regex
export default function handler(req, res) {
  if (req.method !== 'POST'
    return res.status(405).json({ error: 'Method not allowed'
    console.error('Client Error Report:'
    console.log('Error report received:'
    console.error('Error processing error report:'
    res.status(500).json({ error: 'Failed to process error report'