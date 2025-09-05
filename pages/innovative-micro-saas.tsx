import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
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
  Truck,
  Factory,
  Banknote,
  Calendar,
  MapPin,
  Phone,
  Headphones,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  Battery as BatteryIcon,
  BatteryLow as BatteryLowIcon,
  Signal as SignalIcon,
  SignalHigh as SignalHighIcon,
  SignalLow as SignalLowIcon,
  SignalZero as SignalZeroIcon,
  Cloud,
  Database as DatabaseIcon,
  HardDrive,
  Wifi as WifiIcon2,
  Zap as ZapIcon,
  Users as UsersIcon,
  BarChart3 as BarChart3Icon,
  Code as CodeIcon,
  FileText as FileTextIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Building as BuildingIcon,
  Car as CarIcon,
  Heart as HeartIcon,
  ShoppingCart as ShoppingCartIcon,
  BookOpen as BookOpenIcon,
  Home as HomeIcon,
  Gamepad2 as Gamepad2Icon,
  Package as PackageIcon,
  Truck as TruckIcon,
  Factory as FactoryIcon,
  Banknote as BanknoteIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Eye as EyeIcon,
  Bot as BotIcon,
  MessageSquare as MessageSquareIcon,
  Search as SearchIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  Mic as MicIcon,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  PhoneCall,
  MessageCircle,
  Headphones as HeadphonesIcon,
  HelpCircle,
  Wrench as WrenchIcon,
  Cog as CogIcon,
  Layers as LayersIcon,
  GitBranch as GitBranchIcon,
  Terminal as TerminalIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  DollarSign as DollarSignIcon,
  CreditCard as CreditCardIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw as RefreshCwIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Wifi as WifiIcon3,
  WifiOff as WifiOffIcon2,
  Battery as BatteryIcon2,
  BatteryLow as BatteryLowIcon2,
  Signal as SignalIcon2,
  SignalHigh as SignalHighIcon2,
  SignalLow as SignalLowIcon2,
  SignalZero as SignalZeroIcon2
} from 'lucide-react';
import Layout from '../components/Layout';

const innovativeMicroSaasProducts = [
  {
    title: 'AI-Powered Code Quality Analyzer',
    description: 'Advanced static code analysis with AI-driven recommendations for code quality, security, and performance optimization.',
    icon: Code,
    features: ['Static Analysis', 'Security Scanning', 'Performance Optimization', 'Code Smell Detection', 'Automated Refactoring Suggestions'],
    pricing: '$49 - $299/month',
    category: 'Development Tools',
    popular: true,
    benefits: ['Higher Code Quality', 'Security Assurance', 'Faster Development', 'Team Learning'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/ai-code-quality-analyzer',
    description: 'Revolutionary code analysis platform that uses machine learning to identify code quality issues, security vulnerabilities, and performance bottlenecks. Our AI engine learns from millions of code repositories to provide intelligent recommendations for improvement.',
    useCases: ['Software Development Teams', 'Code Review Processes', 'Quality Assurance', 'Technical Debt Management'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'IntelliJ IDEA', 'Slack', 'Jira'],
    pricingTiers: [
      { name: 'Starter', price: '$49/month', features: ['Up to 5 repositories', 'Basic analysis', 'Email support'] },
      { name: 'Professional', price: '$149/month', features: ['Up to 25 repositories', 'Advanced analysis', 'Priority support', 'Custom rules'] },
      { name: 'Enterprise', price: '$299/month', features: ['Unlimited repositories', 'Full AI analysis', '24/7 support', 'Custom integrations'] }
    ]
  },
  {
    title: 'Smart API Rate Limiting & Management',
    description: 'Intelligent API rate limiting with dynamic throttling, usage analytics, and automated scaling based on traffic patterns.',
    icon: Network,
    features: ['Dynamic Rate Limiting', 'Usage Analytics', 'Auto-scaling', 'API Gateway', 'Real-time Monitoring'],
    pricing: '$29 - $199/month',
    category: 'API Management',
    popular: true,
    benefits: ['Cost Optimization', 'Better Performance', 'Fair Usage', 'Scalability'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/smart-api-rate-limiting',
    description: 'Next-generation API management platform that intelligently manages rate limits based on user behavior, system load, and business rules. Features advanced analytics and automated scaling to optimize API performance and costs.',
    useCases: ['SaaS Platforms', 'E-commerce APIs', 'Mobile App Backends', 'Microservices Architecture'],
    integrations: ['AWS API Gateway', 'Kong', 'Nginx', 'Express.js', 'Django', 'Rails', 'Node.js'],
    pricingTiers: [
      { name: 'Basic', price: '$29/month', features: ['Up to 1M requests', 'Basic analytics', 'Email support'] },
      { name: 'Pro', price: '$99/month', features: ['Up to 10M requests', 'Advanced analytics', 'Priority support', 'Custom rules'] },
      { name: 'Enterprise', price: '$199/month', features: ['Unlimited requests', 'Full analytics', '24/7 support', 'Custom integrations'] }
    ]
  },
  {
    title: 'AI-Powered Content Moderation Suite',
    description: 'Advanced content moderation using computer vision and NLP to automatically detect and filter inappropriate content across multiple platforms.',
    icon: Eye,
    features: ['Image Recognition', 'Text Analysis', 'Video Processing', 'Real-time Filtering', 'Custom Rules Engine'],
    pricing: '$39 - $299/month',
    category: 'Content Management',
    popular: true,
    benefits: ['Automated Moderation', 'Cost Reduction', 'Consistent Quality', 'Scalability'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-content-moderation',
    description: 'Comprehensive content moderation platform that uses state-of-the-art AI models to automatically detect and filter inappropriate content across text, images, and videos. Reduces moderation costs by up to 80% while maintaining high accuracy.',
    useCases: ['Social Media Platforms', 'E-commerce Sites', 'Online Communities', 'Content Management Systems'],
    integrations: ['WordPress', 'Drupal', 'Joomla', 'Custom APIs', 'Webhooks', 'REST APIs'],
    pricingTiers: [
      { name: 'Starter', price: '$39/month', features: ['Up to 10K content items', 'Basic moderation', 'Email support'] },
      { name: 'Professional', price: '$149/month', features: ['Up to 100K content items', 'Advanced moderation', 'Priority support', 'Custom models'] },
      { name: 'Enterprise', price: '$299/month', features: ['Unlimited content', 'Full AI moderation', '24/7 support', 'Custom integrations'] }
    ]
  },
  {
    title: 'Intelligent Cloud Cost Optimizer',
    description: 'AI-powered cloud cost optimization that automatically identifies waste, suggests right-sizing, and implements cost-saving measures across AWS, Azure, and GCP.',
    icon: Cloud,
    features: ['Cost Analysis', 'Right-sizing Recommendations', 'Reserved Instance Optimization', 'Spot Instance Management', 'Automated Actions'],
    pricing: '$99 - $599/month',
    category: 'Cloud Management',
    popular: true,
    benefits: ['Cost Savings', 'Automated Optimization', 'Better Resource Utilization', 'ROI Tracking'],
    marketPrice: '$150 - $1000/month',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    description: 'Advanced cloud cost optimization platform that uses machine learning to analyze your cloud usage patterns and automatically implement cost-saving measures. Typically saves 20-40% on cloud costs within the first month.',
    useCases: ['Enterprise Cloud Users', 'SaaS Companies', 'E-commerce Platforms', 'Development Teams'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    pricingTiers: [
      { name: 'Starter', price: '$99/month', features: ['Up to $10K monthly spend', 'Basic optimization', 'Email support'] },
      { name: 'Professional', price: '$299/month', features: ['Up to $50K monthly spend', 'Advanced optimization', 'Priority support', 'Custom rules'] },
      { name: 'Enterprise', price: '$599/month', features: ['Unlimited spend', 'Full optimization', '24/7 support', 'Custom integrations'] }
    ]
  },
  {
    title: 'AI-Powered Lead Scoring Engine',
    description: 'Intelligent lead scoring system that uses machine learning to automatically score and prioritize leads based on behavior, demographics, and engagement patterns.',
    icon: Target,
    features: ['Behavioral Analysis', 'Demographic Scoring', 'Engagement Tracking', 'Predictive Modeling', 'CRM Integration'],
    pricing: '$49 - $349/month',
    category: 'Sales Automation',
    popular: true,
    benefits: ['Higher Conversion Rates', 'Better Lead Quality', 'Sales Efficiency', 'ROI Improvement'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/ai-lead-scoring',
    description: 'Revolutionary lead scoring platform that uses advanced machine learning algorithms to automatically score and prioritize leads. Integrates with popular CRMs and marketing automation tools to provide real-time scoring and recommendations.',
    useCases: ['B2B Sales Teams', 'Marketing Agencies', 'E-commerce Companies', 'Lead Generation Services'],
    integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Mailchimp', 'ActiveCampaign'],
    pricingTiers: [
      { name: 'Starter', price: '$49/month', features: ['Up to 1K leads', 'Basic scoring', 'Email support'] },
      { name: 'Professional', price: '$149/month', features: ['Up to 10K leads', 'Advanced scoring', 'Priority support', 'Custom models'] },
      { name: 'Enterprise', price: '$349/month', features: ['Unlimited leads', 'Full AI scoring', '24/7 support', 'Custom integrations'] }
    ]
  },
  {
    title: 'Smart Social Media Scheduler & Analytics',
    description: 'AI-powered social media management platform with intelligent posting, content optimization, and comprehensive analytics across all major platforms.',
    icon: Globe,
    features: ['AI Content Optimization', 'Optimal Timing', 'Cross-platform Posting', 'Engagement Analytics', 'Hashtag Research'],
    pricing: '$19 - $149/month',
    category: 'Social Media',
    popular: true,
    benefits: ['Better Engagement', 'Time Savings', 'Content Optimization', 'Growth Tracking'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/smart-social-media-scheduler',
    description: 'Comprehensive social media management platform that uses AI to optimize posting times, content, and hashtags for maximum engagement. Features advanced analytics and automated posting across all major social media platforms.',
    useCases: ['Social Media Managers', 'Marketing Agencies', 'Small Businesses', 'Content Creators'],
    integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest'],
    pricingTiers: [
      { name: 'Starter', price: '$19/month', features: ['3 social accounts', 'Basic scheduling', 'Email support'] },
      { name: 'Professional', price: '$79/month', features: ['10 social accounts', 'Advanced analytics', 'Priority support', 'AI optimization'] },
      { name: 'Enterprise', price: '$149/month', features: ['Unlimited accounts', 'Full AI features', '24/7 support', 'Custom integrations'] }
    ]
  },
  {
    title: 'AI-Powered Document Processing Suite',
    description: 'Intelligent document processing platform that uses OCR, NLP, and machine learning to extract, analyze, and process information from any document type.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Automated Workflows', 'API Integration'],
    pricing: '$39 - $299/month',
    category: 'Document Management',
    popular: true,
    benefits: ['Automated Processing', 'Accuracy Improvement', 'Time Savings', 'Cost Reduction'],
    marketPrice: '$60 - $500/month',
    link: 'https://ziontechgroup.com/ai-document-processing',
    description: 'Advanced document processing platform that uses cutting-edge AI to automatically extract, classify, and process information from any document type. Reduces manual data entry by up to 90% while maintaining high accuracy.',
    useCases: ['Accounting Firms', 'Insurance Companies', 'Legal Firms', 'Healthcare Organizations'],
    integrations: ['Dropbox', 'Google Drive', 'OneDrive', 'SharePoint', 'Box', 'Custom APIs'],
    pricingTiers: [
      { name: 'Starter', price: '$39/month', features: ['Up to 1K documents', 'Basic processing', 'Email support'] },
      { name: 'Professional', price: '$149/month', features: ['Up to 10K documents', 'Advanced processing', 'Priority support', 'Custom models'] },
      { name: 'Enterprise', price: '$299/month', features: ['Unlimited documents', 'Full AI processing', '24/7 support', 'Custom integrations'] }
    ]
  },
  {
    title: 'Intelligent Workflow Automation Platform',
    description: 'No-code workflow automation platform with AI-powered suggestions, conditional logic, and 500+ integrations for seamless business process automation.',
    icon: Zap,
    features: ['Drag & Drop Builder', 'AI Suggestions', '500+ Integrations', 'Conditional Logic', 'Custom Actions'],
    pricing: '$29 - $199/month',
    category: 'Automation',
    popular: true,
    benefits: ['Process Automation', 'Time Savings', 'Error Reduction', 'Scalability'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/intelligent-workflow-automation',
    description: 'Revolutionary workflow automation platform that uses AI to suggest optimal workflows and automate complex business processes. Features an intuitive drag-and-drop interface with powerful conditional logic and extensive integrations.',
    useCases: ['Business Process Automation', 'Customer Onboarding', 'Order Processing', 'Data Synchronization'],
    integrations: ['Salesforce', 'HubSpot', 'Zapier', 'Slack', 'Microsoft 365', 'Google Workspace', 'Custom APIs'],
    pricingTiers: [
      { name: 'Starter', price: '$29/month', features: ['Up to 100 workflows', 'Basic integrations', 'Email support'] },
      { name: 'Professional', price: '$99/month', features: ['Up to 500 workflows', 'Advanced integrations', 'Priority support', 'Custom actions'] },
      { name: 'Enterprise', price: '$199/month', features: ['Unlimited workflows', 'Full integrations', '24/7 support', 'Custom development'] }
    ]
  },
  {
    title: 'AI-Powered Customer Support Analytics',
    description: 'Advanced customer support analytics platform that uses AI to analyze support interactions, predict customer satisfaction, and optimize support processes.',
    icon: Headphones,
    features: ['Sentiment Analysis', 'Response Time Optimization', 'Customer Satisfaction Prediction', 'Agent Performance Analytics', 'Trend Analysis'],
    pricing: '$49 - $349/month',
    category: 'Customer Experience',
    popular: true,
    benefits: ['Better Customer Satisfaction', 'Improved Support Quality', 'Agent Performance', 'Cost Optimization'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/ai-customer-support-analytics',
    description: 'Comprehensive customer support analytics platform that uses AI to analyze support interactions, predict customer satisfaction, and provide actionable insights for improving support quality and efficiency.',
    useCases: ['Customer Support Teams', 'Help Desk Operations', 'Call Centers', 'Customer Success Teams'],
    integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Salesforce Service Cloud', 'Microsoft Dynamics', 'Custom APIs'],
    pricingTiers: [
      { name: 'Starter', price: '$49/month', features: ['Up to 1K tickets', 'Basic analytics', 'Email support'] },
      { name: 'Professional', price: '$149/month', features: ['Up to 10K tickets', 'Advanced analytics', 'Priority support', 'Custom dashboards'] },
      { name: 'Enterprise', price: '$349/month', features: ['Unlimited tickets', 'Full AI analytics', '24/7 support', 'Custom integrations'] }
    ]
  },
  {
    title: 'Smart Inventory Demand Forecasting',
    description: 'AI-powered inventory management system with advanced demand forecasting, automated reordering, and optimization recommendations for retail and e-commerce.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Seasonal Analysis', 'Supplier Integration'],
    pricing: '$59 - $399/month',
    category: 'Inventory Management',
    popular: true,
    benefits: ['Reduced Stockouts', 'Lower Inventory Costs', 'Better Planning', 'Automated Management'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-inventory-demand-forecasting',
    description: 'Advanced inventory management platform that uses machine learning to predict demand patterns, optimize stock levels, and automate reordering processes. Reduces inventory costs by up to 30% while improving stock availability.',
    useCases: ['E-commerce Retailers', 'Wholesale Distributors', 'Manufacturing Companies', 'Multi-location Businesses'],
    integrations: ['Shopify', 'WooCommerce', 'Magento', 'SAP', 'Oracle', 'NetSuite', 'Custom APIs'],
    pricingTiers: [
      { name: 'Starter', price: '$59/month', features: ['Up to 1K products', 'Basic forecasting', 'Email support'] },
      { name: 'Professional', price: '$199/month', features: ['Up to 10K products', 'Advanced forecasting', 'Priority support', 'Custom models'] },
      { name: 'Enterprise', price: '$399/month', features: ['Unlimited products', 'Full AI forecasting', '24/7 support', 'Custom integrations'] }
    ]
  }
];

export default function InnovativeMicroSaasPage() {
  return (
    <Layout
      title="Innovative Micro SaaS Solutions - Zion Tech Group"
      description="Discover cutting-edge micro SaaS solutions powered by AI and advanced technology. Transform your business with our innovative software-as-a-service products."
      keywords="micro saas, innovative software, AI solutions, business automation, software as a service"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Micro SaaS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our cutting-edge micro SaaS products powered by AI and advanced technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/micro-saas"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Innovative Micro SaaS Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our cutting-edge micro SaaS solutions designed to solve real business problems with AI and advanced technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeMicroSaasProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {product.popular && (
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-12 w-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{product.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold text-blue-600">{product.pricing}</span>
                        <span className="text-sm text-gray-500">Market: {product.marketPrice}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        href={product.link}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center font-semibold"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-center font-semibold"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
                Let's discuss how our innovative micro SaaS solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/micro-saas"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}