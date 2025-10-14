import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CustomerRelationshipSAAS = () => {
  return (
    <>
      <Helmet >
        <title>Customer Relationship SAAS - Zion Tech Group</>
        <meta name="description" content="Advanced CRM solution for managing customer relationships and sales." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 >
                Customer Relationship SAAS
              </>
              <p >
                Advanced CRM solution for managing customer relationships and sales.
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

export default CustomerRelationshipSAAS;
