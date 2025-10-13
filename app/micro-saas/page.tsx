import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "ai-powered-email-analyzer",
      name: "AI-Powered Email Analyzer",
      description: "Advanced AI email analysis with sentiment detection, optimization recommendations, and comprehensive analytics",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "40% OFF",
      icon: <Mail className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time email sentiment analysis",
        "Automated content optimization suggestions",
        "Engagement prediction modeling",
        "Spam detection and filtering",
        "A/B testing automation",
        "Performance analytics dashboard",
        "Multi-platform integration",
        "Custom reporting and insights"
      ],
      benefits: [
        "Increase open rates by 40%",
        "Boost click-through rates by 60%",
        "Reduce email processing time by 5x",
        "Improve deliverability scores"
      ],
      category: "AI Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/ai-powered-email-analyzer",
      featured: true,
      new: true
    },
    {
      id: "smart-inventory-optimizer",
      name: "Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      icon: <Package className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "AI demand forecasting with 95% accuracy",
        "Automated reorder point calculation",
        "Real-time inventory tracking",
        "Multi-location support",
        "Barcode scanning integration",
        "Supplier management system",
        "Cost optimization recommendations",
        "Mobile app access"
      ],
      benefits: [
        "Reduce stockouts by 70%",
        "Lower carrying costs by 25%",
        "Improve cash flow management",
        "Eliminate manual counting processes"
      ],
      category: "Inventory Management",
      rating: 4.8,
      reviews: 892,
      link: "/smart-inventory-optimizer",
      featured: true,
      new: true
    },
    {
      id: "ai-customer-sentiment-tracker",
      name: "AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis with automated alerts and actionable insights for better customer experience",
      price: "From $49/month",
      originalPrice: "$82/month",
      discount: "40% OFF",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "Multi-channel sentiment monitoring",
        "Real-time sentiment scoring",
        "Emotion detection and analysis",
        "Trend identification and alerts",
        "Customer satisfaction scoring",
        "Loyalty trend analysis",
        "Engagement pattern recognition",
        "Predictive satisfaction modeling"
      ],
      benefits: [
        "Increase customer satisfaction by 35%",
        "Reduce response time by 50%",
        "Decrease customer churn by 40%",
        "Improve customer retention rates"
      ],
      category: "Customer Experience",
      rating: 4.9,
      reviews: 1456,
      link: "/ai-customer-sentiment-tracker",
      featured: true,
      new: true
    },
    {
      id: "smart-expense-categorizer",
      name: "Smart Expense Categorizer",
      description: "AI-powered expense management with automatic receipt scanning, smart categorization, and real-time analytics",
      price: "From $19/month",
      originalPrice: "$32/month",
      discount: "40% OFF",
      icon: <Receipt className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Advanced OCR technology with 99% accuracy",
        "Automatic expense categorization",
        "Custom category rules and learning",
        "Tax-deductible identification",
        "Real-time expense analytics",
        "Budget vs actual tracking",
        "Category-wise breakdown",
        "Monthly/yearly reports"
      ],
      benefits: [
        "Save 80% of expense processing time",
        "Improve accuracy by 95%",
        "Ensure tax compliance",
        "Reduce manual data entry"
      ],
      category: "Finance Management",
      rating: 4.6,
      reviews: 678,
      link: "/smart-expense-categorizer",
      featured: true,
      new: true
    },
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      originalPrice: "$499/month",
      discount: "40% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
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
      category: "Business Intelligence",
      rating: 4.9,
      reviews: 1247,
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      originalPrice: "$832/month",
      discount: "40% OFF",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "AI-powered threat detection",
        "Automated incident response",
        "Real-time security monitoring",
        "Vulnerability assessment",
        "Compliance management",
        "Security training modules",
        "24/7 security operations center",
        "Custom security policies"
      ],
      benefits: [
        "Prevent 99.9% of cyber threats",
        "Reduce security incidents by 90%",
        "Ensure compliance with regulations",
        "Protect sensitive data"
      ],
      category: "Cybersecurity",
      rating: 4.8,
      reviews: 1156,
      link: "/zion-security-shield",
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      originalPrice: "$165/month",
      discount: "40% OFF",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "End-to-end encryption",
        "Unlimited storage capacity",
        "Multi-device synchronization",
        "Advanced access controls",
        "Automated backups",
        "Version control",
        "Collaboration tools",
        "API integration"
      ],
      benefits: [
        "Secure data storage",
        "Reduce storage costs by 60%",
        "Improve data accessibility",
        "Ensure data compliance"
      ],
      category: "Cloud Storage",
      rating: 4.7,
      reviews: 987,
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform with automated generation, optimization, and multi-channel publishing",
      price: "From $149/month",
      originalPrice: "$248/month",
      discount: "40% OFF",
      icon: <Code className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "AI content generation",
        "Multi-channel publishing",
        "Content optimization",
        "Brand voice consistency",
        "SEO optimization",
        "Content calendar management",
        "Performance analytics",
        "Team collaboration tools"
      ],
      benefits: [
        "Increase content production by 300%",
        "Improve content quality",
        "Reduce content creation costs",
        "Boost engagement rates"
      ],
      category: "Content Creation",
      rating: 4.8,
      reviews: 1123,
      link: "/zion-content-studio",
      featured: true
    }
  ];

  const categories = [
    { id: "all", name: "All Services", count: microSaasServices.length },
    { id: "ai", name: "AI Analytics", count: microSaasServices.filter(s => s.category.includes("AI")).length },
    { id: "inventory", name: "Inventory Management", count: microSaasServices.filter(s => s.category.includes("Inventory")).length },
    { id: "customer", name: "Customer Experience", count: microSaasServices.filter(s => s.category.includes("Customer")).length },
    { id: "finance", name: "Finance Management", count: microSaasServices.filter(s => s.category.includes("Finance")).length },
    { id: "business", name: "Business Intelligence", count: microSaasServices.filter(s => s.category.includes("Business")).length },
    { id: "security", name: "Cybersecurity", count: microSaasServices.filter(s => s.category.includes("Cybersecurity")).length },
    { id: "cloud", name: "Cloud Storage", count: microSaasServices.filter(s => s.category.includes("Cloud")).length },
    { id: "content", name: "Content Creation", count: microSaasServices.filter(s => s.category.includes("Content")).length }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === "all" || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions | Zion Tech Group - Ready-to-Use Software</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions including AI analytics, inventory management, customer sentiment tracking, and more. Ready-to-deploy software for immediate business impact." />
        <meta name="keywords" content="micro SAAS, software solutions, AI analytics, inventory management, customer experience, business intelligence, ready-to-use software" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      <SEOOptimizer />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Software Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deploy powerful, AI-powered software solutions instantly. Our micro SAAS products are designed 
            to solve specific business challenges with minimal setup and maximum impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="#solutions"
              className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group"
            >
              Explore Solutions
              <Search className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of ready-to-deploy software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {service.new && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                      NEW
                    </span>
                  )}
                  {service.featured && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-medium">{service.price}</span>
                        <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>
                        <span className="bg-green-500 text-white px-1.5 py-0.5 rounded text-xs font-semibold">
                          {service.discount}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">{service.rating} ({service.reviews} reviews)</span>
                    </div>
                    <span className="inline-block bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-medium text-sm">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-xs">
                          <TrendingUp className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
            Choose from our comprehensive collection of micro SAAS solutions and start seeing results immediately. 
            All solutions come with 30-day free trials and dedicated support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Sales
              <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Email: kleber@ziontechgroup.com | 📞 Phone: +1 302 464 0950</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}