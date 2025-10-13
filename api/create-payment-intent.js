import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

    };

    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch (_err) { // eslint-disable-line no-unused-vars
    // console.error("Error:", err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
