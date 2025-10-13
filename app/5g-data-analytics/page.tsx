import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function DataAnalytics5GPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">5G Data Analytics</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Leverage the power of 5G networks for advanced data analytics and real-time insights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Real-time Processing</h3>
              <p className="text-gray-300">
                Process massive data streams in real-time with 5G's ultra-low latency.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Edge Analytics</h3>
              <p className="text-gray-300">
                Deploy analytics at the edge for faster decision making and reduced bandwidth usage.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-gray-300">
                Leverage AI and ML algorithms for intelligent data analysis and predictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}