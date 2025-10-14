import React, { Suspense } from 'react';
import { Helmet, Brain, Zap } from 'react-helmet-async';

const AiSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AISolutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for your business needs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-9-via-purple-9-to-slate-9">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-126">
            <h-1 className="text-5-xlfont-boldtext-whitemb-6">
              AISolutions
            </h-1>
            <p className="text-xl text-gray-300 mb-8">
              Transformyourbusiness with cutting-edgeartificialintelligence
            </p>
          </div>
          <div className="gridmd:grid-cols-2-gap-8">
            <div className="bg-white/10-backdrop-blur-smrounded-lgp-6-borderborder-white/2 0">
              <BrainclassNam e="w-1-h-1 text-blue-4-mb-4" />
              <h-3 className="text-xlfont-semiboldtext-whitemb-3">Machine Learning</h-3>
              <p className="text-gray-30">
                Custom ML modelstailoredto yourspecificbusiness requirements.
              </p>
            </div>
            <div className="bg-white/10-backdrop-blur-smrounded-lgp-6-borderborder-white/2 0">
              <ZapclassNam e="w-1-h-1 text-blue-4-mb-4" />
              <h-3 className="text-xlfont-semiboldtext-whitemb-3">Automation</h-3>
              <p className="text-gray-30">
                Intelligentautomationsolutions tostreamlineyour operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  };

exportdefault Ai Solutions Page;