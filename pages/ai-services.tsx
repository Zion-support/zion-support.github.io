import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { Brain, Zap, Shield, Database, BarChart3, Users, MessageSquare, Search, Eye, Target, TrendingUp, CheckCircle, ArrowRight, Clock, Award, Star, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Cloud, Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, ShoppingCart, BookOpen, Home, Gamepad2 } from 'lucide-react';

=======
import { motion } from 'framer-motion';
import {
<<<<<<< HEAD
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
=======
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
>>>>>>> main
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
>>>>>>> main
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
<<<<<<< HEAD
    title: 'AI-Powered Agricultural Optimization',
    description: 'Smart farming solutions using AI for crop optimization and yield prediction.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$3,000 - $15,000/month',
    category: 'Agricultural AI',
    link: 'https://agriculturalai.ziontechgroup.com'
  },
  {
    title: 'Generative AI Content Platform',
    description: 'Advanced generative AI for creating text, images, videos, and multimedia content.',
    icon: Image,
    features: ['Text Generation', 'Image Creation', 'Video Generation', 'Multimedia Content'],
    pricing: '$2,000 - $10,000/month',
    category: 'Generative AI',
    popular: true,
    link: 'https://generativeai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Medical Diagnosis',
    description: 'Advanced AI system for medical image analysis and diagnostic assistance.',
    icon: Heart,
    features: ['Medical Imaging', 'Diagnostic Assistance', 'Disease Detection', 'Treatment Recommendations'],
    pricing: '$15,000 - $75,000/month',
    category: 'Medical AI',
    link: 'https://medicalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Energy Grid Optimization',
    description: 'Intelligent energy grid management and optimization using AI algorithms.',
    icon: Zap,
    features: ['Grid Optimization', 'Demand Forecasting', 'Renewable Integration', 'Load Balancing'],
    pricing: '$8,000 - $40,000/month',
    category: 'Energy AI',
    link: 'https://energyai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive AI platform for smart city infrastructure and citizen services.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Management', 'Citizen Services', 'Infrastructure Monitoring'],
    pricing: '$25,000 - $150,000/month',
    category: 'Smart City AI',
    link: 'https://smartcityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: '$10,000 - $50,000/month',
    category: 'Supply Chain AI',
    link: 'https://supplychainai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Document Analysis',
    description: 'Advanced AI for legal document review, contract analysis, and compliance checking.',
    icon: FileText,
    features: ['Document Review', 'Contract Analysis', 'Compliance Checking', 'Legal Research'],
    pricing: '$5,000 - $25,000/month',
    category: 'Legal AI',
    link: 'https://legalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Educational Platform',
    description: 'Personalized learning platform with AI-driven curriculum and assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Assessment', 'Learning Analytics', 'Content Generation'],
    pricing: '$3,000 - $15,000/month',
    category: 'Educational AI',
    link: 'https://educationalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Manufacturing Optimization',
    description: 'Intelligent manufacturing process optimization and quality control using AI.',
    icon: Settings,
    features: ['Process Optimization', 'Quality Control', 'Predictive Maintenance', 'Defect Detection'],
    pricing: '$12,000 - $60,000/month',
    category: 'Manufacturing AI',
    link: 'https://manufacturingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Real Estate Analysis',
    description: 'Advanced AI platform for real estate market analysis and property valuation.',
    icon: Home,
    features: ['Market Analysis', 'Property Valuation', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$4,000 - $20,000/month',
    category: 'Real Estate AI',
    link: 'https://realestateai.ziontechgroup.com'
=======
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis'],
    pricing: '$15,000 - $75,000 project',
    category: 'Logistics'
>>>>>>> main
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
    title: 'AI-Powered Legal Research Assistant',
    description: 'Intelligent legal research and case law analysis with natural language processing.',
    icon: FileText,
    features: ['Case Law Analysis', 'Legal Document Review', 'Precedent Research', 'Contract Analysis'],
    pricing: '$2,000 - $10,000/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'AI Medical Imaging Analysis',
    description: 'Advanced medical imaging analysis for radiology and diagnostic support.',
    icon: Eye,
    features: ['X-ray Analysis', 'MRI Interpretation', 'CT Scan Analysis', 'Pathology Detection'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Healthcare'
  },
  {
    title: 'AI-Powered Cybersecurity Analyst',
    description: 'Automated threat detection and response with behavioral analysis and incident management.',
    icon: Shield,
    features: ['Threat Hunting', 'Incident Response', 'Vulnerability Assessment', 'Security Orchestration'],
    pricing: '$3,000 - $15,000/month',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'AI Climate Change Predictor',
    description: 'Advanced climate modeling and environmental impact prediction using machine learning.',
    icon: Globe,
    features: ['Weather Forecasting', 'Climate Modeling', 'Environmental Impact', 'Risk Assessment'],
    pricing: '$10,000 - $50,000 project',
    category: 'Environmental'
  },
  {
    title: 'AI-Powered Autonomous Vehicle System',
    description: 'Complete autonomous vehicle AI system with perception, planning, and control.',
    icon: Car,
    features: ['Object Detection', 'Path Planning', 'Decision Making', 'Safety Systems'],
    pricing: '$100,000 - $500,000 project',
    category: 'Automotive'
  },
  {
    title: 'AI Quantum Computing Optimizer',
    description: 'AI-powered quantum algorithm optimization and quantum machine learning.',
    icon: Cpu,
    features: ['Quantum Algorithm Design', 'Optimization Problems', 'Quantum ML', 'Error Correction'],
    pricing: '$25,000 - $100,000 project',
    category: 'Quantum Computing'
  },
  {
    title: 'AI-Powered Space Mission Planner',
    description: 'Autonomous space mission planning and satellite constellation optimization.',
    icon: Rocket,
    features: ['Mission Planning', 'Orbit Optimization', 'Resource Allocation', 'Risk Assessment'],
    pricing: '$50,000 - $200,000 project',
    category: 'Aerospace'
  },
  {
    title: 'AI Smart City Controller',
    description: 'Intelligent city management system with traffic optimization and resource management.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Waste Management', 'Public Safety'],
    pricing: '$25,000 - $100,000 project',
    category: 'Smart Cities'
  },
  {
    title: 'AI-Powered Agricultural Optimizer',
    description: 'Precision agriculture with AI-driven crop optimization and yield prediction.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$5,000 - $25,000 project',
    category: 'Agriculture'
  },
  {
    title: 'AI Mental Health Companion',
    description: 'AI-powered mental health support with mood tracking and therapeutic interventions.',
    icon: Heart,
    features: ['Mood Analysis', 'Therapeutic Chat', 'Crisis Detection', 'Progress Tracking'],
    pricing: '$1,000 - $5,000/month',
    category: 'Healthcare'
  },
  {
    title: 'AI-Powered Energy Grid Optimizer',
    description: 'Intelligent energy grid management with demand forecasting and renewable integration.',
    icon: Zap,
    features: ['Demand Forecasting', 'Grid Optimization', 'Renewable Integration', 'Load Balancing'],
    pricing: '$15,000 - $75,000 project',
    category: 'Energy'
  },
  {
    title: 'AI Blockchain Security Auditor',
    description: 'Automated smart contract auditing and blockchain security analysis.',
    icon: Shield,
    features: ['Smart Contract Analysis', 'Vulnerability Detection', 'Security Auditing', 'Compliance Checking'],
    pricing: '$2,000 - $10,000/project',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Language Translator Pro',
    description: 'Advanced real-time translation with cultural context and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Adaptation', 'Industry Terms', 'Voice Translation'],
    pricing: '$500 - $2,500/month',
    category: 'Language'
  },
  {
    title: 'AI Creative Design Assistant',
    description: 'AI-powered creative design tool for graphics, videos, and multimedia content.',
    icon: Image,
    features: ['Graphic Design', 'Video Editing', '3D Modeling', 'Brand Consistency'],
    pricing: '$1,000 - $5,000/month',
    category: 'Creative'
  },
  {
    title: 'AI-Powered Investment Advisor',
    description: 'Personalized investment recommendations with risk assessment and portfolio optimization.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Market Analysis', 'Investment Strategies'],
    pricing: '$2,000 - $10,000/month',
    category: 'Finance'
  },
  {
    title: 'AI Smart Home Controller',
    description: 'Intelligent home automation with learning capabilities and energy optimization.',
    icon: Home,
    features: ['Device Control', 'Energy Optimization', 'Learning Patterns', 'Voice Commands'],
    pricing: '$1,000 - $5,000 setup',
    category: 'IoT'
  },
  {
    title: 'AI-Powered Educational Tutor',
    description: 'Personalized learning assistant with adaptive curriculum and progress tracking.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Progress Tracking', 'Personalized Content', 'Assessment Tools'],
    pricing: '$200 - $1,000/month',
    category: 'Education'
  },
  {
    title: 'AI Manufacturing Quality Inspector',
    description: 'Automated quality control with computer vision and defect detection.',
    icon: Settings,
    features: ['Defect Detection', 'Quality Metrics', 'Process Optimization', 'Predictive Maintenance'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Manufacturing'
  },
  {
    title: 'AI-Powered Customer Service Pro',
    description: 'Advanced customer service automation with emotional intelligence and context awareness.',
    icon: MessageSquare,
    features: ['Emotional Analysis', 'Context Awareness', 'Multi-channel Support', 'Escalation Management'],
    pricing: '$1,500 - $7,500/month',
    category: 'Customer Service',
    popular: true
  },
  {
    title: 'AI Real Estate Market Analyzer',
    description: 'Comprehensive real estate market analysis with investment recommendations.',
    icon: Home,
    features: ['Market Analysis', 'Property Valuation', 'Investment Insights', 'Risk Assessment'],
    pricing: '$1,000 - $5,000/month',
    category: 'Real Estate'
  },
  {
    title: 'AI-Powered Sports Analytics',
    description: 'Advanced sports performance analysis with injury prediction and strategy optimization.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prediction', 'Strategy Optimization', 'Player Development'],
    pricing: '$2,000 - $10,000/month',
    category: 'Sports'
  },
  {
    title: 'AI Smart Transportation System',
    description: 'Intelligent transportation management with route optimization and traffic prediction.',
    icon: Car,
    features: ['Route Optimization', 'Traffic Prediction', 'Fleet Management', 'Demand Forecasting'],
    pricing: '$10,000 - $50,000 project',
    category: 'Transportation'
  },
  {
    title: 'AI-Powered Content Moderation Pro',
    description: 'Advanced content moderation with context understanding and cultural sensitivity.',
    icon: Eye,
    features: ['Context Analysis', 'Cultural Sensitivity', 'Multi-language Support', 'Real-time Processing'],
    pricing: '$1,000 - $5,000/month',
    category: 'Content Safety'
  },
  {
    title: 'AI Weather Prediction System',
    description: 'Advanced weather forecasting with hyperlocal predictions and climate modeling.',
    icon: Globe,
    features: ['Hyperlocal Forecasting', 'Climate Modeling', 'Severe Weather Alerts', 'Agricultural Insights'],
    pricing: '$2,000 - $10,000/month',
    category: 'Meteorology'
  },
  {
    title: 'AI-Powered Gaming Assistant',
    description: 'Intelligent gaming companion with strategy optimization and player behavior analysis.',
    icon: Gamepad2,
    features: ['Strategy Optimization', 'Player Analysis', 'Game Balancing', 'Personalized Challenges'],
    pricing: '$500 - $2,500/month',
    category: 'Gaming'
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
    pricing: '$5,000 - $25,000 project',
    category: 'Legal Tech'
  },
  {
<<<<<<< HEAD
    title: 'AI Customer Sentiment Analysis',
    description: 'Real-time customer sentiment analysis across multiple channels.',
    icon: MessageSquare,
    features: ['Multi-channel Analysis', 'Emotion Detection', 'Trend Analysis', 'Alert System'],
    pricing: '$1,000 - $5,000/month',
    category: 'Customer Analytics'
  },
  {
    title: 'AI-Powered Autonomous Vehicles',
<<<<<<< HEAD
=======

>>>>>>> main
    description: 'Advanced autonomous vehicle systems with computer vision and decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000 project',
<<<<<<< HEAD
=======

    category: 'Autonomous Systems',
=======
    title: 'AI Quantum Computing Integration',
    description: 'Quantum-enhanced AI algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Machine Learning', 'Optimization Algorithms', 'Cryptography', 'Simulation'],
    pricing: '$100,000 - $500,000 project',
    category: 'Quantum AI',
