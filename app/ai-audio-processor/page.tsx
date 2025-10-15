import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIAudioProcessorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Audio Processor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered audio processing for noise reduction, enhancement, transcription, and real-time audio optimization." />
        <meta name="keywords" content="AI audio processor, noise reduction, audio enhancement, speech recognition, audio transcription" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-audio-processor" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Audio Processor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your audio with AI-powered processing. Enhance quality, reduce noise, 
              and extract valuable insights from your audio content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Intelligent noise reduction and cancellation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Audio enhancement and quality improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Real-time speech-to-text transcription</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Voice activity detection and segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Speaker identification and diarization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Audio compression and format conversion</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Podcast and video production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Meeting recordings and transcription</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Customer service call analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Educational content processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Accessibility and closed captioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Security and surveillance audio</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Process Audio Intelligently</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage AI to extract maximum value from your audio content with professional-grade processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="bg-transparent border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Try Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAudioProcessorPage;