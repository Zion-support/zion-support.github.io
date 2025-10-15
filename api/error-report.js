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
  if (req.method !== 'POST') {";
    return res.status(405).json({ error: 'Method not allowed' });";
>>>>>>> main
  }

>>>>>>> main
  try {
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
      error,
      stack,
      userAgent,
      url,
      timestamp: new Date().toISOString()
<<<<<<< HEAD
    })
    res.status(200).json({ message: 'Error reported successfully' });"
=======
<<<<<<< HEAD
  ";
  });";";
    res.status(200).json({";";";
    message: 'Error reported successfully' "
  ";";";
  });";";";
  } catch (error) {";";";
    "
    console.error('Error reporting failed: ",";";";
    error);";";";";
    res.status(500).json({ error: 'Failed to report error' "
";";";
  });";";
  };";";
};";";";
"
=======
    });

    res.status(200).json({ message: 'Error reported successfully' });";
>>>>>>> main
  } catch (error) {
    console.error('Error reporting failed=', error);"
    res.status(500).json({ error: 'Failed to report error' });"
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> main
>>>>>>> main
