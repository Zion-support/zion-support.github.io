import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
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
  Package,
  DollarSign
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    link: 'https://aiemail.ziontechgroup.com'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    link: 'https://predictiveai.ziontechgroup.com'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    link: 'https://aichatbot.ziontechgroup.com'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
    pricing: '$3,000 - $15,000 project',
    category: 'Computer Vision',
    link: 'https://computervision.ziontechgroup.com'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced language models.',
    icon: FileText,
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output'],
    pricing: '$1,500 - $8,000/month',
    category: 'Content',
    link: 'https://aicontent.ziontechgroup.com'
  },
  {
    title: 'Voice AI Assistant',
    description: 'Voice-controlled AI assistant with speech recognition and synthesis.',
    icon: Mic,
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support'],
    pricing: '$2,500 - $12,000 project',
    category: 'Voice',
    link: 'https://voiceai.ziontechgroup.com'
  },
  {
    title: 'AI Fraud Detection System',
    description: 'Real-time fraud detection using machine learning and behavioral analysis.',
    icon: Shield,
    features: ['Real-time Detection', 'Behavioral Analysis', 'Risk Scoring', 'API Integration'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Security',
    popular: true,
    link: 'https://aifraud.ziontechgroup.com'
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document extraction and processing using OCR and NLP.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Form Recognition', 'Automated Workflows'],
    pricing: '$2,000 - $10,000/month',
    category: 'Document AI',
    link: 'https://aidocuments.ziontechgroup.com'
  },
  {
    title: 'AI Recommendation Engine',
    description: 'Personalized recommendation system using collaborative filtering and deep learning.',
    icon: Target,
    features: ['Collaborative Filtering', 'Deep Learning', 'Real-time Updates', 'A/B Testing'],
    pricing: '$3,000 - $15,000/month',
    category: 'Recommendations',
    link: 'https://airecommendations.ziontechgroup.com'
  },
  {
    title: 'AI Translation Service',
    description: 'Advanced neural machine translation with context awareness and domain adaptation.',
    icon: Globe,
    features: ['Neural Translation', 'Context Awareness', 'Domain Adaptation', 'API Integration'],
    pricing: '$1,000 - $5,000/month',
    category: 'Translation',
    link: 'https://aitranslation.ziontechgroup.com'
  },
  {
    title: 'AI Code Generation',
    description: 'Automated code generation and assistance using large language models.',
    icon: Code,
    features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation'],
    pricing: '$2,500 - $12,000/month',
    category: 'Development',
    link: 'https://aicode.ziontechgroup.com'
  },
  {
    title: 'AI Medical Diagnosis',
    description: 'AI-powered medical image analysis and diagnostic assistance.',
    icon: Heart,
    features: ['Medical Imaging', 'Diagnostic Assistance', 'Risk Assessment', 'Clinical Integration'],
    pricing: '$10,000 - $50,000 project',
    category: 'Healthcare',
    link: 'https://aimedical.ziontechgroup.com'
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting and optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: '$5,000 - $30,000 project',
    category: 'Supply Chain',
    link: 'https://aisupplychain.ziontechgroup.com'
  },
  {
    title: 'AI Financial Analysis',
    description: 'Automated financial analysis and investment recommendations using AI.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Assessment', 'Portfolio Optimization', 'Real-time Alerts'],
    pricing: '$3,000 - $20,000/month',
    category: 'Finance',
    link: 'https://aifinance.ziontechgroup.com'
  },
  {
    title: 'AI Quality Control',
    description: 'Automated quality inspection using computer vision and machine learning.',
    icon: CheckCircle,
    features: ['Visual Inspection', 'Defect Detection', 'Quality Scoring', 'Process Optimization'],
    pricing: '$4,000 - $25,000 project',
    category: 'Manufacturing',
    link: 'https://aiquality.ziontechgroup.com'
  },
  {
    title: 'AI Legal Document Analysis',
    description: 'Intelligent legal document review and contract analysis using NLP.',
    icon: BookOpen,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Document Review'],
    pricing: '$5,000 - $30,000/month',
    category: 'Legal',
    link: 'https://ailegal.ziontechgroup.com'
  },
  {
    title: 'AI Energy Optimization',
    description: 'Smart energy management and optimization using IoT and machine learning.',
    icon: Zap,
    features: ['Energy Forecasting', 'Load Optimization', 'Predictive Maintenance', 'Cost Reduction'],
    pricing: '$3,000 - $20,000 project',
    category: 'Energy',
    link: 'https://aienergy.ziontechgroup.com'
  },
  {
    title: 'AI Customer Insights',
    description: 'Advanced customer behavior analysis and insights generation.',
    icon: Users,
    features: ['Behavior Analysis', 'Segmentation', 'Churn Prediction', 'Personalization'],
    pricing: '$2,000 - $12,000/month',
    category: 'Customer Analytics',
    link: 'https://aicustomerinsights.ziontechgroup.com'
  },
  {
    title: 'AI Process Automation',
    description: 'Intelligent process automation using RPA and machine learning.',
    icon: Settings,
    features: ['RPA Integration', 'Process Mining', 'Workflow Optimization', 'Exception Handling'],
    pricing: '$4,000 - $25,000 project',
    category: 'Process Automation',
    link: 'https://aiprocess.ziontechgroup.com'
  },
  {
    title: 'AI Research Assistant',
    description: 'AI-powered research and data analysis for academic and business research.',
    icon: Search,
    features: ['Literature Review', 'Data Analysis', 'Hypothesis Generation', 'Report Generation'],
    pricing: '$1,500 - $8,000/month',
    category: 'Research',
    link: 'https://airesearch.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Zero-day Protection'],
    pricing: '$8,000 - $40,000/month',
    category: 'Cybersecurity',
    popular: true,
    link: 'https://aicybersecurity.ziontechgroup.com'
  },
  {
    title: 'AI Marketing Automation',
    description: 'Intelligent marketing campaign optimization with predictive analytics and personalization.',
    icon: Target,
    features: ['Campaign Optimization', 'Predictive Analytics', 'Personalization', 'ROI Optimization'],
    pricing: '$3,000 - $18,000/month',
    category: 'Marketing',
    link: 'https://aimarketing.ziontechgroup.com'
  },
  {
    title: 'AI Voice Analytics',
    description: 'Advanced voice analysis for emotion detection, sentiment analysis, and call optimization.',
    icon: Mic,
    features: ['Emotion Detection', 'Sentiment Analysis', 'Call Optimization', 'Quality Scoring'],
    pricing: '$2,500 - $15,000/month',
    category: 'Voice Analytics',
    link: 'https://aivoiceanalytics.ziontechgroup.com'
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'Machine learning-based predictive maintenance for industrial equipment and machinery.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$5,000 - $30,000/project',
    category: 'Industrial AI',
    link: 'https://aipredictivemaintenance.ziontechgroup.com'
  },
  {
    title: 'AI Content Personalization',
    description: 'Dynamic content personalization using machine learning and user behavior analysis.',
    icon: FileText,
    features: ['Dynamic Content', 'User Profiling', 'A/B Testing', 'Performance Optimization'],
    pricing: '$2,000 - $12,000/month',
    category: 'Content AI',
    link: 'https://aicontentpersonalization.ziontechgroup.com'
  },
  {
    title: 'AI Trading Algorithm',
    description: 'Advanced algorithmic trading with machine learning and real-time market analysis.',
    icon: TrendingUp,
    features: ['Algorithmic Trading', 'Market Analysis', 'Risk Management', 'Portfolio Optimization'],
    pricing: '$10,000 - $50,000/month',
    category: 'FinTech',
    link: 'https://aitrading.ziontechgroup.com'
  },
  {
    title: 'AI Image Recognition',
    description: 'Advanced computer vision for object detection, classification, and image analysis.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Scene Analysis'],
    pricing: '$2,000 - $15,000/month',
    category: 'Computer Vision',
    link: 'https://aiimagerecognition.ziontechgroup.com'
  },
  {
    title: 'AI Natural Language Processing',
    description: 'Advanced NLP services for text analysis, language understanding, and generation.',
    icon: MessageSquare,
    features: ['Text Analysis', 'Language Understanding', 'Text Generation', 'Sentiment Analysis'],
    pricing: '$1,500 - $10,000/month',
    category: 'NLP',
    link: 'https://ainlp.ziontechgroup.com'
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Revolutionary AI-powered drug discovery and molecular design using deep learning.',
    icon: Heart,
    features: ['Molecular Design', 'Drug Repurposing', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Healthcare AI',
    popular: true,
    link: 'https://aidrugdiscovery.ziontechgroup.com'
  },
  {
    title: 'AI Climate Change Modeling',
    description: 'Advanced climate modeling and environmental impact prediction using AI.',
    icon: Globe,
    features: ['Climate Modeling', 'Impact Prediction', 'Carbon Footprint Analysis', 'Sustainability Planning'],
    pricing: '$25,000 - $150,000/project',
    category: 'Environmental AI',
    link: 'https://aiclimate.ziontechgroup.com'
  },
  {
    title: 'AI Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle AI systems with computer vision and decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Object Detection', 'Safety Systems'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Autonomous Systems',
    link: 'https://aiautonomous.ziontechgroup.com'
  },
  {
    title: 'AI Quantum Computing Integration',
    description: 'AI solutions optimized for quantum computing environments and hybrid systems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Hybrid Systems', 'Optimization Problems', 'Cryptography'],
    pricing: '$75,000 - $500,000/project',
    category: 'Quantum AI',
    link: 'https://aiquantum.ziontechgroup.com'
  },
  {
    title: 'AI Space Technology Solutions',
    description: 'AI-powered solutions for space exploration, satellite management, and space analytics.',
    icon: Rocket,
    features: ['Satellite Analytics', 'Space Weather Prediction', 'Mission Planning', 'Data Processing'],
    pricing: '$100,000 - $750,000/project',
    category: 'Space AI',
    link: 'https://aispace.ziontechgroup.com'
  },
  {
    title: 'AI Brain-Computer Interface',
    description: 'Advanced brain-computer interface systems using AI for neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Thought Recognition', 'Motor Control', 'Cognitive Enhancement'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Neurotechnology',
    link: 'https://aibci.ziontechgroup.com'
  },
  {
    title: 'AI Metaverse Development',
    description: 'AI-powered virtual world creation, avatar systems, and immersive experiences.',
    icon: Monitor,
    features: ['Virtual World Creation', 'Avatar AI', 'Behavioral Simulation', 'Real-time Interaction'],
    pricing: '$50,000 - $300,000/project',
    category: 'Metaverse AI',
    link: 'https://aimetaverse.ziontechgroup.com'
  },
  {
    title: 'AI Blockchain Analytics',
    description: 'Advanced blockchain analysis and cryptocurrency intelligence using AI.',
    icon: Network,
    features: ['Transaction Analysis', 'Fraud Detection', 'Market Prediction', 'Compliance Monitoring'],
    pricing: '$5,000 - $30,000/month',
    category: 'Blockchain AI',
    link: 'https://aiblockchain.ziontechgroup.com'
  },
  {
    title: 'AI Edge Computing Solutions',
    description: 'AI processing at the edge with optimized models for IoT and mobile devices.',
    icon: Smartphone,
    features: ['Edge AI Models', 'Real-time Processing', 'IoT Integration', 'Bandwidth Optimization'],
    pricing: '$10,000 - $75,000/project',
    category: 'Edge AI',
    link: 'https://aiedge.ziontechgroup.com'
  },
  {
    title: 'AI Synthetic Data Generation',
    description: 'High-quality synthetic data generation for training and testing AI models.',
    icon: Database,
    features: ['Data Synthesis', 'Privacy Preservation', 'Model Training', 'Quality Validation'],
    pricing: '$3,000 - $20,000/month',
    category: 'Data AI',
    link: 'https://aisyntheticdata.ziontechgroup.com'
  },
  {
    title: 'AI Explainable AI (XAI) Platform',
    description: 'Making AI decisions transparent and interpretable for regulatory compliance.',
    icon: FileText,
    features: ['Model Interpretability', 'Decision Explanation', 'Bias Detection', 'Compliance Reporting'],
    pricing: '$8,000 - $40,000/month',
    category: 'Explainable AI',
    link: 'https://aiexplainable.ziontechgroup.com'
  },
  {
    title: 'AI Multi-Modal Learning',
    description: 'AI systems that process and understand multiple data types simultaneously.',
    icon: Video,
    features: ['Multi-Modal Processing', 'Cross-Modal Learning', 'Unified Understanding', 'Fusion Techniques'],
    pricing: '$15,000 - $100,000/project',
    category: 'Multi-Modal AI',
    link: 'https://aimultimodal.ziontechgroup.com'
  },
  {
    title: 'AI Federated Learning Platform',
    description: 'Privacy-preserving AI training across distributed data sources.',
    icon: Lock,
    features: ['Privacy Preservation', 'Distributed Training', 'Model Aggregation', 'Secure Communication'],
    pricing: '$20,000 - $150,000/project',
    category: 'Federated AI',
    link: 'https://aifederated.ziontechgroup.com'
  },
  {
    title: 'AI Reinforcement Learning',
    description: 'Advanced reinforcement learning systems for complex decision-making problems.',
    icon: Target,
    features: ['Agent Training', 'Environment Simulation', 'Policy Optimization', 'Reward Engineering'],
    pricing: '$25,000 - $200,000/project',
    category: 'Reinforcement Learning',
    link: 'https://aireinforcement.ziontechgroup.com'
  },
  {
    title: 'AI Transfer Learning Platform',
    description: 'Efficient AI model adaptation and knowledge transfer across domains.',
    icon: ArrowRight,
    features: ['Model Adaptation', 'Knowledge Transfer', 'Domain Adaptation', 'Few-shot Learning'],
    pricing: '$5,000 - $35,000/project',
    category: 'Transfer Learning',
    link: 'https://aitransfer.ziontechgroup.com'
  },
  {
    title: 'AI Adversarial Defense',
    description: 'Protecting AI systems from adversarial attacks and ensuring robustness.',
    icon: Shield,
    features: ['Attack Detection', 'Defense Mechanisms', 'Robustness Testing', 'Security Hardening'],
    pricing: '$10,000 - $75,000/project',
    category: 'AI Security',
    link: 'https://aiadversarial.ziontechgroup.com'
  },
  {
    title: 'AI Continuous Learning',
    description: 'AI systems that continuously learn and adapt from new data streams.',
    icon: TrendingUp,
    features: ['Online Learning', 'Concept Drift Detection', 'Model Updates', 'Performance Monitoring'],
    pricing: '$8,000 - $50,000/month',
    category: 'Continuous Learning',
    link: 'https://aicontinuous.ziontechgroup.com'
  },
  {
    title: 'AI Human-AI Collaboration',
    description: 'AI systems designed for seamless human-AI collaboration and augmentation.',
    icon: Users,
    features: ['Human-in-the-Loop', 'Collaborative Interfaces', 'Augmented Intelligence', 'Trust Building'],
    pricing: '$15,000 - $100,000/project',
    category: 'Human-AI Collaboration',
    link: 'https://aihumanai.ziontechgroup.com'
  },
  {
    title: 'AI Ethical AI Framework',
    description: 'Comprehensive framework for developing ethical and responsible AI systems.',
    icon: Award,
    features: ['Bias Detection', 'Fairness Assessment', 'Ethical Guidelines', 'Compliance Monitoring'],
    pricing: '$12,000 - $80,000/project',
    category: 'Ethical AI',
    link: 'https://aiethical.ziontechgroup.com'
  },
  {
    title: 'AI Real-time Decision Engine',
    description: 'Ultra-fast AI decision making for time-critical applications and systems.',
    icon: Zap,
    features: ['Microsecond Response', 'Real-time Processing', 'Low Latency', 'High Throughput'],
    pricing: '$20,000 - $150,000/project',
    category: 'Real-time AI',
    link: 'https://airealtime.ziontechgroup.com'
  },
  {
    title: 'AI Cross-Platform Integration',
    description: 'Seamless AI integration across multiple platforms and ecosystems.',
    icon: Globe,
    features: ['Multi-Platform Support', 'API Integration', 'Data Synchronization', 'Unified Management'],
    pricing: '$10,000 - $75,000/project',
    category: 'Integration AI',
    link: 'https://aicrossplatform.ziontechgroup.com'
  },
  {
    title: 'AI Predictive Intelligence',
    description: 'Advanced predictive intelligence for forecasting and strategic planning.',
    icon: BarChart3,
    features: ['Strategic Forecasting', 'Scenario Planning', 'Risk Assessment', 'Decision Support'],
    pricing: '$15,000 - $100,000/month',
    category: 'Predictive Intelligence',
    link: 'https://aipredictiveintelligence.ziontechgroup.com'
  },
  {
    title: 'AI Cognitive Computing',
    description: 'Advanced cognitive computing systems that mimic human thought processes.',
    icon: Brain,
    features: ['Cognitive Modeling', 'Reasoning Systems', 'Knowledge Representation', 'Problem Solving'],
    pricing: '$50,000 - $300,000/project',
    category: 'Cognitive AI',
    link: 'https://aicognitive.ziontechgroup.com'
  },
  {
    title: 'AI Swarm Intelligence',
    description: 'AI systems based on swarm intelligence and collective behavior patterns.',
    icon: Network,
    features: ['Swarm Algorithms', 'Collective Intelligence', 'Distributed Decision Making', 'Emergent Behavior'],
    pricing: '$25,000 - $200,000/project',
    category: 'Swarm AI',
    link: 'https://aiswarm.ziontechgroup.com'
  },
  {
    title: 'AI Neuromorphic Computing',
    description: 'AI systems inspired by biological neural networks and brain architecture.',
    icon: Cpu,
    features: ['Neuromorphic Chips', 'Spiking Neural Networks', 'Energy Efficiency', 'Biological Inspiration'],
    pricing: '$100,000 - $750,000/project',
    category: 'Neuromorphic AI',
    link: 'https://aineuromorphic.ziontechgroup.com'
  },
  {
    title: 'AI Digital Twin Intelligence',
    description: 'AI-powered digital twins for real-time monitoring and predictive maintenance.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Predictive Maintenance', 'Simulation', 'Optimization'],
    pricing: '$30,000 - $250,000/project',
    category: 'Digital Twin AI',
    link: 'https://aidigitaltwin.ziontechgroup.com'
  },
  {
    title: 'AI Conversational Intelligence',
    description: 'Advanced conversational AI with emotional intelligence and context awareness.',
    icon: MessageSquare,
    features: ['Emotional Intelligence', 'Context Awareness', 'Personality Modeling', 'Natural Conversation'],
    pricing: '$5,000 - $35,000/month',
    category: 'Conversational AI',
    link: 'https://aiconversational.ziontechgroup.com'
  },
  {
    title: 'AI Augmented Reality AI',
    description: 'AI-powered augmented reality solutions for enhanced user experiences.',
    icon: Eye,
    features: ['AR Object Recognition', 'Spatial Understanding', 'Real-time Rendering', 'Interactive Experiences'],
    pricing: '$20,000 - $150,000/project',
    category: 'AR AI',
    link: 'https://aiaugmentedreality.ziontechgroup.com'
  },
  {
    title: 'AI Virtual Reality AI',
    description: 'AI-enhanced virtual reality experiences with intelligent interactions.',
    icon: Monitor,
    features: ['VR Environment AI', 'Intelligent Avatars', 'Behavioral Simulation', 'Immersive Experiences'],
    pricing: '$25,000 - $200,000/project',
    category: 'VR AI',
    link: 'https://aivirtualreality.ziontechgroup.com'
  },
  {
    title: 'AI Mixed Reality Intelligence',
    description: 'AI solutions for mixed reality environments combining AR and VR.',
    icon: Monitor,
    features: ['Mixed Reality AI', 'Seamless Transitions', 'Context Awareness', 'Spatial Computing'],
    pricing: '$30,000 - $250,000/project',
    category: 'MR AI',
    link: 'https://aimixedreality.ziontechgroup.com'
  },
  {
    title: 'AI 5G Network Intelligence',
    description: 'AI-powered 5G network optimization and intelligent resource management.',
    icon: Network,
    features: ['Network Optimization', 'Resource Management', 'Traffic Prediction', 'Quality of Service'],
    pricing: '$40,000 - $300,000/project',
    category: '5G AI',
    link: 'https://ai5g.ziontechgroup.com'
  },
  {
    title: 'AI IoT Intelligence Platform',
    description: 'Comprehensive AI platform for IoT device management and data processing.',
    icon: Smartphone,
    features: ['Device Management', 'Data Processing', 'Predictive Analytics', 'Automated Actions'],
    pricing: '$15,000 - $100,000/month',
    category: 'IoT AI',
    link: 'https://aiiot.ziontechgroup.com'
  },
  {
    title: 'AI Smart City Solutions',
    description: 'AI-powered smart city infrastructure and urban management systems.',
    icon: Building,
    features: ['Traffic Management', 'Energy Optimization', 'Public Safety', 'Resource Planning'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Smart City AI',
    link: 'https://aismartcity.ziontechgroup.com'
  },
  {
    title: 'AI Agricultural Intelligence',
    description: 'AI solutions for precision agriculture and smart farming systems.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$25,000 - $200,000/project',
    category: 'AgTech AI',
    link: 'https://aiagriculture.ziontechgroup.com'
  },
  {
    title: 'AI Manufacturing Intelligence',
    description: 'AI-powered smart manufacturing and Industry 4.0 solutions.',
    icon: Settings,
    features: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain AI'],
    pricing: '$50,000 - $500,000/project',
    category: 'Manufacturing AI',
    link: 'https://aimanufacturing.ziontechgroup.com'
  },
  {
    title: 'AI Retail Intelligence',
    description: 'AI solutions for retail optimization, customer experience, and inventory management.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Optimization', 'Price Optimization', 'Personalization'],
    pricing: '$20,000 - $150,000/month',
    category: 'Retail AI',
    link: 'https://airetail.ziontechgroup.com'
  },
  {
    title: 'AI Financial Intelligence',
    description: 'Advanced AI solutions for financial services, trading, and risk management.',
    icon: DollarSign,
    features: ['Algorithmic Trading', 'Risk Management', 'Fraud Detection', 'Credit Scoring'],
    pricing: '$30,000 - $300,000/month',
    category: 'FinTech AI',
    link: 'https://aifinancial.ziontechgroup.com'
  },
  {
    title: 'AI Healthcare Intelligence',
    description: 'Comprehensive AI solutions for healthcare, medical diagnosis, and patient care.',
    icon: Heart,
    features: ['Medical Diagnosis', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'HealthTech AI',
    link: 'https://aihealthcare.ziontechgroup.com'
  },
  {
    title: 'AI Education Intelligence',
    description: 'AI-powered educational solutions for personalized learning and assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Assessment', 'Learning Analytics', 'Content Generation'],
    pricing: '$15,000 - $100,000/month',
    category: 'EdTech AI',
    link: 'https://aieducation.ziontechgroup.com'
  },
  {
    title: 'AI Transportation Intelligence',
    description: 'AI solutions for smart transportation, logistics, and mobility services.',
    icon: Car,
    features: ['Route Optimization', 'Fleet Management', 'Traffic Prediction', 'Autonomous Vehicles'],
    pricing: '$40,000 - $400,000/project',
    category: 'Transport AI',
    link: 'https://aitransportation.ziontechgroup.com'
  },
  {
    title: 'AI Energy Intelligence',
    description: 'AI solutions for smart energy management, grid optimization, and renewable energy.',
    icon: Zap,
    features: ['Grid Optimization', 'Energy Forecasting', 'Renewable Integration', 'Demand Response'],
    pricing: '$30,000 - $300,000/project',
    category: 'Energy AI',
    link: 'https://aienergyintelligence.ziontechgroup.com'
  },
  {
    title: 'AI Environmental Intelligence',
    description: 'AI solutions for environmental monitoring, conservation, and sustainability.',
    icon: Globe,
    features: ['Environmental Monitoring', 'Climate Modeling', 'Conservation Planning', 'Sustainability Analytics'],
    pricing: '$25,000 - $250,000/project',
    category: 'Environmental AI',
    link: 'https://aienvironmental.ziontechgroup.com'
  },
  {
    title: 'AI Security Intelligence',
    description: 'Advanced AI security solutions for threat detection and cyber defense.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
    pricing: '$20,000 - $200,000/month',
    category: 'Security AI',
    link: 'https://aisecurityintelligence.ziontechgroup.com'
  },
  {
    title: 'AI Compliance Intelligence',
    description: 'AI-powered compliance monitoring and regulatory reporting solutions.',
    icon: FileText,
    features: ['Regulatory Monitoring', 'Compliance Reporting', 'Risk Assessment', 'Audit Automation'],
    pricing: '$15,000 - $100,000/month',
    category: 'Compliance AI',
    link: 'https://aicompliance.ziontechgroup.com'
  },
  {
    title: 'AI Innovation Lab',
    description: 'Cutting-edge AI research and development laboratory for next-generation solutions.',
    icon: Rocket,
    features: ['R&D Services', 'Prototype Development', 'Technology Transfer', 'Innovation Consulting'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'AI R&D',
    link: 'https://aiinnovationlab.ziontechgroup.com'
  },
  {
    title: 'AI Future Technologies',
    description: 'Pioneering AI solutions for emerging technologies and future applications.',
    icon: Star,
    features: ['Emerging Tech Integration', 'Future-Proof Solutions', 'Technology Forecasting', 'Innovation Leadership'],
    pricing: 'Custom Pricing',
    category: 'Future AI',
    link: 'https://aifuture.ziontechgroup.com'
  }
];

