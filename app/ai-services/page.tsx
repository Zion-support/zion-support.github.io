import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-analytics",
      name: "AI Analytics",
      description: "Advanced AI-powered data analytics with machine learning insights and predictive modeling",
      price: "From $299/month",
      originalPrice: "$499/month",
      discount: "40% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time data processing",
        "Machine learning insights",
        "Predictive analytics",
        "Custom dashboards",
        "API integration",
        "Advanced reporting",
        "Data visualization",
        "Automated alerts"
      ],
      benefits: [
        "Increase data accuracy by 95%",
        "Reduce analysis time by 80%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/ai-analytics",
      featured: true
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "Automated content creation with natural language processing and creative AI",
      price: "From $199/month",
      originalPrice: "$349/month",
      discount: "43% OFF",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Automated content creation",
        "Natural language processing",
        "Multi-language support",
        "Content optimization",
        "SEO integration",
        "Brand voice training",
        "Content scheduling",
        "Quality assurance"
      ],
      benefits: [
        "Reduce content creation time by 90%",
        "Improve content quality",
        "Scale content production",
        "Maintain brand consistency"
      ],
      category: "Content",
      rating: 4.8,
      reviews: 892,
      link: "/ai-content-generation",
      featured: true
    },
    {
      id: "ai-customer-support",
      name: "AI Customer Support",
      description: "Intelligent customer service automation with chatbots and sentiment analysis",
      price: "From $149/month",
      originalPrice: "$249/month",
      discount: "40% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Intelligent chatbots",
        "Sentiment analysis",
        "Multi-channel support",
        "Ticket routing",
        "Knowledge base integration",
        "Live agent handoff",
        "Performance analytics",
        "Custom training"
      ],
      benefits: [
        "Reduce support costs by 60%",
        "Improve response time by 95%",
        "Increase customer satisfaction",
        "Scale support operations"
      ],
      category: "Support",
      rating: 4.7,
      reviews: 1156,
      link: "/ai-customer-support",
      featured: true
    },
    {
      id: "ai-cybersecurity",
      name: "AI Cybersecurity",
      description: "Advanced threat detection and security automation with machine learning",
      price: "From $399/month",
      originalPrice: "$699/month",
      discount: "43% OFF",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Threat detection",
        "Anomaly detection",
        "Automated response",
        "Security monitoring",
        "Incident analysis",
        "Compliance reporting",
        "Risk assessment",
        "Real-time alerts"
      ],
      benefits: [
        "Detect threats 10x faster",
        "Reduce false positives by 85%",
        "Improve security posture",
        "Ensure compliance"
      ],
      category: "Security",
      rating: 4.9,
      reviews: 743,
      link: "/ai-cybersecurity",
      featured: true
    },
    {
      id: "ai-smart-contract-auditor",
      name: "AI Smart Contract Auditor",
      description: "AI-powered smart contract security auditing with vulnerability detection",
      price: "From $99/audit",
      originalPrice: "$199/audit",
      discount: "50% OFF",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI vulnerability detection",
        "Automated security analysis",
        "Gas optimization",
        "Compliance checking",
        "Real-time monitoring",
        "Multi-blockchain support",
        "Custom rule configuration",
        "Detailed audit reports"
      ],
      benefits: [
        "Prevent costly security breaches",
        "Reduce audit time by 80%",
        "Ensure smart contract compliance",
        "Save thousands in audit costs"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 456,
      link: "/ai-smart-contract-auditor",
      featured: true
    },
    {
      id: "ai-climate-prediction-engine",
      name: "AI Climate Prediction Engine",
      description: "Advanced climate prediction and weather forecasting with AI",
      price: "From $49/month",
      originalPrice: "$99/month",
      discount: "51% OFF",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "AI weather forecasting",
        "Climate trend analysis",
        "Extreme weather alerts",
        "Agricultural recommendations",
        "Energy demand prediction",
        "Carbon footprint tracking",
        "Real-time data processing",
        "Custom location monitoring"
      ],
      benefits: [
        "Improve agricultural planning",
        "Optimize energy consumption",
        "Reduce climate risks",
        "Make data-driven decisions"
      ],
      category: "Climate",
      rating: 4.7,
      reviews: 623,
      link: "/ai-climate-prediction-engine",
      featured: true
    },
    {
      id: "ai-3d-generation",
      name: "AI 3D Generation",
      description: "Revolutionary AI-powered 3D model generation from text and images",
      price: "From $29/month",
      originalPrice: "$59/month",
      discount: "51% OFF",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "AI 3D model generation",
        "Text-to-3D conversion",
        "Image-to-3D reconstruction",
        "Real-time rendering",
        "Multiple format exports",
        "Custom material creation",
        "Animation generation",
        "Cloud-based processing"
      ],
      benefits: [
        "Reduce 3D creation time by 90%",
        "No 3D modeling experience needed",
        "Generate unlimited 3D assets",
        "Scale your creative workflow"
      ],
      category: "3D",
      rating: 4.8,
      reviews: 789,
      link: "/ai-3d-generation",
      featured: true
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length, active: true },
    { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Content", count: aiServices.filter(s => s.category === "Content").length, active: false },
    { name: "Support", count: aiServices.filter(s => s.category === "Support").length, active: false },
    { name: "Security", count: aiServices.filter(s => s.category === "Security").length, active: false },
    { name: "Climate", count: aiServices.filter(s => s.category === "Climate").length, active: false },
    { name: "3D", count: aiServices.filter(s => s.category === "3D").length, active: false }
  ];

  const stats = [
    { number: "20+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "AI Processing", icon: <Zap className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's AI services transformed our business operations. We increased efficiency by 300% and reduced costs by 50%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI analytics platform gave us insights we never had before. Our revenue increased by 40% in just 3 months.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "AI content generation saved us countless hours. We can now produce 10x more content with the same team.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group"
        description="Advanced AI-powered solutions including analytics, content generation, customer support, cybersecurity, and more. Transform your business with cutting-edge artificial intelligence."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI content generation, AI customer support, AI cybersecurity"
        canonical="/ai-services"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">20+ AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            From analytics to content generation, cybersecurity to 3D creation - we have the AI tools you need.
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

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most popular AI services trusted by thousands of businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.filter(service => service.featured).map((service, index) => (
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our AI services
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI services to drive growth, efficiency, and innovation. 
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
  );
}
