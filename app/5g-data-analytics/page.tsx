import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FiveGDataAnalyticsPage() {
  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">5G Data Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">Advanced 5G data analytics solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
=======
        <meta name="description" content="Professional 5g data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">5G Data Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">Professional 5g data analytics services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
          </Link>
=======
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">5G Data Analytics</h1>
            <p className="text-lg text-gray-300 mb-8">Advanced data analytics solutions powered by 5G technology for real-time insights and business intelligence.</p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
        </div>
      </div>
    </>
  );
}