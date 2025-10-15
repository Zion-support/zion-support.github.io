'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  LanguageIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

const AITranslatorPage: React.FC = () => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');

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
      title: 'AI-Powered Translation',
      description: 'Advanced neural machine translation with 99% accuracy',
      benefits: ['Context-aware translation', 'Cultural adaptation', 'Real-time processing']
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Translation',
      description: 'Translate speech in real-time with voice recognition',
      benefits: ['Live conversation', 'Voice synthesis', 'Accent recognition']
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting',
      benefits: ['PDF support', 'Format preservation', 'Batch processing']
    },
    {
      icon: PhotoIcon,
      title: 'Image Translation',
      description: 'Extract and translate text from images and photos',
      benefits: ['OCR technology', 'Multi-language detection', 'Image enhancement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individual users',
      features: [
        '10,000 characters/month',
        '50+ languages',
        'Basic voice translation',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '100,000 characters/month',
        '100+ languages',
        'Advanced voice translation',
        'Priority support',
        'Document translation',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited characters',
        'All languages',
        'Premium voice features',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'Advanced analytics',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const handleTranslation = async () => {
    setIsTranslating(true);
    // Simulate AI translation
    setTimeout(() => {
      const sampleTranslations = {
        'en-es': '¡Hola! Este es un ejemplo de traducción con IA. Nuestra tecnología avanzada puede traducir texto con una precisión del 99%.',
        'es-en': 'Hello! This is an example of AI translation. Our advanced technology can translate text with 99% accuracy.',
        'en-fr': 'Bonjour! Ceci est un exemple de traduction IA. Notre technologie avancée peut traduire du texte avec une précision de 99%.',
        'en-de': 'Hallo! Dies ist ein Beispiel für KI-Übersetzung. Unsere fortschrittliche Technologie kann Text mit 99% Genauigkeit übersetzen.'
      };
      const key = `${sourceLanguage}-${targetLanguage}`;
      setTranslatedText(sampleTranslations[key] || 'Translation completed successfully!');
      setIsTranslating(false);
    }, 2000);
  };

  return (
    <>
      <SEOHead 
        title="AI Translator - Zion Tech Group"
        description="Revolutionary AI-powered translation service supporting 100+ languages with 99% accuracy. Translate text, voice, documents, and images in real-time."
        keywords="AI translator, translation service, multilingual, voice translation, document translation, image translation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-8 neon-glow">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Translator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Break down language barriers with our revolutionary AI-powered translation service. Support for 100+ languages with 99% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleTranslation}
                  disabled={isTranslating}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isTranslating ? 'Translating...' : 'Try Free Demo'}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Live Translation Demo */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="holographic-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Translation Demo</h3>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-2">Source Language</label>
                      <select
                        value={sourceLanguage}
                        onChange={(e) => setSourceLanguage(e.target.value)}
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white"
                      >
                        {languages.map(lang => (
                          <option key={lang.code} value={lang.code}>
                            {lang.flag} {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-2">Target Language</label>
                      <select
                        value={targetLanguage}
                        onChange={(e) => setTargetLanguage(e.target.value)}
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white"
                      >
                        {languages.map(lang => (
                          <option key={lang.code} value={lang.code}>
                            {lang.flag} {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Text to Translate</label>
                      <textarea
                        className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                        placeholder="Enter text to translate..."
                        defaultValue="Hello! This is an example of AI translation. Our advanced technology can translate text with 99% accuracy."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Translated Text</label>
                      <div className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg overflow-auto">
                        <p className="text-green-400">
                          {translatedText || 'Click "Try Free Demo" to see translation...'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to communicate across languages with AI-powered precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
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

        {/* Language Support */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Support for <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">100+ Languages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Translate between any of our supported languages with industry-leading accuracy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="holographic-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">{lang.flag}</div>
                  <div className="text-sm font-medium">{lang.name}</div>
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
                Simple <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your translation needs. All plans include our core AI features.
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
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600' 
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Millions</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">10M+</div>
                <div className="text-gray-300">Translations Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Break Down Language Barriers
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of users who trust our AI-powered translation service for accurate, fast, and reliable translations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
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