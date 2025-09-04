import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain,
  Zap,
  Shield,
  Database,
  BarChart3,
  Users,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function AIServices() {
  const title = 'AI Services — Zion Tech Group';
  const description = 'Cutting-edge AI solutions including autonomous systems, machine learning, natural language processing, and intelligent automation.';

  const aiServices = [
    {
      title: 'AI-Powered Email Responder',
      description: 'Automated email responses with sentiment analysis and intelligent categorization',
      icon: MessageSquare,
      features: [
        'Smart email categorization and prioritization',
        'Automated response generation with personalization',
        'Sentiment analysis and escalation triggers',
        'Integration with CRM and helpdesk systems',
        'Multi-language support and compliance'
      ],
      pricing: '$2,500 - $8,000/month',
      delivery: '2-3 weeks',
      category: 'Communication AI'
    },
    {
      title: 'AI Content Creation Suite',
      description: 'Comprehensive AI-powered content generation for marketing, social media, and documentation',
      icon: FileText,
      features: [
        'Automated blog posts and articles',
        'Social media content generation',
        'Product descriptions and marketing copy',
        'Technical documentation creation',
        'SEO-optimized content with keyword integration'
      ],
      pricing: '$1,500 - $5,000/month',
      delivery: '1-2 weeks',
      category: 'Content AI'
    },
    {
      title: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and processing for business automation',
      icon: FileText,
      features: [
        'Automated data extraction from PDFs and forms',
        'Document classification and routing',
        'OCR with 99%+ accuracy',
        'Contract analysis and risk assessment',
        'Compliance monitoring and reporting'
      ],
      pricing: '$3,000 - $12,000/month',
      delivery: '3-4 weeks',
      category: 'Document AI'
    },
    {
      title: 'AI-Powered Talent Matching',
      description: 'Advanced recruitment platform with AI-driven candidate screening and matching',
      icon: Users,
      features: [
        'Resume parsing and skill extraction',
        'Cultural fit and personality analysis',
        'Automated interview scheduling',
        'Bias detection and elimination',
        'Predictive hiring success metrics'
      ],
      pricing: '$4,000 - $15,000/month',
      delivery: '4-6 weeks',
      category: 'HR AI'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis for quality control, security, and automation',
      icon: Eye,
      features: [
        'Real-time object detection and recognition',
        'Quality control and defect detection',
        'Facial recognition and access control',
        'Video analytics and monitoring',
        'Custom model training and deployment'
      ],
      pricing: '$5,000 - $20,000/month',
      delivery: '6-8 weeks',
      category: 'Vision AI'
    },
    {
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI for customer support and business automation',
      icon: Bot,
      features: [
        'Natural language understanding',
        'Multi-channel deployment (web, mobile, voice)',
        'Integration with business systems',
        'Sentiment analysis and escalation',
        'Continuous learning and improvement'
      ],
      pricing: '$2,000 - $10,000/month',
      delivery: '2-4 weeks',
      category: 'Conversational AI'
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'AI-driven forecasting and predictive modeling for business intelligence',
      icon: TrendingUp,
      features: [
        'Sales forecasting and demand planning',
        'Customer churn prediction',
        'Financial risk assessment',
        'Market trend analysis',
        'Real-time dashboard and alerts'
      ],
      pricing: '$6,000 - $25,000/month',
      delivery: '8-12 weeks',
      category: 'Analytics AI'
    },
    {
      title: 'AI-Powered Search Engine',
      description: 'Intelligent search with semantic understanding and personalized results',
      icon: Search,
      features: [
        'Semantic search with natural language queries',
        'Personalized search results',
        'Auto-complete and suggestions',
        'Multi-language support',
        'Analytics and search optimization'
      ],
      pricing: '$3,500 - $12,000/month',
      delivery: '4-6 weeks',
      category: 'Search AI'
    },
    {
      title: 'AI Voice & Speech Processing',
      description: 'Advanced voice recognition, synthesis, and real-time translation services',
      icon: Mic,
      features: [
        'Real-time speech-to-text with 99% accuracy',
        'Multi-language voice synthesis',
        'Voice cloning and personalization',
        'Real-time translation and interpretation',
        'Voice biometric authentication',
        'Audio content analysis and insights'
      ],
      pricing: '$4,000 - $15,000/month',
      delivery: '5-8 weeks',
      category: 'Voice AI'
    },
    {
      title: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud prevention and risk assessment using machine learning',
      icon: Shield,
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Anomaly detection algorithms',
        'Risk scoring and decision automation',
        'Multi-channel fraud prevention',
        'Compliance reporting and audit trails'
      ],
      pricing: '$5,000 - $20,000/month',
      delivery: '6-10 weeks',
      category: 'Security AI'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation system for e-commerce, content, and services',
      icon: Star,
      features: [
        'Collaborative and content-based filtering',
        'Real-time personalization',
        'A/B testing and optimization',
        'Cross-platform recommendation sync',
        'Performance analytics and insights',
        'Custom algorithm development'
      ],
      pricing: '$3,000 - $12,000/month',
      delivery: '4-7 weeks',
      category: 'Recommendation AI'
    },
    {
      title: 'AI-Powered Video Analytics',
      description: 'Intelligent video processing for security, marketing, and business insights',
      icon: Video,
      features: [
        'Real-time video object detection',
        'Facial recognition and tracking',
        'Emotion and sentiment analysis',
        'Video content summarization',
        'Automated video editing and optimization',
        'Live streaming analytics'
      ],
      pricing: '$6,000 - $25,000/month',
      delivery: '8-12 weeks',
      category: 'Video AI'
    },
    {
      title: 'AI Process Mining & Optimization',
      description: 'Intelligent process analysis and optimization for business workflows',
      icon: Settings,
      features: [
        'Automated process discovery',
        'Bottleneck identification and analysis',
        'Process optimization recommendations',
        'Compliance monitoring and reporting',
        'Real-time process monitoring',
        'Predictive process analytics'
      ],
      pricing: '$8,000 - $30,000/month',
      delivery: '10-16 weeks',
      category: 'Process AI'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and automation',
      icon: Network,
      features: [
        'Demand forecasting and planning',
        'Supplier risk assessment',
        'Route optimization and logistics',
        'Inventory optimization algorithms',
        'Supply chain visibility and tracking',
        'Risk mitigation and contingency planning'
      ],
      pricing: '$10,000 - $40,000/month',
      delivery: '12-20 weeks',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Customer Sentiment Analysis',
      description: 'Real-time customer sentiment monitoring across all communication channels',
      icon: MessageSquare,
      features: [
        'Multi-channel sentiment monitoring',
        'Real-time emotion detection',
        'Trend analysis and reporting',
        'Automated alert system',
        'Customer journey sentiment mapping',
        'Integration with CRM and support tools'
      ],
      pricing: '$2,500 - $8,000/month',
      delivery: '3-5 weeks',
      category: 'Sentiment AI'
    },
    {
      title: 'AI-Powered Code Generation',
      description: 'Intelligent code generation and software development assistance',
      icon: Code,
      features: [
        'Automated code generation from specifications',
        'Code review and optimization suggestions',
        'Bug detection and fixing recommendations',
        'Documentation generation',
        'Test case generation and validation',
        'Integration with development workflows'
      ],
      pricing: '$4,000 - $15,000/month',
      delivery: '6-10 weeks',
      category: 'Development AI'
    },
    {
      title: 'AI-Powered Market Research',
      description: 'Intelligent market analysis and competitive intelligence platform',
      icon: BarChart3,
      features: [
        'Automated market trend analysis',
        'Competitor monitoring and analysis',
        'Consumer behavior insights',
        'Price optimization recommendations',
        'Market opportunity identification',
        'Real-time market intelligence reports'
      ],
      pricing: '$5,000 - $18,000/month',
      delivery: '6-12 weeks',
      category: 'Market AI'
    },
    {
      title: 'AI-Powered Autonomous Trading System',
      description: 'Intelligent algorithmic trading platform with real-time market analysis and risk management',
      icon: TrendingUp,
      features: [
        'Real-time market data analysis and pattern recognition',
        'Automated trading strategy execution',
        'Risk management and portfolio optimization',
        'Backtesting and strategy validation',
        'Multi-asset class support (stocks, crypto, forex)',
        'Regulatory compliance and audit trails'
      ],
      pricing: '$15,000 - $50,000/month',
      delivery: '12-20 weeks',
      category: 'FinTech AI'
    },
    {
      title: 'AI-Powered Drug Discovery Platform',
      description: 'Machine learning platform for pharmaceutical research and drug development',
      icon: Brain,
      features: [
        'Molecular structure analysis and prediction',
        'Drug-target interaction modeling',
        'Toxicity and efficacy prediction',
        'Clinical trial optimization',
        'Patent landscape analysis',
        'Regulatory pathway guidance'
      ],
      pricing: '$25,000 - $100,000/month',
      delivery: '16-24 weeks',
      category: 'BioTech AI'
    },
    {
      title: 'AI-Powered Climate Change Modeling',
      description: 'Advanced climate prediction and environmental impact analysis using machine learning',
      icon: Globe,
      features: [
        'Climate pattern prediction and modeling',
        'Carbon footprint analysis and optimization',
        'Renewable energy resource assessment',
        'Environmental risk assessment',
        'Sustainability planning and recommendations',
        'Real-time environmental monitoring'
      ],
      pricing: '$10,000 - $40,000/month',
      delivery: '12-18 weeks',
      category: 'Climate AI'
    },
    {
      title: 'AI-Powered Autonomous Vehicle Systems',
      description: 'Intelligent autonomous vehicle control and navigation systems',
      icon: Car,
      features: [
        'Real-time object detection and avoidance',
        'Path planning and navigation optimization',
        'Traffic pattern analysis and prediction',
        'Vehicle-to-vehicle communication',
        'Safety monitoring and emergency response',
        'Fleet management and optimization'
      ],
      pricing: '$50,000 - $200,000/month',
      delivery: '20-32 weeks',
      category: 'Autonomous Vehicle AI'
    },
    {
      title: 'AI-Powered Quantum Computing Optimization',
      description: 'Machine learning algorithms optimized for quantum computing environments',
      icon: Cpu,
      features: [
        'Quantum algorithm optimization',
        'Quantum error correction and mitigation',
        'Quantum machine learning models',
        'Hybrid classical-quantum computing',
        'Quantum advantage analysis',
        'Quantum circuit optimization'
      ],
      pricing: '$30,000 - $120,000/month',
      delivery: '16-24 weeks',
      category: 'Quantum AI'
    },
    {
      title: 'AI-Powered Space Mission Planning',
      description: 'Intelligent mission planning and optimization for space exploration',
      icon: Rocket,
      features: [
        'Trajectory optimization and fuel efficiency',
        'Mission risk assessment and mitigation',
        'Resource allocation and scheduling',
        'Satellite constellation management',
        'Space debris tracking and avoidance',
        'Mission success probability modeling'
      ],
      pricing: '$40,000 - $150,000/month',
      delivery: '18-28 weeks',
      category: 'Space AI'
    },
    {
      title: 'AI-Powered Personalized Medicine',
      description: 'Precision medicine platform with AI-driven treatment recommendations',
      icon: Heart,
      features: [
        'Genomic analysis and interpretation',
        'Personalized treatment recommendations',
        'Drug interaction and side effect prediction',
        'Clinical trial matching',
        'Health outcome prediction',
        'Integration with electronic health records'
      ],
      pricing: '$20,000 - $80,000/month',
      delivery: '14-22 weeks',
      category: 'Precision Medicine AI'
    },
    {
      title: 'AI-Powered Cybersecurity Threat Hunting',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Threat intelligence integration',
        'Zero-day vulnerability detection',
        'Security orchestration and automation'
      ],
      pricing: '$12,000 - $45,000/month',
      delivery: '10-16 weeks',
      category: 'Cybersecurity AI'
    },
    {
      title: 'AI-Powered Smart City Management',
      description: 'Intelligent urban planning and management system for smart cities',
      icon: Building,
      features: [
        'Traffic flow optimization and management',
        'Energy consumption monitoring and optimization',
        'Public safety and emergency response',
        'Waste management optimization',
        'Citizen service automation',
        'Urban planning and development insights'
      ],
      pricing: '$25,000 - $100,000/month',
      delivery: '16-24 weeks',
      category: 'Smart City AI'
    },
    {
      title: 'AI-Powered Agricultural Optimization',
      description: 'Precision agriculture platform with crop monitoring and yield optimization',
      icon: Sprout,
      features: [
        'Crop health monitoring and disease detection',
        'Soil analysis and nutrient optimization',
        'Weather prediction and irrigation management',
        'Yield prediction and optimization',
        'Pest and disease prevention',
        'Supply chain and logistics optimization'
      ],
      pricing: '$8,000 - $30,000/month',
      delivery: '12-18 weeks',
      category: 'AgTech AI'
    },
    {
      title: 'AI-Powered Mental Health Assistant',
      description: 'Intelligent mental health monitoring and support platform',
      icon: Heart,
      features: [
        'Emotional state monitoring and analysis',
        'Personalized therapy recommendations',
        'Crisis detection and intervention',
        'Medication adherence tracking',
        'Therapist matching and scheduling',
        'Privacy-preserving data analysis'
      ],
      pricing: '$5,000 - $20,000/month',
      delivery: '8-14 weeks',
      category: 'Mental Health AI'
    },
    {
      title: 'AI-Powered Autonomous Robotics',
      description: 'Intelligent robotic systems with advanced AI capabilities for industrial and service applications',
      icon: Settings,
      features: [
        'Autonomous navigation and path planning',
        'Object recognition and manipulation',
        'Human-robot collaboration',
        'Predictive maintenance and self-diagnosis',
        'Adaptive learning and behavior modification',
        'Multi-robot coordination and swarm intelligence'
      ],
      pricing: '$30,000 - $150,000/month',
      delivery: '16-28 weeks',
      category: 'Robotics AI'
    },
    {
      title: 'AI-Powered Financial Risk Assessment',
      description: 'Advanced financial risk modeling and assessment using machine learning',
      icon: Shield,
      features: [
        'Credit risk scoring and assessment',
        'Market risk analysis and prediction',
        'Operational risk identification',
        'Regulatory compliance monitoring',
        'Fraud detection and prevention',
        'Portfolio optimization and stress testing'
      ],
      pricing: '$15,000 - $60,000/month',
      delivery: '10-18 weeks',
      category: 'FinTech AI'
    },
    {
      title: 'AI-Powered Supply Chain Intelligence',
      description: 'Intelligent supply chain optimization with predictive analytics and automation',
      icon: Network,
      features: [
        'Demand forecasting and planning',
        'Supplier risk assessment and monitoring',
        'Logistics optimization and routing',
        'Inventory optimization and management',
        'Supply chain visibility and tracking',
        'Risk mitigation and contingency planning'
      ],
      pricing: '$20,000 - $80,000/month',
      delivery: '12-20 weeks',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI-Powered Energy Grid Optimization',
      description: 'Smart grid management with AI-driven energy distribution and consumption optimization',
      icon: Zap,
      features: [
        'Energy demand prediction and load balancing',
        'Renewable energy integration and optimization',
        'Grid stability monitoring and control',
        'Energy storage optimization',
        'Fault detection and predictive maintenance',
        'Carbon footprint reduction and sustainability'
      ],
      pricing: '$25,000 - $100,000/month',
      delivery: '14-22 weeks',
      category: 'Energy AI'
    },
    {
      title: 'AI-Powered Legal Document Analysis',
      description: 'Intelligent legal document processing with contract analysis and compliance monitoring',
      icon: FileText,
      features: [
        'Contract analysis and risk assessment',
        'Legal document summarization and extraction',
        'Compliance monitoring and reporting',
        'Case law research and analysis',
        'Legal precedent identification',
        'Automated legal drafting and review'
      ],
      pricing: '$12,000 - $45,000/month',
      delivery: '8-16 weeks',
      category: 'Legal AI'
    },
    {
      title: 'AI-Powered Real Estate Intelligence',
      description: 'Intelligent real estate analysis with property valuation and market prediction',
      icon: Home,
      features: [
        'Property valuation and price prediction',
        'Market trend analysis and forecasting',
        'Investment opportunity identification',
        'Property condition assessment',
        'Neighborhood analysis and scoring',
        'Rental yield optimization'
      ],
      pricing: '$8,000 - $30,000/month',
      delivery: '6-14 weeks',
      category: 'Real Estate AI'
    },
    {
      title: 'AI-Powered Manufacturing Quality Control',
      description: 'Intelligent quality control systems with defect detection and process optimization',
      icon: Settings,
      features: [
        'Real-time defect detection and classification',
        'Quality prediction and prevention',
        'Process optimization and control',
        'Root cause analysis and correction',
        'Predictive quality maintenance',
        'Supply chain quality integration'
      ],
      pricing: '$18,000 - $70,000/month',
      delivery: '12-20 weeks',
      category: 'Manufacturing AI'
    },
    {
      title: 'AI-Powered Customer Experience Optimization',
      description: 'Intelligent customer experience management with personalization and optimization',
      icon: Users,
      features: [
        'Customer journey mapping and optimization',
        'Personalized experience delivery',
        'Sentiment analysis and emotion detection',
        'Customer satisfaction prediction',
        'Churn prevention and retention',
        'Cross-channel experience consistency'
      ],
      pricing: '$10,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Customer Experience AI'
    },
    {
      title: 'AI-Powered Content Generation',
      description: 'Advanced content creation platform with multi-format generation and optimization',
      icon: FileText,
      features: [
        'Multi-format content generation (text, images, video)',
        'Brand voice consistency and customization',
        'SEO optimization and keyword integration',
        'Content performance prediction',
        'Automated content scheduling',
        'Multi-language content creation'
      ],
      pricing: '$6,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Content AI'
    },
    {
      title: 'AI-Powered Predictive Maintenance',
      description: 'Intelligent equipment maintenance with failure prediction and optimization',
      icon: Settings,
      features: [
        'Equipment failure prediction and prevention',
        'Maintenance scheduling optimization',
        'Spare parts inventory management',
        'Cost-benefit analysis and optimization',
        'Maintenance history analysis',
        'Integration with IoT sensors and systems'
      ],
      pricing: '$15,000 - $60,000/month',
      delivery: '10-18 weeks',
      category: 'Maintenance AI'
    },
    {
      title: 'AI-Powered Human Resources Intelligence',
      description: 'Intelligent HR management with talent acquisition and employee optimization',
      icon: Users,
      features: [
        'Talent acquisition and candidate matching',
        'Employee performance prediction and optimization',
        'Workforce planning and optimization',
        'Employee engagement and satisfaction analysis',
        'Skills gap analysis and training recommendations',
        'Retention prediction and intervention'
      ],
      pricing: '$12,000 - $50,000/month',
      delivery: '10-18 weeks',
      category: 'HR AI'
    },
    {
      title: 'AI-Powered Marketing Intelligence',
      description: 'Intelligent marketing optimization with campaign analysis and customer insights',
      icon: Target,
      features: [
        'Campaign performance prediction and optimization',
        'Customer segmentation and targeting',
        'Marketing ROI analysis and optimization',
        'Content performance analysis',
        'Channel optimization and attribution',
        'Marketing automation and personalization'
      ],
      pricing: '$8,000 - $35,000/month',
      delivery: '6-14 weeks',
      category: 'Marketing AI'
    },
    {
      title: 'AI-Powered Sales Intelligence',
      description: 'Intelligent sales optimization with lead scoring and revenue prediction',
      icon: TrendingUp,
      features: [
        'Lead scoring and qualification',
        'Sales forecasting and revenue prediction',
        'Customer lifetime value prediction',
        'Sales process optimization',
        'Deal closure probability analysis',
        'Sales performance analytics and insights'
      ],
      pricing: '$10,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Sales AI'
    },
    {
      title: 'AI-Powered Operations Intelligence',
      description: 'Intelligent operations management with process optimization and efficiency',
      icon: Settings,
      features: [
        'Process optimization and automation',
        'Resource allocation and optimization',
        'Performance monitoring and analysis',
        'Bottleneck identification and resolution',
        'Cost optimization and reduction',
        'Operational efficiency improvement'
      ],
      pricing: '$15,000 - $60,000/month',
      delivery: '10-18 weeks',
      category: 'Operations AI'
    },
    {
      title: 'AI-Powered Research & Development',
      description: 'Intelligent R&D platform with innovation discovery and development optimization',
      icon: Brain,
      features: [
        'Innovation opportunity identification',
        'Research trend analysis and prediction',
        'Patent landscape analysis',
        'Technology scouting and evaluation',
        'R&D project optimization',
        'Innovation impact assessment'
      ],
      pricing: '$20,000 - $80,000/month',
      delivery: '12-20 weeks',
      category: 'R&D AI'
    },
    {
      title: 'AI-Powered Compliance Intelligence',
      description: 'Intelligent compliance monitoring with regulatory analysis and risk assessment',
      icon: Shield,
      features: [
        'Regulatory compliance monitoring',
        'Risk assessment and mitigation',
        'Policy analysis and interpretation',
        'Audit preparation and support',
        'Compliance reporting and documentation',
        'Regulatory change impact analysis'
      ],
      pricing: '$12,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'Compliance AI'
    },
    {
      title: 'AI-Powered Innovation Lab',
      description: 'Intelligent innovation platform with solution development and testing',
      icon: Brain,
      features: [
        'Innovation strategy development',
        'Solution ideation and evaluation',
        'Prototype development and testing',
        'Market validation and analysis',
        'Technology trend analysis',
        'Innovation portfolio management'
      ],
      pricing: '$25,000 - $100,000/month',
      delivery: '16-24 weeks',
      category: 'Innovation AI'
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent business analytics with predictive insights and decision support',
      icon: BarChart3,
      features: [
        'Business performance prediction',
        'Market trend analysis and forecasting',
        'Competitive intelligence and analysis',
        'Strategic planning support',
        'ROI analysis and optimization',
        'Business process optimization'
      ],
      pricing: '$15,000 - $60,000/month',
      delivery: '10-18 weeks',
      category: 'Business Intelligence AI'
    },
    {
      title: 'AI-Powered Customer Support Intelligence',
      description: 'Intelligent customer support with automated resolution and optimization',
      icon: MessageSquare,
      features: [
        'Automated ticket resolution',
        'Customer sentiment analysis',
        'Support agent optimization',
        'Knowledge base optimization',
        'Support process automation',
        'Customer satisfaction prediction'
      ],
      pricing: '$8,000 - $35,000/month',
      delivery: '6-14 weeks',
      category: 'Support AI'
    },
    {
      title: 'AI-Powered Data Intelligence',
      description: 'Intelligent data management with analysis, optimization, and insights',
      icon: Database,
      features: [
        'Data quality assessment and improvement',
        'Data pattern recognition and analysis',
        'Data governance and compliance',
        'Data integration and synchronization',
        'Data privacy and security',
        'Data-driven decision support'
      ],
      pricing: '$12,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'Data Intelligence AI'
    },
    {
      title: 'AI-Powered Security Intelligence',
      description: 'Intelligent security management with threat detection and response',
      icon: Shield,
      features: [
        'Threat detection and analysis',
        'Security incident response',
        'Vulnerability assessment and management',
        'Security policy optimization',
        'Risk assessment and mitigation',
        'Security compliance monitoring'
      ],
      pricing: '$15,000 - $60,000/month',
      delivery: '10-18 weeks',
      category: 'Security Intelligence AI'
    },
    {
      title: 'AI-Powered Performance Intelligence',
      description: 'Intelligent performance management with optimization and improvement',
      icon: TrendingUp,
      features: [
        'Performance monitoring and analysis',
        'Bottleneck identification and resolution',
        'Performance optimization recommendations',
        'Capacity planning and scaling',
        'Performance prediction and forecasting',
        'Performance improvement automation'
      ],
      pricing: '$10,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Performance Intelligence AI'
    },
    {
      title: 'AI-Powered Innovation Intelligence',
      description: 'Intelligent innovation management with discovery and development',
      icon: Brain,
      features: [
        'Innovation opportunity identification',
        'Technology trend analysis',
        'Innovation portfolio management',
        'Innovation impact assessment',
        'Innovation process optimization',
        'Innovation success prediction'
      ],
      pricing: '$20,000 - $80,000/month',
      delivery: '12-20 weeks',
      category: 'Innovation Intelligence AI'
    },
    {
      title: 'AI-Powered Excellence Intelligence',
      description: 'Intelligent excellence management with optimization and continuous improvement',
      icon: Award,
      features: [
        'Excellence benchmarking and analysis',
        'Best practice identification and implementation',
        'Excellence process optimization',
        'Excellence performance monitoring',
        'Excellence improvement recommendations',
        'Excellence culture development'
      ],
      pricing: '$25,000 - $100,000/month',
      delivery: '16-24 weeks',
      category: 'Excellence Intelligence AI'
    }
  ];

  const aiTechnologies = [
    { name: 'Machine Learning', icon: Brain, description: 'Custom ML models and algorithms' },
    { name: 'Natural Language Processing', icon: MessageSquare, description: 'Text analysis and generation' },
    { name: 'Computer Vision', icon: Eye, description: 'Image and video processing' },
    { name: 'Deep Learning', icon: Cpu, description: 'Neural networks and deep architectures' },
    { name: 'Reinforcement Learning', icon: Target, description: 'Autonomous decision making' },
    { name: 'Generative AI', icon: FileText, description: 'Content creation and synthesis' }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes',
      icon: Zap,
      stat: '80%'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation',
      icon: TrendingUp,
      stat: '60%'
    },
    {
      title: 'Enhanced Accuracy',
      description: 'Minimize human errors with AI precision',
      icon: Target,
      stat: '95%'
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock AI-powered services',
      icon: Clock,
      stat: '99.9%'
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}  />
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services"  />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm: p y-32">
        <div className="mx-auto max-w-7xl px-6 lg: p x-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-12 w-12 text-blue-600 mr-4"  />
              <Award className="h-6 w-6 text-blue-600 mr-2"  />
              <span className="text-base font-semibold leading-7 text-blue-600">AI Services</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm: tex t-6xl">
              Artificial Intelligence Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with cutting-edge AI technologies. From machine learning to natural language processing, 
              we deliver intelligent solutions that drive growth and efficiency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover: b g-blue-500 focus-visible: outline focus-visible: outlin e-2 focus-visible: outlin e-offset-2 focus-visible: outlin e-blue-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 inline"  />
              </Link>
              <Link
                href="/pricing-guide"
                className="text-sm font-semibold leading-6 text-gray-900 hover: tex t-blue-600"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm: p y-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg: p x-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl">
              Why Choose Our AI Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proven results and measurable impact for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm: gri d-cols-2 lg: gri d-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-24 sm: p y-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg: p x-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl">
              AI Technologies We Master
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cutting-edge AI technologies powering the future of business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm: gri d-cols-2 lg: gri d-cols-3">
            {aiTechnologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover: shado w-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <tech.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-4">{tech.name}</h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-24 sm: p y-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg: p x-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl">
              Our AI Service Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive AI solutions tailored to your business needs. All services include implementation, 
              training, and ongoing support. Contact us at{' '}
              <a href="mailto: klebe r@ziontechgroup.com" className="text-blue-600 hover: tex t-blue-500">
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <a href="tel:+13024640950" className="text-blue-600 hover: tex t-blue-500">
                +1 302 464 0950
              </a>{' '}
              for custom pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg: gri d-cols-2">
            {aiServices.map((service, index) => (
              <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover: shado w-lg transition-all duration-300">
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover: b g-blue-700 transition-colors">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{service.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0"  />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4"  />
                      <span>{service.delivery}</span>
                    </div>
                    <div className="font-semibold text-blue-600">{service.pricing}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover: tex t-blue-500 transition-colors group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover: translat e-x-1 transition-transform"  />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm: p y-24">
        <div className="mx-auto max-w-7xl px-6 lg: p x-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm: tex t-4xl">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let's discuss how our AI solutions can drive your business forward. 
              Get a free consultation and custom proposal.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover: b g-gray-50 focus-visible: outline focus-visible: outlin e-2 focus-visible: outlin e-offset-2 focus-visible: outlin e-white"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="text-sm font-semibold leading-6 text-white hover: tex t-blue-100"
              >
                Call +1 302 464 0950 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}