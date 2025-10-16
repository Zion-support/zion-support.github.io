import React from "react";
import { Helmet } from "react-helmet-async";

const APIDocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive API documentation for integrating with our AI and IT solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate with our solutions using our comprehensive APIs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                REST API
              </h3>
              <p className="text-gray-600">
                Access our services through our RESTful API endpoints with
                comprehensive documentation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SDKs</h3>
              <p className="text-gray-600">
                Use our software development kits for popular programming
                languages to integrate quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIDocsPage;
