export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    // In a real implementation, you would integrate with Stripe here
    // For now, we'll return a mock client secret
    const clientSecret = 'pi_' + Date.now() + '_secret_' + Math.random().toString(36).substr(2, 9);

    res.status(200).json({ 
      clientSecret,
      message: 'Payment intent created successfully' 
    });
  } catch (err) {
    console.error('Error in payment intent handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}