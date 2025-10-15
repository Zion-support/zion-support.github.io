
  }


  try {

      error,
      stack,
      userAgent,
      url,
      timestamp: new Date().toISOString()

  } catch (error) {
    console.error('Error reporting failed=', error);"
    res.status(500).json({ error: 'Failed to report error' });"
  }


