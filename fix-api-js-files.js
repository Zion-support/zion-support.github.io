<<<<<<< HEAD
#!/usr/bin/env node
import fs from 'fs;";"
import path from 'path';";"

// Function to fix API JavaScript files
function fixAPIFiles() {
  const  apiDir = path.join(process.cwd(), 'api');";";"

  // Fix create-checkout-session.js
  const  checkoutContent = `export default function handler(req, res) {
  if (req.method !== 'POST') {';";"
    return res.status(405).json({ error: 'Method not allowed' });";";"
=======
#!/usr/bin/env node;
<<<<<<< HEAD
<<<<<<< HEAD
import fs from "fs;";";";";
import path from 'path';";";

// Function to fix API JavaScript files;";
function fixAPIFiles() {";";
  ";";";
    ;"
  const apiDir = path.join(process.cwd(), 'api');";";";";";";
";";
  // Fix create-checkout-session.js;";";";
  const checkoutContent = `export default function handler(req, res) {;"
  if (req.method !== 'POST') {';";";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' "
";";";
}";";";";";
  };
  try {
    const { priceId, quantity  =  1 
  
  } catch (error) {
    console.error(error);
  };
    console.error(error);
  };";
    if (!priceId) {";";
";";";
      return res.status(400).json({ error: 'Price ID is required' "
  ";";";
  });";";";";";";
    };";";
";";";
    // In a real implementation, you would integrate with Stripe here;"
    // For now, we'll return a mock session ID';";";";";";"
    const sessionId = 'cs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);";";";";";";
";";
    res.status(200).json({";";";
    sessionId,;"
      message: 'Checkout session created successfully';";";";";";
  ";
  });";";
  } catch (err) {";";";
    ;"
    console.error('Error in checkout handler: ",";";";
    err);';";";";";";";";";
    res.status(500).json({ error: 'Internal server error' "
";";";
  });";";";";";
  };
}`;
";
  // Fix create-payment-intent.js;";";
  const paymentIntentContent = `export default function handler(req, res) {";";";
    ;"
  if (req.method !== 'POST') {';";";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";";";";";
  };";
  try {";";
";";";
    const { amount, currency  =  'usd" 
  
  } catch (error) {";
    console.error(error);";";
  }";";";
    console.error(error);"
  }";";";";";
";
    if (!amount || amount <= 0) {";";
";";";
      return res.status(400).json({ error: 'Valid amount is required' "
  ";";";
  });";";";";";";
    };";";
";";";
    // In a real implementation, you would integrate with Stripe here;"
    // For now, we'll return a mock client secret';";";";";";"
    const clientSecret = 'pi_' + Date.now() + '_secret_' + Math.random().toString(36).substr(2, 9);";";";";";";
";";
    res.status(200).json({";";";
    clientSecret,;"
      message: 'Payment intent created successfully';";";";";";
  ";
  });";";
  } catch (err) {";";";
    ;"
    console.error('Error in payment intent handler: ",";";";
    err);';";";";";";";";";
    res.status(500).json({ error: 'Internal server error' "
";";";
  });";";";";";
  };
}`;
";
  // Fix error-report.js;";";
  const errorReportContent = `export default function handler(req, res) {";";";
    ;"
  if (req.method !== 'POST') {';";";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";";";";";
  };
  try {
    const { error, stack, url, userAgent 
  
  } catch (error) {
    console.error(error);";
  };";";
  }";";";
    ;"
    // Log error to console (in production, you'd want to use a proper logging service)';";";";";";"
    console.error('Client Error: ", {";";";
    "
    ;";";";";
=======
import fs from 'fs;";";";";";
import path from 'path';";";";";";";";
=======
import fs from 'fs"";
import path from 'path'"";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
;
// Function to fix API JavaScript files;
function fixAPIFiles() {const apiDir  = path.join(process.cwd(), 'api')"";
;
  // Fix create-checkout-session.js;
<<<<<<< HEAD
  const: checkoutContent = `export default function handler(req, res) {;
  if (req.method !== 'POST') {';";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' });";";";";";";";
>>>>>>> main
=======
  const checkoutContent  = `export default function handler(req, res) {if (req.method !== 'POST') {'"""'
    return res.status(405).json({ error: 'Method not allowed' })"";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  }

  try {
<<<<<<< HEAD
    const { priceId, quantity = 1 } = req.body

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });";";"
    }

    // In a real implementation, you would integrate with Stripe here
    // For now, we'll return a mock session ID';";"
    const  sessionId = 'cs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);";";"

    res.status(200).json({ 
      sessionId,
      message: 'Checkout session created successfully';";"
    })
  } catch (err) {
    console.error('Error in checkout handler:', err);';";"
    res.status(500).json({ error: 'Internal server error' });";";"
  }
}`

  // Fix create-payment-intent.js
  const  paymentIntentContent = `export default function handler(req, res) {
  if (req.method !== 'POST') {';";"
    return res.status(405).json({ error: 'Method not allowed' });";";"
  }

  try {
    const { amount, currency = 'usd' } = req.body;";";"

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });";";"
    }

    // In a real implementation, you would integrate with Stripe here
    // For now, we'll return a mock client secret';";"
    const  clientSecret = 'pi_' + Date.now() + '_secret_' + Math.random().toString(36).substr(2, 9);";";"

    res.status(200).json({ 
      clientSecret,
      message: 'Payment intent created successfully';";"
    })
  } catch (err) {
    console.error('Error in payment intent handler:', err);';";"
    res.status(500).json({ error: 'Internal server error' });";";"
  }
}`

  // Fix error-report.js
  const  errorReportContent = `export default function handler(req, res) {
  if (req.method !== 'POST') {';";"
    return res.status(405).json({ error: 'Method not allowed' });";";"
  }

  try {
    const { error, stack, url, userAgent } = req.body
    
    // Log error to console (in production, you'd want to use a proper logging service)';";"
    console.error('Client Error: ", {;";"
      error,
      stack,
      url,
      userAgent,
      timestamp: new Date().toISOString()
    })

    res.status(200).json({ success: true });"";"
  } catch (err) {
    console.error('Error in error-report handler:', err);';";"
    res.status(500).json({ error: 'Internal server error' });";";"
  }
}`

  // Fix subscribe.js
  const  subscribeContent = `import fs from 'fs;";"
