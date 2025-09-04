import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AIServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Cutting-edge artificial intelligence solutions for your business
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with our advanced AI services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Build and deploy machine learning models that solve complex business problems
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600 mb-6">
                Process and understand human language with advanced NLP technologies
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600 mb-6">
                Extract insights from images and videos using computer vision AI
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServices;