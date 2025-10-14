import React from "react";
import { Helmet } from "react-helmet-async";

const StructuredData: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Structured Data - Zion Tech Group</title>
        <meta name="description" content="Professional structured data services by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Structured Data
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional structured data services
            designed to help your business grow and succeed.
          </p>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide comprehensive structured data
                solutions tailored to your specific needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Professional service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Expert solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Quality results
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h3>
              <p className="text-gray-600 mb-6">
                Contact us today to learn more about our structured data services.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StructuredData;