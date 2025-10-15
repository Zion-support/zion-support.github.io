import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  LanguageIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';

const AITranslatorPage: React.FC = () => {
  const features = [
    {
      icon: LanguageIcon,
      title: '100+ Languages',
      description: 'Support for over 100 languages with high accuracy translation.',
      benefits: ['Real-time Translation', 'Context Awareness', 'Cultural Adaptation', 'Industry Terms']
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting and structure.',
      benefits: ['PDF Support', 'Word Documents', 'PowerPoint', 'Excel Files']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat Translation',
      description: 'Real-time translation for live conversations and meetings.',
      benefits: ['Instant Translation', 'Voice Recognition', 'Multi-participant', 'Meeting Integration']
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Translation',
      description: 'Translate spoken language in real-time with voice synthesis.',
      benefits: ['Speech-to-Speech', 'Voice Cloning', 'Accent Recognition', 'Natural Speech']
    }
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
    'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Russian',
    'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish',
    'Czech', 'Hungarian', 'Greek', 'Turkish', 'Hebrew', 'Thai'
  ];

  return (
    <>
      <SEOHead
        title="AI Translator - Zion Tech Group"
        description="Advanced AI-powered translation service supporting 100+ languages with real-time translation, document processing, and voice translation capabilities."
        keywords="AI translator, translation service, multilingual, real-time translation, document translation, voice translation"
        canonicalUrl="https://ziontechgroup.com/ai-translator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  AI Translator
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Break down language barriers with our advanced AI-powered translation service. Support for 100+ languages with real-time translation, document processing, and voice translation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Try Free Translation
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="text-blue-400">Translation Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI translator provides comprehensive translation solutions for all your communication needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Supported <span className="text-blue-400">Languages</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI translator supports over 100 languages with high accuracy and cultural context awareness.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-sm font-semibold text-white">{language}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple <span className="text-blue-400">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your translation needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Free</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$0<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    1,000 words/month
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    20 languages
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Basic translation
                  </li>
                </ul>
                <button className="w-full border-2 border-blue-400 text-blue-300 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Pro</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$19<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    50,000 words/month
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    100+ languages
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Document translation
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Voice translation
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    API access
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">Custom</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Unlimited words
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    All languages
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Custom models
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    On-premise deployment
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full border-2 border-blue-400 text-blue-300 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Break Down Language Barriers
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start translating instantly with our AI-powered translation service. No setup required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Try Free Translation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AITranslatorPage;