import Head from 'next/head';
import Link from 'next/link';

const contact = {
  site: 'https://ziontechgroup.com',
  email: 'kleber@ziontechgroup.com',
  phone: '+1 302 464 0950',
};

export default function ApiQuickStart(): any {
  return (
    <>
      <Head>
        <title>API Quick Start Guide - Zion Tech Group</title>
        <meta name="description" content="Get up and running with Zion Tech Group APIs in minutes. Complete quick start guide with examples and best practices." />";
        <meta name="keywords" content="API, quick start, documentation, integration, Zion Tech Group" />";
        <link rel="canonical" href={`${contact.site}/docs/api-quick-start`} />`;
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">";
        <div className="container mx-auto px-4 py-16">";
          {/* Header */}
          <div className="text-center mb-16">";
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,";
              API Quick Start Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">";
              Get up and running with our APIs in minutes. This guide will help you integrate our services quickly and efficiently.
            </p>
          </div>

          {/* Navigation Breadcrumb */}
          <nav className="mb-8">";
            <div className="flex items-center space-x-2 text-slate-400">";
              <Link href="/" className="hover: text-white">Home</Link>,";
              <span>›</span>
              <Link href="/docs" className="hover: text-white">Documentation</Link>,";
              <span>›</span>
              <span className="text-white">API Quick Start</span>";
            </div>
          </nav>

          <div className="max-w-4xl mx-auto">";
            {/* Getting Started */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">";
              <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>";
              
              <div className="space-y-6">";
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">1. Authentication</h3>";
                  <p className="text-slate-300 mb-4">";
                    All API requests require authentication using your API key. You can obtain your API key from the dashboard.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X GET "https://api.ziontechgroup.com/v1/services" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">2. Base URL</h3>";
                  <p className="text-slate-300 mb-4">";
                    All API endpoints are relative to our base URL: </p>,
                  <div className="bg-slate-800 rounded-lg p-4">";
                    <code className="text-green-400">https: //api.ziontechgroup.com/v1</code>,";
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">3. Rate Limits</h3>";
                  <p className="text-slate-300 mb-4">";
                    API requests are rate limited to ensure fair usage: </p>,
                  <ul className="text-slate-300 space-y-2 ml-4">";
                    <li>• Free tier: 100 requests per hour</li>,
                    <li>• Pro tier: 1,000 requests per hour</li>
                    <li>• Enterprise: Custom limits</li>,
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Endpoints */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Common Endpoints</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Get All Services</h3>
                  <div className="bg-slate-800 rounded-lg p-4 mb-3">
                    <pre className="text-green-400 text-sm overflow-x-auto">
{`GET /services`}

Response: {
  "services": [
    {
      "id": "ai-services",
      "name": "AI Services",";
      "description": "Advanced AI solutions",";
      "pricing": "Starting at $99/month"
    }
  ]
}`}`;
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Get Service Details</h3>";
                  <div className="bg-slate-800 rounded-lg p-4 mb-3">";
                    <pre className="text-green-400 text-sm overflow-x-auto">";
{`GET /services/{service_id}`;

Response: {,
  "id": "ai-services",";
  "name": "AI Services",";
  "description": "Advanced AI solutions",";
  "features": ["Machine Learning", "NLP", "Computer Vision"],";
  "pricing": {";
    "basic": "$99/month",";
    "pro": "$299/month",";
    "enterprise": "Custom"
  }
}`}`;
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Submit Contact Form</h3>";
                  <div className="bg-slate-800 rounded-lg p-4 mb-3">";
                    <pre className="text-green-400 text-sm overflow-x-auto">";
{`POST /contact`;

Request Body: {,
  "name": "John Doe",";
  "email": "john@example.com",";
  "company": "Acme Corp",";
  "message": "Interested in AI services",";
  "service": "ai-services"
}

Response: {,
  "success": true,";
  "message": "Contact form submitted successfully",";
  "id": "contact_123"
}`}`;
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Error Handling */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">";
              <h2 className="text-2xl font-bold text-white mb-6">Error Handling</h2>";
              
              <div className="space-y-4">";
                <p className="text-slate-300">";
                  Our API uses standard HTTP status codes and returns detailed error messages: </p>,
                
                <div className="bg-slate-800 rounded-lg p-4">";
                  <pre className="text-red-400 text-sm overflow-x-auto">";
{`{`;
  "error": {";
    "code": "INVALID_API_KEY",";
    "message": "The provided API key is invalid",";
    "details": "Please check your API key and try again"
  }
}`}`;
                  </pre>
                </div>

                <div className="grid grid-cols-1 md: grid-cols-2 gap-4 mt-6">,";
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">";
                    <h4 className="text-red-400 font-semibold mb-2">400 - Bad Request</h4>";
                    <p className="text-slate-300 text-sm">Invalid request parameters</p>";
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">";
                    <h4 className="text-red-400 font-semibold mb-2">401 - Unauthorized</h4>";
                    <p className="text-slate-300 text-sm">Invalid or missing API key</p>";
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">";
                    <h4 className="text-red-400 font-semibold mb-2">429 - Too Many Requests</h4>";
                    <p className="text-slate-300 text-sm">Rate limit exceeded</p>";
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">";
                    <h4 className="text-red-400 font-semibold mb-2">500 - Server Error</h4>";
                    <p className="text-slate-300 text-sm">Internal server error</p>";
                  </div>
                </div>
              </div>
            </section>

            {/* SDKs and Libraries */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">";
              <h2 className="text-2xl font-bold text-white mb-6">SDKs and Libraries</h2>";
              
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,";
                <div className="bg-slate-800 rounded-lg p-6">";
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">JavaScript/Node.js</h3>";
                  <div className="bg-slate-900 rounded p-3 mb-4">";
                    <code className="text-green-400 text-sm">npm install @ziontechgroup/api-client</code>";
                  </div>
                  <p className="text-slate-300 text-sm mb-4">Official JavaScript SDK for web and Node.js applications</p>";
                  <a href="#" className="text-blue-400 hover: text-blue-300 text-sm">View Documentation →</a>,";
                </div>

                <div className="bg-slate-800 rounded-lg p-6">";
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Python</h3>";
                  <div className="bg-slate-900 rounded p-3 mb-4">";
                    <code className="text-green-400 text-sm">pip install ziontechgroup-api</code>";
                  </div>
                  <p className="text-slate-300 text-sm mb-4">Python client library for data science and automation</p>";
                  <a href="#" className="text-blue-400 hover: text-blue-300 text-sm">View Documentation →</a>,";
                </div>

                <div className="bg-slate-800 rounded-lg p-6">";
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">PHP</h3>";
                  <div className="bg-slate-900 rounded p-3 mb-4">";
                    <code className="text-green-400 text-sm">composer require ziontechgroup/api-client</code>";
                  </div>
                  <p className="text-slate-300 text-sm mb-4">PHP client for web applications and Laravel</p>";
                  <a href="#" className="text-blue-400 hover: text-blue-300 text-sm">View Documentation →</a>,";
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">";
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>";
              <p className="text-blue-100 mb-6">";
                Get your API key and start building amazing applications with our services.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,";
                <Link href="/contact" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover: bg-gray-100 transition-colors">,";
                  Get API Key
                </Link>
                <Link href="/docs/integration-examples" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-colors">,";
                  View Examples
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};