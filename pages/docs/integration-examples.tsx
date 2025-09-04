import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Code, Zap, ExternalLink } from 'lucide-react';

export default function IntegrationExamples() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  return (
    <>
      <Head>
        <title>Integration Examples - Zion Tech Group Documentation</title>
        <meta name="description" content="Real-world integration examples for Zion Tech Group's APIs and services." />
        <link rel="canonical" href={`${contact.site}/docs/integration-examples`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Integration Examples</h1>
            <p className="text-xl text-gray-600">
              Real-world examples showing how to integrate with our APIs and services.
            </p>
          </div>

          {/* JavaScript/Node.js Example */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">JavaScript/Node.js Integration</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic API Client</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-blue-400 text-sm">
{`class ZionTechAPI {
  constructor(apiKey, baseURL = 'https://api.ziontechgroup.com/v1') {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  async getServices() {
    try {
      const response = await fetch(\`\${this.baseURL}/services\`, {
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  }
}

// Usage
const api = new ZionTechAPI('your-api-key');
const services = await api.getServices();
console.log(services);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Integration?</h2>
            <p className="text-gray-600 mb-6">
              Our technical team can help you integrate our services into your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Integration Support
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