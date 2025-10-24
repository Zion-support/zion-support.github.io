// API endpoint for shipping rates
export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

const ShippingRates = () => {
  return null;
};

export default ShippingRates;
