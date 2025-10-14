'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

const CriticalResourcePreloader = () => {
  return (
    <>
      <Helmet>
        <title>Critical Resource Preloader - Zion Tech Group</title>
        <meta name="description" content="Critical Resource Preloader services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Critical Resource Preloader
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional critical resource preloader services designed to help your business grow and succeed.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Resource Optimization
              </h3>
              <p className="text-blue-700">
                Optimize critical resources for faster loading and better performance.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Performance Enhancement
              </h3>
              <p className="text-green-700">
                Enhance your application's performance with intelligent resource preloading.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Smart Caching
              </h3>
              <p className="text-purple-700">
                Implement smart caching strategies for optimal resource management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CriticalResourcePreloader;