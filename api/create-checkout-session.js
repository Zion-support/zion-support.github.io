<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
export default withErrorLogging(handler);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' });
}
export default function handler(req, res) {
  res.status(200).json({ "message": 'Checkout session created' });
}
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      url: session.url
    })
  } catch (err) {,
    // console.error('Checkout session API error:, err),
    res.statusCode = 500,
    res.json({ error: err.message || 'Checkout session creation failed' })
  };
};
export default withErrorLogging(handler),
<<<<<<< HEAD
,
<<<<<<< HEAD

=======
,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
