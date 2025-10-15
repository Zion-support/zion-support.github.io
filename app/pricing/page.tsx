import React from "react";
import { Helmet } from "react-helmet-async";

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta
          name="description"
          content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Basic
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                $99/month
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Basic AI consultation</li>
                <li>Email support</li>
                <li>Monthly reports</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Professional
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                $299/month
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Advanced AI solutions</li>
                <li>Priority support</li>
                <li>Weekly reports</li>
                <li>Custom integrations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                Custom
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Full AI transformation</li>
                <li>24/7 support</li>
                <li>Real-time monitoring</li>
                <li>Dedicated team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
