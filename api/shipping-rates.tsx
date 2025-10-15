// API endpoint for shipping rates
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Mock shipping rates data
    const shippingRates = [
      { id: 'standard', name: 'Standard Shipping', price: 9.99, estimatedDays: '3-5' },
      { id: 'express', name: 'Express Shipping', price: 19.99, estimatedDays: '1-2' },
      { id: 'overnight', name: 'Overnight Shipping', price: 39.99, estimatedDays: '1' }
    ];

    res.status(200).json({ shippingRates });
  } catch (error) {
    console.error('Error fetching shipping rates:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}