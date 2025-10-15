export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, projectType, budget, timeline, description } = req.body;

    if (!name || !email || !company || !projectType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Here you would typically save to database or send to email service
    console.log('Quote request:', {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      description,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ message: 'Quote request submitted successfully' });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
}
