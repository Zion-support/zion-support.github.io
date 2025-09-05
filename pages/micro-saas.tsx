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

  // NEW INNOVATIVE MICRO SAAS SERVICES - 2024/2025
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Real-time carbon footprint monitoring and sustainability analytics for businesses with actionable insights and ESG reporting.',
    icon: TreePine,
    features: ['Real-time Monitoring', 'ESG Reporting', 'Sustainability Analytics', 'Carbon Offset Marketplace', 'Compliance Tracking', 'ROI Analysis'],
    pricing: '$79 - $399/month',
    category: 'Sustainability',
    popular: true,
    benefits: ['ESG Compliance', 'Cost Reduction', 'Brand Enhancement', 'Sustainability Goals', 'Regulatory Compliance'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-carbon-footprint-tracker',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Office Space Optimizer',
    description: 'AI-driven workspace optimization using IoT sensors, occupancy analytics, and space utilization insights for hybrid work environments.',
    icon: Building,
    features: ['Occupancy Analytics', 'Space Utilization', 'Energy Optimization', 'Desk Booking', 'Meeting Room Management', 'Cost Analysis'],
    pricing: '$149 - $599/month',
    category: 'Smart Office',
    popular: true,
    benefits: ['Space Efficiency', 'Cost Reduction', 'Employee Satisfaction', 'Energy Savings', 'Data-Driven Decisions'],
    marketPrice: '$200 - $800/month',
    link: 'https://ziontechgroup.com/smart-office-space-optimizer',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Intelligent legal document review, contract analysis, and compliance checking with natural language processing and risk assessment.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Document Comparison', 'Legal Research', 'Automated Summaries'],
    pricing: '$199 - $799/month',
    category: 'LegalTech',
    popular: true,
    benefits: ['Time Savings', 'Risk Reduction', 'Cost Efficiency', 'Accuracy Improvement', 'Faster Processing'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/ai-legal-document-analyzer',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Predictive Maintenance Platform',
    description: 'IoT-based predictive maintenance solution using machine learning to prevent equipment failures and optimize maintenance schedules.',
    icon: Settings,
    features: ['Predictive Analytics', 'IoT Integration', 'Maintenance Scheduling', 'Failure Prediction', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$299 - $1,199/month',
    category: 'Industrial IoT',
    popular: true,
    benefits: ['Reduced Downtime', 'Cost Savings', 'Extended Equipment Life', 'Optimized Maintenance', 'Improved Efficiency'],
    marketPrice: '$450 - $1,800/month',
    link: 'https://ziontechgroup.com/predictive-maintenance-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Talent Acquisition Suite',
    description: 'Comprehensive recruitment platform with AI screening, candidate matching, interview scheduling, and diversity analytics.',
    icon: Users,
    features: ['AI Screening', 'Candidate Matching', 'Interview Scheduling', 'Diversity Analytics', 'Skills Assessment', 'Background Checks'],
    pricing: '$99 - $499/month',
    category: 'HRTech',
    popular: true,
    benefits: ['Faster Hiring', 'Better Matches', 'Reduced Bias', 'Cost Savings', 'Improved Quality'],
    marketPrice: '$150 - $750/month',
    link: 'https://ziontechgroup.com/ai-talent-acquisition-suite',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Energy Management System',
    description: 'AI-driven energy optimization platform for buildings and facilities with real-time monitoring, demand forecasting, and cost optimization.',
    icon: Zap,
    features: ['Energy Monitoring', 'Demand Forecasting', 'Cost Optimization', 'Renewable Integration', 'Peak Shaving', 'Carbon Tracking'],
    pricing: '$199 - $799/month',
    category: 'EnergyTech',
    popular: true,
    benefits: ['Energy Savings', 'Cost Reduction', 'Sustainability', 'Peak Management', 'Renewable Integration'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/smart-energy-management-system',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Customer Churn Predictor',
    description: 'Advanced customer retention platform using machine learning to predict churn risk and automate retention campaigns.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Risk Scoring', 'Automated Campaigns', 'Customer Segmentation', 'Retention Analytics', 'A/B Testing'],
    pricing: '$149 - $599/month',
    category: 'Customer Success',
    popular: true,
    benefits: ['Reduced Churn', 'Increased Retention', 'Better ROI', 'Automated Actions', 'Data-Driven Insights'],
    marketPrice: '$200 - $800/month',
    link: 'https://ziontechgroup.com/ai-customer-churn-predictor',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Blockchain Supply Chain Tracker',
    description: 'End-to-end supply chain visibility using blockchain technology for transparency, authenticity verification, and compliance tracking.',
    icon: Truck,
    features: ['Blockchain Tracking', 'Authenticity Verification', 'Compliance Monitoring', 'Smart Contracts', 'Transparency Reports', 'Quality Assurance'],
    pricing: '$299 - $1,199/month',
    category: 'Blockchain',
    popular: true,
    benefits: ['Transparency', 'Trust Building', 'Compliance', 'Quality Assurance', 'Cost Reduction'],
    marketPrice: '$450 - $1,800/month',
    link: 'https://ziontechgroup.com/blockchain-supply-chain-tracker',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Voice Analytics Platform',
    description: 'Advanced voice analysis platform for call centers, sales teams, and customer service with sentiment analysis and performance insights.',
    icon: Mic,
    features: ['Voice Analysis', 'Sentiment Detection', 'Performance Metrics', 'Quality Scoring', 'Coaching Insights', 'Real-time Alerts'],
    pricing: '$79 - $399/month',
    category: 'Voice Analytics',
    popular: true,
    benefits: ['Improved Performance', 'Better Customer Service', 'Quality Enhancement', 'Training Insights', 'Cost Reduction'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-voice-analytics-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Fleet Management System',
    description: 'Comprehensive fleet management platform with GPS tracking, fuel optimization, driver behavior analysis, and predictive maintenance.',
    icon: Car,
    features: ['GPS Tracking', 'Fuel Optimization', 'Driver Analytics', 'Predictive Maintenance', 'Route Optimization', 'Compliance Monitoring'],
    pricing: '$199 - $799/month',
    category: 'Fleet Management',
    popular: true,
    benefits: ['Cost Reduction', 'Fuel Savings', 'Safety Improvement', 'Efficiency Gains', 'Compliance Assurance'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/smart-fleet-management-system',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Content Moderation Platform',
    description: 'Automated content moderation using AI for social media, forums, and user-generated content with real-time filtering and reporting.',
    icon: Eye,
    features: ['AI Moderation', 'Real-time Filtering', 'Multi-language Support', 'Custom Rules', 'Analytics Dashboard', 'Human Review Queue'],
    pricing: '$149 - $599/month',
    category: 'Content Moderation',
    popular: true,
    benefits: ['Automated Moderation', 'Cost Reduction', 'Consistent Quality', 'Scalable Solution', 'Risk Mitigation'],
    marketPrice: '$200 - $800/month',
    link: 'https://ziontechgroup.com/ai-content-moderation-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Agriculture Monitoring System',
    description: 'IoT-based agricultural monitoring platform with soil sensors, weather data, crop health analysis, and yield prediction.',
    icon: Sprout,
    features: ['Soil Monitoring', 'Weather Integration', 'Crop Health Analysis', 'Yield Prediction', 'Irrigation Control', 'Pest Detection'],
    pricing: '$299 - $1,199/month',
    category: 'AgTech',
    popular: true,
    benefits: ['Increased Yield', 'Resource Optimization', 'Cost Reduction', 'Better Planning', 'Sustainability'],
    marketPrice: '$450 - $1,800/month',
    link: 'https://ziontechgroup.com/smart-agriculture-monitoring-system',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Fraud Detection Platform',
    description: 'Advanced fraud detection system using machine learning for real-time transaction monitoring and risk assessment across multiple channels.',
    icon: Shield,
    features: ['Real-time Detection', 'Machine Learning Models', 'Multi-channel Monitoring', 'Risk Scoring', 'Automated Alerts', 'Compliance Reporting'],
    pricing: '$399 - $1,599/month',
    category: 'FinTech',
    popular: true,
    benefits: ['Fraud Prevention', 'Cost Reduction', 'Real-time Protection', 'Compliance', 'Customer Trust'],
    marketPrice: '$600 - $2,400/month',
    link: 'https://ziontechgroup.com/ai-fraud-detection-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Building Automation Platform',
    description: 'Comprehensive building automation system with IoT sensors, energy management, security integration, and predictive maintenance.',
    icon: Building,
    features: ['IoT Integration', 'Energy Management', 'Security Systems', 'Climate Control', 'Predictive Maintenance', 'Occupancy Analytics'],
    pricing: '$499 - $1,999/month',
    category: 'Smart Buildings',
    popular: true,
    benefits: ['Energy Savings', 'Cost Reduction', 'Improved Comfort', 'Enhanced Security', 'Operational Efficiency'],
    marketPrice: '$750 - $3,000/month',
    link: 'https://ziontechgroup.com/smart-building-automation-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization platform for e-commerce, content, and marketing with real-time recommendations and behavioral analysis.',
    icon: Target,
    features: ['Real-time Recommendations', 'Behavioral Analysis', 'A/B Testing', 'Multi-channel Personalization', 'Customer Segmentation', 'Performance Analytics'],
    pricing: '$199 - $799/month',
    category: 'Personalization',
    popular: true,
    benefits: ['Increased Engagement', 'Higher Conversion', 'Better Customer Experience', 'Revenue Growth', 'Data-Driven Insights'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/ai-personalization-engine',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Digital Twin Platform',
    description: 'Create digital replicas of physical assets, processes, or systems for simulation, optimization, and predictive analysis.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analysis', 'Performance Optimization', 'What-if Scenarios', 'Integration APIs'],
    pricing: '$599 - $2,399/month',
    category: 'Digital Twin',
    popular: true,
    benefits: ['Risk Reduction', 'Optimization', 'Cost Savings', 'Better Planning', 'Innovation Enablement'],
    marketPrice: '$900 - $3,600/month',
    link: 'https://ziontechgroup.com/digital-twin-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Translation & Localization',
    description: 'Advanced translation platform with AI-powered language processing, cultural adaptation, and real-time translation for global businesses.',
    icon: Globe,
    features: ['AI Translation', 'Cultural Adaptation', 'Real-time Processing', 'Multi-language Support', 'Quality Assurance', 'Integration APIs'],
    pricing: '$99 - $499/month',
    category: 'Translation',
    popular: true,
    benefits: ['Global Reach', 'Cost Efficiency', 'Quality Translation', 'Cultural Accuracy', 'Time Savings'],
    marketPrice: '$150 - $750/month',
    link: 'https://ziontechgroup.com/ai-translation-localization',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Retail Analytics Platform',
    description: 'Comprehensive retail analytics with customer behavior tracking, inventory optimization, and sales forecasting using AI and IoT.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Optimization', 'Sales Forecasting', 'Heat Mapping', 'Price Optimization', 'Staff Scheduling'],
    pricing: '$299 - $1,199/month',
    category: 'RetailTech',
    popular: true,
    benefits: ['Increased Sales', 'Inventory Optimization', 'Better Customer Experience', 'Cost Reduction', 'Data-Driven Decisions'],
    marketPrice: '$450 - $1,800/month',
    link: 'https://ziontechgroup.com/smart-retail-analytics-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Intelligent code review platform with automated bug detection, security analysis, performance optimization, and best practice recommendations.',
    icon: Code,
    features: ['Automated Review', 'Bug Detection', 'Security Analysis', 'Performance Optimization', 'Best Practices', 'Learning Recommendations'],
    pricing: '$149 - $599/month',
    category: 'DevTools',
    popular: true,
    benefits: ['Code Quality', 'Bug Prevention', 'Security Enhancement', 'Learning Support', 'Time Savings'],
    marketPrice: '$200 - $800/month',
    link: 'https://ziontechgroup.com/ai-code-review-assistant',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Water Management System',
    description: 'IoT-based water monitoring and management platform for utilities, agriculture, and industrial applications with leak detection and optimization.',
    icon: Droplets,
    features: ['Water Monitoring', 'Leak Detection', 'Quality Analysis', 'Usage Optimization', 'Predictive Maintenance', 'Billing Integration'],
    pricing: '$199 - $799/month',
    category: 'WaterTech',
    popular: true,
    benefits: ['Water Conservation', 'Leak Prevention', 'Cost Reduction', 'Quality Assurance', 'Sustainability'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/smart-water-management-system',
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