<<<<<<< HEAD
function handler(req, res) {};
  if (req.method !== 'POST') {};
=======
export default function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { error, stack, url, userAgent } = req.body;
    
    console.error('Client Error:', {
      error,
      stack,
      url,
      userAgent,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error reporting failed:', err);
    res.status(500).json({ error: 'Failed to report error' });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, userAgent, url } = req.body;
    
    console.error('Client Error Report:', {
      error,
      stack,
      userAgent,
      url,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ message: 'Error reported successfully' });
  } catch (error) {
    console.error('Error reporting failed:', error);
    res.status(500).json({ error: 'Failed to report error' });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
