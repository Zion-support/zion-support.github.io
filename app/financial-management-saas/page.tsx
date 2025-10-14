import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const FinancialManagementSAAS = () => {
  return (
    <>
      <Helmet >
        <title>Financial Management SAAS - Zion Tech Group</>
        <meta name="description" content="Professional financial management and accounting solution." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 >
                Financial Management SAAS
              </>
              <p >
                Professional financial management and accounting solution.
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

export default FinancialManagementSAAS;
