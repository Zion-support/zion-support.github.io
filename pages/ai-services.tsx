import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
  Gamepad2
} from 'lucide-react';
=======
import { Brain, CheckCircle, ArrowRight, Mail, BarChart3, MessageSquare, Phone, MapPin } from 'lucide-react';

>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    icon: Mail,
<<<<<<< HEAD
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
=======
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization'],
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    popular: true
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence.',
    icon: BarChart3,
<<<<<<< HEAD
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards'],
=======
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions'],
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    popular: true
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities.',
    icon: MessageSquare,
<<<<<<< HEAD
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
    title: 'AI-Powered Customer Sentiment Analysis',
    description: 'Advanced sentiment analysis for customer feedback, reviews, and social media monitoring.',
    icon: MessageSquare,
    features: ['Real-time Analysis', 'Multi-language Support', 'Emotion Detection', 'Trend Analysis'],
    pricing: '$1,500 - $8,000/month',
    category: 'Customer Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent equipment maintenance prediction using IoT sensors and machine learning.',
    icon: Settings,
    features: ['Sensor Integration', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$5,000 - $25,000 setup',
    category: 'IoT & Maintenance',
    popular: true
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation for social platforms with real-time filtering and classification.',
    icon: Eye,
    features: ['Real-time Filtering', 'Multi-modal Detection', 'Custom Rules', 'Scalable Processing'],
    pricing: '$2,000 - $12,000/month',
    category: 'Content Safety',
    popular: true
  },
  {
    title: 'AI-Powered Language Translation',
    description: 'Advanced neural machine translation with context awareness and domain specialization.',
    icon: Globe,
    features: ['100+ Languages', 'Context Awareness', 'Domain Adaptation', 'Real-time Processing'],
    pricing: '$0.50 - $5.00 per 1K characters',
    category: 'Language Processing',
    popular: true
  },
  {
    title: 'AI-Powered Image Recognition',
    description: 'Advanced computer vision for object detection, classification, and scene understanding.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Scene Understanding', 'Custom Models'],
    pricing: '$0.10 - $1.00 per image',
    category: 'Computer Vision',
    popular: true
  },
  {
    title: 'AI-Powered Voice Synthesis',
    description: 'Natural-sounding voice generation with emotion control and multiple language support.',
    icon: Mic,
    features: ['Natural Voice', 'Emotion Control', 'Multi-language', 'Custom Voices'],
    pricing: '$0.50 - $3.00 per 1K characters',
    category: 'Voice Technology',
    popular: true
  },
  {
    title: 'AI-Powered Data Anonymization',
    description: 'Intelligent data anonymization and privacy protection for sensitive datasets.',
    icon: Lock,
    features: ['Privacy Protection', 'Data Masking', 'Compliance Tools', 'Risk Assessment'],
    pricing: '$3,000 - $15,000 setup',
    category: 'Data Privacy',
    popular: true
  },
  {
    title: 'AI-Powered Email Classification',
    description: 'Intelligent email categorization, spam detection, and priority scoring.',
    icon: Mail,
    features: ['Auto Categorization', 'Spam Detection', 'Priority Scoring', 'Workflow Integration'],
    pricing: '$500 - $3,000/month',
    category: 'Email Management',
    popular: true
  },
  {
    title: 'AI-Powered Inventory Optimization',
    description: 'Smart inventory management with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Auto Reordering', 'Stock Optimization', 'Supplier Integration'],
    pricing: '$2,000 - $10,000/month',
    category: 'Inventory Management',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Threat Detection',
    description: 'Advanced threat detection and response using behavioral analysis and machine learning.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Incident Investigation'],
    pricing: '$5,000 - $30,000/month',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Dynamic personalization for websites, apps, and marketing campaigns.',
    icon: Target,
    features: ['Real-time Personalization', 'A/B Testing', 'Behavioral Analysis', 'Multi-channel'],
    pricing: '$2,500 - $15,000/month',
    category: 'Personalization',
    popular: true
  },
  {
    title: 'AI-Powered Document Summarization',
    description: 'Intelligent document summarization with key point extraction and multi-language support.',
    icon: FileText,
    features: ['Key Point Extraction', 'Multi-language', 'Custom Length', 'Format Options'],
    pricing: '$0.10 - $0.50 per document',
    category: 'Document Processing',
    popular: true
  },
  {
    title: 'AI-Powered Price Optimization',
    description: 'Dynamic pricing optimization using market analysis and demand forecasting.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Market Analysis', 'Demand Forecasting', 'Competitor Monitoring'],
    pricing: '$3,000 - $20,000/month',
    category: 'Pricing Strategy',
    popular: true
  },
  {
    title: 'AI-Powered Chatbot Development',
    description: 'Custom chatbot development with natural language understanding and integration.',
    icon: Bot,
    features: ['NLP Integration', 'Multi-platform', 'Custom Training', 'Analytics Dashboard'],
    pricing: '$2,000 - $15,000 setup',
    category: 'Conversational AI',
    popular: true
  }
];
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
      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started with AI Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to harness the power of artificial intelligence? Our expert team is here to help you implement cutting-edge AI solutions that drive real business value. Contact us for a free consultation and discover how AI can transform your organization.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free AI Consultation</h3>
              <p className="text-gray-600 mb-4">Get expert advice on your AI project with our complimentary 30-minute consultation.</p>
              <a href="tel:+13024640950" className="text-blue-600 font-semibold hover:text-blue-700">
                Call Now: +1 302 464 0950
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your AI project details and we'll respond within 24 hours with a detailed proposal.</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 font-semibold hover:text-blue-700">
                kleber@ziontechgroup.com
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>
              <address className="text-blue-600 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </motion.div>
          </div>
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Join 500+ successful businesses that trust Zion Tech Group for their AI development needs. Let&apos;s build the perfect AI solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
                  </div>
=======
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    popular: true
  }
];

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and predictive analytics." />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Advanced AI Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cutting-edge artificial intelligence solutions to transform your business.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning to computer vision, we provide comprehensive AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  {service.popular && (
                    <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Category: {service.category}</span>
                </div>
                
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our expert AI team and discover how artificial intelligence can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </>
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
  );
}