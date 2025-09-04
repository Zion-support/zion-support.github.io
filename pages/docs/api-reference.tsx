import Link from 'next/link';
import Head from 'next/head';

export default function ApiReference() {
  return (
    <>
      <Head>
        <title>API Reference - Zion Tech Group Documentation</title>
        <meta name="description" content="Complete API reference for Zion Tech Group services. Find all endpoints, parameters, and response formats." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/api-reference" />
      </Head>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/docs" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Back to Documentation
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Reference
          </h1>
          <p className="text-lg text-gray-600">
            Complete reference for all Zion Tech Group API endpoints, including request/response formats, authentication, and error handling.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="sticky top-8 space-y-2">
              <h3 className="font-semibold text-gray-900 mb-4">API Endpoints</h3>
              <a href="#authentication" className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">
                Authentication
              </a>
              <a href="#services" className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">
                Services
              </a>
              <a href="#quotes" className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">
                Quotes
              </a>
              <a href="#webhooks" className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">
                Webhooks
              </a>
              <a href="#errors" className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">
                Error Codes
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Authentication */}
            <section id="authentication" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Authentication</h2>
              <p className="text-gray-600 mb-6">
                All API requests require authentication using your API key. Include the key in the Authorization header.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-600">Header Format</h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
                </pre>
              </div>
            </section>

            {/* Services Endpoints */}
            <section id="services" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">GET /v1/services</h3>
                  <p className="text-gray-600 mb-3">Retrieve a list of all available services</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Query Parameters</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><code className="bg-gray-200 px-2 py-1 rounded">page</code> - Page number (default: 1)</li>
                      <li><code className="bg-gray-200 px-2 py-1 rounded">limit</code> - Items per page (default: 10, max: 100)</li>
                      <li><code className="bg-gray-200 px-2 py-1 rounded">category</code> - Filter by category</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Response Example</h4>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "data": [
    {
      "id": "micro-saas",
      "name": "Micro SaaS Products",
      "description": "Ready-to-use software solutions",
      "category": "software",
      "endpoints": ["/v1/micro-saas"]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 67
  }
}`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">GET /v1/services/&#123;id&#125;</h3>
                  <p className="text-gray-600 mb-3">Retrieve details for a specific service</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Response Example</h4>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "data": {
    "id": "micro-saas",
    "name": "Micro SaaS Products",
    "description": "Ready-to-use software solutions",
    "category": "software",
    "features": ["Cost optimization", "Analytics", "Automation"],
    "pricing": {
      "starting": "$99/month",
      "currency": "USD"
    }
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Quotes Endpoints */}
            <section id="quotes" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quotes</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">POST /v1/quotes</h3>
                  <p className="text-gray-600 mb-3">Submit a request for a custom service quote</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Request Body</h4>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "service_id": "micro-saas",
  "requirements": "Custom dashboard with analytics",
  "budget_range": "1000-5000",
  "timeline": "2-3 months",
  "contact": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}`}
                    </pre>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Response Example</h4>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "data": {
    "quote_id": "quote_123456",
    "status": "pending",
    "estimated_cost": "$3,500",
    "timeline": "2-3 months",
    "next_steps": "Our team will review your requirements and contact you within 24 hours"
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Webhooks */}
            <section id="webhooks" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Webhooks</h2>
              <p className="text-gray-600 mb-6">
                Webhooks allow you to receive real-time notifications when events occur in your account.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-600">Webhook Events</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><code className="bg-gray-200 px-2 py-1 rounded">quote.created</code> - New quote request submitted</li>
                  <li><code className="bg-gray-200 px-2 py-1 rounded">quote.updated</code> - Quote status changed</li>
                  <li><code className="bg-gray-200 px-2 py-1 rounded">service.available</code> - New service becomes available</li>
                </ul>
              </div>
            </section>

            {/* Error Codes */}
            <section id="errors" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Error Codes</h2>
              <p className="text-gray-600 mb-6">
                Our API uses standard HTTP status codes and returns detailed error information.
              </p>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">400 - Bad Request</h3>
                  <p className="text-red-600 text-sm">Invalid request parameters or malformed JSON</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">401 - Unauthorized</h3>
                  <p className="text-red-600 text-sm">Invalid or missing API key</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">404 - Not Found</h3>
                  <p className="text-red-600 text-sm">Requested resource does not exist</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">429 - Too Many Requests</h3>
                  <p className="text-red-600 text-sm">Rate limit exceeded</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">500 - Internal Server Error</h3>
                  <p className="text-red-600 text-sm">Unexpected server error</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}