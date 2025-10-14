import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud } from 'lucide-react';

const ItSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="ComprehensiveIT solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-brfrom-slate-9 00 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-autopx-4 py-1 6">
          <div className="text-centermb-16">
            <h1 className="text-5 xlfont-boldtext-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive IT services to power your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-smrounded-lg p-6 border border-white/2 0">
              <Server className="w-12 h-12 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Infrastructure</h3>
              <p className="text-gray-300">
                Robust IT infrastructure solutions for scalable growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-smrounded-lg p-6 border border-white/2 0">
              <Cloud className="w-12 h-12 text-blue-4 0 0 mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Cloud Services</h3>
              <p className="text-gray-300">
                Secure and scalable cloud computing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  };

export default ItSolutionsPage;