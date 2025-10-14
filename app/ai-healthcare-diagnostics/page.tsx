import React from "react";
import { Helmet } from "react-helmet-async";

const AiHealthcareDiagnosticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered healthcare diagnostics solutions by Zion Tech Group." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, healthcare AI, medical imaging" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Diagnostics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionize healthcare with our AI-powered diagnostic solutions that improve accuracy and speed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Medical Imaging AI</h3>
            <p className="text-gray-300">
              Advanced AI algorithms for analyzing medical images with unprecedented accuracy.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Predictive Diagnostics</h3>
            <p className="text-gray-300">
              Early disease detection and risk assessment using machine learning models.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Clinical Decision Support</h3>
            <p className="text-gray-300">
              AI-powered tools to assist healthcare professionals in making informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiHealthcareDiagnosticsPage;