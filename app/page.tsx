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
    description: "Professional voice synthesis and cloning with natural speech patterns and emotional tones",
    price: "$299/mo",
    features: ["Voice Cloning", "Emotional Speech", "Multi-language Support", "Real-time Synthesis"],
    category: "Audio",
    popular: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-voice-cloning-studio"
  },
  {
    name: "AI Code Security Auditor",
    description: "Automated code security analysis with vulnerability detection and compliance checking",
    price: "$199/mo",
    features: ["Vulnerability Detection", "Compliance Checking", "Code Quality Analysis", "Security Reports"],
    category: "Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-code-security-auditor"
  },
  {
    name: "AI Mental Health Companion",
    description: "AI-powered mental health support with personalized therapy and wellness tracking",
    price: "$149/mo",
    features: ["Personalized Therapy", "Mood Tracking", "Crisis Intervention", "Wellness Plans"],
    category: "Health",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-mental-health-companion"
  },
  {
    name: "AI Smart Home Controller",
    description: "Intelligent home automation with voice control and predictive maintenance",
    price: "$129/mo",
    features: ["Voice Control", "Predictive Maintenance", "Energy Optimization", "Security Monitoring"],
    category: "IoT",
    popular: true,
    icon: Home,
    link: "https://ziontechgroup.com/ai-smart-home-controller"
  },
  {
    name: "AI Investment Optimizer",
    description: "Advanced portfolio management with AI-powered investment strategies and risk analysis",
    price: "$399/mo",
    features: ["Portfolio Optimization", "Risk Analysis", "Market Prediction", "Automated Trading"],
    category: "Finance",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-investment-optimizer"
  },
  {
    name: "AI Language Learning Pro",
    description: "Personalized language learning with AI tutors and immersive conversation practice",
    price: "$89/mo",
    features: ["AI Tutors", "Conversation Practice", "Pronunciation Analysis", "Progress Tracking"],
    category: "Education",
    popular: true,
    icon: GraduationCap,
    link: "https://ziontechgroup.com/ai-language-learning-pro"
  },
  {
    name: "AI Real Estate Analyzer",
    description: "Smart property analysis with market predictions and investment recommendations",
    price: "$179/mo",
    features: ["Market Analysis", "Property Valuation", "Investment Recommendations", "Rental Yield Calculator"],
    category: "Real Estate",
    popular: true,
    icon: Building,
    link: "https://ziontechgroup.com/ai-real-estate-analyzer"
  },
  {
    name: "AI Travel Planner Pro",
    description: "Intelligent travel planning with personalized itineraries and real-time optimization",
    price: "$99/mo",
    features: ["Personalized Itineraries", "Real-time Optimization", "Budget Management", "Local Insights"],
    category: "Travel",
    popular: true,
    icon: Plane,
    link: "https://ziontechgroup.com/ai-travel-planner-pro"
  },
  {
    name: "AI Fitness Nutrition Coach",
    description: "Personalized nutrition and fitness coaching with meal planning and workout optimization",
    price: "$119/mo",
    features: ["Meal Planning", "Workout Optimization", "Progress Tracking", "Nutrition Analysis"],
    category: "Health",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-fitness-nutrition-coach"
  },
  {
    name: "AI Personal Stylist",
    description: "AI-powered fashion styling with body analysis and trend recommendations",
    price: "$79/mo",
    features: ["Body Analysis", "Trend Recommendations", "Outfit Planning", "Shopping Assistant"],
    category: "Fashion",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-personal-stylist"
  },
  {
    name: "AI Pet Care Assistant",
    description: "Comprehensive pet care management with health monitoring and behavior analysis",
    price: "$69/mo",
    features: ["Health Monitoring", "Behavior Analysis", "Vet Scheduling", "Care Reminders"],
    category: "Pet Care",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-pet-care-assistant"
  },
  {
    name: "AI Home Energy Optimizer",
    description: "Smart energy management with consumption analysis and cost optimization",
    price: "$89/mo",
    features: ["Consumption Analysis", "Cost Optimization", "Renewable Integration", "Usage Predictions"],
    category: "Energy",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-home-energy-optimizer"
  },
  {
    name: "AI Personal Finance Manager",
    description: "Comprehensive financial management with budgeting, investing, and debt optimization",
    price: "$149/mo",
    features: ["Budgeting Tools", "Investment Advice", "Debt Optimization", "Financial Planning"],
    category: "Finance",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-personal-finance-manager"
  },
  {
    name: "AI Study Assistant Pro",
    description: "Intelligent study companion with personalized learning paths and exam preparation",
    price: "$79/mo",
    features: ["Personalized Learning", "Exam Preparation", "Progress Tracking", "Study Scheduling"],
    category: "Education",
    popular: true,
    icon: BookOpen,
    link: "https://ziontechgroup.com/ai-study-assistant-pro"
  },
  {
    name: "AI Wedding Planner",
    description: "Complete wedding planning solution with vendor recommendations and timeline management",
    price: "$199/mo",
    features: ["Vendor Recommendations", "Timeline Management", "Budget Tracking", "Guest Management"],
    category: "Events",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-wedding-planner"
  },
  {
    name: "AI Garden Assistant",
    description: "Smart gardening companion with plant care guidance and growth optimization",
    price: "$59/mo",
    features: ["Plant Care Guidance", "Growth Optimization", "Pest Detection", "Harvest Planning"],
    category: "Gardening",
    popular: true,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-garden-assistant"
  },
  {
    name: "AI Sleep Optimizer",
    description: "Advanced sleep analysis and optimization with personalized recommendations",
    price: "$89/mo",
    features: ["Sleep Analysis", "Personalized Recommendations", "Sleep Tracking", "Environment Control"],
    category: "Health",
    popular: true,
    icon: Clock,
    link: "https://ziontechgroup.com/ai-sleep-optimizer"
  },
  {
    name: "AI Personal Chef",
    description: "AI-powered meal planning and cooking assistance with dietary restrictions",
    price: "$99/mo",
    features: ["Meal Planning", "Cooking Assistance", "Dietary Restrictions", "Grocery Lists"],
    category: "Food",
    popular: true,
    icon: ChefHat,
    link: "https://ziontechgroup.com/ai-personal-chef"
  },
  {
    name: "AI Productivity Coach",
    description: "Personal productivity optimization with habit tracking and time management",
    price: "$79/mo",
    features: ["Habit Tracking", "Time Management", "Goal Setting", "Productivity Analytics"],
    category: "Productivity",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-productivity-coach"
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
    name: "AI Quantum Machine Learning",
    description: "Revolutionary quantum machine learning platform for solving complex optimization problems",
    price: "$8,500/mo",
    features: ["Quantum Algorithms", "Complex Optimization", "Quantum Neural Networks", "Superposition Computing"],
    category: "Quantum AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-machine-learning"
  },
  {
    name: "AI Autonomous Vehicle Platform",
    description: "Complete autonomous vehicle management system with real-time decision making",
    price: "$12,000/mo",
    features: ["Real-time Decision Making", "Sensor Fusion", "Path Planning", "Safety Systems"],
    category: "Autonomous Systems",
    enterprise: true,
    icon: Car,
    link: "https://ziontechgroup.com/ai-autonomous-vehicle-platform"
  },
  {
    name: "AI Space Mission Control",
    description: "Advanced space mission management with AI-powered trajectory optimization",
    price: "$15,000/mo",
    features: ["Mission Planning", "Trajectory Optimization", "Satellite Management", "Deep Space Navigation"],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-mission-control"
  },
  {
    name: "AI Climate Prediction Engine",
    description: "Advanced climate modeling with 99.8% accuracy in weather and climate predictions",
    price: "$5,500/mo",
    features: ["Climate Modeling", "Weather Prediction", "Disaster Forecasting", "Environmental Analysis"],
    category: "Environmental AI",
    enterprise: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-prediction-engine"
  },
  {
    name: "AI Molecular Design Studio",
    description: "Revolutionary molecular design platform for pharmaceuticals and materials science",
    price: "$7,200/mo",
    features: ["Molecular Design", "Drug Discovery", "Material Science", "Chemical Synthesis"],
    category: "Scientific AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-molecular-design-studio"
  },
  {
    name: "AI Neural Interface Platform",
    description: "Brain-computer interface technology for direct neural communication and control",
    price: "$10,000/mo",
    features: ["Neural Interfaces", "Brain-Computer Communication", "Thought Control", "Neural Rehabilitation"],
    category: "Neural Technology",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-interface-platform"
  },
  {
    name: "AI Holographic Display System",
    description: "Advanced holographic display technology with AI-powered content generation",
    price: "$6,800/mo",
    features: ["Holographic Displays", "3D Content Generation", "Interactive Holograms", "Spatial Computing"],
    category: "Display Technology",
    enterprise: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-holographic-display-system"
  },
  {
    name: "AI Quantum Cryptography",
    description: "Unbreakable quantum encryption system for ultra-secure communications",
    price: "$4,200/mo",
    features: ["Quantum Encryption", "Unbreakable Security", "Quantum Key Distribution", "Secure Communications"],
    category: "Quantum Security",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-quantum-cryptography"
  },
  {
    name: "AI Time Series Prophet",
    description: "Advanced time series forecasting with 99.9% accuracy for financial and business predictions",
    price: "$3,500/mo",
    features: ["Time Series Forecasting", "Financial Predictions", "Business Intelligence", "Trend Analysis"],
    category: "Predictive Analytics",
    enterprise: false,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-time-series-prophet"
  },
  {
    name: "AI Emotion Recognition Engine",
    description: "Advanced emotion detection and analysis for human-computer interaction",
    price: "$2,800/mo",
    features: ["Emotion Detection", "Facial Analysis", "Voice Emotion", "Behavioral Analysis"],
    category: "Computer Vision",
    enterprise: false,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-emotion-recognition-engine"
  },
  {
    name: "AI Synthetic Data Generator",
    description: "AI-powered synthetic data generation for training and testing machine learning models",
    price: "$1,600/mo",
    features: ["Synthetic Data Generation", "Privacy-Preserving", "Model Training", "Data Augmentation"],
    category: "Data Science",
    enterprise: false,
    icon: Database,
    link: "https://ziontechgroup.com/ai-synthetic-data-generator"
  },
  {
    name: "AI Quantum Financial Modeling",
    description: "Quantum-powered financial modeling for ultra-accurate market predictions",
    price: "$9,500/mo",
    features: ["Quantum Financial Models", "Market Predictions", "Risk Analysis", "Portfolio Optimization"],
    category: "Quantum Finance",
    enterprise: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-quantum-financial-modeling"
  },
  {
    name: "AI Digital Twin Creator",
    description: "Advanced digital twin technology for real-time simulation and monitoring",
    price: "$4,800/mo",
    features: ["Digital Twin Creation", "Real-time Simulation", "Predictive Maintenance", "Virtual Testing"],
    category: "Digital Twin",
    enterprise: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-digital-twin-creator"
  },
  {
    name: "AI Metaverse Builder",
    description: "Complete metaverse development platform with AI-powered world generation",
    price: "$7,500/mo",
    features: ["Metaverse Creation", "AI World Generation", "Virtual Reality", "Avatar Systems"],
    category: "Metaverse",
    enterprise: true,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-metaverse-builder"
  },
  {
    name: "AI Quantum Internet",
    description: "Next-generation quantum internet infrastructure for ultra-secure global communications",
    price: "$20,000/mo",
    features: ["Quantum Internet", "Global Quantum Network", "Quantum Teleportation", "Secure Communications"],
    category: "Quantum Infrastructure",
    enterprise: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-quantum-internet"
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
    name: "AI-Powered Data Center",
    description: "Intelligent data center infrastructure with AI-driven optimization and management",
    price: "$8,500/mo",
    features: ["AI Infrastructure Management", "Predictive Maintenance", "Energy Optimization", "Automated Scaling"],
    category: "Data Center",
    icon: Database,
    link: "https://ziontechgroup.com/ai-powered-data-center"
  },
  {
    name: "Quantum Computing Infrastructure",
    description: "Complete quantum computing setup with quantum processors and quantum algorithms",
    price: "$25,000/mo",
    features: ["Quantum Processors", "Quantum Algorithms", "Quantum Security", "Quantum Networking"],
    category: "Quantum Computing",
    icon: Brain,
    link: "https://ziontechgroup.com/quantum-computing-infrastructure"
  },
  {
    name: "AI Security Operations Center",
    description: "Advanced AI-powered security monitoring and threat response system",
    price: "$4,200/mo",
    features: ["AI Threat Detection", "Automated Response", "Security Analytics", "Incident Management"],
    category: "Cybersecurity",
    icon: Shield,
    link: "https://ziontechgroup.com/ai-security-operations-center"
  },
  {
    name: "Edge AI Computing Network",
    description: "Distributed edge computing network with AI processing capabilities",
    price: "$3,500/mo",
    features: ["Edge AI Processing", "Low-latency Computing", "Distributed Intelligence", "Real-time Analytics"],
    category: "Edge Computing",
    icon: Cpu,
    link: "https://ziontechgroup.com/edge-ai-computing-network"
  },
  {
    name: "AI Cloud Cost Optimizer",
    description: "Intelligent cloud resource management with cost optimization and performance tuning",
    price: "$1,800/mo",
    features: ["Cost Optimization", "Resource Management", "Performance Tuning", "Automated Scaling"],
    category: "Cloud Management",
    icon: Cloud,
    link: "https://ziontechgroup.com/ai-cloud-cost-optimizer"
  },
  {
    name: "Blockchain Infrastructure Pro",
    description: "Complete blockchain infrastructure with smart contracts and decentralized applications",
    price: "$5,500/mo",
    features: ["Blockchain Setup", "Smart Contracts", "DApp Development", "DeFi Integration"],
    category: "Blockchain",
    icon: Shield,
    link: "https://ziontechgroup.com/blockchain-infrastructure-pro"
  },
  {
    name: "AI Network Optimization",
    description: "Intelligent network management with AI-powered optimization and monitoring",
    price: "$2,800/mo",
    features: ["Network Optimization", "Traffic Management", "Performance Monitoring", "Automated Configuration"],
    category: "Networking",
    icon: Globe,
    link: "https://ziontechgroup.com/ai-network-optimization"
  },
  {
    name: "Quantum-Safe Security Suite",
    description: "Post-quantum cryptography implementation for future-proof security",
    price: "$6,200/mo",
    features: ["Quantum-Safe Encryption", "Post-Quantum Algorithms", "Future-Proof Security", "Migration Tools"],
    category: "Quantum Security",
    icon: Shield,
    link: "https://ziontechgroup.com/quantum-safe-security-suite"
  },
  {
    name: "AI Disaster Recovery System",
    description: "Intelligent disaster recovery with AI-powered backup and restoration",
    price: "$3,200/mo",
    features: ["AI Backup Management", "Automated Recovery", "Data Integrity", "Business Continuity"],
    category: "Disaster Recovery",
    icon: Shield,
    link: "https://ziontechgroup.com/ai-disaster-recovery-system"
  },
  {
    name: "Smart City Infrastructure",
    description: "Complete smart city technology stack with IoT and AI integration",
    price: "$15,000/mo",
    features: ["IoT Integration", "Smart Sensors", "Data Analytics", "Citizen Services"],
    category: "Smart Cities",
    icon: Building,
    link: "https://ziontechgroup.com/smart-city-infrastructure"
  },
  {
    name: "AI Compliance Management",
    description: "Automated compliance monitoring and reporting for various industry standards",
    price: "$2,500/mo",
    features: ["Compliance Monitoring", "Automated Reporting", "Risk Assessment", "Audit Preparation"],
    category: "Compliance",
    icon: Scale,
    link: "https://ziontechgroup.com/ai-compliance-management"
  },
  {
    name: "Quantum Internet Gateway",
    description: "Quantum internet connectivity and quantum communication infrastructure",
    price: "$12,000/mo",
    features: ["Quantum Internet", "Quantum Communication", "Quantum Teleportation", "Secure Quantum Channels"],
    category: "Quantum Internet",
    icon: Globe,
    link: "https://ziontechgroup.com/quantum-internet-gateway"
  },
  {
    name: "AI Performance Monitoring",
    description: "Comprehensive AI-powered performance monitoring and optimization",
    price: "$1,900/mo",
    features: ["Performance Monitoring", "AI Optimization", "Predictive Analytics", "Automated Tuning"],
    category: "Performance",
    icon: Activity,
    link: "https://ziontechgroup.com/ai-performance-monitoring"
  },
  {
    name: "Metaverse Infrastructure",
    description: "Complete metaverse infrastructure with VR/AR capabilities and virtual worlds",
    price: "$8,800/mo",
    features: ["VR/AR Infrastructure", "Virtual Worlds", "Avatar Systems", "Spatial Computing"],
    category: "Metaverse",
    icon: Eye,
    link: "https://ziontechgroup.com/metaverse-infrastructure"
  },
  {
    name: "AI Data Lake Management",
    description: "Intelligent data lake management with AI-powered data processing and analytics",
    price: "$3,800/mo",
    features: ["Data Lake Management", "AI Data Processing", "Data Analytics", "Data Governance"],
    category: "Data Management",
    icon: Database,
    link: "https://ziontechgroup.com/ai-data-lake-management"
  },
  {
    name: "Quantum Machine Learning Platform",
    description: "Quantum machine learning infrastructure for advanced AI computations",
    price: "$18,000/mo",
    features: ["Quantum ML Algorithms", "Quantum Neural Networks", "Quantum Optimization", "Quantum AI Models"],
    category: "Quantum AI",
    icon: Brain,
    link: "https://ziontechgroup.com/quantum-machine-learning-platform"
  },
  {
    name: "AI Zero-Trust Security",
    description: "Complete zero-trust security architecture with AI-powered threat detection",
    price: "$4,500/mo",
    features: ["Zero-Trust Architecture", "AI Threat Detection", "Identity Management", "Continuous Verification"],
    category: "Zero-Trust Security",
    icon: Shield,
    link: "https://ziontechgroup.com/ai-zero-trust-security"
  },
  {
    name: "Neural Network Infrastructure",
    description: "Specialized infrastructure for large-scale neural network training and inference",
    price: "$7,200/mo",
    features: ["Neural Network Training", "GPU Clusters", "Distributed Computing", "Model Optimization"],
    category: "Neural Networks",
    icon: Brain,
    link: "https://ziontechgroup.com/neural-network-infrastructure"
  },
  {
    name: "AI Regulatory Compliance",
    description: "AI-powered regulatory compliance management for various industries",
    price: "$3,500/mo",
    features: ["Regulatory Compliance", "AI Monitoring", "Automated Reporting", "Risk Management"],
    category: "Regulatory",
    icon: Scale,
    link: "https://ziontechgroup.com/ai-regulatory-compliance"
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

  return (
    <div className="min-h-screen cyber-grid relative">
      <Navigation />
      
      {/* Quantum Particles Background */}
      <div className="quantum-particle" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
      <div className="quantum-particle" style={{ top: '20%', right: '15%', animationDelay: '1s' }}></div>
      <div className="quantum-particle" style={{ bottom: '30%', left: '20%', animationDelay: '2s' }}></div>
      <div className="quantum-particle" style={{ bottom: '20%', right: '25%', animationDelay: '3s' }}></div>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 holographic opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="cyber-button text-lg py-4 px-8 flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="neon-button text-lg py-4 px-8">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold neon-text mb-2">300%</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-purple-400 mb-2 neon-glow-purple">70%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-pink-400 mb-2 neon-glow-pink">90%</div>
              <div className="text-gray-400">Efficiency Gains</div>
            </div>
            <div className="text-center cyber-card">
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
            <h2 className="text-5xl font-bold cyber-text mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Comprehensive AI and IT solutions for modern enterprises. Transform your business with cutting-edge technology and innovative solutions.</p>
          </div>
          
          {/* Micro SAAS Services */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Micro SAAS Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="cyber-card group cursor-pointer" onClick={() => window.open(service.link, '_blank')}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      <div className="text-2xl font-bold neon-text mb-2">{service.price}</div>
                      <button className="neon-text hover:text-cyan-300 font-medium text-sm transition-colors">
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
                <div key={index} className={`cyber-card group cursor-pointer ${service.enterprise ? 'neon-glow-purple' : ''}`} onClick={() => window.open(service.link, '_blank')}>
                  {service.enterprise && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Enterprise
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors">
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
                <div key={index} className="cyber-card group cursor-pointer" onClick={() => window.open(service.link, '_blank')}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      <button className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold cyber-text mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cyber-card">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold neon-text mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold cyber-text mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center cyber-card">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="neon-text hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center cyber-card">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="neon-text hover:text-cyan-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center cyber-card">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="neon-text font-medium">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
          
          <button className="cyber-button text-lg py-4 px-8">
            Get Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;
