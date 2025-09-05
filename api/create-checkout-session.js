<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> pr-11913
export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' });
}
<<<<<<< HEAD
export default function handler(req, res) {
  res.status(200).json({ "message": 'Checkout session created' });
}
<<<<<<< HEAD
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
=======
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
import Stripe from 'stripe';
import { withErrorLogging } from '../../utils/withErrorLogging.cjs';

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
    const { priceId, quantity = 1 } = req.body || {};
    
    if (!priceId) {
      res.statusCode = 400;
      res.json({ error: 'Price ID is required' });
      return;
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.statusCode = 200;
    res.json({ 
      success: true, 
      sessionId: session.id,
      url: session.url 
    });
  } catch (err) {
    // console.error('Checkout session API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Checkout session creation failed' });
  }
}

export default withErrorLogging(handler);
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> pr-11914
=======
>>>>>>> pr-11913
