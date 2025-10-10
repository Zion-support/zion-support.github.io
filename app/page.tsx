'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home, MessageSquare, FileText, Video, Eye, Code } from 'lucide-react';
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
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-project-manager"
  },
  {
    name: "AI Analytics Dashboard",
    description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
    price: "$149/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
    category: "Analytics",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-analytics-dashboard"
  },
  {
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing and instant responses",
    price: "$199/mo",
    features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
    category: "Support",
    popular: false,
    icon: Users,
    link: "https://ziontechgroup.com/ai-customer-support-bot"
  },
  {
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing and editing tools",
    price: "$79/mo",
    features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice"],
    category: "Content",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-content-generation"
  },
  {
    name: "AI Social Media Manager",
    description: "Automated social media management with AI-powered content creation and scheduling",
    price: "$129/mo",
    features: ["Auto Posting", "Content Creation", "Analytics", "Engagement Tracking"],
    category: "Social Media",
    popular: true,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-social-media-manager"
  },
  {
    name: "AI Email Marketing Suite",
    description: "Intelligent email campaigns with AI-powered personalization and optimization",
    price: "$89/mo",
    features: ["Smart Segmentation", "A/B Testing", "Automation", "Performance Analytics"],
    category: "Marketing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-marketing"
  },
  {
    name: "AI Financial Advisor",
    description: "Personalized financial planning and investment advice powered by AI",
    price: "$199/mo",
    features: ["Portfolio Analysis", "Risk Assessment", "Investment Recommendations", "Tax Optimization"],
    category: "Finance",
    popular: false,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-financial-advisor"
  },
  {
    name: "AI Workflow Automation",
    description: "Visual workflow builder with AI-powered process optimization",
    price: "$149/mo",
    features: ["Drag & Drop Builder", "Process Optimization", "Integration Hub", "Performance Monitoring"],
    category: "Automation",
    popular: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-workflow-automation"
  },
  {
    name: "AI Smart Calendar",
    description: "Intelligent scheduling and time management with AI-powered optimization",
    price: "$69/mo",
    features: ["Smart Scheduling", "Conflict Resolution", "Time Blocking", "Productivity Insights"],
    category: "Productivity",
    popular: true,
    icon: Clock,
    link: "https://ziontechgroup.com/ai-smart-calendar"
  },
  {
    name: "AI Content Writer",
    description: "Advanced content generation with AI-powered writing assistance",
    price: "$79/mo",
    features: ["Multi-format Writing", "SEO Optimization", "Plagiarism Check", "Brand Voice"],
    category: "Content",
    popular: true,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-content-writer"
  },
  {
    name: "AI Video Generator",
    description: "AI-powered video creation with automated editing and effects",
    price: "$199/mo",
    features: ["Auto Editing", "Voice Synthesis", "Visual Effects", "Multi-platform Export"],
    category: "Video",
    popular: true,
    icon: Video,
    link: "https://ziontechgroup.com/ai-video-generator"
  },
  {
    name: "AI CRM Assistant",
    description: "Intelligent customer relationship management with AI-powered insights",
    price: "$149/mo",
    features: ["Lead Scoring", "Sales Forecasting", "Customer Insights", "Automation"],
    category: "CRM",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-crm-assistant"
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
    icon: Brain,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro"
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Combat climate change with intelligent environmental monitoring and carbon footprint optimization",
    price: "$3,200/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environmental AI",
    enterprise: false,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro"
  },
  {
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro"
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Financial AI",
    enterprise: false,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro"
  },
  {
    name: "AI Quantum Computing Platform",
    description: "Next-generation quantum computing solutions with AI-powered optimization and error correction",
    price: "$6,500/mo",
    features: ["Quantum Algorithms", "Error Correction", "Optimization", "Simulation"],
    category: "Quantum AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-computing"
  },
  {
    name: "AI Healthcare Solutions",
    description: "Comprehensive medical AI platform for diagnosis, treatment planning, and patient care",
    price: "$3,800/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-healthcare"
  },
  {
    name: "AI Computer Vision Platform",
    description: "Advanced image recognition and computer vision solutions for various industries",
    price: "$2,200/mo",
    features: ["Object Detection", "Facial Recognition", "Quality Control", "Automated Inspection"],
    category: "Computer Vision",
    enterprise: false,
    icon: Eye,
    link: "https://ziontechgroup.com/ai-computer-vision"
  },
  {
    name: "AI Machine Learning Platform",
    description: "Complete ML platform with automated model training, deployment, and monitoring",
    price: "$2,500/mo",
    features: ["AutoML", "Model Training", "Deployment", "Monitoring"],
    category: "Machine Learning",
    enterprise: false,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-ml-platform"
  }
];

