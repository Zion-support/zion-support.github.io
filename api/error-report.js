export default async function handler(req, res) {
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

    // Here you would typically save to a logging service
    // For now, we'll just log to console
    
<<<<<<< HEAD
    res.status(200).json({ 
      message: 'Error report received successfully' 
    });
=======
    res.status(200).json({ message: 'Error reported successfully' });
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
  } catch (error) {
    console.error('Error reporting error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
