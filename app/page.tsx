'use client';

import React, { Suspense, lazy, memo } from 'react';
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
import OptimizedImage from './components/OptimizedImage';
import EnhancedLoading from './components/EnhancedLoading';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
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
  Heart,
  Palette,
  Calculator,
  Scale,
  Package,
  ShoppingCart,
  Music,
  Eye,
  Activity,
  Factory,
  GraduationCap,
  Video,
  Camera,
  Database,
  Cpu,
  MessageSquare,
  PieChart,
  TrendingDown,
  Building,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Stethoscope,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  Truck,
  ChefHat,
  Sprout
} from 'lucide-react';

// Type definitions
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

interface AIService {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  enterprise: boolean;
  icon: any;
  link?: string;
}

interface ITService {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  icon: any;
  link?: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

interface Stat {
  number: string;
  label: string;
  icon: any;
}

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
    link: "https://ziontechgroup.com/ai-project-manager-pro"
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
    description: "Quantum-powered financial predictions and market analysis with 99.7% accuracy",
    price: "$2,999/mo",
    features: ["Quantum Algorithms", "Real-time Predictions", "Risk Assessment", "Portfolio Optimization"],
    category: "Finance",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-financial-oracle"
  },
  {
    name: "AI Neural Memory Assistant",
    description: "Advanced AI with persistent memory for personalized business intelligence and decision support",
    price: "$399/mo",
    features: ["Persistent Memory", "Learning Algorithms", "Context Awareness", "Predictive Insights"],
    category: "AI Assistant",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-memory-assistant"
  },
  {
    name: "AI Holographic Workspace",
    description: "Immersive 3D workspace with holographic UI for remote collaboration and design",
    price: "$1,299/mo",
    features: ["3D Holographic UI", "Remote Collaboration", "Spatial Computing", "AR Integration"],
    category: "Immersive Tech",
    popular: false,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-holographic-workspace"
  },
  {
    name: "AI 3D Generation Studio",
    description: "AI-powered 3D model generation, animation, and virtual environment creation",
    price: "$299/mo",
    features: ["3D Model Generation", "Animation Creation", "Texture Synthesis", "VR Integration"],
    category: "3D Design",
    popular: true,
    icon: Camera,
    link: "https://ziontechgroup.com/ai-3d-generation"
  },
  {
    name: "AI Mobile App Builder",
    description: "No-code mobile app development with AI-powered design and functionality generation",
    price: "$199/mo",
    features: ["No-Code Development", "AI Design", "Cross-Platform", "App Store Deployment"],
    category: "Mobile Development",
    popular: true,
    icon: Smartphone,
    link: "https://ziontechgroup.com/ai-mobile-app-builder"
  },
  {
    name: "AI Agricultural Intelligence Pro",
    description: "Smart farming solutions with AI-powered crop monitoring, yield prediction, and automation",
    price: "$599/mo",
    features: ["Crop Monitoring", "Yield Prediction", "Weather Analysis", "Automation Control"],
    category: "Agriculture",
    popular: true,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-agricultural-intelligence-pro"
  },
  {
    name: "AI Energy Grid Management Pro",
    description: "Smart energy management with AI-powered grid optimization and renewable energy integration",
    price: "$1,499/mo",
    features: ["Grid Optimization", "Renewable Integration", "Demand Forecasting", "Energy Storage"],
    category: "Energy",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-energy-grid-management-pro"
  },
  {
    name: "AI Legal Research Pro",
    description: "Advanced legal research and case analysis with AI-powered document review and precedent finding",
    price: "$799/mo",
    features: ["Case Research", "Document Analysis", "Precedent Finding", "Legal Writing"],
    category: "Legal",
    popular: false,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-legal-research-pro"
  },
  {
    name: "AI Manufacturing Optimizer",
    description: "Smart manufacturing process optimization with predictive maintenance and quality control",
    price: "$1,999/mo",
    features: ["Predictive Maintenance", "Quality Control", "Process Optimization", "Supply Chain Integration"],
    category: "Manufacturing",
    popular: true,
    icon: Factory,
    link: "https://ziontechgroup.com/ai-manufacturing"
  },
  {
    name: "AI Fashion Design Studio",
    description: "AI-powered fashion design with trend analysis, pattern generation, and sustainable material suggestions",
    price: "$249/mo",
    features: ["Trend Analysis", "Pattern Generation", "Material Suggestions", "Sustainability Scoring"],
    category: "Fashion",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-fashion-design"
  },
  {
    name: "AI Music Composition Studio",
    description: "AI-powered music creation with genre adaptation, instrument arrangement, and royalty-free licensing",
    price: "$129/mo",
    features: ["Genre Adaptation", "Instrument Arrangement", "Royalty-free", "Collaboration Tools"],
    category: "Music",
    popular: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-music-composition"
  },
  {
    name: "AI Autonomous Systems Manager",
    description: "Management platform for autonomous vehicles, drones, and robotic systems with AI coordination",
    price: "$2,499/mo",
    features: ["Fleet Management", "Route Optimization", "Safety Monitoring", "Performance Analytics"],
    category: "Autonomous Systems",
    popular: true,
    icon: Car,
    link: "https://ziontechgroup.com/ai-autonomous-systems"
  },
  {
    name: "AI Blockchain Solutions",
    description: "AI-powered blockchain development with smart contract optimization and DeFi integration",
    price: "$1,799/mo",
    features: ["Smart Contract AI", "DeFi Integration", "Security Auditing", "Token Economics"],
    category: "Blockchain",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-blockchain-solutions"
  },
  {
    name: "AI Content Delivery Network",
    description: "Intelligent CDN with AI-powered caching, load balancing, and performance optimization",
    price: "$399/mo",
    features: ["AI Caching", "Load Balancing", "Performance Optimization", "Global Distribution"],
    category: "Infrastructure",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-content-delivery-network"
  },
  {
    name: "AI API Manager",
    description: "Intelligent API management with AI-powered optimization, security, and analytics",
    price: "$299/mo",
    features: ["API Gateway", "Rate Limiting", "Security Policies", "Performance Analytics"],
    category: "API Management",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-api-manager"
  },
  {
    name: "AI Business Intelligence Suite",
    description: "Comprehensive BI platform with AI-powered insights, forecasting, and decision support",
    price: "$599/mo",
    features: ["Predictive Analytics", "Data Visualization", "Forecasting", "Decision Support"],
    category: "Business Intelligence",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-business-intelligence"
  },
  {
    name: "AI Chatbot Builder Pro",
    description: "Advanced chatbot creation platform with natural language processing and multi-channel deployment",
    price: "$199/mo",
    features: ["NLP Processing", "Multi-channel", "Custom Training", "Analytics Dashboard"],
    category: "Communication",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-chatbot-builder"
  },
  {
    name: "AI Cloud Infrastructure",
    description: "AI-optimized cloud infrastructure with intelligent resource allocation and cost optimization",
    price: "$799/mo",
    features: ["Resource Optimization", "Cost Management", "Auto-scaling", "Performance Monitoring"],
    category: "Cloud Computing",
    popular: true,
    icon: Cloud,
    link: "https://ziontechgroup.com/ai-cloud-infrastructure"
  },
  {
    name: "AI Code Security Auditor",
    description: "Automated code security analysis with vulnerability detection and compliance checking",
    price: "$399/mo",
    features: ["Vulnerability Detection", "Compliance Checking", "Code Review", "Security Reports"],
    category: "Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-code-security-auditor"
  },
  {
    name: "AI Voice Assistant Pro",
    description: "Advanced voice-controlled AI assistant with natural language processing and multi-language support",
    price: "$129/mo",
    features: ["Voice Recognition", "Multi-language", "Task Automation", "Smart Scheduling"],
    category: "Voice AI",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-voice-assistant"
  },
  {
    name: "AI Meeting Transcriber Pro",
    description: "Real-time meeting transcription with AI-powered insights and action item extraction",
    price: "$89/mo",
    features: ["Real-time Transcription", "Action Items", "Speaker Identification", "Meeting Summaries"],
    category: "Productivity",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-meeting-transcriber"
  },
  {
    name: "AI Website Builder Pro",
    description: "No-code website builder with AI-powered design suggestions and content generation",
    price: "$149/mo",
    features: ["No-Code Builder", "AI Design", "Content Generation", "SEO Optimization"],
    category: "Web Development",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-website-builder"
  },
  {
    name: "AI Password Generator Pro",
    description: "Advanced password management with AI-powered security analysis and breach monitoring",
    price: "$39/mo",
    features: ["Password Generation", "Security Analysis", "Breach Monitoring", "Multi-device Sync"],
    category: "Security",
    popular: true,
    icon: Lock,
    link: "https://ziontechgroup.com/ai-password-generator"
  },
  {
    name: "AI Email Signature Manager",
    description: "Professional email signature management with AI-powered design and compliance checking",
    price: "$29/mo",
    features: ["Signature Design", "Compliance Check", "Brand Consistency", "Team Management"],
    category: "Communication",
    popular: false,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-signature-manager"
  },
  {
    name: "AI Social Media Scheduler",
    description: "Intelligent social media scheduling with optimal timing and engagement prediction",
    price: "$79/mo",
    features: ["Smart Scheduling", "Engagement Prediction", "Content Optimization", "Multi-platform"],
    category: "Social Media",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-social-media-scheduler"
  },
  {
    name: "AI Resume Builder Pro",
    description: "AI-powered resume creation with ATS optimization and industry-specific templates",
    price: "$59/mo",
    features: ["ATS Optimization", "Industry Templates", "Skills Analysis", "Cover Letter Generation"],
    category: "Career",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-resume-builder"
  },
  {
    name: "AI Translation Suite",
    description: "Advanced translation service with context-aware AI and real-time language processing",
    price: "$99/mo",
    features: ["Real-time Translation", "Context Awareness", "Document Translation", "Voice Translation"],
    category: "Language",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-translation-suite"
  },
  {
    name: "AI Data Backup Manager",
    description: "Intelligent data backup with AI-powered deduplication and recovery optimization",
    price: "$69/mo",
    features: ["Smart Deduplication", "Recovery Optimization", "Version Control", "Cloud Sync"],
    category: "Data Management",
    popular: true,
    icon: Database,
    link: "https://ziontechgroup.com/ai-data-backup-manager"
  },
  {
    name: "AI Time Tracking Pro",
    description: "Advanced time tracking with AI-powered productivity insights and project analysis",
    price: "$49/mo",
    features: ["Automatic Tracking", "Productivity Insights", "Project Analysis", "Team Reports"],
    category: "Productivity",
    popular: true,
    icon: Clock,
    link: "https://ziontechgroup.com/ai-time-tracking"
  },
  {
    name: "AI Meeting Room Scheduler",
    description: "Smart meeting room booking with AI-powered optimization and conflict resolution",
    price: "$39/mo",
    features: ["Smart Booking", "Conflict Resolution", "Resource Optimization", "Usage Analytics"],
    category: "Office Management",
    popular: false,
    icon: Calendar,
    link: "https://ziontechgroup.com/ai-meeting-room-scheduler"
  },
  {
    name: "AI Expense Categorizer",
    description: "Automatic expense categorization with AI-powered receipt processing and tax optimization",
    price: "$59/mo",
    features: ["Auto Categorization", "Receipt Processing", "Tax Optimization", "Report Generation"],
    category: "Finance",
    popular: true,
    icon: Calculator,
    link: "https://ziontechgroup.com/ai-expense-categorizer"
  },
  {
    name: "AI Customer Feedback Analyzer",
    description: "Advanced sentiment analysis and feedback processing with actionable insights",
    price: "$119/mo",
    features: ["Sentiment Analysis", "Actionable Insights", "Trend Detection", "Response Suggestions"],
    category: "Analytics",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-customer-feedback-analyzer"
  },
  {
    name: "AI Inventory Optimizer",
    description: "Smart inventory management with demand forecasting and automated reordering",
    price: "$179/mo",
    features: ["Demand Forecasting", "Auto Reordering", "Stock Optimization", "Supplier Management"],
    category: "Operations",
    popular: true,
    icon: Package,
    link: "https://ziontechgroup.com/ai-inventory-optimizer"
  },
  {
    name: "AI Contract Analyzer",
    description: "Intelligent contract analysis with risk assessment and compliance checking",
    price: "$199/mo",
    features: ["Risk Assessment", "Compliance Check", "Clause Analysis", "Renewal Alerts"],
    category: "Legal",
    popular: false,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-contract-analyzer"
  },
  {
    name: "AI Performance Monitor",
    description: "Real-time performance monitoring with AI-powered anomaly detection and optimization",
    price: "$149/mo",
    features: ["Real-time Monitoring", "Anomaly Detection", "Performance Optimization", "Alert System"],
    category: "Monitoring",
    popular: true,
    icon: Activity,
    link: "https://ziontechgroup.com/ai-performance-monitor"
  },
  {
    name: "AI Email Filter Pro",
    description: "Advanced email filtering with AI-powered spam detection and priority management",
    price: "$39/mo",
    features: ["Smart Filtering", "Spam Detection", "Priority Management", "Auto Organization"],
    category: "Email Management",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-filter"
  },
  {
    name: "AI Task Scheduler",
    description: "Intelligent task scheduling with AI-powered optimization and deadline management",
    price: "$69/mo",
    features: ["Smart Scheduling", "Deadline Management", "Priority Optimization", "Team Coordination"],
    category: "Project Management",
    popular: true,
    icon: Calendar,
    link: "https://ziontechgroup.com/ai-task-scheduler"
  },
  {
    name: "AI Document Scanner Pro",
    description: "Advanced document scanning with OCR, data extraction, and intelligent organization",
    price: "$89/mo",
    features: ["OCR Processing", "Data Extraction", "Smart Organization", "Cloud Storage"],
    category: "Document Management",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-document-scanner"
  }
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    content: "Zion Tech Group's AI solutions transformed our operations completely. We achieved 300% ROI in just 6 months and reduced operational costs by 70%. Their AI workflow automation and quantum financial oracle are game-changing technologies that put us years ahead of our competition.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLabs",
    content: "The AI customer support bot and neural memory assistant they built for us handle 90% of inquiries automatically. Our customer satisfaction increased by 40% while reducing support costs by 60%. The AI holographic workspace has revolutionized our remote collaboration. Outstanding work!",
    avatar: "MC"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer",
    company: "MedTech Innovations",
    content: "Their AI healthcare solutions and drug discovery platform are revolutionary. The diagnostic accuracy improved by 35% and patient processing time decreased by 50%. The AI pharmaceutical research tools accelerated our drug development by 200%. This is the future of healthcare technology.",
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    company: "Quantum Dynamics",
    content: "The quantum computing infrastructure and AI neural interface platform have given us unprecedented computational power. We're solving problems that were previously impossible, and our research has advanced by 5 years in just 18 months. Zion Tech Group is truly at the forefront of innovation.",
    avatar: "DK"
  },
  {
    name: "Lisa Thompson",
    role: "Head of Operations",
    company: "Global Manufacturing Corp",
    content: "Their AI manufacturing intelligence and supply chain optimization solutions have revolutionized our production. We've reduced waste by 45%, improved quality by 60%, and increased throughput by 80%. The predictive maintenance alone has saved us millions in downtime costs.",
    avatar: "LT"
  },
  {
    name: "James Wilson",
    role: "Chief Financial Officer",
    company: "FinTech Innovations",
    content: "The AI financial intelligence platform and quantum financial oracle have transformed our trading operations. We've achieved 25% better returns while reducing risk by 40%. The real-time market analysis and algorithmic trading capabilities are simply extraordinary.",
    avatar: "JW"
  }
];