const itServices = [
  {
    name: "Cloud Migration & Setup",
    description: "Seamless cloud migration with zero downtime and comprehensive security",
    price: "$2,500/mo",
    features: ["Zero Downtime", "Security Audit", "Performance Optimization", "24/7 Support"],
    category: "Cloud Services",
    icon: Globe,
    link: "https://ziontechgroup.com/cloud-migration"
  },
  {
    name: "Cybersecurity Suite",
    description: "Comprehensive security solutions to protect your digital assets and data",
    price: "$1,800/mo",
    features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/cybersecurity"
  },
  {
    name: "IT Infrastructure Design",
    description: "Scalable infrastructure architecture designed for your business needs",
    price: "$3,000/mo",
    features: ["Architecture Design", "Scalability Planning", "Performance Tuning", "Monitoring"],
    category: "Infrastructure",
    icon: Settings,
    link: "https://ziontechgroup.com/it-infrastructure"
  },
  {
    name: "24/7 IT Support",
    description: "Round-the-clock technical support and monitoring for your systems",
    price: "$1,200/mo",
    features: ["24/7 Support", "Remote Monitoring", "Quick Response", "Proactive Maintenance"],
    category: "Support",
    icon: Clock,
    link: "https://ziontechgroup.com/it-support"
  },
  {
    name: "Custom Development",
    description: "Tailored software solutions built specifically for your business requirements",
    price: "$4,500/mo",
    features: ["Custom Software", "API Development", "Integration", "Maintenance"],
    category: "Development",
    icon: Code,
    link: "https://ziontechgroup.com/custom-development"
  },
  {
    name: "DevOps & CI/CD",
    description: "Streamlined development processes with automated deployment and monitoring",
    price: "$2,200/mo",
    features: ["CI/CD Pipeline", "Automated Testing", "Deployment", "Monitoring"],
    category: "DevOps",
    icon: Activity,
    link: "https://ziontechgroup.com/devops-cicd"
  },
  {
    name: "Database Management",
    description: "Performance tuning, security, and optimization for your database systems",
    price: "$1,500/mo",
    features: ["Performance Tuning", "Security Hardening", "Backup & Recovery", "Monitoring"],
    category: "Database",
    icon: Database,
    link: "https://ziontechgroup.com/database-management"
  },
  {
    name: "Network Design",
    description: "Secure and scalable network infrastructure for optimal performance",
    price: "$2,800/mo",
    features: ["Network Architecture", "Security Implementation", "Performance Optimization", "Monitoring"],
    category: "Networking",
    icon: Globe,
    link: "https://ziontechgroup.com/network-design"
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
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Enhanced Futuristic Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.15)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text-enhanced leading-tight">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology. Achieve <span className="text-cyan-400 font-bold">300% ROI</span>, <span className="text-purple-400 font-bold">70% cost reduction</span>, and <span className="text-pink-400 font-bold">90% efficiency gains</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-lg font-semibold py-5 px-10 rounded-xl flex items-center">
              Get Started Today
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-5 px-10 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg neon-glow-cyan">
              Watch Demo
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">300%</div>
              <div className="text-gray-400 text-lg font-medium">Average ROI</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">70%</div>
              <div className="text-gray-400 text-lg font-medium">Cost Reduction</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-pink-400 mb-3 group-hover:scale-110 transition-transform duration-300">90%</div>
              <div className="text-gray-400 text-lg font-medium">Efficiency Gains</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-400 text-lg font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50 relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 gradient-text-enhanced">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful AI-powered micro SaaS tools to streamline your business operations and boost productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSAASServices.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card-enhanced p-6 hover:scale-105 transition-all duration-500 relative group block"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center neon-glow-cyan">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-cyan-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">{service.price}</div>
                    <div className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-slate-900/50 relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(236,72,153,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 gradient-text-enhanced">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI solutions for enterprise clients. Transform your industry with cutting-edge artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`cyber-card-enhanced p-8 hover:scale-105 transition-all duration-500 relative group block ${
                  service.enterprise ? 'ring-2 ring-purple-400/30 neon-glow-purple' : ''
                }`}
              >
                {service.enterprise && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-4 py-2 rounded-full neon-glow-purple">
                      Enterprise
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-purple-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">{service.price}</div>
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all group-hover:scale-105 transform duration-300">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 via-green-900/20 to-slate-900/50 relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[length:40px_40px] animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 gradient-text-enhanced">
              IT Infrastructure Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions to build, secure, and scale your technology infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card-enhanced p-6 hover:scale-105 transition-all duration-500 relative group block"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-400/25">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-green-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{service.price}</div>
                    <div className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold text-sm transition-colors group-hover:translate-x-1 transform duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 gradient-text-enhanced">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-400/25">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
              <div className="text-cyan-400 font-medium text-lg">
                <div>364 E Main St STE 1008</div>
                <div>Middletown, DE 19709</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-lg font-semibold py-5 px-10 rounded-xl">
              Get Free Consultation
            </button>
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-cyan-400 text-cyan-400 font-semibold py-5 px-10 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg neon-glow-cyan"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
