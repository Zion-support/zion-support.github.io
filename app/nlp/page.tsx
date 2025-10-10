'use client';
import React from 'react';
import { Globe, Search, Bot, FileText, CheckCircle, Phone } from 'lucide-react';;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
const NLPPage: React.FC = () => {,
  const services = [,
    {,
      title: 'Text Analysis',
      description: 'Extract insights from unstructured text data with advanced NLP techniques',
      features: ['Sentiment Analysis', 'Entity Recognition', 'Topic Modeling', 'Text Classification'],
      icon: FileText;
      color: 'text-blue-400',
    },
    {
      title: 'Language Translation',
      description: 'Real-time translation across 100+ languages with high accuracy',
      features: ['Multi-language Support', 'Context-aware Translation', 'Custom Models', 'API Integration'],
      icon: Globe;
      color: 'text-green-400',
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational AI that understands and responds naturally',
      features: ['Natural Language Understanding', 'Context Management', 'Multi-turn Conversations', 'Integration APIs'],
      icon: Bot;
      color: 'text-purple-400',
    },
    {
      title: 'Document Processing',
      description: 'Automated extraction and analysis of information from documents',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Knowledge Graphs'],
      icon: Search;
      color: 'text-cyan-400',
    }
  ];

  const benefits = [
    'Process 10,000+ documents per hour',
    'Achieve 95% accuracy in text analysis',
    'Support 100+ languages automatically',
    'Reduce manual processing by 80%',
    'Enable 24/7 multilingual customer support'
  ];

  return(<>
      <SEOOptimizer;
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions including text analysis, language translation, chatbot development, and document processing. Transform text data into actionable insights."
        keywords={['natural language processing', 'NLP', 'text analysis', 'language translation', 'chatbot development', 'document processing']}
        canonicalUrl="https: //ziontechgroup.com/nlp",
      />,
      <PerformanceOptimizer;
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer;
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer;
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
        <Navigation />

        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</main>
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Natural Language Processing">Natural Language Processing</h1><p className="text-xl text-cyan-400 mb-8 font-medium">Advanced Text Intelligence Solutions</p><p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">Transform unstructured text data into actionable insights with our advanced NLP solutions.
              From sentiment analysis to multilingual translation, we help you understand and process</p>
              human language at scale.</p>
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our NLP Services<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((service, index) => (</div>
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Natural Language Processing">
              Natural Language Processing;
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Advanced Text Intelligence Solutions;
            </p>,
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">,
              Transform unstructured text data into actionable insights with our advanced NLP solutions.,
              From sentiment analysis to multilingual translation, we help you understand and process;
              human language at scale.
            </p>
          </section>

          {/* Services */})
          <section className="mb-16">)
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our NLP Services</h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover: scale-105 transition-all duration-300">,
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our NLP Services</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((service, index) => (</section>
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <service.icon className={`w-16 h-16 ${service.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text text-center">{service.title}</h3><p className="text-gray-300 mb-4 text-sm text-center leading-relaxed">{service.description}</p><ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl font-bold text-white mb-6 text-center neon-text">Why Choose Our NLP Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits<ul className="space-y-3">{benefits.map((benefit, index) => (</ul>
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,
                <div>,
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits</h3>,
                  <ul className="space-y-3">,
                    {benefits.map((benefit, index) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits</h3><ul className="space-y-3">{benefits.map((benefit, index) => (</ul>
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div></div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Our Process</h3>
                  <div className="space-y-4"></div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Data Preparation<p className="text-sm text-gray-300">Clean and preprocess your text data</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Model Training<p className="text-sm text-gray-300">Train custom NLP models for your domain</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-green-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Integration<p className="text-sm text-gray-300">Deploy and integrate with your systems</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Optimization<p className="text-sm text-gray-300">Continuous monitoring and improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Unlock the Power of Text Data?</h2><p className="text-lg text-gray-300 mb-8">Our NLP experts are ready to help you extract valuable insights from your text data.</p>
                Contact us today for a free consultation and discover the potential of natural language processing.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Get Free Consultation</a>
                >
                  Get Free Consultation;
                </a>
                <a;
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" >Call +1 302 464 0950</Phone>
                </Phone>
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950;
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>,
    </>,
  );
};

export default NLPPage;