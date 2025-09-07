import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for enterprise AI solutions, micro SaaS development, and IT services.',
  keywords: 'contact zion tech group, enterprise solutions, AI development, micro SaaS, IT services',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Contact | Zion Tech Group',
    description: 'Get in touch with Zion Tech Group for enterprise AI solutions, micro SaaS development, and IT services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Zion Tech Group',
    description: 'Get in touch with Zion Tech Group for enterprise AI solutions, micro SaaS development, and IT services.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and create a custom solution that drives real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  500+ successful projects delivered
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  99.9% uptime guarantee
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  24/7 expert support
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Enterprise-grade security
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your project and create a custom solution that drives real business value.
            </p>
            <div className="space-y-4">
              <Link
                href="/services"
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center w-full justify-center"
              >
                Explore Our Services
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center w-full justify-center"
              >
                Visit Main Website
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}