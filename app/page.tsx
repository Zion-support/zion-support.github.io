'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home, FileText, MessageSquare, Calculator, Package, Car, Code } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Service data
const microSAASServices = [
  {
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics and automated resource allocation",
    price: "$99/mo",
    features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
    category: "Productivity",
    popular: true,
    icon: BarChart
  },
  {
    name: "AI Analytics Dashboard",
    description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
    price: "$149/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
    category: "Analytics",
    popular: true,
    icon: Target
  },
  {
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing and instant responses",
    price: "$199/mo",
    features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
    category: "Support",
    popular: false,
    icon: Users
  },
  {
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing and editing tools",
    price: "$79/mo",
    features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice"],
    category: "Content",
    popular: true,
    icon: Zap
  },
  {
    name: "AI Invoice Generator Pro",
    description: "Automated invoice creation with smart templates, payment tracking, and tax calculations",
    price: "$49/mo",
    features: ["Auto Invoice Generation", "Payment Tracking", "Tax Calculations", "Multi-currency"],
    category: "Finance",
    popular: true,
    icon: FileText
  },
  {
    name: "AI Social Media Scheduler",
    description: "Intelligent social media management with optimal posting times and content suggestions",
    price: "$89/mo",
    features: ["Smart Scheduling", "Content Suggestions", "Analytics", "Multi-platform"],
    category: "Marketing",
    popular: true,
    icon: MessageSquare
  },
  {
    name: "AI Expense Tracker",
    description: "Automated expense tracking with receipt scanning and categorization using AI",
    price: "$39/mo",
    features: ["Receipt Scanning", "Auto Categorization", "Expense Reports", "Tax Preparation"],
    category: "Finance",
    popular: false,
    icon: Calculator
  },
  {
    name: "AI Email Assistant",
    description: "Smart email management with auto-responses, scheduling, and priority sorting",
    price: "$69/mo",
    features: ["Auto Responses", "Smart Scheduling", "Priority Sorting", "Template Library"],
    category: "Communication",
    popular: true,
    icon: Mail
  },
  {
    name: "AI Inventory Manager",
    description: "Intelligent inventory tracking with demand forecasting and automated reordering",
    price: "$129/mo",
    features: ["Demand Forecasting", "Auto Reordering", "Stock Alerts", "Analytics"],
    category: "Operations",
    popular: false,
    icon: Package
  },
  {
    name: "AI Lead Scoring Engine",
    description: "Automated lead qualification and scoring to improve sales conversion rates",
    price: "$159/mo",
    features: ["Lead Scoring", "Behavioral Analysis", "Conversion Prediction", "CRM Integration"],
    category: "Sales",
    popular: true,
    icon: TrendingUp
  },
  {
    name: "AI Time Tracking Pro",
    description: "Intelligent time tracking with productivity insights and automated timesheet generation",
    price: "$59/mo",
    features: ["Auto Time Tracking", "Productivity Insights", "Timesheet Generation", "Team Reports"],
    category: "Productivity",
    popular: false,
    icon: Clock
  },
  {
    name: "AI Document Processor",
    description: "Automated document processing with OCR, data extraction, and smart categorization",
    price: "$179/mo",
    features: ["OCR Processing", "Data Extraction", "Smart Categorization", "API Integration"],
    category: "Automation",
    popular: true,
    icon: FileText
  }
];

const aiServices = [
  {
    name: "AI Drug Discovery Pro",
    description: "Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction",
    price: "$4,500/mo",
    features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization", "Patent Research"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Brain
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Combat climate change with intelligent environmental monitoring and carbon footprint optimization",
    price: "$3,200/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environmental AI",
    enterprise: false,
    icon: Globe
  },
  {
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Financial AI",
    enterprise: false,
    icon: Shield
  },
  {
    name: "AI Quantum Computing Platform",
    description: "Revolutionary quantum computing solutions for complex optimization and cryptography",
    price: "$8,500/mo",
    features: ["Quantum Algorithms", "Cryptography", "Optimization", "Simulation"],
    category: "Quantum AI",
    enterprise: true,
    icon: Brain
  },
  {
    name: "AI Autonomous Vehicle Systems",
    description: "Advanced autonomous vehicle technology with real-time decision making and safety protocols",
    price: "$6,200/mo",
    features: ["Real-time Navigation", "Safety Protocols", "Traffic Analysis", "Predictive Maintenance"],
    category: "Transportation AI",
    enterprise: true,
    icon: Car
  },
  {
    name: "AI Healthcare Diagnostics",
    description: "Medical image analysis and diagnostic assistance with 99.7% accuracy",
    price: "$3,800/mo",
    features: ["Medical Imaging", "Diagnostic Assistance", "Patient Monitoring", "Treatment Planning"],
    category: "Healthcare AI",
    enterprise: false,
    icon: Heart
  },
  {
    name: "AI Supply Chain Optimization",
    description: "Intelligent supply chain management with predictive analytics and automated optimization",
    price: "$4,200/mo",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management"],
    category: "Logistics AI",
    enterprise: true,
    icon: Package
  },
  {
    name: "AI Cybersecurity Shield",
    description: "Advanced threat detection and prevention with real-time monitoring and response",
    price: "$2,500/mo",
    features: ["Threat Detection", "Real-time Monitoring", "Automated Response", "Vulnerability Assessment"],
    category: "Security AI",
    enterprise: false,
    icon: Shield
  },
  {
    name: "AI Energy Grid Management",
    description: "Smart energy grid optimization with renewable energy integration and load balancing",
    price: "$5,800/mo",
    features: ["Load Balancing", "Renewable Integration", "Predictive Maintenance", "Energy Trading"],
    category: "Energy AI",
    enterprise: true,
    icon: Zap
  },
  {
    name: "AI Agricultural Intelligence",
    description: "Precision agriculture with crop monitoring, yield prediction, and automated farming",
    price: "$3,500/mo",
    features: ["Crop Monitoring", "Yield Prediction", "Soil Analysis", "Automated Farming"],
    category: "Agriculture AI",
    enterprise: false,
    icon: Globe
  },
  {
    name: "AI Legal Research Assistant",
    description: "Intelligent legal research and case analysis with document review and precedent finding",
    price: "$2,200/mo",
    features: ["Legal Research", "Case Analysis", "Document Review", "Precedent Finding"],
    category: "Legal AI",
    enterprise: false,
    icon: FileText
  }
];

const itServices = [
  {
    name: "Cloud Migration & Setup",
    description: "Seamless cloud migration with zero downtime and comprehensive security",
    price: "$2,500/mo",
    features: ["Zero Downtime", "Security Audit", "Performance Optimization", "24/7 Support"],
    category: "Cloud Services",
    icon: Globe
  },
  {
    name: "Cybersecurity Suite",
    description: "Comprehensive security solutions to protect your digital assets and data",
    price: "$1,800/mo",
    features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance"],
    category: "Security",
    icon: Shield
  },
  {
    name: "IT Infrastructure Design",
    description: "Scalable infrastructure architecture designed for your business needs",
    price: "$3,000/mo",
    features: ["Architecture Design", "Scalability Planning", "Performance Tuning", "Monitoring"],
    category: "Infrastructure",
    icon: Settings
  },
  {
    name: "24/7 IT Support",
    description: "Round-the-clock technical support and monitoring for your systems",
    price: "$1,200/mo",
    features: ["24/7 Support", "Remote Monitoring", "Quick Response", "Proactive Maintenance"],
    category: "Support",
    icon: Clock
  },
  {
    name: "Custom Software Development",
    description: "Tailored software solutions built to meet your specific business requirements",
    price: "$4,500/mo",
    features: ["Custom Development", "API Integration", "Database Design", "Quality Assurance"],
    category: "Development",
    icon: Code
  },
  {
    name: "DevOps & CI/CD Implementation",
    description: "Automated deployment pipelines and continuous integration for faster delivery",
    price: "$2,800/mo",
    features: ["CI/CD Pipelines", "Automated Testing", "Deployment Automation", "Monitoring"],
    category: "DevOps",
    icon: Activity
  },
  {
    name: "Database Management & Optimization",
    description: "Database performance tuning, security, and maintenance for optimal performance",
    price: "$1,900/mo",
    features: ["Performance Tuning", "Security Hardening", "Backup & Recovery", "Monitoring"],
    category: "Database",
    icon: Database
  },
  {
    name: "Network Design & Implementation",
    description: "Secure and scalable network infrastructure designed for your business needs",
    price: "$2,200/mo",
    features: ["Network Architecture", "Security Implementation", "Performance Optimization", "Monitoring"],
    category: "Networking",
    icon: Globe
  },
  {
    name: "AI Infrastructure Monitoring",
    description: "Intelligent infrastructure monitoring with predictive analytics and automation",
    price: "$3,500/mo",
    features: ["Predictive Analytics", "Automated Responses", "Performance Monitoring", "Alerting"],
    category: "AI Operations",
    icon: Brain
  },
  {
    name: "Blockchain Integration Services",
    description: "Web3 and blockchain solutions for decentralized applications and smart contracts",
    price: "$4,200/mo",
    features: ["Smart Contracts", "DApp Development", "Blockchain Integration", "Security Auditing"],
    category: "Blockchain",
    icon: Shield
  },
  {
    name: "AI API Management",
    description: "Intelligent API management with automated scaling and security",
    price: "$2,600/mo",
    features: ["API Gateway", "Rate Limiting", "Security", "Analytics"],
    category: "API Management",
    icon: Settings
  },
  {
    name: "Smart Contract Security Audit",
    description: "Comprehensive security auditing for blockchain smart contracts",
    price: "$3,800/mo",
    features: ["Security Auditing", "Vulnerability Assessment", "Code Review", "Compliance"],
    category: "Security",
    icon: Shield
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
  }
];

const stats = [
  { number: "500+", label: "Enterprise Clients", icon: Building },
  { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { number: "24/7", label: "Expert Support", icon: Clock },
  { number: "50+", label: "Countries Served", icon: Globe }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base">
              Get Started Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
            <button className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm sm:text-base">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">300%</div>
              <div className="text-xs sm:text-sm text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">70%</div>
              <div className="text-xs sm:text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-400 mb-1 sm:mb-2">90%</div>
              <div className="text-xs sm:text-sm text-gray-400">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">Comprehensive AI and IT solutions for modern enterprises</p>
          </div>

          {/* Micro SAAS Services */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Micro SAAS Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {microSAASServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 sm:p-6 hover:border-cyan-400/40 transition-all duration-300 relative hover:scale-105"
                >
                  {service.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">{service.price}</div>
                      <button className="text-cyan-400 hover:text-cyan-300 font-medium text-xs sm:text-sm transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Enterprise AI Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 sm:p-6 hover:border-purple-400/40 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 mb-1 sm:mb-2">{service.price}</div>
                      <button className="text-purple-400 hover:text-purple-300 font-medium text-xs sm:text-sm transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">IT Infrastructure Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-4 sm:p-6 hover:border-green-400/40 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-1 sm:mb-2">{service.price}</div>
                      <button className="text-green-400 hover:text-green-300 font-medium text-xs sm:text-sm transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 sm:p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg mr-3 sm:mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-cyan-400 text-xs sm:text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Our Impact</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
            Join 500+ companies already using our AI and IT solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base">
              Start Free Trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
            <button className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm sm:text-base">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
