<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
  // const categories = [
  //   { name: 'All', count: aiServices.length },
  //   { name: 'Consulting', count: aiServices.filter(s => s.category === 'Consulting').length },
  //   { name: 'Machine Learning', count: aiServices.filter(s => s.category === 'Machine Learning').length },
  //   { name: 'NLP', count: aiServices.filter(s => s.category === 'NLP').length },
  //   { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
  //   { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
  //   { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
  //   { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length },
  //   { name: 'Data Engineering', count: aiServices.filter(s => s.category === 'Data Engineering').length },
  //   { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
  //   { name: 'Recommendation Systems', count: aiServices.filter(s => s.category === 'Recommendation Systems').length },
  //   { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length },
  //   { name: 'Edge AI', count: aiServices.filter(s => s.category === 'Edge AI').length }
  // ];
  const testimonials = [
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from "lucide-react";
const AIServicesPage = () => {
  const aiServices = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",
      rating: 5
    },
    {
<<<<<<< HEAD
      name: "Emily Rodriguez",
      company: "Content Marketing Agency",
      role: "Director",
      content: "AI content generation has been a game-changer. We can now produce 10x more content with the same team.",
      rating: 5
=======
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization'
      ],
      category: 'Analytics',
      popular: false,
      icon: BarChart
    },
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-voice',
      name: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support'
      ],
      benefits: [
        'Improved accessibility',
        'Voice automation',
        'Call quality insights',
        'Multi-language support'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic
    },
    {
<<<<<<< HEAD
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Zap
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring algorithms',
        'Anomaly detection',
        'Automated alert systems'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'False positive reduction',
        'Compliance ready'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Machine learning-powered maintenance scheduling to prevent equipment failures and optimize uptime',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'IoT sensor integration',
        'Failure prediction models',
        'Maintenance scheduling optimization',
        'Cost reduction analysis',
        'Real-time monitoring'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Extend equipment life',
        'Optimize maintenance costs',
        'Prevent catastrophic failures'
      ],
      category: 'Industrial AI',
      popular: false,
      icon: Settings
    },
    {
      id: 'ai-personalization',
      name: 'AI Personalization Engine',
      description: 'Advanced recommendation systems and personalization algorithms for enhanced customer experience',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Real-time recommendations',
        'Customer segmentation',
        'Behavioral analysis',
        'A/B testing automation',
        'Cross-platform personalization'
      ],
      benefits: [
        'Increase conversions by 40%',
        'Improve customer engagement',
        'Higher customer lifetime value',
        'Automated optimization'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and inventory optimization',
      price: '$1,599/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier risk assessment',
        'Cost optimization'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve delivery times',
        'Minimize stockouts',
        'Optimize supplier relationships'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning',
      price: '$2,999/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient risk assessment',
        'Treatment recommendations',
        'HIPAA compliance'
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
<<<<<<< HEAD
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
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent workflow automation.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-workflow-automation",
      features: ["Process Optimization", "Task Automation", "Smart Routing"]
    }
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      link: '/ai-analytics'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation tools.',
      icon: <Brain className="w-8 h-8" />,
      features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'Email Campaigns'],
      link: '/ai-content-generation'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.',
      icon: <Shield className="w-8 h-8" />,
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Escalation Management'],
      link: '/ai-customer-support'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-driven threat detection and automated security responses.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring'],
      link: '/ai-cybersecurity'
    },
    {
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with advanced AI-driven analytics and machine learning.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Machine Learning', 'Pattern Recognition', 'Anomaly Detection', 'Trend Analysis'],
      link: '/ai-data-analytics'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline your business processes with intelligent automation and workflow optimization.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Process Automation', 'Task Optimization', 'Resource Allocation', 'Performance Monitoring'],
      link: '/ai-workflow-automation'
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced AI Solutions for Business"
        description="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, marketing, and healthcare solutions."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI marketing, AI healthcare"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <FuturisticBackground />
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI services today and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
export default AIServicesPage;
=======
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="AI Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced AI Services solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiServicesPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
        'Improve user retention by 150%',
        'Reduce development time by 40%',
        'Enhance user experience'
      ],
      icon: Smartphone,
      color: 'violet',
      popular: false,
      rating: 4.5,
      clients: 180,
      launchDate: '2023-10-01',
      tags: ['Mobile Development', 'AI Features', 'Personalization', 'Cross-platform'],
      caseStudy: {
        title: 'E-commerce Mobile App',
        result: 'Increased user engagement by 250% and boosted sales by 180%',
        description: 'Integrated AI-powered product recommendations and personalized shopping experience'
      }
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'enterprise', name: 'Enterprise Solutions', count: aiServices.filter(s => s.category === 'enterprise').length },
    { id: 'marketing', name: 'Marketing', count: aiServices.filter(s => s.category === 'marketing').length },
    { id: 'customer-service', name: 'Customer Service', count: aiServices.filter(s => s.category === 'customer-service').length },
    { id: 'analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'automation', name: 'Automation', count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'content', name: 'Content', count: aiServices.filter(s => s.category === 'content').length },
    { id: 'security', name: 'Security', count: aiServices.filter(s => s.category === 'security').length },
    { id: 'healthcare', name: 'Healthcare', count: aiServices.filter(s => s.category === 'healthcare').length },
    { id: 'fintech', name: 'Fintech', count: aiServices.filter(s => s.category === 'fintech').length },
    { id: 'mobile', name: 'Mobile', count: aiServices.filter(s => s.category === 'mobile').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'clients':
        filtered.sort((a, b) => b.clients - a.clients);
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    return filtered;
  }, [aiServices, searchTerm, selectedCategory, sortBy]);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: 'from-purple-500 to-purple-600',
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      cyan: 'from-cyan-500 to-cyan-600',
      pink: 'from-pink-500 to-pink-600',
      red: 'from-red-500 to-red-600',
      emerald: 'from-emerald-500 to-emerald-600',
      indigo: 'from-indigo-500 to-indigo-600',
      violet: 'from-violet-500 to-violet-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From enterprise solutions to specialized AI applications, we deliver cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, ai consulting, ai development, ai solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. Achieve 300% ROI with our cutting-edge artificial intelligence solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our comprehensive AI services. From enterprise solutions to 
                specialized AI applications, we deliver cutting-edge artificial intelligence that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">AI Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1,500+</div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search AI services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="lg:w-64">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort */}
                  <div className="lg:w-48">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="popularity">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="clients">Most Clients</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getColorClasses(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-3">
                      {service.popular && (
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Proven Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study */}
                  {service.caseStudy && (
                    <div className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Case Study:</h4>
                      <div className="text-sm text-gray-300">
                        <div className="font-medium text-white mb-1">{service.caseStudy.title}</div>
                        <div className="text-cyan-400 font-medium mb-1">{service.caseStudy.result}</div>
                        <div className="text-xs text-gray-400">{service.caseStudy.description}</div>
                      </div>
                    </div>
                  )}

                  {/* Pricing and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-white">
                        ${service.price.toLocaleString()}
                        <span className="text-sm text-gray-400">/{service.priceType}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.clients} successful clients
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">Launched</div>
                      <div className="text-sm text-gray-400">
                        {new Date(service.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={`/contact?service=${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                    >
                      Get Started
                    </a>
                    <a
                      href={`/demo?service=${service.id}`}
                      className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-all"
                    >
                      Demo
                    </a>
                    <a
                      href={`/case-studies?service=${service.id}`}
                      className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400/10 transition-all"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSortBy('popularity');
                  }}
                  className="cyber-button"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-400/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our AI experts are ready to help you implement the perfect AI solution for your business. 
                  Get a free consultation and discover how AI can revolutionize your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including analytics, content generation, customer support, cybersecurity, and workflow automation."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI content generation, AI customer support, AI cybersecurity, workflow automation"
        canonical="https://ziontechgroup.com/ai-services"
      />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive innovation across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify the best opportunities for AI implementation 
              in your organization and create a customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
      </div>
    </div>
  );
};

<<<<<<< HEAD

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
export default AIServicesPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
