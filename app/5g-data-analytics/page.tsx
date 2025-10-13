<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-004e
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function DataAnalytics5GPage() {
=======
export default function FiveGDataAnalyticsPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-004e
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced 5G data analytics solutions for real-time insights and business intelligence."
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">5G Data Analytics</h1>
          <p className="text-gray-300 mb-8">
            Leverage the power of 5G networks for advanced data analytics and real-time insights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300">
                Process massive data streams in real-time with 5G's ultra-low latency.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Edge Analytics</h3>
              <p className="text-gray-300">
                Deploy analytics at the edge for faster decision making and reduced bandwidth usage.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">IoT Integration</h3>
              <p className="text-gray-300">
                Connect and analyze data from millions of IoT devices seamlessly.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
=======
        <title>5G Data Analytics | Zion Tech Group</title>
        <meta name="description" content="5G-powered data analytics solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">5G Data Analytics</h1>
        <p className="text-gray-300">Coming soon...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-004e
      </div>
    </div>
  );
}