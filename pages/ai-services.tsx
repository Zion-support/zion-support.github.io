<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import Layout from '../components/Layout';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
import { 
  Brain, 
<<<<<<< HEAD
=======
import { 
  Brain, 
  Zap, 
  Shield, 
  Database, 
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
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
  Car,
  TrendingUp
=======
  Home, 
  Gamepad2 
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

<<<<<<< HEAD
const aiServices = [
  {
    title: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with advanced AI analytics and reporting.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    price: 'Starting at $2,500/month',
    category: 'Analytics'
  },
  {
    title: 'AI Customer Support',
    description: '24/7 intelligent customer service with natural language processing and sentiment analysis.',
    icon: MessageSquare,
    features: ['Chatbot Integration', 'Sentiment Analysis', 'Multi-language Support', 'Escalation Management'],
    price: 'Starting at $1,800/month',
    category: 'Customer Service'
  },
  {
    title: 'AI Project Management',
    description: 'Streamline project workflows with AI-powered task optimization and resource allocation.',
    icon: Settings,
    features: ['Task Automation', 'Resource Optimization', 'Risk Assessment', 'Progress Tracking'],
    price: 'Starting at $3,200/month',
    category: 'Productivity'
  },
  {
    title: 'AI Marketing Automation',
    description: 'Personalize customer experiences and optimize marketing campaigns with AI-driven insights.',
    icon: Target,
    features: ['Personalization Engine', 'Campaign Optimization', 'Customer Segmentation', 'ROI Analysis'],
    price: 'Starting at $2,100/month',
    category: 'Marketing'
  },
  {
    title: 'AI Enterprise Automation',
    description: 'Automate complex business processes with intelligent workflow management and decision support.',
    icon: Building,
    features: ['Process Automation', 'Decision Support', 'Compliance Monitoring', 'Workflow Optimization'],
    price: 'Starting at $5,000/month',
    category: 'Enterprise'
  },
  {
    title: 'AI Security Solutions',
    description: 'Advanced threat detection and prevention with AI-powered security monitoring and response.',
    icon: Brain,
    features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response', 'Security Analytics'],
    price: 'Starting at $4,500/month',
    category: 'Security'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered medical diagnosis and patient care' },
  { name: 'Finance', icon: DollarSign, description: 'Fraud detection and algorithmic trading' },
  { name: 'Manufacturing', icon: Building, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Adaptive learning and assessment tools' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized shopping and inventory management' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
=======
  Eye, 
  Zap, 
  CheckCircle, 
<<<<<<< HEAD
  ArrowRight,
  Star,
  Clock,
  Users,
  Shield,
  BarChart3,
  Mail,
  MessageSquare,
  ShoppingCart
=======
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
<<<<<<< HEAD
  Droplets
>>>>>>> main
=======
  Droplets,
  Gamepad2
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
} from 'lucide-react';

const companyInfo = {
  name: "Zion Tech Group",
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};
<<<<<<< HEAD
=======
=======
export default function AIServicesPage() {
=======
import MainLayout from '../src/components/layout/MainLayout';

const AIServicesPage = () => {
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
  return (
    <MainLayout 
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions."
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
<<<<<<< HEAD
      </section>

      {/* AI Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning models to intelligent automation, we provide end-to-end AI services that drive real business value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Custom ML models for predictive analytics, recommendation systems, and intelligent decision making.",
                features: ["Predictive Analytics", "Recommendation Engines", "Anomaly Detection", "Pattern Recognition"]
              },
              {
                icon: MessageSquare,
                title: "Natural Language Processing",
                description: "Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI.",
                features: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Text Classification", "Language Translation"]
              },
              {
                icon: Eye,
                title: "Computer Vision",
                description: "Image and video analysis solutions for object detection, facial recognition, and visual inspection.",
                features: ["Object Detection", "Facial Recognition", "Image Classification", "Visual Inspection"]
              },
              {
                icon: Bot,
                title: "Intelligent Automation",
                description: "AI-powered automation solutions that streamline workflows and reduce manual effort.",
                features: ["Process Automation", "Workflow Optimization", "Smart Scheduling", "Intelligent Routing"]
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "Data-driven insights and forecasting to help you make informed business decisions.",
                features: ["Demand Forecasting", "Risk Assessment", "Performance Prediction", "Trend Analysis"]
              },
              {
                icon: Shield,
                title: "AI Security",
                description: "Advanced security solutions powered by AI to protect your digital assets and data.",
                features: ["Threat Detection", "Fraud Prevention", "Access Control", "Security Monitoring"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main

const aiServices = [
  // AI Automation & Process Intelligence
  {
    id: 1,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    features: ['Predictive Analytics', 'Custom Model Training', 'Real-time Processing', 'Model Optimization'],
    pricing: '$3,000 - $15,000/month',
    category: 'AI Development',
    popular: true,
    benefits: ['Increased Efficiency', 'Better Predictions', 'Cost Reduction', 'Competitive Advantage'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/machine-learning-models',
    contact: '+1 302 464 0950'
  },
  {
    id: 2,
<<<<<<< HEAD
    title: 'AI Content Generation',
    description: 'Automated content creation for marketing, documentation, and communication needs.',
    icon: Eye,
    features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'Email Campaigns'],
    pricing: '$500 - $3,000/month',
    category: 'Content AI',
    popular: false,
    benefits: ['Time Savings', 'Consistent Quality', 'Scalable Content', 'SEO Optimized'],
    marketPrice: '$1,500 - $5,000/month',
    link: 'https://ziontechgroup.com/ai-content-generation',
    contact: '+1 302 464 0950'
  }
];

const industries = [
  { name: 'Healthcare', icon: Shield, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: BarChart3, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized shopping experiences' },
  { name: 'Manufacturing', icon: Zap, description: 'Predictive maintenance and optimization' }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, content generation, and intelligent automation solutions." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
=======
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $2,800/month',
    features: [
      'Object detection & recognition',
      'Image classification & tagging',
      'Facial recognition & analysis',
      'Video analytics & monitoring',
      'OCR & document processing',
      'Quality control automation',
      'Real-time processing capabilities',
      'Custom model fine-tuning'
    ],
    benefits: [
      'Improve accuracy by 95%+ in visual tasks',
      'Reduce inspection time by 90%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 50%'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Retail, Security, Healthcare'
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $2,200/month',
    features: [
      'Text analysis & sentiment detection',
      'Language translation & localization',
      'Chatbot & virtual assistant development',
      'Document summarization & extraction',
      'Content moderation & filtering',
      'Voice-to-text & text-to-speech',
      'Intent recognition & classification',
      'Multi-language support'
    ],
    benefits: [
      'Process 10,000+ documents per hour',
      'Improve customer satisfaction by 35%',
      'Reduce content moderation costs by 70%',
      'Enable multilingual operations'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer service, Content platforms, E-learning, Legal'
  },
  {
    id: 4,
    title: 'AI-Powered Analytics',
    description: 'Intelligent data analysis with predictive insights, anomaly detection, and automated reporting.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $2,500/month',
    features: [
      'Predictive analytics & forecasting',
      'Anomaly detection & alerting',
      'Automated report generation',
      'Real-time data visualization',
      'Pattern recognition & insights',
      'Custom dashboard creation',
      'Data quality assessment',
      'Trend analysis & recommendations'
    ],
    benefits: [
      'Increase decision speed by 60%',
      'Identify opportunities 3x faster',
      'Reduce false positives by 80%',
      'Improve forecast accuracy by 40%'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Finance, Marketing, Operations, Sales teams'
  },
  {
    id: 5,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel chatbot deployment',
      'Natural language understanding',
      'Context-aware conversations',
      'Integration with CRM & databases',
      'Voice & text capabilities',
      'Escalation to human agents',
      'Analytics & performance tracking',
      'Custom personality & branding'
    ],
    benefits: [
      'Handle 80% of customer queries automatically',
      'Reduce response time by 90%',
      'Improve customer satisfaction by 40%',
      'Lower support costs by 60%'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Customer service'
  },

  // Advanced AI Services
  {
    id: 6,
    title: 'Quantum AI & Machine Learning',
    description: 'Quantum-enhanced machine learning solutions for complex optimization problems and advanced computational tasks.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $5,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum neural networks',
      'Hybrid classical-quantum models',
      'Quantum data processing',
      'Advanced pattern recognition',
      'Quantum simulation capabilities',
      'Research collaboration'
    ],
    benefits: [
      'Exponential computational speedup',
      'Solve previously intractable problems',
      'Advanced optimization capabilities',
      'Future-proof AI solutions'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research institutions, Financial services, Pharmaceutical companies'
  },
  {
    id: 8,
    title: 'Autonomous AI Agents',
    description: 'Self-operating AI agents that can perform complex tasks, make decisions, and interact with systems autonomously.',
    icon: Bot,
    category: 'Autonomous AI',
    price: 'Starting at $4,200/month',
    features: [
      'Autonomous task execution',
      'Multi-agent coordination',
      'Decision-making algorithms',
      'System integration capabilities',
      'Learning and adaptation',
      'Error handling and recovery',
      'Performance monitoring',
      'Custom agent development'
    ],
    benefits: [
      'Reduce manual work by 85%',
      '24/7 autonomous operation',
      'Improved efficiency and accuracy',
      'Scalable automation solutions'
    ],
    marketPrice: '$6,500-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Logistics, Finance, Healthcare'
  },
  {
    id: 9,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced AI-driven security solutions with threat detection, behavioral analysis, and automated response.',
    icon: Shield,
    category: 'AI Security',
    price: 'Starting at $3,800/month',
    features: [
      'Real-time threat detection',
      'Behavioral anomaly analysis',
      'Automated incident response',
      'Predictive security analytics',
      'Zero-day attack detection',
      'Security orchestration',
      'Compliance monitoring',
      'Threat intelligence integration'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 70%',
      'Automated response to 90% of incidents',
      'Proactive security posture'
    ],
    marketPrice: '$5,500-10,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Financial services, Healthcare, Government, Enterprise'
  },
  {
    id: 10,
    title: 'AI Content Generation & Marketing',
    description: 'Comprehensive AI-powered content creation, marketing automation, and campaign optimization.',
    icon: FileText,
    category: 'AI Marketing',
    price: 'Starting at $2,200/month',
    features: [
      'Multi-format content generation',
      'Brand voice consistency',
      'SEO-optimized content',
      'Social media automation',
      'Campaign performance analysis',
      'A/B testing optimization',
      'Personalized content delivery',
      'Content calendar management'
    ],
    benefits: [
      'Increase content production by 300%',
      'Improve engagement rates by 45%',
      'Reduce content costs by 60%',
      'Consistent brand messaging'
    ],
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing agencies, E-commerce, Media companies, SaaS'
  },
  {
    id: 11,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $3,500/month',
    features: [
      'Demand forecasting models',
      'Inventory optimization algorithms',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization',
      'Sustainability tracking',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve forecast accuracy by 50%',
      'Optimize delivery routes by 30%',
      'Minimize supply chain disruptions'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce'
  },
  {
    id: 12,
    title: 'AI-Powered Financial Trading',
    description: 'Advanced AI trading algorithms with market analysis, risk management, and automated trading strategies.',
    icon: TrendingUp,
    category: 'AI Finance',
    price: 'Starting at $5,000/month',
    features: [
      'Algorithmic trading strategies',
      'Market sentiment analysis',
      'Risk assessment models',
      'Portfolio optimization',
      'Real-time market monitoring',
      'Backtesting capabilities',
      'Regulatory compliance',
      'Performance analytics'
    ],
    benefits: [
      'Improve trading performance by 35%',
      'Reduce risk exposure by 40%',
      '24/7 market monitoring',
      'Data-driven investment decisions'
    ],
    marketPrice: '$7,500-15,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Investment firms, Hedge funds, Trading companies, Banks'
  },
  {
    id: 13,
    title: 'AI-Powered Climate & Environmental Monitoring',
    description: 'Environmental AI solutions for climate monitoring, pollution detection, and sustainability optimization.',
    icon: Globe,
    category: 'Environmental AI',
    price: 'Starting at $2,800/month',
    features: [
      'Climate pattern analysis',
      'Pollution monitoring',
      'Carbon footprint tracking',
      'Renewable energy optimization',
      'Environmental risk assessment',
      'Sustainability reporting',
      'Predictive environmental modeling',
      'Compliance monitoring'
    ],
    benefits: [
      'Improve environmental compliance by 80%',
      'Reduce carbon footprint by 30%',
      'Predict environmental risks',
      'Optimize resource usage'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Energy companies, Government, Environmental agencies, Manufacturing'
  },
  {
    id: 14,
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document processing with contract analysis, compliance checking, and legal research automation.',
    icon: BookOpen,
    category: 'Legal AI',
    price: 'Starting at $3,200/month',
    features: [
      'Contract analysis and review',
      'Legal document search',
      'Compliance checking',
      'Risk assessment',
      'Legal research automation',
      'Document summarization',
      'Due diligence support',
      'Case law analysis'
    ],
    benefits: [
      'Reduce document review time by 75%',
      'Improve accuracy by 90%',
      'Identify risks and opportunities',
      'Accelerate legal processes'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Law firms, Corporate legal, Government, Legal tech companies'
  },
  {
    id: 15,
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization platform for customer experiences, product recommendations, and content customization.',
    icon: Users,
    category: 'Personalization AI',
    price: 'Starting at $2,500/month',
    features: [
      'Customer behavior analysis',
      'Product recommendation engines',
      'Content personalization',
      'Dynamic pricing optimization',
      'Customer journey mapping',
      'A/B testing automation',
      'Real-time personalization',
      'Cross-channel consistency'
    ],
    benefits: [
      'Increase conversion rates by 40%',
      'Improve customer satisfaction by 35%',
      'Boost revenue by 25%',
      'Enhanced customer engagement'
    ],
    marketPrice: '$3,800-8,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Retail'
  },
  {
    id: 16,
    title: 'AI-Powered Voice & Speech Technology',
    description: 'Advanced voice recognition, speech synthesis, and conversational AI for various applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,000/month',
    features: [
      'Multi-language speech recognition',
      'Natural speech synthesis',
      'Voice biometrics',
      'Real-time transcription',
      'Voice command processing',
      'Emotion detection',
      'Accent adaptation',
      'Noise cancellation'
    ],
    benefits: [
      'Improve accessibility by 60%',
      'Enhance user experience',
      'Enable hands-free operations',
      'Support multiple languages'
    ],
    marketPrice: '$3,000-6,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Healthcare, Customer service, Education, Accessibility'
  },
  {
    id: 17,
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent equipment monitoring and maintenance prediction to prevent failures and optimize operations.',
    icon: Settings,
    category: 'Predictive Maintenance',
    price: 'Starting at $3,000/month',
    features: [
      'Equipment health monitoring',
      'Failure prediction algorithms',
      'Maintenance scheduling optimization',
      'Spare parts inventory management',
      'Performance analytics',
      'Cost optimization',
      'Risk assessment',
      'Integration with IoT sensors'
    ],
    benefits: [
      'Reduce unplanned downtime by 50%',
      'Lower maintenance costs by 30%',
      'Extend equipment lifespan by 25%',
      'Improve operational efficiency'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Energy, Transportation, Facilities management'
  },
  {
    id: 18,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems using machine learning and behavioral analysis.',
    icon: Shield,
    category: 'Fraud Detection',
    price: 'Starting at $2,800/month',
    features: [
      'Real-time fraud detection',
      'Behavioral pattern analysis',
      'Risk scoring algorithms',
      'Transaction monitoring',
      'Identity verification',
      'Anomaly detection',
      'False positive reduction',
      'Regulatory compliance'
    ],
    benefits: [
      'Detect fraud 5x faster',
      'Reduce false positives by 60%',
      'Prevent 95% of fraudulent transactions',
      'Comply with regulations'
    ],
    marketPrice: '$4,000-8,500/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banks, Payment processors, E-commerce, Insurance'
  },
  {
    id: 19,
    title: 'AI-Powered Recommendation Systems',
    description: 'Advanced recommendation engines for products, content, and services across various industries.',
    icon: Target,
    category: 'Recommendation AI',
    price: 'Starting at $2,200/month',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendation models',
      'Real-time recommendations',
      'A/B testing framework',
      'Performance analytics',
      'Cold start problem solving',
      'Multi-criteria optimization'
    ],
    benefits: [
      'Increase sales by 30%',
      'Improve user engagement by 45%',
      'Reduce churn by 25%',
      'Enhanced user experience'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Streaming services, Social media, News platforms'
  },
  {
    id: 20,
    title: 'AI-Powered Quality Assurance',
    description: 'Intelligent quality control and testing systems for manufacturing, software, and service industries.',
    icon: CheckCircle,
    category: 'Quality AI',
    price: 'Starting at $2,500/month',
    features: [
      'Automated defect detection',
      'Quality prediction models',
      'Statistical process control',
      'Root cause analysis',
      'Test case generation',
      'Performance monitoring',
      'Compliance checking',
      'Continuous improvement'
    ],
    benefits: [
      'Improve quality by 40%',
      'Reduce defects by 60%',
      'Lower testing costs by 50%',
      'Faster time to market'
    ],
    marketPrice: '$3,800-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Software development, Healthcare, Automotive'
  },
  {
    id: 7,
    title: 'AI Drug Discovery & Development',
    description: 'AI-powered drug discovery platform with molecular analysis, compound screening, and clinical trial optimization.',
    icon: Heart,
    category: 'AI Healthcare',
    price: 'Starting at $4,500/month',
    features: [
      'Molecular structure analysis',
      'Drug-target interaction prediction',
      'Compound screening & optimization',
      'Clinical trial design optimization',
      'Side effect prediction',
      'Patent landscape analysis',
      'Regulatory compliance support',
      'Collaborative research tools'
    ],
    benefits: [
      'Accelerate drug discovery by 50%',
      'Reduce development costs by 40%',
      'Improve success rates by 30%',
      'Faster time to market'
    ],
    marketPrice: '$7,000-20,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Pharmaceutical companies, Biotech firms, Research institutions'
  },
  {
    id: 8,
    title: 'AI Climate & Environmental Solutions',
    description: 'AI-powered climate analysis, environmental monitoring, and sustainability optimization solutions.',
    icon: TreePine,
    category: 'AI Climate',
    price: 'Starting at $2,200/month',
    features: [
      'Climate data analysis & prediction',
      'Environmental impact assessment',
      'Carbon footprint optimization',
      'Renewable energy optimization',
      'Weather pattern analysis',
      'Sustainability reporting',
      'Environmental risk assessment',
      'Green technology recommendations'
    ],
    benefits: [
      'Improve environmental outcomes by 40%',
      'Reduce carbon footprint by 35%',
      'Optimize resource usage',
      'Meet sustainability goals'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Environmental agencies, Energy companies, Manufacturing, Government'
  },
  {
    id: 9,
    title: 'AI Space Technology & Research',
    description: 'AI solutions for space exploration, satellite data analysis, and astronomical research applications.',
    icon: Rocket,
    category: 'AI Space',
    price: 'Starting at $3,500/month',
    features: [
      'Satellite data processing & analysis',
      'Space mission planning & optimization',
      'Astronomical data analysis',
      'Orbital mechanics calculations',
      'Space weather prediction',
      'Mission control AI systems',
      'Research data visualization',
      'Space communication protocols'
    ],
    benefits: [
      'Accelerate space research by 60%',
      'Improve mission success rates',
      'Optimize space operations',
      'Enable new discoveries'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Space agencies, Research institutions, Satellite companies, Aerospace'
  },
  {
    id: 10,
    title: 'AI Autonomous Systems',
    description: 'AI solutions for autonomous vehicles, drones, and robotic systems with advanced perception and decision-making.',
    icon: Car,
    category: 'AI Autonomous',
    price: 'Starting at $4,200/month',
    features: [
      'Autonomous vehicle AI systems',
      'Drone fleet management AI',
      'Robotic process automation',
      'Computer vision for autonomy',
      'Path planning & navigation',
      'Collision avoidance systems',
      'Real-time decision making',
      'Safety & compliance monitoring'
    ],
    benefits: [
      'Enable fully autonomous operations',
      'Improve safety by 95%',
      'Reduce operational costs by 50%',
      'Increase efficiency by 70%'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Automotive, Logistics, Agriculture, Manufacturing, Transportation'
  },
  {
    id: 11,
    title: 'AI Legal & Compliance Solutions',
    description: 'AI-powered legal research, contract analysis, and compliance monitoring for legal professionals.',
    icon: BookOpen,
    category: 'AI Legal',
    price: 'Starting at $2,800/month',
    features: [
      'Legal document analysis',
      'Contract review & extraction',
      'Case law research & analysis',
      'Compliance monitoring',
      'Risk assessment & mitigation',
      'Legal precedent identification',
      'Document automation',
      'Regulatory change tracking'
    ],
    benefits: [
      'Reduce legal research time by 80%',
      'Improve accuracy by 90%',
      'Lower legal costs by 60%',
      'Ensure compliance automatically'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Law firms, Corporate legal, Government, Compliance teams'
  },
  {
    id: 12,
    title: 'AI Financial Services & Trading',
    description: 'AI solutions for financial analysis, algorithmic trading, risk management, and fraud detection.',
    icon: DollarSign,
    category: 'AI Finance',
    price: 'Starting at $3,200/month',
    features: [
      'Algorithmic trading systems',
      'Risk assessment & management',
      'Fraud detection & prevention',
      'Credit scoring & underwriting',
      'Portfolio optimization',
      'Market analysis & prediction',
      'Regulatory compliance',
      'Real-time monitoring'
    ],
    benefits: [
      'Improve trading performance by 40%',
      'Reduce fraud losses by 85%',
      'Optimize portfolio returns',
      'Ensure regulatory compliance'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Banks, Investment firms, Insurance companies, Fintech'
  },
  {
    id: 13,
    title: 'AI Agriculture & Food Tech',
    description: 'AI solutions for precision agriculture, crop monitoring, and food production optimization.',
    icon: Sprout,
    category: 'AI Agriculture',
    price: 'Starting at $2,500/month',
    features: [
      'Crop monitoring & analysis',
      'Yield prediction & optimization',
      'Pest & disease detection',
      'Soil analysis & recommendations',
      'Weather prediction & planning',
      'Automated farming systems',
      'Supply chain optimization',
      'Quality control & grading'
    ],
    benefits: [
      'Increase crop yields by 30%',
      'Reduce water usage by 40%',
      'Lower pesticide use by 50%',
      'Improve food quality'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Farmers, Agribusiness, Food companies, Research institutions'
  },
  {
    id: 14,
    title: 'AI Energy & Utilities',
    description: 'AI solutions for energy management, grid optimization, and renewable energy integration.',
    icon: Zap,
    category: 'AI Energy',
    price: 'Starting at $2,800/month',
    features: [
      'Smart grid optimization',
      'Energy consumption analysis',
      'Renewable energy forecasting',
      'Demand response management',
      'Predictive maintenance',
      'Energy trading optimization',
      'Carbon footprint tracking',
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Improve grid efficiency by 35%',
      'Optimize renewable integration',
      'Meet sustainability goals'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Utility companies, Energy providers, Manufacturing, Government'
  },
  {
    id: 15,
    title: 'AI Education & Learning',
    description: 'AI-powered educational platforms with personalized learning, adaptive content, and intelligent tutoring.',
    icon: GraduationCap,
    category: 'AI Education',
    price: 'Starting at $1,800/month',
    features: [
      'Personalized learning paths',
      'Adaptive content delivery',
      'Intelligent tutoring systems',
      'Learning analytics & insights',
      'Automated assessment & grading',
      'Multi-language support',
      'Accessibility features',
      'Progress tracking & reporting'
    ],
    benefits: [
      'Improve learning outcomes by 50%',
      'Personalize education for each student',
      'Reduce teaching workload by 40%',
      'Enable scalable education'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Schools, Universities, Online education, Corporate training'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "AI Healthcare", count: aiServices.filter(s => s.category === "AI Healthcare").length },
  { name: "AI Finance", count: aiServices.filter(s => s.category === "AI Finance").length },
  { name: "AI Marketing", count: aiServices.filter(s => s.category === "AI Marketing").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Predictive Maintenance", count: aiServices.filter(s => s.category === "Predictive Maintenance").length },
  { name: "Fraud Detection", count: aiServices.filter(s => s.category === "Fraud Detection").length },
  { name: "Recommendation AI", count: aiServices.filter(s => s.category === "Recommendation AI").length },
  { name: "Quality AI", count: aiServices.filter(s => s.category === "Quality AI").length },
<<<<<<< HEAD
  { name: "HR AI", count: aiServices.filter(s => s.category === "HR AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length },
  { name: "Climate AI", count: aiServices.filter(s => s.category === "Climate AI").length }
>>>>>>> main
=======
    name: 'Machine Learning & AI Development',
    description: 'Custom AI solutions tailored to your business needs',
    icon: Brain,
    features: ['Predictive Analytics', 'Pattern Recognition', 'Real-time Processing', 'Model Optimization'],
    price: 'Starting at $3,000/month',
    category: 'Core AI'
  },
  {
    id: 2,
    name: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for automation',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Control'],
    price: 'Starting at $2,500/month',
    category: 'Computer Vision'
  },
  {
    id: 3,
    name: 'Natural Language Processing',
    description: 'Intelligent text analysis and language understanding',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Content Generation'],
    price: 'Starting at $2,200/month',
    category: 'NLP'
  },
  {
    id: 4,
    name: 'Predictive Analytics',
    description: 'Data-driven insights and forecasting solutions',
    icon: BarChart3,
    features: ['Demand Forecasting', 'Risk Assessment', 'Performance Prediction', 'Trend Analysis'],
    price: 'Starting at $2,800/month',
    category: 'Analytics'
  },
  {
    id: 5,
    name: 'AI Process Automation',
    description: 'Intelligent automation for business processes',
    icon: Zap,
    features: ['Process Automation', 'Document Processing', 'Workflow Optimization', 'Compliance Monitoring'],
    price: 'Starting at $1,800/month',
    category: 'Automation'
  },
  {
    id: 6,
    name: 'AI Security Solutions',
    description: 'Advanced threat detection and security systems',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Security Monitoring'],
    price: 'Starting at $3,200/month',
    category: 'Security'
  }
];

const stats = [
  { number: "500+", label: "AI Models Deployed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
];

export default function AIServices() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Layout>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including business intelligence, customer support, and automation services." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
=======
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, NLP, and predictive analytics. Transform your business with cutting-edge AI solutions."
      keywords="AI services, machine learning, computer vision, NLP, predictive analytics, AI automation, AI security"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            <motion.div
              initial={{ opacity: 0, y: 20 }}
=======
    <Layout 
      title="AI Services - Zion Tech Group | Machine Learning, Computer Vision & NLP"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and custom AI solutions. Transform your business with cutting-edge AI technology."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, custom AI solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
=======
  { name: "Personalization AI", count: aiServices.filter(s => s.category === "Personalization AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 100+ Cutting-Edge AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, NLP, analytics, and automation. 100+ AI solutions with competitive pricing and proven results." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, AI automation, AI consulting, artificial intelligence solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. 100+ cutting-edge solutions with competitive pricing." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
>>>>>>> main
>>>>>>> main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Transform your business with cutting-edge artificial intelligence
              </p>
              <p className="text-lg text-purple-200 max-w-3xl mx-auto">
                From machine learning models to intelligent automation, we help businesses harness the power of AI to drive innovation and growth.
              </p>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI <span className="text-blue-300">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From predictive analytics to intelligent automation, we deliver AI solutions that drive real business value.
=======
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business with our comprehensive suite of AI services and solutions.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/micro-saas"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Micro SaaS
=======
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                </Link>
=======
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Services</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning models to computer vision and natural language processing, we deliver intelligent solutions that drive growth and innovation.
=======
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                100+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, 
                quantum AI, autonomous systems, and advanced analytics with real-world applications and proven results.
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
<<<<<<< HEAD
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
>>>>>>> main
=======
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              </div>
>>>>>>> main
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Search and Filter */}
        <section className="py-12 bg-gray-50">
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
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  <option value="AI Development">AI Development</option>
                  <option value="Content AI">Content AI</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  
                  <ul className="mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-purple-600">{service.pricing}</span>
                      {service.popular && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <Link
                      href={service.link}
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
=======
<<<<<<< HEAD
        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation and drive measurable business outcomes.
=======
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
>>>>>>> main
=======
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
>>>>>>> main
                  </div>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* AI Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful AI implementation and maximum ROI.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your business needs, data sources, and identify AI opportunities."
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Develop a comprehensive AI strategy aligned with your business objectives."
              },
              {
                step: "03",
                title: "Development & Training",
                description: "Build and train AI models using your data and industry best practices."
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Deploy AI solutions and continuously optimize for better performance."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
=======
        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation and drive business growth.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
<<<<<<< HEAD
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                  >
                    Get Started
                  </Link>
=======
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
<<<<<<< HEAD
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-gray-500 ml-2">({service.setupTime})</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
=======
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
>>>>>>> main
=======
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.price}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                </motion.div>
              ))}
=======
        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-300">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200">24/7 AI Support Available</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-blue-300"><Globe className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-300"><Mail className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                          {service.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
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
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Setup: {service.setupTime}</span>
                      <span>Target: {service.targetUsers.split(',')[0]}</span>
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
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
            </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Industries Section */}
        <section className="py-20">
>>>>>>> main
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are tailored for various industries and use cases
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> main
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-purple-600" />
=======
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="h-8 w-8 text-purple-600" />
>>>>>>> main
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/quote" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Free Consultation
              </Link>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
=======
        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
=======
<<<<<<< HEAD
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can drive innovation and growth for your organization.
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you implement the perfect solution for your business needs.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Schedule Demo
                </Link>
                <Link
                  href="/it-services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View IT Services
=======
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Portfolio
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                </Link>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> main
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive edge.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Implement AI?</h2>
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you implement the perfect solution for your business needs.
                Get a free consultation and custom quote today.
              </p>
              <div className="mb-8">
                <p className="text-lg text-blue-100 mb-2">
                  📞 <strong>Call us:</strong> {contactInfo.phone}
                </p>
                <p className="text-lg text-blue-100 mb-2">
                  📧 <strong>Email us:</strong> {contactInfo.email}
                </p>
                <p className="text-lg text-blue-100">
                  📍 <strong>Visit us:</strong> {contactInfo.address}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free AI Consultation
                </Link>
                <Link href="/micro-saas" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Explore Micro SaaS
                </Link>
<<<<<<< HEAD
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
>>>>>>> main
=======
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> main
  );
}
=======
      </div>
    </MainLayout>
  );
};

export default AIServicesPage;
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
    </>
  );
}
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
