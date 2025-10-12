import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, Brain, FileText, Clock, Target, CheckCircle } from 'lucide-react';
import Layout from '../layout';

export default function AITranslationService() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Neural Machine Translation',
      description: 'Advanced AI models provide contextually accurate translations in 100+ languages'
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, layout, and structure'
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support'
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Industry-Specific Translation',
      description: 'Specialized translation models for legal, medical, technical, and business content'
    }
  ];

  const translationFeatures = [
    {
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
    {
      category: 'Languages',
      items: ['100+ Languages', 'Regional Dialects', 'Rare Languages', 'Sign Language', 'Technical Jargon', 'Cultural Adaptation']
    },
    {
      category: 'Quality Assurance',
      items: ['Human Review', 'Quality Scoring', 'Consistency Checks', 'Terminology Management', 'Style Guides', 'Proofreading']
    },
    {
      category: 'Integration',
      items: ['API Access', 'CMS Integration', 'Website Widgets', 'Mobile Apps', 'Desktop Software', 'Cloud Storage']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        'Up to 50,000 words/month',
        '100+ languages',
        'Basic document translation',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for businesses and agencies',
      features: [
        'Up to 200,000 words/month',
        'All languages + dialects',
        'Advanced document processing',
        'Priority support',
        'Custom terminology',
        'Quality scoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Anna Kowalski',
      company: 'Global Marketing Agency',
      content: 'The translation quality is exceptional. Our international campaigns now reach audiences with perfect cultural context.',
      rating: 5
    },
    {
      name: 'Roberto Silva',
      company: 'Tech Startup',
      content: 'Real-time translation during video calls has transformed our international client meetings. Absolutely game-changing!',
      rating: 5
    },
    {
      name: 'Yuki Tanaka',
      company: 'E-commerce Platform',
      content: 'Document translation with preserved formatting saved us countless hours. The AI understands context perfectly.',
      rating: 5
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
              <Languages className="w-4 h-4 mr-2" />
              AI-Powered Translation
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Translation Service
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Break down language barriers with our advanced AI translation service. 
              Translate documents, websites, and conversations in real-time with human-level accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="#demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Advanced Translation Capabilities
              </h2>
              <p className="text-gray-300 text-lg">
                Powered by cutting-edge AI to deliver accurate, context-aware translations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Translation Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Translation Solutions
              </h2>
              <p className="text-gray-300 text-lg">
                Everything you need for professional translation services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {translationFeatures.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-300 text-lg">
                Choose the plan that fits your translation needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Global Businesses
              </h2>
              <p className="text-gray-300 text-lg">
                See how we're breaking down language barriers worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Break Down Language Barriers?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of businesses using AI translation to reach global audiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Free Trial
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}