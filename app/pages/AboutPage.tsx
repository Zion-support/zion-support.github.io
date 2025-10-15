import React from 'react';
import SEOHead from '../components/SEOHead';

export default function AboutPage() {
  return (
    <>
      <SEOHead 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to deliver cutting-edge AI and IT solutions that transform businesses."
        keywords="about us, company, mission, AI solutions, IT services"
      />
      
      <div className="min-h-screen bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions and digital transformation services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with cutting-edge AI technology and innovative IT solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-300">
                We believe in the transformative power of technology and are committed to delivering solutions that make a real difference for our clients.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Expert team with deep AI and IT expertise</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Proven track record of successful implementations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Scalable solutions that grow with your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}