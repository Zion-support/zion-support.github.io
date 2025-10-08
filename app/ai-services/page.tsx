import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Play, Download, ExternalLink, Brain, Cpu, Eye, MessageSquare, BarChart3, Search, FileText, Image, Video, Music, Code, Database, Cloud, Lock } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All AI Services', count: 25 },
    { id: 'ml', name: 'Machine Learning', count: 8 },
    { id: 'nlp', name: 'Natural Language', count: 6 },
    { id: 'vision', name: 'Computer Vision', count: 5 },
    { id: 'automation', name: 'AI Automation', count: 6 }
  ];

  const aiServices = [
    // Machine Learning Services
    {
      id: 1,
      title: 'Predictive Analytics Engine',
      description: 'Advanced machine learning models for forecasting business trends, customer behavior, and market dynamics.',
      icon: Brain,
      price: '$2,499/month',
      originalPrice: '$4,000/month',
      features: ['Time series forecasting', 'Customer lifetime value prediction', 'Churn prediction', 'Demand forecasting', 'Risk assessment'],
      benefits: ['Increase revenue by 25%', 'Reduce customer churn by 40%', 'Optimize inventory management'],
      marketPrice: '$4,000-8,000/month',
      category: 'ml',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      demoUrl: 'https://demo.ziontechgroup.com/predictive-analytics',
      documentation: 'https://docs.ziontechgroup.com/predictive-analytics',
      rating: 4.9,
      reviews: 156,
      popular: true,
      useCases: ['Retail forecasting', 'Financial risk modeling', 'Supply chain optimization']
    },
    {
      id: 2,
      title: 'Custom ML Model Development',
      description: 'Tailored machine learning solutions designed specifically for your business needs and data.',
      icon: Cpu,
      price: '$3,999/month',
      originalPrice: '$6,000/month',
      features: ['Custom algorithm development', 'Data preprocessing', 'Model training & validation', 'API integration', 'Performance monitoring'],
      benefits: ['Perfect fit for your data', 'Competitive advantage', 'Scalable solutions'],
      marketPrice: '$6,000-15,000/month',
      category: 'ml',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes'],
      demoUrl: 'https://demo.ziontechgroup.com/custom-ml',
      documentation: 'https://docs.ziontechgroup.com/custom-ml',
      rating: 4.8,
      reviews: 89,
      popular: false,
      useCases: ['Custom recommendation systems', 'Anomaly detection', 'Pattern recognition']
    },
    {
      id: 3,
      title: 'Real-time Recommendation System',
      description: 'AI-powered recommendation engine that learns from user behavior to suggest relevant products and content.',
      icon: TrendingUp,
      price: '$1,999/month',
      originalPrice: '$3,500/month',
      features: ['Real-time recommendations', 'A/B testing framework', 'Multi-armed bandit algorithms', 'Cold start handling', 'Performance analytics'],
      benefits: ['Increase conversion by 35%', 'Improve user engagement', 'Boost average order value'],
      marketPrice: '$3,500-7,000/month',
      category: 'ml',
      technologies: ['Apache Spark', 'Redis', 'PostgreSQL', 'Python', 'Scikit-learn'],
      demoUrl: 'https://demo.ziontechgroup.com/recommendations',
      documentation: 'https://docs.ziontechgroup.com/recommendations',
      rating: 4.7,
      reviews: 203,
      popular: true,
      useCases: ['E-commerce recommendations', 'Content personalization', 'Product suggestions']
    },
    {
      id: 4,
      title: 'Anomaly Detection System',
      description: 'Advanced AI system for detecting unusual patterns and potential issues in real-time data streams.',
      icon: Shield,
      price: '$1,799/month',
      originalPrice: '$3,000/month',
      features: ['Real-time monitoring', 'Multi-dimensional analysis', 'Alert management', 'False positive reduction', 'Historical analysis'],
      benefits: ['Prevent costly failures', 'Improve security', 'Reduce maintenance costs'],
      marketPrice: '$3,000-6,000/month',
      category: 'ml',
      technologies: ['Isolation Forest', 'One-Class SVM', 'Autoencoders', 'Python', 'Apache Kafka'],
      demoUrl: 'https://demo.ziontechgroup.com/anomaly-detection',
      documentation: 'https://docs.ziontechgroup.com/anomaly-detection',
      rating: 4.8,
      reviews: 134,
      popular: false,
      useCases: ['Fraud detection', 'Equipment monitoring', 'Network security']
    },
    {
      id: 5,
      title: 'Natural Language Processing Suite',
      description: 'Comprehensive NLP solutions for text analysis, sentiment analysis, and language understanding.',
      icon: MessageSquare,
      price: '$1,499/month',
      originalPrice: '$2,500/month',
      features: ['Sentiment analysis', 'Text classification', 'Named entity recognition', 'Language translation', 'Text summarization'],
      benefits: ['Understand customer feedback', 'Automate content moderation', 'Improve communication'],
      marketPrice: '$2,500-5,000/month',
      category: 'nlp',
      technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers'],
      demoUrl: 'https://demo.ziontechgroup.com/nlp-suite',
      documentation: 'https://docs.ziontechgroup.com/nlp-suite',
      rating: 4.9,
      reviews: 187,
      popular: true,
      useCases: ['Customer support automation', 'Content analysis', 'Social media monitoring']
    },
    {
      id: 6,
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI that can handle complex queries and provide human-like responses.',
      icon: MessageSquare,
      price: '$999/month',
      originalPrice: '$1,800/month',
      features: ['Multi-turn conversations', 'Context awareness', 'Intent recognition', 'Multi-language support', 'Integration APIs'],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 assistance', 'Improve customer satisfaction'],
      marketPrice: '$1,800-4,000/month',
      category: 'nlp',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'Node.js', 'MongoDB'],
      demoUrl: 'https://demo.ziontechgroup.com/chatbot',
      documentation: 'https://docs.ziontechgroup.com/chatbot',
      rating: 4.8,
      reviews: 245,
      popular: true,
      useCases: ['Customer support', 'Sales assistance', 'Internal help desk']
    },
    {
      id: 7,
      title: 'Document Intelligence Platform',
      description: 'AI-powered document processing with OCR, data extraction, and intelligent classification.',
      icon: FileText,
      price: '$1,299/month',
      originalPrice: '$2,200/month',
      features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation', 'Multi-format support'],
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', '99.5% accuracy rate'],
      marketPrice: '$2,200-4,500/month',
      category: 'nlp',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Custom ML Models', 'Python'],
      demoUrl: 'https://demo.ziontechgroup.com/document-intelligence',
      documentation: 'https://docs.ziontechgroup.com/document-intelligence',
      rating: 4.7,
      reviews: 156,
      popular: false,
      useCases: ['Invoice processing', 'Contract analysis', 'Form automation']
    },
    {
      id: 8,
      title: 'Computer Vision Analytics',
      description: 'Advanced image and video analysis for object detection, recognition, and visual insights.',
      icon: Eye,
      price: '$2,199/month',
      originalPrice: '$3,800/month',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis', 'Real-time processing'],
      benefits: ['Automate visual inspections', 'Improve security', 'Enhance user experience'],
      marketPrice: '$3,800-7,500/month',
      category: 'vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch'],
      demoUrl: 'https://demo.ziontechgroup.com/computer-vision',
      documentation: 'https://docs.ziontechgroup.com/computer-vision',
      rating: 4.8,
      reviews: 123,
      popular: true,
      useCases: ['Quality control', 'Security monitoring', 'Medical imaging']
    },
    {
      id: 9,
      title: 'AI-Powered Image Recognition',
      description: 'Intelligent image analysis for content moderation, product identification, and visual search.',
      icon: Image,
      price: '$899/month',
      originalPrice: '$1,500/month',
      features: ['Content moderation', 'Product recognition', 'Visual search', 'Image tagging', 'Brand detection'],
      benefits: ['Automate content moderation', 'Improve search accuracy', 'Reduce manual work'],
      marketPrice: '$1,500-3,000/month',
      category: 'vision',
      technologies: ['Google Vision API', 'AWS Rekognition', 'Custom CNN Models', 'Python', 'OpenCV'],
      demoUrl: 'https://demo.ziontechgroup.com/image-recognition',
      documentation: 'https://docs.ziontechgroup.com/image-recognition',
      rating: 4.6,
      reviews: 98,
      popular: false,
      useCases: ['E-commerce search', 'Content filtering', 'Brand monitoring']
    },
    {
      id: 10,
      title: 'Video Analytics Platform',
      description: 'AI-driven video analysis for surveillance, content analysis, and real-time monitoring.',
      icon: Video,
      price: '$1,599/month',
      originalPrice: '$2,800/month',
      features: ['Real-time video analysis', 'Motion detection', 'Object tracking', 'Behavior analysis', 'Alert system'],
      benefits: ['Enhance security', 'Automate monitoring', 'Reduce false alarms'],
      marketPrice: '$2,800-5,500/month',
      category: 'vision',
      technologies: ['OpenCV', 'FFmpeg', 'TensorFlow', 'CUDA', 'Python'],
      demoUrl: 'https://demo.ziontechgroup.com/video-analytics',
      documentation: 'https://docs.ziontechgroup.com/video-analytics',
      rating: 4.7,
      reviews: 87,
      popular: false,
      useCases: ['Security surveillance', 'Traffic monitoring', 'Retail analytics']
    },
    {
      id: 11,
      title: 'AI Process Automation Engine',
      description: 'Intelligent automation platform that can handle complex business processes with decision-making capabilities.',
      icon: Zap,
      price: '$2,999/month',
      originalPrice: '$5,000/month',
      features: ['Process automation', 'Decision automation', 'Exception handling', 'Integration management', 'Workflow optimization'],
      benefits: ['Reduce process time by 70%', 'Eliminate human errors', 'Improve efficiency'],
      marketPrice: '$5,000-10,000/month',
      category: 'automation',
      technologies: ['RPA', 'Machine Learning', 'Python', 'Node.js', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/process-automation',
      documentation: 'https://docs.ziontechgroup.com/process-automation',
      rating: 4.9,
      reviews: 178,
      popular: true,
      useCases: ['Invoice processing', 'Customer onboarding', 'Data entry automation']
    },
    {
      id: 12,
      title: 'Intelligent Data Processing',
      description: 'AI-powered data cleaning, transformation, and analysis with automated insights generation.',
      icon: Database,
      price: '$1,799/month',
      originalPrice: '$3,200/month',
      features: ['Data cleaning', 'ETL automation', 'Data validation', 'Anomaly detection', 'Automated reporting'],
      benefits: ['Process data 10x faster', 'Improve data quality', 'Reduce manual errors'],
      marketPrice: '$3,200-6,500/month',
      category: 'automation',
      technologies: ['Apache Airflow', 'Python', 'Pandas', 'PostgreSQL', 'Custom ML Models'],
      demoUrl: 'https://demo.ziontechgroup.com/data-processing',
      documentation: 'https://docs.ziontechgroup.com/data-processing',
      rating: 4.8,
      reviews: 145,
      popular: false,
      useCases: ['Data warehousing', 'ETL pipelines', 'Data quality management']
    },
    {
      id: 13,
      title: 'AI-Powered Search Engine',
      description: 'Intelligent search solution with semantic understanding, auto-complete, and personalized results.',
      icon: Search,
      price: '$1,399/month',
      originalPrice: '$2,400/month',
      features: ['Semantic search', 'Auto-complete', 'Personalized results', 'Multi-language support', 'Analytics dashboard'],
      benefits: ['Improve search accuracy', 'Increase user engagement', 'Reduce bounce rate'],
      marketPrice: '$2,400-4,800/month',
      category: 'nlp',
      technologies: ['Elasticsearch', 'BERT', 'Vector Search', 'Python', 'React'],
      demoUrl: 'https://demo.ziontechgroup.com/ai-search',
      documentation: 'https://docs.ziontechgroup.com/ai-search',
      rating: 4.7,
      reviews: 167,
      popular: false,
      useCases: ['E-commerce search', 'Knowledge base', 'Content discovery']
    },
    {
      id: 14,
      title: 'Predictive Maintenance AI',
      description: 'Machine learning-powered equipment monitoring and predictive maintenance scheduling.',
      icon: Cpu,
      price: '$2,499/month',
      originalPrice: '$4,200/month',
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'Cost optimization', 'Alert system'],
      benefits: ['Reduce downtime by 70%', 'Lower maintenance costs', 'Extend equipment life'],
      marketPrice: '$4,200-8,500/month',
      category: 'ml',
      technologies: ['IoT Sensors', 'Machine Learning', 'Python', 'React', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/predictive-maintenance',
      documentation: 'https://docs.ziontechgroup.com/predictive-maintenance',
      rating: 4.8,
      reviews: 112,
      popular: true,
      useCases: ['Manufacturing equipment', 'Fleet management', 'Infrastructure monitoring']
    },
    {
      id: 15,
      title: 'AI Content Generation',
      description: 'Advanced AI system for creating high-quality content including text, images, and multimedia.',
      icon: FileText,
      price: '$1,199/month',
      originalPrice: '$2,000/month',
      features: ['Text generation', 'Image creation', 'Video editing', 'Content optimization', 'Brand consistency'],
      benefits: ['Create content 5x faster', 'Maintain brand consistency', 'Reduce creative costs'],
      marketPrice: '$2,000-4,000/month',
      category: 'nlp',
      technologies: ['GPT-4', 'DALL-E', 'Stable Diffusion', 'Python', 'React'],
      demoUrl: 'https://demo.ziontechgroup.com/content-generation',
      documentation: 'https://docs.ziontechgroup.com/content-generation',
      rating: 4.9,
      reviews: 234,
      popular: true,
      useCases: ['Marketing content', 'Blog posts', 'Social media content']
    },
    {
      id: 16,
      title: 'AI Security Monitoring',
      description: 'Intelligent security system with threat detection, vulnerability scanning, and incident response.',
      icon: Lock,
      price: '$2,799/month',
      originalPrice: '$4,500/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security reporting'],
      benefits: ['Prevent 95% of security breaches', 'Reduce response time by 80%', 'Ensure compliance'],
      marketPrice: '$4,500-9,000/month',
      category: 'ml',
      technologies: ['SIEM', 'EDR', 'Machine Learning', 'Python', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/security-monitoring',
      documentation: 'https://docs.ziontechgroup.com/security-monitoring',
      rating: 4.9,
      reviews: 198,
      popular: true,
      useCases: ['Cybersecurity', 'Threat hunting', 'Compliance management']
    },
    {
      id: 17,
      title: 'AI Voice Processing',
      description: 'Advanced voice recognition, synthesis, and analysis for speech-to-text and voice commands.',
      icon: Music,
      price: '$1,599/month',
      originalPrice: '$2,700/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support', 'Real-time processing'],
      benefits: ['Improve accessibility', 'Enable voice interfaces', 'Automate transcription'],
      marketPrice: '$2,700-5,400/month',
      category: 'nlp',
      technologies: ['Whisper', 'TTS', 'Speech Recognition', 'Python', 'WebRTC'],
      demoUrl: 'https://demo.ziontechgroup.com/voice-processing',
      documentation: 'https://docs.ziontechgroup.com/voice-processing',
      rating: 4.7,
      reviews: 89,
      popular: false,
      useCases: ['Voice assistants', 'Transcription services', 'Accessibility tools']
    },
    {
      id: 18,
      title: 'AI Business Intelligence',
      description: 'Intelligent analytics platform with automated insights, reporting, and data visualization.',
      icon: BarChart3,
      price: '$2,199/month',
      originalPrice: '$3,800/month',
      features: ['Automated insights', 'Predictive analytics', 'Custom dashboards', 'Data visualization', 'Report automation'],
      benefits: ['Make data-driven decisions', 'Discover hidden patterns', 'Automate reporting'],
      marketPrice: '$3,800-7,500/month',
      category: 'ml',
      technologies: ['Tableau', 'Power BI', 'Python', 'Machine Learning', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/business-intelligence',
      documentation: 'https://docs.ziontechgroup.com/business-intelligence',
      rating: 4.8,
      reviews: 167,
      popular: true,
      useCases: ['Business analytics', 'Performance monitoring', 'Strategic planning']
    },
    {
      id: 19,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure with auto-scaling, monitoring, and optimization for ML workloads.',
      icon: Cloud,
      price: '$1,899/month',
      originalPrice: '$3,200/month',
      features: ['Auto-scaling', 'GPU optimization', 'Model serving', 'Monitoring', 'Cost optimization'],
      benefits: ['Scale automatically', 'Optimize costs', 'Improve performance'],
      marketPrice: '$3,200-6,500/month',
      category: 'automation',
      technologies: ['Kubernetes', 'Docker', 'TensorFlow Serving', 'AWS/GCP/Azure', 'Python'],
      demoUrl: 'https://demo.ziontechgroup.com/ai-infrastructure',
      documentation: 'https://docs.ziontechgroup.com/ai-infrastructure',
      rating: 4.6,
      reviews: 134,
      popular: false,
      useCases: ['ML model deployment', 'AI workload management', 'Cloud optimization']
    },
    {
      id: 20,
      title: 'AI Code Generation',
      description: 'Intelligent code generation and assistance for developers with automated testing and optimization.',
      icon: Code,
      price: '$1,299/month',
      originalPrice: '$2,200/month',
      features: ['Code generation', 'Bug detection', 'Code optimization', 'Test generation', 'Documentation'],
      benefits: ['Accelerate development', 'Improve code quality', 'Reduce bugs'],
      marketPrice: '$2,200-4,500/month',
      category: 'automation',
      technologies: ['GitHub Copilot', 'OpenAI Codex', 'Custom Models', 'Python', 'VS Code'],
      demoUrl: 'https://demo.ziontechgroup.com/code-generation',
      documentation: 'https://docs.ziontechgroup.com/code-generation',
      rating: 4.8,
      reviews: 189,
      popular: true,
      useCases: ['Software development', 'Code review', 'Automated testing']
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="ai services, machine learning, natural language processing, computer vision, ai automation, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Matrix background */}
        <div className="absolute inset-0 matrix-bg"></div>
        
        {/* Quantum particles */}
        <div className="quantum-particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="quantum-particle" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
        <div className="quantum-particle" style={{ top: '40%', left: '80%', animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">AI Services</span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive artificial intelligence services including machine learning, natural language processing, 
            computer vision, and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Brain className="w-5 h-5" />
              <span className="text-lg font-semibold">25+ AI Solutions</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Zap className="w-5 h-5" />
              <span className="text-lg font-semibold">Enterprise Ready</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-5 h-5" />
              <span className="text-lg font-semibold">Secure & Scalable</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon text-lg px-8 py-4">
              Start AI Transformation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black/20 backdrop-blur-md border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-black/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`card-futuristic group cursor-pointer ${
                  hoveredCard === service.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Service Icon */}
                <div className="flex justify-center mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-center leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-300">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-purple-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full btn-neon text-sm py-2">
                    Get Started
                  </button>
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1 py-1 px-2 bg-black/50 border border-cyan-500/30 rounded text-cyan-400 hover:bg-cyan-500/10 transition-colors text-xs"
                    >
                      <Play className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1 py-1 px-2 bg-black/50 border border-purple-500/30 rounded text-purple-400 hover:bg-purple-500/10 transition-colors text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Docs</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders who are already leveraging our AI services to drive innovation, 
            efficiency, and growth in their organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon text-lg px-8 py-4">
              Start AI Journey
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg"
            >
              📞 Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
