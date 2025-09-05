import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Shield,
  Database,
  BarChart3,
  Users,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  CreditCard,
  Calendar,
  Phone,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon
} from 'lucide-react';

const microSaasServices = [
  {
    title: 'AI-Powered Lead Scoring Platform',
    description: 'Intelligent lead qualification and scoring using machine learning algorithms to identify high-value prospects.',
    icon: Target,
    features: ['Machine Learning Scoring', 'CRM Integration', 'Real-time Analytics', 'Custom Scoring Models'],
    pricing: '$99 - $499/month',
    category: 'Sales & Marketing',
    popular: true,
    setupFee: '$2,000',
    trialPeriod: '14 days'
  },
  {
    title: 'Smart Invoice Management System',
    description: 'Automated invoice processing, approval workflows, and payment tracking with AI-powered categorization.',
    icon: FileText,
    features: ['OCR Processing', 'Automated Approval', 'Payment Tracking', 'Expense Categorization'],
    pricing: '$49 - $199/month',
    category: 'Finance',
    popular: true,
    setupFee: '$500',
    trialPeriod: '30 days'
  },
  {
    title: 'AI Customer Support Chatbot',
    description: 'Intelligent customer support automation with natural language processing and multi-channel support.',
    icon: MessageSquare,
    features: ['NLP Processing', 'Multi-channel Support', 'Knowledge Base Integration', 'Escalation Management'],
    pricing: '$79 - $299/month',
    category: 'Customer Service',
    popular: true,
    setupFee: '$1,500',
    trialPeriod: '21 days'
  },
  {
    title: 'Predictive Inventory Management',
    description: 'AI-driven inventory optimization with demand forecasting and automated reorder points.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Supplier Management'],
    pricing: '$149 - $599/month',
    category: 'Inventory',
    popular: true,
    setupFee: '$3,000',
    trialPeriod: '30 days'
  },
  {
    title: 'Smart Social Media Scheduler',
    description: 'AI-powered social media content creation, scheduling, and performance analytics across all platforms.',
    icon: Globe,
    features: ['AI Content Generation', 'Multi-platform Scheduling', 'Performance Analytics', 'Hashtag Optimization'],
    pricing: '$39 - $149/month',
    category: 'Social Media',
    popular: true,
    setupFee: '$200',
    trialPeriod: '14 days'
  },
  {
    title: 'Automated Email Marketing Suite',
    description: 'Intelligent email campaign management with personalization, A/B testing, and behavioral triggers.',
    icon: Mail,
    features: ['Behavioral Triggers', 'A/B Testing', 'Personalization Engine', 'Advanced Analytics'],
    pricing: '$69 - $249/month',
    category: 'Email Marketing',
    popular: true,
    setupFee: '$800',
    trialPeriod: '14 days'
  },
  {
    title: 'AI-Powered Project Management',
    description: 'Intelligent project planning, resource allocation, and deadline prediction with automated task management.',
    icon: Calendar,
    features: ['Resource Optimization', 'Deadline Prediction', 'Task Automation', 'Progress Tracking'],
    pricing: '$89 - $349/month',
    category: 'Project Management',
    popular: true,
    setupFee: '$1,200',
    trialPeriod: '21 days'
  },
  {
    title: 'Smart Document Processing Hub',
    description: 'Automated document extraction, classification, and workflow management using OCR and AI.',
    icon: FileText,
    features: ['OCR Technology', 'Document Classification', 'Workflow Automation', 'Data Extraction'],
    pricing: '$59 - $199/month',
    category: 'Document Management',
    popular: true,
    setupFee: '$1,000',
    trialPeriod: '14 days'
  },
  {
    title: 'AI Financial Analytics Dashboard',
    description: 'Real-time financial insights, cash flow forecasting, and automated financial reporting.',
    icon: BarChart3,
    features: ['Cash Flow Forecasting', 'Financial Insights', 'Automated Reports', 'Budget Tracking'],
    pricing: '$99 - $399/month',
    category: 'Finance',
    popular: true,
    setupFee: '$1,500',
    trialPeriod: '30 days'
  },
  {
    title: 'Intelligent HR Management System',
    description: 'AI-powered HR automation including recruitment, onboarding, performance tracking, and employee analytics.',
    icon: Users,
    features: ['Recruitment Automation', 'Performance Analytics', 'Employee Onboarding', 'Compliance Tracking'],
    pricing: '$79 - $299/month',
    category: 'Human Resources',
    popular: true,
    setupFee: '$2,000',
    trialPeriod: '30 days'
  },
  {
    title: 'Smart Energy Management Platform',
    description: 'AI-driven energy consumption optimization for buildings and facilities with cost reduction analytics.',
    icon: Zap,
    features: ['Energy Optimization', 'Cost Analysis', 'Predictive Maintenance', 'Sustainability Metrics'],
    pricing: '$199 - $799/month',
    category: 'Energy Management',
    popular: true,
    setupFee: '$5,000',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis'],
    pricing: '$49 - $199/month',
    category: 'SEO & Marketing',
    popular: true,
    setupFee: '$500',
    trialPeriod: '14 days'
  },
  {
    title: 'Intelligent Survey & Feedback Platform',
    description: 'AI-powered survey creation, distribution, and analysis with sentiment analysis and actionable insights.',
    icon: BarChart3,
    features: ['Survey Automation', 'Sentiment Analysis', 'Real-time Analytics', 'Actionable Insights'],
    pricing: '$29 - $99/month',
    category: 'Research & Analytics',
    popular: true,
    setupFee: '$200',
    trialPeriod: '14 days'
  },
  {
    title: 'Smart Contract Management System',
    description: 'Automated contract lifecycle management with AI-powered risk assessment and compliance monitoring.',
    icon: Shield,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Monitoring', 'Renewal Alerts'],
    pricing: '$149 - $599/month',
    category: 'Legal & Compliance',
    popular: true,
    setupFee: '$2,500',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation using AI to detect inappropriate content, spam, and policy violations.',
    icon: Eye,
    features: ['Content Detection', 'Spam Filtering', 'Policy Enforcement', 'Real-time Moderation'],
    pricing: '$39 - $149/month',
    category: 'Content Management',
    popular: true,
    setupFee: '$800',
    trialPeriod: '14 days'
  },
  {
    title: 'Intelligent Time Tracking & Billing',
    description: 'AI-powered time tracking with automatic project categorization and intelligent billing generation.',
    icon: Clock,
    features: ['Automatic Tracking', 'Project Categorization', 'Billing Generation', 'Productivity Analytics'],
    pricing: '$19 - $79/month',
    category: 'Time Management',
    popular: true,
    setupFee: '$100',
    trialPeriod: '14 days'
  },
  {
    title: 'Smart Supply Chain Analytics',
    description: 'AI-driven supply chain optimization with demand forecasting, supplier risk analysis, and cost optimization.',
    icon: Network,
    features: ['Demand Forecasting', 'Supplier Risk Analysis', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$299 - $1,199/month',
    category: 'Supply Chain',
    popular: true,
    setupFee: '$5,000',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered Website Analytics',
    description: 'Advanced website analytics with user behavior prediction, conversion optimization, and personalized insights.',
    icon: Monitor,
    features: ['User Behavior Analysis', 'Conversion Optimization', 'Personalized Insights', 'A/B Testing'],
    pricing: '$39 - $149/month',
    category: 'Web Analytics',
    popular: true,
    setupFee: '$300',
    trialPeriod: '14 days'
  },
  {
    title: 'Intelligent Customer Segmentation',
    description: 'AI-powered customer segmentation and targeting with behavioral analysis and personalized marketing campaigns.',
    icon: Target,
    features: ['Behavioral Analysis', 'Customer Segmentation', 'Personalized Campaigns', 'Lifetime Value Prediction'],
    pricing: '$69 - $249/month',
    category: 'Customer Analytics',
    popular: true,
    setupFee: '$1,200',
    trialPeriod: '21 days'
  },
  {
    title: 'Smart Compliance Monitoring',
    description: 'Automated compliance monitoring and reporting with AI-powered risk assessment and regulatory updates.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Risk Assessment', 'Regulatory Updates', 'Automated Reporting'],
    pricing: '$199 - $799/month',
    category: 'Compliance',
    popular: true,
    setupFee: '$3,000',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered Voice Analytics',
    description: 'Voice data analysis for customer service optimization, sentiment analysis, and call center performance insights.',
    icon: Mic,
    features: ['Voice Analysis', 'Sentiment Detection', 'Performance Insights', 'Quality Scoring'],
    pricing: '$89 - $349/month',
    category: 'Voice Analytics',
    popular: true,
    setupFee: '$2,000',
    trialPeriod: '21 days'
  },
  {
    title: 'Intelligent Fleet Management',
    description: 'AI-powered fleet optimization with route planning, fuel efficiency, and predictive maintenance.',
    icon: Car,
    features: ['Route Optimization', 'Fuel Efficiency', 'Predictive Maintenance', 'Driver Analytics'],
    pricing: '$149 - $599/month',
    category: 'Fleet Management',
    popular: true,
    setupFee: '$3,500',
    trialPeriod: '30 days'
  },
  {
    title: 'Smart Learning Management System',
    description: 'AI-powered learning platform with personalized content delivery, progress tracking, and skill assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Skill Assessment', 'Content Recommendation'],
    pricing: '$59 - $199/month',
    category: 'Education',
    popular: true,
    setupFee: '$1,500',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered Quality Assurance',
    description: 'Automated quality testing and assurance with AI-driven test case generation and defect prediction.',
    icon: CheckCircle,
    features: ['Test Case Generation', 'Defect Prediction', 'Automated Testing', 'Quality Metrics'],
    pricing: '$99 - $399/month',
    category: 'Quality Assurance',
    popular: true,
    setupFee: '$2,000',
    trialPeriod: '21 days'
  },
  {
    title: 'Intelligent Data Backup & Recovery',
    description: 'AI-powered data backup with intelligent scheduling, deduplication, and automated disaster recovery.',
    icon: Database,
    features: ['Intelligent Scheduling', 'Data Deduplication', 'Disaster Recovery', 'Compliance Backup'],
    pricing: '$29 - $99/month',
    category: 'Data Management',
    popular: true,
    setupFee: '$500',
    trialPeriod: '14 days'
  },
  {
    title: 'Smart Event Management Platform',
    description: 'AI-powered event planning with attendee management, scheduling optimization, and real-time analytics.',
    icon: Calendar,
    features: ['Event Planning', 'Attendee Management', 'Scheduling Optimization', 'Real-time Analytics'],
    pricing: '$49 - $199/month',
    category: 'Event Management',
    popular: true,
    setupFee: '$800',
    trialPeriod: '14 days'
  },
  {
    title: 'AI-Powered Translation Management',
    description: 'Intelligent translation workflow management with quality assurance and automated language detection.',
    icon: Globe,
    features: ['Workflow Management', 'Quality Assurance', 'Language Detection', 'Translation Memory'],
    pricing: '$39 - $149/month',
    category: 'Translation',
    popular: true,
    setupFee: '$600',
    trialPeriod: '14 days'
  }
];

