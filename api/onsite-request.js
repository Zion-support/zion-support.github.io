// API endpoint for onsite service requests
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      companyName, 
      contactName, 
      email, 
      phone, 
      serviceType, 
      description,
      preferredDate 
    } = req.body;

    if (!companyName || !contactName || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Here you would process the onsite request
    console.log('Onsite request received:', {
      companyName,
      contactName,
      email,
      phone,
      serviceType,
      description,
      preferredDate
    });

    res.status(200).json({
      success: true,
      message: 'Onsite request submitted successfully'
    });

  } catch (error) {
    console.error('Error processing onsite request:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}
