import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions to support your business growth and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Scalable cloud infrastructure solutions to support your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration to cloud platforms with minimal disruption to your business.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS Migration</li>
                <li>• Azure Migration</li>
                <li>• GCP Migration</li>
                <li>• Hybrid Cloud Solutions</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Architecture</h3>
              <p className="text-gray-300 mb-4">
                Design and implement scalable cloud architectures for optimal performance.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Microservices Architecture</li>
                <li>• Container Orchestration</li>
                <li>• Auto-scaling Solutions</li>
                <li>• Load Balancing</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Security</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions to protect your cloud infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Identity & Access Management</li>
                <li>• Data Encryption</li>
                <li>• Security Monitoring</li>
                <li>• Compliance Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;