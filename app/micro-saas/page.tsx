import React from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Database, 
  Code, 
  Mail, 
  Calendar, 
  FileText, 
  Users, 
  Settings,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Lock,
  TrendingUp,
  Target,
  Award,
  Sparkles
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      tagline: "AI-Powered Business Intelligence Platform",
      description: "Transform your data into actionable insights with our advanced analytics platform. Real-time dashboards, predictive analytics, and automated reporting.",
      price: "From $29/month",
      features: [
        "Real-time data visualization",
        "Predictive analytics & forecasting",
        "Custom dashboard builder",
        "Automated report generation",
        "Multi-source data integration",
        "Advanced AI insights",
        "Mobile & desktop access",
        "24/7 customer support"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      tagline: "Advanced Cybersecurity Protection Suite",
      description: "Comprehensive security solution protecting your business from cyber threats. Real-time monitoring, threat detection, and automated response.",
      price: "From $49/month",
      features: [
        "Real-time threat monitoring",
        "Automated threat response",
        "Vulnerability scanning",
        "Security compliance reporting",
        "Multi-layer protection",
        "24/7 security monitoring",
        "Incident response automation",
        "Security training modules"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      category: "Security",
      popular: true,
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      tagline: "Secure Cloud Storage & Backup Solution",
      description: "Enterprise-grade cloud storage with advanced encryption, automated backups, and seamless file synchronization across all devices.",
      price: "From $9/month",
      features: [
        "End-to-end encryption",
        "Automated backup scheduling",
        "File versioning & recovery",
        "Cross-platform synchronization",
        "Team collaboration tools",
        "Advanced access controls",
        "99.9% uptime guarantee",
        "Unlimited bandwidth"
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      category: "Storage",
      popular: true,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      tagline: "AI-Powered Content Creation Platform",
      description: "Create engaging content at scale with AI assistance. Blog posts, social media content, marketing materials, and more.",
      price: "From $19/month",
      features: [
        "AI content generation",
        "Multi-format support",
        "Brand voice customization",
        "SEO optimization tools",
        "Content calendar management",
        "Team collaboration features",
        "Performance analytics",
        "Template library"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      category: "Content",
      popular: false,
      link: "/zion-content-studio"
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      tagline: "Universal Data Integration Platform",
      description: "Connect and synchronize data across all your business applications. Real-time data flow with advanced transformation capabilities.",
      price: "From $39/month",
      features: [
        "500+ app integrations",
        "Real-time data synchronization",
        "Data transformation tools",
        "Error handling & retry logic",
        "Custom API connectors",
        "Data quality monitoring",
        "Automated data mapping",
        "Enterprise security"
      ],
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      category: "Integration",
      popular: false,
      link: "/zion-data-sync"
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      tagline: "Advanced Lead Generation & Management",
      description: "Capture, nurture, and convert leads with our comprehensive lead management platform. Automated workflows and AI-powered scoring.",
      price: "From $24/month",
      features: [
        "Lead capture forms",
        "Automated email sequences",
        "Lead scoring & qualification",
        "CRM integration",
        "A/B testing tools",
        "Conversion tracking",
        "Lead nurturing workflows",
        "Performance analytics"
      ],
      icon: <Target className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      category: "Marketing",
      popular: false,
      link: "/zion-lead-magnet"
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      tagline: "Comprehensive Project Management Suite",
      description: "Streamline project workflows with advanced project management tools. Task tracking, team collaboration, and resource management.",
      price: "From $34/month",
      features: [
        "Advanced task management",
        "Team collaboration tools",
        "Resource planning",
        "Time tracking & reporting",
        "Gantt charts & timelines",
        "Budget management",
        "Risk assessment tools",
        "Client portal access"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      category: "Productivity",
      popular: false,
      link: "/zion-project-master"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      tagline: "Intelligent Email Marketing Platform",
      description: "Create, send, and optimize email campaigns with AI-powered automation. Advanced segmentation and personalization features.",
      price: "From $14/month",
      features: [
        "Drag-and-drop email builder",
        "AI-powered personalization",
        "Advanced segmentation",
        "Automated workflows",
        "A/B testing capabilities",
        "Deliverability optimization",
        "Performance analytics",
        "Compliance management"
      ],
      icon: <Mail className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      category: "Marketing",
      popular: false,
      link: "/zion-email-automation"
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      tagline: "Multi-Platform Social Media Management",
      description: "Schedule, publish, and analyze social media content across all major platforms. AI-powered content suggestions and optimal timing.",
      price: "From $29/month",
      features: [
        "Multi-platform posting",
        "AI content suggestions",
        "Optimal timing analysis",
        "Hashtag research tools",
        "Engagement tracking",
        "Content calendar",
        "Team collaboration",
        "Performance insights"
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      category: "Social Media",
      popular: false,
      link: "/zion-social-scheduler"
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      tagline: "No-Code Business Process Automation",
      description: "Automate repetitive business processes without coding. Visual workflow builder with 1000+ pre-built integrations.",
      price: "From $44/month",
      features: [
        "Visual workflow builder",
        "1000+ app integrations",
        "Conditional logic & triggers",
        "Custom automation rules",
        "Error handling & monitoring",
        "Team collaboration tools",
        "Analytics & reporting",
        "Enterprise security"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      category: "Automation",
      popular: false,
      link: "/zion-workflow-automation"
    },
    {
      id: "zion-invoice-genius",
      name: "Zion Invoice Genius",
      tagline: "Smart Invoicing & Payment Management",
      description: "Create professional invoices, track payments, and manage your finances with AI-powered insights and automation.",
      price: "From $19/month",
      features: [
        "Professional invoice templates",
        "Automated payment reminders",
        "Multi-currency support",
        "Payment tracking & analytics",
        "Tax calculation tools",
        "Client portal access",
        "Recurring billing",
        "Financial reporting"
      ],
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      category: "Finance",
      popular: false,
      link: "/zion-invoice-genius"
    },
    {
      id: "zion-inventory-smart",
      name: "Zion Inventory Smart",
      tagline: "Intelligent Inventory Management System",
      description: "Optimize inventory levels with AI-powered demand forecasting, automated reordering, and real-time tracking.",
      price: "From $39/month",
      features: [
        "Real-time inventory tracking",
        "AI demand forecasting",
        "Automated reorder points",
        "Multi-location management",
        "Barcode scanning support",
        "Supplier management",
        "Cost optimization",
        "Reporting & analytics"
      ],
      icon: <Package className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      category: "Inventory",
      popular: false,
      link: "/zion-inventory-smart"
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
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length },
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Inventory", count: microSaasServices.filter(s => s.category === "Inventory").length }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations. Analytics, security, automation, and more starting from $9/month."
        keywords="micro saas, business software, analytics, security, automation, productivity tools, cloud solutions, business intelligence"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Micro SAAS
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}
              Solutions
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
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
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
      <section className="py-8 px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      <span className="text-xs text-yellow-400 font-medium">Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.tagline}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-xs text-gray-400">per month</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Choose from our comprehensive collection of micro SAAS solutions or let us create a custom solution for your specific needs. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;