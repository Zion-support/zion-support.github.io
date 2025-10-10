'use client';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are dedicated to transforming businesses through cutting-edge AI technology, 
              quantum computing solutions, and comprehensive digital transformation services.
            </p>
            <p className="text-lg text-gray-600">
              Our goal is to help companies achieve 300% ROI while reducing costs by 70% 
              and improving efficiency by 90% through innovative technology solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                Expert team with deep AI and quantum computing expertise
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                Proven track record of 300% ROI for clients
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                Enterprise-grade security and compliance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                24/7 support and maintenance
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your business? Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/demo"
              className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 hover:text-white transition-colors"
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
