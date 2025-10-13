import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Phone, Laptop, Headphones, Package, Heart, Receipt, Calendar, Clock, Award, Sparkles, CheckCircle, Star, Rocket, DollarSign, Zap as Lightning } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaaSServices() {
  const microSaasServices = [
    {
      title: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights with 99.9% accuracy.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-ai-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "AI Analytics",
      popular: true,
      benefits: ["40% faster decision making", "60% reduction in manual reporting", "ROI tracking and optimization"],
      useCases: ["E-commerce Analytics", "Marketing Performance", "Financial Reporting", "Operations Monitoring"]
    },
    {
      title: "Zion Security Shield Pro",
      description: "Comprehensive cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. Protect your business from evolving cyber threats with enterprise-grade security.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield-pro",
      color: "from-red-500 to-orange-500",
      price: "From $499/month",
      originalPrice: "$999/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "Cybersecurity",
      popular: true,
      benefits: ["99.9% threat detection rate", "50% faster incident response", "Compliance automation"],
      useCases: ["Small Business Security", "Enterprise Protection", "Compliance Management", "Threat Intelligence"]
    },
    {
      title: "Zion Cloud Vault Pro",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Store, share, and manage your files with enterprise-grade security.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault-pro",
      color: "from-indigo-500 to-purple-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["End-to-End Encryption", "Unlimited Storage", "File Sharing", "Version Control", "Team Collaboration", "Mobile Sync"],
      category: "Cloud Storage",
      popular: true,
      benefits: ["99.99% uptime guarantee", "Unlimited storage capacity", "Advanced security features"],
      useCases: ["Document Management", "Team Collaboration", "File Backup", "Secure Sharing"]
    },
    {
      title: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and predictive analytics. Boost your sales performance with smart automation.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-ai-crm-pro",
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Performance Analytics"],
      category: "Sales & CRM",
      popular: true,
      benefits: ["35% increase in lead conversion", "50% reduction in manual tasks", "Predictive sales insights"],
      useCases: ["Sales Management", "Lead Generation", "Customer Retention", "Pipeline Optimization"]
    },
    {
      title: "Zion AI Marketing Automation Pro",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and advanced lead scoring algorithms.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-ai-marketing-automation-pro",
      color: "from-pink-500 to-rose-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"],
      category: "Marketing Automation",
      benefits: ["45% higher email open rates", "60% increase in lead quality", "Automated campaign optimization"],
      useCases: ["Email Marketing", "Social Media Management", "Lead Nurturing", "Campaign Optimization"]
    },
    {
      title: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting. Streamline your project workflows with smart automation.",
      icon: <Calendar className="w-8 h-8" />,
      path: "/zion-ai-project-manager-pro",
      color: "from-purple-500 to-violet-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Task Automation", "Resource Planning", "Progress Tracking", "Team Collaboration", "Risk Assessment", "Reporting"],
      category: "Project Management",
      benefits: ["30% faster project delivery", "25% reduction in project costs", "Improved team productivity"],
      useCases: ["Project Planning", "Team Management", "Resource Optimization", "Progress Tracking"]
    },
    {
      title: "Zion AI Email Assistant Pro",
      description: "Intelligent email management with AI-powered categorization, smart replies, and automated scheduling. Boost your email productivity with advanced AI features.",
      icon: <Mail className="w-8 h-8" />,
      path: "/ai-powered-email-analyzer",
      color: "from-cyan-500 to-blue-500",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Smart Categorization", "Auto-Reply", "Email Scheduling", "Priority Detection", "Spam Filtering", "Analytics"],
      category: "Email Management",
      benefits: ["50% faster email processing", "90% spam reduction", "Smart priority management"],
      useCases: ["Email Organization", "Response Automation", "Priority Management", "Spam Protection"]
    },
    {
      title: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. Minimize stockouts and reduce inventory costs with intelligent automation.",
      icon: <Package className="w-8 h-8" />,
      path: "/smart-inventory-optimizer",
      color: "from-orange-500 to-amber-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Demand Forecasting", "Auto Reordering", "Cost Optimization", "Stock Alerts", "Supplier Management", "Analytics"],
      category: "Inventory Management",
      benefits: ["30% reduction in inventory costs", "95% stockout prevention", "Automated reordering"],
      useCases: ["Retail Management", "Manufacturing", "E-commerce", "Supply Chain"]
    },
    {
      title: "Zion AI Customer Sentiment Tracker",
      description: "Advanced customer sentiment analysis with real-time monitoring, automated alerts, and actionable insights. Understand your customers better with AI-powered sentiment tracking.",
      icon: <Heart className="w-8 h-8" />,
      path: "/ai-customer-sentiment-tracker",
      color: "from-rose-500 to-pink-500",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["Sentiment Analysis", "Real-time Monitoring", "Alert System", "Trend Analysis", "Multi-channel", "Reporting"],
      category: "Customer Analytics",
      benefits: ["Real-time sentiment insights", "Proactive issue detection", "Customer satisfaction improvement"],
      useCases: ["Customer Support", "Brand Monitoring", "Product Feedback", "Service Improvement"]
    },
    {
      title: "Zion Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt processing, and compliance reporting. Streamline your financial management with intelligent automation.",
      icon: <Receipt className="w-8 h-8" />,
      path: "/smart-expense-categorizer",
      color: "from-emerald-500 to-green-500",
      price: "From $69/month",
      originalPrice: "$139/month",
      features: ["Auto Categorization", "Receipt OCR", "Compliance Reports", "Expense Tracking", "Budget Management", "Tax Preparation"],
      category: "Financial Management",
      benefits: ["90% automated categorization", "50% faster expense processing", "Compliance automation"],
      useCases: ["Business Expenses", "Tax Preparation", "Budget Tracking", "Financial Reporting"]
    },
    {
      title: "Zion AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools for financial institutions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics-pro",
      color: "from-yellow-500 to-orange-500",
      price: "From $349/month",
      originalPrice: "$699/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Portfolio Optimization", "Market Prediction"],
      category: "Financial Analytics",
      benefits: ["99.5% fraud detection accuracy", "40% faster risk assessment", "Automated compliance reporting"],
      useCases: ["Banking", "Investment Management", "Risk Assessment", "Compliance Monitoring"]
    },
    {
      title: "Zion AI Content Studio Pro",
      description: "AI-powered content creation platform with automated writing, SEO optimization, and multi-format output. Create high-quality content at scale with intelligent automation.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-violet-500 to-purple-500",
      price: "From $119/month",
      originalPrice: "$239/month",
      features: ["Content Generation", "SEO Optimization", "Multi-format Output", "Brand Voice Training", "Plagiarism Detection", "Team Collaboration"],
      category: "Content Creation",
      benefits: ["80% faster content creation", "SEO-optimized content", "Brand consistency"],
      useCases: ["Blog Writing", "Marketing Content", "Social Media", "Product Descriptions"]
    },
    {
      title: "Zion AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages, automated testing, and documentation generation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-slate-500 to-gray-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review", "Refactoring"],
      category: "Development Tools",
      benefits: ["50% faster development", "90% bug reduction", "Automated documentation"],
      useCases: ["Software Development", "Code Review", "Bug Fixing", "Documentation"]
    },
    {
      title: "Zion AI Voice Assistant Pro",
      description: "Advanced voice recognition and natural language processing with custom voice commands, multi-language support, and integration capabilities.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/ai-voice-assistant-pro",
      color: "from-teal-500 to-cyan-500",
      price: "From $159/month",
      originalPrice: "$319/month",
      features: ["Voice Recognition", "Natural Language", "Multi-language", "Custom Commands", "API Integration", "Analytics"],
      category: "Voice Technology",
      benefits: ["95% voice recognition accuracy", "Multi-language support", "Custom command creation"],
      useCases: ["Customer Service", "Voice Commands", "Accessibility", "Automation"]
    },
    {
      title: "Zion AI Workflow Automation Pro",
      description: "Intelligent workflow automation with process optimization, task routing, and performance monitoring. Automate complex business processes with AI-powered workflows.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-workflow-automation-pro",
      color: "from-amber-500 to-yellow-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Process Automation", "Task Routing", "Performance Monitoring", "Custom Workflows", "Integration", "Analytics"],
      category: "Workflow Automation",
      benefits: ["70% process efficiency", "Automated task routing", "Performance optimization"],
      useCases: ["Business Process Automation", "Task Management", "Workflow Optimization", "Process Monitoring"]
    }
  ];

  const categories = [
    { name: "All Services", count: microSaasServices.length, active: true },
    { name: "AI Analytics", count: microSaasServices.filter(s => s.category === "AI Analytics").length },
    { name: "Cybersecurity", count: microSaasServices.filter(s => s.category === "Cybersecurity").length },
    { name: "Cloud Storage", count: microSaasServices.filter(s => s.category === "Cloud Storage").length },
    { name: "Sales & CRM", count: microSaasServices.filter(s => s.category === "Sales & CRM").length },
    { name: "Marketing Automation", count: microSaasServices.filter(s => s.category === "Marketing Automation").length },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length }
  ];

  const stats = [
    { number: "15+", label: "Micro SAAS Solutions", icon: <Package className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, cloud storage, CRM, marketing automation, and more. Transform your business with intelligent automation."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI analytics, cybersecurity, cloud storage, CRM, marketing automation, project management, business automation, AI tools, software solutions"
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
                  {" "}SAAS Solutions
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, ready-to-use micro SAAS solutions designed to transform your business operations. 
              From AI-powered analytics to intelligent automation, we provide everything you need to scale efficiently.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
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
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to streamline your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    {service.benefits && (
                      <div className="space-y-2 mb-4">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your digital transformation journey today with our comprehensive suite of AI-powered tools.
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