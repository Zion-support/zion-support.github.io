import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiHealthcarePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Healthcare - Medical AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with AI-powered solutions. Medical diagnostics, patient monitoring, and intelligent healthcare systems." />
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Healthcare</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform healthcare with AI-powered medical solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiHealthcarePage;