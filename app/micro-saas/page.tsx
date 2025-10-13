import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "40% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time dashboard analytics",
        "Predictive business insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration",
        "Advanced filtering & segmentation",
        "Export to PDF/Excel/CSV",
        "White-label options"
      ],
      benefits: [
        "Increase revenue by 25%",
        "Reduce reporting time by 80%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, vulnerability scanning, and compliance monitoring",
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Real-time threat detection",
        "Automated vulnerability scanning",
        "Compliance monitoring (GDPR, HIPAA, SOX)",
        "24/7 security monitoring",
        "Incident response automation",
        "Security audit reports",
        "Multi-factor authentication",
        "Data encryption at rest & transit"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure compliance requirements",
        "Save on security costs"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/zion-security-shield",
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, file sharing, and collaboration tools",
      price: "From $9/month",
      originalPrice: "$15/month",
      discount: "40% OFF",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "End-to-end encryption",
        "Unlimited file sharing",
        "Real-time collaboration",
        "Version control & history",
        "Advanced search & filtering",
        "Mobile & desktop sync",
        "Team management tools",
        "API integration"
      ],
      benefits: [
        "Store unlimited files securely",
        "Collaborate in real-time",
        "Access files anywhere",
        "Reduce storage costs by 60%"
      ],
      category: "Storage",
      rating: 4.7,
      reviews: 2156,
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials",
      price: "From $19/month",
      originalPrice: "$35/month",
      discount: "46% OFF",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI content generation",
        "Multi-language support",
        "SEO optimization",
        "Brand voice customization",
        "Content calendar management",
        "Social media scheduling",
        "Plagiarism detection",
        "Performance analytics"
      ],
      benefits: [
        "Create 10x more content",
        "Improve SEO rankings",
        "Maintain brand consistency",
        "Save 15+ hours weekly"
      ],
      category: "Content",
      rating: 4.6,
      reviews: 1834,
      link: "/zion-content-studio",
      featured: false
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Automated data synchronization across platforms with real-time updates and conflict resolution",
      price: "From $15/month",
      originalPrice: "$25/month",
      discount: "40% OFF",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Multi-platform synchronization",
        "Real-time data updates",
        "Conflict resolution algorithms",
        "Data validation & cleaning",
        "Custom sync rules",
        "Error handling & recovery",
        "Audit trail & logging",
        "REST API access"
      ],
      benefits: [
        "Eliminate data silos",
        "Reduce manual data entry",
        "Ensure data accuracy",
        "Improve operational efficiency"
      ],
      category: "Data",
      rating: 4.5,
      reviews: 967,
      link: "/zion-data-sync",
      featured: false
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Advanced email marketing automation with AI-powered personalization and behavioral triggers",
      price: "From $12/month",
      originalPrice: "$20/month",
      discount: "40% OFF",
      icon: <Mail className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "AI-powered personalization",
        "Behavioral trigger campaigns",
        "A/B testing automation",
        "Advanced segmentation",
        "Email template library",
        "Deliverability optimization",
        "Performance analytics",
        "CRM integration"
      ],
      benefits: [
        "Increase open rates by 45%",
        "Boost conversion rates by 30%",
        "Reduce manual work by 90%",
        "Scale email marketing efforts"
      ],
      category: "Marketing",
      rating: 4.7,
      reviews: 1456,
      link: "/zion-email-automation",
      featured: false
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "Comprehensive project management with AI-powered insights, resource optimization, and team collaboration",
      price: "From $25/month",
      originalPrice: "$40/month",
      discount: "38% OFF",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "AI-powered project insights",
        "Resource optimization",
        "Team collaboration tools",
        "Gantt charts & timelines",
        "Budget tracking & forecasting",
        "Risk assessment & mitigation",
        "Time tracking & reporting",
        "Integration with 100+ tools"
      ],
      benefits: [
        "Complete projects 25% faster",
        "Reduce project costs by 20%",
        "Improve team productivity",
        "Minimize project risks"
      ],
      category: "Productivity",
      rating: 4.8,
      reviews: 1123,
      link: "/zion-project-master",
      featured: false
    },
    {
      id: "zion-crm-intelligence",
      name: "Zion CRM Intelligence",
      description: "AI-enhanced CRM with predictive analytics, lead scoring, and automated follow-ups",
      price: "From $35/month",
      originalPrice: "$55/month",
      discount: "36% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "AI lead scoring",
        "Predictive analytics",
        "Automated follow-ups",
        "Sales forecasting",
        "Customer journey mapping",
        "Pipeline management",
        "Performance dashboards",
        "Mobile CRM access"
      ],
      benefits: [
        "Increase sales by 35%",
        "Improve lead quality by 50%",
        "Reduce follow-up time by 70%",
        "Boost customer retention"
      ],
      category: "CRM",
      rating: 4.9,
      reviews: 1892,
      link: "/zion-crm-intelligence",
      featured: false
    },
    {
      id: "zion-ai-customer-service-pro",
      name: "Zion AI Customer Service Pro",
      description: "Intelligent customer service automation with multilingual support and sentiment analysis",
      price: "From $45/month",
      originalPrice: "$70/month",
      discount: "36% OFF",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "AI-powered chatbots",
        "Multilingual support (50+ languages)",
        "Sentiment analysis",
        "Ticket routing automation",
        "Knowledge base integration",
        "Live chat handoff",
        "Performance analytics",
        "Custom AI training"
      ],
      benefits: [
        "Reduce response time by 80%",
        "Handle 90% of queries automatically",
        "Improve customer satisfaction",
        "Scale support operations"
      ],
      category: "Support",
      rating: 4.7,
      reviews: 1654,
      link: "/zion-ai-customer-service-pro",
      featured: false
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "Visual workflow builder with AI optimization and integration capabilities for business processes",
      price: "From $22/month",
      originalPrice: "$35/month",
      discount: "37% OFF",
      icon: <Settings className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "Visual workflow builder",
        "AI process optimization",
        "500+ app integrations",
        "Conditional logic & triggers",
        "Error handling & retries",
        "Workflow analytics",
        "Team collaboration",
        "Custom API endpoints"
      ],
      benefits: [
        "Automate 80% of repetitive tasks",
        "Reduce errors by 95%",
        "Save 20+ hours weekly",
        "Improve process efficiency"
      ],
      category: "Automation",
      rating: 4.6,
      reviews: 1347,
      link: "/zion-workflow-automation",
      featured: false
    },
    {
      id: "zion-ai-accounting-assistant",
      name: "Zion AI Accounting Assistant",
      description: "Intelligent accounting automation with expense tracking, invoice processing, and financial insights",
      price: "From $30/month",
      originalPrice: "$50/month",
      discount: "40% OFF",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Automated expense tracking",
        "Invoice processing & OCR",
        "Financial reporting",
        "Tax preparation assistance",
        "Receipt scanning & categorization",
        "Bank reconciliation",
        "Budget planning & forecasting",
        "Compliance monitoring"
      ],
      benefits: [
        "Reduce accounting time by 70%",
        "Eliminate manual data entry",
        "Improve financial accuracy",
        "Ensure tax compliance"
      ],
      category: "Finance",
      rating: 4.8,
      reviews: 987,
      link: "/zion-ai-accounting-assistant",
      featured: false
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "AI-powered social media management with content optimization and performance analytics",
      price: "From $18/month",
      originalPrice: "$30/month",
      discount: "40% OFF",
      icon: <Share className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: [
        "Multi-platform posting",
        "AI content optimization",
        "Optimal timing suggestions",
        "Hashtag research & generation",
        "Content calendar management",
        "Performance analytics",
        "Competitor analysis",
        "Team collaboration tools"
      ],
      benefits: [
        "Increase engagement by 40%",
        "Save 10+ hours weekly",
        "Improve content performance",
        "Grow social media presence"
      ],
      category: "Social Media",
      rating: 4.5,
      reviews: 1234,
      link: "/zion-social-scheduler",
      featured: false
    },
    {
      id: "zion-ai-invoice-genius",
      name: "Zion AI Invoice Genius",
      description: "AI-powered invoice management with automated generation, payment tracking, and financial insights",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "41% OFF",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "AI-powered invoice generation",
        "Automated payment tracking",
        "Smart expense categorization",
        "Multi-currency support",
        "Real-time financial insights",
        "Automated reminders",
        "Tax calculation & reporting",
        "Client portal integration"
      ],
      benefits: [
        "Save 15+ hours weekly",
        "Reduce payment delays by 40%",
        "Improve cash flow management",
        "Eliminate manual errors"
      ],
      category: "Finance",
      rating: 4.8,
      reviews: 1456,
      link: "/zion-ai-invoice-genius",
      featured: true
    },
    {
      id: "zion-ai-inventory-smart",
      name: "Zion AI Inventory Smart",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization",
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      icon: <Package className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI-powered demand forecasting",
        "Automated reorder points",
        "Real-time inventory tracking",
        "Multi-location management",
        "Barcode scanning integration",
        "Supplier management system",
        "Cost optimization algorithms",
        "Waste reduction analytics"
      ],
      benefits: [
        "Reduce inventory costs by 25%",
        "Eliminate stockouts by 90%",
        "Optimize warehouse space usage",
        "Improve supplier relationships"
      ],
      category: "Inventory",
      rating: 4.7,
      reviews: 1892,
      link: "/zion-ai-inventory-smart",
      featured: true
    },
    {
      id: "zion-ai-compliance-manager",
      name: "Zion AI Compliance Manager",
      description: "AI-powered compliance management with automated monitoring, risk assessment, and regulatory updates",
      price: "From $99/month",
      originalPrice: "$159/month",
      discount: "38% OFF",
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "AI-powered compliance monitoring",
        "Automated risk assessment",
        "Real-time regulatory updates",
        "Multi-framework support (GDPR, HIPAA, SOX)",
        "Document management system",
        "Audit trail automation",
        "Policy template library",
        "Training management"
      ],
      benefits: [
        "Reduce compliance costs by 40%",
        "Eliminate compliance violations",
        "Automate 80% of compliance tasks",
        "Improve audit readiness"
      ],
      category: "Compliance",
      rating: 4.9,
      reviews: 1123,
      link: "/zion-ai-compliance-manager",
      featured: true
    },
    {
      id: "zion-ai-performance-monitor",
      name: "Zion AI Performance Monitor",
      description: "AI-powered performance monitoring with real-time analytics, predictive alerts, and automated optimization",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      icon: <Activity className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "AI-powered performance analytics",
        "Real-time system monitoring",
        "Predictive performance alerts",
        "Automated optimization recommendations",
        "Multi-platform support",
        "Custom dashboard creation",
        "Performance benchmarking",
        "User experience tracking"
      ],
      benefits: [
        "Improve performance by 60%",
        "Reduce downtime by 90%",
        "Optimize resource utilization",
        "Enhance user experience"
      ],
      category: "Performance",
      rating: 4.8,
      reviews: 1678,
      link: "/zion-ai-performance-monitor",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, active: true },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length, active: false },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length, active: false },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length, active: false },
    { name: "Data", count: microSaasServices.filter(s => s.category === "Data").length, active: false },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length, active: false },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length, active: false },
    { name: "CRM", count: microSaasServices.filter(s => s.category === "CRM").length, active: false },
    { name: "Support", count: microSaasServices.filter(s => s.category === "Support").length, active: false },
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length, active: false },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length, active: false },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length, active: false },
    { name: "Inventory", count: microSaasServices.filter(s => s.category === "Inventory").length, active: false },
    { name: "Compliance", count: microSaasServices.filter(s => s.category === "Compliance").length, active: false },
    { name: "Performance", count: microSaasServices.filter(s => s.category === "Performance").length, active: false }
  ];

  const stats = [
    { number: "55+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "15,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We increased revenue by 30% in just 2 months with their predictive analytics.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions. AI-powered analytics, security, content creation, automation, and more. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="micro saas, business software, AI tools, analytics, security, automation, productivity, CRM, marketing, cloud storage"
        />
        <meta
          name="keywords"
          content="micro saas, business software, analytics, CRM, marketing automation, project management, inventory management, HR software, cloud storage, AI assistant"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive collection of micro SAAS solutions. AI-powered analytics, security, content creation, automation, and more. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, AI-driven micro SAAS tools designed to transform your business operations. 
                Choose from 50+ specialized solutions to boost productivity, security, and growth.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Free 14-day trial</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">No setup fees</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="py-8 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most popular micro SAAS solutions trusted by thousands of businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.filter(service => service.featured).map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  {service.discount && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.discount}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    {service.originalPrice && (
                      <span className="ml-2 text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Browse our complete collection of micro SAAS solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {service.discount && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {service.discount}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-1 text-xs font-medium">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">{service.description}</p>

                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-white">{service.price}</span>
                    {service.originalPrice && (
                      <span className="ml-2 text-xs text-gray-400 line-through">{service.originalPrice}</span>
                    )}
                  </div>

                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  What Our Customers Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust our micro SAAS solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free 14-day trial today. No credit card required. Cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use business software solutions that can transform your operations immediately. 
              From analytics to security, CRM to marketing automation - everything you need to grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of business software solutions. Each tool is designed to solve specific business challenges with powerful features and intuitive interfaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our micro SAAS solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your free trial today - no credit card required.
            </p>
            
            {/* Contact Information */}
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}