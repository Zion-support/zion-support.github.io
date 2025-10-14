import React from 'react';
import { Helmet } from 'react-helmet-async';


const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies at Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how we've helped businesses transform with our AI and IT solutions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  AI Implementation
                </h3>
                <p className="text-blue-700">
                  How we helped a Fortune 500 company implement AI solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Cloud Migration
                </h3>
                <p className="text-green-700">
                  Successful cloud infrastructure migration for a growing startup.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  Cybersecurity
                </h3>
                <p className="text-purple-700">
                  Comprehensive security overhaul for a financial services company.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View All Case Studies

              </button>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default CaseStudiesPage;

