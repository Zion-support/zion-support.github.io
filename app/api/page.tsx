<<<<<<< HEAD
import React from \'react\';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79

export default function ApiPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20" />
      <Helmet />
        <title>Api - Zion Tech Group</title>
        <meta name="description" content="Professional api services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-16text-center" />
        <h1 className="text-4 xl font-boldtext-whitemb-6"  >Api</h1>
        <p className="text-lgtext-gray-300mb-8">Professional api services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-autow-fit" />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>API - Zion Tech Group</title>
        <meta name="description" content="Professional API services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">API</h1>
        <p className="text-lg text-gray-300 mb-8">Professional API services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
          Contact Us
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
      </div>
    </div>
  );
}