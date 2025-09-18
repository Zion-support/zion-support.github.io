import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIMatcher = () => {
  return (
    <>
      <Helmet>
        <title>AI Matcher - Zion Tech Group</title>
        <meta name="description" content="Find the perfect AI solution for your business needs with our intelligent matching system."/>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Matcher</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect AI solution for your business needs with our intelligent matching system.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                Our AI matching platform is currently under development. Soon you'll be able to find the perfect AI solution for your specific business needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Analyze your business requirements and goals
                  </p>
                </div>
                
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Matching</h3>
                    Get personalized AI solution recommendations
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ROI Insights</h3>
                    Understand potential impact and returns
              </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default AIMatcher;
