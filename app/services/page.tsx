import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Shield, Cloud, Code, Database, 
  Server, Network, Lock, Settings, Monitor, Smartphone, Globe, 
  Zap, Users, BarChart3, Headphones, Clock, DollarSign, Award, 
  Rocket, Cpu, HardDrive, Wifi, Bluetooth, Usb, Printer, Scanner, 
  Mail, Phone, MapPin, Building, Briefcase, Target, TrendingUp, 
  Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, 
  WifiOff, Signal, Battery, Camera, Video, Image, Music, BookOpen, 
  Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, 
  Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, 
  LineChart, Sparkles, Package, Receipt, ClipboardList, Workflow
} from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure Solutions",
      description: "Comprehensive cloud migration, management, and optimization services for AWS, Azure, and Google Cloud",
      price: "From $2,000/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Cloud migration & setup",
        "Infrastructure as Code (IaC)",
        "Auto-scaling & load balancing",
        "Disaster recovery planning",
        "Cost optimization",
        "Security compliance",
        "24/7 monitoring",
        "Multi-cloud strategies"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability & flexibility",
        "Enhance security & compliance",
        "Increase uptime to 99.9%"
      ],
      category: "Cloud Services",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-solutions",
      name: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, and compliance management",
      price: "From $3,500/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Security assessment & auditing",
        "Penetration testing",
        "Threat detection & response",
        "Compliance management (SOC2, ISO27001)",
        "Security training & awareness",
        "Incident response planning",
        "Vulnerability management",
        "Security monitoring 24/7"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Ensure regulatory compliance",
        "Reduce security incidents by 95%",
        "Save on security costs"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "web-development",
      name: "Web Development Services",
      description: "Custom web applications, e-commerce platforms, and modern websites built with cutting-edge technologies",
      price: "From $1,500/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Custom web applications",
        "E-commerce platforms",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "Performance optimization",
        "SEO optimization",
        "Mobile responsiveness",
        "Maintenance & support"
      ],
      benefits: [
        "Increase conversion rates by 35%",
        "Improve user experience",
        "Boost search rankings",
        "Scale with business growth"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 2156,
      link: "/web-development",
      featured: true
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
      price: "From $2,200/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store optimization",
        "Push notifications",
        "Offline functionality",
        "API integration",
        "App maintenance & updates"
      ],
      benefits: [
        "Reach mobile users effectively",
        "Improve customer engagement",
        "Increase brand visibility",
        "Generate new revenue streams"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 1456,
      link: "/mobile-development",
      featured: true
    },
    {
      id: "database-management",
      name: "Database Management Services",
      description: "Comprehensive database design, optimization, migration, and maintenance services",
      price: "From $1,800/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration & conversion",
        "Backup & recovery solutions",
        "Security & access control",
        "Monitoring & maintenance",
        "Cloud database setup",
        "Data analytics & reporting"
      ],
      benefits: [
        "Improve database performance by 60%",
        "Ensure data security & compliance",
        "Reduce downtime to near zero",
        "Optimize storage costs"
      ],
      category: "Data Services",
      rating: 4.7,
      reviews: 987,
      link: "/database-management",
      featured: true
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs and requirements",
      price: "From $2,500/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Custom software development",
        "Legacy system modernization",
        "API development & integration",
        "Microservices architecture",
        "DevOps implementation",
        "Quality assurance & testing",
        "Documentation & training",
        "Ongoing support & maintenance"
      ],
      benefits: [
        "Streamline business processes",
        "Improve operational efficiency",
        "Reduce manual work by 70%",
        "Gain competitive advantage"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1123,
      link: "/custom-software",
      featured: true
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure Services",
      description: "Complete network design, implementation, and management for enterprise environments",
      price: "From $1,200/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Network design & planning",
        "Router & switch configuration",
        "Wireless network setup",
        "VPN implementation",
        "Network security",
        "Performance monitoring",
        "Troubleshooting & support",
        "Network documentation"
      ],
      benefits: [
        "Improve network performance by 50%",
        "Enhance security & reliability",
        "Reduce network downtime",
        "Optimize bandwidth usage"
      ],
      category: "Infrastructure",
      rating: 4.6,
      reviews: 756,
      link: "/network-infrastructure",
      featured: false
    },
    {
      id: "it-consulting",
      name: "IT Consulting Services",
      description: "Strategic IT consulting to help align technology with business objectives",
      price: "From $1,000/month",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "IT strategy development",
        "Technology assessment",
        "Digital transformation planning",
        "Vendor evaluation & selection",
        "Project management",
        "Change management",
        "Training & knowledge transfer",
        "Ongoing advisory services"
      ],
      benefits: [
        "Align IT with business goals",
        "Reduce technology risks",
        "Optimize IT investments",
        "Accelerate digital transformation"
      ],
      category: "Consulting",
      rating: 4.8,
      reviews: 654,
      link: "/it-consulting",
      featured: false
    },
    {
      id: "managed-services",
      name: "Managed IT Services",
      description: "Comprehensive IT management including monitoring, maintenance, and support",
      price: "From $1,500/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "24/7 IT monitoring",
        "Proactive maintenance",
        "Help desk support",
        "Security management",
        "Backup & disaster recovery",
        "Software updates & patches",
        "Performance optimization",
        "Monthly reporting"
      ],
      benefits: [
        "Reduce IT costs by 30%",
        "Improve system reliability",
        "Free up internal resources",
        "Ensure business continuity"
      ],
      category: "Managed Services",
      rating: 4.7,
      reviews: 1234,
      link: "/managed-services",
      featured: false
    },
    {
      id: "data-center-solutions",
      name: "Data Center Solutions",
      description: "Complete data center design, implementation, and management services",
      price: "From $3,000/month",
      icon: <Server className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      features: [
        "Data center design & build",
        "Server & storage solutions",
        "Power & cooling systems",
        "Security & access control",
        "Monitoring & management",
        "Disaster recovery planning",
        "Compliance & certification",
        "Ongoing maintenance"
      ],
      benefits: [
        "Ensure high availability",
        "Improve energy efficiency",
        "Enhance security posture",
        "Reduce operational costs"
      ],
      category: "Infrastructure",
      rating: 4.8,
      reviews: 567,
      link: "/data-center-solutions",
      featured: false
    },
    {
      id: "disaster-recovery",
      name: "Disaster Recovery Services",
      description: "Comprehensive backup and disaster recovery solutions to protect your business data",
      price: "From $800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Backup strategy development",
        "Automated backup systems",
        "Disaster recovery planning",
        "Business continuity planning",
        "Testing & validation",
        "Recovery time optimization",
        "Compliance reporting",
        "Emergency response"
      ],
      benefits: [
        "Minimize data loss risks",
        "Ensure business continuity",
        "Meet compliance requirements",
        "Reduce recovery time by 80%"
      ],
      category: "Security",
      rating: 4.9,
      reviews: 789,
      link: "/disaster-recovery",
      featured: false
    },
    {
      id: "it-support",
      name: "IT Support Services",
      description: "Comprehensive technical support for all your IT infrastructure and applications",
      price: "From $600/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "24/7 technical support",
        "Remote & on-site support",
        "Hardware & software support",
        "Network troubleshooting",
        "User training & assistance",
        "System maintenance",
        "Performance optimization",
        "Incident management"
      ],
      benefits: [
        "Reduce downtime by 70%",
        "Improve user productivity",
        "Lower support costs",
        "Ensure system reliability"
      ],
      category: "Support",
      rating: 4.6,
      reviews: 1456,
      link: "/it-support",
      featured: false
    },
    {
      id: "security-audit",
      name: "Security Audit Services",
      description: "Comprehensive security assessments and compliance audits for your IT infrastructure",
      price: "From $2,000/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "Security vulnerability assessment",
        "Penetration testing",
        "Compliance auditing",
        "Risk assessment",
        "Security policy review",
        "Incident response planning",
        "Security training",
        "Remediation planning"
      ],
      benefits: [
        "Identify security vulnerabilities",
        "Ensure regulatory compliance",
        "Improve security posture",
        "Reduce security risks"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 432,
      link: "/security-audit",
      featured: false
    },
    {
      id: "technology-consulting",
      name: "Technology Consulting",
      description: "Strategic technology consulting to help you make informed IT decisions",
      price: "From $1,200/month",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Technology strategy planning",
        "Digital transformation consulting",
        "Technology evaluation",
        "ROI analysis",
        "Implementation planning",
        "Change management",
        "Training & development",
        "Ongoing advisory"
      ],
      benefits: [
        "Make informed technology decisions",
        "Optimize IT investments",
        "Accelerate digital transformation",
        "Reduce technology risks"
      ],
      category: "Consulting",
      rating: 4.7,
      reviews: 678,
      link: "/technology-consulting",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: itServices.length, active: true },
    { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length, active: false },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length, active: false },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length, active: false },
    { name: "Data Services", count: itServices.filter(s => s.category === "Data Services").length, active: false },
    { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length, active: false },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length, active: false },
    { name: "Managed Services", count: itServices.filter(s => s.category === "Managed Services").length, active: false },
    { name: "Support", count: itServices.filter(s => s.category === "Support").length, active: false }
  ];

  const stats = [
    { number: "15+", label: "IT Services", icon: <Server className="w-6 h-6" /> },
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion Tech Group's cloud infrastructure services transformed our operations. We reduced costs by 45% while improving performance and scalability.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Martinez",
      company: "E-commerce Plus",
      role: "CEO",
      content: "Their web development team delivered an exceptional e-commerce platform that increased our online sales by 60% in just 6 months.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "Robert Kim",
      company: "Financial Services Inc",
      role: "IT Director",
      content: "The cybersecurity solutions provided by Zion Tech Group gave us complete peace of mind. Our security posture has never been stronger.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const itCapabilities = [
    {
      title: "Cloud Computing",
      description: "Expert cloud migration, management, and optimization across AWS, Azure, and Google Cloud platforms",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, compliance, and incident response",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Software Development",
      description: "Custom web and mobile applications built with modern technologies and best practices",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Management",
      description: "Database design, optimization, and analytics to unlock insights from your data",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Infrastructure",
      description: "Network design, server management, and data center solutions for enterprise environments",
      icon: <Server className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Consulting",
      description: "Strategic IT consulting to align technology with business objectives and drive growth",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Discover 15+ comprehensive IT services including cloud infrastructure, cybersecurity, web development, and managed services. Transform your business with expert technology solutions."
        keywords="IT services, cloud computing, cybersecurity, web development, managed services, database management, IT consulting, technology solutions"
        canonical="/services"
      />

      {/* Animated Background */}
      <div className="futuristic-bg"></div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">15+ Comprehensive IT Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-gradient">
              IT Services
            </span>
            <br />
            & Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
            From cloud infrastructure to cybersecurity, we have everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="btn-futuristic hover-lift hover-glow"
            >
              Get IT Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="glass-card px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all duration-300 group hover:scale-105"
            >
              View Our Work
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

      {/* IT Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">
                Our IT Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive IT services across all major technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itCapabilities.map((capability, index) => (
              <div
                key={index}
                className="glass-card p-8 hover-lift hover-glow grid-item"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-6 mx-auto`}>
                  <div className="text-white">{capability.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{capability.title}</h3>
                <p className="text-gray-300 text-center">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg neon-glow"
                    : "glass-card text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured IT Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">
                Featured IT Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular IT services trusted by businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.filter(service => service.featured).map((service, index) => (
              <div
                key={service.id}
                className="group relative glass-card p-8 hover-lift hover-glow grid-item"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-gray-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All IT Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">
                All IT Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete collection of IT services and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative glass-card p-6 hover-lift grid-item"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="ml-1 text-xs font-medium">{service.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-3 text-sm line-clamp-2">{service.description}</p>

                <div className="flex items-center mb-3">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                </div>

                <div className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join industry leaders who trust our IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free IT consultation and discover how our services can revolutionize your technology operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-futuristic hover-lift hover-glow"
            >
              Get IT Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="glass-card px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              View Pricing
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;