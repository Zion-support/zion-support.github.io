import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Settings, 
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
  ShoppingCart,
  BookOpen,
  Package,
  DollarSign,
  TrendingUp,
  Target,
  Eye,
  Brain,
  MessageSquare,
  Search,
  Calendar,
  Home,
  Trash2
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaaSProducts = [
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support', 'Cost Tracking', 'Budget Alerts', 'Optimization Recommendations'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true
  },
  {
    title: 'LLM Evaluation Suite',
    description: 'Comprehensive testing and evaluation platform for large language models.',
    icon: Brain,
    features: ['Model Testing', 'Performance Metrics', 'Bias Detection', 'Automated Reports'],
    pricing: '$199 - $1,999/month',
    category: 'AI Tools',
    popular: true
  },
  {
    title: 'Customer Feedback App',
    description: 'Collect, analyze, and act on customer feedback across multiple channels.',
    icon: Users,
    features: ['Multi-channel Collection', 'Sentiment Analysis', 'Action Tracking', 'Integration APIs'],
    pricing: '$49 - $499/month',
    category: 'Customer Experience',
    popular: true
  },
  {
    title: 'API Rate Limiting',
    description: 'Intelligent API rate limiting and throttling to protect your services.',
    icon: Shield,
    features: ['Dynamic Rate Limiting', 'DDoS Protection', 'Analytics Dashboard', 'Custom Rules'],
    pricing: '$99 - $999/month',
    category: 'API Management',
    popular: false
  },
  {
    title: 'Customer Feedback & NPS Micro-App',
    description: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    icon: MessageSquare,
    features: ['Survey Builder', 'Sentiment Analysis', 'Auto Routing', 'NPS Tracking'],
    pricing: '$149 - $799/month',
    category: 'Customer Success',
    popular: false
  },
  {
    title: 'Content Moderation AI',
    description: 'Automated content moderation using AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-media Support', 'Custom Rules', 'Real-time Processing', 'Human Review Queue', 'Multi-modal Detection', 'API Integration'],
    pricing: '$149 - $1,499/month',
    category: 'Content Management',
    popular: true
  },
  {
    title: 'Workflow Automation',
    description: 'Visual workflow builder for automating business processes and integrations.',
    icon: Zap,
    features: ['Drag & Drop Builder', 'Pre-built Templates', 'Integration Library', 'Analytics'],
    pricing: '$79 - $799/month',
    category: 'Automation',
    popular: true
  },
  {
    title: 'AI Lead Scoring & Enrichment',
    description: 'Intelligent lead scoring and data enrichment for sales teams.',
    icon: Target,
    features: ['Lead Scoring', 'Data Enrichment', 'Behavioral Tracking', 'CRM Integration', 'ML Models', 'Behavioral Analysis', 'Scoring Algorithms'],
    pricing: '$199 - $999/month',
    category: 'Sales',
    popular: false
  },
  {
    title: 'Social Media Scheduler Pro',
    description: 'Advanced social media management with AI-powered content optimization.',
    icon: Globe,
    features: ['Multi-platform Posting', 'Optimal Timing', 'Content Suggestions', 'Analytics Dashboard'],
    pricing: '$49 - $299/month',
    category: 'Social Media',
    popular: false
  },
  {
    title: 'Invoice & Payment Processor',
    description: 'Streamlined invoicing and payment processing for small businesses.',
    icon: DollarSign,
    features: ['Invoice Generation', 'Payment Processing', 'Recurring Billing', 'Financial Reports'],
    pricing: '$29 - $199/month',
    category: 'Finance'
  },
  {
    title: 'Project Time Tracker',
    description: 'Comprehensive time tracking and project management for teams.',
    icon: Clock,
    features: ['Time Tracking', 'Project Management', 'Team Collaboration', 'Reporting'],
    pricing: '$9 - $49/month',
    category: 'Productivity'
  },
  {
    title: 'Email Marketing Automation',
    description: 'Advanced email marketing with AI-powered personalization and automation.',
    icon: Mail,
    features: ['Email Templates', 'Automation Workflows', 'A/B Testing', 'Analytics'],
    pricing: '$39 - $299/month',
    category: 'Marketing'
  },
  {
    title: 'Inventory Management System',
    description: 'Smart inventory tracking and management for e-commerce businesses.',
    icon: Package,
    features: ['Stock Tracking', 'Low Stock Alerts', 'Supplier Management', 'Analytics'],
    pricing: '$79 - $399/month',
    category: 'E-commerce'
  },
  {
    title: 'Customer Support Ticketing',
    description: 'AI-powered customer support ticketing and knowledge base system.',
    icon: MessageSquare,
    features: ['Ticket Management', 'Knowledge Base', 'AI Chatbot', 'Performance Analytics'],
    pricing: '$19 - $149/month',
    category: 'Support'
  },
  {
    title: 'HR & Payroll Management',
    description: 'Complete HR and payroll solution for small to medium businesses.',
    icon: Users,
    features: ['Employee Management', 'Payroll Processing', 'Time Off Tracking', 'Compliance'],
    pricing: '$99 - $499/month',
    category: 'HR'
  },
  {
    title: 'Website Analytics & Heatmaps',
    description: 'Advanced website analytics with heatmaps and user behavior tracking.',
    icon: BarChart3,
    features: ['User Behavior Tracking', 'Heatmaps', 'Conversion Funnels', 'A/B Testing'],
    pricing: '$29 - $199/month',
    category: 'Analytics'
  },
  {
    title: 'Document Management System',
    description: 'Secure document storage, sharing, and collaboration platform.',
    icon: FileText,
    features: ['Document Storage', 'Version Control', 'Collaboration Tools', 'Security'],
    pricing: '$19 - $99/month',
    category: 'Document Management'
  },
  {
    title: 'Event Management Platform',
    description: 'Complete event planning and management solution for organizers.',
    icon: Calendar,
    features: ['Event Planning', 'Registration Management', 'Payment Processing', 'Analytics'],
    pricing: '$49 - $299/month',
    category: 'Events'
  },
  {
    title: 'Learning Management System',
    description: 'Online learning platform for courses, training, and certifications.',
    icon: BookOpen,
    features: ['Course Creation', 'Student Management', 'Progress Tracking', 'Certificates'],
    pricing: '$79 - $399/month',
    category: 'Education'
  },
  {
    title: 'Real Estate CRM',
    description: 'Specialized CRM for real estate agents and property management.',
    icon: Building,
    features: ['Lead Management', 'Property Listings', 'Client Communication', 'Deal Tracking'],
    pricing: '$39 - $199/month',
    category: 'Real Estate'
  },
  {
    title: 'Restaurant POS & Management',
    description: 'Point of sale and restaurant management system with inventory tracking.',
    icon: ShoppingCart,
    features: ['POS System', 'Menu Management', 'Inventory Tracking', 'Staff Scheduling'],
    pricing: '$99 - $499/month',
    category: 'Restaurant'
  },
  {
    title: 'Fitness & Wellness Tracker',
    description: 'Comprehensive fitness tracking and wellness management platform.',
    icon: Heart,
    features: ['Workout Tracking', 'Nutrition Logging', 'Progress Monitoring', 'Community Features'],
    pricing: '$9 - $49/month',
    category: 'Health & Fitness'
  },
  {
    title: 'Cryptocurrency Portfolio Tracker',
    description: 'Advanced cryptocurrency portfolio tracking and trading analytics.',
    icon: TrendingUp,
    features: ['Portfolio Tracking', 'Price Alerts', 'Trading Analytics', 'Tax Reporting'],
    pricing: '$19 - $99/month',
    category: 'Crypto'
  },
  {
    title: 'Fleet Management System',
    description: 'GPS tracking and fleet management solution for transportation companies.',
    icon: Car,
    features: ['GPS Tracking', 'Route Optimization', 'Driver Management', 'Maintenance Scheduling'],
    pricing: '$199 - $999/month',
    category: 'Transportation'
  },
  {
    title: 'Property Maintenance Tracker',
    description: 'Property maintenance and facility management solution.',
    icon: Settings,
    features: ['Maintenance Scheduling', 'Work Order Management', 'Vendor Management', 'Reporting'],
    pricing: '$49 - $299/month',
    category: 'Property Management'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review and quality assurance using advanced AI analysis.',
    icon: Code,
    features: ['Automated Code Review', 'Security Vulnerability Detection', 'Performance Analysis', 'Best Practice Suggestions'],
    pricing: '$199 - $999/month',
    category: 'Development Tools',
    popular: true
  },
  {
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection.',
    icon: Shield,
    features: ['Security Analysis', 'Gas Optimization', 'Vulnerability Detection', 'Compliance Checking'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Intelligent SEO analysis and optimization recommendations for websites.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'],
    pricing: '$79 - $399/month',
    category: 'Marketing'
  },
  {
    title: 'Automated Testing Platform',
    description: 'AI-driven automated testing for web and mobile applications.',
    icon: Monitor,
    features: ['Visual Testing', 'API Testing', 'Performance Testing', 'Cross-browser Testing'],
    pricing: '$149 - $799/month',
    category: 'Quality Assurance'
  },
  {
    title: 'AI Customer Sentiment Analyzer',
    description: 'Real-time customer sentiment analysis across multiple channels.',
    icon: MessageSquare,
    features: ['Multi-channel Analysis', 'Real-time Monitoring', 'Trend Analysis', 'Alert System'],
    pricing: '$99 - $499/month',
    category: 'Analytics',
    popular: false
  },
  {
    title: 'Smart Energy Management',
    description: 'AI-powered energy consumption optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Predictive Analytics', 'Cost Optimization', 'Sustainability Reporting'],
    pricing: '$199 - $999/month',
    category: 'Sustainability'
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis and contract review using AI.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction'],
    pricing: '$299 - $2,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Energy Management',
    description: 'IoT-based energy monitoring and optimization for buildings and facilities.',
    icon: Sprout,
    features: ['Real-time Monitoring', 'Energy Analytics', 'Cost Optimization', 'Sustainability Reporting'],
    pricing: '$199 - $1,999/month',
    category: 'IoT Solutions',
    popular: false
  },
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical diagnosis support with symptom analysis and treatment recommendations.',
    icon: Heart,
    features: ['Symptom Analysis', 'Diagnosis Support', 'Treatment Recommendations', 'Medical Records Integration'],
    pricing: '$499 - $4,999/month',
    category: 'Healthcare',
    popular: true
  },
  {
    title: 'Blockchain Analytics Dashboard',
    description: 'Comprehensive blockchain data analysis and visualization platform.',
    icon: Globe,
    features: ['Multi-chain Support', 'Transaction Analysis', 'DeFi Analytics', 'Custom Dashboards'],
    pricing: '$299 - $2,999/month',
    category: 'Blockchain',
    popular: false
  },
  {
    title: 'AI Personal Finance Manager',
    description: 'Intelligent personal finance tracking, budgeting, and investment advice.',
    icon: DollarSign,
    features: ['Expense Tracking', 'Budget Planning', 'Investment Analysis', 'Goal Setting'],
    pricing: '$9.99 - $99/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized control and automation for smart home devices and systems.',
    icon: Building,
    features: ['Device Integration', 'Automation Rules', 'Voice Control', 'Energy Management'],
    pricing: '$49 - $499/month',
    category: 'Smart Home',
    popular: false
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review and quality analysis using machine learning.',
    icon: Code,
    features: ['Code Analysis', 'Bug Detection', 'Security Scanning', 'Performance Optimization'],
    pricing: '$99 - $999/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Digital Marketing Analytics',
    description: 'Comprehensive marketing analytics and campaign optimization platform.',
=======
    pricing: '$299 - $1,499/month',
    category: 'Legal Tech'
  },
  {
    title: 'Intelligent Inventory Forecasting',
    description: 'AI-driven demand forecasting and inventory optimization for retail.',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Supplier Management', 'Seasonal Analysis'],
    pricing: '$149 - $799/month',
    category: 'Retail'
  },
  {
    title: 'AI-Powered Medical Diagnosis Assistant',
    description: 'AI assistant for medical professionals with diagnostic support and analysis.',
    icon: Heart,
    features: ['Symptom Analysis', 'Diagnostic Support', 'Medical Image Analysis', 'Treatment Recommendations'],
    pricing: '$499 - $2,499/month',
    category: 'Healthcare'
  },
  {
    title: 'Smart Agriculture Monitor',
    description: 'IoT and AI-powered agricultural monitoring and optimization system.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Weather Analysis', 'Pest Detection', 'Yield Prediction'],
    pricing: '$199 - $999/month',
    category: 'Agriculture'
  },
  {
    title: 'AI-Powered Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation and algorithm development platform.',
    icon: Cpu,
    features: ['Quantum Circuit Design', 'Algorithm Testing', 'Performance Analysis', 'Educational Tools'],
    pricing: '$999 - $4,999/month',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'Metaverse Development Platform',
    description: 'Complete platform for building and deploying metaverse experiences.',
    icon: Globe,
    features: ['3D World Builder', 'Avatar Creation', 'Virtual Economy', 'Multi-user Support'],
    pricing: '$2,999 - $14,999/month',
    category: 'Metaverse',
    popular: true
  },
  {
    title: 'AI-Powered Digital Twin Creator',
    description: 'Create and manage digital twins of physical assets with AI optimization.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Sync', 'Predictive Analytics', 'IoT Integration'],
    pricing: '$1,999 - $9,999/month',
    category: 'Digital Twins'
  },
  {
    title: 'Blockchain DeFi Analytics Suite',
    description: 'Comprehensive DeFi analytics and yield farming optimization platform.',
    icon: Lock,
    features: ['Yield Farming', 'Liquidity Analysis', 'Risk Assessment', 'Portfolio Tracking'],
    pricing: '$299 - $1,999/month',
    category: 'DeFi'
  },
  {
    title: 'AI Synthetic Data Generator',
    description: 'Generate high-quality synthetic datasets for AI training and testing.',
    icon: Database,
    features: ['Privacy-Preserving', 'Custom Datasets', 'Quality Validation', 'API Integration'],
    pricing: '$499 - $2,499/month',
    category: 'Data Science'
  },
  {
    title: 'Edge AI Deployment Platform',
    description: 'Deploy and manage AI models at the edge with real-time processing.',
    icon: Network,
    features: ['Model Deployment', 'Edge Computing', 'Real-time Processing', 'Device Management'],
    pricing: '$799 - $3,999/month',
    category: 'Edge Computing'
  },
  {
    title: 'AI Conversational Commerce Platform',
    description: 'Voice and chat-based shopping platform with AI recommendations.',
    icon: ShoppingCart,
    features: ['Voice Shopping', 'AI Recommendations', 'Order Management', 'Payment Processing'],
    pricing: '$1,499 - $7,499/month',
    category: 'E-commerce'
  },
  {
    title: 'Industrial IoT Predictive Maintenance',
    description: 'AI-powered predictive maintenance for industrial equipment and machinery.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Real-time Monitoring'],
    pricing: '$2,999 - $14,999/month',
    category: 'Industrial IoT'
  },
  {
    title: 'AI Emotional Intelligence API',
    description: 'Real-time emotion detection and response system for applications.',
    icon: Heart,
    features: ['Emotion Recognition', 'Sentiment Analysis', 'Adaptive Responses', 'Multi-modal Input'],
    pricing: '$199 - $999/month',
    category: 'Emotional AI'
  },
  {
    title: 'Autonomous Drone Fleet Management',
    description: 'AI-powered drone fleet management and mission coordination platform.',
    icon: Rocket,
    features: ['Fleet Coordination', 'Mission Planning', 'Real-time Tracking', 'Autonomous Operations'],
    pricing: '$4,999 - $24,999/month',
    category: 'Autonomous Systems'
  },
  {
    title: 'AI Hyperpersonalization Engine',
    description: 'Ultra-personalized user experiences with advanced AI and behavioral analytics.',
    icon: Target,
    features: ['Behavioral Analysis', 'Dynamic Content', 'Real-time Adaptation', 'Cross-platform Sync'],
    pricing: '$1,999 - $9,999/month',
    category: 'Personalization'
  },
  {
    title: 'Climate Change Monitoring Platform',
    description: 'AI-powered climate monitoring and carbon footprint tracking system.',
    icon: Globe,
    features: ['Carbon Tracking', 'Climate Modeling', 'Sustainability Metrics', 'Green Tech Optimization'],
    pricing: '$999 - $4,999/month',
    category: 'Climate Tech'
  },
  {
    title: 'AI Neural Architecture Search Platform',
    description: 'Automated neural network design and optimization using AI.',
    icon: Brain,
    features: ['AutoML', 'Architecture Optimization', 'Performance Tuning', 'Custom Models'],
    pricing: '$2,999 - $14,999/month',
    category: 'AutoML'
  },
  {
    title: 'Space Mission Planning Software',
    description: 'AI-powered space mission planning and satellite constellation management.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Mechanics', 'Resource Optimization'],
    pricing: '$9,999 - $49,999/month',
    category: 'Space Technology'
  },
  {
    title: 'AI Biometric Security Platform',
    description: 'Advanced biometric authentication with AI-powered fraud detection.',
    icon: Shield,
    features: ['Multi-modal Biometrics', 'Fraud Detection', 'Liveness Detection', 'Privacy Protection'],
    pricing: '$1,499 - $7,499/month',
    category: 'Biometric Security'
  },
  {
    title: 'AI Gene Therapy Design Platform',
    description: 'AI-optimized gene therapy design and delivery system development.',
    icon: Heart,
    features: ['Gene Design', 'Delivery Optimization', 'Safety Analysis', 'Clinical Prediction'],
    pricing: '$9,999 - $49,999/month',
    category: 'Gene Therapy'
  },
  {
    title: 'Quantum Cryptography Platform',
    description: 'Quantum-resistant encryption and secure communication system.',
    icon: Lock,
    features: ['Quantum Encryption', 'Secure Communication', 'Key Management', 'Threat Detection'],
    pricing: '$4,999 - $24,999/month',
    category: 'Quantum Security'
  },
  {
    title: 'Smart Agriculture AI Platform',
    description: 'Complete AI-powered smart farming solution with automation and optimization.',
    icon: Sprout,
    features: ['Crop Optimization', 'Automated Farming', 'Weather Prediction', 'Resource Management'],
    pricing: '$1,999 - $9,999/month',
    category: 'Smart Agriculture'
  },
  {
    title: 'AI Consciousness Simulation Platform',
    description: 'Advanced AI system that simulates human consciousness and decision-making.',
    icon: Brain,
    features: ['Consciousness Modeling', 'Decision Simulation', 'Ethical AI', 'Human-like Reasoning'],
    pricing: '$19,999 - $99,999/month',
    category: 'Consciousness AI'
  },
  {
    title: 'Advanced Time Series Forecasting',
    description: 'AI-powered time series analysis and forecasting for complex datasets.',
    icon: TrendingUp,
    features: ['Multi-variate Analysis', 'Seasonal Detection', 'Anomaly Detection', 'Long-term Forecasting'],
    pricing: '$799 - $3,999/month',
    category: 'Time Series AI'
  },
  {
    title: 'AI-Powered Virtual Reality Platform',
    description: 'Complete VR development platform with AI-generated content and interactions.',
    icon: Monitor,
    features: ['Content Generation', 'Realistic Interactions', 'Adaptive Environments', 'User Behavior Analysis'],
    pricing: '$2,999 - $14,999/month',
    category: 'Virtual Reality'
  },
  {
    title: 'AI Language Translation Platform',
    description: 'Real-time multi-language translation with cultural context understanding.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Context', 'Voice Translation', 'Document Translation'],
    pricing: '$499 - $2,499/month',
    category: 'Language Technology'
  },
  {
    title: 'AI-Powered Robotics Platform',
    description: 'Complete robotics development platform with AI decision making.',
    icon: Bot,
    features: ['Autonomous Navigation', 'Object Manipulation', 'Human-Robot Interaction', 'Learning Capabilities'],
    pricing: '$4,999 - $24,999/month',
    category: 'Robotics'
  },
  {
    title: 'AI Music Composition Platform',
    description: 'AI-generated music composition with style adaptation and emotional intelligence.',
    icon: Mic,
    features: ['Style Adaptation', 'Emotional Intelligence', 'Instrument Simulation', 'Collaborative Composition'],
    pricing: '$299 - $1,499/month',
    category: 'Creative AI'
  },
  {
    title: 'AI Gaming Intelligence Platform',
    description: 'Intelligent game AI with adaptive difficulty and procedural content generation.',
    icon: Gamepad2,
    features: ['Adaptive Difficulty', 'Procedural Content', 'NPC Intelligence', 'Player Behavior Analysis'],
    pricing: '$1,999 - $9,999/month',
    category: 'Gaming AI'
  },
  {
    title: 'AI Personal Health Coach Platform',
    description: 'AI-powered personal health monitoring and wellness recommendations.',
    icon: Heart,
    features: ['Health Monitoring', 'Wellness Recommendations', 'Symptom Analysis', 'Preventive Care'],
    pricing: '$99 - $499/month',
    category: 'Personal Health'
  },
  {
    title: 'AI Smart Home Control Platform',
    description: 'Intelligent home automation with predictive behavior and energy optimization.',
    icon: Home,
    features: ['Predictive Automation', 'Energy Optimization', 'Security Monitoring', 'Voice Control'],
    pricing: '$199 - $999/month',
    category: 'Smart Home'
  },
  {
    title: 'AI Content Creation Studio',
    description: 'AI-powered content creation for marketing, social media, and advertising.',
    icon: Image,
    features: ['Content Generation', 'Brand Consistency', 'Multi-format Output', 'Performance Optimization'],
    pricing: '$299 - $1,499/month',
    category: 'Content Marketing'
  },
  {
    title: 'AI Education Platform',
    description: 'Personalized learning platform with AI tutoring and assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Assessment', 'Progress Tracking', 'Skill Development'],
    pricing: '$399 - $1,999/month',
    category: 'EdTech'
  },
  {
    title: 'AI-Powered FinTech Platform',
    description: 'Complete financial technology platform with AI-powered insights and automation.',
    icon: DollarSign,
    features: ['Financial Analysis', 'Risk Assessment', 'Automated Trading', 'Portfolio Optimization'],
    pricing: '$1,999 - $9,999/month',
    category: 'FinTech'
  },
  {
    title: 'AI Cybersecurity Platform',
    description: 'Self-evolving AI cybersecurity system that adapts to new threats.',
    icon: Shield,
    features: ['Threat Detection', 'Adaptive Defense', 'Zero-day Protection', 'Automated Response'],
    pricing: '$2,999 - $14,999/month',
    category: 'Cybersecurity'
  },
  {
    title: 'AI Trading Platform',
    description: 'High-frequency trading AI with market prediction and risk management.',
    icon: TrendingUp,
    features: ['Market Prediction', 'Risk Management', 'Algorithmic Trading', 'Portfolio Optimization'],
    pricing: '$4,999 - $24,999/month',
    category: 'Trading'
  },
  {
    title: 'AI Virtual Reality Platform',
    description: 'Immersive VR experiences with AI-generated content and interactions.',
    icon: Monitor,
    features: ['Content Generation', 'Realistic Interactions', 'Adaptive Environments', 'User Behavior Analysis'],
    pricing: '$2,999 - $14,999/month',
    category: 'Virtual Reality'
  },
  {
    title: 'AI Language Processing Platform',
    description: 'Advanced natural language processing and understanding platform.',
    icon: Globe,
    features: ['Text Analysis', 'Language Understanding', 'Translation', 'Sentiment Analysis'],
    pricing: '$499 - $2,499/month',
    category: 'NLP'
  },
  {
    title: 'AI Computer Vision Platform',
    description: 'Advanced computer vision and image analysis platform.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
    pricing: '$799 - $3,999/month',
    category: 'Computer Vision'
  },
  {
    title: 'AI Voice Processing Platform',
    description: 'Advanced voice processing and speech recognition platform.',
    icon: Mic,
    features: ['Speech Recognition', 'Voice Synthesis', 'Voice Commands', 'Multi-language Support'],
    pricing: '$399 - $1,999/month',
    category: 'Voice AI'
  },
  {
    title: 'AI Data Analytics Platform',
    description: 'Comprehensive data analytics and business intelligence platform.',
    icon: BarChart3,
    features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Custom Dashboards'],
    pricing: '$999 - $4,999/month',
    category: 'Data Analytics'
  },
  {
    title: 'AI Machine Learning Platform',
    description: 'Complete machine learning development and deployment platform.',
    icon: Brain,
    features: ['Model Training', 'AutoML', 'Model Deployment', 'Performance Monitoring'],
    pricing: '$1,999 - $9,999/month',
    category: 'Machine Learning'
  },
  {
    title: 'AI Cloud Computing Platform',
    description: 'AI-powered cloud computing and infrastructure management platform.',
    icon: Cloud,
    features: ['Infrastructure Management', 'Auto-scaling', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$2,999 - $14,999/month',
    category: 'Cloud Computing'
  },
  {
    title: 'AI IoT Platform',
    description: 'Complete IoT platform with AI-powered device management and analytics.',
    icon: Network,
    features: ['Device Management', 'Data Analytics', 'Predictive Maintenance', 'Real-time Monitoring'],
    pricing: '$1,499 - $7,499/month',
    category: 'IoT'
  },
  {
    title: 'AI Blockchain Platform',
    description: 'AI-powered blockchain development and management platform.',
    icon: Lock,
    features: ['Smart Contract Development', 'DeFi Integration', 'NFT Management', 'Security Analysis'],
    pricing: '$2,499 - $12,499/month',
    category: 'Blockchain'
  },
  {
    title: 'AI Quantum Computing Platform',
    description: 'Quantum computing development and simulation platform.',
    icon: Cpu,
    features: ['Quantum Circuit Design', 'Algorithm Development', 'Simulation', 'Performance Analysis'],
    pricing: '$4,999 - $24,999/month',
    category: 'Quantum Computing'
  },
  {
    title: 'AI Metaverse Platform',
    description: 'Complete metaverse development and management platform.',
    icon: Globe,
    features: ['3D World Creation', 'Avatar Management', 'Virtual Economy', 'Multi-user Support'],
    pricing: '$3,999 - $19,999/month',
    category: 'Metaverse'
  },
  {
    title: 'AI Digital Twin Platform',
    description: 'Digital twin development and management platform.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Sync', 'Predictive Analytics', 'IoT Integration'],
    pricing: '$2,999 - $14,999/month',
    category: 'Digital Twins'
  },
  {
    title: 'AI Edge Computing Platform',
    description: 'Edge computing platform with AI processing capabilities.',
    icon: Network,
    features: ['Edge Deployment', 'Real-time Processing', 'Distributed AI', 'Device Management'],
    pricing: '$1,999 - $9,999/month',
    category: 'Edge Computing'
  },
  {
    title: 'AI Autonomous Systems Platform',
    description: 'Platform for developing and managing autonomous systems.',
    icon: Bot,
    features: ['Autonomous Navigation', 'Decision Making', 'Mission Planning', 'Safety Systems'],
    pricing: '$4,999 - $24,999/month',
    category: 'Autonomous Systems'
  },
  {
    title: 'AI Personalization Platform',
    description: 'Advanced personalization and recommendation platform.',
    icon: Target,
    features: ['Behavioral Analysis', 'Dynamic Content', 'Real-time Adaptation', 'Cross-platform Sync'],
    pricing: '$1,499 - $7,499/month',
    category: 'Personalization'
  },
  {
    title: 'AI Climate Tech Platform',
    description: 'Climate technology platform with AI-powered sustainability solutions.',
    icon: Globe,
    features: ['Carbon Tracking', 'Climate Modeling', 'Sustainability Metrics', 'Green Tech Optimization'],
    pricing: '$1,999 - $9,999/month',
    category: 'Climate Tech'
  },
  {
    title: 'AI Space Technology Platform',
    description: 'Space technology platform with AI-powered mission planning and management.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Mechanics', 'Resource Optimization'],
    pricing: '$9,999 - $49,999/month',
    category: 'Space Technology'
  },
  {
    title: 'AI Biometric Platform',
    description: 'Advanced biometric authentication and security platform.',
    icon: Shield,
    features: ['Multi-modal Biometrics', 'Fraud Detection', 'Liveness Detection', 'Privacy Protection'],
    pricing: '$1,499 - $7,499/month',
    category: 'Biometric Security'
  },
  {
    title: 'AI Gene Therapy Platform',
    description: 'Gene therapy development and optimization platform.',
    icon: Heart,
    features: ['Gene Design', 'Delivery Optimization', 'Safety Analysis', 'Clinical Prediction'],
    pricing: '$9,999 - $49,999/month',
    category: 'Gene Therapy'
  },
  {
    title: 'AI Quantum Security Platform',
    description: 'Quantum-resistant security and encryption platform.',
    icon: Lock,
    features: ['Quantum Encryption', 'Secure Communication', 'Key Management', 'Threat Detection'],
    pricing: '$4,999 - $24,999/month',
    category: 'Quantum Security'
  },
  {
    title: 'AI Smart Agriculture Platform',
    description: 'Smart agriculture platform with AI-powered farming optimization.',
    icon: Sprout,
    features: ['Crop Optimization', 'Automated Farming', 'Weather Prediction', 'Resource Management'],
    pricing: '$1,999 - $9,999/month',
    category: 'Smart Agriculture'
  },
  {
    title: 'AI Consciousness Platform',
    description: 'AI consciousness simulation and development platform.',
    icon: Brain,
    features: ['Consciousness Modeling', 'Decision Simulation', 'Ethical AI', 'Human-like Reasoning'],
    pricing: '$19,999 - $99,999/month',
    category: 'Consciousness AI'
  },
  {
    title: 'AI Time Series Platform',
    description: 'Advanced time series analysis and forecasting platform.',
    icon: TrendingUp,
    features: ['Multi-variate Analysis', 'Seasonal Detection', 'Anomaly Detection', 'Long-term Forecasting'],
    pricing: '$799 - $3,999/month',
    category: 'Time Series AI'
  },
  {
    title: 'Intelligent Meeting Scheduler',
    description: 'AI-powered meeting scheduling with optimal time slot recommendations.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Management', 'Integration APIs'],
    pricing: '$19 - $99/month',
    category: 'Productivity'
  },
  {
    title: 'AI-Powered Language Learning',
    description: 'Personalized language learning platform with AI tutoring and assessment.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Speech Recognition', 'Progress Tracking', 'Cultural Context'],
    pricing: '$9 - $49/month',
    category: 'Education'
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized smart home control with AI-powered automation and energy management.',
    icon: Home,
    features: ['Device Control', 'Energy Management', 'Security Monitoring', 'Voice Commands'],
    pricing: '$49 - $299/month',
    category: 'Smart Home'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Advanced content moderation using AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules', 'API Integration'],
    pricing: '$199 - $999/month',
    category: 'Content Safety'
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    description: 'AI-powered supply chain optimization and logistics management.',
    icon: Network,
    features: ['Route Optimization', 'Demand Forecasting', 'Supplier Management', 'Risk Analysis'],
    pricing: '$299 - $1,499/month',
    category: 'Logistics'
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Intelligent personal assistant for task management and productivity.',
    icon: Bot,
    features: ['Task Management', 'Email Organization', 'Schedule Optimization', 'Voice Commands'],
    pricing: '$19 - $99/month',
    category: 'Productivity'
  },
  {
    title: 'Smart Waste Management',
    description: 'IoT and AI-powered waste management and recycling optimization.',
    icon: Trash2,
    features: ['Waste Tracking', 'Recycling Optimization', 'Route Planning', 'Sustainability Metrics'],
    pricing: '$149 - $799/month',
    category: 'Sustainability'
  },
  {
    title: 'AI-Powered Cybersecurity Monitor',
    description: 'Real-time cybersecurity monitoring and threat detection using AI.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Analysis', 'Incident Response', 'Compliance Monitoring'],
    pricing: '$399 - $1,999/month',
    category: 'Cybersecurity'
  }
];

