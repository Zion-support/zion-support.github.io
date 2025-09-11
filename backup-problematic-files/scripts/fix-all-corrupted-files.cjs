<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// List of corrupted files to fix
const corruptedFiles = ['pages/docs/api-reference.tsx',
  'pages/docs/authentication.tsx', 
  'pages/docs/first-steps.tsx',
  'pages/docs/getting-started.tsx'
];
// Function to fix a corrupted file by rewriting it with proper content
function fixCorruptedFile(filePath) {
  try {
    let content = '';
    if (filePath === 'pages/docs/api-reference.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Code, Zap, Shield, Clock } from 'lucide-react';
export default function ApiReference() {
  const contact = { 
    "phone": '+1 302 464 0950', 
    "email": 'kleber@ziontechgroup.com', 
    "address": '364 E Main St STE 1008 Middletown DE 19709', 
    "site": 'https://ziontechgroup.com' 
  };
  return (
    <>
      <Head>
        <title>API Reference - Zion Tech Group Documentation</title>
        <meta name="description" content="Complete API reference for Zion Tech Group's micro SaaS, AI, and IT services." />
        <link rel="canonical" href={\"\${contact.site}/docs/api-reference\"} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
            <p className="text-xl text-gray-600">
              Complete reference for all Zion Tech Group APIs and endpoints.
            </p>
          </div>
          {/* Authentication */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Authentication</h2>
            </div>
            <p className="text-gray-600 mb-6">
              All API requests require authentication using a Bearer token in the Authorization header.
            </p>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Header Format</h3>
              <pre className="text-green-400 text-sm">
{\""Authorization": Bearer YOUR_API_KEY\"}
              </pre>
            </div>
          </section>
          {/* Services Endpoints */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">📋 Services Endpoints</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">GET /v1/services</h3>
                <p className="text-gray-600 mb-4">Retrieve all available services</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Response Example</h4>
                  <pre className="text-sm text-gray-700">
{\"{
  "success": true,
  "data": {
    "services": [{
        "id": "micro-saas",
        "name": "Micro SaaS Products",
        "description": "Custom micro SaaS solutions",
        "pricing": "Starting at $2,500"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 67,
      "pages": 7
    }
  }
}\"}
                  </pre>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">POST /v1/contact</h3>
                <p className="text-gray-600 mb-4">Submit a contact form or quote request</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body</h4>
                  <pre className="text-sm text-gray-700">
{\"{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "phone": "+1-555-0123",
  "service": "micro-saas",
  "message": "Looking for a custom solution...",
  "budget_range": "1000-5000",
  "additional_notes": "Looking for a custom solution..."
}\"}
                  </pre>
                </div>
              </div>
            </div>
          </section>
          {/* Rate Limiting */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Rate Limiting</h2>
            </div>
            <p className="text-gray-600 mb-6">
              API requests are rate limited to ensure fair usage and system stability.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 "md": grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Free Tier</h3>
                  <p className="text-gray-600">100 requests/hour</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Professional</h3>
                  <p className="text-gray-600">10,000 requests/hour</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600">Unlimited requests</p>
                </div>
              </div>
            </div>
          </section>
          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with the API?</h2>
            <p className="text-gray-600 mb-6">
              Our technical team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Support
              </Link>
              <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Email Technical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/docs/authentication.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Key, Shield, Lock, User } from 'lucide-react';
export default function Authentication() {
  const contact = { 
    "phone": '+1 302 464 0950', 
    "email": 'kleber@ziontechgroup.com', 
    "address": '364 E Main St STE 1008 Middletown DE 19709', 
    "site": 'https://ziontechgroup.com' 
  };
  return (
    <>
      <Head>
        <title>Authentication - Zion Tech Group Documentation</title>
        <meta name="description" content="Learn how to authenticate with Zion Tech Group's APIs using API keys, OAuth 2.0, and JWT tokens." />
        <link rel="canonical" href={\"\${contact.site}/docs/authentication\"} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Authentication</h1>
            <p className="text-xl text-gray-600">
              Secure authentication methods for accessing Zion Tech Group's APIs and services.
            </p>
          </div>
          {/* Authentication Methods */}
          <div className="space-y-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Key className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">API Key Authentication</h2>
              </div>
              <p className="text-gray-600 mb-6">
                The simplest way to authenticate with our APIs is using an API key.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">How to get your API "key": </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Sign up for a free account at <a href="/signup" className="text-blue-600 hover:underline">ziontechgroup.com/signup</a></li>
                  <li>Navigate to the API section in your dashboard</li>
                  <li>Generate a new API key</li>
                  <li>Copy and securely store your API key</li>
                </ol>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">OAuth 2.0</h2>
              </div>
              <p className="text-gray-600 mb-6">
                For more advanced integrations, we support OAuth 2.0 authentication.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">OAuth 2.0 "Flow": </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Register your application in the developer dashboard</li>
                  <li>Redirect users to our authorization endpoint</li>
                  <li>Handle the authorization callback</li>
                  <li>Exchange the authorization code for an access token</li>
                  <li>Use the access token to make API requests</li>
                </ol>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">JWT Tokens</h2>
              </div>
              <p className="text-gray-600 mb-6">
                For server-to-server communication, we support JWT (JSON Web Token) authentication.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">JWT Token "Structure": </h3>
                <pre className="text-sm text-gray-700">
{\"{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user_id",
    "iat": 1640995200,
    "exp": 1641081600
  }
}\"}
                </pre>
              </div>
            </div>
          </div>
          {/* Security Best Practices */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Never expose your API keys in client-side code</li>
              <li>Use environment variables to store sensitive credentials</li>
              <li>Rotate your API keys regularly</li>
              <li>Use HTTPS for all API requests</li>
              <li>Implement proper error handling for authentication failures</li>
            </ul>
          </div>
          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Authentication?</h2>
            <p className="text-gray-600 mb-6">
              Our technical team is here to help you implement secure authentication.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Support
              </Link>
              <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Email Technical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/docs/first-steps.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, Star } from 'lucide-react';
export default function FirstSteps() {
  const contact = { 
    "phone": '+1 302 464 0950', 
    "email": 'kleber@ziontechgroup.com', 
    "address": '364 E Main St STE 1008 Middletown DE 19709', 
    "site": 'https://ziontechgroup.com' 
  };
  return (
    <>
      <Head>
        <title>First Steps - Zion Tech Group Documentation</title>
        <meta name="description" content="Your first steps to getting started with Zion Tech Group's services and solutions." />
        <link rel="canonical" href={\"\${contact.site}/docs/first-steps\"} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">First Steps</h1>
            <p className="text-xl text-gray-600">
              A step-by-step guide to begin your journey with Zion Tech Group's innovative solutions.
            </p>
          </div>
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Zion Tech Group!</h2>
            <p className="text-blue-100 mb-6">
              You're about to discover how our 350+ services can transform your business operations, 
              from micro SaaS solutions to cutting-edge AI services.
            </p>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-sm">Trusted by 1000+ businesses worldwide</span>
            </div>
          </div>
          {/* Step-by-Step Guide */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                <h2 className="text-2xl font-semibold text-gray-900">Explore Our Services</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Start by browsing our comprehensive catalog of services across different categories.
              </p>
              <div className="grid grid-cols-1 "md": grid-cols-3 gap-4">
                <Link href="/services/micro-saas" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Micro SaaS</h3>
                  <p className="text-sm text-gray-600">Custom software solutions</p>
                </Link>
                <Link href="/services/ai-services" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">AI Services</h3>
                  <p className="text-sm text-gray-600">Artificial intelligence solutions</p>
                </Link>
                <Link href="/services/it-services" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">IT Services</h3>
                  <p className="text-sm text-gray-600">Technology infrastructure</p>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                <h2 className="text-2xl font-semibold text-gray-900">Get a Quote</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Once you've identified the services you need, request a personalized quote.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">What we'll need from "you": </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Project requirements and scope</li>
                  <li>Timeline expectations</li>
                  <li>Budget range</li>
                  <li>Contact information</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/request-quote" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                <h2 className="text-2xl font-semibold text-gray-900">Schedule a Consultation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Book a free consultation call with our experts to discuss your project in detail.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">During the consultation, we'"ll": </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Understand your specific needs</li>
                  <li>Provide technical recommendations</li>
                  <li>Discuss timeline and deliverables</li>
                  <li>Answer any questions you have</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/schedule-demo" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
          {/* Next Steps */}
          <div className="bg-blue-50 rounded-lg p-8 text-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Take the next step in transforming your business with our innovative solutions.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
              <Link href="/services" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/docs/getting-started.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Book, Zap, Users, CheckCircle } from 'lucide-react';
export default function GettingStarted() {
  const contact = { 
    "phone": '+1 302 464 0950', 
    "email": 'kleber@ziontechgroup.com', 
    "address": '364 E Main St STE 1008 Middletown DE 19709', 
    "site": 'https://ziontechgroup.com' 
  };
  return (
    <>
      <Head>
        <title>Getting Started - Zion Tech Group Documentation</title>
        <meta name="description" content="Quick start guide to begin using Zion Tech Group's innovative micro SaaS, AI, and IT services." />
        <link rel="canonical" href={\"\${contact.site}/docs/getting-started\"} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
            <p className="text-xl text-gray-600">
              Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly.
            </p>
          </div>
          {/* Quick Start Steps */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Book className="w-6 h-6 mr-3 text-blue-600" />
              Quick Start Guide
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign Up for an Account</h3>
                  <p className="text-gray-600 mb-4">Create your free account to access our services and dashboard.</p>
                  <Link href="/signup" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg "hover": bg-blue-700 transition-colors">
                    Sign Up Now
                  </Link>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Our Services</h3>
                  <p className="text-gray-600 mb-4">Browse our catalog of 350+ services across different categories.</p>
                  <Link href="/services" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Browse Services
                  </Link>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Request a Quote</h3>
                  <p className="text-gray-600 mb-4">Get a personalized quote for the services you need.</p>
                  <Link href="/request-quote" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Service Categories */}
          <div className="grid grid-cols-1 "md": grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Micro SaaS</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Custom software solutions tailored to your business needs.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Web applications</li>
                <li>• Mobile apps</li>
                <li>• Desktop software</li>
                <li>• API development</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">AI Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Artificial intelligence solutions to automate and optimize your processes.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Machine learning models</li>
                <li>• Natural language processing</li>
                <li>• Computer vision</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">IT Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive IT infrastructure and support services.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Cloud migration</li>
                <li>• System administration</li>
                <li>• Security audits</li>
                <li>• Technical support</li>
              </ul>
            </div>
          </div>
          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Getting Started?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Support
              </Link>
              <Link href="/schedule-demo" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
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
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Fixing All Corrupted Files.");"console.log("=====");/ List of corrupted files to fix"const corruptedFiles = ["pages/docs/api-reference.tsx"," "pages/docs/authentication.tsx", " "pages/docs/first-steps.tsx"," "pages/docs/getting-started.tsx"];/ Function to fix a corrupted file by rewriting it with proper contentfunction fixCorruptedFile(filePath) { console.log(`\n Fixing: ${filePath}`); try {" let content = ""; " if (filePath === "pages/docs/api-reference.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { ArrowLeft, Code, Zap, Shield, Clock } from "lucide-react";module.exports = default function ApiReference() { const contact = { "" phone: "+1 302 464 0950", "" email: "kleber@ziontechgroup.com", "" address: "364 E Main St STE 1008 Middletown DE 19709", "" site: "https:/ziontechgroup.com" }; return ( <> <Head> <title>API Reference - Zion Tech Group Documentation</title>"" <meta name="description" content="Complete API reference for Zion Tech Group"s micro SaaS, AI, and IT services." />" <link rel="canonical" href={\"\${contact.site}/docs/api-reference\"} /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-6xl mx-auto px-4 py-8"> {}" <div className="mb-8">" <Link href="/docs" className="inline-flex items-center text-blue-600 hover: text-blue-700 mb-4">" <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link>" <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>" <p className="text-xl text-gray-600"> Complete reference for all Zion Tech Group APIs and endpoints </p> </div> {}" <section className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <Shield className="w-8 h-8 text-blue-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">Authentication</h2> </div>" <p className="text-gray-600 mb-6"> All API requests require authentication using a Bearer token in the Authorization header </p> " <div className="bg-gray-900 rounded-lg p-6">" <h3 className="text-white font-semibold mb-4">Header Format</h3>" <pre className="text-green-400 text-sm">"{\"Authorization: Bearer YOUR_API_KEY\"} </pre> </div> </section> {}" <section className="bg-white rounded-lg shadow-lg p-8 mb-8">" <h2 className="text-2xl font-semibold text-gray-900 mb-6"> Services Endpoints</h2> " <div className="space-y-6">" <div className="border border-gray-200 rounded-lg p-6">" <h3 className="text-xl font-semibold text-gray-900 mb-4">GET /v1/services</h3>" <p className="text-gray-600 mb-4">Retrieve all available services</p> " <div className="bg-gray-50 rounded-lg p-4">" <h4 className="font-semibold text-gray-900 mb-2">Response Example</h4>" <pre className="text-sm text-gray-700">"{\"{" success: true," data: {" services: [{" id: "micro-saas"," name: "Micro SaaS Products"," description: "Custom micro SaaS solutions"," pricing: "Starting at $2,500" } ]," pagination: {" page: 1," limit: 10," total: 67," pages: 7 } }"}\"} </pre> </div> </div>" <div className="border border-gray-200 rounded-lg p-6">" <h3 className="text-xl font-semibold text-gray-900 mb-4">POST /v1/contact</h3>" <p className="text-gray-600 mb-4">Submit a contact form or quote request</p> " <div className="bg-gray-50 rounded-lg p-4">" <h4 className="font-semibold text-gray-900 mb-2">Request Body</h4>" <pre className="text-sm text-gray-700">"{\"{" name: "John Doe"," email: "john@example.com"," company: "Example Corp"," phone: "+1-555-0123"," service: "micro-saas"," message: "Looking for a custom solution."," budget_range: "1000-5000"," additional_notes: "Looking for a custom solution.""}\"} </pre> </div> </div> </div> </section> {}" <section className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <Clock className="w-8 h-8 text-orange-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">Rate Limiting</h2> </div>" <p className="text-gray-600 mb-6"> API requests are rate limited to ensure fair usage and system stability </p> " <div className="bg-gray-50 rounded-lg p-6">" <div className="grid grid-cols-1 md: grid-cols-3 gap-4">" <div className="text-center">" <h3 className="font-semibold text-gray-900 mb-2">Free Tier</h3>" <p className="text-gray-600">100 requests/hour</p> </div>" <div className="text-center">" <h3 className="font-semibold text-gray-900 mb-2">Professional</h3>" <p className="text-gray-600">10,000 requests/hour</p> </div>" <div className="text-center">" <h3 className="font-semibold text-gray-900 mb-2">Enterprise</h3>" <p className="text-gray-600">Unlimited requests</p> </div> </div> </div> </section> {}" <div className="bg-blue-50 rounded-lg p-8 text-center">" <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with the API?</h2>" <p className="text-gray-600 mb-6"> Our technical team is here to help you integrate our APIs successfully </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get Support </Link>" <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover: bg-blue-50 transition-colors"> Email Technical Team </a> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/docs/authentication.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { ArrowLeft, Key, Shield, Lock, User } from "lucide-react";module.exports = default function Authentication() { const contact = { "" phone: "+1 302 464 0950", "" email: "kleber@ziontechgroup.com", "" address: "364 E Main St STE 1008 Middletown DE 19709", "" site: "https:/ziontechgroup.com" }; return ( <> <Head> <title>Authentication - Zion Tech Group Documentation</title>"" <meta name="description" content="Learn how to authenticate with Zion Tech Group"s APIs using API keys, OAuth 2.0, and JWT tokens." />" <link rel="canonical" href={\"\${contact.site}/docs/authentication\"} /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-4xl mx-auto px-4 py-8"> {}" <div className="mb-8">" <Link href="/docs" className="inline-flex items-center text-blue-600 hover: text-blue-700 mb-4">" <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link>" <h1 className="text-4xl font-bold text-gray-900 mb-4">Authentication</h1>" <p className="text-xl text-gray-600">" Secure authentication methods for accessing Zion Tech Group"s APIs and services </p> </div> {}" <div className="space-y-8 mb-8">" <div className="bg-white rounded-lg shadow-lg p-8">" <div className="flex items-center mb-6">" <Key className="w-8 h-8 text-blue-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">API Key Authentication</h2> </div>" <p className="text-gray-600 mb-6"> The simplest way to authenticate with our APIs is using an API key </p> " <div className="bg-gray-50 rounded-lg p-6">" <h3 className="font-semibold text-gray-900 mb-4">How to get your API key: </h3>" <ol className="list-decimal list-inside space-y-2 text-gray-700">" <li>Sign up for a free account at <a href="/signup" className="text-blue-600 hover:underline">ziontechgroup.com/signup</a></li> <li>Navigate to the API section in your dashboard</li> <li>Generate a new API key</li> <li>Copy and securely store your API key</li> </ol> </div> </div>" <div className="bg-white rounded-lg shadow-lg p-8">" <div className="flex items-center mb-6">" <Shield className="w-8 h-8 text-green-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">OAuth 2.0</h2> </div>" <p className="text-gray-600 mb-6"> For more advanced integrations, we support OAuth 2.0 authentication </p> " <div className="bg-gray-50 rounded-lg p-6">" <h3 className="font-semibold text-gray-900 mb-4">OAuth 2.0 Flow: </h3>" <ol className="list-decimal list-inside space-y-2 text-gray-700"> <li>Register your application in the developer dashboard</li> <li>Redirect users to our authorization endpoint</li> <li>Handle the authorization callback</li> <li>Exchange the authorization code for an access token</li> <li>Use the access token to make API requests</li> </ol> </div> </div>" <div className="bg-white rounded-lg shadow-lg p-8">" <div className="flex items-center mb-6">" <Lock className="w-8 h-8 text-purple-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">JWT Tokens</h2> </div>" <p className="text-gray-600 mb-6"> For server-to-server communication, we support JWT (JSON Web Token) authentication </p> " <div className="bg-gray-50 rounded-lg p-6">" <h3 className="font-semibold text-gray-900 mb-4">JWT Token Structure: </h3>" <pre className="text-sm text-gray-700">"{\"{" header: {" alg: "HS256"," typ: "JWT" }," payload: {" sub: "user_id"," iat: 1640995200," exp: 1641081600 }"}\"} </pre> </div> </div> </div> {}" <div className="bg-yellow-50 rounded-lg p-8 mb-8">" <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Best Practices</h2>" <ul className="list-disc list-inside space-y-2 text-gray-700"> <li>Never expose your API keys in client-side code</li> <li>Use environment variables to store sensitive credentials</li> <li>Rotate your API keys regularly</li> <li>Use HTTPS for all API requests</li> <li>Implement proper error handling for authentication failures</li> </ul> </div> {}" <div className="bg-blue-50 rounded-lg p-8 text-center">" <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Authentication?</h2>" <p className="text-gray-600 mb-6"> Our technical team is here to help you implement secure authentication </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get Support </Link>" <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover: bg-blue-50 transition-colors"> Email Technical Team </a> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/docs/first-steps.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { ArrowLeft, CheckCircle, ArrowRight, Star } from "lucide-react";module.exports = default function FirstSteps() { const contact = { "" phone: "+1 302 464 0950", "" email: "kleber@ziontechgroup.com", "" address: "364 E Main St STE 1008 Middletown DE 19709", "" site: "https:/ziontechgroup.com" }; return ( <> <Head> <title>First Steps - Zion Tech Group Documentation</title>"" <meta name="description" content="Your first steps to getting started with Zion Tech Group"s services and solutions." />" <link rel="canonical" href={\"\${contact.site}/docs/first-steps\"} /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-4xl mx-auto px-4 py-8"> {}" <div className="mb-8">" <Link href="/docs" className="inline-flex items-center text-blue-600 hover: text-blue-700 mb-4">" <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link>" <h1 className="text-4xl font-bold text-gray-900 mb-4">First Steps</h1>" <p className="text-xl text-gray-600">" A step-by-step guide to begin your journey with Zion Tech Group"s innovative solutions </p> </div> {}" <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">" <h2 className="text-2xl font-semibold mb-4">Welcome to Zion Tech Group!</h2>" <p className="text-blue-100 mb-6">" You"re about to discover how our 350+ services can transform your business operations, from micro SaaS solutions to cutting-edge AI services </p>" <div className="flex items-center">" <Star className="w-5 h-5 text-yellow-300 mr-2" />" <span className="text-sm">Trusted by 1000+ businesses worldwide</span> </div> </div> {}" <div className="space-y-8">" <div className="bg-white rounded-lg shadow-lg p-8">" <div className="flex items-center mb-6">" <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>" <h2 className="text-2xl font-semibold text-gray-900">Explore Our Services</h2> </div>" <p className="text-gray-600 mb-6"> Start by browsing our comprehensive catalog of services across different categories </p>" <div className="grid grid-cols-1 md: grid-cols-3 gap-4">" <Link href="/services/micro-saas" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">" <h3 className="font-semibold text-gray-900 mb-2">Micro SaaS</h3>" <p className="text-sm text-gray-600">Custom software solutions</p> </Link>" <Link href="/services/ai-services" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">" <h3 className="font-semibold text-gray-900 mb-2">AI Services</h3>" <p className="text-sm text-gray-600">Artificial intelligence solutions</p> </Link>" <Link href="/services/it-services" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">" <h3 className="font-semibold text-gray-900 mb-2">IT Services</h3>" <p className="text-sm text-gray-600">Technology infrastructure</p> </Link> </div> </div>" <div className="bg-white rounded-lg shadow-lg p-8">" <div className="flex items-center mb-6">" <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>" <h2 className="text-2xl font-semibold text-gray-900">Get a Quote</h2> </div>" <p className="text-gray-600 mb-6">" Once you"ve identified the services you need, request a personalized quote </p>" <div className="bg-gray-50 rounded-lg p-6">"" <h3 className="font-semibold text-gray-900 mb-4">What we"ll need from you: </h3>" <ul className="list-disc list-inside space-y-2 text-gray-700"> <li>Project requirements and scope</li> <li>Timeline expectations</li> <li>Budget range</li> <li>Contact information</li> </ul> </div>" <div className="mt-6">" <Link href="/request-quote" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Request Quote" <ArrowRight className="w-4 h-4 ml-2" /> </Link> </div> </div>" <div className="bg-white rounded-lg shadow-lg p-8">" <div className="flex items-center mb-6">" <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>" <h2 className="text-2xl font-semibold text-gray-900">Schedule a Consultation</h2> </div>" <p className="text-gray-600 mb-6"> Book a free consultation call with our experts to discuss your project in detail </p>" <div className="bg-gray-50 rounded-lg p-6">"" <h3 className="font-semibold text-gray-900 mb-4">During the consultation, we"ll: </h3>" <ul className="list-disc list-inside space-y-2 text-gray-700"> <li>Understand your specific needs</li> <li>Provide technical recommendations</li> <li>Discuss timeline and deliverables</li> <li>Answer any questions you have</li> </ul> </div>" <div className="mt-6">" <Link href="/schedule-demo" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"> Schedule Consultation" <ArrowRight className="w-4 h-4 ml-2" /> </Link> </div> </div> </div> {}" <div className="bg-blue-50 rounded-lg p-8 text-center mt-8">" <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>" <p className="text-gray-600 mb-6"> Take the next step in transforming your business with our innovative solutions </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Contact Us </Link>" <Link href="/services" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Browse Services </Link> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/docs/getting-started.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { ArrowLeft, Book, Zap, Users, CheckCircle } from "lucide-react";module.exports = default function GettingStarted() { const contact = { "" phone: "+1 302 464 0950", "" email: "kleber@ziontechgroup.com", "" address: "364 E Main St STE 1008 Middletown DE 19709", "" site: "https:/ziontechgroup.com" }; return ( <> <Head> <title>Getting Started - Zion Tech Group Documentation</title>"" <meta name="description" content="Quick start guide to begin using Zion Tech Group"s innovative micro SaaS, AI, and IT services." />" <link rel="canonical" href={\"\${contact.site}/docs/getting-started\"} /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-4xl mx-auto px-4 py-8"> {}" <div className="mb-8">" <Link href="/docs" className="inline-flex items-center text-blue-600 hover: text-blue-700 mb-4">" <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link>" <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>" <p className="text-xl text-gray-600"> Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly </p> </div> {}" <div className="bg-white rounded-lg shadow-lg p-8 mb-8">" <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">" <Book className="w-6 h-6 mr-3 text-blue-600" /> Quick Start Guide </h2> " <div className="space-y-6">" <div className="flex items-start">" <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign Up for an Account</h3>" <p className="text-gray-600 mb-4">Create your free account to access our services and dashboard.</p>" <Link href="/signup" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors"> Sign Up Now </Link> </div> </div>" <div className="flex items-start">" <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Our Services</h3>" <p className="text-gray-600 mb-4">Browse our catalog of 350+ services across different categories.</p>" <Link href="/services" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"> Browse Services </Link> </div> </div>" <div className="flex items-start">" <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-2">Request a Quote</h3>" <p className="text-gray-600 mb-4">Get a personalized quote for the services you need.</p>" <Link href="/request-quote" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"> Request Quote </Link> </div> </div> </div> </div> {}" <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8">" <div className="bg-white rounded-lg shadow-lg p-6">" <div className="flex items-center mb-4">" <Zap className="w-8 h-8 text-blue-600 mr-3" />" <h3 className="text-xl font-semibold text-gray-900">Micro SaaS</h3> </div>" <p className="text-gray-600 mb-4"> Custom software solutions tailored to your business needs </p>" <ul className="text-sm text-gray-700 space-y-1"> <li> Web applications</li> <li> Mobile apps</li> <li> Desktop software</li> <li> API development</li> </ul> </div>" <div className="bg-white rounded-lg shadow-lg p-6">" <div className="flex items-center mb-4">" <Users className="w-8 h-8 text-green-600 mr-3" />" <h3 className="text-xl font-semibold text-gray-900">AI Services</h3> </div>" <p className="text-gray-600 mb-4"> Artificial intelligence solutions to automate and optimize your processes </p>" <ul className="text-sm text-gray-700 space-y-1"> <li> Machine learning models</li> <li> Natural language processing</li> <li> Computer vision</li> <li> Predictive analytics</li> </ul> </div>" <div className="bg-white rounded-lg shadow-lg p-6">" <div className="flex items-center mb-4">" <CheckCircle className="w-8 h-8 text-purple-600 mr-3" />" <h3 className="text-xl font-semibold text-gray-900">IT Services</h3> </div>" <p className="text-gray-600 mb-4"> Comprehensive IT infrastructure and support services </p>" <ul className="text-sm text-gray-700 space-y-1"> <li> Cloud migration</li> <li> System administration</li> <li> Security audits</li> <li> Technical support</li> </ul> </div> </div> {}" <div className="bg-blue-50 rounded-lg p-8 text-center">" <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Getting Started?</h2>" <p className="text-gray-600 mb-6"> Our team is here to help you every step of the way </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Contact Support </Link>" <Link href="/schedule-demo" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Schedule Demo </Link> </div> </div> </div> </div> </>" )}"} if (content) {" fs.writeFileSync(filePath, content, "utf8");` console.log(` Fixed ${filePath}`)} else {` console.log(` No content defined for ${filePath}`)} } catch (error) {` console.log(` Error fixing ${filePath}: ${error.message}`)}}/ Fix all corrupted filescorruptedFiles.forEach(fixCorruptedFile);"console.log("\n All corrupted files fixed!");'"`'"`
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
// console.log(' Fixing All Corrupted Files...')
console.log('=====')
const corruptedFiles = ['pages/docs/api-reference.tsx']
  'pages/docs/authentication.tsx'
  'pages/docs/first-steps.tsx'
  'pages/docs/getting-started.tsx'
    let content = ''
    if (filePath === 'pages/docs/api-reference.tsx')
      content = "
    "phone"
    "email"
    "address"
    "site"
<<<<<<< HEAD
        <meta name="description" content="
=======
<<<<<<< HEAD
        <meta name="description" content="
=======
<<<<<<< HEAD
        <meta name="description" content="
=======
        <meta name="description" content="
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
