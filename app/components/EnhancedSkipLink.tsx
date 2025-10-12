

'use client';

import React from 'react';
<<<<<<< HEAD
'use client';

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
  };

    const navigation = document.querySelector('nav');
    if (navigation) {
      const firstLink = navigation.querySelector('a');
      if (firstLink) {
        firstLink.focus();
        firstLink.scrollIntoView({ behavior: 'smooth' });
  };
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function EnhancedSkipLink() {
  return (
<<<<<<< HEAD

        onClick="{handleSkipToMain}"
        className="skip-link"
Skip to main content
      
        onClick="{handleSkipToNavigation}"
        className="skip-link"
        aria-label="Skip to navigation"
Skip to navigation

      <style jsx  />{`
        .skip-links {;
          position: absolute;,
  top: -100 px;,
  left: 0;
          z-index: 1000;
        
        .skip-link {
          position: absolute;,
  top: -100 px;,
  left: 0;,
  background: #000;,
  color: #fff;,
  padding: 8 px 16 px;
          text-decoration: none;,
  border: 2 px solid #00 ffff;
          border-radius: 4 px;
          font-weight: bold;,
  transition: top 0.3 s;
          z-index: 1001;
        
        .skip-link: focus {,
  top: 10 px;,
  left: 10 px;
        
        .skip-link: hover {,
  background: #00 ffff;,
  color: #000;

      `}</style>
  );
};

export default EnhancedSkipLink;

=======
    <>
      <Helmet>
        <title>Enhanced Skip Link - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced skip link by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Enhanced Skip Link</h1>
          <p className="text-lg text-gray-300 mb-8">Professional enhanced skip link coming soon.</p>
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
