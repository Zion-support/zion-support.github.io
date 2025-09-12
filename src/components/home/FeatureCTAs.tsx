
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Brain,
  Server,
  TrendingUp
=======
  Brain,
  Shield,
  Cloud
=======
  Sparkles
=======
  Server
=======
  TrendingUp,
  Cloud
=======
  BarChart3
=======
  Shield,
  Cloud,
  Heart,
  DollarSign,
  GraduationCap,
  Globe
=======
  Brain,
  Shield,
  Globe,
  TrendingUp,
  Sparkles,
  Lock
} from "lucide-react";
=======
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Star,
  Users as UsersIcon,
  Zap as ZapIcon
} from 'lucide-react';
=======
  Sparkles, 
  Brain, 
  Shield, 
  Code, 
  Database, 
  BarChart3, 
  Link as LinkIcon, 
  UserCheck,
  ArrowRight,
  Zap,
  Star
} from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Users, 
  Briefcase, 
  Building,
  ArrowRight,
  Sparkles
} from 'lucide-react';
=======
  Brain,
  Cloud,
  Shield,
  TrendingUp,
  Bot,
  TrendingUp,
  FileText,
  Video,
  BarChart3,
  AlertTriangle,
  Eye,
  PieChart
  BarChart3,
  PenTool,
  Shield,
  Cloud
} from "lucide-react";
import GitBranch from "lucide-react/dist/esm/icons/git-branch";
import Target from "lucide-react/dist/esm/icons/target";

const ctaItems = [
  {
    icon: Zap,
    title: "Launch Your Project",
    description: "Get started with AI-powered project matching and expert talent",
    action: "Start Project",
    href: "/match",
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "bg-zion-purple/10",
    borderColor: "border-zion-purple/30"
  },
  {
    icon: Users,
    title: "Join as Talent",
    description: "Showcase your skills and connect with global opportunities",
    action: "Create Profile",
    href: "/signup",
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/10",
    borderColor: "border-zion-cyan/30"
  },
  {
    icon: Briefcase,
    title: "Hire AI Experts",
    description: "Access specialized AI talent for your next breakthrough",
    action: "Browse AI Talent",
    href: "/zion-hire-ai",
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "bg-zion-blue/10",
    borderColor: "border-zion-blue/30"
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Custom solutions for large organizations and teams",
    action: "Learn More",
    href: "/enterprise",
    color: "from-zion-green to-zion-green-dark",
    bgColor: "bg-zion-green/10",
    borderColor: "border-zion-green/30"
  }
];

const featuredServices = [
  {
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content creation with SEO optimization and brand voice customization.",
    category: "AI Services",
    icon: <Brain className="w-8 h-8" />,
    link: "/micro-saas-services?category=AI",
    color: "from-purple-500 to-pink-500",
    rating: 4.8,
    price: "From $99/month"
  },
  {
    title: "Cybersecurity Monitoring",
    description: "24/7 threat detection with AI-powered analysis and automated response systems.",
    category: "Security",
    icon: <Shield className="w-8 h-8" />,
    link: "/micro-saas-services?category=Security",
    color: "from-red-500 to-pink-500",
    rating: 4.9,
    price: "From $399/month"
  },
  {
    title: "Cloud Migration Suite",
    description: "Comprehensive cloud migration with automated tools and cost optimization.",
    category: "IT Solutions",
    icon: <Database className="w-8 h-8" />,
    link: "/micro-saas-services?category=IT",
    color: "from-blue-500 to-cyan-500",
    rating: 4.6,
    price: "From $299/month"
  },
  {
    title: "Workflow Automation",
    description: "Intelligent business process automation with AI-powered decision making.",
    category: "Automation",
    icon: <Workflow className="w-8 h-8" />,
    link: "/micro-saas-services?category=Automation",
    color: "from-indigo-500 to-purple-500",
    rating: 4.8,
    price: "From $179/month"
  }
];

