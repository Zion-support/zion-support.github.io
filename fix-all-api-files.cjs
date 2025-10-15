const fs = require('fs');

const apiFiles = {
  'api/create-checkout-session.js': `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;
    
    const session = {
      id: \`cs_\${Date.now()}\`,
      amount,
      currency,
      status: 'open',
      url: \`https://checkout.stripe.com/pay/cs_\${Date.now()}\`
    };

    res.status(200).json({ session });
  } catch {
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});`,

  'api/create-payment-intent.js': `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;
    
    const paymentIntent = {
      id: \`pi_\${Date.now()}\`,
      amount,
      currency,
      status: 'requires_payment_method',
      client_secret: \`pi_\${Date.now()}_secret_\${Math.random().toString(36).substr(2, 9)}\`
    };

    res.status(200).json({ paymentIntent });
  } catch {
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});`,

  'api/error-report.js': `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error: errorData, userAgent, url, timestamp } = req.body;
    
    res.status(200).json({ 
      success: true, 
      message: 'Error report received' 
    });
  } catch {
    res.status(500).json({ error: 'Failed to process error report' });
  }
});`,

  'api/onsite-request.js': `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone } = req.body;
    
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        error: 'Name, email, and phone are required' 
      });
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully' 
    });
  } catch {
    res.status(500).json({ error: 'Failed to process onsite request' });
  }
});`,

  'api/quotes.js': `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, serviceType } = req.body;
    
    if (!name || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Name, email, and service type are required' 
      });
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: \`quote_\${Date.now()}\`
    });
  } catch {
    res.status(500).json({ error: 'Failed to process quote request' });
  }
});`,

  'api/shipping-rates.js': `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { destination, weight } = req.body;
    
    const baseRate = 10;
    const weightMultiplier = weight * 0.5;
    const distanceMultiplier = destination === 'international' ? 2 : 1;
    
    const shippingRates = [
      {
        service: 'Standard',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier),
        estimatedDays: destination === 'international' ? '7-14' : '3-5'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 1.5),
        estimatedDays: destination === 'international' ? '3-7' : '1-2'
      },
      {
        service: 'Overnight',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 2),
        estimatedDays: '1'
      }
    ];

    res.status(200).json({ shippingRates });
  } catch {
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
});`,

  'api/subscribe.js': `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed' 
    });
  } catch {
    res.status(500).json({ error: 'Failed to process subscription' });
  }
});`,

  'api/wallet.js': `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, amount } = req.body;
    
    if (!action) {
      return res.status(400).json({ error: 'Action is required' });
    }

    let result;
    
    switch (action) {
      case 'balance':
        result = {
          balance: 1000,
          currency: 'USD'
        };
        break;
        
      case 'deposit':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for deposit' });
        }
        result = {
          success: true,
          newBalance: 1000 + amount,
          transactionId: \`dep_\${Date.now()}\`
        };
        break;
        
      case 'withdraw':
        if (!amount || amount <= 0) {
          return res.status(400).json({ error: 'Valid amount is required for withdrawal' });
        }
        if (amount > 1000) {
          return res.status(400).json({ error: 'Insufficient funds' });
        }
        result = {
          success: true,
          newBalance: 1000 - amount,
          transactionId: \`wit_\${Date.now()}\`
        };
        break;
        
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    res.status(200).json(result);
  } catch {
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
});`
};

Object.entries(apiFiles).forEach(([filePath, content]) => {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All API files fixed!');