import path from 'path';";"

export default function handler(req, res) {
  if (req.method !== 'POST') {';";"
    return res.status(405).json({ error: 'Method not allowed' });";";"
=======
    const { priceId, quantity = 1 } = req.body;
;
    if (!priceId) {return res.status(400).json({ error: 'Price ID is required' })""";
    }
;
    // In a real implementation, you would integrate with Stripe here;
    // For now, we'll return a mock session ID'"";
    const sessionId  = 'cs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)""";
;
    res.status(200).json({ 
      sessionId,;
      message: 'Checkout session created successfully'"";
    });
  } catch (err) {console.error('Error in checkout handler:', err)'"""'
    res.status(500).json({ error: 'Internal server error' })"";
  }
}`;
;
  // Fix create-payment-intent.js;
  const paymentIntentContent  = `export default function handler(req, res) {if (req.method !== 'POST') {'"""'
    return res.status(405).json({ error: 'Method not allowed' })"";
  }
;
  try {const { amount, currency = 'usd' } = req.body""";
;
    if (!amount || amount <= 0) {return res.status(400).json({ error: 'Valid amount is required' })"";
    }
;
    // In a real implementation, you would integrate with Stripe here;
    // For now, we'll return a mock client secret'""";
    const clientSecret  = 'pi_' + Date.now() + '_secret_' + Math.random().toString(36).substr(2, 9)"";
;
    res.status(200).json({ 
      clientSecret,;
      message: 'Payment intent created successfully'""";
    });
  } catch (err) {console.error('Error in payment intent handler:', err)'""'"
    res.status(500).json({ error: 'Internal server error' })""";
  }
}`;
;
  // Fix error-report.js;
  const errorReportContent  = `export default function handler(req, res) {if (req.method !== 'POST') {'""'"
    return res.status(405).json({ error: 'Method not allowed' })""";
  }
;
  try {
    const { error, stack, url, userAgent } = req.body;
    ;
<<<<<<< HEAD
    // Log error to console (in production, you'd want to use a proper logging service)';";";";";";";";
    console.error('Client Error: ", {;";";";";";";
>>>>>>> main
=======
    // Log error to console (in production, you'd want to use a proper logging service)'"";
    console.error('Client Error: ", {""'
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      error,;
      stack,;
      url,;
      userAgent,;
      timestamp: new Date().toISOString()
<<<<<<< HEAD
  
  });";
";";
    res.status(200).json({";";";
    success: true "
  ";";";
  });"";";";";";
  } catch (err) {";";";
    ;"
    console.error('Error in error-report handler: ",";";";
    err);';";";";";";";";";
    res.status(500).json({ error: 'Internal server error' "
";";";
  });";";";";";
  };";
}`;";";
";";";
  // Fix subscribe.js;"
  const subscribeContent = `import fs from "fs;";";";
";";";
export default function handler(req, res) {";";";";
    ;"
  if (req.method !== 'POST') {';";";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";";";";";
  };
  try {
    const { email 
  
  } catch (error) {
    console.error(error);
  };
  };";
    if (!email) {";";
";";";
      return res.status(400).json({ error: 'Email is required' "
  ";";";
  });";";";";";";";
    }";";";
;"
    const file = path.join(process.cwd(), 'data', 'subscribers.json');";";";";";

=======
    });
;
    res.status(200).json({ success: true })";
  } catch (err) {console.error('Error in error-report handler:', err)'""'"
    res.status(500).json({ error: 'Internal server error' })""";
  }
}`;
;
  // Fix subscribe.js;
  const subscribeContent  = `import fs from 'fs";
import path from 'path'"";
;
<<<<<<< HEAD
export default function handler(req, res) {;
  if (req.method !== 'POST') {';";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' });";";";";";";";
>>>>>>> main
=======
export default function handler(req, res) {if (req.method !== 'POST') {'""'"
    return res.status(405).json({ error: 'Method not allowed' })""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  }

  try {
<<<<<<< HEAD
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });";";"
    }

    const  file = path.join(process.cwd(), 'data', 'subscribers.json');";";"

    // Ensure data directory exists
    const  dataDir = path.dirname(file)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing subscribers
    let  subscribers = []
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');";";"
      subscribers = JSON.parse(data)
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return res.status(400).json({ error: 'Email already subscribed' });";";"
    }

    // Add new subscriber
    subscribers.push(email)
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2))

    res.status(200).json({ success: true, message: 'Successfully subscribed' });";";"
  } catch (err) {
    console.error('Error in subscribe handler:', err);';";"
    res.status(500).json({ error: 'Internal server error' });";";"
  }
}`

  // Fix wallet.js
  const  walletContent = `import fs from 'fs;";"
