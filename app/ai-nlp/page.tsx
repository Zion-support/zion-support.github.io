'use client';
import React from 'react';
import { MessageSquare, CheckCircle, TrendingUp, Globe, Bot, FileText } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import PerformanceOptimizer from '../../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../../components/AccessibilityEnhancer';
import SecurityEnhancer from '../../components/SecurityEnhancer';
import Analytics from '../../components/Analytics';

const AINLPPage: React.FC = () => {
  const features = [
    'Text Analysis',
    'Sentiment Analysis',
    'Language Translation',
    'Chatbot Development',
    'Named Entity Recognition',
    'Text Summarization'
  ];

  const benefits = [
    'Better understanding',
    'Automated processing',
    'Multi-language support',
    'Real-time insights'
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions for text analysis, language understanding, and conversational AI. Process and understand human language with intelligent NLP technology."
        keywords={['natural language processing', 'NLP', 'text analysis', 'sentiment analysis', 'chatbot development', 'language AI']}
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
            <div className="text-6xl mb-6">💬</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Natural Language Processing
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Advanced Language Understanding with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Process and understand human language with advanced NLP solutions. Build chatbots, 
              analyze sentiment, translate languages, and extract insights from text data.
            </p>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$1,200/month</div>
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">
                Proven Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
                  <div className="text-gray-300">Languages Supported</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
                  <div className="text-gray-300">Processing Speed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
                  <div className="text-gray-300">User Satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Process Language with AI?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Start building intelligent language processing solutions with advanced NLP technology today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Consultation
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