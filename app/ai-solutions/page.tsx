'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Eye, 
  Mic, 
  MessageCircle, 
  BarChart3, 
  FileText, 
  Workflow, 
  Shield, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  CreditCard,
  Clock,
  Award,
  TrendingUp,
  Cpu,
  Globe,
  Database,
  Settings,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Users,
  Star,
  Lock,
  RefreshCw,
  Sparkles,
  Bot,
  Code,
  Layers,
  Network,
  Monitor,
  Smartphone,
  Headphones,
  BookOpen,
  Lightbulb,
  Rocket
} from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-chatbot-enterprise',
      title: 'Enterprise AI Chatbot Platform',
      description: 'Advanced conversational AI platform with natural language processing, multi-language support, and seamless integration capabilities.',
      price: '$299/month',
      originalPrice: '$499/month',
      features: [
        'Natural Language Processing (NLP)',
        'Multi-language support (50+ languages)',
        'Intent recognition and entity extraction',
        'Conversation flow management',
        'Integration with CRM and ERP systems',
        'Analytics and performance tracking',
        'Custom training and fine-tuning',
        'Voice and text interaction support'
      ],
      icon: Bot,
      color: 'from-purple-500 to-pink-500',
      category: 'Conversational AI',
      complexity: 'Enterprise',
      trialDays: 14,
      setupTime: '2 hours',
      technologies: ['OpenAI GPT-4', 'TensorFlow', 'PyTorch', 'Dialogflow', 'Rasa', 'Microsoft Bot Framework'],
      useCases: ['Customer Support', 'Sales Automation', 'Lead Qualification', 'FAQ Automation']
    },
    {
      id: 'ai-computer-vision',
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision and image recognition services for object detection, facial recognition, and visual analytics.',
      price: '$199/month',
      originalPrice: '$349/month',
      features: [
        'Object detection and classification',
        'Facial recognition and verification',
        'OCR and document processing',
        'Quality control and inspection',
        'Real-time video analytics',
        'Custom model training',
        'API integration and SDK',
        'Cloud and edge deployment'
      ],
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      category: 'Computer Vision',
      complexity: 'Advanced',
      trialDays: 7,
      setupTime: '1 hour',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch', 'AWS Rekognition'],
      useCases: ['Security Systems', 'Quality Control', 'Document Processing', 'Retail Analytics']
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant Platform',
      description: 'Intelligent voice assistant with speech recognition, natural language understanding, and multi-modal interaction capabilities.',
      price: '$149/month',
      originalPrice: '$249/month',
      features: [
        'Speech-to-text and text-to-speech',
        'Natural language understanding',
        'Multi-language voice support',
        'Custom wake word training',
        'Integration with smart devices',
        'Voice biometrics and authentication',
        'Real-time conversation processing',
        'Custom voice synthesis'
      ],
      icon: Mic,
      color: 'from-green-500 to-emerald-500',
      category: 'Voice AI',
      complexity: 'Expert',
      trialDays: 14,
      setupTime: '30 minutes',
      technologies: ['Google Speech API', 'Amazon Polly', 'Azure Speech', 'Whisper', 'Tacotron', 'WaveNet'],
      useCases: ['Smart Home', 'Call Centers', 'Accessibility', 'Voice Commerce']
    },
    {
      id: 'ai-predictive-analytics',
      title: 'Predictive Analytics Engine',
      description: 'Machine learning-powered predictive analytics platform for forecasting, trend analysis, and business intelligence.',
      price: '$399/month',
      originalPrice: '$699/month',
      features: [
        'Time series forecasting',
        'Predictive modeling and algorithms',
        'Anomaly detection and alerting',
        'Customer behavior prediction',
        'Demand forecasting',
        'Risk assessment and scoring',
        'Real-time data processing',
        'Custom model development'
      ],
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      category: 'Analytics',
      complexity: 'Enterprise',
      trialDays: 21,
      setupTime: '4 hours',
      technologies: ['Scikit-learn', 'XGBoost', 'Prophet', 'LSTM', 'ARIMA', 'Apache Spark'],
      useCases: ['Sales Forecasting', 'Inventory Management', 'Risk Assessment', 'Customer Churn']
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation platform for text, images, videos, and multimedia content generation.',
      price: '$79/month',
      originalPrice: '$149/month',
      features: [
        'Text generation and copywriting',
        'Image generation and editing',
        'Video creation and editing',
        'Social media content automation',
        'SEO-optimized content creation',
        'Brand voice training',
        'Content scheduling and publishing',
        'Plagiarism detection and originality'
      ],
      icon: FileText,
      color: 'from-indigo-500 to-purple-500',
      category: 'Content AI',
      complexity: 'Advanced',
      trialDays: 14,
      setupTime: '15 minutes',
      technologies: ['GPT-4', 'DALL-E', 'Stable Diffusion', 'RunwayML', 'Jasper', 'Copy.ai'],
      useCases: ['Marketing Content', 'Blog Writing', 'Social Media', 'Product Descriptions']
    },
    {
      id: 'ai-workflow-automation',
      title: 'Intelligent Workflow Automation',
      description: 'AI-powered workflow automation platform that learns from user behavior and optimizes business processes automatically.',
      price: '$249/month',
      originalPrice: '$399/month',
      features: [
        'Process mining and discovery',
        'Intelligent task routing',
        'Automated decision making',
        'Exception handling and escalation',
        'Performance optimization',
        'Integration with 500+ applications',
        'Custom automation rules',
        'Analytics and reporting'
      ],
      icon: Workflow,
      color: 'from-teal-500 to-green-500',
      category: 'Automation',
      complexity: 'Expert',
      trialDays: 30,
      setupTime: '2 hours',
      technologies: ['UiPath', 'Automation Anywhere', 'Microsoft Power Automate', 'Zapier', 'Python', 'RPA'],
      useCases: ['Document Processing', 'Data Entry', 'Customer Onboarding', 'Invoice Processing']
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Platform',
      description: 'Advanced AI-powered cybersecurity solution with threat detection, behavioral analysis, and automated response capabilities.',
      price: '$599/month',
      originalPrice: '$999/month',
      features: [
        'Threat detection and prevention',
        'Behavioral analysis and anomaly detection',
        'Automated incident response',
        'Malware and virus detection',
        'Network traffic analysis',
        'User behavior analytics',
        'Compliance monitoring',
        '24/7 security operations center'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      complexity: 'Enterprise',
      trialDays: 7,
      setupTime: '4 hours',
      technologies: ['TensorFlow', 'PyTorch', 'Elasticsearch', 'Kibana', 'Splunk', 'CrowdStrike'],
      useCases: ['Threat Detection', 'Fraud Prevention', 'Compliance', 'Incident Response']
    },
    {
      id: 'ai-personalization',
      title: 'AI Personalization Engine',
      description: 'Machine learning-powered personalization platform for delivering customized experiences across all customer touchpoints.',
      price: '$179/month',
      originalPrice: '$299/month',
      features: [
        'Real-time personalization',
        'Recommendation engine',
        'Customer segmentation',
        'A/B testing and optimization',
        'Cross-channel consistency',
        'Behavioral analysis',
        'Predictive modeling',
        'Performance analytics'
      ],
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      category: 'Personalization',
      complexity: 'Advanced',
      trialDays: 21,
      setupTime: '1 hour',
      technologies: ['Apache Kafka', 'Redis', 'MongoDB', 'Scikit-learn', 'TensorFlow', 'Kubernetes'],
      useCases: ['E-commerce', 'Content Platforms', 'Marketing', 'Mobile Apps']
    }
  ];

  const categories = ['All', 'Conversational AI', 'Computer Vision', 'Voice AI', 'Analytics', 'Content AI', 'Automation', 'Security', 'Personalization'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>AI Solutions & Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including chatbots, computer vision, voice assistants, predictive analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="ai solutions, artificial intelligence, machine learning, chatbots, computer vision, voice ai, predictive analytics, ai automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      {/* Advanced Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="cyber-matrix-bg"></div>
        <div className="quantum-field-bg"></div>
        <div className="holographic-grid"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">AI Solutions</span>
              <br />
              <span className="holographic-text">& Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations. 
              From conversational AI to computer vision, we deliver cutting-edge AI solutions that drive results.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Capabilities Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: Brain, 
                title: 'Machine Learning', 
                description: 'Advanced ML algorithms and models for predictive analytics and intelligent automation',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                icon: Eye, 
                title: 'Computer Vision', 
                description: 'Image recognition, object detection, and visual analytics for enhanced business insights',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: MessageCircle, 
                title: 'Natural Language', 
                description: 'Conversational AI, text analysis, and language processing for better customer interactions',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((capability, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${capability.color} w-fit mx-auto mb-4`}>
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'cyber-button bg-cyan-500/20 text-cyan-400'
                    : 'glass-card hover:bg-white/10 text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`glass-card p-6 hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-cyan-400 font-semibold">{service.category}</div>
                    <div className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full mt-1">
                      {service.complexity}
                    </div>
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.trialDays}-day free trial • Setup in {service.setupTime}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700/50 text-xs rounded text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-xs rounded text-cyan-400">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-700/30 text-xs rounded text-purple-300">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="cyber-button flex-1 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Start Free Trial
                  </button>
                  <button 
                    onClick={() => setSelectedService(service.id)}
                    className="glass-card px-4 py-2 hover:bg-white/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* AI Implementation Process */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 holographic-text">
              AI Implementation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Discovery & Analysis', 
                  description: 'Analyze your business needs and identify AI opportunities',
                  icon: Lightbulb
                },
                { 
                  step: '02', 
                  title: 'Solution Design', 
                  description: 'Design custom AI solution architecture and implementation plan',
                  icon: Code
                },
                { 
                  step: '03', 
                  title: 'Development & Training', 
                  description: 'Develop and train AI models with your specific data and requirements',
                  icon: Cpu
                },
                { 
                  step: '04', 
                  title: 'Deployment & Optimization', 
                  description: 'Deploy solution and continuously optimize for better performance',
                  icon: Rocket
                }
              ].map((step, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 w-fit mx-auto mb-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 holographic-text">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Join hundreds of companies already using our AI solutions to drive growth, 
                improve efficiency, and deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule AI Consultation
                </button>
                <button className="glass-card px-8 py-4 text-lg hover:bg-white/10 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download AI Solutions Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsPage;