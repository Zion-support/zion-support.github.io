import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIVideoAnalyzerProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Analyzer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered video analysis with object detection, sentiment analysis, and content insights for video content creators." />
        <meta name="keywords" content="AI video analysis, video insights, object detection, sentiment analysis, video content" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-video-analyzer-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Video Analyzer <span className="text-purple-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered video analysis with object detection, sentiment analysis, and content insights for video content creators.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Object Detection & Recognition</h3>
                <p className="text-gray-300 mb-4">
                  Identify and track objects, people, and scenes in your videos with high accuracy.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Real-time object detection</li>
                  <li>• Face recognition and tracking</li>
                  <li>• Scene classification</li>
                  <li>• Activity recognition</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Analyze video content for sentiment, engagement, and quality metrics.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Sentiment analysis</li>
                  <li>• Engagement prediction</li>
                  <li>• Content quality scoring</li>
                  <li>• Brand safety monitoring</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Smart Tagging</h4>
                  <p className="text-gray-300">Automatically tag and categorize video content</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Analytics Dashboard</h4>
                  <p className="text-gray-300">Comprehensive insights and reporting</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Search & Discovery</h4>
                  <p className="text-gray-300">Find content by visual and audio cues</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Video Analyzer Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVideoAnalyzerProPage;