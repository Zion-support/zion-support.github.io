<<<<<<< HEAD
export default function handler(req, res) {
=======
export default async (req, res) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
  if (req.method !== 'POST') {
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
<<<<<<< HEAD
}
=======
};
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
