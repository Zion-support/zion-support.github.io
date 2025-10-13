import { Helmet } from "react-helmet-async";
import React from 'react';

const ConsultationPage = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI and IT solutions for your business transformation needs." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized advice on AI and IT solutions for your business.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Consultation services coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;
