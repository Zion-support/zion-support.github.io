import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiAnalyticsDashboardPage() {
  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered analytics dashboard for business intelligence and data visualization." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Analytics Dashboard</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Unlock the power of your data with our intelligent analytics dashboard that provides 
              real-time insights and predictive analytics for better business decisions.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Real-time data visualization</li>
              <li>AI-powered insights and recommendations</li>
              <li>Customizable dashboard widgets</li>
              <li>Automated report generation</li>
              <li>Multi-source data integration</li>
              <li>Mobile-responsive design</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
            <p className="text-gray-600 mb-6">
              Make data-driven decisions faster, identify trends and opportunities, and improve 
              your business performance with comprehensive analytics at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}