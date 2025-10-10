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
  Code,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  PieChart,
  TrendingDown,
  Truck,
  Smartphone,
  ChefHat,
  Sprout,
  Scale,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  ShoppingBag,
  DollarSign,
  Percent,
  TrendingUp as TrendingUpIcon,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Home as HomeIcon,
  Building as BuildingIcon,
  Activity as ActivityIcon,
  Settings as SettingsIcon,
  Database as DatabaseIcon,
  Heart as HeartIcon,
  Globe as GlobeIcon,
  Clock as ClockIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  TrendingUp as TrendingUpIcon2,
  BarChart as BarChartIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  Brain as BrainIcon,
  Mail as MailIcon2,
  MapPin as MapPinIcon,
  Phone as PhoneIcon2,
  Star as StarIcon2,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon
} from 'lucide-react';

// Real Micro SAAS Services Data
const microSAASServices = [
  {
    id: 'ai-project-manager-pro',
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics, automated resource allocation, and real-time collaboration tools.",
    price: "$99/mo",
    originalPrice: "$149/mo",
    features: [
      "Smart Scheduling & Timeline Optimization",
      "Predictive Risk Assessment",
      "Team Performance Analytics",
      "Automated Progress Tracking",
      "Resource Allocation Intelligence",
      "Budget Forecasting & Management",
      "Integration with 50+ Tools",
      "Real-time Collaboration Hub"
    ],
    category: "Productivity",
    popular: true,
    icon: BarChart,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    stats: { users: "10,000+", rating: "4.9", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-project-manager",
    docs: "https://docs.ziontechgroup.com/ai-project-manager"
  },
  {
    id: 'ai-analytics-dashboard',
    name: "AI Analytics Dashboard",
    description: "Advanced business intelligence with AI-powered insights, predictive analytics, and customizable data visualization.",
    price: "$149/mo",
    originalPrice: "$199/mo",
    features: [
      "Real-time Data Processing",
      "Predictive Analytics Engine",
      "Custom Report Builder",
      "Interactive Data Visualization",
      "Automated Insights Generation",
      "Multi-source Data Integration",
      "Advanced Filtering & Segmentation",
      "Export to Multiple Formats"
    ],
    category: "Analytics",
    popular: true,
    icon: Target,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    stats: { users: "15,000+", rating: "4.8", uptime: "99.95%" },
    demo: "https://ziontechgroup.com/demo/ai-analytics",
    docs: "https://docs.ziontechgroup.com/ai-analytics"
  },
  {
    id: 'ai-customer-support-bot',
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing, sentiment analysis, and seamless human handoff.",
    price: "$199/mo",
    originalPrice: "$299/mo",
    features: [
      "24/7 Multilingual Support",
      "Natural Language Processing",
      "Sentiment Analysis & Escalation",
      "Knowledge Base Integration",
      "Live Chat Handoff",
      "Performance Analytics",
      "Custom Bot Training",
      "API Integration"
    ],
    category: "Support",
    popular: true,
    icon: Users,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    stats: { users: "25,000+", rating: "4.9", uptime: "99.99%" },
    demo: "https://ziontechgroup.com/demo/ai-support-bot",
    docs: "https://docs.ziontechgroup.com/ai-support-bot"
  },
  {
    id: 'ai-content-generator',
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing, SEO optimization, and brand voice consistency.",
    price: "$79/mo",
    originalPrice: "$129/mo",
    features: [
      "Multi-format Content Creation",
      "SEO Optimization Engine",
      "Brand Voice Training",
      "Plagiarism Detection",
      "Content Calendar Management",
      "Team Collaboration Tools",
      "Performance Analytics",
      "API Access"
    ],
    category: "Content",
    popular: true,
    icon: Zap,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    stats: { users: "30,000+", rating: "4.7", uptime: "99.8%" },
    demo: "https://ziontechgroup.com/demo/ai-content-generator",
    docs: "https://docs.ziontechgroup.com/ai-content-generator"
  },
  {
    id: 'ai-social-media-manager',
    name: "AI Social Media Manager",
    description: "Automated social media management with AI-powered content scheduling, engagement optimization, and performance tracking.",
    price: "$129/mo",
    originalPrice: "$179/mo",
    features: [
      "Multi-platform Scheduling",
      "AI Content Optimization",
      "Engagement Analytics",
      "Hashtag Research & Optimization",
      "Competitor Analysis",
      "Influencer Collaboration Tools",
      "Crisis Management Alerts",
      "ROI Tracking"
    ],
    category: "Marketing",
    popular: true,
    icon: MessageSquare,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    stats: { users: "20,000+", rating: "4.8", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-social-media",
    docs: "https://docs.ziontechgroup.com/ai-social-media"
  },
  {
    id: 'ai-email-marketing-suite',
    name: "AI Email Marketing Suite",
    description: "Intelligent email marketing with AI-powered segmentation, personalization, and automated campaign optimization.",
    price: "$89/mo",
    originalPrice: "$139/mo",
    features: [
      "AI-powered Segmentation",
      "Dynamic Content Personalization",
      "Send Time Optimization",
      "A/B Testing Automation",
      "Deliverability Monitoring",
      "Advanced Analytics & Reporting",
      "Integration with 100+ Platforms",
      "Compliance Management"
    ],
    category: "Marketing",
    popular: true,
    icon: Mail,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    stats: { users: "18,000+", rating: "4.6", uptime: "99.95%" },
    demo: "https://ziontechgroup.com/demo/ai-email-marketing",
    docs: "https://docs.ziontechgroup.com/ai-email-marketing"
  },
  {
    id: 'ai-financial-advisor',
    name: "AI Financial Advisor",
    description: "Personalized financial planning and investment advice with AI-powered portfolio optimization and risk assessment.",
    price: "$199/mo",
    originalPrice: "$299/mo",
    features: [
      "Portfolio Optimization",
      "Risk Assessment & Management",
      "Tax Optimization Strategies",
      "Retirement Planning Tools",
      "Real-time Market Analysis",
      "Goal-based Investing",
      "Financial Health Scoring",
      "Regulatory Compliance"
    ],
    category: "Finance",
    popular: false,
    icon: DollarSign,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    stats: { users: "8,000+", rating: "4.9", uptime: "99.99%" },
    demo: "https://ziontechgroup.com/demo/ai-financial-advisor",
    docs: "https://docs.ziontechgroup.com/ai-financial-advisor"
  },
  {
    id: 'ai-workflow-automation',
    name: "AI Workflow Automation",
    description: "Visual workflow builder with AI-powered process optimization and intelligent automation recommendations.",
    price: "$149/mo",
    originalPrice: "$199/mo",
    features: [
      "Visual Workflow Builder",
      "AI Process Optimization",
      "Smart Automation Suggestions",
      "Integration with 200+ Apps",
      "Custom Trigger Creation",
      "Performance Monitoring",
      "Error Handling & Recovery",
      "Team Collaboration"
    ],
    category: "Automation",
    popular: true,
    icon: Settings,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    stats: { users: "12,000+", rating: "4.7", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-workflow-automation",
    docs: "https://docs.ziontechgroup.com/ai-workflow-automation"
  },
  {
    id: 'ai-smart-calendar',
    name: "AI Smart Calendar",
    description: "Intelligent scheduling and time management with AI-powered meeting optimization and productivity insights.",
    price: "$69/mo",
    originalPrice: "$99/mo",
    features: [
      "Smart Meeting Scheduling",
      "Time Block Optimization",
      "Productivity Analytics",
      "Meeting Preparation AI",
      "Conflict Resolution",
      "Integration with All Calendars",
      "Team Availability Intelligence",
      "Focus Time Management"
    ],
    category: "Productivity",
    popular: true,
    icon: Calendar,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    stats: { users: "22,000+", rating: "4.8", uptime: "99.95%" },
    demo: "https://ziontechgroup.com/demo/ai-smart-calendar",
    docs: "https://docs.ziontechgroup.com/ai-smart-calendar"
  },
  {
    id: 'ai-video-generator',
    name: "AI Video Generator",
    description: "AI-powered video creation with automated editing, voice synthesis, and professional-quality output.",
    price: "$179/mo",
    originalPrice: "$249/mo",
    features: [
      "AI Video Creation",
      "Voice Synthesis & Dubbing",
      "Automated Editing",
      "Template Library",
      "Brand Customization",
      "Multi-format Export",
      "Collaboration Tools",
      "Analytics & Performance"
    ],
    category: "Content",
    popular: true,
    icon: Video,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    stats: { users: "14,000+", rating: "4.6", uptime: "99.8%" },
    demo: "https://ziontechgroup.com/demo/ai-video-generator",
    docs: "https://docs.ziontechgroup.com/ai-video-generator"
  },
  {
    id: 'ai-crm-assistant',
    name: "AI CRM Assistant",
    description: "Intelligent customer relationship management with AI-powered lead scoring, sales forecasting, and automated follow-ups.",
    price: "$159/mo",
    originalPrice: "$219/mo",
    features: [
      "AI Lead Scoring",
      "Sales Forecasting",
      "Automated Follow-ups",
      "Customer Journey Mapping",
      "Pipeline Management",
      "Integration with 150+ Tools",
      "Performance Analytics",
      "Custom Workflow Builder"
    ],
    category: "Sales",
    popular: true,
    icon: Users,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    stats: { users: "16,000+", rating: "4.8", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-crm-assistant",
    docs: "https://docs.ziontechgroup.com/ai-crm-assistant"
  },
  {
    id: 'ai-logo-designer-pro',
    name: "AI Logo Designer Pro",
    description: "AI-powered logo design with brand analysis, multiple variations, and professional-quality output.",
    price: "$89/mo",
    originalPrice: "$129/mo",
    features: [
      "AI Logo Generation",
      "Brand Analysis & Suggestions",
      "Multiple Style Variations",
      "Vector Format Export",
      "Brand Guideline Creation",
      "Mockup Generation",
      "Revision Management",
      "Commercial License Included"
    ],
    category: "Design",
    popular: true,
    icon: Palette,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    stats: { users: "11,000+", rating: "4.7", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-logo-designer",
    docs: "https://docs.ziontechgroup.com/ai-logo-designer"
  }
];

const categories = [
  { name: "All", count: microSAASServices.length },
  { name: "Productivity", count: microSAASServices.filter(s => s.category === "Productivity").length },
  { name: "Analytics", count: microSAASServices.filter(s => s.category === "Analytics").length },
  { name: "Marketing", count: microSAASServices.filter(s => s.category === "Marketing").length },
  { name: "Support", count: microSAASServices.filter(s => s.category === "Support").length },
  { name: "Content", count: microSAASServices.filter(s => s.category === "Content").length },
  { name: "Finance", count: microSAASServices.filter(s => s.category === "Finance").length },
  { name: "Automation", count: microSAASServices.filter(s => s.category === "Automation").length },
  { name: "Sales", count: microSAASServices.filter(s => s.category === "Sales").length },
  { name: "Design", count: microSAASServices.filter(s => s.category === "Design").length }
];

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.popular ? 1 : -1;
      case "price-low":
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case "price-high":
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Powerful AI-powered micro SaaS tools to streamline your business operations. 
            Choose from our comprehensive suite of intelligent solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Micro SAAS Tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">200K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <div
                key={service.id}
                className={`cyber-card p-6 hover:scale-105 transition-all duration-300 relative group ${service.bgColor} ${service.borderColor} border`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="text-3xl font-bold text-white">{service.price}</div>
                      {service.originalPrice && (
                        <div className="text-lg text-gray-400 line-through">{service.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      {service.stats.users} users • {service.stats.rating}/5 rating • {service.stats.uptime} uptime
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Start Free Trial
                    </button>
                    <div className="flex gap-2">
                      <button className="flex-1 border border-cyan-400 text-cyan-400 font-medium py-2 px-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm">
                        View Demo
                      </button>
                      <button className="flex-1 border border-gray-600 text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI-powered micro SAAS solutions. 
            Start your free trial today and experience the future of business automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;