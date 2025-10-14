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
      
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-centermb-16"></div>
            <h1 className="text-5xlfont-boldtext-whitemb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300mb-8">
              Transform your business with cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2gap-8"></div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/2 0"></div>
              <Brain className="w-12h-12 text-blue-400mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Machine Learning</h3>
              <p className="text-gray-300">
                Custom ML models tailored to your specific business requirements.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/2 0"></div>
              <Zap className="w-12h-12 text-blue-400mb-4" />
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