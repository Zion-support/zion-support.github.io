import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiHealthcareDiagnosticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered healthcare diagnostics solution for accurate medical analysis and diagnosis." />
        <meta name="keywords" content="healthcare, AI diagnostics, medical analysis, healthcare technology" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Healthcare Diagnostics
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered healthcare diagnostics solution for accurate medical analysis and diagnosis.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHealthcareDiagnosticsPage;