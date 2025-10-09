import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services to transform your business operations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT services to transform your business operations and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge artificial intelligence services to automate and optimize your business processes.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Scalable and secure cloud solutions to support your growing business needs.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS/Azure/GCP Migration</li>
                <li>• DevOps Implementation</li>
                <li>• Container Orchestration</li>
                <li>• Auto-scaling Solutions</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions to protect your digital assets and data.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Security Audits</li>
                <li>• Threat Detection</li>
                <li>• Compliance Management</li>
                <li>• Incident Response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;