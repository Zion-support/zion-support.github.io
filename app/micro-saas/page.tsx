import { ArrowRight, Zap, Shield, Cloud, Brain, BarChart3, Code, Database, Mail, Smartphone, Globe, Star, CheckCircle, Users, Target, TrendingUp, FileText, Settings, Smartphone as Phone, Globe as World, Lock, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      price: "$29",
      period: "/month",
      color: "from-cyan-500 to-blue-500",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Access", "Email Support"],
      category: "Analytics",
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection and real-time monitoring",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      price: "$49",
      period: "/month",
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Real-time Monitoring", "Vulnerability Scanning", "Incident Response", "Priority Support"],
      category: "Security",
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and file synchronization",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      price: "$9",
      period: "/month",
      color: "from-blue-500 to-cyan-500",
      features: ["1TB Storage", "End-to-end Encryption", "File Synchronization", "Mobile Apps", "Email Support"],
      category: "Storage",
      popular: false
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-content-studio",
      price: "$39",
      period: "/month",
      color: "from-purple-500 to-pink-500",
      features: ["AI Writing Assistant", "SEO Optimization", "Brand Voice Training", "Multi-format Output", "Content Calendar"],
      category: "Content",
      popular: false
    },
    {
      name: "Zion Data Sync",
      description: "Automated data synchronization and integration platform for seamless workflow management",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-sync",
      price: "$19",
      period: "/month",
      color: "from-green-500 to-emerald-500",
      features: ["Real-time Sync", "API Integration", "Data Transformation", "Error Handling", "Monitoring Dashboard"],
      category: "Integration",
      popular: false
    },
    {
      name: "Zion Lead Magnet",
      description: "Advanced lead generation and management system with automated nurturing campaigns",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-lead-magnet",
      price: "$59",
      period: "/month",
      color: "from-yellow-500 to-orange-500",
      features: ["Lead Scoring", "Automated Nurturing", "CRM Integration", "A/B Testing", "Analytics Dashboard"],
      category: "Marketing",
      popular: true
    },
    {
      name: "Zion Project Master",
      description: "Comprehensive project management tool with AI-powered insights and team collaboration",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-project-master",
      price: "$79",
      period: "/month",
      color: "from-indigo-500 to-purple-500",
      features: ["Task Management", "Team Collaboration", "AI Insights", "Time Tracking", "Resource Planning"],
      category: "Productivity",
      popular: false
    },
    {
      name: "Zion Email Automation",
      description: "Intelligent email marketing automation with personalization and behavioral triggers",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-automation",
      price: "$34",
      period: "/month",
      color: "from-pink-500 to-rose-500",
      features: ["Email Templates", "Behavioral Triggers", "A/B Testing", "Analytics", "List Management"],
      category: "Marketing",
      popular: false
    },
    {
      name: "Zion AI Chatbot Builder",
      description: "No-code AI chatbot creation platform with natural language processing capabilities",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-ai-chatbot-builder",
      price: "$69",
      period: "/month",
      color: "from-teal-500 to-cyan-500",
      features: ["No-code Builder", "NLP Processing", "Multi-language", "CRM Integration", "Analytics"],
      category: "AI",
      popular: true
    },
    {
      name: "Zion Invoice Manager",
      description: "Automated invoice generation, tracking, and payment processing system",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-invoice-manager",
      price: "$24",
      period: "/month",
      color: "from-emerald-500 to-green-500",
      features: ["Auto Generation", "Payment Tracking", "Tax Calculations", "Client Portal", "Reporting"],
      category: "Finance",
      popular: false
    },
    {
      name: "Zion Social Scheduler",
      description: "AI-powered social media management with content scheduling and analytics",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-social-scheduler",
      price: "$44",
      period: "/month",
      color: "from-violet-500 to-purple-500",
      features: ["Multi-platform", "Content Calendar", "AI Optimization", "Engagement Analytics", "Team Collaboration"],
      category: "Social Media",
      popular: false
    },
    {
      name: "Zion Password Vault",
      description: "Enterprise-grade password management with team sharing and security monitoring",
      icon: <Lock className="w-8 h-8" />,
      path: "/zion-password-vault",
      price: "$14",
      period: "/month",
      color: "from-amber-500 to-yellow-500",
      features: ["Secure Storage", "Team Sharing", "Breach Monitoring", "2FA Integration", "Audit Logs"],
      category: "Security",
      popular: false
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "AI", count: microSaasServices.filter(s => s.category === "AI").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length },
    { name: "Integration", count: microSaasServices.filter(s => s.category === "Integration").length }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Comprehensive collection of micro SAAS solutions including analytics, security, content creation, marketing automation, and productivity tools. Deploy immediately with 14-day free trials."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business tools, analytics, security, content creation, marketing automation, productivity, AI tools, cloud storage"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Deploy powerful software solutions instantly. Our micro SAAS platform offers ready-to-use tools 
              for analytics, security, content creation, marketing, and productivity. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-400 transition-all duration-300 font-medium"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of ready-to-deploy software solutions. 
                All solutions include 14-day free trials and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {service.category}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400 text-center">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Deploy Your First Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
              boost productivity, and drive growth. Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-purple-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-purple-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}