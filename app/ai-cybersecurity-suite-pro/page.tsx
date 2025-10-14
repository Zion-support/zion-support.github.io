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
      
      <div className=" min-h-scre e n bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className=" contain e r mx-autopx-4py-16">
          <div className=" text-centermb-16">
            <h1 className=" text-5xlfont-boldtext-whitemb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className=" text- x ltext-gray-300mb-8">
              Protect your business with AI-powered cybersecurity solutions
            </p>
          </div>
          
          <div className=" gridmd:grid-cols-3gap-8">
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/20">
              <Shield className=" w -12h-12 text-blue-400mb-4" />
              <h3 className=" text-xlfont-semiboldtext-whitemb-3">Threat Detection</h3>
              <p className=" text-gray-300">
                AI-powered threat detection and prevention systems.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/20">
              <Lock className=" w -12h-12 text-blue-400mb-4" />
              <h3 className=" text-xlfont-semiboldtext-whitemb-3">Data Protection</h3>
              <p className=" text-gray-300">
                Advanced encryption and data protection mechanisms.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/20">
              <Brain className=" w -12h-12 text-blue-400mb-4" />
              <h3 className=" text-xlfont-semiboldtext-whitemb-3">AI Monitoring</h3>
              <p className=" text-gray-300">
                Continuous AI monitoring and security analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICybersecuritySuiteProPage;
</Brain>
</Lock>
</Shield>
</titl>
</h>
</h>
</h>
</meta>