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
            <h1 className="text-5xlfont-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-gray-600">Protect your business with AI-powered cybersecurity solutions</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-12h-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Threat Detection</h3>
              <p className="text-gray-600">AI-powered threat detection and prevention systems.</p>
            <div className="bg-white/10backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Lock className="w-12h-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
              <p className="text-gray-600">Advanced encryption and data protection mechanisms.</p>
            <div className="bg-white/10backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Brain className="w-12h-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Monitoring</h3>
              <p className="text-gray-600">Continuous AI monitoring and security analysis.</p>
    </>
  );
};

export default AICybersecuritySuiteProPage;