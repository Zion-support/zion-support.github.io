'use client';
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  BarChart, 
  Calendar, 
  FileText, 
  Video, 
  Smartphone, 
  Mail, 
  Users, 
  DollarSign, 
  Settings, 
  Shield, 
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Globe,
  Rocket,
  Truck,
  Stethoscope,
  Clock,
  Database,
  ShoppingCart,
  Scale
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    // Productivity & Project Management
    { 
      name: 'AI Project Manager Pro', 
      href: '/ai-project-manager', 
      icon: BarChart, 
      category: 'Productivity', 
      price: '$199/mo',
      description: 'Intelligent project management with AI-powered insights, predictive analytics, and automated resource allocation',
      features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Assessment', 'Predictive Analytics', 'Team Performance Insights'],
      popular: true,
      rating: 4.8,
      users: '2,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Smart Calendar Pro', 
      href: '/ai-smart-calendar', 
      icon: Calendar, 
      category: 'Productivity', 
      price: '$89/mo',
      description: 'AI-powered calendar management with smart scheduling, conflict resolution, and productivity optimization',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Insights', 'Energy Level Tracking', 'Focus Time Blocks'],
      popular: true,
      rating: 4.7,
      users: '1,800+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Workflow Automation Studio', 
      href: '/ai-workflow-automation', 
      icon: Zap, 
      category: 'Productivity', 
      price: '$149/mo',
      description: 'Visual workflow builder with AI-powered automation for complex business processes',
      features: ['Visual Workflow Builder', 'AI Process Discovery', 'Smart Triggers', 'Error Handling', 'Performance Analytics', 'Integration Hub'],
      popular: true,
      rating: 4.9,
      users: '3,200+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Time Tracker Pro', 
      href: '/ai-time-tracker', 
      icon: Clock, 
      category: 'Productivity', 
      price: '$59/mo',
      description: 'Intelligent time tracking with automatic categorization and productivity insights',
      features: ['Auto Time Tracking', 'Smart Categorization', 'Productivity Analytics', 'Focus Mode', 'Distraction Alerts', 'Team Reports'],
      popular: false,
      rating: 4.6,
      users: '1,200+',
      trial: '14-day free trial'
    },

    // Content Creation & Marketing
    { 
      name: 'AI Content Writer Pro', 
      href: '/ai-content-writer', 
      icon: FileText, 
      category: 'Content', 
      price: '$129/mo',
      description: 'Advanced AI content creation with SEO optimization, brand consistency, and multi-platform publishing',
      features: ['SEO Optimization', 'Brand Voice Training', 'Content Templates', 'Multi-language Support', 'Plagiarism Check', 'Performance Analytics'],
      popular: true,
      rating: 4.9,
      users: '4,100+',
      trial: '10-day free trial'
    },
    { 
      name: 'AI Video Generator Pro', 
      href: '/ai-video-generator', 
      icon: Video, 
      category: 'Content', 
      price: '$199/mo',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated storytelling',
      features: ['Auto Editing', 'Voice Synthesis', 'Visual Effects', 'Template Library', 'Brand Kit', 'Social Media Optimization'],
      popular: true,
      rating: 4.6,
      users: '2,800+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Social Media Manager Pro', 
      href: '/ai-social-media-manager', 
      icon: Smartphone, 
      category: 'Marketing', 
      price: '$99/mo',
      description: 'Automated social media management with AI content generation, scheduling, and engagement optimization',
      features: ['Auto Posting', 'Content Generation', 'Analytics Dashboard', 'Engagement Optimization', 'Hashtag Research', 'Competitor Analysis'],
      popular: true,
      rating: 4.8,
      users: '3,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Email Marketing Suite', 
      href: '/ai-email-marketing', 
      icon: Mail, 
      category: 'Marketing', 
      price: '$79/mo',
      description: 'Intelligent email marketing with personalization, A/B testing, and automated campaign optimization',
      features: ['Personalization Engine', 'A/B Testing', 'Automation Workflows', 'Advanced Analytics', 'Deliverability Optimization', 'Template Library'],
      popular: true,
      rating: 4.7,
      users: '2,900+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI SEO Optimizer Pro', 
      href: '/ai-seo-optimizer', 
      icon: Globe, 
      category: 'Marketing', 
      price: '$149/mo',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking predictions',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Predictions', 'Competitor Analysis', 'Technical SEO Audit', 'Link Building'],
      popular: false,
      rating: 4.5,
      users: '1,600+',
      trial: '7-day free trial'
    },

    // Business & Finance
    { 
      name: 'AI Financial Advisor Pro', 
      href: '/ai-financial-advisor', 
      icon: DollarSign, 
      category: 'Finance', 
      price: '$299/mo',
      description: 'Personalized financial planning and investment advice powered by advanced AI algorithms',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Tax Optimization', 'Retirement Planning', 'Market Predictions'],
      popular: true,
      rating: 4.8,
      users: '1,400+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Invoice Generator Pro', 
      href: '/ai-invoice-generator', 
      icon: FileText, 
      category: 'Business', 
      price: '$49/mo',
      description: 'Automated invoice generation with smart templates, payment tracking, and financial reporting',
      features: ['Smart Templates', 'Auto Calculations', 'Payment Tracking', 'Financial Reports', 'Tax Integration', 'Client Portal'],
      popular: true,
      rating: 4.7,
      users: '2,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Expense Tracker Pro', 
      href: '/ai-expense-tracker', 
      icon: BarChart, 
      category: 'Finance', 
      price: '$39/mo',
      description: 'Intelligent expense tracking with automatic categorization, receipt scanning, and budget management',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Management', 'Tax Preparation', 'Expense Reports', 'Spending Insights'],
      popular: false,
      rating: 4.6,
      users: '1,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Lead Generation Suite', 
      href: '/ai-lead-generation', 
      icon: Users, 
      category: 'Business', 
      price: '$199/mo',
      description: 'AI-powered lead generation with automated prospecting, qualification, and nurturing',
      features: ['Lead Scoring', 'Auto Prospecting', 'Email Sequences', 'CRM Integration', 'Lead Nurturing', 'Conversion Analytics'],
      popular: true,
      rating: 4.8,
      users: '2,700+',
      trial: '21-day free trial'
    },

    // Development & Technical
    { 
      name: 'AI Code Assistant Pro', 
      href: '/ai-code-assistant', 
      icon: Code, 
      category: 'Development', 
      price: '$179/mo',
      description: 'Advanced AI coding assistant with code generation, debugging, and optimization suggestions',
      features: ['Code Generation', 'Debug Assistant', 'Code Review', 'Documentation', 'Test Generation', 'Performance Optimization'],
      popular: true,
      rating: 4.9,
      users: '4,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI API Builder Pro', 
      href: '/ai-api-builder', 
      icon: Settings, 
      category: 'Development', 
      price: '$249/mo',
      description: 'Build and manage APIs with AI-powered code generation, testing, and documentation',
      features: ['API Generation', 'Auto Testing', 'Documentation', 'Rate Limiting', 'Authentication', 'Monitoring'],
      popular: false,
      rating: 4.7,
      users: '1,300+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Database Optimizer', 
      href: '/ai-database-optimizer', 
      icon: Database, 
      category: 'Development', 
      price: '$199/mo',
      description: 'AI-powered database optimization with query analysis, indexing suggestions, and performance monitoring',
      features: ['Query Optimization', 'Index Suggestions', 'Performance Monitoring', 'Security Analysis', 'Backup Management', 'Scaling Recommendations'],
      popular: false,
      rating: 4.6,
      users: '1,100+',
      trial: '14-day free trial'
    },

    // Security & Compliance
    { 
      name: 'AI Security Monitor Pro', 
      href: '/ai-security-monitor', 
      icon: Shield, 
      category: 'Security', 
      price: '$299/mo',
      description: 'AI-powered security monitoring with threat detection, vulnerability assessment, and incident response',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Monitoring', 'Security Reports', 'Risk Assessment'],
      popular: true,
      rating: 4.8,
      users: '1,900+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Password Manager Pro', 
      href: '/ai-password-manager', 
      icon: Lock, 
      category: 'Security', 
      price: '$29/mo',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring',
      features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Multi-device Sync', 'Team Sharing', '2FA Integration'],
      popular: true,
      rating: 4.7,
      users: '3,800+',
      trial: '14-day free trial'
    },

    // Specialized Industry Solutions
    { 
      name: 'AI Healthcare Assistant Pro', 
      href: '/ai-healthcare-assistant', 
      icon: Stethoscope, 
      category: 'Healthcare', 
      price: '$399/mo',
      description: 'AI-powered healthcare management with patient scheduling, medical records, and diagnostic assistance',
      features: ['Patient Scheduling', 'Medical Records', 'Diagnostic Support', 'Prescription Management', 'Insurance Processing', 'Compliance Tracking'],
      popular: false,
      rating: 4.9,
      users: '800+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Legal Assistant Pro', 
      href: '/ai-legal-assistant', 
      icon: Scale, 
      category: 'Legal', 
      price: '$349/mo',
      description: 'AI-powered legal research, document analysis, and case management for law firms',
      features: ['Legal Research', 'Document Analysis', 'Case Management', 'Contract Review', 'Compliance Tracking', 'Client Communication'],
      popular: false,
      rating: 4.8,
      users: '600+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI E-commerce Optimizer', 
      href: '/ai-ecommerce-optimizer', 
      icon: ShoppingCart, 
      category: 'E-commerce', 
      price: '$199/mo',
      description: 'AI-powered e-commerce optimization with product recommendations, pricing strategies, and inventory management',
      features: ['Product Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Customer Segmentation', 'Conversion Optimization', 'Analytics Dashboard'],
      popular: true,
      rating: 4.7,
      users: '2,100+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI HR Assistant Pro', 
      href: '/ai-hr-assistant', 
      icon: Users, 
      category: 'HR', 
      price: '$179/mo',
      description: 'AI-powered HR management with recruitment, employee engagement, and performance analytics',
      features: ['Resume Screening', 'Interview Scheduling', 'Employee Onboarding', 'Performance Tracking', 'Engagement Surveys', 'Compliance Management'],
      popular: true,
      rating: 4.6,
      users: '1,700+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Quantum Financial Oracle', 
      href: '/ai-quantum-financial-oracle', 
      icon: DollarSign, 
      category: 'Finance', 
      price: '$2,999/mo',
      description: 'Revolutionary quantum-powered financial analysis with ultra-fast market predictions and risk assessment',
      features: ['Quantum Market Analysis', 'Ultra-fast Predictions', 'Risk Assessment', 'Portfolio Optimization', 'Cryptocurrency Analysis', 'Real-time Trading Signals'],
      popular: true,
      rating: 4.9,
      users: '150+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI 3D Generation Studio', 
      href: '/ai-3d-generation', 
      icon: FileText, 
      category: 'Creative', 
      price: '$299/mo',
      description: 'AI-powered 3D model generation, animation, and virtual environment creation',
      features: ['3D Model Generation', 'Animation Creation', 'Virtual Environments', 'Texture Generation', 'Rigging Automation', 'Rendering Optimization'],
      popular: true,
      rating: 4.7,
      users: '1,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Mobile App Builder Pro', 
      href: '/ai-mobile-app-builder', 
      icon: Smartphone, 
      category: 'Development', 
      price: '$399/mo',
      description: 'AI-powered mobile app development with automated coding, testing, and deployment',
      features: ['Auto Code Generation', 'UI/UX Design', 'Cross-platform Development', 'Automated Testing', 'App Store Optimization', 'Performance Monitoring'],
      popular: true,
      rating: 4.8,
      users: '2,300+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Logo Designer Pro', 
      href: '/ai-logo-designer', 
      icon: FileText, 
      category: 'Design', 
      price: '$89/mo',
      description: 'AI-powered logo design with brand analysis, multiple variations, and style consistency',
      features: ['Brand Analysis', 'Multiple Variations', 'Style Consistency', 'Color Palette Generation', 'Vector Export', 'Brand Guidelines'],
      popular: true,
      rating: 4.6,
      users: '3,100+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Image Recognition Pro', 
      href: '/ai-image-recognition', 
      icon: FileText, 
      category: 'Computer Vision', 
      price: '$199/mo',
      description: 'Advanced image recognition and analysis with object detection, facial recognition, and content moderation',
      features: ['Object Detection', 'Facial Recognition', 'Content Moderation', 'Text Extraction', 'Scene Analysis', 'Custom Model Training'],
      popular: true,
      rating: 4.8,
      users: '2,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Manufacturing Optimizer', 
      href: '/ai-manufacturing', 
      icon: Settings, 
      category: 'Manufacturing', 
      price: '$599/mo',
      description: 'AI-powered manufacturing optimization with predictive maintenance and quality control',
      features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain Management', 'Defect Detection', 'Energy Optimization'],
      popular: false,
      rating: 4.7,
      users: '800+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Insurance Claims Processor', 
      href: '/ai-insurance', 
      icon: Shield, 
      category: 'Insurance', 
      price: '$449/mo',
      description: 'AI-powered insurance claims processing with automated assessment and fraud detection',
      features: ['Claims Assessment', 'Fraud Detection', 'Document Processing', 'Risk Analysis', 'Automated Payouts', 'Compliance Monitoring'],
      popular: true,
      rating: 4.8,
      users: '1,400+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Inventory Manager Pro', 
      href: '/ai-inventory-manager', 
      icon: BarChart, 
      category: 'Business', 
      price: '$149/mo',
      description: 'Intelligent inventory management with demand forecasting and automated reordering',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Supplier Management', 'Cost Analysis', 'Multi-location Support'],
      popular: true,
      rating: 4.6,
      users: '2,100+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Quality Assurance Suite', 
      href: '/ai-quality-assurance', 
      icon: CheckCircle, 
      category: 'Testing', 
      price: '$299/mo',
      description: 'AI-powered quality assurance with automated testing, bug detection, and performance optimization',
      features: ['Automated Testing', 'Bug Detection', 'Performance Testing', 'Security Testing', 'Load Testing', 'Test Case Generation'],
      popular: true,
      rating: 4.7,
      users: '1,900+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Education Platform Pro', 
      href: '/ai-education', 
      icon: BookOpen, 
      category: 'Education', 
      price: '$199/mo',
      description: 'AI-powered educational platform with personalized learning and automated assessment',
      features: ['Personalized Learning', 'Automated Assessment', 'Progress Tracking', 'Content Generation', 'Student Analytics', 'Adaptive Curriculum'],
      popular: true,
      rating: 4.8,
      users: '2,500+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Fitness Coach Pro', 
      href: '/ai-fitness-coach', 
      icon: Users, 
      category: 'Health', 
      price: '$79/mo',
      description: 'AI-powered fitness coaching with personalized workout plans and nutrition guidance',
      features: ['Personalized Workouts', 'Nutrition Guidance', 'Progress Tracking', 'Form Analysis', 'Goal Setting', 'Community Features'],
      popular: true,
      rating: 4.6,
      users: '3,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Fraud Detection Suite', 
      href: '/ai-fraud-detection', 
      icon: Shield, 
      category: 'Security', 
      price: '$399/mo',
      description: 'Advanced AI fraud detection with real-time monitoring and automated response',
      features: ['Real-time Monitoring', 'Pattern Recognition', 'Automated Response', 'Risk Scoring', 'Transaction Analysis', 'Compliance Reporting'],
      popular: true,
      rating: 4.9,
      users: '1,600+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Predictive Analytics Pro', 
      href: '/ai-predictive-analytics', 
      icon: BarChart, 
      category: 'Analytics', 
      price: '$349/mo',
      description: 'Advanced predictive analytics with machine learning models and business intelligence',
      features: ['Machine Learning Models', 'Business Intelligence', 'Trend Analysis', 'Forecasting', 'Data Visualization', 'Custom Dashboards'],
      popular: true,
      rating: 4.8,
      users: '2,200+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Predictive Maintenance Pro', 
      href: '/ai-predictive-maintenance', 
      icon: Settings, 
      category: 'Industrial', 
      price: '$499/mo',
      description: 'AI-powered predictive maintenance for industrial equipment and machinery',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert Systems'],
      popular: false,
      rating: 4.7,
      users: '900+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI NLP Processing Suite', 
      href: '/ai-nlp', 
      icon: FileText, 
      category: 'Language', 
      price: '$199/mo',
      description: 'Advanced natural language processing with sentiment analysis and language translation',
      features: ['Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Entity Recognition', 'Language Generation', 'Conversation AI'],
      popular: true,
      rating: 4.7,
      users: '2,600+',
      trial: '14-day free trial'
    },

    // New Innovative Micro SAAS Services
    { 
      name: 'AI Space Technology Pro', 
      href: '/ai-space-technology-pro', 
      icon: Rocket, 
      category: 'Space Tech', 
      price: '$5,500/mo',
      description: 'Advanced space exploration and satellite management solutions with AI-powered mission planning',
      features: ['Satellite Operations', 'Space Mission Planning', 'Astronomical Data Analysis', 'Orbital Mechanics', 'Space Weather Prediction', 'Satellite Constellation Management'],
      popular: true,
      rating: 4.9,
      users: '150+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Financial Crime Detection Pro', 
      href: '/ai-financial-crime-detection-pro', 
      icon: Shield, 
      category: 'Financial Security', 
      price: '$2,800/mo',
      description: 'Real-time fraud detection and financial security monitoring with advanced pattern recognition',
      features: ['Real-time Fraud Detection', 'Risk Assessment', 'Compliance Monitoring', 'Transaction Analysis', 'Behavioral Analytics', 'Regulatory Reporting'],
      popular: true,
      rating: 4.8,
      users: '1,200+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Supply Chain Optimization Pro', 
      href: '/ai-supply-chain-optimization-pro', 
      icon: Truck, 
      category: 'Supply Chain', 
      price: '$3,200/mo',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Logistics Automation', 'Supplier Management', 'Risk Assessment', 'Cost Optimization'],
      popular: true,
      rating: 4.7,
      users: '1,800+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Energy Grid Management Pro', 
      href: '/ai-energy-grid-management-pro', 
      icon: Zap, 
      category: 'Energy', 
      price: '$4,200/mo',
      description: 'Smart energy grid management with AI-powered optimization and renewable energy integration',
      features: ['Grid Optimization', 'Renewable Energy Integration', 'Demand Response', 'Energy Storage Management', 'Predictive Maintenance', 'Carbon Footprint Tracking'],
      popular: false,
      rating: 4.8,
      users: '400+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Agricultural Intelligence Pro', 
      href: '/ai-agricultural-intelligence-pro', 
      icon: Sprout, 
      category: 'Agriculture', 
      price: '$2,500/mo',
      description: 'AI-powered agricultural solutions with precision farming and crop optimization',
      features: ['Precision Farming', 'Crop Monitoring', 'Yield Prediction', 'Soil Analysis', 'Pest Detection', 'Weather Integration'],
      popular: true,
      rating: 4.6,
      users: '2,100+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Legal Research Pro', 
      href: '/ai-legal-research-pro', 
      icon: Scale, 
      category: 'Legal', 
      price: '$3,500/mo',
      description: 'Advanced legal research and case analysis with AI-powered document review',
      features: ['Legal Research', 'Case Analysis', 'Document Review', 'Precedent Finding', 'Contract Analysis', 'Compliance Checking'],
      popular: true,
      rating: 4.8,
      users: '800+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Real Estate Intelligence Pro', 
      href: '/ai-real-estate-intelligence-pro', 
      icon: Home, 
      category: 'Real Estate', 
      price: '$1,800/mo',
      description: 'AI-powered real estate analysis with market prediction and property valuation',
      features: ['Property Valuation', 'Market Analysis', 'Investment Recommendations', 'Risk Assessment', 'Trend Prediction', 'Portfolio Management'],
      popular: true,
      rating: 4.7,
      users: '1,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Travel Optimization Pro', 
      href: '/ai-travel-optimization-pro', 
      icon: Plane, 
      category: 'Travel', 
      price: '$1,200/mo',
      description: 'Intelligent travel planning and optimization with AI-powered recommendations',
      features: ['Travel Planning', 'Route Optimization', 'Price Prediction', 'Personalized Recommendations', 'Risk Assessment', 'Booking Management'],
      popular: true,
      rating: 4.6,
      users: '3,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Restaurant Management Pro', 
      href: '/ai-restaurant-management-pro', 
      icon: ChefHat, 
      category: 'Food Service', 
      price: '$1,500/mo',
      description: 'Complete restaurant management solution with AI-powered operations optimization',
      features: ['Inventory Management', 'Menu Optimization', 'Staff Scheduling', 'Customer Analytics', 'Waste Reduction', 'Revenue Optimization'],
      popular: true,
      rating: 4.5,
      users: '2,800+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Event Management Pro', 
      href: '/ai-event-management-pro', 
      icon: Calendar, 
      category: 'Events', 
      price: '$1,000/mo',
      description: 'AI-powered event planning and management with automated coordination',
      features: ['Event Planning', 'Vendor Management', 'Attendee Analytics', 'Budget Optimization', 'Timeline Management', 'Feedback Analysis'],
      popular: false,
      rating: 4.6,
      users: '1,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Pet Care Assistant Pro', 
      href: '/ai-pet-care-assistant-pro', 
      icon: Heart, 
      category: 'Pet Care', 
      price: '$89/mo',
      description: 'AI-powered pet care management with health monitoring and behavior analysis',
      features: ['Health Monitoring', 'Behavior Analysis', 'Feeding Schedules', 'Vet Reminders', 'Activity Tracking', 'Medical Records'],
      popular: true,
      rating: 4.8,
      users: '4,500+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Home Automation Pro', 
      href: '/ai-home-automation-pro', 
      icon: Home, 
      category: 'Smart Home', 
      price: '$299/mo',
      description: 'Intelligent home automation with AI-powered energy management and security',
      features: ['Energy Management', 'Security Monitoring', 'Climate Control', 'Appliance Control', 'Predictive Maintenance', 'Voice Integration'],
      popular: true,
      rating: 4.7,
      users: '3,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Personal Finance Pro', 
      href: '/ai-personal-finance-pro', 
      icon: DollarSign, 
      category: 'Personal Finance', 
      price: '$149/mo',
      description: 'AI-powered personal finance management with investment advice and budgeting',
      features: ['Budget Planning', 'Investment Advice', 'Expense Tracking', 'Goal Setting', 'Tax Optimization', 'Retirement Planning'],
      popular: true,
      rating: 4.8,
      users: '5,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Learning Management Pro', 
      href: '/ai-learning-management-pro', 
      icon: GraduationCap, 
      category: 'Education', 
      price: '$399/mo',
      description: 'AI-powered learning platform with personalized education and progress tracking',
      features: ['Personalized Learning', 'Progress Tracking', 'Content Generation', 'Assessment Tools', 'Student Analytics', 'Adaptive Curriculum'],
      popular: true,
      rating: 4.7,
      users: '2,900+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Mental Health Assistant Pro', 
      href: '/ai-mental-health-assistant-pro', 
      icon: Heart, 
      category: 'Healthcare', 
      price: '$199/mo',
      description: 'AI-powered mental health support with mood tracking and wellness recommendations',
      features: ['Mood Tracking', 'Wellness Recommendations', 'Stress Analysis', 'Meditation Guidance', 'Progress Monitoring', 'Crisis Support'],
      popular: true,
      rating: 4.9,
      users: '3,600+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Sports Analytics Pro', 
      href: '/ai-sports-analytics-pro', 
      icon: Target, 
      category: 'Sports', 
      price: '$2,200/mo',
      description: 'Advanced sports analytics with performance prediction and injury prevention',
      features: ['Performance Analysis', 'Injury Prediction', 'Tactical Analysis', 'Player Development', 'Game Strategy', 'Recovery Optimization'],
      popular: true,
      rating: 4.8,
      users: '1,400+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Wedding Planner Pro', 
      href: '/ai-wedding-planner-pro', 
      icon: Heart, 
      category: 'Events', 
      price: '$799/mo',
      description: 'AI-powered wedding planning with vendor management and timeline optimization',
      features: ['Vendor Management', 'Timeline Planning', 'Budget Optimization', 'Guest Management', 'Checklist Automation', 'Photo Organization'],
      popular: true,
      rating: 4.7,
      users: '1,800+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Language Learning Pro', 
      href: '/ai-language-learning-pro', 
      icon: Globe, 
      category: 'Education', 
      price: '$129/mo',
      description: 'AI-powered language learning with personalized curriculum and pronunciation analysis',
      features: ['Personalized Curriculum', 'Pronunciation Analysis', 'Conversation Practice', 'Progress Tracking', 'Cultural Context', 'Adaptive Learning'],
      popular: true,
      rating: 4.8,
      users: '6,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Job Matching Pro', 
      href: '/ai-job-matching-pro', 
      icon: Briefcase, 
      category: 'Career', 
      price: '$179/mo',
      description: 'AI-powered job matching and career development with skill assessment',
      features: ['Job Matching', 'Skill Assessment', 'Career Planning', 'Resume Optimization', 'Interview Prep', 'Salary Analysis'],
      popular: true,
      rating: 4.6,
      users: '4,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Personal Trainer Pro', 
      href: '/ai-personal-trainer-pro', 
      icon: Users, 
      category: 'Fitness', 
      price: '$99/mo',
      description: 'AI-powered personal training with workout optimization and form analysis',
      features: ['Workout Planning', 'Form Analysis', 'Progress Tracking', 'Nutrition Guidance', 'Injury Prevention', 'Goal Setting'],
      popular: true,
      rating: 4.7,
      users: '5,800+',
      trial: '14-day free trial'
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'Creative', 'Computer Vision', 'Manufacturing', 'Insurance', 'Testing', 'Education', 'Health', 'Analytics', 'Industrial', 'Language', 'Design', 'Space Tech', 'Financial Security', 'Supply Chain', 'Energy', 'Agriculture', 'Real Estate', 'Travel', 'Food Service', 'Events', 'Pet Care', 'Smart Home', 'Personal Finance', 'Sports', 'Career', 'Fitness'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI-powered micro SaaS tools to streamline your business operations
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {microSAASServices.map((service) => (
            <div
              key={service.name}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                {service.name}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3">Features:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs sm:text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {service.price}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {service.category}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 sm:mb-6 text-xs sm:text-sm">
                <div className="flex items-center text-gray-400">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {service.users}
                </div>
                <div className="text-cyan-400 font-medium">
                  {service.trial}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm sm:text-base">
                Get Started
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your free trial today and experience the power of AI-driven micro SaaS tools
          </p>
          <button className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;