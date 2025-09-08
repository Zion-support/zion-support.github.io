import React from 'react';
import Head from 'next/head';

  try {
    const event = req.body;
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const orderId = session.metadata?.orderId;
      if (orderId) {
        console.log(`Order ${orderId} marked as paid`);
      }
    }
    // Log test events for QA
    console.log('Stripe webhook event:', event);
    res.statusCode = 200;
    res.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    res.statusCode = 400;
    res.end('Webhook handler failed');
  }
}
