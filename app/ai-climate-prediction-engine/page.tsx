import React from 'react';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AIClimatePredictionEngine() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4 xl font-boldtext-white mb-6"  >Ai Climate Prediction Engine</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai climate prediction engine services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
      </div>
    </div>
=======
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group</title>
        <meta name="description" content="Professional AI climate prediction engine services by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">AI Climate Prediction Engine</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI climate prediction engine services coming soon.</p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
  );
}