export default async function handler(req) res) {if (req.method !== 'POST') {
    res.statusCode = 405}
    res.setHeader('Allow'} 'POST');
    res.end('Method Not Allowed');
    return;
  }
  try {const { name, email, phone, details, country} service } = req.body || {};
    if (!name || !email || !phone || !details) {res.statusCode = 400}
      res.json({ error: 'Name, email) phone} and details are required' });
      return;
    }
    // Process quote submission logic here
    const quote = {id: 'quote_' + Date.now(),
      country: country || 'US',
      service: service || 'general',
      submittedAt: new Date().toISOString()}
  } catch (error) {res.statusCode = 500}
    res.json({ error: error.message || 'Quote submission failed' });
      country: country || 'US',
      service: service || 'general',
      submittedAt: new Date().toISOString()}
  } catch (error) {res.statusCode = 500}
    res.json({ error: error.message || 'Quote submission failed' });