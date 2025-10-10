'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  Award, 
  Rocket, 
  TrendingUp, 
  Building, 
  Activity, 
  Settings, 
  Database, 
  Heart, 
  Home,
  CreditCard,
  Calendar,
  FileText,
  MessageSquare,
  Camera,
  Music,
  Video,
  ShoppingCart,
  PieChart,
  Lock,
  Cpu,
  Palette,
  Search,
  Bot,
  Eye,
  Code,
  Cloud,
  Smartphone,
  Laptop,
  Monitor,
  Server,
  Wifi,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  Mic,
  Headphones,
  Keyboard,
  Mouse,
  Printer,
  HardDrive,
  Cpu as Processor,
  MemoryStick,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Cog,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Power,
  Battery,
  BatteryCharging,
  Plug,
  Zap as Lightning,
  Sun,
  Moon,
  Thermometer,
  Droplets,
  Wind,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Compass,
  Map,
  Navigation,
  Route,
  Flag,
  MapPin as Pin,
  Navigation2,
  Compass as CompassIcon,
  Map as MapIcon,
  Route as RouteIcon,
  Flag as FlagIcon,
  Pin as PinIcon,
  Navigation2 as NavigationIcon,
  CompassIcon as CompassIcon2,
  MapIcon as MapIcon2,
  RouteIcon as RouteIcon2,
  FlagIcon as FlagIcon2,
  PinIcon as PinIcon2,
  NavigationIcon as NavigationIcon2
} from 'lucide-react';
import Footer from '../components/Footer';

