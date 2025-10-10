'use client';
import React, { useState } from 'react';
import { 
  Zap, 
  Brain, 
  BarChart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign, 
  Shield, 
  Code, 
  Settings,
  Target,
  TrendingUp,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Award,
  Globe,
  Lock,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Camera,
  Music,
  Video,
  ShoppingCart,
  CreditCard,
  Heart,
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
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Truck,
  ChefHat,
  Sprout,
  Scale,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Building,
  Rocket,
  Eye,
  Cpu,
  FileText,
  Bot,
  Gamepad2,
  Package,
  Truck as TruckIcon,
  Smartphone as SmartphoneIcon,
  ChefHat as ChefHatIcon,
  Rocket as RocketIcon,
  Sprout as SproutIcon,
  Scale as ScaleIcon
} from 'lucide-react';

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'all', label: 'All Solutions', count: 50 },
    { name: 'productivity', label: 'Productivity', count: 12 },
    { name: 'marketing', label: 'Marketing', count: 8 },
    { name: 'analytics', label: 'Analytics', count: 6 },
    { name: 'finance', label: 'Finance', count: 5 },
    { name: 'design', label: 'Design', count: 4 },
    { name: 'development', label: 'Development', count: 7 },
    { name: 'health', label: 'Health & Fitness', count: 3 },
    { name: 'education', label: 'Education', count: 3 },
    { name: 'ecommerce', label: 'E-commerce', count: 2 }
  ];

  const microSAASSolutions = [
    {
      id: 1,
      name: "AI Project Manager Pro",
      description: "Intelligent project management with predictive analytics and automated resource allocation",
      price: "$99/mo",
      features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking", "Resource Allocation", "Budget Management"],
      category: "productivity",
      popular: true,
      icon: BarChart,
      color: "from-blue-500 to-cyan-600",
      users: "2,500+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-project-manager-pro"
    },
    {
      id: 2,
      name: "AI Analytics Dashboard",
      description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
      price: "$149/mo",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization", "Automated Alerts", "Performance Tracking"],
      category: "analytics",
      popular: true,
      icon: BarChart,
      color: "from-purple-500 to-pink-600",
      users: "3,200+",
      rating: 4.9,
      link: "https://ziontechgroup.com/ai-analytics-dashboard"
    },
    {
      id: 3,
      name: "AI Customer Support Bot",
      description: "24/7 AI-powered customer support with natural language processing and instant responses",
      price: "$199/mo",
      features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management", "Knowledge Base", "Integration APIs"],
      category: "marketing",
      popular: true,
      icon: Users,
      color: "from-green-500 to-emerald-600",
      users: "4,100+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-customer-support-bot"
    },
    {
      id: 4,
      name: "AI Content Generator",
      description: "Create high-quality content automatically with AI-powered writing and editing tools",
      price: "$79/mo",
      features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice", "Plagiarism Check", "Content Calendar"],
      category: "marketing",
      popular: true,
      icon: Zap,
      color: "from-orange-500 to-red-600",
      users: "5,800+",
      rating: 4.6,
      link: "https://ziontechgroup.com/ai-content-generation"
    },
    {
      id: 5,
      name: "AI Social Media Manager",
      description: "Automated social media management with AI-powered content creation and scheduling",
      price: "$129/mo",
      features: ["Auto Posting", "Content Creation", "Analytics", "Engagement Tracking", "Hashtag Optimization", "Multi-platform"],
      category: "marketing",
      popular: true,
      icon: Users,
      color: "from-pink-500 to-rose-600",
      users: "3,700+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-social-media-manager"
    },
    {
      id: 6,
      name: "AI Email Marketing Suite",
      description: "Intelligent email campaigns with AI-powered personalization and optimization",
      price: "$89/mo",
      features: ["Smart Segmentation", "A/B Testing", "Automation", "Performance Analytics", "Template Library", "Deliverability"],
      category: "marketing",
      popular: true,
      icon: Mail,
      color: "from-indigo-500 to-purple-600",
      users: "2,900+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-email-marketing"
    },
    {
      id: 7,
      name: "AI Financial Advisor",
      description: "Personalized financial planning and investment advice powered by advanced AI algorithms",
      price: "$199/mo",
      features: ["Portfolio Analysis", "Risk Assessment", "Investment Recommendations", "Tax Optimization", "Goal Tracking", "Market Insights"],
      category: "finance",
      popular: false,
      icon: BarChart,
      color: "from-emerald-500 to-green-600",
      users: "1,200+",
      rating: 4.9,
      link: "https://ziontechgroup.com/ai-financial-advisor"
    },
    {
      id: 8,
      name: "AI Workflow Automation",
      description: "Visual workflow builder with AI-powered process optimization and automation",
      price: "$159/mo",
      features: ["Visual Builder", "Process Optimization", "Integration Hub", "Performance Monitoring", "Custom Triggers", "Error Handling"],
      category: "productivity",
      popular: true,
      icon: Settings,
      color: "from-cyan-500 to-blue-600",
      users: "3,500+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-workflow-automation"
    },
    {
      id: 9,
      name: "AI Smart Calendar",
      description: "Intelligent scheduling and time management with AI-powered optimization",
      price: "$69/mo",
      features: ["Smart Scheduling", "Conflict Resolution", "Time Optimization", "Meeting Analytics", "Integration", "Mobile App"],
      category: "productivity",
      popular: true,
      icon: Clock,
      color: "from-yellow-500 to-orange-600",
      users: "4,300+",
      rating: 4.6,
      link: "https://ziontechgroup.com/ai-smart-calendar"
    },
    {
      id: 10,
      name: "AI Video Generator",
      description: "AI-powered video creation with automated editing and professional templates",
      price: "$179/mo",
      features: ["Auto Editing", "Template Library", "Voice Synthesis", "Multi-format Export", "Brand Kit", "Collaboration"],
      category: "design",
      popular: true,
      icon: Video,
      color: "from-red-500 to-pink-600",
      users: "2,100+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-video-generator"
    },
    {
      id: 11,
      name: "AI CRM Assistant",
      description: "Intelligent customer relationship management with AI-powered insights and automation",
      price: "$139/mo",
      features: ["Lead Scoring", "Sales Forecasting", "Customer Insights", "Automation Rules", "Pipeline Management", "Integration"],
      category: "productivity",
      popular: true,
      icon: Users,
      color: "from-violet-500 to-purple-600",
      users: "3,800+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-crm-assistant"
    },
    {
      id: 12,
      name: "AI Logo Designer Pro",
      description: "AI-powered logo design with brand analysis and unlimited iterations",
      price: "$79/mo",
      features: ["Brand Analysis", "Unlimited Iterations", "Vector Export", "Brand Guidelines", "Color Palette", "Font Matching"],
      category: "design",
      popular: true,
      icon: Palette,
      color: "from-pink-500 to-rose-600",
      users: "5,200+",
      rating: 4.5,
      link: "https://ziontechgroup.com/ai-logo-designer"
    },
    {
      id: 13,
      name: "AI Invoice Generator",
      description: "Automated invoice creation with smart templates and payment tracking",
      price: "$49/mo",
      features: ["Auto Generation", "Payment Tracking", "Tax Calculations", "Multi-currency", "Recurring Billing", "Client Portal"],
      category: "finance",
      popular: true,
      icon: FileText,
      color: "from-green-500 to-emerald-600",
      users: "6,100+",
      rating: 4.6,
      link: "https://ziontechgroup.com/ai-invoice-generator"
    },
    {
      id: 14,
      name: "AI Expense Tracker",
      description: "Smart expense management with receipt scanning and categorization",
      price: "$39/mo",
      features: ["Receipt Scanning", "Auto Categorization", "Tax Reports", "Budget Alerts", "Mobile App", "Integration"],
      category: "finance",
      popular: true,
      icon: Calculator,
      color: "from-blue-500 to-cyan-600",
      users: "4,700+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-expense-tracker"
    },
    {
      id: 15,
      name: "AI Lead Generation",
      description: "Automated lead discovery and qualification with AI-powered prospecting",
      price: "$199/mo",
      features: ["Lead Discovery", "Contact Enrichment", "Qualification Scoring", "CRM Integration", "Email Sequences", "Analytics"],
      category: "marketing",
      popular: true,
      icon: Target,
      color: "from-orange-500 to-red-600",
      users: "2,800+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-lead-generation"
    },
    {
      id: 16,
      name: "AI HR Assistant",
      description: "Intelligent human resources management with automated screening and onboarding",
      price: "$149/mo",
      features: ["Resume Screening", "Interview Scheduling", "Onboarding Automation", "Performance Tracking", "Employee Analytics", "Compliance"],
      category: "productivity",
      popular: true,
      icon: Users,
      color: "from-indigo-500 to-purple-600",
      users: "1,900+",
      rating: 4.6,
      link: "https://ziontechgroup.com/ai-hr-assistant"
    },
    {
      id: 17,
      name: "AI Legal Assistant",
      description: "Legal document analysis and contract review with AI-powered insights",
      price: "$299/mo",
      features: ["Contract Review", "Legal Research", "Document Analysis", "Compliance Checking", "Risk Assessment", "Template Library"],
      category: "productivity",
      popular: false,
      icon: Scale,
      color: "from-amber-500 to-orange-600",
      users: "800+",
      rating: 4.9,
      link: "https://ziontechgroup.com/ai-legal-assistant"
    },
    {
      id: 18,
      name: "AI Inventory Manager",
      description: "Smart inventory optimization with demand forecasting and automated reordering",
      price: "$179/mo",
      features: ["Demand Forecasting", "Auto Reordering", "Stock Optimization", "Supplier Management", "Analytics", "Integration"],
      category: "ecommerce",
      popular: true,
      icon: Package,
      color: "from-teal-500 to-cyan-600",
      users: "2,300+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-inventory-manager"
    },
    {
      id: 19,
      name: "AI Fitness Coach",
      description: "Personalized fitness training with AI-powered workout plans and nutrition guidance",
      price: "$59/mo",
      features: ["Custom Workouts", "Nutrition Plans", "Progress Tracking", "Form Analysis", "Goal Setting", "Community"],
      category: "health",
      popular: true,
      icon: Heart,
      color: "from-red-500 to-pink-600",
      users: "7,500+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-fitness-coach"
    },
    {
      id: 20,
      name: "AI E-commerce Optimizer",
      description: "Boost online sales with AI-powered product recommendations and pricing optimization",
      price: "$199/mo",
      features: ["Product Recommendations", "Price Optimization", "Inventory Management", "Customer Insights", "A/B Testing", "Analytics"],
      category: "ecommerce",
      popular: true,
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-600",
      users: "3,400+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-ecommerce-optimizer"
    },
    {
      id: 21,
      name: "AI Fraud Detection",
      description: "Advanced fraud prevention with real-time transaction monitoring and risk scoring",
      price: "$249/mo",
      features: ["Real-time Monitoring", "Risk Scoring", "Pattern Detection", "Alert System", "Machine Learning", "Integration"],
      category: "finance",
      popular: true,
      icon: Shield,
      color: "from-red-500 to-orange-600",
      users: "1,600+",
      rating: 4.9,
      link: "https://ziontechgroup.com/ai-fraud-detection"
    },
    {
      id: 22,
      name: "AI Music Composer",
      description: "Create original music with AI-powered composition and arrangement tools",
      price: "$89/mo",
      features: ["Original Compositions", "Style Adaptation", "Instrument Arrangement", "Royalty-free", "Collaboration", "Export Options"],
      category: "design",
      popular: true,
      icon: Music,
      color: "from-purple-500 to-pink-600",
      users: "4,200+",
      rating: 4.6,
      link: "https://ziontechgroup.com/ai-music-composition"
    },
    {
      id: 23,
      name: "AI Image Recognition",
      description: "Advanced image analysis and object detection for various business applications",
      price: "$129/mo",
      features: ["Object Detection", "Face Recognition", "Quality Analysis", "Custom Models", "API Access", "Batch Processing"],
      category: "development",
      popular: true,
      icon: Eye,
      color: "from-cyan-500 to-blue-600",
      users: "2,700+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-image-recognition"
    },
    {
      id: 24,
      name: "AI Document Processor",
      description: "Intelligent document processing with OCR, data extraction, and classification",
      price: "$159/mo",
      features: ["OCR Processing", "Data Extraction", "Document Classification", "Batch Processing", "API Integration", "Custom Workflows"],
      category: "productivity",
      popular: true,
      icon: FileText,
      color: "from-indigo-500 to-purple-600",
      users: "3,100+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-document-processor"
    },
    {
      id: 25,
      name: "AI Load Testing",
      description: "Automated performance testing with AI-powered load generation and analysis",
      price: "$199/mo",
      features: ["Auto Load Generation", "Performance Analysis", "Bottleneck Detection", "Scalability Testing", "Reports", "Integration"],
      category: "development",
      popular: false,
      icon: Activity,
      color: "from-orange-500 to-red-600",
      users: "900+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-load-testing"
    },
    {
      id: 26,
      name: "AI Manufacturing Optimizer",
      description: "Smart manufacturing process optimization with predictive maintenance and quality control",
      price: "$399/mo",
      features: ["Predictive Maintenance", "Quality Control", "Process Optimization", "Supply Chain Integration", "Analytics", "IoT Integration"],
      category: "productivity",
      popular: true,
      icon: Factory,
      color: "from-slate-500 to-gray-600",
      users: "1,400+",
      rating: 4.9,
      link: "https://ziontechgroup.com/ai-manufacturing"
    },
    {
      id: 27,
      name: "AI Insurance Assistant",
      description: "Intelligent insurance management with automated claims processing and risk assessment",
      price: "$179/mo",
      features: ["Claims Processing", "Risk Assessment", "Policy Management", "Fraud Detection", "Customer Service", "Analytics"],
      category: "finance",
      popular: false,
      icon: Shield,
      color: "from-blue-500 to-indigo-600",
      users: "1,100+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-insurance"
    },
    {
      id: 28,
      name: "AI Education Platform",
      description: "Personalized learning experience with AI-powered curriculum and progress tracking",
      price: "$99/mo",
      features: ["Personalized Learning", "Progress Tracking", "Adaptive Content", "Assessment Tools", "Gamification", "Analytics"],
      category: "education",
      popular: true,
      icon: GraduationCap,
      color: "from-green-500 to-emerald-600",
      users: "5,600+",
      rating: 4.8,
      link: "https://ziontechgroup.com/ai-education"
    },
    {
      id: 29,
      name: "AI Code Assistant",
      description: "Intelligent coding assistant with automated code generation and debugging",
      price: "$79/mo",
      features: ["Code Generation", "Bug Detection", "Code Review", "Documentation", "Refactoring", "Integration"],
      category: "development",
      popular: true,
      icon: Code,
      color: "from-cyan-500 to-blue-600",
      users: "8,200+",
      rating: 4.7,
      link: "https://ziontechgroup.com/ai-code-assistant"
    },
    {
      id: 30,
      name: "AI Design Studio",
      description: "Complete design suite with AI-powered graphics, layouts, and brand consistency",
      price: "$149/mo",
      features: ["Auto Layout", "Brand Consistency", "Template Generation", "Color Optimization", "Asset Management", "Collaboration"],
      category: "design",
      popular: true,
      icon: Palette,
      color: "from-pink-500 to-rose-600",
      users: "3,900+",
      rating: 4.6,
      link: "https://ziontechgroup.com/ai-design-studio"
    }
  ];

  const filteredSolutions = microSAASSolutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const icons = {
      productivity: Settings,
      marketing: Target,
      analytics: BarChart,
      finance: DollarSign,
      design: Palette,
      development: Code,
      health: Heart,
      education: GraduationCap,
      ecommerce: ShoppingCart
    };
    return icons[category as keyof typeof icons] || Zap;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      productivity: 'text-blue-400',
      marketing: 'text-pink-400',
      analytics: 'text-purple-400',
      finance: 'text-green-400',
      design: 'text-rose-400',
      development: 'text-cyan-400',
      health: 'text-red-400',
      education: 'text-emerald-400',
      ecommerce: 'text-orange-400'
    };
    return colors[category as keyof typeof colors] || 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful, affordable AI-powered tools designed for modern businesses. 
              Choose from our comprehensive suite of micro SAAS solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">50+ Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">4.8+ Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">100K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group relative"
                >
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{solution.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{solution.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {solution.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {solution.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{solution.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Price:</span>
                        <span className="text-lg font-bold text-cyan-400">{solution.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Users:</span>
                        <span className="text-sm font-medium text-green-400">{solution.users}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Rating:</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-yellow-400">{solution.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <a
                        href={solution.link}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      <a
                        href="/contact"
                        className="w-full border border-cyan-400/50 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400/10 transition-all flex items-center justify-center"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 100,000+ businesses already using our micro SAAS solutions. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm mt-4">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}