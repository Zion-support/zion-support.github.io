import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-whitemb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-rfrom-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced AI & IT Solutions
              </span>
            </h1>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl mx-auto">
              Leading technology company providing cutting-edge artificial intelligence, cloud infrastructure, 
              cybersecurity, and custom software development services to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center">
              <button className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8py-3rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8py-3rounded-lg font-semibold hover:bg-cyan-400 hover:text-whitetransition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;