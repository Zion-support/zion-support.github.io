'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Mic, Brain, Users, Zap, CheckCircle, ArrowRight, Star, Clock, Target, Phone, Mail, MapPin, Settings, Shield, BarChart, Globe, MessageCircle, Headphones, Volume2, Play, Pause, SkipForward, Home, Briefcase, DollarSign } from 'lucide-react';

const ZionAiVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Voice Recognition',
      description: 'Advanced speech-to-text with 99% accuracy in multiple languages',
      benefits: ['Multi-language support', 'Accent adaptation', 'Noise cancellation', 'Real-time processing']
    },
    {
      icon: Brain,
      title: 'AI Conversation Engine',
      description: 'Intelligent conversation management with context awareness',
      benefits: ['Contextual understanding', 'Emotional intelligence', 'Learning capabilities', 'Personalization']
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Support for multiple users with individual voice profiles',
      benefits: ['Voice identification', 'Personal preferences', 'User management', 'Privacy controls']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-fast response times with cloud and edge computing',
      benefits: ['Sub-second responses', 'Offline capabilities', 'Scalable infrastructure', 'High availability']
    }
  ];

  const capabilities = [
    {
      title: 'Voice Commands',
      description: 'Control devices and applications with voice commands',
      icon: Mic,
      examples: ['"Turn on the lights"', '"Schedule a meeting"', '"Send an email"', '"Play music"']
    },
    {
      title: 'Smart Home Control',
      description: 'Integrate with smart home devices and IoT systems',
      icon: Home,
      examples: ['Thermostat control', 'Security systems', 'Lighting control', 'Appliance management']
    },
    {
      title: 'Business Automation',
      description: 'Automate business processes with voice commands',
      icon: Briefcase,
      examples: ['CRM updates', 'Calendar management', 'Report generation', 'Task automation']
    },
    {
      title: 'Customer Service',
      description: 'AI-powered customer support and assistance',
      icon: Headphones,
      examples: ['FAQ responses', 'Order tracking', 'Technical support', 'Appointment booking']
    }
  ];

  const pricing = [
    {
      name: 'Voice Assistant Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        'Up to 1,000 voice interactions/month',
        'Basic voice commands',
        'Email support',
        'Standard integrations',
        'Mobile app included'
      ],
      marketPrice: '$59/month',
      savings: '51%'
    },
    {
      name: 'Voice Assistant Pro',
      price: '$79',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 voice interactions/month',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard',
        'API access'
      ],
      marketPrice: '$159/month',
      savings: '50%',
      popular: true
    },
    {
      name: 'Voice Assistant Enterprise',
      price: '$199',
      period: '/month',
      description: 'Full-scale voice assistant for large organizations',
      features: [
        'Unlimited voice interactions',
        'Custom AI training',
        '24/7 dedicated support',
        'White-label solutions',
        'On-premise deployment',
        'Custom development'
      ],
      marketPrice: '$399/month',
      savings: '50%'
    }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Voice commands for team communication' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM voice automation' },
    { name: 'Google Workspace', icon: '📧', description: 'Email and calendar voice control' },
    { name: 'Microsoft 365', icon: '📊', description: 'Office productivity voice commands' },
    { name: 'Zoom', icon: '📹', description: 'Meeting management via voice' },
    { name: 'Trello', icon: '📋', description: 'Project management voice control' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation voice commands' },
    { name: 'Zapier', icon: '⚡', description: 'Workflow automation via voice' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice assistant with natural language processing, multi-language support, and business automation. 50% cost savings vs market rates." />
        <meta name="keywords" content="AI voice assistant, voice recognition, speech to text, voice automation, smart assistant" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Mic className="w-4 h-4 mr-2" />
                AI-Powered Voice Technology
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Zion AI <span className="text-purple-400">Voice Assistant</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The most advanced AI voice assistant for business. Control your applications, 
                automate workflows, and boost productivity with natural voice commands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Try Voice Assistant Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">99% Accuracy</h3>
                <p className="text-gray-300">Voice recognition precision</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Intelligence</h3>
                <p className="text-gray-300">Context-aware conversations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time</h3>
                <p className="text-gray-300">Instant voice processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">50% Savings</h3>
                <p className="text-gray-300">vs market rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Voice Assistant <span className="text-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered voice technology designed for business productivity and automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Voice Assistant <span className="text-purple-400">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful voice commands and automation for every aspect of your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-sm text-purple-300 bg-purple-500/10 px-3 py-2 rounded-lg">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Popular <span className="text-purple-400">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite business tools and applications.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300">
                  <div className="text-3xl mb-3">{integration.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-300">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Voice Assistant <span className="text-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable pricing with 50% savings compared to market rates. 
                All plans include AI voice processing and basic integrations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-400 line-through mr-2">Market: {plan.marketPrice}</span>
                      <span className="text-sm text-green-400 font-semibold">Save {plan.savings}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start <span className="text-purple-400">Voice Automation</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our voice AI experts for a free consultation and discover 
              how voice automation can transform your business productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Voice AI Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ZionAiVoiceAssistantPage;