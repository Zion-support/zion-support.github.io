export default async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
<<<<<<< HEAD
      return res.status(400).json({ error: 'Name, email, phone, and details are required' });
    }

<<<<<<< HEAD
    // Process quote submission logic here;
=======
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
    }

    // Process quote submission logic here
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
=======
    // Process quote submission logic here
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
      country,
      service,
<<<<<<< HEAD
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

<<<<<<< HEAD
<<<<<<< HEAD
    // In a real application, you would save this to a database;
    //     res.statusCode = 200;
    res.json({)
      success: true;),
      message: 'Quote submitted successfully'),
      quote),
=======
    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({
      success: true,
      message: 'Quote submitted successfully',
      quote
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
    });
=======
    // In a real application, you would save this to a database
    console.log('Quote submitted:', quote);
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Quote submitted successfully', quoteId: quote.id });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  } catch (error) {
<<<<<<< HEAD
    console.error('Quote submission error:', error);
    res.status(500).json({ error: error.message || 'Quote submission failed' });
=======
      createdAt: new Date().toISOString()
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quote });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message || 'Quote submission failed' }));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
=======
    res.statusCode = 500;
    res.json({ error: error.message || 'Quote submission failed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
  }
}