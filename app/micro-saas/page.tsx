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
      name: 'AI Voice Cloning Studio', 
      href: '/ai-voice-cloning', 
      icon: FileText, 
      category: 'Audio AI', 
      price: '$149/mo',
      description: 'Create realistic voice clones for content creation, audiobooks, and voiceovers',
      features: ['Voice Synthesis', 'Emotion Control', 'Multi-language Support', 'Real-time Generation', 'Voice Customization', 'API Integration'],
      popular: true,
      rating: 4.8,
      users: '1,800+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Code Review Assistant', 
      href: '/ai-code-review', 
      icon: Code, 
      category: 'Development', 
      price: '$89/mo',
      description: 'Automated code review with security analysis, performance optimization, and best practices',
      features: ['Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Best Practices', 'Vulnerability Detection', 'Team Collaboration'],
      popular: true,
      rating: 4.9,
      users: '3,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Meeting Transcriber Pro', 
      href: '/ai-meeting-transcriber', 
      icon: FileText, 
      category: 'Productivity', 
      price: '$79/mo',
      description: 'Real-time meeting transcription with AI-powered insights and action items',
      features: ['Real-time Transcription', 'Speaker Identification', 'Action Item Extraction', 'Meeting Summaries', 'Search & Analytics', 'Integration Hub'],
      popular: true,
      rating: 4.7,
      users: '2,900+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Resume Builder Pro', 
      href: '/ai-resume-builder', 
      icon: FileText, 
      category: 'Career', 
      price: '$39/mo',
      description: 'AI-powered resume creation with ATS optimization and job matching',
      features: ['ATS Optimization', 'Job Matching', 'Template Library', 'Skills Analysis', 'Cover Letter Generation', 'Interview Prep'],
      popular: true,
      rating: 4.6,
      users: '4,200+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Social Media Scheduler', 
      href: '/ai-social-scheduler', 
      icon: Smartphone, 
      category: 'Marketing', 
      price: '$59/mo',
      description: 'Intelligent social media scheduling with optimal timing and engagement prediction',
      features: ['Optimal Timing', 'Engagement Prediction', 'Content Suggestions', 'Multi-platform Posting', 'Analytics Dashboard', 'Hashtag Optimization'],
      popular: true,
      rating: 4.8,
      users: '3,100+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Website Builder Pro', 
      href: '/ai-website-builder', 
      icon: Globe, 
      category: 'Web Development', 
      price: '$199/mo',
      description: 'AI-powered website creation with responsive design and SEO optimization',
      features: ['Drag & Drop Builder', 'AI Design Suggestions', 'SEO Optimization', 'Mobile Responsive', 'E-commerce Integration', 'Performance Optimization'],
      popular: true,
      rating: 4.7,
      users: '2,800+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Email Signature Generator', 
      href: '/ai-email-signature', 
      icon: Mail, 
      category: 'Productivity', 
      price: '$19/mo',
      description: 'Professional email signature creation with branding and contact management',
      features: ['Professional Templates', 'Brand Integration', 'Contact Management', 'Social Media Links', 'Legal Compliance', 'Bulk Generation'],
      popular: false,
      rating: 4.5,
      users: '1,500+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Password Generator Pro', 
      href: '/ai-password-generator', 
      icon: Lock, 
      category: 'Security', 
      price: '$29/mo',
      description: 'Advanced password generation with security analysis and breach monitoring',
      features: ['Smart Generation', 'Security Analysis', 'Breach Monitoring', 'Password Strength', 'Multi-device Sync', 'Team Sharing'],
      popular: true,
      rating: 4.8,
      users: '3,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Color Palette Generator', 
      href: '/ai-color-palette', 
      icon: Palette, 
      category: 'Design', 
      price: '$39/mo',
      description: 'AI-powered color palette generation with accessibility and brand analysis',
      features: ['Smart Color Matching', 'Accessibility Analysis', 'Brand Integration', 'Trend Analysis', 'Export Options', 'Team Collaboration'],
      popular: true,
      rating: 4.6,
      users: '2,400+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI QR Code Generator Pro', 
      href: '/ai-qr-generator', 
      icon: Code, 
      category: 'Marketing', 
      price: '$49/mo',
      description: 'Advanced QR code generation with analytics, customization, and tracking',
      features: ['Custom Design', 'Analytics Tracking', 'Bulk Generation', 'Dynamic QR Codes', 'Brand Integration', 'API Access'],
      popular: true,
      rating: 4.7,
      users: '2,100+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Text Summarizer Pro', 
      href: '/ai-text-summarizer', 
      icon: FileText, 
      category: 'Productivity', 
      price: '$59/mo',
      description: 'Intelligent text summarization with multiple formats and language support',
      features: ['Multiple Formats', 'Language Support', 'Custom Length', 'Key Points Extraction', 'Batch Processing', 'API Integration'],
      popular: true,
      rating: 4.8,
      users: '3,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Image Upscaler Pro', 
      href: '/ai-image-upscaler', 
      icon: Camera, 
      category: 'Image Processing', 
      price: '$79/mo',
      description: 'AI-powered image upscaling with quality enhancement and noise reduction',
      features: ['4K Upscaling', 'Quality Enhancement', 'Noise Reduction', 'Batch Processing', 'Format Support', 'API Access'],
      popular: true,
      rating: 4.7,
      users: '2,700+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Business Card Scanner', 
      href: '/ai-business-card-scanner', 
      icon: FileText, 
      category: 'Productivity', 
      price: '$39/mo',
      description: 'Smart business card scanning with contact extraction and CRM integration',
      features: ['OCR Technology', 'Contact Extraction', 'CRM Integration', 'Bulk Processing', 'Data Validation', 'Export Options'],
      popular: false,
      rating: 4.5,
      users: '1,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Font Generator Pro', 
      href: '/ai-font-generator', 
      icon: FileText, 
      category: 'Design', 
      price: '$99/mo',
      description: 'AI-powered font generation with style matching and customization',
      features: ['Style Matching', 'Custom Generation', 'Font Pairing', 'License Management', 'Export Options', 'Team Collaboration'],
      popular: true,
      rating: 4.6,
      users: '1,600+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Chart Generator Pro', 
      href: '/ai-chart-generator', 
      icon: BarChart, 
      category: 'Data Visualization', 
      price: '$69/mo',
      description: 'Intelligent chart generation with data analysis and customization',
      features: ['Smart Chart Selection', 'Data Analysis', 'Custom Styling', 'Export Options', 'Interactive Charts', 'API Integration'],
      popular: true,
      rating: 4.7,
      users: '2,300+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Meme Generator Pro', 
      href: '/ai-meme-generator', 
      icon: FileText, 
      category: 'Social Media', 
      price: '$29/mo',
      description: 'AI-powered meme creation with trend analysis and viral potential',
      features: ['Trend Analysis', 'Viral Potential', 'Template Library', 'Custom Text', 'Social Sharing', 'Analytics'],
      popular: true,
      rating: 4.5,
      users: '4,500+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI GIF Generator Pro', 
      href: '/ai-gif-generator', 
      icon: Video, 
      category: 'Video', 
      price: '$49/mo',
      description: 'AI-powered GIF creation with video processing and optimization',
      features: ['Video Processing', 'Size Optimization', 'Quality Enhancement', 'Batch Creation', 'Custom Duration', 'Format Support'],
      popular: true,
      rating: 4.6,
      users: '2,900+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Barcode Generator Pro', 
      href: '/ai-barcode-generator', 
      icon: Code, 
      category: 'Productivity', 
      price: '$39/mo',
      description: 'Advanced barcode generation with multiple formats and tracking',
      features: ['Multiple Formats', 'Custom Design', 'Batch Generation', 'Tracking Integration', 'API Access', 'Print Optimization'],
      popular: false,
      rating: 4.4,
      users: '1,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Screenshot Tool Pro', 
      href: '/ai-screenshot-tool', 
      icon: Camera, 
      category: 'Productivity', 
      price: '$29/mo',
      description: 'AI-powered screenshot tool with annotation and sharing features',
      features: ['Smart Annotation', 'Cloud Storage', 'Team Sharing', 'Version Control', 'Search & Organize', 'Integration Hub'],
      popular: true,
      rating: 4.7,
      users: '3,400+',
      trial: '14-day free trial'
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'Creative', 'Computer Vision', 'Manufacturing', 'Insurance', 'Testing', 'Education', 'Health', 'Analytics', 'Industrial', 'Language', 'Design', 'Audio AI', 'Career', 'Web Development', 'Image Processing', 'Data Visualization', 'Social Media', 'Video'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-glow">
              Powerful AI-powered micro SaaS tools to streamline your business operations
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400 neon-text">50+</div>
                <div className="text-sm text-gray-300">Micro SAAS Tools</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400 neon-text">100K+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-pink-400 neon-text">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400 neon-text">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {microSAASServices.map((service) => (
            <div
              key={service.name}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                service.popular ? 'ring-2 ring-purple-500 neon-border' : ''
              }`}
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 text-white group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center neon-glow">
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

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-white neon-text">
                    {service.price}
                  </div>
                  <div className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {service.category}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-xs">
                  <div className="flex items-center text-gray-400">
                    <Users className="w-3 h-3 mr-1" />
                    {service.users}
                  </div>
                  <div className="text-cyan-400 font-medium">
                    {service.trial}
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-pulse">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.1)_0%,rgba(255,0,255,0.1)_50%,rgba(255,255,0,0.1)_100%)] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto neon-glow">
            Start your free trial today and experience the power of AI-driven micro SaaS tools
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-white font-semibold">Call Us</div>
              <div className="text-cyan-100 text-sm">+1 (302) 464-0950</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-white font-semibold">Email Us</div>
              <div className="text-cyan-100 text-sm">kleber@ziontechgroup.com</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-white font-semibold">Visit Us</div>
              <div className="text-cyan-100 text-sm">364 E Main St STE 1008</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 neon-pulse">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;