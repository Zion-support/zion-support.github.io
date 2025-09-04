import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Zap, Shield, Eye, Mic, TrendingUp, Database, FileText, Mail, Code, Cog, Search } from 'lucide-react';

export default function AIServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const aiServices = [
    {
      icon: Brain,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and automated customer service solutions that reduce response times by 80% and improve customer satisfaction.',
      features: [
        'Natural language processing and understanding',
        'Multi-channel support (chat, email, phone)',
        'Human-in-the-loop escalation',
        'Knowledge base integration and mining',
        'Sentiment analysis and mood detection',
        '24/7 availability with instant responses'
      ],
      pricing: '$2,000 – $8,000 setup',
      perUnit: '$0.02 – $0.20 per session',
      timeline: '4–8 weeks',
      benefits: [
        '80% reduction in response time',
        '60% decrease in support costs',
        '24/7 customer availability',
        'Improved customer satisfaction scores'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Predictive Analytics & Forecasting',
      description: 'Advanced machine learning models for demand forecasting, revenue prediction, and business intelligence.',
      features: [
        'Time-series forecasting and analysis',
        'Demand prediction and inventory optimization',
        'Revenue and churn prediction models',
        'Supply chain risk assessment',
        'Market trend analysis',
        'Real-time dashboard and alerts'
      ],
      pricing: '$4,000 – $20,000 project',
      perUnit: 'Custom pricing based on data volume',
      timeline: '6–12 weeks',
      benefits: [
        '95% accuracy in demand forecasting',
        '30% reduction in inventory costs',
        'Early warning system for business risks',
        'Data-driven decision making'
      ]
    },
    {
      icon: Eye,
      name: 'Computer Vision & Image Recognition',
      description: 'Custom computer vision solutions for quality control, object detection, and automated visual inspection.',
      features: [
        'Real-time image and video analysis',
        'Object detection and classification',
        'Quality control and defect detection',
        'Facial recognition and biometric authentication',
        'OCR and document processing',
        'Custom model training and deployment'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.01 – $0.10 per image',
      timeline: '4–10 weeks',
      benefits: [
        '99% accuracy in quality control',
        '50% reduction in inspection time',
        'Automated defect detection',
        'Scalable visual processing'
      ]
    },
    {
      icon: Mic,
      name: 'Speech & Voice AI Solutions',
      description: 'Advanced speech recognition, voice synthesis, and conversational AI for enhanced user experiences.',
      features: [
        'Speech-to-text and text-to-speech',
        'Voice command recognition',
        'Multi-language support',
        'Emotion detection in voice',
        'Real-time transcription',
        'Custom voice model training'
      ],
      pricing: '$2,500 – $12,000 setup',
      perUnit: '$0.05 – $0.25 per minute',
      timeline: '3–8 weeks',
      benefits: [
        '95% accuracy in speech recognition',
        'Multi-language support',
        'Real-time processing',
        'Enhanced accessibility'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Data Processing',
      description: 'AI-powered data extraction, cleaning, and analysis to transform raw data into actionable insights.',
      features: [
        'Automated data extraction and parsing',
        'Data cleaning and normalization',
        'Pattern recognition and anomaly detection',
        'Automated report generation',
        'Data visualization and dashboards',
        'Integration with existing systems'
      ],
      pricing: '$1,500 – $8,000 setup',
      perUnit: '$0.01 – $0.05 per record',
      timeline: '2–6 weeks',
      benefits: [
        '90% reduction in data processing time',
        'Automated data quality assurance',
        'Real-time insights and reporting',
        'Scalable data processing'
      ]
    },
    {
      icon: FileText,
      name: 'Document Intelligence & NLP',
      description: 'Natural language processing for document analysis, content extraction, and automated text processing.',
      features: [
        'Document classification and routing',
        'Named entity recognition',
        'Sentiment analysis and text mining',
        'Automated summarization',
        'Language translation',
        'Content generation and optimization'
      ],
      pricing: '$2,000 – $10,000 setup',
      perUnit: '$0.02 – $0.15 per document',
      timeline: '3–8 weeks',
      benefits: [
        '85% accuracy in document processing',
        'Automated content analysis',
        'Multi-language support',
        'Intelligent document routing'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, natural language processing, and predictive analytics." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, predictive analytics, AI consulting" />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
        <meta property="og:title" content="AI Services - Zion Tech Group | Artificial Intelligence Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, and predictive analytics." />
        <meta property="og:url" content={`${contact.site}/ai-services`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get AI Consultation
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From machine learning to computer vision, our AI services are designed to solve real business problems and drive measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Setup Cost</p>
                        <p className="font-semibold text-gray-900">{service.pricing}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Timeline</p>
                        <p className="font-semibold text-gray-900">{service.timeline}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Process Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your AI solutions deliver real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Discovery</h3>
                <p className="text-gray-600">We analyze your business needs and identify AI opportunities.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Development</h3>
                <p className="text-gray-600">We build and train custom AI models for your specific use case.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Integration</h3>
                <p className="text-gray-600">We integrate AI solutions into your existing systems and workflows.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Optimization</h3>
                <p className="text-gray-600">We continuously monitor and optimize performance for maximum ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8">
              Let our AI experts help you identify opportunities and build solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule AI Consultation
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}