import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIAudioProcessorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Audio Processor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered audio processing for noise reduction, enhancement, transcription, and analysis. Professional audio tools powered by machine learning." />
        <meta name="keywords" content="AI audio processing, noise reduction, audio enhancement, speech recognition, audio analysis" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Audio Processor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your audio with advanced AI-powered processing. 
              Enhance quality, reduce noise, and extract insights from audio content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Audio Enhancement
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Audio Processor uses deep learning algorithms to automatically 
                enhance audio quality, remove background noise, and optimize sound 
                for different applications.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Real-time noise reduction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Audio quality enhancement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Speech-to-text transcription
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Audio analysis and insights
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Upload Audio</h3>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                  <p className="text-gray-300 mb-4">Drag and drop audio files here</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Choose Files
                  </button>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Process Audio
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Podcast Enhancement</h3>
              <p className="text-gray-300">
                Automatically clean and enhance podcast audio for professional quality.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Meeting Transcription</h3>
              <p className="text-gray-300">
                Convert meeting recordings to text with high accuracy and speaker identification.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Music Production</h3>
              <p className="text-gray-300">
                AI-powered audio mastering and mixing for music production workflows.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience AI Audio Processing
            </h2>
            <p className="text-gray-300 mb-8">
              Join content creators, businesses, and developers using our AI audio tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAudioProcessorPage;