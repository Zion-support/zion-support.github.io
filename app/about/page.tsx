import React from 'react';

export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes to compete and thrive in the digital age.
            </p>
            <p className="text-gray-300 mb-6">
              We combine technical expertise with business acumen to create solutions that drive real results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                1000+ successful projects delivered
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                24/7 technical support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Enterprise-grade security
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Custom solutions for every need
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}