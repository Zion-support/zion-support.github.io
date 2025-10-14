import React from 'react';
import { Helmet } from 'react-helmet-async';
import ResponsiveContainer from '../components/ResponsiveContainer';

const FiveGIoTSolutions = () => {
  return (
    <>
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G IoT solutions for connected devices and smart infrastructure." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IoT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced 5G IoT solutions for connected devices and smart infrastructure.
              </p>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default FiveGIoTSolutions;