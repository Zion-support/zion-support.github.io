'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Brain, Zap, Shield, Globe, Users, CheckCircle, ArrowRight, Star, Clock, Phone, Mail } from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for human-like conversations',
      benefits: ['Multi-language support', 'Context understanding', 'Intent recognition', 'Sentiment analysis']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Machine learning algorithms that improve with every interaction',
      benefits: ['Continuous learning', 'Personalization', 'Predictive responses', 'Smart routing']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant voice recognition and response generation',
      benefits: ['Low latency', 'High accuracy', 'Concurrent users', 'Scalable infrastructure']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption',
      benefits: ['Data encryption', 'Compliance ready', 'Access controls', 'Audit trails']
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 intelligent customer service with instant problem resolution',
      icon: Users,
      benefits: ['Reduce support costs by 60%', 'Handle 1000+ calls simultaneously', 'Multilingual support', 'Integration with existing systems']
    },
    {
      title: 'Sales Automation',
      description: 'AI-powered sales calls that qualify leads and schedule meetings',
      icon: Globe,
      benefits: ['Increase conversion rates by 40%', 'Qualify leads automatically', 'Schedule appointments', 'Follow-up automation']
    },
    {
      title: 'Internal Operations',
      description: 'Voice-controlled business processes and data retrieval',
      icon: Zap,
      benefits: ['Hands-free operations', 'Voice-to-text conversion', 'Process automation', 'Data analytics']
    },
    {
      title: 'Healthcare Support',
      description: 'HIPAA-compliant voice assistant for patient care',
      icon: Shield,
      benefits: ['Patient scheduling', 'Medical record access', 'Appointment reminders', 'Emergency protocols']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 voice interactions/month',
        '2 languages supported',
        'Basic integrations',
        'Email support',
        '99.5% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 voice interactions/month',
        '10 languages supported',
        'Advanced integrations',
        'Priority support',
        '99.9% uptime SLA',
        'Custom wake words',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited voice interactions',
        'All languages supported',
        'Custom integrations',
        'Dedicated support',
        '99.99% uptime SLA',
        'White-label solution',
        'Advanced analytics',
        'Custom AI training'
      ],
      popular: false
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Accuracy Rate', description: 'Industry-leading voice recognition' },
    { value: '50+', label: 'Languages', description: 'Global language support' },
    { value: '24/7', label: 'Availability', description: 'Always-on voice assistance' },
    { value: '<200ms', label: 'Response Time', description: 'Lightning-fast responses' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Platform - Zion Tech Group | Enterprise Voice AI Solutions</title>
        <meta name="description" content="Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration. Transform customer interactions with AI-powered voice technology." />
        <meta name="keywords" content="AI voice assistant, voice AI, natural language processing, voice recognition, conversational AI, enterprise voice solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Voice Assistant Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration. Transform customer interactions with cutting-edge AI voice technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Voice AI Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by state-of-the-art AI models and designed for enterprise scalability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI voice assistant transforms businesses across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    {plan.price !== 'Custom' && <p className="text-gray-400">per month</p>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Voice Interactions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building your custom AI voice assistant today. No setup fees, no long-term contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;