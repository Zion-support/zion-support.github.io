import { ArrowRight, BarChart3, Shield, Cloud, Zap, Brain, Users, Mail, Smartphone, Globe, Star, CheckCircle, Clock, DollarSign, TrendingUp, Database, Code, FileText, Target, Bot, Wifi, Settings, Lock, Monitor, Smartphone as PhoneIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$49/month",
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      benefits: ["40% faster decision making", "99.9% uptime SLA", "24/7 support", "30-day free trial"],
      category: "Analytics",
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring for businesses of all sizes.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$79/month",
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Vulnerability Scanning", "Security Training"],
      benefits: ["99.8% threat detection rate", "Sub-5 minute response time", "SOC2 compliance", "Free security audit"],
      category: "Security",
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with enterprise-grade encryption, automated backups, and seamless collaboration tools for teams.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $9/month",
      originalPrice: "$15/month",
      color: "from-purple-500 to-pink-500",
      features: ["Unlimited Storage", "End-to-End Encryption", "Auto Backup", "File Sharing", "Version Control", "Team Collaboration"],
      benefits: ["99.99% data durability", "Zero-knowledge encryption", "Cross-platform sync", "30-day money-back guarantee"],
      category: "Storage",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion AI Assistant",
      description: "Intelligent virtual assistant for customer support, sales automation, and internal operations. Powered by advanced natural language processing.",
      icon: <Bot className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$59/month",
      color: "from-green-500 to-emerald-500",
      features: ["Multi-language Support", "CRM Integration", "Live Chat Handoff", "Sentiment Analysis", "Custom Training", "API Access"],
      benefits: ["80% reduction in support tickets", "24/7 availability", "Multilingual support", "Free setup and training"],
      category: "AI Assistant",
      link: "/zion-ai-assistant"
    },
    {
      name: "Zion Marketing Hub",
      description: "All-in-one marketing automation platform with AI-driven personalization, email campaigns, social media management, and lead scoring.",
      icon: <Target className="w-8 h-8" />,
      price: "From $59/month",
      originalPrice: "$89/month",
      color: "from-indigo-500 to-purple-500",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Analytics", "CRM Integration"],
      benefits: ["3x higher conversion rates", "50% time savings", "Advanced analytics", "Free migration service"],
      category: "Marketing",
      link: "/zion-marketing-hub"
    },
    {
      name: "Zion Project Manager",
      description: "AI-powered project management tool with intelligent task allocation, progress tracking, and resource optimization for teams.",
      icon: <Settings className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$29/month",
      color: "from-teal-500 to-cyan-500",
      features: ["Task Management", "Team Collaboration", "Time Tracking", "Resource Planning", "Gantt Charts", "Mobile App"],
      benefits: ["25% faster project delivery", "Real-time collaboration", "Smart notifications", "Free team onboarding"],
      category: "Project Management",
      link: "/zion-project-manager"
    },
    {
      name: "Zion Code Assistant",
      description: "AI-powered code generation, review, and optimization tool supporting multiple programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$39/month",
      color: "from-yellow-500 to-orange-500",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Multi-language Support", "Git Integration"],
      benefits: ["60% faster development", "90% fewer bugs", "Auto-documentation", "Free code review"],
      category: "Development",
      link: "/zion-code-assistant"
    },
    {
      name: "Zion Document AI",
      description: "Intelligent document processing with OCR, form recognition, automated data entry, and workflow automation for business documents.",
      icon: <FileText className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$59/month",
      color: "from-emerald-500 to-green-500",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "API Integration", "Batch Processing"],
      benefits: ["95% accuracy rate", "80% time savings", "Unlimited processing", "Free trial with sample docs"],
      category: "Document Processing",
      link: "/zion-document-ai"
    },
    {
      name: "Zion HR Manager",
      description: "Complete human resources management system with AI-powered recruitment, employee onboarding, performance tracking, and payroll integration.",
      icon: <Users className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$69/month",
      color: "from-violet-500 to-purple-500",
      features: ["Recruitment AI", "Employee Onboarding", "Performance Tracking", "Payroll Integration", "Time Tracking", "Compliance Tools"],
      benefits: ["50% faster hiring", "Automated onboarding", "Compliance assurance", "Free HR consultation"],
      category: "Human Resources",
      link: "/zion-hr-manager"
    },
    {
      name: "Zion Finance Tracker",
      description: "AI-powered financial management with automated bookkeeping, expense tracking, invoice generation, and financial reporting for small businesses.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$59/month",
      color: "from-amber-500 to-yellow-500",
      features: ["Automated Bookkeeping", "Expense Tracking", "Invoice Generation", "Financial Reports", "Tax Preparation", "Bank Integration"],
      benefits: ["90% automation", "Real-time insights", "Tax compliance", "Free financial audit"],
      category: "Finance",
      link: "/zion-finance-tracker"
    },
    {
      name: "Zion IoT Manager",
      description: "Comprehensive IoT device management platform with real-time monitoring, data analytics, and automated alerts for connected devices.",
      icon: <Wifi className="w-8 h-8" />,
      price: "From $69/month",
      originalPrice: "$99/month",
      color: "from-cyan-500 to-blue-500",
      features: ["Device Management", "Real-time Monitoring", "Data Analytics", "Automated Alerts", "Remote Control", "Scalable Infrastructure"],
      benefits: ["99.9% device uptime", "Real-time insights", "Predictive maintenance", "Free device assessment"],
      category: "IoT Management",
      link: "/zion-iot-manager"
    },
    {
      name: "Zion Compliance Monitor",
      description: "Automated compliance monitoring and reporting tool for GDPR, HIPAA, SOC2, and other regulatory requirements with real-time alerts.",
      icon: <Lock className="w-8 h-8" />,
      price: "From $79/month",
      originalPrice: "$119/month",
      color: "from-red-600 to-pink-600",
      features: ["Multi-framework Support", "Automated Audits", "Real-time Alerts", "Compliance Reports", "Risk Assessment", "Documentation"],
      benefits: ["100% compliance coverage", "Automated reporting", "Risk mitigation", "Free compliance assessment"],
      category: "Compliance",
      link: "/zion-compliance-monitor"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "AI Assistant", "Marketing", "Project Management", "Development", "Document Processing", "Human Resources", "Finance", "IoT Management", "Compliance"];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We now make decisions 40% faster with real-time insights.",
      rating: 5,
      product: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI Assistant reduced our support tickets by 80% and improved customer satisfaction significantly.",
      rating: 5,
      product: "Zion AI Assistant"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Marketing Hub increased our conversion rates by 3x. The AI-driven personalization is incredible.",
      rating: 5,
      product: "Zion Marketing Hub"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software</title>
        <meta
          name="description"
          content="Comprehensive micro SAAS solutions including analytics, security, AI assistants, marketing automation, project management, and more. Ready-to-deploy business software starting from $9/month."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, analytics, security, AI assistant, marketing automation, project management, cloud storage, document processing, HR management, finance tracking, IoT management, compliance monitoring"
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
              <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From AI-powered analytics to comprehensive security suites, deploy enterprise-grade tools in minutes.
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
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of ready-to-deploy business solutions. 
                Each product comes with free trials, comprehensive support, and enterprise-grade security.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save 30%
                  </div>
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-cyan-400 font-medium mb-1">{product.category}</div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{product.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <div className="space-y-2">
                        {product.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link
                        to={product.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Start Trial
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <div className="mb-2">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-cyan-400 mt-1">{testimonial.product}</div>
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
              Start your free trial today with no credit card required.
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
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Services
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
