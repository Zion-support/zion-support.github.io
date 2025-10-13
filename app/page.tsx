'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions for businesses worldwide. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions tailored to your business needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                AI Solutions
              </h3>
              <p className="text-blue-700">
                Cutting-edge artificial intelligence solutions for modern businesses.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Cloud Computing
              </h3>
              <p className="text-green-700">
                Scalable cloud infrastructure and migration services.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Cybersecurity
              </h3>
              <p className="text-purple-700">
                Comprehensive security solutions to protect your digital assets.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}