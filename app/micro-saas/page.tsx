import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Code, Database, Users, Award, Star, Mail, Smartphone, MapPin, CheckCircle, TrendingUp, Target, Calendar, FileText, Bot, Wifi, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Phone, Laptop, Headphones, Sparkles, Rocket, DollarSign, Clock, Star as StarIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      title: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights with 99.9% accuracy.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-ai-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration", "Mobile App", "White-label Options"],
      category: "Analytics & BI",
      popular: true,
      rating: 4.9,
      users: "2,500+"
    },
    {
      title: "Zion AI Security Shield",
      description: "Comprehensive cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. Protect your business from advanced cyber threats with enterprise-grade security.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-ai-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $499/month",
      originalPrice: "$999/month",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports", "Incident Response", "Security Training"],
      category: "Cybersecurity",
      popular: true,
      rating: 4.8,
      users: "1,800+"
    },
    {
      title: "Zion Cloud Vault Pro",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Store, share, and manage your files with enterprise-grade security.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault-pro",
      color: "from-indigo-500 to-purple-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["End-to-end Encryption", "Unlimited Storage", "File Sharing", "Version Control", "Team Collaboration", "Mobile Sync"],
      category: "Cloud Storage",
      popular: true,
      rating: 4.7,
      users: "5,200+"
    },
    {
      title: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and sales forecasting. Boost your sales performance with smart automation.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-ai-crm-pro",
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "Pipeline Management", "Performance Analytics", "Integration Hub"],
      category: "CRM & Sales",
      popular: true,
      rating: 4.9,
      users: "3,100+"
    },
    {
      title: "Zion AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and advanced lead scoring algorithms.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"],
      category: "Marketing",
      popular: true,
      rating: 4.8,
      users: "2,800+"
    },
    {
      title: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting. Streamline your project workflows with smart automation.",
      icon: <Calendar className="w-8 h-8" />,
      path: "/zion-ai-project-manager-pro",
      color: "from-purple-500 to-violet-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Task Automation", "Resource Planning", "Progress Tracking", "Team Collaboration", "Time Tracking", "Reporting"],
      category: "Project Management",
      popular: true,
      rating: 4.7,
      users: "1,900+"
    },
    {
      title: "Zion AI Content Studio",
      description: "AI-powered content creation platform with blog posts, social media content, product descriptions, and marketing materials. Create high-quality content at scale with SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-cyan-500 to-blue-500",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Content Generation", "SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar"],
      category: "Content Creation",
      rating: 4.6,
      users: "4,500+"
    },
    {
      title: "Zion AI Customer Support Bot",
      description: "Intelligent customer support chatbot with natural language processing, sentiment analysis, and multilingual capabilities. Provide 24/7 support with AI-powered automation.",
      icon: <Bot className="w-8 h-8" />,
      path: "/zion-ai-customer-support-bot",
      color: "from-teal-500 to-cyan-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition", "Custom Training"],
      category: "Customer Support",
      rating: 4.8,
      users: "2,200+"
    },
    {
      title: "Zion AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools for financial institutions and businesses.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics-pro",
      color: "from-amber-500 to-yellow-500",
      price: "From $349/month",
      originalPrice: "$699/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Portfolio Optimization", "Market Prediction"],
      category: "Financial Services",
      rating: 4.9,
      users: "1,500+"
    },
    {
      title: "Zion AI Inventory Optimizer",
      description: "Smart inventory management with demand forecasting, automated reordering, and cost optimization. Reduce inventory costs while maintaining optimal stock levels.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-inventory-smart",
      color: "from-emerald-500 to-green-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Demand Forecasting", "Automated Reordering", "Cost Optimization", "Supplier Management", "Multi-location Support", "Analytics Dashboard"],
      category: "Inventory Management",
      rating: 4.7,
      users: "1,300+"
    },
    {
      title: "Zion AI Email Analyzer Pro",
      description: "Intelligent email analysis with sentiment tracking, response optimization, and automated categorization. Improve your email communication effectiveness.",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-ai-email-analyzer",
      color: "from-orange-500 to-red-500",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["Sentiment Analysis", "Response Optimization", "Email Categorization", "Performance Tracking", "Template Suggestions", "A/B Testing"],
      category: "Email Management",
      rating: 4.5,
      users: "1,800+"
    },
    {
      title: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant with natural language processing, task automation, and integration with business applications. Control your business with voice commands.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/zion-ai-voice-assistant-pro",
      color: "from-violet-500 to-purple-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Voice Commands", "Task Automation", "App Integration", "Multi-language Support", "Custom Training", "Analytics Dashboard"],
      category: "Voice AI",
      rating: 4.6,
      users: "1,100+"
    },
    {
      title: "Zion AI Code Reviewer Pro",
      description: "Intelligent code review and optimization with automated testing, security scanning, and performance analysis. Improve code quality with AI-powered insights.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-ai-code-reviewer",
      color: "from-slate-500 to-gray-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Code Review", "Security Scanning", "Performance Analysis", "Bug Detection", "Refactoring Suggestions", "Team Collaboration"],
      category: "Development Tools",
      rating: 4.8,
      users: "2,100+"
    },
    {
      title: "Zion AI Social Media Manager",
      description: "Comprehensive social media management with content scheduling, engagement tracking, and performance analytics. Manage all your social platforms from one dashboard.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-ai-social-media-manager",
      color: "from-pink-500 to-purple-500",
      price: "From $119/month",
      originalPrice: "$239/month",
      features: ["Content Scheduling", "Engagement Tracking", "Performance Analytics", "Multi-platform Support", "Hashtag Optimization", "Competitor Analysis"],
      category: "Social Media",
      rating: 4.7,
      users: "3,200+"
    },
    {
      title: "Zion AI Contract Analyzer",
      description: "Intelligent contract analysis with risk assessment, compliance checking, and automated extraction of key terms. Streamline your legal document processing.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-ai-contract-analyzer",
      color: "from-indigo-500 to-blue-500",
      price: "From $279/month",
      originalPrice: "$559/month",
      features: ["Risk Assessment", "Compliance Checking", "Key Term Extraction", "Document Comparison", "Automated Summaries", "Legal Research"],
      category: "Legal Tech",
      rating: 4.9,
      users: "800+"
    },
    {
      title: "Zion AI Performance Optimizer",
      description: "Website and application performance optimization with automated testing, speed analysis, and optimization recommendations. Boost your site's performance.",
      icon: <Monitor className="w-8 h-8" />,
      path: "/zion-ai-performance-optimizer",
      color: "from-green-500 to-teal-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Speed Analysis", "Performance Testing", "Optimization Recommendations", "Mobile Optimization", "Core Web Vitals", "Automated Fixes"],
      category: "Performance",
      rating: 4.6,
      users: "2,400+"
    },
    {
      title: "Zion AI Customer Churn Predictor",
      description: "Predict customer churn with advanced machine learning models and automated retention campaigns. Reduce churn and increase customer lifetime value.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-ai-customer-churn-predictor",
      color: "from-red-500 to-pink-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Churn Prediction", "Retention Campaigns", "Customer Segmentation", "Risk Scoring", "Automated Alerts", "ROI Tracking"],
      category: "Customer Analytics",
      rating: 4.8,
      users: "1,600+"
    },
    {
      title: "Zion AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation for manufacturing and retail businesses.",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-ai-supply-chain-optimizer",
      color: "from-slate-500 to-gray-500",
      price: "From $279/month",
      originalPrice: "$559/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Management", "Risk Assessment", "Cost Analysis"],
      category: "Supply Chain",
      rating: 4.7,
      users: "1,200+"
    },
    {
      title: "Zion AI Financial Forecaster",
      description: "Advanced financial forecasting with machine learning models, scenario planning, and automated financial reporting for better business planning.",
      icon: <DollarSign className="w-8 h-8" />,
      path: "/zion-ai-financial-forecaster",
      color: "from-green-500 to-emerald-500",
      price: "From $229/month",
      originalPrice: "$459/month",
      features: ["Financial Forecasting", "Scenario Planning", "Risk Analysis", "Automated Reports", "Budget Planning", "Cash Flow Analysis"],
      category: "Financial Planning",
      rating: 4.9,
      users: "1,400+"
    },
    {
      title: "Zion AI Content Moderator",
      description: "Automated content moderation with AI-powered detection of inappropriate content, spam filtering, and community management tools.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-ai-content-moderator",
      color: "from-orange-500 to-red-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Content Detection", "Spam Filtering", "Community Management", "Automated Actions", "Custom Rules", "Analytics Dashboard"],
      category: "Content Moderation",
      rating: 4.6,
      users: "2,700+"
    },
    {
      title: "Zion AI Translator Pro",
      description: "Advanced translation service with support for 100+ languages, context-aware translation, and real-time communication tools for global businesses.",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-ai-translator-pro",
      color: "from-cyan-500 to-blue-500",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["100+ Languages", "Context-aware Translation", "Real-time Translation", "Document Translation", "Voice Translation", "API Integration"],
      category: "Translation",
      rating: 4.8,
      users: "3,500+"
    },
    {
      title: "Zion AI Data Cleaner Pro",
      description: "Intelligent data cleaning and validation with automated error detection, data standardization, and quality improvement for better data insights.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-ai-data-cleaner",
      color: "from-purple-500 to-pink-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Data Validation", "Error Detection", "Data Standardization", "Duplicate Removal", "Quality Scoring", "Automated Cleaning"],
      category: "Data Management",
      rating: 4.7,
      users: "1,800+"
    },
    {
      title: "Zion AI Task Scheduler Pro",
      description: "Intelligent task scheduling and automation with priority management, resource allocation, and deadline optimization for improved productivity.",
      icon: <Calendar className="w-8 h-8" />,
      path: "/zion-ai-task-scheduler",
      color: "from-teal-500 to-cyan-500",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["Smart Scheduling", "Priority Management", "Resource Allocation", "Deadline Optimization", "Team Coordination", "Progress Tracking"],
      category: "Task Management",
      rating: 4.5,
      users: "2,300+"
    },
    {
      title: "Zion AI Customer Support Pro",
      description: "Advanced customer support platform with AI-powered ticket routing, automated responses, and comprehensive support analytics for better customer experience.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/zion-ai-customer-support-pro",
      color: "from-blue-500 to-indigo-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Ticket Routing", "Automated Responses", "Support Analytics", "Knowledge Base", "Multi-channel Support", "Performance Metrics"],
      category: "Customer Support",
      rating: 4.8,
      users: "2,600+"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics & BI", count: microSaasServices.filter(s => s.category === "Analytics & BI").length },
    { name: "Cybersecurity", count: microSaasServices.filter(s => s.category === "Cybersecurity").length },
    { name: "Cloud Storage", count: microSaasServices.filter(s => s.category === "Cloud Storage").length },
    { name: "CRM & Sales", count: microSaasServices.filter(s => s.category === "CRM & Sales").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length },
    { name: "Content Creation", count: microSaasServices.filter(s => s.category === "Content Creation").length },
    { name: "Customer Support", count: microSaasServices.filter(s => s.category === "Customer Support").length },
    { name: "Financial Services", count: microSaasServices.filter(s => s.category === "Financial Services").length }
  ];

  const stats = [
    { number: "25+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our entire business operations. The AI analytics platform alone increased our efficiency by 60% in just 3 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools and AI features.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group's micro SAAS solutions are our trusted partners for all digital transformation needs.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions including AI analytics, CRM, marketing automation, cybersecurity, and more. Transform your business with ready-to-use software tools."
        keywords="micro SAAS, AI solutions, business tools, analytics, CRM, marketing automation, cybersecurity, cloud storage, project management, content creation"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">25+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Ready-to-use AI-powered software solutions that can transform your business operations immediately. 
              From analytics to automation, we have everything you need to accelerate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Rocket className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Featured Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular AI-powered micro SAAS solutions designed to transform your business operations.
              </p>
            </div>
            
            <ResponsiveGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Rating and Users */}
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                        <span className="text-gray-300 text-sm ml-2">{service.rating}</span>
                      </div>
                      <div className="text-gray-300 text-sm">{service.users} users</div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about working with Zion Tech Group's micro SAAS solutions
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
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
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
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}