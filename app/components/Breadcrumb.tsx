<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
'use client';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
    return null;
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-9874

export default function Breadcrumb() {
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Breadcrumb - Zion Tech Group</title>
        <meta name="description" content="Professional breadcrumb solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Breadcrumb</h1>
          <p className="text-lg text-gray-300 mb-8">Professional breadcrumb solutions coming soon.</p>
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
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
      <Link to="/" className="flex items-center hover:text-white transition-colors">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = name
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-white font-medium">{displayName}</span>
            ) : (
              <Link to={routeTo} className="text-gray-400 hover:text-white transition-colors">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9874
