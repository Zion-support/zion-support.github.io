import React from "react";
import { ArrowRight, CheckCircle, Star, Code, Zap, Shield, BarChart3, Cloud, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Sparkles, Smartphone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function AIPoweredDevOps() {
  const services = [
    {
      id: "ai-ci-cd",
      name: "AI-Powered CI/CD Pipeline",
      description: "Intelligent continuous integration and deployment with automated testing, code analysis, and deployment optimization",
      price: "From $2,500/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Automated code quality analysis",
        "Intelligent test case generation",
        "Smart deployment strategies",
        "Performance optimization",
        "Security vulnerability scanning",
        "Rollback automation",
        "Multi-environment management",
        "Real-time monitoring and alerts"
      ],
      benefits: [
        "Reduce deployment time by 70%",
        "Improve code quality by 50%",
        "Minimize production incidents",
        "Accelerate development cycles"
      ],
      category: "CI/CD",
      rating: 4.9,
      reviews: 234,
      link: "/ai-ci-cd-pipeline",
      featured: true
    },
    {
      id: "ai-infrastructure",
      name: "AI Infrastructure Management",
      description: "Intelligent infrastructure provisioning, scaling, and optimization with predictive analytics and automated decision making",
      price: "From $3,000/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Predictive scaling algorithms",
        "Cost optimization automation",
        "Resource utilization analysis",
        "Infrastructure as Code (IaC)",
        "Multi-cloud management",
        "Disaster recovery automation",
        "Performance monitoring",
        "Capacity planning"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve resource utilization by 60%",
        "Eliminate manual scaling decisions",
        "Ensure 99.9% uptime"
      ],
      category: "Infrastructure",
      rating: 4.8,
      reviews: 189,
      link: "/ai-infrastructure-management",
      featured: true
    },
    {
      id: "ai-monitoring",
      name: "AI Monitoring & Observability",
      description: "Advanced monitoring with AI-powered anomaly detection, root cause analysis, and predictive alerting",
      price: "From $2,200/month",
      icon: <Activity className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Anomaly detection algorithms",
        "Predictive alerting",
        "Root cause analysis",
        "Performance optimization",
        "Log analysis and correlation",
        "Custom metric creation",
        "SLA monitoring",
        "Incident response automation"
      ],
      benefits: [
        "Detect issues before they impact users",
        "Reduce false positive alerts by 80%",
        "Accelerate incident resolution",
        "Improve system reliability"
      ],
      category: "Monitoring",
      rating: 4.7,
      reviews: 156,
      link: "/ai-monitoring-observability",
      featured: true
    },
    {
      id: "ai-security",
      name: "AI DevOps Security",
      description: "Comprehensive security automation for DevSecOps with threat detection, vulnerability management, and compliance",
      price: "From $2,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "Automated security scanning",
        "Threat intelligence integration",
        "Compliance automation",
        "Secrets management",
        "Container security",
        "API security monitoring",
        "Security policy enforcement",
        "Incident response automation"
      ],
      benefits: [
        "Reduce security vulnerabilities by 90%",
        "Automate compliance reporting",
        "Detect threats in real-time",
        "Minimize security risks"
      ],
      category: "Security",
      rating: 4.9,
      reviews: 178,
      link: "/ai-devops-security",
      featured: false
    },
    {
      id: "ai-testing",
      name: "AI Test Automation",
      description: "Intelligent test generation, execution, and maintenance with machine learning-powered test optimization",
      price: "From $1,800/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Automated test case generation",
        "Smart test prioritization",
        "Flaky test detection",
        "Performance test optimization",
        "Cross-browser testing",
        "API testing automation",
        "Visual regression testing",
        "Test data management"
      ],
      benefits: [
        "Increase test coverage by 60%",
        "Reduce test maintenance by 50%",
        "Improve test reliability",
        "Accelerate testing cycles"
      ],
      category: "Testing",
      rating: 4.6,
      reviews: 145,
      link: "/ai-test-automation",
      featured: false
    },
    {
      id: "ai-deployment",
      name: "AI Deployment Orchestration",
      description: "Intelligent deployment strategies with blue-green, canary, and A/B testing automation",
      price: "From $2,300/month",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Intelligent deployment strategies",
        "Automated rollback decisions",
        "Traffic management",
        "Feature flag automation",
        "Database migration automation",
        "Multi-region deployment",
        "Load balancing optimization",
        "Deployment analytics"
      ],
      benefits: [
        "Reduce deployment risks by 75%",
        "Improve deployment success rate",
        "Minimize downtime",
        "Optimize user experience"
      ],
      category: "Deployment",
      rating: 4.8,
      reviews: 167,
      link: "/ai-deployment-orchestration",
      featured: false
    }
  ];

  const capabilities = [
    {
      title: "Intelligent Automation",
      description: "AI-powered automation that learns from patterns and optimizes processes continuously",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast issues and optimize performance using machine learning algorithms",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Self-Healing Systems",
      description: "Automatically detect and resolve issues without human intervention",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intelligent Scaling",
      description: "Dynamically scale resources based on demand patterns and predictions",
      icon: <Layers className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Anomaly Detection",
      description: "Identify unusual patterns and potential issues before they impact users",
      icon: <Eye className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Continuous Optimization",
      description: "Continuously improve performance, security, and efficiency through AI analysis",
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const benefits = [
    {
      title: "Faster Time to Market",
      description: "Accelerate development and deployment cycles with intelligent automation",
      icon: <Clock className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "70% faster deployments"
    },
    {
      title: "Improved Reliability",
      description: "Reduce incidents and downtime with predictive monitoring and self-healing",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime SLA"
    },
    {
      title: "Cost Optimization",
      description: "Optimize resource usage and reduce infrastructure costs with AI insights",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "40% cost reduction"
    },
    {
      title: "Enhanced Security",
      description: "Automate security practices and detect threats with AI-powered analysis",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      stats: "90% fewer vulnerabilities"
    },
    {
      title: "Better Quality",
      description: "Improve code quality and reduce bugs with intelligent testing and analysis",
      icon: <Award className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      stats: "50% fewer bugs"
    },
    {
      title: "Team Productivity",
      description: "Free up developers to focus on innovation with automated DevOps tasks",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      stats: "60% productivity boost"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      role: "CTO",
      content: "AI-powered DevOps has revolutionized our development process. We've reduced deployment time by 70% and eliminated 90% of production incidents.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Platform",
      role: "DevOps Director",
      content: "The intelligent monitoring and self-healing capabilities have been game-changing. Our system reliability has improved dramatically while reducing operational overhead.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Financial Services",
      role: "Head of Engineering",
      content: "The AI security automation has helped us maintain compliance while accelerating development. We've seen a 60% reduction in security vulnerabilities.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "500+", label: "DevOps Teams Served", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "System Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "70%", label: "Faster Deployments", icon: <Rocket className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Activity className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps - Intelligent DevOps Automation | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionize your DevOps with AI-powered automation. Intelligent CI/CD, infrastructure management, monitoring, and security. Accelerate development and improve reliability."
        />
        <meta
          name="keywords"
          content="AI DevOps, DevOps automation, CI/CD, infrastructure management, monitoring, DevSecOps, intelligent automation, predictive analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-devops" />
      </Helmet>
      <SEOOptimizer
        title="AI-Powered DevOps - Intelligent DevOps Automation"
        description="Revolutionize your DevOps with AI-powered automation. Intelligent CI/CD, infrastructure management, monitoring, and security. Accelerate development and improve reliability."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Intelligent DevOps Automation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI-Powered DevOps
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your DevOps with intelligent automation powered by AI. Accelerate development, 
              improve reliability, and optimize costs with self-healing systems and predictive analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get DevOps Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                See AI DevOps in Action
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                AI DevOps Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Leverage artificial intelligence to automate, optimize, and enhance every aspect 
                of your DevOps pipeline for maximum efficiency and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered DevOps solutions covering CI/CD, infrastructure, 
                monitoring, security, testing, and deployment automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  {service.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Get DevOps Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your DevOps with AI
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven DevOps automation and unlock new levels 
                of efficiency, reliability, and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {benefit.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading organizations are transforming their DevOps with AI-powered automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of teams using AI-powered DevOps to accelerate development, 
              improve reliability, and reduce costs. Start your transformation today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get DevOps Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/it-services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All IT Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}