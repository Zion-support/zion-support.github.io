<<<<<<< HEAD
'use client';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
import React from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGImplementationPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900  pt-20">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="5G Implementation services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="5g-implementation, AI solutions, IT services" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                5g Implementation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional 5g implementation services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive 5g implementation solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
=======
      <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 py-16  text-center">
        <h1 className="text-4-xl font-bold text-white  mb-6">5G Implementation</h1>
        <p className="text-lg text-gray-300  mb-8">Professional 5G implementation services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto  w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5  ml-2" />
                                </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      </div>
    </>
  );
};

export default FiveGImplementationPage;