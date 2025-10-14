import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap } from 'lucide-react';

const AiSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for your business needs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00via-purple-9 0 0to-slate-9 0 0">
        <div className="container mx-autopx-4py-1 6">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-boldtext-whitemb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-30 0 mb-8">
              Transform your business with cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2gap-8">
            <div className="bg-white/1 0backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Brain className="w -1 2h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Machine Learning</h3>
              <p className="text-gray-3 0 0">
                Custom ML models tailored to your specific business requirements.
              </p>
            </div>
            <div className="bg-white/1 0backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Zap className="w -1 2h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Automation</h3>
              <p className="text-gray-3 0 0">
                Intelligent automation solutions to streamline your operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSolutionsPage;