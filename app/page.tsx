'use client';

import React, { Suspense } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import PerformanceMonitor from './components/PerformanceMonitor';
import { ServiceCardSkeleton } from '../src/components/LoadingStates';
import LazyImage from './components/LazyImage';
import AnimatedCounter from './components/AnimatedCounter';
import Navigation from './components/Navigation';
<<<<<<< HEAD
import { 
=======
import OptimizedImage from './components/OptimizedImage';
import EnhancedLoading from './components/EnhancedLoading';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import {
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
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
  Sprout,
  Type,
  AlertTriangle,
  GitCommit,
  Container,
  Monitor,
  Image,
  Smile,
  Presentation,
  PenTool,
  GitBranch,
  Layout,
  MousePointer,
  Map,
  TestTube,
  Thermometer,
  MessageSquare,
  DollarSign,
  Receipt,
  PiggyBank,
  Coins,
  Hash,
  HelpCircle,
  Ticket,
  Link,
  Megaphone,
  Radio,
  Popup as PopupIcon,
  Mic,
  Headphones,
  Hash as HashIcon,
  Smile as SmileIcon,
  Type as TypeIcon,
  AlertTriangle as AlertTriangleIcon,
  GitCommit as GitCommitIcon,
  Container as ContainerIcon,
  Monitor as MonitorIcon,
  Image as ImageIcon,
  Smile as SmileIcon2,
  Presentation as PresentationIcon,
  PenTool as PenToolIcon,
  GitBranch as GitBranchIcon,
  Layout as LayoutIcon,
  MousePointer as MousePointerIcon,
  Map as MapIcon,
  TestTube as TestTubeIcon,
  Thermometer as ThermometerIcon,
  Popup as PopupIcon2,
  DollarSign as DollarSignIcon,
  Receipt as ReceiptIcon,
  PiggyBank as PiggyBankIcon,
  Coins as CoinsIcon,
  Hash as HashIcon2,
  HelpCircle as HelpCircleIcon,
  Ticket as TicketIcon,
  Link as LinkIcon,
  Megaphone as MegaphoneIcon,
  Radio as RadioIcon,
} from 'lucide-react';

<<<<<<< HEAD
// Interface definitions
=======
// Type definitions;
interface MicroSAASService {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  popular: boolean;
  icon?: any;
  link?: string;
}

>>>>>>> cursor/fix-errors-and-merge-to-main-c796
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

// Service data;
const microSAASServices = [
  {
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics and automated resource allocation",
    price: "$99/mo",
    features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
    category: "Productivity",
<<<<<<< HEAD
    popular: true
=======
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-project-manager-pro",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  },
  {
    name: "AI Analytics Dashboard",
    description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
    price: "$149/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
    category: "Analytics",
    popular: true;
  },
  {
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing and instant responses",
    price: "$199/mo",
    features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
    category: "Support"
    popular: false;
    icon: Users;
    link: "https://ziontechgroup.com/ai-customer-support-bot",
  },
  {
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing and editing tools",
    price: "$79/mo",
    features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice"],
    category: "Content"
    popular: true;
    icon: Zap;
    link: "https://ziontechgroup.com/ai-content-generation",
  },
  {
    name: "AI Social Media Manager",
    description: "Automated social media management with AI-powered content creation and scheduling",
    price: "$129/mo",
    features: ["Auto Posting", "Content Creation", "Analytics", "Engagement Tracking"],
    category: "Marketing"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-social-media-manager",
  },
  {
    name: "AI Email Marketing Suite",
    description: "Intelligent email campaigns with AI-powered personalization and optimization",
    price: "$89/mo",
    features: ["Smart Segmentation", "A/B Testing", "Automation", "Performance Analytics"],
    category: "Marketing"
    popular: true;
    icon: Mail;
    link: "https://ziontechgroup.com/ai-email-marketing",
  },
  {
    name: "AI Financial Advisor",
    description: "Personalized financial planning and investment advice powered by advanced AI algorithms",
    price: "$199/mo",
    features: ["Portfolio Analysis", "Risk Assessment", "Investment Recommendations", "Tax Optimization"],
    category: "Finance"
    popular: false;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-financial-advisor",
  },
  {
    name: "AI Workflow Automation",
    description: "Visual workflow builder with AI-powered process optimization and automation",
    price: "$159/mo",
    features: ["Visual Builder", "Process Optimization", "Integration Hub", "Performance Monitoring"],
    category: "Automation"
    popular: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-workflow-automation",
  },
  {
    name: "AI Smart Calendar",
    description: "Intelligent scheduling and time management with AI-powered optimization",
    price: "$69/mo",
    features: ["Smart Scheduling", "Conflict Resolution", "Time Optimization", "Meeting Analytics"],
    category: "Productivity"
    popular: true;
    icon: Clock;
    link: "https://ziontechgroup.com/ai-smart-calendar",
  },
  {
    name: "AI Video Generator",
    description: "AI-powered video creation with automated editing and professional templates",
    price: "$179/mo",
    features: ["Auto Editing", "Template Library", "Voice Synthesis", "Multi-format Export"],
    category: "Content"
    popular: true;
    icon: Video;
    link: "https://ziontechgroup.com/ai-video-generator",
  },
  {
    name: "AI CRM Assistant",
    description: "Intelligent customer relationship management with AI-powered insights and automation",
    price: "$139/mo",
    features: ["Lead Scoring", "Sales Forecasting", "Customer Insights", "Automation Rules"],
    category: "Sales"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-crm-assistant",
  },
  {
    name: "AI Logo Designer Pro",
    description: "AI-powered logo design with brand analysis and unlimited iterations",
    price: "$79/mo",
    features: ["Brand Analysis", "Unlimited Iterations", "Vector Export", "Brand Guidelines"],
    category: "Design"
    popular: true;
    icon: Palette;
    link: "https://ziontechgroup.com/ai-logo-designer",
  },
  {
    name: "AI Invoice Generator",
    description: "Automated invoice creation with smart templates and payment tracking",
    price: "$49/mo",
    features: ["Auto Generation", "Payment Tracking", "Tax Calculations", "Multi-currency"],
    category: "Finance"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-invoice-generator",
  },
  {
    name: "AI Expense Tracker",
    description: "Smart expense management with receipt scanning and categorization",
    price: "$39/mo",
    features: ["Receipt Scanning", "Auto Categorization", "Tax Reports", "Budget Alerts"],
    category: "Finance"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-expense-tracker",
  },
  {
    name: "AI Lead Generation",
    description: "Automated lead discovery and qualification with AI-powered prospecting",
    price: "$199/mo",
    features: ["Lead Discovery", "Contact Enrichment", "Qualification Scoring", "CRM Integration"],
    category: "Sales"
    popular: true;
    icon: Target;
    link: "https://ziontechgroup.com/ai-lead-generation",
  },
  {
    name: "AI HR Assistant",
    description: "Intelligent human resources management with automated screening and onboarding",
    price: "$149/mo",
    features: ["Resume Screening", "Interview Scheduling", "Onboarding Automation", "Performance Tracking"],
    category: "HR"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-hr-assistant",
  },
  {
    name: "AI Legal Assistant",
    description: "Legal document analysis and contract review with AI-powered insights",
    price: "$299/mo",
    features: ["Contract Review", "Legal Research", "Document Analysis", "Compliance Checking"],
    category: "Legal"
    popular: false;
    icon: Scale;
    link: "https://ziontechgroup.com/ai-legal-assistant",
  },
  {
    name: "AI Inventory Manager",
    description: "Smart inventory optimization with demand forecasting and automated reordering",
    price: "$179/mo",
    features: ["Demand Forecasting", "Auto Reordering", "Stock Optimization", "Supplier Management"],
    category: "Operations"
    popular: true;
    icon: Package;
    link: "https://ziontechgroup.com/ai-inventory-manager",
  },
  {
    name: "AI Fitness Coach",
    description: "Personalized fitness training with AI-powered workout plans and nutrition guidance",
    price: "$59/mo",
    features: ["Custom Workouts", "Nutrition Plans", "Progress Tracking", "Form Analysis"],
    category: "Health"
    popular: true;
    icon: Heart;
    link: "https://ziontechgroup.com/ai-fitness-coach",
  },
  {
    name: "AI E-commerce Optimizer",
    description: "Boost online sales with AI-powered product recommendations and pricing optimization",
    price: "$199/mo",
    features: ["Product Recommendations", "Price Optimization", "Inventory Management", "Customer Insights"],
    category: "E-commerce"
    popular: true;
    icon: ShoppingCart;
    link: "https://ziontechgroup.com/ai-ecommerce-optimizer",
  },
  {
    name: "AI Fraud Detection",
    description: "Advanced fraud prevention with real-time transaction monitoring and risk scoring",
    price: "$249/mo",
    features: ["Real-time Monitoring", "Risk Scoring", "Pattern Detection", "Alert System"],
    category: "Security"
    popular: true;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-fraud-detection",
  },
  {
    name: "AI Music Composer",
    description: "Create original music with AI-powered composition and arrangement tools",
    price: "$89/mo",
    features: ["Original Compositions", "Style Adaptation", "Instrument Arrangement", "Royalty-free"],
    category: "Creative"
    popular: true;
    icon: Music;
    link: "https://ziontechgroup.com/ai-music-composition",
  },
  {
    name: "AI Image Recognition",
    description: "Advanced image analysis and object detection for various business applications",
    price: "$129/mo",
    features: ["Object Detection", "Face Recognition", "Quality Analysis", "Custom Models"],
    category: "Computer Vision"
    popular: true;
    icon: Eye;
    link: "https://ziontechgroup.com/ai-image-recognition",
  },
  {
    name: "AI Document Processor",
    description: "Intelligent document processing with OCR, data extraction, and classification",
    price: "$159/mo",
    features: ["OCR Processing", "Data Extraction", "Document Classification", "Batch Processing"],
    category: "Document Management"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-document-processor",
  },
  {
    name: "AI Load Testing",
    description: "Automated performance testing with AI-powered load generation and analysis",
    price: "$199/mo",
    features: ["Auto Load Generation", "Performance Analysis", "Bottleneck Detection", "Scalability Testing"],
    category: "Testing"
    popular: false;
    icon: Activity;
    link: "https://ziontechgroup.com/ai-load-testing",
  },
  {
    name: "AI Manufacturing Optimizer",
    description: "Smart manufacturing process optimization with predictive maintenance and quality control",
    price: "$399/mo",
    features: ["Predictive Maintenance", "Quality Control", "Process Optimization", "Supply Chain Integration"],
    category: "Manufacturing"
    popular: true;
    icon: Factory;
    link: "https://ziontechgroup.com/ai-manufacturing",
  },
  {
    name: "AI Insurance Assistant",
    description: "Intelligent insurance management with automated claims processing and risk assessment",
    price: "$179/mo",
    features: ["Claims Processing", "Risk Assessment", "Policy Management", "Fraud Detection"],
    category: "Insurance"
    popular: false;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-insurance",
  },
  {
    name: "AI Education Platform",
    description: "Personalized learning experience with AI-powered curriculum and progress tracking",
    price: "$99/mo",
    features: ["Personalized Learning", "Progress Tracking", "Adaptive Content", "Assessment Tools"],
    category: "Education"
    popular: true;
    icon: GraduationCap;
    link: "https://ziontechgroup.com/ai-education",
  },
  {
    name: "AI Code Assistant",
    description: "Intelligent coding assistant with automated code generation and debugging",
    price: "$79/mo",
    features: ["Code Generation", "Bug Detection", "Code Review", "Documentation"],
    category: "Development"
    popular: true;
    icon: Code;
    link: "https://ziontechgroup.com/ai-code-assistant",
  },
  {
    name: "AI Design Studio",
    description: "Complete design suite with AI-powered graphics, layouts, and brand consistency",
    price: "$149/mo",
    features: ["Auto Layout", "Brand Consistency", "Template Generation", "Color Optimization"],
    category: "Design"
    popular: true;
    icon: Palette;
    link: "https://ziontechgroup.com/ai-design-studio",
  },
  {
    name: "AI Quantum Financial Oracle",
    description: "Revolutionary quantum-powered financial prediction platform with 99.7% accuracy in market forecasting",
    price: "$2,999/mo",
<<<<<<< HEAD
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
=======
    features: ["Quantum Algorithms", "Real-time Predictions", "Risk Assessment", "Portfolio Optimization"],
    category: "Finance"
    popular: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-quantum-financial-oracle",
  },
  {
    name: "AI Neural Memory Assistant",
    description: "Advanced AI with persistent memory for personalized business intelligence and decision support",
    price: "$399/mo",
    features: ["Persistent Memory", "Learning Algorithms", "Context Awareness", "Predictive Insights"],
    category: "AI Assistant"
    popular: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-neural-memory-assistant",
  },
  {
    name: "AI Holographic Workspace",
    description: "Immersive 3D workspace with holographic UI for remote collaboration and design",
    price: "$1,299/mo",
    features: ["3D Holographic UI", "Remote Collaboration", "Spatial Computing", "AR Integration"],
    category: "Immersive Tech"
    popular: false;
    icon: Eye;
    link: "https://ziontechgroup.com/ai-holographic-workspace",
  },
  {
    name: "AI 3D Generation Studio",
    description: "AI-powered 3D model generation, animation, and virtual environment creation",
    price: "$299/mo",
    features: ["3D Model Generation", "Animation Creation", "Texture Synthesis", "VR Integration"],
    category: "3D Design"
    popular: true;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-3d-generation",
  },
  {
    name: "AI Mobile App Builder",
    description: "No-code mobile app development with AI-powered design and functionality generation",
    price: "$199/mo",
    features: ["No-Code Development", "AI Design", "Cross-Platform", "App Store Deployment"],
    category: "Mobile Development"
    popular: true;
    icon: Smartphone;
    link: "https://ziontechgroup.com/ai-mobile-app-builder",
  },
  {
    name: "AI Agricultural Intelligence Pro",
    description: "Smart farming solutions with AI-powered crop monitoring, yield prediction, and automation",
    price: "$599/mo",
    features: ["Crop Monitoring", "Yield Prediction", "Weather Analysis", "Automation Control"],
    category: "Agriculture"
    popular: true;
    icon: Sprout;
    link: "https://ziontechgroup.com/ai-agricultural-intelligence-pro",
  },
  {
    name: "AI Energy Grid Management Pro",
    description: "Smart energy management with AI-powered grid optimization and renewable energy integration",
    price: "$1,499/mo",
    features: ["Grid Optimization", "Renewable Integration", "Demand Forecasting", "Energy Storage"],
    category: "Energy"
    popular: true;
    icon: Zap;
    link: "https://ziontechgroup.com/ai-energy-grid-management-pro",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
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
<<<<<<< HEAD
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
=======
    description: "Advanced legal research and case analysis with AI-powered document review and precedent finding",
    price: "$799/mo",
    features: ["Case Research", "Document Analysis", "Precedent Finding", "Legal Writing"],
    category: "Legal"
    popular: false;
    icon: Scale;
    link: "https://ziontechgroup.com/ai-legal-research-pro",
  },
  {
    name: "AI Manufacturing Optimizer",
    description: "Smart manufacturing process optimization with predictive maintenance and quality control",
    price: "$1,999/mo",
    features: ["Predictive Maintenance", "Quality Control", "Process Optimization", "Supply Chain Integration"],
    category: "Manufacturing"
    popular: true;
    icon: Factory;
    link: "https://ziontechgroup.com/ai-manufacturing",
  },
  {
    name: "AI Fashion Design Studio",
    description: "AI-powered fashion design with trend analysis, pattern generation, and sustainable material suggestions",
    price: "$249/mo",
    features: ["Trend Analysis", "Pattern Generation", "Material Suggestions", "Sustainability Scoring"],
    category: "Fashion"
    popular: true;
    icon: Palette;
    link: "https://ziontechgroup.com/ai-fashion-design",
  },
  {
    name: "AI Music Composition Studio",
    description: "AI-powered music creation with genre adaptation, instrument arrangement, and royalty-free licensing",
    price: "$129/mo",
    features: ["Genre Adaptation", "Instrument Arrangement", "Royalty-free", "Collaboration Tools"],
    category: "Music"
    popular: true;
    icon: Music;
    link: "https://ziontechgroup.com/ai-music-composition",
  },
  {
    name: "AI Autonomous Systems Manager",
    description: "Management platform for autonomous vehicles, drones, and robotic systems with AI coordination",
    price: "$2,499/mo",
    features: ["Fleet Management", "Route Optimization", "Safety Monitoring", "Performance Analytics"],
    category: "Autonomous Systems"
    popular: true;
    icon: Car;
    link: "https://ziontechgroup.com/ai-autonomous-systems",
  },
  {
    name: "AI Blockchain Solutions",
    description: "AI-powered blockchain development with smart contract optimization and DeFi integration",
    price: "$1,799/mo",
    features: ["Smart Contract AI", "DeFi Integration", "Security Auditing", "Token Economics"],
    category: "Blockchain"
    popular: true;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-blockchain-solutions",
  },
  {
    name: "AI Content Delivery Network",
    description: "Intelligent CDN with AI-powered caching, load balancing, and performance optimization",
    price: "$399/mo",
    features: ["AI Caching", "Load Balancing", "Performance Optimization", "Global Distribution"],
    category: "Infrastructure"
    popular: true;
    icon: Globe;
    link: "https://ziontechgroup.com/ai-content-delivery-network",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  },
  {
    name: "AI Logistics Optimizer",
    description: "Intelligent logistics management with route optimization and supply chain analytics",
    price: "$299/mo",
<<<<<<< HEAD
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
=======
    features: ["API Gateway", "Rate Limiting", "Security Policies", "Performance Analytics"],
    category: "API Management"
    popular: true;
    icon: Code;
    link: "https://ziontechgroup.com/ai-api-manager",
  },
  {
    name: "AI Business Intelligence Suite",
    description: "Comprehensive BI platform with AI-powered insights, forecasting, and decision support",
    price: "$599/mo",
    features: ["Predictive Analytics", "Data Visualization", "Forecasting", "Decision Support"],
    category: "Business Intelligence"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-business-intelligence",
  },
  {
    name: "AI Chatbot Builder Pro",
    description: "Advanced chatbot creation platform with natural language processing and multi-channel deployment",
    price: "$199/mo",
    features: ["NLP Processing", "Multi-channel", "Custom Training", "Analytics Dashboard"],
    category: "Communication"
    popular: true;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-chatbot-builder",
  },
  {
    name: "AI Cloud Infrastructure",
    description: "AI-optimized cloud infrastructure with intelligent resource allocation and cost optimization",
    price: "$799/mo",
    features: ["Resource Optimization", "Cost Management", "Auto-scaling", "Performance Monitoring"],
    category: "Cloud Computing"
    popular: true;
    icon: Cloud;
    link: "https://ziontechgroup.com/ai-cloud-infrastructure",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  },
  {
    name: "AI Code Security Auditor",
    description: "Automated code security analysis with vulnerability detection and compliance checking",
    price: "$199/mo",
    features: ["Vulnerability Detection", "Compliance Checking", "Code Review", "Security Reports"],
    category: "Security"
    popular: true;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-code-security-auditor",
  },
  {
    name: "AI Voice Assistant Pro",
    description: "Advanced voice-controlled AI assistant with natural language processing and multi-language support",
    price: "$129/mo",
    features: ["Voice Commands", "Multi-language", "Task Automation", "Smart Scheduling"],
    category: "Voice AI"
    popular: true;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-voice-assistant",
  },
  {
    name: "AI Meeting Transcriber Pro",
    description: "Real-time meeting transcription with AI-powered insights and action item extraction",
    price: "$89/mo",
    features: ["Real-time Transcription", "Action Items", "Meeting Summaries", "Multi-language"],
    category: "Productivity"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-meeting-transcriber",
  },
  {
    name: "AI Website Builder Pro",
    description: "No-code website builder with AI-powered design suggestions and SEO optimization",
    price: "$149/mo",
    features: ["No-code Builder", "AI Design", "SEO Optimization", "Mobile Responsive"],
    category: "Web Development"
    popular: true;
    icon: Code;
    link: "https://ziontechgroup.com/ai-website-builder",
  },
  {
    name: "AI Password Generator Pro",
    description: "Advanced password management with AI-powered security analysis and breach monitoring",
    price: "$39/mo",
    features: ["Password Generation", "Security Analysis", "Breach Monitoring", "Auto-fill"],
    category: "Security"
    popular: true;
    icon: Lock;
    link: "https://ziontechgroup.com/ai-password-generator",
  },
  {
    name: "AI Email Signature Manager",
    description: "Professional email signature generator with brand consistency and analytics",
    price: "$29/mo",
    features: ["Brand Templates", "Analytics", "Bulk Management", "Social Integration"],
    category: "Email Tools"
    popular: false;
    icon: Mail;
    link: "https://ziontechgroup.com/ai-email-signature-manager",
  },
  {
    name: "AI Social Media Scheduler",
    description: "Intelligent social media scheduling with optimal timing and content suggestions",
    price: "$79/mo",
    features: ["Smart Scheduling", "Content Suggestions", "Analytics", "Multi-platform"],
    category: "Social Media"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-social-media-scheduler",
  },
  {
    name: "AI Time Tracker Pro",
    description: "Advanced time tracking with AI-powered productivity insights and project analysis",
    price: "$59/mo",
    features: ["Auto Time Tracking", "Productivity Insights", "Project Analysis", "Team Reports"],
    category: "Productivity"
    popular: true;
    icon: Clock;
    link: "https://ziontechgroup.com/ai-time-tracker",
  },
  {
    name: "AI Resume Builder Pro",
    description: "AI-powered resume builder with ATS optimization and job matching",
    price: "$49/mo",
    features: ["ATS Optimization", "Job Matching", "Template Library", "Cover Letters"],
    category: "Career Tools"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-resume-builder",
  },
  {
    name: "AI Logo Maker Pro",
    description: "Professional logo design with AI-powered brand analysis and unlimited variations",
    price: "$69/mo",
    features: ["Brand Analysis", "Unlimited Variations", "Vector Export", "Brand Guidelines"],
    category: "Design"
    popular: true;
    icon: Palette;
    link: "https://ziontechgroup.com/ai-logo-maker",
  },
  {
    name: "AI Color Palette Generator",
    description: "Intelligent color palette generation with accessibility compliance and brand matching",
    price: "$39/mo",
    features: ["Smart Palettes", "Accessibility Check", "Brand Matching", "Export Options"],
    category: "Design"
    popular: true;
    icon: Palette;
    link: "https://ziontechgroup.com/ai-color-palette-generator",
  },
  {
    name: "AI QR Code Generator Pro",
    description: "Advanced QR code generator with analytics, customization, and dynamic content",
    price: "$29/mo",
    features: ["Analytics", "Customization", "Dynamic Content", "Bulk Generation"],
    category: "Marketing Tools"
    popular: true;
    icon: Code;
    link: "https://ziontechgroup.com/ai-qr-code-generator",
  },
  {
    name: "AI Barcode Scanner Pro",
    description: "Advanced barcode scanning with product lookup and inventory management",
    price: "$49/mo",
    features: ["Product Lookup", "Inventory Management", "Batch Scanning", "API Integration"],
    category: "Inventory"
    popular: true;
    icon: Eye;
    link: "https://ziontechgroup.com/ai-barcode-scanner",
  },
  {
    name: "AI Text Summarizer Pro",
    description: "Intelligent text summarization with multiple formats and language support",
    price: "$39/mo",
    features: ["Multiple Formats", "Language Support", "Custom Length", "API Access"],
    category: "Content Tools"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-text-summarizer",
  },
  {
    name: "AI Image Upscaler Pro",
    description: "AI-powered image upscaling with quality enhancement and batch processing",
    price: "$59/mo",
    features: ["Quality Enhancement", "Batch Processing", "Multiple Formats", "API Access"],
    category: "Image Tools"
    popular: true;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-image-upscaler",
  },
  {
    name: "AI Background Remover Pro",
    description: "Professional background removal with AI precision and batch processing",
    price: "$49/mo",
    features: ["AI Precision", "Batch Processing", "Multiple Formats", "Transparent PNG"],
    category: "Image Tools"
    popular: true;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-background-remover",
  },
  {
    name: "AI Font Generator Pro",
    description: "AI-powered font generation with style matching and commercial licensing",
    price: "$79/mo",
    features: ["Style Matching", "Commercial License", "Multiple Formats", "Custom Styles"],
    category: "Design"
    popular: true;
    icon: Type;
    link: "https://ziontechgroup.com/ai-font-generator",
  },
  {
    name: "AI Chart Generator Pro",
    description: "Intelligent chart and graph generation with data visualization and export options",
    price: "$69/mo",
    features: ["Data Visualization", "Multiple Chart Types", "Export Options", "Interactive Charts"],
    category: "Data Visualization"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-chart-generator",
  },
  {
    name: "AI Mind Map Generator",
    description: "AI-powered mind mapping with automatic organization and collaboration features",
    price: "$59/mo",
    features: ["Auto Organization", "Collaboration", "Multiple Templates", "Export Options"],
    category: "Productivity"
    popular: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-mind-map-generator",
  },
  {
    name: "AI Code Formatter Pro",
    description: "Intelligent code formatting with language detection and style consistency",
    price: "$39/mo",
    features: ["Language Detection", "Style Consistency", "Batch Processing", "IDE Integration"],
    category: "Development Tools"
    popular: true;
    icon: Code;
    link: "https://ziontechgroup.com/ai-code-formatter",
  },
  {
    name: "AI API Documentation Generator",
    description: "Automatic API documentation generation with interactive examples and testing",
    price: "$89/mo",
    features: ["Auto Generation", "Interactive Examples", "Testing Tools", "Multiple Formats"],
    category: "Development Tools"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-api-documentation-generator",
  },
  {
    name: "AI Database Designer Pro",
    description: "Intelligent database schema design with optimization suggestions and migration tools",
    price: "$199/mo",
    features: ["Schema Design", "Optimization", "Migration Tools", "Performance Analysis"],
    category: "Database Tools"
    popular: true;
    icon: Database;
    link: "https://ziontechgroup.com/ai-database-designer",
  },
  {
    name: "AI Test Case Generator",
    description: "Automated test case generation with coverage analysis and edge case detection",
    price: "$149/mo",
    features: ["Auto Generation", "Coverage Analysis", "Edge Cases", "Multiple Frameworks"],
    category: "Testing Tools"
    popular: true;
    icon: CheckCircle;
    link: "https://ziontechgroup.com/ai-test-case-generator",
  },
  {
    name: "AI Performance Monitor Pro",
    description: "Real-time application performance monitoring with AI-powered insights and alerts",
    price: "$179/mo",
    features: ["Real-time Monitoring", "AI Insights", "Smart Alerts", "Performance Optimization"],
    category: "Monitoring"
    popular: true;
    icon: Activity;
    link: "https://ziontechgroup.com/ai-performance-monitor",
  },
  {
    name: "AI Error Log Analyzer",
    description: "Intelligent error log analysis with pattern recognition and resolution suggestions",
    price: "$99/mo",
    features: ["Pattern Recognition", "Resolution Suggestions", "Trend Analysis", "Alert System"],
    category: "Debugging"
    popular: true;
    icon: AlertTriangle;
    link: "https://ziontechgroup.com/ai-error-log-analyzer",
  },
  {
    name: "AI Dependency Manager Pro",
    description: "Smart dependency management with security scanning and update recommendations",
    price: "$79/mo",
    features: ["Security Scanning", "Update Recommendations", "Vulnerability Alerts", "License Management"],
    category: "Development Tools"
    popular: true;
    icon: Package;
    link: "https://ziontechgroup.com/ai-dependency-manager",
  },
  {
    name: "AI Code Review Assistant",
    description: "Automated code review with best practices checking and improvement suggestions",
    price: "$129/mo",
    features: ["Best Practices", "Improvement Suggestions", "Security Checks", "Performance Analysis"],
    category: "Code Quality"
    popular: true;
    icon: Code;
    link: "https://ziontechgroup.com/ai-code-review-assistant",
  },
  {
    name: "AI Git Commit Message Generator",
    description: "Intelligent commit message generation with conventional commit standards",
    price: "$29/mo",
    features: ["Conventional Commits", "Auto Generation", "Custom Templates", "Team Standards"],
    category: "Git Tools"
    popular: true;
    icon: GitCommit;
    link: "https://ziontechgroup.com/ai-git-commit-generator",
  },
  {
    name: "AI Docker Optimizer Pro",
    description: "Docker container optimization with size reduction and security hardening",
    price: "$89/mo",
    features: ["Size Reduction", "Security Hardening", "Performance Optimization", "Multi-stage Builds"],
    category: "DevOps"
    popular: true;
    icon: Container;
    link: "https://ziontechgroup.com/ai-docker-optimizer",
  },
  {
    name: "AI Kubernetes Manager Pro",
    description: "Intelligent Kubernetes cluster management with auto-scaling and cost optimization",
    price: "$299/mo",
    features: ["Auto-scaling", "Cost Optimization", "Health Monitoring", "Resource Management"],
    category: "DevOps"
    popular: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-kubernetes-manager",
  },
  {
    name: "AI Cloud Cost Optimizer",
    description: "Cloud cost optimization with usage analysis and resource right-sizing",
    price: "$199/mo",
    features: ["Usage Analysis", "Right-sizing", "Cost Alerts", "Multi-cloud Support"],
    category: "Cloud Management"
    popular: true;
    icon: Cloud;
    link: "https://ziontechgroup.com/ai-cloud-cost-optimizer",
  },
  {
    name: "AI SSL Certificate Manager",
    description: "Automated SSL certificate management with renewal alerts and security monitoring",
    price: "$49/mo",
    features: ["Auto Renewal", "Security Monitoring", "Multi-domain", "Wildcard Support"],
    category: "Security"
    popular: true;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-ssl-certificate-manager",
  },
  {
    name: "AI Website Speed Optimizer",
    description: "Comprehensive website speed optimization with performance monitoring and CDN management",
    price: "$99/mo",
    features: ["Performance Monitoring", "CDN Management", "Image Optimization", "Caching Strategy"],
    category: "Performance"
    popular: true;
    icon: Zap;
    link: "https://ziontechgroup.com/ai-website-speed-optimizer",
  },
  {
    name: "AI SEO Analyzer Pro",
    description: "Advanced SEO analysis with keyword research, competitor analysis, and optimization suggestions",
    price: "$149/mo",
    features: ["Keyword Research", "Competitor Analysis", "Optimization Suggestions", "Rank Tracking"],
    category: "SEO Tools"
    popular: true;
    icon: Search;
    link: "https://ziontechgroup.com/ai-seo-analyzer",
  },
  {
    name: "AI Content Plagiarism Checker",
    description: "Advanced plagiarism detection with AI-powered originality analysis and citation suggestions",
    price: "$79/mo",
    features: ["AI Detection", "Originality Analysis", "Citation Suggestions", "Bulk Checking"],
    category: "Content Tools"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-plagiarism-checker",
  },
  {
    name: "AI Grammar Checker Pro",
    description: "Advanced grammar and style checking with tone analysis and writing suggestions",
    price: "$59/mo",
    features: ["Grammar Checking", "Style Analysis", "Tone Analysis", "Writing Suggestions"],
    category: "Writing Tools"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-grammar-checker",
  },
  {
    name: "AI Translation Pro",
    description: "Professional translation service with context awareness and cultural adaptation",
    price: "$89/mo",
    features: ["Context Awareness", "Cultural Adaptation", "100+ Languages", "API Access"],
    category: "Translation"
    popular: true;
    icon: Globe;
    link: "https://ziontechgroup.com/ai-translation-pro",
  },
  {
    name: "AI Voice Cloning Studio",
    description: "Professional voice cloning with emotion control and language adaptation",
    price: "$199/mo",
    features: ["Voice Cloning", "Emotion Control", "Language Adaptation", "High Quality"],
    category: "Voice AI"
    popular: true;
    icon: Mic;
    link: "https://ziontechgroup.com/ai-voice-cloning-studio",
  },
  {
    name: "AI Podcast Generator Pro",
    description: "AI-powered podcast creation with voice synthesis and content generation",
    price: "$149/mo",
    features: ["Voice Synthesis", "Content Generation", "Multiple Voices", "Audio Editing"],
    category: "Audio Tools"
    popular: true;
    icon: Headphones;
    link: "https://ziontechgroup.com/ai-podcast-generator",
  },
  {
    name: "AI Subtitle Generator Pro",
    description: "Automatic subtitle generation with timing optimization and multi-language support",
    price: "$69/mo",
    features: ["Auto Generation", "Timing Optimization", "Multi-language", "Format Support"],
    category: "Video Tools"
    popular: true;
    icon: Video;
    link: "https://ziontechgroup.com/ai-subtitle-generator",
  },
  {
    name: "AI Thumbnail Generator Pro",
    description: "AI-powered thumbnail creation with A/B testing and performance analytics",
    price: "$49/mo",
    features: ["AI Creation", "A/B Testing", "Performance Analytics", "Template Library"],
    category: "Video Tools"
    popular: true;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-thumbnail-generator",
  },
  {
    name: "AI Video Editor Pro",
    description: "Intelligent video editing with auto-cuts, transitions, and effects",
    price: "$179/mo",
    features: ["Auto-cuts", "Smart Transitions", "AI Effects", "Batch Processing"],
    category: "Video Tools"
    popular: true;
    icon: Video;
    link: "https://ziontechgroup.com/ai-video-editor",
  },
  {
    name: "AI Live Stream Optimizer",
    description: "Real-time live stream optimization with quality adjustment and engagement tracking",
    price: "$129/mo",
    features: ["Quality Adjustment", "Engagement Tracking", "Auto-scaling", "Analytics"],
    category: "Live Streaming"
    popular: true;
    icon: Radio;
    link: "https://ziontechgroup.com/ai-live-stream-optimizer",
  },
  {
    name: "AI Screen Recorder Pro",
    description: "Advanced screen recording with AI-powered editing and annotation tools",
    price: "$79/mo",
    features: ["AI Editing", "Annotation Tools", "Cloud Storage", "Sharing Options"],
    category: "Screen Recording"
    popular: true;
    icon: Monitor;
    link: "https://ziontechgroup.com/ai-screen-recorder",
  },
  {
    name: "AI GIF Maker Pro",
    description: "Intelligent GIF creation with optimization and animation effects",
    price: "$39/mo",
    features: ["Smart Optimization", "Animation Effects", "Bulk Creation", "Format Support"],
    category: "Image Tools"
    popular: true;
    icon: Image;
    link: "https://ziontechgroup.com/ai-gif-maker",
  },
  {
    name: "AI Meme Generator Pro",
    description: "AI-powered meme creation with trend analysis and viral potential scoring",
    price: "$29/mo",
    features: ["Trend Analysis", "Viral Scoring", "Template Library", "Social Sharing"],
    category: "Social Media"
    popular: true;
    icon: Smile;
    link: "https://ziontechgroup.com/ai-meme-generator",
  },
  {
    name: "AI Infographic Creator Pro",
    description: "Professional infographic creation with data visualization and design templates",
    price: "$99/mo",
    features: ["Data Visualization", "Design Templates", "Custom Branding", "Export Options"],
    category: "Design"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-infographic-creator",
  },
  {
    name: "AI Presentation Maker Pro",
    description: "AI-powered presentation creation with content generation and design optimization",
    price: "$89/mo",
    features: ["Content Generation", "Design Optimization", "Template Library", "Collaboration"],
    category: "Presentation"
    popular: true;
    icon: Presentation;
    link: "https://ziontechgroup.com/ai-presentation-maker",
  },
  {
    name: "AI Whiteboard Pro",
    description: "Digital whiteboard with AI-powered drawing assistance and collaboration tools",
    price: "$69/mo",
    features: ["AI Drawing", "Collaboration", "Shape Recognition", "Export Options"],
    category: "Collaboration"
    popular: true;
    icon: PenTool;
    link: "https://ziontechgroup.com/ai-whiteboard",
  },
  {
    name: "AI Flowchart Maker Pro",
    description: "Intelligent flowchart creation with auto-layout and collaboration features",
    price: "$79/mo",
    features: ["Auto-layout", "Collaboration", "Template Library", "Integration"],
    category: "Diagramming"
    popular: true;
    icon: GitBranch;
    link: "https://ziontechgroup.com/ai-flowchart-maker",
  },
  {
    name: "AI Wireframe Generator Pro",
    description: "AI-powered wireframe generation with responsive design and prototyping",
    price: "$119/mo",
    features: ["Responsive Design", "Prototyping", "Component Library", "Export Options"],
    category: "Design"
    popular: true;
    icon: Layout;
    link: "https://ziontechgroup.com/ai-wireframe-generator",
  },
  {
    name: "AI Prototype Builder Pro",
    description: "Interactive prototype creation with user testing and feedback collection",
    price: "$149/mo",
    features: ["Interactive Prototypes", "User Testing", "Feedback Collection", "Analytics"],
    category: "Prototyping"
    popular: true;
    icon: MousePointer;
    link: "https://ziontechgroup.com/ai-prototype-builder",
  },
  {
    name: "AI User Journey Mapper",
    description: "AI-powered user journey mapping with persona analysis and optimization suggestions",
    price: "$99/mo",
    features: ["Persona Analysis", "Optimization Suggestions", "Template Library", "Collaboration"],
    category: "UX Tools"
    popular: true;
    icon: Map;
    link: "https://ziontechgroup.com/ai-user-journey-mapper",
  },
  {
    name: "AI A/B Testing Platform",
    description: "Intelligent A/B testing with statistical analysis and optimization recommendations",
    price: "$199/mo",
    features: ["Statistical Analysis", "Optimization Recommendations", "Multi-variant", "Analytics"],
    category: "Testing"
    popular: true;
    icon: TestTube;
    link: "https://ziontechgroup.com/ai-ab-testing-platform",
  },
  {
    name: "AI Heatmap Analyzer Pro",
    description: "Advanced heatmap analysis with user behavior insights and optimization suggestions",
    price: "$129/mo",
    features: ["Behavior Insights", "Optimization Suggestions", "Real-time Data", "Segmentation"],
    category: "Analytics"
    popular: true;
    icon: Thermometer;
    link: "https://ziontechgroup.com/ai-heatmap-analyzer",
  },
  {
    name: "AI Conversion Rate Optimizer",
    description: "AI-powered conversion optimization with personalized recommendations and testing",
    price: "$299/mo",
    features: ["Personalized Recommendations", "Automated Testing", "Multi-channel", "ROI Tracking"],
    category: "Conversion Optimization"
    popular: true;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-conversion-rate-optimizer",
  },
  {
    name: "AI Customer Journey Analytics",
    description: "Comprehensive customer journey analysis with touchpoint optimization and retention insights",
    price: "$249/mo",
    features: ["Touchpoint Optimization", "Retention Insights", "Predictive Analytics", "Multi-channel"],
    category: "Customer Analytics"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-customer-journey-analytics",
  },
  {
    name: "AI Churn Prediction Pro",
    description: "Advanced churn prediction with early warning system and retention strategies",
    price: "$199/mo",
    features: ["Early Warning", "Retention Strategies", "Risk Scoring", "Automated Actions"],
    category: "Customer Retention"
    popular: true;
    icon: AlertTriangle;
    link: "https://ziontechgroup.com/ai-churn-prediction",
  },
  {
    name: "AI Customer Lifetime Value Calculator",
    description: "AI-powered CLV calculation with segmentation and optimization recommendations",
    price: "$149/mo",
    features: ["CLV Calculation", "Segmentation", "Optimization Recommendations", "Forecasting"],
    category: "Customer Analytics"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-customer-lifetime-value-calculator",
  },
  {
    name: "AI Sentiment Analysis Pro",
    description: "Advanced sentiment analysis with emotion detection and trend monitoring",
    price: "$89/mo",
    features: ["Emotion Detection", "Trend Monitoring", "Multi-language", "Real-time Analysis"],
    category: "Text Analytics"
    popular: true;
    icon: Heart;
    link: "https://ziontechgroup.com/ai-sentiment-analysis",
  },
  {
    name: "AI Social Media Analytics Pro",
    description: "Comprehensive social media analytics with engagement optimization and competitor analysis",
    price: "$179/mo",
    features: ["Engagement Optimization", "Competitor Analysis", "Content Performance", "Audience Insights"],
    category: "Social Media Analytics"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-social-media-analytics",
  },
  {
    name: "AI Influencer Finder Pro",
    description: "AI-powered influencer discovery with authenticity scoring and campaign optimization",
    price: "$199/mo",
    features: ["Authenticity Scoring", "Campaign Optimization", "Audience Analysis", "Performance Tracking"],
    category: "Influencer Marketing"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-influencer-finder",
  },
  {
    name: "AI Hashtag Generator Pro",
    description: "Intelligent hashtag generation with trend analysis and performance optimization",
    price: "$49/mo",
    features: ["Trend Analysis", "Performance Optimization", "Niche Targeting", "Competitor Analysis"],
    category: "Social Media Tools"
    popular: true;
    icon: Hash;
    link: "https://ziontechgroup.com/ai-hashtag-generator",
  },
  {
    name: "AI Content Calendar Pro",
    description: "AI-powered content planning with optimal timing and performance prediction",
    price: "$79/mo",
    features: ["Optimal Timing", "Performance Prediction", "Content Suggestions", "Multi-platform"],
    category: "Content Planning"
    popular: true;
    icon: Calendar;
    link: "https://ziontechgroup.com/ai-content-calendar",
  },
  {
    name: "AI Email Deliverability Optimizer",
    description: "Advanced email deliverability optimization with reputation monitoring and testing",
    price: "$149/mo",
    features: ["Reputation Monitoring", "A/B Testing", "Spam Score Analysis", "IP Warming"],
    category: "Email Marketing"
    popular: true;
    icon: Mail;
    link: "https://ziontechgroup.com/ai-email-deliverability-optimizer",
  },
  {
    name: "AI Subject Line Optimizer",
    description: "AI-powered subject line optimization with open rate prediction and A/B testing",
    price: "$69/mo",
    features: ["Open Rate Prediction", "A/B Testing", "Personalization", "Performance Analytics"],
    category: "Email Marketing"
    popular: true;
    icon: Mail;
    link: "https://ziontechgroup.com/ai-subject-line-optimizer",
  },
  {
    name: "AI Email Template Designer",
    description: "Professional email template creation with responsive design and brand consistency",
    price: "$99/mo",
    features: ["Responsive Design", "Brand Consistency", "Template Library", "Drag & Drop"],
    category: "Email Design"
    popular: true;
    icon: Layout;
    link: "https://ziontechgroup.com/ai-email-template-designer",
  },
  {
    name: "AI Landing Page Builder Pro",
    description: "AI-powered landing page creation with conversion optimization and A/B testing",
    price: "$199/mo",
    features: ["Conversion Optimization", "A/B Testing", "Template Library", "Analytics"],
    category: "Landing Pages"
    popular: true;
    icon: Layout;
    link: "https://ziontechgroup.com/ai-landing-page-builder",
  },
  {
    name: "AI Popup Designer Pro",
    description: "Intelligent popup creation with timing optimization and conversion tracking",
    price: "$79/mo",
    features: ["Timing Optimization", "Conversion Tracking", "Template Library", "Behavior Triggers"],
    category: "Conversion Tools"
    popular: true;
    icon: Popup;
    link: "https://ziontechgroup.com/ai-popup-designer",
  },
  {
    name: "AI Exit Intent Optimizer",
    description: "Advanced exit intent detection with personalized offers and retention strategies",
    price: "$129/mo",
    features: ["Exit Intent Detection", "Personalized Offers", "Retention Strategies", "Analytics"],
    category: "Conversion Optimization"
    popular: true;
    icon: MousePointer;
    link: "https://ziontechgroup.com/ai-exit-intent-optimizer",
  },
  {
    name: "AI Cart Abandonment Recovery",
    description: "Intelligent cart abandonment recovery with personalized email sequences and offers",
    price: "$179/mo",
    features: ["Personalized Sequences", "Dynamic Offers", "Multi-channel", "Analytics"],
    category: "E-commerce"
    popular: true;
    icon: ShoppingCart;
    link: "https://ziontechgroup.com/ai-cart-abandonment-recovery",
  },
  {
    name: "AI Product Recommendation Engine",
    description: "Advanced product recommendation system with machine learning and personalization",
    price: "$299/mo",
    features: ["Machine Learning", "Personalization", "Real-time Updates", "A/B Testing"],
    category: "E-commerce"
    popular: true;
    icon: Target;
    link: "https://ziontechgroup.com/ai-product-recommendation-engine",
  },
  {
    name: "AI Dynamic Pricing Optimizer",
    description: "Intelligent dynamic pricing with competitor analysis and demand forecasting",
    price: "$399/mo",
    features: ["Competitor Analysis", "Demand Forecasting", "Price Optimization", "Real-time Updates"],
    category: "E-commerce"
    popular: true;
    icon: DollarSign;
    link: "https://ziontechgroup.com/ai-dynamic-pricing-optimizer",
  },
  {
    name: "AI Inventory Forecasting Pro",
    description: "Advanced inventory forecasting with demand prediction and optimization recommendations",
    price: "$249/mo",
    features: ["Demand Prediction", "Optimization Recommendations", "Seasonal Analysis", "Multi-location"],
    category: "Inventory Management"
    popular: true;
    icon: Package;
    link: "https://ziontechgroup.com/ai-inventory-forecasting",
  },
  {
    name: "AI Supply Chain Optimizer",
    description: "Comprehensive supply chain optimization with risk analysis and cost reduction",
    price: "$499/mo",
    features: ["Risk Analysis", "Cost Reduction", "Route Optimization", "Supplier Management"],
    category: "Supply Chain"
    popular: true;
    icon: Truck;
    link: "https://ziontechgroup.com/ai-supply-chain-optimizer",
  },
  {
    name: "AI Vendor Management System",
    description: "Intelligent vendor management with performance tracking and contract optimization",
    price: "$199/mo",
    features: ["Performance Tracking", "Contract Optimization", "Payment Automation", "Compliance"],
    category: "Vendor Management"
    popular: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-vendor-management-system",
  },
  {
    name: "AI Contract Analyzer Pro",
    description: "Advanced contract analysis with risk assessment and compliance checking",
    price: "$299/mo",
    features: ["Risk Assessment", "Compliance Checking", "Clause Analysis", "Renewal Alerts"],
    category: "Contract Management"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-contract-analyzer",
  },
  {
    name: "AI Document Workflow Manager",
    description: "Intelligent document workflow automation with approval routing and version control",
    price: "$179/mo",
    features: ["Approval Routing", "Version Control", "Digital Signatures", "Audit Trail"],
    category: "Document Management"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-document-workflow-manager",
  },
  {
    name: "AI Knowledge Base Builder",
    description: "AI-powered knowledge base creation with intelligent search and content organization",
    price: "$149/mo",
    features: ["Intelligent Search", "Content Organization", "Auto-categorization", "Analytics"],
    category: "Knowledge Management"
    popular: true;
    icon: BookOpen;
    link: "https://ziontechgroup.com/ai-knowledge-base-builder",
  },
  {
    name: "AI FAQ Generator Pro",
    description: "Intelligent FAQ generation with auto-updates and customer feedback integration",
    price: "$79/mo",
    features: ["Auto-updates", "Customer Feedback", "Multi-language", "Search Optimization"],
    category: "Customer Support"
    popular: true;
    icon: HelpCircle;
    link: "https://ziontechgroup.com/ai-faq-generator",
  },
  {
    name: "AI Ticket Routing System",
    description: "Intelligent ticket routing with priority scoring and agent matching",
    price: "$199/mo",
    features: ["Priority Scoring", "Agent Matching", "Auto-categorization", "Performance Analytics"],
    category: "Customer Support"
    popular: true;
    icon: Ticket;
    link: "https://ziontechgroup.com/ai-ticket-routing-system",
  },
  {
    name: "AI Customer Satisfaction Predictor",
    description: "AI-powered customer satisfaction prediction with proactive intervention strategies",
    price: "$249/mo",
    features: ["Satisfaction Prediction", "Proactive Intervention", "Risk Scoring", "Action Recommendations"],
    category: "Customer Analytics"
    popular: true;
    icon: Smile;
    link: "https://ziontechgroup.com/ai-customer-satisfaction-predictor",
  },
  {
    name: "AI NPS Score Optimizer",
    description: "Net Promoter Score optimization with feedback analysis and improvement strategies",
    price: "$179/mo",
    features: ["Feedback Analysis", "Improvement Strategies", "Trend Analysis", "Action Planning"],
    category: "Customer Experience"
    popular: true;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-nps-score-optimizer",
  },
  {
    name: "AI Customer Segmentation Pro",
    description: "Advanced customer segmentation with behavioral analysis and targeting strategies",
    price: "$199/mo",
    features: ["Behavioral Analysis", "Targeting Strategies", "Dynamic Segmentation", "Campaign Optimization"],
    category: "Customer Analytics"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-customer-segmentation",
  },
  {
    name: "AI Personalization Engine",
    description: "Advanced personalization engine with real-time recommendations and content adaptation",
    price: "$399/mo",
    features: ["Real-time Recommendations", "Content Adaptation", "Multi-channel", "Machine Learning"],
    category: "Personalization"
    popular: true;
    icon: Target;
    link: "https://ziontechgroup.com/ai-personalization-engine",
  },
  {
    name: "AI Recommendation System Pro",
    description: "Enterprise-grade recommendation system with deep learning and real-time updates",
    price: "$499/mo",
    features: ["Deep Learning", "Real-time Updates", "Multi-algorithm", "A/B Testing"],
    category: "Recommendation Systems"
    popular: true;
    icon: Target;
    link: "https://ziontechgroup.com/ai-recommendation-system-pro",
  },
  {
    name: "AI Search Engine Optimizer",
    description: "Intelligent search optimization with query understanding and result ranking",
    price: "$299/mo",
    features: ["Query Understanding", "Result Ranking", "Auto-suggestions", "Analytics"],
    category: "Search Optimization"
    popular: true;
    icon: Search;
    link: "https://ziontechgroup.com/ai-search-engine-optimizer",
  },
  {
    name: "AI Voice Search Optimizer",
    description: "Voice search optimization with natural language processing and local SEO",
    price: "$199/mo",
    features: ["Natural Language Processing", "Local SEO", "Featured Snippets", "Voice Analytics"],
    category: "Voice Search"
    popular: true;
    icon: Mic;
    link: "https://ziontechgroup.com/ai-voice-search-optimizer",
  },
  {
    name: "AI Local SEO Optimizer",
    description: "Advanced local SEO optimization with Google My Business management and review monitoring",
    price: "$149/mo",
    features: ["Google My Business", "Review Monitoring", "Local Citations", "Rank Tracking"],
    category: "Local SEO"
    popular: true;
    icon: MapPin;
    link: "https://ziontechgroup.com/ai-local-seo-optimizer",
  },
  {
    name: "AI Technical SEO Auditor",
    description: "Comprehensive technical SEO audit with performance analysis and optimization recommendations",
    price: "$199/mo",
    features: ["Performance Analysis", "Optimization Recommendations", "Crawl Analysis", "Core Web Vitals"],
    category: "Technical SEO"
    popular: true;
    icon: Search;
    link: "https://ziontechgroup.com/ai-technical-seo-auditor",
  },
  {
    name: "AI Content Gap Analyzer",
    description: "Intelligent content gap analysis with competitor research and content suggestions",
    price: "$179/mo",
    features: ["Competitor Research", "Content Suggestions", "Keyword Opportunities", "Topic Clustering"],
    category: "Content Strategy"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-content-gap-analyzer",
  },
  {
    name: "AI Link Building Assistant",
    description: "AI-powered link building with opportunity discovery and outreach automation",
    price: "$299/mo",
    features: ["Opportunity Discovery", "Outreach Automation", "Link Quality Analysis", "Campaign Management"],
    category: "Link Building"
    popular: true;
    icon: Link;
    link: "https://ziontechgroup.com/ai-link-building-assistant",
  },
  {
    name: "AI Backlink Monitor Pro",
    description: "Advanced backlink monitoring with toxic link detection and disavow management",
    price: "$149/mo",
    features: ["Toxic Link Detection", "Disavow Management", "Link Quality Scoring", "Alert System"],
    category: "Link Monitoring"
    popular: true;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-backlink-monitor",
  },
  {
    name: "AI Competitor Intelligence Pro",
    description: "Comprehensive competitor analysis with strategy insights and opportunity identification",
    price: "$399/mo",
    features: ["Strategy Insights", "Opportunity Identification", "Market Analysis", "Trend Monitoring"],
    category: "Competitive Intelligence"
    popular: true;
    icon: Eye;
    link: "https://ziontechgroup.com/ai-competitor-intelligence",
  },
  {
    name: "AI Market Research Pro",
    description: "AI-powered market research with trend analysis and consumer insights",
    price: "$499/mo",
    features: ["Trend Analysis", "Consumer Insights", "Market Sizing", "Forecasting"],
    category: "Market Research"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-market-research",
  },
  {
    name: "AI Brand Monitoring Pro",
    description: "Comprehensive brand monitoring with sentiment analysis and crisis management",
    price: "$299/mo",
    features: ["Sentiment Analysis", "Crisis Management", "Mention Tracking", "Alert System"],
    category: "Brand Management"
    popular: true;
    icon: Eye;
    link: "https://ziontechgroup.com/ai-brand-monitoring",
  },
  {
    name: "AI Reputation Manager Pro",
    description: "Advanced reputation management with review monitoring and response automation",
    price: "$249/mo",
    features: ["Review Monitoring", "Response Automation", "Review Generation", "Analytics"],
    category: "Reputation Management"
    popular: true;
    icon: Star;
    link: "https://ziontechgroup.com/ai-reputation-manager",
  },
  {
    name: "AI Crisis Management System",
    description: "Intelligent crisis management with early detection and response automation",
    price: "$599/mo",
    features: ["Early Detection", "Response Automation", "Stakeholder Communication", "Recovery Planning"],
    category: "Crisis Management"
    popular: true;
    icon: AlertTriangle;
    link: "https://ziontechgroup.com/ai-crisis-management-system",
  },
  {
    name: "AI PR Campaign Manager",
    description: "AI-powered PR campaign management with media outreach and coverage tracking",
    price: "$399/mo",
    features: ["Media Outreach", "Coverage Tracking", "Press Release Optimization", "Analytics"],
    category: "Public Relations"
    popular: true;
    icon: Megaphone;
    link: "https://ziontechgroup.com/ai-pr-campaign-manager",
  },
  {
    name: "AI Media Monitoring Pro",
    description: "Comprehensive media monitoring with coverage analysis and trend identification",
    price: "$199/mo",
    features: ["Coverage Analysis", "Trend Identification", "Sentiment Tracking", "Alert System"],
    category: "Media Monitoring"
    popular: true;
    icon: Radio;
    link: "https://ziontechgroup.com/ai-media-monitoring",
  },
  {
    name: "AI Press Release Generator",
    description: "AI-powered press release creation with optimization and distribution management",
    price: "$149/mo",
    features: ["Press Release Creation", "Optimization", "Distribution Management", "Analytics"],
    category: "Press Release"
    popular: true;
    icon: FileText;
    link: "https://ziontechgroup.com/ai-press-release-generator",
  },
  {
    name: "AI Event Management Pro",
    description: "Comprehensive event management with attendee analysis and optimization recommendations",
    price: "$299/mo",
    features: ["Attendee Analysis", "Optimization Recommendations", "Registration Management", "Analytics"],
    category: "Event Management"
    popular: true;
    icon: Calendar;
    link: "https://ziontechgroup.com/ai-event-management",
  },
  {
    name: "AI Webinar Platform Pro",
    description: "Advanced webinar platform with AI-powered engagement and analytics",
    price: "$199/mo",
    features: ["AI Engagement", "Advanced Analytics", "Interactive Features", "Recording"],
    category: "Webinar Platform"
    popular: true;
    icon: Video;
    link: "https://ziontechgroup.com/ai-webinar-platform",
  },
  {
    name: "AI Virtual Event Manager",
    description: "Intelligent virtual event management with networking optimization and engagement tracking",
    price: "$399/mo",
    features: ["Networking Optimization", "Engagement Tracking", "Matchmaking", "Analytics"],
    category: "Virtual Events"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-virtual-event-manager",
  },
  {
    name: "AI Conference Scheduler Pro",
    description: "AI-powered conference scheduling with conflict resolution and optimization",
    price: "$179/mo",
    features: ["Conflict Resolution", "Optimization", "Attendee Preferences", "Analytics"],
    category: "Conference Management"
    popular: true;
    icon: Calendar;
    link: "https://ziontechgroup.com/ai-conference-scheduler",
  },
  {
    name: "AI Meeting Room Optimizer",
    description: "Intelligent meeting room optimization with utilization analysis and booking management",
    price: "$129/mo",
    features: ["Utilization Analysis", "Booking Management", "Space Optimization", "Analytics"],
    category: "Space Management"
    popular: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-meeting-room-optimizer",
  },
  {
    name: "AI Travel Planner Pro",
    description: "AI-powered travel planning with cost optimization and itinerary management",
    price: "$99/mo",
    features: ["Cost Optimization", "Itinerary Management", "Real-time Updates", "Expense Tracking"],
    category: "Travel Management"
    popular: true;
    icon: Plane;
    link: "https://ziontechgroup.com/ai-travel-planner",
  },
  {
    name: "AI Expense Management Pro",
    description: "Advanced expense management with receipt scanning and policy compliance",
    price: "$149/mo",
    features: ["Receipt Scanning", "Policy Compliance", "Automated Approval", "Analytics"],
    category: "Expense Management"
    popular: true;
    icon: Receipt;
    link: "https://ziontechgroup.com/ai-expense-management",
  },
  {
    name: "AI Budget Planner Pro",
    description: "Intelligent budget planning with forecasting and optimization recommendations",
    price: "$119/mo",
    features: ["Forecasting", "Optimization Recommendations", "Scenario Planning", "Analytics"],
    category: "Budget Planning"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-budget-planner",
  },
  {
    name: "AI Financial Dashboard Pro",
    description: "Comprehensive financial dashboard with real-time analytics and forecasting",
    price: "$199/mo",
    features: ["Real-time Analytics", "Forecasting", "Custom Reports", "Alerts"],
    category: "Financial Analytics"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-financial-dashboard",
  },
  {
    name: "AI Tax Optimizer Pro",
    description: "Advanced tax optimization with deduction maximization and compliance monitoring",
    price: "$299/mo",
    features: ["Deduction Maximization", "Compliance Monitoring", "Tax Planning", "Filing Assistance"],
    category: "Tax Management"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-tax-optimizer",
  },
  {
    name: "AI Investment Analyzer Pro",
    description: "AI-powered investment analysis with portfolio optimization and risk assessment",
    price: "$399/mo",
    features: ["Portfolio Optimization", "Risk Assessment", "Market Analysis", "Recommendations"],
    category: "Investment Analysis"
    popular: true;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-investment-analyzer",
  },
  {
    name: "AI Retirement Planner Pro",
    description: "Comprehensive retirement planning with scenario analysis and optimization",
    price: "$199/mo",
    features: ["Scenario Analysis", "Optimization", "Goal Setting", "Progress Tracking"],
    category: "Retirement Planning"
    popular: true;
    icon: PiggyBank;
    link: "https://ziontechgroup.com/ai-retirement-planner",
  },
  {
    name: "AI Insurance Optimizer Pro",
    description: "Intelligent insurance optimization with coverage analysis and cost reduction",
    price: "$179/mo",
    features: ["Coverage Analysis", "Cost Reduction", "Risk Assessment", "Policy Comparison"],
    category: "Insurance"
    popular: true;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-insurance-optimizer",
  },
  {
    name: "AI Loan Calculator Pro",
    description: "Advanced loan calculator with optimization and comparison tools",
    price: "$79/mo",
    features: ["Loan Optimization", "Comparison Tools", "Payment Planning", "Refinancing Analysis"],
    category: "Loan Management"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-loan-calculator",
  },
  {
    name: "AI Credit Score Monitor",
    description: "AI-powered credit score monitoring with improvement recommendations and alerts",
    price: "$99/mo",
    features: ["Score Monitoring", "Improvement Recommendations", "Alerts", "Credit Analysis"],
    category: "Credit Management"
    popular: true;
    icon: CreditCard;
    link: "https://ziontechgroup.com/ai-credit-score-monitor",
  },
  {
    name: "AI Debt Consolidation Planner",
    description: "Intelligent debt consolidation planning with optimization and payment strategies",
    price: "$149/mo",
    features: ["Debt Optimization", "Payment Strategies", "Interest Analysis", "Progress Tracking"],
    category: "Debt Management"
    popular: true;
    icon: CreditCard;
    link: "https://ziontechgroup.com/ai-debt-consolidation-planner",
  },
  {
    name: "AI Savings Goal Tracker",
    description: "AI-powered savings goal tracking with optimization and achievement strategies",
    price: "$69/mo",
    features: ["Goal Tracking", "Optimization", "Achievement Strategies", "Progress Analytics"],
    category: "Savings Management"
    popular: true;
    icon: Target;
    link: "https://ziontechgroup.com/ai-savings-goal-tracker",
  },
  {
    name: "AI Cryptocurrency Tracker Pro",
    description: "Advanced cryptocurrency tracking with portfolio management and trading signals",
    price: "$199/mo",
    features: ["Portfolio Management", "Trading Signals", "Market Analysis", "Risk Assessment"],
    category: "Cryptocurrency"
    popular: true;
    icon: Coins;
    link: "https://ziontechgroup.com/ai-cryptocurrency-tracker",
  },
  {
    name: "AI Stock Market Analyzer Pro",
    description: "AI-powered stock market analysis with prediction and portfolio optimization",
    price: "$399/mo",
    features: ["Market Prediction", "Portfolio Optimization", "Technical Analysis", "Risk Management"],
    category: "Stock Analysis"
    popular: true;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-stock-market-analyzer",
  },
  {
    name: "AI Forex Trading Assistant",
    description: "Intelligent forex trading assistant with signal generation and risk management",
    price: "$299/mo",
    features: ["Signal Generation", "Risk Management", "Market Analysis", "Automated Trading"],
    category: "Forex Trading"
    popular: true;
    icon: DollarSign;
    link: "https://ziontechgroup.com/ai-forex-trading-assistant",
  },
  {
    name: "AI Options Trading Pro",
    description: "Advanced options trading platform with strategy optimization and risk analysis",
    price: "$499/mo",
    features: ["Strategy Optimization", "Risk Analysis", "Pricing Models", "Automated Strategies"],
    category: "Options Trading"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-options-trading-pro",
  },
  {
    name: "AI Real Estate Analyzer Pro",
    description: "Comprehensive real estate analysis with investment optimization and market forecasting",
    price: "$299/mo",
    features: ["Investment Optimization", "Market Forecasting", "Property Analysis", "ROI Calculation"],
    category: "Real Estate"
    popular: true;
    icon: Home;
    link: "https://ziontechgroup.com/ai-real-estate-analyzer",
  },
  {
    name: "AI Property Management Pro",
    description: "Intelligent property management with tenant analysis and maintenance optimization",
    price: "$199/mo",
    features: ["Tenant Analysis", "Maintenance Optimization", "Rent Optimization", "Vacancy Management"],
    category: "Property Management"
    popular: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-property-management",
  },
  {
    name: "AI Mortgage Calculator Pro",
    description: "Advanced mortgage calculator with refinancing analysis and payment optimization",
    price: "$79/mo",
    features: ["Refinancing Analysis", "Payment Optimization", "Rate Comparison", "Amortization"],
    category: "Mortgage Tools"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-mortgage-calculator",
  },
  {
    name: "AI Home Value Estimator",
    description: "AI-powered home value estimation with market analysis and trend prediction",
    price: "$149/mo",
    features: ["Market Analysis", "Trend Prediction", "Comparative Analysis", "Valuation Reports"],
    category: "Real Estate Valuation"
    popular: true;
    icon: Home;
    link: "https://ziontechgroup.com/ai-home-value-estimator",
  },
  {
    name: "AI Rental Yield Calculator",
    description: "Intelligent rental yield calculation with optimization and market analysis",
    price: "$99/mo",
    features: ["Yield Calculation", "Optimization", "Market Analysis", "ROI Projections"],
    category: "Rental Analysis"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-rental-yield-calculator",
  },
  {
    name: "AI Property Investment Advisor",
    description: "AI-powered property investment advice with market analysis and risk assessment",
    price: "$249/mo",
    features: ["Investment Advice", "Market Analysis", "Risk Assessment", "Portfolio Optimization"],
    category: "Investment Advisory"
    popular: true;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-property-investment-advisor",
  },
  {
    name: "AI Commercial Real Estate Pro",
    description: "Advanced commercial real estate analysis with market intelligence and investment optimization",
    price: "$499/mo",
    features: ["Market Intelligence", "Investment Optimization", "Tenant Analysis", "Lease Management"],
    category: "Commercial Real Estate"
    popular: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-commercial-real-estate",
  },
  {
    name: "AI Real Estate Marketing Pro",
    description: "AI-powered real estate marketing with lead generation and conversion optimization",
    price: "$199/mo",
    features: ["Lead Generation", "Conversion Optimization", "Marketing Automation", "Analytics"],
    category: "Real Estate Marketing"
    popular: true;
    icon: Megaphone;
    link: "https://ziontechgroup.com/ai-real-estate-marketing",
  },
  {
    name: "AI Property Photography Pro",
    description: "AI-powered property photography with virtual staging and enhancement",
    price: "$149/mo",
    features: ["Virtual Staging", "Image Enhancement", "Virtual Tours", "3D Visualization"],
    category: "Property Photography"
    popular: true;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-property-photography",
  },
  {
    name: "AI Virtual Tour Creator",
    description: "Intelligent virtual tour creation with interactive features and analytics",
    price: "$179/mo",
    features: ["Interactive Tours", "Analytics", "VR Support", "Mobile Optimization"],
    category: "Virtual Tours"
    popular: true;
    icon: Eye;
    link: "https://ziontechgroup.com/ai-virtual-tour-creator",
  },
  {
    name: "AI Real Estate CRM Pro",
    description: "Advanced real estate CRM with lead management and pipeline optimization",
    price: "$299/mo",
    features: ["Lead Management", "Pipeline Optimization", "Client Communication", "Analytics"],
    category: "Real Estate CRM"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-real-estate-crm",
  },
  {
    name: "AI Property Inspection Pro",
    description: "AI-powered property inspection with defect detection and report generation",
    price: "$199/mo",
    features: ["Defect Detection", "Report Generation", "Photo Analysis", "Compliance Checking"],
    category: "Property Inspection"
    popular: true;
    icon: Search;
    link: "https://ziontechgroup.com/ai-property-inspection",
  },
  {
    name: "AI Real Estate Analytics Pro",
    description: "Comprehensive real estate analytics with market trends and investment insights",
    price: "$399/mo",
    features: ["Market Trends", "Investment Insights", "Predictive Analytics", "Custom Reports"],
    category: "Real Estate Analytics"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-real-estate-analytics",
  },
  {
    name: "AI Real Estate Lead Generator",
    description: "Intelligent lead generation with qualification scoring and nurturing automation",
    price: "$249/mo",
    features: ["Qualification Scoring", "Nurturing Automation", "Lead Sources", "Conversion Tracking"],
    category: "Lead Generation"
    popular: true;
    icon: Target;
    link: "https://ziontechgroup.com/ai-real-estate-lead-generator",
  },
  {
    name: "AI Real Estate Chatbot Pro",
    description: "Advanced real estate chatbot with property search and customer support",
    price: "$179/mo",
    features: ["Property Search", "Customer Support", "Lead Capture", "Appointment Scheduling"],
    category: "Real Estate Chatbot"
    popular: true;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-real-estate-chatbot",
  },
  {
    name: "AI Real Estate Website Builder",
    description: "AI-powered real estate website creation with MLS integration and lead capture",
    price: "$299/mo",
    features: ["MLS Integration", "Lead Capture", "Property Search", "Mobile Optimization"],
    category: "Real Estate Websites"
    popular: true;
    icon: Globe;
    link: "https://ziontechgroup.com/ai-real-estate-website-builder",
  },
  {
    name: "AI Real Estate App Builder",
    description: "Intelligent real estate app development with property search and user engagement",
    price: "$499/mo",
    features: ["Property Search", "User Engagement", "Push Notifications", "Analytics"],
    category: "Real Estate Apps"
    popular: true;
    icon: Smartphone;
    link: "https://ziontechgroup.com/ai-real-estate-app-builder",
  },
  {
    name: "AI Real Estate Data Scraper",
    description: "Advanced real estate data extraction with market intelligence and trend analysis",
    price: "$199/mo",
    features: ["Data Extraction", "Market Intelligence", "Trend Analysis", "API Access"],
    category: "Data Scraping"
    popular: true;
    icon: Database;
    link: "https://ziontechgroup.com/ai-real-estate-data-scraper",
  },
  {
    name: "AI Real Estate Price Predictor",
    description: "AI-powered price prediction with market analysis and trend forecasting",
    price: "$299/mo",
    features: ["Price Prediction", "Market Analysis", "Trend Forecasting", "Accuracy Metrics"],
    category: "Price Prediction"
    popular: true;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-real-estate-price-predictor",
  },
  {
    name: "AI Real Estate Market Monitor",
    description: "Comprehensive market monitoring with alerts and opportunity identification",
    price: "$149/mo",
    features: ["Market Monitoring", "Alerts", "Opportunity Identification", "Trend Analysis"],
    category: "Market Monitoring"
    popular: true;
    icon: Eye;
    link: "https://ziontechgroup.com/ai-real-estate-market-monitor",
  },
  {
    name: "AI Real Estate Investment Calculator",
    description: "Advanced investment calculator with ROI analysis and cash flow projections",
    price: "$99/mo",
    features: ["ROI Analysis", "Cash Flow Projections", "Scenario Planning", "Risk Assessment"],
    category: "Investment Calculator"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-real-estate-investment-calculator",
  },
  {
    name: "AI Real Estate Portfolio Manager",
    description: "Intelligent portfolio management with performance tracking and optimization",
    price: "$399/mo",
    features: ["Performance Tracking", "Portfolio Optimization", "Risk Management", "Analytics"],
    category: "Portfolio Management"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-real-estate-portfolio-manager",
  },
  {
    name: "AI Real Estate Tax Optimizer",
    description: "AI-powered tax optimization with deduction maximization and compliance",
    price: "$199/mo",
    features: ["Tax Optimization", "Deduction Maximization", "Compliance", "Filing Assistance"],
    category: "Tax Optimization"
    popular: true;
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-real-estate-tax-optimizer",
  },
  {
    name: "AI Real Estate Insurance Pro",
    description: "Intelligent insurance management with coverage optimization and claims processing",
    price: "$149/mo",
    features: ["Coverage Optimization", "Claims Processing", "Risk Assessment", "Policy Management"],
    category: "Insurance Management"
    popular: true;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-real-estate-insurance",
  },
  {
    name: "AI Real Estate Legal Assistant",
    description: "AI-powered legal assistance with contract analysis and compliance monitoring",
    price: "$299/mo",
    features: ["Contract Analysis", "Compliance Monitoring", "Legal Research", "Document Review"],
    category: "Legal Assistance"
    popular: true;
    icon: Scale;
    link: "https://ziontechgroup.com/ai-real-estate-legal-assistant",
  },
  {
    name: "AI Real Estate Title Search Pro",
    description: "Advanced title search with AI-powered analysis and risk assessment",
    price: "$199/mo",
    features: ["Title Analysis", "Risk Assessment", "Chain of Title", "Lien Detection"],
    category: "Title Search"
    popular: true;
    icon: Search;
    link: "https://ziontechgroup.com/ai-real-estate-title-search",
  },
  {
    name: "AI Real Estate Appraisal Pro",
    description: "AI-powered property appraisal with market analysis and valuation accuracy",
    price: "$249/mo",
    features: ["Market Analysis", "Valuation Accuracy", "Comparative Analysis", "Report Generation"],
    category: "Property Appraisal"
    popular: true;
    icon: Home;
    link: "https://ziontechgroup.com/ai-real-estate-appraisal",
  },
  {
    name: "AI Real Estate Market Research Pro",
    description: "Comprehensive market research with trend analysis and investment opportunities",
    price: "$399/mo",
    features: ["Trend Analysis", "Investment Opportunities", "Market Intelligence", "Forecasting"],
    category: "Market Research"
    popular: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-real-estate-market-research",
  },
  {
    name: "AI Real Estate Investment Banking",
    description: "Advanced investment banking services with deal structuring and capital raising",
    price: "$999/mo",
    features: ["Deal Structuring", "Capital Raising", "Financial Modeling", "Due Diligence"],
    category: "Investment Banking"
    popular: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-real-estate-investment-banking",
  },
  {
    name: "AI Real Estate Syndication Pro",
    description: "Intelligent syndication management with investor relations and distribution optimization",
    price: "$599/mo",
    features: ["Investor Relations", "Distribution Optimization", "Compliance", "Reporting"],
    category: "Syndication"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-real-estate-syndication",
  },
  {
    name: "AI Real Estate Crowdfunding",
    description: "AI-powered crowdfunding platform with investor matching and risk assessment",
    price: "$499/mo",
    features: ["Investor Matching", "Risk Assessment", "Campaign Management", "Compliance"],
    category: "Crowdfunding"
    popular: true;
    icon: Users;
    link: "https://ziontechgroup.com/ai-real-estate-crowdfunding",
  },
  {
    name: "AI Real Estate REIT Analyzer",
    description: "Advanced REIT analysis with performance tracking and investment optimization",
    price: "$299/mo",
    features: ["Performance Tracking", "Investment Optimization", "Dividend Analysis", "Risk Assessment"],
    category: "REIT Analysis"
    popular: true;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-real-estate-reit-analyzer",
  },
  {
    name: "AI Real Estate Development Pro",
    description: "Comprehensive development management with feasibility analysis and project optimization",
    price: "$799/mo",
    features: ["Feasibility Analysis", "Project Optimization", "Cost Management", "Timeline Planning"],
    category: "Development"
    popular: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-real-estate-development",
  },
  {
    name: "AI Real Estate Construction Pro",
    description: "Intelligent construction management with cost optimization and quality control",
    price: "$599/mo",
    features: ["Cost Optimization", "Quality Control", "Schedule Management", "Resource Planning"],
    category: "Construction"
    popular: true;
    icon: Hammer;
    link: "https://ziontechgroup.com/ai-real-estate-construction",
  },
  {
    name: "AI Real Estate Facility Management",
    description: "Advanced facility management with predictive maintenance and cost optimization",
    price: "$399/mo",
    features: ["Predictive Maintenance", "Cost Optimization", "Energy Management", "Tenant Services"],
    category: "Facility Management"
    popular: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-real-estate-facility-management",
  },
  {
    name: "AI Real Estate Energy Optimizer",
    description: "AI-powered energy optimization with sustainability tracking and cost reduction",
    price: "$199/mo",
    features: ["Energy Optimization", "Sustainability Tracking", "Cost Reduction", "Carbon Footprint"],
    category: "Energy Management"
    popular: true;
    icon: Zap;
    link: "https://ziontechgroup.com/ai-real-estate-energy-optimizer",
  },
  {
    name: "AI Real Estate Smart Building",
    description: "Intelligent smart building management with IoT integration and automation",
    price: "$499/mo",
    features: ["IoT Integration", "Automation", "Energy Management", "Tenant Experience"],
    category: "Smart Buildings"
    popular: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-real-estate-smart-building",
  },
  {
    name: "AI Real Estate PropTech Platform",
    description: "Comprehensive PropTech platform with integrated solutions and analytics",
    price: "$999/mo",
    features: ["Integrated Solutions", "Analytics", "API Access", "Custom Development"],
    category: "PropTech"
    popular: true;
    icon: Code;
    link: "https://ziontechgroup.com/ai-real-estate-proptech-platform",
  }
];

// Testimonials data;
const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    content: "Zion Tech Group's AI solutions transformed our operations completely. We achieved 300% ROI in just 6 months and reduced operational costs by 70%. Their AI workflow automation is game-changing.",
    avatar: "SJ",
  },
  {
<<<<<<< HEAD
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
=======
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLabs",
    content: "The AI customer support bot they built for us handles 90% of inquiries automatically. Our customer satisfaction increased by 40% while reducing support costs by 60%. Outstanding work!",
    avatar: "MC",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer",
    company: "MedTech Innovations",
    content: "Their AI healthcare solutions are revolutionary. The diagnostic accuracy improved by 35% and patient processing time decreased by 50%. This is the future of healthcare technology.",
    avatar: "ER",
  }
];

