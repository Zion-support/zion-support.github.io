import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function 5GDataAnalyticsZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4 xl font-boldtext-whitemb-6">Cloud Services</h1>
          <p className="text-lgtext-gray-300mb-8">Professional cloud services services coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
=======
export default function CloudServicesPage() {
  return (
    <>
      <title>Cloud Services - Zion Tech Group</title>
      <h1 className="text-4xl font-bold text-white mb-6">Cloud Services</h1>
      <p className="text-lg text-gray-300 mb-8">Professional cloud services coming soon.</p>
      <a href="/contact" className="text-blue-400 hover:text-blue-300">
        Contact Us
      </a>
    </>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f21c
