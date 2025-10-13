import { ArrowRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Bot, Target, Users, TrendingUp, FileText, Mail, Smartphone, CheckCircle, Star, Clock, DollarSign, Settings, Database, Lock, Smartphone as PhoneIcon, Monitor, Wifi, Code, Palette, PieChart, MessageSquare, Calendar, CreditCard, Headphones, Search, Filter, Download, Upload, Share2, Eye, EyeOff, RefreshCw, Play, Pause, Stop, Volume2, VolumeX, Wifi as WifiIcon, Battery, Signal, Wrench, Cog, Layers, Grid, List, Map, Globe as GlobeIcon, Zap as ZapIcon, Shield as ShieldIcon, Brain as BrainIcon, Target as TargetIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, FileText as FileTextIcon, Mail as MailIcon, Smartphone as SmartphoneIcon, CheckCircle as CheckCircleIcon, Star as StarIcon, Clock as ClockIcon, DollarSign as DollarSignIcon, Settings as SettingsIcon, Database as DatabaseIcon, Lock as LockIcon, Monitor as MonitorIcon, Wifi as WifiIcon2, Code as CodeIcon, Palette as PaletteIcon, PieChart as PieChartIcon, MessageSquare as MessageSquareIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, Headphones as HeadphonesIcon, Search as SearchIcon, Filter as FilterIcon, Download as DownloadIcon, Upload as UploadIcon, Share2 as Share2Icon, Eye as EyeIcon, EyeOff as EyeOffIcon, RefreshCw as RefreshCwIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Battery as BatteryIcon, Signal as SignalIcon, Wrench as WrenchIcon, Cog as CogIcon, Layers as LayersIcon, Grid as GridIcon, List as ListIcon, Map as MapIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "40% OFF",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics Engine",
        "Custom Report Builder",
        "API Integration",
        "Mobile App Access",
        "Team Collaboration Tools",
        "Data Export/Import",
        "24/7 Support"
      ],
      benefits: [
        "Increase productivity by 40%",
        "Reduce manual reporting by 80%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      link: "/zion-analytics-pro",
      category: "Analytics",
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring. Keep your business secure 24/7.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      color: "from-red-500 to-orange-500",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "Compliance Monitoring",
        "Real-time Alerts",
        "Vulnerability Scanning",
        "Security Training",
        "Incident Reports",
        "24/7 Security Monitoring"
      ],
      benefits: [
        "Prevent 99.9% of cyber threats",
        "Reduce security costs by 60%",
        "Ensure compliance",
        "Protect customer data"
      ],
      link: "/zion-security-shield",
      category: "Security",
      rating: 4.8,
      reviews: 89,
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools. Your data, secured and accessible anywhere.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $9/month",
      originalPrice: "$15/month",
      discount: "40% OFF",
      color: "from-indigo-500 to-purple-500",
      features: [
        "End-to-End Encryption",
        "Automated Backups",
        "File Versioning",
        "Team Collaboration",
        "Mobile Sync",
        "Access Controls",
        "Audit Logs",
        "99.9% Uptime SLA"
      ],
      benefits: [
        "Never lose important files",
        "Access files from anywhere",
        "Collaborate in real-time",
        "Reduce storage costs by 50%"
      ],
      link: "/zion-cloud-vault",
      category: "Storage",
      rating: 4.7,
      reviews: 203,
      popular: false
    },
    {
      name: "Zion AI Chatbot Builder",
      description: "Create intelligent chatbots without coding. Deploy AI-powered customer support, lead generation, and sales automation in minutes.",
      icon: <Bot className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$35/month",
      discount: "46% OFF",
      color: "from-green-500 to-emerald-500",
      features: [
        "No-Code Chatbot Builder",
        "Multi-Language Support",
        "CRM Integration",
        "Live Chat Handoff",
        "Analytics Dashboard",
        "Custom Templates",
        "API Access",
        "24/7 Support"
      ],
      benefits: [
        "Reduce support costs by 70%",
        "Increase customer satisfaction",
        "Generate more leads",
        "Scale customer service"
      ],
      link: "/zion-ai-chatbot-builder",
      category: "AI Automation",
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, emails, and marketing materials. Create engaging content at scale.",
      icon: <FileText className="w-8 h-8" />,
      price: "From $24/month",
      originalPrice: "$39/month",
      discount: "38% OFF",
      color: "from-purple-500 to-pink-500",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-Format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Team Collaboration",
        "Performance Analytics"
      ],
      benefits: [
        "Create content 10x faster",
        "Improve SEO rankings",
        "Maintain brand consistency",
        "Increase engagement by 65%"
      ],
      link: "/zion-content-studio",
      category: "Content",
      rating: 4.8,
      reviews: 94,
      popular: false
    },
    {
      name: "Zion Marketing Automation",
      description: "Complete marketing automation suite with email campaigns, social media management, lead scoring, and ROI tracking.",
      icon: <Target className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      color: "from-pink-500 to-rose-500",
      features: [
        "Email Automation",
        "Social Media Management",
        "Lead Scoring",
        "A/B Testing",
        "Campaign Analytics",
        "CRM Integration",
        "Landing Page Builder",
        "Customer Journey Mapping"
      ],
      benefits: [
        "Increase conversions by 45%",
        "Save 20 hours per week",
        "Improve lead quality",
        "Track ROI accurately"
      ],
      link: "/zion-marketing-automation",
      category: "Marketing",
      rating: 4.7,
      reviews: 78,
      popular: true
    },
    {
      name: "Zion Project Manager",
      description: "AI-powered project management tool with smart scheduling, resource allocation, and progress tracking. Manage projects efficiently.",
      icon: <Calendar className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "41% OFF",
      color: "from-teal-500 to-cyan-500",
      features: [
        "Smart Scheduling",
        "Resource Allocation",
        "Progress Tracking",
        "Team Collaboration",
        "Gantt Charts",
        "Time Tracking",
        "Budget Management",
        "Risk Assessment"
      ],
      benefits: [
        "Complete projects 30% faster",
        "Reduce project costs by 25%",
        "Improve team productivity",
        "Better resource utilization"
      ],
      link: "/zion-project-manager",
      category: "Productivity",
      rating: 4.6,
      reviews: 112,
      popular: false
    },
    {
      name: "Zion Financial Tracker",
      description: "Comprehensive financial management tool with expense tracking, budgeting, invoicing, and financial reporting. Take control of your finances.",
      icon: <CreditCard className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$32/month",
      discount: "41% OFF",
      color: "from-amber-500 to-yellow-500",
      features: [
        "Expense Tracking",
        "Budget Management",
        "Invoice Generation",
        "Financial Reports",
        "Tax Preparation",
        "Bank Integration",
        "Receipt Scanning",
        "Multi-Currency Support"
      ],
      benefits: [
        "Save 15 hours per month",
        "Reduce financial errors",
        "Improve cash flow",
        "Simplify tax preparation"
      ],
      link: "/zion-financial-tracker",
      category: "Finance",
      rating: 4.8,
      reviews: 145,
      popular: true
    },
    {
      name: "Zion HR Assistant",
      description: "AI-powered human resources management with employee onboarding, performance tracking, and automated workflows. Streamline HR processes.",
      icon: <Users className="w-8 h-8" />,
      price: "From $34/month",
      originalPrice: "$55/month",
      discount: "38% OFF",
      color: "from-violet-500 to-purple-500",
      features: [
        "Employee Onboarding",
        "Performance Tracking",
        "Time & Attendance",
        "Payroll Integration",
        "Document Management",
        "Training Programs",
        "Compliance Monitoring",
        "Employee Self-Service"
      ],
      benefits: [
        "Reduce HR workload by 50%",
        "Improve employee satisfaction",
        "Ensure compliance",
        "Streamline processes"
      ],
      link: "/zion-hr-assistant",
      category: "HR",
      rating: 4.7,
      reviews: 67,
      popular: false
    },
    {
      name: "Zion Inventory Manager",
      description: "Smart inventory management with AI-powered demand forecasting, automated reordering, and real-time tracking. Optimize your supply chain.",
      icon: <Database className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      color: "from-emerald-500 to-green-500",
      features: [
        "Real-time Inventory Tracking",
        "Demand Forecasting",
        "Automated Reordering",
        "Barcode Scanning",
        "Multi-Location Support",
        "Supplier Management",
        "Cost Analysis",
        "Integration APIs"
      ],
      benefits: [
        "Reduce stockouts by 80%",
        "Lower inventory costs by 30%",
        "Improve cash flow",
        "Optimize supply chain"
      ],
      link: "/zion-inventory-manager",
      category: "Inventory",
      rating: 4.9,
      reviews: 89,
      popular: true
    },
    {
      name: "Zion Customer Insights",
      description: "Advanced customer analytics platform with sentiment analysis, behavior tracking, and personalized recommendations. Understand your customers better.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "41% OFF",
      color: "from-orange-500 to-red-500",
      features: [
        "Customer Segmentation",
        "Sentiment Analysis",
        "Behavior Tracking",
        "Personalized Recommendations",
        "Churn Prediction",
        "Lifetime Value Analysis",
        "Survey Tools",
        "Integration APIs"
      ],
      benefits: [
        "Increase customer retention by 35%",
        "Boost sales by 25%",
        "Improve customer satisfaction",
        "Make data-driven decisions"
      ],
      link: "/zion-customer-insights",
      category: "Analytics",
      rating: 4.8,
      reviews: 123,
      popular: false
    },
    {
      name: "Zion API Gateway",
      description: "Enterprise-grade API management platform with rate limiting, authentication, monitoring, and analytics. Secure and scale your APIs.",
      icon: <Settings className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      color: "from-slate-500 to-gray-500",
      features: [
        "API Gateway",
        "Rate Limiting",
        "Authentication & Authorization",
        "API Monitoring",
        "Analytics Dashboard",
        "Developer Portal",
        "Load Balancing",
        "24/7 Support"
      ],
      benefits: [
        "Secure your APIs",
        "Scale to millions of requests",
        "Monitor performance",
        "Reduce development time"
      ],
      link: "/zion-api-gateway",
      category: "Development",
      rating: 4.7,
      reviews: 56,
      popular: true
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length },
    { name: "AI Automation", count: microSaasServices.filter(s => s.category === "AI Automation").length },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "HR", count: microSaasServices.filter(s => s.category === "HR").length },
    { name: "Inventory", count: microSaasServices.filter(s => s.category === "Inventory").length },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions including analytics, security, storage, AI automation, content creation, marketing, and more. Ready-to-deploy software for immediate business impact."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, business tools, analytics, security, storage, AI automation, content creation, marketing automation, project management, financial tracking, HR management, inventory management, API management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Micro
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}SAAS
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From AI-powered analytics to comprehensive security suites, deploy powerful tools in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Ready-to-Deploy Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of micro SAAS solutions designed to solve specific business challenges and accelerate growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                        <div className="text-xs text-green-400 font-semibold">{service.discount}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300 ml-2">{service.rating} ({service.reviews} reviews)</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-1 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-green-400">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-1 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy Your First Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Start with a free trial and see the difference.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
