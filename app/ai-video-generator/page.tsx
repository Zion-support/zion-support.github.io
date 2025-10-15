import React from 'react';
import SEOHead from '../components/SEOHead';

const AIVideoGeneratorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Video Generator - Zion Tech Group"
        description="Create professional videos with AI-powered video generation, editing, and production tools for marketing, training, and content creation."
        keywords="AI video generator, video creation, automated video production, marketing videos, content creation, video editing AI"
        canonicalUrl="https://ziontechgroup.com/ai-video-generator"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Video Generator</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create professional videos effortlessly with our AI-powered video generation platform featuring automated editing, voice synthesis, and smart templates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Script Generation</h3>
                    <p className="text-gray-600">Generate engaging video scripts based on your topic, audience, and objectives.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Voice Synthesis</h3>
                    <p className="text-gray-600">Convert text to natural-sounding speech in multiple languages and voices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Templates</h3>
                    <p className="text-gray-600">Choose from hundreds of professional templates for different industries and use cases.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Automated Editing</h3>
                    <p className="text-gray-600">AI automatically edits and optimizes your videos for maximum engagement.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Creator</h3>
                  <div className="text-4xl font-bold text-blue-600 mt-2">$79/month</div>
                  <p className="text-gray-600">up to 50 videos</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>HD video generation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Voice synthesis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Professional templates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Brand customization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Export in multiple formats</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVideoGeneratorPage;