'use client';
import React from 'react';
import { MessageSquare, Languages, Bot, FileText, Search, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AINLPPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions for text analysis, sentiment analysis, language translation, and chatbot development. Transform text data into actionable insights."
        keywords={['natural language processing', 'NLP', 'text analysis', 'sentiment analysis', 'chatbot', 'language translation']}
        canonicalUrl="https://ziontechgroup.com/ai-nlp"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Natural Language Processing
            </h1>
            <p className="text-xl text-blue-400 mb-8 font-medium">
              Advanced Text Intelligence Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Unlock the power of human language with our advanced NLP solutions. From sentiment analysis to 
              intelligent chatbots, we help you understand and process text data at scale.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">NLP Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Text Analysis</h3>
                <p className="text-gray-300">Extract insights from unstructured text data</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Languages className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Language Translation</h3>
                <p className="text-gray-300">Real-time translation across multiple languages</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Bot className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Chatbot Development</h3>
                <p className="text-gray-300">Intelligent conversational AI assistants</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Process Language at Scale?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our NLP experts today to discuss how natural language processing can enhance your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
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