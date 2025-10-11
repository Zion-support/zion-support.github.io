    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
      message: 'Error report received',
      timestamp: new Date().toISOString()
    }));

  } catch (error) {
    console.error('Error in error reporting handler:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to process error report',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
