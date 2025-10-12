<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HranalyticsPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Hr Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional hr analytics services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Hr Analytics</h1>
        <p className="text-lg text-gray-300 mb-8">Professional hr analytics services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
=======
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>Hr Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional hr analytics services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-16text-center">
        </div>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Hr Analytics</h1>
        <p className="text-lgtext-gray-300mb-8">Professional hr analytics services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-autow-fit" />
          Contact Us
    <>
          <ArrowRight className="w-5h-5ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        </Link>
      </div>
  );
}
    </>