<<<<<<< HEAD
export default async (req, res) => {
  if (req.method !== 'POST') {"
    return res.status(405).json({ error: 'Method not allowed' });"
  }

  try {
    const { name, email, company, message, service } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });"
    }

    // Here you would typically save to a database or send an email
    console.log('Quote request:', { name, email, company, message, service });"
    res.status(200).json({ success: true, message: 'Quote request submitted successfully!' });"
  } catch (error) {
    console.error('Quote request error:', error);"
    res.status(500).json({ error: 'Failed to submit quote request' });"
  }
}
=======
<<<<<<< HEAD
      country: country || 'Not specified",}";";";
      service: service || 'General inquiry",}";";";
      status: 'pending",};
      createdAt: new Date().toISOString()};";
    };";";
    // Here you would typically save the quote to a database";";";
    console.log('Quote request processed:', quote.id);'
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({";";
    success: true,";";";
    message: 'Quote request submitted successfully' "
";
  }));";";
  } catch (error) {";";";
    console.error('Quote submission error: ",";";";
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Internal server error" ";";
";";";
  }));"
  };";
};";";
export default async (req, res) => {";";";
    if (req.method !== 'POST') {";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";
  };
  try {
    const { name, email, company, message, service 
  
  } catch (error) {
    console.error(error);
  };";
  };";";
    if (!name || !email || !message) {";";";
    return res.status(400).json({ error: 'Name, email, and message are required' "
  ";";";
  });";";
    };";";
    // Here you would typically save to a database or send an email";";";
    console.log('Quote request:", {";";";
    name, email, company, message, service "
  });";";
    res.status(200).json({";";
    success: true,";";";
    message: 'Quote request submitted successfully!' "
";";";
  });";";";
  } catch (error) {";";";
    "
    console.error('Quote request error: ",";";";
    error);";";";";
    res.status(500).json({ error: 'Failed to submit quote request' "
";";";
  });";";
  };";";
};";";";
"
=======
// API endpoint for quote requests
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, details, country, service } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Process the quote request
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Here you would typically save the quote to a database
    console.log('Quote request processed:', quote.id);
    
    res.status(200).json({ 
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
>>>>>>> main
>>>>>>> main
