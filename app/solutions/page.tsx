import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Explore our comprehensive range of AI solutions, micro SaaS development, and IT services designed to accelerate your business growth.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-6">
              Custom AI implementations that solve real business problems and drive efficiency.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
            <p className="text-gray-600 mb-6">
              Scalable software solutions designed for rapid deployment and growth.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Web Applications</li>
              <li>• Mobile Apps</li>
              <li>• API Development</li>
              <li>• Cloud Integration</li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive IT services to support your business infrastructure needs.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Cloud Migration</li>
              <li>• DevOps & SRE</li>
              <li>• Security Audits</li>
              <li>• System Monitoring</li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}