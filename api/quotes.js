import { withErrorLogging } from './withErrorLogging.cjs';

// Sample quotes data
const quotes = [
  {
    id: 1,
    text: "The future of business lies in AI-driven solutions that enhance human capabilities.",
    author: "Zion Tech Group",
    category: "AI"
  },
  {
    id: 2,
    text: "Technology is best when it brings people together and solves real-world problems.",
    author: "Zion Tech Group",
    category: "Technology"
  },
  {
    id: 3,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Innovation"
  },
  {
    id: 4,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation"
  },
  {
    id: 5,
    text: "AI will not replace humans, but humans who use AI will replace those who don't.",
    author: "Zion Tech Group",
    category: "AI"
  }
];

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { category, limit = 5 } = req.query || {};
    
    let filteredQuotes = quotes;
    
    if (category) {
      filteredQuotes = quotes.filter(quote => 
        quote.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Limit results
    const limitedQuotes = filteredQuotes.slice(0, parseInt(limit));
    
    // Randomize order
    const shuffledQuotes = limitedQuotes.sort(() => Math.random() - 0.5);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      quotes: shuffledQuotes,
      total: shuffledQuotes.length,
      category: category || 'all'
    }));
  } catch (error) {
    console.error('Quotes API error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to fetch quotes' }));
  }
}

export default withErrorLogging(handler);