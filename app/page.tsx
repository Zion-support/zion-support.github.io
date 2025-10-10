'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code } from 'lucide-react';
import Footer from './components/Footer';

// Service data
const microSAASServices = [
  {
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics and automated resource allocation",
    price: "$99/mo",
    features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
    category: "Productivity",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-project-manager"
  },
  {
    name: "AI Analytics Dashboard",
    description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
    price: "$149/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
    category: "Analytics",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-analytics-dashboard"
  },
  {
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing and instant responses",
    price: "$199/mo",
    features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
    category: "Support",
    popular: false,
    icon: Users,
    link: "https://ziontechgroup.com/ai-customer-support-bot"
  },
  {
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing and editing tools",
    price: "$79/mo",
    features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice"],
    category: "Content",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-content-generation"
  },
  {
    name: "AI Social Media Manager",
    description: "Automated social media management with AI-powered content creation and scheduling",
    price: "$129/mo",
    features: ["Auto Posting", "Content Creation", "Analytics", "Engagement Tracking"],
    category: "Marketing",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-social-media-manager"
  },
  {
    name: "AI Email Marketing Suite",
    description: "Intelligent email campaigns with AI-powered personalization and optimization",
    price: "$89/mo",
    features: ["Smart Segmentation", "A/B Testing", "Automation", "Performance Analytics"],
    category: "Marketing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-marketing"
  },
  {
    name: "AI Financial Advisor",
    description: "Personalized financial planning and investment advice powered by advanced AI algorithms",
    price: "$199/mo",
    features: ["Portfolio Analysis", "Risk Assessment", "Investment Recommendations", "Tax Optimization"],
    category: "Finance",
    popular: false,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-financial-advisor"
  },
  {
    name: "AI Workflow Automation",
    description: "Visual workflow builder with AI-powered process optimization and automation",
    price: "$159/mo",
    features: ["Visual Builder", "Process Optimization", "Integration Hub", "Performance Monitoring"],
    category: "Automation",
    popular: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-workflow-automation"
  },
  {
    name: "AI Smart Calendar",
    description: "Intelligent scheduling and time management with AI-powered optimization",
    price: "$69/mo",
    features: ["Smart Scheduling", "Conflict Resolution", "Time Optimization", "Meeting Analytics"],
    category: "Productivity",
    popular: true,
    icon: Clock,
    link: "https://ziontechgroup.com/ai-smart-calendar"
  },
  {
    name: "AI Video Generator",
    description: "AI-powered video creation with automated editing and professional templates",
    price: "$179/mo",
    features: ["Auto Editing", "Template Library", "Voice Synthesis", "Multi-format Export"],
    category: "Content",
    popular: true,
    icon: Video,
    link: "https://ziontechgroup.com/ai-video-generator"
  },
  {
    name: "AI CRM Assistant",
    description: "Intelligent customer relationship management with AI-powered insights and automation",
    price: "$139/mo",
    features: ["Lead Scoring", "Sales Forecasting", "Customer Insights", "Automation Rules"],
    category: "Sales",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-crm-assistant"
  },
  {
    name: "AI Logo Designer Pro",
    description: "AI-powered logo design with brand analysis and unlimited iterations",
    price: "$79/mo",
    features: ["Brand Analysis", "Unlimited Iterations", "Vector Export", "Brand Guidelines"],
    category: "Design",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-logo-designer"
  },
  {
    name: "AI Invoice Generator",
    description: "Automated invoice creation with smart templates and payment tracking",
    price: "$49/mo",
    features: ["Auto Generation", "Payment Tracking", "Tax Calculations", "Multi-currency"],
    category: "Finance",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-invoice-generator"
  },
  {
    name: "AI Expense Tracker",
    description: "Smart expense management with receipt scanning and categorization",
    price: "$39/mo",
    features: ["Receipt Scanning", "Auto Categorization", "Tax Reports", "Budget Alerts"],
    category: "Finance",
    popular: true,
    icon: Calculator,
    link: "https://ziontechgroup.com/ai-expense-tracker"
  },
  {
    name: "AI Lead Generation",
    description: "Automated lead discovery and qualification with AI-powered prospecting",
    price: "$199/mo",
    features: ["Lead Discovery", "Contact Enrichment", "Qualification Scoring", "CRM Integration"],
    category: "Sales",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-lead-generation"
  },
  {
    name: "AI HR Assistant",
    description: "Intelligent human resources management with automated screening and onboarding",
    price: "$149/mo",
    features: ["Resume Screening", "Interview Scheduling", "Onboarding Automation", "Performance Tracking"],
    category: "HR",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-hr-assistant"
  },
  {
    name: "AI Legal Assistant",
    description: "Legal document analysis and contract review with AI-powered insights",
    price: "$299/mo",
    features: ["Contract Review", "Legal Research", "Document Analysis", "Compliance Checking"],
    category: "Legal",
    popular: false,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-legal-assistant"
  },
  {
    name: "AI Inventory Manager",
    description: "Smart inventory optimization with demand forecasting and automated reordering",
    price: "$179/mo",
    features: ["Demand Forecasting", "Auto Reordering", "Stock Optimization", "Supplier Management"],
    category: "Operations",
    popular: true,
    icon: Package,
    link: "https://ziontechgroup.com/ai-inventory-manager"
  },
  {
    name: "AI Fitness Coach",
    description: "Personalized fitness training with AI-powered workout plans and nutrition guidance",
    price: "$59/mo",
    features: ["Custom Workouts", "Nutrition Plans", "Progress Tracking", "Form Analysis"],
    category: "Health",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-fitness-coach"
  },
  {
    name: "AI E-commerce Optimizer",
    description: "Boost online sales with AI-powered product recommendations and pricing optimization",
    price: "$199/mo",
    features: ["Product Recommendations", "Price Optimization", "Inventory Management", "Customer Insights"],
    category: "E-commerce",
    popular: true,
    icon: ShoppingCart,
    link: "https://ziontechgroup.com/ai-ecommerce-optimizer"
  },
  {
    name: "AI Fraud Detection",
    description: "Advanced fraud prevention with real-time transaction monitoring and risk scoring",
    price: "$249/mo",
    features: ["Real-time Monitoring", "Risk Scoring", "Pattern Detection", "Alert System"],
    category: "Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-fraud-detection"
  },
  {
    name: "AI Music Composer",
    description: "Create original music with AI-powered composition and arrangement tools",
    price: "$89/mo",
    features: ["Original Compositions", "Style Adaptation", "Instrument Arrangement", "Royalty-free"],
    category: "Creative",
    popular: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-music-composition"
  },
  {
    name: "AI Image Recognition",
    description: "Advanced image analysis and object detection for various business applications",
    price: "$129/mo",
    features: ["Object Detection", "Face Recognition", "Quality Analysis", "Custom Models"],
    category: "Computer Vision",
    popular: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-image-recognition"
  },
  {
    name: "AI Document Processor",
    description: "Intelligent document processing with OCR, data extraction, and classification",
    price: "$159/mo",
    features: ["OCR Processing", "Data Extraction", "Document Classification", "Batch Processing"],
    category: "Document Management",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-document-processor"
  },
  {
    name: "AI Load Testing",
    description: "Automated performance testing with AI-powered load generation and analysis",
    price: "$199/mo",
    features: ["Auto Load Generation", "Performance Analysis", "Bottleneck Detection", "Scalability Testing"],
    category: "Testing",
    popular: false,
    icon: Activity,
    link: "https://ziontechgroup.com/ai-load-testing"
  },
  {
    name: "AI Manufacturing Optimizer",
    description: "Smart manufacturing process optimization with predictive maintenance and quality control",
    price: "$399/mo",
    features: ["Predictive Maintenance", "Quality Control", "Process Optimization", "Supply Chain Integration"],
    category: "Manufacturing",
    popular: true,
    icon: Factory,
    link: "https://ziontechgroup.com/ai-manufacturing"
  },
  {
    name: "AI Insurance Assistant",
    description: "Intelligent insurance management with automated claims processing and risk assessment",
    price: "$179/mo",
    features: ["Claims Processing", "Risk Assessment", "Policy Management", "Fraud Detection"],
    category: "Insurance",
    popular: false,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-insurance"
  },
  {
    name: "AI Education Platform",
    description: "Personalized learning experience with AI-powered curriculum and progress tracking",
    price: "$99/mo",
    features: ["Personalized Learning", "Progress Tracking", "Adaptive Content", "Assessment Tools"],
    category: "Education",
    popular: true,
    icon: GraduationCap,
    link: "https://ziontechgroup.com/ai-education"
  },
  {
    name: "AI Code Assistant",
    description: "Intelligent coding assistant with automated code generation and debugging",
    price: "$79/mo",
    features: ["Code Generation", "Bug Detection", "Code Review", "Documentation"],
    category: "Development",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-code-assistant"
  },
  {
    name: "AI Design Studio",
    description: "Complete design suite with AI-powered graphics, layouts, and brand consistency",
    price: "$149/mo",
    features: ["Auto Layout", "Brand Consistency", "Template Generation", "Color Optimization"],
    category: "Design",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-design-studio"
  },
  {
    name: "AI Voice Cloning Studio",
    description: "Professional voice synthesis and cloning with emotion control and multi-language support",
    price: "$79/mo",
    features: ["Voice Cloning", "Emotion Control", "50+ Languages", "Real-time Processing"],
    category: "Audio",
    popular: true,
    icon: Mic,
    link: "https://ziontechgroup.com/ai-voice-cloning-studio"
  },
  {
    name: "AI Code Security Auditor",
    description: "Automated code security analysis with vulnerability detection and compliance checking",
    price: "$149/mo",
    features: ["Vulnerability Scanning", "Compliance Checking", "Auto-fix Suggestions", "Real-time Monitoring"],
    category: "Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-code-security-auditor"
  },
  {
    name: "AI Mental Health Companion",
    description: "24/7 AI-powered mental health support with mood tracking and therapy sessions",
    price: "$49/mo",
    features: ["24/7 Support", "Mood Tracking", "Therapy Sessions", "Crisis Support"],
    category: "Health",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-mental-health-companion"
  },
  {
    name: "AI Smart Home Controller",
    description: "Intelligent home automation with voice control and predictive maintenance",
    price: "$99/mo",
    features: ["Voice Control", "Predictive Maintenance", "Energy Optimization", "Security Integration"],
    category: "IoT",
    popular: true,
    icon: Home,
    link: "https://ziontechgroup.com/ai-smart-home-controller"
  },
  {
    name: "AI Investment Optimizer",
    description: "Advanced portfolio management with AI-powered investment strategies and risk analysis",
    price: "$199/mo",
    features: ["Portfolio Analysis", "Risk Assessment", "Auto Rebalancing", "Market Predictions"],
    category: "Finance",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-investment-optimizer"
  },
  {
    name: "AI Language Translator Pro",
    description: "Real-time translation with context understanding and cultural adaptation",
    price: "$89/mo",
    features: ["100+ Languages", "Context Understanding", "Cultural Adaptation", "Voice Translation"],
    category: "Communication",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-language-translator-pro"
  },
  {
    name: "AI Resume Builder",
    description: "Intelligent resume creation with ATS optimization and job matching",
    price: "$39/mo",
    features: ["ATS Optimization", "Job Matching", "Skills Analysis", "Cover Letter Generation"],
    category: "Career",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-resume-builder"
  },
  {
    name: "AI Meeting Assistant",
    description: "Smart meeting management with transcription, summaries, and action items",
    price: "$69/mo",
    features: ["Live Transcription", "Meeting Summaries", "Action Items", "Follow-up Reminders"],
    category: "Productivity",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-meeting-assistant"
  },
  {
    name: "AI Recipe Generator",
    description: "Personalized recipe creation with dietary restrictions and nutritional analysis",
    price: "$29/mo",
    features: ["Dietary Restrictions", "Nutritional Analysis", "Shopping Lists", "Cooking Instructions"],
    category: "Lifestyle",
    popular: true,
    icon: ChefHat,
    link: "https://ziontechgroup.com/ai-recipe-generator"
  },
  {
    name: "AI Travel Planner",
    description: "Intelligent travel planning with personalized itineraries and real-time updates",
    price: "$79/mo",
    features: ["Personalized Itineraries", "Real-time Updates", "Budget Optimization", "Local Recommendations"],
    category: "Travel",
    popular: true,
    icon: Plane,
    link: "https://ziontechgroup.com/ai-travel-planner"
  },
  {
    name: "AI Personal Trainer",
    description: "AI-powered fitness coaching with personalized workout plans and form analysis",
    price: "$59/mo",
    features: ["Personalized Workouts", "Form Analysis", "Progress Tracking", "Nutrition Guidance"],
    category: "Fitness",
    popular: true,
    icon: Activity,
    link: "https://ziontechgroup.com/ai-personal-trainer"
  },
  {
    name: "AI Study Assistant",
    description: "Intelligent study companion with personalized learning paths and progress tracking",
    price: "$49/mo",
    features: ["Personalized Learning", "Progress Tracking", "Quiz Generation", "Study Reminders"],
    category: "Education",
    popular: true,
    icon: BookOpen,
    link: "https://ziontechgroup.com/ai-study-assistant"
  },
  {
    name: "AI Weather Predictor",
    description: "Advanced weather forecasting with hyperlocal predictions and climate analysis",
    price: "$39/mo",
    features: ["Hyperlocal Forecasts", "Climate Analysis", "Severe Weather Alerts", "Agricultural Insights"],
    category: "Weather",
    popular: true,
    icon: CloudRain,
    link: "https://ziontechgroup.com/ai-weather-predictor"
  },
  {
    name: "AI Pet Care Assistant",
    description: "Comprehensive pet care management with health monitoring and behavior analysis",
    price: "$39/mo",
    features: ["Health Monitoring", "Behavior Analysis", "Vet Reminders", "Nutrition Planning"],
    category: "Pet Care",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-pet-care-assistant"
  },
  {
    name: "AI Home Security Monitor",
    description: "Intelligent home security with facial recognition and anomaly detection",
    price: "$99/mo",
    features: ["Facial Recognition", "Anomaly Detection", "Smart Alerts", "Remote Monitoring"],
    category: "Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-home-security-monitor"
  },
  {
    name: "AI Garden Planner",
    description: "Smart gardening assistant with plant recommendations and care schedules",
    price: "$29/mo",
    features: ["Plant Recommendations", "Care Schedules", "Pest Detection", "Harvest Planning"],
    category: "Gardening",
    popular: true,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-garden-planner"
  },
  {
    name: "AI Sleep Optimizer",
    description: "AI-powered sleep analysis and optimization for better rest and recovery",
    price: "$49/mo",
    features: ["Sleep Analysis", "Optimization Tips", "Sleep Tracking", "Recovery Monitoring"],
    category: "Health",
    popular: true,
    icon: Moon,
    link: "https://ziontechgroup.com/ai-sleep-optimizer"
  },
  {
    name: "AI Car Maintenance",
    description: "Predictive vehicle maintenance with AI-powered diagnostics and scheduling",
    price: "$79/mo",
    features: ["Predictive Maintenance", "Diagnostic Analysis", "Service Scheduling", "Cost Optimization"],
    category: "Automotive",
    popular: true,
    icon: Car,
    link: "https://ziontechgroup.com/ai-car-maintenance"
  },
  {
    name: "AI Wedding Planner",
    description: "Complete wedding planning with vendor recommendations and timeline management",
    price: "$199/mo",
    features: ["Vendor Recommendations", "Timeline Management", "Budget Tracking", "Guest Management"],
    category: "Events",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-wedding-planner"
  }
];

