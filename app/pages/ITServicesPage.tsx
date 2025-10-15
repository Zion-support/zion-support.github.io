import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and digital transformation." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure and accelerate digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Infrastructure Management</h3>
              <p className="text-gray-300 mb-4">
                Optimize and maintain your IT infrastructure for maximum performance and reliability.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Server Management</li>
                <li>• Network Optimization</li>
                <li>• System Monitoring</li>
                <li>• Performance Tuning</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Cloud Solutions</h3>
              <p className="text-gray-300 mb-4">
                Migrate to the cloud and leverage scalable, cost-effective cloud infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Cloud Migration</li>
                <li>• Multi-Cloud Strategy</li>
                <li>• Cloud Security</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Protect your digital assets with comprehensive cybersecurity solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Threat Detection</li>
                <li>• Vulnerability Assessment</li>
                <li>• Security Audits</li>
                <li>• Incident Response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;