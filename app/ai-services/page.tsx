'use client';
import React from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling'],
      color: 'text-orange-400'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Box,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      color: 'text-pink-400'
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning and text-to-speech solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
      color: 'text-indigo-400'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      color: 'text-yellow-400'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis'],
      color: 'text-red-400'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce and content',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing'],
      color: 'text-teal-400'
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],
      color: 'text-red-500'
    },
    {
<<<<<<< HEAD
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and data extraction',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition'],
      color: 'text-gray-400'
=======
      id: 'ai-financial-modeling',
      name: 'AI Financial Modeling',
      description: 'Advanced financial analysis and modeling using machine learning for investment decisions',
      price: '$899/month',
      marketPrice: '$2000-6000/month',
      features: [
        'Portfolio optimization',
        'Risk assessment',
        'Market prediction',
        'Algorithmic trading',
        'Compliance monitoring'
      ],
      benefits: [
        'Improve investment returns',
        'Reduce financial risk',
        'Automated trading strategies',
        'Real-time market analysis'
      ],
      category: 'Finance',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-nlp-processing',
      name: 'AI Natural Language Processing',
      description: 'Advanced text analysis, sentiment analysis, and language understanding for business applications',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Text classification',
        'Sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Document summarization'
      ],
      benefits: [
        'Automate text processing',
        'Extract business insights',
        'Improve customer understanding',
        'Multi-language support'
      ],
      category: 'Language Processing',
      popular: false,
      icon: FileText
    },
    {
      id: 'ai-robotic-process',
      name: 'AI Robotic Process Automation',
      description: 'Intelligent automation of repetitive tasks with AI-powered decision making and learning capabilities',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Process automation',
        'Intelligent decision making',
        'Exception handling',
        'Process optimization',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce manual work by 90%',
        'Improve accuracy',
        '24/7 operation',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Cpu
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      description: 'Advanced customer analytics and behavioral insights to improve customer experience and retention',
      price: '$699/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Customer journey mapping',
        'Behavioral analysis',
        'Churn prediction',
        'Lifetime value calculation',
        'Segmentation analysis'
      ],
      benefits: [
        'Improve customer retention',
        'Increase customer lifetime value',
        'Predict customer behavior',
        'Optimize marketing campaigns'
      ],
      category: 'Customer Analytics',
      popular: true,
      icon: Users
    },
    {
      id: 'ai-quality-assurance',
      name: 'AI Quality Assurance',
      description: 'Automated testing and quality assurance using AI to improve software reliability and performance',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Automated test generation',
        'Performance testing',
        'Bug detection',
        'Code quality analysis',
        'Regression testing'
      ],
      benefits: [
        'Reduce testing time by 80%',
        'Improve software quality',
        'Automated test maintenance',
        'Faster release cycles'
      ],
      category: 'Software Testing',
      popular: false,
      icon: CheckCircle
    },
    {
      id: 'ai-energy-optimization',
      name: 'AI Energy Optimization',
      description: 'Smart energy management and optimization using AI to reduce costs and improve efficiency',
      price: '$1,199/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Energy consumption analysis',
        'Predictive energy modeling',
        'Smart grid optimization',
        'Renewable energy integration',
        'Cost optimization'
      ],
      benefits: [
        'Reduce energy costs by 25%',
        'Improve energy efficiency',
        'Optimize renewable usage',
        'Environmental sustainability'
      ],
      category: 'Energy',
      popular: false,
      icon: Zap
    },
    {
      id: 'ai-hr-analytics',
      name: 'AI HR Analytics',
      description: 'Human resources analytics and workforce optimization using AI and machine learning',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Employee performance analysis',
        'Talent acquisition optimization',
        'Retention prediction',
        'Workforce planning',
        'Skills gap analysis'
      ],
      benefits: [
        'Improve hiring decisions',
        'Reduce employee turnover',
        'Optimize workforce planning',
        'Enhance employee satisfaction'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users
    },
    {
      id: 'ai-blockchain-analytics',
      name: 'AI Blockchain Analytics',
      description: 'Advanced blockchain data analysis and cryptocurrency market insights using AI',
      price: '$1,499/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Blockchain transaction analysis',
        'Cryptocurrency market prediction',
        'Smart contract auditing',
        'DeFi protocol analysis',
        'Risk assessment'
      ],
      benefits: [
        'Better investment decisions',
        'Risk mitigation',
        'Market opportunity identification',
        'Compliance monitoring'
      ],
      category: 'Blockchain',
      popular: false,
      icon: Link
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing',
      description: 'Deploy AI models at the edge for real-time processing and reduced latency',
      price: '$1,799/month',
      marketPrice: '$3500-12000/month',
      features: [
        'Edge model deployment',
        'Real-time processing',
        'Low latency inference',
        'Offline capabilities',
        'Distributed computing'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Improve response times',
        'Enable offline AI',
        'Reduce bandwidth costs'
      ],
      category: 'Edge Computing',
      popular: false,
      icon: Server
    },
    {
      id: 'ai-video-analysis',
      name: 'AI Video Analysis',
      description: 'Advanced video content analysis with object detection, scene understanding, and automated tagging',
      price: '$899/month',
      marketPrice: '$1800-5000/month',
      features: [
        'Real-time video object detection',
        'Scene classification and understanding',
        'Automated video tagging and metadata',
        'Content moderation and filtering',
        'Video search and retrieval',
        'Live streaming analysis',
        'Custom model training',
        'API integration for applications'
      ],
      benefits: [
        'Automate video content processing',
        'Improve content discoverability',
        'Enhanced video search capabilities',
        'Real-time content monitoring'
      ],
      category: 'Computer Vision',
      popular: true,
      icon: Eye
    },
    {
      id: 'ai-speech-synthesis',
      name: 'AI Speech Synthesis',
      description: 'Natural-sounding text-to-speech with multiple voices and emotional expression',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Natural-sounding voice synthesis',
        'Multiple voice options and languages',
        'Emotional expression and tone control',
        'Real-time speech generation',
        'Custom voice training',
        'SSML support for advanced control',
        'API integration for applications',
        'Batch processing capabilities'
      ],
      benefits: [
        'Create engaging audio content',
        'Improve accessibility',
        'Automate voice generation',
        'Professional audio quality'
      ],
      category: 'Voice AI',
      popular: true,
      icon: Mic
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Advanced recommendation system with collaborative filtering and content-based algorithms',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Collaborative filtering algorithms',
        'Content-based recommendations',
        'Hybrid recommendation approaches',
        'Real-time personalization',
        'A/B testing for optimization',
        'Cold start problem solutions',
        'Scalable architecture',
        'Integration with existing systems'
      ],
      benefits: [
        'Increase user engagement by 200%',
        'Improve conversion rates',
        'Personalized user experience',
        'Better content discovery'
      ],
      category: 'Personalization',
      popular: true,
      icon: Target
    },
    {
      id: 'ai-sentiment-analysis',
      name: 'AI Sentiment Analysis',
      description: 'Advanced sentiment analysis for text, voice, and social media with emotion detection',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Text sentiment analysis',
        'Voice emotion detection',
        'Social media monitoring',
        'Multi-language support',
        'Real-time analysis',
        'Custom sentiment models',
        'API integration',
        'Detailed analytics and reporting'
      ],
      benefits: [
        'Understand customer emotions',
        'Monitor brand sentiment',
        'Improve customer experience',
        'Data-driven insights'
      ],
      category: 'Language Processing',
      popular: true,
      icon: Heart
    },
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Enterprise Chatbot',
      description: 'Enterprise-grade chatbot platform with advanced NLP, integration capabilities, and analytics',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Advanced NLP and understanding',
        'Multi-channel deployment',
        'Integration with enterprise systems',
        'Custom knowledge base management',
        'Human handoff capabilities',
        'Advanced analytics and reporting',
        'White-label solutions',
        '24/7 support and maintenance'
      ],
      benefits: [
        'Reduce support costs by 70%',
        'Improve customer satisfaction',
        '24/7 availability',
        'Scalable customer service'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      id: 'ai-content-moderation',
      name: 'AI Content Moderation',
      description: 'Automated content moderation with image, video, and text analysis for platform safety',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Image and video content analysis',
        'Text toxicity detection',
        'Real-time content filtering',
        'Custom moderation rules',
        'Human review workflows',
        'Multi-language support',
        'API integration',
        'Detailed moderation reports'
      ],
      benefits: [
        'Maintain platform safety',
        'Reduce manual moderation',
        'Consistent policy enforcement',
        'Real-time content protection'
      ],
      category: 'Content Moderation',
      popular: false,
      icon: Shield
    },
    {
      id: 'ai-predictive-modeling',
      name: 'AI Predictive Modeling',
      description: 'Advanced predictive modeling platform with machine learning algorithms for business forecasting',
      price: '$1,499/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Multiple ML algorithms',
        'Automated feature engineering',
        'Model training and validation',
        'Real-time predictions',
        'Custom model development',
        'Integration with data sources',
        'Model performance monitoring',
        'A/B testing capabilities'
      ],
      benefits: [
        'Improve business forecasting',
        'Data-driven decision making',
        'Automated model development',
        'Better risk assessment'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'ai-document-intelligence',
      name: 'AI Document Intelligence',
      description: 'Intelligent document processing with OCR, data extraction, and automated classification',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Advanced OCR and text extraction',
        'Document classification and routing',
        'Data extraction and validation',
        'Document comparison and analysis',
        'Integration with document management',
        'Custom extraction templates',
        'Batch processing capabilities',
        'API integration for automation'
      ],
      benefits: [
        'Process documents 10x faster',
        'Automated data extraction',
        'Reduce manual errors',
        'Better document insights'
      ],
      category: 'Document Processing',
      popular: true,
      icon: FileText
    },
    {
      id: 'ai-conversation-analytics',
      name: 'AI Conversation Analytics',
      description: 'Advanced conversation analysis platform with insights, sentiment tracking, and optimization',
      price: '$699/month',
      marketPrice: '$1400-4000/month',
      features: [
        'Conversation sentiment analysis',
        'Topic modeling and extraction',
        'Customer journey mapping',
        'Agent performance analytics',
        'Real-time conversation monitoring',
        'Custom analytics dashboards',
        'Integration with CRM systems',
        'Automated insights and alerts'
      ],
      benefits: [
        'Improve conversation quality',
        'Better customer understanding',
        'Optimize agent performance',
        'Data-driven insights'
      ],
      category: 'Customer Analytics',
      popular: true,
      icon: Users
    },
    {
      id: 'ai-supply-chain-ai',
      name: 'AI Supply Chain Intelligence',
      description: 'Intelligent supply chain optimization with demand forecasting and risk management',
      price: '$1,999/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Demand forecasting algorithms',
        'Inventory optimization',
        'Supplier risk assessment',
        'Route optimization',
        'Cost optimization analysis',
        'Real-time supply chain monitoring',
        'Integration with ERP systems',
        'Custom optimization models'
      ],
      benefits: [
        'Reduce supply chain costs by 30%',
        'Improve delivery efficiency',
        'Minimize inventory waste',
        'Better supplier management'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics',
      description: 'Medical AI platform with diagnostic assistance, image analysis, and patient monitoring',
      price: '$2,999/month',
      marketPrice: '$6000-25000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance tools',
        'Patient risk assessment',
        'Treatment recommendations',
        'Drug interaction checking',
        'HIPAA compliance',
        'Integration with EMR systems',
        'Clinical decision support'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce diagnostic time',
        'Early disease detection',
        'Better patient outcomes'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart
    },
    {
      id: 'ai-financial-forecasting',
      name: 'AI Financial Forecasting',
      description: 'Advanced financial forecasting platform with market analysis and investment insights',
      price: '$1,799/month',
      marketPrice: '$3500-12000/month',
      features: [
        'Market trend analysis',
        'Investment portfolio optimization',
        'Risk assessment and management',
        'Real-time market monitoring',
        'Custom financial models',
        'Integration with trading platforms',
        'Regulatory compliance',
        'Advanced reporting and analytics'
      ],
      benefits: [
        'Improve investment decisions',
        'Better risk management',
        'Automated market analysis',
        'Enhanced portfolio performance'
      ],
      category: 'Finance',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-iot-analytics',
      name: 'AI IoT Analytics',
      description: 'Intelligent IoT data analysis platform with real-time monitoring and predictive maintenance',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Real-time IoT data processing',
        'Predictive maintenance algorithms',
        'Anomaly detection and alerting',
        'Device health monitoring',
        'Integration with IoT platforms',
        'Custom analytics models',
        'Edge computing capabilities',
        'Comprehensive reporting'
      ],
      benefits: [
        'Optimize IoT operations',
        'Prevent equipment failures',
        'Reduce maintenance costs',
        'Better device insights'
      ],
      category: 'IoT & Analytics',
      popular: false,
      icon: Cpu
    },
    {
      id: 'ai-conversational-ai',
      name: 'AI Conversational AI Platform',
      description: 'Advanced conversational AI platform with natural language understanding and generation',
      price: '$999/month',
      marketPrice: '$2000-6000/month',
      features: [
        'Natural language understanding',
        'Context-aware conversations',
        'Multi-turn dialogue management',
        'Intent recognition and classification',
        'Entity extraction and recognition',
        'Conversation flow management',
        'Integration with messaging platforms',
        'Custom conversation training'
      ],
      benefits: [
        'Create natural conversations',
        'Improve user engagement',
        'Automate customer interactions',
        'Better conversation quality'
      ],
      category: 'Conversational AI',
      popular: true,
      icon: MessageCircle
    },
    {
      id: 'ai-automated-testing',
      name: 'AI Automated Testing',
      description: 'Intelligent software testing platform with automated test generation and execution',
      price: '$799/month',
      marketPrice: '$1600-5000/month',
      features: [
        'Automated test case generation',
        'Intelligent test execution',
        'Bug detection and reporting',
        'Performance testing automation',
        'Regression testing automation',
        'Integration with CI/CD pipelines',
        'Custom testing frameworks',
        'Detailed test analytics'
      ],
      benefits: [
        'Reduce testing time by 80%',
        'Improve test coverage',
        'Automated bug detection',
        'Faster release cycles'
      ],
      category: 'Software Testing',
      popular: true,
      icon: CheckCircle
    },
    {
      id: 'ai-knowledge-management',
      name: 'AI Knowledge Management',
      description: 'Intelligent knowledge management platform with automated content organization and search',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Automated content categorization',
        'Intelligent search and retrieval',
        'Knowledge graph construction',
        'Content recommendation',
        'Expert identification',
        'Integration with existing systems',
        'Custom knowledge models',
        'Advanced analytics and insights'
      ],
      benefits: [
        'Improve knowledge discovery',
        'Automated content organization',
        'Better information retrieval',
        'Enhanced collaboration'
      ],
      category: 'Knowledge Management',
      popular: false,
      icon: FileText
    },
    {
      id: 'ai-customer-churn',
      name: 'AI Customer Churn Prediction',
      description: 'Advanced customer churn prediction platform with retention strategies and analytics',
      price: '$899/month',
      marketPrice: '$1800-5000/month',
      features: [
        'Churn prediction algorithms',
        'Customer segmentation analysis',
        'Retention strategy recommendations',
        'Real-time churn monitoring',
        'Integration with CRM systems',
        'Custom prediction models',
        'A/B testing for strategies',
        'Detailed analytics and reporting'
      ],
      benefits: [
        'Reduce customer churn by 40%',
        'Improve retention strategies',
        'Better customer insights',
        'Data-driven retention'
      ],
      category: 'Customer Analytics',
      popular: true,
      icon: Users
    },
    {
      id: 'ai-automated-reporting',
      name: 'AI Automated Reporting',
      description: 'Intelligent reporting platform with automated data analysis and report generation',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Automated report generation',
        'Data analysis and insights',
        'Custom report templates',
        'Scheduled report delivery',
        'Interactive dashboards',
        'Integration with data sources',
        'Natural language queries',
        'Advanced visualization options'
      ],
      benefits: [
        'Save 90% report creation time',
        'Automated data analysis',
        'Consistent reporting',
        'Better business insights'
      ],
      category: 'Reporting & Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant Platform',
      description: 'Enterprise voice assistant platform with custom voice commands and integrations',
      price: '$1,199/month',
      marketPrice: '$2400-7000/month',
      features: [
        'Custom voice command training',
        'Multi-language voice support',
        'Integration with business systems',
        'Voice analytics and insights',
        'Custom wake word training',
        'Offline voice processing',
        'API integration capabilities',
        'Advanced voice customization'
      ],
      benefits: [
        'Hands-free business operations',
        'Improve accessibility',
        'Automate voice interactions',
        'Enhanced user experience'
      ],
      category: 'Voice AI',
      popular: true,
      icon: Mic
    },
    {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Advanced AI services including machine learning, NLP, computer vision, automation, and more. Transform your business with cutting-edge artificial intelligence solutions."
        keywords={['AI services', 'machine learning', 'NLP', 'computer vision', 'AI automation', 'predictive analytics', 'AI consulting']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
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
      >
        <div></div>
      </AccessibilityEnhancer>
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Services
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Advanced Artificial Intelligence Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with our comprehensive AI services. From machine learning to computer vision, 
              we provide cutting-edge artificial intelligence solutions tailored to your specific needs.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/contact" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our AI experts are ready to help you implement cutting-edge artificial intelligence solutions 
                that will revolutionize your business operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
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

export default AIServicesPage;