const ctaFeatures = [
  {
    icon: Zap,
    title: 'Launch Your Project',
    description: 'Get started with AI-powered project matching and find the perfect team in minutes.',
    action: 'Start Project',
    href: '/match',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    borderColor: 'border-zion-purple/30',
    gradient: 'from-zion-purple/20 to-zion-purple/40'
  },
  {
    icon: Users,
    title: 'Hire Top Talent',
    description: 'Access a global network of verified professionals with proven track records.',
    action: 'Browse Talent',
    href: '/talent',
    color: 'from-zion-cyan to-zion-cyan-dark',
    bgColor: 'bg-zion-cyan/10',
    borderColor: 'border-zion-cyan/30',
    gradient: 'from-zion-cyan/20 to-zion-cyan/40'
  },
  {
    icon: TrendingUp,
    title: 'Scale Your Business',
    description: 'Enterprise solutions designed to grow with your organization\'s needs.',
    action: 'Enterprise Plan',
    href: '/enterprise',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/30',
    gradient: 'from-zion-blue/20 to-zion-blue/40'
  }
];

const highlights = [
  { icon: Users, text: '50K+ Active Users', color: 'text-zion-cyan' },
  { icon: Star, text: '4.9/5 Rating', color: 'text-zion-purple' },
  { icon: Zap, text: '<15min Response', color: 'text-green-400' }
];

=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, Mail, Globe, Brain, Shield, Zap, Database, Cloud, Lock, Leaf, DollarSign, Eye, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Matching",
    description: "Advanced AI algorithms connect you with the perfect tech professionals and services",
    details: "Our intelligent matching system analyzes your requirements and preferences to find the ideal matches from our extensive network of verified professionals.",
    icon: <Brain className="h-8 w-8 text-zion-purple" />,
    link: "/ai-matcher",
    badge: "AI"
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security protecting your data and transactions",
    details: "Bank-level encryption, secure payment processing, and comprehensive data protection ensure your information stays safe and confidential.",
    icon: <Shield className="h-8 w-8 text-zion-cyan" />,
    link: "/security",
    badge: "Secure"
  },
  {
    title: "Global Network",
    description: "Access to worldwide tech talent and innovative solutions",
    details: "Connect with professionals and companies from around the globe, bringing diverse perspectives and cutting-edge solutions to your projects.",
    icon: <Globe className="h-8 w-8 text-zion-blue" />,
    link: "/network",
    badge: "Global"
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive insights into your tech ecosystem performance",
    details: "Monitor project progress, track performance metrics, and gain valuable insights to optimize your technology investments and strategies.",
    icon: <Database className="h-8 w-8 text-zion-green" />,
    link: "/analytics",
    badge: "Analytics"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your tech needs",
    details: "Our dedicated support team is available 24/7 to help you with any questions, technical issues, or guidance you may need.",
    icon: <Users className="h-8 w-8 text-zion-orange" />,
    link: "/support",
    badge: "Support"
  },
  {
    title: "Innovation Hub",
    description: "Stay ahead with the latest tech trends and emerging solutions",
    details: "Access cutting-edge technologies, research insights, and innovative approaches to keep your business at the forefront of digital transformation.",
    icon: <Zap className="h-8 w-8 text-zion-yellow" />,
    link: "/innovation",
    badge: "Innovation"
=======
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Cloud, Database, Zap, Code, Settings, Link as LinkIcon, Phone, Mail, Globe } from "lucide-react";

