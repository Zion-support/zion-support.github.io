import React from \'react\';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function IntelligentemailinfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20" />
      <Helmet />
        <title>Intelligent Email Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional intelligent email infrastructure services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-16text-center" />
        <h1 className="text-4 xl font-boldtext-whitemb-6"  >Intelligent Email Infrastructure</h1>
        <p className="text-lgtext-gray-300mb-8">Professional intelligent email infrastructure services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-autow-fit" />
          Contact Us
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
      </div>
    </div>
  );
}