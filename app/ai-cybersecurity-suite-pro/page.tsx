import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Brain, Lock } from 'lucide-react';

const AICybersecuritySuiteProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-9-0-0 via-purple-9-0-0 to-slate-9-0-0">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            <p className="text-xl text-gray-3-0-0 mb-8">
              Protect your business with AI-powered cybersecurity solutions
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/1 0 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-1 2 h-12 text-blue-4-0-0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Threat Detection</h3>
              <p className="text-gray-3-0-0">
                AI-powered threat detection and prevention systems.
              <Lock className="w-1 2 h-12 text-blue-4-0-0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
                Advanced encryption and data protection mechanisms.
              <Brain className="w-1 2 h-12 text-blue-4-0-0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI Monitoring</h3>
                Continuous AI monitoring and security analysis.
    
  </div></div></div></div></></div></p></p></h1></Helmet>);
};

export default AICybersecuritySuiteProPage;