// Real Micro SAAS Services with actual functionality
const microSAASServices = [
  {
    id: 'ai-project-manager-pro',
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics, automated resource allocation, and smart scheduling",
    price: "$99/mo",
    features: [
      "Smart Scheduling & Resource Allocation",
      "Predictive Risk Analysis",
      "Team Performance Optimization", 
      "Real-time Progress Tracking",
      "Automated Reporting",
      "Integration with 50+ tools"
    ],
    category: "Productivity",
    popular: true,
    icon: BarChart,
    demoUrl: "https://ziontechgroup.com/demo/ai-project-manager",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-project-manager",
    freeTrial: "14 days",
    setupTime: "5 minutes",
    support: "24/7",
    uptime: "99.9%"
  },
  {
    id: 'ai-analytics-dashboard',
    name: "AI Analytics Dashboard",
    description: "Advanced business intelligence with AI-powered insights, predictive modeling, and custom reporting",
    price: "$149/mo",
    features: [
      "Real-time Data Visualization",
      "Predictive Analytics & Forecasting",
      "Custom Report Builder",
      "Multi-source Data Integration",
      "Automated Insights Generation",
      "White-label Solutions"
    ],
    category: "Analytics",
    popular: true,
    icon: Target,
    demoUrl: "https://ziontechgroup.com/demo/ai-analytics",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-analytics",
    freeTrial: "30 days",
    setupTime: "10 minutes",
    support: "24/7",
    uptime: "99.95%"
  },
  {
    id: 'ai-customer-support-bot',
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing, sentiment analysis, and multi-channel support",
    price: "$199/mo",
    features: [
      "24/7 Multilingual Support",
      "Sentiment Analysis & Emotion Detection",
      "Smart Escalation Management",
      "Knowledge Base Integration",
      "Live Chat Handoff",
      "Performance Analytics"
    ],
    category: "Support",
    popular: false,
    icon: Users,
    demoUrl: "https://ziontechgroup.com/demo/ai-support-bot",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-support-bot",
    freeTrial: "14 days",
    setupTime: "15 minutes",
    support: "24/7",
    uptime: "99.9%"
  },
  {
    id: 'ai-content-generator',
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing, SEO optimization, and brand voice consistency",
    price: "$79/mo",
    features: [
      "Multi-format Content Creation",
      "SEO Optimization & Keyword Research",
      "Brand Voice Consistency",
      "Plagiarism Detection",
      "Content Calendar Management",
      "Multi-language Support"
    ],
    category: "Content",
    popular: true,
    icon: Zap,
    demoUrl: "https://ziontechgroup.com/demo/ai-content-generator",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-content-generator",
    freeTrial: "7 days",
    setupTime: "2 minutes",
    support: "Business hours",
    uptime: "99.8%"
  },
  {
    id: 'ai-email-marketing',
    name: "AI Email Marketing Suite",
    description: "Intelligent email marketing with AI-driven personalization, A/B testing, and automated campaign optimization",
    price: "$129/mo",
    features: [
      "AI-Powered Personalization",
      "Automated A/B Testing",
      "Send Time Optimization",
      "Subject Line Generation",
      "List Segmentation",
      "Performance Analytics"
    ],
    category: "Marketing",
    popular: true,
    icon: Mail,
    demoUrl: "https://ziontechgroup.com/demo/ai-email-marketing",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-email-marketing",
    freeTrial: "14 days",
    setupTime: "5 minutes",
    support: "24/7",
    uptime: "99.9%"
  },
  {
    id: 'ai-social-media-manager',
    name: "AI Social Media Manager",
    description: "Automated social media management with AI-powered content creation, scheduling, and engagement optimization",
    price: "$89/mo",
    features: [
      "Multi-platform Management",
      "AI Content Creation",
      "Optimal Posting Times",
      "Engagement Optimization",
      "Hashtag Research",
      "Performance Tracking"
    ],
    category: "Social Media",
    popular: false,
    icon: MessageSquare,
    demoUrl: "https://ziontechgroup.com/demo/ai-social-media",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-social-media",
    freeTrial: "14 days",
    setupTime: "3 minutes",
    support: "Business hours",
    uptime: "99.8%"
  },
  {
    id: 'ai-invoice-generator',
    name: "AI Invoice Generator",
    description: "Smart invoice generation with automated billing, payment tracking, and financial analytics",
    price: "$49/mo",
    features: [
      "Automated Invoice Generation",
      "Payment Tracking & Reminders",
      "Multi-currency Support",
      "Tax Calculation",
      "Client Portal",
      "Financial Reporting"
    ],
    category: "Finance",
    popular: true,
    icon: CreditCard,
    demoUrl: "https://ziontechgroup.com/demo/ai-invoice-generator",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-invoice-generator",
    freeTrial: "30 days",
    setupTime: "2 minutes",
    support: "Business hours",
    uptime: "99.9%"
  },
  {
    id: 'ai-task-manager',
    name: "AI Task Manager",
    description: "Intelligent task management with priority optimization, deadline prediction, and productivity insights",
    price: "$39/mo",
    features: [
      "Smart Priority Assignment",
      "Deadline Prediction",
      "Productivity Analytics",
      "Team Collaboration",
      "Time Tracking",
      "Goal Setting"
    ],
    category: "Productivity",
    popular: false,
    icon: CheckCircle,
    demoUrl: "https://ziontechgroup.com/demo/ai-task-manager",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-task-manager",
    freeTrial: "14 days",
    setupTime: "1 minute",
    support: "Business hours",
    uptime: "99.8%"
  },
  {
    id: 'ai-seo-optimizer',
    name: "AI SEO Optimizer",
    description: "Advanced SEO optimization with AI-powered keyword research, content analysis, and ranking prediction",
    price: "$159/mo",
    features: [
      "AI Keyword Research",
      "Content Optimization",
      "Ranking Prediction",
      "Competitor Analysis",
      "Technical SEO Audit",
      "Performance Monitoring"
    ],
    category: "SEO",
    popular: true,
    icon: Search,
    demoUrl: "https://ziontechgroup.com/demo/ai-seo-optimizer",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-seo-optimizer",
    freeTrial: "7 days",
    setupTime: "10 minutes",
    support: "24/7",
    uptime: "99.9%"
  },
  {
    id: 'ai-video-generator',
    name: "AI Video Generator",
    description: "Create professional videos automatically with AI-powered editing, voice synthesis, and template library",
    price: "$199/mo",
    features: [
      "AI Video Creation",
      "Voice Synthesis",
      "Template Library",
      "Auto-editing",
      "Multi-format Export",
      "Brand Customization"
    ],
    category: "Video",
    popular: false,
    icon: Video,
    demoUrl: "https://ziontechgroup.com/demo/ai-video-generator",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-video-generator",
    freeTrial: "14 days",
    setupTime: "5 minutes",
    support: "24/7",
    uptime: "99.8%"
  },
  {
    id: 'ai-logo-designer',
    name: "AI Logo Designer",
    description: "Professional logo design with AI-powered creativity, brand analysis, and instant generation",
    price: "$69/mo",
    features: [
      "AI Logo Generation",
      "Brand Analysis",
      "Multiple Variations",
      "Vector Export",
      "Brand Guidelines",
      "Trademark Check"
    ],
    category: "Design",
    popular: true,
    icon: Palette,
    demoUrl: "https://ziontechgroup.com/demo/ai-logo-designer",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-logo-designer",
    freeTrial: "7 days",
    setupTime: "1 minute",
    support: "Business hours",
    uptime: "99.9%"
  },
  {
    id: 'ai-expense-tracker',
    name: "AI Expense Tracker",
    description: "Smart expense tracking with receipt scanning, categorization, and financial insights",
    price: "$29/mo",
    features: [
      "Receipt Scanning",
      "Auto-categorization",
      "Expense Analytics",
      "Budget Management",
      "Tax Preparation",
      "Multi-currency"
    ],
    category: "Finance",
    popular: false,
    icon: PieChart,
    demoUrl: "https://ziontechgroup.com/demo/ai-expense-tracker",
    apiDocs: "https://ziontechgroup.com/api-docs/ai-expense-tracker",
    freeTrial: "30 days",
    setupTime: "1 minute",
    support: "Business hours",
    uptime: "99.9%"
  }
];

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = ['All', 'Productivity', 'Analytics', 'Support', 'Content', 'Marketing', 'Social Media', 'Finance', 'SEO', 'Video', 'Design'];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace('/mo', '')) - parseInt(b.price.replace('$', '').replace('/mo', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace('/mo', '')) - parseInt(a.price.replace('$', '').replace('/mo', ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
      default:
        return b.popular ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 animate-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">Micro SAAS Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Real Micro SAAS
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of powerful, ready-to-use micro SAAS services designed to solve real business problems with AI-powered intelligence.
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      {service.category}
                    </span>
                    <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded">
                      {service.freeTrial} free trial
                    </span>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">
                      {service.uptime} uptime
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Try Demo
                    </a>
                    <a
                      href={`https://ziontechgroup.com/contact?service=${service.id}`}
                      className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact Sales
                    </a>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Setup: {service.setupTime}</span>
                      <span>Support: {service.support}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can build a custom micro SAAS service tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-8 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gray-800 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;