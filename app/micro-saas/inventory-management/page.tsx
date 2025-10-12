import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function InventorymanagementPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>Inventory Management - Zion Tech Group</title>
        <meta name="description" content="Professional inventory management services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-16text-center">
        </div>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Inventory Management</h1>
        <p className="text-lgtext-gray-300mb-8">Professional inventory management services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-autow-fit" />
          Contact Us
    <>
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
      </div>
  );
}
    </>