import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Cloud, BarChart3, Bot, Code, Zap, Users, Mail, Smartphone, Globe, Star, CheckCircle, Clock, DollarSign, TrendingUp, Target, FileText, Database, Wifi, Smartphone as Phone, Monitor, Settings, Lock, Eye, Send, Download, Upload, RefreshCw, AlertTriangle, CheckCircle2, XCircle, Activity, PieChart, LineChart, BarChart, Calendar, Clock as ClockIcon, Globe as GlobeIcon, Shield as ShieldIcon, Zap as ZapIcon, Database as DatabaseIcon, Code as CodeIcon, Users as UsersIcon, Mail as MailIcon, Smartphone as SmartphoneIcon, Globe as GlobeIcon2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$299",
      period: "month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics Engine",
        "Custom Report Builder",
        "API Integration",
        "Data Visualization Tools",
        "Automated Alerts",
        "Multi-source Data Connectors",
        "Advanced Filtering & Search",
        "Export to Multiple Formats",
        "24/7 Support"
      ],
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with real-time threat detection, automated incident response, and compliance monitoring for your business.",
      icon: <Shield className="w-8 h-8" />,
      price: "$499",
      period: "month",
      features: [
        "Real-time Threat Detection",
        "Automated Incident Response",
        "Compliance Monitoring",
        "Vulnerability Scanning",
        "Security Audit Reports",
        "24/7 Security Monitoring",
        "Multi-layer Protection",
        "Threat Intelligence Feeds",
        "Custom Security Policies",
        "Emergency Response Team"
      ],
      color: "from-red-500 to-orange-500",
      category: "Security",
      popular: true,
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools for teams of any size.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$99",
      period: "month",
      features: [
        "Unlimited Cloud Storage",
        "End-to-End Encryption",
        "Automated Backups",
        "File Versioning",
        "Team Collaboration",
        "Access Control Management",
        "Sync Across Devices",
        "Advanced Search",
        "Compliance Ready",
        "99.9% Uptime SLA"
      ],
      color: "from-green-500 to-emerald-500",
      category: "Storage",
      popular: false,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform that generates high-quality articles, social media posts, and marketing materials in minutes.",
      icon: <FileText className="w-8 h-8" />,
      price: "$199",
      period: "month",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Social Media Scheduling",
        "A/B Testing Tools",
        "Performance Analytics",
        "Team Collaboration"
      ],
      color: "from-purple-500 to-pink-500",
      category: "Content",
      popular: false,
      link: "/zion-content-studio"
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Intelligent data synchronization platform that connects all your business applications and keeps data consistent across systems.",
      icon: <Database className="w-8 h-8" />,
      price: "$149",
      period: "month",
      features: [
        "Multi-platform Integration",
        "Real-time Data Sync",
        "Data Transformation",
        "Error Handling & Recovery",
        "Custom Mapping Rules",
        "Scheduled Synchronization",
        "Data Validation",
        "Audit Trail",
        "API Management",
        "Technical Support"
      ],
      color: "from-indigo-500 to-blue-500",
      category: "Integration",
      popular: false,
      link: "/zion-data-sync"
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with automated email campaigns, lead scoring, and conversion tracking.",
      icon: <Target className="w-8 h-8" />,
      price: "$179",
      period: "month",
      features: [
        "Lead Capture Forms",
        "Email Automation",
        "Lead Scoring System",
        "Conversion Tracking",
        "A/B Testing",
        "CRM Integration",
        "Behavioral Analytics",
        "Personalized Campaigns",
        "Landing Page Builder",
        "ROI Analytics"
      ],
      color: "from-yellow-500 to-orange-500",
      category: "Marketing",
      popular: false,
      link: "/zion-lead-magnet"
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "Comprehensive project management platform with AI-powered insights, resource planning, and team collaboration tools.",
      icon: <Code className="w-8 h-8" />,
      price: "$229",
      period: "month",
      features: [
        "Project Planning Tools",
        "Resource Management",
        "Team Collaboration",
        "Time Tracking",
        "Budget Management",
        "Risk Assessment",
        "Progress Monitoring",
        "Document Management",
        "Client Communication",
        "Reporting Dashboard"
      ],
      color: "from-teal-500 to-cyan-500",
      category: "Productivity",
      popular: false,
      link: "/zion-project-master"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Intelligent email marketing platform with advanced automation, personalization, and analytics for maximum engagement.",
      icon: <Mail className="w-8 h-8" />,
      price: "$129",
      period: "month",
      features: [
        "Email Template Builder",
        "Automation Workflows",
        "Personalization Engine",
        "A/B Testing",
        "List Management",
        "Deliverability Optimization",
        "Performance Analytics",
        "Segmentation Tools",
        "Integration APIs",
        "Compliance Tools"
      ],
      color: "from-pink-500 to-rose-500",
      category: "Marketing",
      popular: false,
      link: "/zion-email-automation"
    },
    {
      id: "zion-crm-assistant",
      name: "Zion CRM Assistant",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and sales forecasting.",
      icon: <Users className="w-8 h-8" />,
      price: "$249",
      period: "month",
      features: [
        "Contact Management",
        "Lead Scoring AI",
        "Sales Pipeline",
        "Automated Follow-ups",
        "Email Integration",
        "Activity Tracking",
        "Sales Forecasting",
        "Custom Fields",
        "Mobile App",
        "API Access"
      ],
      color: "from-violet-500 to-purple-500",
      category: "CRM",
      popular: false,
      link: "/zion-crm-assistant"
    },
    {
      id: "zion-finance-tracker",
      name: "Zion Finance Tracker",
      description: "Advanced financial management platform with expense tracking, budgeting tools, and financial reporting for businesses.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "$159",
      period: "month",
      features: [
        "Expense Tracking",
        "Budget Planning",
        "Financial Reports",
        "Invoice Management",
        "Tax Preparation",
        "Multi-currency Support",
        "Bank Integration",
        "Receipt Scanning",
        "Audit Trail",
        "Compliance Tools"
      ],
      color: "from-emerald-500 to-green-500",
      category: "Finance",
      popular: false,
      link: "/zion-finance-tracker"
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "Comprehensive social media management platform with content scheduling, analytics, and engagement tracking across all platforms.",
      icon: <Globe className="w-8 h-8" />,
      price: "$119",
      period: "month",
      features: [
        "Multi-platform Posting",
        "Content Calendar",
        "Engagement Analytics",
        "Hashtag Research",
        "Competitor Analysis",
        "Team Collaboration",
        "Content Library",
        "Auto-posting",
        "Performance Reports",
        "Social Listening"
      ],
      color: "from-cyan-500 to-blue-500",
      category: "Social Media",
      popular: false,
      link: "/zion-social-scheduler"
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "Powerful workflow automation platform that connects your apps and automates repetitive tasks to boost productivity.",
      icon: <Zap className="w-8 h-8" />,
      price: "$189",
      period: "month",
      features: [
        "Visual Workflow Builder",
        "App Integrations",
        "Conditional Logic",
        "Data Transformation",
        "Error Handling",
        "Scheduled Triggers",
        "Custom Actions",
        "Workflow Analytics",
        "Team Permissions",
        "API Access"
      ],
      color: "from-amber-500 to-yellow-500",
      category: "Automation",
      popular: false,
      link: "/zion-workflow-automation"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length },
    { name: "Integration", count: microSaasServices.filter(s => s.category === "Integration").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "CRM", count: microSaasServices.filter(s => s.category === "CRM").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length },
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length }
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
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, storage, content creation, and automation tools. Ready-to-use software for immediate deployment."
        />
        <meta
          name="keywords"
          content="micro saas, software as a service, business analytics, cybersecurity, cloud storage, content creation, workflow automation, CRM, project management, email marketing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 holographic-grid"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementation - just powerful tools that work out of the box.
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
                  key={category.name}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
                Choose from our comprehensive suite of ready-to-use software solutions designed to accelerate your business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className={`group holographic-card p-6 hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                      <span className="text-gray-400 ml-2">/{service.period}</span>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                      {service.category}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-sm text-cyan-400 font-medium">
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                    >
                      Get Started
                    </Link>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Contact us today for a personalized consultation and demo.
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