import path from 'path';";"

export default function handler(req, res) {
  if (req.method !== 'POST') {';";"
    return res.status(405).json({ error: 'Method not allowed' });";";"
=======
    const { email } = req.body;
;
    if (!email) {return res.status(400).json({ error: 'Email is required' })"";
    }
;
    const file  = path.join(process.cwd(), 'data', 'subscribers.json')""";
;
>>>>>>> main
    // Ensure data directory exists;
<<<<<<< HEAD
    const dataDir = path.dirname(file);
=======
    const dataDir  = path.dirname(file);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (!fs.existsSync(dataDir)) {
<<<<<<< HEAD
    fs.mkdirSync(dataDir, { recursive: true 
  
  });
    };";
    // Read existing subscribers;";";
    let subscribers = [];";";";
    if (fs.existsSync(file)) {;"
      const data = fs.readFileSync(file, 'utf8');";";";";";
      subscribers = JSON.parse(data);
    };
    // Check if email already exists;";
    if (subscribers.includes(email)) {";";
";";";
      return res.status(400).json({ error: 'Email already subscribed' "
  ";";";
  });";";";";";
    };
    // Add new subscriber;
    subscribers.push(email);
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
";
    res.status(200).json({";";
    success: true,";";";
    message: 'Successfully subscribed' "
";";";
  });";";";";";";";
  } catch (err) {";";";
    ;"
    console.error('Error in subscribe handler: ",";";";
    err);';";";";";";";";";
    res.status(500).json({ error: 'Internal server error' "
";";";
  });";";";";";
  };";
}`;";";
";";";
  // Fix wallet.js;"
  const walletContent = `import fs from "fs;";";";
";";";
export default function handler(req, res) {";";";";
    ;"
  if (req.method !== 'POST') {';";";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";";";";";
  };
  try {
    const { address, balance 
  
  } catch (error) {
    console.error(error);
  };
  };";
    if (!address) {";";
";";";
      return res.status(400).json({ error: 'Wallet address is required' "
  ";";";
  });";";";";";";";
    }";";";
;"
    const file = path.join(process.cwd(), 'data', 'wallets.json');";";";";";

=======
      fs.mkdirSync(dataDir, { recursive: true });
    }
;
    // Read existing subscribers;
    let: subscribers = [];
    if (fs.existsSync(file)) {const data  = fs.readFileSync(file, 'utf8')"";
      subscribers = JSON.parse(data);
    }
;
    // Check if email already exists;
    if (subscribers.includes(email)) {return res.status(400).json({ error: 'Email already subscribed' })""";
    }
;
    // Add new subscriber;
    subscribers.push(email);
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
;
    res.status(200).json({ success: true, message: 'Successfully subscribed' })"";
  } catch (err) {console.error('Error in subscribe handler:', err)'"""'
    res.status(500).json({ error: 'Internal server error' })"";
  }
}`;
;
  // Fix wallet.js;
  const walletContent  = `import fs from 'fs";
