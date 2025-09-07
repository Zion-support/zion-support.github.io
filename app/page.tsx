import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI, Micro SaaS, and IT Services
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Enterprise-grade solutions that drive real business results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🤖</span>
              <h3 className="text-xl font-semibold text-gray-900">AI Services</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Custom AI solutions including chatbots, analytics, and automation
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">AI-powered chatbots</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Predictive analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Machine learning models</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">💼</span>
              <h3 className="text-xl font-semibold text-gray-900">Micro SaaS</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Scalable software solutions for modern businesses
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Custom web applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">API development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Cloud deployment</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">⚙️</span>
              <h3 className="text-xl font-semibold text-gray-900">IT Services</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive IT infrastructure and support solutions
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Cloud migration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">Cybersecurity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">DevOps & SRE</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ businesses already using our AI and IT solutions. 
            Get a free consultation and see how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">🕒 Available 24/7 for Enterprise Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}