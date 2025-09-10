<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  BarChart3, 
  Code, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Shield,
  Globe,
  Package,
  DollarSign,
  Trash2,
  Camera,
  HardDrive,
  Droplets,
  Calendar
} from 'lucide-react';
import Layout from './components/Layout';

const microSaasSolutions = [
  {
    title: "Workflow Automation",
    description: "Streamline business processes with intelligent automation tools",
    icon: Zap,
    features: [
      "Process Automation",
      "Task Scheduling",
      "Data Integration",
      "Custom Workflows",
      "API Integrations",
      "Real-time Notifications"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Reduce manual work by 80%", "Increase efficiency by 60%", "Save 20+ hours/week"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Data Processing Tools",
    description: "Powerful data analysis and processing solutions",
    icon: BarChart3,
    features: [
      "Data Visualization",
      "ETL Processes",
      "Real-time Analytics",
      "Custom Dashboards",
      "Report Generation",
      "Data Export/Import"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["Process 10x more data", "Real-time insights", "50% faster reporting"],
    setupTime: "2-3 weeks"
  },
  {
    title: "API Integration Services",
    description: "Connect your systems with seamless API solutions",
    icon: Code,
    features: [
      "REST API Development",
      "Third-party Integrations",
      "Webhook Management",
      "API Documentation",
      "Rate Limiting",
      "Authentication & Security"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["Connect 50+ services", "99.9% uptime", "Reduce integration time by 70%"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Custom Dashboard Solutions",
    description: "Tailored dashboards for your business needs",
    icon: Settings,
    features: [
      "Real-time Monitoring",
      "Custom Widgets",
      "User Management",
      "Role-based Access",
      "Mobile Responsive",
      "Export Capabilities"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,500/month",
    benefits: ["Centralized data view", "Mobile access", "Custom branding"],
    setupTime: "1-2 weeks"
  },
  {
    title: "SaaS Platform Development",
    description: "Complete SaaS solutions from concept to deployment",
    icon: Cloud,
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "Payment Integration",
      "User Onboarding",
      "Analytics & Reporting",
      "Scalable Infrastructure"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Full SaaS solution", "Scalable architecture", "Revenue generation"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Business Intelligence Tools",
    description: "Advanced BI solutions for data-driven decisions",
    icon: BarChart3,
    features: [
      "Interactive Dashboards",
      "Predictive Analytics",
      "Data Mining",
      "Custom Reports",
      "Machine Learning Integration",
      "Real-time Insights"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-8,000/month",
    benefits: ["Data-driven decisions", "Predictive insights", "ROI tracking"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Customer Relationship Management",
    description: "Comprehensive CRM solution for managing customer relationships",
    icon: Users,
    features: [
      "Contact Management",
      "Lead Tracking",
      "Sales Pipeline",
      "Email Marketing",
      "Customer Support",
      "Analytics & Reporting"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Increase sales by 30%", "Better customer retention", "Automated follow-ups"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Project Management Platform",
    description: "Complete project management solution for teams",
    icon: CheckCircle,
    features: [
      "Task Management",
      "Team Collaboration",
      "Time Tracking",
      "Resource Planning",
      "Progress Monitoring",
      "Document Sharing"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["Improve productivity by 40%", "Better project visibility", "Team coordination"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Inventory Management System",
    description: "Smart inventory tracking and management solution",
    icon: Package,
    features: [
      "Real-time Inventory Tracking",
      "Automated Reordering",
      "Barcode Scanning",
      "Multi-location Support",
      "Analytics & Forecasting",
      "Integration with POS/ERP"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,500/month",
    benefits: ["Reduce stockouts by 90%", "Lower inventory costs", "Automated reordering"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Email Marketing Automation",
    description: "Advanced email marketing and automation platform",
    icon: Mail,
    features: [
      "Email Campaign Builder",
      "Automation Workflows",
      "A/B Testing",
      "List Segmentation",
      "Analytics & Reporting",
      "Integration with CRM"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,500-4,000/month",
    benefits: ["Increase open rates by 25%", "Automated nurturing", "Better targeting"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Social Media Management",
    description: "Comprehensive social media scheduling and analytics platform",
    icon: Globe,
    features: [
      "Multi-platform Posting",
      "Content Calendar",
      "Analytics & Insights",
      "Team Collaboration",
      "Hashtag Research",
      "Competitor Analysis"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Save 10+ hours/week", "Increase engagement by 35%", "Better content planning"],
    setupTime: "1-2 weeks"
  },
  {
    title: "HR Management System",
    description: "Complete human resources management solution",
    icon: Users,
    features: [
      "Employee Database",
      "Time & Attendance",
      "Payroll Integration",
      "Performance Reviews",
      "Recruitment Tools",
      "Benefits Management"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,000-7,000/month",
    benefits: ["Streamline HR processes", "Reduce paperwork by 80%", "Better employee experience"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Financial Management Platform",
    description: "Comprehensive financial tracking and management solution",
    icon: DollarSign,
    features: [
      "Expense Tracking",
      "Invoice Management",
      "Budget Planning",
      "Financial Reporting",
      "Tax Preparation",
      "Bank Integration"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Better financial visibility", "Automated bookkeeping", "Tax compliance"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Learning Management System",
    description: "Complete e-learning platform for training and education",
    icon: GraduationCap,
    features: [
      "Course Creation",
      "Student Management",
      "Progress Tracking",
      "Certification System",
      "Video Streaming",
      "Assessment Tools"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Scalable training", "Better engagement", "Progress tracking"],
    setupTime: "3-5 weeks"
  },
  {
    title: "Event Management Platform",
    description: "Complete solution for managing events and conferences",
    icon: Calendar,
    features: [
      "Event Registration",
      "Ticketing System",
      "Attendee Management",
      "Payment Processing",
      "Event Analytics",
      "Mobile App"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,500/month",
    benefits: ["Streamline event planning", "Better attendee experience", "Revenue optimization"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Content Management System",
    description: "Advanced CMS for managing digital content",
    icon: FileText,
    features: [
      "Content Editor",
      "Media Library",
      "SEO Optimization",
      "Multi-language Support",
      "Version Control",
      "Publishing Workflow"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,500/month",
    benefits: ["Easy content updates", "Better SEO", "Team collaboration"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Analytics & Reporting Platform",
    description: "Advanced analytics and business intelligence solution",
    icon: BarChart3,
    features: [
      "Custom Dashboards",
      "Data Visualization",
      "Real-time Analytics",
      "Automated Reports",
      "Data Export",
      "API Integration"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["Data-driven insights", "Real-time monitoring", "Better decision making"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Customer Support Platform",
    description: "Comprehensive customer support and helpdesk solution",
    icon: Shield,
    features: [
      "Ticket Management",
      "Live Chat",
      "Knowledge Base",
      "Automation Rules",
      "Performance Analytics",
      "Multi-channel Support"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Faster response times", "Better customer satisfaction", "Reduced support costs"],
    setupTime: "2-3 weeks"
  },
  {
    title: "E-commerce Platform",
    description: "Complete online store solution with advanced features",
    icon: ShoppingCart,
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Processing",
      "Order Management",
      "Inventory Tracking",
      "Marketing Tools"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Complete e-commerce solution", "Mobile optimized", "SEO friendly"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Document Management System",
    description: "Secure document storage and collaboration platform",
    icon: FileText,
    features: [
      "Document Storage",
      "Version Control",
      "Collaboration Tools",
      "Access Control",
      "Search & Indexing",
      "Compliance Management"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,000/month",
    benefits: ["Secure document storage", "Better collaboration", "Compliance ready"],
    setupTime: "1-2 weeks"
  },
  {
    title: "API Gateway & Management",
    description: "Comprehensive API management and gateway solution",
    icon: Network,
    features: [
      "API Gateway",
      "Rate Limiting",
      "Authentication",
      "Monitoring & Analytics",
      "Developer Portal",
      "API Documentation"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Secure API management", "Better performance", "Developer friendly"],
    setupTime: "2-3 weeks"
  },
  {
    title: "IoT Device Management",
    description: "Complete IoT device monitoring and management platform",
    icon: Wifi,
    features: [
      "Device Registration",
      "Real-time Monitoring",
      "Remote Control",
      "Data Collection",
      "Alert System",
      "Analytics Dashboard"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Centralized device management", "Real-time insights", "Predictive maintenance"],
    setupTime: "3-5 weeks"
  },
  {
    title: "Blockchain Integration Platform",
    description: "Blockchain integration and smart contract management",
    icon: Shield,
    features: [
      "Smart Contract Deployment",
      "Blockchain Integration",
      "Wallet Management",
      "Transaction Monitoring",
      "Security Auditing",
      "API Development"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Blockchain integration", "Enhanced security", "Transparent transactions"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Machine Learning Platform",
    description: "End-to-end ML platform for model development and deployment",
    icon: Brain,
    features: [
      "Model Training",
      "Data Preprocessing",
      "Model Deployment",
      "A/B Testing",
      "Monitoring & Alerts",
      "AutoML Capabilities"
    ],
    price: "Starting at $4,000/month",
    marketPrice: "$6,000-20,000/month",
    benefits: ["Faster ML development", "Automated model training", "Production ready"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Video Conferencing Platform",
    description: "Custom video conferencing and collaboration solution",
    icon: Video,
    features: [
      "HD Video Calls",
      "Screen Sharing",
      "Recording & Playback",
      "Chat & Messaging",
      "Meeting Scheduling",
      "Integration APIs"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Custom branding", "Better security", "Integration ready"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Mobile App Backend",
    description: "Complete backend infrastructure for mobile applications",
    icon: Smartphone,
    features: [
      "User Authentication",
      "Database Management",
      "Push Notifications",
      "File Storage",
      "API Development",
      "Analytics Integration"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Scalable backend", "Real-time features", "Cross-platform support"],
    setupTime: "3-5 weeks"
  },
  {
    title: "AI-Powered Social Media Scheduler",
    description: "Intelligent social media management with AI content optimization",
    icon: Globe,
    features: [
      "AI Content Generation",
      "Optimal Post Timing",
      "Hashtag Optimization",
      "Engagement Analytics",
      "Multi-platform Publishing",
      "Brand Voice Training"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["40% increase in engagement", "Save 15+ hours/week", "AI-driven optimization"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Subscription Cancellation Service",
    description: "Automated subscription management and cancellation platform",
    icon: DollarSign,
    features: [
      "Subscription Discovery",
      "One-click Cancellation",
      "Spending Analytics",
      "Renewal Alerts",
      "Cost Optimization",
      "Multi-provider Support"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,500/month",
    benefits: ["Save $200+/month per user", "Automated management", "Spending insights"],
    setupTime: "1-2 weeks"
  },
  {
    title: "AI Meeting Cost Calculator",
    description: "Real-time meeting cost analysis and optimization tool",
    icon: Calculator,
    features: [
      "Real-time Cost Tracking",
      "ROI Analysis",
      "Meeting Optimization",
      "Productivity Metrics",
      "Cost Alerts",
      "Team Analytics"
    ],
    price: "Starting at $800/month",
    marketPrice: "$1,500-3,500/month",
    benefits: ["Reduce meeting costs by 30%", "Better time management", "ROI visibility"],
    setupTime: "1 week"
  },
  {
    title: "AI-Powered Expense Tracker",
    description: "Smart expense tracking with receipt scanning and categorization",
    icon: Receipt,
    features: [
      "Receipt OCR Scanning",
      "AI Categorization",
      "Tax Preparation",
      "Spending Insights",
      "Multi-currency Support",
      "Integration with Accounting"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["90% faster expense entry", "Automated categorization", "Tax-ready reports"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Mental Health Support App",
    description: "AI-powered mental wellness and support platform",
    icon: Heart,
    features: [
      "AI Chat Support",
      "Mood Tracking",
      "Meditation Guides",
      "Crisis Intervention",
      "Progress Analytics",
      "Professional Referrals"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["24/7 support availability", "Personalized care", "Privacy-focused"],
    setupTime: "3-4 weeks"
  },
  {
    title: "AI Content Repurposing Tool",
    description: "Transform content across multiple formats using AI",
    icon: FileText,
    features: [
      "Blog to Video Conversion",
      "Podcast Transcription",
      "Social Media Adaptation",
      "Multi-language Translation",
      "SEO Optimization",
      "Brand Consistency"
    ],
    price: "Starting at $1,600/month",
    marketPrice: "$2,800-6,000/month",
    benefits: ["10x content output", "Consistent branding", "Multi-format reach"],
    setupTime: "2-3 weeks"
  },
  {
    title: "AI-Powered Lead Scoring",
    description: "Intelligent lead qualification and prioritization system",
    icon: Target,
    features: [
      "Behavioral Analysis",
      "Predictive Scoring",
      "Lead Nurturing",
      "CRM Integration",
      "Performance Analytics",
      "Custom Scoring Models"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["35% higher conversion", "Better lead quality", "Automated prioritization"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Cloud Cost Optimization Tool",
    description: "AI-driven cloud infrastructure cost analysis and optimization",
    icon: Cloud,
    features: [
      "Cost Analysis",
      "Resource Optimization",
      "Waste Detection",
      "Right-sizing Recommendations",
      "Budget Alerts",
      "Multi-cloud Support"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,500/month",
    benefits: ["Save 25-40% on cloud costs", "Automated optimization", "Real-time monitoring"],
    setupTime: "2-3 weeks"
  },
  {
    title: "AI-Powered Email Follow-up",
    description: "Intelligent email automation and follow-up system",
    icon: Mail,
    features: [
      "Smart Follow-up Timing",
      "Personalized Templates",
      "A/B Testing",
      "Response Prediction",
      "CRM Integration",
      "Performance Analytics"
    ],
    price: "Starting at $1,400/month",
    marketPrice: "$2,500-5,500/month",
    benefits: ["60% higher response rates", "Automated nurturing", "Personalized outreach"],
    setupTime: "1-2 weeks"
  },
  {
    title: "AI Meeting Summarizer",
    description: "Automatic meeting transcription and intelligent summarization",
    icon: Video,
    features: [
      "Real-time Transcription",
      "AI Summarization",
      "Action Item Extraction",
      "Multi-language Support",
      "Integration with Calendars",
      "Searchable Archive"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,500/month",
    benefits: ["Save 2+ hours per meeting", "Never miss key points", "Searchable history"],
    setupTime: "1-2 weeks"
  },
  {
    title: "AI-Powered Password Manager",
    description: "Advanced password security with AI-powered breach detection",
    icon: Lock,
    features: [
      "Secure Password Generation",
      "Breach Monitoring",
      "Dark Web Scanning",
      "Family Sharing",
      "2FA Integration",
      "Security Analytics"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-3,500/month",
    benefits: ["Enhanced security", "Proactive breach alerts", "Family protection"],
    setupTime: "1 week"
  },
  {
    title: "AI Local SEO Optimizer",
    description: "Automated local search optimization and reputation management",
    icon: MapPin,
    features: [
      "Google My Business Optimization",
      "Review Management",
      "Local Keyword Tracking",
      "Competitor Analysis",
      "Citation Building",
      "Performance Reporting"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["50% more local visibility", "Automated optimization", "Better local rankings"],
    setupTime: "2-3 weeks"
  },
  {
    title: "AI-Powered Invoice Processing",
    description: "Intelligent invoice automation and payment processing",
    icon: FileText,
    features: [
      "OCR Invoice Reading",
      "Automated Data Extraction",
      "Approval Workflows",
      "Payment Processing",
      "Compliance Checking",
      "Analytics Dashboard"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-7,500/month",
    benefits: ["90% faster processing", "Reduced errors", "Automated workflows"],
    setupTime: "2-4 weeks"
  },
  {
    title: "AI Customer Sentiment Analyzer",
    description: "Real-time customer feedback analysis and sentiment tracking",
    icon: MessageSquare,
    features: [
      "Multi-channel Monitoring",
      "Sentiment Analysis",
      "Trend Detection",
      "Alert System",
      "Custom Dashboards",
      "Integration APIs"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["Real-time insights", "Proactive issue detection", "Better customer experience"],
    setupTime: "2-3 weeks"
  },
  {
    title: "AI-Powered Lead Scoring Platform",
    description: "Intelligent lead qualification and scoring using machine learning algorithms",
    icon: Target,
    features: [
      "ML-based Lead Scoring",
      "Behavioral Analysis",
      "Predictive Modeling",
      "CRM Integration",
      "Real-time Scoring",
      "Custom Scoring Models"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["40% increase in conversion", "Reduce sales cycle by 30%", "Better lead prioritization"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Smart Contract Management System",
    description: "Automated contract lifecycle management with AI-powered insights",
    icon: FileText,
    features: [
      "Contract Creation & Templates",
      "AI Clause Analysis",
      "Automated Renewals",
      "Compliance Monitoring",
      "Risk Assessment",
      "Digital Signatures"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Reduce contract cycle by 60%", "Minimize legal risks", "Automated compliance"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Voice AI Customer Service Platform",
    description: "Advanced voice AI for automated customer support and call handling",
    icon: Mic,
    features: [
      "Natural Voice Processing",
      "Multi-language Support",
      "Call Routing & Queuing",
      "Sentiment Analysis",
      "Call Analytics",
      "CRM Integration"
    ],
    price: "Starting at $3,200/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["80% call automation", "24/7 availability", "Reduce support costs by 70%"],
    setupTime: "3-5 weeks"
  },
  {
    title: "Predictive Maintenance Platform",
    description: "IoT-powered predictive maintenance for industrial equipment and machinery",
    icon: Settings,
    features: [
      "Equipment Monitoring",
      "Failure Prediction",
      "Maintenance Scheduling",
      "Parts Inventory Management",
      "Cost Optimization",
      "Mobile Alerts"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$6,000-20,000/month",
    benefits: ["Reduce downtime by 50%", "Lower maintenance costs by 40%", "Extend equipment life"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Smart Energy Management System",
    description: "AI-powered energy monitoring and optimization for buildings and facilities",
    icon: Zap,
    features: [
      "Real-time Energy Monitoring",
      "Usage Analytics",
      "Cost Optimization",
      "Renewable Integration",
      "Automated Controls",
      "Carbon Footprint Tracking"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Reduce energy costs by 25%", "Improve sustainability", "Automated optimization"],
    setupTime: "3-4 weeks"
  },
  {
    title: "AI-Powered Content Moderation",
    description: "Automated content moderation and safety monitoring for online platforms",
    icon: Shield,
    features: [
      "Image & Video Analysis",
      "Text Content Filtering",
      "Real-time Moderation",
      "Custom Rule Engine",
      "User Behavior Analysis",
      "Compliance Reporting"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["95% accuracy in detection", "Reduce moderation costs by 80%", "24/7 monitoring"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Smart Inventory Optimization",
    description: "AI-driven inventory management with demand forecasting and automated reordering",
    icon: Package,
    features: [
      "Demand Forecasting",
      "Automated Reordering",
      "Stock Optimization",
      "Supplier Management",
      "Cost Analysis",
      "Multi-location Support"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-9,000/month",
    benefits: ["Reduce stockouts by 90%", "Lower inventory costs by 30%", "Improve cash flow"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Digital Twin Platform",
    description: "Create digital replicas of physical assets for simulation and optimization",
    icon: Monitor,
    features: [
      "3D Asset Modeling",
      "Real-time Synchronization",
      "Simulation Engine",
      "Predictive Analytics",
      "Performance Monitoring",
      "What-if Scenarios"
    ],
    price: "Starting at $4,500/month",
    marketPrice: "$8,000-25,000/month",
    benefits: ["Optimize operations", "Reduce testing costs", "Improve decision making"],
    setupTime: "6-10 weeks"
  },
  {
    title: "AI-Powered Personalization Engine",
    description: "Real-time personalization for websites, apps, and marketing campaigns",
    icon: Brain,
    features: [
      "Real-time Personalization",
      "Behavioral Analysis",
      "A/B Testing",
      "Content Optimization",
      "Cross-channel Consistency",
      "Performance Analytics"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Increase conversion by 35%", "Improve user engagement", "Higher customer satisfaction"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Smart Compliance Monitoring",
    description: "Automated compliance tracking and reporting for regulatory requirements",
    icon: CheckCircle,
    features: [
      "Regulatory Monitoring",
      "Automated Reporting",
      "Risk Assessment",
      "Audit Trail",
      "Alert System",
      "Documentation Management"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Reduce compliance costs by 60%", "Minimize regulatory risks", "Automated reporting"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Edge Computing Management Platform",
    description: "Distributed computing platform for edge devices and IoT applications",
    icon: Wifi,
    features: [
      "Edge Device Management",
      "Data Processing",
      "Latency Optimization",
      "Offline Capabilities",
      "Security Management",
      "Performance Monitoring"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Reduce latency by 80%", "Improve reliability", "Lower bandwidth costs"],
    setupTime: "4-6 weeks"
  },
  {
    title: "AI-Powered Fraud Prevention",
    description: "Advanced fraud detection and prevention using machine learning",
    icon: Shield,
    features: [
      "Real-time Fraud Detection",
      "Behavioral Analysis",
      "Risk Scoring",
      "Transaction Monitoring",
      "Pattern Recognition",
      "Automated Blocking"
    ],
    price: "Starting at $3,200/month",
    marketPrice: "$5,500-18,000/month",
    benefits: ["Reduce fraud by 95%", "Minimize false positives", "Real-time protection"],
    setupTime: "3-5 weeks"
  },
  {
    title: "Smart Supply Chain Platform",
    description: "End-to-end supply chain visibility and optimization with AI insights",
    icon: Network,
    features: [
      "Supply Chain Mapping",
      "Demand Forecasting",
      "Supplier Management",
      "Risk Assessment",
      "Cost Optimization",
      "Sustainability Tracking"
    ],
    price: "Starting at $4,000/month",
    marketPrice: "$7,000-25,000/month",
    benefits: ["Improve visibility by 90%", "Reduce costs by 25%", "Minimize risks"],
    setupTime: "5-8 weeks"
  },
  {
    title: "Quantum-Ready Security Platform",
    description: "Future-proof security solutions preparing for quantum computing era",
    icon: Lock,
    features: [
      "Quantum-Safe Encryption",
      "Post-Quantum Cryptography",
      "Hybrid Security Models",
      "Migration Planning",
      "Compliance Framework",
      "Risk Assessment"
    ],
    price: "Starting at $5,000/month",
    marketPrice: "$10,000-50,000/month",
    benefits: ["Future-proof security", "Quantum-ready infrastructure", "Enhanced protection"],
    setupTime: "6-12 weeks"
  }
];

const additionalServices = [
  {
    icon: Zap,
    name: 'API Rate Limiter & Analytics',
    description: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
    features: [
      'Dynamic rate limiting based on user tiers',
      'Real-time usage analytics and reporting',
      'API monetization and billing integration',
      'DDoS protection and abuse prevention',
      'Custom rate limiting rules',
      'Performance monitoring and optimization'
    ],
    pricing: '$199 – $1,999/month',
    timeline: '1–2 weeks',
    benefits: [
      'Improved API performance',
      'Better user experience',
      'Increased revenue potential',
      'Enhanced security'
    ],
    category: 'API Management'
  }
];

  const technologies = [;
  { name: 'Frontend', icon: Monitor, description: 'React, Next.js, Vue.js, Angular' },
    { name: 'Backend', icon: Server, description: 'Node.js, Python, Go, Java' },
    { name: 'Database', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Cloud', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
    { name: 'Security', icon: Shield, description: 'OAuth, JWT, SSL, Encryption' },
    { name: 'Mobile', icon: Smartphone, description: 'React Native, Flutter, PWA' }
  ];

  const benefits = [;
  {;
      title: 'Faster Development',
      description: 'Rapid prototyping and deployment',
      icon: Zap,
      stat: '50%'},
    {;
      title: 'Cost Effective',
      description: 'Lower development and maintenance costs',
      icon: TrendingUp,
      stat: '60%'},
    {;
      title: 'Scalable Solutions',
      description: 'Built to grow with your business',
      icon: Target,
      stat: 'Unlimited'},
    {;
      title: 'Custom Features',
      description: 'Tailored to your specific needs',
      icon: Settings,
      stat: '100%'}
  ];
>>>>>>> origin/automation-fixes

const whyChooseUs = [
  {
    title: "Rapid Development",
    description: "Fast delivery with agile methodologies and modern tech stack",
    icon: "⚡"
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your business from startup to enterprise",
    icon: "📈"
  },
  {
    title: "Cost-Effective",
    description: "Affordable pricing with transparent costs and no hidden fees",
    icon: "💰"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support and maintenance for your solutions",
    icon: "🛡️"
  }
];

export default function MicroSaasPage() {
<<<<<<< HEAD
=======
  const detailedServices = [
    {
      name: 'AI Content Generator Pro',
      tagline: 'Professional AI-powered content creation',
      price: '$49',
      period: '/month',
      description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant.',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (15+ languages)',
        'Brand voice customization',
        'Content templates library (100+ templates)',
        'Plagiarism-free writing guarantee',
        'Advanced content analytics',
        'Team collaboration tools',
        'API access for integrations'
      ],
      popular: true,
      icon: '📝',
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      link: 'https://contentgen.ziontechgroup.com',
      marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators',
      marketSize: '$15.8B content marketing industry',
      growthRate: '16.1% CAGR expected through 2030'
    },
    {
      name: 'Design System Builder',
      tagline: 'Automated design system management',
      price: '$79',
      period: '/month',
      description: 'Build and maintain consistent design systems with automated component generation and team collaboration.',
      features: [
        'Component library management',
        'Design token automation',
        'Style guide generation',
        'Design-to-code workflow',
        'Team collaboration tools',
        'Version control & history',
        'Design system analytics',
        'Integration with Figma, Sketch, Adobe XD'
      ],
      popular: false,
      icon: '🎨',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      link: 'https://design.ziontechgroup.com',
      marketPosition: 'Competitive with Zeroheight ($0-200), Frontify ($0-200), and InVision DSM ($0-100)',
      targetAudience: 'Design teams, product managers, and design system architects',
      marketSize: '$8.2B design tools market',
      growthRate: '12.3% CAGR expected through 2030'
    },
    {
      name: 'App Performance Monitor',
      tagline: 'Real-time performance monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights.',
      features: [
        'Performance metrics tracking',
        'Error monitoring & alerting',
        'User experience analytics',
        'Automated optimization',
        'Custom dashboards',
        'Real-time alerts',
        'Performance budgets',
        'Integration with popular frameworks'
      ],
      popular: false,
      icon: '📱',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://monitor.ziontechgroup.com',
      marketPosition: 'Competitive with Sentry ($26-80), LogRocket ($99-199), and New Relic ($0-99)',
      targetAudience: 'Developers, DevOps teams, and product managers',
      marketSize: '$4.1B application performance monitoring market',
      growthRate: '18.7% CAGR expected through 2030'
    },
    {
      name: 'SEO Automation Suite',
      tagline: 'Comprehensive SEO automation',
      price: '$89',
      period: '/month',
      description: 'Automate your SEO workflow with advanced tools for keyword research, optimization, and reporting.',
      features: [
        'Keyword research automation',
        'On-page optimization',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking',
        'Automated reporting',
        'SEO score monitoring',
        'Integration with Google Analytics & Search Console'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      link: 'https://seo.ziontechgroup.com',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and agencies',
      marketSize: '$68.8B SEO industry',
      growthRate: '14.2% CAGR expected through 2030'
    },
    {
      name: 'AI Chatbot Platform',
      tagline: 'Intelligent conversational AI',
      price: '$69',
      period: '/month',
      description: 'Build intelligent chatbots for customer support, lead generation, and user engagement.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Analytics & insights',
        'Custom training data',
        '24/7 availability',
        'Multi-language support',
        'Conversation flow builder',
        'Integration with popular platforms'
      ],
      popular: false,
      icon: '💬',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      link: 'https://chatbot.ziontechgroup.com',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($0-2500), and ManyChat ($0-15)',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses',
      marketSize: '$12.7B chatbot market',
      growthRate: '23.5% CAGR expected through 2030'
    },
    {
      name: 'Business Intelligence Hub',
      tagline: 'Data-driven insights platform',
      price: '$99',
      period: '/month',
      description: 'Transform your data into actionable insights with advanced analytics and automated reporting.',
      features: [
        'Data visualization tools',
        'Automated reporting',
        'KPI dashboards',
        'Predictive analytics',
        'Data integration',
        'Real-time data processing',
        'Custom metrics & calculations',
        'Team collaboration features'
      ],
      popular: false,
      icon: '📊',
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-400',
      link: 'https://bi.ziontechgroup.com',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000)',
      targetAudience: 'Data analysts, business intelligence teams, and executives',
      marketSize: '$29.5B business intelligence market',
      growthRate: '13.2% CAGR expected through 2030'
    },
    // New additional services
    {
      name: 'Email Marketing Automation',
      tagline: 'Advanced email campaign management',
      price: '$59',
      period: '/month',
      description: 'Create, automate, and optimize email marketing campaigns with AI-powered personalization.',
      features: [
        'AI-powered subject line optimization',
        'Behavioral email triggers',
        'A/B testing automation',
        'Advanced segmentation',
        'Email template builder',
        'Performance analytics',
        'GDPR compliance tools',
        'Integration with major CRMs'
      ],
      popular: false,
      icon: '📧',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://email.ziontechgroup.com',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($29-59), and ActiveCampaign ($29-259)',
      targetAudience: 'Digital marketers, e-commerce businesses, and content creators'
    },
    {
      name: 'Social Media Scheduler',
      tagline: 'Intelligent social media management',
      price: '$44',
      period: '/month',
      description: 'Schedule, analyze, and optimize your social media presence across all platforms.',
      features: [
        'Multi-platform scheduling',
        'AI-powered content optimization',
        'Best time to post analysis',
        'Content calendar management',
        'Social media analytics',
        'Hashtag research tools',
        'Team collaboration',
        'Automated responses'
      ],
      popular: false,
      icon: '📱',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://social.ziontechgroup.com',
      marketPosition: 'Competitive with Buffer ($15-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, influencers, and marketing teams'
    },
    {
      name: 'Customer Feedback Analytics',
      tagline: 'Actionable customer insights platform',
      price: '$79',
      period: '/month',
      description: 'Collect, analyze, and act on customer feedback to improve your products and services.',
      features: [
        'Multi-channel feedback collection',
        'Sentiment analysis',
        'Feedback categorization',
        'Action item tracking',
        'Customer satisfaction metrics',
        'Integration with CRM systems',
        'Automated reporting',
        'Team collaboration tools'
      ],
      popular: false,
      icon: '💡',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://feedback.ziontechgroup.com',
      marketPosition: 'Competitive with UserVoice ($15-500), Productboard ($20-2000), and Canny ($50-400)',
      targetAudience: 'Product managers, customer success teams, and UX researchers'
    },
    {
      name: 'Invoice & Billing Manager',
      tagline: 'Streamlined financial operations',
      price: '$34',
      period: '/month',
      description: 'Automate invoicing, payment processing, and financial reporting for small businesses.',
      features: [
        'Automated invoice generation',
        'Payment gateway integration',
        'Recurring billing setup',
        'Expense tracking',
        'Financial reporting',
        'Tax calculation',
        'Multi-currency support',
        'Client portal access'
      ],
      popular: false,
      icon: '💰',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://billing.ziontechgroup.com',
      marketPosition: 'Competitive with FreshBooks ($15-55), Wave (Free), and QuickBooks ($30-200)',
      targetAudience: 'Freelancers, small businesses, and accounting professionals'
    },
    {
      name: 'Project Management Hub',
      tagline: 'Collaborative project organization',
      price: '$54',
      period: '/month',
      description: 'Streamline project workflows with task management, team collaboration, and progress tracking.',
      features: [
        'Kanban and Gantt views',
        'Time tracking integration',
        'Team collaboration tools',
        'Resource allocation',
        'Progress reporting',
        'File sharing & storage',
        'Mobile app access',
        'API integrations'
      ],
      popular: false,
      icon: '📋',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://projects.ziontechgroup.com',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Monday.com ($8-16), and ClickUp ($5-12)',
      targetAudience: 'Project managers, development teams, and creative agencies',
      marketSize: '$6.8B project management software market',
      growthRate: '17.4% CAGR expected through 2030'
    },
    {
      name: 'Customer Support Suite',
      tagline: 'Comprehensive support management',
      price: '$74',
      period: '/month',
      description: 'Manage customer inquiries, tickets, and support operations with AI-powered automation.',
      features: [
        'Ticket management system',
        'AI-powered response suggestions',
        'Knowledge base builder',
        'Live chat integration',
        'Customer satisfaction surveys',
        'Support analytics',
        'Multi-language support',
        'Integration with popular platforms'
      ],
      popular: false,
      icon: '🔌',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      link: 'https://api.ziontechgroup.com',
      marketPosition: 'Competitive with Kong ($250-500), AWS API Gateway ($3.50/million calls), and Azure API Management ($0.50-4.00)',
      targetAudience: 'Developers, DevOps engineers, and platform architects'
    },
    {
      name: 'AI Video Generator',
      tagline: 'Professional video content creation',
      price: '$89',
      period: '/month',
      description: 'Create engaging video content with AI-powered editing, templates, and automated workflows.',
      features: [
        'AI-powered video editing',
        'Template library (500+ templates)',
        'Automated caption generation',
        'Multi-format export',
        'Brand kit integration',
        'Collaborative editing',
        'Analytics & performance tracking',
        'Integration with social platforms'
      ],
      popular: true,
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://video.ziontechgroup.com',
      marketPosition: 'Competitive with Synthesia ($30-165), Lumen5 ($19-79), and InVideo ($15-149)',
      targetAudience: 'Content creators, marketers, social media managers, and businesses'
    },
    {
      name: 'E-commerce Analytics Suite',
      tagline: 'Comprehensive e-commerce insights',
      price: '$79',
      period: '/month',
      description: 'Track, analyze, and optimize your e-commerce performance with advanced analytics and automation.',
      features: [
        'Conversion funnel analysis',
        'Customer behavior tracking',
        'Inventory optimization',
        'Revenue forecasting',
        'A/B testing automation',
        'Customer lifetime value analysis',
        'Multi-store management',
        'Integration with major platforms'
      ],
      popular: false,
      icon: '🛒',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ecommerce.ziontechgroup.com',
      marketPosition: 'Competitive with Google Analytics 4 (Free), Hotjar ($32-500), and Crazy Egg ($24-99)',
      targetAudience: 'E-commerce businesses, online retailers, and digital marketers'
    },
    {
      name: 'HR Management Platform',
      tagline: 'Streamlined human resources operations',
      price: '$69',
      period: '/month',
      description: 'Manage recruitment, onboarding, performance, and employee engagement in one integrated platform.',
      features: [
        'Applicant tracking system',
        'Employee onboarding automation',
        'Performance management',
        'Time tracking & attendance',
        'Payroll integration',
        'Employee self-service portal',
        'Compliance monitoring',
        'Analytics & reporting'
      ],
      popular: false,
      icon: '👥',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      link: 'https://hr.ziontechgroup.com',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Gusto ($40-80), and Zenefits ($10-27)',
      targetAudience: 'Small to medium businesses, HR professionals, and growing companies'
    },
    {
      name: 'Legal Document Automation',
      tagline: 'AI-powered legal document generation',
      price: '$99',
      period: '/month',
      description: 'Generate, review, and manage legal documents with AI assistance and compliance monitoring.',
      features: [
        'Document template library',
        'AI-powered document review',
        'Compliance checking',
        'Electronic signature integration',
        'Document version control',
        'Legal research assistance',
        'Client portal access',
        'Integration with legal software'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://legal.ziontechgroup.com',
      marketPosition: 'Competitive with DocuSign ($10-25), PandaDoc ($19-99), and HelloSign ($15-25)',
      targetAudience: 'Law firms, legal professionals, and businesses requiring legal documentation'
    },
    {
      name: 'Inventory Management System',
      tagline: 'Smart inventory optimization',
      price: '$59',
      period: '/month',
      description: 'Optimize inventory levels, reduce costs, and improve supply chain efficiency with AI-powered insights.',
      features: [
        'Real-time inventory tracking',
        'Demand forecasting',
        'Automated reorder points',
        'Multi-location management',
        'Barcode scanning integration',
        'Supplier management',
        'Cost analysis & reporting',
        'Mobile app access'
      ],
      popular: false,
      icon: '📦',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://inventory.ziontechgroup.com',
      marketPosition: 'Competitive with TradeGecko ($39-199), Zoho Inventory ($39-239), and Fishbowl ($4,395)',
      targetAudience: 'Retailers, manufacturers, distributors, and e-commerce businesses'
    },
    {
      name: 'Customer Support Hub',
      tagline: 'Unified customer support platform',
      price: '$49',
      period: '/month',
      description: 'Centralize customer support across all channels with AI-powered automation and analytics.',
      features: [
        'Multi-channel ticket management',
        'AI-powered response suggestions',
        'Knowledge base management',
        'Customer satisfaction surveys',
        'Performance analytics',
        'Team collaboration tools',
        'Integration with CRM systems',
        'Mobile app for agents'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-green-500 to-teal-600',
      textColor: 'text-green-400',
      link: 'https://support.ziontechgroup.com',
      marketPosition: 'Competitive with Zendesk ($19-99), Freshdesk ($15-99), and Help Scout ($20-65)',
      targetAudience: 'Customer support teams, service businesses, and e-commerce companies'
    },
    {
      name: 'Financial Planning & Budgeting',
      tagline: 'Personal and business financial management',
      price: '$39',
      period: '/month',
      description: 'Plan, track, and optimize your finances with AI-powered insights and automated budgeting.',
      features: [
        'Automated expense tracking',
        'Budget planning & monitoring',
        'Investment portfolio analysis',
        'Financial goal setting',
        'Tax planning assistance',
        'Multi-account aggregation',
        'Financial reporting',
        'Mobile app with notifications'
      ],
      popular: false,
      icon: '📈',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      link: 'https://finance.ziontechgroup.com',
      marketPosition: 'Competitive with Mint (Free), YNAB ($11.99), and Personal Capital (Free)',
      targetAudience: 'Individuals, small businesses, and financial advisors'
    },
    {
      name: 'Learning Management System',
      tagline: 'Corporate training and education platform',
      price: '$89',
      period: '/month',
      description: 'Create, deliver, and track corporate training programs with advanced analytics and engagement tools.',
      features: [
        'Course creation tools',
        'Interactive assessments',
        'Progress tracking',
        'Gamification elements',
        'Mobile learning support',
        'Analytics & reporting',
        'Integration with HR systems',
        'White-label customization'
      ],
      popular: false,
      icon: '🎓',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://learning.ziontechgroup.com',
      marketPosition: 'Competitive with Udemy Business ($360-720), Coursera for Business ($399-399), and LinkedIn Learning ($29.99)',
      targetAudience: 'Corporate training departments, educational institutions, and training providers'
    },
    {
      name: 'Real Estate Management Platform',
      tagline: 'Comprehensive property management solution',
      price: '$79',
      period: '/month',
      description: 'Manage properties, tenants, and maintenance with integrated tools for real estate professionals.',
      features: [
        'Property portfolio management',
        'Tenant screening & management',
        'Maintenance request tracking',
        'Financial reporting',
        'Document management',
        'Market analysis tools',
        'Mobile app for tenants',
        'Integration with accounting software'
      ],
      popular: false,
      icon: '🏠',
      color: 'from-amber-500 to-yellow-600',
      textColor: 'text-amber-400',
      link: 'https://realestate.ziontechgroup.com',
      marketPosition: 'Competitive with Buildium ($50-460), AppFolio ($1.40-3.00), and Rent Manager ($1-2)',
      targetAudience: 'Property managers, real estate investors, and property management companies'
    }
  ];

  const marketTrends = [
    {
      trend: 'AI-First Approach',
      description: 'Businesses are increasingly adopting AI-powered tools for automation and insights',
      impact: 'High demand for intelligent automation solutions',
      opportunity: 'Our AI-first approach positions us ahead of traditional tools'
    },
    {
      trend: 'Micro SaaS Growth',
      description: 'Small, focused SaaS solutions are gaining popularity over large, complex platforms',
      impact: 'Growing market for specialized business tools',
      opportunity: 'Our focused micro SaaS approach aligns with market preferences'
    },
    {
      title: 'Focus on Specialization',
      description: 'Unlike broad platforms, our micro SaaS solutions focus on specific use cases, delivering deeper functionality and better user experience.',
      stats: '3x faster time-to-value'
    },
    {
      title: 'Market Validation',
      description: 'All services are based on validated market needs with proven demand and competitive positioning.',
      stats: '12 validated solutions'
    }
  ];

  const industryTrends = [
    {
      trend: 'AI Integration',
      description: 'Every service includes AI-powered features for enhanced automation and intelligence.',
      impact: 'High'
    },
    {
      trend: 'API-First Design',
      description: 'All services provide robust APIs for seamless integration with existing workflows.',
      impact: 'High'
    },
    {
      trend: 'Mobile Optimization',
      description: 'Responsive design and mobile apps for all services ensure accessibility anywhere.',
      impact: 'Medium'
    },
    {
      trend: 'Security Focus',
      description: 'Enterprise-grade security and compliance built into every service.',
      impact: 'High'
    }
  ];

>>>>>>> origin/automation/changelog
  return (
    <Layout 
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Discover our comprehensive collection of micro SaaS applications designed to solve specific business problems with powerful, focused solutions."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro <span className="text-blue-600">SaaS Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Powerful, focused applications that solve specific business problems. 
                From AI content generation to project management tools.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/pricing" 
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive micro SaaS applications designed to meet your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                        <span>Pricing</span>
                        <span className="font-semibold text-gray-900">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                        <span>Setup Time</span>
                        <span className="font-semibold text-gray-900">{service.setupTime}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Target Users:</span> {service.targetUsers}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href="/contact" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center block"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let our micro SaaS solutions help you automate, optimize, and scale your business operations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/pricing" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
  'Security',
  'Storage',
  'Web Development',
  'CRM'
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Innovative micro SaaS solutions for modern businesses. Custom automation tools, data processing, and API integrations to accelerate your growth."
      keywords="micro SaaS, SaaS development, automation tools, API integration, business intelligence, custom software"
      canonical="https://ziontechgroup.com/micro-saas"
    >
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovative 
              <span className="text-purple-400"> Micro SaaS Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with our cutting-edge micro SaaS platforms. 
              From workflow automation to data processing, we create powerful tools 
              that drive efficiency and growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, focused solutions designed to solve specific business challenges and drive operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <solution.icon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                
                {/* Features */}
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {solution.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
=======
      <section className=bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 sm: py-24 md:py-32">;
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8>;
          <div className=mx-auto max-w-3xl text-center">;
            <div className="flex items-center justify-center mb-6>;
              <Code className=h-12 w-12 text-orange-600 mr-4" />;
              <Award className="h-6 w-6 text-orange-600 mr-2 />;
              <span className=text-base font-semibold leading-7 text-orange-600">Micro SaaS</span>;
            </div>;
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl>;
              Micro SaaS Solutions;
            </h1>;
            <p className=mt-6 text-lg leading-8 text-gray-600">;
              Custom software solutions that solve specific business problems. From concept to deployment,
              we build scalable micro SaaS applications tailored to your needs.;
            </p>;
            <div className="mt-10 flex items-center justify-center gap-x-6>;
              <Link;
                href=/contact";
                className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600;
              >;
                Get Started;
                <ArrowRight className=ml-2 h-4 w-4 inline" />;
              </Link>;
              <Link;
                href="/pricing-guide;
                className=text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600">;
                View Pricing <span aria-hidden="true>→</span>;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className=py-24 sm: py-32 bg-white">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8>;
          <div className=mx-auto max-w-2xl text-center mb-16">;
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl>;
              Why Choose Our Micro SaaS Solutions?;
            </h2>;
            <p className=mt-6 text-lg leading-8 text-gray-600">;
              Proven expertise in building scalable, secure, and innovative software solutions;
            </p>;
          </div>;
          <div className="grid grid-cols-1 gap-8 sm: grid-cols-2 lg:grid-cols-4>;
            {benefits.map((benefit, index) => (;
              <div key={index} className=text-center">;
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4>;
                  <benefit.icon className=h-8 w-8 text-orange-600" />;
                </div>;
                <h3 className="text-2xl font-bold text-gray-900 mb-2>{benefit.stat}</h3>;
                <h4 className=text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>;
                <p className="text-gray-600>{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Technologies Section */}
      <section className=py-24 sm: py-32 bg-gray-50">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8>;
          <div className=mx-auto max-w-2xl text-center mb-16">;
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl>;
              Technologies We Use;
            </h2>;
            <p className=mt-6 text-lg leading-8 text-gray-600">;
              Modern, proven technologies for building robust and scalable applications;
            </p>;
          </div>;
          <div className="grid grid-cols-1 gap-8 sm: grid-cols-2 lg:grid-cols-3>;
            {technologies.map((tech, index) => (;
              <div key={index} className=bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">;
                <div className="flex items-center mb-4>;
                  <div className=flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">;
                    <tech.icon className="h-6 w-6 text-orange-600 />;
                  </div>;
                  <h3 className=text-lg font-semibold text-gray-900 ml-4">{tech.name}</h3>;
                </div>;
                <p className="text-gray-600>{tech.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Micro SaaS Services Grid */}
      <section className=py-24 sm: py-32 bg-white">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8>;
          <div className=mx-auto max-w-2xl text-center mb-16">;
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl>;
              Our Micro SaaS Portfolio;
            </h2>;
            <p className=mt-6 text-lg leading-8 text-gray-600">;
              Custom software solutions tailored to your business needs. All applications include design,
              development, testing, and deployment. Our innovative micro SaaS solutions are designed to ;
              solve specific business challenges with cutting-edge technology and proven methodologies. ;
              Contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-orange-600 hover:text-orange-500 font-semibold">;
                kleber@ziontechgroup.com;
              </a>{' '}
              or call{' '}
              <a href="tel:+13024640950" className="text-orange-600 hover:text-orange-500 font-semibold">;
                +1 302 464 0950;
              </a>{' '}
              for custom pricing and free consultation. Visit us at 364 E Main St STE 1008, Middletown DE 19709.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 gap-8 lg: grid-cols-2>;
            {microSaaSServices.map((service, index) => (;
              <div key={index} className=group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">;
                <div className="flex items-center gap-x-3 mb-6>;
                  <div className=flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors">;
                    <service.icon className="h-7 w-7 text-white />;
                  </div>;
                  <div>;
                    <h3 className=text-xl font-semibold text-gray-900">{service.title}</h3>;
                    <p className="text-sm text-orange-600 font-medium>{service.category}</p>;
                  </div>;
                </div>;
                <p className=text-gray-600 mb-6">{service.description}</p>;
                <ul className="space-y-3 mb-6>;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className=flex items-center gap-x-3">;
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 />;
                      <span className=text-sm text-gray-700">{feature}</span>;
                    </li>;
>>>>>>> origin/automation-fixes
                  ))}
                  {solution.features.length > 4 && (
                    <li className="text-purple-600 font-medium">
                      +{solution.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* Benefits */}
                {solution.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-purple-500 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-purple-600">{solution.price}</span>
                    {solution.setupTime && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {solution.setupTime}
                      </span>
                    )}
                  </div>
                  {solution.marketPrice && (
                    <p className="text-xs text-gray-500">
                      Market rate: {solution.marketPrice}
                    </p>
                  )}
                </div>
              </motion.div>
=======
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Real solutions with comprehensive market research, competitive analysis, and proven business models. 
            Each service is designed to solve specific business problems with AI-powered automation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-sm text-gray-400">Services</div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Specialized Tools for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Every Business Need</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-12">
              20 specialized micro SaaS solutions covering content creation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media management, 
              customer feedback, billing, project management, API infrastructure, video generation, e-commerce analytics,
              HR management, legal automation, inventory management, customer support, financial planning, learning management,
              and real estate management. Focused, affordable solutions that deliver specific value without the complexity 
              of enterprise platforms. Start with a free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

        {/* Market Insights */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Understand the advantages of our focused approach and competitive market positioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketInsights.map((insight, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{insight.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{insight.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                    {insight.stats}
                  </div>
                  </section>

      {/* Features Section */};
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div;
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Micro SaaS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for modern businesses that need fast, reliable, and scalable solutions.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {}
              const IconComponent = feature.icon;
              return ()
                <motion.div;
                  key={index};
className="text-center p-6 rounded-lg hover: bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.1 }};
                  viewport={{ once: true }};
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title};
                  </h3>
                  <p className="text-gray-600">
                    {feature.description};
                  </p>
                  </motion.div>
              );
            })};
          </div>
                  </div>
                  </section>

      {/* Benefits Section */};
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div;
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Micro SaaS solutions deliver measurable business impact.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {}
              const IconComponent = benefit.icon;
              return ()
                <motion.div;
                  key={index};
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.1 }};
                  viewport={{ once: true }};
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {benefit.stat};
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title};
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description};
                  </p>
                  </motion.div>
              );
            })};
          </div>
                  </div>
                  </section>

      {/* Pricing Section */};
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div;
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl shadow-lg ${
                  tier.popular ? "bg-purple-50 border-2 border-purple-200" : 'bg-white'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (})
                  <div className="text-center mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular;
                    </span>
                  </div>
                )};
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name};
                </h3>
                  <p className="text-gray-600 mb-6">
                  {tier.description};
                </p>
                  <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SAAS Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions are designed with your business success in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
=======
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

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with your micro SAAS solution in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today to discuss your micro SAAS needs and get a personalized solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </Link>
                <Link href="/ai-services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${`}
                    tier.popular;
? 'bg-purple-600 hover: bg-purple-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`};`
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  </motion.div>
            ))};
          </div>
                  </div>
                  </section>

      {/* Contact Information Section */};
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div;
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started Today;
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with cutting-edge micro SaaS solutions? Our expert team is here to help you build, deploy, and scale your next-generation software products. Contact us for a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketTrends.map((trend, index) => (
              <Card
                key={index}
                className="border-gradient-blue hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{trend.trend}</h3>
                    <p className="text-gray-400 mb-4">{trend.description}</p>
                    <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2">Market Impact</h4>
                      <p className="text-gray-300 text-sm mb-3">{trend.impact}</p>
                      <h4 className="text-green-400 font-semibold mb-2">Our Opportunity</h4>
                      <p className="text-gray-300 text-sm">{trend.opportunity}</p>
                    </div>
                  </div>
                </div>
              </Card>
>>>>>>> origin/automation/changelog
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our micro SaaS solutions are tailored to meet the unique needs of various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Micro SaaS Solution?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their micro SaaS needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
=======
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowRight,CheckCircle,Clock,Star,Zap,Shield,Users,Mail,FileText,BarChart3,ShoppingCart,Calendar,MessageSquare,Search,Eye,Target,TrendingUp,Globe,Lock,Cpu,Bot,Image,Video,Mic,Code,Settings,Monitor,Smartphone,Cloud,Server,Network,Car,Rocket,Heart,Building,Sprout,DollarSign,Award,Phone,MapPin } from 'lucide-react'; import Navigation from '../components/Navigation'; import Footer from '../components/Footer'; export default function MicroSaaS() { const title = 'Micro SaaS Solutions — Zion Tech Group'; const description = 'Innovative micro SaaS applications that transform business operations and boost productivity. Real solutions for real problems.'; const microSaaSServices = [ { title: 'AI-Powered Email Follow-Up Automation',description: 'Intelligent email follow-up system that maintains engagement with leads and customers automatically',icon: Mail,features: [ 'Automated follow-up sequences based on customer behavior','AI-powered personalization and timing optimization','Multi-channel follow-up (email,SMS,social media)','Lead scoring and qualification automation','Integration with CRM and marketing tools','A/B testing and performance analytics' ],pricing: '$97 - $497/month',delivery: '1-2 weeks',category: 'Communication',marketPrice: '$150 - $800/month',benefits: [ 'Increase lead conversion by 40-60%','Save 15+ hours per week on manual follow-ups','Improve customer engagement and retention','Reduce missed opportunities by 80%' ] },{ title: 'E-Commerce Return Management System',description: 'Complete return processing automation for online retailers with intelligent routing and analytics',icon: ShoppingCart,features: [ 'Automated return request processing','Smart return label generation and tracking','Return reason analysis and reporting','Inventory management integration','Customer communication automation','Fraud detection and prevention' ],pricing: '$197 - $997/month',delivery: '2-3 weeks',category: 'E-Commerce',marketPrice: '$300 - $1,500/month',benefits: [ 'Reduce return processing time by 70%','Improve customer satisfaction scores','Minimize return fraud by 90%','Increase operational efficiency by 50%' ] },{ title: 'AI Content Creation Suite',description: 'Comprehensive content generation platform for blogs,social media,and marketing materials',icon: FileText,features: [ 'AI-powered blog post and article generation','Social media content creation and scheduling','SEO-optimized content with keyword integration','Multi-language content generation','Brand voice consistency and tone matching','Content performance analytics and optimization' ],pricing: '$147 - $697/month',delivery: '1-2 weeks',category: 'Content Marketing',marketPrice: '$200 - $1,000/month',benefits: [ 'Generate 10x more content in the same time','Improve SEO rankings and organic traffic','Maintain consistent brand voice across channels','Reduce content creation costs by 60%' ] },{ title: 'Smart Event Management Platform',description: 'All-in-one event planning and management solution with AI-powered insights',icon: Calendar,features: [ 'Event registration and ticketing system','AI-powered attendee matching and networking','Real-time event analytics and insights','Automated email campaigns and reminders','Mobile app for attendees and organizers','Integration with payment and CRM systems' ],pricing: '$297 - $1,497/month',delivery: '3-4 weeks',category: 'Event Management',marketPrice: '$500 - $2,500/month',benefits: [ 'Increase event attendance by 35%','Improve attendee satisfaction and engagement','Reduce event management workload by 50%','Generate valuable attendee insights and data' ] },{ title: 'AI-Powered Customer Support Platform',description: 'Intelligent customer support system with automated responses and escalation',icon: MessageSquare,features: [ 'AI chatbot with natural language processing','Automated ticket routing and prioritization','Knowledge base with intelligent search','Multi-channel support (email,chat,phone)','Sentiment analysis and customer satisfaction tracking','Integration with existing support tools' ],pricing: '$197 - $997/month',delivery: '2-3 weeks',category: 'Customer Support',marketPrice: '$300 - $1,500/month',benefits: [ 'Reduce response time by 80%','Improve customer satisfaction by 45%','Handle 70% of inquiries automatically','Reduce support team workload by 60%' ] },{ title: 'Intelligent Project Management Tool',description: 'AI-enhanced project management with predictive analytics and automation',icon: Target,features: [ 'AI-powered task prioritization and scheduling','Predictive project timeline and risk analysis','Automated resource allocation and optimization','Real-time collaboration and communication tools','Performance analytics and reporting','Integration with popular project management tools' ],pricing: '$147 - $697/month',delivery: '2-4 weeks',category: 'Project Management',marketPrice: '$200 - $1,200/month',benefits: [ 'Improve project delivery time by 30%','Reduce project overruns by 50%','Increase team productivity by 40%','Better resource utilization and planning' ] },{ title: 'AI-Powered Social Media Management',description: 'Complete social media automation with intelligent content scheduling and analytics',icon: Globe,features: [ 'AI-powered content creation and curation','Optimal posting time optimization','Hashtag research and trending topic analysis','Multi-platform posting and scheduling','Engagement tracking and analytics','Influencer identification and outreach automation' ],pricing: '$97 - $497/month',delivery: '1-2 weeks',category: 'Social Media',marketPrice: '$150 - $800/month',benefits: [ 'Increase social media engagement by 60%','Save 20+ hours per week on social media management','Improve brand visibility and reach','Generate more qualified leads from social media' ] },{ title: 'Smart Inventory Management System',description: 'AI-driven inventory optimization with demand forecasting and automated reordering',icon: Package,features: [ 'AI-powered demand forecasting','Automated reorder point calculations','Multi-location inventory tracking','Supplier performance analytics','Integration with e-commerce platforms','Real-time inventory alerts and notifications' ],pricing: '$247 - $1,247/month',delivery: '3-4 weeks',category: 'Inventory Management',marketPrice: '$400 - $2,000/month',benefits: [ 'Reduce inventory costs by 25%','Minimize stockouts by 80%','Improve cash flow and working capital','Optimize supplier relationships and costs' ] },{ title: 'AI-Powered Lead Scoring Platform',description: 'Intelligent lead qualification and scoring system for sales teams',icon: TrendingUp,features: [ 'AI-powered lead scoring algorithms','Behavioral tracking and analysis','Lead nurturing automation','Sales team notifications and alerts','CRM integration and data synchronization','Performance analytics and optimization' ],pricing: '$147 - $697/month',delivery: '2-3 weeks',category: 'Sales Automation',marketPrice: '$200 - $1,200/month',benefits: [ 'Increase lead conversion by 50%','Improve sales team efficiency by 40%','Reduce time spent on unqualified leads','Better sales pipeline visibility and forecasting' ] },{ title: 'Automated Invoice Processing System',description: 'AI-powered invoice processing with automated data extraction and approval workflows',icon: FileText,features: [ 'OCR and data extraction from invoices','Automated approval workflows','Three-way matching and validation','Integration with accounting systems','Exception handling and manual review queues','Compliance and audit trail maintenance' ],pricing: '$197 - $997/month',delivery: '2-4 weeks',category: 'Finance & Accounting',marketPrice: '$300 - $1,500/month',benefits: [ 'Reduce invoice processing time by 85%','Eliminate manual data entry errors','Improve cash flow management','Ensure compliance and audit readiness' ] },{ title: 'AI-Powered Employee Onboarding Platform',description: 'Streamlined employee onboarding with automated workflows and personalized experiences',icon: Users,features: [ 'Automated onboarding workflow creation','Digital document collection and verification','Personalized training and development plans','Progress tracking and milestone management','Integration with HR and payroll systems','Compliance tracking and reporting' ],pricing: '$97 - $497/month',delivery: '2-3 weeks',category: 'Human Resources',marketPrice: '$150 - $800/month',benefits: [ 'Reduce onboarding time by 60%','Improve new hire satisfaction and retention','Ensure compliance with employment regulations','Streamline HR administrative processes' ] },{ title: 'Smart Analytics Dashboard',description: 'AI-powered business intelligence platform with predictive analytics and insights',icon: BarChart3,features: [ 'Real-time data visualization and dashboards','AI-powered insights and recommendations','Predictive analytics and forecasting','Custom report generation and scheduling','Data integration from multiple sources','Mobile-responsive design and accessibility' ],pricing: '$197 - $997/month',delivery: '3-4 weeks',category: 'Business Intelligence',marketPrice: '$300 - $1,500/month',benefits: [ 'Make data-driven decisions faster','Identify business opportunities and risks','Improve operational efficiency','Gain competitive advantage through insights' ] } ]; const categories = [...new Set(microSaaSServices.map(service => service.category))]; return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <link rel="canonical" href="https: <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:url" content="https: <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content={title} /> <meta name="twitter:description" content={description} /> </Head> <Navigation /> <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"> {} <section className="relative py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Micro SaaS Solutions </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Innovative micro SaaS applications that solve real business problems. Transform your operations with our intelligent,cost-effective solutions. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Get Started Today <ArrowRight className="ml-2 h-5 w-5" /> </Link> <Link href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200" > View Pricing </Link> </div> </div> </section> {} <section className="py-16 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> <div className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">50+</div> <div className="text-gray-600">Micro SaaS Solutions</div> </div> <div className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">500+</div> <div className="text-gray-600">Happy Customers</div> </div> <div className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div> <div className="text-gray-600">Uptime Guarantee</div> </div> <div className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div> <div className="text-gray-600">Support Available</div> </div> </div> </div> </section> {} <section className="py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Micro SaaS Solutions </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose from our comprehensive suite of micro SaaS applications designed to solve specific business challenges </p> </div> {} <div className="flex flex-wrap justify-center gap-4 mb-12"> <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold"> All Categories </button> {categories.map((category) => ( <button key={category} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-blue-100 hover:text-blue-700 transition-colors" > {category} </button> ))} </div> {} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {microSaaSServices.map((service,index) => ( <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100" > <div className="flex items-center mb-4"> <div className="p-3 bg-blue-100 rounded-lg mr-4"> <service.icon className="h-8 w-8 text-blue-600" /> </div> <div> <h3 className="text-xl font-bold text-gray-900 mb-1"> {service.title} </h3> <span className="text-sm text-blue-600 font-semibold"> {service.category} </span> </div> </div> <p className="text-gray-600 mb-4"> {service.description} </p> <div className="mb-4"> <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4> <ul className="space-y-1"> {service.features.slice(0,3).map((feature,idx) => ( <li key={idx} className="flex items-center text-sm text-gray-600"> <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" /> {feature} </li> ))} </ul> </div> <div className="mb-4"> <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4> <ul className="space-y-1"> {service.benefits.slice(0,2).map((benefit,idx) => ( <li key={idx} className="flex items-center text-sm text-gray-600"> <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" /> {benefit} </li> ))} </ul> </div> <div className="border-t pt-4 mb-4"> <div className="flex justify-between items-center mb-2"> <span className="text-sm text-gray-600">Our Pricing:</span> <span className="text-lg font-bold text-blue-600"> {service.pricing} </span> </div> <div className="flex justify-between items-center mb-2"> <span className="text-sm text-gray-600">Market Price:</span> <span className="text-sm text-gray-500 line-through"> {service.marketPrice} </span> </div> <div className="flex justify-between items-center"> <span className="text-sm text-gray-600">Delivery:</span> <span className="text-sm text-gray-600 flex items-center"> <Clock className="h-4 w-4 mr-1" /> {service.delivery} </span> </div> </div> <Link href="/contact" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Get Started <ArrowRight className="ml-2 h-4 w-4" /> </Link> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Contact us today to discuss your specific needs and get a customized micro SaaS solution that fits your business perfectly. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center" > <Phone className="mr-2 h-5 w-5" /> Call +1 302 464 0950 </Link> <Link href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > <Mail className="mr-2 h-5 w-5" /> Send Email </Link> </div> </div> </section> </main> <Footer /> </> )}
>>>>>>> origin/automation-improvements
