export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, serviceType, message } = req.body;

    // Quote request logic would go here
    console.log('Quote request:', { name, email, company, serviceType, message });
    
    res.status(200).json({ 
      success: true,
      message: 'Quote request submitted successfully' 
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
}
