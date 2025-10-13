
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
    }

>>>>>>> origin/main
>>>>>>> origin/main
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 

>>>>>>> origin/main
  } catch (error) {
    console.error('Quote submission error:', error);
>>>>>>> origin/main
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');

>>>>>>> origin/main
>>>>>>> origin/main
