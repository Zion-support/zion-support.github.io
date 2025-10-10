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
  DollarSign
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
      title: "AI Quantum Financial Oracle",
      description: "Revolutionary quantum-powered financial analysis with ultra-fast market predictions",
      price: "$2,999/mo",
      features: ["Quantum Market Analysis", "Ultra-fast Predictions", "Risk Assessment", "Portfolio Optimization"],
      icon: Brain,
      category: "Quantum Finance",
      link: "/ai-quantum-financial-oracle",
      popular: true,
      rating: 4.9,
      users: "150+",
      trial: "30-day free trial"
    },
    {
      title: "AI 3D Generation Studio",
      description: "AI-powered 3D model generation, animation, and virtual environment creation",
      price: "$299/mo",
      features: ["3D Model Generation", "Animation Creation", "Virtual Environments", "Texture Generation"],
      icon: Globe,
      category: "Creative AI",
      link: "/ai-3d-generation",
      popular: true,
      rating: 4.7,
      users: "1,200+",
      trial: "14-day free trial"
    },
    {
      title: "AI Mobile App Builder Pro",
      description: "AI-powered mobile app development with automated coding and deployment",
      price: "$399/mo",
      features: ["Auto Code Generation", "UI/UX Design", "Cross-platform Development", "App Store Optimization"],
      icon: Rocket,
      category: "Development",
      link: "/ai-mobile-app-builder",
      popular: true,
      rating: 4.8,
      users: "2,300+",
      trial: "21-day free trial"
    },
    {
      title: "AI Neural Memory Assistant",
      description: "Advanced AI with persistent memory and contextual understanding",
      price: "$399/mo",
      features: ["Persistent Memory", "Contextual Understanding", "Personalized Responses", "Learning from Interactions"],
      icon: Shield,
      category: "Advanced AI",
      link: "/ai-neural-memory-assistant",
      popular: true,
      rating: 4.8,
      users: "1,200+",
      trial: "30-day free trial"
    },
    {
      title: "AI Climate Solutions Pro",
      description: "AI-powered climate monitoring and environmental impact optimization",
      price: "$499/mo",
      features: ["Carbon Footprint Analysis", "Climate Risk Assessment", "Sustainability Optimization", "Environmental Monitoring"],
      icon: Globe,
      category: "Climate Tech",
      link: "/ai-climate-solutions-pro",
      popular: true,
      rating: 4.9,
      users: "800+",
      trial: "30-day free trial"
    },
    {
      title: "AI Holographic Workspace",
      description: "Immersive 3D workspace with AI-powered collaboration tools",
      price: "$1,299/mo",
      features: ["3D Holographic Interface", "Virtual Collaboration", "AI-Powered Gestures", "Spatial Computing"],
      icon: Rocket,
      category: "Immersive Tech",
      link: "/ai-holographic-workspace",
      popular: false,
      rating: 4.7,
      users: "400+",
      trial: "30-day free trial"
    }
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
        
        {/* Floating Holographic Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated Particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text animate-pulse">
              {currentSlideData.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light neon-glow">
              {currentSlideData.subtitle}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              {currentSlideData.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {currentSlideData.features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-sm text-gray-300 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link
              to={currentSlideData.link}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10">{currentSlideData.cta}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </Link>
            
            <Link
              to="/demo"
              className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text">
              Featured AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most innovative AI-powered services that are transforming industries worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {service.popular && (
                        <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                      <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-1" />
                      {service.users}
                    </div>
                    <div className="text-cyan-400 font-medium">
                      {service.trial}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}