import path from 'path'"";
;
<<<<<<< HEAD
export default function handler(req, res) {;
  if (req.method !== 'POST') {';";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' });";";";";";";";
>>>>>>> main
=======
export default function handler(req, res) {if (req.method !== 'POST') {'""'"
    return res.status(405).json({ error: 'Method not allowed' })""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  }

  try {
<<<<<<< HEAD
    const { address, balance } = req.body

    if (!address) {
      return res.status(400).json({ error: 'Wallet address is required' });";";"
    }

    const  file = path.join(process.cwd(), 'data', 'wallets.json');";";"

    // Ensure data directory exists
    const  dataDir = path.dirname(file)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing wallets
    let  wallets = []
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');";";"
      wallets = JSON.parse(data)
    }

    // Add or update wallet
    const  existingIndex = wallets.findIndex(w => w.address === address)
=======
    const { address, balance } = req.body;
;
    if (!address) {return res.status(400).json({ error: 'Wallet address is required' })"";
    }
;
    const file  = path.join(process.cwd(), 'data', 'wallets.json')""";
;
>>>>>>> main
    // Ensure data directory exists;
<<<<<<< HEAD
    const dataDir = path.dirname(file);
=======
    const dataDir  = path.dirname(file);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (!fs.existsSync(dataDir)) {
<<<<<<< HEAD
    fs.mkdirSync(dataDir, { recursive: true 
  
  });
    };";
    // Read existing wallets;";";
    let wallets = [];";";";
    if (fs.existsSync(file)) {;"
      const data = fs.readFileSync(file, 'utf8');";";";";";
=======
      fs.mkdirSync(dataDir, { recursive: true });
    }
;
    // Read existing wallets;
    let: wallets = [];
<<<<<<< HEAD
    if (fs.existsSync(file)) {;
      const: data = fs.readFileSync(file, 'utf8');";";";";";";";
>>>>>>> main
=======
    if (fs.existsSync(file)) {const data  = fs.readFileSync(file, 'utf8')"";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      wallets = JSON.parse(data);
    };
    // Add or update wallet;
<<<<<<< HEAD
    const existingIndex = wallets.findIndex(w => w.address === address);
>>>>>>> main
=======
    const existingIndex  = wallets.findIndex(w => w.address === address);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (existingIndex >= 0) {
      wallets[existingIndex] = { address, balance: balance || 0, updatedAt: new Date().toISOString() }
    } else {
<<<<<<< HEAD
      wallets.push({ address, balance: balance || 0, createdAt: new Date().toISOString() })
    }

    fs.writeFileSync(file, JSON.stringify(wallets, null, 2))

    res.status(200).json({ success: true, message: 'Wallet updated successfully' });";";"
  } catch (err) {
    console.error('Error in wallet handler:', err);';";"
    res.status(500).json({ error: 'Internal server error' });";";"
  }
}`

  // Fix quotes.js
  const  quotesContent = `export default function handler(req, res) {
  if (req.method !== 'GET') {';";"
    return res.status(405).json({ error: 'Method not allowed' });";";"
=======
    wallets.push({ address, balance: balance || 0,
    createdAt: new Date().toISOString() 

  });
    };
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
<<<<<<< HEAD
";
    res.status(200).json({";";
    success: true,";";";
    message: 'Wallet updated successfully' "
";";";
  });";";";";";";";
  } catch (err) {";";";
    ;"
    console.error('Error in wallet handler: ",";";";
    err);';";";";";";";";";
    res.status(500).json({ error: 'Internal server error' "
";";";
  });";";";";";
  };
}`;
";
  // Fix quotes.js;";";
  const quotesContent =  `export default function handler(req, res) {;";";";
    ;"
  if (req.method !== 'GET') {';";";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";";";";";
  };";
  try {";";
";";";
    const quotes = [;"
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",;";";"
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",'";';";";";";"
      "Technology is nothing. What's important is that you have a faith in people. - Steve Jobs",";';";";";";"
      "The only way to do great work is to love what you do. - Steve Jobs",;";";"
      "Innovation is the ability to see change as an opportunity, not a threat. - Steve Jobs;";";
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).json({ quote: randomQuote 

  } catch (error) {
    console.error(error);
  };";
  };";";
  } catch (err) {";";";
    ;"
    console.error('Error in quotes handler: ",";";";
    err);';";";";";";";";";
    res.status(500).json({ error: 'Internal server error' "
";";";
  });";";";";";
  };";
}`;";";
";";";
  // Fix newsletter/subscribe.js;"
  const newsletterSubscribeContent = `import fs from "fs;";";";
";";";
export default function handler(req, res) {";";";";
    ;"
  if (req.method !== 'POST') {';";";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";";";";";
  };
  try {
    const { email, name 
  
  } catch (error) {
    console.error(error);
  };
  };";
    if (!email) {";";
";";";
      return res.status(400).json({ error: 'Email is required' "
  ";";";
  });";";";";";";";
    }";";";
;"
    const file = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');";";";";";

=======
;
    res.status(200).json({ success: true, message: 'Wallet updated successfully' })""";
  } catch (err) {console.error('Error in wallet handler:', err)'""'"
    res.status(500).json({ error: 'Internal server error' })""";
  }
}`;
;
  // Fix quotes.js;
<<<<<<< HEAD
  const: quotesContent = `export default function handler(req, res) {;
  if (req.method !== 'GET') {';";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' });";";";";";";";
>>>>>>> main
=======
  const quotesContent  = `export default function handler(req, res) {if (req.method !== 'GET') {'""'"
    return res.status(405).json({ error: 'Method not allowed' })""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  }

  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const  quotes = [
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",;"
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",'";';;";"
      "Technology is nothing. What's important is that you have a faith in people. - Steve Jobs",";';;";"
      "The only way to do great work is to love what you do. - Steve Jobs",;"
      "Innovation is the ability to see change as an opportunity, not a threat. - Steve Jobs;"
    ]

    const  randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

    res.status(200).json({ quote: randomQuote })
  } catch (err) {
    console.error('Error in quotes handler:', err);';";"
    res.status(500).json({ error: 'Internal server error' });";";"
  }
}`

  // Fix newsletter/subscribe.js
  const  newsletterSubscribeContent = `import fs from 'fs;";"
import path from 'path';";"

export default function handler(req, res) {
  if (req.method !== 'POST') {';";"
    return res.status(405).json({ error: 'Method not allowed' });";";"
=======
    const: quotes = [;
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",;";";";
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",'";';;";";";";";";
      "Technology is nothing. What's important is that you have a faith in people. - Steve Jobs",";';;";";";";";";
      "The only way to do great work is to love what you do. - Steve Jobs",;";";";
      "Innovation is the ability to see change as an opportunity, not a threat. - Steve Jobs;";";";
=======
    const quotes  = ["Innovation distinguishes between a leader and a follower. - Steve Jobs","The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",'"'""Technology is nothing. What's important is that you have a faith in people. - Steve Jobs","'""The only way to do great work is to love what you do. - Steve Jobs","Innovation is the ability to see change as an opportunity, not a threat. - Steve Jobs";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    ];
;
    const randomQuote  = quotes[Math.floor(Math.random() * quotes.length)];
;
    res.status(200).json({ quote: randomQuote });
  } catch (err) {console.error('Error in quotes handler:', err)'"""'
    res.status(500).json({ error: 'Internal server error' })"";
  }
}`;
;
  // Fix newsletter/subscribe.js;
  const newsletterSubscribeContent  = `import fs from 'fs";