// Stats data
const stats: Stat[] = [
  {
    number: "1,200+",
    label: "Enterprise Clients",
    icon: Users
  },
  {
    number: "99.99%",
    label: "Uptime Guarantee",
    icon: Shield
  },
  {
    number: "24/7",
    label: "Global Support",
    icon: Clock
  },
  {
    number: "400%",
    label: "Average ROI",
    icon: TrendingUp
  },
  {
    number: "50+",
    label: "Countries Served",
    icon: Globe
  },
  {
    number: "15+",
    label: "Years Experience",
    icon: Award
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
    name: "AI Neural Network Architecture Designer",
    description: "Automated neural network design and optimization for custom AI model development",
    price: "$3,500/mo",
    features: ["Auto Architecture", "Model Optimization", "Performance Tuning", "Custom Training"],
    category: "AI Development",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-network-designer"
  },
  {
    name: "AI Predictive Maintenance Platform",
    description: "Advanced predictive maintenance for industrial equipment with AI-powered failure prediction",
    price: "$2,800/mo",
    features: ["Failure Prediction", "Maintenance Scheduling", "Cost Optimization", "Equipment Monitoring"],
    category: "Industrial AI",
    enterprise: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-predictive-maintenance"
  },
  {
    name: "AI Natural Language Processing Suite",
    description: "Comprehensive NLP platform with sentiment analysis, language translation, and text generation",
    price: "$1,800/mo",
    features: ["Sentiment Analysis", "Language Translation", "Text Generation", "Entity Recognition"],
    category: "NLP",
    enterprise: false,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-nlp-suite"
  },
  {
    name: "AI Recommendation Engine Pro",
    description: "Advanced recommendation system with deep learning algorithms for personalized content delivery",
    price: "$2,200/mo",
    features: ["Deep Learning", "Real-time Recommendations", "A/B Testing", "Performance Analytics"],
    category: "Recommendation Systems",
    enterprise: false,
    icon: Target,
    link: "https://ziontechgroup.com/ai-recommendation-engine"
  },
  {
    name: "AI Time Series Forecasting",
    description: "Advanced time series analysis and forecasting with machine learning algorithms",
    price: "$1,600/mo",
    features: ["Time Series Analysis", "Forecasting Models", "Anomaly Detection", "Trend Analysis"],
    category: "Data Science",
    enterprise: false,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-time-series-forecasting"
  },
  {
    name: "AI Speech Recognition Platform",
    description: "High-accuracy speech recognition with real-time processing and multi-language support",
    price: "$1,400/mo",
    features: ["Real-time Processing", "Multi-language", "Noise Cancellation", "Custom Models"],
    category: "Speech AI",
    enterprise: false,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-speech-recognition"
  },
  {
    name: "AI Image Generation Studio",
    description: "Advanced AI image generation with style transfer, upscaling, and creative tools",
    price: "$899/mo",
    features: ["Style Transfer", "Image Upscaling", "Creative Generation", "Batch Processing"],
    category: "Computer Vision",
    enterprise: false,
    icon: Camera,
    link: "https://ziontechgroup.com/ai-image-generation"
  },
  {
    name: "AI Autonomous Vehicle Platform",
    description: "Complete autonomous vehicle management system with AI-powered navigation and safety",
    price: "$8,500/mo",
    features: ["Autonomous Navigation", "Safety Systems", "Fleet Management", "Real-time Monitoring"],
    category: "Autonomous Systems",
    enterprise: true,
    icon: Car,
    link: "https://ziontechgroup.com/ai-autonomous-vehicles"
  },
  {
    name: "AI Smart City Management",
    description: "Comprehensive smart city solution with AI-powered traffic, energy, and resource management",
    price: "$12,000/mo",
    features: ["Traffic Optimization", "Energy Management", "Resource Allocation", "Citizen Services"],
    category: "Smart Cities",
    enterprise: true,
    icon: Building,
    link: "https://ziontechgroup.com/ai-smart-city-management"
  },
  {
    name: "AI Neural Interface Platform",
    description: "Advanced brain-computer interface with AI-powered neural signal processing and control",
    price: "$8,500/mo",
    features: ["Neural Signal Processing", "Thought Control", "Cognitive Enhancement", "Medical Applications"],
    category: "Neural Technology",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-interface"
  },
  {
    name: "AI Quantum Machine Learning",
    description: "Quantum-enhanced machine learning platform with exponential speedup for complex algorithms",
    price: "$15,000/mo",
    features: ["Quantum Algorithms", "Exponential Speedup", "Complex Optimization", "Quantum Neural Networks"],
    category: "Quantum AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-ml-platform"
  },
  {
    name: "AI Space Mission Control",
    description: "Autonomous space mission management with AI-powered trajectory optimization and mission planning",
    price: "$25,000/mo",
    features: ["Mission Planning", "Trajectory Optimization", "Autonomous Control", "Risk Assessment"],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-mission-control"
  },
  {
    name: "AI Climate Intelligence",
    description: "Advanced climate modeling and prediction with AI-powered environmental monitoring",
    price: "$18,000/mo",
    features: ["Climate Modeling", "Environmental Monitoring", "Disaster Prediction", "Carbon Tracking"],
    category: "Environmental AI",
    enterprise: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-intelligence"
  },
  {
    name: "AI Pharmaceutical Research",
    description: "Accelerated drug discovery with AI-powered molecular analysis and clinical trial optimization",
    price: "$22,000/mo",
    features: ["Drug Discovery", "Molecular Analysis", "Clinical Trials", "Patent Research"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-pharmaceutical-research"
  },
  {
    name: "AI Financial Intelligence",
    description: "Advanced financial AI with real-time market analysis and algorithmic trading",
    price: "$20,000/mo",
    features: ["Market Analysis", "Algorithmic Trading", "Risk Management", "Portfolio Optimization"],
    category: "Financial AI",
    enterprise: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-financial-intelligence"
  },
  {
    name: "AI Blockchain Intelligence",
    description: "AI-powered blockchain analysis with smart contract optimization and DeFi integration",
    price: "$16,000/mo",
    features: ["Blockchain Analysis", "Smart Contract AI", "DeFi Integration", "Security Auditing"],
    category: "Blockchain AI",
    enterprise: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-blockchain-intelligence"
  },
  {
    name: "AI Supply Chain Intelligence",
    description: "Intelligent supply chain optimization with AI-powered logistics and demand forecasting",
    price: "$14,000/mo",
    features: ["Logistics Optimization", "Demand Forecasting", "Risk Management", "Cost Optimization"],
    category: "Supply Chain AI",
    enterprise: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-supply-chain-intelligence"
  },
  {
    name: "AI Legal Intelligence",
    description: "Advanced legal AI with case analysis, contract review, and compliance monitoring",
    price: "$12,000/mo",
    features: ["Case Analysis", "Contract Review", "Compliance Monitoring", "Legal Research"],
    category: "Legal AI",
    enterprise: true,
    icon: Scale,
    link: "https://ziontechgroup.com/ai-legal-intelligence"
  },
  {
    name: "AI Agricultural Intelligence",
    description: "Smart farming solutions with AI-powered crop monitoring and yield optimization",
    price: "$10,000/mo",
    features: ["Crop Monitoring", "Yield Optimization", "Weather Analysis", "Automation Control"],
    category: "Agricultural AI",
    enterprise: true,
    icon: Sprout,
    link: "https://ziontechgroup.com/ai-agricultural-intelligence"
  },
  {
    name: "AI Energy Grid Intelligence",
    description: "Smart energy grid management with AI-powered optimization and renewable integration",
    price: "$15,000/mo",
    features: ["Grid Optimization", "Renewable Integration", "Demand Forecasting", "Energy Storage"],
    category: "Energy AI",
    enterprise: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-energy-grid-intelligence"
  },
  {
    name: "AI Manufacturing Intelligence",
    description: "Smart manufacturing with AI-powered process optimization and quality control",
    price: "$18,000/mo",
    features: ["Process Optimization", "Quality Control", "Predictive Maintenance", "Supply Integration"],
    category: "Manufacturing AI",
    enterprise: true,
    icon: Factory,
    link: "https://ziontechgroup.com/ai-manufacturing-intelligence"
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
    description: "AI-powered IT operations with intelligent monitoring, automation, and incident response",
    price: "$3,200/mo",
    features: ["Intelligent Monitoring", "Automated Response", "Predictive Analytics", "Root Cause Analysis"],
    category: "AI Operations",
    icon: Brain,
    link: "https://ziontechgroup.com/ai-ops"
  },
  {
    name: "Healthcare IT Solutions",
    description: "HIPAA-compliant healthcare IT infrastructure with patient data management and telemedicine",
    price: "$4,500/mo",
    features: ["HIPAA Compliance", "Patient Data Management", "Telemedicine Platform", "EMR Integration"],
    category: "Healthcare IT",
    icon: Stethoscope,
    link: "https://ziontechgroup.com/healthcare-it"
  },
  {
    name: "Financial Services IT",
    description: "SOX-compliant financial IT infrastructure with secure transaction processing and compliance",
    price: "$5,200/mo",
    features: ["SOX Compliance", "Secure Transactions", "Risk Management", "Regulatory Reporting"],
    category: "Financial IT",
    icon: BarChart,
    link: "https://ziontechgroup.com/financial-it"
  },
  {
    name: "Edge Computing Solutions",
    description: "Low-latency edge infrastructure with distributed computing and real-time processing",
    price: "$2,800/mo",
    features: ["Low Latency", "Distributed Computing", "Real-time Processing", "Edge Analytics"],
    category: "Edge Computing",
    icon: Cpu,
    link: "https://ziontechgroup.com/edge-computing"
  },
  {
    name: "5G Network Implementation",
    description: "High-speed 5G network deployment with ultra-low latency and massive connectivity",
    price: "$6,500/mo",
    features: ["5G Deployment", "Ultra-low Latency", "Massive Connectivity", "Network Slicing"],
    category: "5G Networks",
    icon: Globe,
    link: "https://ziontechgroup.com/5g-implementation"
  },
  {
    name: "IoT Platform Development",
    description: "Comprehensive IoT platform with device management, data processing, and analytics",
    price: "$3,800/mo",
    features: ["Device Management", "Data Processing", "Real-time Analytics", "Fleet Management"],
    category: "IoT Solutions",
    icon: Globe,
    link: "https://ziontechgroup.com/iot-platform"
  },
  {
    name: "Quantum Computing Infrastructure",
    description: "Quantum computing infrastructure setup with quantum algorithms and optimization",
    price: "$15,000/mo",
    features: ["Quantum Hardware", "Algorithm Development", "Quantum Optimization", "Research Support"],
    category: "Quantum Computing",
    icon: Brain,
    link: "https://ziontechgroup.com/quantum-computing-infrastructure"
  },
  {
    name: "AI Data Center Management",
    description: "Intelligent data center management with AI-powered optimization and predictive maintenance",
    price: "$4,800/mo",
    features: ["AI Optimization", "Predictive Maintenance", "Energy Efficiency", "Capacity Planning"],
    category: "Data Center",
    icon: Database,
    link: "https://ziontechgroup.com/ai-data-center-management"
  },
  {
    name: "Cybersecurity Operations Center",
    description: "24/7 cybersecurity monitoring with threat detection, incident response, and compliance",
    price: "$7,200/mo",
    features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Compliance Management"],
    category: "Cybersecurity",
    icon: Shield,
    link: "https://ziontechgroup.com/cybersecurity-operations-center"
  },
  {
    name: "Multi-Cloud Management Platform",
    description: "Unified multi-cloud management with cost optimization and security across all platforms",
    price: "$3,500/mo",
    features: ["Multi-cloud Support", "Cost Optimization", "Security Management", "Resource Monitoring"],
    category: "Cloud Management",
    icon: Cloud,
    link: "https://ziontechgroup.com/multi-cloud-management"
  },
  {
    name: "AI-Powered Network Security",
    description: "Advanced network security with AI-powered threat detection and automated response",
    price: "$2,900/mo",
    features: ["AI Threat Detection", "Automated Response", "Behavioral Analysis", "Zero Trust Architecture"],
    category: "Network Security",
    icon: Shield,
    link: "https://ziontechgroup.com/ai-network-security"
  },
  {
    name: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery solution with automated failover and data protection",
    price: "$2,400/mo",
    features: ["Automated Failover", "Data Protection", "RTO/RPO Optimization", "Testing & Validation"],
    category: "Disaster Recovery",
    icon: Shield,
    link: "https://ziontechgroup.com/disaster-recovery"
  },
  {
    name: "AI Performance Monitoring",
    description: "Intelligent application performance monitoring with AI-powered insights and optimization",
    price: "$1,800/mo",
    features: ["AI Insights", "Performance Optimization", "Anomaly Detection", "Capacity Planning"],
    category: "Performance Monitoring",
    icon: Activity,
    link: "https://ziontechgroup.com/ai-performance-monitoring"
  },
  {
    name: "Digital Transformation Consulting",
    description: "Comprehensive digital transformation strategy and implementation for modern businesses",
    price: "$5,000/mo",
    features: ["Strategy Development", "Technology Assessment", "Implementation Planning", "Change Management"],
    category: "Consulting",
    icon: Settings,
    link: "https://ziontechgroup.com/digital-transformation-consulting"
  },
  {
    name: "Metaverse Development Platform",
    description: "Complete metaverse infrastructure with virtual worlds, avatars, and immersive experiences",
    price: "$8,500/mo",
    features: ["Virtual Worlds", "Avatar Systems", "Immersive Experiences", "Blockchain Integration"],
    category: "Metaverse",
    icon: Eye,
    link: "https://ziontechgroup.com/metaverse-development"
  },
  {
    name: "Web3 Infrastructure Services",
    description: "Complete Web3 infrastructure with DeFi, NFT, and blockchain solutions",
    price: "$6,500/mo",
    features: ["DeFi Platforms", "NFT Marketplaces", "Smart Contracts", "Token Economics"],
    category: "Web3",
    icon: Shield,
    link: "https://ziontechgroup.com/web3-infrastructure"
  },
  {
    name: "AI Infrastructure as a Service",
    description: "Complete AI infrastructure platform with GPU clusters and model deployment",
    price: "$12,000/mo",
    features: ["GPU Clusters", "Model Deployment", "Auto-scaling", "MLOps Pipeline"],
    category: "AI Infrastructure",
    icon: Brain,
    link: "https://ziontechgroup.com/ai-infrastructure-service"
  },
  {
    name: "MLOps Platform Implementation",
    description: "Complete MLOps platform with model training, deployment, and monitoring",
    price: "$7,500/mo",
    features: ["Model Training", "Deployment Pipeline", "Monitoring", "Version Control"],
    category: "MLOps",
    icon: Settings,
    link: "https://ziontechgroup.com/mlops-platform"
  },
  {
    name: "Zero Trust Security Architecture",
    description: "Complete zero trust security implementation with identity verification and access control",
    price: "$9,500/mo",
    features: ["Identity Verification", "Access Control", "Network Segmentation", "Continuous Monitoring"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/zero-trust-architecture"
  },
  {
    name: "AI-Powered Security Operations",
    description: "Advanced security operations center with AI-powered threat detection and response",
    price: "$11,000/mo",
    features: ["AI Threat Detection", "Automated Response", "Behavioral Analysis", "Incident Management"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/ai-security-operations"
  },
  {
    name: "Real-time Data Platform",
    description: "High-performance real-time data processing with streaming analytics and visualization",
    price: "$6,000/mo",
    features: ["Streaming Analytics", "Real-time Processing", "Data Visualization", "Event Sourcing"],
    category: "Data Platform",
    icon: Database,
    link: "https://ziontechgroup.com/real-time-data-platform"
  },
  {
    name: "Data Lake & Warehouse Modernization",
    description: "Modern data architecture with cloud-native data lakes and intelligent warehouses",
    price: "$8,000/mo",
    features: ["Data Lake Design", "Warehouse Modernization", "Data Governance", "Analytics Platform"],
    category: "Data Management",
    icon: Database,
    link: "https://ziontechgroup.com/data-modernization"
  },
  {
    name: "Hybrid Cloud Architecture",
    description: "Seamless hybrid cloud solutions with multi-cloud management and optimization",
    price: "$7,000/mo",
    features: ["Multi-cloud Management", "Cost Optimization", "Security Integration", "Migration Services"],
    category: "Cloud Architecture",
    icon: Cloud,
    link: "https://ziontechgroup.com/hybrid-cloud-architecture"
  },
  {
    name: "Smart City Solutions",
    description: "Complete smart city infrastructure with IoT, sensors, and intelligent systems",
    price: "$15,000/mo",
    features: ["IoT Infrastructure", "Sensor Networks", "Intelligent Systems", "Citizen Services"],
    category: "Smart Cities",
    icon: Building,
    link: "https://ziontechgroup.com/smart-cities"
  },
  {
    name: "Innovation Labs",
    description: "Dedicated innovation labs with cutting-edge technology and research facilities",
    price: "$20,000/mo",
    features: ["Research Facilities", "Technology Labs", "Innovation Programs", "Expert Teams"],
    category: "Innovation",
    icon: Rocket,
    link: "https://ziontechgroup.com/innovation-labs"
  },
  {
    name: "Robotics Solutions",
    description: "Advanced robotics systems with AI-powered automation and control",
    price: "$18,000/mo",
    features: ["Robotic Systems", "AI Control", "Automation", "Human-Robot Interaction"],
    category: "Robotics",
    icon: Settings,
    link: "https://ziontechgroup.com/robotics"
  },
  {
    name: "Quantum Security Solutions",
    description: "Quantum-safe security solutions with post-quantum cryptography",
    price: "$25,000/mo",
    features: ["Post-quantum Crypto", "Quantum Key Distribution", "Security Auditing", "Migration Services"],
    category: "Quantum Security",
    icon: Shield,
    link: "https://ziontechgroup.com/quantum-security"
  },
  {
    name: "AI Immersive Learning",
    description: "Immersive learning platforms with VR/AR and AI-powered education",
    price: "$12,000/mo",
    features: ["VR/AR Learning", "AI Tutoring", "Immersive Experiences", "Progress Tracking"],
    category: "Education Technology",
    icon: GraduationCap,
    link: "https://ziontechgroup.com/ai-immersive-learning"
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

const HomePage: React.FC = memo(() => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Generation AI & IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionize your business with cutting-edge AI technology, quantum computing, and advanced IT infrastructure. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our comprehensive suite of micro SAAS, enterprise AI, and IT solutions.
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">400%</div>
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
              <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1,200+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
          </div>
</div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive AI and IT solutions for modern enterprises</p>
          </div>
          
          {/* Micro SAAS Services */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Micro SAAS Solutions</h3>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Powerful, affordable AI-powered tools designed for modern businesses. Choose from our comprehensive suite of micro SAAS solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSAASServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group">
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
                      {service.icon && <service.icon className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <button 
                        className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                        onClick={() => service.link && window.open(service.link, '_blank')}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Enterprise AI Solutions</h3>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Advanced AI solutions for enterprise clients. Transform your industry with cutting-edge artificial intelligence and machine learning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group relative ${
                  service.enterprise ? 'border-purple-400/20 hover:border-purple-400/40 hover:shadow-purple-400/10' : 'border-blue-400/20 hover:border-blue-400/40 hover:shadow-blue-400/10'
                }`}>
                  {service.enterprise && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Enterprise
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      service.enterprise ? 'bg-gradient-to-r from-purple-400 to-pink-600' : 'bg-gradient-to-r from-blue-400 to-cyan-600'
                    }`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold text-white mb-3 group-hover:transition-colors ${
                      service.enterprise ? 'group-hover:text-purple-400' : 'group-hover:text-blue-400'
                    }`}>{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 ${
                            service.enterprise ? 'text-purple-400' : 'text-blue-400'
                          }`} />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-2 ${
                        service.enterprise ? 'text-purple-400' : 'text-blue-400'
                      }`}>{service.price}</div>
                      <button 
                        className={`font-medium text-sm transition-colors ${
                          service.enterprise ? 'text-purple-400 hover:text-purple-300' : 'text-blue-400 hover:text-blue-300'
                        }`}
                        onClick={() => service.link && window.open(service.link, '_blank')}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">IT Infrastructure Services</h3>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive IT solutions to build, secure, and scale your technology infrastructure. From cloud migration to cybersecurity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300 group">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{service.price}</div>
                      <button 
                        className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors"
                        onClick={() => service.link && window.open(service.link, '_blank')}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
                364 E Main St STE 1008<br />
                Middletown, DE 19709
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
});

HomePage.displayName = 'HomePage';

export default HomePage;
