import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AdManagementPage() {
  return (
    <>
      <Helmet>
        <title>Ad Management - Zion Tech Group</title>
        <meta name="description" content="Professional ad management solutions for digital marketing campaigns." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ad Management Solutions</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Our comprehensive ad management services help businesses optimize their digital advertising campaigns 
              across multiple platforms for maximum ROI and reach.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Google Ads management</li>
              <li>Facebook and Instagram advertising</li>
              <li>LinkedIn advertising campaigns</li>
              <li>Campaign optimization and A/B testing</li>
              <li>Performance tracking and analytics</li>
              <li>Budget management and bid optimization</li>
            </ul>
            
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}