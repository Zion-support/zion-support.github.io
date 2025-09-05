import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Brain, Zap, Shield, Database, BarChart3, Users, User, MessageSquare, Search, Eye, Target, 
  TrendingUp, CheckCircle, ArrowRight, Clock, Award, Star, Globe, Lock, Cpu, Bot, 
  FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Cloud, Server, Network, 
  Car, Rocket, Heart, Building, Sprout, Mail, ShoppingCart, BookOpen, Home, Gamepad2,
  Phone, MapPin, Activity, RefreshCw, Layers, Compass, Lightning, Wifi, Bluetooth, 
  Headphones, Printer, Keyboard, Mouse, CreditCard, Wallet, Receipt, 
  Calculator, Clock3, Timer, AlertTriangle, Info, HelpCircle, ThumbsUp, 
  ThumbsDown, MessageCircle, Share2, Download, Upload, Copy, Edit, Trash, Save, 
  Plus, Minus, X, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Play, 
  Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, 
  RotateCw, ZoomIn, ZoomOut, Move, Grip, Filter, SortAsc, SortDesc, Grid, List, 
  Layout, Sidebar, Menu, Bell, BellOff, Star as StarIcon, Bookmark, Flag, Tag, 
  Hash, AtSign, Percent, Hash as HashIcon, DollarSign, Euro, PoundSterling, 
  Bitcoin, Database as DB, Server as ServerIcon, HardDrive as HD,
  Cpu as CPU, MemoryStick, HardDrive as Storage, Wifi as WiFi, Bluetooth as BT, 
  Headphones as Headset, Printer as Print, Keyboard as KB, 
  Mouse as MouseIcon, Palette, Music, Wrench, Lightbulb, PieChart, TrendingDown,
  Stethoscope, Dna as DNA, Package, GraduationCap, Truck
=======
import { motion } from 'framer-motion';
import Layout from './components/Layout';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
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
<<<<<<< HEAD
=======
  Star, 
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
<<<<<<< HEAD
<<<<<<< HEAD
  Image, 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
=======
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
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
<<<<<<< HEAD
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
  Atom,
  MapPin,
  Zap,
  Users,
<<<<<<< HEAD
  Shield,
  Gamepad2,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets
>>>>>>> main
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

=======
  ShoppingCart, 
  BookOpen, 
  Home, 
  Gamepad2 
} from 'lucide-react';

>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
=======
  Shield
} from 'lucide-react';

