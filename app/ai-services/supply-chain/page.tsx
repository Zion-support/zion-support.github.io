import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SupplychainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
      <Helmet />
        <title>Supply Chain - Zion Tech Group</title>
        <meta name="description" content="Professional supply chain services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-16 text-center">
        <h1 className="text-4 xl font-boldtext-white mb-6"  >Supply Chain</h1>
        <p className="text-lgtext-gray-300 mb-8">Professional supply chain services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit">
          Contact Us
          <ArrowRight className="w-5h-5 ml-2" />
                </Link>
      </div>
    </div>
  );
}