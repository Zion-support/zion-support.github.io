import React from "react";
import { Helmet } from "react-helmet-async";

const PartnershipsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partnerships - Zion Tech Group</title>
        <meta
          name="description"
          content="Partner with Zion Tech Group to expand your business and reach new markets."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Partnerships
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technology Partners
              </h3>
              <p className="text-gray-600">
                Join our technology partner program and access our cutting-edge
                solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reseller Program
              </h3>
              <p className="text-gray-600">
                Become a reseller and offer our solutions to your clients with
                attractive margins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipsPage;
