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

    description: 'Advanced autonomous vehicle systems with computer vision and decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000 project',

    category: 'Autonomous Systems',
    popular: true
  },
  {

    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $200,000 project',
    category: 'Healthcare'
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using AI.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Impact Analysis', 'Weather Forecasting', 'Sustainability Metrics'],
    pricing: '$25,000 - $100,000 project',
    category: 'Environmental'
  },
  {
    title: 'AI Quantum Computing Optimizer',
    description: 'AI-powered quantum computing algorithm optimization and error correction.',
    icon: Cpu,
    features: ['Quantum Algorithm Optimization', 'Error Correction', 'Quantum State Analysis', 'Performance Tuning'],
    pricing: '$75,000 - $300,000 project',
    category: 'Quantum Computing'
  },
  {
    title: 'AI-Powered Medical Imaging Analysis',
    description: 'Advanced medical image analysis using deep learning for diagnostic support and treatment planning.',
    icon: Eye,
    features: ['Radiology Analysis', 'Pathology Detection', 'Treatment Planning', 'Diagnostic Accuracy'],
    pricing: '$15,000 - $75,000 setup',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Threat Intelligence',
    description: 'Advanced threat detection and response using AI for real-time cybersecurity protection.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Forensic Investigation'],
    pricing: '$8,000 - $40,000 setup',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI-Powered Natural Language Processing Suite',
    description: 'Comprehensive NLP solutions for text analysis, translation, and language understanding.',
    icon: MessageSquare,
    features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Entity Recognition'],
    pricing: '$3,000 - $15,000 setup',
    category: 'NLP'
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent equipment maintenance prediction using IoT sensors and machine learning.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$10,000 - $50,000 project',
    category: 'Industrial AI'
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization algorithms for e-commerce, content, and user experience optimization.',
    icon: Target,
    features: ['User Profiling', 'Content Personalization', 'Recommendation Engine', 'A/B Testing'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Personalization'
  },
  {
    title: 'AI-Powered Speech Recognition & Synthesis',
    description: 'Advanced speech processing for voice commands, transcription, and natural language interaction.',
    icon: Mic,
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Cloning', 'Multi-language Support'],
    pricing: '$4,000 - $20,000 setup',
    category: 'Speech AI'
  },
  {
    title: 'AI-Powered Autonomous Robotics',
    description: 'Intelligent robotic systems with autonomous decision-making and adaptive learning capabilities.',
    icon: Bot,
    features: ['Autonomous Navigation', 'Object Manipulation', 'Learning Algorithms', 'Human-Robot Interaction'],
    pricing: '$50,000 - $250,000 project',
    category: 'Robotics AI'
  },
  {
    title: 'AI-Powered Financial Risk Assessment',
    description: 'Advanced financial risk modeling and assessment using machine learning and big data analytics.',
    icon: TrendingUp,
    features: ['Credit Risk Analysis', 'Market Risk Assessment', 'Operational Risk', 'Regulatory Compliance'],
    pricing: '$12,000 - $60,000 setup',
    category: 'FinTech AI'
  },
  {
    title: 'AI-Powered Content Moderation Suite',
    description: 'Advanced content moderation using AI for text, images, and videos across platforms.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules Engine', 'API Integration'],
    pricing: '$6,000 - $30,000 setup',
    category: 'Content Safety AI'
  },
  {
    title: 'AI-Powered Smart City Solutions',
    description: 'Intelligent urban management systems for traffic, energy, and public services optimization.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$100,000 - $500,000 project',
    category: 'Smart Cities'
  },
  {
    title: 'AI-Powered Agricultural Intelligence',
    description: 'Smart farming solutions using AI for crop monitoring, yield prediction, and resource optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$20,000 - $100,000 project',
    category: 'AgTech AI'
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'AI-powered mental health support and monitoring using natural language processing and sentiment analysis.',
    icon: Heart,
    features: ['Mood Analysis', 'Crisis Detection', 'Therapeutic Support', 'Progress Tracking'],
    pricing: '$8,000 - $40,000 setup',
    category: 'Mental Health AI'
  },
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'Advanced blockchain transaction analysis and cryptocurrency intelligence using AI.',
    icon: Network,
    features: ['Transaction Analysis', 'Fraud Detection', 'Compliance Monitoring', 'Market Intelligence'],
    pricing: '$10,000 - $50,000 setup',
    category: 'Blockchain AI'
  },
  {
    title: 'AI-Powered Virtual Reality Training',
    description: 'Immersive VR training solutions powered by AI for personalized learning experiences.',
    icon: Monitor,
    features: ['Adaptive Learning', 'Performance Tracking', 'Skill Assessment', 'Personalized Content'],
    pricing: '$25,000 - $125,000 project',
    category: 'VR/AR AI'
  },
  {
    title: 'AI-Powered Edge Computing Solutions',
    description: 'Intelligent edge computing systems with AI processing capabilities for real-time decision making.',
    icon: Server,
    features: ['Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
    pricing: '$15,000 - $75,000 setup',
    category: 'Edge AI'
  },
  {
    title: 'AI-Powered Space Exploration',
    description: 'Autonomous space mission planning and satellite constellation management.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Mechanics', 'Resource Optimization'],
    pricing: '$100,000 - $500,000 project',
    category: 'Space Technology'
  },
  {
    title: 'AI Neural Interface System',
    description: 'Brain-computer interface with AI-powered neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$200,000 - $1,000,000 project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Smart Cities',
    description: 'Comprehensive smart city management with AI optimization.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$500,000 - $2,000,000 project',
    category: 'Smart Cities'
  },
  {
    title: 'AI Agricultural Intelligence',
    description: 'Precision agriculture with AI-powered crop monitoring and optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$15,000 - $75,000 project',
    category: 'Agriculture'
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Self-evolving AI cybersecurity system that adapts to new threats.',
    icon: Shield,
    features: ['Threat Detection', 'Adaptive Defense', 'Zero-day Protection', 'Automated Response'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Cybersecurity'
  },
  {
    title: 'AI Financial Trading System',
    description: 'High-frequency trading AI with market prediction and risk management.',
    icon: TrendingUp,
    features: ['Market Prediction', 'Risk Management', 'Algorithmic Trading', 'Portfolio Optimization'],
    pricing: '$50,000 - $250,000 setup',
    category: 'FinTech'
  },
  {
    title: 'AI-Powered Virtual Reality',
    description: 'Immersive VR experiences with AI-generated content and interactions.',
    icon: Monitor,
    features: ['Content Generation', 'Realistic Interactions', 'Adaptive Environments', 'User Behavior Analysis'],
    pricing: '$30,000 - $150,000 project',
    category: 'Virtual Reality'
  },
  {
    title: 'AI Language Translation',
    description: 'Real-time multi-language translation with cultural context understanding.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Context', 'Voice Translation', 'Document Translation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Language Technology'
  },
  {
    title: 'AI-Powered Robotics',
    description: 'Intelligent robotic systems with advanced AI decision making.',
    icon: Bot,
    features: ['Autonomous Navigation', 'Object Manipulation', 'Human-Robot Interaction', 'Learning Capabilities'],
    pricing: '$40,000 - $200,000 project',
    category: 'Robotics'
  },
  {
    title: 'AI Music Composition',
    description: 'AI-generated music composition with style adaptation and emotional intelligence.',
    icon: Mic,
    features: ['Style Adaptation', 'Emotional Intelligence', 'Instrument Simulation', 'Collaborative Composition'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Creative AI'
  },
  {
    title: 'AI-Powered Gaming',
    description: 'Intelligent game AI with adaptive difficulty and procedural content generation.',
    icon: Gamepad2,
    features: ['Adaptive Difficulty', 'Procedural Content', 'NPC Intelligence', 'Player Behavior Analysis'],
    pricing: '$20,000 - $100,000 project',
    category: 'Gaming'
  },
  {
    title: 'AI Personal Health Coach',
    description: 'AI-powered personal health monitoring and wellness recommendations.',
    icon: Heart,
    features: ['Health Monitoring', 'Wellness Recommendations', 'Symptom Analysis', 'Preventive Care'],
    pricing: '$99 - $499/month',
    category: 'Personal Health'
  },
  {
    title: 'AI-Powered Smart Home',
    description: 'Intelligent home automation with predictive behavior and energy optimization.',
    icon: Home,
    features: ['Predictive Automation', 'Energy Optimization', 'Security Monitoring', 'Voice Control'],
    pricing: '$10,000 - $50,000 setup',
    category: 'Smart Home'
  },
  {
    title: 'AI Content Creation Studio',
    description: 'AI-powered content creation for marketing, social media, and advertising.',
    icon: Image,
    features: ['Content Generation', 'Brand Consistency', 'Multi-format Output', 'Performance Optimization'],
    pricing: '$1,500 - $7,500/month',
    category: 'Content Marketing'
  },
  {
    title: 'AI-Powered Education Platform',
    description: 'Personalized learning platform with AI tutoring and assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Assessment', 'Progress Tracking', 'Skill Development'],
    pricing: '$2,000 - $10,000/month',
    category: 'EdTech'
  },
  {
    title: 'AI-Powered Drug Discovery',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
    icon: Heart,
    features: ['Molecular Design', 'Drug Optimization', 'Toxicity Prediction', 'Clinical Trial Design'],
    pricing: '$50,000 - $500,000/project',
    category: 'Pharmaceuticals',
    popular: true
  },
  {
    title: 'AI-Powered Autonomous Vehicles',
    description: 'Complete autonomous vehicle AI system with perception, planning, and control.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Sensor Fusion', 'Safety Systems'],
    pricing: '$100,000 - $2,000,000/project',
    category: 'Autonomous Systems'
  },
  {
    title: 'AI-Powered Financial Trading',
    description: 'Algorithmic trading system with AI-driven market analysis and execution.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Management', 'Portfolio Optimization', 'Real-time Trading'],
    pricing: '$25,000 - $200,000/setup',
    category: 'FinTech'
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate modeling and environmental impact prediction using AI.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Analysis', 'Carbon Footprint', 'Sustainability Planning'],
    pricing: '$30,000 - $300,000/project',
    category: 'Environmental'
  },
  {
    title: 'AI-Powered Space Exploration',
    description: 'AI systems for space mission planning, satellite operations, and data analysis.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Operations', 'Data Analysis', 'Autonomous Navigation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Aerospace'
  },
  {
    title: 'AI-Powered Quantum Computing',
    description: 'AI algorithms and applications for quantum computing systems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Error Correction', 'Optimization', 'Simulation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum AI'
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Advanced AI systems for threat detection, response, and prevention.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Predictive Security'],
    pricing: '$40,000 - $400,000/project',
    category: 'Cybersecurity'
  },
  {
    title: 'AI-Powered Smart Cities',
    description: 'Comprehensive AI solutions for smart city infrastructure and management.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Planning'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Smart Cities'
  },
  {
    title: 'AI-Powered Robotics',
    description: 'AI-powered robotic systems for manufacturing, healthcare, and service industries.',
    icon: Bot,
    features: ['Motion Planning', 'Object Recognition', 'Human-Robot Interaction', 'Learning Systems'],
    pricing: '$75,000 - $750,000/project',
    category: 'Robotics'
  },
  {
    title: 'AI-Powered Metaverse Platform',
    description: 'AI-driven virtual world creation and management for metaverse applications.',
    icon: Globe,
    features: ['Virtual World Generation', 'Avatar AI', 'Content Creation', 'Social Interaction'],
    pricing: '$50,000 - $500,000/project',
    category: 'Metaverse'
  },
  {
    title: 'AI-Powered Brain-Computer Interface',
    description: 'AI systems for brain-computer interface applications and neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Pattern Recognition', 'Control Systems', 'Rehabilitation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'End-to-end supply chain optimization using AI for logistics and inventory management.',
    icon: Network,
    features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Risk Assessment'],
    pricing: '$30,000 - $300,000/project',
    category: 'Supply Chain'
  },
  {
    title: 'AI-Powered Energy Grid Management',
    description: 'Smart grid management and renewable energy optimization using AI.',
    icon: Zap,
    features: ['Grid Optimization', 'Renewable Integration', 'Demand Response', 'Predictive Maintenance'],
    pricing: '$40,000 - $400,000/project',
    category: 'Energy'
  },
  {
    title: 'AI-Powered Agricultural Intelligence',
    description: 'Precision agriculture and crop management using AI and IoT sensors.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$25,000 - $250,000/project',
    category: 'Agriculture'
  },
  {
    title: 'AI-Powered Quantum Computing Optimization',
    description: 'Advanced AI algorithms optimized for quantum computing systems and quantum machine learning.',
    icon: Cpu,
    features: ['Quantum Algorithm Design', 'Quantum ML Models', 'Optimization Problems', 'Quantum Simulation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI-Powered Brain-Computer Interface',
    description: 'Advanced BCI systems for medical applications and human-computer interaction.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Diagnostics'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Neurotechnology',
    popular: true
  },
  {
    title: 'AI Digital Twin for Smart Cities',
    description: 'Comprehensive digital twin platform for smart city management and optimization.',
    icon: Building,
    features: ['Real-time Simulation', 'Traffic Optimization', 'Resource Management', 'Predictive Analytics'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Smart Cities',
    popular: true
  },
  {
    title: 'AI-Powered Precision Medicine',
    description: 'Personalized medicine using AI for treatment optimization and drug discovery.',
    icon: Heart,
    features: ['Genomic Analysis', 'Treatment Optimization', 'Drug Response Prediction', 'Clinical Decision Support'],
    pricing: '$75,000 - $500,000/project',
    category: 'Precision Medicine',
    popular: true
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'AI systems for space mission planning, satellite operations, and planetary exploration.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Planetary Analysis', 'Autonomous Navigation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Space Technology',
    popular: true
  },
  {
    title: 'AI-Powered Climate Change Modeling',
    description: 'Advanced climate modeling and environmental impact prediction using AI.',
    icon: Sprout,
    features: ['Climate Prediction', 'Carbon Footprint Analysis', 'Environmental Monitoring', 'Policy Impact Assessment'],
    pricing: '$50,000 - $500,000/project',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Platform',
    description: 'Next-generation cybersecurity using AI for threat detection and response.',
    icon: Shield,
    features: ['Threat Hunting', 'Behavioral Analysis', 'Automated Response', 'Zero-day Detection'],
    pricing: '$25,000 - $200,000/setup',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'AI-Powered Generative Content Creation',
    description: 'Advanced AI-powered content generation for text, images, videos, and audio.',
    icon: FileText,
    features: ['Text Generation', 'Image Creation', 'Video Production', 'Voice Synthesis'],
    pricing: '$5,000 - $50,000/month',
    category: 'Content Generation',
    popular: true
  },
  {
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle systems with advanced perception and decision-making capabilities.',
    icon: Car,
    features: ['Computer Vision', 'Sensor Fusion', 'Path Planning', 'Real-time Decision Making'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Autonomous Systems',
    popular: true
  },
  {
    title: 'AI-Powered Financial Trading Algorithms',
    description: 'Advanced algorithmic trading systems with machine learning and real-time market analysis.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Management', 'Portfolio Optimization', 'Automated Trading'],
    pricing: '$50,000 - $500,000/setup',
    category: 'Algorithmic Trading',
    popular: true
  },
  {
    title: 'AI-Powered Drug Discovery & Development',
    description: 'Accelerated drug discovery using AI for molecular design and clinical trial optimization.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Pharmaceutical AI',
    popular: true
  },
  {
    title: 'AI-Powered Energy Grid Optimization',
    description: 'Smart grid management and energy distribution optimization using AI.',
    icon: Zap,
    features: ['Grid Optimization', 'Demand Forecasting', 'Renewable Integration', 'Fault Detection'],
    pricing: '$75,000 - $750,000/project',
    category: 'Energy Management',
    popular: true
  },
  {
    title: 'AI-Powered Manufacturing Quality Control',
    description: 'Advanced quality control and defect detection in manufacturing using computer vision.',
    icon: Settings,
    features: ['Visual Inspection', 'Defect Classification', 'Quality Metrics', 'Process Optimization'],
    pricing: '$25,000 - $250,000/project',
    category: 'Manufacturing AI',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document review and contract analysis with risk assessment.',
    icon: BookOpen,
    features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'AI-Powered Customer Service Automation',
    description: 'Advanced customer service automation with natural language understanding and sentiment analysis.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Sentiment Analysis', 'Multi-channel Support', 'Escalation Management'],
    pricing: '$5,000 - $50,000/month',
    category: 'Customer Service',
    popular: true
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis'],
    pricing: '$25,000 - $250,000/project',
    category: 'Supply Chain AI',
    popular: true
  },
  {
    title: 'AI-Powered Real Estate Valuation',
    description: 'Automated property valuation and market analysis using AI and big data.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$2,000 - $20,000/month',
    category: 'Real Estate AI',
    popular: true
  },
  {
    title: 'AI-Powered Educational Personalization',
    description: 'Personalized learning experiences with adaptive content and progress tracking.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Content Personalization', 'Progress Tracking', 'Learning Analytics'],
    pricing: '$5,000 - $50,000/month',
    category: 'EdTech AI',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Assessment',
    description: 'AI-powered mental health screening and assessment tools for healthcare providers.',
    icon: Heart,
    features: ['Mental Health Screening', 'Risk Assessment', 'Treatment Recommendations', 'Progress Monitoring'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Mental Health AI',
    popular: true
  },
  {
    title: 'Quantum Machine Learning Platform',
    description: 'Advanced quantum machine learning algorithms for complex optimization and pattern recognition.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Pattern Recognition', 'Quantum Neural Networks'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI-Powered Drug Discovery',
    description: 'Machine learning platform for accelerating pharmaceutical drug discovery and development.',
    icon: Heart,
    features: ['Molecular Analysis', 'Drug Interaction Prediction', 'Toxicity Assessment', 'Clinical Trial Optimization'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Pharmaceutical AI'
  },
  {
    title: 'Autonomous AI Trading System',
    description: 'Fully autonomous AI trading system with real-time market analysis and automated decision making.',
    icon: TrendingUp,
    features: ['Real-time Analysis', 'Risk Management', 'Portfolio Optimization', 'Market Prediction'],
    pricing: '$5,000 - $50,000/setup',
    category: 'FinTech AI',
    popular: true
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using machine learning.',
    icon: Sprout,
    features: ['Climate Prediction', 'Environmental Impact', 'Carbon Footprint Analysis', 'Sustainability Planning'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Environmental AI'
  },
  {
    title: 'Neural Interface AI',
    description: 'Brain-computer interface AI for assistive technology and medical applications.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$50,000 - $500,000/setup',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Space Exploration',
    description: 'AI systems for autonomous space missions, satellite management, and planetary exploration.',
    icon: Rocket,
    features: ['Autonomous Navigation', 'Satellite Management', 'Planetary Analysis', 'Mission Planning'],
    pricing: '$100,000 - $1,000,000/setup',
    category: 'Space AI'
  },
  {
    title: 'Advanced Robotics AI',
    description: 'Sophisticated AI for autonomous robots in manufacturing, healthcare, and service industries.',
    icon: Bot,
    features: ['Autonomous Navigation', 'Object Recognition', 'Human-Robot Interaction', 'Task Planning'],
    pricing: '$20,000 - $200,000/setup',
    category: 'Robotics AI',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Defense',
    description: 'Advanced AI cybersecurity system with real-time threat detection and automated response.',
    icon: Shield,
    features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Zero-day Protection'],
    pricing: '$8,000 - $80,000/setup',
    category: 'Cybersecurity AI'
  },
  {
    title: 'Generative AI Content Studio',
    description: 'Comprehensive AI content generation platform for text, images, video, and audio.',
    icon: FileText,
    features: ['Multi-modal Generation', 'Content Optimization', 'Brand Consistency', 'Copyright Compliance'],
    pricing: '$2,000 - $20,000/month',
    category: 'Content AI',
    popular: true
  },
  {
    title: 'AI-Powered Supply Chain Intelligence',
    description: 'Intelligent supply chain optimization with predictive analytics and risk management.',
    icon: Package,
    features: ['Demand Forecasting', 'Risk Assessment', 'Optimization Algorithms', 'Real-time Monitoring'],
    pricing: '$5,000 - $50,000/setup',
    category: 'Supply Chain AI'
  },
  {
    title: 'Autonomous Vehicle AI',
    description: 'Advanced AI systems for autonomous vehicles including perception, planning, and control.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Collision Avoidance', 'Traffic Optimization'],
    pricing: '$30,000 - $300,000/setup',
    category: 'Autonomous Vehicles'
  },
  {
    title: 'AI-Powered Energy Management',
    description: 'Smart energy grid optimization and renewable energy integration using AI.',
    icon: Zap,
    features: ['Grid Optimization', 'Renewable Integration', 'Load Forecasting', 'Energy Trading'],
    pricing: '$15,000 - $150,000/setup',
    category: 'Energy AI'
  },
  {
    title: 'AI-Powered Agricultural Intelligence',
    description: 'Precision agriculture AI for crop monitoring, yield optimization, and resource management.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Disease Detection'],
    pricing: '$5,000 - $50,000/setup',
    category: 'AgTech AI'
  },
  {
    title: 'AI-Powered Legal Research',
    description: 'Advanced AI legal research platform with case law analysis and precedent identification.',
    icon: FileText,
    features: ['Case Law Analysis', 'Precedent Identification', 'Legal Research', 'Document Analysis'],
    pricing: '$3,000 - $30,000/month',
    category: 'Legal AI'
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive AI platform for smart city infrastructure management and optimization.',
    icon: Building,
    features: ['Traffic Management', 'Resource Optimization', 'Citizen Services', 'Infrastructure Monitoring'],
    pricing: '$50,000 - $500,000/setup',
    category: 'Smart Cities'
  },
  {
    title: 'AI-Powered Personalized Medicine',
    description: 'Precision medicine AI for personalized treatment plans and drug dosage optimization.',
    icon: Heart,
    features: ['Genetic Analysis', 'Treatment Personalization', 'Drug Interaction Analysis', 'Outcome Prediction'],
    pricing: '$20,000 - $200,000/setup',
    category: 'Precision Medicine'
  },
  {
    title: 'AI-Powered Financial Risk Assessment',
    description: 'Advanced AI for comprehensive financial risk analysis and regulatory compliance.',
    icon: DollarSign,
    features: ['Credit Risk Analysis', 'Market Risk Assessment', 'Regulatory Compliance', 'Fraud Detection'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Financial AI'
  },
  {
    title: 'AI-Powered Educational Personalization',
    description: 'Adaptive learning AI that personalizes educational content and tracks student progress.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Progress Tracking', 'Content Personalization', 'Performance Analytics'],
    pricing: '$5,000 - $50,000/setup',
    category: 'EdTech AI',
    popular: true
  },
  {
    title: 'AI-Powered Manufacturing Optimization',
    description: 'Intelligent manufacturing AI for process optimization, quality control, and predictive maintenance.',
    icon: Settings,
    features: ['Process Optimization', 'Quality Control', 'Predictive Maintenance', 'Resource Management'],
    pricing: '$15,000 - $150,000/setup',
    category: 'Manufacturing AI'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },

  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];


const benefits = [
  {

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
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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

                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"

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

                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
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

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>

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

                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >

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

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>

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

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>

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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get in touch with our AI experts for a free consultation and discover how our cutting-edge AI solutions can revolutionize your business operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+1 302 464 0950</p>
                <p className="text-sm text-blue-200">Available 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">kleber@ziontechgroup.com</p>
                <p className="text-sm text-blue-200">Quick response guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">364 E Main St STE 1008</p>
                <p className="text-sm text-blue-200">Middletown, DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free AI Consultation
              </Link>
              <Link href="https://ziontechgroup.com" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Visit Our Website
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
                  </div>
  );
}