import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading provider of AI and IT solutions, dedicated to helping businesses 
            transform their digital infrastructure and achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
              efficiency, and growth. We believe in the transformative power of technology and 
              its ability to solve complex business challenges.
            </p>
            <p className="text-lg text-gray-300">
              Our team of experts combines deep technical knowledge with industry experience 
              to deliver solutions that not only meet your current needs but also scale with 
              your future growth.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-300">Expert team with proven track record</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-300">Cutting-edge technology solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-300">24/7 support and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-300">Scalable and future-proof solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}