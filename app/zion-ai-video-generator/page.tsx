import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAiVideoGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator | Advanced AI Video Creation Platform</title>
        <meta name="description" content="Create stunning videos with AI-powered Zion Video Generator. Transform text, images, and ideas into professional videos with advanced AI technology." />
        <meta name="keywords" content="AI video generator, video creation, AI video maker, automated video, video AI, content creation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion AI Video Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your ideas into stunning videos with our advanced AI-powered video generation platform. 
              Create professional content in minutes, not hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Text-to-Video</h3>
              <p className="text-gray-300">
                Convert your scripts and descriptions into engaging videos with AI-generated visuals and animations.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Image-to-Video</h3>
              <p className="text-gray-300">
                Transform static images into dynamic videos with AI-powered motion and effects.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1h-2a1 1 0 01-1-1V4M7 4H5a1 1 0 00-1 1v14a1 1 0 001 1h2M7 4h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Voice Synthesis</h3>
              <p className="text-gray-300">
                Generate natural-sounding voiceovers in multiple languages with AI voice synthesis.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6 text-center">Advanced Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">AI-Powered Creation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Intelligent scene composition</li>
                  <li>• Automatic color grading</li>
                  <li>• Smart transitions and effects</li>
                  <li>• Context-aware editing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Professional Output</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 4K video resolution support</li>
                  <li>• Multiple export formats</li>
                  <li>• Custom branding options</li>
                  <li>• Batch processing capabilities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Creating Videos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAiVideoGeneratorPage;