export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
}
