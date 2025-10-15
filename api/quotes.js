<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      serviceType, 
      projectDescription, 
      budget, 
      timeline 
    } = req.body;

<<<<<<< HEAD
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Process the quote request
=======
    if (!name || !email || !phone || !serviceType) {
      return res.status(400).json({ 
        error: 'Name, email, phone, and service type are required' 
      });
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
<<<<<<< HEAD
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Here you would typically save the quote to a database
    console.log('Quote request processed:', quote.id);
    
=======
      company: company || '',
      serviceType,
      projectDescription: projectDescription || '',
      budget: budget || '',
      timeline: timeline || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Here you would typically save to a database
    // For now, just log the quote request
    console.log('Quote request received:', quote);

>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
    res.status(200).json({ 
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    });
  } catch (error) {
<<<<<<< HEAD
    console.error('Quote submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
=======
    console.error('Quote request error:', error);
    res.status(500).json({ 
      error: 'Failed to submit quote request',
      message: error.message 
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
