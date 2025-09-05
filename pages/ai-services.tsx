import React, { useState } from 'react';
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
  BookOpen
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
    pricing: '$5,000 - $25,000 project',
    category: 'Legal Tech'
  },
  {
    title: 'AI Quantum Computing Integration',
    description: 'Quantum-enhanced AI algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Machine Learning', 'Optimization Algorithms', 'Cryptography', 'Simulation'],
    pricing: '$100,000 - $500,000 project',
    category: 'Quantum AI',
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
    title: 'AI-Powered Metaverse Platform',
    description: 'Complete metaverse infrastructure with AI-driven virtual worlds and avatars.',
    icon: Globe,
    features: ['Virtual World Generation', 'AI Avatars', 'Natural Language Interaction', 'Immersive Experiences'],
    pricing: '$50,000 - $500,000/project',
    category: 'Metaverse',
    popular: true
  },
  {
    title: 'AI Consciousness Simulation',
    description: 'Advanced AI systems that simulate consciousness and self-awareness for research applications.',
    icon: Brain,
    features: ['Consciousness Modeling', 'Self-Awareness Simulation', 'Cognitive Architecture', 'Ethical AI Framework'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Consciousness AI',
    popular: true
  },
  {
    title: 'AI-Powered Time Travel Simulation',
    description: 'Advanced temporal modeling and simulation for historical analysis and future prediction.',
    icon: Clock,
    features: ['Historical Simulation', 'Future Prediction', 'Causal Analysis', 'Temporal Modeling'],
    pricing: '$75,000 - $750,000/project',
    category: 'Temporal AI',
    popular: true
  },
  {
    title: 'AI Quantum Consciousness Interface',
    description: 'Quantum-enhanced AI systems for consciousness research and human-AI interaction.',
    icon: Cpu,
    features: ['Quantum Consciousness', 'Human-AI Interface', 'Consciousness Transfer', 'Quantum Entanglement'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Quantum Consciousness',
    popular: true
  },
  {
    title: 'AI-Powered Reality Manipulation',
    description: 'Advanced AI systems for augmented reality and reality manipulation technologies.',
    icon: Eye,
    features: ['Reality Augmentation', 'Perception Manipulation', 'Spatial Computing', 'Immersive Control'],
    pricing: '$150,000 - $1,500,000/project',
    category: 'Reality AI',
    popular: true
  },
  {
    title: 'AI Universal Translator',
    description: 'Real-time translation across all languages including extinct and constructed languages.',
    icon: Globe,
    features: ['Universal Translation', 'Language Reconstruction', 'Cultural Context', 'Real-time Processing'],
    pricing: '$25,000 - $250,000/setup',
    category: 'Translation AI',
    popular: true
  },
  {
    title: 'AI-Powered Dream Analysis',
    description: 'Advanced AI for dream interpretation and sleep pattern analysis.',
    icon: Brain,
    features: ['Dream Interpretation', 'Sleep Analysis', 'Subconscious Mapping', 'Therapeutic Insights'],
    pricing: '$15,000 - $150,000/project',
    category: 'Dream AI',
    popular: true
  },
  {
    title: 'AI Emotion Synthesis',
    description: 'AI systems that can generate and understand complex human emotions.',
    icon: Heart,
    features: ['Emotion Generation', 'Empathy Simulation', 'Emotional Intelligence', 'Therapeutic Applications'],
    pricing: '$30,000 - $300,000/project',
    category: 'Emotional AI',
    popular: true
  },
  {
    title: 'AI-Powered Memory Enhancement',
    description: 'AI systems for memory augmentation and cognitive enhancement.',
    icon: Brain,
    features: ['Memory Augmentation', 'Cognitive Enhancement', 'Learning Acceleration', 'Memory Retrieval'],
    pricing: '$40,000 - $400,000/project',
    category: 'Memory AI',
    popular: true
  },
  {
    title: 'AI Creativity Engine',
    description: 'Advanced AI for creative problem-solving and artistic expression.',
    icon: FileText,
    features: ['Creative Problem Solving', 'Artistic Generation', 'Innovation Catalyst', 'Design Thinking'],
    pricing: '$20,000 - $200,000/project',
    category: 'Creative AI',
    popular: true
  },
  {
    title: 'AI-Powered Telepathy Simulation',
    description: 'AI systems that simulate telepathic communication and mind-reading capabilities.',
    icon: Brain,
    features: ['Thought Reading', 'Mental Communication', 'Neural Interface', 'Privacy Protection'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Telepathic AI',
    popular: true
  },
  {
    title: 'AI Time Dilation Engine',
    description: 'AI systems for temporal perception manipulation and time flow optimization.',
    icon: Clock,
    features: ['Temporal Perception', 'Time Flow Control', 'Chronological Analysis', 'Temporal Optimization'],
    pricing: '$80,000 - $800,000/project',
    category: 'Temporal AI',
    popular: true
  },
  {
    title: 'AI-Powered Immortality Research',
    description: 'AI systems for longevity research and life extension technologies.',
    icon: Heart,
    features: ['Longevity Research', 'Life Extension', 'Health Optimization', 'Aging Reversal'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Longevity AI',
    popular: true
  },
  {
    title: 'AI Universal Problem Solver',
    description: 'General-purpose AI that can solve any problem across all domains.',
    icon: Settings,
    features: ['Universal Problem Solving', 'Cross-domain Intelligence', 'Adaptive Learning', 'Infinite Scalability'],
    pricing: '$1,000,000 - $10,000,000/project',
    category: 'General AI',
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
    title: 'AI-Powered Quantum Computing Simulator',
    description: 'Advanced quantum computing simulation and algorithm development platform.',
    icon: Cpu,
    features: ['Quantum Circuit Design', 'Algorithm Simulation', 'Error Correction', 'Performance Analysis'],
    pricing: '$5,000 - $25,000/month',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'AI Autonomous Vehicle Testing',
    description: 'Comprehensive AI testing and validation platform for autonomous vehicles.',
    icon: Car,
    features: ['Simulation Environment', 'Safety Testing', 'Performance Validation', 'Regulatory Compliance'],
    pricing: '$25,000 - $150,000/project',
    category: 'Autonomous Vehicles',
    popular: true
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using AI.',
    icon: Globe,
    features: ['Climate Prediction', 'Impact Analysis', 'Carbon Footprint Tracking', 'Sustainability Planning'],
    pricing: '$10,000 - $75,000/project',
    category: 'Climate Tech',
    popular: true
  },
  {
    title: 'AI Space Mission Planning',
    description: 'Intelligent mission planning and optimization for space exploration.',
    icon: Rocket,
    features: ['Trajectory Optimization', 'Resource Planning', 'Risk Assessment', 'Mission Simulation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Space Technology',
    popular: true
  },
  {
    title: 'AI-Powered Metaverse Platform',
    description: 'Complete metaverse creation and management platform with AI-driven interactions.',
    icon: Monitor,
    features: ['3D World Creation', 'AI Avatars', 'Virtual Economy', 'Social Interactions'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Metaverse',
    popular: true
  },
  {
    title: 'AI Neuromorphic Computing',
    description: 'Brain-inspired computing systems for advanced AI processing.',
    icon: Brain,
    features: ['Neural Architecture', 'Pattern Recognition', 'Learning Algorithms', 'Energy Efficiency'],
    pricing: '$20,000 - $200,000/project',
    category: 'Neuromorphic Computing',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Self-evolving AI system for advanced threat detection and response.',
    icon: Shield,
    features: ['Adaptive Learning', 'Threat Evolution', 'Automated Response', 'Zero-day Detection'],
    pricing: '$8,000 - $50,000/month',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI Synthetic Data Generator',
    description: 'High-quality synthetic data generation for training and testing AI models.',
    icon: Database,
    features: ['Realistic Data Generation', 'Privacy Preservation', 'Bias Mitigation', 'Quality Validation'],
    pricing: '$2,000 - $15,000/month',
    category: 'Data Generation',
    popular: true
  },
  {
    title: 'AI-Powered Edge AI Platform',
    description: 'Distributed AI processing platform for edge computing environments.',
    icon: Network,
    features: ['Edge Deployment', 'Model Optimization', 'Real-time Processing', 'Resource Management'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Edge AI',
    popular: true
  },
  {
    title: 'AI Consciousness Simulation',
    description: 'Advanced AI consciousness modeling and ethical AI development platform.',
    icon: Brain,
    features: ['Consciousness Modeling', 'Ethical Frameworks', 'Decision Making', 'Moral Reasoning'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'AI Ethics',
    popular: true
  },
  {
    title: 'AI-Powered Time Series Forecasting',
    description: 'Advanced time series prediction for financial, weather, and business data.',
    icon: TrendingUp,
    features: ['Multi-variate Analysis', 'Seasonality Detection', 'Anomaly Detection', 'Confidence Intervals'],
    pricing: '$3,000 - $20,000/setup',
    category: 'Time Series',
    popular: true
  },
  {
    title: 'AI Molecular Design Platform',
    description: 'AI-driven molecular design and drug discovery for pharmaceutical companies.',
    icon: Heart,
    features: ['Molecular Generation', 'Property Prediction', 'Drug-Target Interaction', 'Toxicity Assessment'],
    pricing: '$25,000 - $200,000/project',
    category: 'Pharmaceutical AI',
    popular: true
  },
  {
    title: 'AI-Powered Augmented Reality',
    description: 'Intelligent AR platform with object recognition and spatial understanding.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Real-time Rendering', 'Gesture Control'],
    pricing: '$10,000 - $75,000/setup',
    category: 'Augmented Reality',
    popular: true
  },
  {
    title: 'AI Digital Human Creation',
    description: 'Realistic digital human creation with natural language and emotion processing.',
    icon: Users,
    features: ['Facial Animation', 'Voice Synthesis', 'Emotion Recognition', 'Natural Interaction'],
    pricing: '$15,000 - $100,000/project',
    category: 'Digital Humans',
    popular: true
  },
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'Advanced blockchain transaction analysis and cryptocurrency intelligence.',
    icon: TrendingUp,
    features: ['Transaction Analysis', 'Pattern Recognition', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: '$5,000 - $40,000/month',
    category: 'Blockchain AI',
    popular: true
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(aiServices.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = aiServices.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            {currentServices.map((service, index) => {
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-lg border ${
                      currentPage === page
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
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
            <div className="mb-8">
              <p className="text-lg text-blue-100 mb-2">
                📞 <strong>Call us:</strong> +1 302 464 0950
              </p>
              <p className="text-lg text-blue-100 mb-2">
                📧 <strong>Email us:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-lg text-blue-100">
                📍 <strong>Visit us:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
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