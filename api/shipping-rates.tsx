// API endpoint for shipping rates
export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Mock shipping rates data
    const shippingRates = [
      { country: 'US', rate: 15.99, currency: 'USD' },
      { country: 'CA', rate: 19.99, currency: 'CAD' },
      { country: 'UK', rate: 12.99, currency: 'GBP' },
      { country: 'DE', rate: 14.99, currency: 'EUR' }
    ];

    return res.status(200).json({ shippingRates });
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

