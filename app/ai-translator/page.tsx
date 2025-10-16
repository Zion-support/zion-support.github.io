'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

const AITranslatorPage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' }
  ];

  const features = [
    {
      icon: CpuChipIcon,
      title: '100+ Languages',
      description: 'Support for 100+ languages with advanced AI translation models',
      price: 'Included'
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Translation',
      description: 'Real-time voice translation with natural speech synthesis',
      price: 'Included'
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting',
      price: 'Included'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'End-to-end encryption and GDPR compliance for sensitive content',
      price: 'Included'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for personal use',
      features: [
        '1,000 characters/month',
        '20 languages',
        'Basic translation',
        'Community support',
        'Web interface only'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$19',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '50,000 characters/month',
        '100+ languages',
        'Advanced AI translation',
        'Voice translation',
        'Document translation',
        'API access',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$99',
      period: '/month',
      description: 'For teams and businesses',
      features: [
        'Unlimited characters',
        'All languages',
        'Custom translation models',
        'Team collaboration',
        'Bulk translation',
        'White-label solution',
        '24/7 support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const handleTranslation = async () => {
    if (!inputText.trim()) return;
    
    setIsTranslating(true);
    // Simulate AI translation
    setTimeout(() => {
      setTranslatedText(`[Translated from ${languages.find(l => l.code === sourceLanguage)?.name} to ${languages.find(l => l.code === targetLanguage)?.name}]\n\n${inputText} - This is a simulated translation. In the real application, this would be processed by our advanced AI translation engine.`);
      setIsTranslating(false);
    }, 1500);
  };

  const swapLanguages = () => {
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  return (
    <>
      <SEOHead 
        title="AI Translator - Zion Tech Group"
        description="Advanced AI-powered translation service supporting 100+ languages. Real-time voice, document, and text translation with enterprise-grade security."
        keywords="AI translator, translation service, multilingual, voice translation, document translation, language translation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
                <GlobeAltIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">AI-Powered Translation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="animated-gradient-text">AI Translator</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Break down language barriers with our advanced AI translation service. 
                Support for 100+ languages with real-time voice and document translation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={handleTranslation}
                  disabled={isTranslating || !inputText.trim()}
                  className="cyber-button text-lg px-8 py-4 disabled:opacity-50"
                >
                  {isTranslating ? 'Translating...' : 'Try Free Translation'}
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Translation Demo */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Live <span className="animated-gradient-text">Translation</span> Demo
              </h2>
              <p className="text-xl text-gray-300">
                Experience real-time AI translation in action
              </p>
            </div>
            
            <div className="holographic-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Source Language */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium">Source Language</label>
                    <select
                      value={sourceLanguage}
                      onChange={(e) => setSourceLanguage(e.target.value)}
                      className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
                    >
                      {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text to translate..."
                    className="w-full h-40 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none"
                  />
                </div>
                
                {/* Swap Button */}
                <div className="flex justify-center lg:justify-start lg:items-center">
                  <button
                    onClick={swapLanguages}
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ArrowRightIcon className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                {/* Target Language */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium">Target Language</label>
                    <select
                      value={targetLanguage}
                      onChange={(e) => setTargetLanguage(e.target.value)}
                      className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
                    >
                      {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    value={translatedText}
                    readOnly
                    placeholder="Translated text will appear here..."
                    className="w-full h-40 p-4 bg-slate-800 border border-slate-600 rounded-lg text-green-400 resize-none"
                  />
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleTranslation}
                  disabled={isTranslating || !inputText.trim()}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 flex items-center"
                >
                  {isTranslating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Translating...
                    </>
                  ) : (
                    <>
                      <SparklesIcon className="w-5 h-5 mr-2" />
                      Translate Now
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="animated-gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for professional translation services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <span className="text-green-400 font-semibold">{feature.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="animated-gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your translation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white' 
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="animated-gradient-text">Connect</span> the World?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of users who trust our AI translation service for their communication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Translation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AITranslatorPage;