import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow, Home, Truck, Scale } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-ai-crypto-analyzer",
      name: "Zion AI Crypto Analyzer",
      description: "Advanced cryptocurrency analysis platform with AI-powered market predictions, portfolio optimization, and risk assessment",
      price: "From $79/month",
      originalPrice: "$129/month",
      discount: "39% OFF",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "AI market prediction algorithms",
        "Portfolio optimization suggestions",
        "Real-time risk assessment",
        "Multi-exchange integration",
        "DeFi yield farming analysis",
        "NFT market insights",
        "Tax reporting automation",
        "Mobile trading alerts"
      ],
      benefits: [
        "Increase portfolio returns by 35%",
        "Reduce trading risks by 60%",
        "Automate investment decisions",
        "Stay ahead of market trends"
      ],
      category: "Crypto",
      rating: 4.8,
      reviews: 2156,
      link: "/zion-ai-crypto-analyzer",
      featured: true
    },
    {
      id: "zion-ai-health-monitor",
      name: "Zion AI Health Monitor",
      description: "Personal health tracking with AI insights, symptom analysis, medication reminders, and wellness recommendations",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "AI symptom analysis",
        "Medication tracking & reminders",
        "Vital signs monitoring",
        "Wellness recommendations",
        "Doctor appointment scheduling",
        "Health report generation",
        "Emergency contact alerts",
        "Integration with wearables"
      ],
      benefits: [
        "Improve health outcomes by 40%",
        "Reduce medical costs by 25%",
        "Prevent health emergencies",
        "Maintain optimal wellness"
      ],
      category: "Health",
      rating: 4.9,
      reviews: 3421,
      link: "/zion-ai-health-monitor",
      featured: true
    },
    {
      id: "zion-ai-real-estate-pro",
      name: "Zion AI Real Estate Pro",
      description: "Intelligent property analysis with market predictions, investment opportunities, and automated property management",
      price: "From $89/month",
      originalPrice: "$149/month",
      discount: "40% OFF",
      icon: <Home className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI property valuation",
        "Market trend analysis",
        "Investment ROI calculations",
        "Tenant screening automation",
        "Rent optimization",
        "Property maintenance scheduling",
        "Legal compliance tracking",
        "Multi-property management"
      ],
      benefits: [
        "Increase property values by 20%",
        "Maximize rental income by 30%",
        "Reduce vacancy rates by 50%",
        "Streamline property management"
      ],
      category: "Real Estate",
      rating: 4.7,
      reviews: 1876,
      link: "/zion-ai-real-estate-pro",
      featured: true
    },
    {
      id: "zion-ai-supply-chain-optimizer",
      name: "Zion AI Supply Chain Optimizer",
      description: "Advanced supply chain management with demand forecasting, logistics optimization, and risk mitigation",
      price: "From $149/month",
      originalPrice: "$249/month",
      discount: "40% OFF",
      icon: <Truck className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "AI demand forecasting",
        "Route optimization algorithms",
        "Inventory level optimization",
        "Supplier risk assessment",
        "Cost reduction analysis",
        "Sustainability tracking",
        "Real-time logistics monitoring",
        "Compliance management"
      ],
      benefits: [
        "Reduce supply chain costs by 25%",
        "Improve delivery times by 40%",
        "Minimize stockouts by 70%",
        "Enhance supplier relationships"
      ],
      category: "Supply Chain",
      rating: 4.8,
      reviews: 1234,
      link: "/zion-ai-supply-chain-optimizer",
      featured: true
    },
    {
      id: "zion-ai-legal-assistant",
      name: "Zion AI Legal Assistant",
      description: "Intelligent legal document analysis, contract review, compliance monitoring, and case research automation",
      price: "From $199/month",
      originalPrice: "$329/month",
      discount: "39% OFF",
      icon: <Scale className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      features: [
        "AI contract analysis",
        "Legal document generation",
        "Compliance monitoring",
        "Case law research",
        "Risk assessment reports",
        "Deadline tracking",
        "Client communication automation",
        "Billing time tracking"
      ],
      benefits: [
        "Reduce legal research time by 80%",
        "Improve contract accuracy by 95%",
        "Minimize compliance risks",
        "Increase billable hours by 30%"
      ],
      category: "Legal",
      rating: 4.9,
      reviews: 987,
      link: "/zion-ai-legal-assistant",
      featured: true
    },
    {
      id: "zion-ai-education-platform",
      name: "Zion AI Education Platform",
      description: "Personalized learning management system with AI tutoring, progress tracking, and adaptive curriculum",
      price: "From $59/month",
      originalPrice: "$99/month",
      discount: "40% OFF",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "AI-powered tutoring",
        "Adaptive learning paths",
        "Progress analytics",
        "Skill assessment tools",
        "Interactive content creation",
        "Student engagement tracking",
        "Parent/teacher dashboards",
        "Multi-language support"
      ],
      benefits: [
        "Improve learning outcomes by 45%",
        "Reduce teaching workload by 60%",
        "Personalize education experience",
        "Track student progress effectively"
      ],
      category: "Education",
      rating: 4.8,
      reviews: 2567,
      link: "/zion-ai-education-platform",
      featured: true
    },
    {
      id: "zion-ai-energy-manager",
      name: "Zion AI Energy Manager",
      description: "Smart energy management system with consumption optimization, renewable energy integration, and cost analysis",
      price: "From $69/month",
      originalPrice: "$115/month",
      discount: "40% OFF",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Energy consumption optimization",
        "Renewable energy integration",
        "Cost analysis & forecasting",
        "Smart grid connectivity",
        "Carbon footprint tracking",
        "Peak demand management",
        "Equipment efficiency monitoring",
        "Utility bill automation"
      ],
      benefits: [
        "Reduce energy costs by 35%",
        "Lower carbon footprint by 50%",
        "Optimize energy consumption",
        "Integrate renewable sources"
      ],
      category: "Energy",
      rating: 4.7,
      reviews: 1456,
      link: "/zion-ai-energy-manager",
      featured: true
    },
    {
      id: "zion-ai-fintech-suite",
      name: "Zion AI Fintech Suite",
      description: "Comprehensive financial technology platform with AI lending, fraud detection, and automated financial services",
      price: "From $179/month",
      originalPrice: "$299/month",
      discount: "40% OFF",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "AI credit scoring",
        "Fraud detection algorithms",
        "Automated loan processing",
        "Risk assessment models",
        "Regulatory compliance",
        "Payment processing",
        "Financial reporting",
        "API integration"
      ],
      benefits: [
        "Reduce loan processing time by 90%",
        "Decrease fraud losses by 85%",
        "Improve credit decisions",
        "Streamline financial operations"
      ],
      category: "Fintech",
      rating: 4.9,
      reviews: 1892,
      link: "/zion-ai-fintech-suite",
      featured: true
    },
    {
      id: "zion-ai-logistics-pro",
      name: "Zion AI Logistics Pro",
      description: "Advanced logistics management with route optimization, fleet tracking, and delivery prediction",
      price: "From $119/month",
      originalPrice: "$199/month",
      discount: "40% OFF",
      icon: <Package className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI route optimization",
        "Real-time fleet tracking",
        "Delivery time prediction",
        "Load optimization",
        "Driver performance analytics",
        "Fuel efficiency monitoring",
        "Maintenance scheduling",
        "Customer notifications"
      ],
      benefits: [
        "Reduce delivery costs by 30%",
        "Improve delivery accuracy by 95%",
        "Optimize fleet utilization",
        "Enhance customer satisfaction"
      ],
      category: "Logistics",
      rating: 4.8,
      reviews: 1678,
      link: "/zion-ai-logistics-pro",
      featured: true
    },
    {
      id: "zion-ai-analytics-pro",
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
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, active: true },
    { name: "Crypto", count: microSaasServices.filter(s => s.category === "Crypto").length, active: false },
    { name: "Health", count: microSaasServices.filter(s => s.category === "Health").length, active: false },
    { name: "Real Estate", count: microSaasServices.filter(s => s.category === "Real Estate").length, active: false },
    { name: "Supply Chain", count: microSaasServices.filter(s => s.category === "Supply Chain").length, active: false },
    { name: "Legal", count: microSaasServices.filter(s => s.category === "Legal").length, active: false },
    { name: "Education", count: microSaasServices.filter(s => s.category === "Education").length, active: false },
    { name: "Energy", count: microSaasServices.filter(s => s.category === "Energy").length, active: false },
    { name: "Fintech", count: microSaasServices.filter(s => s.category === "Fintech").length, active: false },
    { name: "Logistics", count: microSaasServices.filter(s => s.category === "Logistics").length, active: false },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length, active: false }
  ];

  const stats = [
    { number: "10+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Ready-to-use software solutions including analytics, security, productivity tools, and business automation. Transform your business with our innovative micro SAAS platform."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, business tools, productivity, automation, AI-powered tools, business intelligence, analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready-to-use software solutions that can transform your business operations immediately.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm rounded-2xl mb-16">
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
        <div className="py-8 bg-black/10 backdrop-blur-sm rounded-xl mb-16">
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
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl">
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
      </div>
    </div>
  );
}