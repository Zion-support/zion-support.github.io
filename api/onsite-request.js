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
      preferredDate,
      address 
    } = req.body;

    if (!companyName || !contactName || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Company name, contact name, email, and service type are required' 
      });
    }

    // In a real implementation, you would:
    // 1. Validate all required fields
    // 2. Store in database
    // 3. Send confirmation email
    // 4. Notify relevant team members

    const request = {
      companyName,
      contactName,
      email,
      phone,
      serviceType,
      description,
      preferredDate,
      address,
      requestedAt: new Date().toISOString(),
      status: 'pending',
      requestId: `onsite_${Date.now()}`
    };

    // Mock response for development
    console.log('Onsite request:', request);

    res.status(200).json({
      success: true,
      message: 'Onsite service request submitted successfully',
      requestId: request.requestId
    });

  } catch (error) {
    console.error('Error in onsite request:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to submit onsite request'
    });
  }
}