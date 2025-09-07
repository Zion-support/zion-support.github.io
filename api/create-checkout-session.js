export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' });
}
export default function handler(req, res) {
  res.status(200).json({ "message": 'Checkout session created' });
}
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { items, customerEmail } = req.body || {};
    
    if (!items || !Array.isArray(items) || items.length === 0) {
      res.statusCode = 400;
      res.json({ error: 'Items are required' });
      return;
    }

    // TODO: Implement actual Stripe checkout session creation
    // This would involve calling Stripe API to create a checkout session
    
    res.statusCode = 200;
    res.json({ 
      success: true, 
      message: 'Checkout session created',
      sessionId: 'mock_session_id_' + Date.now()
    });
  } catch (err) {
    console.error('Checkout session API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to create checkout session' });
  }
}

export default withErrorLogging(handler);
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}

export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' });
}
export default function handler(req, res) {
  res.status(200).json({ "message": 'Checkout session created' });
}

      url: session.url
    })
  } catch (err) {,
    // console.error('Checkout session API error:, err),
    res.statusCode = 500,
    res.json({ error: err.message || 'Checkout session creation failed' })
  };
};
export default withErrorLogging(handler),
}

export default withErrorLogging(handler);
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
