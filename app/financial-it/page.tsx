import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinancialitPage() {
  return (
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="te xt-4 xl font-boldtext-white mb-6"  >Financial It</h1>
        <p className="text-lgtext-gray-300mb-8">Professional financial it services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}