import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cloud, Code, Database, Wifi, Smartphone, Monitor, Settings, Lock, Eye, Send, Download, Upload, RefreshCw, AlertTriangle, CheckCircle, Clock, DollarSign, Star, TrendingUp, Target, FileText, Users, Mail, Globe, Brain, BarChart3, Bot, Zap, Activity, PieChart, LineChart, BarChart, Calendar, Phone, Globe as GlobeIcon, Shield as ShieldIcon, Zap as ZapIcon, Database as DatabaseIcon, Code as CodeIcon, Users as UsersIcon, Mail as MailIcon, Smartphone as SmartphoneIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ITServicesPage() {
  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and multi-cloud support for enterprise-grade reliability.",
      icon: <Cloud className="w-8 h-8" />,
      price: "Starting at $2,999/month",
      features: [
        "Multi-cloud Architecture",
        "Automated Scaling",
        "Disaster Recovery",
        "Cost Optimization",
        "Security Hardening",
        "24/7 Monitoring",
        "Performance Optimization",
        "Compliance Management",
        "Backup & Recovery",
        "Migration Services"
      ],
      color: "from-blue-500 to-cyan-500",
      category: "Cloud Services",
      popular: true,
      link: "/cloud-infrastructure"
    },
    {
      id: "cybersecurity-solutions",
      name: "Advanced Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, vulnerability assessment, penetration testing, and compliance management.",
      icon: <Shield className="w-8 h-8" />,
      price: "Starting at $1,499/month",
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits",
        "Compliance Management",
        "Incident Response",
        "Security Training",
        "Firewall Management",
        "Intrusion Detection",
        "24/7 Security Monitoring"
      ],
      color: "from-red-500 to-orange-500",
      category: "Security",
      popular: true,
      link: "/cybersecurity-solutions"
    },
    {
      id: "web-development",
      name: "Full-Stack Web Development",
      description: "Custom web applications built with modern technologies, responsive design, and optimized performance for all devices and browsers.",
      icon: <Code className="w-8 h-8" />,
      price: "Starting at $4,999/project",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "Performance Optimization",
        "SEO Optimization",
        "E-commerce Solutions",
        "CMS Development",
        "API Integration",
        "Mobile Optimization",
        "Cross-browser Compatibility",
        "Maintenance & Support"
      ],
      color: "from-green-500 to-emerald-500",
      category: "Development",
      popular: false,
      link: "/web-development"
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design and seamless performance.",
      icon: <Smartphone className="w-8 h-8" />,
      price: "Starting at $7,999/project",
      features: [
        "iOS & Android Apps",
        "Cross-platform Development",
        "Native Performance",
        "Modern UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "API Integration",
        "Testing & QA",
        "App Store Publishing"
      ],
      color: "from-purple-500 to-pink-500",
      category: "Development",
      popular: false,
      link: "/mobile-development"
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      description: "Comprehensive database services including design, optimization, migration, backup, and performance tuning for all major database systems.",
      icon: <Database className="w-8 h-8" />,
      price: "Starting at $1,299/month",
      features: [
        "Database Design & Architecture",
        "Performance Optimization",
        "Data Migration",
        "Backup & Recovery",
        "Security Hardening",
        "Monitoring & Maintenance",
        "Query Optimization",
        "Scalability Planning",
        "Disaster Recovery",
        "24/7 Support"
      ],
      color: "from-indigo-500 to-blue-500",
      category: "Database",
      popular: false,
      link: "/database-management"
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure & Security",
      description: "Complete network design, implementation, and management services including LAN, WAN, wireless, and security solutions.",
      icon: <Wifi className="w-8 h-8" />,
      price: "Starting at $2,499/month",
      features: [
        "Network Design & Planning",
        "LAN/WAN Implementation",
        "Wireless Solutions",
        "Network Security",
        "VPN Configuration",
        "Load Balancing",
        "Network Monitoring",
        "Troubleshooting",
        "Performance Optimization",
        "Maintenance & Support"
      ],
      color: "from-teal-500 to-cyan-500",
      category: "Networking",
      popular: false,
      link: "/network-infrastructure"
    },
    {
      id: "data-analytics",
      name: "Data Analytics & Business Intelligence",
      description: "Advanced data analytics solutions with real-time dashboards, reporting, and business intelligence tools for data-driven decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "Starting at $1,799/month",
      features: [
        "Data Warehousing",
        "Real-time Dashboards",
        "Business Intelligence",
        "Data Visualization",
        "Predictive Analytics",
        "Report Generation",
        "Data Integration",
        "ETL Processes",
        "Custom Analytics",
        "Training & Support"
      ],
      color: "from-yellow-500 to-orange-500",
      category: "Analytics",
      popular: false,
      link: "/data-analytics"
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs, from concept to deployment and ongoing support.",
      icon: <Settings className="w-8 h-8" />,
      price: "Starting at $9,999/project",
      features: [
        "Custom Software Design",
        "Agile Development",
        "Quality Assurance",
        "User Experience Design",
        "API Development",
        "Integration Services",
        "Documentation",
        "Training & Support",
        "Maintenance & Updates",
        "Scalability Planning"
      ],
      color: "from-pink-500 to-rose-500",
      category: "Development",
      popular: false,
      link: "/custom-software"
    },
    {
      id: "it-consulting",
      name: "IT Strategy & Consulting",
      description: "Strategic IT consulting services to help align technology with business goals, digital transformation, and technology roadmap planning.",
      icon: <Brain className="w-8 h-8" />,
      price: "Starting at $299/hour",
      features: [
        "IT Strategy Planning",
        "Digital Transformation",
        "Technology Assessment",
        "Vendor Selection",
        "Cost Optimization",
        "Risk Assessment",
        "Compliance Planning",
        "Technology Roadmap",
        "Change Management",
        "Executive Advisory"
      ],
      color: "from-violet-500 to-purple-500",
      category: "Consulting",
      popular: false,
      link: "/it-consulting"
    },
    {
      id: "managed-it-services",
      name: "Managed IT Services",
      description: "Comprehensive managed IT services including help desk, monitoring, maintenance, and proactive support for your entire IT infrastructure.",
      icon: <Monitor className="w-8 h-8" />,
      price: "Starting at $1,999/month",
      features: [
        "24/7 Help Desk",
        "Proactive Monitoring",
        "Remote Management",
        "Patch Management",
        "Security Updates",
        "Backup Management",
        "Performance Monitoring",
        "Incident Response",
        "Asset Management",
        "Monthly Reporting"
      ],
      color: "from-emerald-500 to-green-500",
      category: "Managed Services",
      popular: true,
      link: "/managed-it-services"
    },
    {
      id: "devops-automation",
      name: "DevOps & Automation",
      description: "Complete DevOps solutions including CI/CD pipelines, infrastructure as code, monitoring, and automation for faster, more reliable deployments.",
      icon: <Zap className="w-8 h-8" />,
      price: "Starting at $2,299/month",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Automated Testing",
        "Deployment Automation",
        "Monitoring & Alerting",
        "Configuration Management",
        "Security Scanning",
        "Performance Optimization",
        "Team Training"
      ],
      color: "from-amber-500 to-yellow-500",
      category: "DevOps",
      popular: false,
      link: "/devops-automation"
    },
    {
      id: "data-backup-recovery",
      name: "Data Backup & Recovery",
      description: "Comprehensive data protection services including automated backups, disaster recovery planning, and business continuity solutions.",
      icon: <RefreshCw className="w-8 h-8" />,
      price: "Starting at $799/month",
      features: [
        "Automated Backups",
        "Disaster Recovery Planning",
        "Business Continuity",
        "Data Encryption",
        "Offsite Storage",
        "Recovery Testing",
        "Compliance Management",
        "RTO/RPO Planning",
        "Emergency Response",
        "24/7 Support"
      ],
      color: "from-cyan-500 to-blue-500",
      category: "Data Protection",
      popular: false,
      link: "/data-backup-recovery"
    }
  ];

  const categories = [
    { name: "All", count: itServices.length },
    { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length },
    { name: "Database", count: itServices.filter(s => s.category === "Database").length },
    { name: "Networking", count: itServices.filter(s => s.category === "Networking").length },
    { name: "Analytics", count: itServices.filter(s => s.category === "Analytics").length },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length },
    { name: "Managed Services", count: itServices.filter(s => s.category === "Managed Services").length },
    { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length },
    { name: "Data Protection", count: itServices.filter(s => s.category === "Data Protection").length }
  ];

  const stats = [
    { number: "15+", label: "IT Services", icon: <Settings className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> },
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, networking, and managed IT services. Transform your business with our technology expertise."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, networking, managed IT services, DevOps, data analytics, IT consulting"
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
              <span className="text-cyan-400 text-sm font-medium">Comprehensive IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From cloud infrastructure to cybersecurity, we provide end-to-end IT services.
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
                  Our IT Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
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
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
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
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our IT solutions to drive growth and innovation. 
                Contact us today for a personalized consultation and technology assessment.
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
                  Start Your IT Journey
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