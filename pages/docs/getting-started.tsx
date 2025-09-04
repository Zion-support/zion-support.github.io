import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Book, Zap, Users, CheckCircle } from 'lucide-react';

export default function GettingStarted() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  return (
    <>
      <Head>
        <title>Getting Started - Zion Tech Group Documentation</title>
        <meta name="description" content="Quick start guide to begin using Zion Tech Group's innovative micro SaaS, AI, and IT services." />
        <link rel="canonical" href={`${contact.site}/docs/getting-started`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
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
                  <Link href="/signup" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  );
}