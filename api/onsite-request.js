// API endpoint for onsite service requests
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
              Onsite Request.js
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional onsite request.js services by Zion Tech Group.
            </p>
          </div>
        </section>

    if (!companyName || !contactName || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn more about our services and how they can benefit your organization.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
