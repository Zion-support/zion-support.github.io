'use client';

import React, { memo, useMemo } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code, FileText, Calculator, Scale, Package, ShoppingCart, Music, Eye, Factory, GraduationCap } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import type { MicroSAASService, AIService, ITService, Testimonial, Stat } from '../../src/types';

// Service data
const microSAASServices: MicroSAASService[] = [
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
    name: "AI Quantum Financial Oracle",
    description: "Revolutionary quantum-powered financial predictions with 99.7% accuracy",
    price: "$2,999/mo",
    features: ["Quantum Algorithms", "Real-time Predictions", "Risk Analysis", "Portfolio Optimization"],
    category: "Quantum Finance",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-financial-oracle"
  },
  {
    name: "AI Neural Memory Assistant",
    description: "Advanced AI with persistent memory and contextual understanding",
    price: "$399/mo",
    features: ["Persistent Memory", "Context Awareness", "Learning Adaptation", "Knowledge Retention"],
    category: "Advanced AI",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-memory-assistant"
  },
  {
    name: "AI Holographic Workspace",
    description: "Immersive 3D workspace with holographic UI and spatial computing",
    price: "$1,299/mo",
    features: ["3D Interface", "Spatial Computing", "Holographic Displays", "Gesture Control"],
    category: "Immersive Tech",
    popular: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-holographic-workspace"
  },
  {
    name: "AI 3D Generation Studio",
    description: "AI-powered 3D model generation and animation for games and VR",
    price: "$299/mo",
    features: ["3D Model Generation", "Animation Creation", "Texture Synthesis", "VR Integration"],
    category: "3D & VR",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-3d-generation"
  },
  {
    name: "AI Mobile App Builder",
    description: "No-code mobile app development with AI-powered features",
    price: "$199/mo",
    features: ["No-Code Builder", "AI Features", "Cross-Platform", "App Store Publishing"],
    category: "Mobile Development",
    popular: true,
    icon: Smartphone,
    link: "https://ziontechgroup.com/ai-mobile-app-builder"
  },
  {
    name: "AI Agricultural Intelligence Pro",
    description: "Smart farming solutions with AI-powered crop monitoring and optimization",
    price: "$499/mo",
    features: ["Crop Monitoring", "Yield Prediction", "Pest Detection", "Weather Analysis"],
    category: "Agriculture",
    popular: true,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-agricultural-intelligence-pro"
  },
  {
    name: "AI Energy Grid Management Pro",
    description: "Intelligent energy grid optimization and renewable energy management",
    price: "$1,599/mo",
    features: ["Grid Optimization", "Renewable Integration", "Load Balancing", "Predictive Maintenance"],
    category: "Energy",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-energy-grid-management-pro"
  },
  {
    name: "AI Legal Research Pro",
    description: "Advanced legal research and case law analysis with AI insights",
    price: "$799/mo",
    features: ["Case Law Analysis", "Legal Research", "Document Review", "Compliance Checking"],
    category: "Legal Tech",
    popular: true,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-legal-research-pro"
  },
  {
    name: "AI Drug Discovery Pro",
    description: "Accelerated pharmaceutical research with quantum-enhanced molecular analysis",
    price: "$4,999/mo",
    features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization", "Patent Research"],
    category: "Pharmaceutical",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro"
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Advanced climate monitoring and carbon footprint optimization",
    price: "$1,299/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environmental",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro"
  },
  {
    name: "AI Space Technology Pro",
    description: "Space exploration and satellite management with AI-powered mission planning",
    price: "$3,999/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space Tech",
    popular: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro"
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring",
    price: "$2,299/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Financial Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro"
  },
  {
    name: "AI Fashion Design Studio",
    description: "AI-powered fashion design with trend analysis and virtual try-on",
    price: "$399/mo",
    features: ["Trend Analysis", "Virtual Try-On", "Design Generation", "Supply Chain Optimization"],
    category: "Fashion Tech",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-fashion-design"
  },
  {
    name: "AI Autonomous Systems",
    description: "Self-managing systems with AI-powered decision making and automation",
    price: "$2,999/mo",
    features: ["Autonomous Decision Making", "Self-Healing Systems", "Predictive Maintenance", "Adaptive Learning"],
    category: "Autonomous Systems",
    popular: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-autonomous-systems"
  },
  {
    name: "AI Blockchain Solutions",
    description: "AI-powered blockchain technology for smart contracts and DeFi",
    price: "$1,799/mo",
    features: ["Smart Contract AI", "DeFi Optimization", "Blockchain Analytics", "Token Economics"],
    category: "Blockchain AI",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-blockchain-solutions"
  },
  {
    name: "AI Content Delivery Network",
    description: "Intelligent CDN with AI-powered optimization and edge computing",
    price: "$599/mo",
    features: ["Edge Computing", "AI Optimization", "Global Distribution", "Performance Analytics"],
    category: "Infrastructure",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-content-delivery-network"
  },
  {
    name: "AI API Manager",
    description: "Intelligent API management with AI-powered optimization and security",
    price: "$299/mo",
    features: ["API Gateway", "Rate Limiting", "Security Policies", "Analytics"],
    category: "API Management",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-api-manager"
  },
  {
    name: "AI Code Security Auditor",
    description: "Advanced code security analysis with AI-powered vulnerability detection",
    price: "$499/mo",
    features: ["Vulnerability Detection", "Code Analysis", "Security Scanning", "Compliance Checking"],
    category: "Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-code-security-auditor"
  },
  {
    name: "AI Business Intelligence",
    description: "Advanced business intelligence with AI-powered insights and predictions",
    price: "$799/mo",
    features: ["Data Visualization", "Predictive Analytics", "Business Insights", "Report Generation"],
    category: "Business Intelligence",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-business-intelligence"
  },
  {
    name: "AI E-commerce Solutions",
    description: "Complete e-commerce platform with AI-powered personalization",
    price: "$1,199/mo",
    features: ["Personalization", "Recommendation Engine", "Inventory Management", "Customer Analytics"],
    category: "E-commerce",
    popular: true,
    icon: ShoppingCart,
    link: "https://ziontechgroup.com/ai-ecommerce-solutions"
  },
  {
    name: "AI Investment Optimizer",
    description: "AI-powered investment portfolio optimization and risk management",
    price: "$1,499/mo",
    features: ["Portfolio Optimization", "Risk Management", "Market Analysis", "Investment Strategies"],
    category: "Investment",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-investment-optimizer"
  },
  {
    name: "AI Manufacturing",
    description: "Smart manufacturing solutions with AI-powered process optimization",
    price: "$2,499/mo",
    features: ["Process Optimization", "Quality Control", "Predictive Maintenance", "Supply Chain AI"],
    category: "Manufacturing",
    popular: true,
    icon: Factory,
    link: "https://ziontechgroup.com/ai-manufacturing"
  },
  {
    name: "AI Insurance",
    description: "Intelligent insurance management with AI-powered risk assessment",
    price: "$899/mo",
    features: ["Risk Assessment", "Claims Processing", "Policy Management", "Fraud Detection"],
    category: "Insurance",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-insurance"
  },
  {
    name: "AI Education Platform",
    description: "Personalized learning platform with AI-powered curriculum and assessment",
    price: "$399/mo",
    features: ["Personalized Learning", "Progress Tracking", "Adaptive Content", "Assessment Tools"],
    category: "Education",
    popular: true,
    icon: GraduationCap,
    link: "https://ziontechgroup.com/ai-education"
  },
  {
    name: "AI Code Generation",
    description: "AI-powered code generation and automated development tools",
    price: "$599/mo",
    features: ["Code Generation", "Auto-completion", "Bug Detection", "Documentation"],
    category: "Development",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-code-generation"
  },
  {
    name: "AI Content Studio",
    description: "Complete content creation suite with AI-powered writing and design",
    price: "$199/mo",
    features: ["Content Creation", "Design Tools", "Brand Consistency", "Multi-format Export"],
    category: "Content",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-content-studio"
  },
  {
    name: "AI Customer Support Chatbot",
    description: "Advanced conversational AI for customer support and engagement",
    price: "$299/mo",
    features: ["Natural Language Processing", "Multi-language Support", "Sentiment Analysis", "Escalation Management"],
    category: "Customer Support",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-customer-support-chatbot"
  },
  {
    name: "AI Email Marketing Automation",
    description: "Intelligent email marketing with AI-powered personalization and automation",
    price: "$149/mo",
    features: ["Smart Segmentation", "A/B Testing", "Automation", "Performance Analytics"],
    category: "Marketing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-marketing-automation"
  },
  {
    name: "AI Energy",
    description: "Smart energy management with AI-powered optimization and monitoring",
    price: "$799/mo",
    features: ["Energy Optimization", "Smart Grid Integration", "Renewable Energy", "Cost Analysis"],
    category: "Energy",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-energy"
  },
  {
    name: "AI Healthcare Solutions",
    description: "Comprehensive AI-powered healthcare solutions for diagnosis and treatment",
    price: "$2,999/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-healthcare-solutions"
  },
  {
    name: "AI Fintech",
    description: "Financial technology solutions with AI-powered banking and payments",
    price: "$1,999/mo",
    features: ["Digital Banking", "Payment Processing", "Fraud Detection", "Financial Analytics"],
    category: "Fintech",
    popular: true,
    icon: CreditCard,
    link: "https://ziontechgroup.com/ai-fintech"
  },
  {
    name: "AI Computer Vision",
    description: "Advanced computer vision solutions for image recognition and analysis",
    price: "$1,299/mo",
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    category: "Computer Vision",
    popular: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-computer-vision"
  },
  {
    name: "AI Machine Learning Platform",
    description: "Complete machine learning platform with AI model development and deployment",
    price: "$1,799/mo",
    features: ["Model Development", "Training Infrastructure", "Deployment Tools", "Monitoring"],
    category: "Machine Learning",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-ml-platform"
  },
  {
    name: "AI Quantum Computing",
    description: "Next-generation quantum computing solutions for complex problem solving",
    price: "$4,999/mo",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    category: "Quantum Computing",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-computing"
  },
  {
    name: "AI Supply Chain Optimization Pro",
    description: "Intelligent supply chain management with predictive analytics and optimization",
    price: "$2,999/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Supply Chain",
    popular: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro"
  }
];

