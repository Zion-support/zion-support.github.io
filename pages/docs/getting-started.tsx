import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Rocket, CheckCircle, ArrowRight, Book } from 'lucide-react';

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
        <meta name="description" content="Get started with Zion Tech Group's comprehensive suite of services and solutions." />
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
              Your comprehensive guide to getting started with Zion Tech Group's innovative solutions.
            </p>
          </div>

          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Zion Tech Group!</h2>
            <p className="text-blue-100 mb-6">
              We're excited to help you transform your business with our cutting-edge technology solutions. 
              This guide will walk you through everything you need to know to get started.
            </p>
            <div className="flex items-center">
              <Rocket className="w-5 h-5 mr-2" />
              <span className="font-medium">Let's begin your digital transformation journey</span>
            </div>
          </div>

          {/* Quick Start Guide */}
          <div className="space-y-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Start Guide</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Our Services</h3>
                    <p className="text-gray-600 mb-4">
                      Browse our comprehensive catalog of 350+ services across micro SaaS, AI, and IT solutions.
                    </p>
                    <Link href="/services-catalog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                      View Services <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Our Team</h3>
                    <p className="text-gray-600 mb-4">
                      Get personalized recommendations and support from our technical experts.
                    </p>
                    <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                      Get in Touch <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Implementation</h3>
                    <p className="text-gray-600 mb-4">
                      Work with our team to implement the solutions that best fit your business needs.
                    </p>
                    <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                      Begin Implementation <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Offer</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized applications for specific business needs with quick deployment and flexible pricing.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      150+ micro applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Quick deployment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Pay-as-you-use pricing
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Services</h3>
                  <p className="text-gray-600 mb-4">
                    Machine learning and AI solutions for automation, prediction, and intelligent decision-making.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      100+ AI solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Custom model training
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Real-time processing
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Services</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive IT solutions including cloud migration, cybersecurity, and digital transformation.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      100+ IT solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Enterprise-grade security
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you get started. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}