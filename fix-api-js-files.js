#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix API JavaScript files
function fixAPIFiles() {
  const apiDir = path.join(process.cwd(), 'api');
  
  // Fix create-checkout-session.js
  const checkoutContent = `export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, quantity = 1 } = req.body;
    
    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    // In a real implementation, you would integrate with Stripe here
    // For now, we'll return a mock session ID
    const sessionId = 'cs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    res.status(200).json({ 
      sessionId,
      message: 'Checkout session created successfully' 
    });
  } catch (err) {
    console.error('Error in checkout handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

  // Fix create-payment-intent.js
  const paymentIntentContent = `export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    // In a real implementation, you would integrate with Stripe here
    // For now, we'll return a mock client secret
    const clientSecret = 'pi_' + Date.now() + '_secret_' + Math.random().toString(36).substr(2, 9);

    res.status(200).json({ 
      clientSecret,
      message: 'Payment intent created successfully' 
    });
  } catch (err) {
    console.error('Error in payment intent handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

  // Fix error-report.js
  const errorReportContent = `export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, url, userAgent } = req.body;
    
    // Log error to console (in production, you'd want to use a proper logging service)
    console.error('Client Error:', {
      error,
      stack,
      url,
      userAgent,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error in error-report handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

  // Fix subscribe.js
  const subscribeContent = `import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const file = path.join(process.cwd(), 'data', 'subscribers.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add new subscriber
    subscribers.push(email);
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ success: true, message: 'Successfully subscribed' });
  } catch (err) {
    console.error('Error in subscribe handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

  // Fix wallet.js
  const walletContent = `import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { address, balance } = req.body;
    
    if (!address) {
      return res.status(400).json({ error: 'Wallet address is required' });
    }

    const file = path.join(process.cwd(), 'data', 'wallets.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing wallets
    let wallets = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      wallets = JSON.parse(data);
    }

    // Add or update wallet
    const existingIndex = wallets.findIndex(w => w.address === address);
    if (existingIndex >= 0) {
      wallets[existingIndex] = { address, balance: balance || 0, updatedAt: new Date().toISOString() };
    } else {
      wallets.push({ address, balance: balance || 0, createdAt: new Date().toISOString() });
    }

    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));

    res.status(200).json({ success: true, message: 'Wallet updated successfully' });
  } catch (err) {
    console.error('Error in wallet handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

  // Fix quotes.js
  const quotesContent = `export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const quotes = [
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Technology is nothing. What's important is that you have a faith in people. - Steve Jobs",
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Innovation is the ability to see change as an opportunity, not a threat. - Steve Jobs"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).json({ quote: randomQuote });
  } catch (err) {
    console.error('Error in quotes handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

  // Fix newsletter/subscribe.js
  const newsletterSubscribeContent = `import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    if (subscribers.find(s => s.email === email)) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add new subscriber
    subscribers.push({ 
      email, 
      name: name || '', 
      subscribedAt: new Date().toISOString() 
    });
    
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Error in newsletter subscribe handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

  // Fix onsite-request.js
  const onsiteRequestContent = `import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, message, service } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing requests
    let requests = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    }

    // Add new request
    requests.push({ 
      name, 
      email, 
      company: company || '', 
      phone: phone || '', 
      message: message || '', 
      service: service || '',
      requestedAt: new Date().toISOString() 
    });
    
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.status(200).json({ success: true, message: 'Onsite request submitted successfully' });
  } catch (err) {
    console.error('Error in onsite request handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

  // Write all files
  const files = [
    { path: path.join(apiDir, 'create-checkout-session.js'), content: checkoutContent },
    { path: path.join(apiDir, 'create-payment-intent.js'), content: paymentIntentContent },
    { path: path.join(apiDir, 'error-report.js'), content: errorReportContent },
    { path: path.join(apiDir, 'subscribe.js'), content: subscribeContent },
    { path: path.join(apiDir, 'wallet.js'), content: walletContent },
    { path: path.join(apiDir, 'quotes.js'), content: quotesContent },
    { path: path.join(apiDir, 'newsletter', 'subscribe.js'), content: newsletterSubscribeContent },
    { path: path.join(apiDir, 'onsite-request.js'), content: onsiteRequestContent }
  ];

  files.forEach(({ path: filePath, content }) => {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  });

  console.log('All API files have been fixed!');
}

// Run the fix
fixAPIFiles();