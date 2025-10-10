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
      name: 'AI API Manager Pro', 
      href: '/ai-api-manager', 
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
      name: 'AI Database Management', 
      href: '/database-management', 
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
      href: '/ai-cybersecurity-monitor', 
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
      href: '/ai-healthcare', 
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
      capabilities: ['Military-grade encryption', 'Real-time breach monitoring', 'Cross-platform sync', 'Team password sharing'],
      users: '900+'
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
>>>>>>> cursor/analyze-improve-and-deploy-application-7116
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
      name: 'AI Quantum Financial Oracle Pro', 
      href: '/ai-quantum-financial-oracle', 
      icon: Brain, 
      category: 'Quantum Finance', 
      price: '$1,299/mo',
      description: 'Revolutionary quantum-powered financial modeling and risk assessment for high-frequency trading and portfolio optimization',
      features: ['Quantum Risk Modeling', 'High-Frequency Trading', 'Portfolio Optimization', 'Market Prediction', 'Risk Assessment', 'Algorithmic Trading', 'Real-time Analysis', 'Quantum Computing Integration'],
      popular: true,
      rating: 4.9,
      users: '150+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-financial-oracle',
      capabilities: ['300% faster calculations', '99.9% prediction accuracy', 'Quantum advantage', 'Real-time risk modeling']
    },
    { 
      name: 'AI Neural Memory Assistant Pro', 
      href: '/ai-neural-memory-assistant', 
      icon: Brain, 
      category: 'Advanced AI', 
      price: '$399/mo',
      description: 'Advanced AI system with persistent memory and contextual understanding for personalized assistance',
      features: ['Persistent Memory Storage', 'Contextual Understanding', 'Personalized Responses', 'Learning from Interactions', 'Multi-modal Memory', 'Emotional Intelligence', 'Long-term Relationship Building', 'Adaptive Personality'],
      popular: true,
      rating: 4.8,
      users: '1,200+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-neural-memory-assistant',
      capabilities: ['Personalized AI experience', 'Context-aware responses', 'Emotional intelligence', 'Long-term memory retention']
    },
    { 
      name: 'AI Holographic Workspace Pro', 
      href: '/ai-holographic-workspace', 
      icon: Globe, 
      category: 'Immersive Tech', 
      price: '$1,200/mo',
      description: 'Next-generation 3D workspace with holographic interfaces and spatial computing capabilities',
      features: ['3D Holographic Interface', 'Virtual Collaboration', 'AI-Powered Gestures', 'Spatial Computing', 'Mixed Reality Integration', 'Real-time Translation', 'Virtual Whiteboarding', 'Immersive Presentations'],
      popular: true,
      rating: 4.7,
      users: '400+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-holographic-workspace',
      capabilities: ['Immersive collaboration', '3D data visualization', 'Virtual presence', 'Next-gen workspace']
    },
    { 
      name: 'AI Autonomous Systems Pro', 
      href: '/ai-autonomous-systems', 
      icon: Settings, 
      category: 'Autonomous AI', 
      price: '$4,200/mo',
      description: 'Self-managing systems with advanced AI decision-making and autonomous operations',
      features: ['Autonomous Operations', 'Self-Healing Systems', 'Predictive Maintenance', 'Intelligent Monitoring', 'Adaptive Learning', 'Risk Management', 'Real-time Decision Making', 'Fleet Coordination'],
      popular: true,
      rating: 4.8,
      users: '300+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-autonomous-systems',
      capabilities: ['99.9% safety record', 'Real-time autonomous decisions', 'Fleet optimization', 'Weather-adaptive navigation']
    },
    { 
      name: 'AI Blockchain Solutions Pro', 
      href: '/ai-blockchain-solutions', 
      icon: Shield, 
      category: 'Blockchain AI', 
      price: '$3,800/mo',
      description: 'Advanced blockchain integration with AI-powered smart contracts and DeFi protocols',
      features: ['Smart Contracts', 'DeFi Integration', 'NFT Marketplace', 'Cross-chain Operations', 'Token Economics', 'Governance Systems', 'AI Trading Bots', 'Yield Farming Optimization'],
      popular: false,
      rating: 4.6,
      users: '250+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-blockchain-solutions',
      capabilities: ['Automated DeFi strategies', 'Smart contract optimization', 'Crypto market analysis', 'Blockchain security enhancement']
    },
    { 
      name: 'AI Energy Grid Management Pro', 
      href: '/ai-energy-grid-management', 
      icon: Zap, 
      category: 'Energy AI', 
      price: '$6,500/mo',
      description: 'Intelligent energy distribution and optimization for smart cities and utilities',
      features: ['Grid Optimization', 'Demand Forecasting', 'Renewable Integration', 'Load Balancing', 'Energy Trading', 'Carbon Tracking', 'Smart Meter Analytics', 'Grid Stability'],
      popular: false,
      rating: 4.7,
      users: '180+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-energy-grid-management',
      capabilities: ['30% energy cost reduction', 'Grid stability optimization', 'Renewable energy integration', 'Predictive energy management']
    },
    { 
      name: 'AI Space Technology Pro', 
      href: '/ai-space-technology-pro', 
      icon: Rocket, 
      category: 'Space Tech', 
      price: '$5,500/mo',
      description: 'Advanced space exploration and satellite management solutions with AI optimization',
      features: ['Satellite Operations', 'Space Mission Planning', 'Astronomical Data Analysis', 'Orbital Mechanics', 'Space Weather', 'Mission Control', 'Space Debris Tracking', 'Navigation Systems'],
      popular: false,
      rating: 4.9,
      users: '120+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-space-technology-pro',
      capabilities: ['99.9% mission success rate', 'Real-time space monitoring', 'Advanced orbital calculations', 'Space debris mitigation']
    },
    { 
      name: 'AI Climate Solutions Pro', 
      href: '/ai-climate-solutions-pro',
      icon: Globe, 
      category: 'Environmental AI', 
      price: '$3,200/mo',
      description: 'Combat climate change with intelligent environmental monitoring and prediction systems',
      features: ['Carbon Footprint Analysis', 'Weather Prediction', 'Sustainability Planning', 'Emission Tracking', 'Climate Modeling', 'Green Energy', 'Environmental Impact Assessment', 'Compliance Monitoring'],
      popular: false,
      rating: 4.8,
      users: '350+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-climate-solutions-pro',
      capabilities: ['50% carbon footprint reduction', 'Real-time environmental monitoring', 'Sustainability optimization', 'Climate risk assessment']
    },
    { 
      name: 'AI Drug Discovery Pro', 
      href: '/ai-drug-discovery-pro', 
      icon: Stethoscope, 
      category: 'Pharma AI', 
      price: '$4,500/mo',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and drug development',
      features: ['Molecular Modeling', 'Drug Interaction Analysis', 'Clinical Trial Optimization', 'Protein Folding', 'Toxicity Prediction', 'Patent Analysis', 'Biomarker Discovery', 'Regulatory Compliance'],
      popular: true,
      rating: 4.9,
      users: '200+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-drug-discovery-pro',
      capabilities: ['70% faster drug discovery', '90% accuracy in predictions', 'Personalized treatment plans', 'Reduced clinical trial costs']
    },
    { 
      name: 'AI Agricultural Intelligence Pro', 
      href: '/ai-agricultural-intelligence-pro', 
      icon: Sprout, 
      category: 'Agriculture AI', 
      price: '$2,800/mo',
      description: 'Revolutionary AI-powered agricultural solutions for precision farming and crop optimization',
      features: ['Crop Monitoring', 'Yield Prediction', 'Soil Analysis', 'Pest Detection', 'Weather Forecasting', 'Irrigation Optimization', 'Harvest Planning', 'Supply Chain Management'],
      popular: true,
      rating: 4.8,
      users: '450+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence-pro',
      capabilities: ['25% increase in crop yield', '40% reduction in water usage', 'Early pest detection', 'Optimized harvest timing']
    },
    { 
      name: 'AI Legal Research Pro', 
      href: '/ai-legal-research-pro', 
      icon: Scale, 
      category: 'Legal AI', 
      price: '$1,800/mo',
      description: 'Advanced AI-powered legal research and case analysis for law firms and legal departments',
      features: ['Case Law Research', 'Document Analysis', 'Precedent Finding', 'Legal Writing', 'Contract Review', 'Compliance Checking', 'Litigation Support', 'Legal Analytics'],
      popular: true,
      rating: 4.7,
      users: '320+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-legal-research-pro',
      capabilities: ['80% faster research', '95% accuracy in case finding', 'Automated document analysis', 'Compliance monitoring']
    },
    { 
      name: 'AI Energy Grid Management Pro', 
      href: '/ai-energy-grid-management-pro', 
      icon: Zap, 
      category: 'Energy AI', 
      price: '$4,200/mo',
      description: 'Intelligent energy grid management with AI-powered optimization and renewable energy integration',
      features: ['Grid Optimization', 'Demand Forecasting', 'Renewable Integration', 'Load Balancing', 'Energy Trading', 'Carbon Tracking', 'Smart Meter Analytics', 'Grid Stability'],
      popular: false,
      rating: 4.7,
      users: '180+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-energy-grid-management-pro',
      capabilities: ['30% energy cost reduction', 'Grid stability optimization', 'Renewable energy integration', 'Predictive energy management']
    },
    { 
      name: 'AI Financial Crime Detection Pro', 
      href: '/ai-financial-crime-detection-pro', 
      icon: Shield, 
      category: 'Financial AI', 
      price: '$2,800/mo',
      description: 'Real-time fraud detection and financial security monitoring with machine learning algorithms',
      features: ['Fraud Detection', 'Risk Assessment', 'Compliance Monitoring', 'Transaction Analysis', 'Pattern Recognition', 'Real-time Alerts', 'AML Detection', 'KYC Automation'],
      popular: true,
      rating: 4.8,
      users: '1,400+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-financial-crime-detection-pro',
      capabilities: ['99.9% fraud detection accuracy', 'Real-time monitoring', 'Automated compliance', 'Risk mitigation']
    },
    { 
      name: 'AI 3D Generation Studio Pro', 
      href: '/ai-3d-generation', 
      icon: Palette, 
      category: '3D AI', 
      price: '$599/mo',
      description: 'AI-powered 3D model generation and animation with photorealistic rendering capabilities',
      features: ['3D Model Generation', 'Texture Synthesis', 'Animation Creation', 'Rigging Automation', 'Lighting Optimization', 'Material Generation', 'Scene Composition', 'Export Options'],
      popular: true,
      rating: 4.8,
      users: '1,800+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-3d-generation',
      capabilities: ['10x faster 3D creation', 'Photorealistic quality', 'Automated rigging', 'Multiple export formats']
    },
    { 
      name: 'AI Mobile App Builder Pro', 
      href: '/ai-mobile-app-builder', 
      icon: Smartphone, 
      category: 'Mobile AI', 
      price: '$799/mo',
      description: 'AI-powered mobile app development with automated coding and intelligent design suggestions',
      features: ['Auto Code Generation', 'UI/UX Design', 'Cross-platform Development', 'API Integration', 'Testing Automation', 'Performance Optimization', 'App Store Optimization', 'Analytics Integration'],
      popular: true,
      rating: 4.7,
      users: '2,200+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-mobile-app-builder',
      capabilities: ['Build apps in hours', 'Cross-platform compatibility', 'Auto testing', 'Performance optimization']
    },
    { 
      name: 'AI Quantum Computing Platform Pro', 
      href: '/ai-quantum-computing', 
      icon: Brain, 
      category: 'Quantum AI', 
      price: '$6,000/mo',
      description: 'Next-generation quantum computing solutions for complex problem solving and optimization',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Quantum Machine Learning', 'Quantum Error Correction', 'Hybrid Computing', 'Quantum Cloud Access'],
      popular: true,
      rating: 4.9,
      users: '150+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-computing',
      capabilities: ['1000x faster optimization', 'Unbreakable encryption', 'Quantum advantage in ML', 'Scientific breakthrough potential']
    },
    { 
      name: 'AI Supply Chain Optimization Pro', 
      href: '/ai-supply-chain-optimization-pro', 
      icon: Truck, 
      category: 'Supply Chain AI', 
      price: '$4,200/mo',
      description: 'Intelligent supply chain management with predictive analytics and optimization algorithms',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management', 'Supplier Management', 'Quality Control', 'Cost Optimization', 'Performance Analytics'],
      popular: true,
      rating: 4.8,
      users: '1,100+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization-pro',
      capabilities: ['20% cost reduction', '30% inventory optimization', 'Real-time tracking', 'Predictive analytics']
    },
    { 
      name: 'AI Content Delivery Network Pro', 
      href: '/ai-content-delivery-network', 
      icon: Globe, 
      category: 'CDN AI', 
      price: '$1,500/mo',
      description: 'AI-powered content delivery network with intelligent caching and global optimization',
      features: ['Intelligent Caching', 'Global Optimization', 'Performance Analytics', 'Security Features', 'Auto-scaling', 'Edge Computing', 'Real-time Monitoring', 'Cost Optimization'],
      popular: true,
      rating: 4.6,
      users: '3,500+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-content-delivery-network',
      capabilities: ['50% faster content delivery', 'Global edge optimization', 'Intelligent caching', 'Real-time performance monitoring']
    },
    { 
      name: 'AI Business Intelligence Pro', 
      href: '/ai-business-intelligence', 
      icon: BarChart, 
      category: 'BI AI', 
      price: '$2,200/mo',
      description: 'Advanced AI-powered business intelligence with predictive analytics and automated insights',
      features: ['Predictive Analytics', 'Automated Insights', 'Natural Language Queries', 'Real-time Dashboards', 'Data Visualization', 'Machine Learning', 'Custom Reports', 'Alert System'],
      popular: true,
      rating: 4.8,
      users: '2,800+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      capabilities: ['300% increase in conversion rates', 'Automated campaign optimization', 'Real-time performance tracking', 'Predictive customer behavior']
    },
    { 
      name: 'AI API Management Pro', 
      href: '/ai-api-management', 
      icon: Code, 
      category: 'API AI', 
      price: '$1,600/mo',
      description: 'Intelligent API management with AI-powered optimization and security',
      features: ['API Gateway', 'Rate Limiting', 'Security Policies', 'Analytics', 'Auto-scaling', 'Load Balancing', 'Monitoring', 'Documentation Generation'],
      popular: true,
      rating: 4.7,
      users: '2,100+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-api-management',
      capabilities: ['99.9% API uptime', 'Intelligent rate limiting', 'Auto-scaling', 'Security optimization']
    },
    { 
      name: 'AI Cybersecurity Monitor Pro', 
      href: '/ai-cybersecurity-monitor', 
      icon: Shield, 
      category: 'Security AI', 
      price: '$2,999/mo',
      description: 'AI-powered security monitoring with threat detection, vulnerability assessment, and incident response',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Monitoring', 'Security Reports', 'Risk Assessment', 'Behavioral Analysis', 'Automated Response'],
      popular: true,
      rating: 4.8,
      users: '1,900+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor',
      capabilities: ['99.9% threat detection accuracy', 'Real-time security monitoring', 'Automated incident response', 'Compliance automation']
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'Creative', 'Computer Vision', 'Manufacturing', 'Insurance', 'Testing', 'Education', 'Health', 'Analytics', 'Industrial', 'Language', 'Design', 'Quantum Finance', 'Advanced AI', 'Immersive Tech', 'Autonomous AI', 'Blockchain AI', 'Energy AI', 'Space Tech', 'Environmental AI', 'Pharma AI', 'Agriculture AI', 'Legal AI', 'Financial AI', '3D AI', 'Mobile AI', 'Quantum AI', 'Supply Chain AI', 'CDN AI', 'BI AI', 'API AI', 'Security AI']; 
      price: '$1,200/mo',
      description: 'Next-generation 3D workspace with holographic interfaces and spatial computing capabilities',
      features: ['3D Workspace', 'Holographic UI', 'Spatial Computing', 'Collaborative Environment', 'Virtual Meetings', 'AR Integration'],
      popular: true,
      rating: 4.7,
      users: '400+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Autonomous Systems Pro', 
      href: '/ai-autonomous-systems', 
      icon: Settings, 
      category: 'Autonomous AI', 
      price: '$4,200/mo',
      description: 'Self-managing systems with advanced AI decision-making and autonomous operations',
      features: ['Autonomous Operations', 'Self-Healing Systems', 'Predictive Maintenance', 'Intelligent Monitoring', 'Adaptive Learning', 'Risk Management'],
      popular: true,
      rating: 4.8,
      users: '300+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Blockchain Solutions Pro', 
      href: '/ai-blockchain-solutions', 
      icon: Shield, 
      category: 'Blockchain AI', 
      price: '$3,800/mo',
      description: 'Advanced blockchain integration with AI-powered smart contracts and DeFi protocols',
      features: ['Smart Contracts', 'DeFi Integration', 'NFT Marketplace', 'Cross-chain Operations', 'Token Economics', 'Governance Systems'],
      popular: false,
      rating: 4.6,
      users: '250+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Energy Grid Management', 
      href: '/ai-energy-grid-management', 
      icon: Zap, 
      category: 'Energy AI', 
      price: '$6,500/mo',
      description: 'Intelligent energy distribution and optimization for smart cities and utilities',
      features: ['Grid Optimization', 'Demand Forecasting', 'Renewable Integration', 'Load Balancing', 'Energy Trading', 'Carbon Tracking'],
      popular: false,
      rating: 4.7,

      users: '180+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Space Technology Pro', 
      href: '/ai-space-technology-pro', 
      icon: Rocket, 
      category: 'Space Tech', 
      price: '$5,500/mo',
      description: 'Advanced space exploration and satellite management solutions with AI optimization',
      features: ['Satellite Operations', 'Space Mission Planning', 'Astronomical Data Analysis', 'Orbital Mechanics', 'Space Weather', 'Mission Control'],
      popular: false,
      rating: 4.9,
users: '120+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Climate Solutions Pro', 
      href: '/ai-climate-solutions-pro',
      icon: Globe, 
      category: 'Environmental AI', 
      price: '$3,200/mo',
      description: 'Combat climate change with intelligent environmental monitoring and prediction systems',
      features: ['Carbon Footprint Analysis', 'Weather Prediction', 'Sustainability Planning', 'Emission Tracking', 'Climate Modeling', 'Green Energy'],
      popular: false,
      rating: 4.8,
      users: '350+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Drug Discovery Pro', 
      href: '/ai-drug-discovery-pro', 
      icon: Stethoscope, 
      category: 'Pharma AI', 
      price: '$4,500/mo',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and drug development',
      features: ['Molecular Modeling', 'Drug Interaction Analysis', 'Clinical Trial Optimization', 'Protein Folding', 'Toxicity Prediction', 'Patent Analysis'],
      popular: true,
      rating: 4.9,
      users: '200+',
      trial: '30-day free trial'
    }
  ];



  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'AI Tools', 'Document Management', 'Communication', 'Web Development', 'Analytics', 'Email Tools', 'Design', 'Social Media', 'Space Tech', 'Climate Tech', 'Science', 'Computing', 'Transportation', 'Optimization', 'Education'];


  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px] animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">

            <div className="inline-block mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-text">
                Micro SAAS Solutions
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered micro SaaS tools that transform your business operations with cutting-edge technology
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Micro SAAS Tools</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">25K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
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
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSAASServices.map((service) => (
            <div
              key={service.name}

              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden ${
                service.popular ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20' : ''
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

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
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

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">
                    {service.price}
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 font-medium">
                    {service.category}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {service.users} users
                  </div>
                  <div className="text-cyan-400 font-medium">
                    {service.trial}
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                  </a>
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