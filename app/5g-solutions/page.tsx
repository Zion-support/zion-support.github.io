import React from "react";
import { Helmet } from "react-helmet-async";

const FiveGSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Leverage the power of 5G technology with our comprehensive 5G solutions and services."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of 5G technology for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5G Network Design
              </h3>
              <p className="text-gray-600">
                Design and implement 5G networks optimized for your specific
                business requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5G Applications
              </h3>
              <p className="text-gray-600">
                Develop applications that leverage 5G's high speed and low
                latency capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
