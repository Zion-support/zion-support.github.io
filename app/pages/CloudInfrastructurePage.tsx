import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CloudIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions for modern businesses with high availability and performance." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Infrastructure
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Scalable cloud solutions for modern businesses with high availability and performance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Coming Soon</h2>
              <p className="text-gray-300 mb-8">
                We're working on comprehensive cloud infrastructure solutions. Check back soon!
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                Learn More
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;