import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
export default function CookiesPage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
<<<<<<< HEAD
      <Helmet>
<<<<<<< HEAD
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Information about our use of cookies." />
=======
      <Helmet >
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name = "description" content="Our cookie usage and preferences." />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-lg text-gray-300 mb-8">Information about our use of cookies.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Professional cookies services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cookies</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cookies services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>;
  );
}