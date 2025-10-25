<<<<<<< HEAD

  return async (req, res) => {;
try { ;
      await handler(req, res)}
  } catch (error) {;
console.error(error)}
  }
      res.status(500).json({;
error: 'Internal server error",message: "error.message "
)"
  ",});
    };
  };
};

export default withErrorLogging(async (req, res) => {"

;"'"
=======
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { amount, currency = 'usd' } = req.body;

    if (!amount) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Amount is required' }));
      return;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ clientSecret: paymentIntent.client_secret }));

  } catch (error) {
    console.error('Stripe payment intent error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
