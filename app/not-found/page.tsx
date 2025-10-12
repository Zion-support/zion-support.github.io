import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <div className="m i"n-h-screenbg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="t e"xt-center">
          <h1 className="t e"xt-4xlfont-bold text-white mb-6">Page Not Found</h1>
          <p className="t e"xt-lgtext-gray-300 mb-8">The page you are looking for does not exist.</p>
          <Link 
            to="/contact" className="i n"line-flexitems-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
            <ArrowRight className="m l"-2h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}