import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Download, Code, Package } from 'lucide-react';

export default function SDK() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  return (
    <>
      <Head>
        <title>SDK - Zion Tech Group Documentation</title>
        <meta name="description" content="Official SDKs and libraries for integrating with Zion Tech Group's APIs." />
        <link rel="canonical" href={`${contact.site}/docs/sdk`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SDK & Libraries</h1>
            <p className="text-xl text-gray-600">
              Official SDKs and libraries to help you integrate with our APIs quickly and easily.
            </p>
          </div>

          {/* JavaScript SDK */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Package className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">JavaScript/Node.js SDK</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 text-sm">
{`npm install @ziontechgroup/sdk

# or

yarn add @ziontechgroup/sdk`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Usage</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-blue-400 text-sm">
{`import { ZionTechAPI } from '@ziontechgroup/sdk';

const api = new ZionTechAPI('your-api-key');

// Get all services
const services = await api.services.getAll();

// Submit contact form
const result = await api.contact.submit({
  name: 'John Doe',
  email: 'john@example.com',
  service: 'micro-saas',
  message: 'Looking for a custom solution'
});

console.log(result);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Python SDK */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Python SDK</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 text-sm">
{`pip install ziontechgroup-sdk`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Usage</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-blue-400 text-sm">
{`from ziontechgroup import ZionTechAPI

api = ZionTechAPI('your-api-key')

# Get all services
services = api.services.get_all()

# Submit contact form
result = api.contact.submit({
    'name': 'John Doe',
    'email': 'john@example.com',
    'service': 'micro-saas',
    'message': 'Looking for a custom solution'
})

print(result)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* React Hook */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Download className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">React Hook</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 text-sm">
{`npm install @ziontechgroup/react-hooks`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage in React Component</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-purple-400 text-sm">
{`import React from 'react';
import { useZionTechAPI } from '@ziontechgroup/react-hooks';

function ServicesList() {
  const { services, loading, error } = useZionTechAPI('your-api-key');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with SDKs?</h2>
            <p className="text-gray-600 mb-6">
              Our technical team can help you get started with our SDKs and libraries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get SDK Support
              </Link>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Email Technical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}