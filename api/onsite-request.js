export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, message, service } = req.body;
    
    // TODO: Implement email sending or database storage
    console.log('Onsite Request:', {
      name,
      email,
      company,
      message,
      service,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ 
      message: 'Request submitted successfully',
      requestId: 'req_' + Math.random().toString(36).substr(2, 9)
    });
  } catch (error) {
    console.error('Onsite Request Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}