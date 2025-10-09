'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  useCases: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup: number;
    enterprise: string;
  };
  category: string;
  icon: string;
  demoUrl?: string;
  apiDocumentation?: string;
  status: 'active' | 'beta' | 'coming-soon';
  technicalSpecs: {
    accuracy: string;
    processingTime: string;
    languages: string[];
    integrations: string[];
  };
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const aiServices: AIService[] = [
    // Natural Language Processing
    {
      id: 'nlp-sentiment-analysis',
      name: 'Advanced Sentiment Analysis Engine',
      description: 'Real-time sentiment analysis with emotion detection, intent recognition, and multi-language support for customer feedback and social media monitoring.',
      features: [
        'Real-time Sentiment Analysis',
        'Emotion Detection (7 emotions)',
        'Intent Recognition',
        'Multi-language Support (50+ languages)',
        'Custom Model Training',
        'Batch Processing',
        'API Integration',
        'Real-time Dashboards'
      ],
      useCases: [
        'Customer Feedback Analysis',
        'Social Media Monitoring',
        'Brand Reputation Management',
        'Market Research',
        'Customer Support Optimization',
        'Product Review Analysis'
      ],
      pricing: { monthly: 299, yearly: 2990, setup: 500, enterprise: 'Custom' },
      category: 'nlp',
      icon: '🧠',
      demoUrl: 'https://demo.ziontechgroup.com/sentiment-analysis',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/sentiment',
      status: 'active',
      technicalSpecs: {
        accuracy: '95.2%',
        processingTime: '< 100ms',
        languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic'],
        integrations: ['REST API', 'GraphQL', 'WebSocket', 'Webhook', 'SDK (Python, Node.js, Java)']
      }
    },
    {
      id: 'nlp-text-generation',
      name: 'AI Text Generation Suite',
      description: 'Advanced text generation with GPT-4 integration, custom model training, and content optimization for blogs, emails, and marketing materials.',
      features: [
        'GPT-4 Integration',
        'Custom Model Training',
        'Content Optimization',
        'SEO-friendly Generation',
        'Brand Voice Training',
        'Multi-format Support',
        'Plagiarism Detection',
        'Content Analytics'
      ],
      useCases: [
        'Content Marketing',
        'Email Campaigns',
        'Product Descriptions',
        'Blog Writing',
        'Social Media Posts',
        'Technical Documentation'
      ],
      pricing: { monthly: 399, yearly: 3990, setup: 1000, enterprise: 'Custom' },
      category: 'nlp',
      icon: '✍️',
      demoUrl: 'https://demo.ziontechgroup.com/text-generation',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/text-generation',
      status: 'active',
      technicalSpecs: {
        accuracy: '92.8%',
        processingTime: '< 2s',
        languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
        integrations: ['OpenAI API', 'REST API', 'WebSocket', 'SDK (Python, Node.js, Java)']
      }
    },
    {
      id: 'nlp-language-translation',
      name: 'AI Language Translation Engine',
      description: 'Real-time language translation with context awareness, industry-specific terminology, and cultural adaptation for global businesses.',
      features: [
        'Real-time Translation',
        'Context Awareness',
        'Industry-specific Terminology',
        'Cultural Adaptation',
        '100+ Language Pairs',
        'Batch Processing',
        'Quality Assurance',
        'Custom Dictionaries'
      ],
      useCases: [
        'Global Communication',
        'E-commerce Localization',
        'Document Translation',
        'Customer Support',
        'Content Localization',
        'Legal Document Translation'
      ],
      pricing: { monthly: 199, yearly: 1990, setup: 300, enterprise: 'Custom' },
      category: 'nlp',
      icon: '🌍',
      demoUrl: 'https://demo.ziontechgroup.com/translation',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/translation',
      status: 'active',
      technicalSpecs: {
        accuracy: '96.5%',
        processingTime: '< 500ms',
        languages: ['100+ languages supported'],
        integrations: ['REST API', 'WebSocket', 'SDK (Python, Node.js, Java, C#)']
      }
    },

    // Computer Vision
    {
      id: 'cv-object-detection',
      name: 'Advanced Object Detection System',
      description: 'Real-time object detection and recognition with custom model training, multi-class classification, and video processing capabilities.',
      features: [
        'Real-time Object Detection',
        'Custom Model Training',
        'Multi-class Classification',
        'Video Processing',
        'Image Segmentation',
        'Bounding Box Detection',
        'Confidence Scoring',
        'Batch Processing'
      ],
      useCases: [
        'Security Surveillance',
        'Retail Analytics',
        'Quality Control',
        'Autonomous Vehicles',
        'Medical Imaging',
        'Industrial Automation'
      ],
      pricing: { monthly: 499, yearly: 4990, setup: 1500, enterprise: 'Custom' },
      category: 'computer-vision',
      icon: '👁️',
      demoUrl: 'https://demo.ziontechgroup.com/object-detection',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/object-detection',
      status: 'active',
      technicalSpecs: {
        accuracy: '94.7%',
        processingTime: '< 200ms',
        languages: ['Python', 'JavaScript', 'C++'],
        integrations: ['REST API', 'WebSocket', 'SDK (Python, Node.js, Java)']
      }
    },
    {
      id: 'cv-facial-recognition',
      name: 'Facial Recognition & Analysis',
      description: 'Advanced facial recognition with emotion detection, age estimation, and identity verification for security and analytics applications.',
      features: [
        'Facial Recognition',
        'Emotion Detection',
        'Age Estimation',
        'Gender Classification',
        'Identity Verification',
        'Liveness Detection',
        'Privacy Protection',
        'Real-time Processing'
      ],
      useCases: [
        'Access Control',
        'Customer Analytics',
        'Security Systems',
        'Attendance Tracking',
        'Marketing Personalization',
        'Fraud Prevention'
      ],
      pricing: { monthly: 399, yearly: 3990, setup: 1000, enterprise: 'Custom' },
      category: 'computer-vision',
      icon: '👤',
      demoUrl: 'https://demo.ziontechgroup.com/facial-recognition',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/facial-recognition',
      status: 'active',
      technicalSpecs: {
        accuracy: '98.3%',
        processingTime: '< 150ms',
        languages: ['Python', 'JavaScript', 'C++'],
        integrations: ['REST API', 'WebSocket', 'SDK (Python, Node.js, Java)']
      }
    },
    {
      id: 'cv-document-analysis',
      name: 'AI Document Analysis Suite',
      description: 'Intelligent document processing with OCR, form extraction, data validation, and automated classification for business documents.',
      features: [
        'OCR (Optical Character Recognition)',
        'Form Extraction',
        'Data Validation',
        'Document Classification',
        'Handwriting Recognition',
        'Multi-format Support',
        'Batch Processing',
        'Quality Assurance'
      ],
      useCases: [
        'Invoice Processing',
        'Contract Analysis',
        'Medical Records',
        'Legal Documents',
        'Insurance Claims',
        'Financial Reports'
      ],
      pricing: { monthly: 299, yearly: 2990, setup: 500, enterprise: 'Custom' },
      category: 'computer-vision',
      icon: '📄',
      demoUrl: 'https://demo.ziontechgroup.com/document-analysis',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/document-analysis',
      status: 'active',
      technicalSpecs: {
        accuracy: '97.1%',
        processingTime: '< 3s',
        languages: ['English', 'Spanish', 'French', 'German', 'Chinese'],
        integrations: ['REST API', 'WebSocket', 'SDK (Python, Node.js, Java)']
      }
    },

    // Machine Learning
    {
      id: 'ml-predictive-analytics',
      name: 'Predictive Analytics Platform',
      description: 'Advanced machine learning platform for predictive modeling, forecasting, and data-driven decision making with automated model selection.',
      features: [
        'Predictive Modeling',
        'Automated Model Selection',
        'Time Series Forecasting',
        'Anomaly Detection',
        'Feature Engineering',
        'Model Validation',
        'Real-time Predictions',
        'A/B Testing'
      ],
      useCases: [
        'Sales Forecasting',
        'Risk Assessment',
        'Demand Planning',
        'Customer Churn Prediction',
        'Fraud Detection',
        'Market Analysis'
      ],
      pricing: { monthly: 599, yearly: 5990, setup: 2000, enterprise: 'Custom' },
      category: 'machine-learning',
      icon: '📊',
      demoUrl: 'https://demo.ziontechgroup.com/predictive-analytics',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/predictive-analytics',
      status: 'active',
      technicalSpecs: {
        accuracy: '89.4%',
        processingTime: '< 5s',
        languages: ['Python', 'R', 'SQL'],
        integrations: ['REST API', 'GraphQL', 'SDK (Python, R, Java)']
      }
    },
    {
      id: 'ml-recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Intelligent recommendation system with collaborative filtering, content-based filtering, and hybrid approaches for personalized user experiences.',
      features: [
        'Collaborative Filtering',
        'Content-based Filtering',
        'Hybrid Approaches',
        'Real-time Recommendations',
        'A/B Testing',
        'Cold Start Handling',
        'Scalable Architecture',
        'Custom Algorithms'
      ],
      useCases: [
        'E-commerce Recommendations',
        'Content Personalization',
        'Product Suggestions',
        'Movie/Music Recommendations',
        'News Personalization',
        'Job Matching'
      ],
      pricing: { monthly: 399, yearly: 3990, setup: 1000, enterprise: 'Custom' },
      category: 'machine-learning',
      icon: '🎯',
      demoUrl: 'https://demo.ziontechgroup.com/recommendation-engine',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/recommendation-engine',
      status: 'active',
      technicalSpecs: {
        accuracy: '91.7%',
        processingTime: '< 100ms',
        languages: ['Python', 'Java', 'Scala'],
        integrations: ['REST API', 'GraphQL', 'SDK (Python, Java, Node.js)']
      }
    },
    {
      id: 'ml-anomaly-detection',
      name: 'Anomaly Detection System',
      description: 'Advanced anomaly detection with unsupervised learning, real-time monitoring, and automated alerting for security and quality control.',
      features: [
        'Unsupervised Learning',
        'Real-time Monitoring',
        'Automated Alerting',
        'Multi-dimensional Analysis',
        'Adaptive Thresholds',
        'False Positive Reduction',
        'Historical Analysis',
        'Custom Models'
      ],
      useCases: [
        'Fraud Detection',
        'Network Security',
        'Quality Control',
        'Equipment Monitoring',
        'Financial Anomalies',
        'User Behavior Analysis'
      ],
      pricing: { monthly: 299, yearly: 2990, setup: 800, enterprise: 'Custom' },
      category: 'machine-learning',
      icon: '🚨',
      demoUrl: 'https://demo.ziontechgroup.com/anomaly-detection',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/anomaly-detection',
      status: 'active',
      technicalSpecs: {
        accuracy: '93.8%',
        processingTime: '< 200ms',
        languages: ['Python', 'Java', 'Scala'],
        integrations: ['REST API', 'WebSocket', 'SDK (Python, Java, Node.js)']
      }
    },

    // Conversational AI
    {
      id: 'conversational-chatbot',
      name: 'Advanced Conversational AI',
      description: 'Intelligent chatbot with natural language understanding, multi-turn conversations, and seamless human handoff for customer service automation.',
      features: [
        'Natural Language Understanding',
        'Multi-turn Conversations',
        'Context Awareness',
        'Human Handoff',
        'Multi-channel Support',
        'Sentiment Analysis',
        'Custom Training',
        'Analytics Dashboard'
      ],
      useCases: [
        'Customer Support',
        'Sales Assistance',
        'Lead Qualification',
        'FAQ Automation',
        'Appointment Scheduling',
        'Order Processing'
      ],
      pricing: { monthly: 199, yearly: 1990, setup: 500, enterprise: 'Custom' },
      category: 'conversational-ai',
      icon: '💬',
      demoUrl: 'https://demo.ziontechgroup.com/chatbot',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/chatbot',
      status: 'active',
      technicalSpecs: {
        accuracy: '94.2%',
        processingTime: '< 500ms',
        languages: ['50+ languages'],
        integrations: ['REST API', 'WebSocket', 'SDK (Python, Node.js, Java)']
      }
    },
    {
      id: 'conversational-voice-ai',
      name: 'Voice AI Assistant',
      description: 'Advanced voice AI with speech recognition, text-to-speech, and natural language processing for voice-enabled applications.',
      features: [
        'Speech Recognition',
        'Text-to-Speech',
        'Natural Language Processing',
        'Voice Cloning',
        'Multi-language Support',
        'Real-time Processing',
        'Custom Voice Training',
        'Noise Cancellation'
      ],
      useCases: [
        'Voice Assistants',
        'Call Center Automation',
        'Interactive Voice Response',
        'Accessibility Tools',
        'Language Learning',
        'Voice Commands'
      ],
      pricing: { monthly: 299, yearly: 2990, setup: 800, enterprise: 'Custom' },
      category: 'conversational-ai',
      icon: '🎤',
      demoUrl: 'https://demo.ziontechgroup.com/voice-ai',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/voice-ai',
      status: 'active',
      technicalSpecs: {
        accuracy: '96.8%',
        processingTime: '< 1s',
        languages: ['30+ languages'],
        integrations: ['WebRTC', 'REST API', 'SDK (Python, Node.js, Java)']
      }
    },

    // Data Processing
    {
      id: 'data-processing-etl',
      name: 'AI-Powered ETL Pipeline',
      description: 'Intelligent Extract, Transform, Load pipeline with data validation, cleansing, and automated schema detection for big data processing.',
      features: [
        'Automated Schema Detection',
        'Data Validation & Cleansing',
        'Real-time Processing',
        'Error Handling',
        'Data Quality Metrics',
        'Scalable Architecture',
        'Custom Transformations',
        'Monitoring & Alerting'
      ],
      useCases: [
        'Data Migration',
        'Data Warehousing',
        'Real-time Analytics',
        'Data Integration',
        'ETL Automation',
        'Data Quality Management'
      ],
      pricing: { monthly: 399, yearly: 3990, setup: 1000, enterprise: 'Custom' },
      category: 'data-processing',
      icon: '🔄',
      demoUrl: 'https://demo.ziontechgroup.com/etl-pipeline',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/etl-pipeline',
      status: 'active',
      technicalSpecs: {
        accuracy: '99.1%',
        processingTime: 'Variable',
        languages: ['Python', 'Java', 'Scala', 'SQL'],
        integrations: ['Apache Spark', 'Kafka', 'REST API', 'SDK (Python, Java)']
      }
    },
    {
      id: 'data-processing-streaming',
      name: 'Real-time Data Streaming',
      description: 'High-performance real-time data streaming with Apache Kafka integration, stream processing, and real-time analytics.',
      features: [
        'Real-time Streaming',
        'Apache Kafka Integration',
        'Stream Processing',
        'Real-time Analytics',
        'Fault Tolerance',
        'Scalable Architecture',
        'Custom Processors',
        'Monitoring Dashboard'
      ],
      useCases: [
        'Real-time Analytics',
        'IoT Data Processing',
        'Financial Trading',
        'Social Media Monitoring',
        'Log Analysis',
        'Event Processing'
      ],
      pricing: { monthly: 499, yearly: 4990, setup: 1500, enterprise: 'Custom' },
      category: 'data-processing',
      icon: '⚡',
      demoUrl: 'https://demo.ziontechgroup.com/data-streaming',
      apiDocumentation: 'https://api.ziontechgroup.com/docs/data-streaming',
      status: 'active',
      technicalSpecs: {
        accuracy: '99.8%',
        processingTime: '< 10ms',
        languages: ['Python', 'Java', 'Scala', 'Kotlin'],
        integrations: ['Apache Kafka', 'Apache Flink', 'REST API', 'SDK (Python, Java)']
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: '🤖' },
    { id: 'nlp', name: 'Natural Language Processing', icon: '🧠' },
    { id: 'computer-vision', name: 'Computer Vision', icon: '👁️' },
    { id: 'machine-learning', name: 'Machine Learning', icon: '📊' },
    { id: 'conversational-ai', name: 'Conversational AI', icon: '💬' },
    { id: 'data-processing', name: 'Data Processing', icon: '🔄' }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactClick = (service: AIService) => {
    const message = `Hi! I'm interested in the ${service.name} AI service. Can you provide more information about implementation and custom pricing?`;
    const whatsappUrl = `https://wa.me/13024640950?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Cutting-Edge Artificial Intelligence for Enterprise
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our comprehensive suite of AI services. From natural language processing to computer vision, 
            we provide enterprise-grade AI solutions with proven accuracy and performance.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
                🔍
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900 cyber-glow'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-cyan-400/30'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div key={service.id} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-4xl mr-4 cyber-scan-line">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      service.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {service.status === 'active' ? '✅ Production Ready' : service.status === 'beta' ? '🧪 Beta Testing' : '🚀 Coming Soon'}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Technical Specifications */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-semibold mb-3">Technical Specifications:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-cyan-400">Accuracy:</span>
                    <span className="text-white ml-2">{service.technicalSpecs.accuracy}</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">Processing Time:</span>
                    <span className="text-white ml-2">{service.technicalSpecs.processingTime}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-cyan-400">Languages:</span>
                    <span className="text-white ml-2">{service.technicalSpecs.languages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs">
                      {useCase}
                    </span>
                  ))}
                  {service.useCases.length > 3 && (
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                      +{service.useCases.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    ${service.pricing.monthly}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    or ${service.pricing.yearly}/year (save ${(service.pricing.monthly * 12) - service.pricing.yearly})
                  </div>
                  {service.pricing.setup > 0 && (
                    <div className="text-sm text-yellow-400 mt-1">
                      +${service.pricing.setup} setup fee
                    </div>
                  )}
                  <div className="text-sm text-purple-400 mt-1">
                    Enterprise: {service.pricing.enterprise}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick(service)}
                  className="w-full cyber-button text-center py-3"
                >
                  Get Started
                </button>
                
                <div className="flex gap-2">
                  {service.demoUrl && (
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      Demo
                    </a>
                  )}
                  
                  {service.apiDocumentation && (
                    <a
                      href={service.apiDocumentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
                    >
                      API Docs
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="text-center bg-white/5 rounded-2xl p-12 cyber-glow">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI experts are ready to help you implement the perfect solution for your business needs. 
            From custom model training to enterprise integration, we provide end-to-end AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center py-3 px-8"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center py-3 px-8"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 https://ziontechgroup.com</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServicesPage;