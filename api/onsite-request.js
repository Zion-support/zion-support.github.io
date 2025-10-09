// Onsite request API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Process onsite request logic here
    // In a real application, you would:
    // 1. Validate the data
    // 2. Store in database
    // 3. Send notification to team
    // 4. Send confirmation email to client

    console.log('Onsite request received:', { name, email, company, message });
    
    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully. We will contact you soon.' 
    });
  } catch (err) {
    console.error('Failed to process onsite request:', err);
    res.status(500).json({ error: 'Failed to process onsite request' });
  }
}