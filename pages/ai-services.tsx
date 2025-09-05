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
  Package,
  DollarSign
} from 'lucide-react';

<<<<<<< HEAD
const aiServices = [{
=======
const aiServices = [
  {
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
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
    title: 'AI-Powered Drug Discovery',
    description: 'Accelerated drug discovery using machine learning and molecular modeling.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug Design', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Pharmaceutical',
    popular: true,
    link: 'https://aidrugdiscovery.ziontechgroup.com'
  },
  {
    title: 'AI Climate Change Solutions',
    description: 'Climate modeling and environmental impact analysis using advanced AI algorithms.',
    icon: Sprout,
    features: ['Climate Modeling', 'Carbon Footprint Analysis', 'Environmental Monitoring', 'Sustainability Planning'],
    pricing: '$25,000 - $200,000/project',
    category: 'Climate Tech',
    link: 'https://aiclimate.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Autonomous Vehicles',
    description: 'Advanced autonomous vehicle systems with computer vision and decision-making AI.',
    icon: Car,
<<<<<<< HEAD
    features: ['Computer Vision', 'Sensor Fusion', 'Path Planning', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000/project',    category: 'Autonomous Systems',
    popular: true
=======
    features: ['Computer Vision', 'Path Planning', 'Object Detection', 'Safety Systems'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Autonomous Systems',
    link: 'https://aiautonomous.ziontechgroup.com'
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
  },
  {
    title: 'AI Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Quantum Neural Networks', 'Hybrid Computing'],
    pricing: '$75,000 - $500,000/project',
    category: 'Quantum AI',
    link: 'https://aiquantum.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Space Exploration',
    description: 'AI systems for space mission planning, satellite operations, and planetary exploration.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Operations', 'Planetary Analysis', 'Space Weather Prediction'],
    pricing: '$100,000 - $2,000,000/project',
    category: 'Space Tech',
    link: 'https://aispace.ziontechgroup.com'
  },
  {
    title: 'AI Brain-Computer Interface',
    description: 'Advanced brain-computer interface systems for medical and assistive applications.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Neurotechnology',
    link: 'https://aibci.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Metaverse Solutions',
    description: 'AI-driven virtual world creation, avatar systems, and immersive experiences.',
    icon: Globe,
    features: ['Virtual World Creation', 'Avatar Systems', 'AI NPCs', 'Immersive Experiences'],
    pricing: '$50,000 - $500,000/project',
    category: 'Metaverse',
    link: 'https://aimetaverse.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Robotics',
    description: 'Intelligent robotic systems with advanced perception and decision-making capabilities.',
    icon: Settings,
    features: ['Robotic Perception', 'Decision Making', 'Human-Robot Interaction', 'Autonomous Navigation'],
    pricing: '$75,000 - $750,000/project',
    category: 'Robotics',
    link: 'https://airobotics.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Edge Computing',
    description: 'AI inference and processing at the edge for real-time applications and IoT.',
    icon: Network,
    features: ['Edge AI Inference', 'Real-time Processing', 'IoT Integration', 'Distributed Learning'],
    pricing: '$25,000 - $200,000/project',
    category: 'Edge AI',
    link: 'https://aiedge.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Synthetic Data',
    description: 'Generation of high-quality synthetic data for training and testing AI models.',
    icon: Database,
    features: ['Data Generation', 'Privacy Preservation', 'Model Training', 'Quality Assurance'],
    pricing: '$10,000 - $100,000/project',
    category: 'Synthetic Data',
    link: 'https://aisyntheticdata.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Digital Twins',
    description: 'Digital twin creation and management for physical assets and processes.',
    icon: Monitor,
    features: ['Digital Twin Creation', 'Real-time Monitoring', 'Predictive Maintenance', 'Simulation'],
    pricing: '$30,000 - $300,000/project',
    category: 'Digital Twins',
    link: 'https://aidigitaltwins.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Augmented Reality',
    description: 'AR applications with AI-powered object recognition and spatial understanding.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Understanding', 'Real-time Processing', 'AR Content Generation'],
    pricing: '$40,000 - $400,000/project',
    category: 'Augmented Reality',
    link: 'https://aiar.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'Advanced blockchain analysis and cryptocurrency transaction monitoring using AI.',
    icon: Globe,
<<<<<<< HEAD
    features: ['Multiverse Modeling', 'Theory Testing', 'Scenario Simulation', 'Physics Exploration'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Theoretical Physics AI',
    popular: true
  },
  {
    title: 'AI-Powered Code Generation & Optimization',
    description: 'Advanced AI for automated code generation, optimization, and bug fixing across multiple programming languages.',
    icon: Code,
    features: ['Multi-language Support', 'Code Optimization', 'Bug Detection', 'Performance Enhancement'],
    pricing: '$2,000 - $15,000/month',
    category: 'Development AI',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Threat Intelligence',
    description: 'Real-time threat intelligence and automated response systems for advanced cybersecurity.',
    icon: Shield,
    features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Zero-day Protection'],
    pricing: '$5,000 - $50,000/month',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI-Powered Natural Language Processing',
    description: 'Advanced NLP services for text analysis, sentiment detection, and language understanding.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Intent Recognition'],
    pricing: '$1,000 - $10,000/month',
    category: 'NLP AI',
    popular: true
  },
  {
    title: 'AI-Powered Computer Vision Solutions',
    description: 'Advanced computer vision for object detection, image recognition, and visual analysis.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Visual Search'],
    pricing: '$2,000 - $20,000/month',
    category: 'Computer Vision AI',
    popular: true
  },
  {
    title: 'AI-Powered Predictive Analytics',
    description: 'Advanced predictive modeling for business intelligence and forecasting across industries.',
    icon: BarChart3,
    features: ['Demand Forecasting', 'Risk Assessment', 'Trend Analysis', 'Performance Prediction'],
    pricing: '$3,000 - $30,000/month',
    category: 'Predictive Analytics AI',
    popular: true
  },
  {
    title: 'AI-Powered Voice & Speech Recognition',
    description: 'Advanced voice recognition and speech processing for multiple languages and accents.',
    icon: Mic,
    features: ['Speech-to-Text', 'Voice Commands', 'Accent Recognition', 'Real-time Processing'],
    pricing: '$1,500 - $15,000/month',
    category: 'Voice AI',
    popular: true
  },
  {
    title: 'AI-Powered Recommendation Systems',
    description: 'Intelligent recommendation engines for e-commerce, content, and personalized experiences.',
    icon: Target,
    features: ['Personalized Recommendations', 'Collaborative Filtering', 'Content-Based Filtering', 'Real-time Updates'],
    pricing: '$2,000 - $20,000/month',
    category: 'Recommendation AI',
    popular: true
  },
  {
    title: 'AI-Powered Chatbot & Virtual Assistant',
    description: 'Advanced conversational AI for customer service, support, and virtual assistance.',
    icon: Bot,
    features: ['Natural Conversations', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    pricing: '$1,000 - $10,000/month',
    category: 'Conversational AI',
    popular: true
  },
  {
    title: 'AI-Powered Content Generation',
    description: 'Automated content creation for text, images, videos, and multimedia content.',
    icon: FileText,
    features: ['Text Generation', 'Image Creation', 'Video Production', 'Content Optimization'],
    pricing: '$1,500 - $15,000/month',
    category: 'Content AI',
    popular: true
  },
  {
    title: 'AI-Powered Data Analytics Platform',
    description: 'Comprehensive data analytics platform with AI-powered insights and visualization.',
    icon: Database,
    features: ['Data Processing', 'Pattern Recognition', 'Automated Insights', 'Interactive Dashboards'],
    pricing: '$3,000 - $30,000/month',
    category: 'Data Analytics AI',
    popular: true
  },
  {
    title: 'AI-Powered Process Automation',
    description: 'Intelligent process automation for business workflows and operational efficiency.',
    icon: Settings,
    features: ['Workflow Automation', 'Decision Making', 'Process Optimization', 'Error Handling'],
    pricing: '$2,000 - $20,000/month',
    category: 'Process Automation AI',
    popular: true
  },
  {
    title: 'AI-Powered Quality Assurance',
    description: 'Automated quality control and testing using AI for software and manufacturing.',
    icon: CheckCircle,
    features: ['Automated Testing', 'Quality Metrics', 'Defect Detection', 'Performance Analysis'],
    pricing: '$2,500 - $25,000/month',
    category: 'Quality Assurance AI',
    popular: true
  },
  {
    title: 'AI-Powered Customer Experience',
    description: 'Enhanced customer experience through AI-powered personalization and engagement.',
    icon: Users,
    features: ['Personalization', 'Behavioral Analysis', 'Engagement Optimization', 'Customer Journey Mapping'],
    pricing: '$2,000 - $20,000/month',
    category: 'Customer Experience AI',
    popular: true
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and optimization.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: '$5,000 - $50,000/month',
    category: 'Supply Chain AI',
    popular: true
  },
  {
    title: 'AI-Powered Financial Services',
    description: 'Advanced AI solutions for banking, insurance, and financial services.',
    icon: DollarSign,
    features: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading', 'Credit Scoring'],
    pricing: '$10,000 - $100,000/month',
    category: 'Financial AI',
    popular: true
  },
  {
    title: 'AI-Powered Healthcare Solutions',
    description: 'AI-powered healthcare solutions for diagnostics, treatment, and patient care.',
    icon: Heart,
    features: ['Medical Diagnosis', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring'],
    pricing: '$15,000 - $150,000/month',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'AI-Powered Education Platform',
    description: 'Personalized learning platform with AI-powered adaptive education and assessment.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Personalized Content', 'Progress Tracking', 'Assessment Automation'],
    pricing: '$2,000 - $20,000/month',
    category: 'Education AI',
    popular: true
  },
  {
    title: 'AI-Powered Manufacturing Intelligence',
    description: 'Smart manufacturing solutions with AI for production optimization and quality control.',
    icon: Settings,
    features: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain Integration'],
    pricing: '$10,000 - $100,000/month',
    category: 'Manufacturing AI',
    popular: true
  },
  {
    title: 'AI-Powered Marketing Automation',
    description: 'Intelligent marketing automation with AI-powered campaign optimization and personalization.',
    icon: Target,
    features: ['Campaign Optimization', 'Audience Segmentation', 'Content Personalization', 'Performance Analytics'],
    pricing: '$2,000 - $20,000/month',
    category: 'Marketing AI',
    popular: true
  },
  {
    title: 'Quantum AI Optimization Engine',
    description: 'Quantum-enhanced AI algorithms for solving complex optimization problems in logistics and finance.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Hybrid Processing', 'Complex Optimization', 'Real-time Solutions'],
    pricing: '$5,000 - $50,000/project',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'Edge AI Vision System',
    description: 'Real-time computer vision processing at the edge with ultra-low latency for industrial applications.',
    icon: Eye,
    features: ['Real-time Processing', 'Edge Deployment', 'Low Latency', 'Industrial Integration'],
    pricing: '$3,000 - $25,000/setup',
    category: 'Edge AI',
    popular: true
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design, target identification, and clinical trial optimization.',
    icon: Heart,
    features: ['Molecular Design', 'Target Identification', 'Toxicity Prediction', 'Clinical Optimization'],
    pricing: '$25,000 - $200,000/project',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'Autonomous Vehicle AI System',
    description: 'Complete AI system for autonomous vehicles including perception, decision-making, and control.',
    icon: Car,
    features: ['Object Detection', 'Path Planning', 'Decision Making', 'Safety Systems'],
    pricing: '$50,000 - $500,000/project',
    category: 'Autonomous Systems',
    popular: true
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using machine learning and big data.',
    icon: Globe,
    features: ['Climate Prediction', 'Impact Analysis', 'Data Integration', 'Scenario Modeling'],
    pricing: '$10,000 - $100,000/project',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'Neural Interface AI',
    description: 'Brain-computer interface AI for medical applications and assistive technology.',
    icon: Brain,
    features: ['Signal Processing', 'Pattern Recognition', 'Real-time Analysis', 'Medical Integration'],
    pricing: '$15,000 - $150,000/project',
    category: 'Neurotechnology',
    popular: true
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'Autonomous mission planning and spacecraft control for space exploration missions.',
    icon: Rocket,
    features: ['Mission Planning', 'Autonomous Control', 'Risk Assessment', 'Resource Optimization'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Space Technology',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Defense',
    description: 'Advanced AI-driven cybersecurity with real-time threat detection and automated response.',
    icon: Shield,
    features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Zero-day Protection'],
    pricing: '$5,000 - $50,000/month',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI-Powered Financial Trading System',
    description: 'High-frequency trading AI with market analysis, risk management, and automated execution.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Management', 'Automated Trading', 'Performance Optimization'],
    pricing: '$10,000 - $100,000/month',
    category: 'FinTech AI',
    popular: true
  },
  {
    title: 'AI-Powered Agricultural Optimization',
    description: 'Precision agriculture AI for crop monitoring, yield optimization, and resource management.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Disease Detection'],
    pricing: '$5,000 - $50,000/project',
    category: 'AgTech AI',
    popular: true
  },
  {
    title: 'AI-Powered Energy Grid Management',
    description: 'Smart grid AI for energy distribution, demand forecasting, and renewable integration.',
    icon: Zap,
    features: ['Demand Forecasting', 'Grid Optimization', 'Renewable Integration', 'Load Balancing'],
    pricing: '$15,000 - $150,000/project',
    category: 'Energy AI',
    popular: true
  },
  {
    title: 'AI-Powered Legal Research Assistant',
    description: 'Intelligent legal research with case law analysis, precedent identification, and document review.',
    icon: BookOpen,
    features: ['Case Law Analysis', 'Precedent Search', 'Document Review', 'Legal Research'],
    pricing: '$2,000 - $20,000/month',
    category: 'Legal AI',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'AI-powered mental health support with mood analysis, therapy recommendations, and crisis intervention.',
    icon: Heart,
    features: ['Mood Analysis', 'Therapy Recommendations', 'Crisis Detection', 'Personalized Support'],
    pricing: '$1,000 - $10,000/month',
    category: 'Mental Health AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive AI system for smart city operations including traffic, utilities, and public safety.',
    icon: Building,
    features: ['Traffic Management', 'Utility Optimization', 'Public Safety', 'Citizen Services'],
    pricing: '$25,000 - $250,000/project',
    category: 'Smart City AI',
    popular: true
  },
  {
    title: 'AI-Powered Manufacturing Quality Control',
    description: 'Advanced quality control AI for manufacturing with defect detection and process optimization.',
    icon: Settings,
    features: ['Defect Detection', 'Process Optimization', 'Quality Prediction', 'Automated Inspection'],
    pricing: '$10,000 - $100,000/project',
    category: 'Manufacturing AI',
    popular: true
  },
  {
    title: 'AI-Powered Personalized Education',
    description: 'Adaptive learning AI that personalizes education content and pacing for individual students.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Content Personalization', 'Progress Tracking', 'Learning Analytics'],
    pricing: '$2,000 - $20,000/month',
    category: 'Education AI',
    popular: true
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Advanced content moderation AI for social media, forums, and user-generated content platforms.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Context Understanding', 'Bias Mitigation'],
    pricing: '$1,000 - $10,000/month',
    category: 'Content AI',
    popular: true
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'End-to-end supply chain AI with demand forecasting, inventory optimization, and logistics planning.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Logistics Planning', 'Risk Management'],
    pricing: '$5,000 - $50,000/month',
    category: 'Supply Chain AI',
    popular: true
  },
  {
    title: 'AI-Powered Voice Synthesis',
    description: 'Advanced voice synthesis AI for creating natural-sounding speech in multiple languages and voices.',
    icon: Mic,
    features: ['Natural Speech', 'Multi-language Support', 'Emotion Control', 'Voice Cloning'],
    pricing: '$500 - $5,000/month',
    category: 'Voice AI',
    popular: true
  }
];

