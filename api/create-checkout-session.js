<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function handler(req, res) {
  res.status(200).json({ message: 'Checkout session created' });
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}          price: priceId,
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

;
export default function handler() {res.status(200).json({ message: "Checkout session created" })}ursor/automate-test-improve-and-merge-code-646c;
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' })}
export default function handler() {res.status(200).json({ "message": 'Checkout session created' })}
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}import Stripe from 'stripe';
async function handler() {if (req.method !== 'POST') {res.statusCode = 405;
    res.setHeader('Allow', 'POST')res.end('Method Not Allowed')return;
  }try {const { priceId, quantity  = 1 } = req.body || {}if (!priceId) {res.statusCode = 400;
      res.json({ error: 'Price ID is required' })return;
    }const session = await stripe.checkout.sessions.create({mode: 'subscription',payment_method_types: ['card'],line_items: [;
        {price: priceId,quantity: quantity;
        }
      ],success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,cancel_url: `${req.headers.origin}/cancel`;
    })ursor/automate-test-improve-and-merge-code-646c;
    res.statusCode = 200;
    res.json({success: true,sessionId: session.id,url: session.url;
    })} catch (err) {// console.error('Checkout session API error:', err)res.statusCode = 500;
    res.json({ error: err.message || 'Checkout session creation failed' })}
}export default withErrorLogging(handler)export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}ursor/automate-test-improve-and-merge-code-646c;
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}export default function handler() {res.status(200).json({ message: "Checkout session created" })}
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' })}
export default function handler() {res.status(200).json({ "message": 'Checkout session created' })}url: session.url;
    })} catch (err) {,// console.error('Checkout session API error:, err),res.statusCode = 500,res.json({ error: err.message || 'Checkout session creation failed' })}}export default withErrorLogging(handler),}export default withErrorLogging(handler)export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}ursor/automate-test-improve-and-merge-code-646c;
}export default withErrorLogging(handler)export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;

    if (!amount) {
      return res.status(400).json({ message: 'Amount is required' });
    }

    const session = stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: 'Zion Tech Group Service'
            },
            unit_amount: amount * 100, // Convert to cents
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
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
=======
,
<<<<<<< HEAD
=======
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
=======
,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
}

export default withErrorLogging(handler);
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
<<<<<<< HEAD
export default function handler(req, res) {
  res.status(200).json({ message: 'Checkout session created' });
}
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a









<<<<<<< HEAD
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}`;
'
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}''

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> main
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
