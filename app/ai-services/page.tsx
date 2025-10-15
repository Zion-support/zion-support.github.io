import React from "react";
import { Helmet } from "react-helmet-async";

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI services including machine learning, natural language processing, and computer vision solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Machine Learning
              </h3>
              <p className="text-gray-600">
                Build and deploy machine learning models that learn from your
                data and improve over time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Natural Language Processing
              </h3>
              <p className="text-gray-600">
                Process and understand human language with advanced NLP
                algorithms and models.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Computer Vision
              </h3>
              <p className="text-gray-600">
                Extract insights from images and videos using state-of-the-art
                computer vision technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
