'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiSystemIntegrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI System Integration - Zion Tech Group</title>
        <meta name="description" content="Seamless AI system integration services. Connect and optimize your existing systems with intelligent AI solutions." />
        <meta name="keywords" content="AI system integration, system integration, AI implementation, enterprise integration, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI System Integration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate AI capabilities into your existing systems and workflows. 
              Our experts ensure smooth implementation with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Legacy System Integration</h2>
              <p className="text-gray-300 mb-6">
                Modernize your legacy systems by integrating AI capabilities without disrupting 
                existing workflows. We ensure backward compatibility and smooth transitions.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• API development and integration</li>
                <li>• Data migration and synchronization</li>
                <li>• Legacy system modernization</li>
                <li>• Real-time data processing</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Cloud Integration</h2>
              <p className="text-gray-300 mb-6">
                Connect your on-premises systems with cloud-based AI services for enhanced 
                scalability, performance, and cost-effectiveness.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Hybrid cloud architecture</li>
                <li>• Multi-cloud integration</li>
                <li>• Data pipeline optimization</li>
                <li>• Security and compliance</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Plan Your Integration
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSystemIntegrationPage;