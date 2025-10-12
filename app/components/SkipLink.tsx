<<<<<<< HEAD
<<<<<<< HEAD


=======
import React from 'react';
export default SkipLink;
>>>>>>> origin/main
'use client';

const SkipLink: React.FC = () => {
  return (
<<<<<<< HEAD

      Skip to main content
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SkipLink() {
  return (
    <>
      <Helmet>
        <title>Skip Link - Zion Tech Group</title>
        <meta name="description" content="Professional skip link by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Skip Link</h1>
          <p className="text-lg text-gray-300 mb-8">Professional skip link coming soon.</p>
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
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  );
}
=======
    <a;
      href="#main-content"
      className="sr-on l yfocus:not-sr-only focus: absolute,
  focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
    ></a>
      Skip to main content;
    </a>
  );
};
>>>>>>> origin/main
