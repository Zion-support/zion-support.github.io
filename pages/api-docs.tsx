import { motion } from 'framer-motion';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/health',
    description: 'Check API health status',
    response: {
      status: 'ok',
      timestamp: '2024-01-01T00:00:00Z'
    }
  },
  {
    method: 'POST',
    path: '/api/v1/auth/login',
    description: 'Authenticate user and get access token',
    response: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      expires_in: 3600
    }
  },
  {
  }
];

export default function APIDocs() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                      </span>
                      <code className="text-lg font-mono">{endpoint.path}</code>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Copy size={20} />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {JSON.stringify(endpoint.response, null, 2)}
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}