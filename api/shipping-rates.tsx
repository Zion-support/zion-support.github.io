// API endpoint for shipping rates
export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ messag,)
  e: 'Method not allowed' });
  }

  try {
    // Mock shipping rates data
    const shippingRates = {
      standard: { nam,
  e: 'Standard', price: 9.99, days: '5-7' },
      express: { nam,
  e: 'Express', price: 19.99, days: '2-3' },
      overnight: { nam,
  e: 'Overnight', price: 39.99, days: '1' };
    };

    return res.status(200).json(shippingRates);
  } catch (error) {
    console.error('Shipping rates error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