>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
const aiServices = [
  // AI Automation & Workflow
  {
<<<<<<< HEAD
    title: 'AI-Powered Email Responder',
<<<<<<< HEAD
    description: 'Automated email responses using advanced NLP and machine learning algorithms with sentiment analysis.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing', 'Learning System'],
    pricing: '$2,000 - $8,000 setup',
    category: 'AI Automation',
    popular: true,
    benefits: ['Time Savings', 'Better Responses', '24/7 Availability', 'Consistent Quality'],
    marketPrice: '$3,000 - $12,000/setup',
    link: 'https://ziontechgroup.com/ai-email-responder'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities and seamless human handoff.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs', 'Human Handoff'],
    pricing: '$1,000 - $6,000/month',
<<<<<<< HEAD
    category: 'Customer Service',
    popular: true
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Real-time Processing'],
    pricing: '$2,500 - $10,000/month',
    category: 'Computer Vision',
    popular: true,
    link: 'https://computervision.ziontechgroup.com'
  },
  {
    title: 'Natural Language Processing (NLP) Engine',
    description: 'Advanced text analysis, sentiment analysis, and language understanding capabilities.',
    icon: FileText,
    features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Named Entity Recognition'],
    pricing: '$1,500 - $7,500/month',
    category: 'NLP',
    link: 'https://nlpengine.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection and prevention using machine learning algorithms.',
    icon: Shield,
    features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],
    pricing: '$3,000 - $15,000/month',
    category: 'Security',
    popular: true,
    link: 'https://frauddetection.ziontechgroup.com'
  },
  {
    title: 'Intelligent Document Search',
    description: 'AI-powered semantic search across documents with natural language queries.',
    icon: Search,
    features: ['Semantic Search', 'Natural Language Queries', 'Document Indexing', 'Relevance Ranking'],
    pricing: '$999 - $4,999/month',
    category: 'Search',
    link: 'https://docsearch.ziontechgroup.com'
  },
  {
    title: 'AI Content Generator',
    description: 'Automated content creation for blogs, social media, and marketing materials.',
    icon: PenTool,
    features: ['Blog Writing', 'Social Media Posts', 'Marketing Copy', 'SEO Optimization'],
    pricing: '$299 - $1,499/month',
    category: 'Content Creation',
    link: 'https://contentgenerator.ziontechgroup.com'
  },
  {
    title: 'Predictive Maintenance AI',
    description: 'Machine learning models for equipment maintenance prediction and optimization.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$2,000 - $10,000/month',
    category: 'IoT & Maintenance',
    link: 'https://predictivemaintenance.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Personalized recommendation system for products, content, and services.',
    icon: Target,
    features: ['Collaborative Filtering', 'Content-based Filtering', 'Hybrid Approaches', 'Real-time Updates'],
    pricing: '$1,500 - $7,500/month',
    category: 'Recommendations',
    popular: true,
    link: 'https://recommendationai.ziontechgroup.com'
  },
  {
    title: 'Voice Recognition & Processing',
    description: 'Advanced speech-to-text, voice commands, and audio analysis capabilities.',
    icon: Mic,
    features: ['Speech-to-Text', 'Voice Commands', 'Speaker Identification', 'Audio Analysis'],
    pricing: '$999 - $4,999/month',
    category: 'Voice AI',
    link: 'https://voicerecognition.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Data Analytics',
    description: 'Intelligent data analysis and insights generation using machine learning.',
    icon: BarChart3,
    features: ['Pattern Recognition', 'Anomaly Detection', 'Trend Analysis', 'Automated Insights'],
    pricing: '$2,500 - $12,500/month',
    category: 'Analytics',
    link: 'https://dataanalytics.ziontechgroup.com'
  },
  {
    title: 'Intelligent Process Automation',
    description: 'AI-driven automation of complex business processes and workflows.',
    icon: Zap,
    features: ['Process Mining', 'Workflow Automation', 'Decision Making', 'Exception Handling'],
    pricing: '$3,500 - $17,500/month',
    category: 'Automation',
    link: 'https://processautomation.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Customer Insights',
    description: 'Deep customer behavior analysis and personalized engagement strategies.',
    icon: Users,
    features: ['Behavior Analysis', 'Persona Creation', 'Engagement Optimization', 'Churn Prediction'],
    pricing: '$2,000 - $10,000/month',
    category: 'Customer Intelligence',
    popular: true,
    link: 'https://customerinsights.ziontechgroup.com'
  },
  {
    title: 'Quantum Machine Learning',
    description: 'Next-generation quantum computing applications for machine learning problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Pattern Recognition', 'Quantum Neural Networks'],
    pricing: '$10,000 - $50,000/month',
    category: 'Quantum AI',
    link: 'https://quantumml.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
    icon: Truck,
    features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Risk Assessment'],
    pricing: '$5,000 - $25,000/month',
    category: 'Supply Chain',
    link: 'https://supplychainai.ziontechgroup.com'
  },
  {
    title: 'Intelligent Financial Analysis',
    description: 'AI-driven financial modeling, risk assessment, and investment analysis.',
    icon: DollarSign,
    features: ['Financial Modeling', 'Risk Assessment', 'Portfolio Optimization', 'Market Analysis'],
    pricing: '$3,000 - $15,000/month',
    category: 'Finance',
    link: 'https://financialai.ziontechgroup.com'
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
=======
    category: 'AI Automation',
    popular: true,
    benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Better Customer Experience'],
    marketPrice: '$1,500 - $9,000/month',
    link: 'https://ziontechgroup.com/intelligent-chatbot'
  },
  {
    title: 'AI Workflow Automation',
    description: 'Intelligent workflow automation with decision-making capabilities and process optimization.',
    icon: Zap,
    features: ['Process Automation', 'Decision Making', 'Learning Capabilities', 'Integration', 'Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI Automation',
    benefits: ['Process Efficiency', 'Cost Reduction', 'Better Accuracy', 'Scalability'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/ai-workflow-automation'
>>>>>>> main
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document processing with OCR, data extraction, and automated classification.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Automated Processing', 'Quality Control'],
    pricing: '$3,000 - $15,000/project',
    category: 'AI Automation',
    benefits: ['Time Savings', 'Accuracy', 'Cost Reduction', 'Scalability'],
    marketPrice: '$5,000 - $25,000/project',
    link: 'https://ziontechgroup.com/ai-document-processing'
  },

  // AI Analytics & Intelligence
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence with real-time insights.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards', 'Automated Reports'],
    pricing: '$4,000 - $20,000/project',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Better Forecasting', 'Data-Driven Decisions', 'Risk Mitigation', 'Competitive Advantage'],
    marketPrice: '$6,000 - $30,000/project',
    link: 'https://ziontechgroup.com/predictive-analytics'
  },
  {
    title: 'AI Business Intelligence',
    description: 'Comprehensive business intelligence with AI-powered insights, reporting, and decision support.',
    icon: TrendingUp,
    features: ['Data Visualization', 'Automated Insights', 'Predictive Modeling', 'Custom Reports', 'Real-time Analytics'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI Analytics',
    benefits: ['Better Insights', 'Faster Decisions', 'Competitive Advantage', 'Cost Optimization'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-business-intelligence'
  },
  {
    title: 'AI Customer Analytics',
    description: 'Advanced customer analytics with behavior prediction, segmentation, and personalization insights.',
    icon: Users,
    features: ['Customer Segmentation', 'Behavior Prediction', 'Churn Analysis', 'Personalization', 'Lifetime Value'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI Analytics',
    benefits: ['Better Customer Understanding', 'Increased Retention', 'Personalization', 'Revenue Growth'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/ai-customer-analytics'
  },
  {
    title: 'AI Market Intelligence',
    description: 'Real-time market intelligence with trend analysis, competitor monitoring, and opportunity identification.',
    icon: Globe,
    features: ['Trend Analysis', 'Competitor Monitoring', 'Opportunity Identification', 'Market Forecasting', 'Real-time Updates'],
    pricing: '$3,000 - $15,000/month',
    category: 'AI Analytics',
    benefits: ['Market Insights', 'Competitive Advantage', 'Opportunity Identification', 'Better Strategy'],
    marketPrice: '$5,000 - $25,000/month',
    link: 'https://ziontechgroup.com/ai-market-intelligence'
  },

  // Computer Vision & Image Processing
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision for various applications.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
    pricing: '$3,000 - $15,000/project',
    category: 'Computer Vision',
    benefits: ['Automated Analysis', 'Better Accuracy', 'Cost Savings', 'Scalability'],
    marketPrice: '$5,000 - $25,000/project',
    link: 'https://ziontechgroup.com/computer-vision'
  },
  {
    title: 'AI Medical Imaging',
    description: 'Advanced medical imaging analysis with AI-powered diagnosis assistance and pattern recognition.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Diagnosis Assistance', 'Pattern Recognition', 'Risk Assessment', 'Report Generation'],
    pricing: '$25,000 - $100,000/project',
    category: 'Computer Vision',
    benefits: ['Better Diagnosis', 'Faster Analysis', 'Reduced Errors', 'Improved Outcomes'],
    marketPrice: '$40,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-medical-imaging'
  },
  {
    title: 'AI Quality Control System',
    description: 'Automated quality control using computer vision for manufacturing and production processes.',
    icon: CheckCircle,
    features: ['Defect Detection', 'Quality Assessment', 'Real-time Monitoring', 'Automated Alerts', 'Statistical Analysis'],
    pricing: '$10,000 - $50,000/project',
    category: 'Computer Vision',
    benefits: ['Better Quality', 'Cost Reduction', 'Faster Inspection', 'Consistency'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-quality-control'
  },
  {
    title: 'AI Security Surveillance',
    description: 'Intelligent security surveillance with facial recognition, behavior analysis, and threat detection.',
    icon: Shield,
    features: ['Facial Recognition', 'Behavior Analysis', 'Threat Detection', 'Real-time Alerts', 'Video Analytics'],
    pricing: '$8,000 - $40,000/project',
    category: 'Computer Vision',
    benefits: ['Enhanced Security', 'Automated Monitoring', 'Threat Prevention', 'Cost Efficiency'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-security-surveillance'
  },
<<<<<<< HEAD
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
=======

  // Natural Language Processing
  {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced language models with SEO optimization and multi-format output.',
    icon: FileText,
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output', 'Brand Voice'],
    pricing: '$1,500 - $8,000/month',
    category: 'Natural Language Processing',
    benefits: ['Content Scale', 'Time Savings', 'SEO Optimization', 'Consistency'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-content-generation'
  },
  {
    title: 'AI Language Translation',
    description: 'Advanced language translation with context understanding, cultural adaptation, and real-time processing.',
    icon: Globe,
    features: ['Multi-language Support', 'Context Understanding', 'Cultural Adaptation', 'Real-time Translation', 'Quality Assurance'],
    pricing: '$2,000 - $10,000/month',
    category: 'Natural Language Processing',
    benefits: ['Global Reach', 'Better Accuracy', 'Cultural Sensitivity', 'Real-time Processing'],
    marketPrice: '$3,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-language-translation'
  },
  {
    title: 'AI Sentiment Analysis',
    description: 'Advanced sentiment analysis for social media, reviews, and customer feedback with emotion detection.',
    icon: Heart,
    features: ['Sentiment Detection', 'Emotion Analysis', 'Social Media Monitoring', 'Review Analysis', 'Trend Identification'],
    pricing: '$1,000 - $5,000/month',
    category: 'Natural Language Processing',
    benefits: ['Customer Insights', 'Brand Monitoring', 'Risk Detection', 'Market Intelligence'],
    marketPrice: '$1,500 - $8,000/month',
    link: 'https://ziontechgroup.com/ai-sentiment-analysis'
  },
  {
    title: 'AI Text Summarization',
    description: 'Intelligent text summarization with key point extraction, document analysis, and automated reporting.',
>>>>>>> main
    icon: FileText,
    features: ['Key Point Extraction', 'Document Analysis', 'Automated Summaries', 'Multi-document Processing', 'Custom Formats'],
    pricing: '$1,500 - $7,500/month',
    category: 'Natural Language Processing',
    benefits: ['Time Savings', 'Better Understanding', 'Automated Processing', 'Consistency'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-text-summarization'
  },

  // Voice & Audio AI
  {
    title: 'Voice AI Assistant',
    description: 'Voice-controlled AI assistant with speech recognition, synthesis, and natural conversation capabilities.',
    icon: Mic,
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support', 'Context Awareness'],
    pricing: '$2,500 - $12,000/project',
    category: 'Voice AI',
    benefits: ['Hands-free Operation', 'Better Accessibility', 'Natural Interaction', 'Multi-language Support'],
    marketPrice: '$4,000 - $20,000/project',
    link: 'https://ziontechgroup.com/voice-ai-assistant'
  },
  {
    title: 'AI Voice Analytics',
    description: 'Advanced voice analytics for customer service, sales optimization, and training insights.',
    icon: Mic,
    features: ['Emotion Detection', 'Call Quality Analysis', 'Training Insights', 'Performance Metrics', 'Real-time Monitoring'],
    pricing: '$3,000 - $15,000/month',
    category: 'Voice AI',
    benefits: ['Better Customer Service', 'Sales Optimization', 'Training Insights', 'Quality Improvement'],
    marketPrice: '$5,000 - $25,000/month',
    link: 'https://ziontechgroup.com/ai-voice-analytics'
  },
  {
    title: 'AI Audio Processing',
    description: 'Intelligent audio processing with noise reduction, enhancement, and automated transcription.',
    icon: Headphones,
    features: ['Noise Reduction', 'Audio Enhancement', 'Automated Transcription', 'Speaker Identification', 'Quality Improvement'],
    pricing: '$2,000 - $10,000/project',
    category: 'Voice AI',
    benefits: ['Better Audio Quality', 'Automated Processing', 'Time Savings', 'Improved Clarity'],
    marketPrice: '$3,000 - $15,000/project',
    link: 'https://ziontechgroup.com/ai-audio-processing'
  },

  // AI Security & Fraud Detection
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection using machine learning and behavioral analytics with automated response.',
    icon: Shield,
    features: ['Real-time Analysis', 'Behavioral Patterns', 'Risk Scoring', 'Automated Alerts', 'Response Automation'],
    pricing: '$5,000 - $25,000/setup',
    category: 'AI Security',
    popular: true,
    benefits: ['Fraud Prevention', 'Cost Savings', 'Real-time Protection', 'Automated Response'],
    marketPrice: '$8,000 - $40,000/setup',
    link: 'https://ziontechgroup.com/ai-fraud-detection'
  },
  {
    title: 'AI Cybersecurity Platform',
    description: 'Comprehensive cybersecurity platform with threat detection, response, and automated defense.',
    icon: Lock,
    features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Risk Assessment', 'Incident Management'],
    pricing: '$10,000 - $50,000/project',
    category: 'AI Security',
    benefits: ['Enhanced Security', 'Automated Defense', 'Faster Response', 'Risk Reduction'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-cybersecurity'
  },
  {
    title: 'AI Identity Verification',
    description: 'Advanced identity verification using biometric analysis, document verification, and behavioral patterns.',
    icon: User,
    features: ['Biometric Analysis', 'Document Verification', 'Behavioral Patterns', 'Risk Assessment', 'Real-time Verification'],
    pricing: '$3,000 - $15,000/project',
    category: 'AI Security',
    benefits: ['Enhanced Security', 'Fraud Prevention', 'Better User Experience', 'Compliance'],
    marketPrice: '$5,000 - $25,000/project',
    link: 'https://ziontechgroup.com/ai-identity-verification'
  },

  // AI Healthcare & Life Sciences
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design, optimization, and clinical trial prediction.',
    icon: Heart,
<<<<<<< HEAD
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
=======
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization', 'Patent Analysis'],
>>>>>>> main
    pricing: '$50,000 - $200,000/project',
    category: 'AI Healthcare',
    benefits: ['Faster Discovery', 'Cost Reduction', 'Better Success Rate', 'Innovation'],
    marketPrice: '$75,000 - $300,000/project',
    link: 'https://ziontechgroup.com/ai-drug-discovery'
  },
  {
    title: 'AI Diagnostic Assistant',
    description: 'AI-powered diagnostic assistance with symptom analysis, disease prediction, and treatment recommendations.',
    icon: Stethoscope,
    features: ['Symptom Analysis', 'Disease Prediction', 'Treatment Recommendations', 'Risk Assessment', 'Clinical Decision Support'],
    pricing: '$25,000 - $100,000/project',
    category: 'AI Healthcare',
    benefits: ['Better Diagnosis', 'Faster Treatment', 'Reduced Errors', 'Improved Outcomes'],
    marketPrice: '$40,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-diagnostic-assistant'
  },
  {
    title: 'AI Personalized Medicine',
    description: 'Personalized treatment recommendations based on genetic analysis, medical history, and AI predictions.',
    icon: DNA,
    features: ['Genetic Analysis', 'Treatment Personalization', 'Risk Prediction', 'Drug Response', 'Clinical Guidelines'],
    pricing: '$30,000 - $150,000/project',
    category: 'AI Healthcare',
    benefits: ['Personalized Treatment', 'Better Outcomes', 'Reduced Side Effects', 'Cost Efficiency'],
    marketPrice: '$50,000 - $250,000/project',
    link: 'https://ziontechgroup.com/ai-personalized-medicine'
  },

  // AI Finance & Trading
  {
    title: 'AI Financial Modeling',
    description: 'Advanced financial modeling and risk assessment using machine learning and predictive analytics.',
    icon: TrendingUp,
    features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading', 'Fraud Detection'],
    pricing: '$10,000 - $50,000/project',
    category: 'AI Finance',
    benefits: ['Better Returns', 'Risk Mitigation', 'Automated Trading', 'Market Insights'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-financial-modeling'
  },
  {
    title: 'AI Credit Risk Assessment',
    description: 'Intelligent credit risk assessment with automated scoring, fraud detection, and decision support.',
    icon: CreditCard,
    features: ['Credit Scoring', 'Risk Assessment', 'Fraud Detection', 'Decision Support', 'Regulatory Compliance'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI Finance',
    benefits: ['Better Risk Assessment', 'Faster Decisions', 'Fraud Prevention', 'Compliance'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-credit-risk'
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
    link: 'https://ziontechgroup.com/ai-algorithmic-trading'
=======
    id: 1,
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    category: 'Machine Learning',
    price: 'Starting at $3,500/month',
    features: [
      'Custom model development & training',
      'Data preprocessing & feature engineering',
      'Model deployment & monitoring',
      'A/B testing & performance optimization',
      'Real-time prediction APIs',
      'Model versioning & management',
      'Automated retraining pipelines',
      'Integration with existing systems'
    ],
    benefits: [
      'Increase prediction accuracy by 40-60%',
      'Automate decision-making processes',
      'Reduce manual analysis time by 80%',
      'Improve business outcomes by 25-35%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing'
  },
  {
    id: 2,
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
<<<<<<< HEAD
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
<<<<<<< HEAD
    features: ['Quantum Algorithms', 'Optimization', 'Machine Learning', 'Error Correction'],
    pricing: '$150,000 - $1,000,000/setup',
    category: 'Quantum Computing',
    popular: true
=======
    category: 'Quantum AI',
    price: 'Starting at $8,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum neural networks',
      'Hybrid classical-quantum models',
      'Quantum data processing',
      'Advanced cryptography',
      'Quantum simulation',
      'Real-time quantum computing'
    ],
    benefits: [
      'Solve previously intractable problems',
      'Exponential speedup for specific tasks',
      'Breakthrough optimization results',
      'Future-proof AI architecture'
    ],
    marketPrice: '$12,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research, Finance, Pharmaceuticals, Defense'
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
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
<<<<<<< HEAD
    title: 'AI-Powered Healthcare Diagnostics',
    description: 'Advanced AI diagnostic systems for medical imaging and analysis.',
    icon: Heart,
    features: ['Medical Imaging', 'Disease Detection', 'Treatment Planning', 'Patient Monitoring'],
    pricing: '$150,000 - $750,000 project',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'AI-Powered Financial Risk Assessment',
    description: 'Intelligent financial risk analysis and credit scoring using AI.',
    icon: TrendingUp,
    features: ['Risk Modeling', 'Credit Scoring', 'Fraud Detection', 'Portfolio Analysis'],
    pricing: '$50,000 - $250,000 setup',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with AI-powered optimization.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management'],
    pricing: '$75,000 - $375,000 setup',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Environmental Monitoring',
    description: 'Intelligent environmental monitoring and climate change analysis.',
    icon: Globe,
    features: ['Climate Monitoring', 'Pollution Detection', 'Ecosystem Analysis', 'Sustainability Metrics'],
    pricing: '$40,000 - $200,000 project',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Transportation',
    description: 'Intelligent transportation systems with AI optimization and management.',
    icon: Car,
    features: ['Traffic Optimization', 'Route Planning', 'Fleet Management', 'Safety Monitoring'],
    pricing: '$100,000 - $500,000 project',
    category: 'Smart Transportation',
    popular: true
  },
  {
    title: 'AI-Powered Educational Technology',
    description: 'Intelligent educational platforms with personalized learning experiences.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Content', 'Progress Tracking', 'Assessment Tools'],
    pricing: '$30,000 - $150,000 setup',
    category: 'EdTech',
    popular: true
  },
  {
    title: 'AI-Powered Retail Intelligence',
    description: 'Intelligent retail analytics and customer experience optimization.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Management', 'Price Optimization', 'Store Layout'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Retail AI',
    popular: true
  },
  {
    title: 'AI-Powered Gaming Intelligence',
    description: 'Intelligent gaming systems with AI-powered NPCs and dynamic content.',
    icon: Gamepad2,
    features: ['NPC Intelligence', 'Dynamic Content', 'Player Behavior Analysis', 'Game Balancing'],
    pricing: '$40,000 - $200,000 project',
    category: 'Gaming AI',
    popular: true
  },
  {
    title: 'AI-Powered Real Estate Intelligence',
    description: 'Intelligent real estate analysis and property management using AI.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Tenant Management', 'Maintenance Prediction'],
    pricing: '$20,000 - $100,000 setup',
    category: 'PropTech',
    popular: true
  },
  {
    title: 'AI-Powered Manufacturing Intelligence',
    description: 'Intelligent manufacturing optimization and quality control using AI.',
    icon: Factory,
    features: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain'],
    pricing: '$75,000 - $375,000 setup',
    category: 'Manufacturing AI',
    popular: true
  },
  {
    title: 'AI-Powered Legal Intelligence',
    description: 'Intelligent legal research and case analysis using AI.',
    icon: BookOpen,
    features: ['Legal Research', 'Case Analysis', 'Document Review', 'Compliance Monitoring'],
    pricing: '$30,000 - $150,000 setup',
    category: 'Legal AI',
    popular: true
  },
  {
    title: 'AI-Powered Media Intelligence',
    description: 'Intelligent media analysis and content optimization using AI.',
    icon: Video,
    features: ['Content Analysis', 'Trend Detection', 'Audience Insights', 'Content Optimization'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Media AI',
    popular: true
  },
  {
    title: 'AI-Powered Sports Analytics',
    description: 'Intelligent sports performance analysis and prediction using AI.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prediction', 'Game Strategy', 'Player Development'],
    pricing: '$35,000 - $175,000 setup',
    category: 'Sports AI',
    popular: true
  },
  {
    title: 'AI-Powered Travel Intelligence',
    description: 'Intelligent travel planning and optimization using AI.',
    icon: Globe,
    features: ['Route Optimization', 'Price Prediction', 'Personalized Recommendations', 'Real-time Updates'],
    pricing: '$20,000 - $100,000 setup',
    category: 'Travel AI',
    popular: true
  },
  {
    title: 'AI-Powered Insurance Intelligence',
    description: 'Intelligent insurance risk assessment and claims processing using AI.',
    icon: Shield,
    features: ['Risk Assessment', 'Claims Processing', 'Fraud Detection', 'Customer Service'],
    pricing: '$40,000 - $200,000 setup',
    category: 'InsurTech',
    popular: true
  },
  {
    title: 'AI-Powered Energy Intelligence',
    description: 'Intelligent energy management and optimization using AI.',
    icon: Zap,
    features: ['Energy Optimization', 'Demand Forecasting', 'Renewable Integration', 'Cost Analysis'],
    pricing: '$50,000 - $250,000 setup',
    category: 'Energy AI',
    popular: true
  },
  {
    title: 'AI-Powered Water Management',
    description: 'Intelligent water resource management and conservation using AI.',
    icon: Globe,
    features: ['Water Quality Monitoring', 'Leak Detection', 'Conservation Planning', 'Distribution Optimization'],
    pricing: '$30,000 - $150,000 setup',
    category: 'Water Management',
    popular: true
  },
  {
    title: 'AI-Powered Waste Management',
    description: 'Intelligent waste collection and recycling optimization using AI.',
    icon: Trash2,
    features: ['Collection Optimization', 'Recycling Analysis', 'Cost Reduction', 'Environmental Impact'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Waste Management',
    popular: true
  },
  {
    title: 'AI-Powered Smart Buildings',
    description: 'Intelligent building management and optimization using AI.',
    icon: Building,
    features: ['Energy Management', 'Occupant Comfort', 'Maintenance Prediction', 'Security Systems'],
    pricing: '$40,000 - $200,000 setup',
    category: 'Smart Buildings',
    popular: true
  },
  {
    title: 'AI-Powered Smart Agriculture',
    description: 'Intelligent agricultural optimization and monitoring using AI.',
=======
    title: 'AI-Powered Precision Agriculture',
    description: 'Smart farming solutions with AI-powered crop monitoring and optimization.',
>>>>>>> main
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
    features: ['Personalized Learning', 'Progress Tracking', 'Assessment Tools', 'Content Generation'],
    pricing: '$30,000 - $150,000 setup',
    category: 'EdTech',
    popular: true
  },
  {
    title: 'AI-Powered Smart Retail',
    description: 'Intelligent retail management and customer experience using AI.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Management', 'Price Optimization', 'Personalized Shopping'],
    pricing: '$40,000 - $200,000 setup',
    category: 'Retail AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Manufacturing',
    description: 'Intelligent manufacturing management and optimization using AI.',
    icon: Factory,
    features: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain'],
    pricing: '$75,000 - $375,000 setup',
    category: 'Manufacturing AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Transportation',
    description: 'Intelligent transportation management and optimization using AI.',
    icon: Car,
    features: ['Traffic Optimization', 'Route Planning', 'Fleet Management', 'Safety Monitoring'],
    pricing: '$60,000 - $300,000 setup',
    category: 'Transportation AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Energy',
    description: 'Intelligent energy management and optimization using AI.',
    icon: Zap,
    features: ['Energy Optimization', 'Demand Forecasting', 'Renewable Integration', 'Grid Management'],
    pricing: '$50,000 - $250,000 setup',
    category: 'Energy AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Security',
    description: 'Intelligent security management and threat detection using AI.',
    icon: Shield,
    features: ['Threat Detection', 'Access Control', 'Surveillance Analysis', 'Incident Response'],
    pricing: '$40,000 - $200,000 setup',
    category: 'Security AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Communication',
    description: 'Intelligent communication management and optimization using AI.',
    icon: MessageSquare,
    features: ['Language Translation', 'Sentiment Analysis', 'Content Moderation', 'Customer Service'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Communication AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Analytics',
    description: 'Intelligent data analysis and business intelligence using AI.',
    icon: BarChart3,
    features: ['Data Analysis', 'Predictive Analytics', 'Business Intelligence', 'Decision Support'],
    pricing: '$30,000 - $150,000 setup',
    category: 'Analytics AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Automation',
    description: 'Intelligent process automation and workflow optimization using AI.',
    icon: Settings,
    features: ['Process Automation', 'Workflow Optimization', 'Decision Making', 'Integration'],
    pricing: '$35,000 - $175,000 setup',
    category: 'Automation AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Innovation',
    description: 'Intelligent innovation management and R&D optimization using AI.',
    icon: Rocket,
    features: ['Innovation Management', 'R&D Optimization', 'Patent Analysis', 'Market Research'],
    pricing: '$50,000 - $250,000 setup',
    category: 'Innovation AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Sustainability',
    description: 'Intelligent sustainability management and environmental optimization using AI.',
    icon: Globe,
    features: ['Environmental Monitoring', 'Sustainability Metrics', 'Carbon Footprint', 'Resource Optimization'],
    pricing: '$40,000 - $200,000 setup',
    category: 'Sustainability AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Governance',
    description: 'Intelligent governance management and policy optimization using AI.',
    icon: Building,
    features: ['Policy Analysis', 'Compliance Monitoring', 'Risk Assessment', 'Decision Support'],
    pricing: '$60,000 - $300,000 setup',
    category: 'Governance AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Society',
    description: 'Intelligent societal management and citizen services using AI.',
    icon: Users,
    features: ['Citizen Services', 'Social Analytics', 'Public Safety', 'Resource Allocation'],
    pricing: '$100,000 - $500,000 setup',
    category: 'Society AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Future',
    description: 'Intelligent future planning and scenario analysis using AI.',
    icon: Rocket,
    features: ['Future Planning', 'Scenario Analysis', 'Trend Prediction', 'Strategic Planning'],
    pricing: '$75,000 - $375,000 setup',
    category: 'Future AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Everything',
    description: 'Comprehensive AI solutions for all aspects of business and life.',
    icon: Brain,
    features: ['Universal AI', 'Cross-domain Integration', 'Holistic Optimization', 'Future-proof Solutions'],
    pricing: '$200,000 - $1,000,000 setup',
    category: 'Universal AI',
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
    title: 'AI-Powered Email Security Gateway',
    description: 'Advanced email protection against phishing, malware, and advanced persistent threats.',
    icon: Mail,
    features: ['Phishing Detection', 'Malware Scanning', 'URL Analysis', 'Quarantine Management'],
    pricing: '$2 - $8 per user/month',
    category: 'Email Security',
    popular: true,
    link: 'https://emailsecurity.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Threat Intelligence',
    description: 'Real-time threat detection and intelligence gathering using advanced AI algorithms.',
    icon: Shield,
    features: ['Threat Hunting', 'IOC Analysis', 'Behavioral Analysis', 'Incident Response'],
    pricing: '$5,000 - $25,000/month',
    category: 'Threat Intelligence',
    popular: true,
    link: 'https://threatintelligence.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review and quality analysis using machine learning.',
    icon: Code,
    features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practices Check'],
    pricing: '$500 - $2,500/month',
    category: 'Code Analysis',
    link: 'https://codereviewai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Test Automation',
    description: 'Intelligent test case generation and automated testing using AI.',
    icon: CheckCircle,
    features: ['Test Case Generation', 'Automated Testing', 'Bug Detection', 'Performance Testing'],
    pricing: '$1,000 - $5,000/month',
    category: 'Test Automation',
    link: 'https://testautomationai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered API Management',
    description: 'Intelligent API lifecycle management and optimization using AI.',
    icon: Network,
    features: ['API Discovery', 'Performance Optimization', 'Security Analysis', 'Usage Analytics'],
    pricing: '$1,500 - $7,500/month',
    category: 'API Management',
    link: 'https://apimanagementai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Database Optimization',
    description: 'Intelligent database performance tuning and optimization using machine learning.',
    icon: Database,
    features: ['Query Optimization', 'Index Recommendations', 'Performance Monitoring', 'Capacity Planning'],
    pricing: '$2,000 - $10,000/month',
    category: 'Database AI',
    link: 'https://databaseai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Network Optimization',
    description: 'Intelligent network performance optimization and traffic management using AI.',
    icon: Network,
    features: ['Traffic Analysis', 'Bandwidth Optimization', 'Quality of Service', 'Anomaly Detection'],
    pricing: '$3,000 - $15,000/month',
    category: 'Network AI',
    link: 'https://networkai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cloud Cost Optimization',
    description: 'Intelligent cloud resource optimization and cost reduction using machine learning.',
    icon: Cloud,
    features: ['Resource Right-sizing', 'Cost Forecasting', 'Usage Optimization', 'Reserved Instance Recommendations'],
    pricing: '$2,500 - $12,500/month',
    category: 'Cloud AI',
    popular: true,
    link: 'https://cloudai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered DevOps Automation',
    description: 'Intelligent DevOps pipeline optimization and automation using AI.',
    icon: Settings,
    features: ['Pipeline Optimization', 'Deployment Automation', 'Performance Monitoring', 'Error Prediction'],
    pricing: '$3,500 - $17,500/month',
    category: 'DevOps AI',
    link: 'https://devopsai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Infrastructure Monitoring',
    description: 'Intelligent infrastructure monitoring and alerting using machine learning.',
    icon: Monitor,
    features: ['Anomaly Detection', 'Predictive Alerting', 'Performance Analysis', 'Capacity Planning'],
    pricing: '$1,500 - $7,500/month',
    category: 'Infrastructure AI',
    link: 'https://infrastructureai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Log Analysis',
    description: 'Intelligent log analysis and correlation using machine learning algorithms.',
    icon: FileText,
    features: ['Log Correlation', 'Anomaly Detection', 'Pattern Recognition', 'Incident Analysis'],
    pricing: '$1,000 - $5,000/month',
    category: 'Log Analysis AI',
    link: 'https://loganalysisai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Performance Optimization',
    description: 'Intelligent application and system performance optimization using AI.',
    icon: TrendingUp,
    features: ['Performance Analysis', 'Bottleneck Detection', 'Optimization Recommendations', 'Load Testing'],
    pricing: '$2,000 - $10,000/month',
    category: 'Performance AI',
    link: 'https://performanceai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Security Orchestration',
    description: 'Intelligent security orchestration and automated response using AI.',
    icon: Shield,
    features: ['Incident Response', 'Threat Hunting', 'Security Orchestration', 'Automated Remediation'],
    pricing: '$5,000 - $25,000/month',
    category: 'Security Orchestration AI',
    popular: true,
    link: 'https://securityorchestrationai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Compliance Management',
    description: 'Intelligent compliance monitoring and management using machine learning.',
    icon: FileText,
    features: ['Compliance Monitoring', 'Risk Assessment', 'Policy Enforcement', 'Audit Automation'],
    pricing: '$3,000 - $15,000/month',
    category: 'Compliance AI',
    link: 'https://complianceai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Data Governance',
    description: 'Intelligent data governance and management using AI algorithms.',
    icon: Database,
    features: ['Data Classification', 'Privacy Protection', 'Data Quality', 'Governance Automation'],
    pricing: '$2,500 - $12,500/month',
    category: 'Data Governance AI',
    link: 'https://datagovernanceai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Backup & Recovery',
    description: 'Intelligent backup and disaster recovery using machine learning.',
    icon: HardDrive,
    features: ['Backup Optimization', 'Recovery Planning', 'Data Deduplication', 'RTO/RPO Optimization'],
    pricing: '$1,500 - $7,500/month',
    category: 'Backup AI',
    link: 'https://backupai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Capacity Planning',
    description: 'Intelligent capacity planning and resource forecasting using AI.',
    icon: BarChart3,
    features: ['Demand Forecasting', 'Resource Planning', 'Capacity Optimization', 'Cost Analysis'],
    pricing: '$2,000 - $10,000/month',
    category: 'Capacity Planning AI',
    link: 'https://capacityplanningai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Change Management',
    description: 'Intelligent change management and impact analysis using machine learning.',
    icon: Settings,
    features: ['Change Impact Analysis', 'Risk Assessment', 'Rollback Planning', 'Change Automation'],
    pricing: '$1,500 - $7,500/month',
    category: 'Change Management AI',
    link: 'https://changemanagementai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Service Level Management',
    description: 'Intelligent SLA monitoring and management using AI algorithms.',
    icon: Clock,
    features: ['SLA Monitoring', 'Performance Prediction', 'Service Optimization', 'Incident Prevention'],
    pricing: '$1,000 - $5,000/month',
    category: 'SLA Management AI',
    link: 'https://slamanagementai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Vendor Management',
    description: 'Intelligent vendor performance monitoring and management using AI.',
    icon: Users,
    features: ['Vendor Performance Analysis', 'Risk Assessment', 'Contract Optimization', 'Relationship Management'],
    pricing: '$2,000 - $10,000/month',
    category: 'Vendor Management AI',
    link: 'https://vendormanagementai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Knowledge Management',
    description: 'Intelligent knowledge base creation and management using machine learning.',
    icon: BookOpen,
    features: ['Knowledge Extraction', 'Content Organization', 'Search Optimization', 'Expertise Mapping'],
    pricing: '$1,500 - $7,500/month',
    category: 'Knowledge Management AI',
    link: 'https://knowledgemanagementai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Training & Development',
    description: 'Intelligent employee training and development using AI algorithms.',
    icon: Users,
    features: ['Skill Assessment', 'Personalized Learning', 'Progress Tracking', 'Competency Mapping'],
    pricing: '$2,000 - $10,000/month',
    category: 'Training AI',
    link: 'https://trainingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Project Management',
    description: 'Intelligent project planning and management using machine learning.',
    icon: Kanban,
    features: ['Project Planning', 'Resource Allocation', 'Risk Assessment', 'Timeline Optimization'],
    pricing: '$2,500 - $12,500/month',
    category: 'Project Management AI',
    link: 'https://projectmanagementai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Quality Assurance',
    description: 'Intelligent quality assurance and testing using AI algorithms.',
    icon: CheckCircle,
    features: ['Quality Prediction', 'Defect Detection', 'Test Optimization', 'Quality Metrics'],
    pricing: '$1,500 - $7,500/month',
    category: 'Quality Assurance AI',
    link: 'https://qualityassuranceai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Innovation Management',
    description: 'Intelligent innovation and idea management using machine learning.',
    icon: Lightbulb,
    features: ['Idea Analysis', 'Innovation Tracking', 'Patent Analysis', 'Technology Scouting'],
    pricing: '$3,000 - $15,000/month',
    category: 'Innovation AI',
    link: 'https://innovationai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Sustainability Management',
    description: 'Intelligent sustainability monitoring and optimization using AI.',
    icon: Sprout,
    features: ['Carbon Footprint Analysis', 'Energy Optimization', 'Sustainability Metrics', 'Green Technology'],
    pricing: '$2,500 - $12,500/month',
    category: 'Sustainability AI',
    link: 'https://sustainabilityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Risk Management',
    description: 'Intelligent risk assessment and management using machine learning.',
    icon: Shield,
    features: ['Risk Assessment', 'Threat Modeling', 'Mitigation Planning', 'Risk Monitoring'],
    pricing: '$3,000 - $15,000/month',
    category: 'Risk Management AI',
    link: 'https://riskmanagementai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Business Continuity',
    description: 'Intelligent business continuity planning and management using AI.',
    icon: Shield,
    features: ['Continuity Planning', 'Disaster Recovery', 'Business Impact Analysis', 'Recovery Optimization'],
    pricing: '$2,500 - $12,500/month',
    category: 'Business Continuity AI',
    link: 'https://businesscontinuityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Digital Transformation',
    description: 'Intelligent digital transformation strategy and implementation using AI.',
    icon: Zap,
    features: ['Transformation Planning', 'Technology Assessment', 'Change Management', 'ROI Optimization'],
    pricing: '$5,000 - $25,000/month',
    category: 'Digital Transformation AI',
    popular: true,
    link: 'https://digitaltransformationai.ziontechgroup.com'
  }
];
const industries = [{ name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
=======
>>>>>>> main
  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];
<<<<<<< HEAD
const benefits = [{
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

const aiServices = [
  {
    title: 'AI-Powered Healthcare Diagnostics',
    description: 'Medical image analysis, diagnosis assistance, and treatment recommendations.',
    icon: Heart,
    features: ['Medical Imaging', 'Diagnosis Support', 'Treatment Planning', 'Drug Discovery'],
    pricing: '$7,500 - $37,500/month',
    category: 'Healthcare',
    popular: true,
    link: 'https://healthcareai.ziontechgroup.com'
  },
  {
    title: 'Intelligent Cybersecurity AI',
    description: 'AI-powered threat detection, vulnerability assessment, and security automation.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Security Automation'],
    pricing: '$3,000 - $15,000/month',
    category: 'Cybersecurity',
    link: 'https://cybersecurityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Research',
    description: 'Intelligent legal document analysis, case law research, and contract review.',
    icon: Scale,
    features: ['Document Analysis', 'Case Law Research', 'Contract Review', 'Legal Precedent'],
    pricing: '$2,500 - $12,500/month',
    category: 'Legal Tech',
    link: 'https://legalai.ziontechgroup.com'
  },
  {
    title: 'Intelligent Energy Management',
    description: 'AI-driven energy consumption optimization and renewable energy integration.',
    icon: Zap,
    features: ['Energy Forecasting', 'Consumption Optimization', 'Grid Management', 'Renewable Integration'],
    pricing: '$2,000 - $10,000/month',
    category: 'Energy',
    link: 'https://energyai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Real Estate Analysis',
    description: 'Property valuation, market analysis, and investment recommendations using AI.',
    icon: Home,
    features: ['Property Valuation', 'Market Analysis', 'Investment Insights', 'Risk Assessment'],
    pricing: '$1,500 - $7,500/month',
    category: 'Real Estate',
    link: 'https://realestateai.ziontechgroup.com'
  },
  {
    title: 'Intelligent Manufacturing AI',
    description: 'AI-driven manufacturing optimization, quality control, and predictive maintenance.',
    icon: Settings,
    features: ['Quality Control', 'Production Optimization', 'Predictive Maintenance', 'Supply Chain'],
    pricing: '$5,000 - $25,000/month',
    category: 'Manufacturing',
    popular: true,
    link: 'https://manufacturingai.ziontechgroup.com'
=======
=======
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
<<<<<<< HEAD
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer Service, Content, Legal, Healthcare'
  },
  {
    id: 4,
    title: 'Predictive Analytics',
    description: 'Advanced predictive modeling for forecasting, risk assessment, and business intelligence.',
    icon: TrendingUp,
    category: 'Analytics',
    price: 'Starting at $3,000/month',
    features: [
      'Demand forecasting & planning',
      'Risk assessment & management',
      'Customer behavior prediction',
      'Market trend analysis',
      'Financial modeling',
      'Supply chain optimization',
      'Churn prediction',
      'Revenue forecasting'
    ],
    benefits: [
      'Improve accuracy by 60-80%',
      'Reduce costs by 25-40%',
      'Increase revenue by 15-30%',
      'Better decision making'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Finance, Retail, Manufacturing, Healthcare'
  },
  {
    id: 5,
    title: 'AI-Powered Chatbots',
    description: 'Intelligent conversational AI for customer service, sales, and support automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Natural language understanding',
      'Multi-channel deployment',
      'Context-aware conversations',
      'Integration with CRM systems',
      'Analytics & reporting',
      'Voice & text support',
      'Custom personality design',
      'Escalation to human agents'
    ],
    benefits: [
      'Reduce support costs by 60%',
      '24/7 customer availability',
      'Improve response time by 90%',
      'Increase customer satisfaction'
    ],
<<<<<<< HEAD
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Customer service'
=======
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Education'
>>>>>>> main
  },

  // Advanced AI Services
  {
    id: 6,
<<<<<<< HEAD
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
>>>>>>> main
  },

  // AI E-commerce & Retail
  {
<<<<<<< HEAD
    title: 'AI Recommendation Engine',
    description: 'Intelligent product recommendation system with personalization, cross-selling, and upselling capabilities.',
    icon: ShoppingCart,
    features: ['Product Recommendations', 'Personalization', 'Cross-selling', 'Upselling', 'Behavior Analysis'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI E-commerce',
    benefits: ['Increased Sales', 'Better Customer Experience', 'Personalization', 'Revenue Growth'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/ai-recommendation-engine'
  },
  {
    title: 'AI Price Optimization',
    description: 'Dynamic pricing optimization using AI for competitive analysis, demand forecasting, and revenue maximization.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Competitive Analysis', 'Demand Forecasting', 'Revenue Optimization', 'A/B Testing'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI E-commerce',
    benefits: ['Revenue Optimization', 'Competitive Advantage', 'Better Margins', 'Market Responsiveness'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-price-optimization'
  },
  {
    title: 'AI Inventory Management',
    description: 'Intelligent inventory management with demand forecasting, automated reordering, and optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Inventory Optimization', 'Supplier Integration', 'Analytics'],
    pricing: '$6,000 - $30,000/project',
    category: 'AI E-commerce',
    benefits: ['Reduced Stockouts', 'Lower Costs', 'Better Planning', 'Automated Management'],
    marketPrice: '$10,000 - $50,000/project',
    link: 'https://ziontechgroup.com/ai-inventory-management'
  },

  // AI Education & Training
  {
    title: 'AI Personalized Learning',
    description: 'Adaptive learning platform with AI-powered personalization, skill assessment, and progress tracking.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Skill Assessment', 'Progress Tracking', 'Personalized Content', 'Performance Analytics'],
    pricing: '$10,000 - $50,000/project',
    category: 'AI Education',
    benefits: ['Personalized Learning', 'Better Outcomes', 'Progress Tracking', 'Engagement'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-personalized-learning'
  },
  {
    title: 'AI Tutoring System',
    description: 'Intelligent tutoring system with personalized instruction, assessment, and feedback capabilities.',
    icon: GraduationCap,
    features: ['Personalized Instruction', 'Adaptive Assessment', 'Real-time Feedback', 'Progress Monitoring', 'Skill Development'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI Education',
    benefits: ['Personalized Instruction', 'Better Learning', '24/7 Availability', 'Consistent Quality'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-tutoring-system'
  },

  // AI Manufacturing & Industry
  {
    title: 'AI Predictive Maintenance',
    description: 'Intelligent predictive maintenance with equipment monitoring, failure prediction, and optimization.',
    icon: Wrench,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Optimization', 'Cost Reduction', 'Uptime Improvement'],
    pricing: '$15,000 - $75,000/project',
    category: 'AI Manufacturing',
    benefits: ['Reduced Downtime', 'Cost Savings', 'Better Planning', 'Equipment Longevity'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/ai-predictive-maintenance'
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain optimization with demand forecasting, logistics optimization, and risk management.',
    icon: Truck,
    features: ['Demand Forecasting', 'Logistics Optimization', 'Risk Management', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$20,000 - $100,000/project',
    category: 'AI Manufacturing',
    benefits: ['Cost Reduction', 'Better Efficiency', 'Risk Mitigation', 'Performance Improvement'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-supply-chain-optimization'
  },

  // AI Research & Development
  {
    title: 'AI Research Assistant',
    description: 'Intelligent research assistant with literature analysis, hypothesis generation, and data synthesis.',
    icon: Search,
    features: ['Literature Analysis', 'Hypothesis Generation', 'Data Synthesis', 'Research Automation', 'Knowledge Discovery'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI Research',
    benefits: ['Faster Research', 'Better Insights', 'Automated Analysis', 'Knowledge Discovery'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/ai-research-assistant'
  },
  {
    title: 'AI Data Mining Platform',
    description: 'Advanced data mining platform with pattern recognition, knowledge discovery, and automated insights.',
    icon: Database,
    features: ['Pattern Recognition', 'Knowledge Discovery', 'Automated Insights', 'Data Visualization', 'Statistical Analysis'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI Research',
    benefits: ['Pattern Discovery', 'Knowledge Extraction', 'Automated Analysis', 'Better Insights'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-data-mining'
=======
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
<<<<<<< HEAD
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
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle AI system with perception, planning, and control capabilities.',
    icon: Car,
    features: ['Object Detection', 'Path Planning', 'Decision Making', 'Safety Systems'],
    pricing: '$200,000 - $1,000,000/project',
    category: 'Autonomous Systems',
    popular: true,
    link: 'https://autonomousvehicles.ziontechgroup.com'
  },
  {
    title: 'AI Quantum Computing Optimizer',
    description: 'AI-powered quantum algorithm optimization and quantum machine learning for complex problems.',
    icon: Cpu,
    features: ['Quantum Algorithm Design', 'Optimization Problems', 'Quantum ML', 'Error Correction'],
    pricing: '$50,000 - $200,000/project',
    category: 'Quantum Computing',
    link: 'https://quantumai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Space Mission Planner',
    description: 'Autonomous space mission planning and satellite constellation optimization using advanced AI.',
    icon: Rocket,
    features: ['Mission Planning', 'Orbit Optimization', 'Resource Allocation', 'Risk Assessment'],
    pricing: '$100,000 - $500,000/project',
    category: 'Aerospace AI',
    link: 'https://spaceai.ziontechgroup.com'
  },
  {
    title: 'AI Smart City Controller',
    description: 'Intelligent city management system with traffic optimization, energy management, and public safety.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Waste Management', 'Public Safety'],
    pricing: '$150,000 - $750,000/project',
    category: 'Smart Cities',
    link: 'https://smartcityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Agricultural Optimizer',
    description: 'Precision agriculture with AI-driven crop optimization, yield prediction, and resource management.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$30,000 - $150,000/project',
    category: 'Agriculture AI',
    link: 'https://agricultureai.ziontechgroup.com'
  },
  {
    title: 'AI Mental Health Companion Pro',
    description: 'Advanced AI-powered mental health support with mood tracking and therapeutic interventions.',
    icon: Heart,
    features: ['Mood Analysis', 'Therapeutic Chat', 'Crisis Detection', 'Progress Tracking'],
    pricing: '$5,000 - $25,000/setup',
    category: 'HealthTech AI',
    popular: true,
    link: 'https://mentalhealthai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Energy Grid Optimizer',
    description: 'Intelligent energy grid management with demand forecasting and renewable integration.',
    icon: Zap,
    features: ['Demand Forecasting', 'Grid Optimization', 'Renewable Integration', 'Load Balancing'],
    pricing: '$75,000 - $375,000/project',
    category: 'Energy AI',
    link: 'https://energygridai.ziontechgroup.com'
  },
  {
    title: 'AI Blockchain Security Auditor Pro',
    description: 'Advanced automated smart contract auditing and blockchain security analysis with AI.',
    icon: Shield,
    features: ['Smart Contract Analysis', 'Vulnerability Detection', 'Security Auditing', 'Compliance Checking'],
    pricing: '$10,000 - $50,000/project',
    category: 'Blockchain AI',
    popular: true,
    link: 'https://blockchainsecurity.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Language Translator Pro',
    description: 'Advanced real-time translation with cultural context and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Adaptation', 'Industry Terms', 'Voice Translation'],
    pricing: '$0.02 - $0.10 per 1000 characters',
    category: 'Language AI',
    link: 'https://translationai.ziontechgroup.com'
  },
  {
    title: 'AI Creative Design Assistant Pro',
    description: 'Advanced AI-powered creative design tool for graphics, videos, and multimedia content.',
    icon: Image,
    features: ['Graphic Design', 'Video Editing', '3D Modeling', 'Brand Consistency'],
    pricing: '$2,000 - $10,000/month',
    category: 'Creative AI',
    link: 'https://creativedesignai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Investment Advisor Pro',
    description: 'Advanced personalized investment recommendations with risk assessment and portfolio optimization.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Market Analysis', 'Investment Strategies'],
    pricing: '$5,000 - $25,000/month',
    category: 'FinTech AI',
    popular: true,
    link: 'https://investmentai.ziontechgroup.com'
  },
  {
    title: 'AI Smart Home Controller Pro',
    description: 'Advanced intelligent home automation with learning capabilities and energy optimization.',
    icon: Home,
    features: ['Device Control', 'Energy Optimization', 'Learning Patterns', 'Voice Commands'],
    pricing: '$2,000 - $10,000/setup',
    category: 'Smart Home AI',
    link: 'https://smarthomeai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Educational Tutor Pro',
    description: 'Advanced personalized learning assistant with adaptive curriculum and progress tracking.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Progress Tracking', 'Personalized Content', 'Assessment Tools'],
    pricing: '$500 - $2,500/month',
    category: 'EdTech AI',
    link: 'https://educationai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Medical Imaging Analysis Pro',
    description: 'Advanced medical imaging analysis for radiology and diagnostic support with AI.',
    icon: Eye,
    features: ['X-ray Analysis', 'MRI Interpretation', 'CT Scan Analysis', 'Pathology Detection'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Medical AI',
    popular: true,
    link: 'https://medicalimagingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity Analyst Pro',
    description: 'Advanced automated threat detection and response with behavioral analysis and incident management.',
    icon: Shield,
    features: ['Threat Hunting', 'Incident Response', 'Vulnerability Assessment', 'Security Orchestration'],
    pricing: '$10,000 - $50,000/month',
    category: 'Cybersecurity AI',
    popular: true,
    link: 'https://cybersecurityai.ziontechgroup.com'
  },
  {
    title: 'AI Climate Change Predictor Pro',
    description: 'Advanced climate modeling and environmental impact prediction using machine learning.',
    icon: Globe,
    features: ['Weather Forecasting', 'Climate Modeling', 'Environmental Impact', 'Risk Assessment'],
    pricing: '$50,000 - $250,000/project',
    category: 'Environmental AI',
    link: 'https://climateai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Research Assistant Pro',
    description: 'Advanced intelligent legal research and case law analysis with natural language processing.',
    icon: FileText,
    features: ['Case Law Analysis', 'Legal Document Review', 'Precedent Research', 'Contract Analysis'],
    pricing: '$5,000 - $25,000/month',
    category: 'Legal AI',
    popular: true,
    link: 'https://legalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Manufacturing Optimization Pro',
    description: 'Advanced intelligent manufacturing process optimization and quality control using AI.',
    icon: Settings,
    features: ['Process Optimization', 'Quality Control', 'Predictive Maintenance', 'Defect Detection'],
    pricing: '$25,000 - $125,000/month',
    category: 'Manufacturing AI',
    link: 'https://manufacturingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Real Estate Analysis Pro',
    description: 'Advanced AI platform for real estate market analysis and property valuation.',
    icon: Home,
    features: ['Market Analysis', 'Property Valuation', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$10,000 - $50,000/month',
    category: 'Real Estate AI',
    link: 'https://realestateai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Supply Chain Optimization Pro',
    description: 'Advanced intelligent supply chain management with predictive analytics and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis'],
    pricing: '$30,000 - $150,000/project',
    category: 'Supply Chain AI',
    popular: true,
    link: 'https://supplychainai.ziontechgroup.com'
>>>>>>> main
>>>>>>> main
  }
];

const categories = [
<<<<<<< HEAD
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
  { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length },
  { name: 'Cybersecurity AI', count: aiServices.filter(s => s.category === 'Cybersecurity AI').length },
  { name: 'Healthcare AI', count: aiServices.filter(s => s.category === 'Healthcare AI').length },
  { name: 'Autonomous Systems', count: aiServices.filter(s => s.category === 'Autonomous Systems').length },
  { name: 'Quantum AI', count: aiServices.filter(s => s.category === 'Quantum AI').length },
  { name: 'Environmental AI', count: aiServices.filter(s => s.category === 'Environmental AI').length },
  { name: 'Space AI', count: aiServices.filter(s => s.category === 'Space AI').length },
  { name: 'FinTech AI', count: aiServices.filter(s => s.category === 'FinTech AI').length },
  { name: 'Smart City AI', count: aiServices.filter(s => s.category === 'Smart City AI').length },
  { name: 'AgTech AI', count: aiServices.filter(s => s.category === 'AgTech AI').length }
=======
  'All',
  'AI Automation',
  'AI Analytics',
  'Computer Vision',
  'Natural Language Processing',
  'Voice AI',
  'AI Security',
  'AI Healthcare',
  'AI Finance',
  'AI E-commerce',
  'AI Education',
  'AI Manufacturing',
  'AI Research'
>>>>>>> main
];

<<<<<<< HEAD
export default function AiServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 80+ Cutting-Edge AI Solutions</title>
        <meta name="description" content="Discover 80+ cutting-edge AI services from Zion Tech Group. Machine learning, computer vision, NLP, automation, and advanced AI solutions for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, AI automation, artificial intelligence, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="80+ cutting-edge AI services including machine learning, computer vision, NLP, and advanced AI solutions for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              AI Services & Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              80+ cutting-edge AI services designed to transform your business with artificial intelligence, 
              machine learning, and advanced automation solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">80+</div>
                <div className="text-gray-300">AI Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">AI Projects</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive suite of AI services designed to solve complex business challenges 
                with cutting-edge artificial intelligence and machine learning solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    {service.popular && (
                      <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded-full mb-2">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
=======
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
=======
    id: 14,
    title: 'AI Energy & Utilities',
    description: 'AI solutions for energy management, grid optimization, and renewable energy integration.',
>>>>>>> main
>>>>>>> main
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
=======
    title: 'Computer Vision for Manufacturing',
    description: 'Quality control, defect detection, and automated inspection systems for manufacturing.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $4,000/month',
    features: [
      'Defect detection & classification',
      'Quality control automation',
      'Assembly line monitoring',
      'Product counting & tracking',
      'Dimensional measurement',
      'Surface inspection',
      'Real-time alerts',
      'Integration with production systems'
    ],
    benefits: [
      'Reduce defects by 95%',
      'Increase production efficiency by 30%',
      'Lower inspection costs by 70%',
      '24/7 quality monitoring'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Automotive, Electronics, Food & Beverage'
  },
  {
    id: 7,
    title: 'AI-Powered Recommendation Systems',
    description: 'Personalized recommendation engines for e-commerce, content, and services.',
    icon: Target,
    category: 'Recommendation Systems',
    price: 'Starting at $2,500/month',
    features: [
      'Personalized product recommendations',
      'Content recommendation',
      'Cross-selling & upselling',
      'Real-time personalization',
      'A/B testing & optimization',
      'Multi-channel recommendations',
      'Cold start problem solving',
      'Performance analytics'
    ],
    benefits: [
      'Increase conversion rates by 25-40%',
      'Boost average order value by 20-35%',
      'Improve customer engagement',
      'Reduce bounce rates'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Media, Travel, Entertainment'
  },
  {
    id: 8,
    title: 'AI-Powered Document Processing',
    description: 'Intelligent document analysis, extraction, and processing for business automation.',
    icon: FileText,
    category: 'Document AI',
    price: 'Starting at $2,000/month',
    features: [
      'OCR & text extraction',
      'Document classification',
      'Data extraction & validation',
      'Invoice processing',
      'Contract analysis',
      'Compliance checking',
      'Multi-format support',
      'Workflow automation'
    ],
    benefits: [
      'Process documents 10x faster',
      'Reduce manual errors by 90%',
      'Lower processing costs by 60%',
      'Improve accuracy by 95%'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Legal, Finance, Insurance, Healthcare'
  },
  {
    id: 9,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems for financial and e-commerce security.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $3,500/month',
    features: [
      'Real-time fraud detection',
      'Anomaly detection',
      'Risk scoring & assessment',
      'Transaction monitoring',
      'Behavioral analysis',
      'Pattern recognition',
      'False positive reduction',
      'Integration with payment systems'
    ],
    benefits: [
      'Reduce fraud losses by 80-90%',
      'Decrease false positives by 60%',
      'Real-time protection',
      'Compliance with regulations'
    ],
    marketPrice: '$5,000-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Fintech'
  },
  {
    id: 10,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management and optimization for improved efficiency.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $4,500/month',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Cost optimization',
      'Quality prediction',
      'Sustainability tracking',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce costs by 20-30%',
      'Improve delivery times by 25%',
      'Optimize inventory levels',
      'Enhance sustainability'
    ],
    marketPrice: '$7,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Automotive'
  },
  {
    id: 11,
    title: 'AI-Powered Healthcare Diagnostics',
    description: 'Medical image analysis, diagnostic assistance, and healthcare AI solutions.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,000/month',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Drug discovery support',
      'Patient monitoring',
      'Treatment recommendations',
      'Clinical decision support',
      'Electronic health records',
      'Compliance & privacy'
    ],
    benefits: [
      'Improve diagnostic accuracy by 40%',
      'Reduce diagnosis time by 50%',
      'Lower healthcare costs',
      'Better patient outcomes'
    ],
    marketPrice: '$8,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Hospitals, Clinics, Medical Research, Pharmaceuticals'
  },
  {
    id: 12,
    title: 'AI-Powered Marketing Automation',
    description: 'Intelligent marketing campaigns, customer segmentation, and automated marketing.',
    icon: Mail,
    category: 'Marketing AI',
    price: 'Starting at $2,200/month',
    features: [
      'Customer segmentation',
      'Campaign optimization',
      'Content personalization',
      'Lead scoring',
      'Email marketing automation',
      'Social media management',
      'Ad optimization',
      'Performance analytics'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Reduce marketing costs by 40%',
      'Improve customer engagement',
      'Better ROI tracking'
    ],
    marketPrice: '$3,500-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing, E-commerce, SaaS, Agencies'
  },
  {
    id: 13,
    title: 'AI-Powered Voice Analytics',
    description: 'Voice analysis, emotion detection, and speech analytics for customer insights.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,800/month',
    features: [
      'Voice emotion analysis',
      'Speech-to-text conversion',
      'Call sentiment analysis',
      'Speaker identification',
      'Conversation analytics',
      'Quality monitoring',
      'Real-time transcription',
      'Compliance recording'
    ],
    benefits: [
      'Improve customer experience',
      'Better call quality monitoring',
      'Reduce compliance risks',
      'Enhanced training insights'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Call Centers, Customer Service, Sales, Healthcare'
  },
  {
    id: 14,
    title: 'AI-Powered Content Generation',
    description: 'Automated content creation, copywriting, and creative AI solutions.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,800/month',
    features: [
      'Automated copywriting',
      'Content optimization',
      'SEO content generation',
      'Social media posts',
      'Email campaigns',
      'Product descriptions',
      'Blog article generation',
      'Content personalization'
    ],
    benefits: [
      'Reduce content creation time by 80%',
      'Scale content production',
      'Improve SEO performance',
      'Consistent brand voice'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Marketing, E-commerce, Media, Agencies'
  },
  {
    id: 15,
    title: 'AI-Powered Process Automation',
    description: 'Intelligent process automation and workflow optimization using AI.',
    icon: Zap,
    category: 'Process AI',
    price: 'Starting at $2,500/month',
    features: [
      'Workflow automation',
      'Process optimization',
      'Task prioritization',
      'Resource allocation',
      'Exception handling',
      'Performance monitoring',
      'Predictive maintenance',
      'Integration capabilities'
    ],
    benefits: [
      'Increase efficiency by 50%',
      'Reduce operational costs by 30%',
      'Improve accuracy by 90%',
      'Better resource utilization'
    ],
    marketPrice: '$4,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Finance, Healthcare, Logistics'
  },
  {
    id: 16,
    title: 'AI-Powered Data Analytics',
    description: 'Advanced data analytics, insights generation, and business intelligence.',
    icon: BarChart3,
    category: 'Analytics AI',
    price: 'Starting at $3,200/month',
    features: [
      'Automated insights generation',
      'Pattern recognition',
      'Anomaly detection',
      'Predictive modeling',
      'Data visualization',
      'Real-time analytics',
      'Custom dashboards',
      'API integration'
    ],
    benefits: [
      'Discover hidden insights',
      'Make data-driven decisions',
      'Reduce analysis time by 70%',
      'Improve business performance'
    ],
    marketPrice: '$5,000-15,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Finance, Retail, Manufacturing, Healthcare'
  },
  {
    id: 17,
    title: 'AI-Powered Customer Service',
    description: 'Intelligent customer service automation and support optimization.',
    icon: Users,
    category: 'Customer Service AI',
    price: 'Starting at $2,000/month',
    features: [
      'Intelligent ticket routing',
      'Automated responses',
      'Sentiment analysis',
      'Customer journey mapping',
      'Performance analytics',
      'Multi-channel support',
      'Escalation management',
      'Knowledge base integration'
    ],
    benefits: [
      'Improve response times by 60%',
      'Increase customer satisfaction',
      'Reduce support costs by 50%',
      'Better issue resolution'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, SaaS, Healthcare, Finance'
  },
  {
    id: 18,
    title: 'AI-Powered Image Recognition',
    description: 'Advanced image recognition and classification for various business applications.',
    icon: Camera,
    category: 'Image AI',
    price: 'Starting at $2,200/month',
    features: [
      'Object detection & recognition',
      'Image classification',
      'Facial recognition',
      'Brand logo detection',
      'Quality assessment',
      'Content moderation',
      'Search & retrieval',
      'Custom model training'
    ],
    benefits: [
      'Automate visual tasks',
      'Improve accuracy by 95%',
      'Reduce manual work by 80%',
      'Enable new capabilities'
    ],
    marketPrice: '$3,500-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Retail, Security, Media, Manufacturing'
  },
  {
    id: 19,
    title: 'AI-Powered Financial Analysis',
    description: 'Intelligent financial analysis, risk assessment, and investment insights.',
    icon: DollarSign,
    category: 'Finance AI',
    price: 'Starting at $4,000/month',
    features: [
      'Financial forecasting',
      'Risk assessment',
      'Investment analysis',
      'Credit scoring',
      'Fraud detection',
      'Market analysis',
      'Portfolio optimization',
      'Regulatory compliance'
    ],
    benefits: [
      'Improve investment returns',
      'Reduce financial risks',
      'Automate analysis processes',
      'Better decision making'
    ],
    marketPrice: '$6,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banking, Investment, Insurance, Fintech'
  },
  {
    id: 20,
    title: 'AI-Powered Autonomous Systems',
    description: 'Autonomous vehicle systems, robotics, and intelligent automation solutions.',
    icon: Car,
    category: 'Autonomous AI',
    price: 'Starting at $8,000/month',
    features: [
      'Autonomous navigation',
      'Object detection & avoidance',
      'Path planning',
      'Sensor fusion',
      'Real-time decision making',
      'Safety systems',
      'Performance optimization',
      'Integration capabilities'
    ],
    benefits: [
      'Enable autonomous operations',
      'Improve safety & efficiency',
      'Reduce operational costs',
      '24/7 operation capability'
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Automotive, Logistics, Manufacturing, Agriculture'
  },
  {
    id: 21,
    title: 'AI-Powered Code Generation',
    description: 'Intelligent code generation, debugging, and software development assistance.',
    icon: Code,
    category: 'Development AI',
    price: 'Starting at $2,800/month',
    features: [
      'Automated code generation',
      'Bug detection & fixing',
      'Code optimization',
      'Documentation generation',
      'Test case creation',
      'Code review assistance',
      'Refactoring suggestions',
      'Multi-language support'
    ],
    benefits: [
      'Reduce development time by 60%',
      'Improve code quality',
      'Faster bug resolution',
      'Better documentation'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Software Development, IT Services, Tech Companies'
  },
  {
    id: 22,
    title: 'AI-Powered Energy Management',
    description: 'Smart energy optimization and sustainability solutions for businesses.',
    icon: Droplets,
    category: 'Energy AI',
    price: 'Starting at $3,500/month',
    features: [
      'Energy consumption analysis',
      'Predictive maintenance',
      'Load optimization',
      'Renewable energy integration',
      'Carbon footprint tracking',
      'Cost optimization',
      'Real-time monitoring',
>>>>>>> main
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce energy costs by 25%',
<<<<<<< HEAD
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
=======
      'Improve sustainability',
      'Optimize energy usage',
      'Better environmental compliance'
    ],
    marketPrice: '$5,500-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Real Estate, Utilities, Data Centers'
  },
  {
    id: 23,
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document processing, contract analysis, and compliance monitoring.',
    icon: FileText,
    category: 'Legal AI',
    price: 'Starting at $4,200/month',
    features: [
      'Contract analysis',
      'Legal document review',
      'Compliance monitoring',
      'Risk assessment',
      'Due diligence automation',
      'Legal research assistance',
      'Document classification',
      'Clause extraction'
    ],
    benefits: [
      'Reduce review time by 80%',
      'Improve accuracy by 95%',
      'Lower legal costs',
      'Better risk management'
    ],
    marketPrice: '$6,500-18,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Law Firms, Corporate Legal, Compliance, Insurance'
  },
  {
    id: 24,
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization and recommendation systems for enhanced user experience.',
    icon: Target,
    category: 'Personalization AI',
    price: 'Starting at $3,000/month',
    features: [
      'User behavior analysis',
      'Personalized content delivery',
      'Dynamic pricing optimization',
      'Cross-channel personalization',
      'A/B testing automation',
      'Real-time adaptation',
      'Privacy-compliant tracking',
      'Performance analytics'
    ],
    benefits: [
      'Increase engagement by 40%',
      'Boost conversion rates by 35%',
      'Improve customer satisfaction',
      'Better user experience'
    ],
    marketPrice: '$4,800-12,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Retail'
  },
  {
    id: 25,
    title: 'AI-Powered Quality Assurance',
    description: 'Intelligent quality control and testing automation for products and services.',
    icon: CheckCircle,
    category: 'Quality AI',
    price: 'Starting at $2,500/month',
    features: [
      'Automated testing',
      'Defect detection',
      'Quality prediction',
      'Process optimization',
      'Statistical analysis',
      'Root cause analysis',
      'Performance monitoring',
      'Compliance checking'
    ],
    benefits: [
      'Improve quality by 50%',
      'Reduce defects by 70%',
      'Lower testing costs',
      'Faster time to market'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Manufacturing, Software, Healthcare, Food & Beverage'
  },
  {
    id: 26,
    title: 'AI-Powered Talent Acquisition',
    description: 'Intelligent recruitment, candidate screening, and HR optimization solutions.',
    icon: Users,
    category: 'HR AI',
    price: 'Starting at $2,200/month',
    features: [
      'Resume screening',
      'Candidate matching',
      'Interview scheduling',
      'Skills assessment',
      'Bias detection',
      'Performance prediction',
      'Retention analysis',
      'Diversity optimization'
    ],
    benefits: [
      'Reduce hiring time by 50%',
      'Improve candidate quality',
      'Reduce bias in hiring',
      'Better retention rates'
    ],
    marketPrice: '$3,500-8,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'HR Departments, Recruitment Agencies, Enterprises'
  },
  {
    id: 27,
    title: 'AI-Powered Real Estate Analytics',
    description: 'Property valuation, market analysis, and real estate investment insights.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $3,800/month',
    features: [
      'Property valuation',
      'Market trend analysis',
      'Investment recommendations',
      'Risk assessment',
      'Price prediction',
      'Neighborhood analysis',
      'Rental yield optimization',
      'Market forecasting'
    ],
    benefits: [
      'Improve investment decisions',
      'Reduce valuation errors',
      'Better market insights',
      'Optimize portfolio performance'
    ],
    marketPrice: '$6,000-16,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Real Estate, Investment, Property Management, Developers'
  },
  {
    id: 28,
    title: 'AI-Powered Gaming Intelligence',
    description: 'Intelligent game development, player behavior analysis, and gaming optimization.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $4,500/month',
    features: [
      'Procedural content generation',
      'Player behavior analysis',
      'Difficulty balancing',
      'Cheat detection',
      'Personalized experiences',
      'Matchmaking optimization',
      'Monetization optimization',
      'Performance analytics'
    ],
    benefits: [
      'Increase player engagement',
      'Reduce development costs',
      'Improve game balance',
      'Better monetization'
    ],
    marketPrice: '$7,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Game Development, Gaming Companies, Esports, Mobile Games'
  },
  {
    id: 29,
    title: 'AI-Powered Climate Analytics',
    description: 'Climate data analysis, environmental monitoring, and sustainability insights.',
    icon: TreePine,
    category: 'Climate AI',
    price: 'Starting at $3,200/month',
    features: [
      'Climate data analysis',
      'Environmental monitoring',
      'Carbon footprint tracking',
      'Weather prediction',
      'Sustainability metrics',
      'Risk assessment',
      'Compliance reporting',
      'Trend analysis'
    ],
    benefits: [
      'Improve sustainability',
      'Reduce environmental impact',
      'Better compliance',
      'Cost optimization'
    ],
    marketPrice: '$5,000-14,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Environmental, Agriculture, Energy, Government'
  },
  {
    id: 30,
    title: 'AI-Powered Voice Cloning',
    description: 'Advanced voice synthesis, cloning, and audio generation for various applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $3,500/month',
    features: [
      'Voice cloning',
      'Text-to-speech synthesis',
      'Voice conversion',
      'Emotion synthesis',
      'Multi-language support',
      'Real-time processing',
      'Voice authentication',
      'Audio enhancement'
    ],
    benefits: [
      'Create realistic voice content',
      'Improve accessibility',
      'Reduce production costs',
      'Enable new applications'
    ],
    marketPrice: '$5,500-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Media, Entertainment, Education, Accessibility'
>>>>>>> main
=======
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing, Media, Entertainment, Design'
  },
  {
    id: 11,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced AI security systems with threat detection, automated response, and predictive security analytics.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $4,800/month',
    features: [
      'Threat detection & prevention',
      'Automated incident response',
      'Behavioral analysis',
      'Vulnerability assessment',
      'Security orchestration',
      'Compliance monitoring',
      'Zero-trust architecture',
      'Predictive security'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 85%',
      'Automate 90% of security tasks',
      'Prevent 99.9% of attacks'
    ],
    marketPrice: '$6,500-13,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Enterprises, Government, Healthcare, Finance'
  },
  {
    id: 12,
    title: 'AI-Powered Personal Assistant',
    description: 'Advanced personal AI assistant with natural language processing, task automation, and intelligent scheduling.',
    icon: Users,
    category: 'Personal AI',
    price: 'Starting at $199/month',
    features: [
      'Natural language understanding',
      'Task automation',
      'Intelligent scheduling',
      'Email management',
      'Research assistance',
      'Voice interaction',
      'Learning & adaptation',
      'Multi-platform integration'
    ],
    benefits: [
      'Increase productivity by 50%',
      'Save 15+ hours per week',
      'Improve task organization',
      'Enable hands-free operation'
    ],
    marketPrice: '$300-600/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Professionals, Executives, Entrepreneurs, Students'
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
<<<<<<< HEAD
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Recommendation Systems", count: aiServices.filter(s => s.category === "Recommendation Systems").length },
  { name: "Document AI", count: aiServices.filter(s => s.category === "Document AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Process AI", count: aiServices.filter(s => s.category === "Process AI").length },
  { name: "Customer Service AI", count: aiServices.filter(s => s.category === "Customer Service AI").length },
  { name: "Image AI", count: aiServices.filter(s => s.category === "Image AI").length },
  { name: "Finance AI", count: aiServices.filter(s => s.category === "Finance AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length },
  { name: "Development AI", count: aiServices.filter(s => s.category === "Development AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "Personalization AI", count: aiServices.filter(s => s.category === "Personalization AI").length },
  { name: "Quality AI", count: aiServices.filter(s => s.category === "Quality AI").length },
  { name: "HR AI", count: aiServices.filter(s => s.category === "HR AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length },
  { name: "Climate AI", count: aiServices.filter(s => s.category === "Climate AI").length }
=======
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Neural Interfaces", count: aiServices.filter(s => s.category === "Neural Interfaces").length },
  { name: "Pharmaceutical AI", count: aiServices.filter(s => s.category === "Pharmaceutical AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Space AI", count: aiServices.filter(s => s.category === "Space AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Creative AI", count: aiServices.filter(s => s.category === "Creative AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Personal AI", count: aiServices.filter(s => s.category === "Personal AI").length }
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <Layout 
      title="AI Services - Zion Tech Group | Machine Learning, Computer Vision & NLP"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and custom AI solutions. Transform your business with cutting-edge AI technology."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, custom AI solutions"
=======
    <Layout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI services including machine learning, computer vision, NLP, and AI consulting. Transform your business with intelligent automation and data-driven insights."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, automation, predictive analytics"
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Advanced AI Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cutting-edge artificial intelligence solutions powered by machine learning, computer vision, 
                and natural language processing. Transform your business with intelligent automation.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free AI Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>

<<<<<<< HEAD
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
>>>>>>> main
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
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
=======
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      )}
                    </div>
                    {service.marketPrice && (
                      <div className="text-xs text-green-600 font-medium mb-1">
                        Save up to 50% vs market rate
                      </div>
                    )}
                    {service.setupTime && (
                      <div className="text-sm text-gray-500">
                        Setup: {service.setupTime}
                      </div>
                    )}
                    {service.targetUsers && (
                      <div className="text-xs text-gray-500 mt-1">
                        Ideal for: {service.targetUsers}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> main
>>>>>>> main
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits?.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      href={service.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/contact"
                      className="flex-1 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Implement AI Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Our AI experts are ready to help you implement cutting-edge artificial intelligence solutions that drive real business value. From machine learning models to computer vision systems, we deliver enterprise-grade AI solutions tailored to your specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Strategy Consultation</h3>
                <p className="text-gray-600 mb-4">Get a comprehensive AI strategy assessment and implementation roadmap for your business.</p>
                <a href="tel:+13024640950" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call: +1 302 464 0950
                </a>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Our AI Team</h3>
                <p className="text-gray-600 mb-4">Send us your AI project requirements and we'll provide a detailed technical proposal.</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our AI Lab</h3>
                <p className="text-gray-600 mb-4">Schedule a visit to our AI research and development facility in Delaware.</p>
                <address className="text-blue-600 font-semibold not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a><br />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">kleber@ziontechgroup.com</a>
                </address>
              </motion.div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Our AI Services?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">100+</div>
                  <div className="text-sm">AI Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">95%</div>
                  <div className="text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                  <div className="text-sm">AI Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">5★</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
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
=======
<<<<<<< HEAD
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
>>>>>>> main
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
=======
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our AI experts to discuss your specific needs and find the perfect 
              artificial intelligence solution for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
              >
                Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/pricing"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
=======

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
>>>>>>> main
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
=======
    description: 'Automatically respond to customer emails with intelligent, context-aware replies.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-Response Generation', 'Multi-language Support'],
    pricing: '$500 - $2,000/month',
    category: 'Communication',
    popular: true,
    benefits: ['Reduces response time by 80%', 'Improves customer satisfaction', 'Saves 20+ hours/week'],
    marketPrice: '$1,200/month',
    link: '/contact'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced AI platform for business forecasting and trend analysis.',
    icon: BarChart3,
    features: ['Machine Learning Models', 'Real-time Analytics', 'Custom Dashboards', 'API Integration'],
    pricing: '$1,000 - $5,000/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Increases accuracy by 40%', 'Reduces forecasting errors', 'Enables data-driven decisions'],
    marketPrice: '$3,000/month',
    link: '/contact'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered chatbot with natural conversation capabilities and multi-channel support.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Multi-channel Support', 'Integration APIs', 'Analytics Dashboard'],
    pricing: '$300 - $1,500/month',
    category: 'Customer Service',
    popular: true,
    benefits: ['Handles 80% of queries automatically', 'Available 24/7', 'Reduces support costs'],
    marketPrice: '$900/month',
    link: '/contact'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'AI-powered image and video analysis for various business applications.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analysis'],
    pricing: '$800 - $3,000/month',
    category: 'Computer Vision',
    popular: false,
    benefits: ['Automates visual inspections', 'Improves accuracy', 'Enables new use cases'],
    marketPrice: '$1,800/month',
    link: '/contact'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation for blogs, social media, and marketing materials.',
    icon: FileText,
    features: ['Text Generation', 'SEO Optimization', 'Multi-format Output', 'Brand Voice Training'],
    pricing: '$200 - $800/month',
    category: 'Content Creation',
    popular: true,
    benefits: ['Saves 15+ hours/week', 'Maintains consistent quality', 'Scales content production'],
    marketPrice: '$500/month',
    link: '/contact'
  },
  {
    title: 'Voice AI Assistant',
    description: 'Intelligent voice assistant for customer service and internal operations.',
    icon: Mic,
    features: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Multi-language Support'],
    pricing: '$600 - $2,500/month',
    category: 'Voice AI',
    popular: false,
    benefits: ['Handles voice queries', 'Improves accessibility', 'Reduces call center load'],
    marketPrice: '$1,500/month',
    link: '/contact'
  },
  {
    title: 'AI Cybersecurity Analyst',
    description: 'AI-powered security monitoring and threat detection system.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Analytics'],
    pricing: '$1,500 - $6,000/month',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Detects threats 10x faster', 'Reduces false positives', 'Provides 24/7 monitoring'],
    marketPrice: '$3,500/month',
    link: '/contact'
  },
  {
    title: 'AI Medical Imaging Analysis',
    description: 'AI-powered medical image analysis for diagnostic support and screening.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Diagnostic Support', 'Screening Automation', 'Report Generation'],
    pricing: '$2,000 - $8,000/month',
    category: 'Healthcare',
    popular: false,
    benefits: ['Improves diagnostic accuracy', 'Reduces analysis time', 'Enables early detection'],
    marketPrice: '$5,000/month',
    link: '/contact'
  },
  {
    title: 'AI Legal Research Assistant',
    description: 'Intelligent legal research platform with case law analysis and document review.',
    icon: BookOpen,
    features: ['Case Law Analysis', 'Document Review', 'Legal Research', 'Compliance Checking'],
    pricing: '$1,200 - $4,000/month',
    category: 'Legal Tech',
    popular: false,
    benefits: ['Saves research time', 'Improves accuracy', 'Reduces legal costs'],
    marketPrice: '$2,500/month',
    link: '/contact'
  },
  {
    title: 'AI Climate Change Predictor',
    description: 'AI system for climate modeling and environmental impact prediction.',
    icon: Globe,
    features: ['Climate Modeling', 'Impact Prediction', 'Data Visualization', 'Trend Analysis'],
    pricing: '$3,000 - $10,000/month',
    category: 'Environmental',
    popular: false,
    benefits: ['Improves climate predictions', 'Enables better planning', 'Supports sustainability goals'],
    marketPrice: '$6,500/month',
    link: '/contact'
  },
  {
    title: 'AI Autonomous Vehicle System',
    description: 'Advanced autonomous vehicle systems with computer vision and decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000/project',
    category: 'Autonomous Systems',
    popular: true,
    benefits: ['Improves safety', 'Reduces accidents', 'Enables new mobility solutions'],
    marketPrice: '$300,000/project',
    link: '/contact'
  },
  {
    title: 'AI Quantum Computing Integration',
    description: 'Quantum-enhanced AI algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Machine Learning', 'Optimization Algorithms', 'Cryptography', 'Simulation'],
    pricing: '$50,000 - $200,000/project',
    category: 'Quantum AI',
    popular: false,
    benefits: ['Solves complex problems', 'Improves performance', 'Enables new applications'],
    marketPrice: '$125,000/project',
    link: '/contact'
  },
  {
    title: 'AI Digital Twin Platform',
    description: 'AI-powered digital twin creation and simulation platform.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analysis', 'Virtual Testing'],
    pricing: '$20,000 - $100,000/project',
    category: 'Digital Twin',
    popular: false,
    benefits: ['Reduces physical testing', 'Improves design', 'Enables optimization'],
    marketPrice: '$60,000/project',
    link: '/contact'
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Design'],
    pricing: '$50,000 - $500,000/project',
    category: 'Pharmaceutical',
    popular: false,
    benefits: ['Accelerates discovery', 'Reduces costs', 'Improves success rates'],
    marketPrice: '$275,000/project',
    link: '/contact'
  },
  {
    title: 'AI Personal Health Coach',
    description: 'AI-powered personal health monitoring and wellness recommendations.',
    icon: Heart,
<<<<<<< HEAD
    features: ['Mood Tracking', 'Crisis Detection', 'Therapeutic Conversations', 'Progress Monitoring'],
    pricing: '$2,000 - $12,000/setup',
    category: 'HealthTech AI'
  },
  {
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Advanced AI systems for autonomous driving with real-time decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection', 'Traffic Analysis'],
    pricing: '$100,000 - $500,000 project',
    category: 'Autonomous Systems',
    popular: true
  },
  {
    title: 'AI Quantum Computing Optimization',
    description: 'AI algorithms optimized for quantum computing applications and problem solving.',
    icon: Cpu,
    features: ['Quantum Algorithm Design', 'Optimization Problems', 'Cryptography', 'Simulation'],
    pricing: '$50,000 - $200,000 project',
    category: 'Quantum AI'
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'Intelligent mission planning and optimization for space exploration and satellite operations.',
    icon: Rocket,
    features: ['Mission Optimization', 'Resource Planning', 'Risk Assessment', 'Trajectory Analysis'],
    pricing: '$75,000 - $300,000 project',
    category: 'Space Technology'
  },
  {
    title: 'AI Climate Change Modeling',
    description: 'Advanced climate modeling and environmental impact prediction using AI.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Impact', 'Carbon Footprint Analysis', 'Policy Simulation'],
    pricing: '$25,000 - $100,000 project',
    category: 'Environmental AI'
  },
  {
    title: 'AI-Powered Brain-Computer Interface',
    description: 'Neural signal processing and brain-computer interface development.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$100,000 - $500,000 project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI Cybersecurity Threat Intelligence',
    description: 'Advanced threat detection and cybersecurity intelligence using AI.',
    icon: Shield,
    features: ['Threat Detection', 'Attack Prediction', 'Vulnerability Assessment', 'Incident Response'],
    pricing: '$15,000 - $75,000 project',
    category: 'Cybersecurity AI'
  },
  {
    title: 'AI-Powered Digital Twin Technology',
    description: 'Real-time digital twins for industrial processes and smart cities.',
    icon: Monitor,
    features: ['Real-time Simulation', 'Predictive Modeling', 'Process Optimization', 'Maintenance Planning'],
    pricing: '$30,000 - $150,000 project',
    category: 'Digital Twin'
  },
  {
    title: 'AI Language Model Fine-Tuning',
    description: 'Custom language model training and fine-tuning for specific domains.',
    icon: MessageSquare,
    features: ['Domain Adaptation', 'Custom Training', 'Performance Optimization', 'Deployment Support'],
    pricing: '$10,000 - $50,000 project',
    category: 'NLP AI'
  },
  {
    title: 'AI-Powered Edge Computing',
    description: 'Intelligent edge computing solutions for IoT and real-time processing.',
    icon: Network,
    features: ['Edge AI Processing', 'Real-time Analytics', 'Low Latency', 'Resource Optimization'],
    pricing: '$20,000 - $100,000 project',
    category: 'Edge AI'
  },
  {
    title: 'AI Robotic Process Automation',
    description: 'Intelligent automation for complex business processes and workflows.',
    icon: Bot,
    features: ['Process Automation', 'Decision Making', 'Error Handling', 'Scalable Deployment'],
    pricing: '$5,000 - $25,000 project',
    category: 'RPA AI'
  },
  {
    title: 'AI-Powered Augmented Reality',
    description: 'Intelligent AR applications with object recognition and spatial understanding.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Real-time Rendering', 'Gesture Control'],
    pricing: '$15,000 - $75,000 project',
    category: 'AR AI'
  },
  {
    title: 'AI Blockchain Analytics',
    description: 'Advanced blockchain analysis and cryptocurrency intelligence using AI.',
    icon: Network,
    features: ['Transaction Analysis', 'Pattern Recognition', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: '$8,000 - $40,000 project',
    category: 'Blockchain AI'
  },
  {
    title: 'AI-Powered Smart Agriculture',
    description: 'Intelligent farming solutions with precision agriculture and crop optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$12,000 - $60,000 project',
    category: 'AgTech AI'
  },
  {
    title: 'AI Voice Synthesis & Cloning',
    description: 'Advanced voice synthesis and cloning technology for various applications.',
    icon: Mic,
    features: ['Voice Cloning', 'Emotion Synthesis', 'Multi-language Support', 'Real-time Processing'],
    pricing: '$5,000 - $25,000 project',
    category: 'Voice AI'
  },
  {
    title: 'AI-Powered Metaverse Development',
    description: 'Intelligent virtual world creation and management systems.',
    icon: Globe,
    features: ['Virtual World Creation', 'AI NPCs', 'Behavioral Simulation', 'Content Generation'],
    pricing: '$25,000 - $125,000 project',
    category: 'Metaverse AI'
  },
  {
    title: 'AI Medical Imaging Analysis',
    description: 'Advanced medical image analysis and diagnostic support using deep learning.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Disease Detection', 'Treatment Planning', 'Radiology Support'],
    pricing: '$20,000 - $100,000 project',
    category: 'Medical AI'
  },
  {
    title: 'AI-Powered Smart Cities',
    description: 'Intelligent city management and optimization systems.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Management', 'Public Safety', 'Environmental Monitoring'],
    pricing: '$50,000 - $250,000 project',
    category: 'Smart Cities AI'
  },
  {
    title: 'AI Financial Trading Algorithms',
    description: 'Advanced algorithmic trading systems with machine learning optimization.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Management', 'Portfolio Optimization', 'High-Frequency Trading'],
    pricing: '$30,000 - $150,000 project',
    category: 'FinTech AI'
  },
  {
    title: 'AI-Powered Content Creation',
    description: 'Intelligent content generation for marketing, education, and entertainment.',
    icon: FileText,
    features: ['Text Generation', 'Image Creation', 'Video Production', 'Multi-format Output'],
    pricing: '$3,000 - $15,000 project',
    category: 'Content AI'
=======
    features: ['Health Monitoring', 'Personalized Recommendations', 'Progress Tracking', 'Wellness Planning'],
    pricing: '$50 - $200/month',
    category: 'Health & Wellness',
    popular: true,
    benefits: ['Improves health outcomes', 'Provides personalized care', 'Reduces healthcare costs'],
    marketPrice: '$125/month',
    link: '/contact'
>>>>>>> main
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: TrendingUp, description: 'Fraud detection and risk management' },
  { name: 'Manufacturing', icon: Building, description: 'Quality control and predictive maintenance' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized shopping and inventory management' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
];

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and more. Transform your business with cutting-edge AI solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning to computer vision, 
                we provide comprehensive AI services tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {service.popular && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Market Price</span>
                      <span className="text-sm text-gray-600">{service.marketPrice}</span>
                    </div>
                    <Link
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our AI solutions are tailored for various industries and use cases.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                </motion.div>
              ))}
=======
              {/* Stats */}
              <motion.div 
                className="grid md:grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">80+</div>
                  <div className="text-gray-300">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">95%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-gray-300">AI Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">300+</div>
                  <div className="text-gray-300">AI Models Deployed</div>
                </div>
              </motion.div>
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Implement AI?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you identify the best solutions for your business and implement them successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your AI Journey
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
=======
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
=======
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-purple-600 text-white'
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 5 && (
                          <li className="text-sm text-purple-600 font-medium">
                            +{service.features.length - 5} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Proven Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-purple-600">
                            <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and Info */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                          <div className="text-sm text-gray-500">vs market: {service.marketPrice}</div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>Setup: {service.setupTime}</div>
                          <div>Target: {service.targetUsers}</div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link 
                          href="/contact" 
                          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Get Started
                        </Link>
                        <Link 
                          href={`/contact?service=${encodeURIComponent(service.title)}`} 
                          className="flex-1 bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our AI services and discover how artificial intelligence can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free AI Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
>>>>>>> main
=======
    </>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  );
}