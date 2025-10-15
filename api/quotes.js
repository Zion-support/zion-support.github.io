<<<<<<< HEAD
export default async function handler(req, res) {};
  if (req.method !== 'POST') {};
=======
export default async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, company, service, budget, timeline, message } = req.body;

    if (!name || !email || !service) {
      res.status(400).json({ error: 'Name, email, and service are required' });
      return;
    }

    // Here you would typically save to a database
    console.log('Quote request:', { name, email, company, service, budget, timeline, message });
    
    res.status(200).json({ success: true, message: 'Quote request submitted successfully' });
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
