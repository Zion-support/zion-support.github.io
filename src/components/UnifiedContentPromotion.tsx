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

      description: "Accelerate pharmaceutical research with AI-powered molecular analysis and drug design",
      price: "$7,500/mo",
      features: ["Molecular Design", "Virtual Screening", "ADMET Prediction", "Clinical Optimization"],

      icon: Brain,
      category: "Healthcare AI",
      link: "/ai-drug-discovery-pro",
      benefits: "10x faster drug discovery, 95% accuracy in predictions, reduced clinical trial costs"
    },
    {

      title: "AI Voice Cloning Studio Pro",
      description: "Create perfect voice clones with AI-powered technology for content and applications",
      price: "$149/mo",
      features: ["Voice Cloning", "Multi-language Support", "Real-time Generation", "Enterprise Security"],
      icon: Mic,
      category: "Creative AI",
      link: "/ai-voice-cloning-studio"
    },
    {
      title: "AI Financial Analyzer Pro",
      description: "Transform financial management with AI-powered analysis and investment optimization",
      price: "$299/mo",
      features: ["Investment Optimization", "Fraud Detection", "Tax Planning", "Multi-currency Support"],
      icon: DollarSign,
      category: "Financial AI",
      link: "/ai-financial-analyzer-pro"
    },
    {
      title: "AI Infrastructure Monitoring Pro",
      description: "Monitor and optimize infrastructure with AI-powered insights and automated remediation",
      price: "$499/mo",
      features: ["Real-time Monitoring", "AI Analytics", "Security Monitoring", "Multi-cloud Support"],
      icon: Activity,
      category: "IT Infrastructure",
      link: "/ai-infrastructure-monitoring-pro"

    }
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-matrix">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl quantum-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl quantum-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl quantum-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-xl quantum-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 neural-pulse-advanced"></div>
        
        {/* Quantum Ripples */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 quantum-ripple"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 quantum-ripple" style={{ animationDelay: '1s' }}></div>

      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16" role="region" aria-label="Hero content">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 cyber-text-ultra neon-text-advanced">

              {currentSlideData.title}

            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light neon-pulse">
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-glow-cyan">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="mb-20" role="region" aria-label="Featured AI Solutions">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cyber-text neon-pulse">
              Featured AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most innovative AI-powered services that are transforming industries worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (

              <div key={index} className="group relative cyber-card-ultra p-6 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 holographic-shimmer rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full neon-glow">
                    Popular
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
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
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors neon-glow-cyan">
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
                  
                  <div className="mb-4">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">Key Benefits:</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{service.benefits}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white neon-glow-purple">{service.price}</div>
                    <Link
                      to={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
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