
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
=======
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
import { 
<<<<<<< HEAD
  Zap, 
<<<<<<< HEAD
  Settings, 
  Search, 
  MessageSquare, 
  Smartphone, 
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  PenTool,
  Link as LinkIcon,
  Shield,
  BarChart3
=======
  Brain,
  Server,
  TrendingUp,
  CheckCircle
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
  Brain,
  Server,
  TrendingUp
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
=======
  Brain,
  Shield,
  Cloud
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
  Sparkles
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
  Server
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
  TrendingUp,
  Cloud
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8eef
=======
  BarChart3
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
=======
  Shield,
  Cloud,
  Heart,
  DollarSign,
  GraduationCap,
  Globe
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f15c
=======
  Brain,
  Shield,
  Globe,
  TrendingUp,
  Sparkles,
  Lock
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6350

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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b

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
  }
];

>>>>>>> origin/cursor/build-and-fix-errors-e276
export function FeatureCTAs() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const features = [
    // Core Platform Features
    {
      title: "AI Services & Solutions",
      description: "Comprehensive AI services from strategy to implementation, including custom model development and AI consulting.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and strategic AI consulting."
    },
    {
      title: "IT Services & Infrastructure",
      description: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/it-services",
      badge: "Popular",
      details: "From cloud migration to cybersecurity, our IT experts help you build robust, scalable, and secure technology infrastructure."
    },
    {
      title: "Digital Marketing Services",
      description: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/digital-marketing",
      badge: "Featured",
      details: "Drive growth with data-driven marketing strategies, conversion optimization, and comprehensive digital marketing solutions."
    },
    {
      title: "Business Solutions & Consulting",
      description: "Strategic business consulting, process optimization, and digital transformation services.",
      icon: <CheckCircle className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/business-solutions",
      details: "Our business consultants help you optimize operations, implement automation, and achieve sustainable growth through strategic planning."
    },
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Search className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg" />,
=======
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "AI Chatbot Builder Pro",
      description: "No-code AI chatbot creation platform with advanced NLP, multi-language support, and seamless integration capabilities.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/micro-saas-services",
      badge: "New",
      details: "Reduce customer service costs by 60% with 24/7 AI-powered support. Features drag & drop interface, CRM integration, and analytics dashboard."
    },
    {
      title: "AI Content Generator Suite",
      description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/micro-saas-services",
      badge: "Featured",
      details: "10x faster content creation with SEO optimization, plagiarism detection, brand voice customization, and performance analytics."
    },
    {
      title: "AI-Powered Business Intelligence",
      description: "Comprehensive data analytics platform with AI-driven insights, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/micro-saas-services",
      badge: "Premium",
      details: "Uncover hidden business insights, predict future trends, and make data-driven decisions faster with our advanced analytics platform."
    },
    {
      title: "Cloud Migration Pro",
      description: "End-to-end cloud migration services including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/micro-saas-services",
      badge: "Enterprise",
      details: "Reduce infrastructure costs by 30-50% with improved scalability, enhanced security, and better disaster recovery capabilities."
    },
    {
      title: "Comprehensive Cybersecurity Audit",
      description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security recommendations.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/micro-saas-services",
      badge: "Critical",
      details: "Identify and fix security vulnerabilities, meet compliance requirements, and protect against modern cyber threats with our expert security team."
    },
    {
      title: "DevOps Automation Suite",
      description: "Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation.",
      icon: <GitBranch className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/micro-saas-services",
      badge: "Popular",
      details: "10x faster deployment cycles, reduced manual errors, improved code quality, and better team collaboration with our automation tools."
    },
    {
      title: "Custom AI Model Training",
      description: "Specialized AI model development and training services for computer vision, NLP, and predictive analytics applications.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/micro-saas-services",
      badge: "Expert",
      details: "Tailored AI solutions for specific use cases with improved accuracy, competitive advantage, and expert guidance throughout the process."
    },
    {
      title: "AI Process Automation Platform",
      description: "Intelligent automation platform that combines RPA with AI to automate complex business processes and improve efficiency.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/micro-saas-services",
      badge: "Innovative",
      details: "Reduce manual work by 70-90%, improve process accuracy, faster execution, and enhanced compliance with our intelligent automation platform."
    },
    {
      title: "AI Customer Insights Platform",
      description: "Advanced customer analytics platform that uses AI to analyze behavior, predict churn, and provide actionable insights.",
      icon: <Target className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/micro-saas-services",
      badge: "Strategic",
      details: "Reduce customer churn by 20-40%, increase lifetime value, improve satisfaction scores, and better targeted marketing campaigns."
=======
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/match",
      badge: "Popular",
      category: "Core Platform",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
<<<<<<< HEAD
      icon: <Users className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg" />,
=======
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      link: "/talent",
<<<<<<< HEAD
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.",
      gradient: "from-purple-500/20 to-purple-600/20"
=======
      category: "Core Platform",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg" />,
      link: "/services",
<<<<<<< HEAD
      badge: "New",
<<<<<<< HEAD
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.",
      gradient: "from-cyan-500/20 to-cyan-600/20"
=======
      title: "AI Services",
      description: "Transform your business with cutting-edge AI solutions including chatbots, content generation, and predictive analytics.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "From AI chatbots to predictive analytics, our AI services help you automate processes and gain competitive advantages."
=======
=======
      category: "Core Platform",
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8eef
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
    },
    {
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg" />,
      link: "/equipment",
<<<<<<< HEAD
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.",
      gradient: "from-amber-500/20 to-amber-600/20"
=======
      category: "Core Platform",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
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
<<<<<<< HEAD
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.",
      gradient: "from-emerald-500/20 to-emerald-600/20"
=======
      category: "Community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
    },
    {
<<<<<<< HEAD
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg" />,
      link: "/mobile-launch",
<<<<<<< HEAD
      badge: "Featured",
<<<<<<< HEAD
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.",
      gradient: "from-indigo-500/20 to-indigo-600/20"
=======
=======
      category: "Mobile",
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg" />,
=======
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      link: "/enterprise",
<<<<<<< HEAD
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.",
      gradient: "from-pink-500/20 to-pink-600/20"
=======
      category: "Enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
    },
    {
<<<<<<< HEAD
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 text-white shadow-lg" />,
      link: "/developers",
<<<<<<< HEAD
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.",
      gradient: "from-gray-500/20 to-gray-600/20"
=======
      category: "Development",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg" />,
      link: "/blog",
<<<<<<< HEAD
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.",
      gradient: "from-teal-500/20 to-teal-600/20"
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.",
      gradient: "from-red-500/20 to-red-600/20"
    },
    {
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg" />,
      link: "/zion-hire-ai",
<<<<<<< HEAD
<<<<<<< HEAD
      details: "Automate candidate screening, schedule interviews, and make data-driven hiring decisions with our AI assistant.",
      gradient: "from-violet-500/20 to-violet-600/20"
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f15c
      badge: "Premium",
      category: "AI Recruiting",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // New innovative micro SAAS services
    {
      title: "AI Content Generation",
      description: "Automated content creation for blogs, social media, and marketing using advanced language models.",
      icon: <PenTool className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/ai-services",
      badge: "AI-Powered",
      details: "Generate high-quality, SEO-optimized content at scale with our AI writing platform that learns your brand voice."
    },
    {
      title: "Smart Contract Development",
      description: "Blockchain smart contract development and auditing for DeFi, NFTs, and enterprise solutions.",
      icon: <LinkIcon className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/blockchain-services",
      badge: "Blockchain",
      details: "Build secure, audited smart contracts with our expert blockchain developers and comprehensive security testing."
    },
    {
      title: "IoT Device Management",
      description: "Complete IoT platform for device provisioning, monitoring, and data analytics.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/iot-services",
      badge: "IoT",
      details: "Manage your connected devices with our comprehensive IoT platform featuring real-time monitoring and predictive analytics."
    },
    {
      title: "Zero-Trust Security",
      description: "Implement zero-trust security architecture with identity verification and continuous monitoring.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/cybersecurity-services",
      badge: "Security",
      details: "Protect your business with modern zero-trust security that verifies every user and device before granting access."
    },
    {
      title: "Predictive Analytics",
      description: "Real-time business intelligence with predictive modeling for forecasting and trend analysis.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/ai-services",
      badge: "Analytics",
      details: "Transform your data into actionable insights with our AI-powered predictive analytics platform."
    },
    {
      title: "Edge Computing Platform",
      description: "Distributed edge computing for real-time data processing and low-latency IoT applications.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/iot-services",
      badge: "Edge",
      details: "Process data closer to the source with our edge computing platform for faster response times and reduced latency."
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
=======
    {
      title: "Micro SAAS Services",
      description: "Comprehensive suite of micro SAAS solutions including AI tools, IT services, and business automation.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/micro-saas-services",
      badge: "New",
      details: "Transform your business with our cutting-edge micro SAAS solutions. From AI-powered tools to enterprise-grade services."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
    {
      title: "Micro SAAS Services",
      description: "Comprehensive suite of micro SAAS solutions for AI, IT, development, analytics, security, and automation.",
      icon: <Sparkles className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-zion-purple to-zion-cyan text-white" />,
      link: "/micro-saas-services",
      badge: "New",
      details: "Transform your business with our cutting-edge micro SAAS solutions designed to solve specific challenges and drive growth."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6350
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
=======
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6350
    }
  };

  const itemVariants = {
<<<<<<< HEAD
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

<<<<<<< HEAD
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
=======
  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
>>>>>>> origin/cursor/build-and-fix-errors-e276
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
=======
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6350
    }
  };

  const categories = ['all', ...Array.from(new Set(features.map(f => f.category)))];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="py-24 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Explore Our Platform
          </h2>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and services designed to revolutionize your tech experience
=======
    <section className="py-16 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/20 via-zion-slate/10 to-zion-purple-dark/20"></div>
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
            Discover Zion's Powerful Features
          </h2>
          <p className="text-xl text-zion-cyan max-w-4xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
=======
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
              Take Action
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Choose your path to success with our comprehensive suite of solutions. 
            From project launch to enterprise scaling, we have everything you need.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <motion.div
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
=======
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-zion-purple/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-zion-purple" />
            <span className="text-zion-purple text-sm font-medium">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Tech Journey</span>?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Choose your path and unlock the power of global tech collaboration. 
            Whether you're hiring, building, or growing, Zion has you covered.
          </p>
        </motion.div>

        {/* CTA Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6350
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
        >
          {features.map((feature, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <motion.div key={index} variants={itemVariants}>
              <Card className={`group bg-gradient-to-br ${feature.gradient} border-zion-blue-light/20 hover:border-zion-purple/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 transform hover:scale-105 backdrop-blur-sm`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    {feature.badge && (
                      <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0 px-3 py-1 rounded-full text-xs font-medium">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-zion-slate-light/80 text-sm leading-relaxed">
                    {feature.details}
                  </p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white border-0 rounded-xl py-3 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    <Link to={feature.link} className="flex items-center justify-center gap-2">
                      Explore {feature.title}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
=======
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 group">
=======
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-105 group">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
                </div>
<<<<<<< HEAD
                
                <CardTitle className="text-lg text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
=======
                <CardTitle className="mt-4 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
              </CardHeader>
<<<<<<< HEAD
              
              <CardContent className="space-y-4">
                {/* Rating and Price */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-zion-cyan">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {service.rating}
                  </div>
                  <span className="text-zion-purple-light font-medium">
                    {service.price}
                  </span>
                </div>
                
                {/* CTA Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all duration-300"
                >
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
=======
              <CardContent>
                <p className="text-sm text-zion-slate-light leading-relaxed">{feature.details}</p>
              </CardContent>
              <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
                <Button asChild className="w-full gap-1 hover-neon transition-all duration-300">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
                <Button asChild className="w-full gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
                <Button asChild className="w-full gap-2 group-hover:bg-zion-cyan group-hover:text-zion-slate transition-all duration-300">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                  </Link>
                </Button>
              </CardContent>
            </Card>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
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
              </Link>
            </div>
          ))}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        
        <div className="text-center mt-12">
          <Link 
            to="/comprehensive-services"
            className="inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ctaFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-2xl border ${feature.borderColor} ${feature.bgColor} hover:bg-opacity-20 transition-all duration-500 relative overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg w-fit mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <Link
                    to={feature.href}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl`}
                  >
                    {feature.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transform transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
                </div>
                <div className={`text-2xl font-bold ${highlight.color} mb-2`}>
                  {highlight.text.split(' ')[0]}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {highlight.text.split(' ').slice(1).join(' ')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30 border border-zion-purple/40 rounded-2xl p-10 max-w-3xl mx-auto backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join the Future of Work Today
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven talent matching and global service delivery. 
              Start your journey with Zion and unlock unlimited possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 justify-center"
              >
                Get Started Free
                <Zap className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
=======

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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                </Link>
              </Button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6350
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
      </div>
    </section>
  );
}