>>>>>>> main
    popular: true
  },
  {
    title: 'AI Climate Change Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using AI.',
    icon: Sprout,
    features: ['Climate Forecasting', 'Carbon Footprint Analysis', 'Environmental Risk Assessment', 'Sustainability Planning'],
    pricing: '$25,000 - $100,000 project',
    category: 'Climate Tech'
  },
  {
    title: 'AI Brain-Computer Interface',
    description: 'Neural interface technology for direct brain-computer communication.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Thought-to-Text', 'Motor Control', 'Cognitive Enhancement'],
    pricing: '$200,000 - $1,000,000 project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle AI systems for self-driving cars and drones.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Sensor Fusion', 'Real-time Decision Making'],
    pricing: '$500,000 - $2,000,000 project',
    category: 'Autonomous Systems'
  },
  {
    title: 'AI Space Technology Solutions',
    description: 'AI systems for space exploration, satellite management, and space missions.',
    icon: Rocket,
    features: ['Satellite Operations', 'Mission Planning', 'Space Weather Prediction', 'Autonomous Navigation'],
    pricing: '$1,000,000 - $5,000,000 project',
    category: 'Space Tech'
  },
  {
    title: 'AI Metaverse Development',
    description: 'AI-powered virtual worlds and immersive digital experiences.',
    icon: Globe,
    features: ['Virtual World Generation', 'AI Avatars', 'Behavioral Simulation', 'Real-time Interaction'],
    pricing: '$50,000 - $200,000 project',
    category: 'Metaverse'
  },
  {
    title: 'AI Cybersecurity Intelligence',
    description: 'Advanced AI-powered cybersecurity threat detection and response.',
    icon: Shield,
    features: ['Threat Hunting', 'Behavioral Analysis', 'Zero-day Detection', 'Automated Response'],
    pricing: '$15,000 - $75,000 setup',
    category: 'Cybersecurity'
  },
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical imaging analysis and diagnostic support.',
    icon: Heart,
    features: ['Medical Imaging Analysis', 'Symptom Analysis', 'Treatment Recommendations', 'Drug Interaction Check'],
    pricing: '$30,000 - $150,000 project',
    category: 'Healthcare AI'
  },
  {
    title: 'AI Blockchain Analytics',
    description: 'Advanced blockchain transaction analysis and cryptocurrency intelligence.',
    icon: Network,
    features: ['Transaction Analysis', 'Fraud Detection', 'Market Prediction', 'Compliance Monitoring'],
    pricing: '$10,000 - $50,000 setup',
    category: 'Blockchain AI'
  },
  {
    title: 'AI Voice Cloning Studio',
    description: 'High-fidelity voice synthesis and cloning technology.',
    icon: Mic,
    features: ['Voice Cloning', 'Emotion Synthesis', 'Multi-language Support', 'Real-time Processing'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Voice AI'
  },
  {
    title: 'AI Content Moderation Suite',
    description: 'Advanced AI-powered content moderation for social platforms.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Context Understanding', 'Bias Detection', 'Real-time Moderation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Content Safety'
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'AI-powered equipment maintenance prediction and optimization.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$8,000 - $40,000 project',
    category: 'Industrial AI'
  },
  {
    title: 'AI Edge Computing Solutions',
    description: 'AI processing at the edge for real-time decision making and low-latency applications.',
    icon: Cpu,
    features: ['Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
    pricing: '$15,000 - $75,000 project',
    category: 'Edge AI',
    popular: true
  },
  {
    title: 'AI Federated Learning Platform',
    description: 'Distributed machine learning while preserving data privacy and security.',
    icon: Network,
    features: ['Privacy-Preserving ML', 'Distributed Training', 'Model Aggregation', 'Secure Communication'],
    pricing: '$25,000 - $100,000 project',
    category: 'Federated Learning'
  },
  {
    title: 'AI Explainable AI Solutions',
    description: 'Creating transparent and interpretable AI models for critical applications.',
    icon: Brain,
    features: ['Model Interpretability', 'Bias Detection', 'Fairness Metrics', 'Transparency Reports'],
    pricing: '$20,000 - $80,000 project',
    category: 'XAI'
  },
  {
    title: 'AI Synthetic Data Generation',
    description: 'AI-powered synthetic data creation for training and testing machine learning models.',
    icon: Database,
    features: ['Data Synthesis', 'Privacy Preservation', 'Bias Reduction', 'Quality Validation'],
    pricing: '$10,000 - $50,000 project',
    category: 'Data AI'
  },
  {
    title: 'AI AutoML Solutions',
    description: 'Automated machine learning model development and deployment.',
    icon: Settings,
    features: ['Automated Feature Engineering', 'Model Selection', 'Hyperparameter Tuning', 'Auto Deployment'],
    pricing: '$5,000 - $25,000 setup',
    category: 'AutoML'
  },
  {
    title: 'AI Robotic Process Automation',
    description: 'Intelligent automation of complex business processes with AI-powered decision making.',
    icon: Bot,
    features: ['Process Discovery', 'Workflow Automation', 'Exception Handling', 'Performance Monitoring'],
    pricing: '$12,000 - $60,000 project',
    category: 'RPA AI'
  },
  {
    title: 'AI Augmented Reality Solutions',
    description: 'AI-enhanced AR applications and experiences for various industries.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Gesture Control', 'Real-time Rendering'],
    pricing: '$30,000 - $150,000 project',
    category: 'AR AI'
  },
  {
    title: 'AI Virtual Reality Experiences',
    description: 'Immersive VR experiences powered by artificial intelligence and machine learning.',
    icon: Monitor,
    features: ['Virtual World Generation', 'AI Avatars', 'Behavioral Simulation', 'Haptic Feedback'],
    pricing: '$40,000 - $200,000 project',
    category: 'VR AI'
  },
  {
    title: 'AI Internet of Things Platform',
    description: 'AI-powered IoT device management and data analytics platform.',
    icon: Network,
    features: ['Device Management', 'Data Analytics', 'Predictive Maintenance', 'Security Monitoring'],
    pricing: '$20,000 - $100,000 project',
    category: 'IoT AI'
  },
  {
    title: 'AI Personal Finance Advisor',
    description: 'Intelligent personal finance management and investment advice.',
    icon: TrendingUp,
    features: ['Portfolio Management', 'Risk Assessment', 'Investment Recommendations', 'Budget Planning'],
    pricing: '$1,000 - $5,000/month',
    category: 'FinTech'
  },
  {
    title: 'AI Language Translation Pro',
    description: 'Real-time, context-aware translation with cultural adaptation.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Context', 'Industry-specific Terms', 'Voice Translation'],
    pricing: '$500 - $2,500/month',
    category: 'Language AI'
  },
  {
    title: 'AI Smart Home Controller',
    description: 'Intelligent home automation and energy management system.',
    icon: Home,
    features: ['Device Integration', 'Energy Optimization', 'Predictive Control', 'Voice Commands'],
    pricing: '$2,000 - $10,000 setup',
    category: 'Smart Home'
  },
  {
    title: 'AI Sports Analytics Platform',
    description: 'Advanced sports performance analysis and prediction system.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prediction', 'Tactical Analysis', 'Player Scouting'],
    pricing: '$5,000 - $25,000 project',
    category: 'Sports Tech'
  },
  {
    title: 'AI Educational Tutor',
    description: 'Personalized AI tutoring system with adaptive learning.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Adaptive Content', 'Assessment Generation'],
    pricing: '$1,500 - $7,500/month',
    category: 'EdTech'
  },
  {
    title: 'AI Retail Optimization',
    description: 'AI-powered retail analytics and customer experience optimization.',
    icon: ShoppingCart,
    features: ['Customer Behavior Analysis', 'Inventory Optimization', 'Price Optimization', 'Personalization'],
    pricing: '$3,000 - $15,000/month',
    category: 'Retail AI'
  },
  {
    title: 'AI Agricultural Intelligence',
    description: 'Smart farming solutions with AI-powered crop and livestock management.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Disease Detection', 'Resource Optimization'],
    pricing: '$10,000 - $50,000 project',
    category: 'AgTech'
  },
  {
    title: 'AI Mental Health Assistant',
    description: 'AI-powered mental health monitoring and support system.',
    icon: Heart,
    features: ['Mood Tracking', 'Crisis Detection', 'Therapeutic Conversations', 'Progress Monitoring'],
    pricing: '$2,000 - $10,000/month',
    category: 'HealthTech'
  },
  {
    title: 'AI Real Estate Analytics',
    description: 'Intelligent property valuation and market analysis platform.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$3,000 - $15,000/month',
    category: 'PropTech'
  },
  {
    title: 'AI Gaming Intelligence',
    description: 'AI-powered game development and player behavior analysis.',
    icon: Target,
    features: ['Procedural Content Generation', 'Player Behavior Analysis', 'Balancing Algorithms', 'Anti-cheat Systems'],
    pricing: '$5,000 - $25,000 project',
    category: 'Game AI'
  },
  {
    title: 'AI Supply Chain Intelligence',
    description: 'End-to-end supply chain optimization with AI-powered insights.',
    icon: Network,
    features: ['Demand Forecasting', 'Supplier Risk Analysis', 'Route Optimization', 'Inventory Management'],
    pricing: '$15,000 - $75,000 project',
    category: 'Supply Chain AI'
  },
  {
    title: 'AI Environmental Monitoring',
    description: 'AI-powered environmental data collection and analysis system.',
    icon: Sprout,
    features: ['Air Quality Monitoring', 'Water Quality Analysis', 'Pollution Detection', 'Environmental Reporting'],
    pricing: '$8,000 - $40,000 project',
    category: 'Environmental AI'
  },
  {
    title: 'AI Digital Twin Platform',
    description: 'AI-powered digital twin creation and simulation platform.',
    icon: Monitor,
<<<<<<< HEAD
    features: ['AI-Generated Environments', 'Realistic Avatars', 'Natural Interactions', 'Adaptive Storytelling'],
    pricing: '$15,000 - $75,000 project',
    category: 'VR/AR'
  },
  {
    title: 'AI Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Neural Networks', 'Optimization Algorithms', 'Quantum Feature Maps', 'Hybrid Classical-Quantum'],
    pricing: '$100,000 - $500,000 project',
=======
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analysis', 'Virtual Testing'],
    pricing: '$20,000 - $100,000 project',
    category: 'Digital Twin'
  },
  {
    title: 'AI Edge Computing Solutions',
    description: 'AI processing at the edge for real-time decision making.',
    icon: Cpu,
    features: ['Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Edge AI'
  },
  {
    title: 'AI Robotic Process Automation',
    description: 'Intelligent automation of complex business processes.',
    icon: Settings,
    features: ['Process Discovery', 'Workflow Automation', 'Exception Handling', 'Performance Monitoring'],
    pricing: '$3,000 - $15,000/month',
    category: 'RPA'
  },
  {
    title: 'AI Augmented Reality Solutions',
    description: 'AI-enhanced AR applications for various industries.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Gesture Control', 'Real-time Rendering'],
    pricing: '$10,000 - $50,000 project',
    category: 'AR AI'
  },
  {
    title: 'AI Virtual Reality Experiences',
    description: 'Immersive VR experiences powered by artificial intelligence.',
    icon: Monitor,
    features: ['Virtual World Generation', 'AI Avatars', 'Behavioral Simulation', 'Haptic Feedback'],
    pricing: '$15,000 - $75,000 project',
    category: 'VR AI'
  },
  {
    title: 'AI Internet of Things Platform',
    description: 'AI-powered IoT device management and data analytics.',
    icon: Network,
    features: ['Device Management', 'Data Analytics', 'Predictive Maintenance', 'Security Monitoring'],
    pricing: '$5,000 - $25,000 setup',
    category: 'IoT AI'
  },
  {
    title: 'AI 5G Network Optimization',
    description: 'AI-powered 5G network management and optimization.',
    icon: Network,
    features: ['Network Slicing', 'Traffic Optimization', 'Quality of Service', 'Resource Allocation'],
    pricing: '$20,000 - $100,000 project',
    category: '5G AI'
  },
  {
    title: 'AI Blockchain Smart Contracts',
    description: 'AI-enhanced smart contract development and auditing.',
    icon: Code,
    features: ['Smart Contract Generation', 'Security Auditing', 'Gas Optimization', 'Automated Testing'],
    pricing: '$8,000 - $40,000 project',
    category: 'Blockchain AI'
  },
  {
    title: 'AI Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms and models.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Pattern Recognition', 'Quantum Simulation'],
    pricing: '$50,000 - $250,000 project',
    category: 'Quantum ML'
  },
  {
    title: 'AI Synthetic Data Generation',
    description: 'AI-powered synthetic data creation for training and testing.',
    icon: Database,
    features: ['Data Synthesis', 'Privacy Preservation', 'Bias Reduction', 'Quality Validation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Data AI'
  },
  {
    title: 'AI Explainable AI Platform',
    description: 'Platform for creating and managing explainable AI models.',
    icon: Brain,
    features: ['Model Interpretability', 'Bias Detection', 'Fairness Metrics', 'Transparency Reports'],
    pricing: '$5,000 - $25,000 setup',
    category: 'XAI'
  },
  {
    title: 'AI Federated Learning Platform',
    description: 'Distributed machine learning while preserving data privacy.',
    icon: Network,
    features: ['Privacy-Preserving ML', 'Distributed Training', 'Model Aggregation', 'Secure Communication'],
    pricing: '$10,000 - $50,000 setup',
    category: 'Federated Learning'
  },
  {
    title: 'AI AutoML Platform',
    description: 'Automated machine learning model development and deployment.',
    icon: Settings,
    features: ['Automated Feature Engineering', 'Model Selection', 'Hyperparameter Tuning', 'Auto Deployment'],
    pricing: '$1,000 - $5,000/month',
    category: 'AutoML'
  },
  {
    title: 'AI MLOps Platform',
    description: 'Complete machine learning operations and model lifecycle management.',
    icon: Settings,
    features: ['Model Versioning', 'Experiment Tracking', 'Model Monitoring', 'Automated Deployment'],
    pricing: '$2,000 - $10,000/month',
    category: 'MLOps'
  },
  {
    title: 'AI Data Pipeline Automation',
    description: 'Intelligent data pipeline creation and management.',
    icon: Database,
    features: ['Pipeline Generation', 'Data Quality Monitoring', 'Error Handling', 'Performance Optimization'],
    pricing: '$3,000 - $15,000/month',
    category: 'Data Engineering'
  },
  {
    title: 'AI Model Monitoring & Observability',
    description: 'Comprehensive AI model performance monitoring and alerting.',
    icon: Monitor,
    features: ['Performance Tracking', 'Drift Detection', 'Alert Management', 'Root Cause Analysis'],
    pricing: '$1,500 - $7,500/month',
    category: 'Model Ops'
  },
  {
    title: 'AI Bias Detection & Mitigation',
    description: 'AI system bias detection and fairness optimization tools.',
    icon: Shield,
    features: ['Bias Detection', 'Fairness Metrics', 'Mitigation Strategies', 'Compliance Reporting'],
    pricing: '$2,000 - $10,000 setup',
    category: 'AI Ethics'
  },
  {
    title: 'AI Model Compression & Optimization',
    description: 'AI model size reduction and performance optimization.',
    icon: Cpu,
    features: ['Model Pruning', 'Quantization', 'Knowledge Distillation', 'Hardware Optimization'],
    pricing: '$3,000 - $15,000 project',
    category: 'Model Optimization'
  },
  {
    title: 'AI Edge AI Model Deployment',
    description: 'Deployment of AI models on edge devices and embedded systems.',
    icon: Smartphone,
    features: ['Model Conversion', 'Hardware Optimization', 'Performance Tuning', 'Deployment Automation'],
    pricing: '$5,000 - $25,000 project',
    category: 'Edge Deployment'
  },
  {
    title: 'AI Multi-Modal Learning',
    description: 'AI systems that process multiple data types simultaneously.',
    icon: Eye,
    features: ['Text-Image Processing', 'Audio-Visual Analysis', 'Cross-Modal Learning', 'Fusion Techniques'],
    pricing: '$8,000 - $40,000 project',
    category: 'Multi-Modal AI'
  },
  {
    title: 'AI Transfer Learning Platform',
    description: 'Platform for transferring knowledge between AI models and domains.',
    icon: Network,
    features: ['Pre-trained Models', 'Domain Adaptation', 'Fine-tuning Tools', 'Knowledge Transfer'],
    pricing: '$2,000 - $10,000/month',
    category: 'Transfer Learning'
  },
  {
    title: 'AI Reinforcement Learning Platform',
    description: 'Platform for developing and training reinforcement learning agents.',
    icon: Target,
    features: ['Environment Simulation', 'Agent Training', 'Policy Optimization', 'Reward Engineering'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Reinforcement Learning'
  },
  {
    title: 'AI Generative Adversarial Networks',
    description: 'GAN-based solutions for data generation and augmentation.',
    icon: Image,
    features: ['Image Generation', 'Data Augmentation', 'Style Transfer', 'Anomaly Generation'],
    pricing: '$3,000 - $15,000 project',
    category: 'GANs'
  },
  {
    title: 'AI Transformer Models',
    description: 'Advanced transformer-based AI models for various applications.',
    icon: Brain,
    features: ['Language Models', 'Vision Transformers', 'Multimodal Transformers', 'Custom Architectures'],
    pricing: '$5,000 - $25,000 project',
    category: 'Transformers'
  },
  {
    title: 'AI Graph Neural Networks',
    description: 'Graph-based AI solutions for complex relationship modeling.',
    icon: Network,
    features: ['Graph Analysis', 'Node Classification', 'Link Prediction', 'Graph Generation'],
    pricing: '$4,000 - $20,000 project',
    category: 'Graph AI'
  },
  {
    title: 'AI Time Series Forecasting',
    description: 'Advanced time series analysis and forecasting solutions.',
    icon: TrendingUp,
    features: ['Seasonal Analysis', 'Trend Detection', 'Anomaly Detection', 'Multi-step Forecasting'],
    pricing: '$2,000 - $10,000/month',
    category: 'Time Series'
  },
  {
    title: 'AI Natural Language Processing',
    description: 'Advanced NLP solutions for text understanding and generation.',
    icon: FileText,
    features: ['Text Analysis', 'Sentiment Analysis', 'Named Entity Recognition', 'Text Generation'],
    pricing: '$1,500 - $7,500/month',
    category: 'NLP'
  },
  {
    title: 'AI Computer Vision Solutions',
    description: 'Advanced computer vision and image processing solutions.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Segmentation', '3D Vision'],
    pricing: '$3,000 - $15,000 project',
    category: 'Computer Vision'
  },
  {
    title: 'AI Speech Recognition & Synthesis',
    description: 'Advanced speech processing and voice synthesis solutions.',
    icon: Mic,
    features: ['Speech Recognition', 'Text-to-Speech', 'Voice Cloning', 'Emotion Recognition'],
    pricing: '$2,000 - $10,000 setup',
    category: 'Speech AI'
  },
  {
    title: 'AI Recommendation Systems',
    description: 'Advanced recommendation and personalization engines.',
    icon: Target,
    features: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches', 'Real-time Updates'],
    pricing: '$1,000 - $5,000/month',
    category: 'Recommendation Systems'
  },
  {
    title: 'AI Search & Retrieval Systems',
    description: 'Intelligent search and information retrieval solutions.',
    icon: Search,
    features: ['Semantic Search', 'Vector Search', 'Query Understanding', 'Result Ranking'],
    pricing: '$2,000 - $10,000/month',
    category: 'Search AI'
  },
  {
    title: 'AI Knowledge Graphs',
    description: 'AI-powered knowledge representation and reasoning systems.',
    icon: Network,
    features: ['Entity Extraction', 'Relationship Modeling', 'Query Answering', 'Knowledge Inference'],
    pricing: '$5,000 - $25,000 project',
    category: 'Knowledge AI'
  },
  {
    title: 'AI Causal Inference',
    description: 'AI systems for understanding cause-and-effect relationships.',
    icon: Target,
    features: ['Causal Discovery', 'Treatment Effect Estimation', 'Counterfactual Analysis', 'Causal Graphs'],
    pricing: '$8,000 - $40,000 project',
    category: 'Causal AI'
  },
  {
    title: 'AI Uncertainty Quantification',
    description: 'AI systems that provide uncertainty estimates and confidence intervals.',
    icon: Shield,
    features: ['Uncertainty Estimation', 'Confidence Intervals', 'Risk Assessment', 'Robust Predictions'],
    pricing: '$3,000 - $15,000 project',
    category: 'Uncertainty AI'
  },
  {
    title: 'AI Adversarial Robustness',
    description: 'AI systems resistant to adversarial attacks and perturbations.',
    icon: Shield,
    features: ['Attack Detection', 'Robust Training', 'Defense Mechanisms', 'Security Testing'],
    pricing: '$4,000 - $20,000 project',
    category: 'Robust AI'
  },
  {
    title: 'AI Continual Learning',
    description: 'AI systems that learn continuously without forgetting previous knowledge.',
    icon: Brain,
    features: ['Catastrophic Forgetting Prevention', 'Incremental Learning', 'Memory Consolidation', 'Adaptive Learning'],
    pricing: '$5,000 - $25,000 project',
    category: 'Continual Learning'
  },
  {
    title: 'AI Meta-Learning',
    description: 'AI systems that learn how to learn and adapt quickly to new tasks.',
    icon: Brain,
    features: ['Few-shot Learning', 'Rapid Adaptation', 'Learning to Learn', 'Task Generalization'],
    pricing: '$6,000 - $30,000 project',
    category: 'Meta-Learning'
  },
  {
    title: 'AI Neural Architecture Search',
    description: 'Automated neural network architecture design and optimization.',
    icon: Settings,
    features: ['Architecture Search', 'Performance Optimization', 'Hardware-aware Design', 'Automated Design'],
    pricing: '$10,000 - $50,000 project',
    category: 'NAS'
  },
  {
    title: 'AI Hyperparameter Optimization',
    description: 'Automated hyperparameter tuning and optimization for AI models.',
    icon: Settings,
    features: ['Bayesian Optimization', 'Multi-objective Optimization', 'Early Stopping', 'Resource Management'],
    pricing: '$2,000 - $10,000/month',
    category: 'HPO'
  },
  {
    title: 'AI Model Ensemble Methods',
    description: 'Advanced ensemble learning and model combination techniques.',
    icon: Network,
    features: ['Model Stacking', 'Bagging', 'Boosting', 'Voting Methods'],
    pricing: '$3,000 - $15,000 project',
    category: 'Ensemble Learning'
  },
  {
    title: 'AI Active Learning',
    description: 'AI systems that intelligently select data for labeling and training.',
    icon: Target,
    features: ['Query Strategy', 'Uncertainty Sampling', 'Diversity Sampling', 'Human-in-the-loop'],
    pricing: '$2,000 - $10,000/month',
    category: 'Active Learning'
  },
  {
    title: 'AI Semi-Supervised Learning',
    description: 'AI systems that learn from both labeled and unlabeled data.',
    icon: Database,
    features: ['Pseudo-labeling', 'Consistency Regularization', 'Graph-based Methods', 'Self-training'],
    pricing: '$2,500 - $12,500/month',
    category: 'Semi-Supervised Learning'
  },
  {
    title: 'AI Unsupervised Learning',
    description: 'AI systems that discover patterns in data without labels.',
    icon: Eye,
    features: ['Clustering', 'Dimensionality Reduction', 'Anomaly Detection', 'Density Estimation'],
    pricing: '$1,500 - $7,500/month',
    category: 'Unsupervised Learning'
  },
  {
    title: 'AI Supervised Learning',
    description: 'AI systems that learn from labeled training data.',
    icon: Target,
    features: ['Classification', 'Regression', 'Feature Selection', 'Model Validation'],
    pricing: '$1,000 - $5,000/month',
    category: 'Supervised Learning'
  },
  {
    title: 'AI Deep Learning',
    description: 'Advanced deep neural network solutions for complex problems.',
    icon: Brain,
    features: ['Neural Networks', 'Deep Architectures', 'Gradient Descent', 'Backpropagation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Deep Learning'
  },
  {
    title: 'AI Machine Learning',
    description: 'Comprehensive machine learning solutions for various applications.',
    icon: Cpu,
    features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Evaluation'],
    pricing: '$1,500 - $7,500/month',
    category: 'Machine Learning'
  },
  {
    title: 'AI Artificial Intelligence',
    description: 'Complete AI solutions covering all aspects of artificial intelligence.',
    icon: Brain,
    features: ['Problem Solving', 'Learning', 'Reasoning', 'Perception'],
    pricing: '$5,000 - $25,000/month',
    category: 'General AI'
  },
  {
    title: 'AI-Powered Autonomous Vehicles',
description: 'Complete autonomous vehicle systems with advanced perception and decision-making capabilities.',
    icon: Car,
    features: ['Computer Vision', 'Sensor Fusion', 'Path Planning', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000/project',
>>>>>>> main
    category: 'Autonomous Systems',
    popular: true
  },
  {
<<<<<<< HEAD
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
=======
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
>>>>>>> main
    category: 'Quantum AI',
    popular: true
  },
  {
<<<<<<< HEAD
    title: 'AI-Powered Edge Computing',
    description: 'Intelligent edge computing solutions with real-time AI processing capabilities.',
    icon: Server,
    features: ['Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Edge Computing'
  },
  {
    title: 'AI Digital Twin Platform',
    description: 'Comprehensive digital twin solutions with AI-powered simulation and optimization.',
    icon: Building,
    features: ['Real-time Simulation', 'Predictive Modeling', 'IoT Integration', 'Performance Optimization'],
    pricing: '$50,000 - $250,000 project',
    category: 'Digital Twins',
    popular: true
  },
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'Advanced blockchain analysis using AI for fraud detection and transaction insights.',
    icon: Shield,
    features: ['Transaction Analysis', 'Fraud Detection', 'Pattern Recognition', 'Risk Assessment'],
    pricing: '$20,000 - $100,000 setup',
    category: 'Blockchain'
  },
  {
    title: 'AI Medical Imaging Analysis',
    description: 'Advanced medical image analysis using deep learning for diagnosis and treatment planning.',
    icon: Heart,
    features: ['Radiology Analysis', 'Pathology Detection', 'Treatment Planning', 'Clinical Decision Support'],
    pricing: '$75,000 - $300,000 project',
    category: 'Healthcare AI'
  },
  {
    title: 'AI-Powered Smart Grid',
    description: 'Intelligent energy grid management with AI optimization and predictive maintenance.',
    icon: Zap,
    features: ['Load Forecasting', 'Fault Prediction', 'Energy Optimization', 'Grid Stability'],
    pricing: '$100,000 - $500,000 project',
    category: 'Smart Energy'
  },
  {
    title: 'AI Autonomous Robotics',
    description: 'Advanced autonomous robotic systems with AI decision-making and learning capabilities.',
    icon: Bot,
    features: ['Autonomous Navigation', 'Object Manipulation', 'Learning Algorithms', 'Safety Systems'],
    pricing: '$150,000 - $750,000 project',
    category: 'Robotics'
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Self-evolving AI cybersecurity system that adapts to new threats in real-time.',
    icon: Shield,
    features: ['Threat Detection', 'Adaptive Defense', 'Zero-day Protection', 'Automated Response'],
    pricing: '$50,000 - $250,000 setup',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI Financial Risk Management',
    description: 'Advanced AI-powered financial risk assessment and management systems.',
    icon: TrendingUp,
    features: ['Credit Risk Analysis', 'Market Risk Assessment', 'Operational Risk', 'Regulatory Compliance'],
    pricing: '$75,000 - $350,000 project',
    category: 'FinTech'
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'Autonomous space mission planning and satellite constellation management using AI.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Mechanics', 'Resource Optimization'],
    pricing: '$200,000 - $1,000,000 project',
    category: 'Space Technology'
  },
  {
    title: 'AI Neural Interface Development',
    description: 'Brain-computer interface development with AI-powered neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$300,000 - $1,500,000 project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive smart city management platform with AI optimization across all systems.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$500,000 - $2,500,000 project',
    category: 'Smart Cities'
  },
  {
    title: 'AI Agricultural Intelligence Platform',
    description: 'Precision agriculture with AI-powered crop monitoring, yield prediction, and optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$30,000 - $150,000 project',
    category: 'AgTech'
  },
  {
    title: 'AI-Powered Climate Change Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using AI and machine learning.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Impact Analysis', 'Weather Forecasting', 'Sustainability Metrics'],
    pricing: '$100,000 - $500,000 project',
    category: 'Environmental AI'
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
=======
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
    title: 'AI-Powered Cybersecurity Intelligence',
    description: 'Advanced AI system for real-time threat detection, analysis, and automated response.',
    icon: Shield,
    features: ['Threat Hunting', 'Behavioral Analysis', 'Zero-day Detection', 'Automated Response'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI Medical Imaging Analysis',
    description: 'Deep learning-powered medical image analysis for radiology and diagnostic support.',
>>>>>>> main
    icon: Heart,
    features: ['Genetic Analysis', 'Disease Prediction', 'Drug Response', 'Lifestyle Recommendations'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Genomics AI'
  },
  {
    title: 'AI Smart City Manager',
    description: 'Comprehensive AI platform for smart city infrastructure and citizen services.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Management', 'Citizen Services', 'Emergency Response'],
    pricing: '$100,000 - $500,000/project',
    category: 'Smart Cities'
  },
  {
    title: 'AI Language Translation Master',
    description: 'Real-time multi-language translation with cultural context understanding.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Context', 'Voice Translation', 'Document Translation'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Language AI'
  },
  {
    title: 'AI Financial Advisor Pro',
    description: 'Advanced AI financial advisor with personalized investment strategies.',
    icon: TrendingUp,
    features: ['Portfolio Management', 'Risk Assessment', 'Market Analysis', 'Tax Optimization'],
    pricing: '$5,000 - $25,000/setup',
    category: 'FinTech AI'
  },
  {
    title: 'AI Educational Tutor',
    description: 'Personalized AI tutoring system with adaptive learning and assessment.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Personalized Curriculum', 'Progress Assessment', 'Skill Development'],
    pricing: '$2,000 - $10,000/setup',
    category: 'EdTech AI'
  },
  {
    title: 'AI Retail Personalization Engine',
    description: 'Advanced AI for personalized shopping experiences and inventory optimization.',
    icon: ShoppingCart,
    features: ['Personalized Recommendations', 'Inventory Optimization', 'Price Optimization', 'Customer Journey'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Retail AI'
  },
  {
    title: 'AI Manufacturing Optimizer',
    description: 'AI-powered manufacturing process optimization and quality control.',
    icon: Settings,
    features: ['Process Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain'],
    pricing: '$25,000 - $125,000/project',
    category: 'Manufacturing AI'
  },
  {
    title: 'AI Energy Grid Manager',
    description: 'Intelligent energy grid management with renewable energy optimization.',
    icon: Zap,
    features: ['Grid Optimization', 'Renewable Integration', 'Load Balancing', 'Energy Storage'],
    pricing: '$50,000 - $250,000/project',
    category: 'Energy AI'
  },
  {
    title: 'AI Legal Research Assistant',
    description: 'AI-powered legal research and case law analysis platform.',
    icon: FileText,
    features: ['Case Law Research', 'Legal Document Analysis', 'Precedent Finding', 'Compliance Checking'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Legal AI'
  },
  {
    title: 'AI Sports Performance Analyzer',
    description: 'AI-powered sports analytics and performance optimization for athletes.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prevention', 'Training Optimization', 'Biomechanics'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Sports AI'
  },
  {
    title: 'AI Real Estate Valuator',
    description: 'AI-powered real estate valuation and market analysis platform.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Real Estate AI'
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using machine learning.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Impact', 'Weather Forecasting', 'Carbon Footprint Analysis'],
    pricing: '$10,000 - $50,000/project',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'AI-Powered IoT Intelligence',
    description: 'Smart IoT solutions with AI for device management and data analytics.',
    icon: Network,
    features: ['Device Management', 'Predictive Maintenance', 'Data Analytics', 'Automated Control'],
    pricing: '$8,000 - $50,000/project',
    category: 'IoT',
    popular: true
  },
  {
    title: 'AI-Powered Virtual Reality',
    description: 'Immersive VR experiences powered by AI for training, entertainment, and education.',
    icon: Monitor,
    features: ['Immersive Environments', 'AI NPCs', 'Adaptive Learning', 'Haptic Feedback'],
    pricing: '$25,000 - $200,000/project',
    category: 'Virtual Reality',
    popular: true
  },
  {
    title: 'AI-Powered 5G Network Optimization',
    description: 'Intelligent 5G network management and optimization using AI algorithms.',
    icon: Network,
    features: ['Network Slicing', 'Resource Allocation', 'Quality of Service', 'Predictive Maintenance'],
    pricing: '$30,000 - $250,000/project',
    category: '5G Technology',
    popular: true
  },
  {
    title: 'AI-Powered Digital Transformation',
    description: 'Complete digital transformation solutions using AI for business process automation.',
    icon: Settings,
    features: ['Process Automation', 'Workflow Optimization', 'Data Integration', 'Change Management'],
    pricing: '$40,000 - $300,000/project',
    category: 'Digital Transformation',
    popular: true
  },
  {
    title: 'AI-Powered Customer Experience',
    description: 'Comprehensive customer experience optimization using AI across all touchpoints.',
    icon: Users,
    features: ['Journey Mapping', 'Personalization', 'Sentiment Analysis', 'Predictive Support'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Customer Experience',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Intelligence',
    description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Threat Intelligence'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'AI-Powered Medical Imaging',
    description: 'Advanced medical image analysis and diagnosis assistance using AI.',
    icon: Heart,
    features: ['X-ray Analysis', 'MRI Interpretation', 'CT Scan Processing', 'Pathology Detection'],
    pricing: '$25,000 - $150,000/project',
    category: 'Medical AI'
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and clinical trial optimization.',
>>>>>>> main
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Design'],
    pricing: '$50,000 - $500,000/project',
    category: 'Pharmaceutical AI'
  },
  {
    title: 'AI Financial Trading Algorithm',
    description: 'Advanced algorithmic trading system with machine learning and real-time market analysis.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Management', 'Portfolio Optimization', 'Real-time Trading'],
    pricing: '$75,000 - $500,000/setup',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'AI-Powered Climate Change Modeling',
    description: 'Advanced climate modeling and prediction using machine learning and big data analytics.',
    icon: Globe,
    features: ['Climate Modeling', 'Weather Prediction', 'Impact Assessment', 'Policy Analysis'],
    pricing: '$100,000 - $750,000/setup',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'AI Quantum Computing Optimizer',
    description: 'AI-driven quantum algorithm optimization and quantum machine learning solutions.',
    icon: Cpu,
    features: ['Quantum Algorithm Design', 'Optimization Problems', 'Quantum ML', 'Error Correction'],
    pricing: '$25,000 - $100,000/project',
    category: 'Quantum AI'
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'Autonomous space mission planning and satellite constellation optimization.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Optimization', 'Orbital Mechanics', 'Resource Allocation'],
    pricing: '$50,000 - $200,000/project',
    category: 'Space AI'
  },
  {
    title: 'AI Neuromorphic Computing Platform',
    description: 'Brain-inspired computing systems for edge AI and real-time processing.',
    icon: Brain,
    features: ['Neuromorphic Chips', 'Edge Computing', 'Real-time Processing', 'Low Power Consumption'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Neuromorphic AI'
  },
  {
    title: 'AI-Powered Synthetic Biology',
    description: 'AI-driven synthetic biology design and protein engineering platform.',
    icon: Heart,
    features: ['Protein Design', 'DNA Synthesis', 'Biological Modeling', 'Drug Discovery'],
    pricing: '$20,000 - $100,000/project',
    category: 'Synthetic Biology AI'
  },
  {
    title: 'AI Autonomous Vehicle Fleet Management',
    description: 'Intelligent fleet management and coordination for autonomous vehicles.',
    icon: Car,
    features: ['Fleet Coordination', 'Route Optimization', 'Predictive Maintenance', 'Safety Monitoring'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Autonomous Vehicles'
  },
  {
    title: 'AI-Powered Digital Twin Platform',
    description: 'Real-time digital twin creation and simulation for complex systems.',
    icon: Monitor,
    features: ['Real-time Simulation', 'Predictive Modeling', 'System Optimization', 'Virtual Testing'],
    pricing: '$25,000 - $125,000/project',
    category: 'Digital Twin AI'
  },
  {
    title: 'AI Edge Computing Intelligence',
    description: 'Distributed AI processing at the edge for IoT and real-time applications.',
    icon: Network,
    features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'Distributed Learning'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Edge AI'
  },
  {
    title: 'AI-Powered Metaverse Platform',
    description: 'AI-driven virtual world creation and immersive experience platform.',
    icon: Globe,
    features: ['Virtual World Creation', 'Avatar Generation', 'Behavioral AI', 'Immersive Experiences'],
    pricing: '$40,000 - $200,000/project',
    category: 'Metaverse AI'
  },
  {
    title: 'AI Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum ML Algorithms', 'Optimization Problems', 'Quantum Neural Networks', 'Quantum Data Processing'],
    pricing: '$30,000 - $150,000/project',
    category: 'Quantum ML'
  },
  {
    title: 'AI-Powered Brain-Computer Interface',
    description: 'AI-driven brain-computer interface for medical and assistive applications.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$50,000 - $250,000/project',
    category: 'BCI AI'
  },
  {
    title: 'AI Autonomous Drone Swarm',
    description: 'Coordinated autonomous drone operations for surveillance and delivery.',
    icon: Rocket,
    features: ['Swarm Coordination', 'Autonomous Navigation', 'Mission Planning', 'Collision Avoidance'],
    pricing: '$35,000 - $175,000/setup',
    category: 'Drone AI'
  },
  {
    title: 'AI-Powered Robotic Process Automation',
    description: 'Advanced RPA with AI decision-making and learning capabilities.',
    icon: Bot,
    features: ['Process Automation', 'Decision Making', 'Learning Algorithms', 'Exception Handling'],
    pricing: '$15,000 - $75,000/setup',
    category: 'RPA AI'
  },
  {
    title: 'AI Blockchain Analytics Platform',
    description: 'Advanced blockchain transaction analysis and cryptocurrency intelligence.',
    icon: Shield,
    features: ['Transaction Analysis', 'Anomaly Detection', 'Market Intelligence', 'Compliance Monitoring'],
    pricing: '$5,000 - $25,000/month',
    category: 'Blockchain AI'
  },
  {
    title: 'AI-Powered 6G Network Optimization',
    description: 'Next-generation network optimization and intelligent resource allocation.',
    icon: Network,
    features: ['Network Optimization', 'Resource Allocation', 'Predictive Maintenance', 'Performance Analytics'],
    pricing: '$40,000 - $200,000/project',
    category: '6G AI'
  },
  {
    title: 'AI Autonomous Trading System',
    description: 'Fully autonomous trading system with advanced market analysis and risk management.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Management', 'Portfolio Optimization', 'Real-time Trading'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Trading AI'
  },
  {
    title: 'AI-Powered Smart City Platform',
    description: 'Comprehensive smart city management with AI-driven optimization.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$100,000 - $500,000/project',
    category: 'Smart City AI'
  },
  {
    title: 'AI Augmented Reality Assistant',
    description: 'AI-powered AR assistant for industrial and consumer applications.',
    icon: Eye,
    features: ['AR Object Recognition', 'Spatial Computing', 'Real-time Guidance', 'Hands-free Operation'],
    pricing: '$20,000 - $100,000/project',
    category: 'AR AI'
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Self-learning cybersecurity system with adaptive threat detection.',
    icon: Shield,
    features: ['Adaptive Learning', 'Threat Detection', 'Automated Response', 'Behavioral Analysis'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Cybersecurity AI'
  },
  {
    title: 'AI-Powered Quantum Computing Optimization',
    description: 'Quantum algorithm optimization and quantum machine learning solutions.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization', 'Machine Learning', 'Error Correction'],
    pricing: '$150,000 - $1,000,000/setup',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'AI-Powered Smart Grid Management',
    description: 'Intelligent energy grid management with predictive analytics and optimization.',
    icon: Zap,
    features: ['Load Forecasting', 'Grid Optimization', 'Renewable Integration', 'Demand Response'],
    pricing: '$50,000 - $300,000/setup',
    category: 'Energy',
    popular: true
  },
  {
    title: 'AI-Powered Precision Agriculture',
    description: 'Smart farming solutions with AI-powered crop monitoring and optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    features: ['Market Analysis', 'Risk Management', 'Portfolio Optimization', 'High-frequency Trading'],
    pricing: '$30,000 - $200,000/setup',
    category: 'FinTech AI'
  },
  {
    title: 'AI-Powered Autonomous Drones',
    description: 'Intelligent drone systems with computer vision and autonomous navigation capabilities.',
    icon: Rocket,
    features: ['Autonomous Navigation', 'Object Detection', 'Path Planning', 'Real-time Decision Making'],
    pricing: '$40,000 - $300,000/project',
    category: 'Autonomous Systems'
  },
  {
    title: 'AI Content Creation Studio',
    description: 'Comprehensive AI platform for automated content creation across multiple media formats.',
    icon: FileText,
    features: ['Text Generation', 'Image Creation', 'Video Production', 'Audio Synthesis'],
    pricing: '$2,000 - $15,000/month',
    category: 'Content AI'
  },
  {
    title: 'AI-Powered Smart Cities Platform',
    description: 'Intelligent city management system with IoT integration and predictive analytics.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Smart Cities AI'
  },
  {
    title: 'AI Language Translation Engine',
    description: 'Real-time multilingual translation with context understanding and cultural adaptation.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Cultural Adaptation', 'Voice Translation'],
    pricing: '$1,000 - $8,000/month',
    category: 'Language AI'
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Advanced personal AI assistant with natural language processing and task automation.',
    icon: Bot,
    features: ['Natural Language Understanding', 'Task Automation', 'Calendar Management', 'Email Processing'],
    pricing: '$500 - $3,000/month',
    category: 'Personal AI'
  },
  {
    title: 'AI Weather Prediction System',
    description: 'Advanced weather forecasting using machine learning and satellite data analysis.',
    icon: Cloud,
    features: ['Long-term Forecasting', 'Severe Weather Detection', 'Climate Modeling', 'Agricultural Predictions'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Environmental AI'
  },
  {
    title: 'AI-Powered Legal Research Assistant',
    description: 'Intelligent legal research platform with case law analysis and document review.',
    icon: BookOpen,
<<<<<<< HEAD
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
    title: 'AI-Powered Carbon Footprint Analysis',
    description: 'Advanced AI system for analyzing and optimizing carbon footprints across industries.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Emission Analysis', 'Optimization Recommendations', 'Sustainability Reporting'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Environmental AI'
  },
  {
    title: 'AI-Powered Voice Synthesis & Cloning',
    description: 'High-fidelity voice synthesis and cloning technology for content creation and accessibility.',
    icon: Mic,
    features: ['Voice Cloning', 'Emotion Synthesis', 'Multi-language Support', 'Real-time Processing'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Voice AI'
  },
  {
    title: 'AI-Powered Smart Grid Management',
    description: 'Intelligent grid management system for renewable energy integration and optimization.',
    icon: Zap,
    features: ['Grid Optimization', 'Renewable Integration', 'Load Balancing', 'Predictive Maintenance'],
    pricing: '$50,000 - $200,000/project',
    category: 'Energy AI'
  },
  {
    title: 'AI-Powered Drug Repurposing Platform',
    description: 'Machine learning platform for discovering new uses for existing drugs.',
    icon: Heart,
    features: ['Drug-Disease Mapping', 'Side Effect Analysis', 'Efficacy Prediction', 'Clinical Trial Design'],
    pricing: '$25,000 - $100,000/project',
    category: 'Pharma AI'
  },
  {
    title: 'AI-Powered Smart City Analytics',
    description: 'Comprehensive AI platform for smart city data analysis and optimization.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Management', 'Citizen Services', 'Environmental Monitoring'],
    pricing: '$100,000 - $500,000/project',
    category: 'Smart Cities AI'
  },
  {
    title: 'AI-Powered Advanced Fraud Prevention',
    description: 'Next-generation fraud detection using deep learning and behavioral biometrics.',
    icon: Shield,
    features: ['Behavioral Biometrics', 'Deep Learning Models', 'Real-time Scoring', 'Adaptive Learning'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Security AI'
  },
  {
    title: 'AI-Powered Content Moderation Suite',
    description: 'Comprehensive content moderation using multi-modal AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Context Understanding', 'Cultural Sensitivity', 'Real-time Processing'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Content AI'
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Advanced predictive maintenance system for industrial equipment and machinery.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$30,000 - $150,000/project',
    category: 'Industrial AI'
  },
  {
    title: 'AI-Powered Language Translation & Localization',
    description: 'Advanced translation system with cultural context and real-time processing.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Adaptation', 'Context Awareness', 'Quality Assurance'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Language AI'
  },
  {
    title: 'AI-Powered Personal Finance Advisor',
    description: 'Intelligent personal finance management with investment recommendations and risk assessment.',
    icon: DollarSign,
    features: ['Portfolio Analysis', 'Investment Recommendations', 'Risk Assessment', 'Goal Planning'],
    pricing: '$2,000 - $10,000/setup',
    category: 'FinTech AI'
  },
  {
    title: 'AI-Powered Water Quality Monitoring',
    description: 'Intelligent water quality analysis and contamination detection system.',
    icon: Droplets,
    features: ['Real-time Analysis', 'Contamination Detection', 'Quality Prediction', 'Alert Systems'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Environmental AI'
  },
  {
    title: 'AI-Powered Retail Analytics & Optimization',
    description: 'Comprehensive retail analytics with demand forecasting and inventory optimization.',
    icon: ShoppingCart,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Customer Analytics', 'Price Optimization'],
    pricing: '$25,000 - $125,000/project',
    category: 'Retail AI'
  },
  {
    title: 'AI-Powered Cybersecurity Training Simulator',
    description: 'Advanced cybersecurity training platform with AI-generated attack scenarios.',
    icon: Shield,
    features: ['Attack Simulation', 'Skill Assessment', 'Personalized Training', 'Progress Tracking'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Security Training AI'
  },
  {
    title: 'AI-Powered Manufacturing Quality Control',
    description: 'Intelligent quality control system for manufacturing with real-time defect detection.',
    icon: Settings,
    features: ['Defect Detection', 'Quality Metrics', 'Process Optimization', 'Predictive Quality'],
    pricing: '$40,000 - $200,000/project',
    category: 'Manufacturing AI'
  },
  {
    title: 'AI-Powered Energy Storage Optimization',
    description: 'Intelligent energy storage management for renewable energy systems.',
    icon: Battery,
    features: ['Storage Optimization', 'Load Balancing', 'Cost Optimization', 'Grid Integration'],
    pricing: '$30,000 - $150,000/project',
    category: 'Energy AI'
  },
  {
    title: 'AI-Powered Agricultural Intelligence',
    description: 'Comprehensive AI platform for precision agriculture and crop optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$20,000 - $100,000/project',
    category: 'AgTech AI'
  },
  {
    title: 'AI-Powered Real Estate Valuation',
    description: 'Advanced property valuation using AI analysis of market data and property features.',
    icon: Home,
    features: ['Property Analysis', 'Market Prediction', 'Investment Insights', 'Risk Assessment'],
    pricing: '$5,000 - $25,000/setup',
    category: 'PropTech AI'
  },
  {
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document analysis with contract review and risk assessment.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Legal AI'
  },
  {
    title: 'AI-Powered Supply Chain Risk Management',
    description: 'Intelligent supply chain risk assessment and mitigation strategies.',
    icon: Network,
    features: ['Risk Assessment', 'Supplier Analysis', 'Disruption Prediction', 'Mitigation Planning'],
    pricing: '$25,000 - $125,000/project',
    category: 'Supply Chain AI'
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design, target identification, and clinical trial optimization.',
    icon: Heart,
    features: ['Molecular Design', 'Target Identification', 'Clinical Trial Optimization', 'Toxicity Prediction'],
    pricing: '$100,000 - $500,000/project',
    category: 'Healthcare AI',
    popular: true,
    benefits: ['Faster Discovery', 'Cost Reduction', 'Better Success Rate', 'Innovation'],
    marketPrice: '$150,000 - $750,000/project',
    link: 'https://ziontechgroup.com/ai-drug-discovery'
  },
  {
    title: 'AI-Powered Climate Change Modeling',
    description: 'Advanced climate modeling and prediction using AI for environmental impact assessment.',
    icon: Sprout,
    features: ['Climate Modeling', 'Impact Assessment', 'Prediction Analytics', 'Policy Recommendations'],
    pricing: '$50,000 - $300,000/project',
    category: 'Environmental AI',
    benefits: ['Better Predictions', 'Policy Support', 'Environmental Protection', 'Research Advancement'],
    marketPrice: '$75,000 - $450,000/project',
    link: 'https://ziontechgroup.com/ai-climate-modeling'
  },
  {
    title: 'AI-Powered Space Exploration Analytics',
    description: 'AI-driven space data analysis for satellite operations, space weather prediction, and exploration missions.',
    icon: Rocket,
    features: ['Satellite Analytics', 'Space Weather Prediction', 'Mission Planning', 'Data Processing'],
    pricing: '$200,000 - $1,500,000/project',
    category: 'Space AI',
    benefits: ['Mission Success', 'Data Insights', 'Risk Reduction', 'Innovation'],
    marketPrice: '$300,000 - $2,250,000/project',
    link: 'https://ziontechgroup.com/ai-space-analytics'
  },
  {
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle AI system with perception, decision making, and control algorithms.',
    icon: Car,
    features: ['Computer Vision', 'Decision Making', 'Path Planning', 'Safety Systems'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Autonomous Vehicles',
    benefits: ['Safety', 'Efficiency', 'Innovation', 'Future Technology'],
    marketPrice: '$750,000 - $7,500,000/project',
    link: 'https://ziontechgroup.com/ai-autonomous-vehicles'
  },
  {
    title: 'AI-Powered Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for complex optimization and pattern recognition.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization', 'Pattern Recognition', 'Quantum-Classical Hybrid'],
    pricing: '$300,000 - $2,000,000/project',
    category: 'Quantum AI',
    benefits: ['Exponential Speedup', 'Better Optimization', 'Research Advancement', 'Competitive Edge'],
    marketPrice: '$450,000 - $3,000,000/project',
    link: 'https://ziontechgroup.com/ai-quantum-ml'
  },
  {
    title: 'AI-Powered Personalized Medicine',
    description: 'AI-driven personalized treatment recommendations based on genetic, lifestyle, and medical data.',
    icon: Heart,
    features: ['Genetic Analysis', 'Treatment Optimization', 'Drug Interaction Analysis', 'Outcome Prediction'],
    pricing: '$75,000 - $400,000/project',
    category: 'Personalized Medicine',
    benefits: ['Better Outcomes', 'Personalized Care', 'Cost Efficiency', 'Patient Safety'],
    marketPrice: '$100,000 - $600,000/project',
    link: 'https://ziontechgroup.com/ai-personalized-medicine'
  },
  {
    title: 'AI-Powered Smart Grid Optimization',
    description: 'Intelligent energy grid management with demand forecasting, load balancing, and renewable integration.',
    icon: Zap,
    features: ['Demand Forecasting', 'Load Balancing', 'Renewable Integration', 'Grid Optimization'],
    pricing: '$100,000 - $800,000/project',
    category: 'Energy AI',
    benefits: ['Energy Efficiency', 'Cost Reduction', 'Renewable Integration', 'Grid Stability'],
    marketPrice: '$150,000 - $1,200,000/project',
    link: 'https://ziontechgroup.com/ai-smart-grid'
  },
  {
    title: 'AI-Powered Cybersecurity Threat Intelligence',
    description: 'Advanced threat intelligence and response system with behavioral analysis and automated defense.',
    icon: Shield,
    features: ['Threat Intelligence', 'Behavioral Analysis', 'Automated Response', 'Incident Investigation'],
    pricing: '$150,000 - $1,000,000/project',
    category: 'Cybersecurity AI',
    benefits: ['Better Security', 'Faster Response', 'Threat Prevention', 'Cost Reduction'],
    marketPrice: '$200,000 - $1,500,000/project',
    link: 'https://ziontechgroup.com/ai-cybersecurity-threats'
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive AI platform for smart city infrastructure, traffic management, and citizen services.',
    icon: Building,
    features: ['Traffic Management', 'Resource Optimization', 'Citizen Services', 'Infrastructure Monitoring'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Smart City AI',
    benefits: ['Better Urban Living', 'Efficiency', 'Sustainability', 'Citizen Satisfaction'],
    marketPrice: '$750,000 - $7,500,000/project',
    link: 'https://ziontechgroup.com/ai-smart-city'
  },
  {
    title: 'AI-Powered Financial Risk Management',
    description: 'Advanced financial risk assessment and management using AI for portfolio optimization and fraud detection.',
    icon: DollarSign,
    features: ['Risk Assessment', 'Portfolio Optimization', 'Fraud Detection', 'Market Analysis'],
    pricing: '$100,000 - $800,000/project',
    category: 'Financial AI',
    benefits: ['Better Risk Management', 'Higher Returns', 'Fraud Prevention', 'Compliance'],
    marketPrice: '$150,000 - $1,200,000/project',
    link: 'https://ziontechgroup.com/ai-financial-risk'
  },
  {
    title: 'AI-Powered Manufacturing Quality Control',
    description: 'Intelligent quality control system with computer vision and predictive maintenance for manufacturing.',
    icon: Settings,
    features: ['Computer Vision', 'Quality Inspection', 'Predictive Maintenance', 'Process Optimization'],
    pricing: '$200,000 - $1,500,000/project',
    category: 'Manufacturing AI',
    benefits: ['Better Quality', 'Cost Reduction', 'Predictive Maintenance', 'Efficiency'],
    marketPrice: '$300,000 - $2,250,000/project',
    link: 'https://ziontechgroup.com/ai-manufacturing-quality'
  },
  {
    title: 'AI-Powered Educational Personalization',
    description: 'Personalized learning platform with adaptive curriculum and intelligent tutoring systems.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Intelligent Tutoring', 'Progress Tracking', 'Content Personalization'],
    pricing: '$50,000 - $300,000/project',
    category: 'EdTech AI',
    benefits: ['Better Learning', 'Personalized Experience', 'Improved Outcomes', 'Engagement'],
    marketPrice: '$75,000 - $450,000/project',
    link: 'https://ziontechgroup.com/ai-educational-personalization'
  },
  {
    title: 'AI-Powered Agricultural Optimization',
    description: 'Smart farming solutions with crop monitoring, yield prediction, and resource optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Pest Detection'],
    pricing: '$75,000 - $500,000/project',
    category: 'AgTech AI',
    benefits: ['Higher Yields', 'Resource Efficiency', 'Cost Reduction', 'Sustainability'],
    marketPrice: '$100,000 - $750,000/project',
    link: 'https://ziontechgroup.com/ai-agricultural-optimization'
  },
  {
    title: 'AI-Powered Mental Health Companion',
    description: 'AI-powered mental health support system with mood tracking, crisis detection, and therapeutic conversations.',
    icon: Heart,
    features: ['Mood Tracking', 'Crisis Detection', 'Therapeutic Conversations', 'Progress Monitoring'],
    pricing: '$25,000 - $150,000/project',
    category: 'HealthTech AI',
    benefits: ['Better Mental Health', 'Early Intervention', 'Accessibility', 'Privacy'],
    marketPrice: '$40,000 - $225,000/project',
    link: 'https://ziontechgroup.com/ai-mental-health-companion'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
<<<<<<< HEAD
=======

=======
    features: ['Case Law Analysis', 'Document Review', 'Legal Research', 'Compliance Checking'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Legal AI'
  },
  {
    title: 'AI Sports Performance Analytics',
    description: 'Advanced sports analytics platform with player performance prediction and injury prevention.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prediction', 'Tactical Analysis', 'Player Scouting'],
    pricing: '$15,000 - $100,000/project',
    category: 'Sports AI'
  },
  {
    title: 'AI-Powered Agricultural Intelligence',
    description: 'Smart farming solution with crop monitoring, yield prediction, and resource optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Disease Detection', 'Resource Optimization'],
    pricing: '$20,000 - $150,000/project',
    category: 'AgTech AI'
  },
  {
    title: 'AI Mental Health Companion',
    description: 'AI-powered mental health support system with mood tracking and therapeutic conversations.',
    icon: Heart,
    features: ['Mood Tracking', 'Crisis Detection', 'Therapeutic Conversations', 'Progress Monitoring'],
    pricing: '$2,000 - $12,000/setup',
    category: 'HealthTech AI'
  }
];
const industries = [{ name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
>>>>>>> main
>>>>>>> main
  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];
<<<<<<< HEAD

const benefits = [
  {
=======
<<<<<<< HEAD


const benefits = [
  {
=======
const benefits = [{
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
<<<<<<< HEAD
=======

>>>>>>> main
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
<<<<<<< HEAD
=======
    initial={{ opacity: 0, y: 30 }}
=======
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
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
>>>>>>> main
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-16 w-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
=======
<<<<<<< HEAD

            <div className="flex items-center justify-center mb-6">
              <Brain className="h-16 w-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">

=======
<div className="flex items-center justify-center mb-6">
                  <Brain className="h-16 w-16 text-blue-400 mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
>>>>>>> main
>>>>>>> main
                AI{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> main
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
<<<<<<< HEAD
=======

=======
</h1>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we deliver AI that works.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
>>>>>>> main
>>>>>>> main
                Get AI Consultation
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
<<<<<<< HEAD

=======
>>>>>>> main
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
<<<<<<< HEAD
    className="text-center mb-16"
=======
            className="text-center mb-16"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
=======
<<<<<<< HEAD

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">

=======
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
=======
<<<<<<< HEAD
    key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"

=======
                  key={index}
className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group
>>>>>>> main
>>>>>>> main
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
=======
whileHover={{ y: -5 }} ">
                  <div className="flex items-center justify-between mb-4">
<<<<<<< HEAD
>>>>>>> main
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
<<<<<<< HEAD
=======

=======
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                  <IconComponent className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
=======
<<<<<<< HEAD

                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">

=======
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>
                  <ul className="space-y-1">
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD

=======
>>>>>>> main
      {/* Industries Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
<<<<<<< HEAD
    className="text-center mb-16"
=======
            className="text-center mb-16"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
=======
<<<<<<< HEAD

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>

=======
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
>>>>>>> main
>>>>>>> main
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI solutions are tailored for various industries and use cases.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
<<<<<<< HEAD
                  key={index}
=======
<<<<<<< HEAD
    key={index}
>>>>>>> main
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
<<<<<<< HEAD
=======

=======
                  key={index}
className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}">
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD

=======
>>>>>>> main
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
<<<<<<< HEAD
    className="text-center mb-16"
=======
            className="text-center mb-16"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
=======
<<<<<<< HEAD

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>

=======
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
<<<<<<< HEAD
        <div className="container mx-auto px-4 text-center">
          <motion.div
=======

        <div className="container mx-auto px-4 text-center">
          <motion.div
    initial={{ opacity: 0, y: 30 }}
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
<div className="container mx-auto px-4 text-center">
                  <motion.div
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
>>>>>>> main
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
=======
<<<<<<< HEAD

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>

=======
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
>>>>>>> main
>>>>>>> main
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
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
<<<<<<< HEAD

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
=======
>>>>>>> main
                  </div>
  );
}