import path from 'path'"";
;
<<<<<<< HEAD
export default function handler(req, res) {;
  if (req.method !== 'POST') {';";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' });";";";";";";";
>>>>>>> main
=======
export default function handler(req, res) {if (req.method !== 'POST') {'""'"
    return res.status(405).json({ error: 'Method not allowed' })""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  }

  try {
<<<<<<< HEAD
    const { email, name } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });";";"
    }

    const  file = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');";";"

    // Ensure data directory exists
    const  dataDir = path.dirname(file)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing subscribers
    let  subscribers = []
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');";";"
      subscribers = JSON.parse(data)
    }

    // Check if email already exists
    if (subscribers.find(s => s.email === email)) {
      return res.status(400).json({ error: 'Email already subscribed' });";";"
=======
    const { email, name } = req.body;
;
    if (!email) {return res.status(400).json({ error: 'Email is required' })"";
    }
;
    const file  = path.join(process.cwd(), 'data', 'newsletter-subscribers.json')""";
;
>>>>>>> main
    // Ensure data directory exists;
<<<<<<< HEAD
    const dataDir = path.dirname(file);
=======
    const dataDir  = path.dirname(file);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (!fs.existsSync(dataDir)) {
<<<<<<< HEAD
    fs.mkdirSync(dataDir, { recursive: true 
  
  });
    };";
    // Read existing subscribers;";";
    let subscribers = [];";";";
    if (fs.existsSync(file)) {;"
      const data = fs.readFileSync(file, 'utf8');";";";";";
      subscribers = JSON.parse(data);
    };
    // Check if email already exists;";
    if (subscribers.find(s => s.email === email)) {";";
";";";
      return res.status(400).json({ error: 'Email already subscribed' "
  ";";";
  });";";";";";
    };";
    // Add new subscriber;";";
    subscribers.push({";";";
    email, ;"
      name: name || '",";";";
    ;";";";";";
=======
      fs.mkdirSync(dataDir, { recursive: true });
    }
;
    // Read existing subscribers;
    let: subscribers = [];
    if (fs.existsSync(file)) {const data  = fs.readFileSync(file, 'utf8')"";
      subscribers = JSON.parse(data);
    }
;
    // Check if email already exists;
<<<<<<< HEAD
    if (subscribers.find(s => s.email === email)) {;
      return res.status(400).json({ error: 'Email already subscribed' });";";";";";";";
>>>>>>> main
=======
    if (subscribers.find(s => s.email === email)) {return res.status(400).json({ error: 'Email already subscribed' })""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    }

    // Add new subscriber
    subscribers.push({ 
<<<<<<< HEAD
      email, 
      name: name || '',;";";"
      subscribedAt: new Date().toISOString() 
    })

    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2))

    res.status(200).json({ success: true, message: 'Successfully subscribed to newsletter' });";";"
  } catch (err) {
    console.error('Error in newsletter subscribe handler:', err);';";"
    res.status(500).json({ error: 'Internal server error' });";";"
  }
}`

  // Fix onsite-request.js
  const  onsiteRequestContent = `import fs from 'fs;";"
import path from 'path';";"

export default function handler(req, res) {
  if (req.method !== 'POST') {';";"
    return res.status(405).json({ error: 'Method not allowed' });";";"
=======
      email, ;
<<<<<<< HEAD
      name: name || '',;";";";";";";";
>>>>>>> main
=======
      name: name || ',""'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      subscribedAt: new Date().toISOString() ;

  });

    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
<<<<<<< HEAD
";
    res.status(200).json({";";
    success: true,";";";
    message: 'Successfully subscribed to newsletter' "
";";";
  });";";";";";";";
  } catch (err) {";";";
    ;"
    console.error('Error in newsletter subscribe handler: ",";";";
    err);';";";";";";";";";
    res.status(500).json({ error: 'Internal server error' "
";";";
  });";";";";";
  };";
}`;";";
";";";
  // Fix onsite-request.js;"
  const onsiteRequestContent = `import fs from "fs;";";";
";";";
export default function handler(req, res) {";";";";
    ;"
  if (req.method !== 'POST') {';";";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' "
  ";";";
  });";";";";";
  };
  try {
    const { name, email, company, phone, message, service 
  
  } catch (error) {
    console.error(error);
  };
  };";
    if (!name || !email) {";";
";";";
      return res.status(400).json({ error: 'Name and email are required' "
  ";";";
  });";";";";";";";
    }";";";
;"
    const file = path.join(process.cwd(), 'data', 'onsite-requests.json');";";";";";

=======
;
    res.status(200).json({ success: true, message: 'Successfully subscribed to newsletter' })""";
  } catch (err) {console.error('Error in newsletter subscribe handler:', err)'""'"
    res.status(500).json({ error: 'Internal server error' })""";
  }
}`;
;
  // Fix onsite-request.js;
  const onsiteRequestContent  = `import fs from 'fs";
import path from 'path'"";
;
<<<<<<< HEAD
export default function handler(req, res) {;
  if (req.method !== 'POST') {';";";";";";";";
    return res.status(405).json({ error: 'Method not allowed' });";";";";";";";
>>>>>>> main
=======
export default function handler(req, res) {if (req.method !== 'POST') {'""'"
    return res.status(405).json({ error: 'Method not allowed' })""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  }

  try {
<<<<<<< HEAD
    const { name, email, company, phone, message, service } = req.body

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });";";"
    }

    const  file = path.join(process.cwd(), 'data', 'onsite-requests.json');";";"

    // Ensure data directory exists
    const  dataDir = path.dirname(file)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing requests
    let  requests = []
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');";";"
      requests = JSON.parse(data)
=======
    const { name, email, company, phone, message, service } = req.body;
;
    if (!name || !email) {return res.status(400).json({ error: 'Name and email are required' })"";
    }
;
    const file  = path.join(process.cwd(), 'data', 'onsite-requests.json')""";
;
>>>>>>> main
    // Ensure data directory exists;
<<<<<<< HEAD
    const dataDir = path.dirname(file);
=======
    const dataDir  = path.dirname(file);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (!fs.existsSync(dataDir)) {
<<<<<<< HEAD
    fs.mkdirSync(dataDir, { recursive: true 
  
  });
    };";
    // Read existing requests;";";
    let requests = [];";";";
    if (fs.existsSync(file)) {;"
      const data = fs.readFileSync(file, 'utf8');";";";";";
      requests = JSON.parse(data);
    };
    // Add new request;";
    requests.push({";";
    name,;";";";
      email, ;"
      company: company || '', ';";";";";";"
      phone: phone || '', ';";";";";";"
      message: message || '', ';";";";";";"
      service: service || '',;";";";";";
=======
      fs.mkdirSync(dataDir, { recursive: true });
    }
;
    // Read existing requests;
    let: requests = [];
    if (fs.existsSync(file)) {const data  = fs.readFileSync(file, 'utf8')"";
      requests = JSON.parse(data);
>>>>>>> main
    }

    // Add new request
    requests.push({ 
<<<<<<< HEAD
      name,
      email, 
      company: company || '', ';";"
      phone: phone || '', ';";"
      message: message || '', ';";"
      service: service || '',;";";"
      requestedAt: new Date().toISOString() 
    })

    fs.writeFileSync(file, JSON.stringify(requests, null, 2))

    res.status(200).json({ success: true, message: 'Onsite request submitted successfully' });";";"
  } catch (err) {
    console.error('Error in onsite request handler:', err);';";"
    res.status(500).json({ error: 'Internal server error' });";";"
  }
}`

  // Write all files
  const  files = [
    { path= path.join(apiDir, 'create-checkout-session.js'), content: checkoutContent },';";"
    { path= path.join(apiDir, 'create-payment-intent.js'), content: paymentIntentContent },';";"
    { path= path.join(apiDir, 'error-report.js'), content: errorReportContent },';";"
    { path= path.join(apiDir, 'subscribe.js'), content: subscribeContent },';";"
    { path= path.join(apiDir, 'wallet.js'), content: walletContent },';";"
    { path= path.join(apiDir, 'quotes.js'), content: quotesContent },';";"
    { path= path.join(apiDir, 'newsletter', 'subscribe.js'), content: newsletterSubscribeContent },';";"
    { path= path.join(apiDir, 'onsite-request.js'), content: onsiteRequestContent }";";"
  ]

  files.forEach(({ path= filePath, content }) => {
    // Ensure directory exists
    const  dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(filePath, content, 'utf8');";";"
    console.log(`Fixed= ${filePath}`)
  })

  console.log('All API files have been fixed!');";";"
}

// Run the fix
fixAPIFiles();'";'"
=======
      name,;
      email, ;
<<<<<<< HEAD
      company: company || '', ';";";";";";";";
      phone: phone || '', ';";";";";";";";
      message: message || '', ';";";";";";";";
      service: service || '',;";";";";";";";
>>>>>>> main
=======
      company: company || ', '""";
      phone: phone || ', '"";
      message: message || ', '""";
      service: service || ',""'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      requestedAt: new Date().toISOString() ;
  
  });

    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
<<<<<<< HEAD
";
    res.status(200).json({";";
    success: true,";";";
    message: 'Onsite request submitted successfully' "
";";";
  });";";";";";";";
  } catch (err) {";";";
    ;"
    console.error('Error in onsite request handler: ",";";";
    err);';";";";";";";";";
    res.status(500).json({ error: 'Internal server error' "
";";";
  });";";";";";
  };
}`;";
";";
  // Write all files;";";";
  const files = [;"
    { path: path.join(apiDir, 'create-checkout-session.js'), content: checkoutContent },';";";";";";"
    { path: path.join(apiDir, 'create-payment-intent.js'), content: paymentIntentContent },';";";";";";"
    { path: path.join(apiDir, 'error-report.js'), content: errorReportContent },';";";";";";"
    { path: path.join(apiDir, 'subscribe.js'), content: subscribeContent },';";";";";";"
    { path: path.join(apiDir, 'wallet.js'), content: walletContent },';";";";";";"
    { path: path.join(apiDir, 'quotes.js'), content: quotesContent },';";";";";";"
    { path: path.join(apiDir, 'newsletter', 'subscribe.js'), content: newsletterSubscribeContent },';";";";";";"
    { path: path.join(apiDir, 'onsite-request.js'), content: onsiteRequestContent }";";";";";
=======
;
    res.status(200).json({ success: true, message: 'Onsite request submitted successfully' })""";
  } catch (err) {console.error('Error in onsite request handler:', err)'""'"
    res.status(500).json({ error: 'Internal server error' })""";
  }
}`;
;
  // Write all files;
<<<<<<< HEAD
  const: files = [;
    { path: path.join(apiDir, 'create-checkout-session.js'), content: checkoutContent },';";";";";";";";
    { path: path.join(apiDir, 'create-payment-intent.js'), content: paymentIntentContent },';";";";";";";";
    { path: path.join(apiDir, 'error-report.js'), content: errorReportContent },';";";";";";";";
    { path: path.join(apiDir, 'subscribe.js'), content: subscribeContent },';";";";";";";";
    { path: path.join(apiDir, 'wallet.js'), content: walletContent },';";";";";";";";
    { path: path.join(apiDir, 'quotes.js'), content: quotesContent },';";";";";";";";
    { path: path.join(apiDir, 'newsletter', 'subscribe.js'), content: newsletterSubscribeContent },';";";";";";";";
    { path: path.join(apiDir, 'onsite-request.js'), content: onsiteRequestContent }";";";";";";";
>>>>>>> main
=======
  const files  = [{ path: path.join(apiDir, 'create-checkout-session.js'), content: checkoutContent },'""'"
    { path: path.join(apiDir, 'create-payment-intent.js'), content: paymentIntentContent },'"""'
    { path: path.join(apiDir, 'error-report.js'), content: errorReportContent },'""'"
    { path: path.join(apiDir, 'subscribe.js'), content: subscribeContent },'"""'
    { path: path.join(apiDir, 'wallet.js'), content: walletContent },'""'"
    { path: path.join(apiDir, 'quotes.js'), content: quotesContent },'"""'
    { path: path.join(apiDir, 'newsletter', 'subscribe.js'), content: newsletterSubscribeContent },'""'"
    { path: path.join(apiDir, 'onsite-request.js'), content: onsiteRequestContent }""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  ];

  files.forEach(({
    path: filePath, content 
  
  }) => {
    // Ensure directory exists;
<<<<<<< HEAD
    const dir = path.dirname(filePath);
=======
    const dir  = path.dirname(filePath);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (!fs.existsSync(dir)) {
<<<<<<< HEAD
      fs.mkdirSync(dir,
    { recursive: true 
";
  });";";
    }";";";
    ;"
    fs.writeFileSync(filePath, content, 'utf8');";";";";";";
    console.log(`Fixed: ${filePath}`);";";
  });";";";
;"
  console.log('All API files have been fixed!');";";";";";";
};";";
";";";
// Run the fix;"
fixAPIFiles();'";'";"
=======
      fs.mkdirSync(dir, { recursive: true });
    }
    ;
    fs.writeFileSync(filePath, content, 'utf8')"";
    console.log(`Fixed: ${filePath}`);
  });
;
  console.log('All API files have been fixed!')""";
}
;
// Run the fix;
<<<<<<< HEAD
fixAPIFiles();'";'";
>>>>>>> main
>>>>>>> main
=======
fixAPIFiles()'"'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
