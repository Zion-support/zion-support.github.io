import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Languages, ArrowRight, CheckCircle, Brain, Star, Target, Clock, FileText } from 'lucide-react';

export default function AITranslationService() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Neural Machine Translation',
      description: 'Advanced AI models provide contextually accurate translations in 100+ languages'
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Industry-Specific Translation',
      description: 'Specialized translation models for legal, medical, technical, and business content'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation services for live conversations and real-time content'
    },
    {
      icon: <FileText className="w-6 h-6 text-yellow-400" />,
      title: 'Document Processing',
      description: 'Automated translation of documents, websites, and multimedia content'
    }
  ];

  const translationFeatures = [
    {
      category: 'Language Support',
      items: ['100+ Languages', 'Regional Dialects', 'Cultural Adaptation', 'Context Awareness', 'Tone Preservation', 'Idiom Translation']
    },
    {
      category: 'Content Types',
      items: ['Documents', 'Websites', 'Mobile Apps', 'Video Content', 'Audio Transcription', 'Live Chat']
    },
    {
      category: 'Quality Assurance',
      items: ['Human Review', 'Quality Scoring', 'Consistency Checks', 'Terminology Management', 'Style Guides', 'Proofreading']
    },
    {
      category: 'Integration & API',
      items: ['REST API', 'SDK Libraries', 'CMS Integration', 'E-commerce Platforms', 'Mobile SDKs', 'Webhook Support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small projects',
      features: [
        'Up to 10,000 words',
        '50+ languages',
        'Basic API access',
        'Email support',
        'Standard quality',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 words',
        '100+ languages',
        'Advanced API access',
        'Priority support',
        'Premium quality',
        'Advanced integrations',
        'Custom glossaries'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'White-label solution',
        'Dedicated support',
        'Human review',
        'Custom models',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      company: 'Global Marketing',
      content: 'AI Translation Service has enabled us to reach international markets with accurate, culturally appropriate translations.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'E-commerce Platform',
      content: 'The real-time translation and API integration have made our platform truly global. Customer satisfaction has increased significantly.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Tech Startup',
      content: 'The industry-specific translation models and quality assurance features have been perfect for our technical documentation.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Translation Service - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Translation <span className="text-cyan-400">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Break down language barriers with our advanced AI-powered translation service that delivers 
              accurate, contextually-aware translations in over 100 languages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/ai-services" 
                className="inline-flex items-center px-8 py-4 border border-cyan-600 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for accurate translation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Translation</h2>
              <p className="text-xl text-gray-300">Everything you need for effective multilingual communication</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {translationFeatures.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your translation needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Go Global?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our AI translation service to reach global audiences with accurate, culturally appropriate content.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}