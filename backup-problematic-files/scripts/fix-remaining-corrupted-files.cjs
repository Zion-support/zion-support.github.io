<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// List of remaining corrupted files to fix
const corruptedFiles = ['pages/docs/integration-examples.tsx',
  'pages/docs/sdk.tsx',
  'pages/enterprise.tsx',
  'pages/help.tsx',
  'pages/login.tsx'
];
// Function to fix a corrupted file by rewriting it with proper content
function fixCorruptedFile(filePath) {
  try {
    let content = '';
    if (filePath === 'pages/docs/integration-examples.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Code, Zap, ExternalLink } from 'lucide-react';
export default function IntegrationExamples() {
  const contact = { 
    "phone": '+1 302 464 0950', 
    "email": 'kleber@ziontechgroup.com', 
    "address": '364 E Main St STE 1008 Middletown DE 19709', 
    "site": 'https://ziontechgroup.com' 
  };
  return (
    <>
      <Head>
        <title>Integration Examples - Zion Tech Group Documentation</title>
        <meta name="description" content="Real-world integration examples for Zion Tech Group's APIs and services." />
        <link rel="canonical" href={\"\${contact.site}/docs/integration-examples\"} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
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
{\"class ZionTechAPI {
  constructor(apiKey, baseURL = '"https": //api.ziontechgroup.com/v1') {
    this.apiKey = apiKey;
    this.baseURL = baseURL}
  async getServices() {
    try {
      const response = await fetch(\`\${this.baseURL}/services\`, {
        "headers": {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(\`HTTP error! "status": \${response.status}\`)}
      return await response.json()} catch (error) {
      console.error('Error fetching "services": ', error);
      throw error}
  }
  async submitContact(data) {
    try {
      const response = await fetch(\`\${this.baseURL}/contact\`, {
        "method": 'POST',
        "headers": {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify(data)
      });
      return await response.json()} catch (error) {
      console.error('Error submitting "contact": ', error);
      throw error}
  }
}
// Usage
const api = new ZionTechAPI('your-api-key');
const services = await api.getServices();
\"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          {/* Python Example */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Python Integration</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Python API Client</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 text-sm">
{\"import requests
import json
class "ZionTechAPI": def __init__(self, api_key, base_url='"https": //api.ziontechgroup.com/v1'):
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    def get_services(self):
        "try": response = requests.get(f'{self.base_url}/services', headers=self.headers)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as "e": print(f'Error fetching services: {e}')
            raise
    def submit_contact(self, data):
        "try": response = requests.post(
                f'{self.base_url}/contact',
                headers=self.headers,
                data=json.dumps(data)
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as "e": print(f'Error submitting contact: {e}')
            raise
# Usage
api = ZionTechAPI('your-api-key')
services = api.get_services()
print(services)\"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          {/* React Component Example */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <ExternalLink className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">React Component Integration</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">React Hook for API</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-purple-400 text-sm">
{\"import { useState, useEffect } from 'react';
const useZionTechAPI = (apiKey) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('"https": //api.ziontechgroup.com/v1/services', {
        "headers": {
          'Authorization': \`Bearer \${apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(\`HTTP error! "status": \${response.status}\`)}
      const data = await response.json();
      setServices(data.data.services)} catch (err) {
      setError(err.message)} finally {
      setLoading(false)}
  };
  useEffect(() => {
    if (apiKey) {
      fetchServices()}
  }, [apiKey]);
  return { services, loading, error, "refetch": fetchServices }};
export default useZionTechAPI;\"}
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
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Integration Support
              </Link>
              <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Email Technical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/docs/sdk.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Download, Code, Package } from 'lucide-react';
export default function SDK() {
  const contact = { 
    "phone": '+1 302 464 0950', 
    "email": 'kleber@ziontechgroup.com', 
    "address": '364 E Main St STE 1008 Middletown DE 19709', 
    "site": 'https://ziontechgroup.com' 
  };
  return (
    <>
      <Head>
        <title>SDK - Zion Tech Group Documentation</title>
        <meta name="description" content="Official SDKs and libraries for integrating with Zion Tech Group's APIs." />
        <link rel="canonical" href={\"\${contact.site}/docs/sdk\"} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
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
{\"npm install @ziontechgroup/sdk
# or
yarn add @ziontechgroup/sdk\"}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Usage</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-blue-400 text-sm">
{\"import { ZionTechAPI } from '@ziontechgroup/sdk';
const api = new ZionTechAPI('your-api-key');
// Get all services
const services = await api.services.getAll();
// Submit contact form
const result = await api.contact.submit({
  "name": 'John Doe',
  "email": 'john@example.com',
  "service": 'micro-saas',
  "message": 'Looking for a custom solution'
});
\"}
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
{\"pip install ziontechgroup-sdk\"}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Usage</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-blue-400 text-sm">
{\"from ziontechgroup import ZionTechAPI
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
print(result)\"}
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
{\"npm install @ziontechgroup/react-hooks\"}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage in React Component</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-purple-400 text-sm">
{\"import React from 'react';
import { useZionTechAPI } from '@ziontechgroup/react-hooks';
function ServicesList() {
  const { services, loading, error } = useZionTechAPI('your-api-key');
  if (loading) return <div>Loading...</div>;
  if (error) return <div>"Error": {error}</div>;
  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )}\"}
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
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get SDK Support
              </Link>
              <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Email Technical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/enterprise.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';
export default function Enterprise() {
  const solutions = [{
      "icon": <Shield className="w-8 h-8" />,
      "title": 'Enterprise Security',
      "description": 'Comprehensive cybersecurity solutions including threat detection, compliance management, and data protection.',
      "features": ['Advanced Threat Detection', 'Compliance Automation', 'Data Encryption', 'Security Monitoring']
    },
    {
      "icon": <Users className="w-8 h-8" />,
      "title": 'Team Collaboration',
      "description": 'Advanced collaboration tools and platforms to enhance team productivity and communication.',
      "features": ['Unified Communication', 'Project Management', 'Document Sharing', 'Real-time Collaboration']
    },
    {
      "icon": <Zap className="w-8 h-8" />,
      "title": 'Performance Optimization',
      "description": 'Optimize your enterprise systems for maximum performance and efficiency.',
      "features": ['System Monitoring', 'Performance Analytics', 'Automated Scaling', 'Resource Optimization']
    }
  ];
  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions for large organizations including security, collaboration, and performance optimization." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for large organizations. 
              Scale your business with our enterprise-grade services and support.
            </p>
          </div>
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 "md": grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 "hover": shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can help your organization 
              achieve its technology goals.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Contact Enterprise Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/help.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, MessageCircle, Phone, Mail } from 'lucide-react';
export default function Help() {
  const contact = { 
    "phone": '+1 302 464 0950', 
    "email": 'kleber@ziontechgroup.com', 
    "address": '364 E Main St STE 1008 Middletown DE 19709', 
    "site": 'https://ziontechgroup.com' 
  };
  const helpCategories = [{
      "title": "Getting Started",
      "icon": "🚀",
      "articles": [
        {
          title: "How to Get Started with Our Services",
          "description": "Step-by-step guide to begin your technology journey"
        },
        {
          "title": "Account Setup and Configuration",
          "description": "Learn how to set up your account and configure settings"
        },
        {
          "title": "Understanding Our Service Portfolio",
          "description": "Overview of all available services and solutions"
        },
        {
          "title": "Initial Consultation Process",
          "description": "What to expect during your first consultation"
        }
      ]
    },
    {
      "title": "Technical Support",
      "icon": "🔧",
      "articles": [{
          title: "Troubleshooting Common Issues",
          "description": "Solutions to frequently encountered problems"
        },
        {
          "title": "System Requirements and Compatibility",
          "description": "Technical specifications and compatibility information"
        },
        {
          "title": "Performance Optimization",
          "description": "Tips for improving system performance"
        },
        {
          "title": "Integration and API Documentation",
          "description": "Technical documentation for integrations"
        }
      ]
    },
    {
      "title": "Billing & Account",
      "icon": "💳",
      "articles": [{
          title: "Understanding Your Bill",
          "description": "How to read and understand your service charges"
        },
        {
          "title": "Payment Methods and Billing Cycles",
          "description": "Available payment options and billing schedules"
        },
        {
          "title": "Upgrading or Downgrading Services",
          "description": "How to modify your service plan"
        },
        {
          "title": "Cancellation and Refund Policy",
          "description": "Information about service cancellation and refunds"
        }
      ]
    },
    {
      "title": "Security & Privacy",
      "icon": "🛡️",
      "articles": [{
          title: "Security Best Practices",
          "description": "Guidelines for maintaining security"
        },
        {
          "title": "Data Privacy and Protection",
          "description": "How we protect your data and privacy"
        },
        {
          "title": "Two-Factor Authentication Setup",
          "description": "How to enable 2FA for your account"
        },
        {
          "title": "Reporting Security Issues",
          "description": "How to report security concerns"
        }
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's services. Find answers to common questions and contact our support team." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions and get the support you need for our services.
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          {/* Help Categories */}
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 "hover": shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-blue-600 "hover": text-blue-800 hover:underline">
                        {article.title}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        {article.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Contact Support */}
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues you may have.
            </p>
            <div className="grid grid-cols-1 "md": grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Start Chat
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 rounded-full p-4 mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <a href={\"tel:\${contact.phone}\"} className="text-green-600 "hover": text-green-800 font-semibold">
                  {contact.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 rounded-full p-4 mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <a href={\""mailto": \${contact.email}\"} className="text-purple-600 "hover": text-purple-800 font-semibold">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/login.tsx') {
      content = "import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
export default function Login() {
  const [formData, setFormData] = useState({
    "email": '',
    "password": ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = ("e": React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))};
  const handleSubmit = ("e": React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login functionality will be implemented with authentication system.')};
  return (
    <>
      <Head>
        <title>Login - Zion Tech Group</title>
        <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-12 px-4 "sm": px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/signup" className="font-medium text-blue-600 "hover": text-blue-500">
                create a new account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg "focus": outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="appearance-none relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg "focus": outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 "focus": ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )}"}
    if (content) {
      fs.writeFileSync(filePath, content, 'utf8');
      } else {
      }
  } catch (error) {
    }
}
// Fix all corrupted files
corruptedFiles.forEach(fixCorruptedFile);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Fixing Remaining Corrupted Files.");"console.log("===");/ List of remaining corrupted files to fix"const corruptedFiles = ["pages/docs/integration-examples.tsx"," "pages/docs/sdk.tsx"," "pages/enterprise.tsx"," "pages/help.tsx"," "pages/login.tsx"];/ Function to fix a corrupted file by rewriting it with proper contentfunction fixCorruptedFile(filePath) { console.log(`\n Fixing: ${filePath}`); try {" let content = ""; " if (filePath === "pages/docs/integration-examples.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { ArrowLeft, Code, Zap, ExternalLink } from "lucide-react";module.exports = default function IntegrationExamples() { const contact = { "" phone: "+1 302 464 0950", "" email: "kleber@ziontechgroup.com", "" address: "364 E Main St STE 1008 Middletown DE 19709", "" site: "https:/ziontechgroup.com" }; return ( <> <Head> <title>Integration Examples - Zion Tech Group Documentation</title>"" <meta name="description" content="Real-world integration examples for Zion Tech Group"s APIs and services." />" <link rel="canonical" href={\"\${contact.site}/docs/integration-examples\"} /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-6xl mx-auto px-4 py-8"> {}" <div className="mb-8">" <Link href="/docs" className="inline-flex items-center text-blue-600 hover: text-blue-700 mb-4">" <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link>" <h1 className="text-4xl font-bold text-gray-900 mb-4">Integration Examples</h1>" <p className="text-xl text-gray-600"> Real-world examples showing how to integrate with our APIs and services </p> </div> {}" <div className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <Code className="w-8 h-8 text-yellow-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">JavaScript/Node.js Integration</h2> </div> " <div className="space-y-6"> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic API Client</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-blue-400 text-sm">"{\"class ZionTechAPI {"" constructor(apiKey, baseURL = "https: /api.ziontechgroup.com/v1") { this.apiKey = apiKey; this.baseURL = baseURL} async getServices() { try {` const response = await fetch(\`\${this.baseURL}/services\`, {" headers: {"` Authorization: \`Bearer \${this.apiKey}\`," "Content-Type": "application/json" } }); if (!response.ok) {"` throw new Error(\`HTTP error! status: \${response.status}\`)} return await response.json()} catch (error) {"" console.error("Error fetching services: ", error); throw error} } async submitContact(data) { try {` const response = await fetch(\`\${this.baseURL}/contact\`, {"" method: "POST"," headers: {"` Authorization: \`Bearer \${this.apiKey}\`," "Content-Type": "application/json" }," body: JSON.stringify(data) }); return await response.json()} catch (error) {"" console.error("Error submitting contact: ", error); throw error} }}/ Usage"const api = new ZionTechAPI("your-api-key");const services = await api.getServices();"console.log(services);\"} </pre> </div> </div> </div> </div> {}" <div className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <Zap className="w-8 h-8 text-green-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">Python Integration</h2> </div> " <div className="space-y-6"> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Python API Client</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-green-400 text-sm">"{\"import requestsconst json""class ZionTechAPI: def __init__(self, api_key, base_url="https: /api.ziontechgroup.com/v1"): self.api_key = api_key self.base_url = base_url self.headers = {" Authorization: f"Bearer {api_key}"," "Content-Type": "application/json" } def get_services(self):"" try: response = requests.get(f"{self.base_url}/services", headers=self.headers) response.raise_for_status() return response.json()"" except requests.exceptions.RequestException as e: print(f"Error fetching services: {e}") raise def submit_contact(self, data):" try: response = requests.post(" f"{self.base_url}/contact", headers=self.headers, data=json.dumps(data) ) response.raise_for_status() return response.json()"" except requests.exceptions.RequestException as e: print(f"Error submitting contact: {e}") raise# Usage"api = ZionTechAPI("your-api-key")services = api.get_services()"print(services)\"} </pre> </div> </div> </div> </div> {}" <div className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <ExternalLink className="w-8 h-8 text-blue-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">React Component Integration</h2> </div> " <div className="space-y-6"> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">React Hook for API</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-purple-400 text-sm">""{\"import { useState, useEffect } from "react";const useZionTechAPI = (apiKey) => { const [services, setServices] = useState([]); const [loading, setLoading] = useState(false); const [error, setError] = useState(null); const fetchServices = async () => { setLoading(true); setError(null); try {"" const response = await fetch("https: /api.ziontechgroup.com/v1/services", {" headers: {"` Authorization: \`Bearer \${apiKey}\`," "Content-Type": "application/json" } }); if (!response.ok) {"` throw new Error(\`HTTP error! status: \${response.status}\`)} const data = await response.json(); setServices(data.data.services)} catch (err) { setError(err.message)} finally { setLoading(false)} }; useEffect(() => { if (apiKey) { fetchServices()} }, [apiKey]);" return { services, loading, error, refetch: fetchServices }};"module.exports = default useZionTechAPI;\"} </pre> </div> </div> </div> </div> {}" <div className="bg-blue-50 rounded-lg p-8 text-center">" <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Integration?</h2>" <p className="text-gray-600 mb-6"> Our technical team can help you integrate our services into your application </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get Integration Support </Link>" <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover: bg-blue-50 transition-colors"> Email Technical Team </a> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/docs/sdk.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { ArrowLeft, Download, Code, Package } from "lucide-react";module.exports = default function SDK() { const contact = { "" phone: "+1 302 464 0950", "" email: "kleber@ziontechgroup.com", "" address: "364 E Main St STE 1008 Middletown DE 19709", "" site: "https:/ziontechgroup.com" }; return ( <> <Head> <title>SDK - Zion Tech Group Documentation</title>"" <meta name="description" content="Official SDKs and libraries for integrating with Zion Tech Group"s APIs." />" <link rel="canonical" href={\"\${contact.site}/docs/sdk\"} /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-4xl mx-auto px-4 py-8"> {}" <div className="mb-8">" <Link href="/docs" className="inline-flex items-center text-blue-600 hover: text-blue-700 mb-4">" <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link>" <h1 className="text-4xl font-bold text-gray-900 mb-4">SDK & Libraries</h1>" <p className="text-xl text-gray-600"> Official SDKs and libraries to help you integrate with our APIs quickly and easily </p> </div> {}" <div className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <Package className="w-8 h-8 text-yellow-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">JavaScript/Node.js SDK</h2> </div> " <div className="space-y-6"> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-green-400 text-sm">"{\"npm install @ziontechgroup/sdk# or"yarn add @ziontechgroup/sdk\"} </pre> </div> </div> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Usage</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-blue-400 text-sm">""{\"import { ZionTechAPI } from "@ziontechgroup/sdk";"const api = new ZionTechAPI("your-api-key");/ Get all servicesconst services = await api.services.getAll();/ Submit contact formconst result = await api.contact.submit({"" name: "John Doe","" email: "john@example.com","" service: "micro-saas","" message: "Looking for a custom solution"});"console.log(result);\"} </pre> </div> </div> </div> </div> {}" <div className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <Code className="w-8 h-8 text-green-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">Python SDK</h2> </div> " <div className="space-y-6"> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-green-400 text-sm">"{\"pip install ziontechgroup-sdk\"} </pre> </div> </div> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Usage</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-blue-400 text-sm">"{\"from ziontechgroup import ZionTechAPI"api = ZionTechAPI("your-api-key")# Get all servicesservices = api.services.get_all()# Submit contact formresult = api.contact.submit({" name: "John Doe"," email: "john@example.com"," service: "micro-saas"," message: "Looking for a custom solution"})"print(result)\"} </pre> </div> </div> </div> </div> {}" <div className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <Download className="w-8 h-8 text-blue-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">React Hook</h2> </div> " <div className="space-y-6"> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-green-400 text-sm">"{\"npm install @ziontechgroup/react-hooks\"} </pre> </div> </div> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage in React Component</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-purple-400 text-sm">""{\"import React from "react";"const { useZionTechAPI } from "@ziontechgroup/react-hooks";function ServicesList() {" const { services, loading, error } = useZionTechAPI("your-api-key"); if (loading) return <div>Loading.</div>;" if (error) return <div>Error: {error}</div>; return ( <div> {services.map(service => ( <div key={service.id}> <h3>{service.name}</h3> <p>{service.description}</p> </div> ))} </div>" )}\"} </pre> </div> </div> </div> </div> {}" <div className="bg-blue-50 rounded-lg p-8 text-center">" <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with SDKs?</h2>" <p className="text-gray-600 mb-6"> Our technical team can help you get started with our SDKs and libraries </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get SDK Support </Link>" <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover: bg-blue-50 transition-colors"> Email Technical Team </a> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/enterprise.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { Shield, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";module.exports = default function Enterprise() { const solutions = [{" icon: <Shield className="w-8 h-8" />,"" title: "Enterprise Security","" description: "Comprehensive cybersecurity solutions including threat detection, compliance management, and data protection.","" features: ["Advanced Threat Detection", "Compliance Automation", "Data Encryption", "Security Monitoring"] }, {" icon: <Users className="w-8 h-8" />,"" title: "Team Collaboration","" description: "Advanced collaboration tools and platforms to enhance team productivity and communication.","" features: ["Unified Communication", "Project Management", "Document Sharing", "Real-time Collaboration"] }, {" icon: <Zap className="w-8 h-8" />,"" title: "Performance Optimization","" description: "Optimize your enterprise systems for maximum performance and efficiency.","" features: ["System Monitoring", "Performance Analytics", "Automated Scaling", "Resource Optimization"] } ]; return ( <> <Head> <title>Enterprise Solutions - Zion Tech Group</title>" <meta name="description" content="Comprehensive enterprise solutions for large organizations including security, collaboration, and performance optimization." /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-7xl mx-auto px-4 py-16"> {}" <div className="text-center mb-16">" <h1 className="text-5xl font-bold text-gray-900 mb-6"> Enterprise Solutions </h1>" <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions designed for large organizations Scale your business with our enterprise-grade services and support </p> </div> {}" <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-16"> {solutions.map((solution, index) => (" <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover: shadow-xl transition-shadow">" <div className="text-blue-600 mb-4"> {solution.icon} </div>" <h3 className="text-2xl font-semibold text-gray-900 mb-4"> {solution.title} </h3>" <p className="text-gray-600 mb-6"> {solution.description} </p>" <ul className="space-y-2"> {solution.features.map((feature, featureIndex) => (" <li key={featureIndex} className="flex items-center text-gray-700">" <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {feature} </li> ))} </ul> </div> ))} </div> {}" <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center">" <h2 className="text-3xl font-bold mb-6"> Ready to Transform Your Enterprise? </h2>" <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">" Let"s discuss how our enterprise solutions can help your organization achieve its technology goals </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"> Contact Enterprise Team" <ArrowRight className="w-5 h-5 ml-2" /> </Link>" <Link href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"> Schedule Demo </Link> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/help.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { Search, MessageCircle, Phone, Mail } from "lucide-react";module.exports = default function Help() { const contact = { "" phone: "+1 302 464 0950", "" email: "kleber@ziontechgroup.com", "" address: "364 E Main St STE 1008 Middletown DE 19709", "" site: "https:/ziontechgroup.com" }; const helpCategories = [{" title: "Getting Started"," icon: ""," articles: [ {" title: "How to Get Started with Our Services"," description: "Step-by-step guide to begin your technology journey" }, {" title: "Account Setup and Configuration"," description: "Learn how to set up your account and configure settings" }, {" title: "Understanding Our Service Portfolio"," description: "Overview of all available services and solutions" }, {" title: "Initial Consultation Process"," description: "What to expect during your first consultation" } ] }, {" title: "Technical Support"," icon: ""," articles: [{" title: "Troubleshooting Common Issues"," description: "Solutions to frequently encountered problems" }, {" title: "System Requirements and Compatibility"," description: "Technical specifications and compatibility information" }, {" title: "Performance Optimization"," description: "Tips for improving system performance" }, {" title: "Integration and API Documentation"," description: "Technical documentation for integrations" } ] }, {" title: "Billing & Account"," icon: ""," articles: [{" title: "Understanding Your Bill"," description: "How to read and understand your service charges" }, {" title: "Payment Methods and Billing Cycles"," description: "Available payment options and billing schedules" }, {" title: "Upgrading or Downgrading Services"," description: "How to modify your service plan" }, {" title: "Cancellation and Refund Policy"," description: "Information about service cancellation and refunds" } ] }, {" title: "Security & Privacy"," icon: ""," articles: [{" title: "Security Best Practices"," description: "Guidelines for maintaining security" }, {" title: "Data Privacy and Protection"," description: "How we protect your data and privacy" }, {" title: "Two-Factor Authentication Setup"," description: "How to enable 2FA for your account" }, {" title: "Reporting Security Issues"," description: "How to report security concerns" } ] } ]; return ( <> <Head> <title>Help Center - Zion Tech Group</title>"" <meta name="description" content="Get help and support for Zion Tech Group"s services. Find answers to common questions and contact our support team." /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-6xl mx-auto px-4 py-16"> {}" <div className="text-center mb-16">" <h1 className="text-5xl font-bold text-gray-900 mb-6"> Help Center </h1>" <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Find answers to your questions and get the support you need for our services </p> {}" <div className="max-w-2xl mx-auto">" <div className="relative">" <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> <input" type="text"" placeholder="Search for help articles."" className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> </div> </div> {}" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16"> {helpCategories.map((category, index) => (" <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow">" <div className="text-4xl mb-4">{category.icon}</div>" <h3 className="text-xl font-semibold text-gray-900 mb-4"> {category.title} </h3>" <ul className="space-y-3"> {category.articles.map((article, articleIndex) => ( <li key={articleIndex}>" <a href="#" className="text-blue-600 hover: text-blue-800 hover:underline"> {article.title} </a>" <p className="text-sm text-gray-600 mt-1"> {article.description} </p> </li> ))} </ul> </div> ))} </div> {}" <div className="bg-white rounded-lg shadow-lg p-12 text-center">" <h2 className="text-3xl font-bold text-gray-900 mb-6"> Still Need Help? </h2>" <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"> Our support team is here to help you with any questions or issues you may have </p> " <div className="grid grid-cols-1 md: grid-cols-3 gap-8">" <div className="flex flex-col items-center">" <div className="bg-blue-100 rounded-full p-4 mb-4">" <MessageCircle className="w-8 h-8 text-blue-600" /> </div>" <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>" <p className="text-gray-600 mb-4">Get instant help from our support team</p>" <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold"> Start Chat </Link> </div> " <div className="flex flex-col items-center">" <div className="bg-green-100 rounded-full p-4 mb-4">" <Phone className="w-8 h-8 text-green-600" /> </div>" <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>" <p className="text-gray-600 mb-4">Call us for immediate assistance</p>" <a href={\"tel:\${contact.phone}\"} className="text-green-600 hover: text-green-800 font-semibold"> {contact.phone} </a> </div> " <div className="flex flex-col items-center">" <div className="bg-purple-100 rounded-full p-4 mb-4">" <Mail className="w-8 h-8 text-purple-600" /> </div>" <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>" <p className="text-gray-600 mb-4">Send us a detailed message</p>" <a href={\"mailto: \${contact.email}\"} className="text-purple-600 hover: text-purple-800 font-semibold"> {contact.email} </a> </div> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/login.tsx") {"" content = "import React, { useState } from "react";"const Head from "next/head";"const Link from "next/link";"const { Eye, EyeOff, Mail, Lock } from "lucide-react";module.exports = default function Login() { const [formData, setFormData] = useState({"" email: "","" password: "" }); const [showPassword, setShowPassword] = useState(false);" const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { const { name, value } = e.target; setFormData(prev => ({ .prev, [name]: value }))};" const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); / Handle login logic here" console.log("Login attempt:", formData);" alert("Login functionality will be implemented with authentication system.")}; return ( <> <Head> <title>Login - Zion Tech Group</title>" <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-12 px-4 sm: px-6 lg:px-8">" <div className="max-w-md w-full space-y-8"> <div>" <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Sign in to your account </h2>" <p className="mt-2 text-center text-sm text-gray-600">" Or{" "}" <Link href="/signup" className="font-medium text-blue-600 hover: text-blue-500"> create a new account </Link> </p> </div> " <form className="mt-8 space-y-6" onSubmit={handleSubmit}>" <div className="space-y-4"> <div>" <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email address </label>" <div className="mt-1 relative">" <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">" <Mail className="h-5 w-5 text-gray-400" /> </div> <input" id="email"" name="email"" type="email"" autoComplete="email" required value={formData.email} onChange={handleInputChange}" className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus: outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"" placeholder="Enter your email" /> </div> </div> <div>" <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>" <div className="mt-1 relative">" <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">" <Lock className="h-5 w-5 text-gray-400" /> </div> <input" id="password"" name="password"" type={showPassword ? "text" : "password"}" autoComplete="current-password" required value={formData.password} onChange={handleInputChange}" className="appearance-none relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus: outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"" placeholder="Enter your password" />" <div className="absolute inset-y-0 right-0 pr-3 flex items-center"> <button" type="button"" className="text-gray-400 hover:text-gray-500" onClick={() => setShowPassword(!showPassword)} > {showPassword ? (" <EyeOff className="h-5 w-5" /> ) : (" <Eye className="h-5 w-5" /> )} </button> </div> </div> </div> </div>" <div className="flex items-center justify-between">" <div className="flex items-center"> <input" id="remember-me"" name="remember-me"" type="checkbox"" className="h-4 w-4 text-blue-600 focus: ring-blue-500 border-gray-300 rounded" />" <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label> </div>" <div className="text-sm">" <a href="#" className="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a> </div> </div> <div> <button" type="submit"" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" > Sign in </button> </div> </form> </div> </div> </>" )}"} if (content) {" fs.writeFileSync(filePath, content, "utf8");` console.log(` Fixed ${filePath}`)} else {` console.log(` No content defined for ${filePath}`)} } catch (error) {` console.log(` Error fixing ${filePath}: ${error.message}`)}}/ Fix all corrupted filescorruptedFiles.forEach(fixCorruptedFile);"console.log("\n All remaining corrupted files fixed!");'"`'"`
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// console.log(' Fixing Remaining Corrupted Files...')
console.log('===')
const corruptedFiles = ['pages/docs/integration-examples.tsx']
  'pages/docs/sdk.tsx'
  'pages/enterprise.tsx'
  'pages/help.tsx'
  'pages/login.tsx'
    let content = ''
    if (filePath === 'pages/docs/integration-examples.tsx')
      content = "
    "email"
<<<<<<< HEAD
    "password"
=======
<<<<<<< HEAD
    "password"
=======
<<<<<<< HEAD
    "password"
=======
    "password"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
