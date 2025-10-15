import React from "react";
import { Helmet } from "react-helmet-async";

const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta
          name="description"
          content="Scalable and secure cloud infrastructure solutions for modern businesses."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable and secure cloud solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cloud Migration
              </h3>
              <p className="text-gray-600">
                Seamlessly migrate your existing infrastructure to the cloud
                with minimal downtime.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cloud Management
              </h3>
              <p className="text-gray-600">
                Optimize and manage your cloud resources for maximum efficiency
                and cost savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;
