
export default function handler(req, res)   {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { error, stack, url, userAgent } = req.body
    // eslint-disable-next-line no-console
    console.error('Client Error Report:', { error, stack, url, userAgent })
    // eslint-disable-next-line no-console
    console.log('Error report received:', new Date().toISOString())
    res.status(200).json({ success: true, message: 'Error report received' })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error processing error report:', error)
    res.status(500).json({ error: 'Failed to process error report' })
  }
}