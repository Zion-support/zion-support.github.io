import React from 'react';
import SEOHead from '../components/SEOHead';

const AITranslatorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Translator - Zion Tech Group"
        description="Advanced AI-powered translation service supporting 100+ languages with context-aware translation and real-time processing capabilities."
        keywords="AI translator, language translation, multilingual support, real-time translation, context-aware translation, global communication"
        canonicalUrl="https://ziontechgroup.com/ai-translator"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Translator</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Break down language barriers with our advanced AI-powered translation service supporting 100+ languages with context-aware accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">100+ Languages</h3>
                    <p className="text-gray-600">Support for over 100 languages with high accuracy and cultural context awareness.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Translation</h3>
                    <p className="text-gray-600">Instant translation for live conversations, meetings, and real-time communication.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Context-Aware Translation</h3>
                    <p className="text-gray-600">Understand context and nuances to provide more accurate and natural translations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Document Translation</h3>
                    <p className="text-gray-600">Translate entire documents while preserving formatting and structure.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Professional</h3>
                  <div className="text-4xl font-bold text-blue-600 mt-2">$29/month</div>
                  <p className="text-gray-600">up to 1M characters</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>100+ languages</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Real-time translation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Document translation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AITranslatorPage;