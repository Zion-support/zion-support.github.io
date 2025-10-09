'use client';
import React from 'react';
import { MessageSquare, Languages, Bot, Search, FileText, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AINLPPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions for text analysis, language understanding, and conversational AI. Transform text data into actionable insights with our NLP expertise."
        keywords={['natural language processing', 'NLP', 'text analysis', 'conversational AI', 'language understanding', 'NLP consulting']}
        canonicalUrl="https://ziontechgroup.com/ai-nlp"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Natural Language Processing
            </h1>
            <p className="text-xl text-blue-400 mb-8 font-medium neon-pulse">
              Understand and Process Human Language with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our NLP solutions help computers understand, interpret, and generate human language, 
              enabling intelligent text analysis, chatbots, and automated content processing.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Text Analysis</h3>
                <p className="text-gray-300">Extract meaning, sentiment, and insights from text data using advanced NLP techniques</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Bot className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Conversational AI</h3>
                <p className="text-gray-300">Build intelligent chatbots and virtual assistants that understand natural language</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Languages className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Language Translation</h3>
                <p className="text-gray-300">Break down language barriers with accurate, context-aware translation services</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Unlock the Power of Language?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our NLP experts help you build intelligent language processing systems for your business.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get NLP Consultation
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