const industries = [{ name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
=======
    features: ['Transaction Analysis', 'Anomaly Detection', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: '$15,000 - $150,000/project',
    category: 'Blockchain AI',
    link: 'https://aiblockchain.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization systems for content, products, and user experiences.',
    icon: Users,
    features: ['Content Personalization', 'Product Recommendations', 'User Profiling', 'Behavioral Analysis'],
    pricing: '$5,000 - $50,000/month',
    category: 'Personalization',
    link: 'https://aipersonalization.ziontechgroup.com'
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
    title: 'AI Data Mining',
    description: 'Intelligent data mining and pattern recognition for business intelligence.',
    icon: Database,
    features: ['Pattern Recognition', 'Data Mining', 'Business Intelligence', 'Predictive Modeling'],
    pricing: '$3,000 - $20,000/project',
    category: 'Data Science',
    link: 'https://aidatamining.ziontechgroup.com'
  },
  {
    title: 'AI Video Analysis',
    description: 'Advanced video content analysis with object tracking and behavior recognition.',
    icon: Video,
    features: ['Object Tracking', 'Behavior Recognition', 'Scene Analysis', 'Real-time Processing'],
    pricing: '$4,000 - $25,000/month',
    category: 'Video AI',
    link: 'https://aivideoanalysis.ziontechgroup.com'
  },
  {
    title: 'AI Chatbot Development',
    description: 'Custom AI chatbot development with natural language understanding and integration.',
    icon: Bot,
    features: ['Custom Development', 'NLP Integration', 'Multi-platform Support', 'Analytics'],
    pricing: '$5,000 - $30,000/project',
    category: 'Chatbot',
    link: 'https://aichatbotdev.ziontechgroup.com'
  },
  {
    title: 'AI Sentiment Analysis',
    description: 'Real-time sentiment analysis for social media, reviews, and customer feedback.',
    icon: TrendingUp,
    features: ['Real-time Analysis', 'Multi-language Support', 'Social Media Monitoring', 'Dashboard'],
    pricing: '$1,000 - $8,000/month',
    category: 'Sentiment Analysis',
    link: 'https://aisentiment.ziontechgroup.com'
  },
  {
    title: 'AI Price Optimization',
    description: 'Dynamic pricing optimization using machine learning and market analysis.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Market Analysis', 'Competitor Monitoring', 'Revenue Optimization'],
    pricing: '$3,000 - $20,000/month',
    category: 'Pricing AI',
    link: 'https://aipriceoptimization.ziontechgroup.com'
  },
  {
    title: 'AI Inventory Management',
    description: 'Intelligent inventory optimization with demand forecasting and automated ordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Ordering', 'Inventory Optimization', 'Cost Reduction'],
    pricing: '$2,500 - $15,000/month',
    category: 'Inventory AI',
    link: 'https://aiinventory.ziontechgroup.com'
  },
  {
    title: 'AI Compliance Monitoring',
    description: 'Automated compliance monitoring and reporting using AI and regulatory intelligence.',
    icon: CheckCircle,
    features: ['Compliance Monitoring', 'Regulatory Intelligence', 'Automated Reporting', 'Risk Assessment'],
    pricing: '$4,000 - $25,000/month',
    category: 'Compliance',
    link: 'https://aicompliance.ziontechgroup.com'
  },
  {
    title: 'AI Workflow Optimization',
    description: 'Intelligent workflow analysis and optimization using process mining and AI.',
    icon: Settings,
    features: ['Process Mining', 'Workflow Analysis', 'Optimization Recommendations', 'Automation'],
    pricing: '$3,000 - $20,000/project',
    category: 'Workflow AI',
    link: 'https://aiworkflow.ziontechgroup.com'
  },
  {
    title: 'AI Knowledge Management',
    description: 'Intelligent knowledge base management with automated content organization and search.',
    icon: BookOpen,
    features: ['Content Organization', 'Intelligent Search', 'Knowledge Extraction', 'Automated Updates'],
    pricing: '$2,000 - $12,000/month',
    category: 'Knowledge Management',
    link: 'https://aiknowledge.ziontechgroup.com'
  },
  {
    title: 'AI Performance Monitoring',
    description: 'AI-powered application and infrastructure performance monitoring with predictive alerts.',
    icon: Monitor,
    features: ['Performance Monitoring', 'Predictive Alerts', 'Root Cause Analysis', 'Optimization'],
    pricing: '$2,500 - $15,000/month',
    category: 'Performance AI',
    link: 'https://aiperformance.ziontechgroup.com'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];