const features = [
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {
    icon: Users,
    title: 'Scalable Architecture',
    description: 'Grows with your business needs'
  },
  {
    icon: Globe,
    title: 'Multi-tenant Ready',
    description: 'Built for SaaS from the ground up'
  },
  {
    title: 'Digital Marketing Analytics',
    description: 'Comprehensive marketing analytics and campaign optimization platform.',
    icon: BarChart3,
    features: ['Multi-channel Tracking', 'ROI Analysis', 'A/B Testing', 'Predictive Analytics'],
    pricing: '$149 - $1,499/month',
    category: 'Marketing',
    popular: true
  },
  {
    title: 'AI-Powered Email Marketing',
    description: 'Intelligent email marketing with personalization and automation.',
    icon: Mail,
    features: ['Personalization', 'Send Time Optimization', 'A/B Testing', 'Analytics'],
    pricing: '$79 - $799/month',
    category: 'Marketing',
    popular: false
  },
  {
    title: 'E-commerce Inventory Optimizer',
    description: 'AI-driven inventory management and demand forecasting for e-commerce.',
    icon: ShoppingCart,
    features: ['Demand Forecasting', 'Stock Optimization', 'Reorder Alerts', 'Analytics'],
    pricing: '$199 - $1,999/month',
    category: 'E-commerce',
    popular: true
  },
  {
    title: 'AI Learning Management System',
    description: 'Intelligent learning platform with personalized content and progress tracking.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Content Generation', 'Assessment Tools'],
    pricing: '$99 - $999/month',
    category: 'EdTech',
    popular: false
  },
  {
    title: 'Smart Fleet Management',
    description: 'IoT-based fleet tracking, maintenance, and optimization platform.',
    icon: Car,
    features: ['Real-time Tracking', 'Maintenance Alerts', 'Route Optimization', 'Driver Analytics'],
    pricing: '$299 - $2,999/month',
    category: 'Fleet Management',
    popular: false
  },
  {
    title: 'AI-Powered HR Analytics',
    description: 'Human resources analytics and employee engagement platform.',
    icon: Users,
    features: ['Employee Analytics', 'Engagement Tracking', 'Performance Metrics', 'Predictive Insights'],
    pricing: '$199 - $1,999/month',
    category: 'HR Tech',
    popular: true
  }
];

const categories = ['All', 'Cloud Management', 'AI Tools', 'Customer Experience', 'API Management', 'Content Management', 'Automation', 'Sales Tools', 'Supply Chain', 'Legal Tech', 'IoT Solutions', 'Healthcare', 'Blockchain', 'FinTech', 'Smart Home', 'Developer Tools', 'Marketing', 'E-commerce', 'EdTech', 'Fleet Management', 'HR Tech'];

export default function MicroSaaSPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSaaSProducts.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Innovative, focused software solutions that solve specific business problems 
                with minimal overhead and maximum impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Trial

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl shadow-lg ${
                  tier.popular ? 'bg-purple-50 border-2 border-purple-200' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    tier.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-900 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore Solutions
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
                    placeholder="Search Micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
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
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        {service.popular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
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
                              <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Starting at</span>
                          <div className="text-lg font-bold text-purple-600">
                            {service.pricing}
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Micro SaaS?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our development team can help you create, launch, and scale your micro SaaS solution 
                with modern technology and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/ai-services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
                >
                  Explore AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}