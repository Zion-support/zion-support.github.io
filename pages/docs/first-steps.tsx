import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Play, CheckCircle, ArrowRight, Book } from 'lucide-react';

export default function FirstSteps() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  return (
    <>
      <Head>
        <title>First Steps - Zion Tech Group Documentation</title>
        <meta name="description" content="Your first steps to getting started with Zion Tech Group's services and solutions." />
        <link rel="canonical" href={`${contact.site}/docs/first-steps`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
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
              from micro SaaS applications to AI-powered automation and comprehensive IT solutions.
            </p>
            <div className="flex items-center">
              <Play className="w-5 h-5 mr-2" />
              <span className="font-medium">Let's get started on your digital transformation journey</span>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="space-y-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Assess Your Needs</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Before diving in, let's understand what you're looking to achieve. Our services span three main categories:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized applications for specific business needs like cost optimization, analytics, and automation.
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
                  <Link href="/micro-saas" className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-4">
                    Explore Micro SaaS <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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
                  <Link href="/ai-services" className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-4">
                    Explore AI Services <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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
                  <Link href="/it-services" className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-4">
                    Explore IT Services <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Get Started</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Ready to begin? Here are your next steps to get started with our services.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Browse Our Catalog</h3>
                  <p className="text-gray-600 mb-4">
                    Explore our comprehensive service catalog to find solutions that match your needs.
                  </p>
                  <Link href="/services-catalog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    View All Services <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Our Team</h3>
                  <p className="text-gray-600 mb-4">
                    Get personalized recommendations and support from our technical experts.
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    Get in Touch <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Need Help Getting Started?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Phone:</strong> {contact.phone}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Address:</strong> {contact.address}</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <a href={`mailto:${contact.email}`} className="block text-blue-600 hover:text-blue-700">
                    Send us an email
                  </a>
                  <a href={`tel:${contact.phone}`} className="block text-blue-600 hover:text-blue-700">
                    Call {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready for the Next Step?</h2>
            <p className="text-gray-600 mb-6">
              You're now ready to explore our services and start your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services-catalog" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Browse Services
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}