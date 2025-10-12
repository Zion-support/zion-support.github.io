import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Privacy() {
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PrivacyPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  return (
    
        <title>Privacy - Zion Tech Group</title>
<<<<<<< HEAD
=======
export default PrivacyPage;
'use client';

const PrivacyPage: React.FC = () => {
  return (
<<<<<<< HEAD

        <>
      <title>Privacy - Zion Tech Group</title>
>>>>>>> origin/main

            <h1 className="text-4xl font-bold text-white mb-6">Privacy</h1>
            <p className="text-lg text-gray-300 mb-8">Professional privacy services coming soon.</p>
            
              Contact Us

      </>
  );
}

=======
<<<<<<< HEAD
        <meta name="description" content="Professional privacy by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Privacy</h1>
          <p className="text-lg text-gray-300 mb-8">Professional privacy coming soon.</p>
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
=======
    <></>
      <Helmet></Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Privacy services by Zion Tech Group. Professional AI and IT solutions." /></meta>
        <meta name="keywords" content="privacy, AI solutions, IT services" /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2" /></h1>
              <span className="w-5h-5ml-2" />Privacy;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional privacy services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive privacy solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
      </div>
    </>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
