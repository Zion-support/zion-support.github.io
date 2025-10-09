
const API: React.FC = () => {
    return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            API{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Comprehensive API documentation for integrating with Zion Tech Group's powerful services
            and data endpoints.
          </p>
          <div>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >Get API Key<span className="ml-2">→</span>
            </Link>
            <Link
              href="#endpoints"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >View Endpoints<span className="ml-2">⚛️</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">RESTful APIs</h3>
              <p className="text-gray-600">Clean, intuitive REST endpoints following industry best practices for easy
                integration.
              </p>
            </div>
            <div>
              <div>
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee and comprehensive error
                handling.
              </p>
            </div>
            <div>
              <div>
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-gray-600">
                Optimized for speed with caching, compression, and global CDN distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">API Endpoints</h2>
          <div>
            {apiEndpoints.map((endpoint, index) => (
              <div>
                <div>
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-800">{endpoint.endpoint}</code>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                    <ul className="text-sm text-gray-600">
                      {endpoint?.parameters.map((param, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {param}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                    <p className="text-sm text-gray-600">{endpoint.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
            <p className="text-lg text-gray-600 mb-8">Ready to integrate with our APIs? Get your API key and start building amazing
              applications.
            </p>
            <div>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >Get API Key<span className="ml-2">→</span>
              </Link>
              <Link
                href="https://docs.ziontechgroup.com"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
              >View Full Docs<span className="ml-2">⚛️</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
export default API