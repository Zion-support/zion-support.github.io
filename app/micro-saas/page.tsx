import { ArrowRight, BarChart3, Shield, Cloud, Zap, Users, Mail, Calendar, FileText, CreditCard, Globe, Smartphone, Database, Lock, Target, TrendingUp, Settings, Bot, Headphones, Search, Image, Video, Music, Code, Palette, Camera, MapPin, Clock, Star, CheckCircle } from "lucide-react";
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
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App"],
      category: "Analytics",
      popular: true
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with real-time threat detection, automated incident response, and compliance monitoring for small to medium businesses.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $49/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "VPN Protection"],
      category: "Security",
      popular: true
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, automated backups, and file sharing capabilities. Perfect for teams and individuals.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-purple-500 to-pink-500",
      price: "From $9/month",
      features: ["1TB Storage", "End-to-End Encryption", "Auto Backup", "File Sharing", "Version Control"],
      category: "Storage",
      popular: true
    },
    {
      title: "Zion Task Master",
      description: "Intelligent project management tool with AI-powered task prioritization, team collaboration, and automated progress tracking.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-task-master",
      color: "from-green-500 to-emerald-500",
      price: "From $19/month",
      features: ["AI Task Prioritization", "Team Collaboration", "Progress Tracking", "Time Management", "Gantt Charts"],
      category: "Productivity"
    },
    {
      title: "Zion Email Optimizer",
      description: "AI-powered email marketing platform with automated campaigns, A/B testing, and advanced analytics to boost your email performance.",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-optimizer",
      color: "from-indigo-500 to-purple-500",
      price: "From $39/month",
      features: ["AI Campaigns", "A/B Testing", "Advanced Analytics", "List Management", "Template Library"],
      category: "Marketing"
    },
    {
      title: "Zion Calendar Sync",
      description: "Smart calendar management with AI scheduling, meeting optimization, and cross-platform synchronization for seamless productivity.",
      icon: <Calendar className="w-8 h-8" />,
      path: "/zion-calendar-sync",
      color: "from-teal-500 to-cyan-500",
      price: "From $15/month",
      features: ["AI Scheduling", "Meeting Optimization", "Cross-platform Sync", "Time Blocking", "Reminder System"],
      category: "Productivity"
    },
    {
      title: "Zion Document AI",
      description: "Intelligent document processing with OCR, automated data extraction, and smart categorization for efficient document management.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-document-ai",
      color: "from-amber-500 to-yellow-500",
      price: "From $25/month",
      features: ["OCR Technology", "Data Extraction", "Smart Categorization", "Search & Index", "PDF Processing"],
      category: "Document Management"
    },
    {
      title: "Zion Payment Gateway",
      description: "Secure payment processing solution with fraud detection, multi-currency support, and automated invoicing for businesses of all sizes.",
      icon: <CreditCard className="w-8 h-8" />,
      path: "/zion-payment-gateway",
      color: "from-emerald-500 to-green-500",
      price: "2.9% + $0.30 per transaction",
      features: ["Fraud Detection", "Multi-currency", "Automated Invoicing", "PCI Compliance", "Real-time Analytics"],
      category: "Payments"
    },
    {
      title: "Zion Website Builder",
      description: "AI-powered website builder with drag-and-drop interface, SEO optimization, and mobile-responsive templates for quick website creation.",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-website-builder",
      color: "from-violet-500 to-purple-500",
      price: "From $12/month",
      features: ["Drag & Drop Builder", "SEO Optimization", "Mobile Responsive", "Template Library", "Hosting Included"],
      category: "Web Development"
    },
    {
      title: "Zion Mobile App Creator",
      description: "No-code mobile app development platform with AI assistance, cross-platform deployment, and app store optimization.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/zion-mobile-app-creator",
      color: "from-pink-500 to-rose-500",
      price: "From $35/month",
      features: ["No-code Development", "Cross-platform", "App Store Optimization", "Push Notifications", "Analytics Integration"],
      category: "Mobile Development"
    },
    {
      title: "Zion Database Manager",
      description: "Cloud database management with automated backups, performance monitoring, and query optimization for efficient data handling.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-database-manager",
      color: "from-cyan-500 to-blue-500",
      price: "From $45/month",
      features: ["Automated Backups", "Performance Monitoring", "Query Optimization", "Data Migration", "Security Scanning"],
      category: "Database"
    },
    {
      title: "Zion Password Vault",
      description: "Secure password manager with biometric authentication, password generation, and team sharing capabilities for enhanced security.",
      icon: <Lock className="w-8 h-8" />,
      path: "/zion-password-vault",
      color: "from-slate-500 to-gray-500",
      price: "From $8/month",
      features: ["Biometric Auth", "Password Generation", "Team Sharing", "Dark Web Monitoring", "Auto-fill"],
      category: "Security"
    },
    {
      title: "Zion Social Media Manager",
      description: "AI-powered social media management with content scheduling, engagement tracking, and automated posting across all platforms.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-social-media-manager",
      color: "from-orange-500 to-red-500",
      price: "From $29/month",
      features: ["Content Scheduling", "Engagement Tracking", "Multi-platform", "Analytics Dashboard", "AI Content Suggestions"],
      category: "Social Media"
    },
    {
      title: "Zion SEO Optimizer",
      description: "Advanced SEO tool with keyword research, competitor analysis, and automated optimization suggestions to improve search rankings.",
      icon: <Search className="w-8 h-8" />,
      path: "/zion-seo-optimizer",
      color: "from-lime-500 to-green-500",
      price: "From $22/month",
      features: ["Keyword Research", "Competitor Analysis", "Site Audits", "Rank Tracking", "Content Optimization"],
      category: "SEO"
    },
    {
      title: "Zion Image Editor Pro",
      description: "AI-powered image editing tool with automatic enhancement, background removal, and batch processing capabilities.",
      icon: <Image className="w-8 h-8" />,
      path: "/zion-image-editor-pro",
      color: "from-fuchsia-500 to-pink-500",
      price: "From $18/month",
      features: ["AI Enhancement", "Background Removal", "Batch Processing", "Filters & Effects", "Cloud Storage"],
      category: "Design"
    },
    {
      title: "Zion Video Creator",
      description: "AI-powered video creation platform with automated editing, subtitle generation, and multi-format export for content creators.",
      icon: <Video className="w-8 h-8" />,
      path: "/zion-video-creator",
      color: "from-red-500 to-pink-500",
      price: "From $32/month",
      features: ["AI Editing", "Auto Subtitles", "Multi-format Export", "Template Library", "Cloud Rendering"],
      category: "Video Production"
    },
    {
      title: "Zion Music Studio",
      description: "AI-powered music creation tool with beat generation, vocal processing, and professional mixing capabilities for musicians.",
      icon: <Music className="w-8 h-8" />,
      path: "/zion-music-studio",
      color: "from-purple-500 to-indigo-500",
      price: "From $28/month",
      features: ["AI Beat Generation", "Vocal Processing", "Professional Mixing", "MIDI Support", "Cloud Collaboration"],
      category: "Audio Production"
    },
    {
      title: "Zion Code Generator",
      description: "AI-powered code generation tool with multiple language support, bug detection, and automated testing for developers.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-code-generator",
      color: "from-yellow-500 to-orange-500",
      price: "From $35/month",
      features: ["Multi-language Support", "Bug Detection", "Auto Testing", "Code Review", "Documentation"],
      category: "Development"
    },
    {
      title: "Zion Design Studio",
      description: "AI-powered design tool with logo creation, brand kit generation, and automated design suggestions for businesses.",
      icon: <Palette className="w-8 h-8" />,
      path: "/zion-design-studio",
      color: "from-rose-500 to-pink-500",
      price: "From $24/month",
      features: ["Logo Creation", "Brand Kit", "Design Suggestions", "Template Library", "Vector Graphics"],
      category: "Design"
    },
    {
      title: "Zion Photo Organizer",
      description: "AI-powered photo management with automatic tagging, duplicate detection, and smart organization for personal and professional use.",
      icon: <Camera className="w-8 h-8" />,
      path: "/zion-photo-organizer",
      color: "from-sky-500 to-blue-500",
      price: "From $16/month",
      features: ["Auto Tagging", "Duplicate Detection", "Smart Organization", "Cloud Sync", "Face Recognition"],
      category: "Photo Management"
    },
    {
      title: "Zion Location Tracker",
      description: "GPS tracking solution with geofencing, route optimization, and real-time monitoring for fleet management and personal use.",
      icon: <MapPin className="w-8 h-8" />,
      path: "/zion-location-tracker",
      color: "from-emerald-500 to-teal-500",
      price: "From $20/month",
      features: ["GPS Tracking", "Geofencing", "Route Optimization", "Real-time Monitoring", "Historical Data"],
      category: "Location Services"
    },
    {
      title: "Zion Time Tracker",
      description: "Advanced time tracking with project management, productivity analytics, and automated timesheet generation for remote teams.",
      icon: <Clock className="w-8 h-8" />,
      path: "/zion-time-tracker",
      color: "from-amber-500 to-yellow-500",
      price: "From $14/month",
      features: ["Project Tracking", "Productivity Analytics", "Auto Timesheets", "Team Management", "Reporting"],
      category: "Time Management"
    },
    {
      title: "Zion Customer Support Bot",
      description: "AI-powered customer support chatbot with natural language processing, ticket management, and 24/7 automated assistance.",
      icon: <Bot className="w-8 h-8" />,
      path: "/zion-customer-support-bot",
      color: "from-blue-500 to-indigo-500",
      price: "From $42/month",
      features: ["NLP Processing", "Ticket Management", "24/7 Support", "Multi-language", "Analytics"],
      category: "Customer Service"
    },
    {
      title: "Zion Help Desk",
      description: "Comprehensive help desk solution with ticket management, knowledge base, and team collaboration tools for IT support.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/zion-help-desk",
      color: "from-green-500 to-emerald-500",
      price: "From $38/month",
      features: ["Ticket Management", "Knowledge Base", "Team Collaboration", "SLA Tracking", "Reporting"],
      category: "IT Support"
    }
  ];

  const categories = [
    "All", "Analytics", "Security", "Storage", "Productivity", "Marketing", 
    "Document Management", "Payments", "Web Development", "Mobile Development", 
    "Database", "Social Media", "SEO", "Design", "Video Production", 
    "Audio Production", "Development", "Photo Management", "Location Services", 
    "Time Management", "Customer Service", "IT Support"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions. From analytics and security to productivity and design tools, we offer 25+ ready-to-use software solutions for businesses of all sizes. Starting from $8/month."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business tools, analytics, security, productivity, marketing tools, web development, mobile apps, database management, design tools, video editing, AI tools"
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
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">25+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From analytics and security to productivity and design tools, we offer comprehensive micro SAAS solutions for every need.
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
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">25+</div>
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
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300 text-sm"
                  >
                    {category}
                  </button>
                ))}
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
                Choose from our comprehensive collection of micro SAAS solutions designed to streamline your business operations and boost productivity.
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
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
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
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
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
                    
                    <div className="flex justify-between items-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Get Started
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
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today with our comprehensive suite of tools.
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
