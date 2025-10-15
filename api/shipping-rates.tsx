// API endpoint for shipping rates
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

<<<<<<< HEAD:api/shipping-rates.js
  try {
    // Mock shipping rates data
    const shippingRates = {
      standard: {
        name: 'Standard Shipping',
        price: 9.99,
        estimatedDays: '3-5 business days'
      },
      express: {
        name: 'Express Shipping',
        price: 19.99,
        estimatedDays: '1-2 business days'
      },
      overnight: {
        name: 'Overnight Shipping',
        price: 29.99,
        estimatedDays: 'Next business day'
      }
    };

    res.status(200).json(shippingRates);
  } catch (error) {
    console.error('Error fetching shipping rates:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
=======
interface ShippingRatesProps {
  className?: string;
  children?: React.ReactNode;
}

const ShippingRates: React.FC<ShippingRatesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`shipping-rates ${className}`}>
      {children}
    </div>
  );
};

export default ShippingRates;
>>>>>>> cursor/fix-errors-and-merge-to-main-7017:api/shipping-rates.tsx
