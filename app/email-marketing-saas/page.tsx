import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const EmailMarketingSAAS = () => {
  return (
    <>
      <Helmet >
        <title>Email Marketing SAAS - Zion Tech Group</>
        <meta name="description" content="Advanced email marketing platform for businesses." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 >
                Email Marketing SAAS
              </>
              <p >
                Advanced email marketing platform for businesses.
              </>
              <Link to="/contact">
                <FuturisticButton size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              </>
            </>
          </>
        </>
      </>
    </>
  );
};

export default EmailMarketingSAAS;
