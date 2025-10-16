import React from "react";
import { Helmet } from "react-helmet-async";

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our successful AI and IT implementation case studies and client success stories."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                E-commerce AI Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Helped a major e-commerce platform increase conversion rates by
                40% using AI-powered recommendation systems.
              </p>
              <div className="text-sm text-blue-600">Read more →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Healthcare Data Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Implemented advanced analytics solutions for a healthcare
                provider, reducing operational costs by 25%.
              </p>
              <div className="text-sm text-blue-600">Read more →</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
