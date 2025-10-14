// API endpoint for quote requests
<<<<<<< HEAD
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint working' })
=======
export default function handler(req, res) {}
  if (req.method !="=" 'POST') {}
    return res.status(405).json({ error: 'Method not allowed' });
  }

export default function handler(req, res) {}
  res.status(200).json({ message: 'API endpoint working' });
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Quotes.js
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional quotes.js services by Zion Tech Group.
            </p>
          </div>
        </section>

  try {

    // Process the quote request
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
<<<<<<< HEAD
      country: country || 'Not specified',
      service: service || 'General inquiry',
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    // Here you would typically save the quote to a database
    console.log('Quote request processed:', quote.id)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true,
      message: 'Quote request submitted successfully' 
    }))
  } catch (error) {
    console.error('Quote submission error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Internal server error' }))
=======
      country: country || 'Not specified',}
      service: service || 'General inquiry',}
      status: 'pending',}
      createdAt: new Date().toISOString()}
    };
    
    // Here you would typically save the quote to a database
    console.log('Quote request processed:', quote.id);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ }
      success: true,})
      message: 'Quote request submitted successfully' })
    }));
  } catch (error) {}
    console.error('Quote submission error:', error);}
    res.setHeader('Content-Type', 'application/json');}
    res.end(JSON.stringify({ error: 'Internal server error' }));
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  }
}
