import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react';

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
        <meta name="description" content="Get started with Zion Tech Group services. Learn the first steps to begin your digital transformation journey." />
        <link rel="canonical" href={`${contact.site}/docs/first-steps`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">First Steps</h1>
            <p className="text-xl text-gray-600">
              Welcome to Zion Tech Group! Let's get you started on your digital transformation journey.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Getting Started Checklist</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Explore Our Services</h3>
                    <p className="text-gray-600 mb-3">
                      Browse our comprehensive catalog of 150+ micro SaaS products, AI services, and IT solutions.
                    </p>
                    <Link href="/services-catalog" className="text-green-600 hover:text-green-700 font-medium">
                      View Services Catalog →
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. Identify Your Needs</h3>
                    <p className="text-gray-600 mb-3">
                      Assess your current technology stack and identify areas where our solutions can add value.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cost optimization opportunities</li>
                      <li>• Process automation needs</li>
                      <li>• AI and machine learning requirements</li>
                      <li>• Infrastructure improvements</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. Get a Custom Quote</h3>
                    <p className="text-gray-600 mb-3">
                      Contact our team for a personalized consultation and custom quote based on your specific requirements.
                    </p>
                    <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium">
                      Request Quote →
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4. Start Implementation</h3>
                    <p className="text-gray-600 mb-3">
                      Once approved, our team will guide you through the implementation process with full support.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Dedicated project manager</li>
                      <li>• Technical implementation support</li>
                      <li>• Training and documentation</li>
                      <li>• Ongoing maintenance and updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help you every step of the way. Choose your preferred contact method.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-green-600 hover:text-green-700 font-medium">
                    {contact.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    {contact.email}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">24/7 response within 24 hours</p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                    Start Chat
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Available during business hours</p>
                </div>
              </div>
            </div>

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
      </div>
    </>
  );
}