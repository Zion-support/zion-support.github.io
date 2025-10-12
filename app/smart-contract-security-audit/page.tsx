

import React from 'react';
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SmartcontractsecurityauditPage() {
  return (
<<<<<<< HEAD

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>Smart Contract Security Audit - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Smart Contract Security Audit</h1>
        <p className="text-lgtext-gray-300mb-8">Professional smart contract security audit services coming soon.</p>
          Contact Us
    
=======
    <>
      <Helmet>
        <title>Smartcontractsecurityaudit - Zion Tech Group</title>
        <meta name="description" content="Professional smartcontractsecurityaudit by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Smart Contract Security Audit</h1>
          <p className="text-lg text-gray-300 mb-8">Professional smart contract security audit services coming soon.</p>
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

