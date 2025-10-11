'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Eye,
  Settings,
  Users,
  MessageSquare,
  FileText,
  Target,
  DollarSign,
  Heart,
  Calendar,
  Mic,
  Lock,
  Cpu,
  Package,
  Monitor,
  Wifi,
  Server,
  Code,
  ShoppingCart,
  Headphones,
  BarChart
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      link: 'https://ziontechgroup.com/ai-services/chatbots'
    },
    {
      icon: Brain,
      title: 'AI Content Generation Pro',
      description: 'Advanced AI-powered content creation platform with GPT-4 integration for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['GPT-4 Integration', 'Brand Voice Customization', 'SEO Optimization', 'Multi-platform Publishing', 'Content Analytics', 'Plagiarism Detection'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/ai-services/content-generation'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision Suite',
      description: 'Comprehensive image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection & Recognition', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing', 'Custom Model Training'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-services/computer-vision'
    },
    {
      icon: BarChart3,
      title: 'AI Predictive Analytics',
      description: 'Advanced machine learning algorithms for predictive modeling, forecasting, and business intelligence.',
      category: 'ai',
      features: ['Predictive Modeling', 'Time Series Forecasting', 'Anomaly Detection', 'Real-time Dashboards', 'Custom ML Models', 'Automated Insights'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      link: 'https://ziontechgroup.com/ai-services/predictive-analytics'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring', 'RPA Integration'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/ai-services/workflow-automation'
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection System',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts', 'Compliance Reporting'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready'],
      link: 'https://ziontechgroup.com/ai-services/fraud-detection'
    },
    {
      icon: FileText,
      title: 'AI Document Intelligence',
      description: 'Intelligent document processing and analysis using advanced OCR and NLP technologies.',
      category: 'ai',
      features: ['OCR Processing', 'Document Classification', 'Data Extraction', 'Form Recognition', 'Language Translation', 'Compliance Checking'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1200/month',
      benefits: ['90% faster document processing', 'Reduced manual errors', 'Automated data entry', 'Compliance assurance'],
      link: 'https://ziontechgroup.com/ai-services/document-intelligence'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Analytics',
      description: 'Advanced customer behavior analysis and sentiment tracking for improved customer experience.',
      category: 'ai',
      features: ['Sentiment Analysis', 'Customer Journey Mapping', 'Churn Prediction', 'Personalization Engine', 'Real-time Insights', 'A/B Testing'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Improved customer satisfaction', 'Reduced churn rate', 'Personalized experiences', 'Data-driven decisions'],
      link: 'https://ziontechgroup.com/ai-services/customer-analytics'
    },
    {
      icon: Cpu,
      title: 'AI Model Development',
      description: 'Custom AI model development and deployment services for specific business needs.',
      category: 'ai',
      features: ['Custom Model Training', 'Data Preprocessing', 'Model Optimization', 'Deployment & Scaling', 'Performance Monitoring', 'Continuous Learning'],
      price: 'Starting at $2,500/project',
      marketPrice: '$5000-25000/project',
      benefits: ['Tailored AI solutions', 'Competitive advantage', 'Scalable models', 'Expert support'],
      link: 'https://ziontechgroup.com/ai-services/model-development'
    },
    {
      icon: Target,
      title: 'AI Recommendation Engine',
      description: 'Intelligent recommendation systems for e-commerce, content, and personalized user experiences.',
      category: 'ai',
      features: ['Collaborative Filtering', 'Content-based Filtering', 'Hybrid Approaches', 'Real-time Recommendations', 'A/B Testing', 'Performance Analytics'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Increased conversion rates', 'Improved user engagement', 'Personalized experiences', 'Revenue growth'],
      link: 'https://ziontechgroup.com/ai-services/recommendation-engine'
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      link: 'https://ziontechgroup.com/ai-services/data-analytics'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready']
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Customization'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    
    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      category: 'it',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      link: 'https://ziontechgroup.com/it-services/cloud-infrastructure'
    },
    {
      icon: Server,
      title: 'Enterprise Server Management',
      description: 'Comprehensive server administration, monitoring, and optimization for enterprise environments.',
      category: 'it',
      features: ['Server Administration', 'Performance Monitoring', 'Capacity Planning', 'Security Hardening', 'Backup & Recovery', '24/7 Support'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-10000/month',
      benefits: ['99.9% server uptime', 'Proactive monitoring', 'Reduced downtime', 'Expert administration'],
      link: 'https://ziontechgroup.com/it-services/server-management'
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and management with advanced security features.',
      category: 'it',
      features: ['Network Design & Implementation', 'Wireless Solutions', 'Security Configuration', 'Performance Monitoring', 'Disaster Recovery', '24/7 Support'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable infrastructure', 'Expert support'],
      link: 'https://ziontechgroup.com/it-services/network-infrastructure'
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk and remote assistance capabilities.',
      category: 'it',
      features: ['24/7 Helpdesk Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Installation', 'User Training', 'Incident Management'],
      price: 'Starting at $99/user/month',
      marketPrice: '$150-300/user/month',
      benefits: ['Reduced downtime', 'Expert support', 'Proactive maintenance', 'User satisfaction'],
      link: 'https://ziontechgroup.com/it-services/helpdesk'
    },
    {
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      link: 'https://ziontechgroup.com/it-services/database-management'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD Implementation',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      link: 'https://ziontechgroup.com/it-services/devops'
    },
    {
      icon: Users,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/it-services/consulting'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for optimal performance.',
      category: 'it',
      features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization', 'Security Implementation', 'Quality Assurance'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['Tailored solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support'],
      link: 'https://ziontechgroup.com/it-services/software-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Tuning'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      link: 'https://ziontechgroup.com/it-services/mobile-development'
    },
    {
      icon: Globe,
      title: 'Web Development & E-commerce',
      description: 'Modern, responsive web applications and e-commerce platforms built with cutting-edge technologies.',
      category: 'it',
      features: ['React/Next.js Development', 'E-commerce Platforms', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times'],
      link: 'https://ziontechgroup.com/it-services/web-development'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/it-services/cybersecurity'
    },
    
    // Micro SaaS Services
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      link: 'https://ziontechgroup.com/micro-saas/analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      link: 'https://ziontechgroup.com/micro-saas/chat-ai'
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      category: 'saas',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      link: 'https://ziontechgroup.com/micro-saas/invoice-genius'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      link: 'https://ziontechgroup.com/micro-saas/lead-magnet'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      category: 'saas',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics', 'Compliance Reporting', 'Employee Training'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance', 'Peace of mind'],
      link: 'https://ziontechgroup.com/micro-saas/security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Data Encryption', 'Compliance Support'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      link: 'https://ziontechgroup.com/micro-saas/cloud-vault'
    },
    {
      icon: Users,
      title: 'Zion Team Manager',
      description: 'Comprehensive team management and collaboration platform with project tracking and communication tools.',
      category: 'saas',
      features: ['Project Management', 'Team Collaboration', 'Time Tracking', 'Task Assignment', 'Progress Monitoring', 'Communication Hub'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Improved team productivity', 'Better project visibility', 'Streamlined communication', 'Enhanced collaboration'],
      link: 'https://ziontechgroup.com/micro-saas/team-manager'
    },
    {
      icon: ShoppingCart,
      title: 'Zion E-commerce Suite',
      description: 'Complete e-commerce solution with inventory management, payment processing, and analytics.',
      category: 'saas',
      features: ['Inventory Management', 'Payment Processing', 'Order Management', 'Customer Analytics', 'Marketing Tools', 'Mobile App'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['Complete e-commerce solution', 'Easy setup and management', 'Mobile optimized', 'Integrated analytics'],
      link: 'https://ziontechgroup.com/micro-saas/ecommerce-suite'
    },
    {
      icon: Calendar,
      title: 'Zion Appointment Pro',
      description: 'Advanced appointment scheduling and calendar management system for service-based businesses.',
      category: 'saas',
      features: ['Online Booking', 'Calendar Sync', 'Automated Reminders', 'Payment Integration', 'Client Management', 'Reporting & Analytics'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Reduce no-shows by 50%', 'Automated scheduling', 'Better client experience', 'Increased bookings'],
      link: 'https://ziontechgroup.com/micro-saas/appointment-pro'
    },
    {
      icon: Mic,
      title: 'Zion Voice Assistant',
      description: 'AI-powered voice assistant for business automation and customer service integration.',
      category: 'saas',
      features: ['Voice Commands', 'Natural Language Processing', 'Integration APIs', 'Custom Voice Training', 'Multi-language Support', 'Analytics Dashboard'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Hands-free operation', 'Improved efficiency', 'Better accessibility', 'Modern user experience'],
      link: 'https://ziontechgroup.com/micro-saas/voice-assistant'
    },
    {
      icon: Package,
      title: 'Zion Inventory Master',
      description: 'Intelligent inventory management system with predictive analytics and automated reordering.',
      category: 'saas',
      features: ['Real-time Inventory Tracking', 'Predictive Analytics', 'Automated Reordering', 'Multi-location Support', 'Barcode Scanning', 'Integration APIs'],
      price: 'Starting at $69/month',
      marketPrice: '$120-400/month',
      benefits: ['Reduce stockouts by 80%', 'Optimize inventory levels', 'Automated reordering', 'Cost savings'],
      link: 'https://ziontechgroup.com/micro-saas/inventory-master'
    },
    {
      icon: Heart,
      title: 'Zion Health Monitor',
      description: 'Employee wellness and health monitoring platform with analytics and reporting.',
      category: 'saas',
      features: ['Health Tracking', 'Wellness Programs', 'Analytics Dashboard', 'Employee Engagement', 'Compliance Reporting', 'Integration APIs'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Improved employee wellness', 'Reduced healthcare costs', 'Better engagement', 'Compliance tracking'],
      link: 'https://ziontechgroup.com/micro-saas/health-monitor'
    },
    {
      icon: Workflow,
      title: 'Zion Process Optimizer',
      description: 'Business process automation and optimization platform with workflow management.',
      category: 'saas',
      features: ['Workflow Designer', 'Process Automation', 'Performance Analytics', 'Integration Hub', 'Custom Triggers', 'Team Collaboration'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Streamlined processes', 'Reduced manual work', 'Better efficiency', 'Cost optimization'],
      link: 'https://ziontechgroup.com/micro-saas/process-optimizer'
    },
    {
      icon: DollarSign,
      title: 'Zion Finance Tracker',
      description: 'Comprehensive financial tracking and budgeting platform for small businesses.',
      category: 'saas',
      features: ['Expense Tracking', 'Budget Management', 'Financial Reporting', 'Tax Preparation', 'Invoice Management', 'Bank Integration'],
      price: 'Starting at $49/month',
      marketPrice: '$80-300/month',
      benefits: ['Better financial control', 'Automated tracking', 'Tax compliance', 'Cost visibility'],
      link: 'https://ziontechgroup.com/micro-saas/finance-tracker'
    },
    {
      icon: Settings,
      title: 'Zion System Monitor',
      description: 'IT infrastructure monitoring and alerting system for small to medium businesses.',
      category: 'saas',
      features: ['Server Monitoring', 'Uptime Tracking', 'Performance Analytics', 'Alert Management', 'Reporting Dashboard', 'Mobile App'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Proactive monitoring', 'Reduced downtime', 'Better performance', 'Cost savings'],
      link: 'https://ziontechgroup.com/micro-saas/system-monitor'
    },
    {
      icon: Globe,
      title: 'Zion Website Builder',
      description: 'AI-powered website builder with drag-and-drop interface and SEO optimization.',
      category: 'saas',
      features: ['Drag-and-Drop Builder', 'AI Content Generation', 'SEO Optimization', 'Mobile Responsive', 'E-commerce Integration', 'Analytics Dashboard'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['No coding required', 'Professional websites', 'SEO optimized', 'Mobile responsive'],
      link: 'https://ziontechgroup.com/micro-saas/website-builder'
    },
    {
      icon: Mail,
      title: 'Zion Email Marketing Pro',
      description: 'Advanced email marketing platform with automation, analytics, and personalization.',
      category: 'saas',
      features: ['Email Automation', 'Personalization Engine', 'A/B Testing', 'Analytics Dashboard', 'List Management', 'Template Library'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Higher open rates', 'Automated campaigns', 'Better engagement', 'ROI optimization'],
      link: 'https://ziontechgroup.com/micro-saas/email-marketing'
    },
    {
      icon: Lock,
      title: 'Zion Password Manager',
      description: 'Enterprise-grade password management and security solution for teams.',
      category: 'saas',
      features: ['Password Generation', 'Secure Storage', 'Team Sharing', 'Two-Factor Authentication', 'Audit Logs', 'Compliance Support'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Enhanced security', 'Simplified password management', 'Team collaboration', 'Compliance ready'],
      link: 'https://ziontechgroup.com/micro-saas/password-manager'
    },
    {
      icon: Headphones,
      title: 'Zion Customer Success',
      description: 'Customer success and support platform with ticketing, knowledge base, and analytics.',
      category: 'saas',
      features: ['Ticket Management', 'Knowledge Base', 'Live Chat', 'Customer Analytics', 'Satisfaction Surveys', 'Integration Hub'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Improved customer satisfaction', 'Faster response times', 'Better support efficiency', 'Customer insights'],
      link: 'https://ziontechgroup.com/micro-saas/customer-success'
    },
    {
      icon: TrendingUp,
      title: 'Zion Growth Analytics',
      description: 'Advanced business growth analytics and KPI tracking platform.',
      category: 'saas',
      features: ['KPI Dashboard', 'Growth Metrics', 'Predictive Analytics', 'Custom Reports', 'Data Visualization', 'Integration APIs'],
      price: 'Starting at $69/month',
      marketPrice: '$120-400/month',
      benefits: ['Data-driven growth', 'Better decision making', 'Performance tracking', 'ROI optimization'],
      link: 'https://ziontechgroup.com/micro-saas/growth-analytics'
    },
    {
      icon: Code,
      title: 'Zion API Gateway',
      description: 'API management and integration platform for modern applications.',
      category: 'saas',
      features: ['API Management', 'Rate Limiting', 'Authentication', 'Analytics Dashboard', 'Documentation', 'Integration Hub'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Simplified API management', 'Better security', 'Performance monitoring', 'Developer friendly'],
      link: 'https://ziontechgroup.com/micro-saas/api-gateway'
    },
    {
      icon: FileText,
      title: 'Zion Document Manager',
      description: 'Secure document management and collaboration platform with version control.',
      category: 'saas',
      features: ['Document Storage', 'Version Control', 'Collaboration Tools', 'Access Control', 'Search & Indexing', 'Integration APIs'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Centralized document management', 'Better collaboration', 'Version control', 'Secure access'],
      link: 'https://ziontechgroup.com/micro-saas/document-manager'
    },
    {
      icon: Activity,
      title: 'Zion Performance Monitor',
      description: 'Application performance monitoring and optimization platform.',
      category: 'saas',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Error Tracking', 'Alert Management', 'Custom Dashboards', 'Integration APIs'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Proactive performance monitoring', 'Reduced downtime', 'Better user experience', 'Cost optimization'],
      link: 'https://ziontechgroup.com/micro-saas/performance-monitor'
    },
    {
      icon: Zap,
      title: 'Zion Automation Hub',
      description: 'No-code automation platform for business process automation.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'Pre-built Templates', 'Integration Library', 'Custom Triggers', 'Analytics Dashboard', 'Team Collaboration'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['No coding required', 'Faster automation', 'Better efficiency', 'Cost savings'],
      link: 'https://ziontechgroup.com/micro-saas/automation-hub'
    },
    {
      icon: Star,
      title: 'Zion Review Manager',
      description: 'Online reputation management and review monitoring platform.',
      category: 'saas',
      features: ['Review Monitoring', 'Reputation Analytics', 'Response Management', 'Social Media Integration', 'Custom Reports', 'Alert System'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Better online reputation', 'Improved customer trust', 'Proactive management', 'Business growth'],
      link: 'https://ziontechgroup.com/micro-saas/review-manager'
    },
    {
      icon: Clock,
      title: 'Zion Time Tracker',
      description: 'Advanced time tracking and productivity analytics platform.',
      category: 'saas',
      features: ['Time Tracking', 'Productivity Analytics', 'Project Management', 'Team Reports', 'Integration APIs', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Better time management', 'Improved productivity', 'Accurate billing', 'Team insights'],
      link: 'https://ziontechgroup.com/micro-saas/time-tracker'
    },
    {
      icon: Award,
      title: 'Zion Achievement Tracker',
      description: 'Employee recognition and achievement tracking platform.',
      category: 'saas',
      features: ['Achievement Tracking', 'Recognition System', 'Gamification', 'Team Leaderboards', 'Custom Badges', 'Analytics Dashboard'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Improved employee engagement', 'Better recognition', 'Increased motivation', 'Team building'],
      link: 'https://ziontechgroup.com/micro-saas/achievement-tracker'
    },
    {
      icon: Lightbulb,
      title: 'Zion Innovation Hub',
      description: 'Ideas management and innovation tracking platform for organizations.',
      category: 'saas',
      features: ['Idea Submission', 'Collaboration Tools', 'Voting System', 'Progress Tracking', 'Analytics Dashboard', 'Integration APIs'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Foster innovation', 'Better idea management', 'Team collaboration', 'Innovation tracking'],
      link: 'https://ziontechgroup.com/micro-saas/innovation-hub'
    },
    {
      icon: Layers,
      title: 'Zion Project Portfolio',
      description: 'Project portfolio management and resource allocation platform.',
      category: 'saas',
      features: ['Portfolio Overview', 'Resource Management', 'Project Tracking', 'Risk Assessment', 'Custom Dashboards', 'Integration APIs'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Better project visibility', 'Optimized resource allocation', 'Risk management', 'Portfolio optimization'],
      link: 'https://ziontechgroup.com/micro-saas/project-portfolio'
    },
    {
      icon: PieChart,
      title: 'Zion Business Intelligence',
      description: 'Comprehensive business intelligence and data visualization platform.',
      category: 'saas',
      features: ['Data Visualization', 'Custom Dashboards', 'Report Builder', 'Data Integration', 'Advanced Analytics', 'Mobile App'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Data-driven insights', 'Better decision making', 'Custom reporting', 'Business intelligence'],
      link: 'https://ziontechgroup.com/micro-saas/business-intelligence'
    },
    {
      icon: RefreshCw,
      title: 'Zion Backup Pro',
      description: 'Automated backup and disaster recovery solution for business data.',
      category: 'saas',
      features: ['Automated Backups', 'Disaster Recovery', 'Version Control', 'Encryption', 'Compliance Support', 'Monitoring Dashboard'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Data protection', 'Business continuity', 'Automated backups', 'Peace of mind'],
      link: 'https://ziontechgroup.com/micro-saas/backup-pro'
    },
    {
      icon: Download,
      title: 'Zion File Sync',
      description: 'Secure file synchronization and sharing platform for teams.',
      category: 'saas',
      features: ['File Synchronization', 'Team Sharing', 'Access Control', 'Version Control', 'Mobile Access', 'Integration APIs'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Seamless file sharing', 'Team collaboration', 'Secure access', 'Version control'],
      link: 'https://ziontechgroup.com/micro-saas/file-sync'
    },
    {
      icon: Share2,
      title: 'Zion Social Media Manager',
      description: 'Comprehensive social media management and analytics platform.',
      category: 'saas',
      features: ['Multi-platform Posting', 'Content Calendar', 'Analytics Dashboard', 'Engagement Tracking', 'Hashtag Research', 'Team Collaboration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Streamlined social media management', 'Better engagement', 'Analytics insights', 'Time savings'],
      link: 'https://ziontechgroup.com/micro-saas/social-media-manager'
    },
    {
      icon: ExternalLink,
      title: 'Zion Link Manager',
      description: 'URL shortening and link management platform with analytics.',
      category: 'saas',
      features: ['URL Shortening', 'Link Analytics', 'Custom Domains', 'QR Code Generation', 'Bulk Management', 'Integration APIs'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Professional link management', 'Analytics insights', 'Brand consistency', 'Easy sharing'],
      link: 'https://ziontechgroup.com/micro-saas/link-manager'
    },
    {
      icon: Info,
      title: 'Zion Knowledge Base',
      description: 'Internal knowledge management and documentation platform.',
      category: 'saas',
      features: ['Documentation Management', 'Search Functionality', 'Version Control', 'Team Collaboration', 'Access Control', 'Analytics Dashboard'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Centralized knowledge', 'Better information sharing', 'Team collaboration', 'Easy search'],
      link: 'https://ziontechgroup.com/micro-saas/knowledge-base'
    },
    {
      icon: AlertCircle,
      title: 'Zion Alert System',
      description: 'Multi-channel alert and notification management platform.',
      category: 'saas',
      features: ['Multi-channel Alerts', 'Custom Rules', 'Escalation Management', 'Analytics Dashboard', 'Integration APIs', 'Mobile App'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Proactive monitoring', 'Reduced response time', 'Better communication', 'Incident management'],
      link: 'https://ziontechgroup.com/micro-saas/alert-system'
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Regulatory compliance tracking and management platform.',
      category: 'saas',
      features: ['Compliance Tracking', 'Audit Management', 'Document Management', 'Reporting Tools', 'Alert System', 'Integration APIs'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Regulatory compliance', 'Audit readiness', 'Risk management', 'Documentation control'],
      link: 'https://ziontechgroup.com/micro-saas/compliance-manager'
    },
    {
      icon: XCircle,
      title: 'Zion Issue Tracker',
      description: 'Bug tracking and issue management platform for development teams.',
      category: 'saas',
      features: ['Issue Tracking', 'Bug Management', 'Project Integration', 'Team Collaboration', 'Custom Workflows', 'Analytics Dashboard'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Better issue management', 'Team collaboration', 'Project visibility', 'Quality improvement'],
      link: 'https://ziontechgroup.com/micro-saas/issue-tracker'
    },
    {
      icon: Plus,
      title: 'Zion Form Builder',
      description: 'Advanced form builder with data collection and analytics.',
      category: 'saas',
      features: ['Drag-and-Drop Builder', 'Custom Fields', 'Data Collection', 'Analytics Dashboard', 'Integration APIs', 'Mobile Responsive'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Easy form creation', 'Data collection', 'Analytics insights', 'Mobile responsive'],
      link: 'https://ziontechgroup.com/micro-saas/form-builder'
    },
    {
      icon: Minus,
      title: 'Zion Cost Optimizer',
      description: 'Business cost optimization and expense tracking platform.',
      category: 'saas',
      features: ['Expense Tracking', 'Cost Analysis', 'Budget Management', 'Optimization Recommendations', 'Custom Reports', 'Integration APIs'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Cost reduction', 'Better budget control', 'Optimization insights', 'Expense visibility'],
      link: 'https://ziontechgroup.com/micro-saas/cost-optimizer'
    },
    {
      icon: Search,
      title: 'Zion Search Engine',
      description: 'Enterprise search and discovery platform for internal content.',
      category: 'saas',
      features: ['Full-text Search', 'Content Indexing', 'Search Analytics', 'Custom Filters', 'Integration APIs', 'Mobile App'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Better content discovery', 'Improved search', 'Analytics insights', 'User experience'],
      link: 'https://ziontechgroup.com/micro-saas/search-engine'
    },
    {
      icon: Filter,
      title: 'Zion Data Filter',
      description: 'Advanced data filtering and processing platform.',
      category: 'saas',
      features: ['Data Processing', 'Custom Filters', 'Data Transformation', 'Integration APIs', 'Analytics Dashboard', 'Automation Tools'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Better data quality', 'Automated processing', 'Custom filtering', 'Data insights'],
      link: 'https://ziontechgroup.com/micro-saas/data-filter'
    },
    {
      icon: SortAsc,
      title: 'Zion Data Sorter',
      description: 'Intelligent data sorting and organization platform.',
      category: 'saas',
      features: ['Intelligent Sorting', 'Custom Rules', 'Data Organization', 'Integration APIs', 'Analytics Dashboard', 'Automation Tools'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Better data organization', 'Automated sorting', 'Custom rules', 'Data insights'],
      link: 'https://ziontechgroup.com/micro-saas/data-sorter'
    },
    {
      icon: SortDesc,
      title: 'Zion Priority Manager',
      description: 'Task and project priority management platform.',
      category: 'saas',
      features: ['Priority Management', 'Task Assignment', 'Project Tracking', 'Team Collaboration', 'Analytics Dashboard', 'Integration APIs'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Better task management', 'Improved productivity', 'Team collaboration', 'Priority optimization'],
      link: 'https://ziontechgroup.com/micro-saas/priority-manager'
    },
    {
      icon: Grid,
      title: 'Zion Grid Manager',
      description: 'Data grid and spreadsheet management platform.',
      category: 'saas',
      features: ['Data Grid Management', 'Spreadsheet Tools', 'Collaboration Features', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Better data management', 'Team collaboration', 'Mobile access', 'Data insights'],
      link: 'https://ziontechgroup.com/micro-saas/grid-manager'
    },
    {
      icon: List,
      title: 'Zion List Manager',
      description: 'Advanced list management and organization platform.',
      category: 'saas',
      features: ['List Management', 'Custom Categories', 'Collaboration Tools', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Better organization', 'Team collaboration', 'Mobile access', 'Custom categories'],
      link: 'https://ziontechgroup.com/micro-saas/list-manager'
    },
    {
      icon: Maximize2,
      title: 'Zion Screen Share',
      description: 'Screen sharing and remote collaboration platform.',
      category: 'saas',
      features: ['Screen Sharing', 'Remote Control', 'Team Collaboration', 'Recording Tools', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Better collaboration', 'Remote work support', 'Recording capabilities', 'Team productivity'],
      link: 'https://ziontechgroup.com/micro-saas/screen-share'
    },
    {
      icon: Minimize2,
      title: 'Zion Window Manager',
      description: 'Advanced window and workspace management platform.',
      category: 'saas',
      features: ['Window Management', 'Workspace Organization', 'Productivity Tools', 'Integration APIs', 'Analytics Dashboard', 'Custom Shortcuts'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Better productivity', 'Workspace organization', 'Custom shortcuts', 'Efficiency tools'],
      link: 'https://ziontechgroup.com/micro-saas/window-manager'
    },
    {
      icon: RotateCcw,
      title: 'Zion Version Control',
      description: 'Version control and change management platform.',
      category: 'saas',
      features: ['Version Control', 'Change Tracking', 'Rollback Capabilities', 'Team Collaboration', 'Analytics Dashboard', 'Integration APIs'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Better change management', 'Version tracking', 'Team collaboration', 'Rollback capabilities'],
      link: 'https://ziontechgroup.com/micro-saas/version-control'
    },
    {
      icon: Save,
      title: 'Zion Auto Save',
      description: 'Automated saving and backup platform for documents and data.',
      category: 'saas',
      features: ['Auto Save', 'Backup Management', 'Version Control', 'Recovery Tools', 'Analytics Dashboard', 'Integration APIs'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Data protection', 'Automated saving', 'Version control', 'Recovery tools'],
      link: 'https://ziontechgroup.com/micro-saas/auto-save'
    },
    {
      icon: Edit,
      title: 'Zion Content Editor',
      description: 'Advanced content editing and collaboration platform.',
      category: 'saas',
      features: ['Rich Text Editor', 'Collaboration Tools', 'Version Control', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Better content creation', 'Team collaboration', 'Version control', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/content-editor'
    },
    {
      icon: Trash2,
      title: 'Zion Data Cleaner',
      description: 'Data cleaning and optimization platform.',
      category: 'saas',
      features: ['Data Cleaning', 'Duplicate Removal', 'Data Validation', 'Integration APIs', 'Analytics Dashboard', 'Automation Tools'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Better data quality', 'Automated cleaning', 'Duplicate removal', 'Data validation'],
      link: 'https://ziontechgroup.com/micro-saas/data-cleaner'
    },
    {
      icon: Copy,
      title: 'Zion Copy Manager',
      description: 'Content copying and distribution management platform.',
      category: 'saas',
      features: ['Content Copying', 'Distribution Management', 'Version Control', 'Integration APIs', 'Analytics Dashboard', 'Team Collaboration'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Better content management', 'Distribution control', 'Version tracking', 'Team collaboration'],
      link: 'https://ziontechgroup.com/micro-saas/copy-manager'
    },
    {
      icon: Scissors,
      title: 'Zion Content Cutter',
      description: 'Content editing and trimming platform.',
      category: 'saas',
      features: ['Content Editing', 'Trimming Tools', 'Format Conversion', 'Integration APIs', 'Analytics Dashboard', 'Batch Processing'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Better content editing', 'Format conversion', 'Batch processing', 'Content optimization'],
      link: 'https://ziontechgroup.com/micro-saas/content-cutter'
    },
    {
      icon: Clipboard,
      title: 'Zion Clipboard Manager',
      description: 'Advanced clipboard management and sharing platform.',
      category: 'saas',
      features: ['Clipboard Management', 'Content Sharing', 'History Tracking', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Better clipboard management', 'Content sharing', 'History tracking', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/clipboard-manager'
    },
    {
      icon: Bookmark,
      title: 'Zion Bookmark Manager',
      description: 'Advanced bookmark management and organization platform.',
      category: 'saas',
      features: ['Bookmark Management', 'Category Organization', 'Search Functionality', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Better bookmark organization', 'Easy search', 'Category management', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/bookmark-manager'
    },
    {
      icon: Flag,
      title: 'Zion Flag Manager',
      description: 'Content flagging and moderation platform.',
      category: 'saas',
      features: ['Content Flagging', 'Moderation Tools', 'Review System', 'Integration APIs', 'Analytics Dashboard', 'Team Collaboration'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Better content moderation', 'Flag management', 'Review system', 'Team collaboration'],
      link: 'https://ziontechgroup.com/micro-saas/flag-manager'
    },
    {
      icon: Tag,
      title: 'Zion Tag Manager',
      description: 'Advanced tagging and categorization platform.',
      category: 'saas',
      features: ['Tag Management', 'Categorization Tools', 'Search Functionality', 'Integration APIs', 'Analytics Dashboard', 'Team Collaboration'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Better content organization', 'Tag management', 'Easy search', 'Team collaboration'],
      link: 'https://ziontechgroup.com/micro-saas/tag-manager'
    },
    {
      icon: Hash,
      title: 'Zion Hashtag Manager',
      description: 'Social media hashtag management and analytics platform.',
      category: 'saas',
      features: ['Hashtag Management', 'Trend Analysis', 'Performance Tracking', 'Integration APIs', 'Analytics Dashboard', 'Team Collaboration'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Better hashtag strategy', 'Trend analysis', 'Performance tracking', 'Team collaboration'],
      link: 'https://ziontechgroup.com/micro-saas/hashtag-manager'
    },
    {
      icon: AtSign,
      title: 'Zion Mention Manager',
      description: 'Social media mention tracking and management platform.',
      category: 'saas',
      features: ['Mention Tracking', 'Response Management', 'Analytics Dashboard', 'Integration APIs', 'Team Collaboration', 'Mobile App'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Better mention management', 'Response tracking', 'Analytics insights', 'Team collaboration'],
      link: 'https://ziontechgroup.com/micro-saas/mention-manager'
    },
    {
      icon: Percent,
      title: 'Zion Percentage Calculator',
      description: 'Advanced percentage calculation and analytics platform.',
      category: 'saas',
      features: ['Percentage Calculations', 'Analytics Tools', 'Custom Formulas', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Accurate calculations', 'Custom formulas', 'Analytics tools', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/percentage-calculator'
    },
    {
      icon: Dollar,
      title: 'Zion Currency Converter',
      description: 'Real-time currency conversion and exchange rate platform.',
      category: 'saas',
      features: ['Real-time Conversion', 'Exchange Rate Tracking', 'Historical Data', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Real-time conversion', 'Exchange rate tracking', 'Historical data', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/currency-converter'
    },
    {
      icon: Euro,
      title: 'Zion Multi-Currency Manager',
      description: 'Multi-currency management and conversion platform.',
      category: 'saas',
      features: ['Multi-currency Support', 'Conversion Tools', 'Rate Tracking', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Multi-currency support', 'Conversion tools', 'Rate tracking', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/multi-currency-manager'
    },
    {
      icon: PoundSterling,
      title: 'Zion Financial Calculator',
      description: 'Advanced financial calculation and planning platform.',
      category: 'saas',
      features: ['Financial Calculations', 'Planning Tools', 'Investment Analysis', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Financial planning', 'Investment analysis', 'Calculation tools', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/financial-calculator'
    },
    {
      icon: Yen,
      title: 'Zion Investment Tracker',
      description: 'Investment tracking and portfolio management platform.',
      category: 'saas',
      features: ['Portfolio Tracking', 'Investment Analysis', 'Performance Monitoring', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Portfolio tracking', 'Investment analysis', 'Performance monitoring', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/investment-tracker'
    },
    {
      icon: Bitcoin,
      title: 'Zion Crypto Tracker',
      description: 'Cryptocurrency tracking and portfolio management platform.',
      category: 'saas',
      features: ['Crypto Tracking', 'Portfolio Management', 'Price Alerts', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Crypto tracking', 'Portfolio management', 'Price alerts', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/crypto-tracker'
    },
    {
      icon: CreditCard,
      title: 'Zion Payment Manager',
      description: 'Payment processing and management platform.',
      category: 'saas',
      features: ['Payment Processing', 'Transaction Management', 'Analytics Dashboard', 'Integration APIs', 'Security Tools', 'Mobile App'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Payment processing', 'Transaction management', 'Security tools', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/payment-manager'
    },
    {
      icon: Wallet,
      title: 'Zion Wallet Manager',
      description: 'Digital wallet and payment management platform.',
      category: 'saas',
      features: ['Wallet Management', 'Payment Tracking', 'Security Features', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Wallet management', 'Payment tracking', 'Security features', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/wallet-manager'
    },
    {
      icon: Banknote,
      title: 'Zion Cash Flow Manager',
      description: 'Cash flow tracking and management platform.',
      category: 'saas',
      features: ['Cash Flow Tracking', 'Forecasting Tools', 'Analytics Dashboard', 'Integration APIs', 'Reporting Tools', 'Mobile App'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Cash flow tracking', 'Forecasting tools', 'Analytics insights', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/cash-flow-manager'
    },
    {
      icon: Coins,
      title: 'Zion Coin Manager',
      description: 'Digital coin and token management platform.',
      category: 'saas',
      features: ['Coin Management', 'Token Tracking', 'Portfolio Analysis', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Coin management', 'Token tracking', 'Portfolio analysis', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/coin-manager'
    },
    {
      icon: Receipt,
      title: 'Zion Receipt Manager',
      description: 'Digital receipt management and expense tracking platform.',
      category: 'saas',
      features: ['Receipt Management', 'Expense Tracking', 'OCR Processing', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Receipt management', 'Expense tracking', 'OCR processing', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/receipt-manager'
    },
    {
      icon: Calculator,
      title: 'Zion Calculator Pro',
      description: 'Advanced calculation and computation platform.',
      category: 'saas',
      features: ['Advanced Calculations', 'Custom Formulas', 'Integration APIs', 'Analytics Dashboard', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Advanced calculations', 'Custom formulas', 'Team collaboration', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/calculator-pro'
    },
    {
      icon: Pie,
      title: 'Zion Pie Chart Creator',
      description: 'Advanced pie chart and data visualization platform.',
      category: 'saas',
      features: ['Pie Chart Creation', 'Data Visualization', 'Custom Templates', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Data visualization', 'Custom templates', 'Easy creation', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/pie-chart-creator'
    },
    {
      icon: Bar,
      title: 'Zion Bar Chart Creator',
      description: 'Advanced bar chart and data visualization platform.',
      category: 'saas',
      features: ['Bar Chart Creation', 'Data Visualization', 'Custom Templates', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Data visualization', 'Custom templates', 'Easy creation', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/bar-chart-creator'
    },
    {
      icon: Line,
      title: 'Zion Line Chart Creator',
      description: 'Advanced line chart and data visualization platform.',
      category: 'saas',
      features: ['Line Chart Creation', 'Data Visualization', 'Custom Templates', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Data visualization', 'Custom templates', 'Easy creation', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/line-chart-creator'
    },
    {
      icon: Trending,
      title: 'Zion Trend Analyzer',
      description: 'Advanced trend analysis and forecasting platform.',
      category: 'saas',
      features: ['Trend Analysis', 'Forecasting Tools', 'Data Visualization', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Trend analysis', 'Forecasting tools', 'Data visualization', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/trend-analyzer'
    },
    {
      icon: TrendingDownIcon,
      title: 'Zion Decline Tracker',
      description: 'Performance decline tracking and analysis platform.',
      category: 'saas',
      features: ['Decline Tracking', 'Performance Analysis', 'Alert System', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Decline tracking', 'Performance analysis', 'Alert system', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/decline-tracker'
    },
    {
      icon: ActivityIcon,
      title: 'Zion Activity Monitor',
      description: 'Advanced activity monitoring and tracking platform.',
      category: 'saas',
      features: ['Activity Monitoring', 'Performance Tracking', 'Analytics Dashboard', 'Integration APIs', 'Alert System', 'Mobile App'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Activity monitoring', 'Performance tracking', 'Alert system', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/activity-monitor'
    },
    {
      icon: LayersIcon,
      title: 'Zion Layer Manager',
      description: 'Advanced layer management and organization platform.',
      category: 'saas',
      features: ['Layer Management', 'Organization Tools', 'Collaboration Features', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Layer management', 'Organization tools', 'Collaboration features', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/layer-manager'
    },
    {
      icon: LightbulbIcon,
      title: 'Zion Idea Generator',
      description: 'AI-powered idea generation and brainstorming platform.',
      category: 'saas',
      features: ['Idea Generation', 'Brainstorming Tools', 'AI Assistance', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Idea generation', 'Brainstorming tools', 'AI assistance', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/idea-generator'
    },
    {
      icon: RocketIcon,
      title: 'Zion Launch Manager',
      description: 'Product launch management and tracking platform.',
      category: 'saas',
      features: ['Launch Planning', 'Progress Tracking', 'Team Collaboration', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Launch planning', 'Progress tracking', 'Team collaboration', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/launch-manager'
    },
    {
      icon: SparklesIcon,
      title: 'Zion Magic Creator',
      description: 'Creative content generation and design platform.',
      category: 'saas',
      features: ['Content Generation', 'Design Tools', 'Templates Library', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Content generation', 'Design tools', 'Templates library', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/magic-creator'
    },
    {
      icon: AwardIcon,
      title: 'Zion Achievement Tracker Pro',
      description: 'Advanced achievement tracking and recognition platform.',
      category: 'saas',
      features: ['Achievement Tracking', 'Recognition System', 'Gamification', 'Team Leaderboards', 'Custom Badges', 'Analytics Dashboard'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Achievement tracking', 'Recognition system', 'Gamification', 'Team leaderboards'],
      link: 'https://ziontechgroup.com/micro-saas/achievement-tracker-pro'
    },
    {
      icon: ClockIcon,
      title: 'Zion Time Manager Pro',
      description: 'Advanced time management and productivity platform.',
      category: 'saas',
      features: ['Time Tracking', 'Productivity Analytics', 'Project Management', 'Team Reports', 'Integration APIs', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Time tracking', 'Productivity analytics', 'Project management', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/time-manager-pro'
    },
    {
      icon: PlayIcon,
      title: 'Zion Video Manager',
      description: 'Video management and streaming platform.',
      category: 'saas',
      features: ['Video Management', 'Streaming Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Video management', 'Streaming tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/video-manager'
    },
    {
      icon: ChevronRightIcon,
      title: 'Zion Navigation Manager',
      description: 'Advanced navigation and routing management platform.',
      category: 'saas',
      features: ['Navigation Management', 'Routing Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Navigation management', 'Routing tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/navigation-manager'
    },
    {
      icon: ArrowRightIcon,
      title: 'Zion Direction Manager',
      description: 'Direction and guidance management platform.',
      category: 'saas',
      features: ['Direction Management', 'Guidance Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Direction management', 'Guidance tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/direction-manager'
    },
    {
      icon: CheckCircleIcon,
      title: 'Zion Task Manager Pro',
      description: 'Advanced task management and completion tracking platform.',
      category: 'saas',
      features: ['Task Management', 'Completion Tracking', 'Team Collaboration', 'Integration APIs', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Task management', 'Completion tracking', 'Team collaboration', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/task-manager-pro'
    },
    {
      icon: StarIcon,
      title: 'Zion Rating Manager',
      description: 'Advanced rating and review management platform.',
      category: 'saas',
      features: ['Rating Management', 'Review System', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Rating management', 'Review system', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/rating-manager'
    },
    {
      icon: UsersIcon,
      title: 'Zion User Manager Pro',
      description: 'Advanced user management and administration platform.',
      category: 'saas',
      features: ['User Management', 'Administration Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['User management', 'Administration tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/user-manager-pro'
    },
    {
      icon: TargetIcon,
      title: 'Zion Goal Tracker Pro',
      description: 'Advanced goal tracking and achievement platform.',
      category: 'saas',
      features: ['Goal Tracking', 'Achievement System', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Goal tracking', 'Achievement system', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/goal-tracker-pro'
    },
    {
      icon: CpuIcon,
      title: 'Zion System Manager Pro',
      description: 'Advanced system management and monitoring platform.',
      category: 'saas',
      features: ['System Management', 'Monitoring Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['System management', 'Monitoring tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/system-manager-pro'
    },
    {
      icon: LockIcon,
      title: 'Zion Security Manager Pro',
      description: 'Advanced security management and monitoring platform.',
      category: 'saas',
      features: ['Security Management', 'Monitoring Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $69/month',
      marketPrice: '$120-400/month',
      benefits: ['Security management', 'Monitoring tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/security-manager-pro'
    },
    {
      icon: MessageSquareIcon,
      title: 'Zion Communication Manager Pro',
      description: 'Advanced communication management and collaboration platform.',
      category: 'saas',
      features: ['Communication Management', 'Collaboration Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Communication management', 'Collaboration tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/communication-manager-pro'
    },
    {
      icon: FileTextIcon,
      title: 'Zion Document Manager Pro',
      description: 'Advanced document management and collaboration platform.',
      category: 'saas',
      features: ['Document Management', 'Collaboration Tools', 'Version Control', 'Analytics Dashboard', 'Integration APIs', 'Mobile App'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Document management', 'Collaboration tools', 'Version control', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/document-manager-pro'
    },
    {
      icon: SettingsIcon,
      title: 'Zion Configuration Manager Pro',
      description: 'Advanced configuration management and administration platform.',
      category: 'saas',
      features: ['Configuration Management', 'Administration Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Configuration management', 'Administration tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/configuration-manager-pro'
    },
    {
      icon: MonitorIcon,
      title: 'Zion Display Manager Pro',
      description: 'Advanced display management and monitoring platform.',
      category: 'saas',
      features: ['Display Management', 'Monitoring Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Display management', 'Monitoring tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/display-manager-pro'
    },
    {
      icon: WifiIcon,
      title: 'Zion Network Manager Pro',
      description: 'Advanced network management and monitoring platform.',
      category: 'saas',
      features: ['Network Management', 'Monitoring Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Network management', 'Monitoring tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/network-manager-pro'
    },
    {
      icon: CodeIcon,
      title: 'Zion Code Manager Pro',
      description: 'Advanced code management and collaboration platform.',
      category: 'saas',
      features: ['Code Management', 'Collaboration Tools', 'Version Control', 'Analytics Dashboard', 'Integration APIs', 'Mobile App'],
      price: 'Starting at $69/month',
      marketPrice: '$120-400/month',
      benefits: ['Code management', 'Collaboration tools', 'Version control', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/code-manager-pro'
    },
    {
      icon: PackageIcon,
      title: 'Zion Package Manager Pro',
      description: 'Advanced package management and distribution platform.',
      category: 'saas',
      features: ['Package Management', 'Distribution Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Package management', 'Distribution tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/package-manager-pro'
    },
    {
      icon: MicIcon,
      title: 'Zion Audio Manager Pro',
      description: 'Advanced audio management and processing platform.',
      category: 'saas',
      features: ['Audio Management', 'Processing Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Audio management', 'Processing tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/audio-manager-pro'
    },
    {
      icon: EyeIcon,
      title: 'Zion Visual Manager Pro',
      description: 'Advanced visual management and processing platform.',
      category: 'saas',
      features: ['Visual Management', 'Processing Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Visual management', 'Processing tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/visual-manager-pro'
    },
    {
      icon: HeartIcon,
      title: 'Zion Health Manager Pro',
      description: 'Advanced health management and monitoring platform.',
      category: 'saas',
      features: ['Health Management', 'Monitoring Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Health management', 'Monitoring tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/health-manager-pro'
    },
    {
      icon: DollarSignIcon,
      title: 'Zion Finance Manager Pro',
      description: 'Advanced finance management and tracking platform.',
      category: 'saas',
      features: ['Finance Management', 'Tracking Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $69/month',
      marketPrice: '$120-400/month',
      benefits: ['Finance management', 'Tracking tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/finance-manager-pro'
    },
    {
      icon: CalendarIcon,
      title: 'Zion Schedule Manager Pro',
      description: 'Advanced schedule management and planning platform.',
      category: 'saas',
      features: ['Schedule Management', 'Planning Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Schedule management', 'Planning tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/schedule-manager-pro'
    },
    {
      icon: HeadphonesIcon,
      title: 'Zion Support Manager Pro',
      description: 'Advanced support management and ticketing platform.',
      category: 'saas',
      features: ['Support Management', 'Ticketing System', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Support management', 'Ticketing system', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/support-manager-pro'
    },
    {
      icon: ShoppingCartIcon,
      title: 'Zion Commerce Manager Pro',
      description: 'Advanced commerce management and e-commerce platform.',
      category: 'saas',
      features: ['Commerce Management', 'E-commerce Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Commerce management', 'E-commerce tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/commerce-manager-pro'
    },
    {
      icon: WorkflowIcon,
      title: 'Zion Workflow Manager Pro',
      description: 'Advanced workflow management and automation platform.',
      category: 'saas',
      features: ['Workflow Management', 'Automation Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Workflow management', 'Automation tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/workflow-manager-pro'
    },
    {
      icon: ServerIcon,
      title: 'Zion Server Manager Pro',
      description: 'Advanced server management and monitoring platform.',
      category: 'saas',
      features: ['Server Management', 'Monitoring Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $69/month',
      marketPrice: '$120-400/month',
      benefits: ['Server management', 'Monitoring tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/server-manager-pro'
    },
    {
      icon: MailIcon,
      title: 'Zion Email Manager Pro',
      description: 'Advanced email management and marketing platform.',
      category: 'saas',
      features: ['Email Management', 'Marketing Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Email management', 'Marketing tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/email-manager-pro'
    },
    {
      icon: PhoneIcon,
      title: 'Zion Communication Manager Pro',
      description: 'Advanced communication management and collaboration platform.',
      category: 'saas',
      features: ['Communication Management', 'Collaboration Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-350/month',
      benefits: ['Communication management', 'Collaboration tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/communication-manager-pro'
    },
    {
      icon: MapPinIcon,
      title: 'Zion Location Manager Pro',
      description: 'Advanced location management and tracking platform.',
      category: 'saas',
      features: ['Location Management', 'Tracking Tools', 'Analytics Dashboard', 'Integration APIs', 'Mobile App', 'Team Collaboration'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Location management', 'Tracking tools', 'Analytics dashboard', 'Mobile access'],
      link: 'https://ziontechgroup.com/micro-saas/location-manager-pro'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, analytics, cloud migration, cybersecurity, and custom software development." />
        <meta name="keywords" content="AI services, IT services, cloud migration, cybersecurity, software development, micro saas" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT solutions for your business" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Comprehensive AI and IT Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From cutting-edge AI solutions to robust IT infrastructure, we provide end-to-end technology 
              services that transform businesses and drive growth. Choose from our comprehensive suite of 
              services tailored to your specific needs.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our experts for a free consultation and discover how our services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;