'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - leading provider of advanced AI and IT solutions. Our mission, team, and commitment to innovation." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading the future of AI and IT solutions with innovation and expertise.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Our Mission
              </h3>
              <p className="text-blue-700">
                To empower businesses with cutting-edge AI and IT solutions that drive growth and innovation.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Our Vision
              </h3>
              <p className="text-green-700">
                To be the global leader in AI and IT transformation, creating a smarter, more connected world.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Our Values
              </h3>
              <p className="text-purple-700">
                Innovation, integrity, and excellence in everything we do for our clients and partners.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}