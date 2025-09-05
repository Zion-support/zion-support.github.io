import React, { useState } from 'react';
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
<<<<<<< HEAD
  Home
=======
  Home,
  Gamepad2
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Intelligent email automation that understands context and responds naturally to customer inquiries.',
    icon: Mail,
<<<<<<< HEAD
    features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Sentiment Analysis'],
    pricing: '$299 - $1,999/month',
    category: 'Communication AI',
=======
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
    popular: true
  },
  {
    title: 'Predictive Analytics Platform',
<<<<<<< HEAD
    description: 'Advanced machine learning platform for forecasting business trends and customer behavior.',
    icon: TrendingUp,
    features: ['Machine Learning Models', 'Real-time Analytics', 'Custom Dashboards', 'API Integration'],
    pricing: '$1,500 - $15,000/month',
    category: 'Analytics AI',
=======
    description: 'Advanced forecasting and predictive modeling for business intelligence.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
    popular: true
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'Conversational AI that provides 24/7 customer support with human-like interactions.',
    icon: MessageSquare,
<<<<<<< HEAD
    features: ['Natural Conversations', 'Multi-channel Support', 'Integration APIs', 'Analytics Dashboard'],
    pricing: '$199 - $2,999/month',
    category: 'Conversational AI',
=======
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
    popular: true
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for quality control, security, and automation.',
    icon: Eye,
<<<<<<< HEAD
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Real-time Processing'],
    pricing: '$2,000 - $25,000/setup',
    category: 'Computer Vision',
    popular: false
=======
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
    pricing: '$3,000 - $15,000 project',
    category: 'Computer Vision'
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation for blogs, social media, and marketing materials.',
    icon: FileText,
<<<<<<< HEAD
    features: ['Multi-format Support', 'Brand Voice Training', 'SEO Optimization', 'Plagiarism Detection'],
    pricing: '$99 - $1,499/month',
    category: 'Content AI',
    popular: true
=======
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output'],
    pricing: '$1,500 - $8,000/month',
    category: 'Content'
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
  },
  {
    title: 'Voice AI Assistant',
    description: 'Natural language voice processing for hands-free business operations.',
    icon: Mic,
<<<<<<< HEAD
    features: ['Speech Recognition', 'Voice Synthesis', 'Multi-language', 'Custom Commands'],
    pricing: '$399 - $3,999/month',
    category: 'Voice AI',
    popular: false
  },
  {
    title: 'AI Fraud Detection',
    description: 'Real-time fraud prevention using machine learning and behavioral analysis.',
    icon: Shield,
    features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],
    pricing: '$1,200 - $12,000/month',
    category: 'Security AI',
    popular: true
  },
  {
    title: 'AI Drug Discovery',
    description: 'Accelerated pharmaceutical research using AI-powered molecular analysis.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug Interaction Analysis', 'Clinical Trial Optimization', 'Patent Analysis'],
    pricing: '$50,000 - $500,000/project',
    category: 'Healthcare AI',
    popular: false
  },
  {
    title: 'AI-Powered Mental Health Companion',
    description: 'Advanced AI mental health support with mood tracking and crisis intervention.',
    icon: Heart,
    features: ['Mood Analysis', 'Crisis Detection', 'Personalized Support', 'Professional Integration'],
    pricing: '$299 - $2,999/month',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'AI Smart City Management',
    description: 'Comprehensive AI platform for urban planning, traffic optimization, and resource management.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Allocation', 'Predictive Maintenance', 'Citizen Services'],
    pricing: '$25,000 - $500,000/setup',
    category: 'Smart City AI',
    popular: false
  },
  {
    title: 'AI Agricultural Intelligence',
    description: 'Precision agriculture using AI for crop monitoring, yield prediction, and resource optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$1,500 - $15,000/month',
    category: 'Agricultural AI',
    popular: false
  },
  {
    title: 'AI Personal Assistant',
    description: 'Intelligent personal assistant for productivity, scheduling, and task management.',
    icon: Bot,
    features: ['Task Automation', 'Calendar Management', 'Email Organization', 'Meeting Optimization'],
    pricing: '$49 - $499/month',
    category: 'Productivity AI',
    popular: true
  },
  {
    title: 'AI Language Translation',
    description: 'Real-time language translation with context awareness and cultural adaptation.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Cultural Adaptation', 'Voice Translation'],
    pricing: '$199 - $1,999/month',
    category: 'Language AI',
    popular: false
  },
  {
    title: 'AI Investment Advisor',
    description: 'Intelligent investment analysis and portfolio optimization using advanced algorithms.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Market Prediction', 'Automated Trading'],
    pricing: '$999 - $9,999/month',
    category: 'Financial AI',
    popular: true
  },
  {
    title: 'AI Content Moderation',
    description: 'Automated content moderation for social media, forums, and user-generated content.',
    icon: Shield,
    features: ['Content Filtering', 'Hate Speech Detection', 'Image Moderation', 'Real-time Processing'],
    pricing: '$299 - $2,999/month',
    category: 'Content AI',
    popular: false
  },
  {
    title: 'AI Voice Cloning',
    description: 'High-quality voice synthesis and cloning for personalized audio content.',
    icon: Mic,
    features: ['Voice Synthesis', 'Emotion Control', 'Multi-language', 'Real-time Generation'],
    pricing: '$1,999 - $19,999/setup',
    category: 'Voice AI',
    popular: false
  },
  {
    title: 'AI Drug Interaction Checker',
    description: 'Advanced system for detecting potential drug interactions and side effects.',
    icon: Heart,
    features: ['Drug Database', 'Interaction Analysis', 'Side Effect Prediction', 'Dosage Optimization'],
    pricing: '$2,999 - $29,999/month',
    category: 'Healthcare AI',
    popular: false
  },
  {
    title: 'AI Weather Prediction',
    description: 'Advanced weather forecasting using machine learning and satellite data.',
    icon: Cloud,
    features: ['Hyperlocal Forecasting', 'Severe Weather Alerts', 'Climate Analysis', 'API Integration'],
    pricing: '$999 - $9,999/month',
    category: 'Environmental AI',
    popular: false
  },
  {
    title: 'AI Customer Service Automation',
    description: 'End-to-end customer service automation with intelligent routing and resolution.',
    icon: Users,
    features: ['Intelligent Routing', 'Automated Resolution', 'Sentiment Analysis', 'Performance Analytics'],
    pricing: '$1,499 - $14,999/month',
    category: 'Customer Service AI',
    popular: true
  },
  {
    title: 'AI Blockchain Analytics',
    description: 'Advanced blockchain analysis for cryptocurrency transactions and smart contract auditing.',
    icon: Lock,
    features: ['Transaction Analysis', 'Smart Contract Auditing', 'Fraud Detection', 'Compliance Monitoring'],
    pricing: '$2,999 - $29,999/month',
    category: 'Blockchain AI',
    popular: false
  },
  {
    title: 'AI Personal Trainer',
    description: 'Intelligent fitness coaching with personalized workout plans and nutrition advice.',
    icon: Heart,
    features: ['Personalized Workouts', 'Nutrition Planning', 'Progress Tracking', 'Injury Prevention'],
    pricing: '$29 - $299/month',
    category: 'Fitness AI',
    popular: true
  },
  {
    title: 'AI Smart Home Controller',
    description: 'Intelligent home automation system that learns user preferences and optimizes energy usage.',
    icon: Home,
    features: ['Device Integration', 'Learning Algorithms', 'Energy Optimization', 'Voice Control'],
    pricing: '$199 - $1,999/setup',
    category: 'Smart Home AI',
    popular: false
=======
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
    pricing: '$100,000 - $500,000 project',
    category: 'Autonomous Systems',
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
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using AI.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Impact Analysis', 'Weather Forecasting', 'Sustainability Metrics'],
    pricing: '$25,000 - $100,000 project',
    category: 'Environmental'
  },
  {
    title: 'AI Quantum Computing Optimizer',
    description: 'AI-powered quantum computing algorithm optimization and error correction.',
    icon: Cpu,
    features: ['Quantum Algorithm Optimization', 'Error Correction', 'Quantum State Analysis', 'Performance Tuning'],
    pricing: '$75,000 - $300,000 project',
    category: 'Quantum Computing'
  },
  {
    title: 'AI-Powered Space Exploration',
    description: 'Autonomous space mission planning and satellite constellation management.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Mechanics', 'Resource Optimization'],
    pricing: '$100,000 - $500,000 project',
    category: 'Space Technology'
  },
  {
    title: 'AI Neural Interface System',
    description: 'Brain-computer interface with AI-powered neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$200,000 - $1,000,000 project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Smart Cities',
    description: 'Comprehensive smart city management with AI optimization.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$500,000 - $2,000,000 project',
    category: 'Smart Cities'
  },
  {
    title: 'AI Agricultural Intelligence',
    description: 'Precision agriculture with AI-powered crop monitoring and optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$15,000 - $75,000 project',
    category: 'Agriculture'
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Self-evolving AI cybersecurity system that adapts to new threats.',
    icon: Shield,
    features: ['Threat Detection', 'Adaptive Defense', 'Zero-day Protection', 'Automated Response'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Cybersecurity'
  },
  {
    title: 'AI Financial Trading System',
    description: 'High-frequency trading AI with market prediction and risk management.',
    icon: TrendingUp,
    features: ['Market Prediction', 'Risk Management', 'Algorithmic Trading', 'Portfolio Optimization'],
    pricing: '$50,000 - $250,000 setup',
    category: 'FinTech'
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
    icon: Heart,
    features: ['Health Monitoring', 'Wellness Recommendations', 'Symptom Analysis', 'Preventive Care'],
    pricing: '$99 - $499/month',
    category: 'Personal Health'
  },
  {
    title: 'AI-Powered Smart Home',
    description: 'Intelligent home automation with predictive behavior and energy optimization.',
    icon: Home,
    features: ['Predictive Automation', 'Energy Optimization', 'Security Monitoring', 'Voice Control'],
    pricing: '$10,000 - $50,000 setup',
    category: 'Smart Home'
  },
  {
    title: 'AI Content Creation Studio',
    description: 'AI-powered content creation for marketing, social media, and advertising.',
    icon: Image,
    features: ['Content Generation', 'Brand Consistency', 'Multi-format Output', 'Performance Optimization'],
    pricing: '$1,500 - $7,500/month',
    category: 'Content Marketing'
  },
  {
    title: 'AI-Powered Education Platform',
    description: 'Personalized learning platform with AI tutoring and assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Assessment', 'Progress Tracking', 'Skill Development'],
    pricing: '$2,000 - $10,000/month',
    category: 'EdTech'
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
  }
];

const categories = ['All', 'Communication AI', 'Analytics AI', 'Conversational AI', 'Computer Vision', 'Content AI', 'Voice AI', 'Security AI', 'Healthcare AI', 'Smart City AI', 'Agricultural AI', 'Productivity AI', 'Language AI', 'Financial AI', 'Environmental AI', 'Customer Service AI', 'Blockchain AI', 'Fitness AI', 'Smart Home AI'];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Harness the power of artificial intelligence to transform your business operations, 
                enhance customer experiences, and drive innovation across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        {service.popular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Starting at</span>
                          <div className="text-lg font-bold text-blue-600">
                            {service.pricing}
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
<<<<<<< HEAD
                  </motion.div>
                );
              })}
=======
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Your AI Journey
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
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
                Ready to Implement AI in Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our AI experts are ready to help you choose and implement the perfect AI solutions 
                for your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free AI Consultation
                </Link>
                <Link 
                  href="/it-services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Explore IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}