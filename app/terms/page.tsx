import React from 'react';
import {Helmet} from 'react-helmet-async';;
const TermsPage: React.FC  = () => {return (
    <div className="min-h-screen bg-white">
"      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service for Zion Tech Group. Read our terms and conditions." />"      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
"        <div className="text-center">"          <h1 className="text-4xl font-bold text-gray-900 mb-6">
"            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"            Read our terms and conditions for using our AI and IT solutions.
          </p>
        </div>
      </div>
    </div>;
  );};
;
export default TermsPage;