const aiServices = [
  {
    name: "AI Drug Discovery Pro",
    description: "Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction",
    price: "$4,500/mo",
    features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization", "Patent Research"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro"
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Combat climate change with intelligent environmental monitoring and carbon footprint optimization",
    price: "$3,200/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environmental AI",
    enterprise: false,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro"
  },
  {
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro"
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Financial AI",
    enterprise: false,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro"
  },
  {
    name: "AI Quantum Computing Platform",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization",
    price: "$6,000/mo",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    category: "Quantum AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-computing"
  },
  {
    name: "AI Healthcare Solutions",
    description: "Comprehensive AI-powered healthcare solutions for diagnosis, treatment, and patient care",
    price: "$3,800/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-healthcare"
  },
  {
    name: "AI Computer Vision Platform",
    description: "Advanced image recognition and computer vision solutions for various industries",
    price: "$2,200/mo",
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    category: "Computer Vision",
    enterprise: false,
    icon: Target,
    link: "https://ziontechgroup.com/ai-computer-vision"
  },
  {
    name: "AI Supply Chain Optimization Pro",
    description: "Intelligent supply chain management with predictive analytics and optimization algorithms",
    price: "$4,200/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Supply Chain AI",
    enterprise: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro"
  },
  {
    name: "AI Legal Research Pro",
    description: "Advanced legal research and case analysis with AI-powered insights and precedent matching",
    price: "$2,500/mo",
    features: ["Case Analysis", "Precedent Matching", "Legal Research", "Document Review"],
    category: "Legal AI",
    enterprise: true,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-legal-research-pro"
  },
  {
    name: "AI Real Estate Analytics",
    description: "Comprehensive real estate market analysis with property valuation and investment insights",
    price: "$1,800/mo",
    features: ["Property Valuation", "Market Analysis", "Investment Insights", "Trend Prediction"],
    category: "Real Estate AI",
    enterprise: false,
    icon: Building,
    link: "https://ziontechgroup.com/ai-real-estate-analytics"
  },
  {
    name: "AI Manufacturing Intelligence",
    description: "Smart manufacturing solutions with predictive maintenance and quality control",
    price: "$3,500/mo",
    features: ["Predictive Maintenance", "Quality Control", "Process Optimization", "Supply Integration"],
    category: "Manufacturing AI",
    enterprise: true,
    icon: Factory,
    link: "https://ziontechgroup.com/ai-manufacturing-intelligence"
  },
  {
    name: "AI Retail Analytics Pro",
    description: "Advanced retail analytics with customer behavior analysis and inventory optimization",
    price: "$2,200/mo",
    features: ["Customer Analytics", "Inventory Optimization", "Price Optimization", "Demand Forecasting"],
    category: "Retail AI",
    enterprise: false,
    icon: ShoppingCart,
    link: "https://ziontechgroup.com/ai-retail-analytics-pro"
  },
  {
    name: "AI Energy Management Pro",
    description: "Intelligent energy management with grid optimization and renewable energy integration",
    price: "$3,000/mo",
    features: ["Grid Optimization", "Renewable Integration", "Energy Storage", "Cost Optimization"],
    category: "Energy AI",
    enterprise: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-energy-management-pro"
  },
  {
    name: "AI Transportation Optimization",
    description: "Smart transportation solutions with route optimization and fleet management",
    price: "$2,800/mo",
    features: ["Route Optimization", "Fleet Management", "Fuel Efficiency", "Maintenance Scheduling"],
    category: "Transportation AI",
    enterprise: true,
    icon: Truck,
    link: "https://ziontechgroup.com/ai-transportation-optimization"
  },
  {
    name: "AI Agriculture Intelligence",
    description: "Smart farming solutions with crop monitoring and yield optimization",
    price: "$1,500/mo",
    features: ["Crop Monitoring", "Yield Optimization", "Pest Detection", "Weather Integration"],
    category: "Agriculture AI",
    enterprise: false,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-agriculture-intelligence"
  }
];

