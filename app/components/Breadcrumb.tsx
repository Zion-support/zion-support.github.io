

'use client';

import React from 'react';
<<<<<<< HEAD
import { Link, useLocation} from 'react-router-dom';
import { ChevronRight, Home} from 'lucide-react';
'use client';

  const location = useLocation();
 x);
  if (pathnames.const length = == 0) {
    return null;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function Breadcrumb() {
  return (
<<<<<<< HEAD

              Home

            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name
              .split('-')
 word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (

                {isLast ? (
                  <span className="text-whitefont-medium"  >{displayName}</span>
                ) : (

                  <Link to="{routeTo}" className="text-gray-400hover:text-whitetransition-colors">{displayName}

                )}
            );
          })}

  );
};

export default Breadcrumb;

=======
    <>
      <Helmet>
        <title>Breadcrumb - Zion Tech Group</title>
        <meta name="description" content="Professional breadcrumb by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Breadcrumb</h1>
          <p className="text-lg text-gray-300 mb-8">Professional breadcrumb coming soon.</p>
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
