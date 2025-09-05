import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image as ImageIcon,
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
    description: 'Advanced autonomous vehicle systems with computer vision and decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000 project',
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
    category: 'Autonomous Systems',
    popular: true
  },
  {
    category: 'Quantum AI',
    popular: true
  },
  {
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
    features: ['Case Law Analysis', 'Document Review', 'Legal Research', 'Compliance Checking'],
    pricing: '$2,000 - $10,000/month',
    category: 'Legal Tech',
    benefits: ['Faster Research', 'Accurate Analysis', 'Cost Reduction', 'Better Outcomes'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-legal-research-assistant'
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
            <h1 className="text-4xl md:text-6xl font-bold">
              AI{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI solutions are tailored for various industries and use cases.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                  </div>
  );
}