const features = [
  {
    title: "AI & Machine Learning",
    description: "Transform your business with intelligent automation and data-driven insights",
    icon: <Brain className="w-8 h-8" />,
    link: "/comprehensive-services#ai-ml",
    color: "from-purple-500 to-indigo-600",
    cta: "Explore AI Services"
  },
  {
    title: "Cybersecurity",
    description: "Protect your organization with comprehensive security solutions and monitoring",
    icon: <Shield className="w-8 h-8" />,
    link: "/comprehensive-services#cybersecurity",
    color: "from-red-500 to-pink-600",
    cta: "Secure Your Business"
  },
  {
    title: "Cloud & Infrastructure",
    description: "Modernize your infrastructure with cloud solutions and DevOps automation",
    icon: <Cloud className="w-8 h-8" />,
    link: "/comprehensive-services#cloud-infrastructure",
    color: "from-blue-500 to-cyan-600",
    cta: "Cloud Solutions"
  },
  {
    title: "Data & Analytics",
    description: "Unlock business insights with advanced analytics and data engineering",
    icon: <Database className="w-8 h-8" />,
    link: "/comprehensive-services#data-analytics",
    color: "from-green-500 to-emerald-600",
    cta: "Data Insights"
  },
  {
    title: "Digital Transformation",
    description: "Accelerate your digital journey with strategic transformation services",
    icon: <Zap className="w-8 h-8" />,
    link: "/comprehensive-services#digital-transformation",
    color: "from-orange-500 to-red-600",
    cta: "Transform Now"
  },
  {
    title: "Web & Mobile",
    description: "Build custom applications and digital experiences for your business",
    icon: <Code className="w-8 h-8" />,
    link: "/comprehensive-services#web-mobile",
    color: "from-indigo-500 to-purple-600",
    cta: "Build Apps"
  },
  {
    title: "IT Support & Management",
    description: "Ensure smooth IT operations with managed services and support",
    icon: <Settings className="w-8 h-8" />,
    link: "/comprehensive-services#it-support",
    color: "from-gray-500 to-slate-600",
    cta: "Get Support"
  },
  {
    title: "Blockchain & Web3",
    description: "Leverage decentralized technologies for innovation and transparency",
    icon: <LinkIcon className="w-8 h-8" />,
    link: "/comprehensive-services#blockchain-web3",
    color: "from-yellow-500 to-amber-600",
    cta: "Web3 Solutions"
=======
  Users, 
  Briefcase, 
  Settings, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';

const featureCTAs = [
  {
    title: 'AI Talent Matcher',
    description: 'Find the perfect match using advanced AI algorithms',
    icon: Search,
    link: '/match',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    iconColor: 'text-zion-purple',
    features: ['Smart matching', 'Skill validation', 'Instant results']
  },
  {
    title: 'Global Talent Pool',
    description: 'Access skilled professionals from around the world',
    icon: Users,
    link: '/talent',
    color: 'from-zion-cyan to-zion-blue',
    bgColor: 'bg-zion-cyan/10',
    iconColor: 'text-zion-cyan',
    features: ['150+ countries', 'Verified profiles', 'Diverse skills']
  },
  {
    title: 'IT Services Network',
    description: '24/7 global IT support and technical services',
    icon: Settings,
    link: '/it-onsite-services',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    iconColor: 'text-zion-blue',
    features: ['24/7 support', 'Global coverage', 'Certified techs']
  },
  {
    title: 'Professional Services',
    description: 'Comprehensive business and technical solutions',
    icon: Briefcase,
    link: '/services',
    color: 'from-zion-green to-zion-green-dark',
    bgColor: 'bg-zion-green/10',
    iconColor: 'text-zion-green',
    features: ['Custom solutions', 'Expert teams', 'Quality guarantee']
  }
];

export function FeatureCTAs() {
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "AI Services Hub",
      description: "Cutting-edge AI solutions including chatbots, image generation, video editing, and data analytics.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "From AI chatbots to advanced analytics, our AI services help businesses leverage artificial intelligence for competitive advantage."
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    },
    // New Micro SAAS Services
    {
      title: "AI Content Generator",
      description: "Generate high-quality content, code, and documentation using advanced AI models tailored to your industry.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/ai-content-generator",
      badge: "AI-Powered",
      details: "Create engaging content, technical documentation, and marketing copy with our AI-powered content generation platform. Starting at $29/month."
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security monitoring, threat detection, and incident response for businesses of all sizes.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/cybersecurity-suite",
      badge: "Security",
      details: "24/7 threat monitoring, automated incident response, and compliance reporting. Enterprise-grade security starting at $199/month."
    },
    {
      title: "Cloud Cost Optimizer",
      description: "AI-driven cloud cost optimization and resource management across AWS, Azure, and Google Cloud.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700" />,
      link: "/cloud-optimizer",
      badge: "Cost-Saving",
      details: "Reduce cloud costs by up to 40% with intelligent resource allocation and automated optimization. Plans from $49/month."
    },
    {
      title: "Data Analytics Platform",
      description: "Real-time business intelligence and predictive analytics powered by machine learning algorithms.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/analytics-platform",
      badge: "Analytics",
      details: "Transform raw data into actionable insights with interactive dashboards and predictive modeling. Starting at $79/month."
    },
    {
      title: "API Gateway & Management",
      description: "Secure, scalable API gateway with rate limiting, authentication, and comprehensive monitoring.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700" />,
      link: "/api-gateway",
      badge: "Developer",
      details: "Enterprise-grade API management with advanced security features and developer portal. Plans from $99/month."
    },
    {
      title: "DevOps Automation Platform",
      description: "Streamline CI/CD pipelines, infrastructure as code, and deployment automation.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-orange-100 to-red-100 text-orange-700" />,
      link: "/devops-platform",
      badge: "DevOps",
      details: "Automate your entire development workflow with intelligent deployment strategies and monitoring. Starting at $149/month."
    },
    {
      title: "AI Model Training Service",
      description: "Custom AI model development and training using your proprietary data and business requirements.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-violet-100 to-purple-100 text-violet-700" />,
      link: "/ai-training",
      badge: "Custom AI",
      details: "Develop bespoke AI models tailored to your specific use case with expert guidance. Project-based pricing from $5,000."
    },
    {
      title: "Blockchain Development Suite",
      description: "Complete blockchain infrastructure, smart contract development, and DApp deployment platform.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700" />,
      link: "/blockchain-suite",
      badge: "Web3",
      details: "Build, deploy, and manage blockchain applications with enterprise-grade security. Plans from $199/month."
    },
    {
      title: "Video AI Processing",
      description: "AI-powered video editing, enhancement, and content generation for creators and businesses.",
      icon: <Video className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700" />,
      link: "/video-ai",
      badge: "Media AI",
      details: "Transform video content with AI-powered editing, enhancement, and automated generation. Starting at $39/month."
    },
    {
      title: "IoT Management Platform",
      description: "Comprehensive IoT device management, data collection, and analytics platform.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-slate-100 to-gray-100 text-slate-700" />,
      link: "/iot-platform",
      badge: "IoT",
      details: "Manage thousands of IoT devices with real-time monitoring and predictive maintenance. Plans from $89/month."
    },
    {
      title: "AI Chatbot Builder",
      description: "Create intelligent chatbots and virtual assistants without coding knowledge.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/chatbot-builder",
      badge: "No-Code",
      details: "Build AI-powered chatbots for customer service, sales, and support. Drag-and-drop interface starting at $19/month."
    },
    {
      title: "Data Privacy Compliance",
      description: "Automated GDPR, CCPA, and privacy compliance management with audit trails.",
      icon: <Lock className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700" />,
      link: "/privacy-compliance",
      badge: "Compliance",
      details: "Ensure data privacy compliance with automated monitoring and reporting tools. Starting at $129/month."
    },
    {
      title: "AI-Powered SEO Suite",
      description: "Comprehensive SEO optimization using AI to improve search rankings and drive organic traffic.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-lime-100 to-green-100 text-lime-700" />,
      link: "/seo-suite",
      badge: "Marketing",
      details: "AI-driven SEO analysis, keyword research, and content optimization. Plans from $59/month."
    },
    {
      title: "Code Quality Analyzer",
      description: "Automated code review, quality assessment, and security vulnerability detection.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/code-analyzer",
      badge: "Quality",
      details: "Improve code quality with automated analysis, security scanning, and performance optimization. Starting at $69/month."
    },
    {
      title: "AI-Powered Testing",
      description: "Intelligent test automation and quality assurance using machine learning.",
      icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-violet-100 text-purple-700" />,
      link: "/ai-testing",
      badge: "QA",
      details: "Automate testing with AI-generated test cases and intelligent bug detection. Plans from $79/month."
    },
    {
      title: "Customer Success Platform",
      description: "AI-driven customer success management with predictive analytics and automated workflows.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-700" />,
      link: "/customer-success",
      badge: "CX",
      details: "Improve customer retention with predictive analytics and automated success workflows. Starting at $89/month."
    },
    {
      title: "AI Legal Assistant",
      description: "AI-powered legal document review, contract analysis, and compliance checking.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-700" />,
      link: "/legal-ai",
      badge: "Legal Tech",
      details: "Streamline legal processes with AI-powered document analysis and contract review. Plans from $149/month."
    },
    {
      title: "AI Translation Service",
      description: "Real-time multilingual translation and localization for global business communication.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-sky-100 to-blue-100 text-sky-700" />,
      link: "/ai-translation",
      badge: "Global",
      details: "Break language barriers with AI-powered translation supporting 100+ languages. Starting at $29/month."
    },
    {
      title: "AI-Powered HR Suite",
      description: "Intelligent recruitment, employee management, and performance analytics platform.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-rose-100 to-pink-100 text-rose-700" />,
      link: "/hr-suite",
      badge: "HR Tech",
      details: "Transform HR operations with AI-powered recruitment and employee management. Plans from $99/month."
    },
    {
      title: "AI Financial Advisor",
      description: "Personalized financial planning and investment recommendations using machine learning.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/financial-ai",
      badge: "FinTech",
      details: "Get personalized financial advice and investment strategies powered by AI. Starting at $39/month."
    },
    {
      title: "AI Design Assistant",
      description: "AI-powered design tools for logos, graphics, and visual content creation.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-violet-100 to-purple-100 text-violet-700" />,
      link: "/design-ai",
      badge: "Creative",
      details: "Create professional designs with AI-powered tools and templates. Plans from $19/month."
    {
      title: "AI Analytics Dashboard",
      description: "Transform your business data into actionable intelligence with AI-powered analytics and insights.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/ai-analytics-dashboard",
      badge: "New",
      details: "Get real-time insights, predictive analytics, and custom dashboards to drive data-driven business decisions."
    },
    {
      title: "AI Content Generator",
      description: "Create engaging content with AI-powered writing tools for blogs, social media, and marketing.",
      icon: <PenTool className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/ai-content-generator",
      badge: "Featured",
      details: "Generate high-quality content in seconds while maintaining your brand voice and SEO optimization."
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions including penetration testing, audits, and incident response.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/cybersecurity-services",
      badge: "Secure",
      details: "Protect your business with enterprise-grade cybersecurity services and 24/7 threat monitoring."
    },
    {
      title: "Cloud Migration Services",
      description: "Expert cloud migration to AWS, Azure, and Google Cloud with zero downtime guarantee.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/cloud-migration-services",
      badge: "Cloud",
      details: "Seamless migration to the cloud with cost optimization, security, and performance improvements."
    {
      title: "Comprehensive Services",
      description: "Access our complete range of micro SAAS, IT services, and AI solutions in one platform.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/comprehensive-services",
      badge: "New",
      details: "Transform your business with our cutting-edge micro SAAS solutions designed to solve specific challenges and drive growth."
=======
=======
=======
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-105 group">
=======
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
                  )}
=======
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 mb-6 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Solutions
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of micro SAAS services designed to scale your business operations, 
            enhance security, and drive innovation through cutting-edge AI and automation technologies.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-zion-blue-dark/80 border-zion-blue-light hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="mt-4 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
=======
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-zion-cyan/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-zion-purple/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-zion-blue/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-zion-cyan/10 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            New Micro SAAS Services Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Discover Zion's Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive suite of tools and micro SAAS services designed to transform how you connect, 
            collaborate, and create in the tech ecosystem. From AI-powered solutions to enterprise-grade services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant="outline"
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-cyan hover:text-zion-slate hover:border-zion-cyan transition-all duration-300"
            >
              {category === 'all' ? 'All Features' : category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:border-zion-cyan/50 bg-white/5 backdrop-blur-sm border-zion-blue-light/20 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  {feature.icon}
                  <div className="flex gap-2">
                    {feature.badge && (
                      <Badge 
                        variant="secondary" 
                        className={`${
                          feature.badge === 'Micro SAAS' 
                            ? 'bg-zion-purple/20 text-zion-purple border-zion-purple/30' 
                            : feature.badge === 'Popular'
                            ? 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30'
                            : feature.badge === 'New'
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : feature.badge === 'Featured'
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                            : 'bg-zion-blue/20 text-zion-blue border-zion-blue/30'
                        }`}
                      >
                        {feature.badge}
                      </Badge>
                    )}
                    {feature.category !== 'Core Platform' && (
                      <Badge variant="outline" className="border-zion-slate-light/30 text-zion-slate-light text-xs">
                        {feature.category}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-zion-slate-light">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zion-slate-light leading-relaxed">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
=======
                <Button asChild className="w-full gap-2 group-hover:bg-zion-cyan group-hover:text-zion-slate transition-all duration-300">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
=======
import React from 'react';
import { Link } from "react-router-dom";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI & Automation",
      description: "Intelligent automation solutions to streamline your business processes",
      link: "/ai-services",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services for modern businesses",
      link: "/enterprise-solutions",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and protection services to safeguard your digital assets",
      link: "/comprehensive-services",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics",
      link: "/comprehensive-services",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Micro SAAS",
      description: "Custom software solutions tailored to your specific business needs",
      link: "/micro-saas",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Comprehensive Solutions",
      description: "End-to-end technology solutions for enterprise transformation",
      link: "/comprehensive-services",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Key Features</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover the comprehensive range of services and solutions we offer to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-zion-blue-light rounded-lg p-6 border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <div className="text-white text-xl font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zion-slate-light mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Learn More
=======
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
              Technology Services
            </span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our comprehensive suite of professional technology services designed to accelerate your business growth, enhance security, and drive innovation across all aspects of your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <Link to={feature.link} className="block">
                <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan group-hover:text-zion-cyan-light transition-all duration-300"
                  >
                    {feature.cta}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Explore our complete suite of micro SAAS services and find the perfect solution for your business needs. 
              Get in touch with our experts for personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg"
              >
                <Link to="/micro-saas-services">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore All Services
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg"
              >
                <Link to="/contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Consultation
=======

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 rounded-2xl p-8 border border-zion-purple/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Our Complete Service Portfolio?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              From AI-powered solutions to comprehensive IT services, discover how Zion Tech Group can transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                <Link to="/micro-saas-services">
                  <Globe className="h-5 w-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/contact">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get in Touch
=======

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 border border-zion-purple/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Our Micro SAAS Services?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Discover our comprehensive suite of AI, IT, and business automation solutions designed to accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-zion-cyan text-zion-slate hover:bg-zion-cyan/90">
                <Link to="/micro-saas-services">
                  <Sparkles className="h-5 w-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Link to="/request-quote">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
        >
          {ctaItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className={`${item.bgColor} ${item.borderColor} border-2 p-8 rounded-2xl h-full hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{item.description}</p>
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${item.color} hover:scale-105 transition-transform duration-200`}
                >
                  <Link to={item.href} className="flex items-center justify-center gap-2">
                    {item.action}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-3xl p-12 border border-zion-purple/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to help you get started and make the most of Zion's powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
              >
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg px-8 py-4"
              >
                <Link to="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </motion.div>
=======
=======
=======
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (

        <div className="text-center">
          <Link to="/comprehensive-services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6"
            >
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Our expert team is ready to help you implement the perfect technology solutions. Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call +1 302 464 0950
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Mail className="h-4 w-4 mr-2" />
                Email kleber@ziontechgroup.com
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Visit ziontechgroup.com
              </Button>
            </div>
            <div className="mt-6 text-zion-slate-light text-sm">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
=======
    <section className="py-20 bg-gradient-to-b from-background to-zion-slate/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to Succeed
          </h2>
          
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover the tools and services that make Zion the ultimate platform for 
            talent acquisition and business growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featureCTAs.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <Link to={feature.link} className="block h-full">
                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-purple/10">
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Header with icon */}
                    <div className="relative z-10 flex items-start gap-6 mb-6">
                      <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg`}>
                        <IconComponent className={`w-10 h-10 ${feature.iconColor}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-zion-slate-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Feature list */}
                    <div className="relative z-10 mb-6">
                      <div className="grid grid-cols-1 gap-3">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                            <span className="text-zion-slate-light text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA button */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 text-zion-cyan font-medium group-hover:text-zion-cyan-light transition-colors duration-300">
                        <span>Explore {feature.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-6 right-6 w-4 h-4 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left`}></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-zion-purple/10 via-zion-cyan/10 to-zion-blue/10 border border-white/10 backdrop-blur-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-purple via-zion-cyan to-zion-blue"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Globe className="w-10 h-10 text-zion-cyan" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Transform Your Business?
                </h3>
                <Zap className="w-10 h-10 text-zion-purple" />
              </div>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of companies already using Zion to find top talent, 
                access global IT services, and scale their operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="px-10 py-5 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25 flex items-center gap-2 justify-center"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
