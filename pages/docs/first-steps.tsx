import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, Star } from 'lucide-react';

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <h3 className="font-semibold text-gray-900 mb-4">What we'll need from you:</h3>
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
                <h3 className="font-semibold text-gray-900 mb-4">During the consultation, we'll:</h3>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  );
}