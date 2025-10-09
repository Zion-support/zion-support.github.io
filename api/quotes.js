export default async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
<<<<<<< HEAD
      return res.status(400).json({ error: 'Name, email, phone, and details are required' });
=======
<<<<<<< HEAD
      res.status(400).json({ error: 'Name, email, phone, and details are required' });
      return;
=======
      return res.status(400).json({ error: 'Name, email, phone, and details are required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
    }

    // Process quote submission logic here
    const quote = {
<<<<<<< HEAD
      id: Date.now().toString(),
=======
<<<<<<< HEAD
      id: 'quote_' + Math.random().toString(36).substr(2, 9),
=======
      id: Date.now().toString(),
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
      name,
      email,
      phone,
      details,
<<<<<<< HEAD
      country: country || 'US',
      service: service || 'general',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real application, you would save this to a database
    console.log('Quote submitted:', quote);
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Quote submitted successfully', quoteId: quote.id });
  } catch (error) {
    console.error('Quote submission error:', error);
=======
      country,
      service,
<<<<<<< HEAD
      timestamp: new Date().toISOString()
=======
      createdAt: new Date().toISOString()
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quote });
  } catch (error) {
    console.error('Error processing quote:', error);
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
    res.status(500).json({ error: error.message || 'Quote submission failed' });
  }
}