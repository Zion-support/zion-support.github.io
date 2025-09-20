import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of AI, cloud, cybersecurity, and digital transformation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We empower businesses to transform through cutting-edge technology solutions, 
              providing AI-powered tools, cloud infrastructure, and cybersecurity services 
              that drive growth and innovation.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experts is dedicated to delivering exceptional results and 
              helping organizations stay ahead in the digital landscape.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Proven track record of successful projects</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Expert team with industry certifications</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">24/7 support and maintenance</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Cutting-edge technology solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}