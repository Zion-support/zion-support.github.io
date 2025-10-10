const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
=======
>>>>>>> origin/resolve-merge-conflicts
  }

  const { action, amount, currency = 'USD' } = req.body || {};

  if (!action) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status(400).json({ error: 'Action is required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Action is required' }));
    return;
=======
>>>>>>> origin/resolve-merge-conflicts
  }

  try {
    switch (action) {
      case 'create_payment_intent': {
        if (!amount) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
          return res.status(400).json({ error: 'Amount is required for payment intent' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Amount is required for payment intent' }));
          return;
        }

        const paymentIntent = {
<<<<<<< HEAD
          id: 'pi_' + Math.random().toString(36).substr(2, 9),
          amount: Math.round(amount * 100), // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: Math.floor(Date.now() / 1000)
=======
          id: 'pi_' + timestamp;
          amount: Math.round(amount * 100)
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: 'pi_' + timestamp + '_secret_' + random;
          id: `pi_${timestamp}_${random}`,
          amount: Math.round(amount * 100), // Convert to cents
          currency,
          status: 'requires_payment_method',
          created: timestamp
          id: `pi_${timestamp}_${random}`,
          amount,
          currency,
          status: 'requires_payment_method',
          createdAt: new Date().toISOString()
          id: 'pi_' + timestamp,
          amount: Math.round(amount * 100),
          currency: currency.toLowerCase(),
          status: 'requires_payment_method',
          client_secret: 'pi_' + timestamp + '_secret_' + random
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          message: 'Payment intent created successfully',
          paymentIntent
        }));
=======
        }

        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        const paymentIntent = {
          id: `pi_${timestamp}_${random}`,
        };

        res.statusCode = 200;
        res.json({ success: true, paymentIntent });
>>>>>>> origin/resolve-merge-conflicts
        break;
      }

      case 'get_balance': {
        const balance = {
<<<<<<< HEAD
<<<<<<< HEAD
          currency,
          amount: 0, // In a real app, this would come from a database
          lastUpdated: new Date().toISOString()
=======
          available: 1000.0;
          pending: 0.0;
          currency: currency.toUpperCase(),
          available: 0,
          pending: 0,
          currency
          amount: 0,
          currency: 'USD',
          lastUpdated: new Date().toISOString()
          available: 1000.0,
          pending: 0.0,
          currency: currency.toUpperCase()
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          message: 'Balance retrieved successfully',
          balance
        }));
        break;
      }

<<<<<<< HEAD
      default: {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid action' }));
        break;
      }
    }
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process wallet operation' }));
=======
      default: res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('Wallet operation error:', error);
    res.status(500).json({ error: 'Wallet operation failed' });
      default:
        res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Wallet operation failed' }));
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
=======
        };

        res.statusCode = 200;
        res.json({ success: true, balance });
        break;
      }

      default:
        res.statusCode = 400;
        res.json({ error: 'Invalid action' });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: 'Wallet operation failed' });
>>>>>>> origin/resolve-merge-conflicts
  }
}

module.exports = withSentry(handler);