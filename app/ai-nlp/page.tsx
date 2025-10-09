'use client';
import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle, Star, Zap, FileText, Globe, Bot } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AINLPPage: React.FC = () => {
  const nlpServices = [
    {
      title: 'Text Analysis',
      description: 'Extract insights and patterns from unstructured text data',
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
      icon: MessageSquare,
      features: ['OCR Integration', 'Data Extraction', 'Document Classification', 'Automated Workflows']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions including text analysis, language translation, chatbot development, and document processing. Transform text data into actionable insights."
        keywords={['NLP', 'natural language processing', 'text analysis', 'chatbot', 'language translation']}
        canonicalUrl="https://ziontechgroup.com/ai-nlp"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Natural Language Processing
            </h1>
            <p className="text-xl text-blue-400 mb-8 font-medium neon-pulse">
              Understand and Process Human Language with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our NLP solutions help you understand, analyze, and generate human language at scale. 
              From sentiment analysis to intelligent chatbots, we transform text data into valuable business insights.
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
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our NLP Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Models</h3>
                <p className="text-gray-300">
                  We use state-of-the-art transformer models and custom fine-tuned solutions for optimal performance.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-time Processing</h3>
                <p className="text-gray-300">
                  Process text data in real-time with low latency and high accuracy for immediate insights.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">
                  Tailored NLP solutions designed specifically for your industry and use case requirements.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Unlock the Power of Language?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our NLP experts today to discuss how natural language processing can transform your text data into valuable business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                +1 302 464 0950
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