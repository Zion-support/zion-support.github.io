<<<<<<< HEAD
import React from \'react\'; import Head from \'next/head\'; import Link from \'next/link\'; import { Code,Key,Globe,Database,Shield,Zap,ArrowRight,Copy,CheckCircle,ExternalLink,Clock,Users } from \'lucide-react\'; export default function API() { const apiEndpoints = [{ \"name\": \'Authentication\',\"method\": \'POST\',\"endpoint\": \'/api/auth/login\',\"description\": \'Authenticate users and get access tokens\',\"parameters\": [\'email\',\'password\'],\"response\": \'JWT token\'},{ \"name\": \'User Profile\',\"method\": \'GET\',\"endpoint\": \'/api/user/profile\',\"description\": \'Get user profile information\',\"parameters\": [\'token\'],\"response\": \'User profile data\' },{ \"name\": \'Services List\',\"method\": \'GET\',\"endpoint\": \'/api/services\',\"description\": \'Get list of available services\',\"parameters\": [\'category\',\'limit\'],\"response\": \'Array of services\' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title> <meta name=\"description\" content=\"Comprehensive API documentation for Zion Tech Group services and integrations.\" /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <div className=\"min-h-screen bg-gray-50\"> {} <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16\"> <div className=\"container mx-auto px-4 text-center\"> <h1 className=text-4xl \"md\": text-5xl font-bold mb-4\"> API <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400>Documentation</span> </h1> <p className=text-xl text-gray-200 max-w-2xl mx-auto\"> Comprehensive API documentation for integrating with Zion Tech Group services </p> </div> </div> {} <div className=\"py-16 bg-white> <div className=container mx-auto px-4\"> <div className=\"grid \"md\": grid-cols-3 gap-8> <div className=text-center\"> <div className=\"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4> <Code className=w-8 h-8 text-blue-600\" /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-2>RESTful APIs</h3> <p className=text-gray-600\">Clean,intuitive REST endpoints for easy integration</p> </div> <div className=\"text-center> <div className=w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4\"> <Shield className=\"w-8 h-8 text-green-600 /> </div> <h3 className=text-xl font-semibold text-gray-900 mb-2\">Secure</h3> <p className=\"text-gray-600>Enterprise-grade security with JWT authentication</p> </div> <div className=text-center\"> <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4> <Zap className=w-8 h-8 text-purple-600\" /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-2>Fast</h3> <p className=text-gray-600\">High-performance APIs with sub-100ms response times</p> </div> </div> </div> </div> {} <div className=\"py-16 bg-gray-50> <div className=\"container mx-auto px-4\"> <h2 className=\"text-3xl font-bold text-gray-900 text-center mb-12\">API Endpoints</h2> <div className=\"space-y-6\"> {apiEndpoints.map((endpoint,index) => ( <div key={index} className=\"bg-white rounded-lg shadow-md p-6\"> <div className=\"flex items-center justify-between mb-4\"> <h3 className={\"text-xl font-semibold text-gray-900\"}>{endpoint.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ endpoint.method === \'GET\' ? \'bg-green-100 text-green-800\' : endpoint.method === \'POST\' ? \'bg-blue-100 text-blue-800\' : \'bg-gray-100 text-gray-800\' }`}> {endpoint.method} </span> </div> <div className=\"bg-gray-100 rounded-lg p-4 mb-4\"}> <code className=\"text-gray-800 font-mono>{endpoint.endpoint}</code> </div> <p className=text-gray-600 mb-4\">{endpoint.description}</p> <div className=\"grid \"md\": grid-cols-2 gap-4> <div> <h4 className=font-semibold text-gray-900 mb-2\">Parameters:</h4> <ul className=\"text-sm text-gray-600> {endpoint.parameters.map((param,i) => ( <li key={i} className=flex items-center\"> <span className=\"w-2 h-2 bg-blue-500 rounded-full mr-2></span> {param} </li> ))} </ul> </div> <div> <h4 className=font-semibold text-gray-900 mb-2\">Response</h4> <p className=\"text-sm text-gray-600>{endpoint.response}</p> </div> </div> </div> ))} </div> </div> </div> {} <div className=py-16 bg-white\"> <div className=\"container mx-auto px-4> <div className=max-w-3xl mx-auto text-center\"> <h2 className=\"text-3xl font-bold text-gray-900 mb-6>Getting Started</h2> <p className=text-lg text-gray-600 mb-8\"> Ready to integrate with our APIs? Get your API key and start building amazing applications. </p> <div className=\"flex flex-col \"sm\": flex-row gap-4 justify-center> <Link href=/contact\" className=\"inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300> Get API Key <ArrowRight className=ml-2 w-5 h-5\" /> </Link> <Link href=\"/docs className=inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300\"> View Full Documentation <ExternalLink className=\"ml-2 w-5 h-5\" /> </Link> </div> </div> </div> </div> </div> </> )}
import _React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Code,Key,Globe,Database,Shield,Zap,ArrowRight,Copy,CheckCircle,ExternalLink,Clock,Users } from 'lucide-react'; export default function API() { const apiEndpoints = [{ "name": 'Authentication',"method": 'POST',"endpoint": '/api/auth/login',"description": 'Authenticate users and get access tokens',"parameters": ['email','password'],"response": 'JWT token'},{ "name": 'User Profile',"method": 'GET',"endpoint": '/api/user/profile',"description": 'Get user profile information',"parameters": ['token'],"response": 'User profile data' },{ "name": 'Services List',"method": 'GET',"endpoint": '/api/services',"description": 'Get list of available services',"parameters": ['category','limit'],"response": 'Array of services' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title> <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className=text-4xl "md": text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400>Documentation</span> </h1> <p className=text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services </p> </div> </div> {} <div className="py-16 bg-white> <div className=container mx-auto px-4"> <div className="grid "md": grid-cols-3 gap-8> <div className=text-center"> <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4> <Code className=w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2>RESTful APIs</h3> <p className=text-gray-600">Clean,intuitive REST endpoints for easy integration</p> </div> <div className="text-center> <div className=w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className="w-8 h-8 text-green-600 /> </div> <h3 className=text-xl font-semibold text-gray-900 mb-2">Secure</h3> <p className="text-gray-600>Enterprise-grade security with JWT authentication</p> </div> <div className=text-center"> <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4> <Zap className=w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2>Fast</h3> <p className=text-gray-600">High-performance APIs with sub-100ms response times</p> </div> </div> </div> </div> {} <div className="py-16 bg-gray-50> <div className="container mx-auto px-4"> <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">API Endpoints</h2> <div className="space-y-6"> {apiEndpoints.map((endpoint,index) => ( <div key={index} className="bg-white rounded-lg shadow-md p-6"> <div className="flex items-center justify-between mb-4"> <h3 className={"text-xl font-semibold text-gray-900"}>{endpoint.name}</h3> <span className={`px-3 py-1 rounded-full text-sm font-medium ${ endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800' }`}> {endpoint.method} </span> </div> <div className="bg-gray-100 rounded-lg p-4 mb-4"}> <code className="text-gray-800 font-mono>{endpoint.endpoint}</code> </div> <p className=text-gray-600 mb-4">{endpoint.description}</p> <div className="grid "md": grid-cols-2 gap-4> <div> <h4 className=font-semibold text-gray-900 mb-2">Parameters:</h4> <ul className="text-sm text-gray-600> {endpoint.parameters.map((param,i) => ( <li key={i} className=flex items-center"> <span className="w-2 h-2 bg-blue-500 rounded-full mr-2></span> {param} </li> ))} </ul> </div> <div> <h4 className=font-semibold text-gray-900 mb-2">Response</h4> <p className="text-sm text-gray-600>{endpoint.response}</p> </div> </div> </div> ))} </div> </div> </div> {} <div className=py-16 bg-white"> <div className="container mx-auto px-4> <div className=max-w-3xl mx-auto text-center"> <h2 className="text-3xl font-bold text-gray-900 mb-6>Getting Started</h2> <p className=text-lg text-gray-600 mb-8"> Ready to integrate with our APIs? Get your API key and start building amazing applications. </p> <div className="flex flex-col "sm": flex-row gap-4 justify-center> <Link href=/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300> Get API Key <ArrowRight className=ml-2 w-5 h-5" /> </Link> <Link href="/docs className=inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"> View Full Documentation <ExternalLink className="ml-2 w-5 h-5" /> </Link> </div> </div> </div> </div> </div> </> )}
=======
import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Code, Key, Book, Download, Play, Copy, Check } from 'lucide-react';

