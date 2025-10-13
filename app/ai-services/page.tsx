import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Cube, Scale } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-analytics-dashboard-pro",
      name: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered business intelligence platform with predictive analytics, real-time insights, and automated reporting",
      price: "From $2,500/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time predictive analytics",
        "Machine learning insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration",
        "Advanced filtering & segmentation",
        "Export to PDF/Excel/CSV",
        "White-label options"
      ],
      benefits: [
        "Increase revenue by 35%",
        "Reduce reporting time by 85%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/ai-analytics-dashboard-pro",
      featured: true
    },
    {
      id: "ai-cybersecurity-suite-pro",
      name: "AI Cybersecurity Suite Pro",
      description: "Next-generation AI-powered security platform with threat detection, behavioral analysis, and automated response",
      price: "From $3,200/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "AI threat detection & prevention",
        "Behavioral analysis & anomaly detection",
        "Automated incident response",
        "Zero-day vulnerability protection",
        "Real-time monitoring & alerts",
        "Compliance reporting",
        "Multi-cloud security",
        "24/7 AI monitoring"
      ],
      benefits: [
        "Reduce security incidents by 90%",
        "Automate 95% of security tasks",
        "Comply with industry standards",
        "Protect against advanced threats"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/ai-cybersecurity-suite-pro",
      featured: true
    },
    {
      id: "ai-content-generation-pro",
      name: "AI Content Generation Pro",
      description: "Revolutionary AI content creation platform with multi-format support, brand voice consistency, and SEO optimization",
      price: "From $1,800/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        "Multi-format content creation",
        "Brand voice consistency",
        "SEO optimization",
        "Plagiarism detection",
        "Content scheduling",
        "Team collaboration",
        "Analytics & insights",
        "API integration"
      ],
      benefits: [
        "Increase content output by 300%",
        "Maintain brand consistency",
        "Improve SEO rankings",
        "Reduce content costs by 60%"
      ],
      category: "Content",
      rating: 4.7,
      reviews: 1156,
      link: "/ai-content-generation-pro",
      featured: true
    },
    {
      id: "ai-customer-service-pro",
      name: "AI Customer Service Pro",
      description: "Intelligent customer support platform with natural language processing, sentiment analysis, and automated resolution",
      price: "From $2,200/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Natural language processing",
        "Sentiment analysis",
        "Automated ticket resolution",
        "Multi-channel support",
        "Knowledge base integration",
        "Escalation management",
        "Performance analytics",
        "Custom AI training"
      ],
      benefits: [
        "Resolve 80% of tickets automatically",
        "Improve customer satisfaction by 45%",
        "Reduce response time by 70%",
        "Scale support operations"
      ],
      category: "Customer Service",
      rating: 4.9,
      reviews: 743,
      link: "/ai-customer-service-pro",
      featured: true
    },
    {
      id: "ai-marketing-automation-pro",
      name: "AI Marketing Automation Pro",
      description: "Advanced marketing automation platform with predictive analytics, personalization, and multi-channel orchestration",
      price: "From $2,800/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "Predictive customer analytics",
        "Personalized campaigns",
        "Multi-channel orchestration",
        "A/B testing automation",
        "Lead scoring & nurturing",
        "Email & SMS marketing",
        "Social media automation",
        "ROI optimization"
      ],
      benefits: [
        "Increase conversion rates by 50%",
        "Reduce marketing costs by 40%",
        "Improve customer engagement",
        "Automate complex workflows"
      ],
      category: "Marketing",
      rating: 4.6,
      reviews: 634,
      link: "/ai-marketing-automation-pro",
      featured: true
    },
    {
      id: "ai-data-analytics-pro",
      name: "AI Data Analytics Pro",
      description: "Comprehensive data analytics platform with machine learning, predictive modeling, and automated insights",
      price: "From $2,100/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Machine learning models",
        "Predictive analytics",
        "Data visualization",
        "Automated insights",
        "Real-time processing",
        "Data integration",
        "Custom dashboards",
        "Advanced reporting"
      ],
      benefits: [
        "Uncover hidden patterns",
        "Make accurate predictions",
        "Automate data analysis",
        "Improve decision making"
      ],
      category: "Analytics",
      rating: 4.8,
      reviews: 567,
      link: "/ai-data-analytics-pro",
      featured: true
    }
  ];

  const categories = [
    { name: "Analytics", count: 12, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Security", count: 8, icon: <Shield className="w-5 h-5" /> },
    { name: "Content", count: 15, icon: <FileText className="w-5 h-5" /> },
    { name: "Customer Service", count: 6, icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Marketing", count: 10, icon: <Target className="w-5 h-5" /> },
    { name: "Data", count: 9, icon: <Database className="w-5 h-5" /> }
  ];

  const stats = [
    { number: "50+", label: "AI Solutions", icon: <Brain className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Advanced Artificial Intelligence Solutions"
        description="Comprehensive AI services including analytics, cybersecurity, content generation, customer service, and marketing automation. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI cybersecurity, AI content generation, AI customer service, AI marketing automation"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Solutions Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            From analytics to cybersecurity, we provide cutting-edge artificial intelligence services 
            that drive growth and innovation.
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
              AI Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI services designed to address every aspect of your business needs.
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

      {/* Featured AI Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and powerful AI solutions that are transforming businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
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
                    <p className="text-cyan-400 font-medium">{service.price}</p>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI solutions to drive growth and innovation. 
            Start your AI transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your AI Journey
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