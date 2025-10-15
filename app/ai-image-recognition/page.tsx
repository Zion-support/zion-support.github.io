import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIImageRecognitionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Image Recognition - Zion Tech Group</title>
        <meta name="description" content="Advanced AI image recognition solutions for object detection, classification, and visual analysis." />
        <meta name="keywords" content="AI image recognition, computer vision, object detection, image classification, visual AI" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Image Recognition</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI image recognition solutions for object detection, classification, and visual analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Object Detection</h3>
              <p className="text-gray-600">
                Identify and locate objects within images with high accuracy and real-time processing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Classification</h3>
              <p className="text-gray-600">
                Automatically categorize images into predefined classes with machine learning models.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Facial Recognition</h3>
              <p className="text-gray-600">
                Detect and recognize faces in images with advanced facial recognition algorithms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Text Recognition</h3>
              <p className="text-gray-600">
                Extract text from images using optical character recognition (OCR) technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scene Understanding</h3>
              <p className="text-gray-600">
                Analyze and understand complex scenes with contextual awareness and reasoning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Models</h3>
              <p className="text-gray-600">
                Train custom models for specific use cases and industry requirements.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Imaging</h3>
                <p className="text-gray-600">Analyze medical images for diagnosis and treatment planning.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Control</h3>
                <p className="text-gray-600">Automate quality inspection in manufacturing processes.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Surveillance</h3>
                <p className="text-gray-600">Monitor and analyze security footage for threat detection.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Retail Analytics</h3>
                <p className="text-gray-600">Analyze customer behavior and product placement in retail environments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageRecognitionPage;