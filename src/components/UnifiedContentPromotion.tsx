import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Target,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Users,
  CheckCircle,
  Play,
  Award,
  Clock,
  DollarSign,
  Mic,
  Activity
} from 'lucide-react';

interface UnifiedContentPromotionProps {
  className?: string;
  children?: React.ReactNode;
}

export default function UnifiedContentPromotion({ 
  className = '', 
  children 
}: UnifiedContentPromotionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "AI-Powered Enterprise Solutions",
      subtitle: "Transform Your Business with Cutting-Edge AI Technology",
      description: "Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our advanced AI solutions",
      features: ["Machine Learning", "Quantum Computing", "Autonomous Systems", "Blockchain Integration"],
      cta: "Explore AI Services",
      link: "/ai-services",
      bgGradient: "from-purple-900 via-blue-900 to-cyan-900"
    },
    {
      title: "Micro SAAS Solutions",
      subtitle: "Powerful Tools for Modern Businesses",
      description: "Streamline operations with our comprehensive suite of micro SAAS applications",
      features: ["Project Management", "Analytics Dashboard", "Customer Support", "Marketing Automation"],
      cta: "View Micro SAAS",
      link: "/micro-saas",
      bgGradient: "from-green-900 via-emerald-900 to-teal-900"
    },
    {
      title: "IT Infrastructure & Cloud",
      subtitle: "Scalable Technology Solutions",
      description: "Build, deploy, and scale with our enterprise-grade IT infrastructure services",
      features: ["Cloud Migration", "DevOps", "Cybersecurity", "Database Management"],
      cta: "Discover IT Services",
      link: "/it-services",
      bgGradient: "from-orange-900 via-red-900 to-pink-900"
    }
  ];

  const currentSlideData = heroSlides[currentSlide];

  const stats = [
    { number: "300%", label: "Average ROI", icon: TrendingUp },
    { number: "70%", label: "Cost Reduction", icon: DollarSign },
    { number: "90%", label: "Efficiency Gains", icon: Target },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield }
  ];

  const featuredServices = [
    {
      title: "AI Drug Discovery Pro",
      description: "Accelerate pharmaceutical research with AI-powered molecular analysis and clinical trial optimization",
      price: "$4,500/mo",
      features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization", "Side Effect Prediction"],
      icon: Brain,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      href: "/ai-drug-discovery-pro"
    },
    {
      title: "AI Voice Cloning Studio",
      description: "Create natural-sounding voice clones with advanced AI technology for content creation and accessibility",
      price: "$29/mo",
      features: ["Neural Voice Synthesis", "Multi-Language Support", "High-Quality Audio", "Real-Time Processing"],
      icon: Mic,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      href: "/ai-voice-cloning-studio"
    },
    {
      title: "AI Code Security Auditor",
      description: "Secure your codebase with AI-powered vulnerability detection and compliance checking",
      price: "$49/mo",
      features: ["Vulnerability Detection", "Compliance Checking", "Real-Time Scanning", "Team Collaboration"],
      icon: Shield,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      href: "/ai-code-security-auditor"
    },
    {
      title: "AI Mental Health Companion",
      description: "24/7 AI-powered mental health support with personalized therapy and wellness planning",
      price: "$29/mo",
      features: ["AI Therapy Sessions", "Mood Tracking", "Crisis Intervention", "Wellness Planning"],
      icon: Activity,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      href: "/ai-mental-health-companion"
    },
    {
      title: "AI Smart Home Controller",
      description: "Intelligent home automation with AI-powered device control and energy optimization",
      price: "$29/mo",
      features: ["Universal Device Control", "AI Automation", "Energy Optimization", "Voice Control"],
      icon: Globe,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      href: "/ai-smart-home-controller"
    },
    {
      title: "AI Investment Optimizer",
      description: "Maximize investment returns with AI-powered portfolio analysis and risk management",
      price: "$49/mo",
      features: ["Portfolio Analysis", "Risk Assessment", "Tax Optimization", "Real-Time Intelligence"],
      icon: BarChart3,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      href: "/ai-investment-optimizer"
    }
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgGradient} transition-all duration-1000`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading AI & IT Solutions Provider
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {currentSlideData.title}
            </h1>
            
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {currentSlideData.description}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Link
                to={currentSlideData.link}
                className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                {currentSlideData.cta}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/demo"
                className="group border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular AI and IT solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className={`${service.color} font-bold text-lg`}>{service.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}