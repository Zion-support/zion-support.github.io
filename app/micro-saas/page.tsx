import { ArrowRight, BarChart3, Shield, Cloud, Zap, Brain, Mail, Users, FileText, Target, Globe, CheckCircle, Star, TrendingUp, Lock, Smartphone, Code, Database, Settings, PieChart, Calendar, MessageSquare, CreditCard, ShoppingCart, Camera, Music, Video, BookOpen, MapPin, Heart, Star as StarIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $29/month",
      category: "Analytics",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      popular: true
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI threat detection and automated incident response",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $49/month",
      category: "Security",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"],
      popular: true
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited storage",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "From $9/month",
      category: "Storage",
      features: ["End-to-End Encryption", "Unlimited Storage", "Real-time Sync", "Team Collaboration"],
      popular: true
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-green-500 to-emerald-500",
      price: "From $19/month",
      category: "Content",
      features: ["AI Writing", "SEO Optimization", "Brand Voice", "Multi-format Output"],
      popular: false
    },
    {
      title: "Zion Data Sync",
      description: "Automated data synchronization across multiple platforms and databases",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-sync",
      color: "from-teal-500 to-cyan-500",
      price: "From $39/month",
      category: "Data",
      features: ["Real-time Sync", "Data Validation", "Error Handling", "API Integration"],
      popular: false
    },
    {
      title: "Zion Lead Magnet",
      description: "Lead generation and nurturing platform with automated email sequences and CRM integration",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-lead-magnet",
      color: "from-pink-500 to-rose-500",
      price: "From $29/month",
      category: "Marketing",
      features: ["Lead Capture", "Email Automation", "CRM Integration", "Analytics"],
      popular: false
    },
    {
      title: "Zion Project Master",
      description: "AI-powered project management with intelligent task assignment and progress tracking",
      icon: <Calendar className="w-8 h-8" />,
      path: "/zion-project-master",
      color: "from-violet-500 to-purple-500",
      price: "From $25/month",
      category: "Productivity",
      features: ["Task Management", "Team Collaboration", "Progress Tracking", "AI Insights"],
      popular: false
    },
    {
      title: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-driven personalization and automation",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-automation",
      color: "from-orange-500 to-yellow-500",
      price: "From $15/month",
      category: "Marketing",
      features: ["Email Templates", "Automation Workflows", "A/B Testing", "Analytics"],
      popular: false
    },
    {
      title: "Zion Social Scheduler",
      description: "Social media management platform with AI content suggestions and optimal posting times",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-social-scheduler",
      color: "from-cyan-500 to-blue-500",
      price: "From $12/month",
      category: "Social Media",
      features: ["Multi-platform Posting", "Content Calendar", "Analytics", "Hashtag Research"],
      popular: false
    },
    {
      title: "Zion Workflow Automation",
      description: "No-code workflow automation platform for business processes and integrations",
      icon: <Zap className="w-8 h-8" />,
      path: "/zion-workflow-automation",
      color: "from-yellow-500 to-orange-500",
      price: "From $35/month",
      category: "Automation",
      features: ["Visual Workflow Builder", "API Integrations", "Conditional Logic", "Monitoring"],
      popular: false
    },
    {
      title: "Zion Invoice Genius",
      description: "AI-powered invoicing platform with automated billing and payment tracking",
      icon: <CreditCard className="w-8 h-8" />,
      path: "/zion-invoice-genius",
      color: "from-emerald-500 to-green-500",
      price: "From $18/month",
      category: "Finance",
      features: ["Auto Invoicing", "Payment Tracking", "Tax Calculations", "Client Portal"],
      popular: false
    },
    {
      title: "Zion Inventory Smart",
      description: "Intelligent inventory management with predictive analytics and automated reordering",
      icon: <ShoppingCart className="w-8 h-8" />,
      path: "/zion-inventory-smart",
      color: "from-purple-500 to-pink-500",
      price: "From $45/month",
      category: "Inventory",
      features: ["Stock Tracking", "Predictive Analytics", "Auto Reordering", "Multi-location"],
      popular: false
    },
    {
      title: "Zion Compliance Manager",
      description: "Automated compliance monitoring and reporting for various industry standards",
      icon: <CheckCircle className="w-8 h-8" />,
      path: "/zion-compliance-manager",
      color: "from-slate-500 to-gray-500",
      price: "From $99/month",
      category: "Compliance",
      features: ["Regulatory Monitoring", "Automated Reports", "Audit Trails", "Risk Assessment"],
      popular: false
    },
    {
      title: "Zion Performance Monitor",
      description: "Real-time application and website performance monitoring with AI-powered insights",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-performance-monitor",
      color: "from-blue-500 to-indigo-500",
      price: "From $22/month",
      category: "Monitoring",
      features: ["Real-time Monitoring", "Performance Alerts", "AI Insights", "Detailed Reports"],
      popular: false
    },
    {
      title: "Zion Chat Assistant",
      description: "AI-powered customer support chatbot with natural language processing",
      icon: <MessageSquare className="w-8 h-8" />,
      path: "/zion-chat-assistant",
      color: "from-green-500 to-teal-500",
      price: "From $16/month",
      category: "Support",
      features: ["Natural Language Processing", "Multi-language Support", "CRM Integration", "Analytics"],
      popular: false
    },
    {
      title: "Zion Code Assistant",
      description: "AI-powered code generation, review, and optimization for developers",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-code-assistant",
      color: "from-gray-500 to-slate-500",
      price: "From $32/month",
      category: "Development",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"],
      popular: false
    },
    {
      title: "Zion Design Studio",
      description: "AI-powered design platform for creating logos, graphics, and marketing materials",
      icon: <Camera className="w-8 h-8" />,
      path: "/zion-design-studio",
      color: "from-pink-500 to-purple-500",
      price: "From $24/month",
      category: "Design",
      features: ["AI Design Generation", "Brand Templates", "Vector Graphics", "Export Options"],
      popular: false
    },
    {
      title: "Zion Video Creator",
      description: "AI-powered video creation and editing platform for marketing and social media",
      icon: <Video className="w-8 h-8" />,
      path: "/zion-video-creator",
      color: "from-red-500 to-pink-500",
      price: "From $28/month",
      category: "Video",
      features: ["AI Video Generation", "Auto Editing", "Templates", "Multi-format Export"],
      popular: false
    },
    {
      title: "Zion Music Generator",
      description: "AI-powered music creation platform for background music and audio content",
      icon: <Music className="w-8 h-8" />,
      path: "/zion-music-generator",
      color: "from-purple-500 to-indigo-500",
      price: "From $14/month",
      category: "Audio",
      features: ["AI Music Generation", "Multiple Genres", "Custom Length", "Royalty-free"],
      popular: false
    },
    {
      title: "Zion Knowledge Base",
      description: "AI-powered knowledge management system with intelligent search and content organization",
      icon: <BookOpen className="w-8 h-8" />,
      path: "/zion-knowledge-base",
      color: "from-amber-500 to-orange-500",
      price: "From $21/month",
      category: "Knowledge",
      features: ["Intelligent Search", "Content Organization", "Version Control", "Collaboration"],
      popular: false
    },
    {
      title: "Zion Location Tracker",
      description: "GPS tracking and location analytics platform for fleet management and logistics",
      icon: <MapPin className="w-8 h-8" />,
      path: "/zion-location-tracker",
      color: "from-green-500 to-emerald-500",
      price: "From $38/month",
      category: "Location",
      features: ["Real-time Tracking", "Route Optimization", "Geofencing", "Analytics"],
      popular: false
    },
    {
      title: "Zion Health Monitor",
      description: "AI-powered health and wellness tracking with personalized insights and recommendations",
      icon: <Heart className="w-8 h-8" />,
      path: "/zion-health-monitor",
      color: "from-red-500 to-pink-500",
      price: "From $26/month",
      category: "Health",
      features: ["Health Tracking", "AI Insights", "Goal Setting", "Progress Reports"],
      popular: false
    },
    {
      title: "Zion Review Manager",
      description: "Automated review management and reputation monitoring across multiple platforms",
      icon: <StarIcon className="w-8 h-8" />,
      path: "/zion-review-manager",
      color: "from-yellow-500 to-amber-500",
      price: "From $17/month",
      category: "Reputation",
      features: ["Review Monitoring", "Response Automation", "Sentiment Analysis", "Reporting"],
      popular: false
    },
    {
      title: "Zion Backup Pro",
      description: "Automated backup solution with AI-powered data protection and recovery",
      icon: <Lock className="w-8 h-8" />,
      path: "/zion-backup-pro",
      color: "from-slate-500 to-gray-500",
      price: "From $13/month",
      category: "Backup",
      features: ["Automated Backups", "Version Control", "Cloud Storage", "Recovery Tools"],
      popular: false
    },
    {
      title: "Zion API Gateway",
      description: "API management and monitoring platform with rate limiting and analytics",
      icon: <Settings className="w-8 h-8" />,
      path: "/zion-api-gateway",
      color: "from-indigo-500 to-blue-500",
      price: "From $42/month",
      category: "API",
      features: ["API Management", "Rate Limiting", "Analytics", "Security"],
      popular: false
    },
    {
      title: "Zion Survey Builder",
      description: "AI-powered survey creation and analysis platform with advanced analytics",
      icon: <PieChart className="w-8 h-8" />,
      path: "/zion-survey-builder",
      color: "from-cyan-500 to-teal-500",
      price: "From $20/month",
      category: "Research",
      features: ["Survey Creation", "AI Analysis", "Data Visualization", "Export Options"],
      popular: false
    }
  ];

  const categories = [
    "All",
    "Analytics",
    "Security",
    "Storage",
    "Content",
    "Data",
    "Marketing",
    "Productivity",
    "Social Media",
    "Automation",
    "Finance",
    "Inventory",
    "Compliance",
    "Monitoring",
    "Support",
    "Development",
    "Design",
    "Video",
    "Audio",
    "Knowledge",
    "Location",
    "Health",
    "Reputation",
    "Backup",
    "API",
    "Research"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions. Ready-to-use software tools for analytics, security, content creation, automation, and more. Start your free trial today."
        />
        <meta
          name="keywords"
          content="micro saas, software solutions, business tools, analytics, security, content creation, automation, productivity, marketing tools, cloud storage, project management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">25+ Micro SAAS Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From analytics to automation, we have the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Micro SAAS Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/20 hover:border-cyan-400"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive collection of ready-to-use software solutions designed to accelerate your business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <span className="text-xs bg-white/20 text-gray-300 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="text-center mb-4">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 2 && (
                        <span className="text-xs text-gray-400">
                          +{service.features.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300 text-sm"
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

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Start your free trial today and see the difference.
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
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Free Trial
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