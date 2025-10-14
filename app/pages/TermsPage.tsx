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
      <div className=" min-h-scre e n bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className=" contain e r mx-autopx-4py-16">
          <div className=" text-center">
            <h1 className=" tex t -4xl font-boldtext-whitemb-8">Terms of Service</h1>
            <p className=" text- x ltext-gray-300mb-8">
              Terms of service and usage policies
            </p>
            <div className=" text-gray-400">
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