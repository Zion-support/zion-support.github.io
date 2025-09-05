import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
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
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout,
  Mail,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Share2,
  Receipt,
  Package,
  Calendar,
  Headphones,
  Kanban,
  HardDrive,
  Bell,
  Home,
  BookOpen,
  Database
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Communication',
    popular: true,
    link: 'https://aiemail.ziontechgroup.com'
  },
  {
    title: 'Intelligent Document Processor',
    description: 'Extract, analyze, and process information from various document formats automatically.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Batch Processing'],
    pricing: '$1,500 - $6,000/month',
    category: 'Document Processing',
    link: 'https://docprocessor.ziontechgroup.com'
  },
  {
    title: 'Predictive Analytics Engine',
    description: 'Advanced machine learning models for business forecasting and trend analysis.',
    icon: BarChart3,
    features: ['Forecasting Models', 'Trend Analysis', 'Risk Assessment', 'Custom Dashboards'],
    pricing: '$3,000 - $15,000/month',
    category: 'Analytics',
    popular: true,
    link: 'https://predictive.ziontechgroup.com'
  },
  {
    title: 'AI Chatbot Platform',
    description: 'Intelligent conversational AI for customer support and engagement.',
    icon: Bot,
    features: ['Natural Conversations', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
    pricing: '$500 - $2,500/month',
    category: 'Customer Service',
    link: 'https://aichatbot.ziontechgroup.com'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using state-of-the-art computer vision algorithms.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Real-time Processing'],
    pricing: '$2,500 - $10,000/month',
    category: 'Computer Vision',
    link: 'https://computervision.ziontechgroup.com'
  },
  {
    title: 'Voice Recognition System',
    description: 'Advanced speech-to-text and voice command processing for applications.',
    icon: Mic,
    features: ['Speech-to-Text', 'Voice Commands', 'Multi-language Support', 'Noise Cancellation'],
    pricing: '$1,000 - $5,000/month',
    category: 'Speech Processing',
    link: 'https://voicerecognition.ziontechgroup.com'
  },
  {
    title: 'Quantum AI Optimization Engine',
    description: 'Quantum-enhanced AI algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Hybrid Classical-Quantum', 'Performance Benchmarks'],
    pricing: '$5,000 - $25,000/month',
    category: 'Quantum AI',
    popular: true,
    link: 'https://quantumai.ziontechgroup.com'
  },
  {
    title: 'Edge AI Vision System',
    description: 'Real-time AI vision processing at the edge for IoT and mobile applications.',
    icon: Monitor,
    features: ['Edge Processing', 'Real-time Analysis', 'Low Latency', 'Mobile Optimization'],
    pricing: '$2,000 - $8,000/month',
    category: 'Edge AI',
    link: 'https://edgevision.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Machine learning platform for pharmaceutical research and drug development.',
    icon: Heart,
    features: ['Molecular Analysis', 'Drug Interaction Prediction', 'Clinical Trial Optimization', 'Safety Assessment'],
    pricing: '$10,000 - $50,000/month',
    category: 'Healthcare AI',
    link: 'https://drugdiscovery.ziontechgroup.com'
  },
  {
    title: 'Autonomous Vehicle AI System',
    description: 'Complete AI system for autonomous vehicle navigation and safety.',
    icon: Car,
    features: ['Path Planning', 'Object Detection', 'Collision Avoidance', 'Real-time Decision Making'],
    pricing: '$15,000 - $75,000/month',
    category: 'Autonomous Systems',
    link: 'https://autonomous.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using machine learning.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Analysis', 'Risk Assessment', 'Policy Optimization'],
    pricing: '$5,000 - $20,000/month',
    category: 'Environmental AI',
    link: 'https://climatemodeling.ziontechgroup.com'
  },
  {
    title: 'Neural Architecture Search (NAS)',
    description: 'Automated neural network design and optimization for specific tasks and datasets.',
    icon: Network,
    features: ['Auto Architecture Design', 'Performance Optimization', 'Hardware-Aware Design', 'Transfer Learning'],
    pricing: '$3,000 - $15,000/month',
    category: 'Deep Learning',
    popular: true,
    link: 'https://nas.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection and prevention using advanced machine learning algorithms.',
    icon: Shield,
    features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'False Positive Reduction'],
    pricing: '$2,000 - $10,000/month',
    category: 'Security AI',
    link: 'https://frauddetection.ziontechgroup.com'
  },
  {
    title: 'Generative AI Content Platform',
    description: 'Advanced content generation using GPT and other large language models for various use cases.',
    icon: FileText,
    features: ['Text Generation', 'Code Generation', 'Creative Writing', 'Multi-modal Output'],
    pricing: '$1,000 - $5,000/month',
    category: 'Generative AI',
    popular: true,
    link: 'https://generativeai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Risk Analysis'],
    pricing: '$4,000 - $20,000/month',
    category: 'Supply Chain AI',
    link: 'https://supplychainai.ziontechgroup.com'
  },
  {
    title: 'Reinforcement Learning Platform',
    description: 'Custom reinforcement learning solutions for complex decision-making problems.',
    icon: Target,
    features: ['Custom RL Algorithms', 'Environment Simulation', 'Policy Optimization', 'Multi-agent Systems'],
    pricing: '$5,000 - $25,000/month',
    category: 'Reinforcement Learning',
    link: 'https://rlplatform.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Medical Diagnosis',
    description: 'Advanced medical image analysis and diagnostic assistance using deep learning.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Diagnostic Assistance', 'Treatment Recommendations', 'Clinical Decision Support'],
    pricing: '$8,000 - $40,000/month',
    category: 'Medical AI',
    popular: true,
    link: 'https://medicalai.ziontechgroup.com'
  },
  {
    title: 'Natural Language Understanding (NLU)',
    description: 'Advanced natural language understanding for complex text analysis and processing.',
    icon: MessageSquare,
    features: ['Intent Recognition', 'Entity Extraction', 'Sentiment Analysis', 'Context Understanding'],
    pricing: '$1,500 - $7,500/month',
    category: 'NLP',
    link: 'https://nlu.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Personalized recommendation systems for e-commerce, content, and services.',
    icon: TrendingUp,
    features: ['Personalization', 'Real-time Recommendations', 'A/B Testing', 'Performance Analytics'],
    pricing: '$2,000 - $10,000/month',
    category: 'Recommendation Systems',
    link: 'https://recommendations.ziontechgroup.com'
  },
  {
    title: 'Computer Vision for Manufacturing',
    description: 'Quality control and defect detection using computer vision in manufacturing processes.',
    icon: Eye,
    features: ['Defect Detection', 'Quality Control', 'Process Monitoring', 'Predictive Maintenance'],
    pricing: '$3,000 - $15,000/month',
    category: 'Industrial AI',
    link: 'https://manufacturingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Financial Trading',
    description: 'Algorithmic trading systems using machine learning for financial markets.',
    icon: DollarSign,
    features: ['Algorithmic Trading', 'Risk Management', 'Market Analysis', 'Portfolio Optimization'],
    pricing: '$5,000 - $30,000/month',
    category: 'FinTech AI',
    popular: true,
    link: 'https://tradingai.ziontechgroup.com'
  },
  {
    title: 'Conversational AI Platform',
    description: 'Advanced conversational AI for virtual assistants and customer service automation.',
    icon: Bot,
    features: ['Multi-turn Conversations', 'Context Awareness', 'Emotion Recognition', 'Voice Integration'],
    pricing: '$1,000 - $5,000/month',
    category: 'Conversational AI',
    link: 'https://conversationalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
    pricing: '$3,000 - $15,000/month',
    category: 'Cybersecurity AI',
    link: 'https://cybersecurityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Energy Optimization',
    description: 'Smart energy management and optimization for buildings and industrial facilities.',
    icon: Zap,
    features: ['Energy Forecasting', 'Load Optimization', 'Renewable Integration', 'Cost Reduction'],
    pricing: '$2,500 - $12,000/month',
    category: 'Energy AI',
    link: 'https://energyai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Document Analysis',
    description: 'Automated legal document review and analysis using natural language processing.',
    icon: FileText,
    features: ['Document Review', 'Contract Analysis', 'Risk Assessment', 'Compliance Checking'],
    pricing: '$2,000 - $10,000/month',
    category: 'Legal AI',
    link: 'https://legalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Agricultural Monitoring',
    description: 'Precision agriculture using computer vision and IoT for crop monitoring and optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Disease Detection', 'Yield Prediction', 'Resource Optimization'],
    pricing: '$1,500 - $8,000/month',
    category: 'AgTech AI',
    link: 'https://agricultureai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation for social media, forums, and user-generated content.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules', 'Scalable API'],
    pricing: '$500 - $3,000/month',
    category: 'Content AI',
    link: 'https://contentmoderation.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Dynamic personalization for websites, apps, and digital experiences.',
    icon: Users,
    features: ['Real-time Personalization', 'A/B Testing', 'Behavioral Analysis', 'Conversion Optimization'],
    pricing: '$1,000 - $5,000/month',
    category: 'Personalization AI',
    link: 'https://personalization.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Code Generation',
    description: 'Automated code generation and assistance for developers using large language models.',
    icon: Code,
    features: ['Code Generation', 'Bug Fixing', 'Code Review', 'Documentation Generation'],
    pricing: '$500 - $2,500/month',
    category: 'Developer AI',
    popular: true,
    link: 'https://codegeneration.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Video Analytics',
    description: 'Advanced video analysis for security, retail analytics, and content understanding.',
    icon: Video,
    features: ['Object Tracking', 'Behavior Analysis', 'Facial Recognition', 'Scene Understanding'],
    pricing: '$2,000 - $10,000/month',
    category: 'Video AI',
    link: 'https://videoanalytics.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Language Translation',
    description: 'Real-time language translation with context awareness and cultural adaptation.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Cultural Adaptation', 'Multi-language Support'],
    pricing: '$300 - $1,500/month',
    category: 'Translation AI',
    link: 'https://translationai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Sentiment Analysis',
    description: 'Advanced sentiment analysis for social media, reviews, and customer feedback.',
    icon: MessageSquare,
    features: ['Multi-language Sentiment', 'Emotion Detection', 'Trend Analysis', 'Real-time Processing'],
    pricing: '$200 - $1,000/month',
    category: 'Sentiment AI',
    link: 'https://sentimentai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Predictive maintenance for industrial equipment using IoT and machine learning.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$3,000 - $15,000/month',
    category: 'Industrial AI',
    link: 'https://predictivemaintenance.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Customer Segmentation',
    description: 'Advanced customer segmentation and targeting using machine learning algorithms.',
    icon: Users,
    features: ['Behavioral Segmentation', 'Predictive Modeling', 'Campaign Optimization', 'ROI Analysis'],
    pricing: '$1,500 - $7,500/month',
    category: 'Marketing AI',
    link: 'https://customersegmentation.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Image Generation',
    description: 'High-quality image generation using advanced generative AI models.',
    icon: Image,
    features: ['Text-to-Image', 'Style Transfer', 'Image Editing', 'High Resolution Output'],
    pricing: '$500 - $2,500/month',
    category: 'Generative AI',
    link: 'https://imagegeneration.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Voice Cloning',
    description: 'High-quality voice synthesis and cloning for various applications.',
    icon: Mic,
    features: ['Voice Cloning', 'Emotion Control', 'Multi-language Support', 'Real-time Synthesis'],
    pricing: '$1,000 - $5,000/month',
    category: 'Speech AI',
    link: 'https://voicecloning.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Anomaly Detection',
    description: 'Advanced anomaly detection for various data types and use cases.',
    icon: AlertTriangle,
    features: ['Multi-dimensional Analysis', 'Real-time Detection', 'False Positive Reduction', 'Custom Models'],
    pricing: '$1,000 - $5,000/month',
    category: 'Anomaly Detection',
    link: 'https://anomalydetection.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Time Series Forecasting',
    description: 'Advanced time series analysis and forecasting for business and scientific applications.',
    icon: TrendingUp,
    features: ['Multi-variate Forecasting', 'Seasonality Detection', 'Confidence Intervals', 'Custom Models'],
    pricing: '$2,000 - $10,000/month',
    category: 'Time Series AI',
    link: 'https://timeseriesai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Knowledge Graph',
    description: 'Intelligent knowledge graph construction and querying for complex data relationships.',
    icon: Network,
    features: ['Graph Construction', 'Semantic Search', 'Relationship Mining', 'Query Optimization'],
    pricing: '$2,500 - $12,000/month',
    category: 'Knowledge AI',
    link: 'https://knowledgegraph.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Multi-modal Learning',
    description: 'Advanced multi-modal AI that can process text, images, audio, and video together.',
    icon: Monitor,
    features: ['Multi-modal Fusion', 'Cross-modal Retrieval', 'Unified Representations', 'Real-time Processing'],
    pricing: '$4,000 - $20,000/month',
    category: 'Multi-modal AI',
    popular: true,
    link: 'https://multimodalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Graph Neural Networks',
    description: 'Advanced graph neural networks for complex relationship analysis and prediction.',
    icon: Network,
    features: ['Graph Learning', 'Node Classification', 'Link Prediction', 'Graph Generation'],
    pricing: '$3,000 - $15,000/month',
    category: 'Graph AI',
    link: 'https://graphai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Federated Learning',
    description: 'Privacy-preserving machine learning that trains models across decentralized data.',
    icon: Lock,
    features: ['Privacy Preservation', 'Decentralized Training', 'Model Aggregation', 'Differential Privacy'],
    pricing: '$5,000 - $25,000/month',
    category: 'Federated Learning',
    link: 'https://federatedlearning.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Explainable AI (XAI)',
    description: 'Explainable AI solutions that provide interpretable and transparent AI decisions.',
    icon: Eye,
    features: ['Model Interpretability', 'Decision Explanation', 'Bias Detection', 'Transparency Reports'],
    pricing: '$2,000 - $10,000/month',
    category: 'Explainable AI',
    link: 'https://explainableai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered AutoML Platform',
    description: 'Automated machine learning platform for non-technical users to build ML models.',
    icon: Settings,
    features: ['Auto Feature Engineering', 'Model Selection', 'Hyperparameter Tuning', 'Model Deployment'],
    pricing: '$1,000 - $5,000/month',
    category: 'AutoML',
    link: 'https://automl.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Synthetic Data Generation',
    description: 'High-quality synthetic data generation for training and testing AI models.',
    icon: Database,
    features: ['Privacy-preserving Data', 'High Fidelity', 'Custom Schemas', 'Validation Tools'],
    pricing: '$1,500 - $7,500/month',
    category: 'Synthetic Data',
    link: 'https://syntheticdata.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Model Monitoring',
    description: 'Continuous monitoring and maintenance of AI models in production.',
    icon: Monitor,
    features: ['Performance Monitoring', 'Drift Detection', 'Model Retraining', 'Alerting System'],
    pricing: '$1,000 - $5,000/month',
    category: 'MLOps',
    link: 'https://modelmonitoring.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Feature Store',
    description: 'Centralized feature management and serving platform for machine learning.',
    icon: Database,
    features: ['Feature Management', 'Version Control', 'Real-time Serving', 'Feature Discovery'],
    pricing: '$2,000 - $10,000/month',
    category: 'MLOps',
    link: 'https://featurestore.ziontechgroup.com'
  },
  {
    title: 'AI-Powered A/B Testing Platform',
    description: 'Intelligent A/B testing with statistical significance and automated optimization.',
    icon: BarChart3,
    features: ['Statistical Analysis', 'Automated Testing', 'Multi-variate Testing', 'Conversion Optimization'],
    pricing: '$500 - $2,500/month',
    category: 'Testing AI',
    link: 'https://abtesting.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Data Labeling',
    description: 'Automated data labeling and annotation for machine learning datasets.',
    icon: Target,
    features: ['Automated Labeling', 'Quality Assurance', 'Human-in-the-loop', 'Multi-modal Support'],
    pricing: '$0.10 - $1.00 per label',
    category: 'Data Labeling',
    link: 'https://datalabeling.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Model Compression',
    description: 'Model compression and optimization for deployment on edge devices.',
    icon: Cpu,
    features: ['Model Pruning', 'Quantization', 'Knowledge Distillation', 'Hardware Optimization'],
    pricing: '$1,000 - $5,000/month',
    category: 'Model Optimization',
    link: 'https://modelcompression.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Hyperparameter Optimization',
    description: 'Automated hyperparameter tuning using advanced optimization algorithms.',
    icon: Settings,
    features: ['Bayesian Optimization', 'Multi-objective Optimization', 'Early Stopping', 'Resource Management'],
    pricing: '$500 - $2,500/month',
    category: 'Hyperparameter Tuning',
    link: 'https://hyperopt.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Data Augmentation',
    description: 'Intelligent data augmentation techniques to improve model performance.',
    icon: Image,
    features: ['Smart Augmentation', 'Domain Adaptation', 'Quality Preservation', 'Custom Techniques'],
    pricing: '$300 - $1,500/month',
    category: 'Data Augmentation',
    link: 'https://dataaugmentation.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Model Ensemble',
    description: 'Advanced model ensemble techniques for improved accuracy and robustness.',
    icon: Network,
    features: ['Ensemble Methods', 'Model Diversity', 'Weighted Voting', 'Stacking'],
    pricing: '$1,000 - $5,000/month',
    category: 'Ensemble Learning',
    link: 'https://modelensemble.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Transfer Learning',
    description: 'Pre-trained model adaptation for specific domains and tasks.',
    icon: Share2,
    features: ['Pre-trained Models', 'Domain Adaptation', 'Fine-tuning', 'Task-specific Optimization'],
    pricing: '$500 - $2,500/month',
    category: 'Transfer Learning',
    link: 'https://transferlearning.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Active Learning',
    description: 'Intelligent sample selection for efficient model training with minimal data.',
    icon: Target,
    features: ['Smart Sampling', 'Uncertainty Estimation', 'Query Strategy', 'Human Feedback'],
    pricing: '$1,000 - $5,000/month',
    category: 'Active Learning',
    link: 'https://activelearning.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Few-shot Learning',
    description: 'Learning from limited examples using advanced few-shot learning techniques.',
    icon: BookOpen,
    features: ['Meta-learning', 'Prototype Networks', 'Matching Networks', 'Rapid Adaptation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Few-shot Learning',
    link: 'https://fewshotlearning.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Self-supervised Learning',
    description: 'Learning representations from unlabeled data using self-supervised techniques.',
    icon: Brain,
    features: ['Contrastive Learning', 'Masked Language Modeling', 'Representation Learning', 'Downstream Tasks'],
    pricing: '$3,000 - $15,000/month',
    category: 'Self-supervised Learning',
    link: 'https://selfsupervised.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Adversarial Training',
    description: 'Robust model training against adversarial attacks and perturbations.',
    icon: Shield,
    features: ['Adversarial Examples', 'Robust Training', 'Attack Detection', 'Defense Mechanisms'],
    pricing: '$2,000 - $10,000/month',
    category: 'Adversarial AI',
    link: 'https://adversarial.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Continual Learning',
    description: 'Learning new tasks without forgetting previous knowledge using continual learning.',
    icon: BookOpen,
    features: ['Catastrophic Forgetting Prevention', 'Task Incremental Learning', 'Memory Replay', 'Knowledge Distillation'],
    pricing: '$2,500 - $12,000/month',
    category: 'Continual Learning',
    link: 'https://continuallearning.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Meta-learning',
    description: 'Learning to learn efficiently across different tasks and domains.',
    icon: Brain,
    features: ['Model-agnostic Meta-learning', 'Gradient-based Meta-learning', 'Metric Learning', 'Rapid Adaptation'],
    pricing: '$3,000 - $15,000/month',
    category: 'Meta-learning',
    link: 'https://metalearning.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Neural Architecture Search',
    description: 'Automated neural network architecture design and optimization.',
    icon: Network,
    features: ['Architecture Search', 'Performance Optimization', 'Hardware-aware Design', 'Efficient Search'],
    pricing: '$5,000 - $25,000/month',
    category: 'Neural Architecture Search',
    link: 'https://neuralarchitecture.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Evolutionary Algorithms',
    description: 'Evolutionary computation for optimization and machine learning problems.',
    icon: Sprout,
    features: ['Genetic Algorithms', 'Evolution Strategies', 'Particle Swarm Optimization', 'Custom Operators'],
    pricing: '$2,000 - $10,000/month',
    category: 'Evolutionary Computing',
    link: 'https://evolutionary.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Swarm Intelligence',
    description: 'Distributed intelligence systems inspired by natural swarm behavior.',
    icon: Users,
    features: ['Particle Swarm Optimization', 'Ant Colony Optimization', 'Bee Algorithm', 'Distributed Systems'],
    pricing: '$1,500 - $7,500/month',
    category: 'Swarm Intelligence',
    link: 'https://swarmintelligence.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Fuzzy Logic Systems',
    description: 'Fuzzy logic-based AI systems for handling uncertainty and imprecision.',
    icon: Brain,
    features: ['Fuzzy Inference', 'Membership Functions', 'Rule-based Systems', 'Uncertainty Handling'],
    pricing: '$1,000 - $5,000/month',
    category: 'Fuzzy Logic',
    link: 'https://fuzzylogic.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Expert Systems',
    description: 'Rule-based expert systems for domain-specific problem solving.',
    icon: Users,
    features: ['Knowledge Representation', 'Inference Engine', 'Rule Management', 'Explanation Generation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Expert Systems',
    link: 'https://expertsystems.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Case-based Reasoning',
    description: 'Problem solving based on similar past cases and experiences.',
    icon: FileText,
    features: ['Case Retrieval', 'Similarity Matching', 'Case Adaptation', 'Learning from Experience'],
    pricing: '$1,500 - $7,500/month',
    category: 'Case-based Reasoning',
    link: 'https://casebased.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Inductive Logic Programming',
    description: 'Learning logical rules from examples using inductive logic programming.',
    icon: Code,
    features: ['Rule Learning', 'Logic Programming', 'Inductive Inference', 'Knowledge Discovery'],
    pricing: '$2,500 - $12,000/month',
    category: 'Inductive Logic Programming',
    link: 'https://inductivelogic.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Probabilistic Programming',
    description: 'Probabilistic models and inference using programming languages.',
    icon: BarChart3,
    features: ['Probabilistic Models', 'Bayesian Inference', 'Uncertainty Quantification', 'Model Specification'],
    pricing: '$3,000 - $15,000/month',
    category: 'Probabilistic Programming',
    link: 'https://probabilistic.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Causal Inference',
    description: 'Causal relationship discovery and inference from observational data.',
    icon: Network,
    features: ['Causal Discovery', 'Causal Effect Estimation', 'Confounding Control', 'Intervention Analysis'],
    pricing: '$4,000 - $20,000/month',
    category: 'Causal Inference',
    link: 'https://causalinference.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Climate Prediction',
    description: 'Advanced climate prediction and environmental impact analysis using AI.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Analysis', 'Risk Assessment', 'Policy Optimization'],
    pricing: '$8,000 - $40,000/month',
    category: 'Environmental AI',
    link: 'https://climatemodeling.ziontechgroup.com'
  },
  {
    title: 'Neural Interface AI',
    description: 'Brain-computer interface AI for medical and assistive technology applications.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Intent Recognition', 'Motor Control', 'Medical Applications'],
    pricing: '$20,000 - $100,000/month',
    category: 'Neural AI',
    link: 'https://neuralinterface.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'Intelligent mission planning and optimization for space exploration.',
    icon: Rocket,
    features: ['Mission Optimization', 'Resource Planning', 'Risk Assessment', 'Trajectory Analysis'],
    pricing: '$25,000 - $125,000/month',
    category: 'Space AI',
    link: 'https://spacemission.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity Defense',
    description: 'Advanced AI-driven cybersecurity threat detection and response system.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response', 'Behavioral Analysis'],
    pricing: '$5,000 - $25,000/month',
    category: 'Cybersecurity AI',
    link: 'https://cyberai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Financial Trading System',
    description: 'Intelligent algorithmic trading system with advanced market analysis.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Algorithmic Trading', 'Risk Management', 'Portfolio Optimization'],
    pricing: '$10,000 - $50,000/month',
    category: 'Financial AI',
    link: 'https://tradingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Agricultural Optimization',
    description: 'Smart farming solutions using AI for crop optimization and yield prediction.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$3,000 - $15,000/month',
    category: 'Agricultural AI',
    link: 'https://agriai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Energy Grid Management',
    description: 'Intelligent energy grid optimization and renewable energy integration.',
    icon: Zap,
    features: ['Grid Optimization', 'Demand Forecasting', 'Renewable Integration', 'Load Balancing'],
    pricing: '$8,000 - $40,000/month',
    category: 'Energy AI',
    link: 'https://energyai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Research Assistant',
    description: 'Intelligent legal research and case analysis using natural language processing.',
    icon: BookOpen,
    features: ['Legal Research', 'Case Analysis', 'Document Review', 'Precedent Finding'],
    pricing: '$2,000 - $10,000/month',
    category: 'Legal AI',
    link: 'https://legalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'Intelligent mental health support and therapy assistance platform.',
    icon: Heart,
    features: ['Emotion Analysis', 'Therapy Support', 'Crisis Detection', 'Personalized Care'],
    pricing: '$1,500 - $7,500/month',
    category: 'Healthcare AI',
    link: 'https://mentalhealthai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive AI platform for smart city infrastructure and citizen services.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Management', 'Citizen Services', 'Predictive Maintenance'],
    pricing: '$15,000 - $75,000/month',
    category: 'Smart Cities AI',
    link: 'https://smartcityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Manufacturing Quality Control',
    description: 'Intelligent quality control and defect detection for manufacturing processes.',
    icon: Settings,
    features: ['Defect Detection', 'Quality Prediction', 'Process Optimization', 'Real-time Monitoring'],
    pricing: '$5,000 - $25,000/month',
    category: 'Manufacturing AI',
    link: 'https://manufacturingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Personalized Education',
    description: 'Adaptive learning platform with personalized educational content and assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Content', 'Progress Tracking', 'Skill Assessment'],
    pricing: '$2,000 - $10,000/month',
    category: 'Education AI',
    link: 'https://educationai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation and safety monitoring for online platforms.',
    icon: Eye,
    features: ['Content Analysis', 'Safety Detection', 'Policy Enforcement', 'Real-time Monitoring'],
    pricing: '$1,000 - $5,000/month',
    category: 'Content AI',
    link: 'https://contentmoderation.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management and logistics optimization platform.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: '$8,000 - $40,000/month',
    category: 'Supply Chain AI',
    link: 'https://supplychainai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Voice Synthesis',
    description: 'High-quality text-to-speech and voice synthesis for various applications.',
    icon: Mic,
    features: ['Text-to-Speech', 'Voice Cloning', 'Emotion Synthesis', 'Multi-language Support'],
    pricing: '$1,500 - $7,500/month',
    category: 'Speech AI',
    link: 'https://voicesynthesis.ziontechgroup.com'
  }
];

