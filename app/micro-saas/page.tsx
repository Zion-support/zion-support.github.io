import { ArrowRight, Zap, Shield, Cloud, BarChart3, Brain, Code, Database, Mail, Phone, MapPin, Star, CheckCircle, Users, TrendingUp, Clock, Globe, Smartphone, Target, FileText, Settings, Lock, RefreshCw, Eye, Download, Upload, Search, Filter, Bell, MessageSquare, Calendar, PieChart, LineChart, BarChart, Activity, AlertTriangle, CheckCircle2, XCircle, Info, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable business intelligence.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "$299/month",
      originalPrice: "$399/month",
      features: [
        "Real-time Dashboard",
        "Predictive Analytics",
        "Custom Reports",
        "API Integration",
        "Data Visualization",
        "Automated Alerts",
        "Multi-source Data",
        "Export Capabilities"
      ],
      benefits: [
        "40% faster decision making",
        "60% reduction in manual reporting",
        "Real-time insights",
        "Customizable dashboards"
      ],
      category: "Analytics",
      popularity: "Most Popular",
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring. Enterprise-grade security for your business.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "$499/month",
      originalPrice: "$699/month",
      features: [
        "AI Threat Detection",
        "Automated Response",
        "Compliance Reports",
        "24/7 Monitoring",
        "Vulnerability Scanning",
        "Incident Management",
        "Security Analytics",
        "Multi-layer Protection"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response",
        "Automated compliance",
        "Real-time protection"
      ],
      category: "Security",
      popularity: "Enterprise",
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and intelligent file management. Your data, secured and accessible anywhere.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "$99/month",
      originalPrice: "$149/month",
      features: [
        "End-to-end Encryption",
        "Automated Backups",
        "File Versioning",
        "Collaboration Tools",
        "Access Controls",
        "Sync Across Devices",
        "Large File Support",
        "API Integration"
      ],
      benefits: [
        "99.99% uptime guarantee",
        "Unlimited storage",
        "Advanced security",
        "Easy collaboration"
      ],
      category: "Storage",
      popularity: "Best Value",
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform with automated writing, SEO optimization, and multi-format publishing. Create engaging content at scale.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "$199/month",
      originalPrice: "$299/month",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Multi-format Output",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Content Calendar",
        "Team Collaboration",
        "Performance Analytics"
      ],
      benefits: [
        "10x faster content creation",
        "40% better SEO performance",
        "Consistent brand voice",
        "Automated publishing"
      ],
      category: "Content",
      popularity: "Trending",
      link: "/zion-content-studio"
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Intelligent data synchronization platform that connects all your business applications and ensures data consistency across systems.",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "$149/month",
      originalPrice: "$199/month",
      features: [
        "Real-time Sync",
        "Multi-platform Support",
        "Data Transformation",
        "Conflict Resolution",
        "Error Handling",
        "Monitoring Dashboard",
        "Custom Mappings",
        "API Integration"
      ],
      benefits: [
        "Eliminate data silos",
        "Real-time updates",
        "Reduced manual work",
        "Improved accuracy"
      ],
      category: "Integration",
      popularity: "New",
      link: "/zion-data-sync"
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      description: "Advanced lead generation and management platform with AI-powered lead scoring, automated nurturing, and conversion optimization.",
      icon: <Target className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "$179/month",
      originalPrice: "$249/month",
      features: [
        "Lead Scoring AI",
        "Automated Nurturing",
        "Email Campaigns",
        "Landing Pages",
        "A/B Testing",
        "CRM Integration",
        "Analytics Dashboard",
        "Custom Workflows"
      ],
      benefits: [
        "3x more qualified leads",
        "50% higher conversion rates",
        "Automated follow-ups",
        "Better lead quality"
      ],
      category: "Marketing",
      popularity: "Hot",
      link: "/zion-lead-magnet"
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "AI-powered project management platform with intelligent task allocation, resource optimization, and predictive project analytics.",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "$229/month",
      originalPrice: "$299/month",
      features: [
        "AI Task Allocation",
        "Resource Optimization",
        "Predictive Analytics",
        "Team Collaboration",
        "Time Tracking",
        "Budget Management",
        "Risk Assessment",
        "Progress Monitoring"
      ],
      benefits: [
        "30% faster project delivery",
        "25% cost reduction",
        "Better resource utilization",
        "Predictive insights"
      ],
      category: "Project Management",
      popularity: "Recommended",
      link: "/zion-project-master"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-driven personalization, automated sequences, and advanced analytics for maximum engagement.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "$129/month",
      originalPrice: "$179/month",
      features: [
        "AI Personalization",
        "Automated Sequences",
        "A/B Testing",
        "Advanced Analytics",
        "Template Library",
        "Segmentation",
        "Deliverability Optimization",
        "Integration Hub"
      ],
      benefits: [
        "40% higher open rates",
        "60% better click-through rates",
        "Automated personalization",
        "Advanced analytics"
      ],
      category: "Email Marketing",
      popularity: "Popular",
      link: "/zion-email-automation"
    },
    {
      id: "zion-crm-assistant",
      name: "Zion CRM Assistant",
      description: "AI-powered CRM with intelligent lead qualification, automated follow-ups, and predictive sales analytics for maximum revenue growth.",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "$249/month",
      originalPrice: "$349/month",
      features: [
        "AI Lead Scoring",
        "Automated Follow-ups",
        "Sales Forecasting",
        "Pipeline Management",
        "Contact Management",
        "Deal Tracking",
        "Performance Analytics",
        "Integration Hub"
      ],
      benefits: [
        "35% increase in sales",
        "50% better lead qualification",
        "Automated follow-ups",
        "Predictive insights"
      ],
      category: "CRM",
      popularity: "Enterprise",
      link: "/zion-crm-assistant"
    },
    {
      id: "zion-finance-tracker",
      name: "Zion Finance Tracker",
      description: "AI-powered financial management platform with automated bookkeeping, expense tracking, and intelligent financial insights.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      price: "$199/month",
      originalPrice: "$279/month",
      features: [
        "Automated Bookkeeping",
        "Expense Tracking",
        "Financial Insights",
        "Tax Preparation",
        "Budget Planning",
        "Invoice Management",
        "Bank Integration",
        "Reporting Suite"
      ],
      benefits: [
        "80% time savings on bookkeeping",
        "Real-time financial insights",
        "Automated tax preparation",
        "Better cash flow management"
      ],
      category: "Finance",
      popularity: "New",
      link: "/zion-finance-tracker"
    },
    {
      id: "zion-social-manager",
      name: "Zion Social Manager",
      description: "AI-powered social media management platform with automated posting, content optimization, and comprehensive analytics across all platforms.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "$159/month",
      originalPrice: "$219/month",
      features: [
        "Multi-platform Management",
        "AI Content Optimization",
        "Automated Posting",
        "Engagement Analytics",
        "Hashtag Research",
        "Competitor Analysis",
        "Content Calendar",
        "Team Collaboration"
      ],
      benefits: [
        "5x more engagement",
        "60% time savings",
                "Better content performance",
        "Automated optimization"
      ],
      category: "Social Media",
      popularity: "Trending",
      link: "/zion-social-manager"
    },
    {
      id: "zion-customer-insights",
      name: "Zion Customer Insights",
      description: "AI-powered customer analytics platform with sentiment analysis, behavior tracking, and predictive customer insights for better retention.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "$179/month",
      originalPrice: "$249/month",
      features: [
        "Sentiment Analysis",
        "Behavior Tracking",
        "Predictive Insights",
        "Churn Prediction",
        "Customer Segmentation",
        "Feedback Analysis",
        "Retention Strategies",
        "Real-time Alerts"
      ],
      benefits: [
        "25% reduction in churn",
        "40% better customer satisfaction",
        "Predictive insights",
        "Automated recommendations"
      ],
      category: "Customer Analytics",
      popularity: "Hot",
      link: "/zion-customer-insights"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Content", "Integration", "Marketing", "Project Management", "Email Marketing", "CRM", "Finance", "Social Media", "Customer Analytics"];

  const stats = [
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> },
    { number: "30+", label: "Integrations", icon: <Settings className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, content creation, project management, and more. Transform your business with AI-powered tools."
        />
        <meta
          name="keywords"
          content="micro SAAS, business tools, AI solutions, analytics, security, content creation, project management, CRM, email marketing, finance tracking, social media management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, ready-to-use software solutions that transform your business operations. 
              From AI-powered analytics to automated marketing, we have the tools you need to succeed.
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to accelerate your business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  {/* Popularity Badge */}
                  {service.popularity && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.popularity === 'Most Popular' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        service.popularity === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        service.popularity === 'Best Value' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        service.popularity === 'Trending' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
                        service.popularity === 'New' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        service.popularity === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        service.popularity === 'Recommended' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        service.popularity === 'Popular' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {service.popularity}
                      </span>
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
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        {service.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-purple-400 font-medium">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full border border-gray-500/30">
                        {service.category}
                      </span>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */}
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
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-purple-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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