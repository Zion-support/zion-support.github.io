import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Package, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";

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
      id: "zion-ai-inventory-manager",
      name: "Zion AI Inventory Manager",
      description: "Intelligent inventory management with demand forecasting, automated reordering, and real-time tracking",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      icon: <Package className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI demand forecasting",
        "Automated reorder points",
        "Real-time inventory tracking",
        "Multi-location support",
        "Barcode scanning",
        "Supplier management",
        "Cost optimization",
        "Mobile app access"
      ],
      benefits: [
        "Reduce stockouts by 60%",
        "Lower inventory costs by 30%",
        "Improve cash flow",
        "Eliminate manual tracking"
      ],
      category: "Inventory",
      rating: 4.8,
      reviews: 892,
      link: "/zion-ai-inventory-manager",
      featured: true
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "Advanced customer relationship management with AI-powered lead scoring, automation, and analytics",
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Pipeline management",
        "Email integration",
        "Task automation",
        "Performance analytics",
        "Team collaboration",
        "Custom fields"
      ],
      benefits: [
        "Increase conversions by 45%",
        "Reduce manual work by 70%",
        "Improve customer relationships",
        "Boost sales productivity"
      ],
      category: "CRM",
      rating: 4.9,
      reviews: 1156,
      link: "/zion-ai-crm-pro",
      featured: true
    },
    {
      id: "zion-ai-marketing-automation",
      name: "Zion AI Marketing Automation",
      description: "Comprehensive marketing automation platform with AI-powered personalization and multi-channel campaigns",
      price: "From $59/month",
      originalPrice: "$99/month",
      discount: "40% OFF",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "AI-powered personalization",
        "Multi-channel campaigns",
        "Lead nurturing workflows",
        "A/B testing automation",
        "Email & SMS marketing",
        "Social media automation",
        "ROI tracking",
        "Advanced segmentation"
      ],
      benefits: [
        "Increase engagement by 50%",
        "Reduce marketing costs by 40%",
        "Improve conversion rates",
        "Automate complex workflows"
      ],
      category: "Marketing",
      rating: 4.7,
      reviews: 743,
      link: "/zion-ai-marketing-automation",
      featured: true
    },
    {
      id: "zion-ai-project-manager",
      name: "Zion AI Project Manager",
      description: "Intelligent project management with AI-powered task prioritization, resource allocation, and progress tracking",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "AI task prioritization",
        "Resource allocation",
        "Progress tracking",
        "Team collaboration",
        "Time tracking",
        "Budget management",
        "Risk assessment",
        "Reporting & analytics"
      ],
      benefits: [
        "Complete projects 30% faster",
        "Reduce project costs by 25%",
        "Improve team productivity",
        "Better resource utilization"
      ],
      category: "Project Management",
      rating: 4.8,
      reviews: 634,
      link: "/zion-ai-project-manager",
      featured: true
    },
    {
      id: "zion-ai-customer-support",
      name: "Zion AI Customer Support",
      description: "AI-powered customer support platform with chatbots, ticket management, and knowledge base automation",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "41% OFF",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "AI-powered chatbots",
        "Ticket management",
        "Knowledge base automation",
        "Multi-channel support",
        "Sentiment analysis",
        "Escalation management",
        "Performance analytics",
        "Custom integrations"
      ],
      benefits: [
        "Resolve 80% of queries automatically",
        "Improve response time by 70%",
        "Increase customer satisfaction",
        "Reduce support costs by 50%"
      ],
      category: "Customer Support",
      rating: 4.9,
      reviews: 567,
      link: "/zion-ai-customer-support",
      featured: true
    }
  ];

  const categories = [
    { name: "Analytics", count: 8, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "CRM", count: 6, icon: <Users className="w-5 h-5" /> },
    { name: "Marketing", count: 10, icon: <Target className="w-5 h-5" /> },
    { name: "Project Management", count: 5, icon: <Calendar className="w-5 h-5" /> },
    { name: "Customer Support", count: 4, icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Inventory", count: 3, icon: <Package className="w-5 h-5" /> }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "15,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Ready-to-Use Business Software"
        description="Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations. From analytics to project management, we have the tools you need."
        keywords="micro SAAS, business software, ready-to-use solutions, analytics, CRM, marketing automation, project management, customer support"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Micro SAAS Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use business software solutions that can transform your operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work out of the box.
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
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of micro SAAS solutions designed to address every aspect of your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-sm">{category.count} solutions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Micro SAAS Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and powerful micro SAAS solutions that are transforming businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                      <span className="text-gray-400 text-sm line-through">{service.originalPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {service.discount}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm ml-2">{service.rating} ({service.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Micro SAAS?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations 
            and drive growth. Start your transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}