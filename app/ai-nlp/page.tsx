'use client';
import React from 'react';
import { MessageSquare, Brain, Globe, Zap, Target, TrendingUp, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AINLPPage: React.FC = () => {
  const features = [
    {
      title: 'Text Analysis',
      description: 'Advanced text processing and sentiment analysis',
      icon: MessageSquare,
      benefits: ['Sentiment analysis', 'Text classification', 'Entity extraction']
    },
    {
      title: 'Language Translation',
      description: 'Real-time translation across multiple languages',
      icon: Globe,
      benefits: ['100+ languages', 'Context-aware', 'Real-time processing']
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational AI for customer service',
      icon: Brain,
      benefits: ['Natural conversations', 'Context understanding', 'Multi-channel']
    },
    {
      title: 'Document Processing',
      description: 'Extract insights from unstructured text documents',
      icon: Target,
      benefits: ['Document analysis', 'Information extraction', 'Automated processing']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions for text analysis, language translation, chatbot development, and document processing. Understand and process human language with AI."
        keywords={['NLP', 'natural language processing', 'text analysis', 'language translation', 'chatbot', 'document processing']}
        canonicalUrl="https://ziontechgroup.com/ai-nlp"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Natural Language Processing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of human language with our advanced NLP solutions. 
              From text analysis to intelligent chatbots, we help machines understand and process language.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,200/month</div>
            <p className="text-gray-300">Advanced NLP development and deployment</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">NLP Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Transform Language into Intelligence</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our NLP solutions have achieved 90% automation rates and 40% efficiency improvements. 
                Let's help you understand and process language like never before.
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