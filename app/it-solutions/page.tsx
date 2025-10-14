import React, { Suspense } from 'react';
import { Helmet, Server, Cloud } from 'react-helmet-async';

const ItSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ITSolutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-9 via-purple-9 to-slate-9">
        <div className="container mx-auto px-4 py-1">
          <div className="text-center mb-12">
            <h-1 className="text-5-xlfont-bold text-white mb-6">
              ITSolutions
            </h-1>
            <p className="text-xltext-gray-3 mb-8">
              Comprehensive IT servicestopower yourdigitaltransformation
            </p>
          </div>
          <div className="gridmd:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/2 0">
              <ServerclassNam e="w-12 h-1 text-blue-4 mb-4" />
              <h-3 className="text-xlfont-semibold text-white mb-3">Infrastructure</h-3>
              <p className="text-gray-30">
                Robust IT infrastructuresolutionsfor scalable growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/2 0">
              <CloudclassNam e="w-12 h-1 text-blue-4 mb-4" />
              <h-3 className="text-xlfont-semibold text-white mb-3">Cloud Services</h-3>
              <p className="text-gray-30">
                Secureandscalable cloudcomputingsolutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  };

exportdefault It Solutions Page;