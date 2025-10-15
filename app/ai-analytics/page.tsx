import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiAnalyticsPage() {
  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven business intelligence." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Analytics Solutions</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Leverage artificial intelligence to transform your data into actionable insights 
              and drive better business outcomes with our advanced analytics platform.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Analytics Services</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Predictive analytics and forecasting</li>
              <li>Real-time data processing</li>
              <li>Machine learning model development</li>
              <li>Custom dashboard creation</li>
              <li>Data visualization and reporting</li>
              <li>Business intelligence consulting</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our AI Analytics</h2>
            <p className="text-gray-600 mb-6">
              Our AI-powered analytics solutions help you understand your data better, 
              predict future trends, and make informed decisions that drive growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}