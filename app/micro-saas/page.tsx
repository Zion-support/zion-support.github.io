import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Lock, Cpu, Eye, MessageSquare, Search, Settings, Monitor, Smartphone as Phone, CreditCard, PieChart, Activity, Layers, Workflow, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSAAS() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $29/month",
      originalPrice: "$59/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "Analytics",
      rating: 4.9,
      users: "2,500+",
      description: "Advanced business intelligence with AI-powered insights, real-time dashboards, and predictive analytics. Perfect for growing businesses that need data-driven decisions.",
      benefits: ["40% faster decision making", "60% reduction in manual reporting", "Real-time insights", "Custom dashboards", "Mobile access", "API integration"],
      useCases: ["E-commerce analytics", "Marketing performance", "Sales forecasting", "Customer behavior analysis", "Financial reporting", "Operational insights"]
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with real-time threat detection, automated incident response, and compliance reporting. Enterprise-grade security for all businesses.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $49/month",
      originalPrice: "$99/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Vulnerability Scanning", "Security Training"],
      category: "Security",
      rating: 4.8,
      users: "1,800+",
      description: "Comprehensive cybersecurity solution with AI-powered threat detection, automated incident response, and compliance reporting. Protect your business from evolving threats.",
      benefits: ["99.9% threat detection accuracy", "Automated incident response", "Compliance automation", "24/7 monitoring", "Vulnerability management", "Security awareness training"],
      useCases: ["Small business protection", "Enterprise security", "Compliance management", "Threat monitoring", "Incident response", "Security training"]
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, automated backups, and advanced file management. Enterprise-grade security with simple pricing.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "From $9/month",
      originalPrice: "$19/month",
      features: ["End-to-End Encryption", "Automated Backups", "File Sharing", "Version Control", "Mobile Access", "Team Collaboration"],
      category: "Storage",
      rating: 4.7,
      users: "5,200+",
      description: "Secure cloud storage with military-grade encryption, automated backups, and advanced collaboration features. Perfect for teams and individuals who value security.",
      benefits: ["Military-grade encryption", "Automated backups", "Easy file sharing", "Version control", "Mobile access", "Team collaboration"],
      useCases: ["Document storage", "Team collaboration", "File sharing", "Backup solutions", "Remote work", "Data archiving"]
    },
    {
      title: "Zion AI Content Studio",
      description: "AI-powered content creation platform with SEO optimization, brand voice training, and multi-format output. Create high-quality content at scale.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-ai-content-studio",
      color: "from-purple-500 to-pink-500",
      price: "From $39/month",
      originalPrice: "$79/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      category: "Content",
      rating: 4.9,
      users: "3,100+",
      description: "Revolutionary AI content creation platform that generates high-quality, SEO-optimized content in multiple formats. Perfect for marketers, bloggers, and content creators.",
      benefits: ["10x faster content creation", "SEO optimization", "Brand consistency", "Multiple formats", "Plagiarism-free content", "Team collaboration"],
      useCases: ["Blog writing", "Social media content", "Email marketing", "Product descriptions", "Ad copy", "Technical documentation"]
    },
    {
      title: "Zion Customer AI",
      description: "Intelligent customer support automation with natural language processing, sentiment analysis, and seamless human handoff. 24/7 customer service excellence.",
      icon: <Bot className="w-8 h-8" />,
      path: "/zion-customer-ai",
      color: "from-green-500 to-emerald-500",
      price: "From $59/month",
      originalPrice: "$119/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Knowledge Base", "Analytics Dashboard"],
      category: "Customer Service",
      rating: 4.8,
      users: "2,200+",
      description: "Advanced AI customer support solution with natural language processing, sentiment analysis, and seamless human handoff. Deliver exceptional customer experiences.",
      benefits: ["80% faster response times", "24/7 availability", "Multi-language support", "Sentiment analysis", "CRM integration", "Performance analytics"],
      useCases: ["E-commerce support", "SaaS customer service", "Lead qualification", "FAQ automation", "Ticket routing", "Customer satisfaction"]
    },
    {
      title: "Zion Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and lead scoring. Maximize your marketing ROI.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Analytics", "CRM Integration"],
      category: "Marketing",
      rating: 4.7,
      users: "1,900+",
      description: "Comprehensive marketing automation platform with AI-driven personalization, advanced analytics, and seamless CRM integration. Scale your marketing efforts efficiently.",
      benefits: ["3x higher conversion rates", "Automated workflows", "AI personalization", "Advanced analytics", "CRM integration", "A/B testing"],
      useCases: ["Email marketing", "Social media management", "Lead nurturing", "Campaign automation", "Customer segmentation", "ROI optimization"]
    },
    {
      title: "Zion Code Assistant",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages. Accelerate your development with AI-powered coding assistance.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "From $49/month",
      originalPrice: "$99/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Multi-language Support", "IDE Integration"],
      category: "Development",
      rating: 4.9,
      users: "4,500+",
      description: "Revolutionary AI code assistant that generates, reviews, and optimizes code across multiple programming languages. Perfect for developers and development teams.",
      benefits: ["50% faster development", "Automated bug detection", "Code optimization", "Auto-documentation", "Multi-language support", "IDE integration"],
      useCases: ["Web development", "Mobile app development", "API development", "Code review", "Documentation", "Performance optimization"]
    },
    {
      title: "Zion Data Pipeline",
      description: "Automated data processing and ETL pipeline with real-time processing, data validation, and seamless integration. Streamline your data workflows.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-pipeline",
      color: "from-teal-500 to-cyan-500",
      price: "From $69/month",
      originalPrice: "$139/month",
      features: ["ETL Processing", "Real-time Streaming", "Data Validation", "API Integration", "Monitoring", "Scalability"],
      category: "Data Processing",
      rating: 4.8,
      users: "1,600+",
      description: "Powerful data processing platform with automated ETL pipelines, real-time streaming, and comprehensive data validation. Perfect for data-driven organizations.",
      benefits: ["90% faster data processing", "Real-time streaming", "Automated validation", "Easy integration", "Scalable infrastructure", "Comprehensive monitoring"],
      useCases: ["Data warehousing", "Real-time analytics", "Data migration", "API integration", "Data validation", "Business intelligence"]
    },
    {
      title: "Zion Financial AI",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis. Make smarter financial decisions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-financial-ai",
      color: "from-amber-500 to-yellow-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Financial Modeling", "Portfolio Management"],
      category: "Finance",
      rating: 4.9,
      users: "1,200+",
      description: "Sophisticated financial AI platform with advanced risk assessment, fraud detection, and investment analysis capabilities. Perfect for financial institutions and businesses.",
      benefits: ["95% fraud detection accuracy", "Automated risk assessment", "Investment insights", "Compliance automation", "Financial modeling", "Portfolio optimization"],
      useCases: ["Banking", "Investment management", "Risk assessment", "Fraud prevention", "Financial planning", "Compliance reporting"]
    },
    {
      title: "Zion IoT Manager",
      description: "Comprehensive IoT device management with real-time monitoring, automated alerts, and predictive maintenance. Connect and manage all your IoT devices.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/zion-iot-manager",
      color: "from-cyan-500 to-blue-500",
      price: "From $39/month",
      originalPrice: "$79/month",
      features: ["Device Management", "Real-time Monitoring", "Predictive Maintenance", "Data Analytics", "Alert System", "Integration APIs"],
      category: "IoT",
      rating: 4.7,
      users: "1,400+",
      description: "Complete IoT device management solution with real-time monitoring, predictive maintenance, and comprehensive analytics. Perfect for smart homes and businesses.",
      benefits: ["Centralized device management", "Real-time monitoring", "Predictive maintenance", "Data analytics", "Automated alerts", "Easy integration"],
      useCases: ["Smart homes", "Industrial IoT", "Fleet management", "Environmental monitoring", "Asset tracking", "Predictive maintenance"]
    },
    {
      title: "Zion Workflow Engine",
      description: "Powerful workflow automation with visual workflow builder, conditional logic, and seamless integrations. Automate complex business processes.",
      icon: <Workflow className="w-8 h-8" />,
      path: "/zion-workflow-engine",
      color: "from-violet-500 to-purple-500",
      price: "From $59/month",
      originalPrice: "$119/month",
      features: ["Visual Builder", "Conditional Logic", "API Integrations", "Task Automation", "Approval Workflows", "Analytics"],
      category: "Automation",
      rating: 4.8,
      users: "2,800+",
      description: "Advanced workflow automation platform with visual workflow builder, conditional logic, and extensive integrations. Streamline your business processes.",
      benefits: ["70% process automation", "Visual workflow builder", "Conditional logic", "API integrations", "Approval workflows", "Process analytics"],
      useCases: ["HR processes", "Sales workflows", "Customer onboarding", "Approval processes", "Data processing", "Task automation"]
    },
    {
      title: "Zion Performance Monitor",
      description: "Comprehensive application performance monitoring with real-time insights, error tracking, and automated alerts. Optimize your application performance.",
      icon: <Monitor className="w-8 h-8" />,
      path: "/zion-performance-monitor",
      color: "from-emerald-500 to-green-500",
      price: "From $29/month",
      originalPrice: "$59/month",
      features: ["Real-time Monitoring", "Error Tracking", "Performance Analytics", "Alert System", "User Experience", "Infrastructure Monitoring"],
      category: "Monitoring",
      rating: 4.9,
      users: "3,600+",
      description: "Advanced application performance monitoring with real-time insights, error tracking, and user experience analytics. Keep your applications running smoothly.",
      benefits: ["Real-time monitoring", "Proactive error detection", "Performance optimization", "User experience insights", "Automated alerts", "Infrastructure visibility"],
      useCases: ["Web applications", "Mobile apps", "APIs", "Microservices", "E-commerce", "SaaS platforms"]
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length },
    { name: "Customer Service", count: microSaasServices.filter(s => s.category === "Customer Service").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length },
    { name: "Data Processing", count: microSaasServices.filter(s => s.category === "Data Processing").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "IoT", count: microSaasServices.filter(s => s.category === "IoT").length },
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length },
    { name: "Monitoring", count: microSaasServices.filter(s => s.category === "Monitoring").length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Software Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, content creation, customer service, marketing automation, and more. Transform your business with AI-powered tools."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, AI tools, business automation, analytics, security, content creation, customer service, marketing automation, development tools, data processing, financial AI, IoT management, workflow automation, performance monitoring"
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
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SAAS solutions designed to transform your business operations. 
              From AI-powered analytics to advanced security, we have the tools you need to succeed in the digital age.
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
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
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

        {/* Micro SAAS Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-white text-sm ml-1">{service.rating}</span>
                        </div>
                        <div className="text-gray-400 text-xs">{service.users} users</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="text-cyan-400 text-xs font-medium bg-cyan-500/20 px-2 py-1 rounded-full border border-cyan-500/30">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        <span className="text-gray-400 text-sm line-through">{service.originalPrice}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
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
                          <span className="text-xs text-gray-400 px-2 py-1">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2">
                      <Link
                        to={service.path}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group-hover:scale-105"
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
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