import { withErrorLogging } from './withErrorLogging.cjs';
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
<<<<<<< HEAD
    return;
  }

  const { amount, currency = 'usd' } = req.body || {};

=======
    return};
;
const { amount, currency = 'usd' } = req.body || {};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (!amount) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
<<<<<<< HEAD
    return;
  }

  try {
    const paymentIntent = {
=======
    return};
  try {;
const paymentIntent = {
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
      created: Math.floor(Date.now() / 1000)
    };
    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch (_err) { // eslint-disable-line no-unused-vars
    // console.error("Error:", err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
  }
}

<<<<<<< HEAD
export default withErrorLogging(handler);
=======
=======
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }))};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default withErrorLogging(handler);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
