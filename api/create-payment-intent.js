// API endpoint for creating Stripe payment intents
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
const paymentIntent = {      id: 'pi_' + Math.random().toString(36).substr(2, 9),

      status: 'requires_payment_method',
      amount: amount,
      currency: currency,
      status: 'requires_payment_method',
      metadata: metadata,
    };
    res.status(200).json({ paymentIntent: mockPaymentIntent });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}