<<<<<<< HEAD






export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}

  res.status(200).json({ message: 'Checkout session created' });
}
export default function handler() { return null; }

  res.status(200).json({ "message": 'Checkout session created' });
}


import Stripe from 'stripe';

});

async function handler() { return null; }
  if (req.method !== 'POST') {}
    res.statusCode = 405;'
    res.setHeader('Allow', 'POST');'
    res.end('Method Not Allowed');
    return;

    const { priceId, quantity = 1 } = req.body || {};
    
    if (!priceId) {}
      res.statusCode = 400;'
      res.json({ error: 'Price ID is required' });

    const session = await stripe.checkout.sessions.create({'
      mode: 'subscription','
      payment_method_types: ['card'],
      line_items: []
        {}
          price: priceId,
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
}

export default withErrorLogging(handler);

export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',')

});

async function handler() { return null; }
  if (req.method !== 'POST') {}
    res.statusCode = 405;'
    res.setHeader('Allow', 'POST');'
    res.end('Method Not Allowed');
    return;


  try {
  // TODO: Implement

    const { priceId, quantity = 1 } = req.body || {};
    
    if (!priceId) {}
      res.statusCode = 400;'
      res.json({ error: 'Price ID is required' });

    const session = await stripe.checkout.sessions.create({'
      mode: 'subscription','
      payment_method_types: ['card'],
      line_items: []
        {}
          price: priceId,

          quantity: quantity,
        },]
      ],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,`
      cancel_url: `${req.headers.origin}/cancel`,
    });





    res.statusCode = 200;
    res.json({}
      success: true, 
      sessionId: session.id,

      url: session.url;)
  } catch (err) {

    // console.error('Checkout session API error:', err);
    res.statusCode = 500;'
    res.json({ error: err.message || 'Checkout session creation failed' });
  }


























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
}
}

export default withErrorLogging(handler),


export default withErrorLogging(handler);




=======
export default function handler(req, res) {
  res.status(200).json({ message: 'Checkout session created' });
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
