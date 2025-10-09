'use client';
import React from 'react';
import { MessageSquare, Brain, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const NLPPage: React.FC = () => {
  const nlpServices = [
    {
      title: 'Text Analysis',
      description: 'Extract meaningful insights from unstructured text data',
      features: ['Sentiment Analysis', 'Topic Modeling', 'Entity Recognition', 'Text Classification']
    },
    {
      title: 'Language Understanding',
      description: 'Build systems that comprehend human language',
      features: ['Intent Recognition', 'Context Understanding', 'Language Translation', 'Question Answering']
    },
    {
      title: 'Conversational AI',
      description: 'Create intelligent chatbots and virtual assistants',
      features: ['Chatbot Development', 'Voice Assistants', 'Multi-language Support', 'Context Management']
    },
    {
      title: 'Content Generation',
      description: 'Generate human-like text content automatically',
      features: ['Article Writing', 'Product Descriptions', 'Email Generation', 'Social Media Content']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Natural Language Processing - Zion Tech Group"
        description="Advanced NLP solutions including text analysis, language understanding, conversational AI, and content generation. Transform text data into actionable insights."
        keywords={['natural language processing', 'NLP', 'text analysis', 'chatbot', 'language understanding', 'AI text']}
        canonicalUrl="https://ziontechgroup.com/nlp"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Natural Language Processing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of human language with our advanced NLP solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nlpServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your NLP needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NLPPage;