import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiCloudInfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>Ai Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional ai cloud infrastructure solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ai Cloud Infrastructure</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Discover our comprehensive ai cloud infrastructure solutions designed to help your business 
              leverage cutting-edge technology for improved efficiency and growth.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Advanced AI-powered solutions</li>
              <li>Real-time monitoring and analytics</li>
              <li>Scalable and secure infrastructure</li>
              <li>24/7 technical support</li>
              <li>Custom integration capabilities</li>
              <li>Comprehensive documentation</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 mb-6">
              Our ai cloud infrastructure solutions are built with industry best practices and cutting-edge technology 
              to ensure optimal performance and reliability for your business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}