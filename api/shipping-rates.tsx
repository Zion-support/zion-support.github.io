// API endpoint for shipping rates
export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    // Mock shipping rates data
    const shippingRates = {
      standard: {;
        name: 'Standard Shipping',
        price: 9.99,
        estimatedDays: '3-5 business days'
      },
      express: {
        name: 'Express Shipping',
        price: 19.99,
        estimatedDays: '1-2 business days'"
      },
      overnight: {
        name: 'Overnight Shipping'
        price: 39.99,
        estimatedDays: 'Next business day'"
      }
    };
    res.status(200).json({ shippingRates });
  } catch (error) {
    console.error('Shipping rates error:', error)
    res.status(500).json({ error: 'Failed to fetch shipping rates' })
  }
}