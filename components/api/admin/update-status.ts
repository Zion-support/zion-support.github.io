    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  
  if (!isInternalAgentRequest(req)) {
    }
    res && res.status(401).json({ "error": 'Unauthorized','
});
return;
  }


  }









