import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain, Mail, MessageSquare, Eye, Mic, Shield, Heart, BarChart3, 
  Cpu, Car, Code, Zap, Globe, Users, Star, Clock, Award, TrendingUp,
  Building, Rocket, Lightbulb, Handshake, Stethoscope, Dna, Scale,
  Gamepad2, Droplets, Video, BookOpen, Palette, Truck, Sprout,
  Atom, Link as LinkIcon, GraduationCap, DollarSign, ShoppingCart,
  Settings, Network, Cloud, Phone, MapPin, ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  // AI Automation & Workflow
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms with sentiment analysis.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing', 'Learning System'],
    pricing: '$2,000 - $8,000 setup',
    category: 'AI Automation',
    popular: true,
    benefits: ['Time Savings', 'Better Responses', '24/7 Availability', 'Consistent Quality'],
    marketPrice: '$3,000 - $12,000/setup',
    link: 'https://ziontechgroup.com/ai-email-responder',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities and seamless human handoff.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Human Handoff', 'Analytics Dashboard'],
    pricing: '$1,500 - $5,000/month',
    category: 'AI Automation',
    popular: true,
    benefits: ['24/7 Support', 'Cost Reduction', 'Improved Customer Experience', 'Scalable Solutions'],
    marketPrice: '$2,500 - $8,000/month',
    link: 'https://ziontechgroup.com/intelligent-chatbot',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Workflow Automation',
    description: 'Intelligent automation of business processes using AI to optimize workflows and reduce manual tasks.',
    icon: Zap,
    features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Decision Support', 'Performance Monitoring'],
    pricing: '$5,000 - $20,000/project',
    category: 'AI Automation',
    popular: true,
    benefits: ['Increased Efficiency', 'Cost Savings', 'Error Reduction', 'Scalable Operations'],
    marketPrice: '$8,000 - $30,000/project',
    link: 'https://ziontechgroup.com/ai-workflow-automation',
    contact: '+1 302 464 0950'
  },

  // AI Analytics & Data Science
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced predictive analytics using machine learning to forecast trends and optimize business decisions.',
    icon: BarChart3,
    features: ['Machine Learning Models', 'Data Visualization', 'Real-time Predictions', 'Custom Dashboards', 'API Integration'],
    pricing: '$3,000 - $12,000/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Better Decision Making', 'Risk Mitigation', 'Revenue Optimization', 'Competitive Advantage'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/predictive-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Data Intelligence',
    description: 'Comprehensive data analysis and intelligence platform for extracting insights from complex datasets.',
    icon: Brain,
    features: ['Data Mining', 'Pattern Recognition', 'Anomaly Detection', 'Automated Reporting', 'Data Quality Management'],
    pricing: '$4,000 - $15,000/month',
    category: 'AI Analytics',
    popular: false,
    benefits: ['Data-Driven Insights', 'Automated Analysis', 'Quality Assurance', 'Scalable Processing'],
    marketPrice: '$6,000 - $22,000/month',
    link: 'https://ziontechgroup.com/ai-data-intelligence',
    contact: '+1 302 464 0950'
  },

  // Computer Vision & Image Processing
  {
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'OCR Processing', 'Quality Control'],
    pricing: '$4,000 - $8,000/month',
    category: 'Computer Vision',
    popular: true,
    benefits: ['Automated Inspection', 'Quality Assurance', 'Cost Reduction', '24/7 Monitoring'],
    marketPrice: '$6,000 - $12,000/month',
    link: 'https://ziontechgroup.com/computer-vision',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Image Generation',
    description: 'AI-powered image creation and editing tools for marketing, design, and content generation.',
    icon: Palette,
    features: ['Image Generation', 'Style Transfer', 'Background Removal', 'Image Enhancement', 'Batch Processing'],
    pricing: '$2,000 - $6,000/month',
    category: 'Computer Vision',
    popular: false,
    benefits: ['Creative Automation', 'Cost Savings', 'Faster Production', 'Consistent Quality'],
    marketPrice: '$3,000 - $9,000/month',
    link: 'https://ziontechgroup.com/ai-image-generation',
    contact: '+1 302 464 0950'
  },

  // Natural Language Processing
  {
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Content Generation', 'Entity Recognition'],
    pricing: '$2,500 - $6,000/month',
    category: 'NLP',
    popular: true,
    benefits: ['Automated Text Processing', 'Multilingual Support', 'Content Optimization', 'Customer Insights'],
    marketPrice: '$4,000 - $9,000/month',
    link: 'https://ziontechgroup.com/natural-language-processing',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation for blogs, social media, marketing materials, and documentation.',
    icon: BookOpen,
    features: ['Blog Writing', 'Social Media Content', 'Marketing Copy', 'Technical Documentation', 'SEO Optimization'],
    pricing: '$1,500 - $4,000/month',
    category: 'NLP',
    popular: true,
    benefits: ['Content Scalability', 'Consistent Quality', 'Time Savings', 'SEO Benefits'],
    marketPrice: '$2,500 - $6,000/month',
    link: 'https://ziontechgroup.com/ai-content-generation',
    contact: '+1 302 464 0950'
  },

  // Voice & Audio AI
  {
    title: 'Voice AI Assistant',
    description: 'Intelligent voice assistants for customer service, internal operations, and smart device integration.',
    icon: Mic,
    features: ['Speech Recognition', 'Natural Language Understanding', 'Voice Synthesis', 'Multi-language Support', 'Integration APIs'],
    pricing: '$3,000 - $8,000/month',
    category: 'Voice AI',
    popular: true,
    benefits: ['Hands-free Operation', 'Accessibility', '24/7 Availability', 'Multilingual Support'],
    marketPrice: '$4,500 - $12,000/month',
    link: 'https://ziontechgroup.com/voice-ai-assistant',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Audio Processing',
    description: 'Advanced audio analysis, noise reduction, and intelligent audio enhancement solutions.',
    icon: Mic,
    features: ['Noise Reduction', 'Audio Enhancement', 'Speech Recognition', 'Audio Classification', 'Real-time Processing'],
    pricing: '$2,000 - $5,000/month',
    category: 'Voice AI',
    popular: false,
    benefits: ['Improved Audio Quality', 'Automated Processing', 'Real-time Enhancement', 'Cost Efficiency'],
    marketPrice: '$3,000 - $7,500/month',
    link: 'https://ziontechgroup.com/ai-audio-processing',
    contact: '+1 302 464 0950'
  },

  // AI Security & Fraud Detection
  {
    title: 'AI Fraud Detection',
    description: 'Advanced fraud detection and prevention using machine learning algorithms and behavioral analysis.',
    icon: Shield,
    features: ['Behavioral Analysis', 'Real-time Monitoring', 'Risk Scoring', 'Pattern Recognition', 'Automated Alerts'],
    pricing: '$5,000 - $15,000/month',
    category: 'AI Security',
    popular: true,
    benefits: ['Fraud Prevention', 'Risk Reduction', 'Automated Detection', 'Cost Savings'],
    marketPrice: '$7,500 - $22,000/month',
    link: 'https://ziontechgroup.com/ai-fraud-detection',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Cybersecurity',
    description: 'Intelligent cybersecurity solutions for threat detection, vulnerability assessment, and automated response.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Scanning', 'Automated Response', 'Security Analytics', 'Compliance Monitoring'],
    pricing: '$8,000 - $25,000/month',
    category: 'AI Security',
    popular: true,
    benefits: ['Enhanced Security', 'Automated Protection', 'Threat Intelligence', 'Compliance Assurance'],
    marketPrice: '$12,000 - $35,000/month',
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    contact: '+1 302 464 0950'
  },

  // AI Healthcare & Life Sciences
  {
    title: 'AI Medical Diagnosis',
    description: 'AI-powered medical diagnosis and imaging analysis for improved healthcare outcomes.',
    icon: Stethoscope,
    features: ['Medical Imaging Analysis', 'Diagnostic Support', 'Risk Assessment', 'Treatment Recommendations', 'Patient Monitoring'],
    pricing: '$15,000 - $50,000/project',
    category: 'Healthcare AI',
    popular: true,
    benefits: ['Improved Diagnosis', 'Faster Results', 'Reduced Errors', 'Better Patient Care'],
    marketPrice: '$25,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-medical-diagnosis',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Drug Discovery',
    description: 'Revolutionary AI platform for pharmaceutical drug discovery, molecular analysis, and clinical trial optimization.',
    icon: Dna,
    features: ['Molecular Analysis', 'Drug Interaction Prediction', 'Clinical Trial Optimization', 'Patent Analysis', 'Regulatory Compliance'],
    pricing: '$2,999 - $19,999/month',
    category: 'Healthcare AI',
    popular: true,
    benefits: ['Faster Drug Development', 'Reduced R&D Costs', 'Higher Success Rates', 'Regulatory Compliance'],
    marketPrice: '$5,000 - $50,000/month',
    link: 'https://ziontechgroup.com/ai-drug-discovery',
    contact: '+1 302 464 0950'
  },

  // Advanced AI & Machine Learning Services
  {
    title: 'AI-Powered Quantum Machine Learning',
    description: 'Revolutionary quantum machine learning algorithms for solving complex optimization and pattern recognition problems.',
    icon: Atom,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Pattern Recognition', 'Quantum Neural Networks', 'Hybrid Classical-Quantum'],
    pricing: '$100,000 - $500,000/project',
    category: 'Quantum AI',
    popular: true,
    benefits: ['Quantum Advantage', 'Complex Problem Solving', 'Exponential Speedup', 'Future Technology'],
    marketPrice: '$150,000 - $750,000/project',
    link: 'https://ziontechgroup.com/quantum-machine-learning',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Autonomous Systems',
    description: 'Intelligent autonomous systems for robotics, drones, and self-driving vehicles with advanced decision-making capabilities.',
    icon: Car,
    features: ['Autonomous Navigation', 'Decision Making', 'Sensor Fusion', 'Path Planning', 'Real-time Adaptation'],
    pricing: '$200,000 - $1,000,000/project',
    category: 'Autonomous Systems',
    popular: true,
    benefits: ['Full Autonomy', 'Safety Enhancement', 'Efficiency Gains', 'Cost Reduction'],
    marketPrice: '$300,000 - $1,500,000/project',
    link: 'https://ziontechgroup.com/autonomous-systems',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Climate Modeling',
    description: 'Advanced AI-powered climate modeling and environmental prediction systems for sustainability and risk management.',
    icon: Droplets,
    features: ['Climate Prediction', 'Environmental Monitoring', 'Risk Assessment', 'Sustainability Analytics', 'Policy Optimization'],
    pricing: '$50,000 - $200,000/project',
    category: 'Environmental AI',
    popular: false,
    benefits: ['Climate Insights', 'Risk Mitigation', 'Sustainability', 'Policy Support'],
    marketPrice: '$75,000 - $300,000/project',
    link: 'https://ziontechgroup.com/ai-climate-modeling',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Brain-Computer Interface',
    description: 'Cutting-edge brain-computer interface technology for medical applications and human-computer interaction.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Real-time Analysis', 'Medical Applications', 'Human-Computer Interaction', 'Research Support'],
    pricing: '$100,000 - $500,000/project',
    category: 'Neurotechnology',
    popular: true,
    benefits: ['Medical Breakthroughs', 'Accessibility', 'Research Advancement', 'Human Enhancement'],
    marketPrice: '$150,000 - $750,000/project',
    link: 'https://ziontechgroup.com/ai-brain-computer-interface',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Synthetic Biology',
    description: 'AI-driven synthetic biology platform for designing and optimizing biological systems and processes.',
    icon: Dna,
    features: ['Biological Design', 'Process Optimization', 'Genetic Engineering', 'Biomaterial Development', 'Research Automation'],
    pricing: '$75,000 - $300,000/project',
    category: 'Biotechnology',
    popular: false,
    benefits: ['Biological Innovation', 'Process Optimization', 'Research Acceleration', 'Sustainable Solutions'],
    marketPrice: '$100,000 - $450,000/project',
    link: 'https://ziontechgroup.com/ai-synthetic-biology',
    contact: '+1 302 464 0950'
  },

  // AI Finance & Trading
  {
    title: 'AI Financial Modeling',
    description: 'Advanced financial modeling and risk assessment using machine learning and predictive analytics.',
    icon: TrendingUp,
    features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading', 'Fraud Detection'],
    pricing: '$10,000 - $50,000/project',
    category: 'AI Finance',
    popular: true,
    benefits: ['Better Investment Decisions', 'Risk Mitigation', 'Automated Trading', 'Market Advantage'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-financial-modeling',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Algorithmic Trading',
    description: 'Advanced algorithmic trading with machine learning models, market analysis, and automated execution.',
    icon: BarChart3,
    features: ['Trading Algorithms', 'Market Analysis', 'Risk Management', 'Automated Execution', 'Performance Monitoring'],
    pricing: '$15,000 - $75,000/project',
    category: 'AI Finance',
    benefits: ['Better Performance', 'Risk Management', 'Automated Trading', 'Market Advantage'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/ai-algorithmic-trading',
    contact: '+1 302 464 0950'
  },

  // Energy AI
  {
    title: 'AI Energy Grid Optimization',
    description: 'Intelligent energy grid management and optimization for renewable energy integration and efficiency.',
    icon: Zap,
    features: ['Grid Optimization', 'Renewable Integration', 'Demand Forecasting', 'Energy Storage', 'Smart Grid Management'],
    pricing: '$25,000 - $100,000/project',
    category: 'Energy AI',
    popular: false,
    benefits: ['Energy Efficiency', 'Renewable Integration', 'Cost Savings', 'Grid Stability'],
    marketPrice: '$40,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-energy-grid-optimization',
    contact: '+1 302 464 0950'
  },

  // Materials Science
  {
    title: 'AI Materials Science',
    description: 'AI-powered materials discovery and optimization for advanced materials and manufacturing processes.',
    icon: Settings,
    features: ['Materials Discovery', 'Property Prediction', 'Process Optimization', 'Quality Control', 'Innovation Support'],
    pricing: '$30,000 - $120,000/project',
    category: 'Materials Science',
    popular: false,
    benefits: ['Faster Discovery', 'Better Materials', 'Process Optimization', 'Innovation Acceleration'],
    marketPrice: '$45,000 - $180,000/project',
    link: 'https://ziontechgroup.com/ai-materials-science',
    contact: '+1 302 464 0950'
  },

  // Social Impact
  {
    title: 'AI Social Impact Analytics',
    description: 'AI-driven social impact measurement and optimization for organizations and policy makers.',
    icon: Users,
    features: ['Impact Measurement', 'Social Analytics', 'Policy Optimization', 'Community Insights', 'Outcome Prediction'],
    pricing: '$20,000 - $80,000/project',
    category: 'Social Impact',
    popular: false,
    benefits: ['Better Impact', 'Data-Driven Decisions', 'Policy Optimization', 'Community Benefits'],
    marketPrice: '$30,000 - $120,000/project',
    link: 'https://ziontechgroup.com/ai-social-impact-analytics',
    contact: '+1 302 464 0950'
  },

  // Creative AI
  {
    title: 'AI Creative Design',
    description: 'AI-powered creative design tools for marketing, branding, and artistic content creation.',
    icon: Palette,
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Artistic Creation', 'Style Transfer'],
    pricing: '$2,000 - $8,000/month',
    category: 'Creative AI',
    popular: true,
    benefits: ['Creative Automation', 'Cost Savings', 'Faster Production', 'Consistent Quality'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-creative-design',
    contact: '+1 302 464 0950'
  },

  // Legal AI
  {
    title: 'AI Legal Analytics',
    description: 'Intelligent legal document analysis, contract review, and legal research automation.',
    icon: Scale,
    features: ['Document Analysis', 'Contract Review', 'Legal Research', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: '$5,000 - $20,000/month',
    category: 'Legal AI',
    popular: false,
    benefits: ['Faster Review', 'Risk Reduction', 'Cost Savings', 'Better Compliance'],
    marketPrice: '$7,500 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-legal-analytics',
    contact: '+1 302 464 0950'
  },

  // EdTech AI
  {
    title: 'AI Educational Personalization',
    description: 'Personalized learning experiences using AI to adapt content and teaching methods to individual students.',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Adaptive Content', 'Progress Tracking', 'Learning Analytics', 'Tutoring Support'],
    pricing: '$3,000 - $10,000/month',
    category: 'EdTech AI',
    popular: true,
    benefits: ['Better Learning Outcomes', 'Personalized Experience', 'Progress Tracking', 'Engagement Improvement'],
    marketPrice: '$4,500 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-educational-personalization',
    contact: '+1 302 464 0950'
  },

  // Supply Chain AI
  {
    title: 'AI Supply Chain Intelligence',
    description: 'Intelligent supply chain optimization and management using AI for demand forecasting and logistics.',
    icon: Truck,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Logistics Planning', 'Risk Management', 'Supplier Analytics'],
    pricing: '$8,000 - $25,000/month',
    category: 'Supply Chain AI',
    popular: true,
    benefits: ['Cost Reduction', 'Efficiency Improvement', 'Risk Mitigation', 'Better Planning'],
    marketPrice: '$12,000 - $35,000/month',
    link: 'https://ziontechgroup.com/ai-supply-chain-intelligence',
    contact: '+1 302 464 0950'
  },

  // Mental Health AI
  {
    title: 'AI Mental Health Support',
    description: 'AI-powered mental health monitoring, support, and intervention systems for improved well-being.',
    icon: Heart,
    features: ['Mood Monitoring', 'Risk Assessment', 'Intervention Support', 'Wellness Tracking', 'Professional Integration'],
    pricing: '$4,000 - $12,000/month',
    category: 'Mental Health AI',
    popular: false,
    benefits: ['Better Mental Health', 'Early Intervention', 'Accessible Support', 'Professional Integration'],
    marketPrice: '$6,000 - $18,000/month',
    link: 'https://ziontechgroup.com/ai-mental-health-support',
    contact: '+1 302 464 0950'
  },

  // AgTech AI
  {
    title: 'AI Agricultural Intelligence',
    description: 'Smart farming solutions using AI for crop monitoring, yield optimization, and sustainable agriculture.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Soil Analysis', 'Irrigation Optimization'],
    pricing: '$5,000 - $15,000/month',
    category: 'AgTech AI',
    popular: false,
    benefits: ['Higher Yields', 'Resource Optimization', 'Pest Management', 'Sustainable Farming'],
    marketPrice: '$7,500 - $22,000/month',
    link: 'https://ziontechgroup.com/ai-agricultural-intelligence',
    contact: '+1 302 464 0950'
  },

  // Smart City AI
  {
    title: 'AI Smart City Management',
    description: 'Intelligent city management systems for traffic optimization, resource management, and citizen services.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Management', 'Citizen Services', 'Infrastructure Monitoring', 'Emergency Response'],
    pricing: '$50,000 - $200,000/project',
    category: 'Smart City AI',
    popular: true,
    benefits: ['Efficient Cities', 'Better Services', 'Resource Optimization', 'Citizen Satisfaction'],
    marketPrice: '$75,000 - $300,000/project',
    link: 'https://ziontechgroup.com/ai-smart-city-management',
    contact: '+1 302 464 0950'
  },

  // Research AI
  {
    title: 'AI Research Assistant',
    description: 'Intelligent research automation and analysis tools for scientific discovery and academic research.',
    icon: BookOpen,
    features: ['Literature Review', 'Data Analysis', 'Hypothesis Generation', 'Research Automation', 'Collaboration Tools'],
    pricing: '$3,000 - $10,000/month',
    category: 'Research AI',
    popular: false,
    benefits: ['Faster Research', 'Better Analysis', 'Automation', 'Collaboration'],
    marketPrice: '$4,500 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-research-assistant',
    contact: '+1 302 464 0950'
  },

  // VR/AR AI
  {
    title: 'AI Virtual Reality',
    description: 'AI-enhanced virtual and augmented reality experiences for training, entertainment, and business applications.',
    icon: Video,
    features: ['VR/AR Development', 'AI Integration', 'Immersive Experiences', 'Training Simulations', 'Business Applications'],
    pricing: '$10,000 - $40,000/project',
    category: 'VR/AR AI',
    popular: false,
    benefits: ['Immersive Experiences', 'Training Effectiveness', 'Business Applications', 'Innovation'],
    marketPrice: '$15,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-virtual-reality',
    contact: '+1 302 464 0950'
  },

  // Blockchain AI
  {
    title: 'AI Blockchain Analytics',
    description: 'Intelligent blockchain analysis and cryptocurrency market intelligence using advanced AI algorithms.',
    icon: LinkIcon,
    features: ['Blockchain Analysis', 'Cryptocurrency Intelligence', 'Transaction Monitoring', 'Market Prediction', 'Risk Assessment'],
    pricing: '$5,000 - $20,000/month',
    category: 'Blockchain AI',
    popular: true,
    benefits: ['Market Intelligence', 'Risk Assessment', 'Transaction Analysis', 'Investment Insights'],
    marketPrice: '$7,500 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-blockchain-analytics',
    contact: '+1 302 464 0950'
  },

  // Gaming AI
  {
    title: 'AI Gaming Intelligence',
    description: 'Advanced AI for game development, player behavior analysis, and intelligent game mechanics.',
    icon: Gamepad2,
    features: ['Game AI Development', 'Player Behavior Analysis', 'Procedural Content', 'Balancing Systems', 'Analytics'],
    pricing: '$8,000 - $30,000/project',
    category: 'Gaming AI',
    popular: false,
    benefits: ['Better Games', 'Player Engagement', 'Content Generation', 'Analytics'],
    marketPrice: '$12,000 - $45,000/project',
    link: 'https://ziontechgroup.com/ai-gaming-intelligence',
    contact: '+1 302 464 0950'
  },

  // Environmental AI
  {
    title: 'AI Environmental Monitoring',
    description: 'Intelligent environmental monitoring and conservation systems using AI for sustainability and protection.',
    icon: Droplets,
    features: ['Environmental Monitoring', 'Pollution Detection', 'Conservation Analytics', 'Climate Tracking', 'Sustainability Metrics'],
    pricing: '$6,000 - $20,000/month',
    category: 'Environmental AI',
    popular: false,
    benefits: ['Environmental Protection', 'Sustainability', 'Conservation', 'Monitoring'],
    marketPrice: '$9,000 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-environmental-monitoring',
    contact: '+1 302 464 0950'
  },

  // HR AI
  {
    title: 'AI Human Resources',
    description: 'Intelligent HR solutions for recruitment, employee management, and workforce optimization.',
    icon: Users,
    features: ['Recruitment Automation', 'Employee Analytics', 'Performance Management', 'Workforce Planning', 'Talent Acquisition'],
    pricing: '$4,000 - $15,000/month',
    category: 'HR AI',
    popular: true,
    benefits: ['Better Hiring', 'Employee Satisfaction', 'Workforce Optimization', 'Cost Savings'],
    marketPrice: '$6,000 - $22,000/month',
    link: 'https://ziontechgroup.com/ai-human-resources',
    contact: '+1 302 464 0950'
  },

  // Customer Experience AI
  {
    title: 'AI Customer Experience',
    description: 'Comprehensive AI solutions for enhancing customer experience across all touchpoints and channels.',
    icon: Heart,
    features: ['Customer Analytics', 'Personalization', 'Experience Optimization', 'Feedback Analysis', 'Journey Mapping'],
    pricing: '$5,000 - $18,000/month',
    category: 'Customer Experience AI',
    popular: true,
    benefits: ['Better Customer Experience', 'Personalization', 'Satisfaction Improvement', 'Retention'],
    marketPrice: '$7,500 - $27,000/month',
    link: 'https://ziontechgroup.com/ai-customer-experience',
    contact: '+1 302 464 0950'
  },

  // AI Innovation Lab
  {
    title: 'AI Innovation Lab',
    description: 'Cutting-edge AI research and development laboratory for breakthrough innovations and experimental technologies.',
    icon: Lightbulb,
    features: ['Research & Development', 'Experimental AI', 'Technology Innovation', 'Proof of Concept', 'Future Technologies'],
    pricing: '$200,000 - $1,000,000/project',
    category: 'AI Innovation',
    popular: true,
    benefits: ['Innovation', 'Technology Leadership', 'Competitive Advantage', 'Future Readiness'],
    marketPrice: '$300,000 - $1,500,000/project',
    link: 'https://ziontechgroup.com/ai-innovation-lab',
    contact: '+1 302 464 0950'
  }
];

const categories = [
  'All Services',
  'AI Automation',
  'AI Analytics',
  'Computer Vision',
  'NLP',
  'Voice AI',
  'AI Security',
  'Healthcare AI',
  'Quantum AI',
  'Autonomous Systems',
  'Environmental AI',
  'Neurotechnology',
  'Biotechnology',
  'AI Finance',
  'Energy AI',
  'Materials Science',
  'Social Impact',
  'Creative AI',
  'Legal AI',
  'EdTech AI',
  'Supply Chain AI',
  'Mental Health AI',
  'AgTech AI',
  'Smart City AI',
  'Research AI',
  'VR/AR AI',
  'Blockchain AI',
  'Gaming AI',
  'Environmental AI',
  'HR AI',
  'Customer Experience AI',
  'AI Innovation'
];

const stats = [
  { number: '150+', label: 'AI Services' },
  { number: '99.9%', label: 'Uptime' },
  { number: '24/7', label: 'Support' },
  { number: '500+', label: 'Happy Clients' }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
      description="Comprehensive AI services including machine learning, computer vision, NLP, and advanced AI solutions. Transform your business with cutting-edge artificial intelligence."
      keywords="AI services, artificial intelligence, machine learning, computer vision, NLP, AI automation, AI consulting, AI development"
    >
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              AI <span className="text-blue-400">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Transform your business with cutting-edge artificial intelligence solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Get Started
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive innovation
              </p>
            </div>

            {/* Filter and Search */}
            <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Our Price:</span>
                      <span className="font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Market Price:</span>
                      <span className="text-sm text-gray-600 line-through">{service.marketPrice}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={service.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Partner with Zion Tech Group for cutting-edge AI solutions that drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}