const categories = [
  { name: 'All', count: aiServices.length },
  { name: 'Communication', count: aiServices.filter(s => s.category === 'Communication').length },
  { name: 'Document Processing', count: aiServices.filter(s => s.category === 'Document Processing').length },
  { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
  { name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
  { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
  { name: 'Speech Processing', count: aiServices.filter(s => s.category === 'Speech Processing').length },
  { name: 'Quantum AI', count: aiServices.filter(s => s.category === 'Quantum AI').length },
  { name: 'Edge AI', count: aiServices.filter(s => s.category === 'Edge AI').length },
  { name: 'Healthcare AI', count: aiServices.filter(s => s.category === 'Healthcare AI').length },
  { name: 'Autonomous Systems', count: aiServices.filter(s => s.category === 'Autonomous Systems').length },
  { name: 'Environmental AI', count: aiServices.filter(s => s.category === 'Environmental AI').length },
  { name: 'Neural AI', count: aiServices.filter(s => s.category === 'Neural AI').length },
  { name: 'Space AI', count: aiServices.filter(s => s.category === 'Space AI').length },
  { name: 'Cybersecurity AI', count: aiServices.filter(s => s.category === 'Cybersecurity AI').length },
  { name: 'Financial AI', count: aiServices.filter(s => s.category === 'Financial AI').length },
  { name: 'Agricultural AI', count: aiServices.filter(s => s.category === 'Agricultural AI').length },
  { name: 'Energy AI', count: aiServices.filter(s => s.category === 'Energy AI').length },
  { name: 'Legal AI', count: aiServices.filter(s => s.category === 'Legal AI').length },
  { name: 'Smart Cities AI', count: aiServices.filter(s => s.category === 'Smart Cities AI').length },
  { name: 'Manufacturing AI', count: aiServices.filter(s => s.category === 'Manufacturing AI').length },
  { name: 'Education AI', count: aiServices.filter(s => s.category === 'Education AI').length },
  { name: 'Content AI', count: aiServices.filter(s => s.category === 'Content AI').length },
  { name: 'Supply Chain AI', count: aiServices.filter(s => s.category === 'Supply Chain AI').length },
  { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI services designed to transform your business. From machine learning to computer vision, we provide comprehensive AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, natural language processing, AI consulting" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we provide comprehensive AI services 
                tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
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
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                          <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                        </div>
                        {service.popular && (
                          <div className="ml-auto">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                              Popular
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">(4.9)</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Try Now
                        </a>
                        <Link
                          href="/contact"
                          className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
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
                Let our AI experts help you implement the perfect solution for your business needs. 
                Get a free consultation and custom AI strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}