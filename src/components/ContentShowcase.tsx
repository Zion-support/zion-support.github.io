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
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Heart,
  Home,
  Activity,
  Settings,
  Building
} from 'lucide-react';

interface ContentShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentShowcase({
  className = '',
  children
}: ContentShowcaseProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const microSaasServices = [
    {
      title: "AI Project Manager Pro",
      description: "Intelligent project management with predictive analytics and automated resource allocation",
      price: "$99/mo",
      features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
      icon: BarChart3,
      category: "Productivity",
      link: "/ai-project-manager",
      popular: true
    },
    {
      title: "AI Voice Cloning Studio Pro",
      description: "Professional voice synthesis and cloning for content creators and businesses",
      price: "$149/mo",
      features: ["Voice Synthesis", "Emotion Control", "Multi-language", "Real-time Processing"],
      icon: Users,
      category: "Creative",
      link: "/ai-voice-cloning-studio"
    },
    {
      title: "AI Code Security Auditor Pro",
      description: "Automated code security analysis and vulnerability detection for developers",
      price: "$199/mo",
      features: ["Vulnerability Scanning", "Code Quality Analysis", "Compliance Checking", "Auto-fix Suggestions"],
      icon: Shield,
      category: "Security",
      link: "/ai-code-security-auditor"
    },
    {
      title: "AI Mental Health Companion Pro",
      description: "AI-powered mental health support and wellness tracking application",
      price: "$79/mo",
      features: ["Mood Tracking", "Therapy Sessions", "Crisis Support", "Progress Monitoring"],
      icon: Heart,
      category: "Health",
      link: "/ai-mental-health-companion"
    },
    {
      title: "AI Smart Home Controller Pro",
      description: "Intelligent home automation with voice control and predictive maintenance",
      price: "$99/mo",
      features: ["Voice Control", "Predictive Maintenance", "Energy Optimization", "Security Integration"],
      icon: Home,
      category: "IoT",
      link: "/ai-smart-home-controller"
    },
    {
      title: "AI Investment Portfolio Optimizer Pro",
      description: "Advanced portfolio management with AI-driven investment strategies",
      price: "$199/mo",
      features: ["Portfolio Analysis", "Risk Assessment", "Auto-rebalancing", "Market Prediction"],
      icon: TrendingUp,
      category: "Finance",
      link: "/ai-investment-optimizer"
    },
    {
      title: "AI Voice Cloning Studio Pro",
      description: "Professional voice synthesis and cloning for content creators",
      price: "$149/mo",
      features: ["Voice Synthesis", "Emotion Control", "Multi-language", "Real-time Processing"],
      icon: Users,
      category: "Creative",
      link: "/ai-voice-cloning-studio"
    },
    {
      title: "AI Code Security Auditor Pro",
      description: "Automated code security analysis and vulnerability detection",
      price: "$199/mo",
      features: ["Vulnerability Scanning", "Code Quality Analysis", "Compliance Checking", "Auto-fix Suggestions"],
      icon: Shield,
      category: "Security",
      link: "/ai-code-security-auditor"
    },
    {
      title: "AI Mental Health Companion Pro",
      description: "AI-powered mental health support and wellness tracking",
      price: "$79/mo",
      features: ["Mood Tracking", "Therapy Sessions", "Crisis Support", "Progress Monitoring"],
      icon: Heart,
      category: "Health",
      link: "/ai-mental-health-companion"
    },
    {
      title: "AI Smart Home Controller Pro",
      description: "Intelligent home automation with voice control and predictive maintenance",
      price: "$99/mo",
      features: ["Voice Control", "Predictive Maintenance", "Energy Optimization", "Security Integration"],
      icon: Home,
      category: "IoT",
      link: "/ai-smart-home-controller"
    }
  ];

  const aiServices = [
    {
      title: "AI Drug Discovery Pro",
      description: "Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction",
      price: "$4,500/mo",
      features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization", "Patent Research"],
      icon: Brain,
      category: "Healthcare AI",
      link: "/ai-drug-discovery-pro",
      enterprise: true
    },
    {
      title: "AI Climate Solutions Pro",
      description: "Combat climate change with intelligent environmental monitoring and carbon footprint optimization",
      price: "$3,200/mo",
      features: ["Carbon Footprint Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
      icon: Globe,
      category: "Environmental AI",
      link: "/ai-climate-solutions-pro"
    },
    {
      title: "AI Space Technology Pro",
      description: "Advanced space exploration and satellite management with AI-powered mission planning",
      price: "$5,500/mo",
      features: ["Satellite Operations", "Space Mission Planning", "Astronomical Data Analysis", "Orbital Mechanics"],
      icon: Rocket,
      category: "Space Technology",
      link: "/ai-space-technology-pro",
      enterprise: true
    },
    {
      title: "AI Financial Crime Detection Pro",
      description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
      price: "$2,800/mo",
      features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
      icon: Shield,
      category: "Financial AI",
      link: "/ai-financial-crime-detection-pro"
    }
  ];

  const itServices = [
    {
      title: "AI Infrastructure Monitoring Pro",
      description: "Intelligent monitoring and optimization of IT infrastructure with predictive maintenance",
      price: "$1,800/mo",
      features: ["Real-time Monitoring", "Predictive Maintenance", "Performance Optimization", "Alert Management"],
      icon: Activity,
      category: "Infrastructure",
      link: "/ai-infrastructure-monitoring"
    },
    {
      title: "Blockchain Integration Services Pro",
      description: "Complete blockchain integration and smart contract development for enterprises",
      price: "$2,500/mo",
      features: ["Smart Contract Development", "Blockchain Migration", "Security Audits", "Integration Support"],
      icon: Shield,
      category: "Blockchain",
      link: "/blockchain-integration-services"
    },
    {
      title: "AI API Management Pro",
      description: "Intelligent API management with automated scaling and security monitoring",
      price: "$1,400/mo",
      features: ["API Gateway", "Rate Limiting", "Security Monitoring", "Analytics Dashboard"],
      icon: Settings,
      category: "API Management",
      link: "/ai-api-management"
    },
    {
      title: "Intelligent Database Migration Pro",
      description: "AI-powered database migration with zero downtime and data integrity assurance",
      price: "$2,200/mo",
      features: ["Zero Downtime Migration", "Data Integrity Checks", "Performance Optimization", "Rollback Support"],
      icon: Database,
      category: "Database",
      link: "/intelligent-database-migration"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "Fortune 500 Technology Company",
      content: "Zion Tech Group's AI solutions increased our operational efficiency by 85% and reduced costs by $2.3M annually. Their quantum computing integration was revolutionary.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Research Director",
      company: "Global Pharmaceuticals Inc.",
      content: "The AI Drug Discovery Pro platform accelerated our research timeline by 60%. We discovered 3 new potential compounds in just 6 months instead of the usual 2 years.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Jennifer Walsh",
      role: "VP of Operations",
      company: "GreenTech Solutions",
      content: "Their climate solutions helped us reduce our carbon footprint by 40% while improving operational efficiency. The ROI was evident within the first quarter.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "David Kim",
      role: "CEO",
      company: "FinTech Innovations",
      content: "The financial crime detection system prevented $5M in fraudulent transactions in its first year. The AI accuracy rate is 99.7% - incredible technology.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Building },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Expert Support", icon: Clock },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className={`relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Micro SAAS Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Powerful, affordable tools designed for modern businesses. Start with our micro SAAS solutions and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${service.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

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

        {/* AI Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced AI solutions for enterprise clients. Transform your industry with cutting-edge artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${service.enterprise ? 'ring-2 ring-purple-400/30' : ''}`}>
                {service.enterprise && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Enterprise
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-4 py-2 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-white">{service.price}</div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all group-hover:translate-x-1"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              IT Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions to build, secure, and scale your technology infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-cyan-400 font-medium mb-1">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-cyan-400 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already using our AI solutions to achieve unprecedented growth and efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </Link>

              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}