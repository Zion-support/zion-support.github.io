#!/bin/bash

# Create error-report.js
cat > api/error-report.js << 'API_EOF'
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
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
    
    // Log the error for debugging
    console.error('Client Error Report:', {
      error: errorData,
      userAgent,
      url,
      timestamp
    });

    // In a real application, you would save this to a database
    // For now, we'll just acknowledge receipt
    res.status(200).json({ 
      success: true, 
      message: 'Error report received' 
    });
  } catch (error) {
    console.error('Error report processing failed:', error);
    res.status(500).json({ error: 'Failed to process error report' });
  }
});
API_EOF

# Create newsletter/subscribe.js
cat > api/newsletter/subscribe.js << 'API_EOF'
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // In a real application, you would save this to a database
    // For now, we'll just log the subscription
    console.log('Newsletter subscription:', { email, name });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
});
API_EOF

# Create onsite-request.js
cat > api/onsite-request.js << 'API_EOF'
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      serviceType, 
      address, 
      preferredDate, 
      message 
    } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        error: 'Name, email, and phone are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // In a real application, you would save this to a database
    // and send notifications to the team
    console.log('Onsite request received:', {
      name,
      email,
      phone,
      company,
      serviceType,
      address,
      preferredDate,
      message
    });

    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully' 
    });
  } catch (error) {
    console.error('Onsite request processing failed:', error);
    res.status(500).json({ error: 'Failed to process onsite request' });
  }
});
API_EOF

# Create quotes.js
cat > api/quotes.js << 'API_EOF'
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      company, 
      serviceType, 
      projectDescription, 
      budget, 
      timeline 
    } = req.body;
    
    // Validate required fields
    if (!name || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Name, email, and service type are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // In a real application, you would save this to a database
    // and send notifications to the sales team
    console.log('Quote request received:', {
      name,
      email,
      company,
      serviceType,
      projectDescription,
      budget,
      timeline
    });

    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`
    });
  } catch (error) {
    console.error('Quote request processing failed:', error);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
});
API_EOF

# Create shipping-rates.js
cat > api/shipping-rates.js << 'API_EOF'
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { destination, weight, dimensions } = req.body;
    
    // Mock shipping rates calculation
    const baseRate = 10; // Base shipping rate
    const weightMultiplier = weight * 0.5; // $0.50 per pound
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
  } catch (error) {
    console.error('Shipping rates calculation failed:', error);
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
});
API_EOF

# Create subscribe.js
cat > api/subscribe.js << 'API_EOF'
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, interests } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // In a real application, you would save this to a database
    console.log('Subscription received:', { email, name, interests });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed' 
    });
  } catch (error) {
    console.error('Subscription failed:', error);
    res.status(500).json({ error: 'Failed to process subscription' });
  }
});
API_EOF

# Create wallet.js
cat > api/wallet.js << 'API_EOF'
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, amount, walletId } = req.body;
    
    if (!action) {
      return res.status(400).json({ error: 'Action is required' });
    }

    // Mock wallet operations
    let result;
    
    switch (action) {
      case 'balance':
        result = {
          balance: 1000, // Mock balance
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
          transactionId: `dep_${Date.now()}`
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
          transactionId: `wit_${Date.now()}`
        };
        break;
        
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Wallet operation failed:', error);
    res.status(500).json({ error: 'Failed to process wallet operation' });
  }
});
API_EOF

echo "All API files created successfully!"
