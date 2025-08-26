
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
  FileText,
  BarChart3,
  Globe
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
      title: "Micro SAAS Solutions",
      description: "Ready-to-use business applications for inventory, CRM, project management, and more.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/micro-saas-services",
      badge: "New",
      isNew: true,
      details: "25+ micro SAAS solutions starting from $9/month. AI Chatbot Builder, Smart CRM, Inventory Management, and more."
    },
    {
      title: "AI Services",
      description: "AI-powered solutions for automation, analytics, content optimization, and intelligent decision making.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/micro-saas-services?category=ai",
      badge: "Featured",
      isNew: true,
      details: "AI Chatbot Builder, Content Optimizer, Data Visualization, and custom AI development services."
    },
    {
      title: "IT Services",
      description: "Professional IT consulting, cloud migration, cybersecurity, and infrastructure management.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/micro-saas-services?category=it",
      badge: "Professional",
      details: "Cloud migration, cybersecurity audits, DevOps automation, and enterprise system integration."
    },
    {
      title: "Security Solutions",
      description: "Comprehensive cybersecurity services including penetration testing, monitoring, and compliance.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/micro-saas-services?category=security",
      badge: "Critical",
      details: "24/7 security monitoring, penetration testing, compliance verification, and threat detection."
    },
    {
      title: "Business Automation",
      description: "Intelligent automation platforms for streamlining business processes and reducing manual work.",
      icon: <SettingsIcon className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/micro-saas-services?category=automation",
      badge: "Efficient",
      details: "Workflow automation, RPA solutions, and business process optimization to improve efficiency by 70%."
    },
    {
      title: "Analytics & BI",
      description: "Business intelligence dashboards, predictive analytics, and data visualization solutions.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/micro-saas-services?category=analytics",
      badge: "Insights",
      details: "Custom BI dashboards, predictive analytics engine, and real-time data visualization tools."
    },
    {
      title: "System Integration",
      description: "Seamless integration of business systems, APIs, and third-party platform connectors.",
      icon: <LinkIcon className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
      link: "/micro-saas-services?category=integration",
      badge: "Connect",
      details: "Enterprise system integration, API development, and third-party platform connectors for streamlined workflows."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/talent",
      category: "Core Platform",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "AI Services",
      description: "Transform your business with cutting-edge AI solutions including chatbots, content generation, and predictive analytics.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "From AI chatbots to predictive analytics, our AI services help you automate processes and gain competitive advantages."
=======
=======
      category: "Core Platform",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
=======
      title: "AI Services",
      description: "Comprehensive AI solutions including development, automation, analytics, and more.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "Transform your business with cutting-edge AI services including machine learning, automation, and intelligent analytics."
=======
      title: "Professional Services",
      description: "Discover comprehensive IT & AI services for your business needs, from development to consulting and automation.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/all-services",
      badge: "New",
      details: "From AI development to IT infrastructure, cybersecurity, and business automation. Transform your business with cutting-edge technology solutions."
    },
    {
      title: "Transparent Pricing",
      description: "Clear, competitive pricing for all our services with flexible plans to match your business needs and budget.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/pricing",
      badge: "New",
      details: "Choose from Basic, Professional, or Enterprise plans. All pricing is transparent with no hidden fees. Get custom quotes for complex projects."
    },
    {
      title: "IT Services",
      description: "Professional IT services including infrastructure, security, cloud, and managed services.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/it-services",
      badge: "Featured",
      details: "Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth."
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/digital-transformation",
      badge: "Strategic",
      details: "Strategic digital transformation services including process automation, customer experience, and innovation labs."
    },
    {
      title: "Cloud Services",
      description: "Comprehensive cloud solutions including migration, architecture, and optimization.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/cloud-services",
      badge: "Scalable",
      details: "Expert cloud services including migration, security, cost optimization, and multi-cloud strategies."
    },
    {
      title: "IT Services",
      description: "Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/it-services",
      badge: "Essential",
      details: "Modernize your IT infrastructure with our expert services including cloud migration, security, and managed IT solutions."
    },
    {
      title: "Micro SAAS Services",
      description: "Affordable software solutions for modern businesses including CRM, project management, and analytics.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/micro-saas-services",
      badge: "Affordable",
      details: "Powerful, affordable software solutions designed for modern businesses. Start with free trials and scale as you grow."
    },
    {
=======
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg" />,
      link: "/equipment",
      category: "Core Platform",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    },
    
    // Micro SAAS Services
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials with advanced NLP capabilities.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/micro-saas-services?category=AI",
      badge: "Micro SAAS",
      category: "AI Services",
      details: "Save 80% of content creation time with AI-optimized content that improves SEO rankings and maintains consistent brand voice."
    },
    {
      title: "AI Customer Support",
      description: "Intelligent customer support automation with natural language processing and seamless human handoff capabilities.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/micro-saas-services?category=AI",
      badge: "Micro SAAS",
      category: "AI Services",
      details: "Reduce support costs by 70% while providing 24/7 automated support with intelligent routing and sentiment analysis."
    },
    {
      title: "Cloud Migration Pro",
      description: "Comprehensive cloud migration service with automated tools, cost optimization, and zero-downtime strategies.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-sky-100 text-sky-700" />,
      link: "/micro-saas-services?category=IT",
      badge: "Micro SAAS",
      category: "IT Services",
      details: "Reduce cloud costs by 30-40% with automated migration tools, performance monitoring, and expert consulting support."
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and compliance monitoring.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/micro-saas-services?category=Security",
      badge: "Micro SAAS",
      category: "Security",
      details: "Protect against 99.9% of cyber threats with real-time monitoring, automated incident response, and compliance tools."
    },
    {
      title: "Workflow Automation",
      description: "Intelligent workflow automation platform that streamlines business processes and reduces manual tasks.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/micro-saas-services?category=Automation",
      badge: "Micro SAAS",
      category: "Automation",
      details: "Reduce manual tasks by 70% with AI-powered process optimization and integration with 500+ business applications."
    },
    
    // Additional Features
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg" />,
      link: "/community",
      category: "Community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
    {
=======
      category: "Mobile",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg" />,
=======
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/enterprise",
      category: "Enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    },
    {
      category: "Development",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg" />,
      link: "/blog",
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg" />,
      link: "/zion-hire-ai",
=======
      details: "Our AI recruiting platform uses advanced algorithms to match the best candidates with your job requirements, reducing hiring time by 70%."
    },
    {
      title: "AI Process Automation",
      description: "End-to-end automation solutions for business processes using cutting-edge AI technology.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
      link: "/comprehensive-services",
      badge: "Hot",
      details: "Transform your business operations with AI-powered automation that reduces manual work by 80% and increases efficiency across all departments."
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced threat detection and protection systems powered by machine learning.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/comprehensive-services",
      details: "Protect your business with next-generation cybersecurity that detects and prevents threats in real-time with 99.5% accuracy."
    },
    {
      title: "Cloud & Edge Computing",
      description: "Multi-cloud orchestration and edge computing solutions for modern infrastructure.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/comprehensive-services",
      details: "Optimize your cloud costs by 25-40% with our intelligent multi-cloud management platform and edge computing solutions."
    },
    {
      title: "Healthcare Technology",
      description: "AI-powered healthcare solutions with HIPAA compliance and diagnostic assistance.",
      icon: <Heart className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/comprehensive-services",
      details: "Revolutionize healthcare delivery with our AI platform featuring diagnostic assistance, patient monitoring, and telemedicine solutions."
    },
    {
      title: "Financial Technology",
      description: "Advanced fintech solutions including AI trading platforms and fraud detection systems.",
      icon: <DollarSign className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/comprehensive-services",
      details: "Stay ahead in the financial sector with our algorithmic trading platform and AI-powered fraud detection that achieves 99.5% accuracy."
    },
    {
      title: "Education Technology",
      description: "Adaptive learning platforms and virtual classroom solutions for modern education.",
      icon: <GraduationCap className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/comprehensive-services",
      details: "Transform education with AI-powered adaptive learning that personalizes content based on student performance and learning styles."
    },
    {
      title: "IoT & Smart Solutions",
      description: "Enterprise IoT platforms and smart building management systems.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/comprehensive-services",
      details: "Build the future with our scalable IoT platform supporting 100,000+ devices and intelligent building automation systems."
    },
    {
=======
      category: "Education",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
=======
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "Premium Services",
      description: "Discover our comprehensive suite of AI-powered solutions, enterprise IT services, and innovative SaaS platforms.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/enhanced-services",
      badge: "New",
      details: "From AI content generation to cybersecurity assessment, our premium services drive innovation and accelerate business growth."
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
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
    {
      title: "AI Services & Solutions",
      description: "Comprehensive AI development, machine learning, and automation services for modern businesses.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "From custom AI models to computer vision solutions, we deliver cutting-edge artificial intelligence services."
    },
    {
      title: "IT Infrastructure Services",
      description: "Enterprise-grade IT solutions including cloud migration, cybersecurity, and managed services.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/it-services",
      badge: "Featured",
      details: "Transform your IT infrastructure with our comprehensive cloud, security, and DevOps solutions."
    },
    {
      title: "Digital Transformation",
      description: "Strategic consulting and implementation for business modernization and digital growth.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/digital-transformation",
      badge: "Premium",
      details: "Navigate the digital age with our comprehensive transformation strategies and implementation services."
=======
    {
      title: "Micro SAAS Services",
      description: "Comprehensive suite of micro SAAS solutions including AI tools, IT services, and business automation.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/micro-saas-services",
      badge: "New",
      details: "Transform your business with our cutting-edge micro SAAS solutions. From AI-powered tools to enterprise-grade services."
=======
    {
      title: "AI Development Services",
      description: "Custom AI solutions including chatbots, content generation, and machine learning models tailored to your business needs.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/comprehensive-services",
      badge: "New",
      details: "From AI chatbots to predictive analytics, we build intelligent solutions that drive business growth and efficiency."
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services including audits, zero trust implementation, and 24/7 incident response.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/comprehensive-services",
      badge: "Featured",
      details: "Protect your business with enterprise-grade security solutions, compliance frameworks, and proactive threat detection."
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud migration, DevOps automation, and infrastructure management for scalable, secure operations.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/comprehensive-services",
      badge: "Popular",
      details: "Modernize your infrastructure with cloud-native solutions, automated CI/CD pipelines, and cost optimization strategies."
=======
    {
      title: "Micro SAAS Services",
      description: "Comprehensive suite of micro SAAS solutions for AI, IT, development, analytics, security, and automation.",
      icon: <Sparkles className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-zion-purple to-zion-cyan text-white" />,
      link: "/micro-saas-services",
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