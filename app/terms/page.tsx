import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group terms of service and legal information." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-4xl">
            <p className="text-gray-300 text-lg mb-6">
              This terms of service page is under construction. Please check back later for our complete terms of service.
            </p>
            <p className="text-gray-300">
              For any legal questions, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
<<<<<<< HEAD
export default TermsPage;
=======

export default TermsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
