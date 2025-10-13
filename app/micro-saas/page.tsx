import { ArrowRight, BarChart3, Shield, Cloud, Brain, Database, Zap, Code, Target, Users, TrendingUp, FileText, Mail, Smartphone, Globe, Star, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable business strategies.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$49/month",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration", "Mobile App", "White-label Options"],
      benefits: ["40% faster decision making", "60% reduction in reporting time", "ROI tracking", "Multi-user access"],
      link: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring for small to medium businesses.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$79/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Vulnerability Scanning", "Security Training"],
      benefits: ["99.9% threat detection rate", "50% faster incident response", "SOC 2 compliance", "Real-time alerts"],
      link: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      category: "Security",
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, automated backups, and intelligent file organization. Perfect for teams and individuals.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $9/month",
      originalPrice: "$15/month",
      features: ["End-to-end Encryption", "Automated Backups", "File Sharing", "Version Control", "Mobile Sync", "Team Collaboration"],
      benefits: ["Unlimited storage", "99.99% uptime", "GDPR compliant", "Cross-platform sync"],
      link: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      category: "Storage",
      popular: false
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform that generates high-quality blog posts, social media content, marketing copy, and technical documentation.",
      icon: <Brain className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$59/month",
      features: ["AI Writing Assistant", "SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Check", "Content Calendar"],
      benefits: ["10x faster content creation", "SEO-optimized content", "Consistent brand voice", "Multi-language support"],
      link: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      category: "Content",
      popular: true
    },
    {
      name: "Zion Data Sync",
      description: "Intelligent data synchronization platform that connects and syncs data across multiple platforms, databases, and applications seamlessly.",
      icon: <Database className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$35/month",
      features: ["Multi-platform Sync", "Real-time Updates", "Data Transformation", "Error Handling", "API Management", "Custom Connectors"],
      benefits: ["Real-time synchronization", "99.9% data accuracy", "Custom integrations", "Automated error recovery"],
      link: "/zion-data-sync",
      color: "from-teal-500 to-cyan-500",
      category: "Integration",
      popular: false
    },
    {
      name: "Zion Lead Magnet",
      description: "AI-powered lead generation and nurturing platform that captures, qualifies, and converts leads through intelligent automation and personalization.",
      icon: <Target className="w-8 h-8" />,
      price: "From $59/month",
      originalPrice: "$89/month",
      features: ["Lead Scoring", "Email Automation", "CRM Integration", "A/B Testing", "Analytics Dashboard", "Custom Forms"],
      benefits: ["300% increase in lead quality", "50% higher conversion rates", "Automated nurturing", "ROI tracking"],
      link: "/zion-lead-magnet",
      color: "from-green-500 to-emerald-500",
      category: "Marketing",
      popular: true
    },
    {
      name: "Zion Project Master",
      description: "AI-enhanced project management platform with intelligent task allocation, progress tracking, and automated reporting for teams of all sizes.",
      icon: <Code className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$45/month",
      features: ["AI Task Allocation", "Progress Tracking", "Team Collaboration", "Resource Management", "Timeline Optimization", "Custom Workflows"],
      benefits: ["30% faster project delivery", "Improved team productivity", "Real-time insights", "Automated reporting"],
      link: "/zion-project-master",
      color: "from-yellow-500 to-orange-500",
      category: "Productivity",
      popular: false
    },
    {
      name: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-driven personalization, automated campaigns, and advanced analytics for maximum engagement.",
      icon: <Mail className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$65/month",
      features: ["AI Personalization", "Automated Campaigns", "A/B Testing", "Advanced Analytics", "List Management", "Template Library"],
      benefits: ["40% higher open rates", "60% better click-through rates", "Automated segmentation", "Advanced analytics"],
      link: "/zion-email-automation",
      color: "from-pink-500 to-rose-500",
      category: "Marketing",
      popular: false
    },
    {
      name: "Zion Social Scheduler",
      description: "AI-powered social media management platform that schedules, optimizes, and analyzes social media content across all major platforms.",
      icon: <Zap className="w-8 h-8" />,
      price: "From $25/month",
      originalPrice: "$40/month",
      features: ["Multi-platform Posting", "AI Content Optimization", "Scheduling Calendar", "Analytics Dashboard", "Hashtag Research", "Team Collaboration"],
      benefits: ["50% more engagement", "Optimal posting times", "Content performance insights", "Team workflow management"],
      link: "/zion-social-scheduler",
      color: "from-violet-500 to-purple-500",
      category: "Social Media",
      popular: false
    },
    {
      name: "Zion Workflow Automation",
      description: "No-code workflow automation platform that connects apps and automates business processes with AI-powered optimization and monitoring.",
      icon: <Zap className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$79/month",
      features: ["No-code Builder", "App Integrations", "AI Optimization", "Process Monitoring", "Custom Triggers", "Team Collaboration"],
      benefits: ["80% reduction in manual tasks", "Improved accuracy", "Real-time monitoring", "Custom automation"],
      link: "/zion-workflow-automation",
      color: "from-cyan-500 to-blue-500",
      category: "Automation",
      popular: true
    },
    {
      name: "Zion Invoice Genius",
      description: "AI-powered invoicing and payment management platform that automates billing, tracks payments, and provides financial insights.",
      icon: <FileText className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$35/month",
      features: ["AI Invoice Generation", "Payment Tracking", "Automated Reminders", "Financial Reports", "Multi-currency Support", "Client Portal"],
      benefits: ["50% faster invoicing", "Reduced payment delays", "Automated follow-ups", "Financial insights"],
      link: "/zion-invoice-genius",
      color: "from-emerald-500 to-green-500",
      category: "Finance",
      popular: false
    },
    {
      name: "Zion Inventory Smart",
      description: "Intelligent inventory management system with AI-powered demand forecasting, automated reordering, and real-time tracking.",
      icon: <Database className="w-8 h-8" />,
      price: "From $35/month",
      originalPrice: "$55/month",
      features: ["AI Demand Forecasting", "Automated Reordering", "Real-time Tracking", "Multi-location Support", "Supplier Management", "Analytics Dashboard"],
      benefits: ["30% reduction in stockouts", "20% lower inventory costs", "Automated reordering", "Real-time visibility"],
      link: "/zion-inventory-smart",
      color: "from-amber-500 to-yellow-500",
      category: "Inventory",
      popular: false
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Content", "Integration", "Marketing", "Productivity", "Social Media", "Automation", "Finance", "Inventory"];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed for immediate deployment. From AI analytics to cybersecurity, workflow automation to content creation - transform your business with our ready-to-use software solutions."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, AI analytics, cybersecurity, cloud storage, content creation, workflow automation, lead generation, project management, email marketing, social media management, inventory management, invoicing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From AI-powered analytics to cybersecurity protection, our micro SAAS platform offers everything you need to scale.
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
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
                  key={category}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category}
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
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                        {service.originalPrice && (
                          <div className="text-gray-400 text-sm line-through">{service.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400">+{service.features.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-green-400">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More & Start Free Trial
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your free trial today and experience the power of ready-to-use business software.
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
