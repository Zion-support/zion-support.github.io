export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' });
=======
export default function handler(req, res) {;
  res.status(200).json({ message: "Checkout session created" });,
>>>>>>> origin/automation-fixes
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
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
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

export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}













export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' });
}
export default function handler(req, res) {
  res.status(200).json({ "message": 'Checkout session created' });
}

export default withErrorLogging(handler);
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
>>>>>>> main
>>>>>>> main
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
