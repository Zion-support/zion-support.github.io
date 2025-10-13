import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, BarChart3, Users, Target, FileText, Settings, Lock, RefreshCw, Eye, Download, Upload, Search, Filter, Bell, MessageSquare, Calendar, PieChart, LineChart, BarChart, Activity, AlertTriangle, CheckCircle2, XCircle, Info, ExternalLink, Mail, Phone, MapPin, Play, TrendingUp, Clock, Star, CheckCircle, Bot, Cloud, Wifi, Database as DatabaseIcon, Code as CodeIcon, Brain as BrainIcon, BarChart3 as BarChart3Icon, Users as UsersIcon, Target as TargetIcon, FileText as FileTextIcon, Settings as SettingsIcon, Lock as LockIcon, RefreshCw as RefreshCwIcon, Eye as EyeIcon, Download as DownloadIcon, Upload as UploadIcon, Search as SearchIcon, Filter as FilterIcon, Bell as BellIcon, MessageSquare as MessageSquareIcon, Calendar as CalendarIcon, PieChart as PieChartIcon, LineChart as LineChartIcon, BarChart as BarChartIcon, Activity as ActivityIcon, AlertTriangle as AlertTriangleIcon, CheckCircle2 as CheckCircle2Icon, XCircle as XCircleIcon, Info as InfoIcon, ExternalLink as ExternalLinkIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Play as PlayIcon, TrendingUp as TrendingUpIcon, Clock as ClockIcon, Star as StarIcon, CheckCircle as CheckCircleIcon, Bot as BotIcon, Cloud as CloudIcon, Wifi as WifiIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Business Intelligence Pro",
      description: "Advanced AI-powered analytics platform with predictive insights, real-time dashboards, and automated reporting for data-driven decision making.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Reports", "Custom Models"],
      category: "Analytics",
      popularity: "Most Popular"
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with AI-powered writing, SEO optimization, and multi-format publishing capabilities.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation-pro",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $149/month",
      features: ["AI Writing", "SEO Optimization", "Multi-format Output", "Brand Voice Training"],
      category: "Content",
      popularity: "Trending"
    },
    {
      title: "AI Cybersecurity Suite Pro",
      description: "Enterprise-grade AI security platform with threat detection, automated response, and compliance monitoring.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"],
      category: "Security",
      popularity: "Enterprise"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent customer service automation with natural language processing, sentiment analysis, and seamless human handoff.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support-chatbot",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      features: ["NLP Processing", "Sentiment Analysis", "Human Handoff", "Multi-language Support"],
      category: "Customer Service",
      popularity: "Hot"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Advanced AI-powered code generation, review, and optimization with support for multiple programming languages.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"],
      category: "Development",
      popularity: "Recommended"
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization, campaign optimization, and lead scoring.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $179/month",
      features: ["Personalization", "Campaign Optimization", "Lead Scoring", "A/B Testing"],
      category: "Marketing",
      popularity: "Popular"
    },
    {
      title: "AI Data Analytics Dashboard",
      description: "Comprehensive data analytics platform with machine learning models, interactive visualizations, and real-time insights.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-analytics-dashboard-pro",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $249/month",
      features: ["ML Models", "Interactive Dashboards", "Real-time Processing", "Data Pipeline"],
      category: "Analytics",
      popularity: "New"
    },
    {
      title: "AI Project Management",
      description: "Intelligent project management with AI-powered resource allocation, risk assessment, and predictive analytics.",
      icon: <Settings className="w-8 h-8" />,
      path: "/ai-project-management",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $229/month",
      features: ["Resource Allocation", "Risk Assessment", "Predictive Analytics", "Team Collaboration"],
      category: "Project Management",
      popularity: "Best Value"
    },
    {
      title: "AI Document Intelligence",
      description: "Advanced document processing with OCR, form recognition, and automated data extraction for business workflows.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-intelligence",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation"],
      category: "Document Processing",
      popularity: "Trending"
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $349/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting"],
      category: "Finance",
      popularity: "Enterprise"
    },
    {
      title: "AI Cloud Infrastructure",
      description: "Intelligent cloud management with automated scaling, cost optimization, and performance monitoring.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/ai-cloud-infrastructure",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $199/month",
      features: ["Auto-scaling", "Cost Optimization", "Performance Monitoring", "Security Hardening"],
      category: "Cloud",
      popularity: "Hot"
    },
    {
      title: "AI 5G Solutions",
      description: "Next-generation 5G implementation with AI-powered network optimization, edge computing, and IoT integration.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-orange-500 to-red-500",
      price: "Custom Pricing",
      features: ["Network Optimization", "Edge Computing", "IoT Integration", "Performance Monitoring"],
      category: "5G Technology",
      popularity: "Cutting Edge"
    }
  ];

  const categories = ["All", "Analytics", "Content", "Security", "Customer Service", "Development", "Marketing", "Project Management", "Document Processing", "Finance", "Cloud", "5G Technology"];

  const stats = [
    { number: "25,000+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "AI Services", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's AI services transformed our entire operation. The predictive analytics alone increased our revenue by 40% in just 6 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI automation tools saved us thousands of hours. Our team can now focus on strategic initiatives instead of repetitive tasks.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding AI solutions with incredible support. Zion Tech Group is our trusted partner for all AI implementations.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, content generation, cybersecurity, customer support, code assistance, marketing automation, and more. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, content generation, cybersecurity, customer support, code assistant, marketing automation, document processing, financial analytics, cloud AI, 5G AI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ AI Services Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From predictive analytics to automated workflows, we provide comprehensive AI services that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our AI Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popularity Badge */}
                  {service.popularity && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.popularity === 'Most Popular' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        service.popularity === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        service.popularity === 'Trending' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
                        service.popularity === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        service.popularity === 'Recommended' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        service.popularity === 'Popular' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        service.popularity === 'New' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        service.popularity === 'Best Value' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                        service.popularity === 'Cutting Edge' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {service.popularity}
                      </span>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{service.price}</div>
                        <div className="text-xs text-gray-400">{service.category}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
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
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI solutions to drive growth and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to start your AI transformation journey or schedule a personalized consultation.
              </p>
              
              {/* Contact Details */}
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
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
