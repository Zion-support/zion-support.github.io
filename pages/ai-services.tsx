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
  Gamepad2
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
    description: 'Complete autonomous vehicle systems with advanced perception and decision-making capabilities.',
    icon: Car,
    features: ['Computer Vision', 'Sensor Fusion', 'Path Planning', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000/project',
    category: 'Autonomous Systems',
    popular: true
  },
  // NEW INNOVATIVE AI SERVICES
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
    title: 'AI-Powered Autonomous Drones',
    description: 'Intelligent drone systems with AI for surveillance, delivery, and inspection.',
    icon: Rocket,
    features: ['Autonomous Navigation', 'Object Recognition', 'Mission Planning', 'Real-time Analysis'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Drone Technology',
    popular: true
  },
  {
    title: 'AI-Powered Virtual Reality Therapy',
    description: 'VR-based therapy and rehabilitation using AI for personalized treatment.',
    icon: Monitor,
    features: ['Personalized Therapy', 'Progress Tracking', 'Adaptive Scenarios', 'Real-time Feedback'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Healthcare VR',
    popular: true
  },
  {
    title: 'AI-Powered Smart Grid Management',
    description: 'Intelligent power grid management with AI for optimal energy distribution.',
    icon: Zap,
    features: ['Load Balancing', 'Demand Prediction', 'Fault Detection', 'Renewable Integration'],
    pricing: '$50,000 - $250,000/setup',
    category: 'Smart Grid',
    popular: true
  },
  {
    title: 'AI-Powered Ocean Exploration',
    description: 'Autonomous underwater vehicles with AI for marine research and exploration.',
    icon: Globe,
    features: ['Autonomous Navigation', 'Marine Life Detection', 'Data Collection', 'Environmental Monitoring'],
    pricing: '$75,000 - $300,000/project',
    category: 'Marine Technology',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Companion',
    description: 'AI-powered mental health support with personalized therapy and monitoring.',
    icon: Heart,
    features: ['Emotion Detection', 'Personalized Therapy', 'Crisis Intervention', 'Progress Monitoring'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Mental Health',
    popular: true
  },
  {
    title: 'AI-Powered Food Safety Monitoring',
    description: 'Intelligent food safety monitoring using AI for contamination detection.',
    icon: Shield,
    features: ['Contamination Detection', 'Quality Assessment', 'Traceability', 'Predictive Analytics'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Food Safety',
    popular: true
  },
  {
    title: 'AI-Powered Wildlife Conservation',
    description: 'AI systems for wildlife monitoring, tracking, and conservation efforts.',
    icon: Sprout,
    features: ['Species Identification', 'Behavior Analysis', 'Population Tracking', 'Threat Detection'],
    pricing: '$25,000 - $125,000/project',
    category: 'Wildlife Conservation',
    popular: true
  },
  {
    title: 'AI-Powered Disaster Response',
    description: 'Intelligent disaster response systems with AI for emergency management.',
    icon: Shield,
    features: ['Risk Assessment', 'Resource Allocation', 'Evacuation Planning', 'Real-time Monitoring'],
    pricing: '$100,000 - $500,000/setup',
    category: 'Emergency Management',
    popular: true
  },
  {
    title: 'AI-Powered Sports Analytics',
    description: 'Advanced sports analytics with AI for performance optimization and injury prevention.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prediction', 'Tactical Analysis', 'Player Development'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Sports Technology',
    popular: true
  },
  {
    title: 'AI-Powered Music Therapy',
    description: 'AI-generated music therapy for mental health and rehabilitation.',
    icon: Mic,
    features: ['Personalized Music', 'Emotion Recognition', 'Therapeutic Playlists', 'Progress Tracking'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Music Therapy',
    popular: true
  },
  {
    title: 'AI-Powered Sleep Optimization',
    description: 'AI-powered sleep analysis and optimization for better health outcomes.',
    icon: Clock,
    features: ['Sleep Analysis', 'Optimization Recommendations', 'Health Monitoring', 'Personalized Insights'],
    pricing: '$2,000 - $10,000/setup',
    category: 'Health Technology',
    popular: true
  },
  {
    title: 'AI-Powered Urban Planning',
    description: 'Intelligent urban planning with AI for sustainable city development.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Planning', 'Sustainability Analysis', 'Growth Prediction'],
    pricing: '$75,000 - $300,000/project',
    category: 'Urban Planning',
    popular: true
  },
  {
    title: 'AI-Powered Language Learning',
    description: 'Personalized language learning with AI for accelerated proficiency.',
    icon: BookOpen,
    features: ['Personalized Curriculum', 'Speech Recognition', 'Progress Tracking', 'Cultural Context'],
    pricing: '$1,000 - $5,000/setup',
    category: 'Education Technology',
    popular: true
  },
  {
    title: 'AI-Powered Accessibility Solutions',
    description: 'AI-powered accessibility tools for people with disabilities.',
    icon: Eye,
    features: ['Visual Assistance', 'Hearing Support', 'Mobility Aids', 'Communication Tools'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Accessibility',
    popular: true
  },
  {
    title: 'AI-Powered Pet Care',
    description: 'Intelligent pet care monitoring and health management using AI.',
    icon: Heart,
    features: ['Health Monitoring', 'Behavior Analysis', 'Nutrition Optimization', 'Veterinary Integration'],
    pricing: '$2,000 - $10,000/setup',
    category: 'Pet Technology',
    popular: true
  },
  {
    title: 'AI-Powered Home Security',
    description: 'Advanced home security with AI-powered threat detection and response.',
    icon: Shield,
    features: ['Threat Detection', 'Facial Recognition', 'Behavioral Analysis', 'Automated Response'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Home Security',
    popular: true
  },
  {
    title: 'AI-Powered Waste Management',
    description: 'Intelligent waste management with AI for optimization and recycling.',
    icon: Trash2,
    features: ['Waste Classification', 'Route Optimization', 'Recycling Analysis', 'Efficiency Monitoring'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Environmental Technology',
    popular: true
  },
  {
    title: 'AI-Powered Elderly Care',
    description: 'AI-powered elderly care monitoring and assistance systems.',
    icon: Heart,
    features: ['Health Monitoring', 'Fall Detection', 'Medication Reminders', 'Emergency Response'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Elderly Care',
    popular: true
  },
  {
    title: 'AI-Powered Gaming Intelligence',
    description: 'AI-powered gaming experiences with intelligent NPCs and adaptive gameplay.',
    icon: Gamepad2,
    features: ['Intelligent NPCs', 'Adaptive Gameplay', 'Player Behavior Analysis', 'Dynamic Content'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Gaming Technology',
    popular: true
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: TrendingUp, description: 'Algorithmic trading and risk management' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized recommendations and inventory' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and logistics' }
];

const features = [
  {
    icon: Brain,
    title: 'Advanced AI',
    description: 'Cutting-edge machine learning algorithms',
    stat: '99.9%'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Instant analysis and decision making',
    stat: '< 100ms'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance',
    stat: 'SOC 2'
  },
  {
    icon: Users,
    title: 'Scalable Solutions',
    description: 'From startup to enterprise scale',
    stat: 'Unlimited'
  },
  {
    icon: Globe,
    title: 'Global Deployment',
    description: 'Available worldwide with local support',
    stat: '200+'
  },
  {
    icon: BarChart3,
    title: 'Data Insights',
    description: 'Actionable insights from your data',
    stat: '24/7'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Automate complex processes',
    stat: '90%'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce operational costs',
    stat: '70%'
  },
  {
    icon: TrendingUp,
    title: 'Performance Boost',
    description: 'Improve business performance',
    stat: '300%'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,000',
    period: '/project',
    description: 'Perfect for small businesses',
    features: [
      'Basic AI implementation',
      'Standard support',
      'Basic analytics',
      'Email support',
      'Documentation'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$10,000',
    period: '/project',
    description: 'Best for growing companies',
    features: [
      'Advanced AI features',
      'Priority support',
      'Advanced analytics',
      'Phone & email support',
      'Custom integration',
      'Training included'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$50,000',
    period: '/project',
    description: 'For large organizations',
    features: [
      'Full AI suite',
      '24/7 dedicated support',
      'Custom analytics',
      'Dedicated account manager',
      'Custom development',
      'On-site training',
      'SLA guarantee'
    ],
    popular: false
  }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services and solutions powered by advanced machine learning and artificial intelligence technologies." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI development" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

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
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions powered by advanced machine learning and deep learning technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started Today
              </Link>
              <Link href="#services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300">AI Services</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-slate-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-300">AI Monitoring</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              All Services
            </button>
            <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Machine Learning
            </button>
            <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Computer Vision
            </button>
            <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Natural Language Processing
            </button>
            <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Predictive Analytics
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-blue-400 font-semibold text-lg">{service.pricing}</span>
                  <span className="text-slate-400 text-sm ml-2">{service.category}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href={`/contact?service=${encodeURIComponent(service.title)}`} 
                    className="flex-1 border border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions are tailored for various industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700 rounded-xl p-6 text-center hover:bg-slate-600 transition-colors"
              >
                <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for real-world business applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 mb-2">{feature.description}</p>
                {feature.stat && (
                  <div className="text-2xl font-bold text-blue-400">{feature.stat}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your business operations with our intelligent AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700 rounded-xl p-8 text-center"
              >
                <div className="p-4 bg-green-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 mb-4">{benefit.description}</p>
                <div className="text-3xl font-bold text-green-400">{benefit.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Service Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-8 relative ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {tier.price}
                    <span className="text-lg text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-slate-300">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the AI revolution and transform your business with our cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Your AI Journey
              </Link>
              <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}