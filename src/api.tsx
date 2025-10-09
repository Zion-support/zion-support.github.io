import React from 'react;
const API: any,
    d: any,
      endpoint: any,
      description: any,
      parameters: any, 'offset'],
      response: any},
    {
      method: any,
      endpoint: any,
      description: any,
      parameters: any, 'password'],
      response: any},
    {
      method: any,
      endpoint: any,
      description: any,
      parameters: any, 'metrics'],
      response: any},
    {
      method: any,
      endpoint: any,
      description: any,
      parameters: any, 'content', 'type'],
      response: any},;
  ];
  return (
    <div className="min-h-screen bg-gray-50">";
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">"'";
        <div className="container mx-auto px-4 text-center">"'"'";
          <h1 className="text-4xl md: any{' '}">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Documentation
            </span>";
          </h1>"'";
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion Tech Group's powerful services
            and data endpoints.
          </p>
          <div className="flex flex-col sm: any,>
    d: any,>
    e="text-gray-600">
                Clean, intuitive REST endpoints following industry best practices for easy
                integration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee and comprehensive error
                handling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-gray-600">
                Optimized for speed with caching, compression, and global CDN distribution.
              </p>
            </div>
          </div>
        </div>
      </div>;
      <div id="endpoints" className="py-16 bg-gray-50">";
        <div className="container mx-auto px-4">";
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">API Endpoints</h2>";
          <div className="space-y-6">);
            {apiEndpoints.map((endpoint, index) => (
              <div key={index}">
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              >";
                <div className="flex flex-col md: any,
    d: any,
    d=== 'GET'>
                          ? 'bg-green-100 text-green-800'>
                          : 'bg-blue-100 text-blue-800'>
                      }`}>
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-800">{endpoint.endpoint}</code>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <div className="grid md: any,>
    s: any,>
    e="text-sm text-gray-600">
                      {endpoint?.parameters.map((param, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {param}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response: any,
    e="text-sm text-gray-600">{endpoint.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to integrate with our APIs? Get your API key and start building amazing
              applications.
            </p>
            <div className="flex flex-col sm: any,>
    r: any,>
    e="ml-2">⚛️</span>
              </Link>
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};";
export default API;"'"';
"'"'`"';