// Stats data;
const stats: Stat[] = [,
  {,
    number: "500+",
    label: "Happy Clients",
    icon: Users;
  },
  {
    number: "99.9%",
    label: "Uptime Guarantee",
    icon: Shield;
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: Clock;
  },
  {
    number: "300%",
    label: "Average ROI",
    icon: TrendingUp;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  }
];

const aiServices: AIService[] = [,
  {,
    name: "AI Drug Discovery Pro",
    description: "Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction",
    price: "$4,500/mo",
    features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization", "Patent Research"],
    category: "Healthcare AI"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-drug-discovery-pro",
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Combat climate change with intelligent environmental monitoring and carbon footprint optimization",
    price: "$3,200/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environmental AI"
    enterprise: false;
    icon: Globe;
    link: "https://ziontechgroup.com/ai-climate-solutions-pro",
  },
  {
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space Technology"
    enterprise: true;
    icon: Rocket;
    link: "https://ziontechgroup.com/ai-space-technology-pro",
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Financial AI"
    enterprise: false;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro",
  },
  {
    name: "AI Quantum Computing Platform",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization",
    price: "$6,000/mo",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    category: "Quantum AI"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-quantum-computing",
  },
  {
    name: "AI Healthcare Solutions",
    description: "Comprehensive AI-powered healthcare solutions for diagnosis, treatment, and patient care",
    price: "$3,800/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare AI"
    enterprise: true;
    icon: Heart;
    link: "https://ziontechgroup.com/ai-healthcare",
  },
  {
    name: "AI Computer Vision Platform",
    description: "Advanced image recognition and computer vision solutions for various industries",
    price: "$2,200/mo",
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    category: "Computer Vision"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-computer-vision",
  },
  {
    name: "AI Supply Chain Optimization Pro",
    description: "Intelligent supply chain management with predictive analytics and optimization algorithms",
    price: "$4,200/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Supply Chain AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro",
  },
  {
<<<<<<< HEAD
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
    icon: Building,
    link: "https://ziontechgroup.com/ai-smart-city-management"
=======
    name: "AI Neural Network Architecture Designer",
    description: "Automated neural network design and optimization for custom AI model development",
    price: "$3,500/mo",
    features: ["Auto Architecture", "Model Optimization", "Performance Tuning", "Custom Training"],
    category: "AI Development"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-neural-network-designer",
  },
  {
    name: "AI Predictive Maintenance Platform",
    description: "Advanced predictive maintenance for industrial equipment with AI-powered failure prediction",
    price: "$2,800/mo",
    features: ["Failure Prediction", "Maintenance Scheduling", "Cost Optimization", "Equipment Monitoring"],
    category: "Industrial AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-predictive-maintenance",
  },
  {
    name: "AI Natural Language Processing Suite",
    description: "Comprehensive NLP platform with sentiment analysis, language translation, and text generation",
    price: "$1,800/mo",
    features: ["Sentiment Analysis", "Language Translation", "Text Generation", "Entity Recognition"],
    category: "NLP"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-nlp-suite",
  },
  {
    name: "AI Recommendation Engine Pro",
    description: "Advanced recommendation system with deep learning algorithms for personalized content delivery",
    price: "$2,200/mo",
    features: ["Deep Learning", "Real-time Recommendations", "A/B Testing", "Performance Analytics"],
    category: "Recommendation Systems"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-recommendation-engine",
  },
  {
    name: "AI Time Series Forecasting",
    description: "Advanced time series analysis and forecasting with machine learning algorithms",
    price: "$1,600/mo",
    features: ["Time Series Analysis", "Forecasting Models", "Anomaly Detection", "Trend Analysis"],
    category: "Data Science"
    enterprise: false;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-time-series-forecasting",
  },
  {
    name: "AI Speech Recognition Platform",
    description: "High-accuracy speech recognition with real-time processing and multi-language support",
    price: "$1,400/mo",
    features: ["Real-time Processing", "Multi-language", "Noise Cancellation", "Custom Models"],
    category: "Speech AI"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-speech-recognition",
  },
  {
    name: "AI Image Generation Studio",
    description: "Advanced AI image generation with style transfer, upscaling, and creative tools",
    price: "$899/mo",
    features: ["Style Transfer", "Image Upscaling", "Creative Generation", "Batch Processing"],
    category: "Computer Vision"
    enterprise: false;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-image-generation",
  },
  {
    name: "AI Autonomous Vehicle Platform",
    description: "Complete autonomous vehicle management system with AI-powered navigation and safety",
    price: "$8,500/mo",
    features: ["Autonomous Navigation", "Safety Systems", "Fleet Management", "Real-time Monitoring"],
    category: "Autonomous Systems"
    enterprise: true;
    icon: Car;
    link: "https://ziontechgroup.com/ai-autonomous-vehicles",
  },
  {
    name: "AI Smart City Management",
    description: "Comprehensive smart city solution with AI-powered traffic, energy, and resource management",
    price: "$12,000/mo",
    features: ["Traffic Optimization", "Energy Management", "Resource Allocation", "Citizen Services"],
    category: "Smart Cities"
    enterprise: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-smart-city-management",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  },
  {
    name: "AI Quantum Machine Learning Platform",
    description: "Next-generation quantum machine learning with exponential speedup for complex problems",
    price: "$8,500/mo",
    features: ["Quantum Algorithms", "Exponential Speedup", "Complex Problem Solving", "Quantum Neural Networks"],
    category: "Quantum AI"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-quantum-ml-platform",
  },
  {
    name: "AI Space Mission Control",
    description: "Advanced space mission management with AI-powered navigation and mission planning",
    price: "$15,000/mo",
    features: ["Mission Planning", "Navigation Control", "Satellite Management", "Space Analytics"],
    category: "Space Technology"
    enterprise: true;
    icon: Rocket;
    link: "https://ziontechgroup.com/ai-space-mission-control",
  },
  {
    name: "AI Climate Intelligence Pro",
    description: "Advanced climate monitoring and prediction with AI-powered environmental analysis",
    price: "$4,200/mo",
    features: ["Climate Prediction", "Environmental Analysis", "Carbon Tracking", "Sustainability Planning"],
    category: "Environmental AI"
    enterprise: true;
    icon: Globe;
    link: "https://ziontechgroup.com/ai-climate-intelligence",
  },
  {
    name: "AI Pharmaceutical Research Pro",
    description: "Revolutionary drug discovery and pharmaceutical research with AI-powered molecular analysis",
    price: "$6,800/mo",
    features: ["Drug Discovery", "Molecular Analysis", "Clinical Trials", "Patent Research"],
    category: "Healthcare AI"
    enterprise: true;
    icon: Heart;
    link: "https://ziontechgroup.com/ai-pharmaceutical-research",
  },
  {
    name: "AI Financial Intelligence Suite",
    description: "Comprehensive financial AI platform with real-time market analysis and trading algorithms",
    price: "$5,500/mo",
    features: ["Market Analysis", "Trading Algorithms", "Risk Assessment", "Portfolio Optimization"],
    category: "Financial AI"
    enterprise: true;
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-financial-intelligence",
  },
  {
    name: "AI Autonomous Vehicles Pro",
    description: "Complete autonomous vehicle management system with AI-powered navigation and safety",
    price: "$9,500/mo",
    features: ["Autonomous Navigation", "Safety Systems", "Fleet Management", "Real-time Monitoring"],
    category: "Autonomous Systems"
    enterprise: true;
    icon: Car;
    link: "https://ziontechgroup.com/ai-autonomous-vehicles",
  },
  {
    name: "AI Blockchain Intelligence Platform",
    description: "Advanced blockchain analysis and DeFi optimization with AI-powered insights",
    price: "$4,800/mo",
    features: ["Blockchain Analysis", "DeFi Optimization", "Smart Contract AI", "Crypto Analytics"],
    category: "Blockchain AI"
    enterprise: true;
    icon: Shield;
    link: "https://ziontechgroup.com/ai-blockchain-intelligence",
  },
  {
    name: "AI Supply Chain Intelligence Pro",
    description: "Intelligent supply chain optimization with AI-powered logistics and demand forecasting",
    price: "$7,200/mo",
    features: ["Logistics Optimization", "Demand Forecasting", "Risk Management", "Cost Optimization"],
    category: "Supply Chain AI"
    enterprise: true;
    icon: Truck;
    link: "https://ziontechgroup.com/ai-supply-chain-intelligence",
  },
  {
    name: "AI Legal Intelligence Platform",
    description: "Advanced legal AI with case analysis, contract review, and compliance monitoring",
    price: "$6,000/mo",
    features: ["Case Analysis", "Contract Review", "Compliance Monitoring", "Legal Research"],
    category: "Legal AI"
    enterprise: true;
    icon: Scale;
    link: "https://ziontechgroup.com/ai-legal-intelligence",
  },
  {
    name: "AI Agricultural Intelligence Pro",
    description: "Smart farming solutions with AI-powered crop monitoring and yield optimization",
    price: "$5,800/mo",
    features: ["Crop Monitoring", "Yield Optimization", "Weather Analysis", "Automation Control"],
    category: "Agricultural AI"
    enterprise: true;
    icon: Sprout;
    link: "https://ziontechgroup.com/ai-agricultural-intelligence",
  },
  {
    name: "AI Energy Grid Intelligence Pro",
    description: "Smart energy management with AI-powered grid optimization and renewable integration",
    price: "$8,200/mo",
    features: ["Grid Optimization", "Renewable Integration", "Demand Forecasting", "Energy Storage"],
    category: "Energy AI"
    enterprise: true;
    icon: Zap;
    link: "https://ziontechgroup.com/ai-energy-grid-intelligence",
  },
  {
    name: "AI Manufacturing Intelligence Pro",
    description: "Smart manufacturing with AI-powered process optimization and quality control",
    price: "$7,800/mo",
    features: ["Process Optimization", "Quality Control", "Predictive Maintenance", "Supply Chain Integration"],
    category: "Manufacturing AI"
    enterprise: true;
    icon: Factory;
    link: "https://ziontechgroup.com/ai-manufacturing-intelligence",
  },
  {
    name: "AI Neural Network Architecture Designer",
    description: "Automated neural network design and optimization for custom AI model development",
    price: "$4,500/mo",
    features: ["Auto Architecture", "Model Optimization", "Performance Tuning", "Custom Training"],
    category: "AI Development"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-neural-network-designer",
  },
  {
    name: "AI Predictive Maintenance Platform",
    description: "Advanced predictive maintenance for industrial equipment with AI-powered failure prediction",
    price: "$3,800/mo",
    features: ["Failure Prediction", "Maintenance Scheduling", "Cost Optimization", "Equipment Monitoring"],
    category: "Industrial AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-predictive-maintenance",
  },
  {
    name: "AI Natural Language Processing Suite",
    description: "Comprehensive NLP platform with sentiment analysis, translation, and text generation",
    price: "$2,800/mo",
    features: ["Sentiment Analysis", "Language Translation", "Text Generation", "Entity Recognition"],
    category: "NLP"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-nlp-suite",
  },
  {
    name: "AI Recommendation Engine Pro",
    description: "Advanced recommendation system with deep learning algorithms for personalized content",
    price: "$3,200/mo",
    features: ["Deep Learning", "Real-time Recommendations", "A/B Testing", "Performance Analytics"],
    category: "Recommendation Systems"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-recommendation-engine",
  },
  {
    name: "AI Time Series Forecasting Pro",
    description: "Advanced time series analysis and forecasting with machine learning algorithms",
    price: "$2,400/mo",
    features: ["Time Series Analysis", "Forecasting Models", "Anomaly Detection", "Trend Analysis"],
    category: "Data Science"
    enterprise: false;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-time-series-forecasting",
  },
  {
    name: "AI Speech Recognition Platform Pro",
    description: "High-accuracy speech recognition with real-time processing and multi-language support",
    price: "$2,200/mo",
    features: ["Real-time Processing", "Multi-language", "Noise Cancellation", "Custom Models"],
    category: "Speech AI"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-speech-recognition",
  },
  {
    name: "AI Image Generation Studio Pro",
    description: "Advanced AI image generation with style transfer, upscaling, and creative tools",
    price: "$1,800/mo",
    features: ["Style Transfer", "Image Upscaling", "Creative Generation", "Batch Processing"],
    category: "Computer Vision"
    enterprise: false;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-image-generation",
  },
  {
    name: "AI Autonomous Vehicle Platform Pro",
    description: "Complete autonomous vehicle management system with AI-powered navigation and safety",
    price: "$12,500/mo",
    features: ["Autonomous Navigation", "Safety Systems", "Fleet Management", "Real-time Monitoring"],
    category: "Autonomous Systems"
    enterprise: true;
    icon: Car;
    link: "https://ziontechgroup.com/ai-autonomous-vehicles",
  },
  {
    name: "AI Smart City Management Pro",
    description: "Comprehensive smart city solution with AI-powered traffic, energy, and resource management",
    price: "$15,000/mo",
    features: ["Traffic Optimization", "Energy Management", "Resource Allocation", "Citizen Services"],
    category: "Smart Cities"
    enterprise: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-smart-city-management",
  },
  {
    name: "AI Quantum Computing Platform Pro",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization",
    price: "$18,000/mo",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    category: "Quantum AI"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-quantum-computing",
  },
  {
    name: "AI Healthcare Solutions Pro",
    description: "Comprehensive AI-powered healthcare solutions for diagnosis, treatment, and patient care",
    price: "$8,500/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare AI"
    enterprise: true;
    icon: Heart;
    link: "https://ziontechgroup.com/ai-healthcare",
  },
  {
    name: "AI Computer Vision Platform Pro",
    description: "Advanced image recognition and computer vision solutions for various industries",
    price: "$4,200/mo",
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    category: "Computer Vision"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-computer-vision",
  },
  {
    name: "AI Supply Chain Optimization Pro",
    description: "Intelligent supply chain management with predictive analytics and optimization algorithms",
    price: "$9,500/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Supply Chain AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro",
  },
  {
    name: "AI Neural Network Architecture Designer Pro",
    description: "Automated neural network design and optimization for custom AI model development",
    price: "$6,500/mo",
    features: ["Auto Architecture", "Model Optimization", "Performance Tuning", "Custom Training"],
    category: "AI Development"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-neural-network-designer",
  },
  {
    name: "AI Predictive Maintenance Platform Pro",
    description: "Advanced predictive maintenance for industrial equipment with AI-powered failure prediction",
    price: "$5,200/mo",
    features: ["Failure Prediction", "Maintenance Scheduling", "Cost Optimization", "Equipment Monitoring"],
    category: "Industrial AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-predictive-maintenance",
  },
  {
    name: "AI Natural Language Processing Suite Pro",
    description: "Comprehensive NLP platform with sentiment analysis, translation, and text generation",
    price: "$4,200/mo",
    features: ["Sentiment Analysis", "Language Translation", "Text Generation", "Entity Recognition"],
    category: "NLP"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-nlp-suite",
  },
  {
    name: "AI Recommendation Engine Pro Plus",
    description: "Advanced recommendation system with deep learning algorithms for personalized content",
    price: "$4,800/mo",
    features: ["Deep Learning", "Real-time Recommendations", "A/B Testing", "Performance Analytics"],
    category: "Recommendation Systems"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-recommendation-engine",
  },
  {
    name: "AI Time Series Forecasting Pro Plus",
    description: "Advanced time series analysis and forecasting with machine learning algorithms",
    price: "$3,600/mo",
    features: ["Time Series Analysis", "Forecasting Models", "Anomaly Detection", "Trend Analysis"],
    category: "Data Science"
    enterprise: false;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-time-series-forecasting",
  },
  {
    name: "AI Speech Recognition Platform Pro Plus",
    description: "High-accuracy speech recognition with real-time processing and multi-language support",
    price: "$3,200/mo",
    features: ["Real-time Processing", "Multi-language", "Noise Cancellation", "Custom Models"],
    category: "Speech AI"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-speech-recognition",
  },
  {
    name: "AI Image Generation Studio Pro Plus",
    description: "Advanced AI image generation with style transfer, upscaling, and creative tools",
    price: "$2,800/mo",
    features: ["Style Transfer", "Image Upscaling", "Creative Generation", "Batch Processing"],
    category: "Computer Vision"
    enterprise: false;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-image-generation",
  },
  {
    name: "AI Autonomous Vehicle Platform Pro Plus",
    description: "Complete autonomous vehicle management system with AI-powered navigation and safety",
    price: "$18,500/mo",
    features: ["Autonomous Navigation", "Safety Systems", "Fleet Management", "Real-time Monitoring"],
    category: "Autonomous Systems"
    enterprise: true;
    icon: Car;
    link: "https://ziontechgroup.com/ai-autonomous-vehicles",
  },
  {
    name: "AI Smart City Management Pro Plus",
    description: "Comprehensive smart city solution with AI-powered traffic, energy, and resource management",
    price: "$22,000/mo",
    features: ["Traffic Optimization", "Energy Management", "Resource Allocation", "Citizen Services"],
    category: "Smart Cities"
    enterprise: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-smart-city-management",
  },
  {
    name: "AI Quantum Computing Platform Pro Plus",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization",
    price: "$25,000/mo",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    category: "Quantum AI"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-quantum-computing",
  },
  {
    name: "AI Healthcare Solutions Pro Plus",
    description: "Comprehensive AI-powered healthcare solutions for diagnosis, treatment, and patient care",
    price: "$12,500/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare AI"
    enterprise: true;
    icon: Heart;
    link: "https://ziontechgroup.com/ai-healthcare",
  },
  {
    name: "AI Computer Vision Platform Pro Plus",
    description: "Advanced image recognition and computer vision solutions for various industries",
    price: "$6,200/mo",
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    category: "Computer Vision"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-computer-vision",
  },
  {
    name: "AI Supply Chain Optimization Pro Plus",
    description: "Intelligent supply chain management with predictive analytics and optimization algorithms",
    price: "$14,500/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Supply Chain AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro",
  },
  {
    name: "AI Neural Network Architecture Designer Pro Plus",
    description: "Automated neural network design and optimization for custom AI model development",
    price: "$9,500/mo",
    features: ["Auto Architecture", "Model Optimization", "Performance Tuning", "Custom Training"],
    category: "AI Development"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-neural-network-designer",
  },
  {
    name: "AI Predictive Maintenance Platform Pro Plus",
    description: "Advanced predictive maintenance for industrial equipment with AI-powered failure prediction",
    price: "$7,800/mo",
    features: ["Failure Prediction", "Maintenance Scheduling", "Cost Optimization", "Equipment Monitoring"],
    category: "Industrial AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-predictive-maintenance",
  },
  {
    name: "AI Natural Language Processing Suite Pro Plus",
    description: "Comprehensive NLP platform with sentiment analysis, translation, and text generation",
    price: "$6,200/mo",
    features: ["Sentiment Analysis", "Language Translation", "Text Generation", "Entity Recognition"],
    category: "NLP"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-nlp-suite",
  },
  {
    name: "AI Recommendation Engine Pro Plus Ultra",
    description: "Advanced recommendation system with deep learning algorithms for personalized content",
    price: "$7,200/mo",
    features: ["Deep Learning", "Real-time Recommendations", "A/B Testing", "Performance Analytics"],
    category: "Recommendation Systems"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-recommendation-engine",
  },
  {
    name: "AI Time Series Forecasting Pro Plus Ultra",
    description: "Advanced time series analysis and forecasting with machine learning algorithms",
    price: "$5,400/mo",
    features: ["Time Series Analysis", "Forecasting Models", "Anomaly Detection", "Trend Analysis"],
    category: "Data Science"
    enterprise: false;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-time-series-forecasting",
  },
  {
    name: "AI Speech Recognition Platform Pro Plus Ultra",
    description: "High-accuracy speech recognition with real-time processing and multi-language support",
    price: "$4,800/mo",
    features: ["Real-time Processing", "Multi-language", "Noise Cancellation", "Custom Models"],
    category: "Speech AI"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-speech-recognition",
  },
  {
    name: "AI Image Generation Studio Pro Plus Ultra",
    description: "Advanced AI image generation with style transfer, upscaling, and creative tools",
    price: "$4,200/mo",
    features: ["Style Transfer", "Image Upscaling", "Creative Generation", "Batch Processing"],
    category: "Computer Vision"
    enterprise: false;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-image-generation",
  },
  {
    name: "AI Autonomous Vehicle Platform Pro Plus Ultra",
    description: "Complete autonomous vehicle management system with AI-powered navigation and safety",
    price: "$28,500/mo",
    features: ["Autonomous Navigation", "Safety Systems", "Fleet Management", "Real-time Monitoring"],
    category: "Autonomous Systems"
    enterprise: true;
    icon: Car;
    link: "https://ziontechgroup.com/ai-autonomous-vehicles",
  },
  {
    name: "AI Smart City Management Pro Plus Ultra",
    description: "Comprehensive smart city solution with AI-powered traffic, energy, and resource management",
    price: "$35,000/mo",
    features: ["Traffic Optimization", "Energy Management", "Resource Allocation", "Citizen Services"],
    category: "Smart Cities"
    enterprise: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-smart-city-management",
  },
  {
    name: "AI Quantum Computing Platform Pro Plus Ultra",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization",
    price: "$45,000/mo",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    category: "Quantum AI"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-quantum-computing",
  },
  {
    name: "AI Healthcare Solutions Pro Plus Ultra",
    description: "Comprehensive AI-powered healthcare solutions for diagnosis, treatment, and patient care",
    price: "$18,500/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare AI"
    enterprise: true;
    icon: Heart;
    link: "https://ziontechgroup.com/ai-healthcare",
  },
  {
    name: "AI Computer Vision Platform Pro Plus Ultra",
    description: "Advanced image recognition and computer vision solutions for various industries",
    price: "$9,200/mo",
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    category: "Computer Vision"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-computer-vision",
  },
  {
    name: "AI Supply Chain Optimization Pro Plus Ultra",
    description: "Intelligent supply chain management with predictive analytics and optimization algorithms",
    price: "$22,500/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Supply Chain AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro",
  },
  {
    name: "AI Neural Network Architecture Designer Pro Plus Ultra",
    description: "Automated neural network design and optimization for custom AI model development",
    price: "$14,500/mo",
    features: ["Auto Architecture", "Model Optimization", "Performance Tuning", "Custom Training"],
    category: "AI Development"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-neural-network-designer",
  },
  {
    name: "AI Predictive Maintenance Platform Pro Plus Ultra",
    description: "Advanced predictive maintenance for industrial equipment with AI-powered failure prediction",
    price: "$11,800/mo",
    features: ["Failure Prediction", "Maintenance Scheduling", "Cost Optimization", "Equipment Monitoring"],
    category: "Industrial AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-predictive-maintenance",
  },
  {
    name: "AI Natural Language Processing Suite Pro Plus Ultra",
    description: "Comprehensive NLP platform with sentiment analysis, translation, and text generation",
    price: "$9,200/mo",
    features: ["Sentiment Analysis", "Language Translation", "Text Generation", "Entity Recognition"],
    category: "NLP"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-nlp-suite",
  },
  {
    name: "AI Recommendation Engine Pro Plus Ultra Max",
    description: "Advanced recommendation system with deep learning algorithms for personalized content",
    price: "$10,800/mo",
    features: ["Deep Learning", "Real-time Recommendations", "A/B Testing", "Performance Analytics"],
    category: "Recommendation Systems"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-recommendation-engine",
  },
  {
    name: "AI Time Series Forecasting Pro Plus Ultra Max",
    description: "Advanced time series analysis and forecasting with machine learning algorithms",
    price: "$8,100/mo",
    features: ["Time Series Analysis", "Forecasting Models", "Anomaly Detection", "Trend Analysis"],
    category: "Data Science"
    enterprise: false;
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-time-series-forecasting",
  },
  {
    name: "AI Speech Recognition Platform Pro Plus Ultra Max",
    description: "High-accuracy speech recognition with real-time processing and multi-language support",
    price: "$7,200/mo",
    features: ["Real-time Processing", "Multi-language", "Noise Cancellation", "Custom Models"],
    category: "Speech AI"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-speech-recognition",
  },
  {
    name: "AI Image Generation Studio Pro Plus Ultra Max",
    description: "Advanced AI image generation with style transfer, upscaling, and creative tools",
    price: "$6,300/mo",
    features: ["Style Transfer", "Image Upscaling", "Creative Generation", "Batch Processing"],
    category: "Computer Vision"
    enterprise: false;
    icon: Camera;
    link: "https://ziontechgroup.com/ai-image-generation",
  },
  {
    name: "AI Autonomous Vehicle Platform Pro Plus Ultra Max",
    description: "Complete autonomous vehicle management system with AI-powered navigation and safety",
    price: "$42,500/mo",
    features: ["Autonomous Navigation", "Safety Systems", "Fleet Management", "Real-time Monitoring"],
    category: "Autonomous Systems"
    enterprise: true;
    icon: Car;
    link: "https://ziontechgroup.com/ai-autonomous-vehicles",
  },
  {
    name: "AI Smart City Management Pro Plus Ultra Max",
    description: "Comprehensive smart city solution with AI-powered traffic, energy, and resource management",
    price: "$52,000/mo",
    features: ["Traffic Optimization", "Energy Management", "Resource Allocation", "Citizen Services"],
    category: "Smart Cities"
    enterprise: true;
    icon: Building;
    link: "https://ziontechgroup.com/ai-smart-city-management",
  },
  {
    name: "AI Quantum Computing Platform Pro Plus Ultra Max",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization",
    price: "$67,500/mo",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    category: "Quantum AI"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-quantum-computing",
  },
  {
    name: "AI Healthcare Solutions Pro Plus Ultra Max",
    description: "Comprehensive AI-powered healthcare solutions for diagnosis, treatment, and patient care",
    price: "$27,500/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare AI"
    enterprise: true;
    icon: Heart;
    link: "https://ziontechgroup.com/ai-healthcare",
  },
  {
    name: "AI Computer Vision Platform Pro Plus Ultra Max",
    description: "Advanced image recognition and computer vision solutions for various industries",
    price: "$13,800/mo",
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    category: "Computer Vision"
    enterprise: false;
    icon: Target;
    link: "https://ziontechgroup.com/ai-computer-vision",
  },
  {
    name: "AI Supply Chain Optimization Pro Plus Ultra Max",
    description: "Intelligent supply chain management with predictive analytics and optimization algorithms",
    price: "$33,750/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Supply Chain AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-supply-chain-optimization-pro",
  },
  {
    name: "AI Neural Network Architecture Designer Pro Plus Ultra Max",
    description: "Automated neural network design and optimization for custom AI model development",
    price: "$21,750/mo",
    features: ["Auto Architecture", "Model Optimization", "Performance Tuning", "Custom Training"],
    category: "AI Development"
    enterprise: true;
    icon: Brain;
    link: "https://ziontechgroup.com/ai-neural-network-designer",
  },
  {
    name: "AI Predictive Maintenance Platform Pro Plus Ultra Max",
    description: "Advanced predictive maintenance for industrial equipment with AI-powered failure prediction",
    price: "$17,700/mo",
    features: ["Failure Prediction", "Maintenance Scheduling", "Cost Optimization", "Equipment Monitoring"],
    category: "Industrial AI"
    enterprise: true;
    icon: Settings;
    link: "https://ziontechgroup.com/ai-predictive-maintenance",
  },
  {
    name: "AI Natural Language Processing Suite Pro Plus Ultra Max",
    description: "Comprehensive NLP platform with sentiment analysis, translation, and text generation",
    price: "$13,800/mo",
    features: ["Sentiment Analysis", "Language Translation", "Text Generation", "Entity Recognition"],
    category: "NLP"
    enterprise: false;
    icon: MessageSquare;
    link: "https://ziontechgroup.com/ai-nlp-suite",
  }
];

const itServices: ITService[] = [,
  {,
    name: "Cloud Migration & Setup",
    description: "Seamless cloud migration with zero downtime and comprehensive security",
    price: "$2,500/mo",
    features: ["Zero Downtime", "Security Audit", "Performance Optimization", "24/7 Support"],
    category: "Cloud Services",
    icon: Globe;
    link: "https://ziontechgroup.com/cloud-migration",
  },
  {
    name: "Enterprise Cybersecurity Suite",
    description: "Comprehensive security solutions to protect your digital assets and data",
    price: "$1,800/mo",
    features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance"],
    category: "Security",
    icon: Shield;
    link: "https://ziontechgroup.com/cybersecurity",
  },
  {
    name: "IT Infrastructure Design",
    description: "Scalable infrastructure architecture designed for your business needs",
    price: "$3,000/mo",
    features: ["Architecture Design", "Scalability Planning", "Performance Tuning", "Monitoring"],
    category: "Infrastructure",
    icon: Settings;
    link: "https://ziontechgroup.com/it-infrastructure",
  },
  {
    name: "24/7 IT Support & Monitoring",
    description: "Round-the-clock technical support and monitoring for your systems",
    price: "$1,200/mo",
    features: ["24/7 Support", "Remote Monitoring", "Quick Response", "Proactive Maintenance"],
    category: "Support",
    icon: Clock;
    link: "https://ziontechgroup.com/it-support",
  },
  {
    name: "Custom Software Development",
    description: "Tailored software solutions built specifically for your business requirements",
    price: "$4,500/mo",
    features: ["Custom Development", "API Integration", "Database Design", "Quality Assurance"],
    category: "Development",
    icon: Code;
    link: "https://ziontechgroup.com/custom-development",
  },
  {
    name: "DevOps & CI/CD Implementation",
    description: "Streamlined development processes with automated deployment and monitoring",
    price: "$2,200/mo",
    features: ["CI/CD Pipelines", "Automated Testing", "Deployment Automation", "Monitoring"],
    category: "DevOps",
    icon: Settings;
    link: "https://ziontechgroup.com/devops-cicd",
  },
  {
    name: "Database Management & Optimization",
    description: "Performance tuning, security, and optimization for your database systems",
    price: "$1,500/mo",
    features: ["Performance Tuning", "Security Hardening", "Backup Solutions", "Monitoring"],
    category: "Database",
    icon: Database;
    link: "https://ziontechgroup.com/database-management",
  },
  {
    name: "Network Design & Implementation",
    description: "Secure and scalable network infrastructure for your organization",
    price: "$2,800/mo",
    features: ["Network Architecture", "Security Implementation", "Performance Optimization", "Monitoring"],
    category: "Networking",
    icon: Globe;
    link: "https://ziontechgroup.com/network-design",
  },
  {
    name: "AI Infrastructure Monitoring",
    description: "Intelligent infrastructure monitoring with AI-powered insights and automation",
    price: "$1,900/mo",
    features: ["AI Monitoring", "Predictive Analytics", "Automated Responses", "Performance Insights"],
    category: "AI Infrastructure",
    icon: Activity;
    link: "https://ziontechgroup.com/ai-infrastructure-monitoring",
  },
  {
    name: "Blockchain Integration Services",
    description: "Web3 and blockchain solutions for decentralized applications and smart contracts",
    price: "$3,500/mo",
    features: ["Smart Contracts", "DApp Development", "Token Economics", "Security Audits"],
    category: "Blockchain",
    icon: Shield;
    link: "https://ziontechgroup.com/blockchain-integration-services",
  },
  {
    name: "AI API Management",
    description: "Intelligent API management with AI-powered optimization and security",
    price: "$1,600/mo",
    features: ["API Gateway", "Rate Limiting", "Security Policies", "Analytics"],
    category: "API Management",
    icon: Code;
    link: "https://ziontechgroup.com/ai-api-management",
  },
  {
    name: "Smart Contract Security Audit",
    description: "Comprehensive security auditing for blockchain smart contracts",
    price: "$2,200/mo",
    features: ["Security Analysis", "Vulnerability Assessment", "Code Review", "Compliance Check"],
    category: "Blockchain Security",
    icon: Shield;
    link: "https://ziontechgroup.com/smart-contract-security-audit",
  },
  {
    name: "AI IT Operations (AIOps)",
<<<<<<< HEAD
    description: "AI-powered IT operations with intelligent monitoring and automated incident response",
    price: "$2,800/mo",
    features: ["Intelligent Monitoring", "Automated Incident Response", "Predictive Maintenance", "Performance Optimization"],
    category: "AIOps",
    icon: Brain,
    link: "https://ziontechgroup.com/ai-ops"
=======
    description: "AI-powered IT operations with intelligent monitoring, automation, and incident response",
    price: "$3,200/mo",
    features: ["Intelligent Monitoring", "Automated Response", "Predictive Analytics", "Root Cause Analysis"],
    category: "AI Operations",
    icon: Brain;
    link: "https://ziontechgroup.com/ai-ops",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  },
  {
    name: "Healthcare IT Solutions",
    description: "HIPAA-compliant healthcare IT infrastructure with advanced security and compliance",
    price: "$3,500/mo",
    features: ["HIPAA Compliance", "Medical Data Security", "Electronic Health Records", "Telemedicine Platform"],
    category: "Healthcare IT",
<<<<<<< HEAD
    icon: Heart,
    link: "https://ziontechgroup.com/healthcare-it"
=======
    icon: Stethoscope;
    link: "https://ziontechgroup.com/healthcare-it",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  },
  {
    name: "Financial Services IT",
    description: "SOX-compliant financial IT infrastructure with advanced security and regulatory compliance",
    price: "$4,200/mo",
    features: ["SOX Compliance", "Financial Data Security", "Risk Management", "Regulatory Reporting"],
    category: "Financial IT",
    icon: BarChart;
    link: "https://ziontechgroup.com/financial-it",
  },
  {
    name: "Edge Computing Solutions",
    description: "Low-latency edge infrastructure with distributed computing and real-time processing",
    price: "$2,500/mo",
    features: ["Edge Infrastructure", "Low-latency Processing", "Distributed Computing", "Real-time Analytics"],
    category: "Edge Computing",
    icon: Cpu;
    link: "https://ziontechgroup.com/edge-computing",
  },
  {
    name: "5G Network Implementation",
    description: "High-speed 5G network deployment with advanced optimization and management",
    price: "$5,500/mo",
    features: ["5G Deployment", "Network Optimization", "Performance Monitoring", "Capacity Planning"],
    category: "5G Networks",
    icon: Globe;
    link: "https://ziontechgroup.com/5g-implementation",
  },
  {
    name: "IoT Platform Development",
<<<<<<< HEAD
    description: "Comprehensive IoT solutions with device management and data analytics",
    price: "$2,200/mo",
    features: ["Device Management", "Data Analytics", "Security Monitoring", "Scalable Architecture"],
    category: "IoT Development",
    icon: Settings,
    link: "https://ziontechgroup.com/iot-platform"
=======
    description: "Comprehensive IoT platform with device management, data processing, and analytics",
    price: "$3,800/mo",
    features: ["Device Management", "Data Processing", "Real-time Analytics", "Fleet Management"],
    category: "IoT Solutions",
    icon: Globe;
    link: "https://ziontechgroup.com/iot-platform",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  },
  {
    name: "Quantum Computing Infrastructure",
    description: "Quantum computing infrastructure setup and optimization for advanced computing needs",
    price: "$8,500/mo",
    features: ["Quantum Infrastructure", "Algorithm Optimization", "Quantum Security", "Research Support"],
    category: "Quantum Computing",
    icon: Brain;
    link: "https://ziontechgroup.com/quantum-computing-infrastructure",
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
    icon: Database;
    link: "https://ziontechgroup.com/ai-data-center-management",
  },
  {
<<<<<<< HEAD
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
    link: "https://ziontechgroup.com/digital-transformation-consulting"
=======
    name: "Cybersecurity Operations Center",
    description: "24/7 cybersecurity monitoring with threat detection, incident response, and compliance",
    price: "$7,200/mo",
    features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Compliance Management"],
    category: "Cybersecurity",
    icon: Shield;
    link: "https://ziontechgroup.com/cybersecurity-operations-center",
  },
  {
    name: "Multi-Cloud Management Platform",
    description: "Unified multi-cloud management with cost optimization and security across all platforms",
    price: "$3,500/mo",
    features: ["Multi-cloud Support", "Cost Optimization", "Security Management", "Resource Monitoring"],
    category: "Cloud Management",
    icon: Cloud;
    link: "https://ziontechgroup.com/multi-cloud-management",
  },
  {
    name: "AI-Powered Network Security",
    description: "Advanced network security with AI-powered threat detection and automated response",
    price: "$2,900/mo",
    features: ["AI Threat Detection", "Automated Response", "Behavioral Analysis", "Zero Trust Architecture"],
    category: "Network Security",
    icon: Shield;
    link: "https://ziontechgroup.com/ai-network-security",
  },
  {
    name: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery solution with automated failover and data protection",
    price: "$2,400/mo",
    features: ["Automated Failover", "Data Protection", "RTO/RPO Optimization", "Testing & Validation"],
    category: "Disaster Recovery",
    icon: Shield;
    link: "https://ziontechgroup.com/disaster-recovery",
  },
  {
    name: "AI Performance Monitoring",
    description: "Intelligent application performance monitoring with AI-powered insights and optimization",
    price: "$1,800/mo",
    features: ["AI Insights", "Performance Optimization", "Anomaly Detection", "Capacity Planning"],
    category: "Performance Monitoring",
    icon: Activity;
    link: "https://ziontechgroup.com/ai-performance-monitoring",
  },
  {
    name: "Digital Transformation Consulting",
    description: "Comprehensive digital transformation strategy and implementation for modern businesses",
    price: "$5,000/mo",
    features: ["Strategy Development", "Technology Assessment", "Implementation Planning", "Change Management"],
    category: "Consulting",
    icon: Settings;
    link: "https://ziontechgroup.com/digital-transformation-consulting",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  },
  {
    name: "AI-Powered IT Operations (AIOps)",
    description: "Intelligent IT operations with AI-powered monitoring, automation, and incident response",
    price: "$4,500/mo",
    features: ["Intelligent Monitoring", "Automated Response", "Predictive Analytics", "Root Cause Analysis"],
    category: "AI Operations",
    icon: Brain;
    link: "https://ziontechgroup.com/ai-ops",
  },
  {
    name: "Zero Trust Security Architecture",
    description: "Comprehensive zero trust security implementation with continuous verification and monitoring",
    price: "$6,500/mo",
    features: ["Continuous Verification", "Identity Management", "Network Segmentation", "Threat Detection"],
    category: "Security",
    icon: Shield;
    link: "https://ziontechgroup.com/zero-trust-architecture",
  },
  {
    name: "Multi-Cloud Management Platform",
    description: "Unified multi-cloud management with cost optimization and security across all platforms",
    price: "$4,200/mo",
    features: ["Multi-cloud Support", "Cost Optimization", "Security Management", "Resource Monitoring"],
    category: "Cloud Management",
    icon: Cloud;
    link: "https://ziontechgroup.com/multi-cloud-management",
  },
  {
    name: "Hybrid Cloud Architecture",
    description: "Seamless hybrid cloud solutions with on-premises and cloud integration",
    price: "$5,800/mo",
    features: ["Hybrid Integration", "Data Synchronization", "Workload Migration", "Unified Management"],
    category: "Cloud Architecture",
    icon: Globe;
    link: "https://ziontechgroup.com/hybrid-cloud-architecture",
  },
  {
    name: "AI-Powered Network Security",
    description: "Advanced network security with AI-powered threat detection and automated response",
    price: "$3,800/mo",
    features: ["AI Threat Detection", "Automated Response", "Behavioral Analysis", "Zero Trust Architecture"],
    category: "Network Security",
    icon: Shield;
    link: "https://ziontechgroup.com/ai-network-security",
  },
  {
    name: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery solution with automated failover and data protection",
    price: "$3,200/mo",
    features: ["Automated Failover", "Data Protection", "RTO/RPO Optimization", "Testing & Validation"],
    category: "Disaster Recovery",
    icon: Shield;
    link: "https://ziontechgroup.com/disaster-recovery",
  },
  {
    name: "AI Performance Monitoring",
    description: "Intelligent application performance monitoring with AI-powered insights and optimization",
    price: "$2,800/mo",
    features: ["AI Insights", "Performance Optimization", "Anomaly Detection", "Capacity Planning"],
    category: "Performance Monitoring",
    icon: Activity;
    link: "https://ziontechgroup.com/ai-performance-monitoring",
  },
  {
    name: "Quantum-Safe Security Implementation",
    description: "Future-proof security with quantum-resistant cryptography and encryption",
    price: "$8,500/mo",
    features: ["Quantum-Resistant Crypto", "Post-Quantum Security", "Encryption Migration", "Compliance"],
    category: "Quantum Security",
    icon: Shield;
    link: "https://ziontechgroup.com/quantum-safe-security",
  },
  {
    name: "AI Data Center Management",
    description: "Intelligent data center management with AI-powered optimization and predictive maintenance",
    price: "$6,200/mo",
    features: ["AI Optimization", "Predictive Maintenance", "Energy Efficiency", "Capacity Planning"],
    category: "Data Center",
    icon: Database;
    link: "https://ziontechgroup.com/ai-data-center-management",
  },
  {
    name: "Cybersecurity Operations Center (SOC)",
    description: "24/7 cybersecurity monitoring with threat detection, incident response, and compliance",
    price: "$9,500/mo",
    features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Compliance Management"],
    category: "Cybersecurity",
    icon: Shield;
    link: "https://ziontechgroup.com/cybersecurity-operations-center",
  },
  {
    name: "AI-Powered Security Operations",
    description: "Advanced security operations with AI-powered threat hunting and automated response",
    price: "$7,800/mo",
    features: ["AI Threat Hunting", "Automated Response", "Behavioral Analysis", "Incident Investigation"],
    category: "Security Operations",
    icon: Brain;
    link: "https://ziontechgroup.com/ai-security-operations",
  },
  {
    name: "Real-time Data Platform",
    description: "High-performance real-time data processing and analytics platform",
    price: "$5,500/mo",
    features: ["Real-time Processing", "Stream Analytics", "Data Pipeline", "Scalable Architecture"],
    category: "Data Platform",
    icon: Database;
    link: "https://ziontechgroup.com/real-time-data-platform",
  },
  {
    name: "Data Lake & Warehouse Modernization",
    description: "Modern data architecture with cloud-native data lakes and warehouses",
    price: "$4,800/mo",
    features: ["Cloud Migration", "Data Governance", "Analytics Platform", "Cost Optimization"],
    category: "Data Architecture",
    icon: Database;
    link: "https://ziontechgroup.com/data-modernization",
  },
  {
    name: "MLOps Platform Implementation",
    description: "Complete MLOps platform for machine learning model lifecycle management",
    price: "$6,800/mo",
    features: ["Model Training", "Deployment Pipeline", "Monitoring", "Version Control"],
    category: "MLOps",
    icon: Settings;
    link: "https://ziontechgroup.com/mlops-platform",
  },
  {
    name: "Web3 Infrastructure Services",
    description: "Complete Web3 infrastructure with blockchain, DeFi, and NFT solutions",
    price: "$8,200/mo",
    features: ["Blockchain Development", "DeFi Integration", "NFT Platform", "Smart Contracts"],
    category: "Web3",
    icon: Shield;
    link: "https://ziontechgroup.com/web3-infrastructure",
  },
  {
    name: "Metaverse Platform Development",
    description: "Immersive metaverse solutions with VR/AR integration and virtual worlds",
    price: "$12,500/mo",
    features: ["Virtual Worlds", "VR/AR Integration", "Avatar Systems", "Social Features"],
    category: "Metaverse",
    icon: Eye;
    link: "https://ziontechgroup.com/metaverse-development",
  },
  {
    name: "AI Infrastructure as a Service",
    description: "Complete AI infrastructure platform with GPU clusters and ML frameworks",
    price: "$9,800/mo",
    features: ["GPU Clusters", "ML Frameworks", "Auto-scaling", "Model Serving"],
    category: "AI Infrastructure",
    icon: Brain;
    link: "https://ziontechgroup.com/ai-infrastructure-service",
  },
  {
    name: "Smart City IT Solutions",
    description: "Comprehensive smart city technology infrastructure and management systems",
    price: "$15,000/mo",
    features: ["IoT Integration", "Traffic Management", "Energy Systems", "Citizen Services"],
    category: "Smart Cities",
    icon: Building;
    link: "https://ziontechgroup.com/smart-city-solutions",
  },
  {
    name: "AI-Powered IT Asset Management",
    description: "Intelligent IT asset management with automated discovery and optimization",
    price: "$3,500/mo",
    features: ["Asset Discovery", "Lifecycle Management", "Cost Optimization", "Compliance Tracking"],
    category: "Asset Management",
    icon: Package;
    link: "https://ziontechgroup.com/ai-it-asset-management",
  },
  {
    name: "Intelligent Database Migration",
    description: "AI-powered database migration with zero downtime and performance optimization",
    price: "$4,200/mo",
    features: ["Zero Downtime", "Performance Optimization", "Data Validation", "Rollback Support"],
    category: "Database Migration",
    icon: Database;
    link: "https://ziontechgroup.com/intelligent-database-migration",
  },
  {
    name: "Intelligent Email Infrastructure",
    description: "Advanced email infrastructure with AI-powered security and delivery optimization",
    price: "$2,800/mo",
    features: ["Email Security", "Delivery Optimization", "Spam Protection", "Analytics"],
    category: "Email Infrastructure",
    icon: Mail;
    link: "https://ziontechgroup.com/intelligent-email-infrastructure",
  },
  {
    name: "AI-Powered IT Training",
    description: "Comprehensive IT training programs with AI-powered personalized learning",
    price: "$1,500/mo",
    features: ["Personalized Learning", "Skill Assessment", "Certification Programs", "Progress Tracking"],
    category: "Training",
    icon: GraduationCap;
    link: "https://ziontechgroup.com/ai-it-training",
  },
  {
    name: "Quantum Computing Infrastructure",
    description: "Quantum computing infrastructure setup with quantum algorithms and optimization",
    price: "$25,000/mo",
    features: ["Quantum Hardware", "Algorithm Development", "Quantum Optimization", "Research Support"],
    category: "Quantum Computing",
    icon: Brain;
    link: "https://ziontechgroup.com/quantum-computing-infrastructure",
  },
  {
    name: "AI-Powered IT Consulting",
    description: "Strategic IT consulting with AI-powered insights and recommendations",
    price: "$3,800/mo",
    features: ["Strategic Planning", "Technology Assessment", "AI Insights", "Implementation Support"],
    category: "Consulting",
    icon: Brain;
    link: "https://ziontechgroup.com/ai-it-consulting",
  },
  {
    name: "Intelligent IT Performance Optimization",
    description: "AI-powered IT performance optimization with automated tuning and monitoring",
    price: "$4,500/mo",
    features: ["Performance Tuning", "Automated Optimization", "Resource Management", "Cost Reduction"],
    category: "Performance Optimization",
    icon: Activity;
    link: "https://ziontechgroup.com/intelligent-it-performance",
  },
  {
    name: "AI-Powered IT Governance",
    description: "Intelligent IT governance with automated compliance and risk management",
    price: "$5,200/mo",
    features: ["Compliance Automation", "Risk Management", "Policy Enforcement", "Audit Support"],
    category: "IT Governance",
    icon: Shield;
    link: "https://ziontechgroup.com/ai-it-governance",
  },
  {
    name: "Intelligent IT Service Management",
    description: "AI-powered IT service management with automated ticketing and resolution",
    price: "$3,200/mo",
    features: ["Automated Ticketing", "Intelligent Routing", "Knowledge Management", "SLA Monitoring"],
    category: "Service Management",
    icon: Settings;
    link: "https://ziontechgroup.com/intelligent-it-service-management",
  },
  {
    name: "AI-Powered IT Change Management",
    description: "Intelligent change management with risk assessment and automated approval",
    price: "$2,800/mo",
    features: ["Risk Assessment", "Automated Approval", "Change Tracking", "Rollback Support"],
    category: "Change Management",
    icon: Settings;
    link: "https://ziontechgroup.com/ai-it-change-management",
  },
  {
    name: "Intelligent IT Capacity Planning",
    description: "AI-powered capacity planning with predictive analytics and resource optimization",
    price: "$3,500/mo",
    features: ["Predictive Analytics", "Resource Optimization", "Capacity Forecasting", "Cost Planning"],
    category: "Capacity Planning",
    icon: BarChart;
    link: "https://ziontechgroup.com/intelligent-it-capacity-planning",
  },
  {
    name: "AI-Powered IT Incident Management",
    description: "Intelligent incident management with automated detection and resolution",
    price: "$4,200/mo",
    features: ["Automated Detection", "Intelligent Resolution", "Root Cause Analysis", "Prevention"],
    category: "Incident Management",
    icon: AlertTriangle;
    link: "https://ziontechgroup.com/ai-it-incident-management",
  },
  {
    name: "Intelligent IT Problem Management",
    description: "AI-powered problem management with pattern recognition and solution automation",
    price: "$3,800/mo",
    features: ["Pattern Recognition", "Solution Automation", "Knowledge Base", "Trend Analysis"],
    category: "Problem Management",
    icon: Search;
    link: "https://ziontechgroup.com/intelligent-it-problem-management",
  },
  {
    name: "AI-Powered IT Release Management",
    description: "Intelligent release management with automated testing and deployment",
    price: "$4,500/mo",
    features: ["Automated Testing", "Deployment Automation", "Rollback Support", "Quality Assurance"],
    category: "Release Management",
    icon: Rocket;
    link: "https://ziontechgroup.com/ai-it-release-management",
  },
  {
    name: "Intelligent IT Configuration Management",
    description: "AI-powered configuration management with automated discovery and tracking",
    price: "$3,200/mo",
    features: ["Automated Discovery", "Configuration Tracking", "Change Detection", "Compliance"],
    category: "Configuration Management",
    icon: Settings;
    link: "https://ziontechgroup.com/intelligent-it-configuration-management",
  },
  {
    name: "AI-Powered IT Availability Management",
    description: "Intelligent availability management with predictive maintenance and optimization",
    price: "$4,800/mo",
    features: ["Predictive Maintenance", "Availability Optimization", "SLA Management", "Monitoring"],
    category: "Availability Management",
    icon: Activity;
    link: "https://ziontechgroup.com/ai-it-availability-management",
  },
  {
    name: "Intelligent IT Service Level Management",
    description: "AI-powered service level management with automated monitoring and reporting",
    price: "$3,500/mo",
    features: ["Automated Monitoring", "SLA Reporting", "Performance Analytics", "Improvement Planning"],
    category: "Service Level Management",
    icon: BarChart;
    link: "https://ziontechgroup.com/intelligent-it-service-level-management",
  },
  {
    name: "AI-Powered IT Financial Management",
    description: "Intelligent IT financial management with cost optimization and budgeting",
    price: "$4,200/mo",
    features: ["Cost Optimization", "Budget Planning", "Financial Analytics", "ROI Tracking"],
    category: "Financial Management",
    icon: Calculator;
    link: "https://ziontechgroup.com/ai-it-financial-management",
  },
  {
    name: "Intelligent IT Vendor Management",
    description: "AI-powered vendor management with performance tracking and contract optimization",
    price: "$3,800/mo",
    features: ["Performance Tracking", "Contract Optimization", "Vendor Analytics", "Risk Management"],
    category: "Vendor Management",
    icon: Building;
    link: "https://ziontechgroup.com/intelligent-it-vendor-management",
  },
  {
    name: "AI-Powered IT Knowledge Management",
    description: "Intelligent knowledge management with automated documentation and search",
    price: "$2,500/mo",
    features: ["Automated Documentation", "Intelligent Search", "Knowledge Base", "Expert Systems"],
    category: "Knowledge Management",
    icon: BookOpen;
    link: "https://ziontechgroup.com/ai-it-knowledge-management",
  },
  {
    name: "Intelligent IT Communication Management",
    description: "AI-powered communication management with automated notifications and collaboration",
    price: "$2,200/mo",
    features: ["Automated Notifications", "Collaboration Tools", "Communication Analytics", "Integration"],
    category: "Communication Management",
    icon: MessageSquare;
    link: "https://ziontechgroup.com/intelligent-it-communication-management",
  },
  {
    name: "AI-Powered IT Security Management",
    description: "Intelligent security management with threat detection and automated response",
    price: "$6,500/mo",
    features: ["Threat Detection", "Automated Response", "Security Analytics", "Compliance"],
    category: "Security Management",
    icon: Shield;
    link: "https://ziontechgroup.com/ai-it-security-management",
  },
  {
    name: "Intelligent IT Quality Management",
    description: "AI-powered quality management with automated testing and quality assurance",
    price: "$4,800/mo",
    features: ["Automated Testing", "Quality Assurance", "Defect Detection", "Process Improvement"],
    category: "Quality Management",
    icon: CheckCircle;
    link: "https://ziontechgroup.com/intelligent-it-quality-management",
  },
  {
    name: "AI-Powered IT Risk Management",
    description: "Intelligent risk management with automated assessment and mitigation",
    price: "$5,500/mo",
    features: ["Risk Assessment", "Automated Mitigation", "Risk Analytics", "Compliance"],
    category: "Risk Management",
    icon: AlertTriangle;
    link: "https://ziontechgroup.com/ai-it-risk-management",
  },
  {
    name: "Intelligent IT Compliance Management",
    description: "AI-powered compliance management with automated monitoring and reporting",
    price: "$4,200/mo",
    features: ["Compliance Monitoring", "Automated Reporting", "Audit Support", "Policy Management"],
    category: "Compliance Management",
    icon: Shield;
    link: "https://ziontechgroup.com/intelligent-it-compliance-management",
  },
  {
    name: "AI-Powered IT Innovation Management",
    description: "Intelligent innovation management with technology assessment and implementation",
    price: "$6,800/mo",
    features: ["Technology Assessment", "Innovation Tracking", "Implementation Support", "ROI Analysis"],
    category: "Innovation Management",
    icon: Lightbulb;
    link: "https://ziontechgroup.com/ai-it-innovation-management",
  },
  {
    name: "Intelligent IT Strategy Management",
    description: "AI-powered strategy management with planning and execution support",
    price: "$7,500/mo",
    features: ["Strategic Planning", "Execution Support", "Performance Tracking", "Alignment"],
    category: "Strategy Management",
    icon: Target;
    link: "https://ziontechgroup.com/intelligent-it-strategy-management",
  },
  {
    name: "AI-Powered IT Portfolio Management",
    description: "Intelligent portfolio management with project optimization and resource allocation",
    price: "$5,800/mo",
    features: ["Project Optimization", "Resource Allocation", "Portfolio Analytics", "Decision Support"],
    category: "Portfolio Management",
    icon: BarChart;
    link: "https://ziontechgroup.com/ai-it-portfolio-management",
  },
  {
    name: "Intelligent IT Project Management",
    description: "AI-powered project management with automated planning and execution",
    price: "$4,500/mo",
    features: ["Automated Planning", "Execution Support", "Progress Tracking", "Risk Management"],
    category: "Project Management",
    icon: Calendar;
    link: "https://ziontechgroup.com/intelligent-it-project-management",
  },
  {
    name: "AI-Powered IT Resource Management",
    description: "Intelligent resource management with optimization and allocation",
    price: "$3,800/mo",
    features: ["Resource Optimization", "Allocation Planning", "Utilization Tracking", "Cost Management"],
    category: "Resource Management",
    icon: Users;
    link: "https://ziontechgroup.com/ai-it-resource-management",
  },
  {
    name: "Intelligent IT Cost Management",
    description: "AI-powered cost management with optimization and budgeting",
    price: "$3,200/mo",
    features: ["Cost Optimization", "Budget Planning", "Spend Analytics", "ROI Tracking"],
    category: "Cost Management",
    icon: Calculator;
    link: "https://ziontechgroup.com/intelligent-it-cost-management",
  },
  {
    name: "AI-Powered IT Value Management",
    description: "Intelligent value management with measurement and optimization",
    price: "$4,800/mo",
    features: ["Value Measurement", "Optimization", "ROI Analysis", "Business Alignment"],
    category: "Value Management",
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-it-value-management",
  },
  {
    name: "Intelligent IT Performance Management",
    description: "AI-powered performance management with monitoring and optimization",
    price: "$4,200/mo",
    features: ["Performance Monitoring", "Optimization", "Analytics", "Improvement Planning"],
    category: "Performance Management",
    icon: Activity;
    link: "https://ziontechgroup.com/intelligent-it-performance-management",
  },
  {
    name: "AI-Powered IT Service Delivery",
    description: "Intelligent service delivery with automation and optimization",
    price: "$5,500/mo",
    features: ["Service Automation", "Delivery Optimization", "Quality Assurance", "Customer Satisfaction"],
    category: "Service Delivery",
    icon: Truck;
    link: "https://ziontechgroup.com/ai-it-service-delivery",
  },
  {
    name: "Intelligent IT Service Support",
    description: "AI-powered service support with automated resolution and customer service",
    price: "$3,800/mo",
    features: ["Automated Resolution", "Customer Service", "Knowledge Base", "Escalation Management"],
    category: "Service Support",
    icon: Headphones;
    link: "https://ziontechgroup.com/intelligent-it-service-support",
  },
  {
    name: "AI-Powered IT Service Operations",
    description: "Intelligent service operations with automation and monitoring",
    price: "$4,500/mo",
    features: ["Service Automation", "Operations Monitoring", "Incident Management", "Performance Tracking"],
    category: "Service Operations",
    icon: Settings;
    link: "https://ziontechgroup.com/ai-it-service-operations",
  },
  {
    name: "Intelligent IT Service Strategy",
    description: "AI-powered service strategy with planning and execution",
    price: "$6,200/mo",
    features: ["Service Planning", "Strategy Execution", "Market Analysis", "Competitive Intelligence"],
    category: "Service Strategy",
    icon: Target;
    link: "https://ziontechgroup.com/intelligent-it-service-strategy",
  },
  {
    name: "AI-Powered IT Service Design",
    description: "Intelligent service design with automation and optimization",
    price: "$5,800/mo",
    features: ["Service Design", "Process Automation", "User Experience", "Quality Assurance"],
    category: "Service Design",
    icon: Palette;
    link: "https://ziontechgroup.com/ai-it-service-design",
  },
  {
    name: "Intelligent IT Service Transition",
    description: "AI-powered service transition with automation and quality assurance",
    price: "$4,800/mo",
    features: ["Transition Automation", "Quality Assurance", "Risk Management", "Change Control"],
    category: "Service Transition",
    icon: ArrowRight;
    link: "https://ziontechgroup.com/intelligent-it-service-transition",
  },
  {
    name: "AI-Powered IT Service Improvement",
    description: "Intelligent service improvement with analytics and optimization",
    price: "$3,500/mo",
    features: ["Service Analytics", "Improvement Planning", "Performance Optimization", "Customer Feedback"],
    category: "Service Improvement",
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-it-service-improvement",
  },
  {
    name: "Intelligent IT Service Measurement",
    description: "AI-powered service measurement with analytics and reporting",
    price: "$2,800/mo",
    features: ["Service Analytics", "Performance Measurement", "Reporting", "Dashboard"],
    category: "Service Measurement",
    icon: BarChart;
    link: "https://ziontechgroup.com/intelligent-it-service-measurement",
  },
  {
    name: "AI-Powered IT Service Reporting",
    description: "Intelligent service reporting with automation and insights",
    price: "$2,500/mo",
    features: ["Automated Reporting", "Insights Generation", "Dashboard Creation", "Data Visualization"],
    category: "Service Reporting",
    icon: FileText;
    link: "https://ziontechgroup.com/ai-it-service-reporting",
  },
  {
    name: "Intelligent IT Service Analytics",
    description: "AI-powered service analytics with insights and recommendations",
    price: "$4,200/mo",
    features: ["Service Analytics", "Insights Generation", "Recommendations", "Predictive Analytics"],
    category: "Service Analytics",
    icon: BarChart;
    link: "https://ziontechgroup.com/intelligent-it-service-analytics",
  },
  {
    name: "AI-Powered IT Service Intelligence",
    description: "Intelligent service intelligence with AI-powered insights and automation",
    price: "$5,500/mo",
    features: ["Service Intelligence", "AI Insights", "Automation", "Decision Support"],
    category: "Service Intelligence",
    icon: Brain;
    link: "https://ziontechgroup.com/ai-it-service-intelligence",
  },
  {
    name: "Intelligent IT Service Innovation",
    description: "AI-powered service innovation with technology assessment and implementation",
    price: "$6,800/mo",
    features: ["Service Innovation", "Technology Assessment", "Implementation Support", "ROI Analysis"],
    category: "Service Innovation",
    icon: Lightbulb;
    link: "https://ziontechgroup.com/intelligent-it-service-innovation",
  },
  {
    name: "AI-Powered IT Service Transformation",
    description: "Intelligent service transformation with digital modernization and optimization",
    price: "$8,500/mo",
    features: ["Digital Transformation", "Service Modernization", "Process Optimization", "Technology Integration"],
    category: "Service Transformation",
    icon: Settings;
    link: "https://ziontechgroup.com/ai-it-service-transformation",
  },
  {
    name: "Intelligent IT Service Excellence",
    description: "AI-powered service excellence with quality management and continuous improvement",
    price: "$7,200/mo",
    features: ["Service Excellence", "Quality Management", "Continuous Improvement", "Best Practices"],
    category: "Service Excellence",
    icon: Award;
    link: "https://ziontechgroup.com/intelligent-it-service-excellence",
  },
  {
    name: "AI-Powered IT Service Leadership",
    description: "Intelligent service leadership with strategic guidance and execution",
    price: "$9,500/mo",
    features: ["Service Leadership", "Strategic Guidance", "Execution Support", "Team Development"],
    category: "Service Leadership",
    icon: Users;
    link: "https://ziontechgroup.com/ai-it-service-leadership",
  },
  {
    name: "Intelligent IT Service Governance",
    description: "AI-powered service governance with policy management and compliance",
    price: "$6,500/mo",
    features: ["Service Governance", "Policy Management", "Compliance", "Risk Management"],
    category: "Service Governance",
    icon: Shield;
    link: "https://ziontechgroup.com/intelligent-it-service-governance",
  },
  {
    name: "AI-Powered IT Service Quality",
    description: "Intelligent service quality with automated testing and assurance",
    price: "$5,800/mo",
    features: ["Service Quality", "Automated Testing", "Quality Assurance", "Defect Management"],
    category: "Service Quality",
    icon: CheckCircle;
    link: "https://ziontechgroup.com/ai-it-service-quality",
  },
  {
    name: "Intelligent IT Service Reliability",
    description: "AI-powered service reliability with monitoring and optimization",
    price: "$4,800/mo",
    features: ["Service Reliability", "Monitoring", "Optimization", "Uptime Management"],
    category: "Service Reliability",
    icon: Activity;
    link: "https://ziontechgroup.com/intelligent-it-service-reliability",
  },
  {
    name: "AI-Powered IT Service Availability",
    description: "Intelligent service availability with predictive maintenance and optimization",
    price: "$5,200/mo",
    features: ["Service Availability", "Predictive Maintenance", "Optimization", "SLA Management"],
    category: "Service Availability",
    icon: Clock;
    link: "https://ziontechgroup.com/ai-it-service-availability",
  },
  {
    name: "Intelligent IT Service Security",
    description: "AI-powered service security with threat detection and protection",
    price: "$7,500/mo",
    features: ["Service Security", "Threat Detection", "Protection", "Compliance"],
    category: "Service Security",
    icon: Shield;
    link: "https://ziontechgroup.com/intelligent-it-service-security",
  },
  {
    name: "AI-Powered IT Service Compliance",
    description: "Intelligent service compliance with automated monitoring and reporting",
    price: "$4,500/mo",
    features: ["Service Compliance", "Automated Monitoring", "Reporting", "Audit Support"],
    category: "Service Compliance",
    icon: FileText;
    link: "https://ziontechgroup.com/ai-it-service-compliance",
  },
  {
    name: "Intelligent IT Service Risk",
    description: "AI-powered service risk management with assessment and mitigation",
    price: "$5,800/mo",
    features: ["Service Risk Management", "Risk Assessment", "Mitigation", "Monitoring"],
    category: "Service Risk",
    icon: AlertTriangle;
    link: "https://ziontechgroup.com/intelligent-it-service-risk",
  },
  {
    name: "AI-Powered IT Service Value",
    description: "Intelligent service value management with measurement and optimization",
    price: "$6,200/mo",
    features: ["Service Value Management", "Value Measurement", "Optimization", "ROI Analysis"],
    category: "Service Value",
    icon: TrendingUp;
    link: "https://ziontechgroup.com/ai-it-service-value",
  },
  {
    name: "Intelligent IT Service Cost",
    description: "AI-powered service cost management with optimization and budgeting",
    price: "$4,200/mo",
    features: ["Service Cost Management", "Cost Optimization", "Budgeting", "Spend Analytics"],
    category: "Service Cost",
    icon: Calculator;
    link: "https://ziontechgroup.com/intelligent-it-service-cost",
  },
  {
    name: "AI-Powered IT Service Performance",
    description: "Intelligent service performance management with monitoring and optimization",
    price: "$5,500/mo",
    features: ["Service Performance", "Monitoring", "Optimization", "Analytics"],
    category: "Service Performance",
    icon: Activity;
    link: "https://ziontechgroup.com/ai-it-service-performance",
  },
  {
    name: "Intelligent IT Service Customer Experience",
    description: "AI-powered service customer experience with personalization and optimization",
    price: "$6,800/mo",
    features: ["Customer Experience", "Personalization", "Optimization", "Satisfaction"],
    category: "Service Customer Experience",
    icon: Users;
    link: "https://ziontechgroup.com/intelligent-it-service-customer-experience",
  },
  {
    name: "AI-Powered IT Service Digital Transformation",
    description: "Intelligent service digital transformation with modernization and innovation",
    price: "$12,500/mo",
    features: ["Digital Transformation", "Service Modernization", "Innovation", "Technology Integration"],
    category: "Service Digital Transformation",
    icon: Settings;
    link: "https://ziontechgroup.com/ai-it-service-digital-transformation",
  },
  {
    name: "Intelligent IT Service Future",
    description: "AI-powered service future planning with technology assessment and roadmap",
    price: "$8,500/mo",
    features: ["Future Planning", "Technology Assessment", "Roadmap", "Innovation"],
    category: "Service Future",
    icon: Rocket;
    link: "https://ziontechgroup.com/intelligent-it-service-future",
  }
];

// Loading skeleton component;
const ServiceCardSkeleton = () => (
  <div className="cyber-card p-6 animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-6 bg-gray-700 rounded"></div>
  </div>
);
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

<<<<<<< HEAD
const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
=======
const HomePage: React.FC = memo(() => {
,
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">,)
      <Navigation />,)
      ),
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
<<<<<<< HEAD
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-ultra neon-pulse">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto fade-in-up">
=======
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Enterprise Solutions;
          </h1>,
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
          </p>
          
<<<<<<< HEAD
<div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-16">
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started Today;
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Watch Demo;
            </button>,
          </div>,
,
          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">
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
<<<<<<< HEAD
            </div>,
          </div>,
</div>,
      </section>,
,
=======
            </div>
          </div>
        </div>
      </section>

>>>>>>> cursor/fix-errors-and-merge-to-main-2937
      {/* Services Section */}
<<<<<<< HEAD
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
=======
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">,
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>,
            <p className="text-xl text-gray-300">Comprehensive AI and IT solutions for modern enterprises</p>,
          </div>,
          ,
          {/* Micro SAAS Services */}
          <div className="mb-16">
            <h3 className="text-2xl md: text-3xl font-bold text-white mb-8 text-center">Micro SAAS Solutions</h3>,
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">,
              Powerful, affordable AI-powered tools designed for modern businesses. Choose from our comprehensive suite of micro SAAS solutions.
            </p>
            <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">,
              {microSAASServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover: border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular;
                      </span>,
                    </div>,
                  )}
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                      {service.icon && <service.icon className="w-6 h-6 text-white" />}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
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
<<<<<<< HEAD
=======
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features;
                        </div>
                      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
<<<<<<< HEAD
                      <button className="neon-button-ultra text-sm">
=======
                      <button;
                        className="text-cyan-400 hover: text-cyan-300 font-medium text-sm transition-colors",
                        onClick={() => service.link && window.open(service.link, '_blank')}
                      >
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services */}
<<<<<<< HEAD
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Enterprise AI Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`holographic-advanced p-6 hover:scale-105 transition-all duration-300 group cursor-pointer ${service.enterprise ? 'ring-2 ring-purple-400/30' : ''}`} onClick={() => window.open(service.link, '_blank')}>
=======
          <div className="mb-16">
            <h3 className="text-2xl md: text-3xl font-bold text-white mb-8 text-center">Enterprise AI Solutions</h3>,
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">,
              Advanced AI solutions for enterprise clients. Transform your industry with cutting-edge artificial intelligence and machine learning.,
            </p>,
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">,
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover: shadow-lg transition-all duration-300 group relative ${,}
                  service.enterprise ? 'border-purple-400/20 hover:border-purple-400/40 hover:shadow-purple-400/10' : 'border-blue-400/20 hover:border-blue-400/40 hover:shadow-blue-400/10'}
                }`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  {service.enterprise && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Enterprise;
                      </span>
                    </div>
                  )}
<<<<<<< HEAD
                  <div className="text-center mb-4">
<<<<<<< HEAD
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25">
=======
                  <div className="text-center mb-4"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{service.name}</h3>
=======
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300 ${,}
                      service.enterprise ? 'bg-gradient-to-r from-purple-400 to-pink-600' : 'bg-gradient-to-r from-blue-400 to-cyan-600'}
                    }`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold text-white mb-3 group-hover: transition-colors ${,}
                      service.enterprise ? 'group-hover:text-purple-400' : 'group-hover:text-blue-400'}
                    }`}>{service.name}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
<<<<<<< HEAD
=======
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center"></div>
                      <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                      <button className="neon-button-enhanced text-sm">
=======
                          <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 ${}
                            service.enterprise ? 'text-purple-400' : 'text-blue-400'}
                          }`} />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features;
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-2 ${}
                        service.enterprise ? 'text-purple-400' : 'text-blue-400'}
                      }`}>{service.price}</div>
                      <button;
                        className={`font-medium text-sm transition-colors ${}
                          service.enterprise ? 'text-purple-400 hover:text-purple-300' : 'text-blue-400 hover:text-blue-300'}
                        }`}
                        onClick={() => service.link && window.open(service.link, '_blank')}
                      >
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="mb-24">
=======
          <div className="mb-24"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <h3 className="text-3xl font-bold text-white mb-12 text-center">IT Infrastructure Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-grid-advanced p-6 hover:scale-105 transition-all duration-300 group cursor-pointer" onClick={() => window.open(service.link, '_blank')}></div>
                  <div className="text-center mb-4"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-400/25"></div>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.name}</h3>
=======
          <div className="mb-16">
            <h3 className="text-2xl md: text-3xl font-bold text-white mb-8 text-center">IT Infrastructure Services</h3>,
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">,
              Comprehensive IT solutions to build, secure, and scale your technology infrastructure. From cloud migration to cybersecurity.
            </p>
            <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">,
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover: border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300 group">,
                  <div className="text-center mb-4">,
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">,
                      <service.icon className="w-6 h-6 text-white" />,
                    </div>,
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.name}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300"></div>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
<<<<<<< HEAD
=======
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features;
                        </div>
                      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </div>
                    
                    <div className="text-center"></div>
                      <div className="text-2xl font-bold text-green-400 mb-2">{service.price}</div>
<<<<<<< HEAD
                      <button className="neon-button text-sm">
=======
                      <button;
                        className="text-green-400 hover: text-green-300 font-medium text-sm transition-colors",
                        onClick={() => service.link && window.open(service.link, '_blank')}
                      >
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
=======
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise AI Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions for enterprise clients. Transform your industry with cutting-edge artificial intelligence.
            </p>
          </div>,
          ,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {aiServices.map((service, index) => (
              <div;
                key={index}
                className={`cyber-card p-8 hover: scale-105 transition-all duration-300 relative group cursor-pointer ${,}
                  service.enterprise ? 'ring-2 ring-purple-400/30' : ''}
                }`}
                onClick={() => window.open(service.link, '_blank')}
              >
                {service.enterprise && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Enterprise;
                    </span>
                  </div>
                )}
                
<<<<<<< HEAD
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover: scale-110 transition-transform duration-300">,
                    <service.icon className="w-8 h-8 text-white" />,
                  </div>,
=======
                <div className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300"></div>
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center"></div>
                    <div className="text-3xl font-bold text-white mb-4">{service.price}</div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover: from-purple-600 hover:to-pink-700 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      Get Started;
                    </div>
                  </div>,
                </div>,
              </div>,
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 bg-white/5">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
=======
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Infrastructure Services;
            </h2>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
              Comprehensive IT solutions to build, secure, and scale your technology infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">,
            {itServices.map((service, index) => (
              <div;
                key={index} 
                className="cyber-card p-6 hover: scale-105 transition-all duration-300 group cursor-pointer",
                onClick={() => window.open(service.link, '_blank')}
<<<<<<< HEAD
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                    <service.icon className="w-6 h-6 text-white" />,
                  </div>,
=======
              ></div>
                <div className="text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300"></div>
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center"></div>
                    <div className="text-lg font-bold text-white mb-2">{service.price}</div>
                    <div className="text-green-400 hover: text-green-300 font-semibold text-sm transition-colors group-hover:underline">
                      Learn More →,
                    </div>,
                  </div>,
                </div>,
              </div>,
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
<<<<<<< HEAD
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Success Stories
=======
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
            </p>
          </div>,
          ,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (
              <div key={index} className="holographic-card p-8 hover:scale-105 transition-all duration-300 group"></div>
                <div className="flex items-center mb-4"></div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div></div>
                    <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
=======
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            {stats.map((stat, index) => (
<<<<<<< HEAD
              <div key={index} className="text-center group cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="relative mb-4">
<<<<<<< HEAD
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
=======
              <div key={index} className="text-center group cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="relative mb-4"></div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 cyber-text-enhanced">{stat.number}</div>
=======
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                    <stat.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>,
                </div>,
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Contact CTA Section */}
<<<<<<< HEAD
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></section>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
=======
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="text-center"></div>
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950;
              </a>
            </div>
            
            <div className="text-center"></div>
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                kleber@ziontechgroup.com;
              </a>
            </div>
            
<<<<<<< HEAD
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>,
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>,
              <p className="text-cyan-400 font-medium">,
                Middletown, DE;
=======
            <div className="text-center"></div>
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-cyan-400 font-medium">
                Middletown, DE
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </p>

            </div>
          </div>
          
<<<<<<< HEAD
          <button className="neon-button-ultra text-lg py-4 px-8">
            Get Free Consultation
=======
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Free Consultation;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </button>
        </div>
        </div>
      </section>

      <Footer />,
    </div>,
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;
