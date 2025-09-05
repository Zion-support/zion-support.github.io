import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
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
  Package,
  Calendar,
  BookOpen,
  ShoppingCart,
  Home,
  Database,
  Moon,
  ChefHat,
  Shirt,
  CloudRain,
  Plane,
  Vote,
  HardDrive,
  Dumbbell,
  Key,
  Gift
} from 'lucide-react';

const microSaaSProducts = [
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true
  },
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    icon: Shield,
    features: ['Prompt Testing', 'Bias Detection', 'Safety Checks', 'Guardrail Policies'],
    pricing: '$799 - $3,500/month',
    category: 'AI Safety',
    popular: true
  },
  {
    title: 'Customer Feedback & NPS Micro-App',
    description: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    icon: MessageSquare,
    features: ['Survey Builder', 'Sentiment Analysis', 'Auto Routing', 'NPS Tracking'],
    pricing: '$149 - $799/month',
    category: 'Customer Success'
  },
  {
    title: 'API Rate Limiting & Analytics',
    description: 'Intelligent rate limiting with detailed analytics and usage insights.',
    icon: BarChart3,
    features: ['Smart Rate Limiting', 'Usage Analytics', 'Real-time Monitoring', 'Custom Rules'],
    pricing: '$199 - $999/month',
    category: 'API Management'
  },
  {
    title: 'Content Moderation AI',
    description: 'Automated content moderation using advanced AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety'
  },
  {
    title: 'Workflow Automation Engine',
    description: 'No-code workflow automation with integrations to popular business tools.',
    icon: Settings,
    features: ['Visual Builder', '100+ Integrations', 'Conditional Logic', 'Scheduled Tasks'],
    pricing: '$99 - $599/month',
    category: 'Automation',
    popular: true
  },
  {
    title: 'AI Lead Scoring & Enrichment',
    description: 'Intelligent lead scoring and data enrichment for sales teams.',
    icon: Target,
    features: ['Lead Scoring', 'Data Enrichment', 'Behavioral Tracking', 'CRM Integration'],
    pricing: '$199 - $999/month',
    category: 'Sales'
  },
  {
    title: 'Social Media Scheduler Pro',
    description: 'Advanced social media management with AI-powered content optimization.',
    icon: Globe,
    features: ['Multi-platform Posting', 'Optimal Timing', 'Content Suggestions', 'Analytics Dashboard'],
    pricing: '$49 - $299/month',
    category: 'Social Media'
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
    description: 'Automated code review with security scanning, performance optimization, and best practices enforcement.',
    icon: Code,
    features: ['Automated Reviews', 'Security Scanning', 'Performance Analysis', 'Best Practices Check'],
    pricing: '$299 - $1,999/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Smart Contract Security Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Lock,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Compliance Checking', 'Audit Reports'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered SEO Content Optimizer',
    description: 'Intelligent content optimization for search engines with real-time ranking improvements.',
    icon: Search,
    features: ['Keyword Research', 'Content Analysis', 'Ranking Tracking', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'SEO & Marketing',
    popular: true
  },
  {
    title: 'Multi-Channel Customer Data Platform',
    description: 'Unified customer data platform with real-time synchronization across all touchpoints.',
    icon: Database,
    features: ['Data Unification', 'Real-time Sync', 'Customer 360 View', 'Privacy Compliance'],
    pricing: '$399 - $2,499/month',
    category: 'Customer Data',
    popular: true
  },
  {
    title: 'AI-Powered Video Content Generator',
    description: 'Automated video creation from text, images, and audio with professional editing capabilities.',
    icon: Video,
    features: ['Text-to-Video', 'Auto Editing', 'Voice Synthesis', 'Template Library'],
    pricing: '$199 - $1,499/month',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    description: 'AI-driven supply chain optimization with demand forecasting and inventory management.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Analytics', 'Risk Assessment'],
    pricing: '$599 - $3,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis, contract review, and compliance checking using advanced NLP.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction'],
    pricing: '$399 - $2,499/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Energy Management System',
    description: 'IoT-based energy monitoring and optimization for buildings and industrial facilities.',
    icon: Zap,
    features: ['Real-time Monitoring', 'Energy Optimization', 'Cost Analysis', 'Predictive Maintenance'],
    pricing: '$299 - $1,999/month',
    category: 'Energy Management',
    popular: true
  },
  {
    title: 'AI-Powered Medical Diagnosis Assistant',
    description: 'Advanced medical imaging analysis and diagnostic support for healthcare professionals.',
    icon: Heart,
    features: ['Medical Imaging Analysis', 'Symptom Analysis', 'Diagnostic Support', 'Treatment Recommendations'],
    pricing: '$999 - $4,999/month',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'Intelligent Recruitment Platform',
    description: 'AI-powered candidate screening, matching, and interview scheduling for HR teams.',
    icon: Users,
    features: ['Resume Screening', 'Skill Matching', 'Interview Scheduling', 'Candidate Scoring'],
    pricing: '$199 - $1,299/month',
    category: 'HR Tech',
    popular: true
  },
  {
    title: 'Blockchain Identity Verification',
    description: 'Decentralized identity verification and KYC compliance for financial services.',
    icon: Shield,
    features: ['Identity Verification', 'KYC Compliance', 'Document Validation', 'Fraud Prevention'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'AI-Powered Investment Portfolio Manager',
    description: 'Automated investment portfolio management with risk assessment and rebalancing.',
    icon: TrendingUp,
    features: ['Portfolio Optimization', 'Risk Assessment', 'Auto Rebalancing', 'Performance Analytics'],
    pricing: '$199 - $1,499/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized smart home control with AI-powered automation and energy optimization.',
    icon: Home,
    features: ['Device Control', 'Automation Rules', 'Energy Optimization', 'Voice Commands'],
    pricing: '$49 - $299/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Language Learning Platform',
    description: 'Personalized language learning with speech recognition and adaptive curriculum.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Speech Recognition', 'Progress Tracking', 'Native Speaker Practice'],
    pricing: '$19 - $99/month',
    category: 'EdTech',
    popular: true
  },
  {
    title: 'Intelligent Waste Management System',
    description: 'IoT-based waste monitoring and optimization for cities and businesses.',
    icon: Package,
    features: ['Waste Monitoring', 'Route Optimization', 'Collection Scheduling', 'Environmental Impact'],
    pricing: '$199 - $1,299/month',
    category: 'Environmental Tech',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: '24/7 mental health support with mood tracking and crisis intervention capabilities.',
    icon: Heart,
    features: ['Mood Tracking', 'Crisis Detection', 'Therapy Recommendations', 'Progress Monitoring'],
    pricing: '$29 - $199/month',
    category: 'HealthTech',
    popular: true
  },
  {
    title: 'Smart Agriculture Monitoring System',
    description: 'IoT sensors and AI for crop monitoring, irrigation optimization, and yield prediction.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Irrigation Control', 'Yield Prediction', 'Weather Integration'],
    pricing: '$199 - $1,499/month',
    category: 'AgriTech',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Threat Hunter',
    description: 'Advanced threat detection and response system with behavioral analysis and automated remediation.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Incident Investigation'],
    pricing: '$599 - $3,999/month',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'Intelligent Document Processing Platform',
    description: 'Automated document extraction, classification, and data entry for business processes.',
    icon: FileText,
    features: ['Document Extraction', 'Data Classification', 'Automated Entry', 'Quality Validation'],
    pricing: '$299 - $1,999/month',
    category: 'Document Processing',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Coach',
    description: 'Personalized financial planning and budgeting with spending analysis and goal tracking.',
    icon: DollarSign,
    features: ['Spending Analysis', 'Budget Planning', 'Goal Tracking', 'Investment Advice'],
    pricing: '$9 - $49/month',
    category: 'Personal Finance',
    popular: true
  },
  {
    title: 'Smart Manufacturing Quality Control',
    description: 'AI-powered quality inspection and defect detection for manufacturing processes.',
    icon: Settings,
    features: ['Defect Detection', 'Quality Metrics', 'Process Optimization', 'Predictive Maintenance'],
    pricing: '$499 - $2,999/month',
    category: 'Manufacturing',
    popular: true
  },
  {
    title: 'Real-Time Language Translation API',
    description: 'Advanced translation service with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['100+ Languages', 'Context Awareness', 'Industry Terms', 'Real-time Processing'],
    pricing: '$0.01 - $0.10 per 1K characters',
    category: 'Language Services',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis with contract review and compliance checking.',
    icon: FileText,
    features: ['Contract Analysis', 'Compliance Checking', 'Risk Assessment', 'Clause Extraction'],
    pricing: '$299 - $1,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Energy Management System',
    description: 'IoT-based energy monitoring and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Analytics', 'Cost Optimization', 'Predictive Maintenance'],
    pricing: '$199 - $1,299/month',
    category: 'IoT & Energy',
    popular: true
  },
  {
    title: 'AI-Powered Recruitment Platform',
    description: 'Intelligent candidate screening and matching with bias detection and diversity analytics.',
    icon: Users,
    features: ['Resume Screening', 'Skill Matching', 'Bias Detection', 'Diversity Analytics'],
    pricing: '$199 - $1,499/month',
    category: 'HR & Recruitment',
    popular: true
  },
  {
    title: 'Blockchain Analytics & Compliance',
    description: 'Comprehensive blockchain transaction analysis with AML and compliance reporting.',
    icon: TrendingUp,
    features: ['Transaction Analysis', 'AML Detection', 'Compliance Reporting', 'Risk Scoring'],
    pricing: '$399 - $2,999/month',
    category: 'Blockchain Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Medical Image Analysis',
    description: 'Advanced medical image analysis with AI-powered diagnosis assistance and reporting.',
    icon: Eye,
    features: ['Image Analysis', 'Diagnosis Assistance', 'Report Generation', 'Integration APIs'],
    pricing: '$999 - $4,999/month',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'Smart Home Automation Platform',
    description: 'Comprehensive smart home control with AI-powered automation and energy management.',
    icon: Home,
    features: ['Device Control', 'Automation Rules', 'Energy Management', 'Voice Integration'],
    pricing: '$29 - $199/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Financial Risk Assessment',
    description: 'Real-time financial risk analysis with credit scoring and fraud detection.',
    icon: Shield,
    features: ['Credit Scoring', 'Fraud Detection', 'Risk Modeling', 'Real-time Alerts'],
    pricing: '$499 - $2,999/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Automated document extraction and processing with OCR and data validation.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Validation Rules', 'Workflow Automation'],
    pricing: '$0.10 - $0.50 per document',
    category: 'Document Processing',
    popular: true
  },
  {
    title: 'AI-Powered Social Media Monitoring',
    description: 'Comprehensive social media monitoring with sentiment analysis and brand protection.',
    icon: MessageSquare,
    features: ['Brand Monitoring', 'Sentiment Analysis', 'Crisis Detection', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'Social Media',
    popular: true
  },
  {
    title: 'Smart Agriculture IoT Platform',
    description: 'IoT-based agricultural monitoring with crop analysis and yield optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Weather Integration', 'Yield Prediction', 'Resource Optimization'],
    pricing: '$299 - $1,999/month',
    category: 'AgTech',
    popular: true
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Real-time personalization engine for e-commerce and content platforms.',
    icon: Target,
    features: ['Real-time Personalization', 'A/B Testing', 'Behavioral Analysis', 'Recommendation Engine'],
    pricing: '$399 - $2,499/month',
    category: 'Personalization',
    popular: true
  },
  {
    title: 'Blockchain Identity Verification',
    description: 'Decentralized identity verification with KYC/AML compliance and privacy protection.',
    icon: Lock,
    features: ['Identity Verification', 'KYC/AML Compliance', 'Privacy Protection', 'Blockchain Integration'],
    pricing: '$0.50 - $2.00 per verification',
    category: 'Identity & Security',
    popular: true
  },
  {
    title: 'AI-Powered Voice Analytics',
    description: 'Advanced voice analysis for call centers with emotion detection and quality scoring.',
    icon: Mic,
    features: ['Emotion Detection', 'Quality Scoring', 'Sentiment Analysis', 'Performance Metrics'],
    pricing: '$199 - $1,299/month',
    category: 'Voice Analytics',
    popular: true
  },
  {
    title: 'Quantum-Safe Password Manager',
    description: 'Next-generation password management with quantum-resistant encryption and biometric authentication.',
    icon: Lock,
    features: ['Quantum-Resistant Encryption', 'Biometric Auth', 'Zero-Knowledge Architecture', 'Cross-Platform Sync'],
    pricing: '$9 - $49/month',
    category: 'Security',
    popular: true
  },
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Personal and business carbon footprint tracking with AI-powered reduction recommendations.',
    icon: Sprout,
    features: ['Real-time Tracking', 'AI Recommendations', 'Offset Marketplace', 'Sustainability Reports'],
    pricing: '$19 - $99/month',
    category: 'Sustainability',
    popular: true
  },
  {
    title: 'Blockchain Document Notarization',
    description: 'Immutable document verification and notarization using blockchain technology.',
    icon: FileText,
    features: ['Blockchain Verification', 'Immutable Records', 'Legal Compliance', 'API Integration'],
    pricing: '$0.50 - $5.00 per document',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Tracker',
    description: 'Personal mental health monitoring with AI insights and professional integration.',
    icon: Heart,
    features: ['Mood Tracking', 'AI Insights', 'Professional Integration', 'Crisis Detection'],
    pricing: '$14 - $79/month',
    category: 'Health & Wellness',
    popular: true
  },
  {
    title: 'Smart Contract Audit Platform',
    description: 'Automated smart contract security auditing with comprehensive vulnerability detection.',
    icon: Shield,
    features: ['Automated Auditing', 'Vulnerability Detection', 'Gas Optimization', 'Compliance Checking'],
    pricing: '$299 - $2,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Assistant',
    description: 'Intelligent personal finance management with budgeting, investment advice, and goal tracking.',
    icon: DollarSign,
    features: ['Smart Budgeting', 'Investment Advice', 'Goal Tracking', 'Expense Categorization'],
    pricing: '$9 - $49/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Edge Computing Analytics Platform',
    description: 'Real-time analytics processing at the edge for IoT and distributed systems.',
    icon: Network,
    features: ['Edge Processing', 'Real-time Analytics', 'IoT Integration', 'Low Latency'],
    pricing: '$199 - $1,999/month',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'AI-Powered Language Learning',
    description: 'Personalized language learning with AI tutors and immersive conversation practice.',
    icon: Globe,
    features: ['AI Tutors', 'Conversation Practice', 'Progress Tracking', 'Cultural Context'],
    pricing: '$19 - $99/month',
    category: 'Education',
    popular: true
  },
  {
    title: 'Quantum Random Number Generator',
    description: 'True quantum random number generation for cryptographic applications and gaming.',
    icon: Cpu,
    features: ['Quantum Entropy', 'Cryptographic Grade', 'API Access', 'Real-time Generation'],
    pricing: '$99 - $999/month',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'AI-Powered Sleep Optimization',
    description: 'Personalized sleep tracking and optimization using AI and wearable integration.',
    icon: Moon,
    features: ['Sleep Analysis', 'AI Recommendations', 'Wearable Integration', 'Environment Control'],
    pricing: '$14 - $79/month',
    category: 'Health & Wellness',
    popular: true
  },
  {
    title: 'Decentralized Identity Management',
    description: 'Self-sovereign identity solution with privacy-preserving authentication and verification.',
    icon: Users,
    features: ['Self-Sovereign Identity', 'Privacy-Preserving', 'Cross-Platform', 'Zero-Knowledge Proofs'],
    pricing: '$29 - $199/month',
    category: 'Identity Management',
    popular: true
  },
  {
    title: 'AI-Powered Code Documentation Generator',
    description: 'Automated code documentation generation with AI-powered code analysis and explanation.',
    icon: Code,
    features: ['Auto Documentation', 'Code Analysis', 'API Documentation', 'Version Control Integration'],
    pricing: '$49 - $299/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Smart Home Energy Optimizer',
    description: 'AI-powered home energy management with smart device integration and cost optimization.',
    icon: Zap,
    features: ['Energy Monitoring', 'Smart Device Control', 'Cost Optimization', 'Renewable Integration'],
    pricing: '$19 - $99/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Recipe Generator',
    description: 'Personalized recipe creation based on available ingredients, dietary restrictions, and preferences.',
    icon: ChefHat,
    features: ['Ingredient-Based Recipes', 'Dietary Restrictions', 'Nutritional Analysis', 'Shopping Lists'],
    pricing: '$9 - $49/month',
    category: 'Food & Cooking',
    popular: true
  },
  {
    title: 'Blockchain Supply Chain Tracker',
    description: 'End-to-end supply chain transparency using blockchain for product authenticity and sustainability.',
    icon: Package,
    features: ['Product Tracking', 'Authenticity Verification', 'Sustainability Metrics', 'Transparency Reports'],
    pricing: '$199 - $1,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Personal Stylist',
    description: 'Virtual personal styling assistant with outfit recommendations and wardrobe management.',
    icon: Shirt,
    features: ['Outfit Recommendations', 'Wardrobe Management', 'Style Analysis', 'Shopping Integration'],
    pricing: '$14 - $79/month',
    category: 'Fashion & Style',
    popular: true
  },
  {
    title: 'Quantum-Enhanced Weather Prediction',
    description: 'Advanced weather forecasting using quantum computing for improved accuracy and longer predictions.',
    icon: CloudRain,
    features: ['Quantum Algorithms', 'Extended Forecasts', 'Hyperlocal Data', 'Climate Modeling'],
    pricing: '$99 - $999/month',
    category: 'Weather & Climate',
    popular: true
  },
  {
    title: 'AI-Powered Plant Care Assistant',
    description: 'Smart plant monitoring and care recommendations using computer vision and IoT sensors.',
    icon: Sprout,
    features: ['Plant Identification', 'Care Recommendations', 'Health Monitoring', 'Watering Schedules'],
    pricing: '$9 - $49/month',
    category: 'Gardening',
    popular: true
  },
  {
    title: 'Decentralized Social Media Platform',
    description: 'Privacy-focused social media with decentralized content storage and user-controlled data.',
    icon: MessageSquare,
    features: ['Decentralized Storage', 'User-Controlled Data', 'Privacy-First', 'Content Monetization'],
    pricing: '$19 - $99/month',
    category: 'Social Media',
    popular: true
  },
  {
    title: 'AI-Powered Habit Tracker',
    description: 'Intelligent habit formation and tracking with personalized recommendations and motivation.',
    icon: Target,
    features: ['Habit Tracking', 'AI Recommendations', 'Progress Analytics', 'Community Support'],
    pricing: '$9 - $49/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'Smart Contract Insurance Platform',
    description: 'Automated insurance using smart contracts for transparent and instant claim processing.',
    icon: Shield,
    features: ['Smart Contracts', 'Automated Claims', 'Transparent Pricing', 'Instant Payouts'],
    pricing: '$29 - $199/month',
    category: 'Insurance',
    popular: true
  },
  {
    title: 'AI-Powered Meditation Guide',
    description: 'Personalized meditation and mindfulness app with AI-guided sessions and progress tracking.',
    icon: Heart,
    features: ['AI-Guided Sessions', 'Progress Tracking', 'Personalized Content', 'Biometric Integration'],
    pricing: '$14 - $79/month',
    category: 'Wellness',
    popular: true
  },
  {
    title: 'Quantum-Secure Communication Platform',
    description: 'Ultra-secure messaging and communication using quantum key distribution and encryption.',
    icon: Lock,
    features: ['Quantum Encryption', 'Perfect Forward Secrecy', 'End-to-End Encryption', 'Quantum Keys'],
    pricing: '$49 - $299/month',
    category: 'Secure Communication',
    popular: true
  },
  {
    title: 'AI-Powered Travel Planner',
    description: 'Intelligent travel planning with personalized itineraries, real-time updates, and cost optimization.',
    icon: Plane,
    features: ['Personalized Itineraries', 'Real-time Updates', 'Cost Optimization', 'Local Insights'],
    pricing: '$19 - $99/month',
    category: 'Travel',
    popular: true
  },
  {
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting platform using blockchain for elections and decision-making.',
    icon: Vote,
    features: ['Blockchain Security', 'Transparent Results', 'Voter Verification', 'Audit Trail'],
    pricing: '$199 - $1,999/month',
    category: 'Governance',
    popular: true
  },
  {
    title: 'AI-Powered Pet Care Assistant',
    description: 'Smart pet monitoring and care recommendations using AI and IoT sensors.',
    icon: Heart,
    features: ['Health Monitoring', 'Care Recommendations', 'Behavior Analysis', 'Vet Integration'],
    pricing: '$14 - $79/month',
    category: 'Pet Care',
    popular: true
  },
  {
    title: 'Quantum Machine Learning Platform',
    description: 'Quantum-enhanced machine learning for solving complex optimization and pattern recognition problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Pattern Recognition', 'Hybrid Computing'],
    pricing: '$999 - $9,999/month',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI-Powered Home Security System',
    description: 'Intelligent home security with facial recognition, anomaly detection, and automated responses.',
    icon: Shield,
    features: ['Facial Recognition', 'Anomaly Detection', 'Automated Alerts', 'Mobile Integration'],
    pricing: '$29 - $199/month',
    category: 'Home Security',
    popular: true
  },
  {
    title: 'Decentralized File Storage',
    description: 'Secure, decentralized file storage with encryption and redundancy across multiple nodes.',
    icon: HardDrive,
    features: ['Decentralized Storage', 'End-to-End Encryption', 'Redundancy', 'P2P Network'],
    pricing: '$9 - $99/month',
    category: 'Cloud Storage',
    popular: true
  },
  {
    title: 'AI-Powered Personal Trainer',
    description: 'Virtual personal trainer with AI-powered workout plans, form analysis, and progress tracking.',
    icon: Dumbbell,
    features: ['Workout Plans', 'Form Analysis', 'Progress Tracking', 'Nutrition Guidance'],
    pricing: '$19 - $99/month',
    category: 'Fitness',
    popular: true
  },
  {
    title: 'Smart Contract Development Platform',
    description: 'No-code smart contract creation and deployment platform with testing and auditing tools.',
    icon: Code,
    features: ['No-Code Interface', 'Testing Tools', 'Audit Integration', 'Multi-Blockchain Support'],
    pricing: '$99 - $999/month',
    category: 'Blockchain Development',
    popular: true
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Advanced personal assistant with natural language processing and task automation.',
    icon: Bot,
    features: ['Natural Language', 'Task Automation', 'Calendar Management', 'Email Processing'],
    pricing: '$29 - $199/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'Quantum Cryptography Key Exchange',
    description: 'Ultra-secure key exchange using quantum cryptography for unbreakable encryption.',
    icon: Key,
    features: ['Quantum Key Distribution', 'Unbreakable Security', 'Real-time Exchange', 'Tamper Detection'],
    pricing: '$199 - $1,999/month',
    category: 'Quantum Security',
    popular: true
  },
  {
    title: 'AI-Powered Investment Advisor',
    description: 'Personalized investment advice and portfolio management using AI and machine learning.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Market Predictions', 'Automated Rebalancing'],
    pricing: '$49 - $299/month',
    category: 'Investment',
    popular: true
  },
  {
    title: 'Blockchain-Based Loyalty Program',
    description: 'Decentralized loyalty and rewards program with tokenization and cross-platform integration.',
    icon: Gift,
    features: ['Token Rewards', 'Cross-Platform', 'Smart Contracts', 'Transparent Rules'],
    pricing: '$99 - $999/month',
    category: 'Loyalty Programs',
    popular: true
  },
  {
    title: 'AI-Powered Language Tutor',
    description: 'Personalized language learning with AI conversation partners and cultural immersion.',
    icon: Globe,
    features: ['AI Conversation Partners', 'Cultural Immersion', 'Pronunciation Analysis', 'Progress Tracking'],
    pricing: '$19 - $99/month',
    category: 'Language Learning',
    popular: true
  },
  {
    title: 'Quantum Random Number Generator API',
    description: 'True quantum random number generation service for applications requiring cryptographic-grade randomness.',
    icon: Cpu,
    features: ['Quantum Entropy', 'High Throughput', 'API Access', 'Real-time Generation'],
    pricing: '$0.001 - $0.01 per number',
    category: 'Quantum Services',
    popular: true
  },
  {
    title: 'AI-Powered Home Automation',
    description: 'Intelligent home automation with learning capabilities and predictive control.',
    icon: Home,
    features: ['Learning Algorithms', 'Predictive Control', 'Voice Integration', 'Energy Optimization'],
    pricing: '$29 - $199/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'Decentralized Social Network',
    description: 'Privacy-focused social network with user-controlled data and decentralized content storage.',
    icon: Users,
    features: ['User-Controlled Data', 'Decentralized Storage', 'Privacy-First', 'Content Monetization'],
    pricing: '$9 - $49/month',
    category: 'Social Networking',
    popular: true
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security scanning, performance optimization, and best practices enforcement.',
    icon: Code,
    features: ['Automated Reviews', 'Security Scanning', 'Performance Analysis', 'Best Practices Check'],
    pricing: '$299 - $1,999/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Smart Contract Security Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Lock,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Compliance Checking', 'Audit Reports'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered SEO Content Optimizer',
    description: 'Intelligent content optimization for search engines with real-time ranking improvements.',
    icon: Search,
    features: ['Keyword Research', 'Content Analysis', 'Ranking Tracking', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'SEO & Marketing',
    popular: true
  },
  {
    title: 'Multi-Channel Customer Data Platform',
    description: 'Unified customer data platform with real-time synchronization across all touchpoints.',
    icon: Database,
    features: ['Data Unification', 'Real-time Sync', 'Customer 360 View', 'Privacy Compliance'],
    pricing: '$399 - $2,499/month',
    category: 'Customer Data',
    popular: true
  },
  {
    title: 'AI-Powered Video Content Generator',
    description: 'Automated video creation from text, images, and audio with professional editing capabilities.',
    icon: Video,
    features: ['Text-to-Video', 'Auto Editing', 'Voice Synthesis', 'Template Library'],
    pricing: '$199 - $1,499/month',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    description: 'AI-driven supply chain optimization with demand forecasting and inventory management.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Analytics', 'Risk Assessment'],
    pricing: '$599 - $3,999/month',
    category: 'Supply Chain',
    popular: true
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
    icon: BarChart3,
    title: 'Analytics Built-in',
    description: 'Comprehensive usage and performance metrics'
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'GDPR and SOC 2 compliant by default'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Fast Time to Market',
    description: 'Launch your SaaS in weeks, not months',
    stat: '80%'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Lower development and maintenance costs',
    stat: '60%'
  },
  {
    icon: Star,
    title: 'High Quality',
    description: 'Production-ready code and infrastructure',
    stat: '99.9%'
  },
  {
    icon: TrendingUp,
    title: 'Scalable',
    description: 'Handles growth from startup to enterprise',
    stat: '10x'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small teams and MVPs',
    price: '$299',
    period: '/month',
    features: [
      'Up to 1,000 users',
      'Basic analytics',
      'Email support',
      'Standard security',
      '1 custom integration'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$799',
    period: '/month',
    features: [
      'Up to 10,000 users',
      'Advanced analytics',
      'Priority support',
      'Enhanced security',
      '5 custom integrations',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited users',
      'Custom analytics',
      'Dedicated support',
      'Enterprise security',
      'Unlimited integrations',
      'Custom development'
    ],
    popular: false
  }
];

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable Micro SaaS solutions designed for specific business needs. Rapid deployment, enterprise security, and built-in analytics." />
        <meta name="keywords" content="Micro SaaS, SaaS solutions, cloud applications, scalable software, business automation" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Cloud className="h-16 w-16 text-purple-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Micro{' '}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  SaaS
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Scalable software solutions designed for specific business needs. Rapid deployment, enterprise security, and built-in analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Your SaaS
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Products
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready-to-deploy SaaS solutions that solve specific business problems with minimal setup time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative ${
                    product.popular ? 'ring-2 ring-purple-200' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-600 group-hover:text-indigo-600 transition-colors">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-semibold text-purple-600">{product.pricing}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Micro SaaS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for modern businesses that need fast, reliable, and scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
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
              Proven Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Micro SaaS solutions deliver measurable business impact.
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
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
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

      {/* Pricing Section */}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </motion.div>

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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Micro SaaS?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s build the perfect SaaS solution for your business needs. Fast, secure, and scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}