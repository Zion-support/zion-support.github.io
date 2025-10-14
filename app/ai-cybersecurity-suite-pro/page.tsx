import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Brain, Lock } from 'lucide-react';

const AICybersecurity Suite Pro Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="AdvancedAI-powered cybersecurity solutions" />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-brfrom-slate-9 00 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-autopx-4 py-16">
          <div className="text-centermb-16">
            <h1 className="text-5 xlfont-boldtext-whitemb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Protect your business with AI-powered cybersecurity solutions
            </p>
          </div>
          
          <div className="gridmd:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Shield className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Threat Detection</h3>
              <p className="text-gray-300">
                AI-powered threat detection and prevention systems.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Lock className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Data Protection</h3>
              <p className="text-gray-300">
                Advanced encryption and data protection mechanisms.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Brain className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">AI Monitoring</h3>
              <p className="text-gray-300">
                Continuous AI monitoring and security analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  };

export default AICybersecuritySuiteProPage;