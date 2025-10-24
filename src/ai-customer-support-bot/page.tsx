'use client';
import React from 'react';
import Head from 'next/head';

const AiCustomerSupportBotPage = () => {
  return (
    <>
      <Head>
        <title>AiCustomerSupportBot | Zion Tech Group</title>
        <meta name="description" content="Professional AiCustomerSupportBot services and solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AiCustomerSupportBot
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional AiCustomerSupportBot services and solutions for your business.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Our AiCustomerSupportBot Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive AiCustomerSupportBot solutions tailored to your business needs.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Service 1</h3>
                  <p className="text-gray-300">Description of the first service offering.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Service 2</h3>
                  <p className="text-gray-300">Description of the second service offering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCustomerSupportBotPage;
