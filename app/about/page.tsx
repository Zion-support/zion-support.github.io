import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI solutions, 
            micro SaaS development, and enterprise IT services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are dedicated to delivering cutting-edge technology solutions 
              that drive real business results. Our team combines deep technical 
              expertise with a passion for innovation.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Get in touch
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-600">Expert AI & ML Solutions</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-600">Micro SaaS Development</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-600">Enterprise IT Services</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-600">24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
