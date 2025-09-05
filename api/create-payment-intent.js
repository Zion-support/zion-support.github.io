>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// const PROD_DOMAIN = 'app.ziontechgroup.com';

// function isProdDomain() {
//   const url = process.env.URL || '';
//   try {
//     return new URL(url).hostname === PROD_DOMAIN;
//   } catch {
//     return false;
//   }
// }

>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

    res.json({ error: err.message || 'Payment intent creation failed' });
  }
}

>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export default withErrorLogging(handler);
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
