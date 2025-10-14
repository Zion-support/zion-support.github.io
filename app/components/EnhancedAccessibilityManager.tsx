'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

const EnhancedAccessibilityManager = () => {
  return (
    <>
      <Helmet>
        <title>Enhanced Accessibility Manager - Zion Tech Group</title>
        <meta name="description" content="Enhanced Accessibility Manager services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Enhanced Accessibility Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional enhanced accessibility manager solutions tailored to your business needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge accessibility management solutions.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Comprehensive Management
              </h3>
              <p className="text-green-700">
                Manage all aspects of accessibility with our comprehensive management tools.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Real-time Monitoring
              </h3>
              <p className="text-purple-700">
                Monitor accessibility compliance in real-time with our advanced tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedAccessibilityManager;