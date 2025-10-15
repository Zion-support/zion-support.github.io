import React from 'react';
import { Helmet } from 'react-helmet-async';

const AITranslatorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Translator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered translation service supporting 100+ languages. Real-time translation, document translation, and language learning with context-aware accuracy." />
        <meta name="keywords" content="AI translator, machine translation, language translation, multilingual, real-time translation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Translator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Break language barriers with our advanced AI-powered translation service. 
              Support for 100+ languages with context-aware accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Language Translation
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Translator uses state-of-the-art neural machine translation 
                to provide accurate, context-aware translations across 100+ languages. 
                Perfect for documents, conversations, and real-time communication.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                  100+ language support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                  Real-time translation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                  Document translation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                  Context-aware accuracy
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Translate Now</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <select className="p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-violet-500 focus:outline-none">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                  <select className="p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-violet-500 focus:outline-none">
                    <option>Spanish</option>
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <textarea
                  placeholder="Enter text to translate..."
                  className="w-full h-24 p-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-violet-500 focus:outline-none"
                />
                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Translate
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Document Translation</h3>
              <p className="text-gray-300">
                Translate entire documents while preserving formatting and structure.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Real-time Chat</h3>
              <p className="text-gray-300">
                Instant translation for live conversations and chat applications.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">API Integration</h3>
              <p className="text-gray-300">
                Integrate translation capabilities into your applications and workflows.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Connect the World Through Language
            </h2>
            <p className="text-gray-300 mb-8">
              Join businesses and individuals using our AI Translator for global communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Translating
              </button>
              <button className="border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View API Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AITranslatorPage;