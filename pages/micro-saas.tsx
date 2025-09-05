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
  Trash2,
  Camera,
  HardDrive
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
    description: 'Automated code review and quality assurance using advanced AI analysis.',
    icon: Code,
    features: ['Automated Code Review', 'Security Vulnerability Detection', 'Performance Analysis', 'Best Practice Suggestions'],
    pricing: '$199 - $999/month',
    category: 'Development Tools',
    popular: true
  },
  {
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection.',
    icon: Shield,
    features: ['Security Analysis', 'Gas Optimization', 'Vulnerability Detection', 'Compliance Checking'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Intelligent SEO analysis and optimization recommendations for websites.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'],
    pricing: '$79 - $399/month',
    category: 'Marketing',
    popular: true
  },
  {
    title: 'Automated Testing Platform',
    description: 'AI-driven automated testing for web and mobile applications.',
    icon: Monitor,
    features: ['Visual Testing', 'API Testing', 'Performance Testing', 'Cross-browser Testing'],
    pricing: '$149 - $799/month',
    category: 'Quality Assurance',
    popular: true
  },
  {
    title: 'AI Customer Sentiment Analyzer',
    description: 'Real-time customer sentiment analysis across multiple channels.',
    icon: MessageSquare,
    features: ['Multi-channel Analysis', 'Real-time Monitoring', 'Trend Analysis', 'Alert System'],
    pricing: '$99 - $499/month',
    category: 'Analytics',
    popular: true
  },
  {
    title: 'Smart Energy Management',
    description: 'AI-powered energy consumption optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Predictive Analytics', 'Cost Optimization', 'Sustainability Reporting'],
    pricing: '$199 - $999/month',
    category: 'Sustainability',
    popular: true
  },
  // NEW INNOVATIVE MICRO SAAS SERVICES
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Intelligent legal document analysis and contract review using advanced NLP.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
    pricing: '$299 - $1,499/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Agriculture Monitoring',
    description: 'IoT-based crop monitoring and precision agriculture management system.',
    icon: Sprout,
    features: ['Soil Monitoring', 'Weather Integration', 'Crop Health Analysis', 'Yield Prediction'],
    pricing: '$199 - $999/month',
    category: 'AgTech',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Tracker',
    description: 'Personalized mental health monitoring and wellness tracking platform.',
    icon: Heart,
    features: ['Mood Tracking', 'Stress Analysis', 'Wellness Recommendations', 'Professional Integration'],
    pricing: '$19 - $99/month',
    category: 'HealthTech',
    popular: true
  },
  {
    title: 'Blockchain Document Verification',
    description: 'Secure document verification and digital identity management using blockchain.',
    icon: Shield,
    features: ['Document Verification', 'Digital Identity', 'Tamper Detection', 'Smart Contracts'],
    pricing: '$149 - $799/month',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'AI-Powered Code Security Scanner',
    description: 'Automated code security analysis and vulnerability detection for developers.',
    icon: Code,
    features: ['Vulnerability Detection', 'Security Scanning', 'Compliance Checking', 'Fix Suggestions'],
    pricing: '$99 - $499/month',
    category: 'DevSecOps',
    popular: true
  },
  {
    title: 'Smart Home Energy Optimizer',
    description: 'AI-driven home energy management and cost optimization system.',
    icon: Home,
    features: ['Energy Usage Tracking', 'Smart Device Control', 'Cost Optimization', 'Renewable Integration'],
    pricing: '$29 - $149/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Investment Portfolio Manager',
    description: 'Intelligent investment portfolio management with automated rebalancing.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Auto Rebalancing', 'Performance Tracking'],
    pricing: '$79 - $399/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Waste Management System',
    description: 'IoT-based waste monitoring and optimization for cities and businesses.',
    icon: Trash2,
    features: ['Waste Level Monitoring', 'Route Optimization', 'Collection Scheduling', 'Sustainability Metrics'],
    pricing: '$199 - $999/month',
    category: 'Smart Cities',
    popular: true
  },
  {
    title: 'AI-Powered Language Learning Platform',
    description: 'Personalized language learning with AI tutors and adaptive content.',
    icon: BookOpen,
    features: ['AI Tutoring', 'Adaptive Learning', 'Speech Recognition', 'Progress Tracking'],
    pricing: '$19 - $99/month',
    category: 'EdTech',
    popular: true
  },
  {
    title: 'Smart Parking Management',
    description: 'Intelligent parking space management and optimization system.',
    icon: Car,
    features: ['Space Detection', 'Reservation System', 'Payment Processing', 'Analytics Dashboard'],
    pricing: '$149 - $799/month',
    category: 'Smart Cities',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Assistant',
    description: 'Intelligent personal finance management with budgeting and investment advice.',
    icon: DollarSign,
    features: ['Expense Tracking', 'Budget Planning', 'Investment Advice', 'Goal Setting'],
    pricing: '$9 - $49/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Water Quality Monitoring',
    description: 'Real-time water quality monitoring and contamination detection system.',
    icon: Eye,
    features: ['Quality Monitoring', 'Contamination Alerts', 'Data Analytics', 'Compliance Reporting'],
    pricing: '$299 - $1,499/month',
    category: 'Environmental',
    popular: true
  },
  {
    title: 'AI-Powered Job Matching Platform',
    description: 'Intelligent job matching and career development platform for professionals.',
    icon: Users,
    features: ['Skill Matching', 'Career Pathing', 'Interview Prep', 'Salary Insights'],
    pricing: '$29 - $149/month',
    category: 'HR Tech',
    popular: true
  },
  {
    title: 'Smart Building Management System',
    description: 'Comprehensive building automation and facility management platform.',
    icon: Building,
    features: ['HVAC Control', 'Security Management', 'Maintenance Scheduling', 'Energy Optimization'],
    pricing: '$199 - $999/month',
    category: 'PropTech',
    popular: true
  },
  {
    title: 'AI-Powered Content Moderation Suite',
    description: 'Advanced content moderation using AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety',
    popular: true
  },
  {
    title: 'Smart Supply Chain Visibility',
    description: 'End-to-end supply chain tracking and optimization platform.',
    icon: Package,
    features: ['Real-time Tracking', 'Risk Assessment', 'Optimization', 'Compliance Monitoring'],
    pricing: '$299 - $1,499/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Customer Onboarding',
    description: 'Automated customer onboarding with intelligent form processing and verification.',
    icon: Users,
    features: ['Form Automation', 'Document Verification', 'KYC Processing', 'Workflow Management'],
    pricing: '$149 - $799/month',
    category: 'Customer Success',
    popular: true
  },
  {
    title: 'Smart Fleet Maintenance Tracker',
    description: 'Predictive maintenance and fleet management for transportation companies.',
    icon: Car,
    features: ['Predictive Maintenance', 'Fleet Tracking', 'Cost Optimization', 'Compliance Management'],
    pricing: '$199 - $999/month',
    category: 'Fleet Management',
    popular: true
  },
  {
    title: 'AI-Powered Email Security Scanner',
    description: 'Advanced email security with phishing detection and threat analysis.',
    icon: Shield,
    features: ['Phishing Detection', 'Threat Analysis', 'Spam Filtering', 'Security Training'],
    pricing: '$19 - $99/month',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'Smart Retail Analytics Platform',
    description: 'AI-powered retail analytics with customer behavior insights and optimization.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Optimization', 'Price Optimization', 'Sales Forecasting'],
    pricing: '$299 - $1,499/month',
    category: 'Retail Tech',
    popular: true
  },
  {
    title: 'AI-Powered Voice Assistant Builder',
    description: 'No-code platform for building custom voice assistants and chatbots.',
    icon: Mic,
    features: ['Voice Recognition', 'Natural Language Processing', 'Custom Commands', 'Multi-language Support'],
    pricing: '$99 - $499/month',
    category: 'Voice Tech',
    popular: true
  },
  {
    title: 'Smart Insurance Claims Processor',
    description: 'Automated insurance claims processing with AI-powered damage assessment.',
    icon: FileText,
    features: ['Claims Processing', 'Damage Assessment', 'Fraud Detection', 'Automated Workflows'],
    pricing: '$199 - $999/month',
    category: 'InsurTech',
    popular: true
  },
  {
    title: 'AI-Powered Market Research Platform',
    description: 'Intelligent market research and competitive analysis platform.',
    icon: Search,
    features: ['Market Analysis', 'Competitor Tracking', 'Trend Analysis', 'Report Generation'],
    pricing: '$149 - $799/month',
    category: 'Market Research',
    popular: true
  },
  {
    title: 'Smart Event Management Suite',
    description: 'Comprehensive event management with AI-powered attendee insights.',
    icon: Calendar,
    features: ['Event Planning', 'Attendee Analytics', 'Networking Suggestions', 'Feedback Analysis'],
    pricing: '$79 - $399/month',
    category: 'Event Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Stylist',
    description: 'Personalized fashion recommendations and style advice using AI.',
    icon: Camera,
    features: ['Style Analysis', 'Outfit Recommendations', 'Trend Tracking', 'Size Matching'],
    pricing: '$19 - $99/month',
    category: 'Fashion Tech',
    popular: true
  },
  {
    title: 'Smart Restaurant Management',
    description: 'Complete restaurant management with AI-powered menu optimization.',
    icon: ShoppingCart,
    features: ['Menu Optimization', 'Inventory Management', 'Staff Scheduling', 'Customer Analytics'],
    pricing: '$99 - $499/month',
    category: 'Restaurant Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Trainer',
    description: 'Virtual personal trainer with AI-powered workout and nutrition planning.',
    icon: Heart,
    features: ['Workout Planning', 'Nutrition Tracking', 'Progress Monitoring', 'Form Analysis'],
    pricing: '$29 - $149/month',
    category: 'Fitness Tech',
    popular: true
  },
  {
    title: 'Smart Home Security System',
    description: 'AI-powered home security with intelligent threat detection and response.',
    icon: Shield,
    features: ['Threat Detection', 'Automated Response', 'Mobile Alerts', 'Video Analytics'],
    pricing: '$39 - $199/month',
    category: 'Home Security',
    popular: true
  },
  {
    title: 'AI-Powered Travel Planner',
    description: 'Intelligent travel planning with personalized recommendations and optimization.',
    icon: Globe,
    features: ['Trip Planning', 'Price Optimization', 'Personalized Recommendations', 'Real-time Updates'],
    pricing: '$19 - $99/month',
    category: 'Travel Tech',
    popular: true
  },
  {
    title: 'Smart Pet Care Platform',
    description: 'Comprehensive pet care management with health tracking and vet integration.',
    icon: Heart,
    features: ['Health Tracking', 'Vet Integration', 'Medication Reminders', 'Activity Monitoring'],
    pricing: '$9 - $49/month',
    category: 'Pet Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Shopper',
    description: 'Intelligent personal shopping assistant with product recommendations.',
    icon: ShoppingCart,
    features: ['Product Recommendations', 'Price Comparison', 'Wishlist Management', 'Purchase Tracking'],
    pricing: '$19 - $99/month',
    category: 'E-commerce',
    popular: true
  },
  {
    title: 'Smart Office Management',
    description: 'Comprehensive office management with space optimization and resource tracking.',
    icon: Building,
    features: ['Space Management', 'Resource Tracking', 'Meeting Optimization', 'Analytics Dashboard'],
    pricing: '$99 - $499/month',
    category: 'Office Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Chef',
    description: 'Personalized meal planning and recipe recommendations using AI.',
    icon: Camera,
    features: ['Meal Planning', 'Recipe Recommendations', 'Nutrition Analysis', 'Grocery Lists'],
    pricing: '$19 - $99/month',
    category: 'Food Tech',
    popular: true
  },
  {
    title: 'Smart Sleep Optimization',
    description: 'AI-powered sleep tracking and optimization for better rest and health.',
    icon: Heart,
    features: ['Sleep Tracking', 'Sleep Analysis', 'Optimization Tips', 'Health Integration'],
    pricing: '$9 - $49/month',
    category: 'Health Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Comprehensive personal assistant with task management and automation.',
    icon: Settings,
    features: ['Task Management', 'Calendar Integration', 'Email Management', 'Automation'],
    pricing: '$29 - $149/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized smart home control with AI-powered automation and optimization.',
    icon: Home,
    features: ['Device Control', 'Automation Rules', 'Energy Optimization', 'Voice Control'],
    pricing: '$49 - $249/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Coach',
    description: 'Intelligent financial coaching with personalized advice and goal tracking.',
    icon: DollarSign,
    features: ['Financial Coaching', 'Goal Tracking', 'Investment Advice', 'Debt Management'],
    pricing: '$19 - $99/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Health Monitoring Platform',
    description: 'Comprehensive health monitoring with AI-powered insights and recommendations.',
    icon: Heart,
    features: ['Health Tracking', 'Symptom Analysis', 'Medication Reminders', 'Doctor Integration'],
    pricing: '$29 - $149/month',
    category: 'Health Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Stylist Pro',
    description: 'Advanced personal styling with AI-powered fashion recommendations and virtual try-on.',
    icon: Camera,
    features: ['Virtual Try-on', 'Style Analysis', 'Outfit Planning', 'Trend Forecasting'],
    pricing: '$39 - $199/month',
    category: 'Fashion Tech',
    popular: true
  },
  {
    title: 'Smart Learning Management System',
    description: 'AI-powered learning platform with personalized content and progress tracking.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Adaptive Content', 'Skill Assessment'],
    pricing: '$79 - $399/month',
    category: 'EdTech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Trainer Pro',
    description: 'Advanced personal training with AI-powered form analysis and workout optimization.',
    icon: Heart,
    features: ['Form Analysis', 'Workout Optimization', 'Injury Prevention', 'Nutrition Planning'],
    pricing: '$49 - $249/month',
    category: 'Fitness Tech',
    popular: true
  },
  {
    title: 'Smart Home Energy Pro',
    description: 'Advanced home energy management with AI optimization and renewable integration.',
    icon: Zap,
    features: ['Energy Optimization', 'Renewable Integration', 'Cost Analysis', 'Carbon Tracking'],
    pricing: '$99 - $499/month',
    category: 'Energy Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Chef Pro',
    description: 'Advanced meal planning with AI-powered nutrition optimization and dietary management.',
    icon: Camera,
    features: ['Nutrition Optimization', 'Dietary Management', 'Meal Prep Planning', 'Health Integration'],
    pricing: '$39 - $199/month',
    category: 'Food Tech',
    popular: true
  },
  {
    title: 'Smart Office Productivity Suite',
    description: 'Comprehensive office productivity with AI-powered optimization and collaboration tools.',
    icon: Building,
    features: ['Productivity Analytics', 'Collaboration Tools', 'Meeting Optimization', 'Resource Management'],
    pricing: '$149 - $799/month',
    category: 'Office Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Assistant Pro',
    description: 'Advanced personal assistant with AI-powered automation and intelligent task management.',
    icon: Settings,
    features: ['Intelligent Automation', 'Task Prioritization', 'Email Intelligence', 'Calendar Optimization'],
    pricing: '$49 - $249/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'Smart Home Security Pro',
    description: 'Advanced home security with AI-powered threat detection and automated response.',
    icon: Shield,
    features: ['Advanced Threat Detection', 'Automated Response', 'Video Analytics', 'Integration Hub'],
    pricing: '$79 - $399/month',
    category: 'Home Security',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Pro',
    description: 'Advanced personal finance management with AI-powered investment optimization.',
    icon: DollarSign,
    features: ['Investment Optimization', 'Tax Planning', 'Retirement Planning', 'Risk Assessment'],
    pricing: '$49 - $249/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Health Monitoring Pro',
    description: 'Advanced health monitoring with AI-powered diagnosis assistance and health insights.',
    icon: Heart,
    features: ['Diagnosis Assistance', 'Health Insights', 'Predictive Analytics', 'Medical Integration'],
    pricing: '$79 - $399/month',
    category: 'Health Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Stylist Elite',
    description: 'Elite personal styling with AI-powered fashion forecasting and luxury recommendations.',
    icon: Camera,
    features: ['Fashion Forecasting', 'Luxury Recommendations', 'Personal Branding', 'Trend Analysis'],
    pricing: '$99 - $499/month',
    category: 'Fashion Tech',
    popular: true
  },
  {
    title: 'Smart Learning Management Pro',
    description: 'Advanced learning platform with AI-powered curriculum optimization and skill assessment.',
    icon: BookOpen,
    features: ['Curriculum Optimization', 'Skill Assessment', 'Learning Paths', 'Certification Tracking'],
    pricing: '$199 - $999/month',
    category: 'EdTech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Trainer Elite',
    description: 'Elite personal training with AI-powered performance optimization and injury prevention.',
    icon: Heart,
    features: ['Performance Optimization', 'Injury Prevention', 'Recovery Planning', 'Nutrition Optimization'],
    pricing: '$99 - $499/month',
    category: 'Fitness Tech',
    popular: true
  },
  {
    title: 'Smart Home Energy Elite',
    description: 'Elite home energy management with AI-powered optimization and carbon neutrality tracking.',
    icon: Zap,
    features: ['Carbon Neutrality Tracking', 'Advanced Optimization', 'Renewable Integration', 'Sustainability Reporting'],
    pricing: '$199 - $999/month',
    category: 'Energy Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Chef Elite',
    description: 'Elite meal planning with AI-powered nutrition optimization and culinary expertise.',
    icon: Camera,
    features: ['Culinary Expertise', 'Nutrition Optimization', 'Meal Prep Mastery', 'Health Integration'],
    pricing: '$99 - $499/month',
    category: 'Food Tech',
    popular: true
  },
  {
    title: 'Smart Office Productivity Elite',
    description: 'Elite office productivity with AI-powered optimization and advanced collaboration tools.',
    icon: Building,
    features: ['Advanced Analytics', 'Collaboration Optimization', 'Meeting Intelligence', 'Resource Optimization'],
    pricing: '$299 - $1,499/month',
    category: 'Office Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Assistant Elite',
    description: 'Elite personal assistant with AI-powered automation and intelligent decision making.',
    icon: Settings,
    features: ['Intelligent Decision Making', 'Advanced Automation', 'Email Intelligence', 'Calendar Mastery'],
    pricing: '$99 - $499/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'Smart Home Security Elite',
    description: 'Elite home security with AI-powered threat detection and advanced automation.',
    icon: Shield,
    features: ['Advanced Threat Detection', 'Automated Response', 'Video Intelligence', 'Integration Mastery'],
    pricing: '$199 - $999/month',
    category: 'Home Security',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Elite',
    description: 'Elite personal finance management with AI-powered investment optimization and wealth building.',
    icon: DollarSign,
    features: ['Wealth Building', 'Investment Mastery', 'Tax Optimization', 'Retirement Planning'],
    pricing: '$199 - $999/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Health Monitoring Elite',
    description: 'Elite health monitoring with AI-powered diagnosis assistance and advanced health insights.',
    icon: Heart,
    features: ['Advanced Diagnosis', 'Health Intelligence', 'Predictive Analytics', 'Medical Mastery'],
    pricing: '$199 - $999/month',
    category: 'Health Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Stylist Master',
    description: 'Master personal styling with AI-powered fashion mastery and luxury expertise.',
    icon: Camera,
    features: ['Fashion Mastery', 'Luxury Expertise', 'Personal Branding', 'Trend Mastery'],
    pricing: '$299 - $1,499/month',
    category: 'Fashion Tech',
    popular: true
  },
  {
    title: 'Smart Learning Management Master',
    description: 'Master learning platform with AI-powered curriculum mastery and skill optimization.',
    icon: BookOpen,
    features: ['Curriculum Mastery', 'Skill Optimization', 'Learning Mastery', 'Certification Excellence'],
    pricing: '$399 - $1,999/month',
    category: 'EdTech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Trainer Master',
    description: 'Master personal training with AI-powered performance mastery and injury prevention.',
    icon: Heart,
    features: ['Performance Mastery', 'Injury Prevention', 'Recovery Mastery', 'Nutrition Mastery'],
    pricing: '$199 - $999/month',
    category: 'Fitness Tech',
    popular: true
  },
  {
    title: 'Smart Home Energy Master',
    description: 'Master home energy management with AI-powered optimization and carbon mastery.',
    icon: Zap,
    features: ['Carbon Mastery', 'Optimization Mastery', 'Renewable Mastery', 'Sustainability Excellence'],
    pricing: '$399 - $1,999/month',
    category: 'Energy Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Chef Master',
    description: 'Master meal planning with AI-powered nutrition mastery and culinary excellence.',
    icon: Camera,
    features: ['Nutrition Mastery', 'Culinary Excellence', 'Meal Prep Mastery', 'Health Mastery'],
    pricing: '$199 - $999/month',
    category: 'Food Tech',
    popular: true
  },
  {
    title: 'Smart Office Productivity Master',
    description: 'Master office productivity with AI-powered optimization and collaboration mastery.',
    icon: Building,
    features: ['Productivity Mastery', 'Collaboration Excellence', 'Meeting Mastery', 'Resource Mastery'],
    pricing: '$599 - $2,999/month',
    category: 'Office Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Assistant Master',
    description: 'Master personal assistant with AI-powered automation mastery and intelligent decision making.',
    icon: Settings,
    features: ['Automation Mastery', 'Decision Mastery', 'Email Mastery', 'Calendar Mastery'],
    pricing: '$199 - $999/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'Smart Home Security Master',
    description: 'Master home security with AI-powered threat mastery and advanced automation.',
    icon: Shield,
    features: ['Threat Mastery', 'Automation Excellence', 'Video Mastery', 'Integration Mastery'],
    pricing: '$399 - $1,999/month',
    category: 'Home Security',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Master',
    description: 'Master personal finance management with AI-powered investment mastery and wealth excellence.',
    icon: DollarSign,
    features: ['Investment Mastery', 'Wealth Excellence', 'Tax Mastery', 'Retirement Mastery'],
    pricing: '$399 - $1,999/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Health Monitoring Master',
    description: 'Master health monitoring with AI-powered diagnosis mastery and health excellence.',
    icon: Heart,
    features: ['Diagnosis Mastery', 'Health Excellence', 'Analytics Mastery', 'Medical Mastery'],
    pricing: '$399 - $1,999/month',
    category: 'Health Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Stylist Grandmaster',
    description: 'Grandmaster personal styling with AI-powered fashion excellence and luxury mastery.',
    icon: Camera,
    features: ['Fashion Excellence', 'Luxury Mastery', 'Branding Mastery', 'Trend Excellence'],
    pricing: '$599 - $2,999/month',
    category: 'Fashion Tech',
    popular: true
  },
  {
    title: 'Smart Learning Management Grandmaster',
    description: 'Grandmaster learning platform with AI-powered curriculum excellence and skill mastery.',
    icon: BookOpen,
    features: ['Curriculum Excellence', 'Skill Mastery', 'Learning Excellence', 'Certification Mastery'],
    pricing: '$799 - $3,999/month',
    category: 'EdTech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Trainer Grandmaster',
    description: 'Grandmaster personal training with AI-powered performance excellence and injury mastery.',
    icon: Heart,
    features: ['Performance Excellence', 'Injury Mastery', 'Recovery Excellence', 'Nutrition Mastery'],
    pricing: '$399 - $1,999/month',
    category: 'Fitness Tech',
    popular: true
  },
  {
    title: 'Smart Home Energy Grandmaster',
    description: 'Grandmaster home energy management with AI-powered optimization excellence and carbon mastery.',
    icon: Zap,
    features: ['Carbon Excellence', 'Optimization Mastery', 'Renewable Excellence', 'Sustainability Mastery'],
    pricing: '$799 - $3,999/month',
    category: 'Energy Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Chef Grandmaster',
    description: 'Grandmaster meal planning with AI-powered nutrition excellence and culinary mastery.',
    icon: Camera,
    features: ['Nutrition Excellence', 'Culinary Mastery', 'Meal Prep Excellence', 'Health Mastery'],
    pricing: '$399 - $1,999/month',
    category: 'Food Tech',
    popular: true
  },
  {
    title: 'Smart Office Productivity Grandmaster',
    description: 'Grandmaster office productivity with AI-powered optimization excellence and collaboration mastery.',
    icon: Building,
    features: ['Productivity Excellence', 'Collaboration Mastery', 'Meeting Excellence', 'Resource Mastery'],
    pricing: '$1,199 - $5,999/month',
    category: 'Office Tech',
    popular: true
  },
  {
    title: 'AI-Powered Personal Assistant Grandmaster',
    description: 'Grandmaster personal assistant with AI-powered automation excellence and intelligent mastery.',
    icon: Settings,
    features: ['Automation Excellence', 'Intelligence Mastery', 'Email Excellence', 'Calendar Mastery'],
    pricing: '$399 - $1,999/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'Smart Home Security Grandmaster',
    description: 'Grandmaster home security with AI-powered threat excellence and automation mastery.',
    icon: Shield,
    features: ['Threat Excellence', 'Automation Mastery', 'Video Excellence', 'Integration Mastery'],
    pricing: '$799 - $3,999/month',
    category: 'Home Security',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Grandmaster',
    description: 'Grandmaster personal finance management with AI-powered investment excellence and wealth mastery.',
    icon: DollarSign,
    features: ['Investment Excellence', 'Wealth Mastery', 'Tax Excellence', 'Retirement Mastery'],
    pricing: '$799 - $3,999/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Health Monitoring Grandmaster',
    description: 'Grandmaster health monitoring with AI-powered diagnosis excellence and health mastery.',
    icon: Heart,
    features: ['Diagnosis Excellence', 'Health Mastery', 'Analytics Excellence', 'Medical Mastery'],
    pricing: '$799 - $3,999/month',
    category: 'Health Tech',
    popular: true
  },
  {
    title: 'Intelligent Inventory Forecasting',
    description: 'AI-driven demand forecasting and inventory optimization for retail.',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Supplier Management', 'Seasonal Analysis'],
    pricing: '$149 - $799/month',
    category: 'Retail',
    popular: true
  },
  {
    title: 'AI-Powered Video Content Generator',
    description: 'Automated video creation from text, images, and audio with professional editing.',
    icon: Video,
    features: ['Text-to-Video', 'Auto Editing', 'Voice Synthesis', 'Template Library'],
    pricing: '$199 - $1,499/month',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'Blockchain Analytics Platform',
    description: 'Comprehensive blockchain transaction analysis with AML and compliance reporting.',
    icon: TrendingUp,
    features: ['Transaction Analysis', 'AML Detection', 'Compliance Reporting', 'Risk Scoring'],
    pricing: '$399 - $2,999/month',
    category: 'Blockchain Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Medical Image Analysis',
    description: 'Advanced medical image analysis with AI-powered diagnosis assistance.',
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
  }
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy in minutes, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and compliance'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions instantly'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly'
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Built for modern infrastructure'
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
    stat: '75%'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Reduce development costs by up to 60%',
    stat: '60%'
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
      'API access',
      'White-label options'
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
      '24/7 dedicated support',
      'Enterprise security',
      'Unlimited integrations',
      'Custom development',
      'SLA guarantee'
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
              Discover our comprehensive collection of micro SaaS solutions designed to solve specific business challenges with precision and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-600 group-hover:text-indigo-600 transition-colors">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {product.popular && (
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-900">
                      {product.pricing}
                    </div>
                    <Link
                      href="/contact"
                      className="text-purple-600 hover:text-indigo-600 font-semibold group-hover:text-indigo-600 transition-colors inline-flex items-center"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Built with modern technology and designed for scalability, our micro SaaS products deliver exceptional value and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-purple-600 mb-4 flex justify-center">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our micro SaaS solutions have helped hundreds of businesses achieve their goals faster and more efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-purple-600 mb-4 flex justify-center">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our core micro SaaS platform with the option to add specific solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg ${
                  tier.popular ? 'ring-2 ring-purple-500 relative' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
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
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you create the perfect micro SaaS solution for your business needs. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}