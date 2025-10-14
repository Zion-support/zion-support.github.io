import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Languages, Brain, FileText, Clock, Target, CheckCircle, Globe, Zap } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function AITranslationServicePage() {
  const features = [
    {
      icon: <Languages className="w-6 h-6 text-blue-400" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with high-quality translation accuracy'
    },
    {
      icon: <Brain className="w-6 h-6 text-green-400" />,
      title: 'AI-Powered',
      description: 'Advanced neural machine translation with context understanding'
    },
    {
      icon: <FileText className="w-6 h-6 text-yellow-400" />,
      title: 'Document Support',
      description: 'Translate various document formats including PDF, Word, and more'
    },
    {
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation with sub-second response times'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Industry-Specific',
      description: 'Specialized translation models for legal, medical, technical content'
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      title: 'Global Reach',
      description: 'Seamless integration with your existing workflows and systems'
    }
  ];

  const translationTypes = [
    {
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
    {
      category: 'Languages',
      items: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Portuguese', 'Russian', 'Italian']
    },
    {
      category: 'Industries',
      items: ['Legal', 'Medical', 'Technical', 'Business', 'E-commerce', 'Marketing', 'Education', 'Entertainment']
    },
    {
      category: 'Features',
      items: ['Context Awareness', 'Terminology Management', 'Quality Assurance', 'Batch Processing', 'API Integration', 'Custom Models']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50,000 words/month',
        '50+ languages',
        'Basic document support',
        'Email support',
        'Standard quality'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200,000 words/month',
        '100+ languages',
        'All document formats',
        'Priority support',
        'High quality translation',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom models',
        '24/7 support',
        'White-label solution',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Translation Service - Zion Tech Group</title>
        <meta name="description" content="Professional AI-powered translation service supporting 100+ languages. High-quality, context-aware translations for businesses worldwide." />
        <meta name="keywords" content="AI translation, machine translation, multilingual, document translation, language services" />
      </Helmet>

      <ResponsiveContainer>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI Translation Service
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Break language barriers with our advanced AI-powered translation service. 
                  Support for 100+ languages with context-aware, high-quality translations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton variant="primary" size="lg">
                    Start Translating
                  </FuturisticButton>
                  <FuturisticButton variant="secondary" size="lg">
                    View Demo
                  </FuturisticButton>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Powerful Translation Features
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Experience the future of translation with our cutting-edge AI technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Translation Types Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Comprehensive Translation Solutions
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From simple text to complex documents, we handle all your translation needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {translationTypes.map((type, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {type.category}
                    </h3>
                    <ul className="space-y-2">
                      {type.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Choose Your Plan
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Select the perfect plan for your translation needs and scale as you grow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard 
                    key={index} 
                    className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <FuturisticButton 
                      variant={plan.popular ? "primary" : "secondary"} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Break Language Barriers?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of businesses already using our AI translation service to reach global audiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg" className="group">
                  Start Free Trial
                  <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </>
  );
}