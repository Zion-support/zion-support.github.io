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
      
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-centermb-16"></div>
            <h1 className="text-5xlfont-boldtext-whitemb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300mb-8">
              Scalable micro SaaS solutions tailored to your business needs
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2gap-8"></div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/2 0"></div>
              <Rocket className="w-12h-12 text-blue-400mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Rapid Development</h3>
              <p className="text-gray-300">
                Fast-track your SaaS product development with our expert team.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/2 0"></div>
              <Target className="w-12h-12 text-blue-400mb-4" />
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