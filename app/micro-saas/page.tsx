import { ArrowRight, Brain, Shield, Cloud, BarChart3, Zap, Code, Mail, Users, FileText, Target, TrendingUp, Smartphone, Globe, Database, Bot, Star, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "40% OFF",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration", "Mobile App"],
      benefits: ["40% faster decision making", "99.9% uptime SLA", "24/7 support"],
      category: "Analytics",
      rating: 4.9,
      users: "10,000+"
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring for businesses of all sizes.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Penetration Testing"],
      benefits: ["99.8% threat detection rate", "Zero false positives", "SOC 2 compliant"],
      category: "Security",
      rating: 4.8,
      users: "5,000+"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, automated backups, and intelligent file organization. Enterprise-grade security for your data.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "From $9/month",
      originalPrice: "$15/month",
      discount: "40% OFF",
      features: ["End-to-End Encryption", "Automated Backups", "File Versioning", "Team Collaboration", "Mobile Sync"],
      benefits: ["Unlimited storage", "99.99% uptime", "GDPR compliant"],
      category: "Storage",
      rating: 4.7,
      users: "25,000+"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform that generates high-quality blog posts, social media content, and marketing materials in minutes.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      price: "From $19/month",
      originalPrice: "$35/month",
      discount: "46% OFF",
      features: ["AI Writing Assistant", "SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Check"],
      benefits: ["10x faster content creation", "SEO optimized", "Brand consistent"],
      category: "Content",
      rating: 4.9,
      users: "15,000+"
    },
    {
      title: "Zion Data Sync",
      description: "Intelligent data synchronization platform that connects all your business applications and ensures real-time data consistency across systems.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-sync",
      color: "from-teal-500 to-cyan-500",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      features: ["Real-time Sync", "Data Transformation", "Error Handling", "API Integration", "Custom Workflows"],
      benefits: ["99.9% sync accuracy", "Real-time updates", "Zero data loss"],
      category: "Integration",
      rating: 4.8,
      users: "8,000+"
    },
    {
      title: "Zion Lead Magnet",
      description: "AI-powered lead generation and qualification platform that identifies high-value prospects and automates your sales funnel.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-lead-magnet",
      color: "from-green-500 to-emerald-500",
      price: "From $59/month",
      originalPrice: "$99/month",
      discount: "40% OFF",
      features: ["Lead Scoring", "Email Automation", "CRM Integration", "A/B Testing", "Analytics Dashboard"],
      benefits: ["3x more qualified leads", "50% higher conversion", "Automated nurturing"],
      category: "Sales",
      rating: 4.9,
      users: "12,000+"
    },
    {
      title: "Zion Project Master",
      description: "Comprehensive project management platform with AI-powered task optimization, resource allocation, and automated reporting.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-project-master",
      color: "from-yellow-500 to-orange-500",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "41% OFF",
      features: ["Task Management", "Resource Planning", "Time Tracking", "Team Collaboration", "Progress Reports"],
      benefits: ["30% faster delivery", "Better resource utilization", "Real-time visibility"],
      category: "Productivity",
      rating: 4.7,
      users: "18,000+"
    },
    {
      title: "Zion Email Automation",
      description: "Advanced email marketing automation platform with AI-driven personalization, behavioral triggers, and comprehensive analytics.",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $24/month",
      originalPrice: "$40/month",
      discount: "40% OFF",
      features: ["Email Templates", "Behavioral Triggers", "A/B Testing", "Analytics", "List Management"],
      benefits: ["40% higher open rates", "60% more clicks", "Automated workflows"],
      category: "Marketing",
      rating: 4.8,
      users: "20,000+"
    },
    {
      title: "Zion Social Scheduler",
      description: "AI-powered social media management platform that schedules posts, analyzes performance, and suggests optimal posting times.",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-social-scheduler",
      color: "from-cyan-500 to-blue-500",
      price: "From $19/month",
      originalPrice: "$32/month",
      discount: "41% OFF",
      features: ["Multi-platform Posting", "Content Calendar", "Hashtag Research", "Analytics", "Team Collaboration"],
      benefits: ["50% more engagement", "Optimal timing", "Content suggestions"],
      category: "Social Media",
      rating: 4.6,
      users: "14,000+"
    },
    {
      title: "Zion Workflow Automation",
      description: "No-code workflow automation platform that connects your apps and automates repetitive tasks with intelligent triggers and actions.",
      icon: <Zap className="w-8 h-8" />,
      path: "/zion-workflow-automation",
      color: "from-violet-500 to-purple-500",
      price: "From $34/month",
      originalPrice: "$55/month",
      discount: "38% OFF",
      features: ["Visual Workflow Builder", "App Integrations", "Conditional Logic", "Error Handling", "Analytics"],
      benefits: ["80% time savings", "Zero coding required", "Unlimited workflows"],
      category: "Automation",
      rating: 4.9,
      users: "16,000+"
    },
    {
      title: "Zion Invoice Genius",
      description: "AI-powered invoicing platform that generates professional invoices, tracks payments, and automates follow-ups for faster collections.",
      icon: <DollarSign className="w-8 h-8" />,
      path: "/zion-invoice-genius",
      color: "from-emerald-500 to-green-500",
      price: "From $14/month",
      originalPrice: "$25/month",
      discount: "44% OFF",
      features: ["Invoice Generation", "Payment Tracking", "Automated Reminders", "Tax Calculations", "Client Portal"],
      benefits: ["50% faster payments", "Professional invoices", "Automated follow-ups"],
      category: "Finance",
      rating: 4.7,
      users: "22,000+"
    },
    {
      title: "Zion Inventory Smart",
      description: "Intelligent inventory management system with AI-powered demand forecasting, automated reordering, and real-time stock tracking.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-inventory-smart",
      color: "from-amber-500 to-yellow-500",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      features: ["Stock Tracking", "Demand Forecasting", "Automated Reordering", "Multi-location", "Analytics"],
      benefits: ["30% less stockouts", "20% cost reduction", "Real-time visibility"],
      category: "Inventory",
      rating: 4.8,
      users: "9,000+"
    },
    {
      title: "Zion Compliance Manager",
      description: "Automated compliance monitoring platform that tracks regulatory requirements, generates reports, and ensures your business stays compliant.",
      icon: <CheckCircle className="w-8 h-8" />,
      path: "/zion-compliance-manager",
      color: "from-slate-500 to-gray-500",
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      features: ["Regulatory Tracking", "Automated Reports", "Risk Assessment", "Document Management", "Audit Trail"],
      benefits: ["100% compliance rate", "Automated reporting", "Risk mitigation"],
      category: "Compliance",
      rating: 4.9,
      users: "6,000+"
    },
    {
      title: "Zion Performance Monitor",
      description: "Real-time application performance monitoring with AI-powered insights, alerting, and optimization recommendations for better user experience.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/zion-performance-monitor",
      color: "from-rose-500 to-pink-500",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "41% OFF",
      features: ["Real-time Monitoring", "Performance Alerts", "User Experience Tracking", "Error Tracking", "Optimization Tips"],
      benefits: ["99.9% uptime", "Faster load times", "Better user experience"],
      category: "Monitoring",
      rating: 4.8,
      users: "11,000+"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length },
    { name: "Integration", count: microSaasServices.filter(s => s.category === "Integration").length },
    { name: "Sales", count: microSaasServices.filter(s => s.category === "Sales").length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length },
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Inventory", count: microSaasServices.filter(s => s.category === "Inventory").length },
    { name: "Compliance", count: microSaasServices.filter(s => s.category === "Compliance").length },
    { name: "Monitoring", count: microSaasServices.filter(s => s.category === "Monitoring").length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. From analytics and security to automation and compliance - all with AI-powered features and competitive pricing."
        />
        <meta
          name="keywords"
          content="micro saas, business software, analytics, security, automation, productivity, marketing, sales, inventory management, compliance, cloud storage, content creation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">14 Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that transform your business operations immediately. 
              AI-powered features, competitive pricing, and instant deployment for maximum efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">200,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">14</div>
                <div className="text-gray-300 text-sm">Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
                  Choose Your Solution
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All solutions come with 14-day free trial, no credit card required. 
                Cancel anytime with full data export.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {service.discount}
                  </div>
                  
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
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                        </div>
                        <div className="text-gray-400 text-sm">{service.users} users</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <div className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Link
                        to={service.path}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Start Free Trial
                      </Link>
                      <Link
                        to={service.path}
                        className="w-full border border-cyan-400 text-cyan-400 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                      >
                        Learn More
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
              Join 200,000+ businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your free trial today - no credit card required.
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
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
