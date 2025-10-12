'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiComputerVisionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Computer Vision - Zion Tech Group</title>
        <meta name="description" content="AI Computer Vision services by Zion Tech Group. Professional AI and IT solutions for image recognition and analysis." />
        <meta name="keywords" content="ai-computer-vision, AI solutions, IT services, computer vision, image recognition" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Computer Vision
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional AI computer vision services by Zion Tech Group.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We're working on something amazing. Stay tuned for our AI computer vision solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiComputerVisionPage;