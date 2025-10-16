import React from "react";
import { Helmet } from "react-helmet-async";

const AISolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI solutions tailored to your business needs and industry requirements."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions for your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom AI Development
              </h3>
              <p className="text-gray-600">
                Bespoke AI solutions designed specifically for your business
                requirements and industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate AI capabilities into your existing systems
                and workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;
