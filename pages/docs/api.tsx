import React from 'react';
import Layout from '../../components/Layout';

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Fetch Services',
    code: `const response = await fetch('https://ziontechgroup.com/api/v1/services', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
const data = await response.json()
`
  },
  {
    language: 'Python',
    title: 'Submit Contact Form',
    code: `import requests
url = 'https://ziontechgroup.com/api/v1/contact'
headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
data = {
  'name': 'John Doe',
  'email': 'john@example.com',
  'message': 'Interested in AI services',
  'company': 'Tech Corp'
}
response = requests.post(url, json=data, headers=headers)
print(response.json())
`
  }
];

        {/* API Endpoints Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-600">
                Explore our available API endpoints
              </p>
            </motion.div>
            
            <div className="grid gap-6">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {endpoint.method}
                      </span>
                    </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us to get API access and start building
              </p>
              <Link href="/contact">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
    <Layout title="API Docs">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-600">Reference content will return after fixes. Basic page added to restore build.</p>
      </div>
    </Layout>
  );
}