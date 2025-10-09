'use client';
import React from 'react';
import { MessageSquare, Brain, Globe, Bot, ArrowRight, CheckCircle, Star, Users, Award, Phone, Mail, MapPin } from 'lucide-react';
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
      description: 'Extract insights from unstructured text data using advanced NLP techniques',
      icon: MessageSquare,
      features: ['Sentiment Analysis', 'Entity Recognition', 'Topic Modeling', 'Text Classification'],
      benefits: ['90% accuracy in sentiment detection', 'Automated content categorization', 'Real-time insights']
    },
    {
      title: 'Language Translation',
      description: 'Multi-language translation and localization services powered by AI',
      icon: Globe,
      features: ['100+ Languages', 'Context-Aware Translation', 'Real-time Processing', 'Custom Models'],
      benefits: ['95% translation accuracy', 'Cultural context preservation', 'Seamless integration']
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational AI for customer service and support',
      icon: Bot,
      features: ['Natural Conversations', 'Intent Recognition', 'Multi-turn Dialogues', 'Integration APIs'],
      benefits: ['80% query resolution rate', '24/7 availability', 'Reduced support costs']
    },
    {
      title: 'Document Processing',
      description: 'Automated document analysis and information extraction',
      icon: Brain,
      features: ['OCR Integration', 'Form Recognition', 'Data Extraction', 'Document Classification'],
      benefits: ['70% reduction in manual processing', 'Improved accuracy', 'Faster document handling']
    }
  ];

  const applications = [
    {
      industry: 'Customer Service',
      description: 'Automated support, sentiment analysis, and intelligent routing',
      results: '60% reduction in response time'
    },
    {
      industry: 'Content Management',
      description: 'Content categorization, tagging, and automated moderation',
      results: '50% improvement in content organization'
    },
    {
      industry: 'E-commerce',
      description: 'Product reviews analysis, recommendation systems, and search optimization',
      results: '40% increase in customer satisfaction'
    },
    {
      industry: 'Healthcare',
      description: 'Medical record analysis, patient communication, and clinical documentation',
      results: '30% improvement in documentation accuracy'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions including text analysis, language translation, chatbot development, and document processing for enterprise applications."
        keywords={['natural language processing', 'NLP', 'text analysis', 'chatbot development', 'language translation']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="Natural Language Processing"
              >
                Natural Language Processing
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Advanced Text Understanding & Processing
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Unlock the power of human language with our advanced NLP solutions. From text analysis to 
                intelligent chatbots, we help businesses understand and process natural language at scale.
              </p>
            </div>
          </section>

          {/* NLP Services Section */}
          <section className="mb-16" aria-labelledby="nlp-services-heading">
            <h2 id="nlp-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our NLP Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive natural language processing solutions for modern businesses
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {nlpServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
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
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="mb-16" aria-labelledby="applications-heading">
            <h2 id="applications-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Real-world NLP applications across various industries
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {applications.map((application, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{application.industry}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {application.description}
                  </p>
                  <div className="text-center">
                    <div className="text-blue-400 font-semibold text-sm">
                      {application.results}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Why Choose Our NLP Solutions */}
          <section className="mb-16" aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our NLP Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced AI Models</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  State-of-the-art transformer models and custom NLP architectures for superior performance
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Multilingual Support</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Support for 100+ languages with cultural context understanding and localization
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  90%+ accuracy across NLP tasks with measurable business impact and ROI
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Harness the Power of Language?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
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