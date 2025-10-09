'use client';
import React from 'react';
import { MessageSquare, Globe, Bot, FileText, Search, Brain, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AINLPPage: React.FC = () => {
  const nlpServices = [
    {
      title: 'Text Analysis',
      description: 'Extract insights and meaning from unstructured text data',
      icon: FileText,
      features: ['Sentiment Analysis', 'Topic Modeling', 'Entity Recognition', 'Text Classification']
    },
    {
      title: 'Language Translation',
      description: 'Real-time translation across multiple languages with high accuracy',
      icon: Globe,
      features: ['Multi-language Support', 'Context-Aware Translation', 'Custom Dictionaries', 'API Integration']
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational AI for customer service and support',
      icon: Bot,
      features: ['Natural Conversations', 'Intent Recognition', 'Context Management', 'Human Handoff']
    },
    {
      title: 'Document Processing',
      description: 'Automated extraction and analysis of information from documents',
      icon: Search,
      features: ['OCR Integration', 'Data Extraction', 'Document Classification', 'Content Summarization']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions for text analysis, language translation, chatbot development, and document processing. Transform text data into actionable insights."
        keywords={['natural language processing', 'NLP', 'text analysis', 'chatbot', 'language translation', 'document processing']}
        canonicalUrl="https://ziontechgroup.com/ai-nlp"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Natural Language Processing
            </h1>
            <p className="text-xl text-blue-400 mb-8 font-medium">
              Understand and Process Human Language
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Harness the power of NLP to analyze text, understand context, and build intelligent 
              systems that can communicate naturally with humans.
            </p>
          </section>

          {/* NLP Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nlpServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
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
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our NLP Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced AI Models</h3>
                <p className="text-gray-300">State-of-the-art language models that understand context and nuance in human communication.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">Multi-Language Support</h3>
                <p className="text-gray-300">Process and understand text in multiple languages with high accuracy and cultural context.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Processing</h3>
                <p className="text-gray-300">Fast, efficient processing of text data for real-time applications and decision making.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Unlock the Power of Language?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our NLP experts help you build intelligent systems that understand and process human language. 
              Get a free consultation and discover how NLP can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AINLPPage;