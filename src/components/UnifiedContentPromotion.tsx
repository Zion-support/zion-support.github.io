import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  TrendingUp,
  Sparkles,
  Target,
  Rocket,
  Globe,
  Lock,
  Cpu,
  Database,
  MessageSquare,
  Eye,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Phone,
  Mail,
  MapPin,
  Award,
  Truck,
  Smartphone,
  ChefHat,
  Sprout,
  Scale
} from 'lucide-react';

const UnifiedContentPromotion: React.FC = () => {
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
      description: "Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our advanced AI solutions.",
      features: ["Real-time Analytics", "Automated Workflows", "Predictive Intelligence"],
      cta: "Explore AI Solutions",
      link: "/ai-services",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: Brain
    },
    {
      title: "Quantum Computing & Blockchain",
      subtitle: "Next-Generation Technology Solutions",
      description: "Revolutionary quantum computing and blockchain solutions for enterprise-grade security and performance.",
      features: ["Quantum Security", "Blockchain Integration", "Advanced Cryptography"],
      cta: "Discover Quantum Tech",
      link: "/quantum-computing",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: Cpu
    },
    {
      title: "Micro SAAS Solutions",
      subtitle: "Powerful Tools for Modern Businesses",
      description: "Comprehensive suite of micro SAAS applications designed to streamline operations and boost productivity.",
      features: ["Cloud-Based Tools", "Real-time Collaboration", "Scalable Infrastructure"],
      cta: "Browse Micro SAAS",
      link: "/micro-saas",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      icon: Code
    }
  ];

  const microSaasServices = [
    {
      name: "AI Voice Cloning Studio Pro",
      description: "Professional-grade voice cloning and synthesis platform",
      price: "$99/month",
      features: ["High-quality voice synthesis", "Multi-language support", "API integration"],
      icon: MessageSquare,
      category: "AI Tools",
      link: "/ai-voice-cloning-studio"
    },
    {
      name: "AI Code Security Auditor Pro",
      description: "Automated code security analysis and vulnerability detection",
      price: "$149/month",
      features: ["Real-time security scanning", "Vulnerability reports", "Compliance checking"],
      icon: Shield,
      category: "Security",
      link: "/ai-code-security-auditor"
    },
    {
      name: "AI Mental Health Companion Pro",
      description: "AI-powered mental health support and wellness tracking",
      price: "$79/month",
      features: ["24/7 AI support", "Mood tracking", "Wellness insights"],
      icon: Heart,
      category: "Healthcare",
      link: "/ai-mental-health-companion"
    },
    {
      name: "AI Smart Home Controller Pro",
      description: "Intelligent home automation and IoT management",
      price: "$129/month",
      features: ["Device integration", "Voice control", "Energy optimization"],
      icon: Home,
      category: "IoT",
      link: "/ai-smart-home-controller"
    },
    {
      name: "AI Investment Portfolio Optimizer Pro",
      description: "Advanced portfolio management and investment optimization",
      price: "$199/month",
      features: ["Portfolio analysis", "Risk assessment", "Investment recommendations"],
      icon: TrendingUp,
      category: "Finance",
      link: "/ai-investment-optimizer"
    },
    {
      name: "AI Language Learning Tutor Pro",
      description: "Personalized language learning with AI tutoring",
      price: "$59/month",
      features: ["Adaptive learning", "Speech recognition", "Progress tracking"],
      icon: GraduationCap,
      category: "Education",
      link: "/ai-language-tutor"
    },
    {
      name: "AI Fitness Coach Pro",
      description: "Personalized fitness training and health monitoring",
      price: "$89/month",
      features: ["Custom workout plans", "Health tracking", "Nutrition guidance"],
      icon: Activity,
      category: "Health",
      link: "/ai-fitness-coach"
    },
    {
      name: "AI Email Security Shield Pro",
      description: "Advanced email security and threat protection",
      price: "$119/month",
      features: ["Threat detection", "Phishing protection", "Email encryption"],
      icon: Lock,
      category: "Security",
      link: "/ai-email-security-shield"
    }
  ];

  const itServices = [
    {
      name: "AI Infrastructure Monitoring Pro",
      description: "Intelligent infrastructure monitoring and management",
      price: "$299/month",
      features: ["Real-time monitoring", "Predictive maintenance", "Automated scaling"],
      icon: Cloud,
      category: "Infrastructure",
      link: "/ai-infrastructure-monitoring"
    },
    {
      name: "Blockchain Integration Services Pro",
      description: "Enterprise blockchain solutions and smart contract development",
      price: "$499/month",
      features: ["Smart contracts", "Blockchain consulting", "Integration support"],
      icon: Database,
      category: "Blockchain",
      link: "/blockchain-integration-services"
    },
    {
      name: "AI API Management Pro",
      description: "Comprehensive API management and optimization platform",
      price: "$199/month",
      features: ["API gateway", "Rate limiting", "Analytics dashboard"],
      icon: Code,
      category: "APIs",
      link: "/ai-api-management"
    },
    {
      name: "Intelligent Database Migration Pro",
      description: "Automated database migration and optimization services",
      price: "$399/month",
      features: ["Zero-downtime migration", "Data validation", "Performance optimization"],
      icon: Database,
      category: "Database",
      link: "/intelligent-database-migration"
    }
  ];

  const aiServices = [
    {
      name: "AI Drug Discovery Pro",
      description: "Advanced AI-powered drug discovery and development platform",
      price: "$999/month",
      features: ["Molecular analysis", "Drug interaction prediction", "Clinical trial optimization"],
      icon: Stethoscope,
      category: "Healthcare AI",
      link: "/ai-drug-discovery-pro"
    },
    {
      name: "AI Climate Solutions Pro",
      description: "AI-driven climate modeling and environmental solutions",
      price: "$799/month",
      features: ["Climate prediction", "Carbon tracking", "Sustainability analytics"],
      icon: Sprout,
      category: "Climate AI",
      link: "/ai-climate-solutions-pro"
    },
    {
      name: "AI Space Technology Pro",
      description: "Space exploration and satellite data analysis platform",
      price: "$1299/month",
      features: ["Satellite imagery analysis", "Space weather prediction", "Mission planning"],
      icon: Rocket,
      category: "Space AI",
      link: "/ai-space-technology-pro"
    },
    {
      name: "AI Financial Crime Detection Pro",
      description: "Advanced fraud detection and financial crime prevention",
      price: "$599/month",
      features: ["Real-time fraud detection", "Risk assessment", "Compliance monitoring"],
      icon: Shield,
      category: "Finance AI",
      link: "/ai-financial-crime-detection-pro"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-text">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading Provider of AI-Powered Enterprise Solutions, Quantum Computing, 
              and Digital Transformation Services
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/30">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">300% ROI Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/30">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">70% Cost Reduction</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-400/30">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">90% Efficiency Gains</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Slides */}
        <div className="relative mb-20">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/30">
            <div className="relative h-96">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide ? 'opacity-100 translate-x-0' : 
                    index < currentSlide ? 'opacity-0 -translate-x-full' : 
                    'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="text-center max-w-4xl">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${slide.gradient} p-0.5`}>
                        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                          <slide.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-xl text-cyan-400 mb-4">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {slide.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-4 py-2 bg-cyan-400/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={slide.link}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                      >
                        {slide.cta}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Services Showcase */}
        <div className="space-y-20">
          {/* Micro SAAS Services */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, specialized tools designed to solve specific business challenges with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <Link
                        to={service.link}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                IT Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT infrastructure, cloud solutions, and enterprise-grade services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <Link
                        to={service.link}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Advanced AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI solutions for specialized industries and complex challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs bg-purple-400/20 text-purple-300 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <Link
                        to={service.link}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-400/30 p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our solutions can drive your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-white">Middletown, DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;