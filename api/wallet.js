import { withErrorLogging } from '../withErrorLogging.cjs';

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Sample wallet data - in production, this would come from a secure source
    const walletData = {
      balance: 0,
      currency: 'USD',
      transactions: [],
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json(walletData);
  } catch (error) {
    console.error('Wallet data fetch failed:', error);
    res.status(500).json({
      error: 'Failed to fetch wallet data',
      message: error.message,
    });
  }
});