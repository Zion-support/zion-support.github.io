    console.log('Error report received:', {
      error,
      stack,
      componentStack,
      timestamp: timestamp || new Date().toISOString(),
      userAgent,
      url
    });

    // For now, just acknowledge receipt
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Error report received' 
    }));
  } catch (error) {
    console.error('Failed to process error report:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process error report' }));
  }
}
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
