import React from "react";
import { Helmet } from 'react-helmet-async';

const FiveGEdgeComputingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G edge computing solutions for low-latency applications." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">5G Edge Computing</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ultra-low latency computing at the edge with 5G connectivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Edge Infrastructure</h3>
              <p className="text-gray-300">Deploy computing resources closer to data sources.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Low Latency Processing</h3>
              <p className="text-gray-300">Ultra-fast data processing for real-time applications.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">IoT Integration</h3>
              <p className="text-gray-300">Seamless integration with IoT devices and sensors.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGEdgeComputingPage;