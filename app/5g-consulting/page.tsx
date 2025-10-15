import React from "react";
import { Helmet } from 'react-helmet-async';

const FiveGConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert 5G consulting services for enterprise deployment and optimization." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">5G Consulting Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guidance for 5G network deployment, optimization, and enterprise integration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Network Planning</h3>
              <p className="text-gray-300">Strategic 5G network design and deployment planning.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
              <p className="text-gray-300">Maximize 5G network performance and efficiency.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Integration</h3>
              <p className="text-gray-300">Seamless 5G integration with existing enterprise systems.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGConsultingPage;