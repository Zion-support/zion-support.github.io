import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
  return (

            <span className="text-4xl">404</span>
        <h1 className="text-2 xl font-bold text-whitemb-4">Page Not Found
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
    
            Go Home
          
 window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lgtransition-colors"
            Go Back
          
 window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lgtransition-colors"
            Refresh
    
  )
};

=======
export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found - Zion Tech Group</title>
        <meta name="description" content="Professional not found by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Not Found</h1>
          <p className="text-lg text-gray-300 mb-8">Professional not found coming soon.</p>
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
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
