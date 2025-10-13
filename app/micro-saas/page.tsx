import { ArrowRight, Brain, Shield, Cloud, BarChart3, Bot, Zap, Mail, Smartphone, Globe, Star, CheckCircle, Users, TrendingUp, Code, FileText, Target, Database, Wifi, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $29/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "Analytics",
      popular: true
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance reporting. Enterprise-grade security for small to medium businesses.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $49/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Vulnerability Scanning", "Incident Response"],
      category: "Security",
      popular: true
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, file sharing, and collaboration tools. GDPR and HIPAA compliant with enterprise features.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "From $9/month",
      features: ["End-to-end Encryption", "File Sharing", "Version Control", "Team Collaboration", "Mobile Sync", "API Access"],
      category: "Storage",
      popular: true
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform with writing assistance, SEO optimization, and multi-format output. Create engaging content at scale.",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      price: "From $19/month",
      features: ["AI Writing Assistant", "SEO Optimization", "Multi-format Output", "Brand Voice Training", "Plagiarism Detection", "Content Calendar"],
      category: "Content",
      popular: false
    },
    {
      title: "Zion Data Sync",
      description: "Automated data synchronization across platforms with real-time updates, conflict resolution, and data transformation. Keep your data consistent everywhere.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-sync",
      color: "from-green-500 to-emerald-500",
      price: "From $15/month",
      features: ["Real-time Sync", "Conflict Resolution", "Data Transformation", "API Integration", "Scheduled Sync", "Error Handling"],
      category: "Data",
      popular: false
    },
    {
      title: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with automated workflows, scoring, and personalized campaigns. Convert visitors into customers.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-lead-magnet",
      color: "from-yellow-500 to-orange-500",
      price: "From $25/month",
      features: ["Lead Scoring", "Automated Workflows", "Email Campaigns", "CRM Integration", "A/B Testing", "Analytics Dashboard"],
      category: "Marketing",
      popular: false
    },
    {
      title: "Zion Project Master",
      description: "Comprehensive project management tool with AI-powered insights, resource allocation, and team collaboration. Streamline your project workflows.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-project-master",
      color: "from-teal-500 to-cyan-500",
      price: "From $35/month",
      features: ["Task Management", "Resource Planning", "Team Collaboration", "Time Tracking", "AI Insights", "Gantt Charts"],
      category: "Productivity",
      popular: false
    },
    {
      title: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-driven personalization, segmentation, and automated campaigns. Maximize your email ROI.",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $22/month",
      features: ["AI Personalization", "Advanced Segmentation", "Automated Campaigns", "A/B Testing", "Analytics", "Template Library"],
      category: "Marketing",
      popular: false
    },
    {
      title: "Zion AI Assistant",
      description: "Personal AI assistant for business operations with natural language processing, task automation, and intelligent recommendations.",
      icon: <Bot className="w-8 h-8" />,
      path: "/zion-ai-assistant",
      color: "from-violet-500 to-purple-500",
      price: "From $39/month",
      features: ["Natural Language Processing", "Task Automation", "Smart Recommendations", "Voice Commands", "Integration Hub", "Custom Training"],
      category: "AI",
      popular: true
    },
    {
      title: "Zion Network Monitor",
      description: "Real-time network monitoring and performance optimization with predictive analytics and automated troubleshooting. Keep your network running smoothly.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/zion-network-monitor",
      color: "from-cyan-500 to-blue-500",
      price: "From $45/month",
      features: ["Real-time Monitoring", "Performance Analytics", "Predictive Alerts", "Automated Fixes", "Network Mapping", "Bandwidth Optimization"],
      category: "Infrastructure",
      popular: false
    },
    {
      title: "Zion Expense Tracker",
      description: "AI-powered expense management with receipt scanning, categorization, and automated reporting. Simplify your financial tracking.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-expense-tracker",
      color: "from-emerald-500 to-green-500",
      price: "From $12/month",
      features: ["Receipt Scanning", "Auto-categorization", "Expense Reports", "Budget Tracking", "Team Management", "Tax Integration"],
      category: "Finance",
      popular: false
    },
    {
      title: "Zion Social Manager",
      description: "Comprehensive social media management platform with AI content suggestions, scheduling, and analytics. Grow your social presence.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-social-manager",
      color: "from-amber-500 to-yellow-500",
      price: "From $18/month",
      features: ["Multi-platform Posting", "AI Content Suggestions", "Scheduling", "Analytics", "Engagement Tracking", "Team Collaboration"],
      category: "Social Media",
      popular: false
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length },
    { name: "Data", count: microSaasServices.filter(s => s.category === "Data").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "AI", count: microSaasServices.filter(s => s.category === "AI").length },
    { name: "Infrastructure", count: microSaasServices.filter(s => s.category === "Infrastructure").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed for immediate deployment. From AI analytics to cybersecurity, we have the tools your business needs to succeed."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business tools, AI analytics, cybersecurity, cloud storage, content creation, project management, email automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Micro
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}SAAS
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementations - just powerful tools that work from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
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
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS solutions designed to address specific business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </div>
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
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={service.path}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Contact
                      </Link>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Contact us today for a personalized consultation.
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
                  Start Your Journey
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
