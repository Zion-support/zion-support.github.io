export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { company, contact, service, message } = req.body;
    
    if (!company || !contact || !service) {
      return res.status(400).json({ error: 'Company, contact, and service are required' });
    }
    
    // Mock onsite request processing
    console.log('Onsite request:', { company, contact, service, message });
    
    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully' 
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ error: 'Failed to submit onsite request' });
  }
}