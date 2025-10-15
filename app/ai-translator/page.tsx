'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  LanguageIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  CameraIcon
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
    'Real-time translation in 100+ languages',
    'Context-aware AI translation',
    'Voice-to-voice translation',
    'Image text translation (OCR)',
    'Document translation with formatting preservation',
    'Industry-specific terminology support',
    'Offline translation capabilities',
    'Batch translation processing',
    'Translation quality scoring',
    'Custom translation models'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      description: 'Perfect for personal use',
      features: [
        '50,000 characters/month',
        '50+ languages',
        'Basic voice translation',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For professionals and small teams',
      features: [
        '500,000 characters/month',
        '100+ languages',
        'Advanced AI features',
        'Document translation',
        'Priority support',
        'API access',
        'Custom terminology'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited characters',
        'All languages',
        'Custom AI models',
        '24/7 support',
        'On-premise deployment',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const handleTranslation = async () => {
    setIsTranslating(true);
    // Simulate AI translation
    setTimeout(() => {
      const translations = {
        'en-es': 'Hola, ¿cómo estás? Este es un ejemplo de traducción con IA.',
        'es-en': 'Hello, how are you? This is an example of AI translation.',
        'en-fr': 'Bonjour, comment allez-vous? Ceci est un exemple de traduction IA.',
        'fr-en': 'Hello, how are you? This is an example of AI translation.',
        'en-de': 'Hallo, wie geht es dir? Dies ist ein Beispiel für KI-Übersetzung.',
        'de-en': 'Hello, how are you? This is an example of AI translation.'
      };
      
      const key = `${sourceLanguage}-${targetLanguage}`;
      setTranslatedText(translations[key] || 'Translation completed successfully!');
      setIsTranslating(false);
    }, 1500);
  };

  return (
    <>
      <SEOHead 
        title="AI Translator - Zion Tech Group"
        description="Advanced AI-powered translation service supporting 100+ languages with real-time voice, text, and image translation. Break down language barriers with cutting-edge technology."
        keywords="AI translator, translation service, multilingual, voice translation, document translation, real-time translation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-8 neon-glow">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Translator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Break down language barriers with our advanced AI-powered translation service. 
                Translate text, voice, and images across 100+ languages with unprecedented accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleTranslation}
                  disabled={!inputText.trim() || isTranslating}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isTranslating ? 'Translating...' : 'Try Translation'}
                </button>
                <a href="#pricing" className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  Try Our AI Translator
                </h2>
                <p className="text-gray-300 mb-8">
                  Experience the power of AI translation with our interactive demo.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Source Language:
                    </label>
                    <select
                      value={sourceLanguage}
                      onChange={(e) => setSourceLanguage(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Text to translate:
                    </label>
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Enter text to translate..."
                      className="w-full h-32 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Target Language:
                    </label>
                    <select
                      value={targetLanguage}
                      onChange={(e) => setTargetLanguage(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    onClick={handleTranslation}
                    disabled={!inputText.trim() || isTranslating}
                    className="w-full cyber-button py-3 disabled:opacity-50"
                  >
                    {isTranslating ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Translating...
                      </div>
                    ) : (
                      'Translate with AI'
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Translation Result:</h3>
                <div className="bg-slate-800 rounded-lg p-6 h-64 overflow-auto">
                  <p className="text-white text-lg leading-relaxed">
                    {translatedText || 'Your translation will appear here...'}
                  </p>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <MicrophoneIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Voice Translation</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <CameraIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Image Translation</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <DocumentTextIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Document Translation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Translator comes equipped with cutting-edge features for all your translation needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-gradient">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your translation needs. All plans include our core AI features.
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
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
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
                      ? 'cyber-button' 
                      : 'border-2 border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Ready to Break Language Barriers?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of users worldwide who trust our AI Translator for accurate, fast, and reliable translations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </a>
              <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AITranslatorPage;