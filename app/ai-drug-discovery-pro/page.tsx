<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AidrugdiscoveryproPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AidrugdiscoveryproPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900 pt-20">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      <Helmet>
        <title>Ai Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai drug discovery pro services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Ai Drug Discovery Pro</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai drug discovery pro services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
=======
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8-py-16 text-center">
        <h1 className="text-4 xl font-boldtext-white mb-6"  >Ai Drug Discovery Pro</h1>
        <p className="text-lgtext-gray-300 mb-8">Professional ai drug discovery pro services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit">
          Contact Us
          <ArrowRight className="w-5-h-5 ml-2" />
                </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      </div>
    </div>
  );
}