import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
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
  Cog,
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
  Search, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin,
  Zap,
  Users,
  Shield,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  Gamepad2
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

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

const additionalServices = [
    {
      icon: TrendingUp,
      name: 'Predictive Analytics & Forecasting',
      description: 'Advanced machine learning models for demand forecasting, revenue prediction, and business intelligence.',
      features: [
        'Time-series forecasting and analysis',
        'Demand prediction and inventory optimization',
        'Revenue and churn prediction models',
        'Supply chain risk assessment',
        'Market trend analysis',
        'Real-time dashboard and alerts'
      ],
      pricing: '$4,000 – $20,000 project',
      perUnit: 'Custom pricing based on data volume',
      timeline: '6–12 weeks',
      benefits: [
        '95% accuracy in demand forecasting',
        '30% reduction in inventory costs',
        'Early warning system for risks',
        'Data-driven decision making'
      ]
    },
    {
      icon: FileText,
      name: 'GenAI Content & SEO Automation',
      description: 'AI-powered content generation, SEO optimization, and editorial workflow automation for digital marketing.',
      features: [
        'High-quality content generation',
        'SEO optimization and keyword research',
        'Content clustering and internal linking',
        'Editorial calendar automation',
        'Brand voice consistency',
        'Performance tracking and optimization'
      ],
      pricing: '$1,000 – $6,000/month',
      perUnit: '$0.10 – $1.00 per article',
      timeline: '2–4 weeks',
      benefits: [
        '10x faster content production',
        '40% improvement in SEO rankings',
        'Consistent brand messaging',
        'Reduced content creation costs'
      ]
    },
    {
      icon: Eye,
      name: 'Computer Vision & Image Recognition',
      description: 'Advanced computer vision solutions for object detection, facial recognition, and visual content analysis.',
      features: [
        'Custom object detection and classification',
        'Facial recognition and biometric authentication',
        'OCR and document text extraction',
        'Real-time image processing',
        'Quality control and defect detection',
        'Visual search and recommendation'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per image',
      timeline: '6–12 weeks',
      benefits: [
        '99.5% accuracy in object detection',
        'Automated quality control',
        'Enhanced security with biometrics',
        'Reduced manual inspection costs'
      ]
    },
    {
      icon: Database,
      name: 'Natural Language Processing Engine',
      description: 'Comprehensive NLP solutions for text analysis, sentiment detection, and language understanding.',
      features: [
        'Text analysis and sentiment detection',
        'Entity extraction and classification',
        'Language translation and localization',
        'Document summarization',
        'Intent recognition and classification',
        'Custom model training and fine-tuning'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.001 – $0.01 per request',
      timeline: '4–8 weeks',
      benefits: [
        '90% accuracy in sentiment analysis',
        'Automated document processing',
        'Multi-language support',
        'Real-time text understanding'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud detection and risk assessment using advanced machine learning algorithms.',
      features: [
        'Real-time transaction fraud scoring',
        'Behavioral anomaly detection',
        'Machine learning model training',
        'Risk assessment and decision automation',
        'Pattern recognition and analysis',
        'Continuous learning and adaptation'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.05 – $0.50 per transaction',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% fraud detection accuracy',
        'Real-time risk assessment',
        'Reduced false positives',
        'Compliance with regulations'
      ]
    },
    {
      icon: Mic,
      name: 'Voice AI & Speech Recognition',
      description: 'Advanced voice processing solutions including speech-to-text, voice synthesis, and conversational AI.',
      features: [
        'High-accuracy speech-to-text conversion',
        'Natural language understanding',
        'Voice biometric authentication',
        'Conversational AI and chatbots',
        'Multi-language voice support',
        'Real-time voice processing'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: '$0.02 – $0.20 per minute',
      timeline: '6–10 weeks',
      benefits: [
        '95% accuracy in speech recognition',
        'Hands-free operation',
        'Enhanced accessibility',
        'Improved user experience'
      ]
    },
    {
      icon: Zap,
      name: 'Recommendation Engine',
      description: 'Personalized recommendation systems that increase engagement and conversion rates.',
      features: [
        'Personalized product recommendations',
        'Content suggestion algorithms',
        'User behavior analysis',
        'A/B testing and optimization',
        'Real-time recommendation updates',
        'Multi-channel recommendation delivery'
      ],
      pricing: '$4,000 – $20,000 setup',
      perUnit: '$0.01 – $0.10 per recommendation',
      timeline: '4–8 weeks',
      benefits: [
        '35% increase in conversion rates',
        'Improved user engagement',
        'Higher average order value',
        'Reduced bounce rates'
      ]
    },
    {
      icon: Brain,
      name: 'Autonomous AI Agents',
      description: 'Self-operating AI agents that can perform complex tasks and make decisions autonomously.',
      features: [
        'Multi-step task automation',
        'Decision-making capabilities',
        'Natural language interaction',
        'Tool and API integration',
        'Learning and adaptation',
        'Error handling and recovery'
      ],
      pricing: '$10,000 – $50,000 setup',
      perUnit: '$0.50 – $5.00 per task',
      timeline: '8–16 weeks',
      benefits: [
        '90% task automation success rate',
        'Reduced operational costs',
        '24/7 autonomous operation',
        'Scalable AI workforce'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Healthcare Diagnostics',
      description: 'Advanced medical imaging analysis and diagnostic assistance using deep learning algorithms.',
      features: [
        'Medical image analysis and interpretation',
        'Disease detection and classification',
        'Treatment recommendation systems',
        'Patient risk assessment',
        'Drug interaction analysis',
        'Clinical decision support'
      ],
      pricing: '$15,000 – $75,000 setup',
      perUnit: '$5.00 – $50.00 per analysis',
      timeline: '12–24 weeks',
      benefits: [
        '95% accuracy in medical imaging',
        'Faster diagnosis and treatment',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Threat Detection',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Threat intelligence integration',
        'Predictive security analytics',
        'Zero-day attack detection'
      ],
      pricing: '$12,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Real-time security monitoring',
        'Automated threat response',
        'Reduced security incidents'
      ]
    },
    {
      icon: Cog,
      name: 'Smart Manufacturing Quality Control',
      description: 'AI-powered quality control and predictive maintenance for manufacturing operations.',
      features: [
        'Real-time quality inspection',
        'Predictive maintenance scheduling',
        'Defect detection and classification',
        'Production optimization',
        'Supply chain monitoring',
        'Equipment performance analysis'
      ],
      pricing: '$20,000 – $100,000 setup',
      perUnit: '$0.05 – $0.50 per inspection',
      timeline: '12–20 weeks',
      benefits: [
        '40% reduction in defects',
        '30% improvement in efficiency',
        'Predictive maintenance savings',
        'Enhanced product quality'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Smart City Solutions',
      description: 'Intelligent urban management systems for traffic, energy, and public services optimization.',
      features: [
        'Traffic flow optimization',
        'Energy consumption management',
        'Public safety monitoring',
        'Environmental monitoring',
        'Resource allocation optimization',
        'Citizen service automation'
      ],
      pricing: '$50,000 – $250,000 setup',
      perUnit: 'Custom pricing based on city size',
      timeline: '16–32 weeks',
      benefits: [
        '25% reduction in traffic congestion',
        '20% energy savings',
        'Improved public safety',
        'Enhanced citizen services'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Process Mining & Optimization',
      description: 'AI-driven process analysis and optimization for business operations and workflows.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification',
        'Process optimization recommendations',
        'Compliance monitoring',
        'Performance analytics',
        'Automated process improvement'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.20 – $2.00 per process',
      timeline: '6–12 weeks',
      benefits: [
        '35% process efficiency improvement',
        'Automated optimization',
        'Reduced operational costs',
        'Better compliance tracking'
      ]
    },
    {
      icon: FileText,
      name: 'AI Legal Document Analysis',
      description: 'Intelligent legal document review, contract analysis, and compliance monitoring.',
      features: [
        'Contract analysis and risk assessment',
        'Legal document summarization',
        'Compliance monitoring and alerts',
        'Legal research automation',
        'Document classification and organization',
        'Litigation support and discovery'
      ],
      pricing: '$10,000 – $50,000 setup',
      perUnit: '$0.50 – $5.00 per document',
      timeline: '8–16 weeks',
      benefits: [
        '90% reduction in document review time',
        'Improved accuracy in legal analysis',
        'Automated compliance monitoring',
        'Reduced legal costs'
      ]
    },
    {
      icon: Search,
      name: 'AI-Powered Search & Discovery',
      description: 'Intelligent search engines with semantic understanding and personalized results.',
      features: [
        'Semantic search and understanding',
        'Personalized search results',
        'Natural language queries',
        'Multi-modal search capabilities',
        'Real-time search optimization',
        'Context-aware recommendations'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per search',
      timeline: '4–8 weeks',
      benefits: [
        '60% improvement in search relevance',
        'Enhanced user experience',
        'Increased engagement',
        'Better content discovery'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Financial Trading',
      description: 'Automated trading systems with machine learning algorithms for market analysis and execution.',
      features: [
        'Market analysis and prediction',
        'Automated trading execution',
        'Risk management and portfolio optimization',
        'Real-time market monitoring',
        'Algorithmic trading strategies',
        'Performance analytics and reporting'
      ],
      pricing: '$25,000 – $125,000 setup',
      perUnit: 'Performance-based fees',
      timeline: '12–24 weeks',
      benefits: [
        'Improved trading performance',
        'Automated risk management',
        '24/7 market monitoring',
        'Data-driven trading decisions'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Voice Analytics',
      description: 'Advanced voice analysis for customer service, sales, and communication optimization.',
      features: [
        'Voice emotion and sentiment analysis',
        'Call quality assessment',
        'Customer satisfaction prediction',
        'Sales conversation optimization',
        'Voice biometric authentication',
        'Real-time coaching and feedback'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: '$0.05 – $0.50 per minute',
      timeline: '6–12 weeks',
      benefits: [
        'Improved customer satisfaction',
        'Enhanced sales performance',
        'Better call quality',
        'Automated coaching insights'
      ]
    },
    {
      icon: Eye,
      name: 'Advanced Computer Vision Analytics',
      description: 'Deep learning computer vision for complex visual analysis and real-time processing.',
      features: [
        'Object detection and tracking',
        'Facial recognition and analysis',
        'Scene understanding and classification',
        'Real-time video processing',
        'Custom model training',
        'Edge deployment optimization'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.05 – $0.50 per image',
      timeline: '6–12 weeks',
      benefits: [
        '99.8% accuracy in visual analysis',
        'Real-time processing capabilities',
        'Automated quality control',
        'Enhanced security monitoring'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Data Processing Pipeline',
      description: 'AI-powered data ingestion, cleaning, and transformation with automated quality assurance.',
      features: [
        'Automated data ingestion and validation',
        'Intelligent data cleaning and deduplication',
        'Schema detection and mapping',
        'Data quality scoring and monitoring',
        'Automated transformation rules',
        'Real-time data processing'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.001 – $0.01 per record',
      timeline: '4–8 weeks',
      benefits: [
        '95% reduction in data processing time',
        'Automated data quality assurance',
        'Improved data accuracy',
        'Reduced manual data handling'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Advanced Predictive Analytics',
      description: 'Sophisticated machine learning models for complex business forecasting and optimization.',
      features: [
        'Multi-variate time series forecasting',
        'Causal inference and impact analysis',
        'Scenario modeling and simulation',
        'Automated feature engineering',
        'Model ensemble and optimization',
        'Real-time prediction updates'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: 'Custom pricing based on complexity',
      timeline: '6–12 weeks',
      benefits: [
        '98% accuracy in predictions',
        'Automated forecasting processes',
        'Improved business planning',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Intelligence',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Behavioral anomaly detection',
        'Threat intelligence and correlation',
        'Automated incident response',
        'Zero-day attack detection',
        'Security orchestration and automation',
        'Continuous threat monitoring'
      ],
      pricing: '$10,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Automated security response',
        'Reduced false positives',
        'Enhanced security posture'
      ]
    },
    {
      icon: Mic,
      name: 'Conversational AI Platform',
      description: 'Advanced conversational AI with context awareness and multi-modal interaction.',
      features: [
        'Context-aware conversations',
        'Multi-modal interaction (voice, text, image)',
        'Emotion recognition and response',
        'Knowledge graph integration',
        'Multi-language support',
        'Conversation analytics and optimization'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.02 – $0.20 per interaction',
      timeline: '6–12 weeks',
      benefits: [
        '95% conversation success rate',
        'Natural human-like interactions',
        'Improved customer satisfaction',
        'Reduced support costs'
      ]
    },
    {
      icon: FileText,
      name: 'Intelligent Document Intelligence',
      description: 'Advanced document processing with understanding, extraction, and automated workflows.',
      features: [
        'Document understanding and classification',
        'Intelligent data extraction',
        'Document comparison and analysis',
        'Automated workflow routing',
        'Compliance checking and validation',
        'Multi-format document support'
      ],
      pricing: '$4,000 – $20,000 setup',
      perUnit: '$0.01 – $0.10 per document',
      timeline: '4–8 weeks',
      benefits: [
        '98% accuracy in data extraction',
        'Automated document processing',
        'Improved compliance tracking',
        'Reduced manual document handling'
      ]
    },
    {
      icon: Search,
      name: 'Intelligent Search & Discovery Engine',
      description: 'AI-powered search with semantic understanding, personalization, and intelligent suggestions.',
      features: [
        'Semantic search and understanding',
        'Personalized search results',
        'Intelligent query suggestions',
        'Multi-modal search capabilities',
        'Search analytics and optimization',
        'Real-time search indexing'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.001 – $0.01 per search',
      timeline: '4–8 weeks',
      benefits: [
        '90% improvement in search relevance',
        'Personalized user experience',
        'Increased content discovery',
        'Better user engagement'
      ]
    },
    {
      icon: Cog,
      name: 'AI-Powered Process Optimization',
      description: 'Intelligent process mining and optimization using AI to identify bottlenecks and improvements.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification and analysis',
        'Automated process optimization',
        'Performance prediction and simulation',
        'Resource allocation optimization',
        'Continuous process improvement'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.05 – $0.50 per process',
      timeline: '6–10 weeks',
      benefits: [
        '40% improvement in process efficiency',
        'Automated optimization recommendations',
        'Reduced operational costs',
        'Better resource utilization'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Healthcare Diagnostics',
      description: 'Advanced medical imaging analysis and diagnostic assistance using deep learning and computer vision.',
      features: [
        'Medical image analysis and interpretation',
        'Disease detection and classification',
        'Treatment recommendation systems',
        'Patient risk assessment',
        'Drug interaction analysis',
        'Clinical decision support'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.50 – $5.00 per analysis',
      timeline: '12–24 weeks',
      benefits: [
        '95% accuracy in diagnostic assistance',
        'Reduced diagnostic errors',
        'Faster treatment decisions',
        'Improved patient outcomes'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Threat Detection',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly identification',
        'Automated incident response',
        'Threat intelligence correlation',
        'Zero-day attack detection',
        'Security orchestration and automation'
      ],
      pricing: '$10,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Automated security response',
        'Reduced false positives',
        'Enhanced security posture'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Smart Manufacturing Quality Control',
      description: 'AI-powered quality control and defect detection for manufacturing processes.',
      features: [
        'Real-time defect detection',
        'Quality prediction and optimization',
        'Process monitoring and control',
        'Predictive maintenance integration',
        'Supply chain quality tracking',
        'Automated quality reporting'
      ],
      pricing: '$8,000 – $50,000 setup',
      perUnit: '$0.01 – $0.10 per inspection',
      timeline: '6–12 weeks',
      benefits: [
        '99.8% defect detection accuracy',
        'Reduced quality control costs',
        'Improved product quality',
        'Automated quality processes'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Smart City Solutions',
      description: 'Intelligent urban management with traffic optimization, energy efficiency, and public safety.',
      features: [
        'Traffic flow optimization',
        'Energy consumption monitoring',
        'Public safety monitoring',
        'Environmental quality tracking',
        'Infrastructure maintenance prediction',
        'Citizen service optimization'
      ],
      pricing: '$20,000 – $200,000 setup',
      perUnit: 'Custom pricing based on city size',
      timeline: '12–24 weeks',
      benefits: [
        '30% reduction in traffic congestion',
        '25% improvement in energy efficiency',
        'Enhanced public safety',
        'Better citizen services'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Process Mining & Optimization',
      description: 'AI-driven process analysis and optimization for business operations and workflows.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification and analysis',
        'Process optimization recommendations',
        'Compliance monitoring and reporting',
        'Resource utilization analysis',
        'Automated process improvement'
      ],
      pricing: '$5,000 – $30,000 setup',
      perUnit: '$0.001 – $0.01 per process instance',
      timeline: '6–12 weeks',
      benefits: [
        '40% improvement in process efficiency',
        'Automated process optimization',
        'Reduced operational costs',
        'Better compliance management'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Voice Analytics Platform',
      description: 'Advanced voice analysis for customer service, sales, and communication optimization.',
      features: [
        'Voice emotion and sentiment analysis',
        'Call quality and performance metrics',
        'Customer satisfaction prediction',
        'Sales opportunity identification',
        'Agent performance optimization',
        'Real-time coaching recommendations'
      ],
      pricing: '$3,000 – $20,000 setup',
      perUnit: '$0.05 – $0.50 per minute',
      timeline: '4–8 weeks',
      benefits: [
        '35% improvement in customer satisfaction',
        'Enhanced agent performance',
        'Automated quality monitoring',
        'Better sales conversion rates'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Drug Discovery Platform',
      description: 'Machine learning-driven drug discovery and development with molecular analysis.',
      features: [
        'Molecular structure analysis',
        'Drug-target interaction prediction',
        'Side effect prediction and analysis',
        'Clinical trial optimization',
        'Drug repurposing identification',
        'Biomarker discovery and validation'
      ],
      pricing: '$50,000 – $500,000 setup',
      perUnit: 'Custom pricing based on project scope',
      timeline: '24–52 weeks',
      benefits: [
        '50% faster drug discovery process',
        'Reduced development costs',
        'Improved success rates',
        'Better patient outcomes'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Agricultural Intelligence',
      description: 'Smart farming solutions with crop monitoring, yield prediction, and resource optimization.',
      features: [
        'Crop health monitoring and analysis',
        'Yield prediction and optimization',
        'Pest and disease detection',
        'Irrigation and fertilizer optimization',
        'Weather impact analysis',
        'Farm management automation'
      ],
      pricing: '$5,000 – $40,000 setup',
      perUnit: '$0.01 – $0.10 per acre',
      timeline: '6–12 weeks',
      benefits: [
        '25% increase in crop yields',
        '30% reduction in resource usage',
        'Improved crop quality',
        'Automated farm management'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Financial Risk Assessment',
      description: 'Advanced financial risk modeling and assessment using machine learning and big data.',
      features: [
        'Credit risk assessment and scoring',
        'Market risk analysis and prediction',
        'Operational risk identification',
        'Fraud detection and prevention',
        'Regulatory compliance monitoring',
        'Stress testing and scenario analysis'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.01 – $0.10 per assessment',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% accuracy in risk assessment',
        'Reduced financial losses',
        'Automated risk monitoring',
        'Better regulatory compliance'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Energy Trading Platform',
      description: 'Intelligent energy trading with price prediction, demand forecasting, and optimization.',
      features: [
        'Energy price prediction and analysis',
        'Demand forecasting and optimization',
        'Trading strategy optimization',
        'Risk management and hedging',
        'Market analysis and insights',
        'Automated trading execution'
      ],
      pricing: '$10,000 – $80,000 setup',
      perUnit: '0.1% – 1% of trading volume',
      timeline: '8–16 weeks',
      benefits: [
        '20% improvement in trading performance',
        'Reduced energy costs',
        'Automated trading strategies',
        'Better risk management'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Legal Document Analysis',
      description: 'Intelligent legal document review and analysis with contract insights and risk assessment.',
      features: [
        'Contract analysis and risk assessment',
        'Legal document classification',
        'Compliance checking and monitoring',
        'Case law research and analysis',
        'Document summarization and insights',
        'Legal precedent identification'
      ],
      pricing: '$5,000 – $40,000 setup',
      perUnit: '$0.10 – $1.00 per document',
      timeline: '6–12 weeks',
      benefits: [
        '80% reduction in document review time',
        'Improved accuracy in legal analysis',
        'Automated compliance checking',
        'Better risk identification'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Drug Discovery Platform',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis using deep learning.',
      features: [
        'Molecular structure prediction and analysis',
        'Drug-target interaction modeling',
        'Side effect prediction and assessment',
        'Clinical trial optimization',
        'Biomarker discovery and validation',
        'Regulatory compliance and documentation'
      ],
      pricing: '$50,000 – $500,000 project',
      perUnit: 'Custom pricing based on research scope',
      timeline: '12–24 weeks',
      benefits: [
        '60% faster drug discovery process',
        'Reduced research and development costs',
        'Improved success rates in clinical trials',
        'Enhanced drug safety profiles'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Medical Imaging Analysis',
      description: 'Advanced computer vision for medical imaging diagnosis, radiology, and pathology analysis.',
      features: [
        'Radiology image analysis and diagnosis',
        'Pathology slide examination',
        'Tumor detection and classification',
        'Medical image enhancement and processing',
        'Diagnostic report generation',
        'Integration with medical systems'
      ],
      pricing: '$25,000 – $150,000 setup',
      perUnit: '$0.50 – $5.00 per image',
      timeline: '8–16 weeks',
      benefits: [
        '95% accuracy in medical diagnosis',
        'Faster diagnostic turnaround times',
        'Reduced human error in analysis',
        'Improved patient outcomes'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Financial Trading Algorithm',
      description: 'Sophisticated AI trading algorithms for automated investment strategies and risk management.',
      features: [
        'Algorithmic trading strategy development',
        'Real-time market analysis and prediction',
        'Risk assessment and portfolio optimization',
        'High-frequency trading capabilities',
        'Backtesting and performance analysis',
        'Regulatory compliance and reporting'
      ],
      pricing: '$100,000 – $1,000,000 setup',
      perUnit: 'Performance-based fees (10-20% of profits)',
      timeline: '16–32 weeks',
      benefits: [
        'Superior risk-adjusted returns',
        '24/7 automated trading',
        'Reduced emotional trading decisions',
        'Advanced market analysis capabilities'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Threat Intelligence',
      description: 'Advanced AI system for real-time threat detection, analysis, and automated response.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly identification',
        'Automated incident response',
        'Threat intelligence gathering',
        'Vulnerability assessment and prioritization',
        'Security orchestration and automation'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% threat detection accuracy',
        'Real-time automated response',
        'Reduced security incident impact',
        'Enhanced security posture'
      ]
    },
    {
      icon: FileText,
      name: 'AI-Powered Legal Document Analysis',
      description: 'Advanced AI for legal document review, contract analysis, and compliance monitoring.',
      features: [
        'Contract analysis and risk assessment',
        'Legal document review and summarization',
        'Compliance monitoring and reporting',
        'Due diligence automation',
        'Legal research and case law analysis',
        'Document generation and templating'
      ],
      pricing: '$10,000 – $75,000 setup',
      perUnit: '$0.25 – $2.50 per document',
      timeline: '6–12 weeks',
      benefits: [
        '90% reduction in document review time',
        'Improved accuracy in legal analysis',
        'Automated compliance monitoring',
        'Reduced legal costs and risks'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Real-Time Translation',
      description: 'Advanced real-time translation system with voice recognition and natural language processing.',
      features: [
        'Real-time voice translation',
        'Multi-language support (100+ languages)',
        'Context-aware translation',
        'Offline translation capabilities',
        'Custom domain adaptation',
        'Integration with communication platforms'
      ],
      pricing: '$5,000 – $30,000 setup',
      perUnit: '$0.01 – $0.10 per minute',
      timeline: '4–8 weeks',
      benefits: [
        '95% translation accuracy',
        'Real-time communication support',
        'Multi-language business expansion',
        'Enhanced global collaboration'
      ]
    },
    {
      icon: Database,
      name: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
      features: [
        'Demand forecasting and planning',
        'Inventory optimization and management',
        'Logistics route optimization',
        'Supplier risk assessment',
        'Supply chain visibility and tracking',
        'Automated decision making'
      ],
      pricing: '$20,000 – $150,000 setup',
      perUnit: '$0.05 – $0.50 per transaction',
      timeline: '8–16 weeks',
      benefits: [
        '30% reduction in supply chain costs',
        'Improved inventory turnover',
        'Enhanced supply chain resilience',
        'Optimized logistics operations'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Climate Change Modeling',
      description: 'Advanced AI models for climate prediction, environmental impact assessment, and sustainability planning.',
      features: [
        'Climate change prediction and modeling',
        'Environmental impact assessment',
        'Carbon footprint analysis',
        'Renewable energy optimization',
        'Sustainability planning and reporting',
        'Environmental risk assessment'
      ],
      pricing: '$30,000 – $200,000 project',
      perUnit: 'Custom pricing based on scope',
      timeline: '12–24 weeks',
      benefits: [
        'Accurate climate predictions',
        'Improved sustainability planning',
        'Reduced environmental impact',
        'Enhanced corporate responsibility'
      ]
    },
    {
      id: 100,
      title: 'AI-Powered Autonomous Vehicle Systems',
      icon: Eye,
      category: 'Automotive AI',
      description: 'Advanced AI systems for autonomous vehicle navigation, safety, and fleet management.',
      price: '$100,000 – $1,000,000 project',
      features: [
        'Autonomous navigation and path planning',
        'Object detection and collision avoidance',
        'Traffic pattern analysis and optimization',
        'Fleet management and coordination',
        'Predictive maintenance and diagnostics',
        'Safety monitoring and compliance'
      ],
      benefits: [
        'Enhanced vehicle safety',
        'Reduced transportation costs',
        'Improved fleet efficiency',
        'Advanced autonomous capabilities'
      ]
    }
  ];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Process Automation", count: aiServices.filter(s => s.category === "Process Automation").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = (service.title && service.description) ? 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) : false;
    return matchesCategory && matchesSearch;
  });

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
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.price || 'Contact for pricing'}
                        </span>
                        {service.marketPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {service.marketPrice}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {(service.features || []).slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {(service.benefits || []).slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Setup: {service.setupTime || 'N/A'}</span>
                      <span>Target: {service.targetUsers ? service.targetUsers.split(',')[0] : 'N/A'}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/contact"
                        className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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