const API: NextPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiEndpoints = [;
=======
import { motion } from 'framer-motion' 
import Link from 'next/link' 
import Layout from '../components/Layout' 
import { Code, BookOpen, Shield, Zap, ChevronRight, ExternalLink, Copy, Check } from 'lucide-react' 

const endpoints = [
  {
    name: 'AI Email Responder',
    method: 'POST',
    path: '/api/ai/email-responder',
    description: 'Generate intelligent email responses using AI',
    parameters: [
      { name: 'message', type: 'string', required: true, description: 'The email message to respond to' },
      { name: 'context', type: 'object', required: false, description: 'Additional context for the response' }
    ],
    response: {
      status: 200,
      data: {
        response: 'string',
        confidence: 'number',
        suggestions: 'array'
      }
    }
  },
  {
    name: 'Predictive Analytics',
    method: 'POST',
    path: '/api/ai/predictive-analytics',
    description: 'Generate business predictions and forecasts',
    parameters: [
      { name: 'data', type: 'array', required: true, description: 'Historical data for analysis' },
      { name: 'period', type: 'string', required: true, description: 'Time period for prediction' }
    ],
    response: {
      status: 200,
      data: {
        predictions: 'array',
        accuracy: 'number',
        trends: 'array'
      }
    }
  },
  {
    name: 'Content Generation',
    method: 'POST',
    path: '/api/ai/content-generation',
    description: 'Generate AI-powered content for various purposes',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
      { name: 'type', type: 'string', required: true, description: 'Type of content to generate' }
    ],
    response: {
      status: 200,
      data: {
        content: 'string',
        metadata: 'object'
      }
    }
  }
] 

