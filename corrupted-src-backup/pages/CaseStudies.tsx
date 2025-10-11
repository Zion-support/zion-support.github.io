import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta
          name="description"
          content="Real-world case studies showcasing our AI solutions and their impact."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world case studies showcasing our AI solutions and their transformative impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Fortune 500 AI Transformation</h3>
              <p className="text-gray-600 mb-4">
                How we helped a Fortune 500 company achieve 95% efficiency gains with our AI
                platform.
              </p>
              <div className="text-sm text-blue-600 font-medium">Read Full Case Study →</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Quantum AI Security Implementation</h3>
              <p className="text-gray-600 mb-4">
                Implementing quantum AI security framework resulting in 99.9% threat prevention.
              </p>
              <div className="text-sm text-blue-600 font-medium">Read Full Case Study →</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">RevOps Automation Success</h3>
              <p className="text-gray-600 mb-4">
                Achieving 3.2x pipeline velocity and 127% ROI with our RevOps automation platform.
              </p>
              <div className="text-sm text-blue-600 font-medium">Read Full Case Study →</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
