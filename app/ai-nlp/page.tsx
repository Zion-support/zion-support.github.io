'use client';
import React from 'react';
import { MessageSquare, Brain, Globe, Search, FileText, Bot, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AINLPPage: React.FC = () => {
  const features = [
    {
      title: 'Text Analysis',
      description: 'Extract insights from unstructured text data using advanced NLP techniques',
      icon: FileText,
      benefits: ['Sentiment analysis', 'Entity extraction', 'Topic modeling', 'Text classification']
    },
    {
      title: 'Language Translation',
      description: 'Real-time translation between multiple languages with high accuracy',
      icon: Globe,
      benefits: ['100+ languages', 'Context-aware translation', 'Custom terminology', 'Batch processing']
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational AI for customer support and engagement',
      icon: Bot,
      benefits: ['Natural conversations', 'Multi-language support', 'Integration APIs', 'Analytics dashboard']
    },
    {
      title: 'Document Processing',
      description: 'Automated extraction and analysis of information from documents',
      icon: Search,
      benefits: ['OCR integration', 'Form recognition', 'Data extraction', 'Document classification']
    }
  ];

  const applications = [
    {
      title: 'Customer Support',
      description: 'Automated ticket routing and response generation',
      icon: MessageSquare,
      impact: '60% faster response times'
    },
    {
      title: 'Content Moderation',
      description: 'Automated detection of inappropriate or harmful content',
      icon: Shield,
      impact: '95% accuracy in content filtering'
    },
    {
      title: 'Market Research',
      description: 'Analyze customer feedback and social media sentiment',
      icon: Brain,
      impact: 'Real-time insights and trends'
    },
    {
      title: 'Legal Document Review',
      description: 'Automated contract analysis and legal document processing',
      icon: FileText,
      impact: '80% reduction in review time'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions for text analysis, language translation, chatbot development, and document processing. Transform text data into actionable insights."
        keywords={['NLP', 'natural language processing', 'text analysis', 'language translation', 'chatbot development', 'document processing']}
        canonicalUrl="https://ziontechgroup.com/ai-nlp"
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Natural Language Processing
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
              Advanced Text Analysis and Language Understanding Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform unstructured text data into actionable insights with our advanced NLP solutions. 
              From sentiment analysis to language translation, we help you understand and process 
              human language at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get NLP Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our NLP Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Real-World Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{app.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{app.description}</p>
                  <div className="text-blue-400 font-semibold text-sm">{app.impact}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              NLP Service Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Basic</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$1,200<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Text analysis & sentiment</li>
                  <li>Basic language translation</li>
                  <li>Simple chatbot development</li>
                  <li>Document processing</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-blue-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Advanced</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$2,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced text analysis</li>
                  <li>Multi-language translation</li>
                  <li>Intelligent chatbot systems</li>
                  <li>Custom model training</li>
                  <li>API integrations</li>
                  <li>Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom NLP platform</li>
                  <li>Large-scale processing</li>
                  <li>24/7 monitoring</li>
                  <li>Dedicated NLP team</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Unlock the Power of Language?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our NLP experts help you transform your text data into valuable business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your NLP Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
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

export default AINLPPage;