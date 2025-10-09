'use client';
import React from 'react';
import { MessageSquare, Brain, Globe, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Cpu, Database, TrendingUp, Shield, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const NLPPage: React.FC = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Chatbot Development',
      description: 'Build intelligent conversational AI that understands context and provides human-like responses.',
      features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Analyze customer feedback, social media, and text data to understand emotions and opinions.',
      features: ['Real-time Analysis', 'Multi-language Support', 'Custom Models', 'Dashboard Integration'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Globe,
      title: 'Language Translation',
      description: 'Accurate, context-aware translation services for global business communication.',
      features: ['100+ Languages', 'Context Preservation', 'Industry-specific Terms', 'Real-time Translation'],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Zap,
      title: 'Text Summarization',
      description: 'Automatically extract key insights and create summaries from large volumes of text.',
      features: ['Document Summarization', 'Meeting Notes', 'News Aggregation', 'Custom Length Control'],
      price: 'Starting at $1,000/month'
    }
  ];

  const applications = [
    { name: 'Customer Support', description: 'Automated responses and ticket routing', icon: MessageSquare },
    { name: 'Content Moderation', description: 'Automated content filtering and moderation', icon: Shield },
    { name: 'Market Research', description: 'Social media and review analysis', icon: TrendingUp },
    { name: 'Document Processing', description: 'Automated document analysis and extraction', icon: Database }
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing (NLP) Solutions - Zion Tech Group"
        description="Transform text and speech with advanced NLP solutions. Chatbots, sentiment analysis, translation, and text processing for enterprise applications."
        keywords={['NLP', 'natural language processing', 'chatbots', 'sentiment analysis', 'translation', 'text processing']}
        canonicalUrl="https://ziontechgroup.com/nlp"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Natural Language Processing
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Transform Text and Speech into Business Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Harness the power of advanced NLP to understand, process, and generate human language at scale. 
              From chatbots to sentiment analysis, our solutions help you extract valuable insights from text data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">95% Accuracy</h3>
                <p className="text-gray-300">Industry-leading accuracy in language understanding and text processing tasks.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">100+ Languages</h3>
                <p className="text-gray-300">Support for over 100 languages and dialects for global business needs.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Real-time Processing</h3>
                <p className="text-gray-300">Process and analyze text data in real-time for instant insights.</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our NLP Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">NLP Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <app.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{app.name}</h3>
                  <p className="text-gray-300 text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Case Study */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text text-center">Success Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Global E-commerce Platform</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    We implemented a multilingual NLP system that processes customer inquiries in 25+ languages, 
                    reducing response time by 80% and improving customer satisfaction by 45%. The system handles 
                    over 100,000 queries daily with 96% accuracy.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">80%</div>
                      <div className="text-gray-300 text-sm">Faster Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">45%</div>
                      <div className="text-gray-300 text-sm">Satisfaction Increase</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Multi-language chatbot support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Sentiment analysis for reviews
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Automated content translation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Real-time language detection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Unlock the Power of Language?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how NLP can transform your text data into actionable business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your NLP Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NLPPage;