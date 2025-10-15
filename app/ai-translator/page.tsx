import React from 'react';
import { Helmet } from 'react-helmet-async';

const AITranslatorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Translator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered translation service supporting 100+ languages with context-aware translations and real-time processing." />
        <meta name="keywords" content="AI translator, translation service, multilingual, language processing, real-time translation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-translator" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Translator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Break down language barriers with our advanced AI-powered translation service. 
              Support for 100+ languages with context-aware, real-time translations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>100+ language support with high accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Context-aware translations for better meaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Real-time translation for live conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Document translation with formatting preservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Voice-to-voice translation capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Industry-specific terminology support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Global business communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Multilingual customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Content localization for websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Educational material translation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Legal and medical document translation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Real-time meeting translations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Supported Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
                'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Russian',
                'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish',
                'Czech', 'Hungarian', 'Romanian', 'Bulgarian', 'Greek', 'Turkish'
              ].map((language) => (
                <div key={language} className="bg-white/5 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">{language}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-4">And 80+ more languages...</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Translating Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven translation that understands context and delivers accurate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
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

export default AITranslatorPage;