<<<<<<< HEAD
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, userAgent, url } = req.body;
    
    console.error('Client Error Report:', {
=======

  }


  try {

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
      error,
      stack,
      userAgent,
      url,
      timestamp: new Date().toISOString()
<<<<<<< HEAD
    });
    
    res.status(200).json({ message: 'Error reported successfully' });
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
  } catch (error) {
    console.error('Error reporting failed:', error);
    res.status(500).json({ error: 'Failed to report error' });
  }
<<<<<<< HEAD
}
=======


>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
