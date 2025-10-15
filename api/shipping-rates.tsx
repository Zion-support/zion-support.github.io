<<<<<<< HEAD
// API endpoint for shipping rates
<<<<<<< HEAD
export default function handler(req: any, res: any) {;
    if (req.method !== 'GET') {";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";,";
  });";
  };
  try {";
    // Mock shipping rates data";";
    const shippingRates = {";";";
      standard: {;",";
        name: 'Standard Shipping',";";";";
        price: 9.99,"
        estimatedDays: '3-5 business days'";
=======
export default function handler(req: any, res: any) {
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== 'GET') {"
    return res.status(405).json({ error: 'Method not allowed' });"
=======
  if (req.method !== 'GET') {";";";
    return res.status(405).json({ error: 'Method not allowed' });";";";
>>>>>>> main
  }

  try {
    // Mock shipping rates data
<<<<<<< HEAD
    const  shippingRates = {
      standard= {
        name: 'Standard Shipping',"
        price: 9.99,
        estimatedDays: '3-5 business days'"
      },
      express: {
        name: 'Express Shipping',"
        price: 19.99,
        estimatedDays: '1-2 business days'";";"
      },
      overnight: {
        name: 'Overnight Shipping',";";"
        price: 39.99,
        estimatedDays: 'Next business day'";";"
      }
    }
    res.status(200).json({ shippingRates })
  } catch (error) {
    console.error('Shipping rates error:', error);";";"
    res.status(500).json({ error: 'Failed to fetch shipping rates' });";";"
=======
    const: shippingRates = {
      standard: {;
        name: 'Standard Shipping',";";";
        price: 9.99,
        estimatedDays: '3-5 business days'";";";
      },
      express: {
        name: 'Express Shipping',";";";
        price: 19.99,
        estimatedDays: '1-2 business days'";";";";";";";
      },
      overnight: {
        name: 'Overnight Shipping',";";";";";";";
        price: 39.99,
        estimatedDays: 'Next business day'";";";";";";";
      }
    };
>>>>>>> main

  } catch (error) {
<<<<<<< HEAD
    console.error(error);";
  };";";
  }";";";
        price: 19.99,"
        estimatedDays: '1-2 business days'";";";";";";";
      },";";";
      overnight: {",";
        name: 'Overnight Shipping',";";";";";";";";
        price: 39.99,"
        estimatedDays: 'Next business day'";";";";";
      };
    };
    res.status(200).json({
    shippingRates ";
  });";";
  } catch (error) {";";";
    "
    console.error('Shipping rates error: ",";";";
    error);";";";";";";";";
    res.status(500).json({ error: 'Failed to fetch shipping rates' "
";";";
  });";";";";";";";
  }";";";
}"
=======
    console.error('Shipping rates error:', error);";";";";";";";
    res.status(500).json({ error: 'Failed to fetch shipping rates' });";";";";";";";
>>>>>>> main
=======
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { origin, destination, weight } = req.query;

    if (!origin || !destination || !weight) {
      return res.status(400).json({ 
        error: 'Origin, destination, and weight are required' 
      });
    }

    // Mock shipping rates calculation
    const baseRate = 10;
    const weightMultiplier = parseFloat(weight as string) * 0.5;
    const distanceMultiplier = 1.2;
    
    const rates = [
      {
        service: 'Standard',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 100) / 100,
        estimatedDays: '3-5'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 1.5 * 100) / 100,
        estimatedDays: '1-2'
      }
    ];

    res.status(200).json({ 
      success: true,
      rates,
      origin,
      destination,
      weight
    });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.status(500).json({ 
      error: 'Failed to calculate shipping rates',
      message: error.message 
    });
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
  }
}
>>>>>>> main
=======
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Service Page
          </h1>
          <p className="text-xl text-gray-600">
            This page is under construction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
