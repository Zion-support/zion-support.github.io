import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const InventoryManagementSAAS = () => {
  return (
    <>
      <Helmet >
        <title>Inventory Management SAAS - Zion Tech Group</>
        <meta name="description" content="Complete inventory management solution for businesses of all sizes." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 >
                Inventory Management SAAS
              </>
              <p >
                Complete inventory management solution for businesses of all sizes.
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

export default InventoryManagementSAAS;
