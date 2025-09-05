import React, { useState } from 'react';
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
  Brain, 
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
  MapPin,
  Droplets,
  Wifi,
  Laptop,
  CreditCard,
  PieChart,
  Truck,
  GraduationCap,
  ClipboardList,
  TreePine,
  Gamepad2
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const microSaaSProducts = [
  // AI & Machine Learning Solutions
  {
    id: 1,
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform with advanced AI capabilities.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard', 'Multi-language Support', 'Brand Voice Training'],
    pricing: '$29 - $199/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement', 'Cost Reduction'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite',
    contact: '+1 302 464 0950'
  },
  {
    id: 2,
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform with predictive analytics.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking', 'Predictive Analytics', 'A/B Testing'],
    pricing: '$49 - $299/month',
    category: 'AI Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights', 'Reduced Manual Work'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management',
    contact: '+1 302 464 0950'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics, custom reporting, and automated insights.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization', 'Automated Alerts', 'ROI Tracking'],
    pricing: '$39 - $249/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking', 'Automated Reporting'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    contact: '+1 302 464 0950'
  },
  {
    id: 4,
    title: 'Smart Document Processing',
    description: 'Automated document extraction, classification, and data entry using advanced AI and OCR technology.',
    icon: FileText,
    features: ['OCR Technology', 'Smart Classification', 'Data Extraction', 'Workflow Automation', 'Multi-format Support', 'API Integration'],
    pricing: '$19 - $149/month',
    category: 'AI Productivity',
    popular: false,
    benefits: ['99% Accuracy', 'Time Savings', 'Cost Reduction', 'Error Elimination', 'Scalable Processing'],
    marketPrice: '$35 - $250/month',
    link: 'https://ziontechgroup.com/smart-document-processing',
    contact: '+1 302 464 0950'
  },
  {
    id: 5,
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot platform with natural language processing and seamless human handoff capabilities.',
    icon: Bot,
    features: ['Natural Language Processing', 'Multi-channel Support', 'Human Handoff', 'Knowledge Base Integration', 'Sentiment Analysis', 'Custom Training'],
    pricing: '$39 - $199/month',
    category: 'AI Customer Service',
    popular: true,
    benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Customer Satisfaction', 'Scalable Support'],
    marketPrice: '$65 - $350/month',
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    contact: '+1 302 464 0950'
  },
  {
    id: 6,
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory tracking with demand forecasting, automated reordering, and optimization algorithms.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Tracking', 'Cost Optimization', 'Supplier Management', 'Analytics Dashboard'],
    pricing: '$49 - $299/month',
    category: 'AI Operations',
    popular: false,
    benefits: ['Reduce Stockouts', 'Lower Inventory Costs', 'Optimize Reordering', 'Improve Cash Flow', 'Data-Driven Decisions'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/smart-inventory-management',
    contact: '+1 302 464 0950'
  },
  {
    id: 7,
    title: 'AI Email Marketing Platform',
    description: 'Intelligent email marketing with AI-driven personalization, send time optimization, and advanced segmentation.',
    icon: Mail,
    features: ['AI Personalization', 'Send Time Optimization', 'Advanced Segmentation', 'A/B Testing', 'Automation Workflows', 'Analytics & Reporting'],
    pricing: '$29 - $199/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['Higher Open Rates', 'Better Engagement', 'Automated Campaigns', 'Personalized Content', 'ROI Optimization'],
    marketPrice: '$50 - $350/month',
    link: 'https://ziontechgroup.com/ai-email-marketing',
    contact: '+1 302 464 0950'
  },
  {
    id: 8,
    title: 'Smart Project Management',
    description: 'AI-enhanced project management with intelligent task assignment, deadline prediction, and resource optimization.',
    icon: Calendar,
    features: ['AI Task Assignment', 'Deadline Prediction', 'Resource Optimization', 'Risk Assessment', 'Progress Tracking', 'Team Collaboration'],
    pricing: '$39 - $249/month',
    category: 'AI Project Management',
    popular: false,
    benefits: ['Better Planning', 'Reduced Delays', 'Optimal Resource Use', 'Risk Mitigation', 'Improved Delivery'],
    marketPrice: '$65 - $400/month',
    link: 'https://ziontechgroup.com/smart-project-management',
    contact: '+1 302 464 0950'
  },
  {
    id: 9,
    title: 'AI Financial Analytics',
    description: 'Advanced financial analysis platform with predictive modeling, risk assessment, and automated reporting.',
    icon: DollarSign,
    features: ['Predictive Modeling', 'Risk Assessment', 'Automated Reporting', 'Cash Flow Analysis', 'Investment Insights', 'Compliance Monitoring'],
    pricing: '$59 - $399/month',
    category: 'AI Finance',
    popular: true,
    benefits: ['Better Financial Planning', 'Risk Mitigation', 'Automated Reporting', 'Investment Optimization', 'Compliance Assurance'],
    marketPrice: '$100 - $600/month',
    link: 'https://ziontechgroup.com/ai-financial-analytics',
    contact: '+1 302 464 0950'
  },
  {
    id: 10,
    title: 'Smart HR Management',
    description: 'AI-powered HR platform with resume screening, candidate matching, and employee performance analytics.',
    icon: Users,
    features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Talent Acquisition', 'Workforce Planning'],
    pricing: '$49 - $299/month',
    category: 'AI HR',
    popular: false,
    benefits: ['Faster Hiring', 'Better Matches', 'Reduced Bias', 'Performance Insights', 'Cost Savings'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/smart-hr-management',
    contact: '+1 302 464 0950'
  },
  {
    id: 11,
    title: 'AI Social Media Manager',
    description: 'Automated social media management with content creation, scheduling, and performance optimization.',
    icon: MessageSquare,
    features: ['Content Creation', 'Auto Scheduling', 'Performance Analytics', 'Hashtag Optimization', 'Engagement Tracking', 'Multi-platform Support'],
    pricing: '$29 - $199/month',
    category: 'AI Social Media',
    popular: true,
    benefits: ['Consistent Posting', 'Better Engagement', 'Time Savings', 'Content Optimization', 'Growth Acceleration'],
    marketPrice: '$50 - $350/month',
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    contact: '+1 302 464 0950'
  },
  {
    id: 12,
    title: 'Smart E-commerce Analytics',
    description: 'AI-driven e-commerce analytics with customer behavior insights, conversion optimization, and sales forecasting.',
    icon: ShoppingCart,
    features: ['Customer Behavior Analysis', 'Conversion Optimization', 'Sales Forecasting', 'Product Recommendations', 'Price Optimization', 'Market Trends'],
    pricing: '$39 - $249/month',
    category: 'AI E-commerce',
    popular: false,
    benefits: ['Higher Conversions', 'Better Customer Insights', 'Optimized Pricing', 'Increased Sales', 'Data-Driven Decisions'],
    marketPrice: '$65 - $400/month',
    link: 'https://ziontechgroup.com/smart-ecommerce-analytics',
    contact: '+1 302 464 0950'
  },
  {
    id: 13,
    title: 'AI Video Content Creator',
    description: 'Automated video creation platform with AI-generated scripts, voice synthesis, and video editing capabilities.',
    icon: Video,
    features: ['AI Script Generation', 'Voice Synthesis', 'Auto Video Editing', 'Template Library', 'Multi-language Support', 'Brand Customization'],
    pricing: '$49 - $299/month',
    category: 'AI Video',
    popular: true,
    benefits: ['Faster Video Creation', 'Consistent Quality', 'Cost Reduction', 'Scalable Production', 'Professional Results'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/ai-video-content-creator',
    contact: '+1 302 464 0950'
  },
  {
    id: 14,
    title: 'Smart Data Visualization',
    description: 'AI-powered data visualization platform that automatically creates charts, graphs, and interactive dashboards.',
    icon: PieChart,
    features: ['Auto Chart Generation', 'Interactive Dashboards', 'Data Storytelling', 'Custom Templates', 'Real-time Updates', 'Export Options'],
    pricing: '$29 - $199/month',
    category: 'AI Data Visualization',
    popular: false,
    benefits: ['Faster Insights', 'Better Presentations', 'Automated Reporting', 'Professional Charts', 'Data Storytelling'],
    marketPrice: '$50 - $350/month',
    link: 'https://ziontechgroup.com/smart-data-visualization',
    contact: '+1 302 464 0950'
  },
  {
    id: 15,
    title: 'AI Code Review Assistant',
    description: 'Automated code review platform with bug detection, security analysis, and performance optimization suggestions.',
    icon: Code,
    features: ['Bug Detection', 'Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Best Practices', 'Automated Testing'],
    pricing: '$39 - $249/month',
    category: 'AI Development',
    popular: true,
    benefits: ['Faster Reviews', 'Better Code Quality', 'Security Assurance', 'Performance Optimization', 'Learning Opportunities'],
    marketPrice: '$65 - $400/month',
    link: 'https://ziontechgroup.com/ai-code-review-assistant',
    contact: '+1 302 464 0950'
  },
  {
    id: 16,
    title: 'Smart Meeting Assistant',
    description: 'AI-powered meeting platform with transcription, action item extraction, and intelligent scheduling.',
    icon: Mic,
    features: ['Live Transcription', 'Action Item Extraction', 'Meeting Summaries', 'Smart Scheduling', 'Follow-up Reminders', 'Integration Support'],
    pricing: '$19 - $149/month',
    category: 'AI Productivity',
    popular: false,
    benefits: ['Better Meeting Notes', 'Action Tracking', 'Time Savings', 'Improved Follow-up', 'Meeting Optimization'],
    marketPrice: '$35 - $250/month',
    link: 'https://ziontechgroup.com/smart-meeting-assistant',
    contact: '+1 302 464 0950'
  },
  {
    id: 17,
    title: 'AI Website Optimizer',
    description: 'Automated website optimization platform with A/B testing, performance monitoring, and conversion rate optimization.',
    icon: Monitor,
    features: ['A/B Testing', 'Performance Monitoring', 'Conversion Optimization', 'SEO Analysis', 'User Experience Tracking', 'Automated Recommendations'],
    pricing: '$49 - $299/month',
    category: 'AI Web Optimization',
    popular: true,
    benefits: ['Higher Conversions', 'Better Performance', 'SEO Improvement', 'User Experience', 'Automated Optimization'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/ai-website-optimizer',
    contact: '+1 302 464 0950'
  },
  {
    id: 18,
    title: 'Smart Expense Tracker',
    description: 'AI-powered expense management with receipt scanning, categorization, and automated reporting for businesses.',
    icon: CreditCard,
    features: ['Receipt Scanning', 'Auto Categorization', 'Expense Approval', 'Budget Tracking', 'Tax Preparation', 'Reporting Dashboard'],
    pricing: '$19 - $149/month',
    category: 'AI Finance',
    popular: false,
    benefits: ['Time Savings', 'Better Accuracy', 'Tax Preparation', 'Budget Control', 'Compliance Assurance'],
    marketPrice: '$35 - $250/month',
    link: 'https://ziontechgroup.com/smart-expense-tracker',
    contact: '+1 302 464 0950'
  },
  {
    id: 19,
    title: 'AI Customer Feedback Analyzer',
    description: 'Intelligent feedback analysis platform that processes customer reviews, surveys, and support tickets for actionable insights.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Topic Extraction', 'Trend Identification', 'Actionable Insights', 'Multi-source Integration', 'Real-time Monitoring'],
    pricing: '$29 - $199/month',
    category: 'AI Customer Analytics',
    popular: true,
    benefits: ['Better Customer Understanding', 'Actionable Insights', 'Trend Identification', 'Improved Products', 'Customer Satisfaction'],
    marketPrice: '$50 - $350/month',
    link: 'https://ziontechgroup.com/ai-customer-feedback-analyzer',
    contact: '+1 302 464 0950'
  },
  {
    id: 20,
    title: 'Smart Supply Chain Optimizer',
    description: 'AI-powered supply chain management with demand forecasting, route optimization, and supplier risk assessment.',
    icon: Truck,
    features: ['Demand Forecasting', 'Route Optimization', 'Supplier Risk Assessment', 'Inventory Management', 'Cost Optimization', 'Performance Analytics'],
    pricing: '$59 - $399/month',
    category: 'AI Supply Chain',
    popular: false,
    benefits: ['Cost Reduction', 'Better Planning', 'Risk Mitigation', 'Efficiency Gains', 'Optimized Operations'],
    marketPrice: '$100 - $600/month',
    link: 'https://ziontechgroup.com/smart-supply-chain-optimizer',
    contact: '+1 302 464 0950'
  },

  // Additional AI & Machine Learning Solutions
  {
    title: 'AI Voice Assistant Platform',
    description: 'Custom voice assistant development platform with natural language processing and multi-language support.',
    icon: Mic,
    features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Custom Commands', 'Integration APIs', 'Analytics'],
    pricing: '$39 - $199/month',
    category: 'AI Voice',
    popular: true,
    benefits: ['Hands-free Operations', 'Better Accessibility', 'Custom Voice Commands', 'Multi-language Support', 'Easy Integration'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-voice-assistant-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Image Recognition API',
    description: 'Advanced image recognition and analysis API with object detection, facial recognition, and content moderation.',
    icon: Eye,
    features: ['Object Detection', 'Facial Recognition', 'Content Moderation', 'OCR Processing', 'Image Classification', 'API Integration'],
    pricing: '$29 - $149/month',
    category: 'AI Vision',
    popular: true,
    benefits: ['Automated Image Processing', 'Content Safety', 'OCR Capabilities', 'Easy API Integration', 'High Accuracy'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/ai-image-recognition-api',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Document Intelligence',
    description: 'Intelligent document processing with OCR, data extraction, and automated classification for various document types.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Processing', 'Batch Processing', 'API Integration'],
    pricing: '$49 - $249/month',
    category: 'AI Documents',
    popular: true,
    benefits: ['Automated Processing', 'Data Extraction', 'Document Classification', 'Batch Operations', 'API Integration'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/ai-document-intelligence',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'AI-powered predictive maintenance platform for equipment monitoring, failure prediction, and maintenance scheduling.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'IoT Integration', 'Alert System', 'Analytics'],
    pricing: '$79 - $399/month',
    category: 'AI Maintenance',
    popular: true,
    benefits: ['Reduced Downtime', 'Cost Savings', 'Predictive Alerts', 'IoT Integration', 'Maintenance Optimization'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-predictive-maintenance',
    contact: '+1 302 464 0950'
  },

  // Cloud & Infrastructure Solutions
  {
    title: 'Multi-Cloud Management',
    description: 'Unified multi-cloud management platform with cost optimization, security monitoring, and resource orchestration.',
    icon: Cloud,
    features: ['Multi-cloud Support', 'Cost Optimization', 'Security Monitoring', 'Resource Orchestration', 'Compliance Management', 'Analytics'],
    pricing: '$99 - $499/month',
    category: 'Cloud Management',
    popular: true,
    benefits: ['Unified Management', 'Cost Optimization', 'Security Enhancement', 'Compliance', 'Resource Efficiency'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/multi-cloud-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Container Orchestration Platform',
    description: 'Kubernetes-based container orchestration with automated scaling, monitoring, and deployment management.',
    icon: Server,
    features: ['Kubernetes Management', 'Auto Scaling', 'Container Monitoring', 'Deployment Automation', 'Service Mesh', 'Security'],
    pricing: '$59 - $299/month',
    category: 'DevOps',
    popular: true,
    benefits: ['Automated Scaling', 'Container Management', 'Deployment Automation', 'Service Mesh', 'Security'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/container-orchestration-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Database Performance Optimizer',
    description: 'AI-powered database optimization with query analysis, index recommendations, and performance monitoring.',
    icon: Database,
    features: ['Query Analysis', 'Index Optimization', 'Performance Monitoring', 'Automated Tuning', 'Capacity Planning', 'Alerting'],
    pricing: '$49 - $249/month',
    category: 'Database',
    popular: true,
    benefits: ['Performance Optimization', 'Automated Tuning', 'Query Optimization', 'Capacity Planning', 'Cost Reduction'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/database-performance-optimizer',
    contact: '+1 302 464 0950'
  },

  // E-commerce & Business Solutions
  {
    title: 'AI Product Recommendation Engine',
    description: 'Advanced product recommendation system with machine learning algorithms and real-time personalization.',
    icon: Target,
    features: ['ML Algorithms', 'Real-time Personalization', 'A/B Testing', 'Analytics Dashboard', 'API Integration', 'Customization'],
    pricing: '$39 - $199/month',
    category: 'E-commerce AI',
    popular: true,
    benefits: ['Higher Conversion', 'Personalized Experience', 'A/B Testing', 'Analytics', 'Easy Integration'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-product-recommendation-engine',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Dynamic Pricing Platform',
    description: 'AI-powered dynamic pricing platform with competitor analysis, demand forecasting, and automated price optimization.',
    icon: DollarSign,
    features: ['Competitor Analysis', 'Demand Forecasting', 'Price Optimization', 'A/B Testing', 'Analytics', 'API Integration'],
    pricing: '$79 - $399/month',
    category: 'E-commerce',
    popular: true,
    benefits: ['Revenue Optimization', 'Competitive Pricing', 'Demand-based Pricing', 'A/B Testing', 'Analytics'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/dynamic-pricing-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Customer Journey Analytics',
    description: 'Comprehensive customer journey tracking with behavioral analysis, conversion optimization, and personalized experiences.',
    icon: TrendingUp,
    features: ['Journey Tracking', 'Behavioral Analysis', 'Conversion Optimization', 'Personalization', 'A/B Testing', 'Analytics'],
    pricing: '$49 - $249/month',
    category: 'E-commerce Analytics',
    popular: true,
    benefits: ['Journey Insights', 'Conversion Optimization', 'Personalization', 'Behavioral Analysis', 'A/B Testing'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/customer-journey-analytics',
    contact: '+1 302 464 0950'
  },

  // Security & Compliance Solutions
  {
    title: 'AI Security Monitoring',
    description: 'Advanced AI-powered security monitoring with threat detection, anomaly analysis, and automated response.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response', 'Real-time Monitoring', 'Incident Management', 'Compliance'],
    pricing: '$99 - $499/month',
    category: 'Security AI',
    popular: true,
    benefits: ['Threat Prevention', 'Automated Response', 'Real-time Monitoring', 'Compliance', 'Incident Management'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/ai-security-monitoring',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Data Privacy Management',
    description: 'Comprehensive data privacy platform with GDPR compliance, consent management, and data protection automation.',
    icon: Lock,
    features: ['GDPR Compliance', 'Consent Management', 'Data Protection', 'Privacy Impact Assessment', 'Audit Trails', 'Automation'],
    pricing: '$79 - $399/month',
    category: 'Privacy',
    popular: true,
    benefits: ['GDPR Compliance', 'Consent Management', 'Data Protection', 'Audit Trails', 'Automation'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/data-privacy-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Vulnerability Assessment Platform',
    description: 'Automated vulnerability scanning and assessment with AI-powered risk analysis and remediation recommendations.',
    icon: Shield,
    features: ['Vulnerability Scanning', 'Risk Analysis', 'Remediation Recommendations', 'Compliance Checking', 'Reporting', 'Automation'],
    pricing: '$59 - $299/month',
    category: 'Security',
    popular: true,
    benefits: ['Vulnerability Detection', 'Risk Assessment', 'Remediation Guidance', 'Compliance', 'Automation'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/vulnerability-assessment-platform',
    contact: '+1 302 464 0950'
  },

  // Industry-Specific Solutions
  {
    title: 'Real Estate Analytics Platform',
    description: 'AI-powered real estate analytics with market analysis, property valuation, and investment insights.',
    icon: Building,
    features: ['Market Analysis', 'Property Valuation', 'Investment Insights', 'Trend Analysis', 'Predictive Modeling', 'Reporting'],
    pricing: '$99 - $499/month',
    category: 'Real Estate',
    popular: true,
    benefits: ['Market Insights', 'Property Valuation', 'Investment Analysis', 'Trend Analysis', 'Predictive Modeling'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/real-estate-analytics-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Manufacturing Quality Control',
    description: 'AI-powered quality control system with defect detection, process optimization, and predictive quality analytics.',
    icon: CheckCircle,
    features: ['Defect Detection', 'Process Optimization', 'Quality Analytics', 'Predictive Modeling', 'Real-time Monitoring', 'Reporting'],
    pricing: '$149 - $599/month',
    category: 'Manufacturing',
    popular: true,
    benefits: ['Quality Improvement', 'Defect Reduction', 'Process Optimization', 'Predictive Analytics', 'Cost Savings'],
    marketPrice: '$250 - $900/month',
    link: 'https://ziontechgroup.com/manufacturing-quality-control',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Retail Analytics Suite',
    description: 'Comprehensive retail analytics with customer behavior analysis, inventory optimization, and sales forecasting.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Optimization', 'Sales Forecasting', 'Behavioral Analysis', 'Trend Analysis', 'Reporting'],
    pricing: '$79 - $399/month',
    category: 'Retail',
    popular: true,
    benefits: ['Customer Insights', 'Inventory Optimization', 'Sales Forecasting', 'Behavioral Analysis', 'Trend Analysis'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/retail-analytics-suite',
    contact: '+1 302 464 0950'
  },

  // Communication & Collaboration Solutions
  {
    title: 'AI Meeting Assistant',
    description: 'Intelligent meeting assistant with transcription, action item extraction, and meeting insights.',
    icon: Video,
    features: ['Meeting Transcription', 'Action Item Extraction', 'Meeting Insights', 'Note Taking', 'Follow-up Automation', 'Analytics'],
    pricing: '$19 - $99/month',
    category: 'AI Meetings',
    popular: true,
    benefits: ['Meeting Efficiency', 'Action Item Tracking', 'Meeting Insights', 'Automation', 'Productivity'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/ai-meeting-assistant',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Calendar Management',
    description: 'AI-powered calendar optimization with scheduling intelligence, conflict resolution, and productivity insights.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Conflict Resolution', 'Productivity Insights', 'Meeting Optimization', 'Time Blocking', 'Analytics'],
    pricing: '$29 - $149/month',
    category: 'Productivity',
    popular: true,
    benefits: ['Smart Scheduling', 'Conflict Resolution', 'Productivity Insights', 'Time Optimization', 'Analytics'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/smart-calendar-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Email Management',
    description: 'Intelligent email management with smart categorization, priority detection, and automated responses.',
    icon: Mail,
    features: ['Smart Categorization', 'Priority Detection', 'Automated Responses', 'Email Analytics', 'Spam Filtering', 'Scheduling'],
    pricing: '$19 - $99/month',
    category: 'AI Email',
    popular: true,
    benefits: ['Email Organization', 'Priority Management', 'Automation', 'Analytics', 'Productivity'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/ai-email-management',
    contact: '+1 302 464 0950'
  },

  // Data & Analytics Solutions
  {
    title: 'Real-time Data Streaming',
    description: 'High-performance real-time data streaming platform with event processing and analytics capabilities.',
    icon: Zap,
    features: ['Real-time Streaming', 'Event Processing', 'Data Analytics', 'Scalability', 'Monitoring', 'Integration'],
    pricing: '$79 - $399/month',
    category: 'Data Streaming',
    popular: true,
    benefits: ['Real-time Processing', 'Event Analytics', 'Scalability', 'Monitoring', 'Integration'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/real-time-data-streaming',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Data Quality Platform',
    description: 'Automated data quality management with AI-powered validation, cleansing, and monitoring capabilities.',
    icon: Database,
    features: ['Data Validation', 'Data Cleansing', 'Quality Monitoring', 'Anomaly Detection', 'Automation', 'Reporting'],
    pricing: '$59 - $299/month',
    category: 'Data Quality',
    popular: true,
    benefits: ['Data Quality', 'Automated Validation', 'Anomaly Detection', 'Automation', 'Cost Savings'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/ai-data-quality-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Predictive Analytics Engine',
    description: 'Advanced predictive analytics platform with machine learning models and automated forecasting capabilities.',
    icon: BarChart3,
    features: ['ML Models', 'Automated Forecasting', 'Predictive Modeling', 'Data Visualization', 'API Integration', 'Customization'],
    pricing: '$99 - $499/month',
    category: 'Predictive Analytics',
    popular: true,
    benefits: ['Predictive Insights', 'Automated Forecasting', 'ML Models', 'Data Visualization', 'Customization'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/predictive-analytics-engine',
    contact: '+1 302 464 0950'
  },

  // Emerging Technology Solutions
  {
    title: 'Edge Computing Platform',
    description: 'Distributed edge computing platform with low-latency processing and IoT device management capabilities.',
    icon: Cpu,
    features: ['Edge Processing', 'Low Latency', 'IoT Management', 'Distributed Computing', 'Real-time Analytics', 'Security'],
    pricing: '$149 - $599/month',
    category: 'Edge Computing',
    popular: true,
    benefits: ['Low Latency', 'Edge Processing', 'IoT Management', 'Real-time Analytics', 'Distributed Computing'],
    marketPrice: '$250 - $900/month',
    link: 'https://ziontechgroup.com/edge-computing-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AR/VR Development Platform',
    description: 'Comprehensive AR/VR development platform with 3D modeling, immersive experiences, and cross-platform deployment.',
    icon: Monitor,
    features: ['3D Modeling', 'Immersive Experiences', 'Cross-platform Deployment', 'AR/VR SDK', 'Analytics', 'Cloud Rendering'],
    pricing: '$199 - $799/month',
    category: 'AR/VR',
    popular: true,
    benefits: ['Immersive Experiences', '3D Modeling', 'Cross-platform', 'Cloud Rendering', 'Analytics'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/ar-vr-development-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: '5G Network Optimization',
    description: 'AI-powered 5G network optimization with performance monitoring, capacity planning, and automated optimization.',
    icon: Network,
    features: ['5G Optimization', 'Performance Monitoring', 'Capacity Planning', 'Automated Optimization', 'Analytics', 'Predictive Maintenance'],
    pricing: '$299 - $1,499/month',
    category: '5G',
    popular: true,
    benefits: ['5G Optimization', 'Performance Monitoring', 'Capacity Planning', 'Automated Optimization', 'Predictive Maintenance'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://ziontechgroup.com/5g-network-optimization',
    contact: '+1 302 464 0950'
  }
];

const categories = [
  { name: "All", count: microSaaSProducts.length },
  { name: "AI Marketing", count: microSaaSProducts.filter(p => p.category === "AI Marketing").length },
  { name: "AI Sales", count: microSaaSProducts.filter(p => p.category === "AI Sales").length },
  { name: "AI Analytics", count: microSaaSProducts.filter(p => p.category === "AI Analytics").length },
  { name: "AI Productivity", count: microSaaSProducts.filter(p => p.category === "AI Productivity").length },
  { name: "AI Customer Service", count: microSaaSProducts.filter(p => p.category === "AI Customer Service").length },
  { name: "AI Operations", count: microSaaSProducts.filter(p => p.category === "AI Operations").length },
  { name: "AI Project Management", count: microSaaSProducts.filter(p => p.category === "AI Project Management").length },
  { name: "AI Finance", count: microSaaSProducts.filter(p => p.category === "AI Finance").length },
  { name: "AI HR", count: microSaaSProducts.filter(p => p.category === "AI HR").length },
  { name: "AI Social Media", count: microSaaSProducts.filter(p => p.category === "AI Social Media").length },
  { name: "AI E-commerce", count: microSaaSProducts.filter(p => p.category === "AI E-commerce").length },
  { name: "AI Video", count: microSaaSProducts.filter(p => p.category === "AI Video").length },
  { name: "AI Data Visualization", count: microSaaSProducts.filter(p => p.category === "AI Data Visualization").length },
  { name: "AI Development", count: microSaaSProducts.filter(p => p.category === "AI Development").length },
  { name: "AI Web Optimization", count: microSaaSProducts.filter(p => p.category === "AI Web Optimization").length },
  { name: "AI Customer Analytics", count: microSaaSProducts.filter(p => p.category === "AI Customer Analytics").length },
  { name: "AI Supply Chain", count: microSaaSProducts.filter(p => p.category === "AI Supply Chain").length }
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = microSaaSProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group | 120+ Innovative AI-Powered Platforms</title>
        <meta name="description" content="Discover 120+ innovative micro SaaS solutions powered by AI. From content marketing to analytics, project management to customer service. Competitive pricing starting at $19/month." />
        <meta name="keywords" content="micro SaaS, AI platforms, business automation, SaaS solutions, AI tools, business software" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="120+ innovative micro SaaS solutions with competitive pricing and instant deployment. Transform your business with AI-powered platforms." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                120+ innovative micro SaaS solutions powered by AI for modern businesses. 
                From content marketing to analytics, project management to customer service. 
                Competitive pricing with instant deployment and white-label options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Demo
                </Link>
                <Link href="#products" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Browse Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-purple-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-purple-300">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-300">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-200">Instant Setup & 24/7 Support</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-purple-300"><Globe className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-purple-300"><Mail className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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

        {/* Products Grid */}
        <section id="products" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {product.popular && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-purple-600 group-hover:text-blue-600 transition-colors">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-green-600">
                          {product.pricing}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {product.marketPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {product.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.benefits.slice(0, 3).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Get Started
                      </Link>
                      <Link
                        href={product.link}
                        className="px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Choose from 120+ micro SaaS solutions or get a custom platform built for your specific needs.
                All solutions include instant setup, 24/7 support, and white-label options.
              </p>
              <div className="mb-8">
                <p className="text-lg text-purple-100 mb-2">
                  📞 <strong>Call us:</strong> {contactInfo.phone}
                </p>
                <p className="text-lg text-purple-100 mb-2">
                  📧 <strong>Email us:</strong> {contactInfo.email}
                </p>
                <p className="text-lg text-purple-100">
                  📍 <strong>Visit us:</strong> {contactInfo.address}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/ai-services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Explore AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}