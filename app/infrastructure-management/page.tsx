

import React from 'react';
<<<<<<< HEAD

import { ArrowRight } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function InfrastructureManagementPage() {
  return (
<<<<<<< HEAD

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>Infrastructure Management Services - Zion Tech Group</title>

          <h1 className="text-3 xl sm:text-4 xl md:text-5 xl font-boldtext-whitemb-4">Infrastructure Management
            Complete IT infrastructure setup, management, and optimization services.
    
              Get Started

            <Link to="/it-services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">All IT Services

          <h2 className="text-3 xl font-boldtext-gray-900mb-6">Coming Soon</h2>
            We're developing comprehensive infrastructure management services. Contact us to discuss your infrastructure needs.
    
          <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700transition-allduration-300">Contact Us
=======
    <>
      <Helmet>
        <title>Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Professional infrastructure management by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Infrastructure Management</h1>
          <p className="text-lg text-gray-300 mb-8">Professional infrastructure management coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  );

