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
      title: "AI Drug Discovery Pro",
      description: "Accelerate pharmaceutical research with AI-powered molecular analysis",
      price: "$4,500/mo",
      features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization"],
      icon: Brain,
      category: "Healthcare AI",
      link: "/ai-drug-discovery-pro"
    },
    {
      title: "AI Climate Solutions Pro",
      description: "Combat climate change with intelligent environmental monitoring and prediction",
      price: "$3,200/mo",
      features: ["Carbon Footprint Analysis", "Weather Prediction", "Sustainability Planning"],
      icon: Globe,
      category: "Environmental AI",
      link: "/ai-climate-solutions-pro"
    },
    {
      title: "AI Space Technology Pro",
      description: "Advanced space exploration and satellite management solutions",
      price: "$5,500/mo",
      features: ["Satellite Operations", "Space Mission Planning", "Astronomical Data Analysis"],
      icon: Rocket,
      category: "Space Technology",
      link: "/ai-space-technology-pro"
    },
    {
      title: "AI Financial Crime Detection Pro",
      description: "Real-time fraud detection and financial security monitoring",
      price: "$2,800/mo",
      features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring"],
      icon: Shield,
      category: "Financial AI",
      link: "/ai-financial-crime-detection-pro"
    }
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16" role="region" aria-label="Hero content">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
              {currentSlideData.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
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
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} role="region" aria-label="Statistics">
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
        <div className="mb-20" role="region" aria-label="Featured AI Solutions">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text">
              Featured AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most innovative AI-powered services that are transforming industries worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
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

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              role="tab"
              aria-selected={index === currentSlide}
              aria-controls={`slide-${index}`}
              aria-label={`Go to slide ${index + 1}`}
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