const aiServices: AIService[] = [
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
  }
];

const itServices: ITService[] = [
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
  }
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    content: "Zion Tech Group transformed our business with their AI solutions. We've seen a 300% increase in efficiency and 70% cost reduction.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp Inc.",
    avatar: "SJ"
  },
  {
    content: "The AI-powered analytics dashboard has revolutionized our decision-making process. The insights are incredible.",
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Systems",
    avatar: "MC"
  },
  {
    content: "Outstanding IT infrastructure support. They've kept our systems running 99.9% of the time with zero downtime.",
    name: "Emily Rodriguez",
    role: "IT Director",
    company: "Global Enterprises",
    avatar: "ER"
  }
];

// Stats data
const stats: Stat[] = [
  {
    number: "500+",
    label: "Projects Completed",
    icon: Target
  },
  {
    number: "99.9%",
    label: "Uptime Guarantee",
    icon: Shield
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: Clock
  },
  {
    number: "50+",
    label: "Expert Team Members",
    icon: Users
  }
];

const HomePage: React.FC = memo(() => {
  // Memoize expensive calculations
  const popularServices = useMemo(() => 
    microSAASServices.filter(service => service.popular), 
    []
  );

  const enterpriseServices = useMemo(() => 
    aiServices.filter(service => service.enterprise), 
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 quantum-field-ultra">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid-advanced">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.15)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[length:25px_25px]" />
        
        {/* Quantum Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full quantum-particle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-purple-400 rounded-full quantum-particle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full quantum-particle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-400 rounded-full quantum-particle" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full quantum-particle" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-yellow-400 rounded-full quantum-particle" style={{ animationDelay: '5s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-semibold cyber-text">🚀 NEXT-GEN AI SOLUTIONS</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-ultra">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology. Achieve <span className="text-cyan-400 font-bold">300% ROI</span>, <span className="text-purple-400 font-bold">70% cost reduction</span>, and <span className="text-pink-400 font-bold">90% efficiency gains</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="neon-button-ultra hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="futuristic-card-ultra border-2 border-cyan-400/50 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
            <button className="holographic-advanced border-2 border-purple-400/50 text-purple-400 font-semibold py-4 px-8 rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:scale-105">
              Free Consultation
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="text-4xl font-bold text-cyan-400 mb-2 neon-glow-cyan">300%</div>
              <div className="text-gray-400 font-medium">Average ROI</div>
            </div>
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2 neon-glow-purple">70%</div>
              <div className="text-gray-400 font-medium">Cost Reduction</div>
            </div>
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-400/25">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="text-4xl font-bold text-pink-400 mb-2 neon-glow-pink">90%</div>
              <div className="text-gray-400 font-medium">Efficiency Gains</div>
            </div>
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-400/25">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400 font-medium">Uptime Guarantee</div>
            </div>
          </div>
</div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 quantum-field">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-semibold cyber-text">⚡ INNOVATIVE SOLUTIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cyber-text-enhanced">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive AI and IT solutions for modern enterprises. Transform your business with cutting-edge technology.</p>
          </div>
          
          {/* Enhanced Micro SAAS Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 cyber-text-enhanced">Micro SAAS Solutions</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Powerful AI-driven applications designed to streamline your business operations and boost productivity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="futuristic-card-ultra p-6 hover:scale-105 transition-all duration-300 group cursor-pointer" onClick={() => window.open(service.link, '_blank')}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                      <service.icon className="w-8 h-8 text-white" />
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

          {/* Enhanced AI Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 cyber-text-enhanced">Enterprise AI Solutions</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Advanced AI solutions for enterprise clients. Transform your industry with cutting-edge artificial intelligence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="holographic-advanced p-6 hover:scale-105 transition-all duration-300 group cursor-pointer" onClick={() => window.open(service.link, '_blank')}>
                  {service.enterprise && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Enterprise
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                      <div className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors group-hover:underline">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced IT Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 cyber-text-enhanced">IT Infrastructure Services</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Comprehensive IT solutions to build, secure, and scale your technology infrastructure.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer" onClick={() => window.open(service.link, '_blank')}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-400/25">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{service.price}</div>
                      <div className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors group-hover:underline">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 quantum-field">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-semibold cyber-text">⭐ CLIENT SUCCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cyber-text-enhanced">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-ultra p-8 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 quantum-field-ultra">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-semibold cyber-text">📊 OUR IMPACT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cyber-text-enhanced">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Numbers that speak for themselves - our track record of success.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 neon-glow-cyan">{stat.number}</div>
                <div className="text-gray-400 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 cyber-grid-advanced">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-semibold cyber-text">🚀 GET STARTED TODAY</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text-enhanced">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations. 
            <span className="text-cyan-400 font-bold"> Get 20% off your first month</span> when you sign up today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors">
                +1 (302) 464-0950
              </a>
              <p className="text-gray-400 text-sm mt-2">24/7 Support Available</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium text-lg transition-colors">
                kleber@ziontechgroup.com
              </a>
              <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-400/25">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-pink-400 font-medium text-lg">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
              <p className="text-gray-400 text-sm mt-2">Visit our headquarters</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="neon-button-ultra hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="futuristic-card-ultra border-2 border-purple-400/50 text-purple-400 font-semibold py-4 px-8 rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

<Footer />
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
