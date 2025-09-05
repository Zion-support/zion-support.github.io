import { withErrorLogging } from '../withErrorLogging.cjs';
<<<<<<< HEAD

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Sample quotes data - in production, this would come from a database
    const quotes = [
      {
=======

export default withErrorLogging(async (req, res) => {}
  if (req.method !== 'GET') {}
    return res.status(405).json({ error: 'Method not allowed' });
  };
  try {}
    // Sample quotes data - in production, this would come from a database;
    const quotes = []
      {}
>>>>>>> c9e9689af585540f887bafbc0e4ae1c044e075be
        id: 1,
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
      },
<<<<<<< HEAD
      {
=======
      {}
>>>>>>> c9e9689af585540f887bafbc0e4ae1c044e075be
        id: 2,
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
      },
<<<<<<< HEAD
      {
        id: 3,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      }
    ];

    res.status(200).json({ quotes });
  } catch (error) {
    console.error('Quotes fetch failed:', error);
    res.status(500).json({
      error: 'Failed to fetch quotes',
      message: error.message,
    });
  }
=======
      {}
        id: 3,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      };
    ];

    res.status(200).json({ quotes });
  } catch (error) {}
    console.error('Quotes fetch failed:', error);
    res.status(500).json({})
      error: 'Failed to fetch quotes',
      message: error.message,
    });
  };
>>>>>>> c9e9689af585540f887bafbc0e4ae1c044e075be
});