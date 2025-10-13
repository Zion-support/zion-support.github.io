export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message, service } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Name, email, and message are required' 
    });
  }

  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Here you would typically save to database or send notification
    console.log('Onsite request received:', { name, email, company, message, service });
    
    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully' 
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ error: 'Failed to submit onsite request' });
  }
}