import Layout from '../components/Layout';

const microSaasProducts = [
  {
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard'],
    pricing: '$29 - $199/month',
    category: 'Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite'
  },
  {
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking'],
    pricing: '$49 - $299/month',
    category: 'Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics and custom reporting.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization'],
    pricing: '$39 - $249/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard'
  },
  {
    title: 'Automated Workflow Builder',
    description: 'No-code automation platform for business processes and integrations.',
    icon: Zap,
    features: ['Drag & Drop Builder', '500+ Integrations', 'Conditional Logic', 'API Access'],
    pricing: '$19 - $149/month',
    category: 'Automation',
    popular: true,
    benefits: ['Process Automation', 'Time Savings', 'Error Reduction', 'Scalability'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/workflow-builder'
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing and multi-channel support.',
    icon: MessageSquare,
    features: ['NLP Processing', 'Multi-channel Support', 'Knowledge Base', 'Human Handoff'],
    pricing: '$25 - $199/month',
    category: 'Customer Service',
    benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Customer Satisfaction'],
    marketPrice: '$40 - $300/month',
    link: 'https://ziontechgroup.com/ai-support-bot'
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Support', 'Analytics'],
    pricing: '$59 - $399/month',
    category: 'Inventory',
    benefits: ['Reduced Stockouts', 'Lower Costs', 'Better Planning', 'Automated Management'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-inventory'
  },
  {
    title: 'AI Email Marketing Platform',
    description: 'Intelligent email campaigns with personalization, A/B testing, and automation.',
    icon: Mail,
    features: ['AI Personalization', 'A/B Testing', 'Automation', 'Advanced Analytics'],
    pricing: '$29 - $199/month',
    category: 'Email Marketing',
    benefits: ['Higher Open Rates', 'Better Engagement', 'Automated Campaigns', 'ROI Tracking'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-email-marketing'
  },
  {
    title: 'Smart Project Management',
    description: 'AI-enhanced project management with resource optimization and risk prediction.',
    icon: Calendar,
    features: ['AI Resource Planning', 'Risk Prediction', 'Time Tracking', 'Collaboration Tools'],
    pricing: '$39 - $299/month',
    category: 'Project Management',
    benefits: ['Better Planning', 'Risk Mitigation', 'Team Collaboration', 'Project Success'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/smart-project-management'
  },
  {
    title: 'AI Financial Analytics',
    description: 'Automated financial reporting, forecasting, and expense management platform.',
    icon: TrendingUp,
    features: ['Automated Reporting', 'Financial Forecasting', 'Expense Tracking', 'Budget Planning'],
    pricing: '$49 - $349/month',
    category: 'Finance',
    benefits: ['Accurate Forecasting', 'Cost Control', 'Automated Reports', 'Financial Insights'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/ai-financial-analytics'
  },
  {
    title: 'Smart HR Management',
    description: 'AI-powered HR platform with recruitment, performance management, and analytics.',
    icon: Users,
    features: ['AI Recruitment', 'Performance Analytics', 'Employee Engagement', 'Compliance'],
    pricing: '$59 - $399/month',
    category: 'HR',
    benefits: ['Better Hiring', 'Performance Insights', 'Employee Satisfaction', 'Compliance'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-hr-management'
  },
  {
    title: 'AI Social Media Manager',
    description: 'Automated social media posting, engagement, and analytics platform.',
    icon: Globe,
    features: ['Auto Posting', 'Engagement Tracking', 'Content Suggestions', 'Analytics'],
    pricing: '$19 - $149/month',
    category: 'Social Media',
    benefits: ['Consistent Posting', 'Better Engagement', 'Time Savings', 'Growth Tracking'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/ai-social-media-manager'
  },
  {
    title: 'Smart Document Management',
    description: 'AI-powered document processing, OCR, and intelligent filing system.',
    icon: FileText,
    features: ['OCR Processing', 'Smart Filing', 'Search & Retrieval', 'Version Control'],
    pricing: '$25 - $199/month',
    category: 'Document Management',
    benefits: ['Easy Organization', 'Quick Search', 'Version Control', 'Collaboration'],
    marketPrice: '$40 - $300/month',
    link: 'https://ziontechgroup.com/smart-document-management'
  },
  {
    title: 'AI Website Optimizer',
    description: 'Automated website performance optimization and SEO enhancement platform.',
    icon: Monitor,
    features: ['Performance Optimization', 'SEO Enhancement', 'A/B Testing', 'Analytics'],
    pricing: '$39 - $299/month',
    category: 'Web Optimization',
    benefits: ['Faster Loading', 'Better SEO', 'Higher Conversions', 'User Experience'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-website-optimizer'
  },
  {
    title: 'Smart E-commerce Analytics',
    description: 'AI-powered e-commerce insights with customer behavior analysis and recommendations.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Product Recommendations', 'Sales Forecasting', 'Inventory Insights'],
    pricing: '$49 - $349/month',
    category: 'E-commerce',
    benefits: ['Better Recommendations', 'Sales Growth', 'Customer Insights', 'Inventory Optimization'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-ecommerce-analytics'
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review with security analysis, performance optimization, and best practices.',
    icon: Code,
    features: ['Security Analysis', 'Performance Review', 'Best Practices', 'Automated Fixes'],
    pricing: '$29 - $199/month',
    category: 'Development',
    benefits: ['Better Code Quality', 'Security Assurance', 'Faster Reviews', 'Learning'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-code-review'
  },
  {
    title: 'Smart Energy Management',
    description: 'AI-powered energy monitoring and optimization for businesses and homes.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Predictive Maintenance'],
    pricing: '$19 - $149/month',
    category: 'Energy',
    benefits: ['Cost Savings', 'Energy Efficiency', 'Predictive Maintenance', 'Sustainability'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-energy-management'
  },
  {
    title: 'AI Translation Manager',
    description: 'Automated translation and localization platform with AI-powered accuracy.',
    icon: Globe,
    features: ['AI Translation', 'Multi-language Support', 'Quality Assurance', 'Workflow Management'],
    pricing: '$25 - $199/month',
    category: 'Translation',
    benefits: ['Accurate Translations', 'Cost Savings', 'Faster Delivery', 'Quality Control'],
    marketPrice: '$40 - $300/month',
    link: 'https://ziontechgroup.com/ai-translation-manager'
  },
  {
    title: 'Smart Compliance Monitor',
    description: 'Automated compliance monitoring and reporting for various industry standards.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Automated Reports', 'Risk Assessment', 'Audit Trail'],
    pricing: '$59 - $399/month',
    category: 'Compliance',
    benefits: ['Compliance Assurance', 'Risk Mitigation', 'Automated Reports', 'Audit Readiness'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-compliance-monitor'
  },
  {
    title: 'AI Video Analytics',
    description: 'Intelligent video analysis with object detection, behavior analysis, and insights.',
    icon: Video,
    features: ['Object Detection', 'Behavior Analysis', 'Real-time Alerts', 'Analytics Dashboard'],
    pricing: '$39 - $299/month',
    category: 'Video Analytics',
    benefits: ['Security Enhancement', 'Behavior Insights', 'Real-time Alerts', 'Cost Savings'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-video-analytics'
  }
];

const categories = [
  'All Products',
  'Sales & Marketing',
  'Finance',
  'Customer Service',
  'Inventory',
  'Social Media',
  'Email Marketing',
  'Project Management',
  'Document Management',
  'Human Resources',
  'Energy Management',
  'SEO & Marketing',
  'Research & Analytics',
  'Legal & Compliance',
  'Content Management',
  'Time Management',
  'Supply Chain',
  'Web Analytics',
  'Customer Analytics',
  'Compliance',
  'Voice Analytics',
  'Fleet Management',
  'Education',
  'Quality Assurance',
  'Data Management',
  'Event Management',
  'Translation',
  'Analytics',
  'Automation',
  'Web Optimization',
  'E-commerce',
  'Development',
  'Energy',
  'Compliance',
  'Video Analytics'
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Rapid Deployment",
    description: "Get up and running in days, not months with our pre-built solutions"
  },
  {
    icon: Star,
    title: "AI-Powered Intelligence",
    description: "Every solution includes advanced AI capabilities for maximum efficiency"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance"
  },
  {
    icon: Award,
    title: "Scalable Solutions",
    description: "Grow with your business with flexible pricing and feature scaling"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Choose Your Solution",
    description: "Select from our comprehensive catalog of micro SAAS solutions"
  },
  {
    step: "02",
    title: "Free Trial",
    description: "Test drive your chosen solution with our risk-free trial period"
  },
  {
    step: "03",
    title: "Quick Setup",
    description: "Our team handles the technical setup and integration for you"
  },
  {
    step: "04",
    title: "Go Live",
    description: "Start using your solution immediately with full support"
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$19-49",
    description: "Perfect for small businesses",
    features: ["Basic Features", "Email Support", "5 Users", "1GB Storage"],
    popular: false
  },
  {
    name: "Professional",
    price: "$49-199",
    description: "Ideal for growing businesses",
    features: ["Advanced Features", "Priority Support", "25 Users", "10GB Storage"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199-399",
    description: "For large organizations",
    features: ["All Features", "24/7 Support", "Unlimited Users", "Unlimited Storage"],
    popular: false
  }
];

export default function MicroSaasPage() {
  return (
    <>
      <Head>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover innovative micro SAAS solutions designed to solve specific business challenges. AI-powered tools, automation platforms, and specialized software services." />
        <meta name="keywords" content="micro saas, software as a service, business automation, AI tools, specialized software, business solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Micro SAAS Solutions
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Innovative software solutions designed to solve specific business challenges with AI-powered intelligence
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Solutions
                </Link>
                <Link href="#contact" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Micro SAAS Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive catalog of specialized software solutions designed to address specific business needs
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                      {service.popular && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      <div>Setup Fee: {service.setupFee}</div>
                      <div>Free Trial: {service.trialPeriod}</div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                      Start Free Trial
                    </button>
                  </div>
=======
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Innovative micro SaaS products for modern businesses. AI-powered tools for marketing, sales, analytics, and automation. Starting from $19/month."
      keywords="micro saas, saas products, business software, AI tools, automation, marketing tools, analytics"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Innovative{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Micro SaaS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful, affordable software solutions designed to solve specific business challenges. AI-powered tools that deliver real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="#products"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  View Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized software solutions that address specific business needs with powerful AI and automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {microSaasProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {product.popular && (
                      <div className="absolute -top-3 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-12 w-12 text-green-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                        <p className="text-sm text-green-600 font-semibold">{product.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-green-600">{product.pricing}</span>
                        <span className="text-sm text-gray-500">Market: {product.marketPrice}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.benefits.map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={product.link}
                        className="flex-1 inline-flex items-center justify-center text-green-600 hover:text-green-800 font-semibold transition-colors duration-200 border border-green-600 rounded-lg py-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-700 font-semibold transition-colors duration-200 rounded-lg py-2"
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features and support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg ${
                    tier.popular ? 'ring-2 ring-green-500 relative' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">{tier.price}</div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SAAS Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions are designed with your business success in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
=======
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through innovation, affordability, and customer success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with your micro SAAS solution in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today to discuss your micro SAAS needs and get a personalized solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </Link>
                <Link href="/ai-services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start with any of our micro SaaS solutions and see the difference AI-powered tools can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/ai-services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> main
  );
}