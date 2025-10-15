import React from 'react';
import SEOHead from '../components/SEOHead';

const AiHealthcareDiagnosticsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Healthcare Diagnostics - Zion Tech Group"
        description="Advanced AI-powered healthcare diagnostics and medical imaging solutions."
        keywords="AI healthcare, medical diagnostics, healthcare AI, medical imaging, AI diagnostics"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Healthcare Diagnostics</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing healthcare with AI-powered diagnostic tools and medical imaging solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Medical Imaging AI</h3>
              <p className="text-gray-300">Advanced AI analysis of X-rays, MRIs, and CT scans for accurate diagnosis.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Symptom Analysis</h3>
              <p className="text-gray-300">Intelligent symptom assessment and preliminary diagnosis recommendations.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Treatment Planning</h3>
              <p className="text-gray-300">AI-assisted treatment planning and personalized medicine recommendations.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiHealthcareDiagnosticsPage;