import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, ArrowRight, Mail, BarChart3, MessageSquare, Phone, MapPin, Eye, FileText, Target, Mic, Shield, PenTool, Atom } from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms with 99.5% accuracy.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Multi-language Support', 'Learning Capabilities'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    popular: true,
    link: 'https://ziontechgroup.com/ai-email-responder'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence with real-time insights.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards', 'API Integration'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    popular: true,
    link: 'https://ziontechgroup.com/predictive-analytics'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities and human handoff.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Human Handoff', 'Analytics Dashboard'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    popular: true,
    link: 'https://ziontechgroup.com/intelligent-chatbot'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis with object detection, facial recognition, and content moderation.',
    icon: Eye,
    features: ['Object Detection', 'Facial Recognition', 'Content Moderation', 'Quality Inspection', 'Real-time Processing'],
    pricing: '$3,000 - $15,000 project',
    category: 'Computer Vision',
    popular: true,
    link: 'https://ziontechgroup.com/computer-vision'
  },
  {
    title: 'Natural Language Processing API',
    description: 'Comprehensive NLP services including text analysis, translation, summarization, and sentiment analysis.',
    icon: FileText,
    features: ['Text Analysis', 'Translation', 'Summarization', 'Sentiment Analysis', 'Entity Recognition'],
    pricing: '$500 - $3,000/month',
    category: 'NLP',
    popular: false,
    link: 'https://ziontechgroup.com/nlp-api'
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Personalized recommendation system for e-commerce, content, and product suggestions.',
    icon: Target,
    features: ['Personalization', 'A/B Testing', 'Real-time Updates', 'Multi-channel', 'Performance Analytics'],
    pricing: '$2,500 - $12,000 project',
    category: 'Recommendation',
    popular: true,
    link: 'https://ziontechgroup.com/recommendation-engine'
  },
  {
    title: 'Voice AI Assistant',
    description: 'Advanced voice recognition and synthesis with natural conversation capabilities.',
    icon: Mic,
    features: ['Voice Recognition', 'Text-to-Speech', 'Natural Conversation', 'Multi-language', 'Custom Voices'],
    pricing: '$4,000 - $18,000 project',
    category: 'Voice AI',
    popular: false,
    link: 'https://ziontechgroup.com/voice-ai-assistant'
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document extraction, classification, and data validation with OCR capabilities.',
    icon: FileText,
    features: ['OCR Processing', 'Document Classification', 'Data Extraction', 'Validation Rules', 'Batch Processing'],
    pricing: '$1,500 - $8,000 project',
    category: 'Document AI',
    popular: true,
    link: 'https://ziontechgroup.com/ai-document-processing'
  },
  {
    title: 'Machine Learning Model Development',
    description: 'Custom ML model development and deployment for specific business use cases.',
    icon: Brain,
    features: ['Custom Models', 'Model Training', 'Deployment', 'Monitoring', 'Continuous Learning'],
    pricing: '$5,000 - $50,000 project',
    category: 'ML Development',
    popular: true,
    link: 'https://ziontechgroup.com/ml-model-development'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection and prevention using advanced machine learning algorithms.',
    icon: Shield,
    features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Compliance Reporting'],
    pricing: '$3,500 - $20,000 project',
    category: 'Security',
    popular: true,
    link: 'https://ziontechgroup.com/ai-fraud-detection'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation for marketing, social media, and documentation with human-like quality.',
    icon: PenTool,
    features: ['Content Creation', 'SEO Optimization', 'Brand Voice', 'Multi-format', 'Quality Control'],
    pricing: '$2,000 - $10,000 project',
    category: 'Content AI',
    popular: false,
    link: 'https://ziontechgroup.com/ai-content-generation'
  },
  {
    title: 'Quantum AI Solutions',
    description: 'Next-generation quantum computing applications for optimization and machine learning.',
    icon: Atom,
    features: ['Quantum Optimization', 'Quantum ML', 'Simulation', 'Research Support', 'Future-Ready'],
    pricing: '$10,000 - $100,000 project',
    category: 'Quantum AI',
    popular: false,
    link: 'https://ziontechgroup.com/quantum-ai'
  }
];

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and predictive analytics." />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Advanced AI Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cutting-edge artificial intelligence solutions to transform your business.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning to computer vision, we provide comprehensive AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  {service.popular && (
                    <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Category: {service.category}</span>
                </div>
                
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our expert AI team and discover how artificial intelligence can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}