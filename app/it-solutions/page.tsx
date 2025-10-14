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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-auto px-4 py-1 6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-3 0 0 mb-8">
              Comprehensive IT services to power your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/1 0 backdrop-blur-sm rounded-lg p-6 border border-white/2 0">
              <Server className="w-1 2 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure</h3>
              <p className="text-gray-3 0 0">
                Robust IT infrastructure solutions for scalable growth.
              </p>
            </div>
            <div className="bg-white/1 0 backdrop-blur-sm rounded-lg p-6 border border-white/2 0">
              <Cloud className="w-1 2 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
              <p className="text-gray-3 0 0">
                Secure and scalable cloud computing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItSolutionsPage;