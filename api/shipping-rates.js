// API endpoint for shipping rates
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint working' });
}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Shipping Rates.js
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional shipping rates.js services by Zion Tech Group.
            </p>
          </div>
        </section>

  let rates = [];  try {    const data = fs.readFileSync(file, 'utf8');
    rates = JSON.parse(data);
  } catch (error) {
    console.error('Error:', error);
    console.error('Error reading existing rates:', error);
  }

  const distanceMultiplier = destination === 'US' ? 1 : 2;
  const baseRate = 10;
  const rate = baseRate + (weight * 0.5 * distanceMultiplier);

  try {
    const newRate = {
      id: Date.now().toString(),
      destination,
      weight,
      rate,
      createdAt: new Date().toISOString()
    };

    rates.push(newRate);
    fs.writeFileSync(file, JSON.stringify(rates, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      rate: rate,
      message: 'Shipping rate calculated successfully' 
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({ error: 'Failed to save rate' }));
  }
}
