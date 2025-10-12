import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD


=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AnalyticsPage() {
=======
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function AnalyticsPage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  return (
    <div>Content</div>
  );
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">Professional analytics services coming soon.</p>
          <Link
=======
      <Helmet >
        <title> - Zion Tech Group</title>
        <meta name = "description" content="Professional  by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
          <p className="text-lg text-gray-300 mb-8">Professional  coming soon.</p>
          <Link >
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
        <h1 className="text-4 xl font-bold text-white mb-6"  >Analytics</h1>
        <p className="text-lg text-gray-300 mb-8">Professional analytics services coming soon.</p>;
        <Link;</Link></Link>
          to = "/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit"
        ></Link>;
          Contact Us;
          <ArrowRight className = "w-5h-5ml-2" /></ArrowRight>
        </Link>
      </div>
    </div>;
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
