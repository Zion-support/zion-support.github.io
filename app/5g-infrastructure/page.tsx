import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const FiveGInfrastructure = () => {
  return (
    <>
      <Helmet >
        <title>5 G Infrastructure - Zion Tech Group</>
        <meta name="description" content="Comprehensive 5 G infrastructure solutions." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6">
                5 G <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Infrastructure</>
              </>
              <p >
                Comprehensive 5 G infrastructure solutions for next-generation connectivity.
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

export default FiveGInfrastructure;