import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Mail, Smartphone, Globe, Users, Award, Clock, DollarSign, TrendingUp, Target, FileText, Settings, Database, Lock, Smartphone as Phone, Monitor, Wifi, Code, Palette, Search, MessageSquare, Calendar, CreditCard, PieChart, Globe as World, Headphones, Camera, ShoppingCart, BookOpen, Lightbulb, Rocket, Heart, ThumbsUp, Gift, Crown, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$29/month",
      originalPrice: "$49/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "Analytics",
      color: "from-blue-500 to-cyan-500",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance monitoring.",
      icon: <Shield className="w-8 h-8" />,
      price: "$49/month",
      originalPrice: "$79/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Management", "Security Training"],
      category: "Security",
      color: "from-red-500 to-orange-500",
      popular: true,
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with encryption, backup, and file sharing capabilities.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$9/month",
      originalPrice: "$15/month",
      features: ["1TB Storage", "End-to-End Encryption", "File Sharing", "Backup Automation", "Version Control", "Mobile Access"],
      category: "Storage",
      color: "from-purple-500 to-pink-500",
      popular: false,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials.",
      icon: <FileText className="w-8 h-8" />,
      price: "$19/month",
      originalPrice: "$35/month",
      features: ["AI Writing Assistant", "SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Check", "Content Calendar"],
      category: "Content",
      color: "from-green-500 to-emerald-500",
      popular: true,
      link: "/zion-content-studio"
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Automated data synchronization across multiple platforms and databases with real-time updates.",
      icon: <Database className="w-8 h-8" />,
      price: "$39/month",
      originalPrice: "$65/month",
      features: ["Multi-platform Sync", "Real-time Updates", "Data Validation", "Error Handling", "Custom Mappings", "API Integration"],
      category: "Data",
      color: "from-indigo-500 to-purple-500",
      popular: false,
      link: "/zion-data-sync"
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      description: "Lead generation and management system with automated follow-ups and CRM integration.",
      icon: <Target className="w-8 h-8" />,
      price: "$24/month",
      originalPrice: "$40/month",
      features: ["Lead Capture Forms", "Automated Follow-ups", "CRM Integration", "Email Sequences", "Lead Scoring", "Analytics Dashboard"],
      category: "Marketing",
      color: "from-pink-500 to-rose-500",
      popular: true,
      link: "/zion-lead-magnet"
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "Comprehensive project management tool with AI-powered insights and team collaboration features.",
      icon: <Settings className="w-8 h-8" />,
      price: "$34/month",
      originalPrice: "$55/month",
      features: ["Task Management", "Team Collaboration", "AI Insights", "Time Tracking", "Resource Planning", "Progress Reports"],
      category: "Productivity",
      color: "from-teal-500 to-cyan-500",
      popular: false,
      link: "/zion-project-master"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Advanced email marketing automation with personalization and behavioral triggers.",
      icon: <Mail className="w-8 h-8" />,
      price: "$29/month",
      originalPrice: "$45/month",
      features: ["Email Sequences", "Behavioral Triggers", "A/B Testing", "Personalization", "Analytics", "Template Library"],
      category: "Marketing",
      color: "from-orange-500 to-red-500",
      popular: true,
      link: "/zion-email-automation"
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "Social media management platform with AI-powered content suggestions and scheduling.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "$19/month",
      originalPrice: "$30/month",
      features: ["Multi-platform Posting", "AI Content Suggestions", "Optimal Timing", "Analytics", "Team Collaboration", "Content Calendar"],
      category: "Social Media",
      color: "from-violet-500 to-purple-500",
      popular: false,
      link: "/zion-social-scheduler"
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "No-code workflow automation platform for business processes and integrations.",
      icon: <Zap className="w-8 h-8" />,
      price: "$39/month",
      originalPrice: "$60/month",
      features: ["Visual Workflow Builder", "API Integrations", "Conditional Logic", "Error Handling", "Monitoring", "Custom Actions"],
      category: "Automation",
      color: "from-yellow-500 to-orange-500",
      popular: true,
      link: "/zion-workflow-automation"
    },
    {
      id: "zion-invoice-genius",
      name: "Zion Invoice Genius",
      description: "AI-powered invoicing and payment management system with automated reminders and tracking.",
      icon: <CreditCard className="w-8 h-8" />,
      price: "$14/month",
      originalPrice: "$25/month",
      features: ["Invoice Generation", "Payment Tracking", "Automated Reminders", "Multi-currency", "Tax Calculations", "Client Portal"],
      category: "Finance",
      color: "from-emerald-500 to-green-500",
      popular: false,
      link: "/zion-invoice-genius"
    },
    {
      id: "zion-inventory-smart",
      name: "Zion Inventory Smart",
      description: "Intelligent inventory management with demand forecasting and automated reordering.",
      icon: <ShoppingCart className="w-8 h-8" />,
      price: "$44/month",
      originalPrice: "$70/month",
      features: ["Inventory Tracking", "Demand Forecasting", "Automated Reordering", "Multi-location", "Barcode Scanning", "Analytics"],
      category: "Inventory",
      color: "from-amber-500 to-yellow-500",
      popular: true,
      link: "/zion-inventory-smart"
    },
    {
      id: "zion-compliance-manager",
      name: "Zion Compliance Manager",
      description: "Automated compliance monitoring and reporting for various industry standards and regulations.",
      icon: <Lock className="w-8 h-8" />,
      price: "$59/month",
      originalPrice: "$95/month",
      features: ["Compliance Monitoring", "Automated Reports", "Risk Assessment", "Document Management", "Audit Trails", "Regulatory Updates"],
      category: "Compliance",
      color: "from-slate-500 to-gray-500",
      popular: false,
      link: "/zion-compliance-manager"
    },
    {
      id: "zion-performance-monitor",
      name: "Zion Performance Monitor",
      description: "Real-time application and infrastructure monitoring with alerting and performance analytics.",
      icon: <Monitor className="w-8 h-8" />,
      price: "$49/month",
      originalPrice: "$80/month",
      features: ["Real-time Monitoring", "Performance Analytics", "Alert Management", "Custom Dashboards", "API Monitoring", "Uptime Tracking"],
      category: "Monitoring",
      color: "from-cyan-500 to-blue-500",
      popular: true,
      link: "/zion-performance-monitor"
    },
    {
      id: "zion-customer-insights",
      name: "Zion Customer Insights",
      description: "AI-powered customer analytics and sentiment analysis for better customer understanding.",
      icon: <Users className="w-8 h-8" />,
      price: "$34/month",
      originalPrice: "$55/month",
      features: ["Customer Analytics", "Sentiment Analysis", "Behavior Tracking", "Segmentation", "Predictive Insights", "Custom Reports"],
      category: "Analytics",
      color: "from-rose-500 to-pink-500",
      popular: false,
      link: "/zion-customer-insights"
    },
    {
      id: "zion-api-manager",
      name: "Zion API Manager",
      description: "Comprehensive API management platform with monitoring, security, and documentation tools.",
      icon: <Code className="w-8 h-8" />,
      price: "$39/month",
      originalPrice: "$65/month",
      features: ["API Gateway", "Rate Limiting", "Authentication", "Documentation", "Monitoring", "Version Control"],
      category: "Development",
      color: "from-blue-500 to-indigo-500",
      popular: true,
      link: "/zion-api-manager"
    },
    {
      id: "zion-design-studio",
      name: "Zion Design Studio",
      description: "AI-powered design tool for creating logos, graphics, and marketing materials.",
      icon: <Palette className="w-8 h-8" />,
      price: "$24/month",
      originalPrice: "$40/month",
      features: ["AI Design Assistant", "Template Library", "Brand Kit", "Collaboration Tools", "Export Options", "Version Control"],
      category: "Design",
      color: "from-purple-500 to-violet-500",
      popular: false,
      link: "/zion-design-studio"
    },
    {
      id: "zion-seo-optimizer",
      name: "Zion SEO Optimizer",
      description: "Comprehensive SEO analysis and optimization tool with keyword research and competitor analysis.",
      icon: <Search className="w-8 h-8" />,
      price: "$29/month",
      originalPrice: "$45/month",
      features: ["Keyword Research", "Site Analysis", "Competitor Tracking", "Content Optimization", "Rank Tracking", "Technical SEO"],
      category: "SEO",
      color: "from-green-500 to-teal-500",
      popular: true,
      link: "/zion-seo-optimizer"
    },
    {
      id: "zion-calendar-pro",
      name: "Zion Calendar Pro",
      description: "Smart calendar management with AI scheduling, meeting optimization, and team coordination.",
      icon: <Calendar className="w-8 h-8" />,
      price: "$19/month",
      originalPrice: "$30/month",
      features: ["AI Scheduling", "Meeting Optimization", "Team Coordination", "Time Blocking", "Integration", "Mobile App"],
      category: "Productivity",
      color: "from-orange-500 to-amber-500",
      popular: false,
      link: "/zion-calendar-pro"
    },
    {
      id: "zion-knowledge-base",
      name: "Zion Knowledge Base",
      description: "AI-powered knowledge management system with intelligent search and content organization.",
      icon: <BookOpen className="w-8 h-8" />,
      price: "$24/month",
      originalPrice: "$40/month",
      features: ["Intelligent Search", "Content Organization", "Version Control", "Collaboration", "Analytics", "Integration"],
      category: "Knowledge",
      color: "from-indigo-500 to-blue-500",
      popular: true,
      link: "/zion-knowledge-base"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Content", "Data", "Marketing", "Productivity", "Social Media", "Automation", "Finance", "Inventory", "Compliance", "Monitoring", "Development", "Design", "SEO", "Knowledge"];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We increased efficiency by 60% in just 3 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, content creation, project management, and more. Ready-to-use software tools for immediate deployment."
        />
        <meta
          name="keywords"
          content="micro saas, software as a service, business tools, analytics, security, content creation, project management, automation, productivity tools, cloud solutions"
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">20+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From analytics to automation, we have everything you need to scale your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-300 text-sm">Micro SAAS Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
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
                Choose from our comprehensive suite of micro SAAS solutions designed to solve specific business challenges and accelerate growth.
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
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
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
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-3">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">per month</p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
                        to={service.link}
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our micro SAAS solutions
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
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Start your digital transformation journey today.
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