const categories = [
  'All',
  'Automation',
  'Analytics',
  'Customer Service',
  'Computer Vision',
  'Content',
  'Voice',
  'Security',
  'Document AI',
  'Recommendations',
  'Translation',
  'Development',
  'Healthcare',
  'Supply Chain',
  'Finance',
  'Manufacturing',
  'Legal',
  'Energy',
  'Customer Analytics',
  'Process Automation',
  'Research',
  'Cybersecurity',
  'Marketing',
  'Voice Analytics',
  'Industrial AI',
  'Content AI',
  'FinTech',
  'NLP',
  'Healthcare AI',
  'Environmental AI',
  'Autonomous Systems',
  'Quantum AI',
  'Space AI',
  'Neurotechnology',
  'Metaverse AI',
  'Blockchain AI',
  'Edge AI',
  'Data AI',
  'Explainable AI',
  'Multi-Modal AI',
  'Federated AI',
  'Reinforcement Learning',
  'Transfer Learning',
  'AI Security',
  'Continuous Learning',
  'Human-AI Collaboration',
  'Ethical AI',
  'Real-time AI',
  'Integration AI',
  'Predictive Intelligence',
  'Cognitive AI',
  'Swarm AI',
  'Neuromorphic AI',
  'Digital Twin AI',
  'Conversational AI',
  'AR AI',
  'VR AI',
  'MR AI',
  '5G AI',
  'IoT AI',
  'Smart City AI',
  'AgTech AI',
  'Manufacturing AI',
  'Retail AI',
  'FinTech AI',
  'HealthTech AI',
  'EdTech AI',
  'Transport AI',
  'Energy AI',
  'Environmental AI',
  'Security AI',
  'Compliance AI',
  'AI R&D',
  'Future AI'
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI solutions including machine learning, computer vision, natural language processing, and more. Transform your business with our advanced AI services."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, AI development"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning and computer vision to natural language processing and predictive analytics.
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

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                        <IconComponent className="w-10 h-10" />
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-lg font-bold text-gray-900 mb-2">
                        {service.pricing}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm"
                      >
                        Learn More
                      </a>
                      <Link
                        href="/contact"
                        className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-center text-sm"
                      >
                        Contact Us
                      </Link>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Implement AI in Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you choose and implement the perfect AI solutions for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free AI Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Meet Our AI Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}