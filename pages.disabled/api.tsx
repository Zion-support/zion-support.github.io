<<<<<<< HEAD
import React from \'react\'; import Head from \'next/head\'; import Link from \'next/link\'; import { Code,Key,Globe,Database,Shield,Zap,ArrowRight,Copy,CheckCircle,ExternalLink,Clock,Users } from \'lucide-react\'; export default function API() { const apiEndpoints = [{ \"name\": \'Authentication\',\"method\": \'POST\',\"endpoint\": \'/api/auth/login\',\"description\": \'Authenticate users and get access tokens\',\"parameters\": [\'email\',\'password\'],\"response\": \'JWT token\'},{ \"name\": \'User Profile\',\"method\": \'GET\',\"endpoint\": \'/api/user/profile\',\"description\": \'Get user profile information\',\"parameters\": [\'token\'],\"response\": \'User profile data\' },{ \"name\": \'Services List\',\"method\": \'GET\',\"endpoint\": \'/api/services\',\"description\": \'Get list of available services\',\"parameters\": [\'category\',\'limit\'],\"response\": \'Array of services\' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title> <meta name=\"description\" content=\"Comprehensive API documentation for Zion Tech Group services and integrations.\" /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <div className=\"min-h-screen bg-gray-50\"> {} <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16\"> <div className=\"container mx-auto px-4 text-center\"> <h1 className=text-4xl \"md\": text-5xl font-bold mb-4\"> API <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400>Documentation</span> </h1> <p className=text-xl text-gray-200 max-w-2xl mx-auto\"> Comprehensive API documentation for integrating with Zion Tech Group services </p> </div> </div> {} <div className=\"py-16 bg-white> <div className=container mx-auto px-4\"> <div className=\"grid \"md\": grid-cols-3 gap-8> <div className=text-center\"> <div className=\"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4> <Code className=w-8 h-8 text-blue-600\" /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-2>RESTful APIs</h3> <p className=text-gray-600\">Clean,intuitive REST endpoints for easy integration</p> </div> <div className=\"text-center> <div className=w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4\"> <Shield className=\"w-8 h-8 text-green-600 /> </div> <h3 className=text-xl font-semibold text-gray-900 mb-2\">Secure</h3> <p className=\"text-gray-600>Enterprise-grade security with JWT authentication</p> </div> <div className=text-center\"> <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4> <Zap className=w-8 h-8 text-purple-600\" /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-2>Fast</h3> <p className=text-gray-600\">High-performance APIs with sub-100ms response times</p> </div> </div> </div> </div> {} <div className=\"py-16 bg-gray-50> <div className=\"container mx-auto px-4\"> <h2 className=\"text-3xl font-bold text-gray-900 text-center mb-12\">API Endpoints</h2> <div className=\"space-y-6\"> {apiEndpoints.map((endpoint,index) => ( <div key={index} className=\"bg-white rounded-lg shadow-md p-6\"> <div className=\"flex items-center justify-between mb-4\"> <h3 className={\"text-xl font-semibold text-gray-900\"}>{endpoint.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ endpoint.method === \'GET\' ? \'bg-green-100 text-green-800\' : endpoint.method === \'POST\' ? \'bg-blue-100 text-blue-800\' : \'bg-gray-100 text-gray-800\' }`}> {endpoint.method} </span> </div> <div className=\"bg-gray-100 rounded-lg p-4 mb-4\"}> <code className=\"text-gray-800 font-mono>{endpoint.endpoint}</code> </div> <p className=text-gray-600 mb-4\">{endpoint.description}</p> <div className=\"grid \"md\": grid-cols-2 gap-4> <div> <h4 className=font-semibold text-gray-900 mb-2\">Parameters:</h4> <ul className=\"text-sm text-gray-600> {endpoint.parameters.map((param,i) => ( <li key={i} className=flex items-center\"> <span className=\"w-2 h-2 bg-blue-500 rounded-full mr-2></span> {param} </li> ))} </ul> </div> <div> <h4 className=font-semibold text-gray-900 mb-2\">Response</h4> <p className=\"text-sm text-gray-600>{endpoint.response}</p> </div> </div> </div> ))} </div> </div> </div> {} <div className=py-16 bg-white\"> <div className=\"container mx-auto px-4> <div className=max-w-3xl mx-auto text-center\"> <h2 className=\"text-3xl font-bold text-gray-900 mb-6>Getting Started</h2> <p className=text-lg text-gray-600 mb-8\"> Ready to integrate with our APIs? Get your API key and start building amazing applications. </p> <div className=\"flex flex-col \"sm\": flex-row gap-4 justify-center> <Link href=/contact\" className=\"inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300> Get API Key <ArrowRight className=ml-2 w-5 h-5\" /> </Link> <Link href=\"/docs className=inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300\"> View Full Documentation <ExternalLink className=\"ml-2 w-5 h-5\" /> </Link> </div> </div> </div> </div> </div> </> )}
import _React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Code,Key,Globe,Database,Shield,Zap,ArrowRight,Copy,CheckCircle,ExternalLink,Clock,Users } from 'lucide-react'; export default function API() { const apiEndpoints = [{ "name": 'Authentication',"method": 'POST',"endpoint": '/api/auth/login',"description": 'Authenticate users and get access tokens',"parameters": ['email','password'],"response": 'JWT token'},{ "name": 'User Profile',"method": 'GET',"endpoint": '/api/user/profile',"description": 'Get user profile information',"parameters": ['token'],"response": 'User profile data' },{ "name": 'Services List',"method": 'GET',"endpoint": '/api/services',"description": 'Get list of available services',"parameters": ['category','limit'],"response": 'Array of services' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title> <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className=text-4xl "md": text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400>Documentation</span> </h1> <p className=text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services </p> </div> </div> {} <div className="py-16 bg-white> <div className=container mx-auto px-4"> <div className="grid "md": grid-cols-3 gap-8> <div className=text-center"> <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4> <Code className=w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2>RESTful APIs</h3> <p className=text-gray-600">Clean,intuitive REST endpoints for easy integration</p> </div> <div className="text-center> <div className=w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className="w-8 h-8 text-green-600 /> </div> <h3 className=text-xl font-semibold text-gray-900 mb-2">Secure</h3> <p className="text-gray-600>Enterprise-grade security with JWT authentication</p> </div> <div className=text-center"> <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4> <Zap className=w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2>Fast</h3> <p className=text-gray-600">High-performance APIs with sub-100ms response times</p> </div> </div> </div> </div> {} <div className="py-16 bg-gray-50> <div className="container mx-auto px-4"> <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">API Endpoints</h2> <div className="space-y-6"> {apiEndpoints.map((endpoint,index) => ( <div key={index} className="bg-white rounded-lg shadow-md p-6"> <div className="flex items-center justify-between mb-4"> <h3 className={"text-xl font-semibold text-gray-900"}>{endpoint.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800' }`}> {endpoint.method} </span> </div> <div className="bg-gray-100 rounded-lg p-4 mb-4"}> <code className="text-gray-800 font-mono>{endpoint.endpoint}</code> </div> <p className=text-gray-600 mb-4">{endpoint.description}</p> <div className="grid "md": grid-cols-2 gap-4> <div> <h4 className=font-semibold text-gray-900 mb-2">Parameters:</h4> <ul className="text-sm text-gray-600> {endpoint.parameters.map((param,i) => ( <li key={i} className=flex items-center"> <span className="w-2 h-2 bg-blue-500 rounded-full mr-2></span> {param} </li> ))} </ul> </div> <div> <h4 className=font-semibold text-gray-900 mb-2">Response</h4> <p className="text-sm text-gray-600>{endpoint.response}</p> </div> </div> </div> ))} </div> </div> </div> {} <div className=py-16 bg-white"> <div className="container mx-auto px-4> <div className=max-w-3xl mx-auto text-center"> <h2 className="text-3xl font-bold text-gray-900 mb-6>Getting Started</h2> <p className=text-lg text-gray-600 mb-8"> Ready to integrate with our APIs? Get your API key and start building amazing applications. </p> <div className="flex flex-col "sm": flex-row gap-4 justify-center> <Link href=/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300> Get API Key <ArrowRight className=ml-2 w-5 h-5" /> </Link> <Link href="/docs className=inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"> View Full Documentation <ExternalLink className="ml-2 w-5 h-5" /> </Link> </div> </div> </div> </div> </div> </> )}
=======
import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Code, Key, Book, Download, Play, Copy, Check } from 'lucide-react';
const API: NextPage = () => {;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const apiEndpoints = [;
    {;
      method: 'GET',
      endpoint: '/api/v1/users',
      description: 'Retrieve user information',
      parameters: [;
        { name: 'id', type: 'string', required: true, description: 'User ID' },
        { name: 'include', type: 'string', required: false, description: 'Additional data to include' }
      ];
},
    {;
      method: 'POST',
      endpoint: '/api/v1/users',
      description: 'Create a new user',
      parameters: [;
        { name: 'name', type: 'string', required: true, description: 'User name' },
        { name: 'email', type: 'string', required: true, description: 'User email' },
        { name: 'role', type: 'string', required: false, description: 'User role' }
      ];
},
    {;
      method: 'PUT',
      endpoint: '/api/v1/users/{id}',
      description: 'Update user information',
      parameters: [;
        { name: 'id', type: 'string', required: true, description: 'User ID' },
        { name: 'name', type: 'string', required: false, description: 'Updated name' },
        { name: 'email', type: 'string', required: false, description: 'Updated email' }
      ];
},
    {;
      method: 'DELETE',
      endpoint: '/api/v1/users/{id}',
      description: 'Delete a user',
      parameters: [;
        { name: 'id', type: 'string', required: true, description: 'User ID' }
      ];
}
  ];
  const codeExamples = [;
    {;
      language: 'JavaScript',
      code: `const response = await fetch('https://api.ziontechgroup.com/v1/users', {;
  method: 'GET',
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json';
}
});
const data = await response.json();
console.log(data);`;
},
    {;
      language: 'Python',
      code: `import requests;

headers = {;
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json';
}

response = requests.get('https://api.ziontechgroup.com/v1/users', headers=headers);
data = response.json();
print(data)`;
},
    {;
      language: 'cURL',
      code: `curl -X GET "https://api.ziontechgroup.com/v1/users" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`;
}
  ];
  const copyToClipboard = async (code: string, language: string) => {;
    try {;
      await navigator.clipboard.writeText(code);
      setCopiedCode(language);
      setTimeout(() => setCopiedCode(null), 2000);
} catch (err) {;
      console.error('Failed to copy code:', err);
}
  };
  const getMethodColor = (method: string) => {;
    switch (method) {;
      case 'GET':;
        return 'bg-green-100 text-green-800';
      case 'POST':;
        return 'bg-blue-100 text-blue-800';
      case 'PUT':;
        return 'bg-yellow-100 text-yellow-800';
      case 'DELETE':;
        return 'bg-red-100 text-red-800';
      default:;
        return 'bg-gray-100 text-gray-800';
}
  };
  return (;
    <MainLayout;
      title="API Reference - Zion Tech Group";
      description="Complete API reference for Zion Tech Group's services. Documentation, examples, and integration guides.";
      keywords="API reference, REST API, developer documentation, integration, endpoints, authentication">;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <Code className="w-16 h-16 mx-auto mb-6 text-blue-400" />;
              <h1 className="text-4xl md:text-5xl font-bold mb-6">API Reference</h1>;
              <p className="text-xl text-gray-200 mb-8">;
                Complete documentation for our REST API with examples and integration guides.;
              </p>;
            </div>;
          </div>;
        </section>;

        {/* Quick Start */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Start</h2>;
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Key className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Get API Key</h3>;
                  <p className="text-gray-600">Sign up and generate your API key from the dashboard</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Book className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Read Documentation</h3>;
                  <p className="text-gray-600">Explore our comprehensive API documentation</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Play className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Start Building</h3>;
                  <p className="text-gray-600">Use our examples to integrate with your application</p>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* API Endpoints */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">API Endpoints</h2>;
              <div className="space-y-6">;
                {apiEndpoints.map((endpoint, index) => (;
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">;
                    <div className="flex items-center justify-between mb-4">;
                      <div className="flex items-center space-x-4">;
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>;
                          {endpoint.method}
                        </span>;
                        <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>;
                      </div>;
                    </div>;
                    <p className="text-gray-600 mb-4">{endpoint.description}</p>;
                    {endpoint.parameters.length > 0 && (;
                      <div>;
                        <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>;
                        <div className="overflow-x-auto">;
                          <table className="w-full text-sm">;
                            <thead>;
                              <tr className="border-b border-gray-200">;
                                <th className="text-left py-2 font-semibold text-gray-900">Name</th>;
                                <th className="text-left py-2 font-semibold text-gray-900">Type</th>;
                                <th className="text-left py-2 font-semibold text-gray-900">Required</th>;
                                <th className="text-left py-2 font-semibold text-gray-900">Description</th>;
                              </tr>;
                            </thead>;
                            <tbody>;
                              {endpoint.parameters.map((param, paramIndex) => (;
                                <tr key={paramIndex} className="border-b border-gray-100">;
                                  <td className="py-2 font-mono text-blue-600">{param.name}</td>;
                                  <td className="py-2 text-gray-600">{param.type}</td>;
                                  <td className="py-2">;
                                    <span className={`px-2 py-1 rounded-full text-xs ${;
                                      param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800';
}`}>;
                                      {param.required ? 'Required' : 'Optional'}
                                    </span>;
                                  </td>;
                                  <td className="py-2 text-gray-600">{param.description}</td>;
                                </tr>;
                              ))}
                            </tbody>;
                          </table>;
                        </div>;
                      </div>;
                    )}
                  </div>;
                ))}
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Code Examples */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Code Examples</h2>;
              <div className="space-y-8">;
                {codeExamples.map((example, index) => (;
                  <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">;
                    <div className="flex items-center justify-between px-6 py-3 bg-gray-800">;
                      <span className="text-white font-medium">{example.language}</span>;
                      <button;
                        onClick={() => copyToClipboard(example.code, example.language)}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">;
                        {copiedCode === example.language ? (;
                          <>;
                            <Check className="w-4 h-4" />;
                            <span>Copied!</span>;
                          </>;
                        ) : (;
                          <>;
                            <Copy className="w-4 h-4" />;
                            <span>Copy</span>;
                          </>;
                        )}
                      </button>;
                    </div>;
                    <pre className="p-6 text-gray-100 overflow-x-auto">;
                      <code>{example.code}</code>;
                    </pre>;
                  </div>;
                ))}
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Resources */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto">;
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Resources</h2>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">;
                  <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SDK Downloads</h3>;
                  <p className="text-gray-600 mb-4">Client libraries for popular programming languages</p>;
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">;
                    Download SDKs;
                  </button>;
                </div>;
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">;
                  <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Documentation</h3>;
                  <p className="text-gray-600 mb-4">Comprehensive API documentation and guides</p>;
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">;
                    View Docs;
                  </button>;
                </div>;
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">;
                  <Play className="w-12 h-12 text-blue-600 mx-auto mb-4" />;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">API Playground</h3>;
                  <p className="text-gray-600 mb-4">Test API endpoints directly in your browser</p>;
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">;
                    Try API;
                  </button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Support */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center text-white">;
              <h2 className="text-3xl font-bold mb-6">Need Help?</h2>;
              <p className="text-xl mb-8 text-blue-100">;
                Our developer support team is here to help you integrate our API successfully.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/help";
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Contact Support;
                </a>;
                <a;
                  href="/documentation";
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
                  View Documentation;
                </a>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>;
  );
};
export default API;
>>>>>>> origin/automation-fixes
