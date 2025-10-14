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
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl font-boldtext-whitemb-8">Terms of Service</h1>
            <div className="text-gray-400"></div>
              <p>Terms content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TermsPage;