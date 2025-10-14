import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIPlatform = () => {
  return (
    <>
      <Helmet >
        <title>Zion AI Platform - Zion Tech Group</>
        <meta name="description" content="Comprehensive AI platform powered by Zion technology." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6">
                Zion <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Platform</>
              </>
              <p >
                Comprehensive AI platform powered by Zion technology for enterprise solutions.
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

export default ZionAIPlatform;