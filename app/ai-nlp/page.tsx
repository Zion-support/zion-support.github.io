'use client';
import React from 'react';
import { MessageSquare, Brain, Globe, CheckCircle, TrendingUp, Star, Users, Award, Zap, Target, ArrowRight, FileText, Search } from 'lucide-react';
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
      description: 'Extract insights and meaning from unstructured text data',
      features: ['Sentiment Analysis', 'Topic Modeling', 'Entity Recognition', 'Text Classification'],
      benefits: ['95% accuracy', 'Real-time processing', 'Multi-language support']
    },
    {
      title: 'Language Translation',
      description: 'Accurate translation between multiple languages using advanced NLP',
      features: ['100+ Languages', 'Context-Aware Translation', 'Custom Models', 'API Integration'],
      benefits: ['99% accuracy', 'Cultural adaptation', 'Industry-specific terms']
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational AI for customer service and support',
      features: ['Natural Conversations', 'Intent Recognition', 'Context Management', 'Multi-channel Support'],
      benefits: ['24/7 availability', 'Instant responses', 'Human-like interactions']
    },
    {
      title: 'Document Processing',
      description: 'Automated extraction and analysis of information from documents',
      features: ['OCR Integration', 'Data Extraction', 'Document Classification', 'Compliance Checking'],
      benefits: ['90% time savings', 'Error reduction', 'Automated workflows']
    }
  ];

  const useCases = [
    {
      industry: 'Customer Service',
      application: 'Intelligent Chatbots',
      result: '80% reduction in support tickets',
      description: 'AI-powered chatbots that understand customer intent and provide instant solutions'
    },
    {
      industry: 'E-commerce',
      application: 'Product Review Analysis',
      result: '60% better product insights',
      description: 'Analyze customer reviews to understand sentiment and improve products'
    },
    {
      industry: 'Healthcare',
      application: 'Medical Text Analysis',
      result: '50% faster diagnosis',
      description: 'Extract insights from medical records and research papers'
    },
    {
      industry: 'Finance',
      application: 'Risk Assessment',
      result: '70% more accurate risk evaluation',
      description: 'Analyze news, reports, and documents for risk indicators'
    }
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
    'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Russian'
  ];

  const stats = [
    { label: 'Languages Supported', value: '100+', icon: Globe },
    { label: 'Accuracy Rate', value: '99%', icon: Target },
    { label: 'Processing Speed', value: '5x', icon: Zap },
    { label: 'Cost Reduction', value: '70%', icon: TrendingUp }
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions including text analysis, language translation, chatbot development, and document processing. Transform text data into actionable insights."
        keywords={['natural language processing', 'NLP', 'text analysis', 'language translation', 'chatbot development', 'document processing']}
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
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Our NLP solutions help businesses understand, analyze, and respond to human language 
              through advanced text processing, translation, and conversational AI technologies.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* NLP Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our NLP Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nlpServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                      <p className="text-cyan-400 font-medium">{useCase.application}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
                    <p className="text-green-400 font-semibold">Result: {useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Supported Languages
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{language}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our NLP Development Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Text Preprocessing', description: 'Clean and prepare text data for analysis', icon: FileText },
                { step: '2', title: 'Model Selection', description: 'Choose the best NLP algorithms for your needs', icon: Brain },
                { step: '3', title: 'Training & Testing', description: 'Train models and validate performance', icon: Search },
                { step: '4', title: 'Deployment', description: 'Deploy and integrate with your systems', icon: Zap }
              ].map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock the Power of Language?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our NLP experts help you build intelligent language processing systems.
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