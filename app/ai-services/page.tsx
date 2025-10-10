'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, CheckCircle } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI services and solutions." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">AI Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence solutions to transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-cyan-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Machine Learning</h3>
                <p className="text-gray-300 mb-6">
                  Advanced machine learning models for predictive analytics and automation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Automated Decision Making
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom Model Training
                  </li>
                </ul>
                <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Learn More →
                </a>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-purple-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered text analysis, sentiment analysis, and language understanding.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Sentiment Analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Text Classification
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Language Translation
                  </li>
                </ul>
                <a href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  Learn More →
                </a>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-green-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Computer Vision</h3>
                <p className="text-gray-300 mb-6">
                  Image and video analysis for object detection, recognition, and processing.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Object Detection
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Image Classification
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Video Analysis
                  </li>
                </ul>
                <a href="/contact" className="text-green-400 hover:text-green-300 transition-colors font-medium">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiServicesPage;
