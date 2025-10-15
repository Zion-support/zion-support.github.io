import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI automation solutions." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                Build intelligent systems that learn and adapt to your business processes.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Predictive Analytics</li>
                <li>• Pattern Recognition</li>
                <li>• Data Classification</li>
                <li>• Recommendation Systems</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Natural Language Processing</h3>
              <p className="text-gray-300 mb-4">
                Enable machines to understand and process human language effectively.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Text Analysis</li>
                <li>• Sentiment Analysis</li>
                <li>• Language Translation</li>
                <li>• Chatbot Development</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Computer Vision</h3>
              <p className="text-gray-300 mb-4">
                Extract meaningful information from images and videos using AI.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Image Recognition</li>
                <li>• Object Detection</li>
                <li>• Facial Recognition</li>
                <li>• Medical Imaging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;