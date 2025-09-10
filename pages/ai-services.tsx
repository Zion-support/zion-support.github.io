import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';

const aiServices = [
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your business needs",
    icon: Brain,
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
  },
  {
    title: "AI Automation",
    description: "Streamline operations with intelligent automation",
    icon: Network,
    features: ["Process Automation", "Workflow Optimization", "Smart Scheduling", "Intelligent Routing"]
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
    title: 'AI-Powered Autonomous Drones',
    description: 'Intelligent drone systems with autonomous navigation and mission execution capabilities.',
    icon: Rocket,
    features: ['Autonomous Navigation', 'Mission Planning', 'Object Detection', 'Swarm Coordination'],
    pricing: '$25,000 - $200,000/project',
    category: 'Autonomous Systems',
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
    title: 'AI-Powered Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Quantum Neural Networks', 'Hybrid Classical-Quantum'],
    pricing: '$25,000 - $100,000/project',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle AI systems with perception, planning, and control.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Sensor Fusion', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000/project',
    category: 'Autonomous Systems'
  },
  {
    title: 'AI-Powered Space Exploration Analytics',
    description: 'AI systems for space mission planning, satellite data analysis, and space weather prediction.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Data Analysis', 'Space Weather Prediction', 'Orbital Mechanics'],
    pricing: '$50,000 - $200,000/project',
    category: 'Space Tech'
  },
  {
    title: 'AI-Powered Climate Change Modeling',
    description: 'Advanced AI models for climate prediction, carbon footprint analysis, and environmental monitoring.',
    icon: Globe,
    features: ['Climate Modeling', 'Carbon Analysis', 'Environmental Monitoring', 'Sustainability Metrics'],
    pricing: '$30,000 - $150,000/project',
    category: 'Climate AI'
  },
  {
    title: 'AI-Powered Brain-Computer Interface',
    description: 'AI-powered brain-computer interface systems for medical and assistive applications.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$75,000 - $300,000/project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Synthetic Biology',
    description: 'AI-driven synthetic biology platform for protein design and genetic engineering.',
    icon: Sprout,
    features: ['Protein Design', 'Genetic Engineering', 'Metabolic Pathway Design', 'Biological Simulation'],
    pricing: '$40,000 - $180,000/project',
    category: 'Synthetic Biology'
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Advanced AI cybersecurity systems with threat hunting and automated response.',
    icon: Shield,
    features: ['Threat Hunting', 'Automated Response', 'Behavioral Analysis', 'Zero-day Detection'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Cybersecurity AI'
  },
  {
    title: 'AI-Powered Digital Twin Platform',
    description: 'AI-powered digital twin creation and simulation for industrial and urban systems.',
    icon: Monitor,
    features: ['Digital Twin Creation', 'Real-time Simulation', 'Predictive Maintenance', 'Optimization'],
    pricing: '$35,000 - $150,000/project',
    category: 'Digital Twins'
  },
  {
    title: 'AI-Powered Augmented Reality',
    description: 'AI-enhanced augmented reality systems for industrial and consumer applications.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Real-time Rendering', 'Gesture Control'],
    pricing: '$25,000 - $120,000/project',
    category: 'AR/VR AI'
  },
  {
    title: 'AI-Powered Edge Computing',
    description: 'AI inference and processing at the edge for real-time applications.',
    icon: Server,
    features: ['Edge Inference', 'Real-time Processing', 'Low Latency', 'Distributed AI'],
    pricing: '$15,000 - $80,000/setup',
    category: 'Edge AI'
  },
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'AI-powered blockchain transaction analysis and smart contract optimization.',
    icon: Shield,
    features: ['Transaction Analysis', 'Smart Contract Optimization', 'DeFi Analytics', 'Compliance Monitoring'],
    pricing: '$20,000 - $100,000/project',
    category: 'Blockchain AI'
  },
  {
    title: 'AI-Powered Personalized Medicine',
    description: 'AI-driven personalized medicine platform for treatment optimization and drug discovery.',
    icon: Heart,
    features: ['Genomic Analysis', 'Treatment Optimization', 'Drug Discovery', 'Clinical Decision Support'],
    pricing: '$60,000 - $250,000/project',
    category: 'Personalized Medicine'
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'AI-powered smart city infrastructure management and optimization platform.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$100,000 - $500,000/project',
    category: 'Smart Cities'
  },
  {
    title: 'AI-Powered Robotic Process Automation',
    description: 'Advanced RPA with AI capabilities for complex business process automation.',
    icon: Settings,
    features: ['Process Automation', 'Document Processing', 'Decision Making', 'Exception Handling'],
    pricing: '$10,000 - $50,000/setup',
    category: 'RPA AI'
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'AI-driven predictive maintenance for industrial equipment and machinery.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$25,000 - $120,000/setup',
    category: 'Industrial AI'
  },
  {
    title: 'AI-Powered Natural Language Understanding',
    description: 'Advanced NLP systems for complex language understanding and generation.',
    icon: MessageSquare,
    features: ['Language Understanding', 'Context Awareness', 'Multi-language Support', 'Sentiment Analysis'],
    pricing: '$15,000 - $75,000/setup',
    category: 'NLP'
  },
  {
    title: 'AI-Powered Computer Vision for Manufacturing',
    description: 'AI-powered visual inspection and quality control for manufacturing processes.',
    icon: Eye,
    features: ['Quality Inspection', 'Defect Detection', 'Process Monitoring', 'Automated Sorting'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Manufacturing AI'
  },
  {
    title: 'AI-Powered Energy Grid Optimization',
    description: 'AI-driven energy grid management and renewable energy integration.',
    icon: Zap,
    features: ['Grid Optimization', 'Renewable Integration', 'Demand Response', 'Energy Trading'],
    pricing: '$50,000 - $200,000/project',
    category: 'Energy AI'
  },
  {
    title: 'AI-Powered Agricultural Intelligence',
    description: 'AI-powered precision agriculture and crop management systems.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$20,000 - $100,000/setup',
    category: 'AgTech AI'
  },
  {
    title: 'AI-Powered Quantum Computing Simulator',
    description: 'Advanced quantum computing simulation and algorithm development platform.',
    icon: Cpu,
    features: ['Quantum Circuit Design', 'Algorithm Simulation', 'Error Correction', 'Performance Analysis'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI Brain-Computer Interface',
    description: 'Neural interface technology for direct brain-computer communication.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Thought-to-Text', 'Motor Control', 'Cognitive Enhancement'],
    pricing: '$100,000 - $500,000/project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle AI with perception, planning, and control.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Avoidance', 'Traffic Management'],
    pricing: '$50,000 - $250,000/project',
    category: 'Autonomous Systems'
  },
  {
    title: 'AI Climate Change Predictor',
    description: 'Advanced climate modeling and environmental impact prediction using AI.',
    icon: Globe,
    features: ['Weather Prediction', 'Climate Modeling', 'Environmental Impact', 'Risk Assessment'],
    pricing: '$25,000 - $125,000/project',
    category: 'Environmental AI'
  },
  {
    title: 'AI Space Exploration Assistant',
    description: 'AI-powered space mission planning and autonomous spacecraft control.',
    icon: Rocket,
    features: ['Mission Planning', 'Autonomous Navigation', 'Resource Management', 'Data Analysis'],
    pricing: '$75,000 - $375,000/project',
    category: 'Space Technology'
  },
  {
    title: 'AI Mental Health Companion',
    description: 'AI-powered mental health support and therapy assistance platform.',
    icon: Heart,
    features: ['Emotion Recognition', 'Therapy Support', 'Crisis Intervention', 'Progress Tracking'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Healthcare AI'
  },
  {
    title: 'AI Cybersecurity Guardian',
    description: 'Advanced AI-powered cybersecurity with real-time threat detection and response.',
    icon: Shield,
    features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Zero-day Protection'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI Creative Studio',
    description: 'AI-powered creative content generation for art, music, and literature.',
    icon: Image,
    features: ['Art Generation', 'Music Composition', 'Story Writing', 'Style Transfer'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Creative AI'
  },
  {
    title: 'AI Personal Genome Analyzer',
    description: 'AI-powered genetic analysis and personalized medicine recommendations.',
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
    title: 'AI-Powered Metaverse Development',
    description: 'Complete metaverse solutions with AI-driven virtual environments and avatars.',
    icon: Globe,
    features: ['Virtual World Creation', 'AI Avatars', 'Real-time Interactions', 'Blockchain Integration'],
    pricing: '$50,000 - $500,000/project',
    category: 'Metaverse',
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
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Machine learning platform for accelerating drug discovery and development processes.',
    icon: Heart,
    features: ['Molecular Analysis', 'Drug Design', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $500,000/setup',
    category: 'Healthcare',
    popular: true
  },
  {
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle solution with perception, planning, and control systems.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Sensor Fusion', 'Safety Systems'],
    pricing: '$100,000 - $1,000,000/setup',
    category: 'Autonomous Systems',
    popular: true
  },
  {
    title: 'AI-Powered Financial Trading Algorithm',
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
    title: 'AI-Powered Space Exploration Systems',
    description: 'Autonomous systems for space exploration with AI-powered mission planning and control.',
    icon: Rocket,
    features: ['Mission Planning', 'Autonomous Navigation', 'Resource Management', 'Data Analysis'],
    pricing: '$200,000 - $2,000,000/setup',
    category: 'Space Technology',
    popular: true
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
    pricing: '$30,000 - $200,000/setup',
    category: 'Agriculture',
    popular: true
  },
  {
    title: 'AI-Powered Smart City Infrastructure',
    description: 'Comprehensive smart city management with AI-powered optimization and monitoring.',
    icon: Building,
    features: ['Traffic Management', 'Energy Optimization', 'Public Safety', 'Resource Management'],
    pricing: '$100,000 - $1,000,000/setup',
    category: 'Smart Cities',
    popular: true
  },
  {
    title: 'AI-Powered Personalized Medicine',
    description: 'Precision medicine platform with AI-powered treatment personalization and drug discovery.',
    icon: Heart,
    features: ['Genomic Analysis', 'Treatment Personalization', 'Drug Discovery', 'Clinical Decision Support'],
    pricing: '$75,000 - $500,000/setup',
    category: 'Healthcare',
    popular: true
  },
  {
    title: 'AI-Powered Advanced Robotics',
    description: 'Intelligent robotics systems with advanced perception, learning, and control capabilities.',
    icon: Bot,
    features: ['Computer Vision', 'Machine Learning', 'Autonomous Control', 'Human-Robot Interaction'],
    pricing: '$100,000 - $750,000/setup',
    category: 'Robotics',
    popular: true
  },
  {
    title: 'AI-Powered Natural Language Understanding',
    description: 'Advanced NLP platform with multilingual understanding and context awareness.',
    icon: MessageSquare,
    features: ['Multilingual Processing', 'Context Understanding', 'Sentiment Analysis', 'Language Generation'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Natural Language Processing',
    popular: true
  },
  {
    title: 'AI-Powered Advanced Computer Vision',
    description: 'Cutting-edge computer vision solutions with 3D understanding and real-time processing.',
    icon: Eye,
    features: ['3D Vision', 'Real-time Processing', 'Object Recognition', 'Scene Understanding'],
    pricing: '$40,000 - $250,000/setup',
    category: 'Computer Vision',
    popular: true
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Advanced predictive maintenance system with IoT integration and machine learning.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration'],
    pricing: '$35,000 - $200,000/setup',
    category: 'Industrial AI',
    popular: true
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting and optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: '$50,000 - $300,000/setup',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Advanced Analytics Platform',
    description: 'Comprehensive analytics platform with machine learning and real-time insights.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Machine Learning', 'Predictive Modeling', 'Data Visualization'],
    pricing: '$30,000 - $200,000/setup',
    category: 'Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Content Generation Suite',
    description: 'Advanced content creation platform with multi-modal generation capabilities.',
    icon: FileText,
    features: ['Text Generation', 'Image Creation', 'Video Production', 'Audio Synthesis'],
    pricing: '$20,000 - $150,000/setup',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'AI-Powered Advanced Search Engine',
    description: 'Intelligent search platform with semantic understanding and personalized results.',
    icon: Search,
    features: ['Semantic Search', 'Personalization', 'Multilingual Support', 'Real-time Indexing'],
    pricing: '$40,000 - $250,000/setup',
    category: 'Search Technology',
    popular: true
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design, target identification, and clinical trial optimization.',
    icon: Heart,
    features: ['Molecular Design', 'Target Identification', 'Clinical Trial Optimization', 'Toxicity Prediction'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Pharmaceutical AI',
    popular: true
  },
  {
    title: 'AI-Powered Climate Change Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using machine learning and satellite data.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Impact Analysis', 'Carbon Footprint Tracking', 'Sustainability Metrics'],
    pricing: '$50,000 - $500,000/project',
    category: 'Environmental AI'
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'Autonomous space mission planning and satellite constellation management using advanced AI algorithms.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Mechanics', 'Resource Optimization'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Space AI'
  },
  {
    title: 'AI-Powered Neural Interface System',
    description: 'Brain-computer interface with AI-powered neural signal processing and motor control.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive smart city management with AI optimization for traffic, energy, and public safety.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$1,000,000 - $10,000,000/project',
    category: 'Smart Cities'
  },
  {
    title: 'AI-Powered Agricultural Intelligence',
    description: 'Precision agriculture with AI-powered crop monitoring, yield prediction, and pest detection.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$25,000 - $250,000/project',
    category: 'AgTech AI'
  },
  {
    title: 'AI-Powered Cybersecurity Defense',
    description: 'Self-evolving AI cybersecurity system that adapts to new threats and provides zero-day protection.',
    icon: Shield,
    features: ['Threat Detection', 'Adaptive Defense', 'Zero-day Protection', 'Automated Response'],
    pricing: '$100,000 - $1,000,000/setup',
    category: 'Cybersecurity AI',
    popular: true
  },
  {
    title: 'AI-Powered High-Frequency Trading',
    description: 'Advanced algorithmic trading with AI-powered market prediction and risk management.',
    icon: TrendingUp,
    features: ['Market Prediction', 'Risk Management', 'Algorithmic Trading', 'Portfolio Optimization'],
    pricing: '$200,000 - $2,000,000/setup',
    category: 'FinTech AI'
  },
  {
    title: 'AI-Powered Virtual Reality Content',
    description: 'Immersive VR experiences with AI-generated content, interactions, and personalized environments.',
    icon: Gamepad2,
    features: ['Content Generation', 'Interactive Environments', 'Personalization', 'Real-time Adaptation'],
    pricing: '$50,000 - $500,000/project',
    category: 'VR AI'
  },
  {
    title: 'AI-Powered Quantum Computing Optimization',
    description: 'AI-powered quantum computing algorithm optimization and error correction for quantum systems.',
    icon: Cpu,
    features: ['Quantum Algorithm Optimization', 'Error Correction', 'Quantum State Analysis', 'Performance Tuning'],
    pricing: '$300,000 - $3,000,000/project',
    category: 'Quantum AI'
  },
  {
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Advanced autonomous vehicle systems with computer vision, path planning, and real-time decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection', 'Real-time Decision Making'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Autonomous Vehicles'
  },
  {
    title: 'AI-Powered Personalized Medicine',
    description: 'Personalized treatment recommendations based on genetic data, medical history, and AI analysis.',
    icon: Heart,
    features: ['Genetic Analysis', 'Treatment Personalization', 'Drug Interaction Analysis', 'Outcome Prediction'],
    pricing: '$75,000 - $750,000/project',
    category: 'Personalized Medicine'
  },
  {
    title: 'AI-Powered Content Creation Suite',
    description: 'Comprehensive AI content creation platform for text, images, videos, and audio with brand consistency.',
    icon: FileText,
    features: ['Multi-modal Content', 'Brand Consistency', 'Content Optimization', 'Automated Publishing'],
    pricing: '$199 - $1,999/month',
    category: 'Content AI',
    popular: true
  },
  {
    title: 'AI-Powered Language Translation API',
    description: 'Advanced real-time translation service with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Industry Terms', 'Multi-modal Support'],
    pricing: '$0.01 - $0.10 per 1000 characters',
    category: 'Language AI'
  },
  {
    title: 'AI-Powered Video Analytics Platform',
    description: 'Advanced video analysis for security, marketing, and business intelligence with real-time processing.',
    icon: Video,
    features: ['Object Tracking', 'Behavior Analysis', 'Crowd Counting', 'Anomaly Detection'],
    pricing: '$0.05 - $0.50 per minute',
    category: 'Video AI'
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Advanced personal AI assistant with natural language understanding and task automation.',
    icon: Bot,
    features: ['Natural Language Understanding', 'Task Automation', 'Calendar Management', 'Email Processing'],
    pricing: '$9.99 - $99.99/month',
    category: 'Personal AI',
    popular: true
  },
  {
    title: 'AI-Powered Code Generation Platform',
    description: 'AI-powered code generation and development assistance with multiple programming languages.',
    icon: Code,
    features: ['Code Generation', 'Bug Fixing', 'Code Review', 'Documentation Generation'],
    pricing: '$49 - $499/month',
    category: 'Development AI'
  },
  {
    title: 'AI-Powered Music Composition',
    description: 'AI-powered music composition and production with style adaptation and emotional analysis.',
    icon: Mic,
    features: ['Music Composition', 'Style Adaptation', 'Emotional Analysis', 'Production Assistance'],
    pricing: '$29 - $299/month',
    category: 'Creative AI'
  },
  {
    title: 'AI-Powered Legal Research Assistant',
    description: 'AI-powered legal research and case analysis with precedent identification and brief generation.',
    icon: BookOpen,
    features: ['Legal Research', 'Precedent Identification', 'Brief Generation', 'Case Analysis'],
    pricing: '$199 - $1,999/month',
    category: 'Legal AI'
  },
  {
    title: 'AI-Powered Real Estate Valuation',
    description: 'AI-powered property valuation and market analysis with predictive pricing and investment insights.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Predictive Pricing', 'Investment Insights'],
    pricing: '$99 - $999/property',
    category: 'Real Estate AI'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and risk analysis.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Risk Analysis', 'Route Planning'],
    pricing: '$299 - $2,999/month',
    category: 'Supply Chain AI'
  },
  {
    title: 'AI-Powered Energy Grid Management',
    description: 'Smart energy grid management with load balancing, renewable integration, and outage prediction.',
    icon: Zap,
    features: ['Load Balancing', 'Renewable Integration', 'Outage Prediction', 'Energy Trading'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Energy AI'
  },
  {
    title: 'AI-Powered Customer Experience Platform',
    description: 'Comprehensive customer experience management with sentiment analysis, personalization, and automation.',
    icon: Users,
    features: ['Sentiment Analysis', 'Personalization', 'Automation', 'Experience Optimization'],
    pricing: '$199 - $1,999/month',
    category: 'Customer Experience AI',
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
  return (
    <MainLayout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge artificial intelligence solutions for modern businesses"
      keywords="AI services, machine learning, artificial intelligence, automation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation and efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver comprehensive AI services that help businesses harness the power of artificial intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-blue-600 mb-6">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
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
                Let our AI experts help you implement intelligent solutions that drive real results.
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
    </MainLayout>
  );
}