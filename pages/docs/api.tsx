import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Code, Copy, Check, ExternalLink } from 'lucide-react';

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Submit Contact Form',
    code: 'const response = await fetch(\'https://ziontechgroup.com/api/v1/contact\', {\n  method: \'POST\',\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\',\n    \'Content-Type\': \'application/json\'\n  },\n  body: JSON.stringify({\n    name: \'John Doe\',\n    email: \'john@example.com\',\n    message: \'Hello from the API!\'\n  })\n});\n\nconst data = await response.json();\nconsole.log(data);'
  },
  {
    language: 'Python',
    title: 'Submit Contact Form',
    code: 'import requests\n\nurl = \'https://ziontechgroup.com/api/v1/contact\'\nheaders = {\n    \'Authorization\': \'Bearer YOUR_API_KEY\',\n    \'Content-Type\': \'application/json\'\n}\ndata = {\n    \'name\': \'John Doe\',\n    \'email\': \'john@example.com\',\n    \'message\': \'Hello from the API!\'\n}\n\nresponse = requests.post(url, headers=headers, json=data)\nprint(response.json())'
  },
  {
    language: 'cURL',
    title: 'Get System Status',
    code: 'curl -X GET "https://ziontechgroup.com/api/v1/status" \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -H "Content-Type: application/json"'
  }
];

export default function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (code: string, title: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(title);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group services. Learn how to integrate with our AI and IT services." />
        <meta name="keywords" content="API documentation, integration, developer resources, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/docs/api" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                API Documentation
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Integrate with our AI and IT services using our comprehensive API
              </motion.p>
            </div>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our API provides programmatic access to all Zion Tech Group services including AI solutions, 
                      IT services, and micro SAAS products.
                    </p>
                    <p>
                      To get started, you'll need an API key which you can obtain by contacting our team.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Base URL</h3>
                      <code className="text-blue-800">https://ziontechgroup.com/api/v1</code>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      All API requests require authentication using a Bearer token in the Authorization header.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <code className="text-gray-800">
                        Authorization: Bearer YOUR_API_KEY
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Code Examples
              </h2>
              
              <div className="space-y-8">
                {codeExamples.map((example, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between p-4 bg-gray-800">
                      <div className="flex items-center gap-3">
                        <Code className="w-5 h-5 text-blue-400" />
                        <span className="text-white font-semibold">{example.language}</span>
                        <span className="text-gray-400">-</span>
                        <span className="text-gray-300">{example.title}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(example.code, example.title)}
                        className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                      >
                        {copiedCode === example.title ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-6">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Need API Support?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact our development team for API support and integration assistance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Email Support
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}