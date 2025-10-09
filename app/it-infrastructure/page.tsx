import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure solutions to support your business operations and growth." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Robust IT infrastructure solutions to support your business operations and enable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Network Solutions</h3>
              <p className="text-gray-300 mb-4">
                Design, implement, and maintain secure and scalable network infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Network Design & Planning</li>
                <li>• Wireless Solutions</li>
                <li>• VPN Implementation</li>
                <li>• Network Security</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Server Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive server solutions for optimal performance and reliability.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Server Setup & Configuration</li>
                <li>• Performance Monitoring</li>
                <li>• Backup & Recovery</li>
                <li>• Maintenance & Support</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Data Center Services</h3>
              <p className="text-gray-300 mb-4">
                Secure and efficient data center solutions for your critical business data.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Data Center Design</li>
                <li>• Power & Cooling</li>
                <li>• Physical Security</li>
                <li>• Disaster Recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITInfrastructurePage;