import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Shield,
  Database,
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
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Calendar,
  MapPin,
  Phone,
  Headphones,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  Battery as BatteryIcon,
  BatteryLow as BatteryLowIcon,
  Signal as SignalIcon,
  SignalHigh as SignalHighIcon,
  SignalLow as SignalLowIcon,
  SignalZero as SignalZeroIcon
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasProducts = [
  {
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard'],
    pricing: '$29 - $199/month',
    category: 'Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite'
  },
  {
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking'],
    pricing: '$49 - $299/month',
    category: 'Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics and custom reporting.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization'],
    pricing: '$39 - $249/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard'
  },
  {
    title: 'Automated Workflow Builder',
    description: 'No-code automation platform for business processes and integrations.',
    icon: Zap,
    features: ['Drag & Drop Builder', '500+ Integrations', 'Conditional Logic', 'API Access'],
    pricing: '$19 - $149/month',
    category: 'Automation',
    popular: true,
    benefits: ['Process Automation', 'Time Savings', 'Error Reduction', 'Scalability'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/workflow-builder'
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing and multi-channel support.',
    icon: MessageSquare,
    features: ['NLP Processing', 'Multi-channel Support', 'Knowledge Base', 'Human Handoff'],
    pricing: '$25 - $199/month',
    category: 'Customer Service',
    benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Customer Satisfaction'],
    marketPrice: '$40 - $300/month',
    link: 'https://ziontechgroup.com/ai-support-bot'
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Support', 'Analytics'],
    pricing: '$59 - $399/month',
    category: 'Inventory',
    benefits: ['Reduced Stockouts', 'Lower Costs', 'Better Planning', 'Automated Management'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-inventory'
  },
  {
    title: 'AI Email Marketing Platform',
    description: 'Intelligent email campaigns with personalization, A/B testing, and automation.',
    icon: Mail,
    features: ['AI Personalization', 'A/B Testing', 'Automation', 'Advanced Analytics'],
    pricing: '$29 - $199/month',
    category: 'Email Marketing',
    benefits: ['Higher Open Rates', 'Better Engagement', 'Automated Campaigns', 'ROI Tracking'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-email-marketing'
  },
  {
    title: 'Smart Project Management',
    description: 'AI-enhanced project management with resource optimization and risk prediction.',
    icon: Calendar,
    features: ['AI Resource Planning', 'Risk Prediction', 'Time Tracking', 'Collaboration Tools'],
    pricing: '$39 - $299/month',
    category: 'Project Management',
    benefits: ['Better Planning', 'Risk Mitigation', 'Team Collaboration', 'Project Success'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/smart-project-management'
  },
  {
    title: 'AI Financial Analytics',
    description: 'Automated financial reporting, forecasting, and expense management platform.',
    icon: TrendingUp,
    features: ['Automated Reporting', 'Financial Forecasting', 'Expense Tracking', 'Budget Planning'],
    pricing: '$49 - $349/month',
    category: 'Finance',
    benefits: ['Accurate Forecasting', 'Cost Control', 'Automated Reports', 'Financial Insights'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/ai-financial-analytics'
  },
  {
    title: 'Smart HR Management',
    description: 'AI-powered HR platform with recruitment, performance management, and analytics.',
    icon: Users,
    features: ['AI Recruitment', 'Performance Analytics', 'Employee Engagement', 'Compliance'],
    pricing: '$59 - $399/month',
    category: 'HR',
    benefits: ['Better Hiring', 'Performance Insights', 'Employee Satisfaction', 'Compliance'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-hr-management'
  },
  {
    title: 'AI Social Media Manager',
    description: 'Automated social media posting, engagement, and analytics platform.',
    icon: Globe,
    features: ['Auto Posting', 'Engagement Tracking', 'Content Suggestions', 'Analytics'],
    pricing: '$19 - $149/month',
    category: 'Social Media',
    benefits: ['Consistent Posting', 'Better Engagement', 'Time Savings', 'Growth Tracking'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-social-media-manager'
  },
  {
    title: 'Smart Document Management',
    description: 'AI-powered document processing, OCR, and intelligent filing system.',
    icon: FileText,
    features: ['OCR Processing', 'Smart Filing', 'Search & Retrieval', 'Version Control'],
    pricing: '$25 - $199/month',
    category: 'Document Management',
    benefits: ['Easy Organization', 'Quick Search', 'Version Control', 'Collaboration'],
    marketPrice: '$40 - $300/month',
    link: 'https://ziontechgroup.com/smart-document-management'
  },
  {
    title: 'AI Website Optimizer',
    description: 'Automated website performance optimization and SEO enhancement platform.',
    icon: Monitor,
    features: ['Performance Optimization', 'SEO Enhancement', 'A/B Testing', 'Analytics'],
    pricing: '$39 - $299/month',
    category: 'Web Optimization',
    benefits: ['Faster Loading', 'Better SEO', 'Higher Conversions', 'User Experience'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-website-optimizer'
  },
  {
    title: 'Smart E-commerce Analytics',
    description: 'AI-powered e-commerce insights with customer behavior analysis and recommendations.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Product Recommendations', 'Sales Forecasting', 'Inventory Insights'],
    pricing: '$49 - $349/month',
    category: 'E-commerce',
    benefits: ['Better Recommendations', 'Sales Growth', 'Customer Insights', 'Inventory Optimization'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-ecommerce-analytics'
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review with security analysis, performance optimization, and best practices.',
    icon: Code,
    features: ['Security Analysis', 'Performance Review', 'Best Practices', 'Automated Fixes'],
    pricing: '$29 - $199/month',
    category: 'Development',
    benefits: ['Better Code Quality', 'Security Assurance', 'Faster Reviews', 'Learning'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-code-review'
  },
  {
    title: 'Smart Energy Management',
    description: 'AI-powered energy monitoring and optimization for businesses and homes.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Predictive Maintenance'],
    pricing: '$19 - $149/month',
    category: 'Energy',
    benefits: ['Cost Savings', 'Energy Efficiency', 'Predictive Maintenance', 'Sustainability'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-energy-management'
  },
  {
    title: 'AI Translation Manager',
    description: 'Automated translation and localization platform with AI-powered accuracy.',
    icon: Globe,
    features: ['AI Translation', 'Multi-language Support', 'Quality Assurance', 'Workflow Management'],
    pricing: '$25 - $199/month',
    category: 'Translation',
    benefits: ['Accurate Translations', 'Cost Savings', 'Faster Delivery', 'Quality Control'],
    marketPrice: '$40 - $300/month',
    link: 'https://ziontechgroup.com/ai-translation-manager'
  },
  {
    title: 'Smart Compliance Monitor',
    description: 'Automated compliance monitoring and reporting for various industry standards.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Automated Reports', 'Risk Assessment', 'Audit Trail'],
    pricing: '$59 - $399/month',
    category: 'Compliance',
    benefits: ['Compliance Assurance', 'Risk Mitigation', 'Automated Reports', 'Audit Readiness'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-compliance-monitor'
  },
  {
    title: 'AI Video Analytics',
    description: 'Intelligent video analysis with object detection, behavior analysis, and insights.',
    icon: Video,
    features: ['Object Detection', 'Behavior Analysis', 'Real-time Alerts', 'Analytics Dashboard'],
    pricing: '$39 - $299/month',
    category: 'Video Analytics',
    benefits: ['Security Enhancement', 'Behavior Insights', 'Real-time Alerts', 'Cost Savings'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-video-analytics'
  },
  {
    title: 'Smart Contract Management',
    description: 'AI-powered contract lifecycle management with automated analysis and compliance tracking.',
    icon: FileText,
    features: ['Contract Analysis', 'Automated Reviews', 'Compliance Tracking', 'Renewal Alerts'],
    pricing: '$49 - $399/month',
    category: 'Legal Tech',
    benefits: ['Risk Reduction', 'Time Savings', 'Compliance Assurance', 'Cost Control'],
    marketPrice: '$75 - $600/month',
    link: 'https://ziontechgroup.com/smart-contract-management'
  },
  {
    title: 'AI-Powered SEO Suite',
    description: 'Comprehensive SEO optimization platform with AI-driven content and technical analysis.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Rank Tracking'],
    pricing: '$29 - $199/month',
    category: 'SEO',
    benefits: ['Higher Rankings', 'More Traffic', 'Better ROI', 'Automated Optimization'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-seo-suite'
  },
  {
    title: 'Smart Expense Management',
    description: 'AI-powered expense tracking and reimbursement platform for businesses.',
    icon: CreditCard,
    features: ['Receipt OCR', 'Policy Compliance', 'Automated Approval', 'Analytics'],
    pricing: '$19 - $149/month',
    category: 'Finance',
    benefits: ['Time Savings', 'Policy Compliance', 'Cost Control', 'Automation'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-expense-management'
  },
  {
    title: 'AI-Powered Time Tracking',
    description: 'Intelligent time tracking with automatic project detection and productivity insights.',
    icon: Clock,
    features: ['Auto Time Tracking', 'Project Detection', 'Productivity Analytics', 'Team Management'],
    pricing: '$15 - $99/month',
    category: 'Productivity',
    benefits: ['Accurate Tracking', 'Productivity Insights', 'Team Visibility', 'Billing Accuracy'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/ai-time-tracking'
  },
  {
    title: 'Smart Meeting Scheduler',
    description: 'AI-powered meeting scheduling with calendar optimization and conflict resolution.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Handling', 'Meeting Analytics'],
    pricing: '$9 - $79/month',
    category: 'Productivity',
    benefits: ['Time Savings', 'Fewer Conflicts', 'Better Scheduling', 'Analytics'],
    marketPrice: '$15 - $120/month',
    link: 'https://ziontechgroup.com/smart-meeting-scheduler'
  },
  {
    title: 'AI-Powered Password Manager',
    description: 'Advanced password management with AI security analysis and breach monitoring.',
    icon: Lock,
    features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Team Sharing'],
    pricing: '$5 - $39/month',
    category: 'Security',
    benefits: ['Enhanced Security', 'Convenience', 'Team Collaboration', 'Breach Protection'],
    marketPrice: '$8 - $60/month',
    link: 'https://ziontechgroup.com/ai-password-manager'
  },
  {
    title: 'Smart Invoice Generator',
    description: 'AI-powered invoice creation with automated data extraction and payment tracking.',
    icon: FileText,
    features: ['Auto Data Extraction', 'Template Customization', 'Payment Tracking', 'Tax Calculation'],
    pricing: '$19 - $149/month',
    category: 'Finance',
    benefits: ['Time Savings', 'Accuracy', 'Professional Invoices', 'Payment Tracking'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-invoice-generator'
  },
  {
    title: 'AI-Powered Customer Feedback Analysis',
    description: 'Intelligent analysis of customer feedback with sentiment analysis and actionable insights.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Topic Extraction', 'Trend Analysis', 'Actionable Insights'],
    pricing: '$29 - $199/month',
    category: 'Customer Experience',
    benefits: ['Better Understanding', 'Actionable Insights', 'Customer Satisfaction', 'Competitive Edge'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-customer-feedback'
  },
  {
    title: 'Smart Inventory Forecasting',
    description: 'AI-powered inventory prediction with demand forecasting and optimization recommendations.',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Seasonal Analysis', 'Reorder Alerts'],
    pricing: '$39 - $299/month',
    category: 'Inventory',
    benefits: ['Reduced Stockouts', 'Lower Costs', 'Better Planning', 'Optimized Inventory'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/smart-inventory-forecasting'
  },
  {
    title: 'AI-Powered Social Media Scheduler',
    description: 'Intelligent social media management with optimal posting times and content suggestions.',
    icon: Globe,
    features: ['Optimal Timing', 'Content Suggestions', 'Multi-platform Posting', 'Engagement Analytics'],
    pricing: '$19 - $149/month',
    category: 'Social Media',
    benefits: ['Better Engagement', 'Time Savings', 'Consistent Posting', 'Growth Tracking'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-social-scheduler'
  },
  {
    title: 'Smart Document Scanner',
    description: 'AI-powered document scanning with OCR, classification, and intelligent filing.',
    icon: FileText,
    features: ['OCR Processing', 'Auto Classification', 'Smart Filing', 'Search & Retrieval'],
    pricing: '$15 - $99/month',
    category: 'Document Management',
    benefits: ['Easy Organization', 'Quick Search', 'Paperless Office', 'Time Savings'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/smart-document-scanner'
  },
  {
    title: 'AI-Powered Lead Scoring',
    description: 'Intelligent lead qualification and scoring with automated follow-up recommendations.',
    icon: Target,
    features: ['Lead Scoring', 'Behavioral Analysis', 'Follow-up Automation', 'Conversion Prediction'],
    pricing: '$29 - $199/month',
    category: 'Sales',
    benefits: ['Higher Conversion', 'Better Prioritization', 'Automated Workflows', 'ROI Improvement'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-lead-scoring'
  },
  {
    title: 'Smart Email Signature Manager',
    description: 'AI-powered email signature management with dynamic content and compliance tracking.',
    icon: Mail,
    features: ['Dynamic Signatures', 'Compliance Tracking', 'Brand Consistency', 'Analytics'],
    pricing: '$9 - $59/month',
    category: 'Email Marketing',
    benefits: ['Brand Consistency', 'Compliance', 'Professional Image', 'Easy Management'],
    marketPrice: '$15 - $90/month',
    link: 'https://ziontechgroup.com/smart-email-signatures'
  },
  {
    title: 'AI-Powered Website Heatmap',
    description: 'Intelligent website analytics with user behavior tracking and optimization recommendations.',
    icon: Eye,
    features: ['Heatmap Analysis', 'User Behavior Tracking', 'Conversion Optimization', 'A/B Testing'],
    pricing: '$19 - $149/month',
    category: 'Web Analytics',
    benefits: ['Better UX', 'Higher Conversions', 'Data-Driven Decisions', 'Optimization'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-website-heatmap'
  },
  {
    title: 'Smart Appointment Booking',
    description: 'AI-powered appointment scheduling with automated reminders and conflict resolution.',
    icon: Calendar,
    features: ['Auto Scheduling', 'Reminder Automation', 'Conflict Resolution', 'Calendar Sync'],
    pricing: '$15 - $99/month',
    category: 'Scheduling',
    benefits: ['Reduced No-shows', 'Time Savings', 'Better Scheduling', 'Customer Satisfaction'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/smart-appointment-booking'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation with AI-powered detection of inappropriate content.',
    icon: Shield,
    features: ['Content Detection', 'Automated Moderation', 'Custom Rules', 'Real-time Processing'],
    pricing: '$39 - $299/month',
    category: 'Content Management',
    benefits: ['Safer Platform', 'Reduced Manual Work', 'Consistent Moderation', 'Scalability'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-content-moderation'
  },
  {
    title: 'Smart Backup Manager',
    description: 'AI-powered backup solution with intelligent scheduling and data deduplication.',
    icon: Database,
    features: ['Auto Scheduling', 'Data Deduplication', 'Cloud Storage', 'Recovery Testing'],
    pricing: '$19 - $149/month',
    category: 'Data Management',
    benefits: ['Data Protection', 'Cost Savings', 'Automation', 'Peace of Mind'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-backup-manager'
  },
  {
    title: 'AI-Powered Form Builder',
    description: 'Intelligent form creation with conditional logic and automated data processing.',
    icon: FileText,
    features: ['Drag & Drop Builder', 'Conditional Logic', 'Auto Processing', 'Analytics'],
    pricing: '$15 - $99/month',
    category: 'Form Management',
    benefits: ['Easy Creation', 'Better UX', 'Data Processing', 'Analytics'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/ai-form-builder'
  },
  {
    title: 'AI-Powered Voice Assistant Builder',
    description: 'Create custom voice assistants for your business with natural language processing.',
    icon: Mic,
    features: ['Voice Recognition', 'Natural Language Processing', 'Custom Commands', 'Multi-language Support'],
    pricing: '$49 - $399/month',
    category: 'Voice Technology',
    popular: true,
    benefits: ['Hands-free Operation', 'Better Accessibility', 'Improved Efficiency', 'Modern Interface'],
    marketPrice: '$75 - $600/month',
    link: 'https://ziontechgroup.com/ai-voice-assistant-builder'
  },
  {
    title: 'Smart Contract Analytics Platform',
    description: 'AI-powered blockchain analytics and smart contract monitoring platform.',
    icon: Shield,
    features: ['Contract Analysis', 'Security Monitoring', 'Performance Tracking', 'Risk Assessment'],
    pricing: '$99 - $799/month',
    category: 'Blockchain',
    popular: true,
    benefits: ['Security Assurance', 'Performance Optimization', 'Risk Mitigation', 'Compliance'],
    marketPrice: '$150 - $1,200/month',
    link: 'https://ziontechgroup.com/smart-contract-analytics'
  },
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Automated carbon footprint tracking and sustainability reporting for businesses.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Reporting', 'Emission Reduction Tips', 'Compliance Monitoring'],
    pricing: '$29 - $199/month',
    category: 'Sustainability',
    popular: true,
    benefits: ['Environmental Impact', 'Compliance', 'Cost Savings', 'Brand Reputation'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-carbon-tracker'
  },
  {
    title: 'Smart Employee Wellness Platform',
    description: 'AI-powered employee wellness monitoring and mental health support system.',
    icon: Heart,
    features: ['Wellness Tracking', 'Mental Health Support', 'Stress Monitoring', 'Wellness Programs'],
    pricing: '$39 - $299/month',
    category: 'HR',
    popular: true,
    benefits: ['Employee Wellbeing', 'Productivity Improvement', 'Reduced Absenteeism', 'Team Morale'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/smart-employee-wellness'
  },
  {
    title: 'AI-Powered Real Estate Valuation',
    description: 'Automated property valuation and market analysis using AI and machine learning.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Investment Insights', 'Price Prediction'],
    pricing: '$59 - $449/month',
    category: 'Real Estate',
    popular: true,
    benefits: ['Accurate Valuations', 'Market Insights', 'Investment Decisions', 'Time Savings'],
    marketPrice: '$90 - $700/month',
    link: 'https://ziontechgroup.com/ai-real-estate-valuation'
  },
  {
    title: 'Smart Fleet Management System',
    description: 'AI-powered fleet tracking, optimization, and maintenance management platform.',
    icon: Truck,
    features: ['Fleet Tracking', 'Route Optimization', 'Maintenance Scheduling', 'Driver Analytics'],
    pricing: '$79 - $599/month',
    category: 'Fleet Management',
    popular: true,
    benefits: ['Cost Reduction', 'Improved Efficiency', 'Better Safety', 'Optimized Routes'],
    marketPrice: '$120 - $900/month',
    link: 'https://ziontechgroup.com/smart-fleet-management'
  },
  {
    title: 'AI-Powered Event Management',
    description: 'Intelligent event planning and management platform with automated coordination.',
    icon: Calendar,
    features: ['Event Planning', 'Vendor Management', 'Attendee Analytics', 'Budget Tracking'],
    pricing: '$49 - $399/month',
    category: 'Event Management',
    popular: true,
    benefits: ['Streamlined Planning', 'Better Organization', 'Cost Control', 'Success Metrics'],
    marketPrice: '$75 - $600/month',
    link: 'https://ziontechgroup.com/ai-event-management'
  },
  {
    title: 'Smart Restaurant Management',
    description: 'AI-powered restaurant operations management with inventory and staff optimization.',
    icon: ShoppingCart,
    features: ['Inventory Management', 'Staff Scheduling', 'Menu Optimization', 'Customer Analytics'],
    pricing: '$69 - $549/month',
    category: 'Restaurant',
    popular: true,
    benefits: ['Operational Efficiency', 'Cost Control', 'Better Service', 'Data Insights'],
    marketPrice: '$105 - $825/month',
    link: 'https://ziontechgroup.com/smart-restaurant-management'
  },
  {
    title: 'AI-Powered Learning Management System',
    description: 'Intelligent learning platform with personalized content and progress tracking.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Content Creation', 'Assessment Tools'],
    pricing: '$39 - $299/month',
    category: 'Education',
    popular: true,
    benefits: ['Better Learning Outcomes', 'Personalized Experience', 'Progress Tracking', 'Engagement'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-learning-management'
  },
  {
    title: 'Smart Home Automation Platform',
    description: 'AI-powered home automation with predictive behavior and energy optimization.',
    icon: Home,
    features: ['Device Control', 'Energy Optimization', 'Security Monitoring', 'Predictive Automation'],
    pricing: '$29 - $199/month',
    category: 'Smart Home',
    popular: true,
    benefits: ['Convenience', 'Energy Savings', 'Security', 'Comfort'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-home-automation'
  },
  {
    title: 'AI-Powered Fitness Coach',
    description: 'Personalized fitness coaching platform with AI-powered workout recommendations.',
    icon: Heart,
    features: ['Personalized Workouts', 'Progress Tracking', 'Nutrition Guidance', 'Goal Setting'],
    pricing: '$19 - $149/month',
    category: 'Fitness',
    popular: true,
    benefits: ['Better Results', 'Personalized Training', 'Motivation', 'Health Improvement'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-fitness-coach'
  },
  {
    title: 'Smart Legal Document Review',
    description: 'AI-powered legal document analysis and contract review platform.',
    icon: FileText,
    features: ['Document Analysis', 'Contract Review', 'Risk Assessment', 'Compliance Checking'],
    pricing: '$99 - $799/month',
    category: 'Legal Tech',
    popular: true,
    benefits: ['Time Savings', 'Risk Reduction', 'Accuracy', 'Cost Efficiency'],
    marketPrice: '$150 - $1,200/month',
    link: 'https://ziontechgroup.com/smart-legal-review'
  },
  {
    title: 'AI-Powered Music Streaming Analytics',
    description: 'Advanced analytics platform for music streaming and content performance tracking.',
    icon: Mic,
    features: ['Stream Analytics', 'Listener Insights', 'Trend Analysis', 'Revenue Tracking'],
    pricing: '$39 - $299/month',
    category: 'Music Tech',
    popular: true,
    benefits: ['Better Insights', 'Revenue Optimization', 'Audience Understanding', 'Content Strategy'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-music-analytics'
  },
  {
    title: 'Smart Agriculture Management',
    description: 'AI-powered farming management with crop monitoring and yield optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Weather Analysis', 'Resource Optimization'],
    pricing: '$59 - $449/month',
    category: 'Agriculture',
    popular: true,
    benefits: ['Higher Yields', 'Resource Efficiency', 'Risk Mitigation', 'Sustainability'],
    marketPrice: '$90 - $700/month',
    link: 'https://ziontechgroup.com/smart-agriculture'
  },
  {
    title: 'AI-Powered Travel Planning',
    description: 'Intelligent travel planning platform with personalized recommendations and optimization.',
    icon: Globe,
    features: ['Trip Planning', 'Price Optimization', 'Personalized Recommendations', 'Real-time Updates'],
    pricing: '$19 - $149/month',
    category: 'Travel',
    popular: true,
    benefits: ['Cost Savings', 'Better Planning', 'Personalized Experience', 'Time Savings'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-travel-planning'
  },
  {
    title: 'Smart Insurance Claims Processing',
    description: 'AI-powered insurance claims processing with automated assessment and fraud detection.',
    icon: Shield,
    features: ['Claims Processing', 'Fraud Detection', 'Damage Assessment', 'Automated Approval'],
    pricing: '$79 - $599/month',
    category: 'Insurance',
    popular: true,
    benefits: ['Faster Processing', 'Fraud Prevention', 'Cost Reduction', 'Customer Satisfaction'],
    marketPrice: '$120 - $900/month',
    link: 'https://ziontechgroup.com/smart-insurance-claims'
  },
  {
    title: 'AI-Powered Content Localization',
    description: 'Automated content translation and localization platform with cultural adaptation.',
    icon: Globe,
    features: ['Multi-language Translation', 'Cultural Adaptation', 'Quality Assurance', 'Workflow Management'],
    pricing: '$49 - $399/month',
    category: 'Localization',
    popular: true,
    benefits: ['Global Reach', 'Cultural Accuracy', 'Cost Efficiency', 'Faster Delivery'],
    marketPrice: '$75 - $600/month',
    link: 'https://ziontechgroup.com/ai-content-localization'
  },
  {
    title: 'Smart Waste Management',
    description: 'AI-powered waste management optimization with route planning and recycling tracking.',
    icon: Package,
    features: ['Route Optimization', 'Recycling Tracking', 'Waste Analytics', 'Cost Management'],
    pricing: '$39 - $299/month',
    category: 'Waste Management',
    popular: true,
    benefits: ['Cost Reduction', 'Environmental Impact', 'Efficiency', 'Compliance'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/smart-waste-management'
  },
  {
    title: 'AI-Powered Pet Care Platform',
    description: 'Intelligent pet care management with health monitoring and behavior analysis.',
    icon: Heart,
    features: ['Health Monitoring', 'Behavior Analysis', 'Vet Scheduling', 'Care Reminders'],
    pricing: '$15 - $99/month',
    category: 'Pet Care',
    popular: true,
    benefits: ['Pet Health', 'Peace of Mind', 'Better Care', 'Cost Savings'],
    marketPrice: '$25 - $150/month',
    link: 'https://ziontechgroup.com/ai-pet-care'
  },
  {
    title: 'Smart Construction Management',
    description: 'AI-powered construction project management with safety monitoring and progress tracking.',
    icon: Building,
    features: ['Project Tracking', 'Safety Monitoring', 'Resource Management', 'Progress Analytics'],
    pricing: '$79 - $599/month',
    category: 'Construction',
    popular: true,
    benefits: ['Project Efficiency', 'Safety Improvement', 'Cost Control', 'Quality Assurance'],
    marketPrice: '$120 - $900/month',
    link: 'https://ziontechgroup.com/smart-construction-management'
  },
  {
    title: 'AI-Powered Beauty & Skincare Advisor',
    description: 'Personalized beauty and skincare recommendations using AI analysis.',
    icon: Heart,
    features: ['Skin Analysis', 'Product Recommendations', 'Routine Planning', 'Progress Tracking'],
    pricing: '$19 - $149/month',
    category: 'Beauty',
    popular: true,
    benefits: ['Personalized Care', 'Better Results', 'Cost Efficiency', 'Expert Advice'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-beauty-advisor'
  },
  {
    title: 'Smart Parking Management',
    description: 'AI-powered parking management with space optimization and payment processing.',
    icon: Car,
    features: ['Space Optimization', 'Payment Processing', 'Availability Tracking', 'Revenue Analytics'],
    pricing: '$49 - $399/month',
    category: 'Parking',
    popular: true,
    benefits: ['Revenue Optimization', 'Better Utilization', 'Customer Experience', 'Efficiency'],
    marketPrice: '$75 - $600/month',
    link: 'https://ziontechgroup.com/smart-parking-management'
  },
  {
    title: 'AI-Powered Language Learning Assistant',
    description: 'Personalized language learning with AI-powered tutoring and practice sessions.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Speech Practice', 'Progress Tracking', 'Cultural Context'],
    pricing: '$19 - $149/month',
    category: 'Language Learning',
    popular: true,
    benefits: ['Faster Learning', 'Personalized Experience', 'Better Retention', 'Cultural Understanding'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-language-learning'
  },
  {
    title: 'Smart Energy Monitoring',
    description: 'AI-powered energy consumption monitoring and optimization for homes and businesses.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Predictive Maintenance'],
    pricing: '$29 - $199/month',
    category: 'Energy',
    popular: true,
    benefits: ['Cost Savings', 'Energy Efficiency', 'Environmental Impact', 'Predictive Insights'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-energy-monitoring'
  },
  {
    title: 'AI-Powered Mental Health Companion',
    description: 'AI-powered mental health support with mood tracking and therapeutic conversations.',
    icon: Heart,
    features: ['Mood Tracking', 'Therapeutic Chat', 'Crisis Detection', 'Professional Referrals'],
    pricing: '$29 - $199/month',
    category: 'Mental Health',
    popular: true,
    benefits: ['Mental Wellbeing', '24/7 Support', 'Privacy', 'Professional Guidance'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-mental-health-companion'
  },
  {
    title: 'Smart Retail Analytics',
    description: 'AI-powered retail analytics with customer behavior analysis and sales optimization.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Sales Optimization', 'Inventory Management', 'Trend Analysis'],
    pricing: '$59 - $449/month',
    category: 'Retail',
    popular: true,
    benefits: ['Sales Growth', 'Customer Insights', 'Inventory Optimization', 'Competitive Edge'],
    marketPrice: '$90 - $700/month',
    link: 'https://ziontechgroup.com/smart-retail-analytics'
  },
  {
    title: 'AI-Powered Personal Finance Manager',
    description: 'Intelligent personal finance management with budgeting and investment advice.',
    icon: TrendingUp,
    features: ['Budget Planning', 'Investment Advice', 'Expense Tracking', 'Goal Setting'],
    pricing: '$19 - $149/month',
    category: 'Personal Finance',
    popular: true,
    benefits: ['Financial Health', 'Better Planning', 'Investment Growth', 'Debt Management'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-finance-manager'
  },
  {
    title: 'Smart Healthcare Scheduling',
    description: 'AI-powered healthcare appointment scheduling with patient management and optimization.',
    icon: Calendar,
    features: ['Appointment Scheduling', 'Patient Management', 'Resource Optimization', 'Waitlist Management'],
    pricing: '$49 - $399/month',
    category: 'Healthcare',
    popular: true,
    benefits: ['Efficiency', 'Patient Satisfaction', 'Resource Optimization', 'Reduced Wait Times'],
    marketPrice: '$75 - $600/month',
    link: 'https://ziontechgroup.com/smart-healthcare-scheduling'
  },
  {
    title: 'AI-Powered Social Media Analytics',
    description: 'Advanced social media analytics with sentiment analysis and engagement optimization.',
    icon: Globe,
    features: ['Sentiment Analysis', 'Engagement Tracking', 'Content Optimization', 'Competitor Analysis'],
    pricing: '$39 - $299/month',
    category: 'Social Media',
    popular: true,
    benefits: ['Better Engagement', 'Content Strategy', 'Brand Monitoring', 'ROI Tracking'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-social-media-analytics'
  },
  {
    title: 'Smart Supply Chain Visibility',
    description: 'AI-powered supply chain tracking and optimization with real-time visibility.',
    icon: Truck,
    features: ['Real-time Tracking', 'Risk Assessment', 'Optimization', 'Compliance Monitoring'],
    pricing: '$79 - $599/month',
    category: 'Supply Chain',
    popular: true,
    benefits: ['Visibility', 'Risk Mitigation', 'Cost Optimization', 'Compliance'],
    marketPrice: '$120 - $900/month',
    link: 'https://ziontechgroup.com/smart-supply-chain-visibility'
  },
  {
    title: 'AI-Powered Personal Stylist',
    description: 'Personalized fashion and styling recommendations using AI analysis.',
    icon: ShoppingCart,
    features: ['Style Analysis', 'Outfit Recommendations', 'Trend Prediction', 'Size Optimization'],
    pricing: '$19 - $149/month',
    category: 'Fashion',
    popular: true,
    benefits: ['Personal Style', 'Confidence', 'Trend Awareness', 'Cost Efficiency'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-stylist'
  },
  {
    title: 'Smart Water Management',
    description: 'AI-powered water usage monitoring and conservation optimization platform.',
    icon: Droplets,
    features: ['Usage Monitoring', 'Leak Detection', 'Conservation Tips', 'Cost Analysis'],
    pricing: '$29 - $199/month',
    category: 'Water Management',
    popular: true,
    benefits: ['Water Conservation', 'Cost Savings', 'Leak Prevention', 'Environmental Impact'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-water-management'
  },
  {
    title: 'AI-Powered Personal Trainer',
    description: 'Virtual personal trainer with AI-powered workout customization and form analysis.',
    icon: Heart,
    features: ['Workout Customization', 'Form Analysis', 'Progress Tracking', 'Nutrition Guidance'],
    pricing: '$29 - $199/month',
    category: 'Fitness',
    popular: true,
    benefits: ['Personalized Training', 'Better Results', 'Form Improvement', 'Motivation'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-personal-trainer'
  },
  {
    title: 'Smart Home Security System',
    description: 'AI-powered home security with facial recognition and intelligent monitoring.',
    icon: Shield,
    features: ['Facial Recognition', 'Motion Detection', 'Smart Alerts', 'Remote Monitoring'],
    pricing: '$39 - $299/month',
    category: 'Home Security',
    popular: true,
    benefits: ['Enhanced Security', 'Peace of Mind', 'Smart Alerts', 'Remote Control'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/smart-home-security'
  },
  {
    title: 'AI-Powered Personal Chef',
    description: 'AI-powered meal planning and recipe recommendations with dietary preferences.',
    icon: ChefHat,
    features: ['Meal Planning', 'Recipe Recommendations', 'Dietary Analysis', 'Shopping Lists'],
    pricing: '$19 - $149/month',
    category: 'Food & Cooking',
    popular: true,
    benefits: ['Healthy Eating', 'Time Savings', 'Variety', 'Cost Efficiency'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-chef'
  },
  {
    title: 'Smart Office Management',
    description: 'AI-powered office management with space optimization and resource allocation.',
    icon: Building,
    features: ['Space Optimization', 'Resource Allocation', 'Meeting Room Management', 'Analytics'],
    pricing: '$49 - $399/month',
    category: 'Office Management',
    popular: true,
    benefits: ['Efficiency', 'Cost Savings', 'Better Utilization', 'Employee Satisfaction'],
    marketPrice: '$75 - $600/month',
    link: 'https://ziontechgroup.com/smart-office-management'
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Advanced personal AI assistant with task management and productivity optimization.',
    icon: Bot,
    features: ['Task Management', 'Schedule Optimization', 'Email Management', 'Reminder System'],
    pricing: '$29 - $199/month',
    category: 'Productivity',
    popular: true,
    benefits: ['Productivity', 'Organization', 'Time Management', 'Efficiency'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-personal-assistant'
  },
  {
    title: 'Smart Transportation Management',
    description: 'AI-powered transportation optimization with route planning and fleet management.',
    icon: Car,
    features: ['Route Optimization', 'Fleet Management', 'Demand Prediction', 'Cost Analysis'],
    pricing: '$79 - $599/month',
    category: 'Transportation',
    popular: true,
    benefits: ['Cost Reduction', 'Efficiency', 'Customer Satisfaction', 'Sustainability'],
    marketPrice: '$120 - $900/month',
    link: 'https://ziontechgroup.com/smart-transportation-management'
  },
  {
    title: 'AI-Powered Personal Shopper',
    description: 'AI-powered shopping assistant with product recommendations and price optimization.',
    icon: ShoppingCart,
    features: ['Product Recommendations', 'Price Comparison', 'Deal Alerts', 'Purchase History'],
    pricing: '$19 - $149/month',
    category: 'Shopping',
    popular: true,
    benefits: ['Cost Savings', 'Better Choices', 'Time Savings', 'Personalized Experience'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-shopper'
  },
  {
    title: 'Smart Waste Reduction Platform',
    description: 'AI-powered waste reduction and recycling optimization platform.',
    icon: Recycle,
    features: ['Waste Analysis', 'Recycling Optimization', 'Reduction Tips', 'Impact Tracking'],
    pricing: '$29 - $199/month',
    category: 'Waste Reduction',
    popular: true,
    benefits: ['Environmental Impact', 'Cost Savings', 'Compliance', 'Sustainability'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-waste-reduction'
  },
  {
    title: 'AI-Powered Personal Nutritionist',
    description: 'AI-powered nutrition planning and dietary analysis with personalized recommendations.',
    icon: Apple,
    features: ['Nutrition Analysis', 'Meal Planning', 'Dietary Tracking', 'Health Insights'],
    pricing: '$19 - $149/month',
    category: 'Nutrition',
    popular: true,
    benefits: ['Better Health', 'Personalized Nutrition', 'Weight Management', 'Energy Optimization'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-nutritionist'
  },
  {
    title: 'Smart Event Security Management',
    description: 'AI-powered event security with crowd monitoring and threat detection.',
    icon: Shield,
    features: ['Crowd Monitoring', 'Threat Detection', 'Access Control', 'Emergency Response'],
    pricing: '$99 - $799/month',
    category: 'Event Security',
    popular: true,
    benefits: ['Enhanced Security', 'Risk Mitigation', 'Efficient Monitoring', 'Quick Response'],
    marketPrice: '$150 - $1,200/month',
    link: 'https://ziontechgroup.com/smart-event-security'
  },
  {
    title: 'AI-Powered Personal Life Coach',
    description: 'AI-powered life coaching with goal setting and personal development guidance.',
    icon: Target,
    features: ['Goal Setting', 'Progress Tracking', 'Motivation', 'Life Planning'],
    pricing: '$29 - $199/month',
    category: 'Life Coaching',
    popular: true,
    benefits: ['Personal Growth', 'Goal Achievement', 'Motivation', 'Life Balance'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-personal-life-coach'
  },
  {
    title: 'Smart Building Management',
    description: 'AI-powered building management with energy optimization and maintenance scheduling.',
    icon: Building,
    features: ['Energy Optimization', 'Maintenance Scheduling', 'Occupant Comfort', 'Cost Management'],
    pricing: '$79 - $599/month',
    category: 'Building Management',
    popular: true,
    benefits: ['Energy Savings', 'Maintenance Efficiency', 'Comfort', 'Cost Control'],
    marketPrice: '$120 - $900/month',
    link: 'https://ziontechgroup.com/smart-building-management'
  },
  {
    title: 'AI-Powered Personal Investment Advisor',
    description: 'AI-powered investment advice with portfolio optimization and risk management.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Investment Recommendations', 'Risk Assessment', 'Market Analysis'],
    pricing: '$49 - $399/month',
    category: 'Investment',
    popular: true,
    benefits: ['Better Returns', 'Risk Management', 'Personalized Advice', 'Market Insights'],
    marketPrice: '$75 - $600/month',
    link: 'https://ziontechgroup.com/ai-personal-investment-advisor'
  },
  {
    title: 'Smart Community Management',
    description: 'AI-powered community management with resident engagement and maintenance optimization.',
    icon: Users,
    features: ['Resident Engagement', 'Maintenance Scheduling', 'Communication Tools', 'Analytics'],
    pricing: '$59 - $449/month',
    category: 'Community Management',
    popular: true,
    benefits: ['Resident Satisfaction', 'Efficiency', 'Cost Savings', 'Better Communication'],
    marketPrice: '$90 - $700/month',
    link: 'https://ziontechgroup.com/smart-community-management'
  },
  {
    title: 'AI-Powered Personal Sleep Coach',
    description: 'AI-powered sleep optimization with personalized recommendations and tracking.',
    icon: Moon,
    features: ['Sleep Tracking', 'Optimization Tips', 'Sleep Analysis', 'Habit Building'],
    pricing: '$19 - $149/month',
    category: 'Sleep Health',
    popular: true,
    benefits: ['Better Sleep', 'Health Improvement', 'Energy Levels', 'Productivity'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-sleep-coach'
  },
  {
    title: 'Smart Manufacturing Optimization',
    description: 'AI-powered manufacturing process optimization with quality control and efficiency improvement.',
    icon: Factory,
    features: ['Process Optimization', 'Quality Control', 'Predictive Maintenance', 'Efficiency Analysis'],
    pricing: '$99 - $799/month',
    category: 'Manufacturing',
    popular: true,
    benefits: ['Efficiency', 'Quality Improvement', 'Cost Reduction', 'Predictive Maintenance'],
    marketPrice: '$150 - $1,200/month',
    link: 'https://ziontechgroup.com/smart-manufacturing-optimization'
  },
  {
    title: 'AI-Powered Personal Relationship Coach',
    description: 'AI-powered relationship advice and communication improvement platform.',
    icon: Heart,
    features: ['Communication Tips', 'Conflict Resolution', 'Relationship Analysis', 'Personal Growth'],
    pricing: '$29 - $199/month',
    category: 'Relationships',
    popular: true,
    benefits: ['Better Relationships', 'Communication Skills', 'Personal Growth', 'Conflict Resolution'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-personal-relationship-coach'
  },
  {
    title: 'Smart Retail Customer Experience',
    description: 'AI-powered retail customer experience optimization with personalization and analytics.',
    icon: ShoppingCart,
    features: ['Customer Personalization', 'Experience Analytics', 'Behavioral Insights', 'Optimization'],
    pricing: '$59 - $449/month',
    category: 'Retail',
    popular: true,
    benefits: ['Customer Satisfaction', 'Sales Growth', 'Personalization', 'Competitive Edge'],
    marketPrice: '$90 - $700/month',
    link: 'https://ziontechgroup.com/smart-retail-customer-experience'
  },
  {
    title: 'AI-Powered Personal Productivity Coach',
    description: 'AI-powered productivity optimization with habit tracking and efficiency improvement.',
    icon: Target,
    features: ['Habit Tracking', 'Productivity Analysis', 'Efficiency Tips', 'Goal Setting'],
    pricing: '$19 - $149/month',
    category: 'Productivity',
    popular: true,
    benefits: ['Increased Productivity', 'Better Habits', 'Time Management', 'Goal Achievement'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-productivity-coach'
  },
  {
    title: 'Smart Healthcare Analytics',
    description: 'AI-powered healthcare analytics with patient insights and operational optimization.',
    icon: Heart,
    features: ['Patient Analytics', 'Operational Insights', 'Outcome Prediction', 'Resource Optimization'],
    pricing: '$79 - $599/month',
    category: 'Healthcare',
    popular: true,
    benefits: ['Better Outcomes', 'Operational Efficiency', 'Cost Reduction', 'Patient Care'],
    marketPrice: '$120 - $900/month',
    link: 'https://ziontechgroup.com/smart-healthcare-analytics'
  },
  {
    title: 'AI-Powered Personal Memory Assistant',
    description: 'AI-powered memory enhancement with personalized learning and recall optimization.',
    icon: Brain,
    features: ['Memory Training', 'Learning Optimization', 'Recall Techniques', 'Cognitive Enhancement'],
    pricing: '$19 - $149/month',
    category: 'Cognitive Enhancement',
    popular: true,
    benefits: ['Better Memory', 'Learning Improvement', 'Cognitive Enhancement', 'Mental Agility'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-memory-assistant'
  },
  {
    title: 'Smart Environmental Monitoring',
    description: 'AI-powered environmental monitoring with pollution detection and sustainability tracking.',
    icon: Globe,
    features: ['Pollution Detection', 'Air Quality Monitoring', 'Sustainability Tracking', 'Environmental Alerts'],
    pricing: '$39 - $299/month',
    category: 'Environmental',
    popular: true,
    benefits: ['Environmental Awareness', 'Health Protection', 'Sustainability', 'Compliance'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/smart-environmental-monitoring'
  },
  {
    title: 'AI-Powered Personal Time Management',
    description: 'AI-powered time management with schedule optimization and productivity enhancement.',
    icon: Clock,
    features: ['Schedule Optimization', 'Time Blocking', 'Productivity Analysis', 'Distraction Management'],
    pricing: '$19 - $149/month',
    category: 'Time Management',
    popular: true,
    benefits: ['Better Time Management', 'Increased Productivity', 'Work-Life Balance', 'Efficiency'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-time-management'
  },
  {
    title: 'Smart Personal Finance Analytics',
    description: 'AI-powered personal finance analytics with spending insights and optimization recommendations.',
    icon: TrendingUp,
    features: ['Spending Analysis', 'Budget Optimization', 'Investment Insights', 'Financial Planning'],
    pricing: '$29 - $199/month',
    category: 'Personal Finance',
    popular: true,
    benefits: ['Financial Health', 'Better Planning', 'Cost Savings', 'Investment Growth'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-personal-finance-analytics'
  },
  {
    title: 'AI-Powered Personal Learning Path',
    description: 'AI-powered personalized learning paths with skill assessment and career guidance.',
    icon: BookOpen,
    features: ['Skill Assessment', 'Learning Paths', 'Career Guidance', 'Progress Tracking'],
    pricing: '$29 - $199/month',
    category: 'Education',
    popular: true,
    benefits: ['Skill Development', 'Career Growth', 'Personalized Learning', 'Goal Achievement'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-personal-learning-path'
  },
  {
    title: 'Smart Personal Health Monitoring',
    description: 'AI-powered personal health monitoring with vital signs tracking and health insights.',
    icon: Heart,
    features: ['Vital Signs Tracking', 'Health Insights', 'Symptom Analysis', 'Preventive Care'],
    pricing: '$29 - $199/month',
    category: 'Health Monitoring',
    popular: true,
    benefits: ['Health Awareness', 'Early Detection', 'Preventive Care', 'Wellness'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-personal-health-monitoring'
  },
  {
    title: 'AI-Powered Personal Stress Management',
    description: 'AI-powered stress management with relaxation techniques and mental wellness support.',
    icon: Heart,
    features: ['Stress Tracking', 'Relaxation Techniques', 'Mental Wellness', 'Coping Strategies'],
    pricing: '$19 - $149/month',
    category: 'Mental Wellness',
    popular: true,
    benefits: ['Stress Reduction', 'Mental Wellness', 'Better Coping', 'Life Balance'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-stress-management'
  },
  {
    title: 'Smart Personal Goal Achievement',
    description: 'AI-powered goal setting and achievement platform with progress tracking and motivation.',
    icon: Target,
    features: ['Goal Setting', 'Progress Tracking', 'Motivation', 'Achievement Planning'],
    pricing: '$19 - $149/month',
    category: 'Goal Achievement',
    popular: true,
    benefits: ['Goal Achievement', 'Motivation', 'Progress Tracking', 'Success'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-personal-goal-achievement'
  },
  {
    title: 'AI-Powered Personal Creativity Assistant',
    description: 'AI-powered creativity enhancement with idea generation and creative process optimization.',
    icon: Lightbulb,
    features: ['Idea Generation', 'Creative Process', 'Inspiration', 'Skill Development'],
    pricing: '$19 - $149/month',
    category: 'Creativity',
    popular: true,
    benefits: ['Enhanced Creativity', 'Idea Generation', 'Creative Skills', 'Innovation'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-creativity-assistant'
  },
  {
    title: 'Smart Personal Communication Coach',
    description: 'AI-powered communication skills improvement with practice and feedback.',
    icon: MessageSquare,
    features: ['Communication Skills', 'Practice Sessions', 'Feedback', 'Confidence Building'],
    pricing: '$29 - $199/month',
    category: 'Communication',
    popular: true,
    benefits: ['Better Communication', 'Confidence', 'Professional Skills', 'Personal Growth'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-personal-communication-coach'
  },
  {
    title: 'AI-Powered Personal Decision Support',
    description: 'AI-powered decision making support with analysis and recommendation systems.',
    icon: Target,
    features: ['Decision Analysis', 'Recommendations', 'Risk Assessment', 'Outcome Prediction'],
    pricing: '$19 - $149/month',
    category: 'Decision Support',
    popular: true,
    benefits: ['Better Decisions', 'Risk Assessment', 'Confidence', 'Outcome Prediction'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-decision-support'
  },
  {
    title: 'Smart Personal Habit Builder',
    description: 'AI-powered habit formation and tracking with personalized strategies and motivation.',
    icon: Target,
    features: ['Habit Tracking', 'Formation Strategies', 'Motivation', 'Progress Analysis'],
    pricing: '$19 - $149/month',
    category: 'Habit Building',
    popular: true,
    benefits: ['Habit Formation', 'Personal Growth', 'Consistency', 'Achievement'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-personal-habit-builder'
  },
  {
    title: 'AI-Powered Personal Innovation Lab',
    description: 'AI-powered innovation platform with idea development and creative problem solving.',
    icon: Lightbulb,
    features: ['Idea Development', 'Problem Solving', 'Innovation Techniques', 'Creative Thinking'],
    pricing: '$29 - $199/month',
    category: 'Innovation',
    popular: true,
    benefits: ['Innovation Skills', 'Creative Thinking', 'Problem Solving', 'Idea Development'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-personal-innovation-lab'
  },
  {
    title: 'Smart Personal Energy Management',
    description: 'AI-powered energy level optimization with personalized recommendations and tracking.',
    icon: Zap,
    features: ['Energy Tracking', 'Optimization Tips', 'Lifestyle Analysis', 'Performance Enhancement'],
    pricing: '$19 - $149/month',
    category: 'Energy Management',
    popular: true,
    benefits: ['Energy Optimization', 'Performance', 'Wellness', 'Productivity'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-personal-energy-management'
  },
  {
    title: 'AI-Powered Personal Mindfulness Coach',
    description: 'AI-powered mindfulness and meditation guidance with personalized practices.',
    icon: Heart,
    features: ['Mindfulness Practices', 'Meditation Guidance', 'Stress Reduction', 'Mental Clarity'],
    pricing: '$19 - $149/month',
    category: 'Mindfulness',
    popular: true,
    benefits: ['Mental Clarity', 'Stress Reduction', 'Focus', 'Wellness'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-mindfulness-coach'
  },
  {
    title: 'Smart Personal Innovation Tracker',
    description: 'AI-powered innovation tracking and development with progress monitoring and insights.',
    icon: Lightbulb,
    features: ['Innovation Tracking', 'Progress Monitoring', 'Development Insights', 'Success Metrics'],
    pricing: '$19 - $149/month',
    category: 'Innovation Tracking',
    popular: true,
    benefits: ['Innovation Success', 'Progress Tracking', 'Development Insights', 'Achievement'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-personal-innovation-tracker'
  },
  {
    title: 'AI-Powered Personal Success Metrics',
    description: 'AI-powered success tracking and measurement with personalized KPIs and insights.',
    icon: TrendingUp,
    features: ['Success Tracking', 'KPI Monitoring', 'Progress Analysis', 'Achievement Insights'],
    pricing: '$19 - $149/month',
    category: 'Success Tracking',
    popular: true,
    benefits: ['Success Measurement', 'Progress Tracking', 'Achievement Insights', 'Goal Monitoring'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-personal-success-metrics'
  },
  {
    title: 'Smart Personal Innovation Portfolio',
    description: 'AI-powered innovation portfolio management with project tracking and development.',
    icon: Lightbulb,
    features: ['Portfolio Management', 'Project Tracking', 'Development Planning', 'Success Analysis'],
    pricing: '$29 - $199/month',
    category: 'Innovation Portfolio',
    popular: true,
    benefits: ['Portfolio Management', 'Project Success', 'Development Planning', 'Innovation Growth'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-personal-innovation-portfolio'
  },
  {
    title: 'AI-Powered Personal Innovation Success',
    description: 'AI-powered innovation success optimization with personalized strategies and tracking.',
    icon: Lightbulb,
    features: ['Success Strategies', 'Innovation Tracking', 'Personalized Guidance', 'Achievement Planning'],
    pricing: '$29 - $199/month',
    category: 'Innovation Success',
    popular: true,
    benefits: ['Innovation Success', 'Personalized Guidance', 'Achievement Planning', 'Growth'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-personal-innovation-success'
  }
];

const categories = [
  'All Products',
  'Marketing',
  'Sales',
  'Analytics',
  'Automation',
  'Customer Service',
  'Inventory',
  'Email Marketing',
  'Project Management',
  'Finance',
  'HR',
  'Social Media',
  'Document Management',
  'Web Optimization',
  'E-commerce',
  'Development',
  'Energy',
  'Translation',
  'Compliance',
  'Video Analytics',
  'Legal Tech',
  'SEO',
  'Productivity',
  'Security',
  'Customer Experience',
  'Web Analytics',
  'Scheduling',
  'Content Management',
  'Data Management',
  'Form Management'
];

const microSaasServices = [
  {
    title: "Custom Web Applications",
    description: "Tailored web applications designed to solve specific business problems with modern technology stacks",
    icon: Globe,
    features: [
      "Responsive Design",
      "Cross-browser Compatibility",
      "Progressive Web App (PWA)",
      "Real-time Updates",
      "User Authentication",
      "API Integration"
    ],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Improved efficiency",
      "Better user experience",
      "Scalable architecture",
      "Cost-effective solution"
    ]
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
    icon: Smartphone,
    features: [
      "iOS & Android Development",
      "React Native Solutions",
      "Flutter Applications",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality"
    ],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Increased accessibility",
      "Better engagement",
      "Mobile-first design",
      "App store presence"
    ]
  },
  {
    title: "API Development & Integration",
    description: "Robust APIs and seamless integrations to connect your systems and data",
    icon: Code,
    features: [
      "RESTful API Design",
      "GraphQL Implementation",
      "Third-party Integrations",
      "API Documentation",
      "Rate Limiting & Security",
      "Webhook Support"
    ],
    color: "from-purple-500 to-pink-500",
    benefits: [
      "System connectivity",
      "Data synchronization",
      "Automated workflows",
      "Reduced manual work"
    ]
  },
  {
    title: "Data Management Solutions",
    description: "Comprehensive data handling, processing, and analytics platforms",
    icon: Database,
    features: [
      "Data Collection & Storage",
      "ETL Processes",
      "Data Visualization",
      "Real-time Analytics",
      "Data Security & Privacy",
      "Automated Reporting"
    ],
    color: "from-orange-500 to-red-500",
    benefits: [
      "Better insights",
      "Data-driven decisions",
      "Automated reporting",
      "Compliance assurance"
    ]
  },
  {
    title: "Workflow Automation",
    description: "Intelligent automation solutions that streamline business processes",
    icon: Zap,
    features: [
      "Process Automation",
      "Task Scheduling",
      "Email Automation",
      "Document Processing",
      "Approval Workflows",
      "Integration Automation"
    ],
    color: "from-yellow-500 to-orange-500",
    benefits: [
      "Reduced manual work",
      "Faster processing",
      "Fewer errors",
      "Improved efficiency"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment processing and inventory management",
    icon: Layers,
    features: [
      "Online Store Setup",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Management",
      "Analytics & Reporting"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Online presence",
      "Revenue generation",
      "Customer management",
      "Business growth"
    ]
  }
];

const platforms = [
  {
    name: "Web Development",
    icon: Globe,
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "PHP"],
    description: "Modern web applications with responsive design and optimal performance"
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    description: "Cross-platform and native mobile applications for iOS and Android"
  },
  {
    name: "Backend Services",
    icon: Server,
    technologies: ["Node.js", "Python", "Java", "C#", "Go", "Ruby", "PHP"],
    description: "Scalable backend services and APIs for robust application architecture"
  },
  {
    name: "Cloud Platforms",
    icon: Cloud,
    technologies: ["AWS", "Azure", "Google Cloud", "Heroku", "Vercel", "Netlify"],
    description: "Cloud-native applications with auto-scaling and global deployment"
  },
  {
    name: "Databases",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
    description: "Reliable data storage and management solutions for all application types"
  },
  {
    name: "DevOps & Deployment",
    icon: Settings,
    technologies: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Terraform"],
    description: "Automated deployment and infrastructure management for seamless operations"
  }
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a detailed development plan."
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create wireframes, mockups, and interactive prototypes to visualize the final product."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your application using agile methodology with continuous testing and feedback."
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "Deploy your application to production with monitoring and performance optimization."
  },
  {
    step: "05",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and support to ensure optimal performance and security."
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Affordable Pricing",
    description: "Cost-effective solutions starting from $19/month"
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Get started in minutes with our easy onboarding"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Trusted by 1000+ businesses worldwide"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces and seamless user experiences that drive adoption and engagement"
  },
  {
    icon: BarChart3,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased users and data seamlessly"
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$19-49",
    description: "Perfect for small businesses",
    features: ["Basic Features", "Email Support", "5 Users", "1GB Storage"],
    popular: false
  },
  {
    name: "Professional",
    price: "$49-199",
    description: "Ideal for growing businesses",
    features: ["Advanced Features", "Priority Support", "25 Users", "10GB Storage"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199-399",
    description: "For large organizations",
    features: ["All Features", "24/7 Support", "Unlimited Users", "Unlimited Storage"],
    popular: false
  }
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Innovative micro SaaS products for modern businesses. AI-powered tools for marketing, sales, analytics, and automation. Starting from $19/month."
      keywords="micro saas, saas products, business software, AI tools, automation, marketing tools, analytics"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Innovative{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Micro SaaS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful, affordable software solutions designed to solve specific business challenges. AI-powered tools that deliver real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="#products"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  View Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized software solutions that address specific business needs with powerful AI and automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {microSaasProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {product.popular && (
                      <div className="absolute -top-3 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-12 w-12 text-green-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                        <p className="text-sm text-green-600 font-semibold">{product.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-green-600">{product.pricing}</span>
                        <span className="text-sm text-gray-500">Market: {product.marketPrice}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.benefits.map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={product.link}
                        className="flex-1 inline-flex items-center justify-center text-green-600 hover:text-green-800 font-semibold transition-colors duration-200 border border-green-600 rounded-lg py-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-700 font-semibold transition-colors duration-200 rounded-lg py-2"
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features and support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg ${
                    tier.popular ? 'ring-2 ring-green-500 relative' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">{tier.price}</div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Custom software solutions designed to solve specific business problems. 
              From web applications to mobile apps, we build scalable solutions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized software solutions that address specific business challenges 
              with modern technology and user-centric design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We leverage cutting-edge technologies and modern frameworks to build 
              robust, scalable, and maintainable software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {platform.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {platform.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              Our Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our micro SaaS solutions deliver focused value and measurable results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Pricing Plans
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Transparent pricing for micro SaaS development. Choose the plan that fits your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tier.description}
                  </p>
                  <div className="text-4xl font-bold text-gray-900 mb-6">
                    {tier.price}
                    {tier.price !== "Custom" && <span className="text-lg text-gray-500">/project</span>}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through innovation, affordability, and customer success
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
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

              {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started with Our Micro SaaS Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact our team to discuss your business needs and find the perfect micro SaaS solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 302 464 0950</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with any of our micro SaaS solutions and see the difference AI-powered tools can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
              <Link
                href="/ai-services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
              >
                View AI Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Micro SaaS Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
}