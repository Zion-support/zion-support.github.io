<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-004e
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function IoT5GSolutionsPage() {
  return (
    <div>
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary 5G-powered IoT solutions for smart cities and connected devices."
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">5G IoT Solutions</h1>
          <p className="text-gray-300 mb-8">
            Connect and manage millions of IoT devices with 5G-powered solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Cities</h3>
              <p className="text-gray-300">
                Transform urban environments with 5G-powered smart city solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Industrial IoT</h3>
              <p className="text-gray-300">
                Optimize industrial processes with connected sensors and real-time analytics.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Connected Devices</h3>
              <p className="text-gray-300">
                Seamlessly connect and manage millions of IoT devices with 5G.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
=======
export default function FiveGiotsolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Iot Solutions | Zion Tech Group</title>
        <meta name="description" content="5g iot solutions solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">5G Iot Solutions</h1>
        <p className="text-gray-300">Coming soon...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-004e
      </div>
    </div>
  );
}