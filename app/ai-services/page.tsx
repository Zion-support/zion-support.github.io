import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Cube, Scale, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticBackground from "../components/FuturisticBackground";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

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
        "Custom dashboard creation",
        "Data visualization tools",
        "API integration"
      ],
      link: "/ai-analytics-dashboard-pro"
    },
    {
      id: "ai-cybersecurity-suite-pro",
      name: "AI Cybersecurity Suite Pro",
      description: "Comprehensive AI-driven cybersecurity solution with threat detection, automated response, and compliance monitoring",
      price: "From $3,000/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "AI threat detection",
        "Automated incident response",
        "Compliance monitoring",
        "Security analytics",
        "Vulnerability assessment",
        "24/7 monitoring"
      ],
      link: "/ai-cybersecurity-suite-pro"
    },
    {
      id: "ai-content-generation-pro",
      name: "AI Content Generation Pro",
      description: "Advanced AI content creation platform with natural language processing, multi-format support, and brand consistency",
      price: "From $1,500/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Multi-format content creation",
        "Brand voice consistency",
        "SEO optimization",
        "Content scheduling",
        "Plagiarism detection",
        "Multi-language support"
      ],
      link: "/ai-content-generation-pro"
    },
    {
      id: "ai-customer-support-chatbot",
      name: "AI Customer Support Chatbot",
      description: "Intelligent customer service automation with natural language understanding and seamless human handoff",
      price: "From $800/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Human handoff capability",
        "Knowledge base integration",
        "Sentiment analysis",
        "Performance analytics"
      ],
      link: "/ai-customer-support-chatbot"
    },
    {
      id: "ai-code-assistant-pro",
      name: "AI Code Assistant Pro",
      description: "Advanced AI-powered coding assistant with code generation, debugging, and optimization capabilities",
      price: "From $1,200/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "Code generation",
        "Bug detection and fixing",
        "Code optimization",
        "Documentation generation",
        "Multi-language support",
        "IDE integration"
      ],
      link: "/ai-code-assistant-pro"
    },
    {
      id: "ai-business-intelligence-pro",
      name: "AI Business Intelligence Pro",
      description: "Comprehensive business intelligence platform with AI-driven insights, forecasting, and strategic recommendations",
      price: "From $2,000/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Predictive analytics",
        "Strategic recommendations",
        "Market trend analysis",
        "Performance forecasting",
        "Custom reporting",
        "Data integration"
      ],
      link: "/ai-business-intelligence-pro"
    },
    {
      id: "ai-automation-platform",
      name: "AI Automation Platform",
      description: "Comprehensive automation platform with intelligent process automation, workflow management, and RPA capabilities",
      price: "From $2,800/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Process automation",
        "Workflow management",
        "RPA capabilities",
        "Integration tools",
        "Monitoring dashboard",
        "Custom automation"
      ],
      link: "/ai-automation-platform"
    },
    {
      id: "ai-data-analytics-pro",
      name: "AI Data Analytics Pro",
      description: "Advanced data analytics platform with machine learning, real-time processing, and interactive visualizations",
      price: "From $2,200/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "Machine learning models",
        "Real-time processing",
        "Interactive dashboards",
        "Data visualization",
        "Predictive modeling",
        "API integration"
      ],
      link: "/ai-data-analytics-pro"
    },
    {
      id: "ai-marketing-automation",
      name: "AI Marketing Automation",
      description: "Intelligent marketing automation platform with personalized campaigns, lead scoring, and performance optimization",
      price: "From $1,800/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "Personalized campaigns",
        "Lead scoring",
        "Email automation",
        "Social media management",
        "Performance analytics",
        "A/B testing"
      ],
      link: "/ai-marketing-automation"
    },
    {
      id: "ai-hr-recruitment-pro",
      name: "AI HR & Recruitment Pro",
      description: "Comprehensive HR solution with AI-powered recruitment, employee analytics, and performance management",
      price: "From $1,600/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "AI resume screening",
        "Candidate matching",
        "Employee analytics",
        "Performance tracking",
        "Retention insights",
        "Compliance monitoring"
      ],
      link: "/ai-hr-recruitment-pro"
    },
    {
      id: "ai-financial-analysis",
      name: "AI Financial Analysis",
      description: "Advanced financial analysis platform with risk assessment, fraud detection, and investment recommendations",
      price: "From $2,500/month",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-lime-500 to-green-500",
      features: [
        "Risk assessment",
        "Fraud detection",
        "Investment analysis",
        "Financial forecasting",
        "Compliance reporting",
        "Real-time monitoring"
      ],
      link: "/ai-financial-analysis"
    },
    {
      id: "ai-supply-chain-optimizer",
      name: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain optimization with demand forecasting, inventory management, and logistics optimization",
      price: "From $2,200/month",
      icon: <Truck className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: [
        "Demand forecasting",
        "Inventory optimization",
        "Logistics planning",
        "Supplier management",
        "Risk assessment",
        "Cost optimization"
      ],
      link: "/ai-supply-chain-optimizer"
    }
  ];

  const categories = [
    {
      name: "Analytics & Intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      services: aiServices.filter(service => 
        service.name.includes('Analytics') || service.name.includes('Intelligence')
      )
    },
    {
      name: "Automation & Process",
      icon: <Settings className="w-6 h-6" />,
      services: aiServices.filter(service => 
        service.name.includes('Automation') || service.name.includes('Process')
      )
    },
    {
      name: "Content & Communication",
      icon: <FileText className="w-6 h-6" />,
      services: aiServices.filter(service => 
        service.name.includes('Content') || service.name.includes('Support') || service.name.includes('Communication')
      )
    },
    {
      name: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      services: aiServices.filter(service => 
        service.name.includes('Security') || service.name.includes('Compliance')
      )
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "AI Services Available", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Services | Artificial Intelligence Solutions | Zion Tech Group"
        description="Comprehensive AI services including analytics, automation, content generation, cybersecurity, and more. Transform your business with cutting-edge artificial intelligence solutions."
        keywords="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI content generation, AI cybersecurity, business AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
        author="Zion Tech Group"
        section="AI Services"
        tags={["AI Services", "Artificial Intelligence", "Machine Learning", "AI Automation", "AI Analytics"]}
        readingTime={10}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Artificial Intelligence Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with our comprehensive AI services. From analytics and automation 
            to content generation and cybersecurity, we provide cutting-edge artificial intelligence solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Explore Services
            </FuturisticButton>
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
        </ResponsiveContainer>
      </section>

      {/* Services by Category */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Services by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive AI services organized by category. 
              Find the perfect solution for your business needs.
            </p>
          </div>

          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <FuturisticCard key={serviceIndex} className="group cursor-pointer">
                    <Link to={service.link} className="block">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        {service.icon}
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                      <div className="text-center mb-4">
                        <span className="text-cyan-400 font-bold text-lg">
                          {service.price}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-gray-400 text-sm">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                      <div className="text-center">
                        <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          ))}
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover how our AI services can revolutionize your business operations, 
            increase efficiency, and drive growth. Get started today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your AI Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
}