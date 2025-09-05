import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Trash2,
  Music,
  Shirt,
  Moon,
  Activity,
  MapPin
} from 'lucide-react';
const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    popular: true
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    popular: true
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    popular: true
  },
  {
<<<<<<< HEAD
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
    pricing: '$3,000 - $15,000 project',
    category: 'Computer Vision'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced language models.',
    icon: FileText,
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output'],
    pricing: '$1,500 - $8,000/month',
    category: 'Content'
  },
  {
    title: 'Voice AI Assistant',
    description: 'Voice-controlled AI assistant with speech recognition and synthesis.',
    icon: Mic,
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support'],
    pricing: '$2,500 - $12,000 project',
    category: 'Voice'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection using machine learning and behavioral analytics.',
    icon: Shield,
    features: ['Real-time Analysis', 'Behavioral Patterns', 'Risk Scoring', 'Automated Alerts'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
=======
    id: 8,
    title: 'Autonomous AI Agents',
    description: 'Self-operating AI agents that can perform complex tasks, make decisions, and interact with systems autonomously.',
    icon: Bot,
    category: 'Autonomous AI',
    price: 'Starting at $4,200/month',
    features: [
      'Autonomous task execution',
      'Multi-agent coordination',
      'Decision-making algorithms',
      'System integration capabilities',
      'Learning and adaptation',
      'Error handling and recovery',
      'Performance monitoring',
      'Custom agent development'
    ],
    benefits: [
      'Reduce manual work by 85%',
      '24/7 autonomous operation',
      'Improved efficiency and accuracy',
      'Scalable automation solutions'
    ],
    marketPrice: '$6,500-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Logistics, Finance, Healthcare'
  },
  {
    id: 9,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced AI-driven security solutions with threat detection, behavioral analysis, and automated response.',
    icon: Shield,
    category: 'AI Security',
    price: 'Starting at $3,800/month',
    features: [
      'Real-time threat detection',
      'Behavioral anomaly analysis',
      'Automated incident response',
      'Predictive security analytics',
      'Zero-day attack detection',
      'Security orchestration',
      'Compliance monitoring',
      'Threat intelligence integration'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 70%',
      'Automated response to 90% of incidents',
      'Proactive security posture'
    ],
    marketPrice: '$5,500-10,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Financial services, Healthcare, Government, Enterprise'
  },
  {
    id: 10,
    title: 'AI Content Generation & Marketing',
    description: 'Comprehensive AI-powered content creation, marketing automation, and campaign optimization.',
    icon: FileText,
    category: 'AI Marketing',
    price: 'Starting at $2,200/month',
    features: [
      'Multi-format content generation',
      'Brand voice consistency',
      'SEO-optimized content',
      'Social media automation',
      'Campaign performance analysis',
      'A/B testing optimization',
      'Personalized content delivery',
      'Content calendar management'
    ],
    benefits: [
      'Increase content production by 300%',
      'Improve engagement rates by 45%',
      'Reduce content costs by 60%',
      'Consistent brand messaging'
    ],
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing agencies, E-commerce, Media companies, SaaS'
  },
  {
    id: 11,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $3,500/month',
    features: [
      'Demand forecasting models',
      'Inventory optimization algorithms',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization',
      'Sustainability tracking',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve forecast accuracy by 50%',
      'Optimize delivery routes by 30%',
      'Minimize supply chain disruptions'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce'
  },
  {
    id: 12,
    title: 'AI-Powered Financial Trading',
    description: 'Advanced AI trading algorithms with market analysis, risk management, and automated trading strategies.',
    icon: TrendingUp,
    category: 'AI Finance',
    price: 'Starting at $5,000/month',
    features: [
      'Algorithmic trading strategies',
      'Market sentiment analysis',
      'Risk assessment models',
      'Portfolio optimization',
      'Real-time market monitoring',
      'Backtesting capabilities',
      'Regulatory compliance',
      'Performance analytics'
    ],
    benefits: [
      'Improve trading performance by 35%',
      'Reduce risk exposure by 40%',
      '24/7 market monitoring',
      'Data-driven investment decisions'
    ],
    marketPrice: '$7,500-15,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Investment firms, Hedge funds, Trading companies, Banks'
  },
  {
    id: 13,
    title: 'AI-Powered Climate & Environmental Monitoring',
    description: 'Environmental AI solutions for climate monitoring, pollution detection, and sustainability optimization.',
    icon: Globe,
    category: 'Environmental AI',
    price: 'Starting at $2,800/month',
    features: [
      'Climate pattern analysis',
      'Pollution monitoring',
      'Carbon footprint tracking',
      'Renewable energy optimization',
      'Environmental risk assessment',
      'Sustainability reporting',
      'Predictive environmental modeling',
      'Compliance monitoring'
    ],
    benefits: [
      'Improve environmental compliance by 80%',
      'Reduce carbon footprint by 30%',
      'Predict environmental risks',
      'Optimize resource usage'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Energy companies, Government, Environmental agencies, Manufacturing'
  },
  {
    id: 14,
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document processing with contract analysis, compliance checking, and legal research automation.',
    icon: BookOpen,
    category: 'Legal AI',
    price: 'Starting at $3,200/month',
    features: [
      'Contract analysis and review',
      'Legal document search',
      'Compliance checking',
      'Risk assessment',
      'Legal research automation',
      'Document summarization',
      'Due diligence support',
      'Case law analysis'
    ],
    benefits: [
      'Reduce document review time by 75%',
      'Improve accuracy by 90%',
      'Identify risks and opportunities',
      'Accelerate legal processes'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Law firms, Corporate legal, Government, Legal tech companies'
  },
  {
    id: 15,
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization platform for customer experiences, product recommendations, and content customization.',
    icon: Users,
    category: 'Personalization AI',
    price: 'Starting at $2,500/month',
    features: [
      'Customer behavior analysis',
      'Product recommendation engines',
      'Content personalization',
      'Dynamic pricing optimization',
      'Customer journey mapping',
      'A/B testing automation',
      'Real-time personalization',
      'Cross-channel consistency'
    ],
    benefits: [
      'Increase conversion rates by 40%',
      'Improve customer satisfaction by 35%',
      'Boost revenue by 25%',
      'Enhanced customer engagement'
    ],
    marketPrice: '$3,800-8,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Retail'
  },
  {
    id: 16,
    title: 'AI-Powered Voice & Speech Technology',
    description: 'Advanced voice recognition, speech synthesis, and conversational AI for various applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,000/month',
    features: [
      'Multi-language speech recognition',
      'Natural speech synthesis',
      'Voice biometrics',
      'Real-time transcription',
      'Voice command processing',
      'Emotion detection',
      'Accent adaptation',
      'Noise cancellation'
    ],
    benefits: [
      'Improve accessibility by 60%',
      'Enhance user experience',
      'Enable hands-free operations',
      'Support multiple languages'
    ],
    marketPrice: '$3,000-6,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Healthcare, Customer service, Education, Accessibility'
  },
  {
    id: 17,
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent equipment monitoring and maintenance prediction to prevent failures and optimize operations.',
    icon: Settings,
    category: 'Predictive Maintenance',
    price: 'Starting at $3,000/month',
    features: [
      'Equipment health monitoring',
      'Failure prediction algorithms',
      'Maintenance scheduling optimization',
      'Spare parts inventory management',
      'Performance analytics',
      'Cost optimization',
      'Risk assessment',
      'Integration with IoT sensors'
    ],
    benefits: [
      'Reduce unplanned downtime by 50%',
      'Lower maintenance costs by 30%',
      'Extend equipment lifespan by 25%',
      'Improve operational efficiency'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Energy, Transportation, Facilities management'
  },
  {
    id: 18,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems using machine learning and behavioral analysis.',
    icon: Shield,
    category: 'Fraud Detection',
    price: 'Starting at $2,800/month',
    features: [
      'Real-time fraud detection',
      'Behavioral pattern analysis',
      'Risk scoring algorithms',
      'Transaction monitoring',
      'Identity verification',
      'Anomaly detection',
      'False positive reduction',
      'Regulatory compliance'
    ],
    benefits: [
      'Detect fraud 5x faster',
      'Reduce false positives by 60%',
      'Prevent 95% of fraudulent transactions',
      'Comply with regulations'
    ],
    marketPrice: '$4,000-8,500/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banks, Payment processors, E-commerce, Insurance'
  },
  {
    id: 19,
    title: 'AI-Powered Recommendation Systems',
    description: 'Advanced recommendation engines for products, content, and services across various industries.',
    icon: Target,
    category: 'Recommendation AI',
    price: 'Starting at $2,200/month',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendation models',
      'Real-time recommendations',
      'A/B testing framework',
      'Performance analytics',
      'Cold start problem solving',
      'Multi-criteria optimization'
    ],
    benefits: [
      'Increase sales by 30%',
      'Improve user engagement by 45%',
      'Reduce churn by 25%',
      'Enhanced user experience'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Streaming services, Social media, News platforms'
  },
  {
    id: 20,
    title: 'AI-Powered Quality Assurance',
    description: 'Intelligent quality control and testing systems for manufacturing, software, and service industries.',
    icon: CheckCircle,
    category: 'Quality AI',
    price: 'Starting at $2,500/month',
    features: [
      'Automated defect detection',
      'Quality prediction models',
      'Statistical process control',
      'Root cause analysis',
      'Test case generation',
      'Performance monitoring',
      'Compliance checking',
      'Continuous improvement'
    ],
    benefits: [
      'Improve quality by 40%',
      'Reduce defects by 60%',
      'Lower testing costs by 50%',
      'Faster time to market'
    ],
    marketPrice: '$3,800-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Software development, Healthcare, Automotive'
  },
  {
    id: 7,
    title: 'AI Drug Discovery & Development',
    description: 'AI-powered drug discovery platform with molecular analysis, compound screening, and clinical trial optimization.',
>>>>>>> main
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $200,000 project',
    category: 'Healthcare'
  },
  {
    title: 'AI Financial Modeling',
    description: 'Advanced financial modeling and risk assessment using machine learning.',
    icon: TrendingUp,
    features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading'],
    pricing: '$10,000 - $50,000 project',
    category: 'Finance'
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis'],
    pricing: '$15,000 - $75,000 project',
    category: 'Logistics'
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Personalized recommendation system for e-commerce and content platforms.',
    icon: Target,
    features: ['Collaborative Filtering', 'Content-Based Filtering', 'Real-time Updates', 'A/B Testing'],
    pricing: '$3,000 - $15,000 setup',
    category: 'E-commerce'
  },
  {
    title: 'AI Social Media Manager',
    description: 'Automated social media management with content creation and scheduling.',
    icon: Globe,
    features: ['Content Generation', 'Optimal Posting Times', 'Engagement Analysis', 'Brand Voice Consistency'],
    pricing: '$500 - $2,500/month',
    category: 'Marketing'
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review and quality assurance using AI analysis.',
    icon: Code,
    features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practices'],
    pricing: '$2,000 - $10,000 setup',
    category: 'Development'
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document extraction, classification, and data processing.',
    icon: FileText,
    features: ['OCR Technology', 'Document Classification', 'Data Extraction', 'Workflow Automation'],
    pricing: '$1,500 - $8,000/month',
    category: 'Document Management'
  },
  {
    title: 'AI Video Analytics',
    description: 'Advanced video analysis for security, marketing, and business intelligence.',
    icon: Video,
    features: ['Object Tracking', 'Behavior Analysis', 'Crowd Counting', 'Anomaly Detection'],
    pricing: '$4,000 - $20,000 project',
    category: 'Video Analytics'
  },
  {
    title: 'AI Talent Matching',
    description: 'Intelligent candidate matching and recruitment optimization.',
    icon: Users,
    features: ['Resume Analysis', 'Skill Matching', 'Cultural Fit Assessment', 'Interview Scheduling'],
    pricing: '$2,500 - $12,000 setup',
    category: 'HR & Recruitment'
  },
  {
    title: 'AI Energy Optimization',
    description: 'Smart energy management and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Consumption Analysis', 'Predictive Maintenance', 'Load Balancing', 'Cost Optimization'],
    pricing: '$8,000 - $40,000 project',
    category: 'Energy Management'
  },
  {
    title: 'AI Quality Assurance',
    description: 'Automated quality control and defect detection in manufacturing.',
    icon: CheckCircle,
    features: ['Visual Inspection', 'Defect Classification', 'Quality Metrics', 'Process Optimization'],
    pricing: '$10,000 - $50,000 project',
    category: 'Manufacturing'
  },
  {
    title: 'AI Legal Document Analysis',
    description: 'Intelligent legal document review and contract analysis.',
    icon: BookOpen,
    features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Legal Tech'
  },
  {
    title: 'AI Customer Sentiment Analysis',
    description: 'Real-time customer sentiment analysis across multiple channels.',
    icon: MessageSquare,
    features: ['Multi-channel Analysis', 'Emotion Detection', 'Trend Analysis', 'Alert System'],
    pricing: '$1,000 - $5,000/month',
    category: 'Customer Analytics'
  },
  {
    title: 'AI-Powered Autonomous Vehicles',
description: 'Complete autonomous vehicle systems with advanced perception and decision-making capabilities.',
    icon: Car,
    features: ['Computer Vision', 'Sensor Fusion', 'Path Planning', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000/project',
    category: 'Autonomous Systems',
    popular: true
  },
  {
title: 'Generative AI Content Creation Suite',
    description: 'Advanced AI-powered content generation for text, images, videos, and audio.',
    icon: FileText,
    features: ['Text Generation', 'Image Creation', 'Video Production', 'Voice Synthesis'],
    pricing: '$2,000 - $15,000/month',
    category: 'Content Generation',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Platform',
    description: 'Next-generation cybersecurity using AI for threat detection and response.',
    icon: Shield,
    features: ['Threat Hunting', 'Behavioral Analysis', 'Automated Response', 'Zero-day Detection'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'AI Climate Change Modeling',
    description: 'Advanced climate modeling and environmental impact prediction using AI.',
    icon: Sprout,
    features: ['Climate Prediction', 'Carbon Footprint Analysis', 'Environmental Monitoring', 'Policy Impact Assessment'],
    pricing: '$25,000 - $150,000/project',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'AI-Powered Space Exploration',
    description: 'AI systems for space mission planning, satellite operations, and planetary exploration.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Planetary Analysis', 'Autonomous Navigation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Space Technology',
    popular: true
  },
  {
    title: 'AI Quantum Computing Optimization',
    description: 'AI algorithms optimized for quantum computing systems and quantum machine learning.',
    icon: Cpu,
    features: ['Quantum Algorithm Design', 'Quantum ML Models', 'Optimization Problems', 'Quantum Simulation'],
    pricing: '$30,000 - $200,000/project',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI-Powered Brain-Computer Interface',
    description: 'Advanced BCI systems for medical applications and human-computer interaction.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Diagnostics'],
    pricing: '$40,000 - $300,000/project',
    category: 'Neurotechnology',
    popular: true
  },
  {
    title: 'AI Digital Twin for Smart Cities',
    description: 'Comprehensive digital twin platform for smart city management and optimization.',
    icon: Building,
    features: ['Real-time Simulation', 'Traffic Optimization', 'Resource Management', 'Predictive Analytics'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Smart Cities',
    popular: true
  },
  {
    title: 'AI-Powered Precision Medicine',
    description: 'Personalized medicine using AI for treatment optimization and drug discovery.',
    icon: Heart,
    features: ['Genomic Analysis', 'Treatment Optimization', 'Drug Discovery', 'Clinical Decision Support'],
    pricing: '$25,000 - $200,000/project',
    category: 'Precision Medicine',
    popular: true
  },
  {
    title: 'AI Agricultural Intelligence',
    description: 'Smart farming solutions with AI for crop optimization and yield prediction.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$10,000 - $75,000/project',
    category: 'AgTech',
    popular: true
  },
  {
    title: 'AI-Powered Financial Trading',
    description: 'Advanced algorithmic trading systems with AI-driven market analysis.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Algorithmic Trading', 'Risk Management', 'Portfolio Optimization'],
    pricing: '$20,000 - $150,000/setup',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'AI Metaverse Development Platform',
    description: 'Complete AI-powered metaverse creation and management platform.',
    icon: Globe,
    features: ['Virtual World Creation', 'Avatar AI', 'Behavioral Simulation', 'Content Generation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Metaverse',
    popular: true
  },
  {
    title: 'AI-Powered Language Translation',
    description: 'Real-time, context-aware translation with cultural nuance understanding.',
    icon: Globe,
    features: ['100+ Languages', 'Cultural Context', 'Real-time Processing', 'Voice Translation'],
    pricing: '$0.01 - $0.10 per 1K characters',
    category: 'Language AI',
    popular: true
  },
  {
    title: 'AI Emotional Intelligence Platform',
    description: 'Advanced emotional AI for understanding and responding to human emotions.',
    icon: Heart,
    features: ['Emotion Recognition', 'Empathy Modeling', 'Social Interaction', 'Mental Health Support'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Emotional AI',
    popular: true
  },
  {
    title: 'AI-Powered Scientific Discovery',
    description: 'AI systems for accelerating scientific research and discovery across multiple domains.',
    icon: BookOpen,
    features: ['Hypothesis Generation', 'Literature Analysis', 'Experiment Design', 'Data Interpretation'],
    pricing: '$30,000 - $250,000/project',
    category: 'Scientific AI',
    popular: true
  },
  {
    title: 'AI Edge Computing Intelligence',
    description: 'AI processing at the edge for real-time decision making in IoT environments.',
    icon: Network,
    features: ['Edge AI Processing', 'Real-time Inference', 'Resource Optimization', 'Distributed Learning'],
    pricing: '$20,000 - $150,000/setup',
    category: 'Edge AI',
    popular: true
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Advanced personal AI assistant with multi-modal interaction capabilities.',
    icon: Bot,
    features: ['Voice Interaction', 'Task Automation', 'Learning & Adaptation', 'Privacy Protection'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Personal AI',
    popular: true
  },
  {
    title: 'AI Creative Design Studio',
    description: 'AI-powered creative design platform for graphics, music, and multimedia content.',
    icon: Image,
    features: ['Graphic Design', 'Music Composition', 'Video Editing', '3D Modeling'],
    pricing: '$1,000 - $10,000/month',
    category: 'Creative AI',
    popular: true
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Advanced predictive maintenance using AI for industrial equipment and machinery.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Performance Optimization', 'Cost Reduction'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Industrial AI',
    popular: true
  },
  {
    title: 'AI-Powered Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for solving complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Hybrid Classical-Quantum', 'Optimization Problems', 'Pattern Recognition'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI-Powered Synthetic Biology Platform',
    description: 'AI-driven synthetic biology for designing novel biological systems and organisms.',
    icon: Sprout,
    features: ['DNA Design', 'Protein Engineering', 'Metabolic Modeling', 'Biological Simulation'],
    pricing: '$75,000 - $750,000/project',
    category: 'Synthetic Biology',
    popular: true
  },
  {
    title: 'AI-Powered Fusion Energy Optimization',
    description: 'AI systems for optimizing nuclear fusion reactor designs and plasma control.',
    icon: Zap,
    features: ['Plasma Modeling', 'Reactor Optimization', 'Magnetic Field Control', 'Energy Efficiency'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Fusion Energy',
    popular: true
  },
  {
    title: 'AI-Powered Consciousness Simulation',
    description: 'Advanced AI systems for simulating consciousness and cognitive processes.',
    icon: Brain,
    features: ['Consciousness Modeling', 'Cognitive Simulation', 'Neural Networks', 'Self-Awareness'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Consciousness AI',
    popular: true
  },
  {
    title: 'AI-Powered Time Series Forecasting',
    description: 'Advanced time series analysis and forecasting for complex multi-variate data.',
    icon: TrendingUp,
    features: ['Multi-variate Analysis', 'Long-term Forecasting', 'Anomaly Detection', 'Uncertainty Quantification'],
    pricing: '$25,000 - $200,000/setup',
    category: 'Time Series AI',
    popular: true
  },
  {
    title: 'AI-Powered Molecular Dynamics Simulation',
    description: 'AI-accelerated molecular dynamics for drug discovery and materials science.',
    icon: Heart,
    features: ['Molecular Simulation', 'Drug-Target Interaction', 'Materials Design', 'Quantum Effects'],
    pricing: '$40,000 - $400,000/project',
    category: 'Molecular AI',
    popular: true
  },
  {
    title: 'AI-Powered Gravitational Wave Detection',
    description: 'AI systems for detecting and analyzing gravitational waves from cosmic events.',
    icon: Rocket,
    features: ['Signal Processing', 'Noise Filtering', 'Event Classification', 'Source Localization'],
    pricing: '$60,000 - $600,000/project',
    category: 'Astrophysics AI',
    popular: true
  },
  {
    title: 'AI-Powered Climate Engineering',
    description: 'AI systems for climate engineering and geoengineering solutions.',
    icon: Sprout,
    features: ['Climate Modeling', 'Geoengineering Design', 'Impact Assessment', 'Risk Analysis'],
    pricing: '$80,000 - $800,000/project',
    category: 'Climate Engineering',
    popular: true
  },
  {
    title: 'AI-Powered Neural Architecture Search',
    description: 'Automated neural network architecture design and optimization using AI.',
    icon: Network,
    features: ['Architecture Search', 'Hyperparameter Optimization', 'Model Compression', 'Performance Prediction'],
    pricing: '$30,000 - $300,000/setup',
    category: 'AutoML',
    popular: true
  },
  {
    title: 'AI-Powered Dark Matter Detection',
    description: 'AI systems for detecting and analyzing dark matter particles and interactions.',
    icon: Eye,
    features: ['Particle Detection', 'Signal Analysis', 'Background Rejection', 'Statistical Analysis'],
    pricing: '$70,000 - $700,000/project',
    category: 'Particle Physics AI',
    popular: true
  },
  {
    title: 'AI-Powered Exoplanet Discovery',
    description: 'AI systems for discovering and characterizing exoplanets from astronomical data.',
    icon: Globe,
    features: ['Light Curve Analysis', 'Transit Detection', 'Atmospheric Modeling', 'Habitability Assessment'],
    pricing: '$45,000 - $450,000/project',
    category: 'Astrobiology AI',
    popular: true
  },
  {
    title: 'AI-Powered Protein Folding Prediction',
    description: 'Advanced AI for predicting protein structures and folding patterns.',
    icon: Heart,
    features: ['Structure Prediction', 'Folding Simulation', 'Function Analysis', 'Drug Design'],
    pricing: '$35,000 - $350,000/setup',
    category: 'Structural Biology AI',
    popular: true
  },
  {
    title: 'AI-Powered Cryptocurrency Mining Optimization',
    description: 'AI-optimized cryptocurrency mining with energy efficiency and profit maximization.',
    icon: TrendingUp,
    features: ['Hash Rate Optimization', 'Energy Efficiency', 'Profit Maximization', 'Market Analysis'],
    pricing: '$20,000 - $200,000/setup',
    category: 'Crypto AI',
    popular: true
  },
  {
    title: 'AI-Powered Virtual Reality Content Generation',
    description: 'AI-generated immersive VR content with realistic physics and interactions.',
    icon: Monitor,
    features: ['3D Content Generation', 'Physics Simulation', 'Interactive Design', 'Realistic Rendering'],
    pricing: '$25,000 - $250,000/project',
    category: 'VR AI',
    popular: true
  },
  {
    title: 'AI-Powered Augmented Reality Intelligence',
    description: 'Advanced AR systems with AI-powered object recognition and spatial understanding.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Real-time Processing', 'Context Awareness'],
    pricing: '$30,000 - $300,000/setup',
    category: 'AR AI',
    popular: true
  },
  {
    title: 'AI-Powered Holographic Display Technology',
    description: 'AI-optimized holographic displays with real-time content generation and interaction.',
    icon: Monitor,
    features: ['Hologram Generation', 'Real-time Rendering', 'Interactive Controls', '3D Projection'],
    pricing: '$40,000 - $400,000/project',
    category: 'Holographic AI',
    popular: true
  },
  {
    title: 'AI-Powered Teleportation Simulation',
    description: 'AI systems for simulating quantum teleportation and quantum communication protocols.',
    icon: Network,
    features: ['Quantum Simulation', 'Entanglement Modeling', 'Protocol Optimization', 'Error Correction'],
    pricing: '$55,000 - $550,000/project',
    category: 'Quantum Communication',
    popular: true
  },
  {
    title: 'AI-Powered Time Travel Simulation',
    description: 'AI systems for simulating time travel scenarios and temporal paradoxes.',
    icon: Clock,
    features: ['Temporal Modeling', 'Paradox Analysis', 'Causality Simulation', 'Timeline Optimization'],
    pricing: '$90,000 - $900,000/project',
    category: 'Temporal AI',
    popular: true
  },
  {
    title: 'AI-Powered Multiverse Exploration',
    description: 'AI systems for exploring and simulating multiple universe scenarios and theories.',
    icon: Globe,
    features: ['Multiverse Modeling', 'Theory Testing', 'Scenario Simulation', 'Physics Exploration'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Theoretical Physics AI',
    popular: true
  },
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'Advanced blockchain analysis and cryptocurrency intelligence using AI.',
    icon: Database,
    features: ['Transaction Analysis', 'Pattern Recognition', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: '$10,000 - $75,000/setup',
    category: 'Blockchain AI',
    popular: true
  },
  {
    title: 'AI-Powered Augmented Reality',
    description: 'Intelligent AR systems with real-time object recognition and interaction.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Gesture Control', 'Real-time Rendering'],
    pricing: '$15,000 - $100,000/project',
    category: 'AR AI',
    popular: true
  },
  {
    title: 'AI-Powered Virtual Reality Therapy',
    description: 'VR-based therapeutic interventions powered by AI for mental health treatment.',
    icon: Heart,
    features: ['Therapy Sessions', 'Progress Tracking', 'Personalized Treatment', 'Biometric Monitoring'],
    pricing: '$25,000 - $200,000/setup',
    category: 'VR Therapy AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Home Intelligence',
    description: 'Complete smart home automation with AI learning and adaptation.',
    icon: Home,
    features: ['Device Control', 'Energy Optimization', 'Security Monitoring', 'Predictive Maintenance'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Smart Home AI',
    popular: true
  },
  {
    title: 'AI-Powered Gaming Intelligence',
    description: 'Advanced AI for game development, NPC behavior, and player experience optimization.',
    icon: Gamepad2,
    features: ['NPC AI', 'Procedural Generation', 'Player Behavior Analysis', 'Dynamic Difficulty'],
    pricing: '$20,000 - $150,000/project',
    category: 'Gaming AI',
    popular: true
  },
  {
    title: 'AI-Powered Waste Management',
    description: 'Intelligent waste sorting, recycling optimization, and environmental monitoring.',
    icon: Trash2,
    features: ['Waste Classification', 'Recycling Optimization', 'Route Planning', 'Environmental Impact'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'AI-Powered Sports Analytics',
    description: 'Advanced sports performance analysis and strategy optimization using AI.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prevention', 'Strategy Optimization', 'Player Scouting'],
    pricing: '$10,000 - $75,000/project',
    category: 'Sports AI',
    popular: true
  },
  {
    title: 'AI-Powered Music Composition',
    description: 'AI-generated music composition with style learning and emotional intelligence.',
    icon: Music,
    features: ['Style Learning', 'Emotional Composition', 'Multi-instrument', 'Real-time Generation'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Music AI',
    popular: true
  },
  {
    title: 'AI-Powered Fashion Design',
    description: 'AI-driven fashion design with trend analysis and personalized recommendations.',
    icon: Shirt,
    features: ['Trend Analysis', 'Design Generation', 'Size Optimization', 'Style Matching'],
    pricing: '$8,000 - $50,000/setup',
    category: 'Fashion AI',
    popular: true
  },
  {
    title: 'AI-Powered Pet Care',
    description: 'Intelligent pet monitoring, health tracking, and behavior analysis.',
    icon: Heart,
    features: ['Health Monitoring', 'Behavior Analysis', 'Diet Optimization', 'Emergency Alerts'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Pet Care AI',
    popular: true
  },
  {
    title: 'AI-Powered Sleep Optimization',
    description: 'AI systems for sleep pattern analysis and optimization for better health.',
    icon: Moon,
    features: ['Sleep Analysis', 'Pattern Recognition', 'Optimization Recommendations', 'Health Integration'],
    pricing: '$1,500 - $10,000/setup',
    category: 'Health AI',
    popular: true
  },
  {
    title: 'AI-Powered Language Learning',
    description: 'Personalized language learning with AI tutoring and pronunciation coaching.',
    icon: BookOpen,
    features: ['Personalized Curriculum', 'Pronunciation Analysis', 'Progress Tracking', 'Cultural Context'],
    pricing: '$3,000 - $20,000/setup',
    category: 'Education AI',
    popular: true
  },
  {
    title: 'AI-Powered Meditation Guide',
    description: 'Intelligent meditation and mindfulness guidance with personalized recommendations.',
    icon: Heart,
    features: ['Personalized Sessions', 'Progress Tracking', 'Stress Analysis', 'Guided Meditation'],
    pricing: '$1,000 - $8,000/setup',
    category: 'Wellness AI',
    popular: true
  },
  {
    title: 'AI-Powered Home Security',
    description: 'Advanced home security with AI-powered threat detection and response.',
    icon: Shield,
    features: ['Threat Detection', 'Facial Recognition', 'Behavioral Analysis', 'Automated Response'],
    pricing: '$5,000 - $35,000/setup',
    category: 'Security AI',
    popular: true
  },
  {
    title: 'AI-Powered Investment Advisor',
    description: 'Personalized investment advice and portfolio management using AI.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Market Prediction', 'Automated Trading'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Finance AI',
    popular: true
  },
  {
    title: 'AI-Powered Dating Assistant',
    description: 'Intelligent dating platform with personality matching and conversation coaching.',
    icon: Heart,
    features: ['Personality Analysis', 'Match Optimization', 'Conversation Coaching', 'Safety Monitoring'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Social AI',
    popular: true
  },
  {
    title: 'AI-Powered Travel Planner',
    description: 'Comprehensive travel planning with AI-powered recommendations and optimization.',
    icon: MapPin,
    features: ['Itinerary Planning', 'Budget Optimization', 'Real-time Updates', 'Personalized Recommendations'],
    pricing: '$3,000 - $20,000/setup',
    category: 'Travel AI',
    popular: true
  },
  {
    title: 'AI-Powered Fitness Coach',
    description: 'Personalized fitness training and nutrition guidance using AI.',
    icon: Activity,
    features: ['Workout Planning', 'Form Analysis', 'Nutrition Guidance', 'Progress Tracking'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Fitness AI',
    popular: true
  },
  {
    title: 'AI-Powered Real Estate Analysis',
    description: 'Intelligent real estate market analysis and property valuation using AI.',
    icon: Home,
    features: ['Market Analysis', 'Property Valuation', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$5,000 - $40,000/setup',
    category: 'Real Estate AI',
    popular: true
  }
];
<<<<<<< HEAD
const industries = [{ name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];
const benefits = [{
    icon: Zap,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and processes',
    stat: '40%'
  },
  {
    icon: TrendingUp,
    title: 'Better Insights',
    description: 'Data-driven decision making',
    stat: '60%'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'AI-powered threat detection',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Improved Experience',
    description: 'Personalized user interactions',
    stat: '85%'
  }
=======

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "AI Healthcare", count: aiServices.filter(s => s.category === "AI Healthcare").length },
  { name: "AI Finance", count: aiServices.filter(s => s.category === "AI Finance").length },
  { name: "AI Marketing", count: aiServices.filter(s => s.category === "AI Marketing").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Predictive Maintenance", count: aiServices.filter(s => s.category === "Predictive Maintenance").length },
  { name: "Fraud Detection", count: aiServices.filter(s => s.category === "Fraud Detection").length },
  { name: "Recommendation AI", count: aiServices.filter(s => s.category === "Recommendation AI").length },
  { name: "Quality AI", count: aiServices.filter(s => s.category === "Quality AI").length },
  { name: "Personalization AI", count: aiServices.filter(s => s.category === "Personalization AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length }
>>>>>>> main
];
export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <Head>
                  <title>AI Services - Zion Tech Group</title>
                  <meta name="description" content="Cutting-edge AI solutions including machine learning, natural language processing, computer vision, and intelligent automation." />
                  <meta name="keywords" content="AI services, machine learning, NLP, computer vision, artificial intelligence, automation" />
                  </Head>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
<div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<div className="flex items-center justify-center mb-6">
                  <Brain className="h-16 w-16 text-blue-400 mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
                AI{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
</h1>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we deliver AI that works.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get AI Consultation
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
                  <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI services designed to solve real business challenges and drive innovation.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
whileHover={{ y: -5 }} ">
                  <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                  <IconComponent className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>
                  <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600">{service.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Industries Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI solutions are tailored for various industries and use cases.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results and measurable impact for your business.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
<div className="container mx-auto px-4 text-center">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Your AI Journey
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
                  </div>
  );
}
