import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FiveGInfrastructure = () => {
  return (
    <>
      <Helmet>
        <title>5G Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G infrastructure solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive 5G infrastructure solutions for next-generation connectivity.
              </p>
              <Link to="/contact">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGInfrastructure;