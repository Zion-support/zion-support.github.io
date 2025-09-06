



export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
>>>>>>> main
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' });
}
export default function handler(req, res) {
  res.status(200).json({ "message": 'Checkout session created' });
}


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
          quantity: quantity
        }
      ],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`
    });

>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
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
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
>>>>>>> main
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c








>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      url: session.url
    })
  } catch (err) {,
    // console.error('Checkout session API error:, err),
    res.statusCode = 500,
    res.json({ error: err.message || 'Checkout session creation failed' })
  };
};
export default withErrorLogging(handler),
,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}

export default withErrorLogging(handler);
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
>>>>>>> main
>>>>>>> main
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
