import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIFormBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Form Builder - Zion Tech Group</title>
        <meta name="description" content="Create intelligent forms with AI-powered form builder. Smart validation, auto-completion, and dynamic form generation." />
        <meta name="keywords" content="AI form builder, intelligent forms, smart validation, form automation, dynamic forms" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Form Builder</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create intelligent forms with AI-powered form builder. Smart validation, auto-completion, and dynamic form generation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Validation</h3>
              <p className="text-gray-600">
                AI-powered form validation that learns from user input patterns and provides intelligent error detection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto-completion</h3>
              <p className="text-gray-600">
                Intelligent auto-completion that suggests relevant options based on context and user history.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dynamic Forms</h3>
              <p className="text-gray-600">
                Forms that adapt and change based on user responses and requirements in real-time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-language Support</h3>
              <p className="text-gray-600">
                Create forms in multiple languages with automatic translation and localization features.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-600">
                Track form performance, completion rates, and user behavior with detailed analytics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration Ready</h3>
              <p className="text-gray-600">
                Seamlessly integrate with your existing systems, databases, and third-party services.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Form Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Forms</h3>
                <p className="text-gray-600">Create intelligent contact forms with smart validation and lead qualification.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Survey Forms</h3>
                <p className="text-gray-600">Build dynamic surveys that adapt based on responses and user preferences.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Registration Forms</h3>
                <p className="text-gray-600">Create user registration forms with intelligent validation and data verification.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Feedback Forms</h3>
                <p className="text-gray-600">Design feedback forms that capture valuable insights and user sentiment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFormBuilderPage;