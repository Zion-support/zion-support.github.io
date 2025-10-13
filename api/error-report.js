export default function handler(req, res)   {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
<<<<<<< HEAD

    const { error, stack, url, userAgent } = req.body;
=======
const { error, stack, url, userAgent } = req.body;
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    console.error('Client Error Report:', { error, stack, url, userAgent });
    console.log('Error report received:', new Date().toISOString());
    
    res.status(200).json({ success: true, message: 'Error report received' });
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ error: 'Failed to process error report' });
  }
}