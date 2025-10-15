<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default async (req, res) => {
  if (req.method !== 'POST') {"
    return res.status(405).json({ error: 'Method not allowed' });"
=======
<<<<<<< HEAD
export default async (req, res) => {;
    if (req.method !== 'POST') {";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";
  };
=======
export default async function handler(req, res) {
<<<<<<< HEAD
  if (req.method !== 'POST') {";
    return res.status(405).json({ error: 'Method not allowed' });";
>>>>>>> main
=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
  }

  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const { error, stack, userAgent, url } = req.body
    console.error('Client Error Report:', {"
=======
    const { error, stack, userAgent, url 
  
  } catch (error) {
    console.error(error);";
  };";";
  }";";";
    console.error('Client Error Report:", {";";";
    "
    ";
>>>>>>> main
=======
    const { error, userAgent, url, timestamp } = req.body;

    if (!error) {
      return res.status(400).json({ error: 'Error details are required' });
    }

    // Log the error (in production, you'd send this to a logging service)
    console.error('Client Error Report:', {
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
    const { error, stack, userAgent, url } = req.body;
    
    console.error('Client Error Report:', {
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
      error,
      userAgent,
      url,
<<<<<<< HEAD
      timestamp: new Date().toISOString()
    });
    
    res.status(200).json({ message: 'Error reported successfully' });
  } catch (error) {
    console.error('Error reporting failed:', error);
    res.status(500).json({ error: 'Failed to report error' });
  }
}
<<<<<<< HEAD
=======
}
>>>>>>> main
>>>>>>> main
=======
      timestamp: timestamp || new Date().toISOString()
    });

    // Here you would typically send the error to a monitoring service
    // like Sentry, LogRocket, or DataDog

    res.status(200).json({ 
      success: true,
      message: 'Error reported successfully' 
    });
  } catch (err) {
    console.error('Error reporting failed:', err);
    res.status(500).json({ 
      error: 'Failed to report error',
      message: err.message 
    });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint' });
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
