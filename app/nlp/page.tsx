'use client';
import React from 'react';
import { MessageSquare, Brain, Globe, Bot, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const NLPPage: React.FC = () => {
  const features = [
    'Text Analysis & Processing',
    'Sentiment Analysis',
    'Language Translation',
    'Chatbot Development',
    'Named Entity Recognition',
    'Text Summarization'
  ];

  const benefits = [
    '50% faster customer response times',
    '80% reduction in manual text processing',
    '90% accuracy in sentiment analysis',
    'Multi-language support for global reach'
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions for text analysis, language understanding, and conversational AI. Transform text data into actionable insights with our NLP expertise."
        keywords={['natural language processing', 'nlp', 'text analysis', 'sentiment analysis', 'chatbot development', 'language translation']}
        canonicalUrl="https://ziontechgroup.com/nlp"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Natural Language Processing
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of human language with advanced NLP solutions that understand, 
              process, and generate natural language for intelligent applications.
            </p>
          </section>

          {/* Service Details */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                  Advanced NLP Solutions
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our NLP experts develop sophisticated language understanding systems that can 
                  process, analyze, and generate human language with remarkable accuracy. From 
                  chatbots to sentiment analysis, we create intelligent solutions that understand context.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="cyber-card p-8">
                <div className="text-center mb-6">
                  <MessageSquare className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Starting at</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-4">$1,200/month</div>
                  <p className="text-gray-300">Custom NLP development and deployment</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Language model training and fine-tuning</li>
                    <li>• Text preprocessing and tokenization</li>
                    <li>• Sentiment and emotion analysis</li>
                    <li>• Multi-language support</li>
                    <li>• API integration and deployment</li>
                    <li>• Continuous learning and updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Business Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Understand Language Like Never Before?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our NLP experts help you build intelligent language processing 
                solutions that understand and respond to human communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  Start Your NLP Project
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

export default NLPPage;