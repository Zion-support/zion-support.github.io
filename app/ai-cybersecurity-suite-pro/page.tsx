import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Brain, Lock } from 'lucide-react';

const AICybersecuritySuiteProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            </h1>
<p className="Protect your business with AI-powered cybersecurity solutions
               ">$2</p>
          </div>
          
          <div className="grid md:grid-cols-3gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 borderborder-white/20">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3  ">Threat Detection</h3>
<p className="AI-powered threat detection and prevention systems.
                 ">$2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 borderborder-white/20">
              <Lock className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3  ">Data Protection</h3>
<p className="Advanced encryption and data protection mechanisms.
                 ">$2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 borderborder-white/20">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3  ">AI Monitoring</h3>
<p className="Continuous AI monitoring and security analysis.
                 ">$2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICybersecuritySuiteProPage;