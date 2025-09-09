import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Code, Key, Book, Download, Play, Copy, Check } from 'lucide-react';

const API: NextPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiEndpoints = [;
    {
      method: 'GET',;
      endpoint: '/api/v1/users',;
      description: 'Retrieve user information',;
      parameters: [;
        { name: 'id', type: 'string', required: true, description: 'User ID' },;
        { name: 'include', type: 'string', required: false, description: 'Additional data to include' }
      ]},;
    {
      method: 'POST',;
      endpoint: '/api/v1/users',;
      description: 'Create a new user',;
      parameters: [;
        { name: 'name', type: 'string', required: true, description: 'User name' },;
        { name: 'email', type: 'string', required: true, description: 'User email' },;
        { name: 'role', type: 'string', required: false, description: 'User role' }
      ]},;
    {
      method: 'PUT',;
      endpoint: '/api/v1/users/{id}',;
      description: 'Update user information',;
      parameters: [;
        { name: 'id', type: 'string', required: true, description: 'User ID' },;
        { name: 'name', type: 'string', required: false, description: 'Updated name' },;
        { name: 'email', type: 'string', required: false, description: 'Updated email' }
      ]},;
    {
      method: 'DELETE',;
      endpoint: '/api/v1/users/{id}',;
      description: 'Delete a user',;
      parameters: [;
        { name: 'id', type: 'string', required: true, description: 'User ID' }
      ]}
  ];

  const codeExamples = [;
    {
      language: 'JavaScript',;
      code: `const response = await fetch('https://api.ziontechgroup.com/v1/users', {
  method: 'GET',;
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',;
    'Content-Type': 'application/json'}
});

const data = await response.json();
console.log(data);`},;
    {
      language: 'Python',;
      code: `import requests;

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',;
    'Content-Type': 'application/json'}

response = requests.get('https://api.ziontechgroup.com/v1/users', headers=headers);
data = response.json();
print(data)`},;
    {
      language: 'cURL',;
      code: `curl -X GET "https://api.ziontechgroup.com/v1/users" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`}
  ];

  const copyToClipboard = async (code: string, language: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(language);
      setTimeout(() => setCopiedCode(null), 2000)} catch (err) {
      console.error('Failed to copy code:', err)}
  }
  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':;
        return 'bg-green-100 text-green-800';
      case 'POST':;
        return 'bg-blue-100 text-blue-800';
      case 'PUT':;
        return 'bg-yellow-100 text-yellow-800';
      case 'DELETE':;
        return 'bg-red-100 text-red-800';
      default:;
        return 'bg-gray-100 text-gray-800'}
  }
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

  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Learn how to integrate with our APIs and build powerful applications."
      keywords="API documentation, REST API, integration, developers, endpoints, authentication"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for integrating with Zion Tech Group services. 
                Build powerful applications with our RESTful APIs.
              </p>
            </motion.div>
          </div>
        </section>

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
                                      param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>;
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
              </div>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    API Overview
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Globe className="w-6 h-6 mr-3 text-indigo-600" />
                        Base URL
                      </h3>
                      <p className="text-gray-600 mb-4">
                        All API requests should be made to our base URL:
                      </p>
                      <code className="bg-gray-800 text-green-400 p-3 rounded-lg block font-mono">
                        https://api.ziontechgroup.com
                      </code>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Shield className="w-6 h-6 mr-3 text-indigo-600" />
                        Authentication
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Most endpoints require authentication using Bearer tokens:
                      </p>
                      <code className="bg-gray-800 text-green-400 p-3 rounded-lg block font-mono text-sm">
                        Authorization: Bearer your-token-here
                      </code>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
                      <p className="text-gray-600">High-performance APIs with 99.9% uptime guarantee</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">RESTful Design</h3>
                      <p className="text-gray-600">Standard REST APIs following industry best practices</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cloud className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable</h3>
                      <p className="text-gray-600">Built to handle high traffic and scale with your needs</p>
                    </div>
                  </div>
                </motion.div>
              )}

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
  )}
export default API;