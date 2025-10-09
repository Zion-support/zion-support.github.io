import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services for digital transformation, cloud migration, and cybersecurity solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert IT consulting services to help your business navigate digital transformation and technology challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                Strategic guidance to modernize your business processes and technology infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Technology Strategy</li>
                <li>• Process Optimization</li>
                <li>• Change Management</li>
                <li>• ROI Analysis</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration to cloud platforms with minimal disruption to your business.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Cloud Strategy Planning</li>
                <li>• Migration Execution</li>
                <li>• Cost Optimization</li>
                <li>• Security Implementation</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Consulting</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security assessments and implementation of best practices.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Security Audits</li>
                <li>• Risk Assessment</li>
                <li>• Compliance Planning</li>
                <li>• Incident Response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITConsultingPage;