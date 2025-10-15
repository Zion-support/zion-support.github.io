import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIVideoGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Generator - Zion Tech Group</title>
        <meta name="description" content="AI-powered video generation from text, images, and scripts. Create professional videos, animations, and content with advanced AI video generation technology." />
        <meta name="keywords" content="AI video generator, video creation, AI animation, video production, content creation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Video Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create stunning videos with AI-powered generation. Transform text, images, 
              and scripts into professional videos and animations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Revolutionary Video Creation
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Video Generator uses cutting-edge machine learning to create 
                professional videos from simple text descriptions, images, or scripts. 
                Generate engaging content for marketing, education, and entertainment.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Text-to-video generation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Image-to-video conversion
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Script-based animation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Multiple output formats
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Create Video</h3>
              <div className="space-y-4">
                <textarea
                  placeholder="Describe your video or paste your script..."
                  className="w-full h-32 p-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-pink-500 focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-2">
                  <select className="p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-pink-500 focus:outline-none">
                    <option>Marketing</option>
                    <option>Educational</option>
                    <option>Entertainment</option>
                    <option>Presentation</option>
                  </select>
                  <select className="p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-pink-500 focus:outline-none">
                    <option>30 seconds</option>
                    <option>1 minute</option>
                    <option>2 minutes</option>
                    <option>5 minutes</option>
                  </select>
                </div>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Generate Video
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Marketing Videos</h3>
              <p className="text-gray-300">
                Create compelling marketing videos and promotional content with AI.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Educational Content</h3>
              <p className="text-gray-300">
                Generate educational videos and training materials automatically.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Social Media</h3>
              <p className="text-gray-300">
                Create engaging social media content and short-form videos.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Create Amazing Videos with AI
            </h2>
            <p className="text-gray-300 mb-8">
              Join content creators and businesses using our AI Video Generator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Creating
              </button>
              <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVideoGeneratorPage;