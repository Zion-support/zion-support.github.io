import { ArrowRight, BarChart3, Shield, Cloud, Zap, Brain, Users, Target, FileText, Mail, Smartphone, Globe, Star, CheckCircle, TrendingUp, Lock, Clock, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$29",
      period: "/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics & Forecasting",
        "Custom Report Builder",
        "API Integration",
        "Multi-source Data Connectors",
        "Mobile App Access",
        "Email Alerts & Notifications",
        "White-label Options"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: true,
      link: "/zion-analytics-pro",
      category: "Analytics"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with real-time threat detection, automated incident response, and compliance monitoring for small to medium businesses.",
      icon: <Shield className="w-8 h-8" />,
      price: "$49",
      period: "/month",
      features: [
        "Real-time Threat Detection",
        "Automated Incident Response",
        "Compliance Monitoring (GDPR, HIPAA)",
        "Vulnerability Scanning",
        "Security Awareness Training",
        "24/7 Security Monitoring",
        "Incident Response Playbooks",
        "Security Reports & Analytics"
      ],
      color: "from-red-500 to-orange-500",
      popular: false,
      link: "/zion-security-shield",
      category: "Security"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, file sharing, collaboration tools, and automated backup for businesses of all sizes.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$9",
      period: "/month",
      features: [
        "1TB Secure Cloud Storage",
        "End-to-End Encryption",
        "File Sharing & Collaboration",
        "Automated Backup",
        "Version Control",
        "Mobile & Desktop Sync",
        "Team Management",
        "Advanced Security Controls"
      ],
      color: "from-purple-500 to-pink-500",
      popular: false,
      link: "/zion-cloud-vault",
      category: "Storage"
    },
    {
      name: "Zion AI Assistant",
      description: "Intelligent virtual assistant for customer support, lead qualification, and business automation. Powered by advanced natural language processing.",
      icon: <Brain className="w-8 h-8" />,
      price: "$39",
      period: "/month",
      features: [
        "Multi-language Support",
        "Custom Knowledge Base",
        "CRM Integration",
        "Live Chat Handoff",
        "Sentiment Analysis",
        "Automated Lead Qualification",
        "Performance Analytics",
        "Custom Training"
      ],
      color: "from-green-500 to-emerald-500",
      popular: true,
      link: "/zion-ai-assistant",
      category: "AI"
    },
    {
      name: "Zion Project Manager",
      description: "AI-powered project management tool with intelligent task assignment, resource optimization, and automated progress tracking for teams.",
      icon: <Target className="w-8 h-8" />,
      price: "$19",
      period: "/month",
      features: [
        "AI Task Assignment",
        "Resource Optimization",
        "Progress Tracking",
        "Team Collaboration",
        "Time Tracking",
        "Budget Management",
        "Risk Assessment",
        "Performance Reports"
      ],
      color: "from-indigo-500 to-purple-500",
      popular: false,
      link: "/zion-project-manager",
      category: "Productivity"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, marketing materials, and documentation with brand voice consistency.",
      icon: <FileText className="w-8 h-8" />,
      price: "$24",
      period: "/month",
      features: [
        "AI Content Generation",
        "Brand Voice Training",
        "SEO Optimization",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Team Collaboration",
        "Performance Analytics"
      ],
      color: "from-pink-500 to-rose-500",
      popular: false,
      link: "/zion-content-studio",
      category: "Content"
    },
    {
      name: "Zion CRM Pro",
      description: "Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and sales forecasting.",
      icon: <Users className="w-8 h-8" />,
      price: "$34",
      period: "/month",
      features: [
        "AI Lead Scoring",
        "Automated Follow-ups",
        "Sales Forecasting",
        "Pipeline Management",
        "Email Integration",
        "Custom Fields & Workflows",
        "Team Collaboration",
        "Advanced Reporting"
      ],
      color: "from-teal-500 to-cyan-500",
      popular: true,
      link: "/zion-crm-pro",
      category: "CRM"
    },
    {
      name: "Zion Marketing Hub",
      description: "Comprehensive marketing automation platform with AI-driven personalization, email campaigns, and social media management.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "$44",
      period: "/month",
      features: [
        "Email Marketing Automation",
        "Social Media Management",
        "Lead Nurturing Campaigns",
        "A/B Testing",
        "Customer Segmentation",
        "Performance Analytics",
        "Landing Page Builder",
        "Integration Hub"
      ],
      color: "from-yellow-500 to-orange-500",
      popular: false,
      link: "/zion-marketing-hub",
      category: "Marketing"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "AI", "Productivity", "Content", "CRM", "Marketing"];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Comprehensive micro SAAS solutions including analytics, security, cloud storage, AI assistants, project management, content creation, CRM, and marketing automation. Start from $9/month."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business analytics, cybersecurity, cloud storage, AI assistant, project management, content creation, CRM, marketing automation, business software"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

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
              From AI-powered analytics to advanced security, deploy enterprise-grade tools in minutes.
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Featured Products */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Deploy powerful business tools in minutes. No complex setup, no lengthy implementations. 
                Just choose your solution and start growing your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${product.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {product.icon}
                      </div>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-gray-400 ml-1">{product.period}</span>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 4 && (
                        <div className="text-sm text-cyan-400">
                          +{product.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Link
                        to={product.link}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Get Started
                      </Link>
                      <Link
                        to={`${product.link}#demo`}
                        className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center text-sm"
                      >
                        View Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Start your free trial today - no credit card required.
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
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Schedule Demo
                  <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
