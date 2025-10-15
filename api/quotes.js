export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const quotes = [
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Technology is nothing. What's important is that you have a faith in people. - Steve Jobs",
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Innovation is the ability to see change as an opportunity, not a threat. - Steve Jobs"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).json({ quote: randomQuote });
  } catch (err) {
    console.error('Error in quotes handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}