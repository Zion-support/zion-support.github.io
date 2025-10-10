'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings,
  Cpu,
  Bot,
  Sparkles,
  Layers,
  Workflow,
  BarChart3,
  Smartphone,
  Cloud,
  Lock,
  Code,
  Palette,
  Headphones,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  category: string;
  popular: boolean;
  useCases: string[];
  technologies: string[];
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const aiServices: AIService[] = [
    {
      id: '1',
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics and predictive modeling',
      features: [
        'Real-time data processing and analysis',
        'Predictive analytics and forecasting',
        'Natural language query interface',
        'Automated report generation',
        'Custom dashboard creation',
        'Machine learning model deployment',
        'Data visualization and storytelling',
        'Integration with 100+ data sources'
      ],
      benefits: [
        'Increase data-driven decisions by 400%',
        'Reduce analysis time by 75%',
        'Predict trends with 95% accuracy',
        'Automate 80% of reporting tasks'
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$5,000/month',
        enterprise: 'Custom'
      },
      category: 'Analytics',
      popular: true,
      useCases: ['Financial forecasting', 'Customer behavior analysis', 'Market trend prediction', 'Operational optimization'],
      technologies: ['TensorFlow', 'PyTorch', 'Apache Spark', 'Tableau', 'Power BI']
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'Conversational AI & Chatbots',
      description: 'Build intelligent chatbots and virtual assistants that understand context and provide human-like interactions',
      features: [
        'Natural language processing (NLP)',
        'Multi-language support (50+ languages)',
        'Context-aware conversations',
        'Sentiment analysis and emotion detection',
        'Voice and text integration',
        'Custom knowledge base training',
        'API integration capabilities',
        'Real-time learning and improvement'
      ],
      benefits: [
        'Reduce customer service costs by 60%',
        'Handle 10x more inquiries simultaneously',
        'Achieve 95% customer satisfaction',
        'Available 24/7 without breaks'
      ],
      pricing: {
        starter: '$1,800/month',
        professional: '$3,500/month',
        enterprise: 'Custom'
      },
      category: 'Communication',
      popular: true,
      useCases: ['Customer support', 'Lead qualification', 'Internal helpdesk', 'E-commerce assistance'],
      technologies: ['OpenAI GPT-4', 'Google Dialogflow', 'Microsoft Bot Framework', 'Rasa']
    },
    {
      id: '3',
      icon: Eye,
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced image and video analysis using deep learning for object detection, classification, and analysis',
      features: [
        'Object detection and recognition',
        'Facial recognition and analysis',
        'OCR and document processing',
        'Quality control and inspection',
        'Video content analysis',
        'Real-time image processing',
        'Custom model training',
        'API and SDK integration'
      ],
      benefits: [
        'Automate visual inspection processes',
        'Improve accuracy by 99%+',
        'Process images 100x faster than humans',
        'Enable new business capabilities'
      ],
      pricing: {
        starter: '$2,200/month',
        professional: '$4,500/month',
        enterprise: 'Custom'
      },
      category: 'Vision',
      popular: false,
      useCases: ['Quality control', 'Security monitoring', 'Medical imaging', 'Retail analytics'],
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet']
    },
    {
      id: '4',
      icon: Zap,
      title: 'Process Automation & RPA',
      description: 'Intelligent process automation that learns and adapts to optimize business workflows',
      features: [
        'Workflow automation and orchestration',
        'Document processing and data extraction',
        'Email and calendar automation',
        'API integration and data synchronization',
        'Exception handling and escalation',
        'Process mining and optimization',
        'Custom automation rules',
        'Performance monitoring and analytics'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 90%',
        'Eliminate human errors',
        'Scale operations without additional staff'
      ],
      pricing: {
        starter: '$1,500/month',
        professional: '$3,000/month',
        enterprise: 'Custom'
      },
      category: 'Automation',
      popular: true,
      useCases: ['Invoice processing', 'Data entry automation', 'Email management', 'Report generation'],
      technologies: ['UiPath', 'Automation Anywhere', 'Microsoft Power Automate', 'Custom Python']
    },
    {
      id: '5',
      icon: BarChart,
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced machine learning models for accurate predictions and trend analysis across all business areas',
      features: [
        'Time series forecasting',
        'Demand and supply prediction',
        'Risk assessment and modeling',
        'Customer lifetime value prediction',
        'Churn prediction and prevention',
        'Price optimization algorithms',
        'Anomaly detection',
        'Real-time model updates'
      ],
      benefits: [
        'Improve forecast accuracy by 85%',
        'Reduce inventory costs by 30%',
        'Increase revenue by 25%',
        'Minimize risks and losses'
      ],
      pricing: {
        starter: '$2,800/month',
        professional: '$5,500/month',
        enterprise: 'Custom'
      },
      category: 'Analytics',
      popular: false,
      useCases: ['Sales forecasting', 'Inventory management', 'Risk assessment', 'Customer analytics'],
      technologies: ['Scikit-learn', 'XGBoost', 'Prophet', 'LSTM', 'ARIMA']
    },
    {
      id: '6',
      icon: Shield,
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and prevention using machine learning to protect against evolving cyber threats',
      features: [
        'Behavioral analysis and anomaly detection',
        'Real-time threat monitoring',
        'Automated incident response',
        'Malware and phishing detection',
        'Network traffic analysis',
        'User behavior analytics',
        'Threat intelligence integration',
        'Compliance monitoring and reporting'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 95%',
        'Prevent 99.9% of attacks',
        'Ensure compliance automatically'
      ],
      pricing: {
        starter: '$3,200/month',
        professional: '$6,500/month',
        enterprise: 'Custom'
      },
      category: 'Security',
      popular: true,
      useCases: ['Threat detection', 'Fraud prevention', 'Compliance monitoring', 'Incident response'],
      technologies: ['TensorFlow', 'Scikit-learn', 'Elasticsearch', 'Splunk', 'Custom ML Models']
    },
    {
      id: '7',
      icon: Mic,
      title: 'Speech & Voice AI',
      description: 'Advanced speech recognition, synthesis, and voice processing for natural human-computer interaction',
      features: [
        'Speech-to-text transcription',
        'Text-to-speech synthesis',
        'Voice command recognition',
        'Speaker identification and verification',
        'Emotion detection in speech',
        'Multi-language voice support',
        'Real-time processing',
        'Custom voice model training'
      ],
      benefits: [
        'Enable hands-free operations',
        'Improve accessibility',
        'Enhance user experience',
        'Reduce typing and manual input'
      ],
      pricing: {
        starter: '$1,200/month',
        professional: '$2,500/month',
        enterprise: 'Custom'
      },
      category: 'Voice',
      popular: false,
      useCases: ['Voice assistants', 'Call center automation', 'Accessibility tools', 'Voice commands'],
      technologies: ['Google Speech API', 'Azure Speech', 'Amazon Polly', 'Whisper', 'Tacotron']
    },
    {
      id: '8',
      icon: FileText,
      title: 'Document Intelligence & NLP',
      description: 'Intelligent document processing and natural language understanding for automated content analysis',
      features: [
        'Document classification and extraction',
        'Named entity recognition',
        'Sentiment analysis',
        'Text summarization',
        'Language translation',
        'Content generation',
        'Question answering systems',
        'Knowledge graph creation'
      ],
      benefits: [
        'Process documents 50x faster',
        'Extract insights automatically',
        'Improve content quality',
        'Enable intelligent search'
      ],
      pricing: {
        starter: '$1,800/month',
        professional: '$3,500/month',
        enterprise: 'Custom'
      },
      category: 'NLP',
      popular: false,
      useCases: ['Document processing', 'Content analysis', 'Legal document review', 'Research automation'],
      technologies: ['BERT', 'GPT-4', 'spaCy', 'NLTK', 'Hugging Face Transformers']
    },
    {
      id: '9',
      icon: Target,
      title: 'Personalization & Recommendation Engines',
      description: 'AI-powered personalization systems that deliver tailored experiences and recommendations',
      features: [
        'Collaborative filtering algorithms',
        'Content-based recommendations',
        'Real-time personalization',
        'A/B testing and optimization',
        'Cross-platform synchronization',
        'Behavioral pattern analysis',
        'Dynamic content generation',
        'Performance tracking and analytics'
      ],
      benefits: [
        'Increase engagement by 200%',
        'Boost conversion rates by 150%',
        'Improve customer satisfaction',
        'Maximize revenue per user'
      ],
      pricing: {
        starter: '$2,000/month',
        professional: '$4,000/month',
        enterprise: 'Custom'
      },
      category: 'Personalization',
      popular: true,
      useCases: ['E-commerce recommendations', 'Content personalization', 'Product suggestions', 'Marketing automation'],
      technologies: ['TensorFlow', 'Apache Spark', 'Redis', 'Elasticsearch', 'Custom Algorithms']
    },
    {
      id: '10',
      icon: Search,
      title: 'Intelligent Search & Discovery',
      description: 'Advanced search capabilities with AI-powered understanding, ranking, and discovery',
      features: [
        'Semantic search and understanding',
        'Natural language queries',
        'Auto-complete and suggestions',
        'Faceted search and filtering',
        'Search analytics and optimization',
        'Multi-language search',
        'Voice search integration',
        'Custom ranking algorithms'
      ],
      benefits: [
        'Improve search relevance by 300%',
        'Reduce search time by 80%',
        'Increase findability',
        'Enhance user experience'
      ],
      pricing: {
        starter: '$1,500/month',
        professional: '$3,000/month',
        enterprise: 'Custom'
      },
      category: 'Search',
      popular: false,
      useCases: ['E-commerce search', 'Knowledge base search', 'Content discovery', 'Product finder'],
      technologies: ['Elasticsearch', 'Solr', 'BERT', 'Word2Vec', 'Custom ML Models']
    },
    {
      id: '11',
      icon: Users,
      title: 'AI-Powered HR & Talent Management',
      description: 'Intelligent human resources solutions for recruitment, performance management, and employee engagement',
      features: [
        'Resume screening and candidate matching',
        'Interview scheduling and coordination',
        'Performance prediction and analytics',
        'Employee sentiment analysis',
        'Skills gap analysis',
        'Career path recommendations',
        'Diversity and inclusion insights',
        'Automated HR workflows'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality by 40%',
        'Increase employee retention',
        'Optimize workforce planning'
      ],
      pricing: {
        starter: '$2,200/month',
        professional: '$4,500/month',
        enterprise: 'Custom'
      },
      category: 'HR',
      popular: false,
      useCases: ['Recruitment automation', 'Performance management', 'Employee analytics', 'Talent development'],
      technologies: ['NLP', 'Machine Learning', 'Predictive Analytics', 'HRIS Integration']
    },
    {
      id: '12',
      icon: Globe,
      title: 'AI-Powered Translation & Localization',
      description: 'Advanced language translation and localization services powered by neural machine translation',
      features: [
        'Real-time translation (100+ languages)',
        'Context-aware translation',
        'Document and website localization',
        'Voice translation',
        'Cultural adaptation',
        'Quality assurance and review',
        'API integration',
        'Custom model training'
      ],
      benefits: [
        'Reach global audiences',
        'Reduce translation costs by 70%',
        'Improve translation quality',
        'Accelerate time-to-market'
      ],
      pricing: {
        starter: '$800/month',
        professional: '$1,800/month',
        enterprise: 'Custom'
      },
      category: 'Translation',
      popular: false,
      useCases: ['Website localization', 'Document translation', 'Real-time communication', 'Content globalization'],
      technologies: ['Google Translate API', 'Azure Translator', 'Custom NMT Models', 'OpenNMT']
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Vision', 'Automation', 'Security', 'Voice', 'NLP', 'Personalization', 'Search', 'HR', 'Translation'];

  const benefits = [
    'Proven ROI with measurable results',
    'Scalable solutions for any business size',
    '24/7 expert support and maintenance',
    'Regular updates and feature enhancements',
    'Custom model training and optimization',
    'Integration with existing systems',
    'Compliance with data privacy regulations',
    'White-label solutions available'
  ];

  const stats = [
    { icon: <Brain className="w-8 h-8 text-blue-500" />, value: '500+', label: 'AI Models Deployed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '300%', label: 'Average ROI' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '99.9%', label: 'Accuracy Rate' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '24/7', label: 'AI Support' }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From machine learning to computer vision, we deliver cutting-edge AI solutions that drive real results. Starting at $800/month." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, computer vision, natural language processing, automation, predictive analytics, AI consulting" />
      </Helmet>

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, 
              we deliver AI that drives real results and measurable ROI.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-cyan-400 font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-cyan-400 text-sm font-medium">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-cyan-400 font-semibold text-sm mb-2">Benefits:</h4>
                      <div className="text-xs text-gray-400">
                        {service.benefits.join(' • ')}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{service.pricing.starter}</div>
                      <div className="text-sm text-gray-400">Starting from</div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105">
                        Get Started
                      </button>
                      <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can solve your specific challenges and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Start Your AI Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServicesPage;
