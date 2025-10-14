
import React from 'react';
import { Helmet } from 'react-helmet-async';
const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for your AI and IT solutions. Our expert team is here to help you succeed." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1>
            Support Center
          </h1>
          <p>
            We're here to help you succeed with our AI and IT solutions.
          </p>
        </div>
      </div>
    </>
  );
};
export default SupportPage;