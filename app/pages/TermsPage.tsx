import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service and usage policies" />
        <meta name="keywords" content="terms of service, terms, legal" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00via-purple-9 0 0to-slate-9 0 0">
        <div className="container mx-autopx-4py-1 6">
          <div className="text-center">
            <h1 className="text-4xl font-boldtext-white mb-8">Terms of Service</h1>
            <p className="text-xl text-gray-30 0 mb-8">
              Terms of service and usage policies
            </p>
            <div className="text-gray-4 0 0">
              <p>Terms content coming soon...</p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;