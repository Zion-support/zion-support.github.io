import Link from 'next/link';
import Head from 'next/head';
import { CheckCircle, ArrowRight, Users, Zap, Shield } from 'lucide-react';

export default function FirstSteps() {
  const contact = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>First Steps - Zion Tech Group Documentation</title>
        <meta name="description" content="Get started with Zion Tech Group services. Learn how to set up your account, explore our services, and begin your digital transformation journey." />
        <link rel="canonical" href={`${contact.address}/docs/first-steps`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
              ← Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">First Steps</h1>
            <p className="text-xl text-gray-600">
              Welcome to Zion Tech Group! This guide will help you get started with our services and begin your digital transformation journey.
            </p>
          </div>

          {/* Getting Started Steps */}
          <div className="space-y-8">
            {/* Step 1: Account Setup */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Create Your Account</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Start by creating your Zion Tech Group account to access our services and dashboard.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Setup Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Visit our sign-up page</li>
                  <li>Enter your business information</li>
                  <li>Verify your email address</li>
                  <li>Complete your profile</li>
                  <li>Choose your service plan</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center">
                  Create Account
                </Link>
                <Link href="/pricing" className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors text-center">
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Step 2: Explore Services */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Explore Our Services</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Discover our comprehensive range of services designed to meet your business needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Micro SaaS</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Access our 150+ micro SaaS applications for various business needs.
                  </p>
                  <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium">
                    Explore Micro SaaS →
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">AI Services</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Leverage artificial intelligence and machine learning capabilities.
                  </p>
                  <Link href="/ai-services" className="text-green-600 hover:text-green-700 font-medium">
                    Explore AI Services →
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">IT Services</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Comprehensive IT solutions including cloud, DevOps, and cybersecurity.
                  </p>
                  <Link href="/it-services" className="text-purple-600 hover:text-purple-700 font-medium">
                    Explore IT Services →
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services-catalog" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Browse All Services
                </Link>
                <Link href="/docs" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center">
                  Read Documentation
                </Link>
              </div>
            </div>

            {/* Step 3: API Integration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Integrate with APIs</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Connect your applications with our APIs to leverage our services programmatically.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">API Integration Steps</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Get your API key from the dashboard</li>
                  <li>Review our API documentation</li>
                  <li>Test API endpoints using our sandbox</li>
                  <li>Implement API calls in your application</li>
                  <li>Monitor usage and performance</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs/api-quick-start" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center">
                  API Quick Start
                </Link>
                <Link href="/docs/api-reference" className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors text-center">
                  API Reference
                </Link>
              </div>
            </div>

            {/* Step 4: Get Support */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Get Support</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our team is here to help you succeed. Get the support you need to make the most of our services.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Support Options</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 technical support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Documentation and guides
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Community forum
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Video tutorials
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Custom implementation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Custom pricing and packages
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Implementation timeline
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Ongoing support options
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Request Quote
                </Link>
                <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center">
                  Call {contact.phone}
                </a>
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