const itServices = [
  {
    name: "Cloud Migration & Setup",
    description: "Seamless cloud migration with zero downtime and comprehensive security",
    price: "$2,500/mo",
    features: ["Zero Downtime", "Security Audit", "Performance Optimization", "24/7 Support"],
    category: "Cloud Services",
    icon: Globe,
    link: "https://ziontechgroup.com/cloud-migration"
  },
  {
    name: "Enterprise Cybersecurity Suite",
    description: "Comprehensive security solutions to protect your digital assets and data",
    price: "$1,800/mo",
    features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/cybersecurity"
  },
  {
    name: "IT Infrastructure Design",
    description: "Scalable infrastructure architecture designed for your business needs",
    price: "$3,000/mo",
    features: ["Architecture Design", "Scalability Planning", "Performance Tuning", "Monitoring"],
    category: "Infrastructure",
    icon: Settings,
    link: "https://ziontechgroup.com/it-infrastructure"
  },
  {
    name: "24/7 IT Support & Monitoring",
    description: "Round-the-clock technical support and monitoring for your systems",
    price: "$1,200/mo",
    features: ["24/7 Support", "Remote Monitoring", "Quick Response", "Proactive Maintenance"],
    category: "Support",
    icon: Clock,
    link: "https://ziontechgroup.com/it-support"
  },
  {
    name: "Custom Software Development",
    description: "Tailored software solutions built specifically for your business requirements",
    price: "$4,500/mo",
    features: ["Custom Development", "API Integration", "Database Design", "Quality Assurance"],
    category: "Development",
    icon: Code,
    link: "https://ziontechgroup.com/custom-development"
  },
  {
    name: "DevOps & CI/CD Implementation",
    description: "Streamlined development processes with automated deployment and monitoring",
    price: "$2,200/mo",
    features: ["CI/CD Pipelines", "Automated Testing", "Deployment Automation", "Monitoring"],
    category: "DevOps",
    icon: Settings,
    link: "https://ziontechgroup.com/devops-cicd"
  },
  {
    name: "Database Management & Optimization",
    description: "Performance tuning, security, and optimization for your database systems",
    price: "$1,500/mo",
    features: ["Performance Tuning", "Security Hardening", "Backup Solutions", "Monitoring"],
    category: "Database",
    icon: Database,
    link: "https://ziontechgroup.com/database-management"
  },
  {
    name: "Network Design & Implementation",
    description: "Secure and scalable network infrastructure for your organization",
    price: "$2,800/mo",
    features: ["Network Architecture", "Security Implementation", "Performance Optimization", "Monitoring"],
    category: "Networking",
    icon: Globe,
    link: "https://ziontechgroup.com/network-design"
  },
  {
    name: "AI Infrastructure Monitoring",
    description: "Intelligent infrastructure monitoring with AI-powered insights and automation",
    price: "$1,900/mo",
    features: ["AI Monitoring", "Predictive Analytics", "Automated Responses", "Performance Insights"],
    category: "AI Infrastructure",
    icon: Activity,
    link: "https://ziontechgroup.com/ai-infrastructure-monitoring"
  },
  {
    name: "Blockchain Integration Services",
    description: "Web3 and blockchain solutions for decentralized applications and smart contracts",
    price: "$3,500/mo",
    features: ["Smart Contracts", "DApp Development", "Token Economics", "Security Audits"],
    category: "Blockchain",
    icon: Shield,
    link: "https://ziontechgroup.com/blockchain-integration-services"
  },
  {
    name: "AI API Management",
    description: "Intelligent API management with AI-powered optimization and security",
    price: "$1,600/mo",
    features: ["API Gateway", "Rate Limiting", "Security Policies", "Analytics"],
    category: "API Management",
    icon: Code,
    link: "https://ziontechgroup.com/ai-api-management"
  },
  {
    name: "Smart Contract Security Audit",
    description: "Comprehensive security auditing for blockchain smart contracts",
    price: "$2,200/mo",
    features: ["Security Analysis", "Vulnerability Assessment", "Code Review", "Compliance Check"],
    category: "Blockchain Security",
    icon: Shield,
    link: "https://ziontechgroup.com/smart-contract-security-audit"
  },
  {
    name: "AI IT Operations (AIOps)",
    description: "AI-powered IT operations with intelligent monitoring and automated responses",
    price: "$1,800/mo",
    features: ["Intelligent Monitoring", "Automated Responses", "Predictive Analytics", "Self-healing Systems"],
    category: "AI Operations",
    icon: Brain,
    link: "https://ziontechgroup.com/ai-ops"
  },
  {
    name: "Healthcare IT Solutions",
    description: "HIPAA-compliant healthcare IT infrastructure and data management",
    price: "$2,500/mo",
    features: ["HIPAA Compliance", "Patient Data Security", "EMR Integration", "Telemedicine Support"],
    category: "Healthcare IT",
    icon: Heart,
    link: "https://ziontechgroup.com/healthcare-it"
  },
  {
    name: "Financial Services IT",
    description: "SOX-compliant financial IT infrastructure with advanced security",
    price: "$3,000/mo",
    features: ["SOX Compliance", "Financial Security", "Risk Management", "Regulatory Reporting"],
    category: "Financial IT",
    icon: DollarSign,
    link: "https://ziontechgroup.com/financial-it"
  },
  {
    name: "Edge Computing Solutions",
    description: "Low-latency edge infrastructure for real-time applications",
    price: "$1,600/mo",
    features: ["Low Latency", "Real-time Processing", "Distributed Computing", "IoT Integration"],
    category: "Edge Computing",
    icon: Cpu,
    link: "https://ziontechgroup.com/edge-computing"
  },
  {
    name: "5G Network Implementation",
    description: "High-speed 5G network deployment and optimization",
    price: "$4,500/mo",
    features: ["5G Deployment", "Network Optimization", "Performance Tuning", "Coverage Analysis"],
    category: "5G Networks",
    icon: Wifi,
    link: "https://ziontechgroup.com/5g-implementation"
  },
  {
    name: "IoT Platform Development",
    description: "Comprehensive IoT solutions with device management and analytics",
    price: "$2,200/mo",
    features: ["Device Management", "Data Analytics", "Remote Monitoring", "Scalable Architecture"],
    category: "IoT Solutions",
    icon: Globe,
    link: "https://ziontechgroup.com/iot-platform"
  },
  {
    name: "AI Data Pipeline",
    description: "Intelligent data processing and ETL pipelines with AI optimization",
    price: "$1,900/mo",
    features: ["Data Processing", "ETL Pipelines", "AI Optimization", "Real-time Streaming"],
    category: "Data Engineering",
    icon: Database,
    link: "https://ziontechgroup.com/ai-data-pipeline"
  },
  {
    name: "Microservices Architecture",
    description: "Scalable microservices design and implementation",
    price: "$2,800/mo",
    features: ["Service Design", "API Gateway", "Service Mesh", "Container Orchestration"],
    category: "Architecture",
    icon: Settings,
    link: "https://ziontechgroup.com/microservices-architecture"
  },
  {
    name: "AI Model Deployment",
    description: "Production-ready AI model deployment and monitoring",
    price: "$2,100/mo",
    features: ["Model Deployment", "A/B Testing", "Performance Monitoring", "Auto-scaling"],
    category: "AI Infrastructure",
    icon: Brain,
    link: "https://ziontechgroup.com/ai-model-deployment"
  },
  {
    name: "Disaster Recovery Solutions",
    description: "Comprehensive disaster recovery and business continuity planning",
    price: "$1,700/mo",
    features: ["Backup Solutions", "Recovery Planning", "Testing & Validation", "RTO/RPO Optimization"],
    category: "Business Continuity",
    icon: Shield,
    link: "https://ziontechgroup.com/disaster-recovery-solutions"
  },
  {
    name: "AI Compliance Monitoring",
    description: "Automated compliance monitoring and reporting for regulatory requirements",
    price: "$2,300/mo",
    features: ["Compliance Monitoring", "Automated Reporting", "Risk Assessment", "Audit Support"],
    category: "Compliance",
    icon: CheckCircle,
    link: "https://ziontechgroup.com/ai-compliance-monitoring"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    company: "Fortune 500 Technology Company",
    content: "Zion Tech Group's AI solutions increased our operational efficiency by 85% and reduced costs by $2.3M annually. Their quantum computing integration was revolutionary.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Research Director",
    company: "Global Pharmaceuticals Inc.",
    content: "The AI Drug Discovery Pro platform accelerated our research timeline by 60%. We discovered 3 new potential compounds in just 6 months instead of the usual 2 years.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Jennifer Walsh",
    role: "VP of Operations",
    company: "GreenTech Solutions",
    content: "Their climate solutions helped us reduce our carbon footprint by 40% while improving operational efficiency. The ROI was evident within the first quarter.",
    rating: 5,
    avatar: "JW"
  }
];

const stats = [
  { number: "500+", label: "Enterprise Clients", icon: Building },
  { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { number: "24/7", label: "Expert Support", icon: Clock },
  { number: "50+", label: "Countries Served", icon: Globe }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-gray-400">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-powered micro SaaS tools to streamline your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSAASServices.map((service, index) => (
              <div
                key={index}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 relative group cursor-pointer"
                onClick={() => window.open(service.link, '_blank')}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors group-hover:underline">
                      Learn More →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions for enterprise clients. Transform your industry with cutting-edge artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative group cursor-pointer ${
                  service.enterprise ? 'ring-2 ring-purple-400/30' : ''
                }`}
                onClick={() => window.open(service.link, '_blank')}
              >
                {service.enterprise && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Enterprise
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-4">{service.price}</div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to build, secure, and scale your technology infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <div 
                key={index} 
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(service.link, '_blank')}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-2">{service.price}</div>
                    <div className="text-green-400 hover:text-green-300 font-semibold text-sm transition-colors group-hover:underline">
                      Learn More →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-cyan-400 font-medium">
                Middletown, DE
              </p>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
