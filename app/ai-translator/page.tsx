import React from 'react';
import { Helmet } from 'react-helmet-async';

const AITranslatorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Translator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered translation services with support for 100+ languages. Real-time translation with context understanding and industry-specific terminology." />
        <meta name="keywords" content="AI translator, machine translation, multilingual support, real-time translation, language processing" />
        <meta property="og:title" content="AI Translator - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered translation services with support for 100+ languages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-translator" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-translator" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="text-8xl mb-8">🌐</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">AI Translator</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Break down language barriers with our advanced AI-powered translation services. 
              Support for 100+ languages with real-time translation and context understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Translation</h3>
              <p className="text-gray-300">
                Instant translation with sub-second response times for seamless communication.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Context Understanding</h3>
              <p className="text-gray-300">
                Advanced AI that understands context, tone, and industry-specific terminology.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">100+ Languages</h3>
              <p className="text-gray-300">
                Comprehensive language support including regional dialects and specialized vocabularies.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Break Language Barriers?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI Translator today and experience seamless multilingual communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                📞 Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                ✉️ Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AITranslatorPage;