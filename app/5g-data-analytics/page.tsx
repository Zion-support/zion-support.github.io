import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FiveGDataAnalyticsPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
=======
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">5G Data Analytics</h1>
        <p className="text-lg text-gray-300 mb-8">Professional 5G data analytics services coming soon.</p>
=======
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16text-center">
        </div>
        <h1 className="text-4xl font-bold text-whitemb-6">5G Data Analytics</h1>
        <p className="text-lg text-gray-300mb-8">Professional 5G data analytics services coming soon.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
<<<<<<< HEAD
          <ArrowRight className="w-5 h-5 ml-2" />
=======
    <>
          <ArrowRight className="w-5 h-5ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        </Link>
      </div>
  );
}
    </>
