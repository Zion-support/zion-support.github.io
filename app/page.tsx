<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from './data/servicesData';
=======
'use client';

import React, { Suspense } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import PerformanceMonitor from './components/PerformanceMonitor';
import ServiceCardSkeleton from './components/ServiceCardSkeleton';
import LazyImage from './components/LazyImage';
import AnimatedCounter from './components/AnimatedCounter';
import Navigation from './components/Navigation';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Rocket,
  Code,
  Cloud,
  Smartphone,
  TrendingUp,
  Award as Trophy,
  Users as People,
  CheckCircle2,
  Building,
  Heart,
  Scale,
  Package,
  Activity,
  Database,
  Calculator,
  Video,
  Palette,
  Music,
  Eye,
  GraduationCap,
  ShoppingCart,
  Factory,
  Truck,
  ChefHat,
  Sprout
} from 'lucide-react';

// Interface definitions
interface AIService {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  enterprise: boolean;
  icon: any;
  link: string;
}

interface ITService {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  icon: any;
  link: string;
}

// Service data
const microSAASServices = [
  {
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics and automated resource allocation",
    price: "$99/mo",
    features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
    category: "Productivity",
    popular: true
  },
  {
    name: "AI Analytics Dashboard",
    description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
    price: "$149/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
    category: "Analytics",
    popular: true
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
    description: "Revolutionary quantum-powered financial prediction platform with 99.7% accuracy in market forecasting",
    price: "$2,999/mo",
    features: ["Quantum Market Analysis", "Risk-Free Predictions", "Real-time Trading Signals", "Portfolio Optimization"],
    category: "Finance",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-financial-oracle"
  },
  {
    name: "AI Neural Memory Assistant",
    description: "Advanced cognitive enhancement platform that uses neural networks to improve memory and learning capabilities",
    price: "$199/mo",
    features: ["Memory Enhancement", "Learning Acceleration", "Cognitive Training", "Brain Health Monitoring"],
    category: "Productivity",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-memory-assistant"
  },
  {
    name: "AI Holographic Workspace",
    description: "Immersive 3D workspace with holographic UI for next-generation collaboration and productivity",
    price: "$499/mo",
    features: ["3D Holographic Interface", "Virtual Collaboration", "Spatial Computing", "AR/VR Integration"],
    category: "Productivity",
    popular: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-holographic-workspace"
  },
  {
    name: "AI 3D Generation Studio",
    description: "AI-powered 3D model generation and animation platform for creators and developers",
    price: "$179/mo",
    features: ["3D Model Generation", "Animation Creation", "Texture Synthesis", "Rendering Optimization"],
    category: "Creative",
    popular: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-3d-generation"
  },
  {
    name: "AI Mobile App Builder",
    description: "No-code AI platform for building native mobile apps with advanced AI features",
    price: "$129/mo",
    features: ["No-Code Development", "AI Integration", "Cross-Platform", "Real-time Testing"],
    category: "Development",
    popular: true,
    icon: Smartphone,
    link: "https://ziontechgroup.com/ai-mobile-app-builder"
  },
  {
    name: "AI Agricultural Intelligence Pro",
    description: "Smart farming platform with AI-powered crop monitoring, yield prediction, and automated irrigation",
    price: "$299/mo",
    features: ["Crop Monitoring", "Yield Prediction", "Automated Irrigation", "Pest Detection"],
    category: "Agriculture",
    popular: true,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-agricultural-intelligence-pro"
  },
  {
    name: "AI Energy Grid Management Pro",
    description: "Intelligent energy management system for smart grids with predictive maintenance and optimization",
    price: "$599/mo",
    features: ["Grid Optimization", "Predictive Maintenance", "Energy Storage", "Demand Forecasting"],
    category: "Energy",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-energy-grid-management-pro"
  },
  {
    name: "AI Drug Discovery Pro",
    description: "Advanced pharmaceutical AI platform for accelerating drug discovery and development",
    price: "$4,500/mo",
    features: ["Molecular Analysis", "Drug Interaction Prediction", "Clinical Trial Optimization", "Patent Research"],
    category: "Healthcare",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro"
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Comprehensive climate monitoring and carbon footprint optimization platform",
    price: "$3,200/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environment",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro"
  },
  {
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space",
    popular: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro"
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Finance",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro"
  },
  {
    name: "AI Legal Research Pro",
    description: "Advanced legal research platform with AI-powered case analysis and precedent discovery",
    price: "$399/mo",
    features: ["Case Analysis", "Precedent Discovery", "Legal Research", "Document Review"],
    category: "Legal",
    popular: true,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-legal-research-pro"
  },
  {
    name: "AI Fashion Design Studio",
    description: "AI-powered fashion design platform with trend analysis and automated pattern generation",
    price: "$149/mo",
    features: ["Trend Analysis", "Pattern Generation", "Color Matching", "Size Optimization"],
    category: "Fashion",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-fashion-design"
  },
  {
    name: "AI Music Composition Studio",
    description: "AI-powered music creation platform with genre analysis and automated composition",
    price: "$89/mo",
    features: ["Genre Analysis", "Automated Composition", "Instrument Arrangement", "Royalty-free Music"],
    category: "Creative",
    popular: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-music-composition"
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
    name: "AI Logistics Optimizer",
    description: "Intelligent logistics management with route optimization and supply chain analytics",
    price: "$299/mo",
    features: ["Route Optimization", "Supply Chain Analytics", "Fleet Management", "Demand Forecasting"],
    category: "Logistics",
    popular: true,
    icon: Truck,
    link: "https://ziontechgroup.com/ai-logistics-optimizer"
  },
  {
    name: "AI Culinary Assistant Pro",
    description: "Smart kitchen assistant with recipe optimization and nutritional analysis",
    price: "$79/mo",
    features: ["Recipe Optimization", "Nutritional Analysis", "Meal Planning", "Ingredient Substitution"],
    category: "Food",
    popular: true,
    icon: ChefHat,
    link: "https://ziontechgroup.com/ai-culinary-assistant-pro"
  },
  {
    name: "AI Voice Cloning Studio",
    description: "Professional voice synthesis and cloning with 99.9% accuracy for content creators",
    price: "$299/mo",
    features: ["Voice Cloning", "Multi-language Support", "Emotion Control", "Real-time Synthesis"],
    category: "Audio",
    popular: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-voice-cloning-studio"
  },
  {
    name: "AI Code Security Auditor",
    description: "Automated code security analysis with vulnerability detection and compliance checking",
    price: "$199/mo",
    features: ["Vulnerability Detection", "Compliance Checking", "Code Review", "Security Reports"],
    category: "Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-code-security-auditor"
  },
  {
    name: "AI Mental Health Companion",
    description: "AI-powered mental health support with 24/7 availability and personalized care",
    price: "$149/mo",
    features: ["24/7 Support", "Mood Tracking", "Crisis Intervention", "Therapy Recommendations"],
    category: "Health",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-mental-health-companion"
  },
  {
    name: "AI Smart Home Controller",
    description: "Intelligent home automation with voice control and predictive maintenance",
    price: "$89/mo",
    features: ["Voice Control", "Predictive Maintenance", "Energy Optimization", "Security Integration"],
    category: "IoT",
    popular: true,
    icon: Home,
    link: "https://ziontechgroup.com/ai-smart-home-controller"
  },
  {
    name: "AI Investment Optimizer",
    description: "Advanced portfolio management with real-time market analysis and risk assessment",
    price: "$399/mo",
    features: ["Portfolio Optimization", "Risk Assessment", "Market Analysis", "Automated Trading"],
    category: "Finance",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-investment-optimizer"
  },
  {
    name: "AI Legal Research Pro",
    description: "Advanced legal research platform with AI-powered case analysis and precedent discovery",
    price: "$399/mo",
    features: ["Case Analysis", "Precedent Discovery", "Legal Research", "Document Review"],
    category: "Legal",
    popular: true,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-legal-research-pro"
  },
  {
    name: "AI Supply Chain Optimizer",
    description: "Intelligent supply chain management with predictive analytics and optimization algorithms",
    price: "$599/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Logistics",
    popular: true,
    icon: Truck,
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro"
  },
  {
    name: "AI Energy Management Pro",
    description: "Smart energy optimization with grid management and renewable energy integration",
    price: "$499/mo",
    features: ["Grid Optimization", "Renewable Integration", "Energy Storage", "Cost Optimization"],
    category: "Energy",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-energy-grid-management-pro"
  },
  {
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space",
    popular: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro"
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Comprehensive climate monitoring and carbon footprint optimization platform",
    price: "$3,200/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environment",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro"
  },
  {
    name: "AI Drug Discovery Pro",
    description: "Advanced pharmaceutical AI platform for accelerating drug discovery and development",
    price: "$4,500/mo",
    features: ["Molecular Analysis", "Drug Interaction Prediction", "Clinical Trial Optimization", "Patent Research"],
    category: "Healthcare",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro"
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Finance",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro"
  },
  {
    name: "AI Agricultural Intelligence Pro",
    description: "Smart farming platform with AI-powered crop monitoring, yield prediction, and automated irrigation",
    price: "$299/mo",
    features: ["Crop Monitoring", "Yield Prediction", "Automated Irrigation", "Pest Detection"],
    category: "Agriculture",
    popular: true,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-agricultural-intelligence-pro"
  },
  {
    name: "AI Fashion Design Studio",
    description: "AI-powered fashion design platform with trend analysis and automated pattern generation",
    price: "$149/mo",
    features: ["Trend Analysis", "Pattern Generation", "Color Matching", "Size Optimization"],
    category: "Fashion",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-fashion-design"
  },
  {
    name: "AI Music Composition Studio",
    description: "AI-powered music creation platform with genre analysis and automated composition",
    price: "$89/mo",
    features: ["Genre Analysis", "Automated Composition", "Instrument Arrangement", "Royalty-free Music"],
    category: "Creative",
    popular: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-music-composition"
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
    name: "AI Logistics Optimizer",
    description: "Intelligent logistics management with route optimization and supply chain analytics",
    price: "$299/mo",
    features: ["Route Optimization", "Supply Chain Analytics", "Fleet Management", "Demand Forecasting"],
    category: "Logistics",
    popular: true,
    icon: Truck,
    link: "https://ziontechgroup.com/ai-logistics-optimizer"
  },
  {
    name: "AI 3D Generation Studio",
    description: "AI-powered 3D model generation and animation platform for creators and developers",
    price: "$179/mo",
    features: ["3D Model Generation", "Animation Creation", "Texture Synthesis", "Rendering Optimization"],
    category: "Creative",
    popular: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-3d-generation"
  },
  {
    name: "AI Mobile App Builder",
    description: "No-code AI platform for building native mobile apps with advanced AI features",
    price: "$129/mo",
    features: ["No-Code Development", "AI Integration", "Cross-Platform", "Real-time Testing"],
    category: "Development",
    popular: true,
    icon: Smartphone,
    link: "https://ziontechgroup.com/ai-mobile-app-builder"
  },
  {
    name: "AI Holographic Workspace",
    description: "Immersive 3D workspace with holographic UI for next-generation collaboration and productivity",
    price: "$499/mo",
    features: ["3D Holographic Interface", "Virtual Collaboration", "Spatial Computing", "AR/VR Integration"],
    category: "Productivity",
    popular: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-holographic-workspace"
  },
  {
    name: "AI Neural Memory Assistant",
    description: "Advanced cognitive enhancement platform that uses neural networks to improve memory and learning capabilities",
    price: "$199/mo",
    features: ["Memory Enhancement", "Learning Acceleration", "Cognitive Training", "Brain Health Monitoring"],
    category: "Productivity",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-memory-assistant"
  },
  {
    name: "AI Quantum Financial Oracle",
    description: "Revolutionary quantum-powered financial prediction platform with 99.7% accuracy in market forecasting",
    price: "$2,999/mo",
    features: ["Quantum Market Analysis", "Risk-Free Predictions", "Real-time Trading Signals", "Portfolio Optimization"],
    category: "Finance",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-financial-oracle"
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
  },
  {
    name: "AI Autonomous Systems Platform",
    description: "Next-generation autonomous systems with self-learning capabilities and real-time decision making",
    price: "$6,500/mo",
    features: ["Self-Learning Algorithms", "Real-time Decision Making", "Predictive Maintenance", "Autonomous Operations"],
    category: "Autonomous Systems",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-autonomous-systems"
  },
  {
    name: "AI Blockchain Solutions Pro",
    description: "Advanced blockchain integration with AI-powered smart contracts and decentralized applications",
    price: "$3,800/mo",
    features: ["Smart Contract AI", "Decentralized Applications", "Blockchain Analytics", "Crypto Trading AI"],
    category: "Blockchain AI",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-blockchain-solutions"
  },
  {
    name: "AI Edge Computing Platform",
    description: "Intelligent edge computing solutions with real-time processing and low-latency AI inference",
    price: "$2,500/mo",
    features: ["Edge AI Processing", "Real-time Inference", "Low-latency Computing", "Distributed Intelligence"],
    category: "Edge Computing",
    enterprise: false,
    icon: Cpu,
    link: "https://ziontechgroup.com/ai-edge-computing"
  },
  {
    name: "AI 5G Network Optimization",
    description: "Advanced 5G network management with AI-powered optimization and intelligent resource allocation",
    price: "$4,800/mo",
    features: ["5G Optimization", "Network Slicing", "Resource Allocation", "Performance Monitoring"],
    category: "5G Technology",
    enterprise: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-5g-optimization"
  },
  {
    name: "AI IoT Platform Pro",
    description: "Comprehensive IoT platform with AI-powered device management and data analytics",
    price: "$2,200/mo",
    features: ["Device Management", "Data Analytics", "Predictive Maintenance", "Security Monitoring"],
    category: "IoT AI",
    enterprise: false,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-iot-platform"
  },
  {
    name: "AI Cybersecurity Pro",
    description: "Advanced AI-powered cybersecurity platform with threat detection and automated response",
    price: "$3,500/mo",
    features: ["Threat Detection", "Automated Response", "Behavioral Analysis", "Zero-day Protection"],
    category: "Cybersecurity AI",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-cybersecurity"
  },
  {
    name: "AI API Management Platform",
    description: "Intelligent API management with AI-powered optimization, security, and analytics",
    price: "$1,600/mo",
    features: ["API Gateway", "Rate Limiting", "Security Policies", "Analytics Dashboard"],
    category: "API Management",
    enterprise: false,
    icon: Code,
    link: "https://ziontechgroup.com/ai-api-management"
  },
  {
    name: "AI Business Intelligence Pro",
    description: "Advanced business intelligence platform with AI-powered insights and predictive analytics",
    price: "$2,800/mo",
    features: ["Predictive Analytics", "Data Visualization", "Automated Reporting", "Business Insights"],
    category: "Business Intelligence",
    enterprise: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-business-intelligence"
  },
  {
    name: "AI Content Delivery Network",
    description: "Intelligent CDN with AI-powered optimization and global content distribution",
    price: "$1,900/mo",
    features: ["Global Distribution", "AI Optimization", "Real-time Analytics", "Edge Computing"],
    category: "Content Delivery",
    enterprise: false,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-content-delivery-network"
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
    name: "AI Autonomous Systems Platform",
    description: "Next-generation autonomous systems with self-learning capabilities and real-time decision making",
    price: "$6,500/mo",
    features: ["Self-Learning Algorithms", "Real-time Decision Making", "Predictive Maintenance", "Autonomous Operations"],
    category: "Autonomous Systems",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-autonomous-systems"
  },
  {
    name: "AI Blockchain Solutions Pro",
    description: "Advanced blockchain integration with AI-powered smart contracts and decentralized applications",
    price: "$3,800/mo",
    features: ["Smart Contract AI", "Decentralized Applications", "Blockchain Analytics", "Crypto Trading AI"],
    category: "Blockchain AI",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-blockchain-solutions"
  },
  {
    name: "AI Edge Computing Platform",
    description: "Intelligent edge computing solutions with real-time processing and low-latency AI inference",
    price: "$2,500/mo",
    features: ["Edge AI Processing", "Real-time Inference", "Low-latency Computing", "Distributed Intelligence"],
    category: "Edge Computing",
    enterprise: false,
    icon: Cpu,
    link: "https://ziontechgroup.com/ai-edge-computing"
  },
  {
    name: "AI 5G Network Optimization",
    description: "Advanced 5G network management with AI-powered optimization and intelligent resource allocation",
    price: "$4,800/mo",
    features: ["5G Optimization", "Network Slicing", "Resource Allocation", "Performance Monitoring"],
    category: "5G Technology",
    enterprise: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-5g-optimization"
  },
  {
    name: "AI IoT Platform Pro",
    description: "Comprehensive IoT platform with AI-powered device management and data analytics",
    price: "$2,200/mo",
    features: ["Device Management", "Data Analytics", "Predictive Maintenance", "Security Monitoring"],
    category: "IoT AI",
    enterprise: false,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-iot-platform"
  },
  {
    name: "AI Cybersecurity Pro",
    description: "Advanced AI-powered cybersecurity platform with threat detection and automated response",
    price: "$3,500/mo",
    features: ["Threat Detection", "Automated Response", "Behavioral Analysis", "Zero-day Protection"],
    category: "Cybersecurity AI",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-cybersecurity"
  },
  {
    name: "AI API Management Platform",
    description: "Intelligent API management with AI-powered optimization, security, and analytics",
    price: "$1,600/mo",
    features: ["API Gateway", "Rate Limiting", "Security Policies", "Analytics Dashboard"],
    category: "API Management",
    enterprise: false,
    icon: Code,
    link: "https://ziontechgroup.com/ai-api-management"
  },
  {
    name: "AI Business Intelligence Pro",
    description: "Advanced business intelligence platform with AI-powered insights and predictive analytics",
    price: "$2,800/mo",
    features: ["Predictive Analytics", "Data Visualization", "Automated Reporting", "Business Insights"],
    category: "Business Intelligence",
    enterprise: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-business-intelligence"
  },
  {
    name: "AI Content Delivery Network",
    description: "Intelligent CDN with AI-powered optimization and global content distribution",
    price: "$1,900/mo",
    features: ["Global Distribution", "AI Optimization", "Real-time Analytics", "Edge Computing"],
    category: "Content Delivery",
    enterprise: false,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-content-delivery-network"
  },
  {
    name: "AI Voice Cloning Studio Pro",
    description: "Professional voice synthesis and cloning with 99.9% accuracy for enterprise applications",
    price: "$999/mo",
    features: ["Enterprise Voice Cloning", "Multi-language Support", "Emotion Control", "Real-time Synthesis"],
    category: "Audio AI",
    enterprise: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-voice-cloning-studio"
  },
  {
    name: "AI Code Security Auditor Pro",
    description: "Enterprise-grade code security analysis with vulnerability detection and compliance checking",
    price: "$599/mo",
    features: ["Enterprise Vulnerability Detection", "Compliance Checking", "Code Review", "Security Reports"],
    category: "Security AI",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-code-security-auditor"
  },
  {
    name: "AI Mental Health Companion Pro",
    description: "Enterprise mental health support with AI-powered personalized care and crisis intervention",
    price: "$499/mo",
    features: ["Enterprise Support", "Mood Tracking", "Crisis Intervention", "Therapy Recommendations"],
    category: "Health AI",
    enterprise: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-mental-health-companion"
  },
  {
    name: "AI Smart Home Controller Pro",
    description: "Enterprise smart building automation with AI-powered predictive maintenance and energy optimization",
    price: "$299/mo",
    features: ["Enterprise Automation", "Predictive Maintenance", "Energy Optimization", "Security Integration"],
    category: "IoT AI",
    enterprise: true,
    icon: Home,
    link: "https://ziontechgroup.com/ai-smart-home-controller"
  },
  {
    name: "AI Investment Optimizer Pro",
    description: "Enterprise portfolio management with real-time market analysis and advanced risk assessment",
    price: "$1,299/mo",
    features: ["Enterprise Portfolio Optimization", "Advanced Risk Assessment", "Market Analysis", "Automated Trading"],
    category: "Finance AI",
    enterprise: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-investment-optimizer"
  },
  {
    name: "AI Legal Research Pro",
    description: "Enterprise legal research platform with AI-powered case analysis and precedent discovery",
    price: "$999/mo",
    features: ["Enterprise Case Analysis", "Precedent Discovery", "Legal Research", "Document Review"],
    category: "Legal AI",
    enterprise: true,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-legal-research-pro"
  },
  {
    name: "AI Supply Chain Optimization Pro",
    description: "Enterprise supply chain management with predictive analytics and optimization algorithms",
    price: "$1,999/mo",
    features: ["Enterprise Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Supply Chain AI",
    enterprise: true,
    icon: Truck,
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro"
  },
  {
    name: "AI Energy Grid Management Pro",
    description: "Enterprise energy management system for smart grids with predictive maintenance and optimization",
    price: "$1,599/mo",
    features: ["Enterprise Grid Optimization", "Predictive Maintenance", "Energy Storage", "Demand Forecasting"],
    category: "Energy AI",
    enterprise: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-energy-grid-management-pro"
  },
  {
    name: "AI Space Technology Pro",
    description: "Enterprise space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Enterprise Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space AI",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro"
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Enterprise climate monitoring and carbon footprint optimization platform",
    price: "$3,200/mo",
    features: ["Enterprise Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environmental AI",
    enterprise: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro"
  },
  {
    name: "AI Drug Discovery Pro",
    description: "Enterprise pharmaceutical AI platform for accelerating drug discovery and development",
    price: "$4,500/mo",
    features: ["Enterprise Molecular Analysis", "Drug Interaction Prediction", "Clinical Trial Optimization", "Patent Research"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro"
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Enterprise fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Enterprise Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Financial AI",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro"
  },
  {
    name: "AI Agricultural Intelligence Pro",
    description: "Enterprise smart farming platform with AI-powered crop monitoring and yield prediction",
    price: "$799/mo",
    features: ["Enterprise Crop Monitoring", "Yield Prediction", "Automated Irrigation", "Pest Detection"],
    category: "Agriculture AI",
    enterprise: true,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-agricultural-intelligence-pro"
  },
  {
    name: "AI Fashion Design Studio Pro",
    description: "Enterprise fashion design platform with AI-powered trend analysis and pattern generation",
    price: "$499/mo",
    features: ["Enterprise Trend Analysis", "Pattern Generation", "Color Matching", "Size Optimization"],
    category: "Fashion AI",
    enterprise: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-fashion-design"
  },
  {
    name: "AI Music Composition Studio Pro",
    description: "Enterprise music creation platform with AI-powered genre analysis and composition",
    price: "$299/mo",
    features: ["Enterprise Genre Analysis", "Automated Composition", "Instrument Arrangement", "Royalty-free Music"],
    category: "Creative AI",
    enterprise: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-music-composition"
  },
  {
    name: "AI Manufacturing Optimizer Pro",
    description: "Enterprise manufacturing process optimization with predictive maintenance and quality control",
    price: "$1,299/mo",
    features: ["Enterprise Predictive Maintenance", "Quality Control", "Process Optimization", "Supply Chain Integration"],
    category: "Manufacturing AI",
    enterprise: true,
    icon: Factory,
    link: "https://ziontechgroup.com/ai-manufacturing"
  },
  {
    name: "AI Logistics Optimizer Pro",
    description: "Enterprise logistics management with route optimization and supply chain analytics",
    price: "$999/mo",
    features: ["Enterprise Route Optimization", "Supply Chain Analytics", "Fleet Management", "Demand Forecasting"],
    category: "Logistics AI",
    enterprise: true,
    icon: Truck,
    link: "https://ziontechgroup.com/ai-logistics-optimizer"
  },
  {
    name: "AI 3D Generation Studio Pro",
    description: "Enterprise 3D model generation and animation platform for creators and developers",
    price: "$599/mo",
    features: ["Enterprise 3D Model Generation", "Animation Creation", "Texture Synthesis", "Rendering Optimization"],
    category: "Creative AI",
    enterprise: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-3d-generation"
  },
  {
    name: "AI Mobile App Builder Pro",
    description: "Enterprise no-code AI platform for building native mobile apps with advanced AI features",
    price: "$499/mo",
    features: ["Enterprise No-Code Development", "AI Integration", "Cross-Platform", "Real-time Testing"],
    category: "Development AI",
    enterprise: true,
    icon: Smartphone,
    link: "https://ziontechgroup.com/ai-mobile-app-builder"
  },
  {
    name: "AI Holographic Workspace Pro",
    description: "Enterprise immersive 3D workspace with holographic UI for next-generation collaboration",
    price: "$1,999/mo",
    features: ["Enterprise 3D Holographic Interface", "Virtual Collaboration", "Spatial Computing", "AR/VR Integration"],
    category: "Productivity AI",
    enterprise: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-holographic-workspace"
  },
  {
    name: "AI Neural Memory Assistant Pro",
    description: "Enterprise cognitive enhancement platform with neural networks for memory and learning",
    price: "$699/mo",
    features: ["Enterprise Memory Enhancement", "Learning Acceleration", "Cognitive Training", "Brain Health Monitoring"],
    category: "Productivity AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-memory-assistant"
  },
  {
    name: "AI Quantum Financial Oracle Pro",
    description: "Enterprise quantum-powered financial prediction platform with 99.7% accuracy",
    price: "$2,999/mo",
    features: ["Enterprise Quantum Market Analysis", "Risk-Free Predictions", "Real-time Trading Signals", "Portfolio Optimization"],
    category: "Finance AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-financial-oracle"
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
  },
  {
    name: "AI IT Operations (AIOps)",
    description: "AI-powered IT operations with intelligent monitoring and automated incident response",
    price: "$2,800/mo",
    features: ["Intelligent Monitoring", "Automated Incident Response", "Predictive Maintenance", "Performance Optimization"],
    category: "AIOps",
    icon: Brain,
    link: "https://ziontechgroup.com/ai-ops"
  },
  {
    name: "Healthcare IT Solutions",
    description: "HIPAA-compliant healthcare IT infrastructure with advanced security and compliance",
    price: "$3,500/mo",
    features: ["HIPAA Compliance", "Medical Data Security", "Electronic Health Records", "Telemedicine Platform"],
    category: "Healthcare IT",
    icon: Heart,
    link: "https://ziontechgroup.com/healthcare-it"
  },
  {
    name: "Financial Services IT",
    description: "SOX-compliant financial IT infrastructure with advanced security and regulatory compliance",
    price: "$4,200/mo",
    features: ["SOX Compliance", "Financial Data Security", "Risk Management", "Regulatory Reporting"],
    category: "Financial IT",
    icon: BarChart,
    link: "https://ziontechgroup.com/financial-it"
  },
  {
    name: "Edge Computing Solutions",
    description: "Low-latency edge infrastructure with distributed computing and real-time processing",
    price: "$2,500/mo",
    features: ["Edge Infrastructure", "Low-latency Processing", "Distributed Computing", "Real-time Analytics"],
    category: "Edge Computing",
    icon: Cpu,
    link: "https://ziontechgroup.com/edge-computing"
  },
  {
    name: "5G Network Implementation",
    description: "High-speed 5G network deployment with advanced optimization and management",
    price: "$5,500/mo",
    features: ["5G Deployment", "Network Optimization", "Performance Monitoring", "Capacity Planning"],
    category: "5G Networks",
    icon: Globe,
    link: "https://ziontechgroup.com/5g-implementation"
  },
  {
    name: "IoT Platform Development",
    description: "Comprehensive IoT solutions with device management and data analytics",
    price: "$2,200/mo",
    features: ["Device Management", "Data Analytics", "Security Monitoring", "Scalable Architecture"],
    category: "IoT Development",
    icon: Settings,
    link: "https://ziontechgroup.com/iot-platform"
  },
  {
    name: "Quantum Computing Infrastructure",
    description: "Quantum computing infrastructure setup and optimization for advanced computing needs",
    price: "$8,500/mo",
    features: ["Quantum Infrastructure", "Algorithm Optimization", "Quantum Security", "Research Support"],
    category: "Quantum Computing",
    icon: Brain,
    link: "https://ziontechgroup.com/quantum-computing-infrastructure"
  },
  {
    name: "AR/VR Development Platform",
    description: "Immersive AR/VR development platform with advanced rendering and interaction capabilities",
    price: "$3,200/mo",
    features: ["AR/VR Development", "3D Rendering", "Motion Tracking", "Haptic Feedback"],
    category: "AR/VR",
    icon: Eye,
    link: "https://ziontechgroup.com/ar-vr-platform"
  },
  {
    name: "Smart City Infrastructure",
    description: "Comprehensive smart city infrastructure with IoT integration and data analytics",
    price: "$6,800/mo",
    features: ["Smart Infrastructure", "IoT Integration", "Data Analytics", "Citizen Services"],
    category: "Smart Cities",
    icon: Building,
    link: "https://ziontechgroup.com/smart-city-infrastructure"
  },
  {
    name: "Robotics Integration Services",
    description: "Advanced robotics integration with AI-powered automation and control systems",
    price: "$4,500/mo",
    features: ["Robotics Integration", "AI Automation", "Control Systems", "Safety Protocols"],
    category: "Robotics",
    icon: Settings,
    link: "https://ziontechgroup.com/robotics-integration"
  },
  {
    name: "Digital Twin Platform",
    description: "Digital twin technology for real-time monitoring and simulation of physical assets",
    price: "$3,800/mo",
    features: ["Digital Twin Creation", "Real-time Monitoring", "Simulation Engine", "Predictive Analytics"],
    category: "Digital Twin",
    icon: Eye,
    link: "https://ziontechgroup.com/digital-twin-platform"
  },
  {
    name: "AI-Powered Data Center Management",
    description: "Intelligent data center operations with AI-powered optimization and predictive maintenance",
    price: "$4,500/mo",
    features: ["AI Optimization", "Predictive Maintenance", "Energy Efficiency", "Performance Monitoring"],
    category: "Data Center",
    icon: Database,
    link: "https://ziontechgroup.com/ai-data-center-management"
  },
  {
    name: "Quantum Computing Infrastructure",
    description: "Quantum computing infrastructure setup and optimization for advanced computing needs",
    price: "$8,500/mo",
    features: ["Quantum Infrastructure", "Algorithm Optimization", "Quantum Security", "Research Support"],
    category: "Quantum Computing",
    icon: Brain,
    link: "https://ziontechgroup.com/quantum-computing-infrastructure"
  },
  {
    name: "AR/VR Development Platform",
    description: "Immersive AR/VR development platform with advanced rendering and interaction capabilities",
    price: "$3,200/mo",
    features: ["AR/VR Development", "3D Rendering", "Motion Tracking", "Haptic Feedback"],
    category: "AR/VR",
    icon: Eye,
    link: "https://ziontechgroup.com/ar-vr-platform"
  },
  {
    name: "Smart City Infrastructure",
    description: "Comprehensive smart city infrastructure with IoT integration and data analytics",
    price: "$6,800/mo",
    features: ["Smart Infrastructure", "IoT Integration", "Data Analytics", "Citizen Services"],
    category: "Smart Cities",
    icon: Building,
    link: "https://ziontechgroup.com/smart-city-infrastructure"
  },
  {
    name: "Robotics Integration Services",
    description: "Advanced robotics integration with AI-powered automation and control systems",
    price: "$4,500/mo",
    features: ["Robotics Integration", "AI Automation", "Control Systems", "Safety Protocols"],
    category: "Robotics",
    icon: Settings,
    link: "https://ziontechgroup.com/robotics-integration"
  },
  {
    name: "AI Cloud Cost Optimization",
    description: "Smart cloud resource management with AI-powered cost optimization and performance tuning",
    price: "$2,200/mo",
    features: ["Cost Optimization", "Resource Management", "Performance Tuning", "Automated Scaling"],
    category: "Cloud Optimization",
    icon: Cloud,
    link: "https://ziontechgroup.com/ai-cloud-optimization"
  },
  {
    name: "AI Security Operations Center",
    description: "AI-powered security monitoring with threat detection and automated incident response",
    price: "$3,500/mo",
    features: ["Threat Detection", "Automated Response", "Security Monitoring", "Incident Management"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/ai-security-operations"
  },
  {
    name: "Data Lake & Warehouse Solutions",
    description: "Enterprise data management with AI-powered analytics and real-time processing",
    price: "$2,800/mo",
    features: ["Data Lake Setup", "Warehouse Design", "Real-time Processing", "AI Analytics"],
    category: "Data Management",
    icon: Database,
    link: "https://ziontechgroup.com/data-warehouse"
  },
  {
    name: "Real-time Analytics Platform",
    description: "Live data processing and analytics with AI-powered insights and visualization",
    price: "$2,500/mo",
    features: ["Real-time Processing", "Live Analytics", "Data Visualization", "AI Insights"],
    category: "Analytics",
    icon: BarChart,
    link: "https://ziontechgroup.com/real-time-analytics"
  },
  {
    name: "AI Business Intelligence Pro",
    description: "Advanced analytics platform with AI-powered insights and predictive analytics",
    price: "$2,800/mo",
    features: ["Predictive Analytics", "Data Visualization", "Automated Reporting", "Business Insights"],
    category: "Business Intelligence",
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-business-intelligence"
  },
  {
    name: "AI Content Delivery Network Pro",
    description: "Intelligent CDN with AI-powered optimization and global content distribution",
    price: "$1,900/mo",
    features: ["Global Distribution", "AI Optimization", "Real-time Analytics", "Edge Computing"],
    category: "Content Delivery",
    icon: Globe,
    link: "https://ziontechgroup.com/ai-content-delivery-network"
  },
  {
    name: "AI API Management Pro",
    description: "Intelligent API management with AI-powered optimization, security, and analytics",
    price: "$1,600/mo",
    features: ["API Gateway", "Rate Limiting", "Security Policies", "Analytics Dashboard"],
    category: "API Management",
    icon: Code,
    link: "https://ziontechgroup.com/ai-api-management"
  },
  {
    name: "AI Infrastructure Monitoring Pro",
    description: "Intelligent infrastructure monitoring with AI-powered insights and automation",
    price: "$1,900/mo",
    features: ["AI Monitoring", "Predictive Analytics", "Automated Responses", "Performance Insights"],
    category: "AI Infrastructure",
    icon: Activity,
    link: "https://ziontechgroup.com/ai-infrastructure-monitoring"
  },
  {
    name: "AI Security Operations Center Pro",
    description: "AI-powered security monitoring with threat detection and automated incident response",
    price: "$3,500/mo",
    features: ["Threat Detection", "Automated Response", "Security Monitoring", "Incident Management"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/ai-security-operations"
  },
  {
    name: "AI Cloud Cost Optimization Pro",
    description: "Smart cloud resource management with AI-powered cost optimization and performance tuning",
    price: "$2,200/mo",
    features: ["Cost Optimization", "Resource Management", "Performance Tuning", "Automated Scaling"],
    category: "Cloud Optimization",
    icon: Cloud,
    link: "https://ziontechgroup.com/ai-cloud-optimization"
  },
  {
    name: "AI Data Center Management Pro",
    description: "Intelligent data center operations with AI-powered optimization and predictive maintenance",
    price: "$4,500/mo",
    features: ["AI Optimization", "Predictive Maintenance", "Energy Efficiency", "Performance Monitoring"],
    category: "Data Center",
    icon: Database,
    link: "https://ziontechgroup.com/ai-data-center-management"
  },
  {
    name: "Blockchain Integration Services Pro",
    description: "Web3 and blockchain solutions for decentralized applications and smart contracts",
    price: "$3,500/mo",
    features: ["Smart Contracts", "DApp Development", "Token Economics", "Security Audits"],
    category: "Blockchain",
    icon: Shield,
    link: "https://ziontechgroup.com/blockchain-integration-services"
  },
  {
    name: "Smart Contract Security Audit Pro",
    description: "Comprehensive security auditing for blockchain smart contracts",
    price: "$2,200/mo",
    features: ["Security Analysis", "Vulnerability Assessment", "Code Review", "Compliance Check"],
    category: "Blockchain Security",
    icon: Shield,
    link: "https://ziontechgroup.com/smart-contract-security-audit"
  },
  {
    name: "AI IT Operations (AIOps) Pro",
    description: "AI-powered IT operations with intelligent monitoring and automated incident response",
    price: "$2,800/mo",
    features: ["Intelligent Monitoring", "Automated Incident Response", "Predictive Maintenance", "Performance Optimization"],
    category: "AIOps",
    icon: Brain,
    link: "https://ziontechgroup.com/ai-ops"
  },
  {
    name: "Healthcare IT Solutions Pro",
    description: "HIPAA-compliant healthcare IT infrastructure with advanced security and compliance",
    price: "$3,500/mo",
    features: ["HIPAA Compliance", "Medical Data Security", "Electronic Health Records", "Telemedicine Platform"],
    category: "Healthcare IT",
    icon: Heart,
    link: "https://ziontechgroup.com/healthcare-it"
  },
  {
    name: "Financial Services IT Pro",
    description: "SOX-compliant financial IT infrastructure with advanced security and regulatory compliance",
    price: "$4,200/mo",
    features: ["SOX Compliance", "Financial Data Security", "Risk Management", "Regulatory Reporting"],
    category: "Financial IT",
    icon: BarChart,
    link: "https://ziontechgroup.com/financial-it"
  },
  {
    name: "Edge Computing Solutions Pro",
    description: "Low-latency edge infrastructure with distributed computing and real-time processing",
    price: "$2,500/mo",
    features: ["Edge Infrastructure", "Low-latency Processing", "Distributed Computing", "Real-time Analytics"],
    category: "Edge Computing",
    icon: Cpu,
    link: "https://ziontechgroup.com/edge-computing"
  },
  {
    name: "5G Network Implementation Pro",
    description: "High-speed 5G network deployment with advanced optimization and management",
    price: "$5,500/mo",
    features: ["5G Deployment", "Network Optimization", "Performance Monitoring", "Capacity Planning"],
    category: "5G Networks",
    icon: Globe,
    link: "https://ziontechgroup.com/5g-implementation"
  },
  {
    name: "IoT Platform Development Pro",
    description: "Comprehensive IoT solutions with device management and data analytics",
    price: "$2,200/mo",
    features: ["Device Management", "Data Analytics", "Security Monitoring", "Scalable Architecture"],
    category: "IoT Development",
    icon: Settings,
    link: "https://ziontechgroup.com/iot-platform"
  },
  {
    name: "Quantum Computing Infrastructure Pro",
    description: "Quantum computing infrastructure setup and optimization for advanced computing needs",
    price: "$8,500/mo",
    features: ["Quantum Infrastructure", "Algorithm Optimization", "Quantum Security", "Research Support"],
    category: "Quantum Computing",
    icon: Brain,
    link: "https://ziontechgroup.com/quantum-computing-infrastructure"
  },
  {
    name: "AR/VR Development Platform Pro",
    description: "Immersive AR/VR development platform with advanced rendering and interaction capabilities",
    price: "$3,200/mo",
    features: ["AR/VR Development", "3D Rendering", "Motion Tracking", "Haptic Feedback"],
    category: "AR/VR",
    icon: Eye,
    link: "https://ziontechgroup.com/ar-vr-platform"
  },
  {
    name: "Smart City Infrastructure Pro",
    description: "Comprehensive smart city infrastructure with IoT integration and data analytics",
    price: "$6,800/mo",
    features: ["Smart Infrastructure", "IoT Integration", "Data Analytics", "Citizen Services"],
    category: "Smart Cities",
    icon: Building,
    link: "https://ziontechgroup.com/smart-city-infrastructure"
  },
  {
    name: "Robotics Integration Services Pro",
    description: "Advanced robotics integration with AI-powered automation and control systems",
    price: "$4,500/mo",
    features: ["Robotics Integration", "AI Automation", "Control Systems", "Safety Protocols"],
    category: "Robotics",
    icon: Settings,
    link: "https://ziontechgroup.com/robotics-integration"
  },
  {
    name: "Digital Twin Platform Pro",
    description: "Digital twin technology for real-time monitoring and simulation of physical assets",
    price: "$3,800/mo",
    features: ["Digital Twin Creation", "Real-time Monitoring", "Simulation Engine", "Predictive Analytics"],
    category: "Digital Twin",
    icon: Eye,
    link: "https://ziontechgroup.com/digital-twin-platform"
  }
];

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="cyber-card p-6 animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-6 bg-gray-700 rounded"></div>
  </div>
);
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    avatar: "SJ",
    content: "Zion Tech Group's AI solutions transformed our operations completely. We've seen a 300% increase in efficiency and 70% cost reduction. Their quantum computing platform is revolutionary."
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLabs",
    avatar: "MC",
    content: "The AI-powered project management tool has been a game-changer. Our team productivity increased by 90% and project delivery time reduced by 60%. Highly recommended!"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer",
    company: "MedTech Innovations",
    avatar: "ER",
    content: "Their AI healthcare solutions are exceptional. The diagnostic accuracy improved by 85% and patient satisfaction increased by 90%. The HIPAA compliance is flawless."
  }
];

// Stats data
const stats = [
  {
    number: "500+",
    label: "Enterprise Clients",
    icon: Building
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
    label: "Countries Served",
    icon: Globe
  }
];

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Future-Ready Technology</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, digital transformation, and innovative micro SAAS solutions." />
        <meta name="keywords" content="AI services, IT solutions, cloud infrastructure, digital transformation, micro SAAS, artificial intelligence, machine learning, cybersecurity, web development, mobile development" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
<<<<<<< HEAD
      <div className="min-h-screen futuristic-bg cyber-grid">
        {/* Particle Effects */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
=======
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden quantum-field-ultra">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Quantum Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full quantum-particle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full quantum-particle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full quantum-particle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-blue-400 rounded-full quantum-particle" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-ultra neon-pulse">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto fade-in-up">
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

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Comprehensive AI and IT solutions for modern enterprises. Transform your business with cutting-edge technology and innovative solutions.</p>
          </div>
          
          {/* Micro SAAS Services */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Micro SAAS Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="futuristic-card-ultra p-6 hover:scale-105 transition-all duration-300 group cursor-pointer" onClick={() => window.open(service.link, '_blank')}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
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
                      <button className="neon-button-ultra text-sm">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Enterprise AI Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`holographic-advanced p-6 hover:scale-105 transition-all duration-300 group cursor-pointer ${service.enterprise ? 'ring-2 ring-purple-400/30' : ''}`} onClick={() => window.open(service.link, '_blank')}>
                  {service.enterprise && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Enterprise
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{service.name}</h3>
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
                      <button className="neon-button-enhanced text-sm">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">IT Infrastructure Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-grid-advanced p-6 hover:scale-105 transition-all duration-300 group cursor-pointer" onClick={() => window.open(service.link, '_blank')}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-400/25">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.name}</h3>
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
                      <button className="neon-button text-sm">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}

          
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
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Hero Section */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text floating-element">
              ZION TECH GROUP
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-4 holographic">
              ADVANCED AI & IT SOLUTIONS
            </p>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, innovative micro SAAS solutions, 
              and comprehensive IT services. We deliver future-ready technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact" 
                className="neon-button px-12 py-4 text-lg font-bold glow-effect"
              >
                Get Started Now
              </a>
              <a 
                href="/about" 
                className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
              >
                Learn More
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">Ready to transform your business?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
                <span>📞 +1 302 464 0950</span>
                <span>✉️ kleber@ziontechgroup.com</span>
                <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
<<<<<<< HEAD
            </div>
          </div>
          
          {/* Services Preview */}
          <div className={`mt-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text-purple">
              OUR SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, 
                  computer vision, and custom AI development.
                </p>
                <div className="mb-4">
                  <span className="text-neon-blue font-bold text-lg">$5,000 - $50,000</span>
=======
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="holographic-card p-8 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
                </div>
                <a href="/ai-services" className="neon-button w-full text-center block">
                  Explore AI Services
                </a>
              </div>

<<<<<<< HEAD
              {/* Micro SAAS */}
              <div className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-white mb-4 neon-text-pink">Micro SAAS Solutions</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Innovative micro SAAS applications including task management, expense tracking, 
                  customer support, and email marketing platforms.
                </p>
                <div className="mb-4">
                  <span className="text-neon-pink font-bold text-lg">$19 - $999/month</span>
                </div>
                <a href="/micro-saas-solutions" className="neon-button neon-button-purple w-full text-center block">
                  View SAAS Solutions
                </a>
=======
      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 cyber-text-enhanced">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
              </div>

<<<<<<< HEAD
              {/* IT Solutions */}
              <div className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">IT Solutions</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Comprehensive IT services including cloud infrastructure, cybersecurity, 
                  web development, mobile apps, and network solutions.
                </p>
                <div className="mb-4">
                  <span className="text-neon-blue font-bold text-lg">$1,000 - $60,000</span>
                </div>
                <a href="/it-services" className="neon-button w-full text-center block">
                  Discover IT Solutions
                </a>
              </div>
            </div>
          </div>
=======
      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
          </p>
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
          
          {/* AI Tools Preview */}
          <div className={`mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
              AI-POWERED TOOLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.microSaas.slice(0, 4).map((tool, index) => (
                <div key={tool.id} className="futuristic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tool.shortDescription}</p>
                  <div className="mb-3">
                    <span className="text-neon-green font-bold text-sm">{tool.marketPrice}</span>
                  </div>
                  <a 
                    href={`/${tool.id}`} 
                    className="neon-button w-full text-center block text-sm py-2"
                  >
                    Try Now
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/services" className="neon-button neon-button-purple px-8 py-3">
                View All Services →
              </a>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className={`mt-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text-pink">
              WHY CHOOSE ZION TECH GROUP?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">Cutting-edge technology and innovative solutions</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-300">Rapid deployment and implementation</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security and 99.9% uptime</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Support</h3>
                <p className="text-gray-300">24/7 expert support and maintenance</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mt-24 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic">
                READY TO TRANSFORM YOUR BUSINESS?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI and IT solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="neon-button px-12 py-4 text-lg font-bold glow-effect"
                >
                  Start Your Journey
                </a>
                <a 
                  href="/pricing" 
                  className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
<<<<<<< HEAD
=======
          
          <button className="neon-button-ultra text-lg py-4 px-8">
            Get Free Consultation
          </button>
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
        </div>
      </div>
    </>
  );
};

export default HomePage;