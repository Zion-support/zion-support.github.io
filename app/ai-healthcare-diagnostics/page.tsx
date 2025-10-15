import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiHealthcareDiagnosticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Advanced AI-powered healthcare diagnostic solutions for medical professionals and healthcare institutions."
        />
        <meta 
          name="keywords" 
          content="AI healthcare, medical diagnostics, healthcare AI, medical technology, diagnostic solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Diagnostics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionize healthcare with our advanced AI-powered diagnostic solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Medical Imaging Analysis</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI algorithms for analyzing medical images with high accuracy.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Diagnostic Support</h3>
              <p className="text-gray-300 mb-4">
                AI-powered diagnostic assistance for healthcare professionals.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4">
                Predictive models for early disease detection and prevention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiHealthcareDiagnosticsPage;
