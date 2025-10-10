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
  Sprout,
  Type,
  Link,
  Map,
  PiggyBank,
  Search
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
    price: "$149/mo",
    features: ["Voice Recognition", "Multi-language Support", "Task Automation", "Smart Scheduling", "Voice Analytics"],
    category: "Voice AI",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-voice-assistant"
  },
  {
    name: "AI Document Scanner Pro",
    description: "Intelligent document scanning with OCR, data extraction, and cloud storage integration",
    price: "$89/mo",
    features: ["OCR Processing", "Data Extraction", "Cloud Storage", "Batch Processing", "Format Conversion"],
    category: "Document Management",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-document-scanner"
  },
  {
    name: "AI Meeting Transcriber Pro",
    description: "Real-time meeting transcription with AI-powered insights and action item extraction",
    price: "$129/mo",
    features: ["Real-time Transcription", "Action Items", "Meeting Summaries", "Speaker Identification", "Export Options"],
    category: "Productivity",
    popular: true,
    icon: Video,
    link: "https://ziontechgroup.com/ai-meeting-transcriber"
  },
  {
    name: "AI Website Builder Pro",
    description: "No-code website builder with AI-powered design suggestions and automated optimization",
    price: "$199/mo",
    features: ["No-Code Builder", "AI Design Suggestions", "SEO Optimization", "Mobile Responsive", "E-commerce Integration"],
    category: "Web Development",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-website-builder"
  },
  {
    name: "AI Password Manager Pro",
    description: "Advanced password management with AI-powered security recommendations and breach monitoring",
    price: "$79/mo",
    features: ["Password Generation", "Security Monitoring", "Breach Alerts", "Multi-device Sync", "Biometric Login"],
    category: "Security",
    popular: true,
    icon: Lock,
    link: "https://ziontechgroup.com/ai-password-manager"
  },
  {
    name: "AI Email Signature Manager",
    description: "Professional email signature management with brand consistency and analytics",
    price: "$49/mo",
    features: ["Brand Templates", "Analytics Tracking", "Team Management", "Social Links", "Legal Compliance"],
    category: "Email Marketing",
    popular: false,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-signature-manager"
  },
  {
    name: "AI Time Tracker Pro",
    description: "Intelligent time tracking with productivity insights and automated project billing",
    price: "$99/mo",
    features: ["Automatic Tracking", "Productivity Insights", "Project Billing", "Team Analytics", "Integration Hub"],
    category: "Productivity",
    popular: true,
    icon: Clock,
    link: "https://ziontechgroup.com/ai-time-tracker"
  },
  {
    name: "AI Social Media Scheduler",
    description: "Advanced social media scheduling with AI-powered optimal posting times and content suggestions",
    price: "$159/mo",
    features: ["Smart Scheduling", "Optimal Timing", "Content Suggestions", "Multi-platform", "Analytics Dashboard"],
    category: "Social Media",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-social-media-scheduler"
  },
  {
    name: "AI Form Builder Pro",
    description: "Intelligent form builder with conditional logic, payment integration, and analytics",
    price: "$119/mo",
    features: ["Conditional Logic", "Payment Integration", "Analytics Dashboard", "Custom Fields", "API Access"],
    category: "Forms",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-form-builder"
  },
  {
    name: "AI Survey Creator Pro",
    description: "Advanced survey creation with AI-powered question suggestions and sentiment analysis",
    price: "$139/mo",
    features: ["Question Suggestions", "Sentiment Analysis", "Response Analytics", "Custom Themes", "Export Options"],
    category: "Research",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-survey-creator"
  },
  {
    name: "AI Chat Widget Pro",
    description: "Intelligent website chat widget with AI-powered responses and lead qualification",
    price: "$89/mo",
    features: ["AI Responses", "Lead Qualification", "Multi-language", "Custom Branding", "Analytics"],
    category: "Customer Support",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-chat-widget"
  },
  {
    name: "AI Backup Manager Pro",
    description: "Intelligent backup solution with automated scheduling and disaster recovery",
    price: "$69/mo",
    features: ["Automated Backups", "Disaster Recovery", "Version Control", "Cloud Storage", "Encryption"],
    category: "Data Management",
    popular: true,
    icon: Database,
    link: "https://ziontechgroup.com/ai-backup-manager"
  },
  {
    name: "AI SEO Optimizer Pro",
    description: "Advanced SEO optimization with AI-powered keyword research and content suggestions",
    price: "$179/mo",
    features: ["Keyword Research", "Content Suggestions", "Rank Tracking", "Competitor Analysis", "Technical SEO"],
    category: "SEO",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-seo-optimizer"
  },
  {
    name: "AI Analytics Pro",
    description: "Comprehensive analytics platform with AI-powered insights and predictive modeling",
    price: "$299/mo",
    features: ["Predictive Analytics", "Custom Dashboards", "Real-time Data", "Machine Learning", "API Integration"],
    category: "Analytics",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-analytics-pro"
  },
  {
    name: "AI Translation Pro",
    description: "Advanced translation service with AI-powered accuracy and cultural context",
    price: "$199/mo",
    features: ["100+ Languages", "Cultural Context", "Real-time Translation", "Document Translation", "API Access"],
    category: "Translation",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-translation-pro"
  },
  {
    name: "AI Video Editor Pro",
    description: "AI-powered video editing with automated cuts, transitions, and effects",
    price: "$249/mo",
    features: ["Auto Editing", "Smart Transitions", "Voice Enhancement", "Background Removal", "Export Options"],
    category: "Video Editing",
    popular: true,
    icon: Video,
    link: "https://ziontechgroup.com/ai-video-editor"
  },
  {
    name: "AI Image Editor Pro",
    description: "Advanced image editing with AI-powered enhancement and background removal",
    price: "$149/mo",
    features: ["AI Enhancement", "Background Removal", "Object Removal", "Color Correction", "Batch Processing"],
    category: "Image Editing",
    popular: true,
    icon: Camera,
    link: "https://ziontechgroup.com/ai-image-editor"
  },
  {
    name: "AI Podcast Creator Pro",
    description: "AI-powered podcast creation with voice synthesis and automated editing",
    price: "$199/mo",
    features: ["Voice Synthesis", "Auto Editing", "Music Integration", "Episode Templates", "Distribution"],
    category: "Podcasting",
    popular: true,
    icon: Music,
    link: "https://ziontechgroup.com/ai-podcast-creator"
  },
  {
    name: "AI Email Validator Pro",
    description: "Advanced email validation with deliverability scoring and bounce prevention",
    price: "$79/mo",
    features: ["Deliverability Scoring", "Bounce Prevention", "Spam Detection", "Bulk Validation", "API Integration"],
    category: "Email Marketing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-validator"
  },
  {
    name: "AI QR Code Generator Pro",
    description: "Advanced QR code generation with analytics, customization, and dynamic content",
    price: "$59/mo",
    features: ["Dynamic QR Codes", "Analytics Tracking", "Custom Design", "Bulk Generation", "API Access"],
    category: "QR Codes",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-qr-generator"
  },
  {
    name: "AI Color Palette Generator",
    description: "AI-powered color palette generation with accessibility compliance and brand matching",
    price: "$49/mo",
    features: ["Brand Matching", "Accessibility Check", "Trend Analysis", "Export Options", "API Integration"],
    category: "Design",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-color-palette"
  },
  {
    name: "AI Font Pairing Pro",
    description: "Intelligent font pairing suggestions with readability analysis and brand consistency",
    price: "$39/mo",
    features: ["Font Pairing", "Readability Analysis", "Brand Consistency", "License Checking", "Export Options"],
    category: "Typography",
    popular: false,
    icon: Type,
    link: "https://ziontechgroup.com/ai-font-pairing"
  },
  {
    name: "AI Icon Generator Pro",
    description: "AI-powered icon generation with consistent style and multiple formats",
    price: "$79/mo",
    features: ["Style Consistency", "Multiple Formats", "Custom Styles", "Bulk Generation", "API Access"],
    category: "Icons",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-icon-generator"
  },
  {
    name: "AI Gradient Generator Pro",
    description: "Advanced gradient generation with AI-powered color harmony and animation support",
    price: "$49/mo",
    features: ["Color Harmony", "Animation Support", "CSS Export", "Bulk Generation", "Trend Analysis"],
    category: "Design",
    popular: true,
    icon: Palette,
    link: "https://ziontechgroup.com/ai-gradient-generator"
  },
  {
    name: "AI Mockup Generator Pro",
    description: "AI-powered mockup generation for products, websites, and marketing materials",
    price: "$149/mo",
    features: ["Product Mockups", "Website Mockups", "Marketing Materials", "3D Rendering", "Export Options"],
    category: "Mockups",
    popular: true,
    icon: Camera,
    link: "https://ziontechgroup.com/ai-mockup-generator"
  },
  {
    name: "AI Logo Animator Pro",
    description: "AI-powered logo animation with smooth transitions and multiple export formats",
    price: "$199/mo",
    features: ["Smooth Animations", "Multiple Formats", "Custom Timing", "Brand Guidelines", "Export Options"],
    category: "Animation",
    popular: true,
    icon: Video,
    link: "https://ziontechgroup.com/ai-logo-animator"
  },
  {
    name: "AI Business Card Designer",
    description: "AI-powered business card design with professional templates and contact management",
    price: "$89/mo",
    features: ["Professional Templates", "Contact Management", "Print Ready", "Digital Cards", "QR Integration"],
    category: "Business Cards",
    popular: true,
    icon: CreditCard,
    link: "https://ziontechgroup.com/ai-business-card-designer"
  },
  {
    name: "AI Presentation Maker Pro",
    description: "AI-powered presentation creation with smart layouts and content suggestions",
    price: "$179/mo",
    features: ["Smart Layouts", "Content Suggestions", "Template Library", "Collaboration", "Export Options"],
    category: "Presentations",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-presentation-maker"
  },
  {
    name: "AI Resume Builder Pro",
    description: "AI-powered resume creation with ATS optimization and job matching",
    price: "$99/mo",
    features: ["ATS Optimization", "Job Matching", "Template Library", "Skills Analysis", "Cover Letters"],
    category: "Career",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-resume-builder"
  },
  {
    name: "AI Cover Letter Generator",
    description: "AI-powered cover letter generation with personalized content and ATS optimization",
    price: "$69/mo",
    features: ["Personalized Content", "ATS Optimization", "Multiple Formats", "Industry Templates", "Customization"],
    category: "Career",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-cover-letter-generator"
  },
  {
    name: "AI Job Description Writer",
    description: "AI-powered job description creation with bias detection and optimization",
    price: "$79/mo",
    features: ["Bias Detection", "Optimization", "Template Library", "Compliance Check", "Customization"],
    category: "HR",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-job-description-writer"
  },
  {
    name: "AI Interview Scheduler Pro",
    description: "Intelligent interview scheduling with calendar integration and automated reminders",
    price: "$129/mo",
    features: ["Calendar Integration", "Automated Reminders", "Candidate Management", "Video Integration", "Analytics"],
    category: "HR",
    popular: true,
    icon: Calendar,
    link: "https://ziontechgroup.com/ai-interview-scheduler"
  },
  {
    name: "AI Employee Onboarding Pro",
    description: "Automated employee onboarding with personalized workflows and compliance tracking",
    price: "$199/mo",
    features: ["Personalized Workflows", "Compliance Tracking", "Document Management", "Progress Tracking", "Integration"],
    category: "HR",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-employee-onboarding"
  },
  {
    name: "AI Performance Review Pro",
    description: "AI-powered performance review system with 360-degree feedback and analytics",
    price: "$249/mo",
    features: ["360 Feedback", "Analytics Dashboard", "Goal Tracking", "Development Plans", "Integration"],
    category: "HR",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-performance-review"
  },
  {
    name: "AI Learning Management System",
    description: "AI-powered learning platform with personalized content and progress tracking",
    price: "$299/mo",
    features: ["Personalized Content", "Progress Tracking", "Skill Assessment", "Certification", "Analytics"],
    category: "Education",
    popular: true,
    icon: GraduationCap,
    link: "https://ziontechgroup.com/ai-learning-management"
  },
  {
    name: "AI Course Creator Pro",
    description: "AI-powered course creation with content generation and interactive elements",
    price: "$199/mo",
    features: ["Content Generation", "Interactive Elements", "Assessment Tools", "Multimedia Support", "Publishing"],
    category: "Education",
    popular: true,
    icon: BookOpen,
    link: "https://ziontechgroup.com/ai-course-creator"
  },
  {
    name: "AI Student Progress Tracker",
    description: "AI-powered student progress tracking with predictive analytics and intervention alerts",
    price: "$149/mo",
    features: ["Predictive Analytics", "Intervention Alerts", "Parent Communication", "Grade Prediction", "Analytics"],
    category: "Education",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-student-progress-tracker"
  },
  {
    name: "AI Tutoring Assistant Pro",
    description: "AI-powered tutoring with personalized learning paths and real-time assistance",
    price: "$179/mo",
    features: ["Personalized Learning", "Real-time Assistance", "Subject Expertise", "Progress Tracking", "Adaptive Learning"],
    category: "Education",
    popular: true,
    icon: GraduationCap,
    link: "https://ziontechgroup.com/ai-tutoring-assistant"
  },
  {
    name: "AI Homework Helper Pro",
    description: "AI-powered homework assistance with step-by-step solutions and explanations",
    price: "$99/mo",
    features: ["Step-by-step Solutions", "Explanations", "Multiple Subjects", "Progress Tracking", "Parent Dashboard"],
    category: "Education",
    popular: true,
    icon: BookOpen,
    link: "https://ziontechgroup.com/ai-homework-helper"
  },
  {
    name: "AI Language Learning Pro",
    description: "AI-powered language learning with personalized lessons and pronunciation training",
    price: "$149/mo",
    features: ["Personalized Lessons", "Pronunciation Training", "Conversation Practice", "Progress Tracking", "Certification"],
    category: "Language Learning",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-language-learning"
  },
  {
    name: "AI Translation Assistant Pro",
    description: "Advanced translation assistant with context understanding and cultural adaptation",
    price: "$129/mo",
    features: ["Context Understanding", "Cultural Adaptation", "Real-time Translation", "Document Translation", "API Access"],
    category: "Translation",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-translation-assistant"
  },
  {
    name: "AI Grammar Checker Pro",
    description: "Advanced grammar checking with style suggestions and plagiarism detection",
    price: "$79/mo",
    features: ["Grammar Checking", "Style Suggestions", "Plagiarism Detection", "Tone Analysis", "Integration"],
    category: "Writing",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-grammar-checker"
  },
  {
    name: "AI Writing Assistant Pro",
    description: "Comprehensive writing assistant with content generation and editing capabilities",
    price: "$199/mo",
    features: ["Content Generation", "Editing Assistance", "Style Optimization", "Tone Analysis", "Integration"],
    category: "Writing",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-writing-assistant"
  },
  {
    name: "AI Plagiarism Checker Pro",
    description: "Advanced plagiarism detection with source identification and similarity analysis",
    price: "$89/mo",
    features: ["Source Identification", "Similarity Analysis", "Bulk Checking", "API Integration", "Detailed Reports"],
    category: "Writing",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-plagiarism-checker"
  },
  {
    name: "AI Citation Generator Pro",
    description: "AI-powered citation generation with multiple formats and automatic formatting",
    price: "$59/mo",
    features: ["Multiple Formats", "Automatic Formatting", "Source Detection", "Bulk Generation", "Integration"],
    category: "Research",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-citation-generator"
  },
  {
    name: "AI Research Assistant Pro",
    description: "AI-powered research assistant with source verification and fact-checking",
    price: "$179/mo",
    features: ["Source Verification", "Fact Checking", "Research Organization", "Citation Management", "Integration"],
    category: "Research",
    popular: true,
    icon: Search,
    link: "https://ziontechgroup.com/ai-research-assistant"
  },
  {
    name: "AI Data Visualization Pro",
    description: "AI-powered data visualization with interactive charts and automated insights",
    price: "$249/mo",
    features: ["Interactive Charts", "Automated Insights", "Custom Templates", "Real-time Data", "Export Options"],
    category: "Data Visualization",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-data-visualization"
  },
  {
    name: "AI Chart Generator Pro",
    description: "AI-powered chart generation with smart recommendations and customization",
    price: "$99/mo",
    features: ["Smart Recommendations", "Customization", "Multiple Chart Types", "Export Options", "API Access"],
    category: "Charts",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-chart-generator"
  },
  {
    name: "AI Infographic Creator Pro",
    description: "AI-powered infographic creation with data integration and design automation",
    price: "$199/mo",
    features: ["Data Integration", "Design Automation", "Template Library", "Custom Branding", "Export Options"],
    category: "Infographics",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-infographic-creator"
  },
  {
    name: "AI Dashboard Builder Pro",
    description: "AI-powered dashboard creation with real-time data and customizable widgets",
    price: "$299/mo",
    features: ["Real-time Data", "Customizable Widgets", "Drag & Drop", "Multiple Data Sources", "Collaboration"],
    category: "Dashboards",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-dashboard-builder"
  },
  {
    name: "AI Report Generator Pro",
    description: "AI-powered report generation with automated insights and professional formatting",
    price: "$179/mo",
    features: ["Automated Insights", "Professional Formatting", "Multiple Templates", "Scheduled Reports", "Integration"],
    category: "Reporting",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-report-generator"
  },
  {
    name: "AI White Paper Creator Pro",
    description: "AI-powered white paper creation with research integration and professional formatting",
    price: "$299/mo",
    features: ["Research Integration", "Professional Formatting", "Template Library", "Citation Management", "Collaboration"],
    category: "Content Creation",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-white-paper-creator"
  },
  {
    name: "AI Case Study Generator Pro",
    description: "AI-powered case study creation with data analysis and compelling storytelling",
    price: "$199/mo",
    features: ["Data Analysis", "Storytelling", "Template Library", "Visual Elements", "Export Options"],
    category: "Content Creation",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-case-study-generator"
  },
  {
    name: "AI Press Release Writer Pro",
    description: "AI-powered press release creation with media targeting and distribution",
    price: "$149/mo",
    features: ["Media Targeting", "Distribution", "Template Library", "SEO Optimization", "Analytics"],
    category: "PR",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-press-release-writer"
  },
  {
    name: "AI Newsletter Creator Pro",
    description: "AI-powered newsletter creation with content curation and subscriber management",
    price: "$129/mo",
    features: ["Content Curation", "Subscriber Management", "Template Library", "Analytics", "Automation"],
    category: "Email Marketing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-newsletter-creator"
  },
  {
    name: "AI Blog Post Generator Pro",
    description: "AI-powered blog post creation with SEO optimization and content planning",
    price: "$179/mo",
    features: ["SEO Optimization", "Content Planning", "Topic Research", "Image Integration", "Publishing"],
    category: "Blogging",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-blog-post-generator"
  },
  {
    name: "AI Social Media Content Pro",
    description: "AI-powered social media content creation with platform optimization and scheduling",
    price: "$199/mo",
    features: ["Platform Optimization", "Scheduling", "Hashtag Research", "Image Creation", "Analytics"],
    category: "Social Media",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-social-media-content"
  },
  {
    name: "AI Influencer Marketing Pro",
    description: "AI-powered influencer marketing platform with campaign management and ROI tracking",
    price: "$299/mo",
    features: ["Campaign Management", "ROI Tracking", "Influencer Discovery", "Content Collaboration", "Analytics"],
    category: "Marketing",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-influencer-marketing"
  },
  {
    name: "AI Affiliate Marketing Pro",
    description: "AI-powered affiliate marketing platform with performance tracking and optimization",
    price: "$249/mo",
    features: ["Performance Tracking", "Optimization", "Commission Management", "Reporting", "Integration"],
    category: "Marketing",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-affiliate-marketing"
  },
  {
    name: "AI PPC Campaign Manager Pro",
    description: "AI-powered PPC campaign management with bid optimization and performance tracking",
    price: "$399/mo",
    features: ["Bid Optimization", "Performance Tracking", "A/B Testing", "Budget Management", "ROI Analysis"],
    category: "PPC",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-ppc-campaign-manager"
  },
  {
    name: "AI SEO Audit Pro",
    description: "AI-powered SEO audit with technical analysis and optimization recommendations",
    price: "$199/mo",
    features: ["Technical Analysis", "Optimization Recommendations", "Competitor Analysis", "Rank Tracking", "Reporting"],
    category: "SEO",
    popular: true,
    icon: Search,
    link: "https://ziontechgroup.com/ai-seo-audit"
  },
  {
    name: "AI Keyword Research Pro",
    description: "AI-powered keyword research with trend analysis and competition insights",
    price: "$149/mo",
    features: ["Trend Analysis", "Competition Insights", "Long-tail Keywords", "Search Volume", "Difficulty Analysis"],
    category: "SEO",
    popular: true,
    icon: Search,
    link: "https://ziontechgroup.com/ai-keyword-research"
  },
  {
    name: "AI Link Building Pro",
    description: "AI-powered link building with outreach automation and relationship management",
    price: "$299/mo",
    features: ["Outreach Automation", "Relationship Management", "Link Quality Analysis", "Campaign Tracking", "Reporting"],
    category: "SEO",
    popular: true,
    icon: Link,
    link: "https://ziontechgroup.com/ai-link-building"
  },
  {
    name: "AI Local SEO Pro",
    description: "AI-powered local SEO optimization with Google My Business management and review monitoring",
    price: "$179/mo",
    features: ["Google My Business Management", "Review Monitoring", "Local Citations", "NAP Consistency", "Analytics"],
    category: "Local SEO",
    popular: true,
    icon: MapPin,
    link: "https://ziontechgroup.com/ai-local-seo"
  },
  {
    name: "AI E-commerce Optimizer Pro",
    description: "AI-powered e-commerce optimization with conversion tracking and A/B testing",
    price: "$399/mo",
    features: ["Conversion Tracking", "A/B Testing", "Product Optimization", "Checkout Analysis", "Revenue Optimization"],
    category: "E-commerce",
    popular: true,
    icon: ShoppingCart,
    link: "https://ziontechgroup.com/ai-ecommerce-optimizer"
  },
  {
    name: "AI Product Description Generator Pro",
    description: "AI-powered product description generation with SEO optimization and conversion focus",
    price: "$99/mo",
    features: ["SEO Optimization", "Conversion Focus", "Bulk Generation", "Template Library", "Integration"],
    category: "E-commerce",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-product-description-generator"
  },
  {
    name: "AI Inventory Optimizer Pro",
    description: "AI-powered inventory optimization with demand forecasting and stock management",
    price: "$299/mo",
    features: ["Demand Forecasting", "Stock Management", "Reorder Alerts", "Cost Optimization", "Analytics"],
    category: "Inventory",
    popular: true,
    icon: Package,
    link: "https://ziontechgroup.com/ai-inventory-optimizer"
  },
  {
    name: "AI Price Optimization Pro",
    description: "AI-powered price optimization with dynamic pricing and competitor analysis",
    price: "$399/mo",
    features: ["Dynamic Pricing", "Competitor Analysis", "Demand Elasticity", "Profit Optimization", "A/B Testing"],
    category: "Pricing",
    popular: true,
    icon: DollarSign,
    link: "https://ziontechgroup.com/ai-price-optimization"
  },
  {
    name: "AI Customer Segmentation Pro",
    description: "AI-powered customer segmentation with behavioral analysis and targeting",
    price: "$249/mo",
    features: ["Behavioral Analysis", "Targeting", "Persona Creation", "Campaign Optimization", "Analytics"],
    category: "Customer Analytics",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-customer-segmentation"
  },
  {
    name: "AI Churn Prediction Pro",
    description: "AI-powered churn prediction with intervention strategies and retention campaigns",
    price: "$299/mo",
    features: ["Churn Prediction", "Intervention Strategies", "Retention Campaigns", "Risk Scoring", "Analytics"],
    category: "Customer Retention",
    popular: true,
    icon: TrendingDown,
    link: "https://ziontechgroup.com/ai-churn-prediction"
  },
  {
    name: "AI Customer Lifetime Value Pro",
    description: "AI-powered CLV calculation with predictive modeling and optimization strategies",
    price: "$199/mo",
    features: ["CLV Calculation", "Predictive Modeling", "Optimization Strategies", "Segmentation", "Reporting"],
    category: "Customer Analytics",
    popular: true,
    icon: DollarSign,
    link: "https://ziontechgroup.com/ai-customer-lifetime-value"
  },
  {
    name: "AI Recommendation Engine Pro",
    description: "AI-powered recommendation engine with personalization and A/B testing",
    price: "$399/mo",
    features: ["Personalization", "A/B Testing", "Real-time Recommendations", "Multi-channel", "Analytics"],
    category: "Recommendations",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-recommendation-engine"
  },
  {
    name: "AI Personalization Engine Pro",
    description: "AI-powered personalization engine with real-time adaptation and multi-channel support",
    price: "$499/mo",
    features: ["Real-time Adaptation", "Multi-channel Support", "Behavioral Learning", "A/B Testing", "Analytics"],
    category: "Personalization",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-personalization-engine"
  },
  {
    name: "AI A/B Testing Pro",
    description: "AI-powered A/B testing platform with statistical significance and automated optimization",
    price: "$299/mo",
    features: ["Statistical Significance", "Automated Optimization", "Multi-variate Testing", "Real-time Results", "Integration"],
    category: "Testing",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-ab-testing"
  },
  {
    name: "AI Conversion Rate Optimizer Pro",
    description: "AI-powered conversion rate optimization with heatmap analysis and user behavior tracking",
    price: "$399/mo",
    features: ["Heatmap Analysis", "User Behavior Tracking", "Automated Testing", "Optimization Suggestions", "Analytics"],
    category: "CRO",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-conversion-rate-optimizer"
  },
  {
    name: "AI Landing Page Builder Pro",
    description: "AI-powered landing page builder with conversion optimization and A/B testing",
    price: "$199/mo",
    features: ["Conversion Optimization", "A/B Testing", "Template Library", "Drag & Drop", "Analytics"],
    category: "Landing Pages",
    popular: true,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-landing-page-builder"
  },
  {
    name: "AI Sales Funnel Optimizer Pro",
    description: "AI-powered sales funnel optimization with conversion tracking and automated improvements",
    price: "$349/mo",
    features: ["Conversion Tracking", "Automated Improvements", "Funnel Analysis", "Optimization Suggestions", "Analytics"],
    category: "Sales Funnels",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-sales-funnel-optimizer"
  },
  {
    name: "AI Lead Scoring Pro",
    description: "AI-powered lead scoring with behavioral analysis and automated qualification",
    price: "$249/mo",
    features: ["Behavioral Analysis", "Automated Qualification", "Scoring Models", "Integration", "Analytics"],
    category: "Lead Management",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-lead-scoring"
  },
  {
    name: "AI Lead Nurturing Pro",
    description: "AI-powered lead nurturing with automated campaigns and personalized content",
    price: "$299/mo",
    features: ["Automated Campaigns", "Personalized Content", "Behavioral Triggers", "Multi-channel", "Analytics"],
    category: "Lead Management",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-lead-nurturing"
  },
  {
    name: "AI Sales Forecasting Pro",
    description: "AI-powered sales forecasting with predictive analytics and trend analysis",
    price: "$399/mo",
    features: ["Predictive Analytics", "Trend Analysis", "Revenue Forecasting", "Pipeline Analysis", "Reporting"],
    category: "Sales Analytics",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-sales-forecasting"
  },
  {
    name: "AI Sales Coaching Pro",
    description: "AI-powered sales coaching with performance analysis and improvement recommendations",
    price: "$199/mo",
    features: ["Performance Analysis", "Improvement Recommendations", "Skill Assessment", "Training Modules", "Progress Tracking"],
    category: "Sales Training",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-sales-coaching"
  },
  {
    name: "AI Contract Management Pro",
    description: "AI-powered contract management with automated review and compliance tracking",
    price: "$299/mo",
    features: ["Automated Review", "Compliance Tracking", "Renewal Alerts", "Risk Assessment", "Integration"],
    category: "Contract Management",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-contract-management"
  },
  {
    name: "AI Proposal Generator Pro",
    description: "AI-powered proposal generation with template library and customization options",
    price: "$179/mo",
    features: ["Template Library", "Customization Options", "Pricing Calculators", "Client Management", "Analytics"],
    category: "Proposals",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-proposal-generator"
  },
  {
    name: "AI Quote Generator Pro",
    description: "AI-powered quote generation with pricing optimization and approval workflows",
    price: "$149/mo",
    features: ["Pricing Optimization", "Approval Workflows", "Template Library", "Client Portal", "Integration"],
    category: "Quotes",
    popular: true,
    icon: DollarSign,
    link: "https://ziontechgroup.com/ai-quote-generator"
  },
  {
    name: "AI Invoice Generator Pro",
    description: "AI-powered invoice generation with automated billing and payment tracking",
    price: "$99/mo",
    features: ["Automated Billing", "Payment Tracking", "Recurring Invoices", "Client Portal", "Integration"],
    category: "Invoicing",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-invoice-generator"
  },
  {
    name: "AI Payment Processor Pro",
    description: "AI-powered payment processing with fraud detection and optimization",
    price: "$199/mo",
    features: ["Fraud Detection", "Optimization", "Multiple Payment Methods", "Recurring Billing", "Analytics"],
    category: "Payments",
    popular: true,
    icon: CreditCard,
    link: "https://ziontechgroup.com/ai-payment-processor"
  },
  {
    name: "AI Accounting Assistant Pro",
    description: "AI-powered accounting assistant with automated bookkeeping and financial reporting",
    price: "$299/mo",
    features: ["Automated Bookkeeping", "Financial Reporting", "Tax Preparation", "Expense Tracking", "Integration"],
    category: "Accounting",
    popular: true,
    icon: Calculator,
    link: "https://ziontechgroup.com/ai-accounting-assistant"
  },
  {
    name: "AI Tax Optimizer Pro",
    description: "AI-powered tax optimization with deduction identification and compliance monitoring",
    price: "$199/mo",
    features: ["Deduction Identification", "Compliance Monitoring", "Tax Planning", "Document Management", "Integration"],
    category: "Tax",
    popular: true,
    icon: Calculator,
    link: "https://ziontechgroup.com/ai-tax-optimizer"
  },
  {
    name: "AI Budget Planner Pro",
    description: "AI-powered budget planning with expense tracking and financial goal management",
    price: "$149/mo",
    features: ["Expense Tracking", "Financial Goal Management", "Budget Alerts", "Investment Tracking", "Reporting"],
    category: "Budgeting",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-budget-planner"
  },
  {
    name: "AI Investment Advisor Pro",
    description: "AI-powered investment advice with portfolio optimization and risk assessment",
    price: "$399/mo",
    features: ["Portfolio Optimization", "Risk Assessment", "Market Analysis", "Rebalancing", "Reporting"],
    category: "Investments",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-investment-advisor"
  },
  {
    name: "AI Retirement Planner Pro",
    description: "AI-powered retirement planning with goal setting and optimization strategies",
    price: "$199/mo",
    features: ["Goal Setting", "Optimization Strategies", "Scenario Planning", "Social Security Analysis", "Reporting"],
    category: "Retirement",
    popular: true,
    icon: Calendar,
    link: "https://ziontechgroup.com/ai-retirement-planner"
  },
  {
    name: "AI Insurance Optimizer Pro",
    description: "AI-powered insurance optimization with coverage analysis and cost comparison",
    price: "$149/mo",
    features: ["Coverage Analysis", "Cost Comparison", "Risk Assessment", "Policy Management", "Claims Tracking"],
    category: "Insurance",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-insurance-optimizer"
  },
  {
    name: "AI Estate Planner Pro",
    description: "AI-powered estate planning with will generation and asset management",
    price: "$299/mo",
    features: ["Will Generation", "Asset Management", "Beneficiary Planning", "Tax Optimization", "Document Management"],
    category: "Estate Planning",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-estate-planner"
  },
  {
    name: "AI Loan Optimizer Pro",
    description: "AI-powered loan optimization with rate comparison and refinancing analysis",
    price: "$179/mo",
    features: ["Rate Comparison", "Refinancing Analysis", "Payment Optimization", "Credit Monitoring", "Application Assistance"],
    category: "Loans",
    popular: true,
    icon: DollarSign,
    link: "https://ziontechgroup.com/ai-loan-optimizer"
  },
  {
    name: "AI Credit Score Monitor Pro",
    description: "AI-powered credit score monitoring with improvement recommendations and alerts",
    price: "$99/mo",
    features: ["Score Monitoring", "Improvement Recommendations", "Alerts", "Credit Report Analysis", "Identity Protection"],
    category: "Credit",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-credit-score-monitor"
  },
  {
    name: "AI Debt Consolidation Pro",
    description: "AI-powered debt consolidation with payment optimization and strategy planning",
    price: "$199/mo",
    features: ["Payment Optimization", "Strategy Planning", "Debt Analysis", "Consolidation Options", "Progress Tracking"],
    category: "Debt Management",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-debt-consolidation"
  },
  {
    name: "AI Savings Optimizer Pro",
    description: "AI-powered savings optimization with goal tracking and investment recommendations",
    price: "$149/mo",
    features: ["Goal Tracking", "Investment Recommendations", "Savings Analysis", "Automated Transfers", "Reporting"],
    category: "Savings",
    popular: true,
    icon: PiggyBank,
    link: "https://ziontechgroup.com/ai-savings-optimizer"
  },
  {
    name: "AI Expense Categorizer Pro",
    description: "AI-powered expense categorization with receipt scanning and budget tracking",
    price: "$79/mo",
    features: ["Receipt Scanning", "Budget Tracking", "Expense Analysis", "Tax Preparation", "Integration"],
    category: "Expense Management",
    popular: true,
    icon: Calculator,
    link: "https://ziontechgroup.com/ai-expense-categorizer"
  },
  {
    name: "AI Receipt Manager Pro",
    description: "AI-powered receipt management with OCR scanning and expense tracking",
    price: "$89/mo",
    features: ["OCR Scanning", "Expense Tracking", "Tax Preparation", "Cloud Storage", "Integration"],
    category: "Receipt Management",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-receipt-manager"
  },
  {
    name: "AI Mileage Tracker Pro",
    description: "AI-powered mileage tracking with automatic detection and tax optimization",
    price: "$69/mo",
    features: ["Automatic Detection", "Tax Optimization", "Trip Classification", "Reporting", "Integration"],
    category: "Mileage Tracking",
    popular: true,
    icon: Car,
    link: "https://ziontechgroup.com/ai-mileage-tracker"
  },
  {
    name: "AI Time Clock Pro",
    description: "AI-powered time tracking with facial recognition and automated payroll",
    price: "$129/mo",
    features: ["Facial Recognition", "Automated Payroll", "Geofencing", "Overtime Calculation", "Reporting"],
    category: "Time Tracking",
    popular: true,
    icon: Clock,
    link: "https://ziontechgroup.com/ai-time-clock"
  },
  {
    name: "AI Shift Scheduler Pro",
    description: "AI-powered shift scheduling with optimization and conflict resolution",
    price: "$199/mo",
    features: ["Optimization", "Conflict Resolution", "Employee Preferences", "Labor Law Compliance", "Analytics"],
    category: "Scheduling",
    popular: true,
    icon: Calendar,
    link: "https://ziontechgroup.com/ai-shift-scheduler"
  },
  {
    name: "AI Attendance Tracker Pro",
    description: "AI-powered attendance tracking with facial recognition and automated reporting",
    price: "$149/mo",
    features: ["Facial Recognition", "Automated Reporting", "Absence Management", "Integration", "Analytics"],
    category: "Attendance",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-attendance-tracker"
  },
  {
    name: "AI Performance Tracker Pro",
    description: "AI-powered performance tracking with goal management and feedback automation",
    price: "$249/mo",
    features: ["Goal Management", "Feedback Automation", "Performance Analytics", "Development Planning", "Integration"],
    category: "Performance Management",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-performance-tracker"
  },
  {
    name: "AI Goal Setting Pro",
    description: "AI-powered goal setting with SMART goal creation and progress tracking",
    price: "$99/mo",
    features: ["SMART Goal Creation", "Progress Tracking", "Milestone Management", "Team Collaboration", "Analytics"],
    category: "Goal Management",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-goal-setting"
  },
  {
    name: "AI Task Manager Pro",
    description: "AI-powered task management with prioritization and automated scheduling",
    price: "$149/mo",
    features: ["Prioritization", "Automated Scheduling", "Dependency Management", "Team Collaboration", "Analytics"],
    category: "Task Management",
    popular: true,
    icon: CheckCircle,
    link: "https://ziontechgroup.com/ai-task-manager"
  },
  {
    name: "AI Project Tracker Pro",
    description: "AI-powered project tracking with risk assessment and resource optimization",
    price: "$299/mo",
    features: ["Risk Assessment", "Resource Optimization", "Timeline Management", "Budget Tracking", "Reporting"],
    category: "Project Management",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-project-tracker"
  },
  {
    name: "AI Resource Planner Pro",
    description: "AI-powered resource planning with capacity optimization and allocation",
    price: "$249/mo",
    features: ["Capacity Optimization", "Allocation", "Skill Matching", "Availability Tracking", "Analytics"],
    category: "Resource Management",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-resource-planner"
  },
  {
    name: "AI Risk Manager Pro",
    description: "AI-powered risk management with assessment and mitigation strategies",
    price: "$399/mo",
    features: ["Risk Assessment", "Mitigation Strategies", "Monitoring", "Reporting", "Compliance"],
    category: "Risk Management",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-risk-manager"
  },
  {
    name: "AI Compliance Monitor Pro",
    description: "AI-powered compliance monitoring with automated reporting and alerts",
    price: "$299/mo",
    features: ["Automated Reporting", "Alerts", "Policy Management", "Audit Support", "Integration"],
    category: "Compliance",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-compliance-monitor"
  },
  {
    name: "AI Audit Assistant Pro",
    description: "AI-powered audit assistance with document analysis and compliance checking",
    price: "$349/mo",
    features: ["Document Analysis", "Compliance Checking", "Evidence Collection", "Report Generation", "Integration"],
    category: "Auditing",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-audit-assistant"
  },
  {
    name: "AI Policy Manager Pro",
    description: "AI-powered policy management with version control and approval workflows",
    price: "$199/mo",
    features: ["Version Control", "Approval Workflows", "Distribution Management", "Compliance Tracking", "Analytics"],
    category: "Policy Management",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-policy-manager"
  },
  {
    name: "AI Training Manager Pro",
    description: "AI-powered training management with personalized learning paths and progress tracking",
    price: "$249/mo",
    features: ["Personalized Learning", "Progress Tracking", "Skill Assessment", "Certification Management", "Analytics"],
    category: "Training",
    popular: true,
    icon: GraduationCap,
    link: "https://ziontechgroup.com/ai-training-manager"
  },
  {
    name: "AI Knowledge Base Pro",
    description: "AI-powered knowledge base with intelligent search and content management",
    price: "$179/mo",
    features: ["Intelligent Search", "Content Management", "Version Control", "Collaboration", "Analytics"],
    category: "Knowledge Management",
    popular: true,
    icon: BookOpen,
    link: "https://ziontechgroup.com/ai-knowledge-base"
  },
  {
    name: "AI Documentation Generator Pro",
    description: "AI-powered documentation generation with automated updates and formatting",
    price: "$199/mo",
    features: ["Automated Updates", "Formatting", "Template Library", "Version Control", "Collaboration"],
    category: "Documentation",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-documentation-generator"
  },
  {
    name: "AI API Documentation Pro",
    description: "AI-powered API documentation with interactive examples and testing",
    price: "$149/mo",
    features: ["Interactive Examples", "Testing", "Code Generation", "Version Management", "Integration"],
    category: "API Documentation",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-api-documentation"
  },
  {
    name: "AI Code Documentation Pro",
    description: "AI-powered code documentation with automated comments and examples",
    price: "$129/mo",
    features: ["Automated Comments", "Examples", "Code Analysis", "Integration", "Version Control"],
    category: "Code Documentation",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-code-documentation"
  },
  {
    name: "AI Technical Writer Pro",
    description: "AI-powered technical writing with content generation and editing assistance",
    price: "$179/mo",
    features: ["Content Generation", "Editing Assistance", "Template Library", "Style Guide", "Collaboration"],
    category: "Technical Writing",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-technical-writer"
  },
  {
    name: "AI User Manual Generator Pro",
    description: "AI-powered user manual generation with step-by-step instructions and screenshots",
    price: "$199/mo",
    features: ["Step-by-step Instructions", "Screenshots", "Interactive Elements", "Multi-format Export", "Updates"],
    category: "User Manuals",
    popular: true,
    icon: BookOpen,
    link: "https://ziontechgroup.com/ai-user-manual-generator"
  },
  {
    name: "AI Help Desk Pro",
    description: "AI-powered help desk with automated ticket routing and resolution",
    price: "$299/mo",
    features: ["Automated Routing", "Resolution", "Knowledge Base Integration", "Escalation Management", "Analytics"],
    category: "Help Desk",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-help-desk"
  },
  {
    name: "AI Ticket Manager Pro",
    description: "AI-powered ticket management with prioritization and automated responses",
    price: "$199/mo",
    features: ["Prioritization", "Automated Responses", "SLA Management", "Escalation", "Analytics"],
    category: "Ticket Management",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-ticket-manager"
  },
  {
    name: "AI Customer Feedback Pro",
    description: "AI-powered customer feedback analysis with sentiment analysis and action items",
    price: "$179/mo",
    features: ["Sentiment Analysis", "Action Items", "Trend Analysis", "Response Generation", "Integration"],
    category: "Customer Feedback",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-customer-feedback"
  },
  {
    name: "AI Survey Analyzer Pro",
    description: "AI-powered survey analysis with statistical insights and visualization",
    price: "$149/mo",
    features: ["Statistical Insights", "Visualization", "Trend Analysis", "Report Generation", "Integration"],
    category: "Survey Analysis",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-survey-analyzer"
  },
  {
    name: "AI NPS Analyzer Pro",
    description: "AI-powered NPS analysis with driver identification and improvement recommendations",
    price: "$129/mo",
    features: ["Driver Identification", "Improvement Recommendations", "Trend Analysis", "Segmentation", "Reporting"],
    category: "NPS Analysis",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-nps-analyzer"
  },
  {
    name: "AI Customer Journey Pro",
    description: "AI-powered customer journey mapping with touchpoint analysis and optimization",
    price: "$299/mo",
    features: ["Touchpoint Analysis", "Optimization", "Persona Mapping", "Journey Visualization", "Analytics"],
    category: "Customer Journey",
    popular: true,
    icon: Map,
    link: "https://ziontechgroup.com/ai-customer-journey"
  },
  {
    name: "AI Touchpoint Optimizer Pro",
    description: "AI-powered touchpoint optimization with conversion tracking and improvement suggestions",
    price: "$249/mo",
    features: ["Conversion Tracking", "Improvement Suggestions", "A/B Testing", "Personalization", "Analytics"],
    category: "Touchpoint Optimization",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-touchpoint-optimizer"
  },
  {
    name: "AI Customer Health Score Pro",
    description: "AI-powered customer health scoring with risk prediction and intervention strategies",
    price: "$199/mo",
    features: ["Risk Prediction", "Intervention Strategies", "Health Monitoring", "Alert System", "Analytics"],
    category: "Customer Health",
    popular: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-customer-health-score"
  },
  {
    name: "AI Customer Success Pro",
    description: "AI-powered customer success management with automated workflows and insights",
    price: "$349/mo",
    features: ["Automated Workflows", "Insights", "Success Metrics", "Intervention Triggers", "Analytics"],
    category: "Customer Success",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-customer-success"
  },
  {
    name: "AI Account Manager Pro",
    description: "AI-powered account management with relationship tracking and opportunity identification",
    price: "$299/mo",
    features: ["Relationship Tracking", "Opportunity Identification", "Communication Management", "Task Automation", "Analytics"],
    category: "Account Management",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-account-manager"
  },
  {
    name: "AI Relationship Manager Pro",
    description: "AI-powered relationship management with communication optimization and sentiment tracking",
    price: "$249/mo",
    features: ["Communication Optimization", "Sentiment Tracking", "Meeting Scheduling", "Follow-up Automation", "Analytics"],
    category: "Relationship Management",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-relationship-manager"
  },
  {
    name: "AI Communication Optimizer Pro",
    description: "AI-powered communication optimization with tone analysis and response suggestions",
    price: "$179/mo",
    features: ["Tone Analysis", "Response Suggestions", "Language Optimization", "Cultural Adaptation", "Analytics"],
    category: "Communication",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-communication-optimizer"
  },
  {
    name: "AI Email Optimizer Pro",
    description: "AI-powered email optimization with subject line testing and content improvement",
    price: "$149/mo",
    features: ["Subject Line Testing", "Content Improvement", "Send Time Optimization", "A/B Testing", "Analytics"],
    category: "Email Optimization",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-optimizer"
  },
  {
    name: "AI Subject Line Generator Pro",
    description: "AI-powered subject line generation with A/B testing and performance optimization",
    price: "$99/mo",
    features: ["A/B Testing", "Performance Optimization", "Template Library", "Personalization", "Analytics"],
    category: "Email Marketing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-subject-line-generator"
  },
  {
    name: "AI Email Template Pro",
    description: "AI-powered email template creation with responsive design and personalization",
    price: "$129/mo",
    features: ["Responsive Design", "Personalization", "Template Library", "A/B Testing", "Analytics"],
    category: "Email Templates",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-template"
  },
  {
    name: "AI Email Sequence Pro",
    description: "AI-powered email sequence creation with automation and personalization",
    price: "$199/mo",
    features: ["Automation", "Personalization", "Behavioral Triggers", "A/B Testing", "Analytics"],
    category: "Email Sequences",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-sequence"
  },
  {
    name: "AI Email Analytics Pro",
    description: "AI-powered email analytics with performance insights and optimization recommendations",
    price: "$179/mo",
    features: ["Performance Insights", "Optimization Recommendations", "Predictive Analytics", "Segmentation", "Reporting"],
    category: "Email Analytics",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-email-analytics"
  },
  {
    name: "AI Email Deliverability Pro",
    description: "AI-powered email deliverability optimization with reputation monitoring and improvement",
    price: "$249/mo",
    features: ["Reputation Monitoring", "Improvement", "Blacklist Monitoring", "Authentication", "Analytics"],
    category: "Email Deliverability",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-deliverability"
  },
  {
    name: "AI Email List Manager Pro",
    description: "AI-powered email list management with segmentation and hygiene optimization",
    price: "$199/mo",
    features: ["Segmentation", "Hygiene Optimization", "Duplicate Detection", "Suppression Management", "Analytics"],
    category: "List Management",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-email-list-manager"
  },
  {
    name: "AI Email Automation Pro",
    description: "AI-powered email automation with behavioral triggers and personalization",
    price: "$299/mo",
    features: ["Behavioral Triggers", "Personalization", "Workflow Automation", "A/B Testing", "Analytics"],
    category: "Email Automation",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-email-automation"
  },
  {
    name: "AI Email Personalization Pro",
    description: "AI-powered email personalization with dynamic content and behavioral targeting",
    price: "$249/mo",
    features: ["Dynamic Content", "Behavioral Targeting", "Product Recommendations", "Location-based", "Analytics"],
    category: "Email Personalization",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-email-personalization"
  },
  {
    name: "AI Email Testing Pro",
    description: "AI-powered email testing with automated testing and optimization",
    price: "$149/mo",
    features: ["Automated Testing", "Optimization", "Cross-client Testing", "Performance Testing", "Analytics"],
    category: "Email Testing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-testing"
  },
  {
    name: "AI Email Compliance Pro",
    description: "AI-powered email compliance with GDPR, CAN-SPAM, and other regulations",
    price: "$199/mo",
    features: ["GDPR Compliance", "CAN-SPAM Compliance", "Consent Management", "Data Protection", "Audit Trail"],
    category: "Email Compliance",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-email-compliance"
  },
  {
    name: "AI Email Security Pro",
    description: "AI-powered email security with threat detection and protection",
    price: "$299/mo",
    features: ["Threat Detection", "Protection", "Phishing Detection", "Malware Scanning", "Analytics"],
    category: "Email Security",
    popular: true,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-email-security"
  },
  {
    name: "AI Email Backup Pro",
    description: "AI-powered email backup with automated archiving and recovery",
    price: "$99/mo",
    features: ["Automated Archiving", "Recovery", "Version Control", "Search", "Integration"],
    category: "Email Backup",
    popular: true,
    icon: Database,
    link: "https://ziontechgroup.com/ai-email-backup"
  },
  {
    name: "AI Email Migration Pro",
    description: "AI-powered email migration with automated transfer and validation",
    price: "$199/mo",
    features: ["Automated Transfer", "Validation", "Data Integrity", "Rollback Support", "Analytics"],
    category: "Email Migration",
    popular: true,
    icon: ArrowRight,
    link: "https://ziontechgroup.com/ai-email-migration"
  },
  {
    name: "AI Email Integration Pro",
    description: "AI-powered email integration with CRM, marketing tools, and other platforms",
    price: "$249/mo",
    features: ["CRM Integration", "Marketing Tools", "API Access", "Custom Connectors", "Analytics"],
    category: "Email Integration",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-email-integration"
  },
  {
    name: "AI Email Monitoring Pro",
    description: "AI-powered email monitoring with performance tracking and alerting",
    price: "$179/mo",
    features: ["Performance Tracking", "Alerting", "Uptime Monitoring", "Error Detection", "Analytics"],
    category: "Email Monitoring",
    popular: true,
    icon: Activity,
    link: "https://ziontechgroup.com/ai-email-monitoring"
  },
  {
    name: "AI Email Reporting Pro",
    description: "AI-powered email reporting with automated insights and visualization",
    price: "$149/mo",
    features: ["Automated Insights", "Visualization", "Custom Reports", "Scheduled Reports", "Export Options"],
    category: "Email Reporting",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-email-reporting"
  },
  {
    name: "AI Email Intelligence Pro",
    description: "AI-powered email intelligence with predictive analytics and optimization",
    price: "$399/mo",
    features: ["Predictive Analytics", "Optimization", "Behavioral Analysis", "Recommendations", "Insights"],
    category: "Email Intelligence",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-email-intelligence"
  },
  {
    name: "AI Email Optimization Pro",
    description: "AI-powered email optimization with continuous improvement and testing",
    price: "$299/mo",
    features: ["Continuous Improvement", "Testing", "Performance Optimization", "A/B Testing", "Analytics"],
    category: "Email Optimization",
    popular: true,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-email-optimization"
  }
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    content: "Zion Tech Group's AI solutions transformed our operations completely. We achieved 300% ROI in just 6 months and reduced operational costs by 70%. Their AI workflow automation is game-changing.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLabs",
    content: "The AI customer support bot they built for us handles 90% of inquiries automatically. Our customer satisfaction increased by 40% while reducing support costs by 60%. Outstanding work!",
    avatar: "MC"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer",
    company: "MedTech Innovations",
    content: "Their AI healthcare solutions are revolutionary. The diagnostic accuracy improved by 35% and patient processing time decreased by 50%. This is the future of healthcare technology.",
    avatar: "ER"
  }
];

// Stats data
const stats: Stat[] = [
  {
    number: "500+",
    label: "Happy Clients",
    icon: Users
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
    number: "300%",
    label: "Average ROI",
    icon: TrendingUp
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
});

HomePage.displayName = 'HomePage';

export default HomePage;
