import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';

const AITranslatorPage: React.FC = () => {
  const features = [
    'Real-time translation in 100+ languages',
    'Context-aware translation with industry-specific terminology',
    'Voice-to-voice translation with natural speech synthesis',
    'Document translation with formatting preservation',
    'Website translation with automatic updates',
    'Video subtitle generation and translation',
    'Image text extraction and translation',
    'API integration for seamless workflow',
    'Custom translation models for specific domains',
    'Quality assurance and human review options'
  ];

  const supportedLanguages = [
    { name: 'English', code: 'en', flag: '🇺🇸' },
    { name: 'Spanish', code: 'es', flag: '🇪🇸' },
    { name: 'French', code: 'fr', flag: '🇫🇷' },
    { name: 'German', code: 'de', flag: '🇩🇪' },
    { name: 'Chinese', code: 'zh', flag: '🇨🇳' },
    { name: 'Japanese', code: 'ja', flag: '🇯🇵' },
    { name: 'Korean', code: 'ko', flag: '🇰🇷' },
    { name: 'Arabic', code: 'ar', flag: '🇸🇦' },
    { name: 'Portuguese', code: 'pt', flag: '🇵🇹' },
    { name: 'Russian', code: 'ru', flag: '🇷🇺' },
    { name: 'Italian', code: 'it', flag: '🇮🇹' },
    { name: 'Dutch', code: 'nl', flag: '🇳🇱' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        'Up to 50,000 words per month',
        '50+ languages supported',
        'Basic document translation',
        'Email support',
        'Standard translation quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for businesses and content creators',
      features: [
        'Up to 200,000 words per month',
        '100+ languages supported',
        'Advanced document translation',
        'Voice translation',
        'Priority support',
        'API access',
        'Custom terminology',
        'Quality assurance tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited words',
        'All languages supported',
        'Custom translation models',
        '24/7 dedicated support',
        'On-premise deployment',
        'Advanced security features',
        'White-label solutions',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Website Localization',
      description: 'Translate your entire website and keep it updated automatically',
      icon: GlobeAltIcon
    },
    {
      title: 'Document Translation',
      description: 'Translate PDFs, Word docs, and other files while preserving formatting',
      icon: DocumentTextIcon
    },
    {
      title: 'Real-time Communication',
      description: 'Break language barriers in live conversations and meetings',
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: 'Content Creation',
      description: 'Create multilingual content for global audiences',
      icon: EyeIcon
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Translator Pro - Zion Tech Group"
        description="Advanced AI-powered translation service supporting 100+ languages with real-time voice translation, document processing, and context-aware accuracy. Break language barriers with cutting-edge technology."
        keywords="AI translator, real-time translation, multilingual, voice translation, document translation, website localization, language barrier, global communication"
        canonicalUrl="https://ziontechgroup.com/ai-translator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  AI Translator Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Break language barriers with our advanced AI-powered translation service. Real-time voice translation, document processing, and context-aware accuracy in 100+ languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a href="#pricing"
                  className="relative group bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a href="#demo"
                  className="border-2 border-green-400 text-green-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-green-400/25"
                >
                  Try Live Demo
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">100+</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">99.5%</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">Real-time</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Translation</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Languages */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Support for <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">100+ Languages</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From major world languages to regional dialects, we support comprehensive translation needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {supportedLanguages.map((language, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/10 text-center"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{language.flag}</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{language.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need for professional translation across all media types.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="flex items-start space-x-4 p-4 sm:p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
                >
                  <div className="relative">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect for Every <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Translation Need</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From business documents to real-time conversations, we handle all your translation requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 overflow-hidden"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <useCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-green-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your translation needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-green-500 shadow-green-500/20' 
                      : 'border-slate-700 hover:border-green-500 hover:shadow-green-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Break Language Barriers Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of users who are already communicating globally with AI-powered translation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="relative group bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-green-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AITranslatorPage;