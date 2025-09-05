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
  Droplets,
  Waves,
  Satellite
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
    pricing: '$100,000 - $500,000/project',
    category: 'Autonomous Systems',
    popular: true
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $200,000/project',
    category: 'Healthcare',
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
    title: 'AI-Powered Medical Imaging Analysis',
    description: 'Advanced medical image analysis with AI-powered diagnosis assistance and reporting.',
    icon: Eye,
    features: ['Radiology Analysis', 'Pathology Detection', 'Diagnosis Assistance', 'Report Generation'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Medical AI',
    popular: true
  },
  {
    title: 'AI Voice Cloning & Synthesis',
    description: 'Advanced voice synthesis platform with natural speech generation and voice customization.',
    icon: Mic,
    features: ['Voice Cloning', 'Emotion Control', 'Multi-language Support', 'Real-time Synthesis'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Voice AI',
    popular: true
  },
  {
    title: 'AI-Powered Drug Discovery',
    description: 'Advanced drug discovery platform with molecular analysis and clinical trial optimization.',
    icon: Heart,
    features: ['Molecular Analysis', 'Clinical Trials', 'Drug Interactions', 'Efficacy Prediction'],
    pricing: '$50,000 - $500,000/project',
    category: 'Pharmaceutical AI',
    popular: true
  },
  {
    title: 'AI Weather Prediction & Climate Modeling',
    description: 'Advanced weather forecasting with hyperlocal predictions and climate analysis.',
    icon: Cloud,
    features: ['Hyperlocal Forecasts', 'Climate Analysis', 'Severe Weather Alerts', 'Long-term Modeling'],
    pricing: '$10,000 - $75,000/setup',
    category: 'Climate AI',
    popular: true
  },
  {
    title: 'AI-Powered Space Analytics',
    description: 'Satellite data analysis platform with earth observation and space weather monitoring.',
    icon: Rocket,
    features: ['Satellite Imagery', 'Earth Observation', 'Space Weather', 'Climate Monitoring'],
    pricing: '$25,000 - $200,000/project',
    category: 'Space AI',
    popular: true
  },
  {
    title: 'AI Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Quantum ML Models', 'Quantum Simulation'],
    pricing: '$30,000 - $250,000/project',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI-Powered Gene Analysis',
    description: 'Advanced genomic analysis platform with personalized medicine recommendations.',
    icon: Heart,
    features: ['Genomic Analysis', 'Personalized Medicine', 'Disease Prediction', 'Treatment Optimization'],
    pricing: '$25,000 - $200,000/project',
    category: 'Genomics AI',
    popular: true
  },
  {
    title: 'AI Autonomous Trading Systems',
    description: 'Intelligent autonomous trading with AI-driven market analysis and execution.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Algorithmic Trading', 'Risk Management', 'Portfolio Optimization'],
    pricing: '$20,000 - $150,000/setup',
    category: 'FinTech AI',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Platform',
    description: 'Next-generation cybersecurity using AI for threat detection and response.',
    icon: Shield,
    features: ['Threat Hunting', 'Behavioral Analysis', 'Automated Response', 'Zero-day Detection'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI Content Moderation Suite',
    description: 'Advanced content moderation with multi-modal detection and real-time processing.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules', 'API Integration'],
    pricing: '$3,000 - $20,000/setup',
    category: 'Content AI',
    popular: true
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Intelligent personal assistant with voice commands, scheduling, and task automation.',
    icon: Bot,
    features: ['Voice Commands', 'Task Automation', 'Calendar Management', 'Smart Reminders'],
    pricing: '$1,000 - $8,000/setup',
    category: 'Personal AI',
    popular: true
  },
  {
    title: 'AI Customer Insights & Analytics',
    description: 'Advanced customer analytics with behavioral prediction and personalization recommendations.',
    icon: BarChart3,
    features: ['Behavioral Analysis', 'Personalization', 'Churn Prediction', 'Lifetime Value'],
    pricing: '$5,000 - $35,000/setup',
    category: 'Customer AI',
    popular: true
  },
  {
    title: 'AI-Powered Language Learning',
    description: 'Personalized language learning platform with AI tutors and adaptive curriculum.',
    icon: BookOpen,
    features: ['AI Tutors', 'Adaptive Learning', 'Speech Recognition', 'Progress Tracking'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Education AI',
    popular: true
  },
  {
    title: 'AI Mental Health Assistant',
    description: 'Intelligent mental health support with mood tracking, therapy recommendations, and crisis intervention.',
    icon: Heart,
    features: ['Mood Tracking', 'Therapy Recommendations', 'Crisis Detection', 'Progress Monitoring'],
    pricing: '$3,000 - $25,000/setup',
    category: 'Mental Health AI',
    popular: true
  },
  {
    title: 'AI-Powered Legal Research',
    description: 'Intelligent legal research platform with case law analysis and precedent identification.',
    icon: FileText,
    features: ['Case Law Search', 'Precedent Analysis', 'Legal Research', 'Document Analysis'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Legal AI',
    popular: true
  },
  {
    title: 'AI Smart City Management',
    description: 'Comprehensive urban management system with traffic optimization, resource management, and citizen services.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Management', 'Citizen Services', 'Data Analytics'],
    pricing: '$50,000 - $500,000/project',
    category: 'Smart City AI',
    popular: true
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection system with real-time monitoring and risk assessment.',
    icon: Shield,
    features: ['Real-time Detection', 'Risk Scoring', 'Pattern Recognition', 'Alert System'],
    pricing: '$8,000 - $50,000/setup',
    category: 'Security AI',
    popular: true
  },
  {
    title: 'AI Financial Planning Assistant',
    description: 'Intelligent financial planning and investment advice platform with personalized recommendations.',
    icon: DollarSign,
    features: ['Financial Planning', 'Investment Advice', 'Risk Assessment', 'Portfolio Optimization'],
    pricing: '$3,000 - $20,000/setup',
    category: 'FinTech AI',
    popular: true
  },
  {
    title: 'AI-Powered Real Estate Valuation',
    description: 'Intelligent property valuation with market analysis and investment recommendations.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Investment Insights', 'Trend Prediction'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Real Estate AI',
    popular: true
  },
  {
    title: 'AI Travel Planning Assistant',
    description: 'Intelligent travel planning with personalized itineraries and real-time optimization.',
    icon: Globe,
    features: ['Personalized Itineraries', 'Real-time Updates', 'Budget Optimization', 'Local Insights'],
    pricing: '$1,500 - $10,000/setup',
    category: 'Travel AI',
    popular: true
  },
  {
    title: 'AI Manufacturing Optimization',
    description: 'IoT-based manufacturing optimization with predictive maintenance and quality control.',
    icon: Settings,
    features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain'],
    pricing: '$25,000 - $200,000/project',
    category: 'Manufacturing AI',
    popular: true
  },
  {
    title: 'AI-Powered Video Editor',
    description: 'Automated video editing with AI-driven content optimization and social media formatting.',
    icon: Video,
    features: ['Auto Video Editing', 'Social Media Optimization', 'Voice Enhancement', 'Template Library'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Video AI',
    popular: true
  },
  {
    title: 'AI Retail Analytics Platform',
    description: 'Advanced retail analytics with customer behavior analysis and inventory optimization.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Optimization', 'Sales Forecasting', 'Personalization'],
    pricing: '$5,000 - $35,000/setup',
    category: 'Retail AI',
    popular: true
  },
  {
    title: 'AI-Powered Energy Management',
    description: 'Smart energy management and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Analytics', 'Cost Optimization', 'Predictive Maintenance'],
    pricing: '$10,000 - $75,000/project',
    category: 'Energy AI',
    popular: true
  },
  {
    title: 'AI Water Management System',
    description: 'IoT-based water management with leak detection, quality monitoring, and conservation analytics.',
    icon: Droplets,
    features: ['Leak Detection', 'Quality Monitoring', 'Conservation Analytics', 'Predictive Maintenance'],
    pricing: '$8,000 - $60,000/project',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'AI Cybersecurity Training Platform',
    description: 'Intelligent cybersecurity education platform with simulated attacks and skill assessment.',
    icon: Shield,
    features: ['Simulated Attacks', 'Skill Assessment', 'Personalized Learning', 'Certification'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Education AI',
    popular: true
  },
  {
    title: 'AI Digital Identity Verification',
    description: 'Self-sovereign digital identity platform with privacy-preserving authentication.',
    icon: Lock,
    features: ['Self-Sovereign Identity', 'Privacy Protection', 'Multi-factor Auth', 'Interoperability'],
    pricing: '$3,000 - $25,000/setup',
    category: 'Identity AI',
    popular: true
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'Intelligent equipment maintenance with failure prediction and optimization recommendations.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$5,000 - $40,000/setup',
    category: 'Industrial AI',
    popular: true
  },
  {
    title: 'AI-Powered Ocean Monitoring',
    description: 'Advanced ocean data analysis with marine life tracking and pollution detection.',
    icon: Waves,
    features: ['Marine Life Tracking', 'Pollution Detection', 'Ocean Health', 'Climate Impact'],
    pricing: '$15,000 - $100,000/project',
    category: 'Marine AI',
    popular: true
  },
  {
    title: 'AI Healthcare Records Management',
    description: 'Secure healthcare data management with patient privacy and interoperability.',
    icon: Heart,
    features: ['Secure Records', 'Patient Privacy', 'Interoperability', 'Consent Management'],
    pricing: '$10,000 - $75,000/setup',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'AI Satellite Communication Optimization',
    description: 'Intelligent satellite communication optimization with network management and coverage analysis.',
    icon: Satellite,
    features: ['Network Optimization', 'Coverage Analysis', 'Signal Processing', 'Bandwidth Management'],
    pricing: '$25,000 - $200,000/project',
    category: 'Communication AI',
    popular: true
  },
  {
    title: 'AI Agricultural Robotics',
    description: 'Autonomous agricultural robots with precision farming and crop management.',
    icon: Sprout,
    features: ['Precision Farming', 'Crop Management', 'Autonomous Operation', 'Yield Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Agricultural AI',
    popular: true
  },
  {
    title: 'AI Space Mining Optimization',
    description: 'Intelligent space resource extraction with asteroid analysis and mining optimization.',
    icon: Rocket,
    features: ['Asteroid Analysis', 'Mining Optimization', 'Resource Mapping', 'Safety Protocols'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Space AI',
    popular: true
  },
  {
    title: 'AI Quantum Cryptography',
    description: 'Advanced quantum encryption with unbreakable security and key distribution.',
    icon: Lock,
    features: ['Quantum Encryption', 'Key Distribution', 'Security Protocols', 'Quantum Key Exchange'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum Security AI',
    popular: true
  },
  {
    title: 'AI Traffic Optimization System',
    description: 'Intelligent traffic management with real-time optimization and congestion prediction.',
    icon: Car,
    features: ['Traffic Optimization', 'Congestion Prediction', 'Signal Control', 'Route Planning'],
    pricing: '$25,000 - $200,000/project',
    category: 'Transportation AI',
    popular: true
  },
  {
    title: 'AI Nuclear Fusion Control',
    description: 'Advanced fusion reactor control with plasma optimization and energy output maximization.',
    icon: Zap,
    features: ['Plasma Control', 'Energy Optimization', 'Safety Monitoring', 'Reactor Management'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Energy AI',
    popular: true
  },
  {
    title: 'AI Space Debris Management',
    description: 'Decentralized space debris monitoring with collision prediction and cleanup coordination.',
    icon: Satellite,
    features: ['Debris Tracking', 'Collision Prediction', 'Cleanup Coordination', 'Risk Assessment'],
    pricing: '$50,000 - $500,000/project',
    category: 'Space AI',
    popular: true
  },
  {
    title: 'AI Time Travel Simulation',
    description: 'Advanced temporal modeling with historical analysis and future prediction algorithms.',
    icon: Clock,
    features: ['Temporal Modeling', 'Historical Analysis', 'Future Prediction', 'Causality Analysis'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Temporal AI',
    popular: true
  },
  {
    title: 'AI Interstellar Communication',
    description: 'Long-distance space communication with signal optimization and message encryption.',
    icon: Satellite,
    features: ['Signal Optimization', 'Message Encryption', 'Long-distance Transmission', 'Error Correction'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Communication AI',
    popular: true
  },
  {
    title: 'AI Dimensional Analysis',
    description: 'Advanced multi-dimensional data analysis with parallel universe modeling.',
    icon: Cpu,
    features: ['Multi-dimensional Analysis', 'Parallel Universe Modeling', 'Dimensional Mapping', 'Reality Simulation'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Dimensional AI',
    popular: true
  },
  {
    title: 'AI Digital Consciousness Transfer',
    description: 'Decentralized digital consciousness preservation with neural network backup.',
    icon: Brain,
    features: ['Consciousness Backup', 'Neural Network Storage', 'Memory Preservation', 'Identity Transfer'],
    pricing: '$1,000,000 - $10,000,000/project',
    category: 'Consciousness AI',
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
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: DollarSign, description: 'Algorithmic trading and risk management' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized recommendations and inventory optimization' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];

const stats = [
  { label: 'AI Models Deployed', stat: '500+' },
  { label: 'Client Satisfaction', stat: '98%' },
  { label: 'Cost Reduction', stat: '40%' },
  { label: 'Performance Improvement', stat: '85%' }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services and solutions for your business" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-600 mb-4">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-blue-600 font-semibold">
                    {service.pricing}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
