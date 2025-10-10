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
  Scale,
  Palette
} from 'lucide-react';

const microSAASServices = [
    // Productivity & Project Management
    { 
      name: 'AI Project Manager Pro', 
      href: '/ai-project-manager', 
      icon: BarChart, 
      category: 'Productivity', 
      price: '$199/mo',
      description: 'Intelligent project management with AI-powered insights, predictive analytics, and automated resource allocation. Trusted by 2,500+ teams worldwide.',
      features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Assessment', 'Predictive Analytics', 'Team Performance Insights', 'Real-time Collaboration', 'Custom Workflows'],
      popular: true,
      rating: 4.8,
      users: '2,500+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-project-manager',
      capabilities: ['40% faster project delivery', '60% reduction in project overruns', 'Real-time team insights', 'Automated risk detection']
    },
    { 
      name: 'AI Smart Calendar Pro', 
      href: '/ai-smart-calendar', 
      icon: Calendar, 
      category: 'Productivity', 
      price: '$89/mo',
      description: 'AI-powered calendar management with smart scheduling, conflict resolution, and productivity optimization. Integrates with 50+ apps.',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Insights', 'Energy Level Tracking', 'Focus Time Blocks', 'Auto Meeting Prep', 'Travel Time Calculation'],
      popular: true,
      rating: 4.7,
      users: '1,800+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-smart-calendar',
      capabilities: ['35% time saved on scheduling', '90% reduction in double bookings', 'Smart meeting optimization', 'Energy-based scheduling']
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
      description: 'AI-powered HR management with recruitment, employee engagement, and performance analytics. Streamline your HR operations.',
      features: ['Resume Screening', 'Interview Scheduling', 'Employee Onboarding', 'Performance Tracking', 'Engagement Surveys', 'Compliance Management', 'Payroll Integration', 'Benefits Management'],
      popular: true,
      rating: 4.6,
      users: '1,700+',
<<<<<<< HEAD
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
=======
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-hr-assistant',
      capabilities: ['50% faster hiring process', '80% reduction in HR admin time', 'Automated compliance tracking', 'Employee satisfaction insights']
    },

    // New Innovative Services
    { 
      name: 'AI Voice Assistant Pro', 
      href: '/ai-voice-assistant', 
      icon: Brain, 
      category: 'AI Tools', 
      price: '$149/mo',
      description: 'Advanced voice AI assistant with natural language processing, multi-language support, and custom voice training',
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Voice Training', 'Voice Commands', 'Text-to-Speech', 'Speech Recognition', 'Voice Analytics', 'Integration APIs'],
      popular: true,
      rating: 4.8,
      users: '3,200+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-voice-assistant',
      capabilities: ['95% voice recognition accuracy', 'Support for 50+ languages', 'Real-time voice processing', 'Custom voice cloning']
    },
    { 
      name: 'AI Document Scanner Pro', 
      href: '/ai-document-scanner', 
      icon: FileText, 
      category: 'Document Management', 
      price: '$79/mo',
      description: 'Intelligent document scanning with OCR, data extraction, and automated organization. Perfect for businesses handling large volumes of documents.',
      features: ['Advanced OCR Technology', 'Data Extraction', 'Document Classification', 'Auto Organization', 'Search & Retrieval', 'Cloud Storage', 'Batch Processing', 'API Integration'],
      popular: true,
      rating: 4.7,
      users: '2,100+',
      trial: '10-day free trial',
      link: 'https://ziontechgroup.com/ai-document-scanner',
      capabilities: ['99% OCR accuracy', 'Process 1000+ docs/hour', 'Auto data extraction', 'Smart document sorting']
    },
    { 
      name: 'AI Meeting Transcriber Pro', 
      href: '/ai-meeting-transcriber', 
      icon: Video, 
      category: 'Communication', 
      price: '$99/mo',
      description: 'Real-time meeting transcription with AI-powered insights, action items extraction, and meeting summaries',
      features: ['Real-time Transcription', 'Speaker Identification', 'Action Items Extraction', 'Meeting Summaries', 'Search & Playback', 'Multi-language Support', 'Integration with Calendars', 'Analytics Dashboard'],
      popular: true,
      rating: 4.9,
      users: '4,500+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-meeting-transcriber',
      capabilities: ['98% transcription accuracy', 'Real-time processing', 'Auto action item detection', 'Meeting insights & analytics']
    },
    { 
      name: 'AI Website Builder Pro', 
      href: '/ai-website-builder', 
      icon: Globe, 
      category: 'Web Development', 
      price: '$199/mo',
      description: 'AI-powered website builder with drag-and-drop interface, automatic SEO optimization, and responsive design',
      features: ['Drag & Drop Builder', 'AI Design Suggestions', 'Auto SEO Optimization', 'Responsive Design', 'E-commerce Integration', 'Analytics Dashboard', 'Custom Domain', 'SSL Certificate'],
      popular: true,
      rating: 4.8,
      users: '5,200+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-website-builder',
      capabilities: ['Build websites in minutes', 'Auto SEO optimization', 'Mobile-first design', 'E-commerce ready']
    },
    { 
      name: 'AI Data Visualizer Pro', 
      href: '/ai-data-visualizer', 
      icon: BarChart, 
      category: 'Analytics', 
      price: '$129/mo',
      description: 'Intelligent data visualization with automatic chart generation, interactive dashboards, and AI-powered insights',
      features: ['Auto Chart Generation', 'Interactive Dashboards', 'AI Insights', 'Real-time Data', 'Custom Visualizations', 'Export Options', 'Collaboration Tools', 'API Integration'],
      popular: true,
      rating: 4.7,
      users: '2,800+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-data-visualizer',
      capabilities: ['Auto chart recommendations', 'Interactive dashboards', 'AI-powered insights', 'Real-time data updates']
    },
    { 
      name: 'AI Email Signature Manager', 
      href: '/ai-email-signature-manager', 
      icon: Mail, 
      category: 'Email Tools', 
      price: '$39/mo',
      description: 'Professional email signature management with AI-powered design suggestions and team-wide deployment',
      features: ['Signature Templates', 'AI Design Suggestions', 'Team Management', 'Brand Consistency', 'Mobile Optimization', 'Analytics Tracking', 'Easy Deployment', 'Custom Fields'],
      popular: false,
      rating: 4.6,
      users: '1,400+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-email-signature-manager',
      capabilities: ['Professional signatures', 'Brand consistency', 'Team-wide deployment', 'Mobile optimization']
    },
    { 
      name: 'AI Password Generator Pro', 
      href: '/ai-password-generator', 
      icon: Lock, 
      category: 'Security', 
      price: '$29/mo',
      description: 'Advanced password generator with security analysis, breach monitoring, and secure storage',
      features: ['Smart Password Generation', 'Security Analysis', 'Breach Monitoring', 'Secure Storage', 'Multi-device Sync', 'Team Sharing', '2FA Integration', 'Password History'],
      popular: true,
      rating: 4.8,
      users: '6,800+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-password-generator',
      capabilities: ['Military-grade encryption', 'Real-time breach monitoring', 'Cross-platform sync', 'Team password sharing']
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c63e
    },
    { 
      name: 'AI Logo Designer Pro', 
      href: '/ai-logo-designer', 
<<<<<<< HEAD
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
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'Creative', 'Computer Vision', 'Manufacturing', 'Insurance', 'Testing', 'Education', 'Health', 'Analytics', 'Industrial', 'Language', 'Design'];
=======
      icon: Palette, 
      category: 'Design', 
      price: '$79/mo',
      description: 'AI-powered logo design with brand analysis, multiple variations, and professional quality output',
      features: ['AI Logo Generation', 'Brand Analysis', 'Multiple Variations', 'High-res Export', 'Vector Format', 'Brand Guidelines', 'Color Palette', 'Font Suggestions'],
      popular: true,
      rating: 4.7,
      users: '3,600+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-logo-designer',
      capabilities: ['Unlimited logo variations', 'Professional quality', 'Brand consistency', 'Multiple file formats']
    },
    { 
      name: 'AI Invoice Designer Pro', 
      href: '/ai-invoice-designer', 
      icon: FileText, 
      category: 'Business', 
      price: '$59/mo',
      description: 'Professional invoice design with AI-powered templates, automated calculations, and payment tracking',
      features: ['AI Template Generation', 'Auto Calculations', 'Payment Tracking', 'Tax Integration', 'Client Portal', 'Recurring Invoices', 'Multi-currency', 'Analytics Dashboard'],
      popular: true,
      rating: 4.8,
      users: '2,300+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-invoice-designer',
      capabilities: ['Professional templates', 'Auto calculations', 'Payment tracking', 'Multi-currency support']
    },
    { 
      name: 'AI Social Media Scheduler', 
      href: '/ai-social-media-scheduler', 
      icon: Smartphone, 
      category: 'Social Media', 
      price: '$89/mo',
      description: 'Intelligent social media scheduling with optimal timing, content suggestions, and performance analytics',
      features: ['Optimal Timing', 'Content Suggestions', 'Multi-platform Posting', 'Analytics Dashboard', 'Hashtag Research', 'Engagement Tracking', 'Auto Posting', 'Team Collaboration'],
      popular: true,
      rating: 4.7,
      users: '4,100+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-social-media-scheduler',
      capabilities: ['Optimal posting times', 'Content recommendations', 'Multi-platform management', 'Engagement analytics']
    },

    // New Innovative Micro SAAS Services
    { 
      name: 'AI Contract Analyzer Pro', 
      href: '/ai-contract-analyzer', 
      icon: FileText, 
      category: 'Legal Tech', 
      price: '$199/mo',
      description: 'AI-powered contract analysis with risk assessment, clause identification, and automated contract review',
      features: ['Risk Assessment', 'Clause Identification', 'Automated Review', 'Compliance Checking', 'Contract Comparison', 'Renewal Alerts', 'Legal Templates', 'Team Collaboration'],
      popular: true,
      rating: 4.8,
      users: '1,800+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-contract-analyzer',
      capabilities: ['95% accuracy in risk detection', '80% faster contract review', 'Automated compliance checking', 'Smart contract templates']
    },
    { 
      name: 'AI Inventory Optimizer Pro', 
      href: '/ai-inventory-optimizer', 
      icon: BarChart, 
      category: 'Supply Chain', 
      price: '$299/mo',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and cost optimization',
      features: ['Demand Forecasting', 'Automated Reordering', 'Cost Optimization', 'Supplier Management', 'Multi-location Support', 'Real-time Analytics', 'Seasonal Adjustments', 'Waste Reduction'],
      popular: true,
      rating: 4.7,
      users: '2,300+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-inventory-optimizer',
      capabilities: ['30% inventory reduction', '25% cost savings', '99% stock availability', 'Automated supplier management']
    },
    { 
      name: 'AI Customer Feedback Analyzer', 
      href: '/ai-customer-feedback-analyzer', 
      icon: MessageSquare, 
      category: 'Analytics', 
      price: '$149/mo',
      description: 'Advanced sentiment analysis and customer feedback processing with actionable insights and trend identification',
      features: ['Sentiment Analysis', 'Trend Identification', 'Actionable Insights', 'Multi-channel Support', 'Real-time Processing', 'Custom Dashboards', 'Alert System', 'ROI Tracking'],
      popular: true,
      rating: 4.9,
      users: '3,600+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-customer-feedback-analyzer',
      capabilities: ['95% sentiment accuracy', 'Real-time feedback processing', 'Actionable insights generation', 'Multi-channel integration']
    },
    { 
      name: 'AI Meeting Scheduler Pro', 
      href: '/ai-meeting-scheduler', 
      icon: Calendar, 
      category: 'Productivity', 
      price: '$79/mo',
      description: 'Smart meeting scheduling with time zone optimization, conflict resolution, and automated follow-ups',
      features: ['Time Zone Optimization', 'Conflict Resolution', 'Automated Follow-ups', 'Meeting Templates', 'Room Booking', 'Attendee Preferences', 'Recurring Meetings', 'Integration Hub'],
      popular: true,
      rating: 4.6,
      users: '2,800+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-meeting-scheduler',
      capabilities: ['90% reduction in scheduling conflicts', 'Multi-timezone optimization', 'Automated follow-up emails', 'Smart room allocation']
    },
    { 
      name: 'AI Email Signature Manager Pro', 
      href: '/ai-email-signature-manager', 
      icon: Mail, 
      category: 'Email Tools', 
      price: '$39/mo',
      description: 'Professional email signature management with AI-powered design suggestions and team-wide deployment',
      features: ['Signature Templates', 'AI Design Suggestions', 'Team Management', 'Brand Consistency', 'Mobile Optimization', 'Analytics Tracking', 'Easy Deployment', 'Custom Fields'],
      popular: false,
      rating: 4.6,
      users: '1,400+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-email-signature-manager',
      capabilities: ['Professional signatures', 'Brand consistency', 'Team-wide deployment', 'Mobile optimization']
    },
    { 
      name: 'AI Password Generator Pro', 
      href: '/ai-password-generator', 
      icon: Lock, 
      category: 'Security', 
      price: '$29/mo',
      description: 'Advanced password generator with security analysis, breach monitoring, and secure storage',
      features: ['Smart Password Generation', 'Security Analysis', 'Breach Monitoring', 'Secure Storage', 'Multi-device Sync', 'Team Sharing', '2FA Integration', 'Password History'],
      popular: true,
      rating: 4.8,
      users: '6,800+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-password-generator',
      capabilities: ['Military-grade encryption', 'Real-time breach monitoring', 'Cross-platform sync', 'Team password sharing']
    },
    { 
      name: 'AI Logo Designer Pro', 
      href: '/ai-logo-designer', 
      icon: Palette, 
      category: 'Design', 
      price: '$79/mo',
      description: 'AI-powered logo design with brand analysis, multiple variations, and professional quality output',
      features: ['AI Logo Generation', 'Brand Analysis', 'Multiple Variations', 'High-res Export', 'Vector Format', 'Brand Guidelines', 'Color Palette', 'Font Suggestions'],
      popular: true,
      rating: 4.7,
      users: '3,600+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-logo-designer',
      capabilities: ['Unlimited logo variations', 'Professional quality', 'Brand consistency', 'Multiple file formats']
    },
    { 
      name: 'AI Invoice Designer Pro', 
      href: '/ai-invoice-designer', 
      icon: FileText, 
      category: 'Business', 
      price: '$59/mo',
      description: 'Professional invoice design with AI-powered templates, automated calculations, and payment tracking',
      features: ['AI Template Generation', 'Auto Calculations', 'Payment Tracking', 'Tax Integration', 'Client Portal', 'Recurring Invoices', 'Multi-currency', 'Analytics Dashboard'],
      popular: true,
      rating: 4.8,
      users: '2,300+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-invoice-designer',
      capabilities: ['Professional templates', 'Auto calculations', 'Payment tracking', 'Multi-currency support']
    },
    { 
      name: 'AI Voice Assistant Pro', 
      href: '/ai-voice-assistant', 
      icon: Brain, 
      category: 'AI Tools', 
      price: '$149/mo',
      description: 'Advanced voice AI assistant with natural language processing, multi-language support, and custom voice training',
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Voice Training', 'Voice Commands', 'Text-to-Speech', 'Speech Recognition', 'Voice Analytics', 'Integration APIs'],
      popular: true,
      rating: 4.8,
      users: '3,200+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-voice-assistant',
      capabilities: ['95% voice recognition accuracy', 'Support for 50+ languages', 'Real-time voice processing', 'Custom voice cloning']
    },
    { 
      name: 'AI Document Scanner Pro', 
      href: '/ai-document-scanner', 
      icon: FileText, 
      category: 'Document Management', 
      price: '$79/mo',
      description: 'Intelligent document scanning with OCR, data extraction, and automated organization. Perfect for businesses handling large volumes of documents.',
      features: ['Advanced OCR Technology', 'Data Extraction', 'Document Classification', 'Auto Organization', 'Search & Retrieval', 'Cloud Storage', 'Batch Processing', 'API Integration'],
      popular: true,
      rating: 4.7,
      users: '2,100+',
      trial: '10-day free trial',
      link: 'https://ziontechgroup.com/ai-document-scanner',
      capabilities: ['99% OCR accuracy', 'Process 1000+ docs/hour', 'Auto data extraction', 'Smart document sorting']
    },
    { 
      name: 'AI Meeting Transcriber Pro', 
      href: '/ai-meeting-transcriber', 
      icon: Video, 
      category: 'Communication', 
      price: '$99/mo',
      description: 'Real-time meeting transcription with AI-powered insights, action items extraction, and meeting summaries',
      features: ['Real-time Transcription', 'Speaker Identification', 'Action Items Extraction', 'Meeting Summaries', 'Search & Playback', 'Multi-language Support', 'Integration with Calendars', 'Analytics Dashboard'],
      popular: true,
      rating: 4.9,
      users: '4,500+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-meeting-transcriber',
      capabilities: ['98% transcription accuracy', 'Real-time processing', 'Auto action item detection', 'Meeting insights & analytics']
    },
    { 
      name: 'AI Website Builder Pro', 
      href: '/ai-website-builder', 
      icon: Globe, 
      category: 'Web Development', 
      price: '$199/mo',
      description: 'AI-powered website builder with drag-and-drop interface, automatic SEO optimization, and responsive design',
      features: ['Drag & Drop Builder', 'AI Design Suggestions', 'Auto SEO Optimization', 'Responsive Design', 'E-commerce Integration', 'Analytics Dashboard', 'Custom Domain', 'SSL Certificate'],
      popular: true,
      rating: 4.8,
      users: '5,200+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-website-builder',
      capabilities: ['Build websites in minutes', 'Auto SEO optimization', 'Mobile-first design', 'E-commerce ready']
    },
    { 
      name: 'AI Data Visualizer Pro', 
      href: '/ai-data-visualizer', 
      icon: BarChart, 
      category: 'Analytics', 
      price: '$129/mo',
      description: 'Intelligent data visualization with automatic chart generation, interactive dashboards, and AI-powered insights',
      features: ['Auto Chart Generation', 'Interactive Dashboards', 'AI Insights', 'Real-time Data', 'Custom Visualizations', 'Export Options', 'Collaboration Tools', 'API Integration'],
      popular: true,
      rating: 4.7,
      users: '2,800+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-data-visualizer',
      capabilities: ['Auto chart recommendations', 'Interactive dashboards', 'AI-powered insights', 'Real-time data updates']
    },
    { 
      name: 'AI Task Automation Pro', 
      href: '/ai-task-automation', 
      icon: Zap, 
      category: 'Productivity', 
      price: '$179/mo',
      description: 'Intelligent task automation with AI-powered workflow creation, smart triggers, and performance optimization',
      features: ['AI Workflow Creation', 'Smart Triggers', 'Performance Optimization', 'Integration Hub', 'Custom Actions', 'Error Handling', 'Analytics Dashboard', 'Team Collaboration'],
      popular: true,
      rating: 4.8,
      users: '2,900+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-task-automation',
      capabilities: ['90% task automation', 'Smart workflow creation', 'Error-free execution', 'Performance optimization']
    },
    { 
      name: 'AI Sales Predictor Pro', 
      href: '/ai-sales-predictor', 
      icon: TrendingUp, 
      category: 'Sales', 
      price: '$249/mo',
      description: 'Advanced sales forecasting with AI-powered predictions, lead scoring, and revenue optimization',
      features: ['Sales Forecasting', 'Lead Scoring', 'Revenue Optimization', 'Pipeline Analysis', 'Customer Lifetime Value', 'Churn Prediction', 'Market Analysis', 'ROI Tracking'],
      popular: true,
      rating: 4.9,
      users: '1,700+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-sales-predictor',
      capabilities: ['95% forecast accuracy', 'Automated lead scoring', 'Revenue optimization', 'Churn prediction']
    },
    { 
      name: 'AI Employee Performance Tracker', 
      href: '/ai-employee-performance-tracker', 
      icon: Users, 
      category: 'HR', 
      price: '$199/mo',
      description: 'AI-powered employee performance tracking with goal setting, progress monitoring, and performance insights',
      features: ['Goal Setting', 'Progress Monitoring', 'Performance Insights', 'Team Analytics', 'Feedback System', 'Skill Assessment', 'Career Development', 'Performance Reports'],
      popular: true,
      rating: 4.6,
      users: '1,500+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-employee-performance-tracker',
      capabilities: ['Automated performance tracking', 'Goal achievement insights', 'Team performance analytics', 'Career development recommendations']
    },
    { 
      name: 'AI Customer Segmentation Pro', 
      href: '/ai-customer-segmentation', 
      icon: Target, 
      category: 'Marketing', 
      price: '$169/mo',
      description: 'Intelligent customer segmentation with behavioral analysis, persona creation, and targeted marketing strategies',
      features: ['Behavioral Analysis', 'Persona Creation', 'Segmentation Rules', 'Targeted Campaigns', 'Customer Journey Mapping', 'Lifetime Value Analysis', 'Churn Prediction', 'ROI Optimization'],
      popular: true,
      rating: 4.7,
      users: '2,200+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-customer-segmentation',
      capabilities: ['Automated segmentation', 'Behavioral insights', 'Targeted marketing', 'ROI optimization']
    },
    { 
      name: 'AI A/B Testing Optimizer', 
      href: '/ai-ab-testing-optimizer', 
      icon: BarChart, 
      category: 'Marketing', 
      price: '$139/mo',
      description: 'AI-powered A/B testing with automated test creation, statistical analysis, and optimization recommendations',
      features: ['Automated Test Creation', 'Statistical Analysis', 'Optimization Recommendations', 'Multi-variate Testing', 'Real-time Results', 'Conversion Tracking', 'Segmentation Testing', 'Performance Reports'],
      popular: true,
      rating: 4.8,
      users: '1,900+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-ab-testing-optimizer',
      capabilities: ['Automated test creation', 'Statistical significance', 'Optimization recommendations', 'Multi-variate testing']
    },
    { 
      name: 'AI Social Listening Pro', 
      href: '/ai-social-listening', 
      icon: MessageSquare, 
      category: 'Social Media', 
      price: '$189/mo',
      description: 'Advanced social media monitoring with sentiment analysis, brand mention tracking, and competitor analysis',
      features: ['Brand Mention Tracking', 'Sentiment Analysis', 'Competitor Analysis', 'Trend Identification', 'Crisis Management', 'Influencer Tracking', 'ROI Measurement', 'Custom Alerts'],
      popular: true,
      rating: 4.7,
      users: '2,600+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-social-listening',
      capabilities: ['Real-time monitoring', 'Sentiment analysis', 'Competitor insights', 'Crisis detection']
    },
    { 
      name: 'AI Content Calendar Pro', 
      href: '/ai-content-calendar', 
      icon: Calendar, 
      category: 'Content', 
      price: '$99/mo',
      description: 'Intelligent content planning with AI-powered suggestions, optimal timing, and performance tracking',
      features: ['Content Suggestions', 'Optimal Timing', 'Performance Tracking', 'Multi-platform Planning', 'Content Templates', 'Team Collaboration', 'Analytics Dashboard', 'ROI Tracking'],
      popular: true,
      rating: 4.6,
      users: '3,100+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-content-calendar',
      capabilities: ['AI content suggestions', 'Optimal posting times', 'Performance tracking', 'Multi-platform planning']
    },
    { 
      name: 'AI Customer Support Analytics', 
      href: '/ai-customer-support-analytics', 
      icon: MessageSquare, 
      category: 'Customer Service', 
      price: '$159/mo',
      description: 'Advanced customer support analytics with performance metrics, sentiment analysis, and optimization recommendations',
      features: ['Performance Metrics', 'Sentiment Analysis', 'Response Time Tracking', 'Customer Satisfaction', 'Agent Performance', 'Ticket Classification', 'Trend Analysis', 'Optimization Recommendations'],
      popular: true,
      rating: 4.8,
      users: '2,400+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-customer-support-analytics',
      capabilities: ['Real-time analytics', 'Sentiment tracking', 'Performance optimization', 'Customer satisfaction insights']
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'AI Tools', 'Document Management', 'Communication', 'Web Development', 'Analytics', 'Email Tools', 'Design', 'Social Media', 'Legal Tech', 'Supply Chain', 'Customer Service', 'Sales'];

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const itemsPerPage = 12;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredServices = microSAASServices.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 matrix-bg">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-glow-cyan">
              Powerful AI-powered micro SaaS tools to streamline your business operations
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">50+ AI Tools</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">50,000+ Users</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {currentServices.map((service) => (
            <div
              key={service.name}
              className={`futuristic-card hover-lift p-8 ${
                service.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
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

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 6).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {service.capabilities && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Proven Results:</h4>
                  <ul className="space-y-1">
                    {service.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-center text-cyan-300 text-sm">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold text-white">
                  {service.price}
                </div>
                <div className="text-sm text-gray-400">
                  {service.category}
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 text-sm">
                <div className="flex items-center text-gray-400">
                  <Users className="w-4 h-4 mr-1" />
                  {service.users}
                </div>
                <div className="text-cyan-400 font-medium">
                  {service.trial}
                </div>
              </div>

              <a
                href={service.link || '#'}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-slate-800 text-gray-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Previous
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-slate-800 text-gray-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 50,000+ businesses already using our AI-powered micro SaaS solutions. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-purple-100 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;