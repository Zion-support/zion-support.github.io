import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud } from 'lucide-react';

const ItSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="containermx-auto px-4py-16"></div>
          <div className="text-centermb-16"></div>
            <h1 className="text-5xlfont-bold text-whitemb-6">
              IT Solutions
            </h1>
            <p className="text-xltext-gray-300mb-8">
              Comprehensive IT services to power your digital transformation
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/20"></div>
              <Server className="w-12 h-12text-blue-400mb-4" />
              <h3 className="text-xlfont-semibold text-whitemb-3">Infrastructure</h3>
              <p className="text-gray-300">
                Robust IT infrastructure solutions for scalable growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-smrounded-lgp-6borderborder-white/20"></div>
              <Cloud className="w-12 h-12text-blue-400mb-4" />
              <h3 className="text-xlfont-semibold text-whitemb-3">Cloud Services</h3>
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