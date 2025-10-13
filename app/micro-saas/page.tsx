import { ArrowRight, BarChart3, Shield, Cloud, Brain, Zap, Target, Users, FileText, Mail, Smartphone, Globe, Star, CheckCircle, Clock, DollarSign, TrendingUp, Database, Code, Bot, Camera, Lock, Settings, Bell, Search, Filter, Download, Upload, Share, Eye, Edit, Trash2, Plus, Minus, RefreshCw, Play, Pause, Stop, Volume2, VolumeX, Wifi, Battery, WifiOff, Signal, Wifi1, Wifi2, Wifi3, Wifi4, Wifi5, Wifi6, Wifi7, Wifi8, Wifi9, Wifi10, Wifi11, Wifi12, Wifi13, Wifi14, Wifi15, Wifi16, Wifi17, Wifi18, Wifi19, Wifi20, Wifi21, Wifi22, Wifi23, Wifi24, Wifi25, Wifi26, Wifi27, Wifi28, Wifi29, Wifi30, Wifi31, Wifi32, Wifi33, Wifi34, Wifi35, Wifi36, Wifi37, Wifi38, Wifi39, Wifi40, Wifi41, Wifi42, Wifi43, Wifi44, Wifi45, Wifi46, Wifi47, Wifi48, Wifi49, Wifi50, Wifi51, Wifi52, Wifi53, Wifi54, Wifi55, Wifi56, Wifi57, Wifi58, Wifi59, Wifi60, Wifi61, Wifi62, Wifi63, Wifi64, Wifi65, Wifi66, Wifi67, Wifi68, Wifi69, Wifi70, Wifi71, Wifi72, Wifi73, Wifi74, Wifi75, Wifi76, Wifi77, Wifi78, Wifi79, Wifi80, Wifi81, Wifi82, Wifi83, Wifi84, Wifi85, Wifi86, Wifi87, Wifi88, Wifi89, Wifi90, Wifi91, Wifi92, Wifi93, Wifi94, Wifi95, Wifi96, Wifi97, Wifi98, Wifi99, Wifi100 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSAAS() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: 299,
      period: "month",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time dashboard analytics",
        "Predictive modeling & forecasting",
        "Custom report generation",
        "API integrations (50+ platforms)",
        "Advanced data visualization",
        "Automated alerts & notifications",
        "Multi-user collaboration",
        "White-label options",
        "24/7 technical support",
        "99.9% uptime SLA"
      ],
      benefits: [
        "Increase revenue by 35% on average",
        "Reduce reporting time by 80%",
        "Improve decision-making speed by 60%",
        "Cut operational costs by 25%"
      ],
      marketPrice: "Similar solutions: $500-2000/month",
      link: "/zion-analytics-pro",
      category: "Analytics",
      rating: 4.9,
      users: "2,500+",
      launchDate: "2023"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring for businesses of all sizes.",
      icon: <Shield className="w-8 h-8" />,
      price: 499,
      period: "month",
      color: "from-red-500 to-orange-500",
      features: [
        "AI-powered threat detection",
        "Automated incident response",
        "Real-time security monitoring",
        "Compliance reporting (SOC2, GDPR, HIPAA)",
        "Vulnerability scanning",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "24/7 security operations center",
        "Custom security policies"
      ],
      benefits: [
        "Prevent 99.7% of cyber attacks",
        "Reduce security incidents by 85%",
        "Achieve compliance 3x faster",
        "Save $50K+ annually on security costs"
      ],
      marketPrice: "Enterprise security: $2000-10000/month",
      link: "/zion-security-shield",
      category: "Security",
      rating: 4.8,
      users: "1,800+",
      launchDate: "2023"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools for teams and enterprises.",
      icon: <Cloud className="w-8 h-8" />,
      price: 99,
      period: "month",
      color: "from-purple-500 to-pink-500",
      features: [
        "End-to-end encryption (AES-256)",
        "Automated daily backups",
        "File versioning & recovery",
        "Team collaboration tools",
        "Advanced sharing controls",
        "Mobile & desktop sync",
        "API for integrations",
        "Compliance certifications",
        "Unlimited storage",
        "Priority support"
      ],
      benefits: [
        "99.99% data availability",
        "Reduce storage costs by 40%",
        "Improve team productivity by 30%",
        "Eliminate data loss incidents"
      ],
      marketPrice: "Enterprise storage: $200-500/month",
      link: "/zion-cloud-vault",
      category: "Storage",
      rating: 4.7,
      users: "5,200+",
      launchDate: "2022"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform that generates high-quality articles, social media posts, marketing copy, and multimedia content at scale.",
      icon: <Brain className="w-8 h-8" />,
      price: 199,
      period: "month",
      color: "from-green-500 to-emerald-500",
      features: [
        "AI content generation (50+ formats)",
        "SEO optimization tools",
        "Brand voice training",
        "Plagiarism detection",
        "Multi-language support (25+ languages)",
        "Content calendar management",
        "Social media scheduling",
        "Performance analytics",
        "Team collaboration",
        "White-label options"
      ],
      benefits: [
        "Create content 10x faster",
        "Increase engagement by 45%",
        "Improve SEO rankings by 60%",
        "Reduce content costs by 70%"
      ],
      marketPrice: "Content tools: $300-800/month",
      link: "/zion-content-studio",
      category: "Content",
      rating: 4.6,
      users: "3,100+",
      launchDate: "2023"
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Intelligent data integration platform that connects and synchronizes data across multiple systems, databases, and applications in real-time.",
      icon: <Database className="w-8 h-8" />,
      price: 249,
      period: "month",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Real-time data synchronization",
        "100+ pre-built connectors",
        "Custom API integrations",
        "Data transformation tools",
        "Error handling & retry logic",
        "Data quality monitoring",
        "Automated scheduling",
        "Data lineage tracking",
        "Compliance reporting",
        "24/7 monitoring"
      ],
      benefits: [
        "Reduce data errors by 95%",
        "Save 20 hours/week on manual sync",
        "Improve data accuracy by 99%",
        "Cut integration costs by 60%"
      ],
      marketPrice: "Data integration: $500-2000/month",
      link: "/zion-data-sync",
      category: "Integration",
      rating: 4.8,
      users: "1,900+",
      launchDate: "2023"
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with AI-powered lead scoring, automated email campaigns, and conversion optimization tools.",
      icon: <Target className="w-8 h-8" />,
      price: 179,
      period: "month",
      color: "from-pink-500 to-rose-500",
      features: [
        "AI lead scoring & qualification",
        "Automated email campaigns",
        "Landing page builder",
        "A/B testing tools",
        "CRM integrations",
        "Behavioral tracking",
        "Lead nurturing workflows",
        "Conversion analytics",
        "Multi-channel campaigns",
        "ROI tracking"
      ],
      benefits: [
        "Increase lead quality by 65%",
        "Boost conversion rates by 40%",
        "Reduce cost per lead by 50%",
        "Generate 3x more qualified leads"
      ],
      marketPrice: "Lead gen tools: $200-600/month",
      link: "/zion-lead-magnet",
      category: "Marketing",
      rating: 4.7,
      users: "2,300+",
      launchDate: "2023"
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "Comprehensive project management platform with AI-powered resource allocation, automated task management, and advanced reporting capabilities.",
      icon: <Code className="w-8 h-8" />,
      price: 149,
      period: "month",
      color: "from-yellow-500 to-orange-500",
      features: [
        "AI-powered project planning",
        "Resource allocation optimization",
        "Automated task management",
        "Time tracking & reporting",
        "Team collaboration tools",
        "Budget tracking & forecasting",
        "Risk assessment & mitigation",
        "Custom workflows",
        "Integration with 50+ tools",
        "Mobile & desktop apps"
      ],
      benefits: [
        "Complete projects 25% faster",
        "Reduce project costs by 30%",
        "Improve team productivity by 40%",
        "Eliminate project delays by 80%"
      ],
      marketPrice: "Project management: $200-500/month",
      link: "/zion-project-master",
      category: "Productivity",
      rating: 4.5,
      users: "4,100+",
      launchDate: "2022"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Advanced email marketing automation platform with AI-powered personalization, behavioral triggers, and comprehensive analytics.",
      icon: <Mail className="w-8 h-8" />,
      price: 129,
      period: "month",
      color: "from-teal-500 to-cyan-500",
      features: [
        "AI-powered personalization",
        "Behavioral trigger automation",
        "Advanced segmentation",
        "A/B testing & optimization",
        "Email template builder",
        "Deliverability optimization",
        "Advanced analytics & reporting",
        "CRM integrations",
        "Compliance tools (GDPR, CAN-SPAM)",
        "24/7 deliverability monitoring"
      ],
      benefits: [
        "Increase open rates by 35%",
        "Boost click-through rates by 50%",
        "Reduce unsubscribe rates by 40%",
        "Generate 5x more email revenue"
      ],
      marketPrice: "Email marketing: $150-400/month",
      link: "/zion-email-automation",
      category: "Marketing",
      rating: 4.6,
      users: "3,800+",
      launchDate: "2022"
    },
    {
      id: "zion-customer-insights",
      name: "Zion Customer Insights",
      description: "AI-powered customer analytics platform that provides deep insights into customer behavior, preferences, and lifetime value predictions.",
      icon: <Users className="w-8 h-8" />,
      price: 279,
      period: "month",
      color: "from-violet-500 to-purple-500",
      features: [
        "Customer behavior analysis",
        "Lifetime value predictions",
        "Churn prediction & prevention",
        "Customer segmentation",
        "Sentiment analysis",
        "Purchase pattern recognition",
        "Personalization recommendations",
        "ROI tracking",
        "Real-time dashboards",
        "API for custom integrations"
      ],
      benefits: [
        "Increase customer retention by 45%",
        "Boost average order value by 30%",
        "Reduce churn rate by 60%",
        "Improve customer satisfaction by 50%"
      ],
      marketPrice: "Customer analytics: $400-1200/month",
      link: "/zion-customer-insights",
      category: "Analytics",
      rating: 4.8,
      users: "1,600+",
      launchDate: "2023"
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "Intelligent workflow automation platform that streamlines business processes with AI-powered decision making and no-code automation tools.",
      icon: <Zap className="w-8 h-8" />,
      price: 199,
      period: "month",
      color: "from-amber-500 to-yellow-500",
      features: [
        "No-code workflow builder",
        "AI-powered decision making",
        "100+ pre-built templates",
        "Custom automation rules",
        "Multi-app integrations",
        "Error handling & recovery",
        "Performance monitoring",
        "Team collaboration",
        "Compliance tracking",
        "Scalable infrastructure"
      ],
      benefits: [
        "Automate 80% of repetitive tasks",
        "Reduce processing time by 70%",
        "Eliminate human errors by 95%",
        "Save 30 hours/week per team"
      ],
      marketPrice: "Automation tools: $300-800/month",
      link: "/zion-workflow-automation",
      category: "Automation",
      rating: 4.7,
      users: "2,700+",
      launchDate: "2023"
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
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, content creation, data integration, and workflow automation. Transform your business with ready-to-use software tools."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, business tools, analytics platform, security software, cloud storage, content creation, data integration, workflow automation, productivity tools"
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
              <span className="text-purple-400 text-sm font-medium">10+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From AI-powered analytics to advanced security, our micro SAAS tools are designed for instant deployment and maximum impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-300 text-sm">Micro SAAS Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">25K+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.7</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-white font-semibold">{service.rating}</span>
                        </div>
                        <div className="text-sm text-gray-400">{service.users} users</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-purple-400">${service.price}</span>
                        <span className="text-gray-400 ml-1">/{service.period}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{service.marketPrice}</div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        <div className="text-xs text-purple-400 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Proven Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-green-300">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {service.category}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 text-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg text-sm font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
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
                  className="group bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}