import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission to provide cutting-edge AI and IT solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Zion Tech Group is a leading technology company specializing in AI-powered solutions and digital transformation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              We are committed to delivering innovative technology solutions that drive business growth and digital transformation. 
              Our team of experts combines deep technical knowledge with industry experience to provide cutting-edge AI and IT services.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              To be the leading provider of AI-powered solutions and digital transformation services, 
              helping businesses thrive in the digital age through innovative technology and exceptional service.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Expert team with years of industry experience</li>
              <li>• Cutting-edge AI and machine learning solutions</li>
              <li>• Comprehensive digital transformation services</li>
              <li>• Proven track record of successful projects</li>
              <li>• 24/7 support and maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}