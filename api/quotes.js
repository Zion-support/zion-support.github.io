const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({
        error: 'Internal server error',
        message: error.message
      });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Sample quotes data - in a real app, this would come from a database
    const quotes = [
      {
        id: 1,
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
      },
      {
        id: 2,
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
      },
      {
        id: 3,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      }
    ];

    // Return a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).json({
      success: true,
      quote: randomQuote
    });

  } catch (error) {
    console.error('Quotes API error:', error);
    res.status(500).json({
      error: 'Failed to fetch quotes',
      message: error.message
    });
  }
});