<<<<<<< HEAD
const benefits = [{    icon: Zap,
=======
const benefits = [
  {
    icon: Zap,
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
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
<<<<<<< HEAD
<div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div            initial={{ opacity: 0, y: 30 }}
=======
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
<div className="flex items-center justify-center mb-6">
                  <Brain className="h-16 w-16 text-blue-400 mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">                AI{' '}
=======
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-16 w-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                AI{' '}
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we deliver AI that works.
            </p>
<<<<<<< HEAD
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">                Get AI Consultation
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get AI Consultation
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
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
<<<<<<< HEAD
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">              Our AI Solutions
=======
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Solutions
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
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
<<<<<<< HEAD
className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group                  initial={{ opacity: 0, y: 30 }}
=======
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
<<<<<<< HEAD
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                  <IconComponent className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">                      {service.category}
=======
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {service.category}
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
<<<<<<< HEAD
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>
                  <ul className="space-y-1">                      {service.features.map((feature, featureIndex) => (
=======
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
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

                  <div className="space-y-2">
                    <Link
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <span>Try Now</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <span>Get Quote</span>
                    </Link>
                  </div>
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
<<<<<<< HEAD
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
=======
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
              Our AI solutions are tailored for various industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}">                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
=======
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
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
<<<<<<< HEAD
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
=======
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
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
<<<<<<< HEAD
<div className="container mx-auto px-4 text-center">
                  <motion.div            initial={{ opacity: 0, y: 30 }}
=======
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>            <p className="text-xl mb-8 max-w-2xl mx-auto">
=======
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
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