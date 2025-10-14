// API endpoint for onsite service requests
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      address, 
      serviceType, 
      description, 
      preferredDate,
      urgency 
    } = req.body;

    if (!name || !email || !phone || !address) {
      return res.status(400).json({ 
        error: 'Name, email, phone, and address are required' 
      });
    }

    // In a real implementation, you would:
    // 1. Validate all required fields
    // 2. Store in database
    // 3. Send confirmation email to client
    // 4. Notify internal team
    // 5. Schedule appointment if needed

    const request = {
      id: `req_${Date.now()}`,
      name,
      email,
      phone,
      company: company || '',
      address,
      serviceType: serviceType || 'general',
      description: description || '',
      preferredDate: preferredDate || null,
      urgency: urgency || 'normal',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Log the request (in production, use proper service)
    console.log('Onsite Service Request:', request);

    res.status(200).json({ 
      success: true, 
      message: 'Service request submitted successfully',
      requestId: request.id 
    });
  } catch (error) {
    console.error('Error processing onsite request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}