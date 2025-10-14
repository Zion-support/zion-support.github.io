import React from "react";
import { Helmet } from "react-helmet-async";

export default function NetworkInfrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Network Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Professional Network Infrastructure services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Network Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build robust, scalable network infrastructure with our expert solutions designed for modern businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Network Design</h3>
            <p className="text-gray-300 mb-4">
              Custom network architecture designed for your specific business requirements.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Scalable infrastructure</li>
              <li>• High availability</li>
              <li>• Security-first approach</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Security Implementation</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive security measures to protect your network infrastructure.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Firewall configuration</li>
              <li>• Intrusion detection</li>
              <li>• VPN solutions</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Monitoring & Maintenance</h3>
            <p className="text-gray-300 mb-4">
              24/7 monitoring and proactive maintenance of your network infrastructure.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Real-time monitoring</li>
              <li>• Performance optimization</li>
              <li>• Preventive maintenance</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}