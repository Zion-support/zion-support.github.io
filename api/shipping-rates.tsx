// API endpoint for shipping rates
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock shipping rates data
    const rates = [
      { service: 'Standard', cost: 10.99, days: '5-7 business days' },
      { service: 'Express', cost: 19.99, days: '2-3 business days' },
      { service: 'Overnight', cost: 29.99, days: '1 business day' }
    ];

    res.status(200).json({ rates });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
}

