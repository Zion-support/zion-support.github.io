import React from 'react';
import { Helmet } from 'react-helmet-async';

const AITranslatorProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Translator Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered translation service with support for 100+ languages, context-aware translations, and real-time communication." />
        <meta name="keywords" content="AI translation, multilingual support, real-time translation, language processing, global communication" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-translator-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Translator <span className="text-green-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered translation service with support for 100+ languages, context-aware translations, and real-time communication.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">100+ Languages Supported</h3>
                <p className="text-gray-300 mb-4">
                  Translate between 100+ languages with high accuracy and cultural context awareness.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Real-time translation</li>
                  <li>• Context-aware translations</li>
                  <li>• Cultural adaptation</li>
                  <li>• Industry-specific terminology</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Multi-Modal Translation</h3>
                <p className="text-gray-300 mb-4">
                  Translate text, voice, images, and documents with advanced AI technology.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Text translation</li>
                  <li>• Voice translation</li>
                  <li>• Image text translation</li>
                  <li>• Document translation</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Global Reach</h4>
                  <p className="text-gray-300">Connect with audiences worldwide</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Real-time Processing</h4>
                  <p className="text-gray-300">Instant translation results</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Context Awareness</h4>
                  <p className="text-gray-300">Understands context and nuance</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Translator Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AITranslatorProPage;