import React from 'react';
<<<<<<< HEAD
'use client';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Cookies services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="cookies, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />Cookies
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional cookies services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive cookies solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default CookiesPage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie policy for Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-lg text-gray-300 mb-8">Our cookie policy and usage information.</p>
          
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
>>>>>>> origin/main
