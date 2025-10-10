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
      trial: '21-day free trial'
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
>>>>>>> cursor/analyze-improve-and-deploy-application-58b3
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
      name: 'AI Quantum Analytics Pro', 
      href: '/ai-quantum-analytics', 
      icon: BarChart, 
      category: 'Analytics', 
      price: '$1,299/mo',
      description: 'Revolutionary quantum-powered analytics with ultra-fast data processing and predictive insights',
      features: ['Quantum Data Processing', 'Ultra-fast Analytics', 'Predictive Modeling', 'Real-time Insights', 'Quantum Machine Learning', 'Advanced Visualization', 'API Integration', 'Custom Dashboards'],
      popular: true,
      rating: 4.9,
      users: '180+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-analytics',
      capabilities: ['1000x faster processing', '99.9% prediction accuracy', 'Real-time quantum insights', 'Unlimited data processing']
    },
    { 
      name: 'AI Holographic Meeting Room', 
      href: '/ai-holographic-meeting', 
      icon: Video, 
      category: 'Communication', 
      price: '$599/mo',
      description: 'Immersive 3D holographic meeting rooms with AI-powered collaboration tools and virtual presence',
      features: ['3D Holographic Display', 'Virtual Presence', 'AI Meeting Assistant', 'Real-time Translation', 'Gesture Control', 'Spatial Audio', 'Recording & Playback', 'Multi-platform Access'],
      popular: true,
      rating: 4.8,
      users: '320+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-holographic-meeting',
      capabilities: ['Immersive 3D meetings', 'AI-powered collaboration', 'Real-time translation', 'Gesture-based control']
    },
    { 
      name: 'AI Neural Memory Cloud', 
      href: '/ai-neural-memory-cloud', 
      icon: Brain, 
      category: 'AI Tools', 
      price: '$399/mo',
      description: 'Advanced AI memory system with persistent learning, contextual understanding, and knowledge retention',
      features: ['Persistent Memory', 'Contextual Learning', 'Knowledge Graphs', 'Memory Search', 'Learning Analytics', 'Multi-modal Memory', 'API Integration', 'Custom Training'],
      popular: true,
      rating: 4.9,
      users: '450+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-neural-memory-cloud',
      capabilities: ['Unlimited memory storage', 'Context-aware responses', 'Learning from interactions', 'Knowledge graph building']
    },
    { 
      name: 'AI Space Mission Planner', 
      href: '/ai-space-mission-planner', 
      icon: Rocket, 
      category: 'Space Tech', 
      price: '$2,999/mo',
      description: 'AI-powered space mission planning with orbital mechanics, trajectory optimization, and mission simulation',
      features: ['Orbital Mechanics', 'Trajectory Optimization', 'Mission Simulation', 'Risk Assessment', 'Resource Planning', 'Launch Window Analysis', 'Satellite Management', 'Space Weather Integration'],
      popular: false,
      rating: 4.9,
      users: '25+',
      trial: '60-day free trial',
      link: 'https://ziontechgroup.com/ai-space-mission-planner',
      capabilities: ['99.9% mission success rate', 'Optimal trajectory planning', 'Real-time space monitoring', 'Advanced orbital calculations']
    },
    { 
      name: 'AI Climate Prediction Engine', 
      href: '/ai-climate-prediction', 
      icon: Globe, 
      category: 'Climate Tech', 
      price: '$799/mo',
      description: 'Advanced climate modeling and prediction with AI-powered environmental analysis and sustainability planning',
      features: ['Climate Modeling', 'Weather Prediction', 'Environmental Analysis', 'Carbon Tracking', 'Sustainability Planning', 'Risk Assessment', 'Real-time Monitoring', 'Policy Recommendations'],
      popular: true,
      rating: 4.8,
      users: '280+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-climate-prediction',
      capabilities: ['95% prediction accuracy', 'Real-time climate monitoring', 'Carbon footprint optimization', 'Sustainability insights']
    },
    { 
      name: 'AI Quantum Security Vault', 
      href: '/ai-quantum-security-vault', 
      icon: Shield, 
      category: 'Security', 
      price: '$1,499/mo',
      description: 'Quantum-resistant security vault with unbreakable encryption and advanced threat protection',
      features: ['Quantum Encryption', 'Zero-knowledge Architecture', 'Advanced Threat Detection', 'Biometric Authentication', 'Multi-factor Security', 'Audit Logging', 'Compliance Tools', 'API Security'],
      popular: true,
      rating: 4.9,
      users: '150+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-security-vault',
      capabilities: ['Unbreakable quantum encryption', 'Zero-knowledge security', 'Advanced threat protection', 'Compliance automation']
    },
    { 
      name: 'AI Molecular Designer Pro', 
      href: '/ai-molecular-designer', 
      icon: FileText, 
      category: 'Science', 
      price: '$1,999/mo',
      description: 'AI-powered molecular design and drug discovery with advanced chemistry modeling and simulation',
      features: ['Molecular Modeling', 'Drug Design', 'Chemical Simulation', 'Property Prediction', 'Reaction Planning', 'Toxicity Analysis', 'Patent Search', 'Collaboration Tools'],
      popular: false,
      rating: 4.9,
      users: '80+',
      trial: '45-day free trial',
      link: 'https://ziontechgroup.com/ai-molecular-designer',
      capabilities: ['90% accuracy in predictions', 'Faster drug discovery', 'Chemical property analysis', 'Patent-safe designs']
    },
    { 
      name: 'AI Holographic Workspace Pro', 
      href: '/ai-holographic-workspace', 
      icon: Globe, 
      category: 'Productivity', 
      price: '$899/mo',
      description: 'Immersive 3D workspace with AI-powered collaboration, virtual meetings, and spatial computing',
      features: ['3D Workspace', 'Virtual Collaboration', 'Spatial Computing', 'AI Gestures', 'Mixed Reality', 'Real-time Translation', 'Virtual Whiteboarding', 'Immersive Presentations'],
      popular: true,
      rating: 4.7,
      users: '200+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-holographic-workspace',
      capabilities: ['Immersive 3D collaboration', 'Spatial computing', 'AI-powered gestures', 'Mixed reality integration']
    },
    { 
      name: 'AI Quantum Financial Oracle', 
      href: '/ai-quantum-financial-oracle', 
      icon: DollarSign, 
      category: 'Finance', 
      price: '$2,499/mo',
      description: 'Revolutionary quantum-powered financial analysis with ultra-fast market predictions and risk assessment',
      features: ['Quantum Market Analysis', 'Ultra-fast Predictions', 'Risk Assessment', 'Portfolio Optimization', 'Cryptocurrency Analysis', 'Real-time Trading Signals', 'Quantum Computing', 'Advanced Analytics'],
      popular: true,
      rating: 4.9,
      users: '120+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-financial-oracle',
      capabilities: ['1000x faster calculations', '99.9% prediction accuracy', 'Quantum advantage', 'Real-time risk modeling']
    },
    { 
      name: 'AI Neural Interface Pro', 
      href: '/ai-neural-interface', 
      icon: Brain, 
      category: 'AI Tools', 
      price: '$1,799/mo',
      description: 'Advanced neural interface with brain-computer interaction, thought-to-text, and cognitive enhancement',
      features: ['Brain-Computer Interface', 'Thought-to-Text', 'Cognitive Enhancement', 'Neural Training', 'Mind Mapping', 'Memory Augmentation', 'Focus Optimization', 'Mental Health Monitoring'],
      popular: false,
      rating: 4.8,
      users: '90+',
      trial: '45-day free trial',
      link: 'https://ziontechgroup.com/ai-neural-interface',
      capabilities: ['Direct brain interaction', 'Thought-to-text conversion', 'Cognitive enhancement', 'Mental health insights']
    },
    { 
      name: 'AI Quantum Computing Cloud', 
      href: '/ai-quantum-computing-cloud', 
      icon: Cpu, 
      category: 'Computing', 
      price: '$3,999/mo',
      description: 'Access to quantum computing power with AI optimization and hybrid classical-quantum algorithms',
      features: ['Quantum Computing Access', 'Hybrid Algorithms', 'AI Optimization', 'Quantum Simulation', 'Error Correction', 'Performance Monitoring', 'API Integration', 'Custom Development'],
      popular: true,
      rating: 4.9,
      users: '60+',
      trial: '60-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-computing-cloud',
      capabilities: ['Quantum computing access', 'Hybrid algorithms', 'AI optimization', 'Quantum simulation']
    },
    { 
      name: 'AI Autonomous Vehicle Fleet', 
      href: '/ai-autonomous-vehicle-fleet', 
      icon: Truck, 
      category: 'Transportation', 
      price: '$4,999/mo',
      description: 'AI-powered autonomous vehicle fleet management with real-time coordination and safety monitoring',
      features: ['Fleet Management', 'Autonomous Navigation', 'Real-time Coordination', 'Safety Monitoring', 'Route Optimization', 'Weather Adaptation', 'Maintenance Prediction', 'Performance Analytics'],
      popular: false,
      rating: 4.9,
      users: '40+',
      trial: '90-day free trial',
      link: 'https://ziontechgroup.com/ai-autonomous-vehicle-fleet',
      capabilities: ['99.9% safety record', 'Real-time fleet coordination', 'Weather-adaptive navigation', 'Predictive maintenance']
    },
    { 
      name: 'AI Holographic Design Studio', 
      href: '/ai-holographic-design-studio', 
      icon: Palette, 
      category: 'Design', 
      price: '$699/mo',
      description: 'Immersive 3D design studio with AI-powered creativity tools and holographic visualization',
      features: ['3D Design Tools', 'Holographic Visualization', 'AI Creativity Assistant', 'Real-time Collaboration', 'Material Simulation', 'Lighting Analysis', 'Animation Tools', 'Export Options'],
      popular: true,
      rating: 4.8,
      users: '180+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-holographic-design-studio',
      capabilities: ['Immersive 3D design', 'Holographic visualization', 'AI creativity assistance', 'Real-time collaboration']
    },
    { 
      name: 'AI Quantum Machine Learning', 
      href: '/ai-quantum-machine-learning', 
      icon: Brain, 
      category: 'AI Tools', 
      price: '$1,899/mo',
      description: 'Quantum-enhanced machine learning with exponential speedup and advanced pattern recognition',
      features: ['Quantum ML Algorithms', 'Exponential Speedup', 'Pattern Recognition', 'Quantum Neural Networks', 'Optimization Problems', 'Feature Selection', 'Model Training', 'Performance Analytics'],
      popular: true,
      rating: 4.9,
      users: '110+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-machine-learning',
      capabilities: ['Exponential speedup', 'Advanced pattern recognition', 'Quantum neural networks', 'Optimization solutions']
    },
    { 
      name: 'AI Space Debris Tracker', 
      href: '/ai-space-debris-tracker', 
      icon: Globe, 
      category: 'Space Tech', 
      price: '$1,199/mo',
      description: 'AI-powered space debris tracking and collision avoidance with real-time monitoring and prediction',
      features: ['Debris Tracking', 'Collision Prediction', 'Real-time Monitoring', 'Orbital Analysis', 'Risk Assessment', 'Alert System', 'Historical Data', 'API Integration'],
      popular: false,
      rating: 4.8,
      users: '35+',
      trial: '45-day free trial',
      link: 'https://ziontechgroup.com/ai-space-debris-tracker',
      capabilities: ['Real-time debris tracking', 'Collision prediction', 'Risk assessment', 'Alert system']
    },
    { 
      name: 'AI Quantum Cryptography Suite', 
      href: '/ai-quantum-cryptography', 
      icon: Lock, 
      category: 'Security', 
      price: '$2,199/mo',
      description: 'Quantum-resistant cryptography with unbreakable encryption and secure communication protocols',
      features: ['Quantum Encryption', 'Secure Communication', 'Key Distribution', 'Digital Signatures', 'Authentication', 'Compliance Tools', 'API Security', 'Audit Logging'],
      popular: true,
      rating: 4.9,
      users: '85+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-cryptography',
      capabilities: ['Unbreakable encryption', 'Secure communication', 'Quantum key distribution', 'Compliance automation']
    },
    { 
      name: 'AI Neural Network Optimizer', 
      href: '/ai-neural-network-optimizer', 
      icon: Settings, 
      category: 'AI Tools', 
      price: '$599/mo',
      description: 'Advanced neural network optimization with automated architecture search and performance tuning',
      features: ['Architecture Search', 'Performance Tuning', 'Hyperparameter Optimization', 'Model Compression', 'Quantization', 'Pruning', 'Training Acceleration', 'Deployment Optimization'],
      popular: true,
      rating: 4.7,
      users: '320+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-neural-network-optimizer',
      capabilities: ['Automated architecture search', 'Performance optimization', 'Model compression', 'Training acceleration']
    },
    { 
      name: 'AI Holographic Data Visualization', 
      href: '/ai-holographic-data-viz', 
      icon: BarChart, 
      category: 'Analytics', 
      price: '$799/mo',
      description: 'Immersive 3D data visualization with AI-powered insights and interactive holographic displays',
      features: ['3D Data Visualization', 'Holographic Display', 'AI Insights', 'Interactive Exploration', 'Real-time Updates', 'Custom Dashboards', 'Collaboration Tools', 'Export Options'],
      popular: true,
      rating: 4.8,
      users: '220+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-holographic-data-viz',
      capabilities: ['Immersive 3D visualization', 'Holographic data display', 'AI-powered insights', 'Interactive exploration']
    },
    { 
      name: 'AI Quantum Optimization Engine', 
      href: '/ai-quantum-optimization', 
      icon: Zap, 
      category: 'Optimization', 
      price: '$1,599/mo',
      description: 'Quantum-powered optimization engine for complex problems with exponential speedup and advanced algorithms',
      features: ['Quantum Optimization', 'Complex Problem Solving', 'Exponential Speedup', 'Advanced Algorithms', 'Real-time Processing', 'API Integration', 'Custom Solutions', 'Performance Analytics'],
      popular: true,
      rating: 4.9,
      users: '95+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-optimization',
      capabilities: ['Exponential speedup', 'Complex problem solving', 'Quantum algorithms', 'Real-time optimization']
    },
    { 
      name: 'AI Holographic Training Simulator', 
      href: '/ai-holographic-training', 
      icon: Users, 
      category: 'Education', 
      price: '$999/mo',
      description: 'Immersive 3D training simulator with AI-powered personalized learning and virtual reality integration',
      features: ['3D Training Environment', 'AI Personalization', 'Virtual Reality', 'Skill Assessment', 'Progress Tracking', 'Interactive Scenarios', 'Multi-user Support', 'Analytics Dashboard'],
      popular: true,
      rating: 4.8,
      users: '160+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-holographic-training',
      capabilities: ['Immersive 3D training', 'AI personalization', 'Virtual reality integration', 'Skill assessment']
    },
    { 
      name: 'AI Quantum Neural Networks', 
      href: '/ai-quantum-neural-networks', 
      icon: Brain, 
      category: 'AI Tools', 
      price: '$2,799/mo',
      description: 'Quantum-enhanced neural networks with exponential computational power and advanced learning capabilities',
      features: ['Quantum Neural Networks', 'Exponential Power', 'Advanced Learning', 'Pattern Recognition', 'Optimization', 'Training Acceleration', 'Model Deployment', 'Performance Monitoring'],
      popular: false,
      rating: 4.9,
      users: '50+',
      trial: '45-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-neural-networks',
      capabilities: ['Exponential computational power', 'Advanced learning', 'Pattern recognition', 'Training acceleration']
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'AI Tools', 'Document Management', 'Communication', 'Web Development', 'Analytics', 'Email Tools', 'Design', 'Social Media', 'Space Tech', 'Climate Tech', 'Science', 'Computing', 'Transportation', 'Optimization', 'Education'];
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c63e
>>>>>>> cursor/analyze-improve-and-deploy-application-58b3

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 cyber-grid-enhanced quantum-particles">
      {/* Header */}
      <div className="relative overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-glow-cyan">
              Powerful AI-powered micro SaaS tools to streamline your business operations
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="holographic-card px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">50+ AI Tools</span>
              </div>
              <div className="holographic-card px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">50,000+ Users</span>
              </div>
              <div className="holographic-card px-6 py-3 rounded-lg">
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
          {microSAASServices.map((service) => (
            <div
              key={service.name}
              className={`futuristic-card-enhanced hover-lift p-8 ${
                service.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
              }`}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center font-bold shadow-lg">
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
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3">Key Features:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {service.features.slice(0, 6).map((feature, index) => (
                    <li key={index} className="flex items-center text-xs sm:text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {service.capabilities && (
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3">Proven Results:</h4>
                  <ul className="space-y-1">
                    {service.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-center text-cyan-300 text-xs sm:text-sm">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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

              <a
                href={service.link || '#'}
                className="w-full neon-button-enhanced py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
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
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8">
            Join 50,000+ businesses already using our AI-powered micro SaaS solutions. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="neon-button-enhanced py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="neon-button-enhanced py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-purple-100 text-xs sm:text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;