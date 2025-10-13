import { ArrowRight, BarChart3, Shield, Cloud, Brain, Zap, Database, Code, Mail, Users, Target, FileText, Globe, Smartphone, TrendingUp, Star, CheckCircle, Clock, DollarSign } from "lucide-react";
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
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance monitoring. Keep your business safe 24/7.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $49/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response"],
      category: "Security",
      popular: true
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, file sharing, and collaboration tools. Your data, secured and accessible anywhere.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "From $9/month",
      features: ["End-to-End Encryption", "File Sharing", "Version Control", "Team Collaboration", "Mobile Sync"],
      category: "Storage",
      popular: true
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials. Create engaging content at scale with intelligent automation.",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      price: "From $39/month",
      features: ["AI Writing Assistant", "SEO Optimization", "Multi-format Output", "Brand Voice Training", "Content Calendar"],
      category: "Content"
    },
    {
      title: "Zion Data Sync",
      description: "Automated data synchronization across all your business applications. Keep your data consistent and up-to-date across platforms.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-sync",
      color: "from-green-500 to-emerald-500",
      price: "From $19/month",
      features: ["Real-time Sync", "Multi-platform Support", "Data Validation", "Error Handling", "Custom Mappings"],
      category: "Integration"
    },
    {
      title: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with automated workflows, scoring, and personalized follow-ups.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-lead-magnet",
      color: "from-yellow-500 to-orange-500",
      price: "From $59/month",
      features: ["Lead Scoring", "Automated Workflows", "Email Sequences", "CRM Integration", "Analytics Dashboard"],
      category: "Marketing"
    },
    {
      title: "Zion Project Master",
      description: "Comprehensive project management tool with AI-powered insights, resource allocation, and progress tracking.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-project-master",
      color: "from-teal-500 to-cyan-500",
      price: "From $79/month",
      features: ["Task Management", "Resource Planning", "AI Insights", "Team Collaboration", "Progress Tracking"],
      category: "Productivity"
    },
    {
      title: "Zion Email Automation",
      description: "Intelligent email marketing platform with advanced segmentation, personalization, and performance analytics.",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $29/month",
      features: ["Email Templates", "Segmentation", "A/B Testing", "Analytics", "Automation Workflows"],
      category: "Marketing"
    },
    {
      title: "Zion Team Connect",
      description: "Advanced team communication and collaboration platform with video calls, file sharing, and project management integration.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-team-connect",
      color: "from-violet-500 to-purple-500",
      price: "From $15/month",
      features: ["Video Conferencing", "File Sharing", "Team Chat", "Screen Sharing", "Calendar Integration"],
      category: "Communication"
    },
    {
      title: "Zion Document AI",
      description: "Intelligent document processing and analysis platform with OCR, form recognition, and automated data extraction.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-document-ai",
      color: "from-amber-500 to-yellow-500",
      price: "From $49/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "API Access"],
      category: "Document Processing"
    },
    {
      title: "Zion Web Monitor",
      description: "Comprehensive website monitoring and performance optimization tool with uptime tracking, speed analysis, and SEO insights.",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-web-monitor",
      color: "from-cyan-500 to-blue-500",
      price: "From $25/month",
      features: ["Uptime Monitoring", "Performance Analysis", "SEO Audits", "Security Scanning", "Alert System"],
      category: "Web Tools"
    },
    {
      title: "Zion Mobile Builder",
      description: "No-code mobile app development platform with drag-and-drop interface, templates, and instant deployment.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/zion-mobile-builder",
      color: "from-emerald-500 to-green-500",
      price: "From $99/month",
      features: ["Drag & Drop Builder", "App Templates", "Instant Deployment", "Push Notifications", "Analytics"],
      category: "Development"
    },
    {
      title: "Zion Financial Tracker",
      description: "AI-powered financial management and expense tracking with automated categorization, budgeting, and financial insights.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-financial-tracker",
      color: "from-lime-500 to-green-500",
      price: "From $35/month",
      features: ["Expense Tracking", "Budget Management", "Financial Reports", "AI Insights", "Bank Integration"],
      category: "Finance"
    },
    {
      title: "Zion Social Scheduler",
      description: "Advanced social media management platform with content scheduling, analytics, and AI-powered optimization.",
      icon: <Zap className="w-8 h-8" />,
      path: "/zion-social-scheduler",
      color: "from-fuchsia-500 to-pink-500",
      price: "From $45/month",
      features: ["Content Scheduling", "Multi-platform Support", "Analytics", "AI Optimization", "Team Collaboration"],
      category: "Social Media"
    },
    {
      title: "Zion Inventory Pro",
      description: "Intelligent inventory management system with demand forecasting, automated reordering, and real-time tracking.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-inventory-pro",
      color: "from-slate-500 to-gray-500",
      price: "From $69/month",
      features: ["Inventory Tracking", "Demand Forecasting", "Automated Reordering", "Multi-location Support", "Analytics"],
      category: "Inventory"
    },
    {
      title: "Zion Customer Insights",
      description: "Advanced customer analytics and behavior tracking platform with sentiment analysis and personalized recommendations.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-customer-insights",
      color: "from-rose-500 to-pink-500",
      price: "From $55/month",
      features: ["Customer Analytics", "Behavior Tracking", "Sentiment Analysis", "Personalization", "CRM Integration"],
      category: "Customer Analytics"
    },
    {
      title: "Zion API Gateway",
      description: "Comprehensive API management and monitoring platform with rate limiting, analytics, and developer portal.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-api-gateway",
      color: "from-orange-500 to-red-500",
      price: "From $89/month",
      features: ["API Management", "Rate Limiting", "Analytics", "Developer Portal", "Security"],
      category: "API Management"
    },
    {
      title: "Zion Backup Pro",
      description: "Automated backup and disaster recovery solution with cloud storage, version control, and instant restore capabilities.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-backup-pro",
      color: "from-sky-500 to-blue-500",
      price: "From $39/month",
      features: ["Automated Backups", "Cloud Storage", "Version Control", "Instant Restore", "Encryption"],
      category: "Backup"
    },
    {
      title: "Zion Workflow Engine",
      description: "Visual workflow automation platform with drag-and-drop interface, integrations, and AI-powered optimization.",
      icon: <Zap className="w-8 h-8" />,
      path: "/zion-workflow-engine",
      color: "from-purple-500 to-indigo-500",
      price: "From $65/month",
      features: ["Visual Workflows", "Drag & Drop", "Integrations", "AI Optimization", "Monitoring"],
      category: "Automation"
    },
    {
      title: "Zion Compliance Manager",
      description: "Automated compliance monitoring and reporting tool for GDPR, HIPAA, SOX, and other regulatory requirements.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-compliance-manager",
      color: "from-red-600 to-red-500",
      price: "From $95/month",
      features: ["Compliance Monitoring", "Automated Reports", "Risk Assessment", "Audit Trails", "Regulatory Updates"],
      category: "Compliance"
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed for immediate deployment. From analytics to security, productivity to marketing - transform your business with our innovative software solutions."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, business tools, analytics, security, productivity, marketing automation, cloud storage, project management, email marketing, team collaboration"
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
              From analytics to security, productivity to marketing - deploy powerful tools in minutes, not months.
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
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                All Solutions
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS solutions designed to address specific business needs with immediate deployment.
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
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Popular</span>
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
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                        <div className="text-xs text-gray-400">{service.category}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>Deploy in 5 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 24/7 support and regular updates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Up to 3 micro SAAS tools</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Basic support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Standard features</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Up to 10 micro SAAS tools</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Advanced features</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>API access</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Unlimited micro SAAS tools</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>White-label options</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold text-center block hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy Your First Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to streamline operations and drive growth. 
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
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
