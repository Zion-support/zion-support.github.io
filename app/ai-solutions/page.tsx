import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap } from 'lucide-react';

const AiSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="AdvancedAI solutions for your business needs" />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-brfrom-slate-9 00 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-autopx-4 py-16">
          <div className="text-centermb-16">
            <h1 className="text-5 xlfont-boldtext-whitemb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Brain className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Machine Learning</h3>
              <p className="text-gray-300">
                Custom ML models tailored to your specific business requirements.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Zap className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Automation</h3>
              <p className="text-gray-300">
                Intelligent automation solutions to streamline your operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  };

export default AiSolutionsPage;