export default function APIDocumentationPage() {
  const [copiedCode, setCopiedCode] = useState(null) 
  const [activeTab, setActiveTab] = useState('overview') 

  const apiEndpoints = [
>>>>>>> cursor/check-fix-push-and-merge-to-main-649b
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
<<<<<<< HEAD
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
=======
      id: 'projects',
      title: 'Projects',
      description: 'Project management and operations',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      baseUrl: '/api/v1/projects',
      endpoints: [
        {
          method: 'GET',
          path: '/',
          description: 'Get list of user projects',
          parameters: [
            { name: 'page', type: 'number', required: false, description: 'Page number for pagination' },
            { name: 'limit', type: 'number', required: false, description: 'Number of items per page' }
          ],
          response: {
            status: 200,
            data: {
              projects: 'array',
              pagination: 'object'
            }
          }
        },
        {
          method: 'POST',
          path: '/',
          description: 'Create a new project',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Project name' },
            { name: 'description', type: 'string', required: false, description: 'Project description' },
            { name: 'type', type: 'string', required: true, description: 'Project type' }
          ],
          response: {
            status: 201,
            data: {
              project: 'object',
              message: 'string'
            }
          }
        },
        {
          method: 'GET',
          path: '/:id',
          description: 'Get project details',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Project ID' }
          ],
          response: {
            status: 200,
            data: {
              project: 'object'
            }
          }
        }
      ]
    }
  ] 
>>>>>>> cursor/check-fix-push-and-merge-to-main-649b

  const codeExamples = [;
    {
      language: 'JavaScript',;
      code: `const response = await fetch('https://api.ziontechgroup.com/v1/users', {
  method: 'GET',;
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY',;
    'Content-Type': 'application/json'}
});

const data = await response.json();
console.log(data);`},;
    {
      language: 'Python',;
      code: `import requests;
=======
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'your-password'
  })
}) 

const data = await response.json() 
console.log(data);`,
    python: `# Python Example
import requests
>>>>>>> cursor/check-fix-push-and-merge-to-main-649b

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',;
    'Content-Type': 'application/json'}

<<<<<<< HEAD
response = requests.get('https://api.ziontechgroup.com/v1/users', headers=headers);
data = response.json();
print(data)`},;
    {
      language: 'cURL',;
      code: `curl -X GET "https://api.ziontechgroup.com/v1/users" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`}
  ];
=======
response = requests.post(url, json=payload)
data = response.json()
print(data)`,
    curl: `# cURL Example
curl -X POST https://api.ziontechgroup.com/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your-password"
  }'`
  } 

  const copyToClipboard = (code, language) => {
    navigator.clipboard.writeText(code) 
    setCopiedCode(language) 
    setTimeout(() => setCopiedCode(null), 2000) 
  } 

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'authentication', label: 'Authentication', icon: Shield },
    { id: 'endpoints', label: 'Endpoints', icon: Code },
    { id: 'examples', label: 'Examples', icon: Terminal },
    { id: 'errors', label: 'Errors', icon: XCircle }
  ] 
>>>>>>> cursor/check-fix-push-and-merge-to-main-649b

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

<<<<<<< HEAD
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
>>>>>>> origin/automation-fixes
