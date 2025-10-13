// Removed unused withErrorLogging function

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { amount } = req.body;
  
  if (!amount) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
    return;
  }

  try {
    const paymentIntent = {
      status: 'requires_payment_method'
    };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(paymentIntent));
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
  }
}