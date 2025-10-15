import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIVoiceSynthesizerProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Voice Synthesizer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered voice synthesis with natural-sounding speech, multiple languages, and customizable voice characteristics." />
        <meta name="keywords" content="AI voice synthesis, text-to-speech, voice generation, speech synthesis, voice cloning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-synthesizer-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Voice Synthesizer <span className="text-pink-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered voice synthesis with natural-sounding speech, multiple languages, and customizable voice characteristics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Natural Voice Generation</h3>
                <p className="text-gray-300 mb-4">
                  Generate human-like speech with natural intonation, emotion, and pronunciation.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• High-quality voice synthesis</li>
                  <li>• Emotional expression</li>
                  <li>• Natural intonation</li>
                  <li>• Multiple voice styles</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Multi-Language Support</h3>
                <p className="text-gray-300 mb-4">
                  Support for 50+ languages with native pronunciation and accent variations.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• 50+ languages supported</li>
                  <li>• Regional accents</li>
                  <li>• Custom pronunciation</li>
                  <li>• Voice cloning capabilities</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Voice Cloning</h4>
                  <p className="text-gray-300">Create custom voices from samples</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Emotion Control</h4>
                  <p className="text-gray-300">Add emotion and expression to speech</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Real-time Synthesis</h4>
                  <p className="text-gray-300">Generate speech instantly</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Voice Synthesizer Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceSynthesizerProPage;