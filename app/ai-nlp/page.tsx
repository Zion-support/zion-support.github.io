'use client';
import React from 'react';
import { MessageSquare, Languages, Bot, FileText, Search, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AINLPPage: React.FC = () => {
  const nlpServices = [
    {
      title: 'Text Analysis',
      description: 'Extract insights from unstructured text data with advanced NLP techniques',
      icon: FileText,
      features: ['Sentiment Analysis', 'Topic Modeling', 'Entity Recognition', 'Text Classification'],
      benefits: ['90% text understanding', 'Real-time processing', 'Multi-language support']
    },
    {
      title: 'Language Translation',
      description: 'Accurate translation between multiple languages with context awareness',
      icon: Languages,
      features: ['Multi-language Support', 'Context-aware Translation', 'Real-time Processing', 'Custom Models'],
      benefits: ['95% accuracy', '50+ languages', 'Cultural context']
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational AI that understands and responds naturally',
      icon: Bot,
      features: ['Natural Conversations', 'Intent Recognition', 'Context Management', 'Multi-channel Support'],
      benefits: ['24/7 availability', '90% query resolution', 'Human-like interactions']
    },
    {
      title: 'Document Processing',
      description: 'Automated extraction and analysis of information from documents',
      icon: Search,
      features: ['OCR Integration', 'Data Extraction', 'Document Classification', 'Content Summarization'],
      benefits: ['80% time savings', '99% accuracy', 'Automated workflows']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions including text analysis, language translation, chatbot development, and document processing. Transform text data into actionable insights."
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
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Understand and Process Human Language with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our NLP solutions help you understand, analyze, and process human language at scale, 
              enabling intelligent automation and better decision-making from text data.
            </p>
          </section>

          {/* NLP Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nlpServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Unlock the Power of Language?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our NLP experts help you build intelligent language processing solutions that understand and respond to human communication.
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
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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