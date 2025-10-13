import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Server, 
  Lock, 
  Settings, 
  Network, 
  Monitor, 
  CheckCircle, 
  Star,
  Sparkles,
  Mail,
  Award,
  Clock,
  DollarSign,
  Users,
  Zap,
  BarChart3,
  Headphones,
  Cpu,
  HardDrive,
  Wifi,
  Layers,
  Activity,
  FileText,
  Workflow,
  Target,
  TrendingUp,
  Building,
  Smartphone as Mobile,
  Laptop,
  Router,
  Database as DB,
  Server as ServerIcon,
  Globe as Web,
  Shield as Security,
  Cloud as CloudIcon,
  Code as Dev,
  Settings as Config,
  Network as Net,
  Monitor as Screen,
  Lock as Secure,
  CheckCircle as Check,
  Star as StarIcon,
  Sparkles as Magic,
  Mail as Email,
  Award as Trophy,
  Clock as Time,
  DollarSign as Money,
  Users as People,
  Zap as Lightning,
  BarChart3 as Analytics,
  Headphones as Support,
  Cpu as Processor,
  HardDrive as Storage,
  Wifi as Wireless,
  Layers as Stack,
  Activity as Pulse,
  FileText as Document,
  Workflow as Process,
  Target as Goal,
  TrendingUp as Growth,
  Building as Enterprise
} from "lucide-react";
import FuturisticButton from "../components/FuturisticButton";
import FuturisticCard from "../components/FuturisticCard";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const ITServicesPage = () => {
  const itServices = [
    {
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and multi-cloud support for enterprise-grade reliability.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$249",
      period: "month",
      features: [
        "Multi-cloud Management",
        "Auto-scaling & Load Balancing",
        "Disaster Recovery",
        "Cost Optimization",
        "Security Hardening",
        "24/7 Monitoring"
      ],
      color: "from-blue-500 to-cyan-500",
      glowColor: "cyan",
      link: "/cloud-infrastructure",
      popular: true,
      category: "Cloud Services",
      marketPrice: "$799/month",
      savings: "69%",
      capabilities: [
        "99.99% uptime guarantee",
        "Support for AWS, Azure, GCP",
        "Automated backup every 6 hours",
        "Real-time cost monitoring"
      ]
    },
    {
      name: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, penetration testing, and compliance management.",
      icon: <Shield className="w-8 h-8" />,
      price: "$399",
      period: "month",
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Compliance Management",
        "Security Training",
        "Incident Response"
      ],
      color: "from-red-500 to-orange-500",
      glowColor: "red",
      link: "/cybersecurity-solutions",
      popular: false,
      category: "Security",
      marketPrice: "$1299/month",
      savings: "69%",
      capabilities: [
        "Detect 99.9% of known threats",
        "24/7 security monitoring",
        "Compliance with 20+ standards",
        "Response time under 15 minutes"
      ]
    },
    {
      name: "Web Development Services",
      description: "Custom web applications and websites built with modern technologies, responsive design, and optimal performance.",
      icon: <Code className="w-8 h-8" />,
      price: "$199",
      period: "month",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "Performance Optimization",
        "SEO Implementation",
        "Content Management",
        "Maintenance & Support"
      ],
      color: "from-green-500 to-emerald-500",
      glowColor: "green",
      link: "/web-development",
      popular: false,
      category: "Development",
      marketPrice: "$599/month",
      savings: "67%",
      capabilities: [
        "Support for 10+ frameworks",
        "Mobile-first responsive design",
        "Page load speed under 2 seconds",
        "SEO score 90+ guaranteed"
      ]
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX and optimal performance.",
      icon: <Smartphone className="w-8 h-8" />,
      price: "$299",
      period: "month",
      features: [
        "iOS & Android Development",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Analytics Integration"
      ],
      color: "from-purple-500 to-pink-500",
      glowColor: "purple",
      link: "/mobile-development",
      popular: false,
      category: "Development",
      marketPrice: "$899/month",
      savings: "67%",
      capabilities: [
        "Support for iOS 14+ and Android 8+",
        "Cross-platform compatibility",
        "App store approval guaranteed",
        "Performance optimization included"
      ]
    },
    {
      name: "Database Management",
      description: "Comprehensive database services including design, optimization, backup, recovery, and performance tuning.",
      icon: <Database className="w-8 h-8" />,
      price: "$179",
      period: "month",
      features: [
        "Database Design & Architecture",
        "Performance Optimization",
        "Backup & Recovery",
        "Data Migration",
        "Security Hardening",
        "Monitoring & Maintenance"
      ],
      color: "from-indigo-500 to-purple-500",
      glowColor: "indigo",
      link: "/database-management",
      popular: false,
      category: "Database",
      marketPrice: "$499/month",
      savings: "64%",
      capabilities: [
        "Support for 15+ database systems",
        "99.9% data availability",
        "Automated backup every 4 hours",
        "Query optimization included"
      ]
    },
    {
      name: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs with modern architecture and scalable design.",
      icon: <Settings className="w-8 h-8" />,
      price: "$349",
      period: "month",
      features: [
        "Custom Software Solutions",
        "API Development",
        "Integration Services",
        "Testing & Quality Assurance",
        "Documentation",
        "Training & Support"
      ],
      color: "from-teal-500 to-cyan-500",
      glowColor: "teal",
      link: "/custom-software",
      popular: false,
      category: "Development",
      marketPrice: "$999/month",
      savings: "65%",
      capabilities: [
        "Support for 20+ programming languages",
        "Agile development methodology",
        "Code quality 95%+ coverage",
        "Scalable architecture design"
      ]
    },
    {
      name: "Network Infrastructure",
      description: "Complete network design, implementation, and management services for secure and efficient connectivity.",
      icon: <Network className="w-8 h-8" />,
      price: "$229",
      period: "month",
      features: [
        "Network Design & Planning",
        "Router & Switch Configuration",
        "Wireless Network Setup",
        "Security Implementation",
        "Performance Monitoring",
        "Troubleshooting & Support"
      ],
      color: "from-yellow-500 to-orange-500",
      glowColor: "yellow",
      link: "/network-infrastructure",
      popular: false,
      category: "Infrastructure",
      marketPrice: "$699/month",
      savings: "67%",
      capabilities: [
        "Support for enterprise-grade equipment",
        "99.9% network uptime",
        "Real-time performance monitoring",
        "24/7 network support"
      ]
    },
    {
      name: "IT Support & Helpdesk",
      description: "Comprehensive IT support services with remote assistance, on-site support, and proactive monitoring.",
      icon: <Headphones className="w-8 h-8" />,
      price: "$99",
      period: "month",
      features: [
        "24/7 Remote Support",
        "On-site Support",
        "Proactive Monitoring",
        "Software Installation",
        "Hardware Troubleshooting",
        "User Training"
      ],
      color: "from-pink-500 to-rose-500",
      glowColor: "pink",
      link: "/it-support",
      popular: false,
      category: "Support",
      marketPrice: "$299/month",
      savings: "67%",
      capabilities: [
        "Response time under 2 hours",
        "Support for 100+ software titles",
        "Remote access capabilities",
        "Knowledge base with 1000+ articles"
      ]
    },
    {
      name: "Data Analytics & BI",
      description: "Business intelligence solutions with data visualization, reporting, and analytics to drive informed decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$199",
      period: "month",
      features: [
        "Data Visualization",
        "Custom Dashboards",
        "Report Generation",
        "Data Integration",
        "Predictive Analytics",
        "Training & Support"
      ],
      color: "from-emerald-500 to-green-500",
      glowColor: "emerald",
      link: "/data-analytics",
      popular: false,
      category: "Analytics",
      marketPrice: "$599/month",
      savings: "67%",
      capabilities: [
        "Support for 50+ data sources",
        "Real-time data processing",
        "Interactive dashboards",
        "Automated report generation"
      ]
    },
    {
      name: "DevOps & CI/CD",
      description: "DevOps services including continuous integration, deployment automation, and infrastructure as code.",
      icon: <Workflow className="w-8 h-8" />,
      price: "$279",
      period: "month",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security Scanning",
        "Performance Optimization"
      ],
      color: "from-violet-500 to-purple-500",
      glowColor: "violet",
      link: "/devops-solutions",
      popular: false,
      category: "DevOps",
      marketPrice: "$799/month",
      savings: "65%",
      capabilities: [
        "Support for 10+ CI/CD tools",
        "Automated deployment pipeline",
        "Infrastructure monitoring",
        "Security compliance included"
      ]
    },
    {
      name: "IT Consulting",
      description: "Strategic IT consulting services to help align technology with business goals and optimize IT investments.",
      icon: <Target className="w-8 h-8" />,
      price: "$149",
      period: "month",
      features: [
        "IT Strategy Planning",
        "Technology Assessment",
        "Vendor Management",
        "Cost Optimization",
        "Digital Transformation",
        "Change Management"
      ],
      color: "from-amber-500 to-yellow-500",
      glowColor: "amber",
      link: "/it-consulting",
      popular: false,
      category: "Consulting",
      marketPrice: "$399/month",
      savings: "63%",
      capabilities: [
        "20+ years industry experience",
        "Certified consultants",
        "Strategic roadmap development",
        "ROI analysis included"
      ]
    },
    {
      name: "Managed IT Services",
      description: "Complete IT management services including monitoring, maintenance, updates, and strategic planning.",
      icon: <Monitor className="w-8 h-8" />,
      price: "$399",
      period: "month",
      features: [
        "Proactive Monitoring",
        "Preventive Maintenance",
        "Software Updates",
        "Security Management",
        "Backup & Recovery",
        "Strategic Planning"
      ],
      color: "from-rose-500 to-pink-500",
      glowColor: "rose",
      link: "/managed-it",
      popular: false,
      category: "Managed Services",
      marketPrice: "$1199/month",
      savings: "67%",
      capabilities: [
        "99.9% system uptime",
        "24/7 monitoring and support",
        "Predictive maintenance",
        "Comprehensive reporting"
      ]
    }
  ];

  const categories = [
    { name: "All", count: itServices.length },
    { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length },
    { name: "Database", count: itServices.filter(s => s.category === "Database").length },
    { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length },
    { name: "Support", count: itServices.filter(s => s.category === "Support").length },
    { name: "Analytics", count: itServices.filter(s => s.category === "Analytics").length },
    { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length },
    { name: "Managed Services", count: itServices.filter(s => s.category === "Managed Services").length }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Trophy className="w-6 h-6" /> },
    { number: "10,000+", label: "Happy Clients", icon: <People className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Support className="w-6 h-6" /> }
  ];

  const capabilities = [
    {
      title: "Enterprise-Grade Solutions",
      description: "Our IT services are designed for enterprise-scale operations with robust security, high availability, and scalable architecture.",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "24/7 Monitoring & Support",
      description: "Round-the-clock monitoring and support to ensure your systems run smoothly with proactive issue detection and resolution.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and best practices to deliver modern, efficient, and future-proof IT solutions.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Certified Experts",
      description: "Our team consists of certified professionals with extensive experience in various IT domains and technologies.",
      icon: <Award className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and more. Enterprise-grade solutions starting from $99/month."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, custom software, network infrastructure, IT support, data analytics, DevOps, IT consulting, managed IT services"
        />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">12+ IT Service Categories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
                IT Services
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services designed to support your business growth and digital transformation. 
              From cloud infrastructure to cybersecurity, we provide enterprise-grade technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-green-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* IT Capabilities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Why Choose Our IT Services?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT services are built on industry best practices and designed to deliver exceptional results for your business.
              </p>
            </div>
            
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }}>
              {capabilities.map((capability, index) => (
                <FuturisticCard
                  key={index}
                  className="text-center group"
                  glowColor="green"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{capability.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/30 transition-all duration-300 text-sm font-medium"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Our IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT services. All plans include 24/7 support, regular updates, and 30-day money-back guarantee.
              </p>
            </div>
            
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }}>
              {itServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className={`group cursor-pointer relative ${service.popular ? 'ring-2 ring-green-400' : ''}`}
                  glowColor={service.glowColor}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <Link
                    to={service.link}
                    className="block p-6"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <div className="text-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-3xl font-bold text-white">${service.price}</span>
                        <span className="text-gray-400 ml-1">/{service.period}</span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <span className="text-sm text-gray-400 line-through">${service.marketPrice}</span>
                        <span className="text-sm text-green-400 font-semibold">Save {service.savings}</span>
                      </div>
                      
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                        {service.category}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-center mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Key Capabilities:</h4>
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-400">
                          <Lightning className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our IT services to optimize operations, 
                enhance security, and drive digital transformation. Start your IT journey today.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-green-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-green-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  Start IT Journey
                </FuturisticButton>
                <FuturisticButton
                  href="/pricing"
                  variant="outline"
                  size="lg"
                  icon={<DollarSign className="w-5 h-5" />}
                >
                  View All Pricing
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;