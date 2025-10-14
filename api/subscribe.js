// API endpoint for general subscription
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
              Subscribe.js
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional subscribe.js services by Zion Tech Group.
            </p>
          </div>
        </section>

  let subscribers = [];
      }));
  } catch (error) {
    console.error('Error saving subscriber:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save subscription' }));
  }
}
