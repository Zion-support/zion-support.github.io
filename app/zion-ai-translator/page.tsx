'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  GlobeAltIcon as GlobeAltIconSolid,
  BeakerIcon,
  EyeIcon,
  MapIcon,
  CurrencyDollarIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

const ZionAITranslatorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language Translation',
      description: 'AI-powered translation supporting 100+ languages with 99.8% accuracy and context-aware translations.',
      stats: '50M+ translations completed'
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Translation',
      description: 'Automated translation of documents, PDFs, and files while preserving original formatting.',
      stats: '1M+ documents translated'
    },
    {
      icon: LanguageIcon,
      title: 'Real-time Translation',
      description: 'Instant translation for conversations, meetings, and live content with voice recognition.',
      stats: 'Real-time processing'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Collaborative translation tools with version control, comments, and team management.',
      stats: '100,000+ teams using'
    },
    {
      icon: ChartBarIcon,
      title: 'Translation Analytics',
      description: 'Advanced analytics for translation quality, usage patterns, and performance metrics.',
      stats: 'Real-time insights'
    },
    {
      icon: CogIcon,
      title: 'API Integration',
      description: 'RESTful API for seamless integration with existing applications and workflows.',
      stats: '99.9% uptime guarantee'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual users and freelancers',
      features: [
        'Up to 100,000 characters/month',
        '50+ languages supported',
        'Basic document translation',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Business Pro',
      price: '$199',
      period: '/month',
      description: 'Ideal for businesses and content creators',
      features: [
        'Unlimited translations',
        '100+ languages supported',
        'Advanced document processing',
        'Team collaboration (up to 10 users)',
        'Priority support',
        'API access',
        'Custom glossaries',
        'Translation memory'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations and translation agencies',
      features: [
        'Everything in Business Pro',
        'Unlimited team members',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'White-label options',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Williams',
      title: 'Content Manager',
      company: 'Global Marketing Agency',
      content: 'Zion AI Translator has revolutionized our multilingual content strategy. The accuracy and speed are incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Software Developer',
      company: 'TechStart Inc.',
      content: 'The API integration was seamless. We can now offer real-time translation in our app with minimal effort.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'Project Manager',
      company: 'International Consulting',
      content: 'The team collaboration features have improved our translation workflow and quality significantly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Translator - AI-Powered Translation Platform | Zion Tech Group"
        description="Transform communication with AI-powered translation supporting 100+ languages. 99.8% accuracy, 50M+ translations completed."
        keywords="AI translator, multi-language translation, document translation, real-time translation, translation API, language processing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <GlobeAltIconSolid className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">AI Translation Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion AI Translator
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Break language barriers with AI-powered translation supporting 100+ languages. 
                Achieve 99.8% accuracy and translate content in real-time with context-aware intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
                  <div className="text-gray-300 text-sm">Translation Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50M+</div>
                  <div className="text-gray-300 text-sm">Translations Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
                  <div className="text-gray-300 text-sm">Documents Translated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced AI Translation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive translation technology solutions designed to break language barriers globally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-blue-400 font-medium">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your translation needs. All plans include our core AI translation features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-700 hover:border-blue-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted by Global Organizations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what organizations worldwide are saying about Zion AI Translator.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Break Language Barriers?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations who trust Zion AI Translator for their global communication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Free Trial
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

export default ZionAITranslatorPage;