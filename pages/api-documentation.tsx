import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD

export default function ApiDocumentationPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>API Reference | Zion Tech Group</title>
				<meta name="description" content="API reference and integration guides for Zion Tech Group services" />
				<link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-8">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Reference</h1>
				<p className="text-slate-300">Explore authentication, endpoints, webhooks, and SDKs for integrating with our Micro SAAS, AI, and IT services.</p>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Authentication</h2>
						<p className="text-slate-300">Use HTTPS Bearer tokens. Rotate regularly. For enterprise SSO/SCIM, contact sales.</p>
					</div>
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Webhooks</h2>
						<p className="text-slate-300">Secure with shared secrets and signature headers. Retries with exponential backoff.</p>
					</div>
				</div>
				<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
					<h2 className="text-white text-xl font-semibold mb-2">Contact</h2>
					<ul className="text-slate-300 space-y-1">
						<li>Phone: <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a></li>
						<li>Email: <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
						<li>Address: 364 E Main St STE 1008 Middletown DE 19709</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
=======
import Link from 'next/link';

const ApiDocumentation: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/health',
      description: 'Check system health status',
      response: '{"status": "healthy", "timestamp": "2025-01-17T..."}'
    },
    {
      method: 'GET',
      path: '/api/automation/status',
      description: 'Get automation system status',
      response: '{"automations": 227, "active": 45, "lastRun": "..."}'
    },
    {
      method: 'POST',
      path: '/api/content/generate',
      description: 'Generate new content using AI',
      body: '{"topic": "string", "type": "blog|page|report"}',
      response: '{"content": "...", "metadata": {...}}'
    },
    {
      method: 'GET',
      path: '/api/reports/summary',
      description: 'Get system reports summary',
      response: '{"totalReports": 2960, "lastUpdated": "..."}'
    },
    {
      method: 'GET',
      path: '/api/performance/metrics',
      description: 'Get performance metrics',
      response: '{"lighthouse": {...}, "uptime": "99.9%"}'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>API Documentation - bolt.new.zion.app</title>
        <meta name="description" content="Complete API documentation for bolt.new.zion.app automation platform" />
        <meta name="keywords" content="API, documentation, automation, cloud, endpoints" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete API reference for the bolt.new.zion.app automation platform. 
              Integrate with our autonomous cloud systems and leverage our automation capabilities.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/automation" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Automation
              </Link>
              <Link href="/reports" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Reports
              </Link>
            </div>
          </nav>

          {/* API Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">API Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">227</div>
                <div className="text-gray-600">Active Automations</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">1min</div>
                <div className="text-gray-600">Sync Cadence</div>
              </div>
            </div>
          </div>

          {/* Authentication */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication</h2>
            <p className="text-gray-600 mb-4">
              All API endpoints require authentication using API keys. Include your API key in the request header:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              Authorization: Bearer YOUR_API_KEY
            </div>
          </div>

          {/* Endpoints */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h2>
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-gray-600 mb-3">{endpoint.description}</p>
                  {endpoint.body && (
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-gray-700">Request Body:</span>
                      <div className="bg-gray-100 p-2 rounded mt-1 font-mono text-sm">
                        {endpoint.body}
                      </div>
                    </div>
                  )}
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Response:</span>
                    <div className="bg-gray-100 p-2 rounded mt-1 font-mono text-sm">
                      {endpoint.response}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rate Limiting */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate Limiting</h2>
            <p className="text-gray-600 mb-4">
              API requests are limited to 1000 requests per hour per API key. 
              Exceeding this limit will result in a 429 Too Many Requests response.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <div className="text-yellow-800">
                  <p className="font-semibold">Rate Limit Headers</p>
                  <p className="text-sm">X-RateLimit-Limit: 1000</p>
                  <p className="text-sm">X-RateLimit-Remaining: 999</p>
                  <p className="text-sm">X-RateLimit-Reset: 1642500000</p>
                </div>
              </div>
            </div>
          </div>

          {/* SDKs and Libraries */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SDKs & Libraries</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">JavaScript/Node.js</h3>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  npm install @zion/bolt-api
                </code>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Python</h3>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  pip install zion-bolt-api
                </code>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Support & Contact</h2>
            <p className="text-gray-600 mb-4">
              Need help integrating with our API? Our team is here to assist you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Support
              </Link>
              <a href="https://github.com/Zion-Holdings/zion.app/issues" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                GitHub Issues
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocumentation;
>>>>>>> origin/cursor/update-content-and-fix-links-1466
