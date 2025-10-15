import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIImageRecognitionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Image Recognition Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive image recognition and analysis platform with object detection, facial recognition, and content moderation." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Image Recognition Suite</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced image recognition and analysis platform with object detection, facial recognition, and content moderation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Object Detection</li>
                <li>• Facial Recognition</li>
                <li>• Content Moderation</li>
                <li>• OCR Text Extraction</li>
                <li>• Image Classification</li>
                <li>• Quality Assessment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$149 - $1,499/month</div>
              <p className="text-gray-600">Flexible pricing based on usage and features</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageRecognitionPage;