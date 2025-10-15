
// Function to fix API JavaScript files;
function fixAPIFiles() {const apiDir  = path.join(process.cwd(), 'api')"";"

  // Fix create-checkout-session.js;
  const checkoutContent  = `export default function handler(req, res) {if (req.method !== 'POST') {'"""''"'
    return res.status(405).json({ error: 'Method not allowed' })"";"


  try {
    // Log error to console (in production, you'd want to use a proper logging service)'"";"
    console.error('Client Error: ", {""''"'
      error,;
      stack,;
      url,;
      userAgent,;
      timestamp: new Date().toISOString()
export default function handler(req, res) {if (req.method !== 'POST') {'""'""
    return res.status(405).json({ error: 'Method not allowed' })""";"


  try {
    // Ensure data directory exists;
    if (!fs.existsSync(dataDir)) {
export default function handler(req, res) {if (req.method !== 'POST') {'""'""
    return res.status(405).json({ error: 'Method not allowed' })""";"


  try {
    // Ensure data directory exists;
    if (!fs.existsSync(dataDir)) {
    if (fs.existsSync(file)) {const data  = fs.readFileSync(file, 'utf8')"";"
      wallets = JSON.parse(data);
    // Add or update wallet;
    const existingIndex  = wallets.findIndex(w => w.address === address);
    if (existingIndex >= 0) {
      wallets[existingIndex] = { address, balance: balance || 0, updatedAt: new Date().toISOString() }
    } else {
  const quotesContent  = `export default function handler(req, res) {if (req.method !== 'GET') {'""'""
    return res.status(405).json({ error: 'Method not allowed' })""";"


  try {
    ];

    const randomQuote  = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).json({ quote: randomQuote });
  } catch (err) {console.error('Error in quotes handler:', err)'"""''"'
    res.status(500).json({ error: 'Internal server error' })"";"

}`;

  // Fix newsletter/subscribe.js;
  const newsletterSubscribeContent  = `import fs from 'fs";"'
import path from 'path'"";"

export default function handler(req, res) {if (req.method !== 'POST') {'""'""
    return res.status(405).json({ error: 'Method not allowed' })""";"


  try {
    // Ensure data directory exists;
    if (!fs.existsSync(dataDir)) {
    if (subscribers.find(s => s.email === email)) {return res.status(400).json({ error: 'Email already subscribed' })""";"


    // Add new subscriber;
subscribers.push({ 
      name: name || ',""'""
      subscribedAt: new Date().toISOString() ;

  });

    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
export default function handler(req, res) {if (req.method !== 'POST') {'""'""
    return res.status(405).json({ error: 'Method not allowed' })""";"


  try {
    // Ensure data directory exists;
    if (!fs.existsSync(dataDir)) {


    // Add new request;
requests.push({ 
      company: company || ', '""";"
      phone: phone || ', '"";"
      message: message || ', '""";"
      service: service || ',""'""
      requestedAt: new Date().toISOString() ;
  
  });

    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
  const files  = [{ path: path.join(apiDir, 'create-checkout-session.js'), content: checkoutContent },'""'""
    { path: path.join(apiDir, 'create-payment-intent.js'), content: paymentIntentContent },'"""''"'
    { path: path.join(apiDir, 'error-report.js'), content: errorReportContent },'""'""
    { path: path.join(apiDir, 'subscribe.js'), content: subscribeContent },'"""''"'
    { path: path.join(apiDir, 'wallet.js'), content: walletContent },'""'""
    { path: path.join(apiDir, 'quotes.js'), content: quotesContent },'"""''"'
    { path: path.join(apiDir, 'newsletter', 'subscribe.js'), content: newsletterSubscribeContent },'""'""
    { path: path.join(apiDir, 'onsite-request.js'), content: onsiteRequestContent }""";"
  ];

  files.forEach(({
    path: filePath, content 
  
  }) => {
    // Ensure directory exists;
    if (!fs.existsSync(dir)) {
fixAPIFiles()'"'";"
