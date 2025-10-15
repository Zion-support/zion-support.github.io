import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiCybersecuritySuiteProPage: React.FC = () => {
  const services = [
    {
      title: 'Expert Ai Cybersecurity Suite Pro Solutions',
      description: 'Professional ai cybersecurity suite pro services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored ai cybersecurity suite pro implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your ai cybersecurity suite pro needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Ai Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai cybersecurity suite pro solutions and services" />
        <meta name="keywords" content="ai, cybersecurity, suite, pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-bold text-whitemb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Protect your business with AI-powered cybersecurity solutions
            </p>
          </div>
          
          <div className="gridmd:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Threat Detection</h3>
              <p className="text-gray-300">
                AI-powered threat detection and prevention systems.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Lock className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
              <p className="text-gray-300">
                Advanced encryption and data protection mechanisms.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI Monitoring</h3>
              <p className="text-gray-300">
                Continuous AI monitoring and security analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default AiCybersecuritySuiteProPage;
