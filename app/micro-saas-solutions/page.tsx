import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Rocket } from 'lucide-react';

const Micro Saas Solutions Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro Saa S Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalablemicro Saa S solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-brfrom-slate-9 00 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-autopx-4 py-16">
          <div className="text-centermb-16">
            <h1 className="text-5 xlfont-boldtext-whitemb-6">
              Micro Saa S Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Scalable micro Saa S solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Rocket className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Rapid Development</h3>
              <p className="text-gray-300">
                Fast-track your Saa S product development with our expert team.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
              <Target className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Targeted Solutions</h3>
              <p className="text-gray-300">
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