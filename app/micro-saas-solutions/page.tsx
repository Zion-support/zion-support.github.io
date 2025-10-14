import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Rocket } from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable micro SaaS solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00via-purple-9 0 0to-slate-9 0 0">
        <div className="container mx-auto px-4 py-16">
          <div className="text-centermb-16">
            <h1 className="text-5xlfont-boldtext-whitemb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Scalable micro SaaS solutions tailored to your business needs
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2gap-8">
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Rocket className="w-1 2h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Rapid Development</h3>
              <p className="text-gray-30 0">
                Fast-track your SaaS product development with our expert team.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Target className="w-1 2h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Targeted Solutions</h3>
              <p className="text-gray-30 0">
                Focused solutions for specific business challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  };

export default MicroSaasSolutionsPage;