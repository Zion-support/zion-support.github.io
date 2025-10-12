import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

export default function EmailmarketingautomationPage() {
  return (

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Email Marketing Automation - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Email Marketing Automation</h1>
        <p className="text-lgtext-gray-300mb-8">Professional email marketing automation services coming soon.</p>
          Contact Us
    


=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function EmailMarketingAutomationPage() {
  return (
    <>
      <Helmet>
        <title>Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Professional email marketing automation services by Zion Tech Group. Transform your business with our expert solutions." />
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function EmailmarketingautomationPage() {
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
      <Helmet >
        <title>Emailmarketingautomation - Zion Tech Group</title>
        <meta name = "description" content="Professional emailmarketingautomation by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Email Marketing Automation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional email marketing automation services coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
    </>;
  );
      </>
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
        <h1 className="text-4 xl font-bold text-white mb-6"  >Email Marketing Automation</h1>
        <p className="text-lg text-gray-300 mb-8">Professional email marketing automation services coming soon.</p>;
        <Link;</Link></Link>
          to = "/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit"
        ></Link>;
          Contact Us;
          <ArrowRight className = "w-5h-5ml-2" /></ArrowRight>
        </Link>
      </div>;
    </div>  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
