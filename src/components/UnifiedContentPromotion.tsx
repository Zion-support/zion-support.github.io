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
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  Globe,
  Rocket,
  Cpu,
  Database,
  Lock,
  MessageSquare,
  Eye,
  Download,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock
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
      title: "AI-Powered Micro SAAS Solutions",
      subtitle: "Transform your business with intelligent automation",
      description: "Discover our suite of AI-powered micro SAAS tools designed to streamline your operations and boost productivity.",
      features: ["AI Invoice Generator", "Smart Password Manager", "Expense Tracker", "Project Management"],
      cta: "Explore Services",
      link: "/services",
      gradient: "from-cyan-500 via-purple-600 to-pink-500",
      icon: Zap
    },
    {
      title: "Advanced AI Services",
      subtitle: "Cutting-edge artificial intelligence solutions",
      description: "Leverage the power of quantum computing, machine learning, and neural networks for unprecedented business growth.",
      features: ["Quantum Computing", "Autonomous Systems", "Space Technology", "Climate Intelligence"],
      cta: "View AI Services",
      link: "/ai-services",
      gradient: "from-purple-500 via-pink-600 to-red-500",
      icon: Brain
    },
    {
      title: "Enterprise IT Solutions",
      subtitle: "Comprehensive technology infrastructure",
      description: "Build, secure, and scale your digital infrastructure with our expert IT services and cloud solutions.",
      features: ["Cloud Migration", "Cybersecurity", "Infrastructure Design", "24/7 Support"],
      cta: "Learn More",
      link: "/it-services",
      gradient: "from-blue-500 via-cyan-600 to-teal-500",
      icon: Cloud
    }
  ];

  const microSaasServices = [
    {
      name: "AI Invoice Generator",
      description: "Create professional invoices instantly with AI-powered suggestions",
      price: "$39/mo",
      features: ["Auto-calculations", "PDF Export", "Email Integration", "AI Suggestions"],
      icon: "📄",
      link: "/ai-invoice-generator",
      popular: true
    },
    {
      name: "AI Password Manager",
      description: "Secure password management with AI-enhanced security",
      price: "$29/mo",
      features: ["AI Security Analysis", "Auto-generation", "Cross-device Sync", "Breach Monitoring"],
      icon: "🔐",
      link: "/ai-password-manager",
      popular: true
    },
    {
      name: "AI Expense Tracker",
      description: "Smart expense tracking with AI insights and budgeting",
      price: "$59/mo",
      features: ["AI Categorization", "Budget Alerts", "Receipt Scanning", "Financial Insights"],
      icon: "💳",
      link: "/ai-expense-tracker",
      popular: true
    },
    {
      name: "AI Project Manager Pro",
      description: "Intelligent project planning and team collaboration",
      price: "$149/mo",
      features: ["AI Task Assignment", "Progress Tracking", "Resource Optimization", "Risk Analysis"],
      icon: "📊",
      link: "/ai-project-manager",
      popular: false
    },
    {
      name: "AI Social Media Manager",
      description: "Automated social media content creation and scheduling",
      price: "$99/mo",
      features: ["Content Generation", "Auto-posting", "Analytics", "Engagement Optimization"],
      icon: "📱",
      link: "/ai-social-media-manager",
      popular: false
    },
    {
      name: "AI Analytics Dashboard",
      description: "AI-powered business intelligence and data visualization",
      price: "$179/mo",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Integration"],
      icon: "📈",
      link: "/ai-analytics-dashboard",
      popular: false
    }
  ];

  const aiServices = [
    {
      name: "AI Quantum Computing Platform",
      description: "Revolutionary quantum solutions for complex problem solving",
      price: "$2,999/mo",
      icon: "⚛️",
      link: "/ai-quantum-computing",
      category: "Quantum"
    },
    {
      name: "AI Autonomous Systems",
      description: "Advanced autonomous technology for various industries",
      price: "$4,999/mo",
      icon: "🚗",
      link: "/ai-autonomous-systems",
      category: "Autonomous"
    },
    {
      name: "AI Space Technology Pro",
      description: "Space mission optimization and satellite management",
      price: "$9,999/mo",
      icon: "🚀",
      link: "/ai-space-technology-pro",
      category: "Space"
    },
    {
      name: "AI Climate Intelligence",
      description: "Environmental monitoring and climate prediction",
      price: "$1,999/mo",
      icon: "🌍",
      link: "/ai-climate-solutions-pro",
      category: "Climate"
    }
  ];

  const itServices = [
    {
      name: "AI Infrastructure Management",
      description: "Intelligent infrastructure optimization and monitoring",
      price: "$2,999/mo",
      icon: "🤖",
      link: "/ai-infrastructure",
      category: "Infrastructure"
    },
    {
      name: "Quantum-Safe Security",
      description: "Future-proof security solutions for quantum threats",
      price: "$4,999/mo",
      icon: "🔐",
      link: "/quantum-security",
      category: "Security"
    },
    {
      name: "Edge Computing Infrastructure",
      description: "Distributed computing for IoT and real-time applications",
      price: "$1,999/mo",
      icon: "📡",
      link: "/edge-computing",
      category: "Edge"
    },
    {
      name: "Cloud Migration & Setup",
      description: "Seamless cloud migration and infrastructure setup",
      price: "$1,499/mo",
      icon: "☁️",
      link: "/cloud-migration",
      category: "Cloud"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "1000+", label: "Projects Completed", icon: Target },
    { number: "99.9%", label: "Uptime", icon: TrendingUp },
    { number: "24/7", label: "Support", icon: Clock }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Slides */}
          <div className="relative h-[600px] mb-16">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                  <div className={`text-reveal ${isVisible ? 'animate-fade-in' : ''}`}>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${slide.gradient} rounded-lg flex items-center justify-center`}>
                        <slide.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-cyan-400 font-semibold text-lg">Zion Tech Group</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 cyber-text">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-4">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-400/20">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={slide.link}
                        className="neon-button inline-flex items-center justify-center group"
                      >
                        <span>{slide.cta}</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button className="flex items-center justify-center px-8 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white hover:border-cyan-400 transition-colors group">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Demo
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className={`futuristic-card p-8 ${isVisible ? 'animate-slide-in-right' : ''}`}>
                      <div className="text-center">
                        <div className={`w-32 h-32 bg-gradient-to-r ${slide.gradient} rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse`}>
                          <slide.icon className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                        <p className="text-gray-300 mb-6">{slide.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {slide.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 p-3 bg-slate-800 rounded-lg">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-white text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="futuristic-card text-center hover-lift">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="relative z-10 py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 cyber-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable AI-powered tools designed to streamline your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {microSaasServices.map((service, index) => (
              <div key={index} className="futuristic-card hover-lift group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  {service.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-400 text-sm">per month</span>
                </div>
                <Link
                  to={service.link}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-medium transition-all group-hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/micro-saas"
              className="neon-button inline-flex items-center"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 cyber-text">
              Advanced AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions for enterprise applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {aiServices.map((service, index) => (
              <div key={index} className="futuristic-card hover-lift group">
                <div className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-bold">{service.price}</span>
                    <span className="px-2 py-1 bg-slate-800 text-xs text-gray-300 rounded">
                      {service.category}
                    </span>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full flex items-center justify-center px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white text-sm transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/ai-services"
              className="neon-button inline-flex items-center"
            >
              Explore All AI Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="relative z-10 py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 cyber-text">
              Enterprise IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology infrastructure and support services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {itServices.map((service, index) => (
              <div key={index} className="futuristic-card hover-lift group">
                <div className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-bold">{service.price}</span>
                    <span className="px-2 py-1 bg-slate-800 text-xs text-gray-300 rounded">
                      {service.category}
                    </span>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full flex items-center justify-center px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white text-sm transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/it-services"
              className="neon-button inline-flex items-center"
            >
              View All IT Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="futuristic-card text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss your specific needs and discover how our AI solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/consultation"
                className="flex items-center justify-center px-8 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white hover:border-cyan-400 transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Free Consultation
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnifiedContentPromotion;