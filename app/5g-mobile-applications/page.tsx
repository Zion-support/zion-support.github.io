import React from 'react';
import { Helmet } from 'react-helmet-async';
import ResponsiveContainer from '../components/ResponsiveContainer';

const FiveGMobileApplications = () => {
  return (
    <>
      <Helmet>
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta name="description" content="Innovative 5G mobile applications for next-generation connectivity." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mobile Applications</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Innovative 5G mobile applications for next-generation connectivity.
              </p>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default FiveGMobileApplications;