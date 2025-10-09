'use client';
import React from 'react';
import { MessageSquare, Brain, Target, BarChart, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const NLPPage: React.FC = () => {
  const nlpServices = [
    {
      title: 'Sentiment Analysis',
      description: 'Analyze customer feedback, social media posts, and reviews to understand public opinion and brand perception.',
      features: ['Real-time Analysis', 'Multi-language Support', 'Emotion Detection', 'Trend Analysis', 'Custom Models'],
      benefits: ['Better customer insights', 'Brand monitoring', 'Risk detection', 'Market intelligence']
    },
    {
      title: 'Text Classification',
      description: 'Automatically categorize and organize large volumes of text data for better content management and discovery.',
      features: ['Document Classification', 'Topic Modeling', 'Content Tagging', 'Spam Detection', 'Priority Scoring'],
      benefits: ['Automated organization', 'Improved searchability', 'Content filtering', 'Process automation']
    },
    {
      title: 'Named Entity Recognition',
      description: 'Extract key information like names, dates, locations, and organizations from unstructured text data.',
      features: ['Entity Extraction', 'Relationship Mapping', 'Data Structuring', 'Custom Entities', 'Multi-format Support'],
      benefits: ['Structured data extraction', 'Information retrieval', 'Knowledge graphs', 'Data enrichment']
    },
    {
      title: 'Language Translation',
      description: 'Break down language barriers with advanced translation services that maintain context and cultural nuances.',
      features: ['100+ Languages', 'Real-time Translation', 'Context Preservation', 'Custom Dictionaries', 'Quality Assurance'],
      benefits: ['Global reach', 'Multilingual support', 'Cultural sensitivity', 'Accurate translations']
    },
    {
      title: 'Chatbot Development',
      description: 'Build intelligent conversational AI that understands context and provides natural, helpful responses.',
      features: ['Natural Conversations', 'Context Awareness', 'Intent Recognition', 'Multi-channel Support', 'Learning Capabilities'],
      benefits: ['24/7 customer support', 'Reduced response time', 'Consistent service', 'Cost efficiency']
    },
    {
      title: 'Text Summarization',
      description: 'Automatically generate concise summaries of long documents, articles, and reports for quick insights.',
      features: ['Extractive Summarization', 'Abstractive Summarization', 'Key Point Extraction', 'Custom Length', 'Multi-document Support'],
      benefits: ['Time savings', 'Quick insights', 'Content digest', 'Information synthesis']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Natural Language Processing (NLP) Solutions | Zion Tech Group"
        description="Advanced NLP services including sentiment analysis, text classification, language translation, and chatbot development. Transform text data into actionable insights."
        keywords={['NLP', 'natural language processing', 'sentiment analysis', 'text classification', 'language translation', 'chatbot development']}
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
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform text data into intelligent insights with advanced NLP solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our NLP experts build sophisticated language understanding systems that extract meaning, sentiment, 
              and actionable insights from text data across multiple languages and domains.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nlpServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Real-World Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-3">Customer Service</h3>
                <p className="text-gray-300 text-sm">
                  Automate customer support with intelligent chatbots that understand context and provide accurate responses.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Market Research</h3>
                <p className="text-gray-300 text-sm">
                  Analyze social media and review data to understand market sentiment and consumer preferences.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-white mb-3">Content Management</h3>
                <p className="text-gray-300 text-sm">
                  Automatically categorize and tag content for better organization and discoverability.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-white mb-3">Global Communication</h3>
                <p className="text-gray-300 text-sm">
                  Break language barriers with real-time translation and multilingual content processing.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-3">Information Extraction</h3>
                <p className="text-gray-300 text-sm">
                  Extract key information from documents, emails, and reports for automated data entry.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Business Intelligence</h3>
                <p className="text-gray-300 text-sm">
                  Generate insights from unstructured text data to support strategic decision making.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">NLP Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['BERT', 'GPT', 'Transformer', 'spaCy', 'NLTK', 'Hugging Face', 'OpenAI', 'Google Cloud NLP', 'AWS Comprehend', 'Azure Cognitive', 'Python', 'TensorFlow'].map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">🧠</div>
                  <div className="text-sm font-medium text-white">{tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Unlock Text Intelligence?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how NLP can transform your text data into actionable business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your NLP Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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