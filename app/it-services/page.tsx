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
  Server,
  Settings,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Zap,
  Globe,
  Eye,
  PieChart,
  Activity,
  DollarSign,
  Lock,
  Monitor,
  ChevronRight,
  PlayCircle,
  Wifi,
  HardDrive,
  Cpu,
  Network
} from "lucide-react";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";
import ResponsiveText from "../components/ResponsiveText";

const ITServicesPage = () => {
  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support with cost optimization.",
      price: "From $249/month",
      originalPrice: "$499/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      category: "Cloud Services",
      features: [
        "Auto-scaling",
        "Disaster Recovery",
        "Cost Optimization",
        "Security Hardening",
        "Multi-cloud Support",
        "DevOps Integration",
        "24/7 Monitoring",
        "Performance Optimization",
        "Backup & Restore",
        "Compliance Management"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "50% cost reduction",
        "Automated scaling",
        "Enhanced security",
        "Seamless migration"
      ],
      link: "/cloud-infrastructure",
      popular: true,
      rating: 4.8,
      reviews: 189,
      demo: "https://ziontechgroup.com/demo/cloud-infrastructure"
    },
    {
      id: "cybersecurity-solutions",
      name: "Cybersecurity Solutions",
      description: "Advanced cybersecurity protection with threat detection, vulnerability assessment, and compliance management. Protect your business from evolving threats.",
      price: "From $399/month",
      originalPrice: "$799/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      category: "Cybersecurity",
      features: [
        "Threat Detection",
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
      benefits: [
        "99.9% threat detection",
        "Reduced security risks",
        "Compliance assurance",
        "Proactive protection",
        "Expert security team"
      ],
      link: "/cybersecurity-solutions",
      popular: true,
      rating: 4.9,
      reviews: 203,
      demo: "https://ziontechgroup.com/demo/cybersecurity"
    },
    {
      id: "web-development",
      name: "Web Development Services",
      description: "Custom web applications and websites built with modern technologies. Responsive design, SEO optimization, and performance optimization included.",
      price: "From $2,999/project",
      originalPrice: "$5,999/project",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      category: "Development",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Content Management Systems",
        "E-commerce Solutions",
        "API Development",
        "Database Integration",
        "Maintenance & Support"
      ],
      benefits: [
        "Modern, scalable solutions",
        "Mobile-first design",
        "SEO-optimized",
        "Fast loading times",
        "Ongoing support"
      ],
      link: "/web-development",
      popular: false,
      rating: 4.7,
      reviews: 156,
      demo: "https://ziontechgroup.com/demo/web-development"
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. From concept to deployment with ongoing maintenance and updates.",
      price: "From $4,999/app",
      originalPrice: "$9,999/app",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      category: "Development",
      features: [
        "iOS & Android Apps",
        "Cross-platform Development",
        "Native Performance",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "API Integration",
        "User Authentication",
        "Analytics Integration",
        "App Maintenance"
      ],
      benefits: [
        "Native performance",
        "Cross-platform compatibility",
        "App store optimization",
        "Regular updates",
        "User-friendly design"
      ],
      link: "/mobile-development",
      popular: false,
      rating: 4.6,
      reviews: 134,
      demo: "https://ziontechgroup.com/demo/mobile-development"
    },
    {
      id: "database-management",
      name: "Database Management",
      description: "Comprehensive database solutions including design, optimization, migration, and maintenance. Support for SQL and NoSQL databases.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      category: "Database",
      features: [
        "Database Design",
        "Performance Optimization",
        "Data Migration",
        "Backup & Recovery",
        "Security Hardening",
        "Monitoring & Alerting",
        "Query Optimization",
        "Index Management",
        "Replication Setup",
        "24/7 Support"
      ],
      benefits: [
        "Optimized performance",
        "Data security",
        "Automated backups",
        "Reduced downtime",
        "Expert management"
      ],
      link: "/database-management",
      popular: false,
      rating: 4.8,
      reviews: 98,
      demo: "https://ziontechgroup.com/demo/database-management"
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs. From enterprise applications to specialized tools.",
      price: "From $5,999/project",
      originalPrice: "$11,999/project",
      icon: <Settings className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      category: "Development",
      features: [
        "Custom Application Development",
        "Enterprise Software",
        "API Development",
        "Integration Services",
        "User Interface Design",
        "Testing & Quality Assurance",
        "Documentation",
        "Training & Support",
        "Maintenance & Updates",
        "Scalability Planning"
      ],
      benefits: [
        "Tailored to your needs",
        "Scalable architecture",
        "Quality assurance",
        "Ongoing support",
        "Future-proof design"
      ],
      link: "/custom-software",
      popular: true,
      rating: 4.9,
      reviews: 167,
      demo: "https://ziontechgroup.com/demo/custom-software"
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure Setup",
      description: "Complete network infrastructure design, implementation, and management. From LAN setup to enterprise-wide network solutions.",
      price: "From $1,999/setup",
      originalPrice: "$3,999/setup",
      icon: <Network className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      category: "Infrastructure",
      features: [
        "Network Design",
        "Router & Switch Configuration",
        "Wireless Network Setup",
        "VPN Implementation",
        "Network Security",
        "Performance Monitoring",
        "Troubleshooting",
        "Documentation",
        "Training",
        "Ongoing Maintenance"
      ],
      benefits: [
        "Reliable connectivity",
        "Enhanced security",
        "Optimized performance",
        "Scalable design",
        "Expert support"
      ],
      link: "/network-infrastructure",
      popular: false,
      rating: 4.7,
      reviews: 89,
      demo: "https://ziontechgroup.com/demo/network-infrastructure"
    },
    {
      id: "server-management",
      name: "Server Management & Maintenance",
      description: "Complete server administration including setup, configuration, monitoring, and maintenance. Windows and Linux server support.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <Server className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      category: "Infrastructure",
      features: [
        "Server Setup & Configuration",
        "Performance Monitoring",
        "Security Hardening",
        "Backup Management",
        "Software Updates",
        "Troubleshooting",
        "Capacity Planning",
        "Disaster Recovery",
        "24/7 Monitoring",
        "Expert Administration"
      ],
      benefits: [
        "Optimized performance",
        "Enhanced security",
        "Reduced downtime",
        "Automated maintenance",
        "Expert management"
      ],
      link: "/server-management",
      popular: false,
      rating: 4.6,
      reviews: 112,
      demo: "https://ziontechgroup.com/demo/server-management"
    },
    {
      id: "it-consulting",
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting to help you make informed technology decisions. Technology roadmaps, digital transformation, and IT optimization.",
      price: "From $150/hour",
      originalPrice: "$300/hour",
      icon: <Globe className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      category: "Consulting",
      features: [
        "Technology Assessment",
        "Digital Transformation",
        "IT Strategy Planning",
        "Technology Roadmaps",
        "Vendor Evaluation",
        "Cost Optimization",
        "Risk Assessment",
        "Compliance Review",
        "Training Programs",
        "Ongoing Advisory"
      ],
      benefits: [
        "Strategic guidance",
        "Cost optimization",
        "Technology alignment",
        "Risk mitigation",
        "Expert insights"
      ],
      link: "/it-consulting",
      popular: true,
      rating: 4.8,
      reviews: 145,
      demo: "https://ziontechgroup.com/demo/it-consulting"
    },
    {
      id: "data-backup-recovery",
      name: "Data Backup & Recovery",
      description: "Comprehensive data backup and disaster recovery solutions. Automated backups, off-site storage, and rapid recovery capabilities.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      category: "Data Management",
      features: [
        "Automated Backups",
        "Off-site Storage",
        "Rapid Recovery",
        "Data Encryption",
        "Version Control",
        "Disaster Recovery Planning",
        "Testing & Validation",
        "Compliance Support",
        "24/7 Monitoring",
        "Expert Support"
      ],
      benefits: [
        "Data protection",
        "Rapid recovery",
        "Compliance assurance",
        "Peace of mind",
        "Cost-effective solution"
      ],
      link: "/data-backup-recovery",
      popular: false,
      rating: 4.7,
      reviews: 76,
      demo: "https://ziontechgroup.com/demo/data-backup"
    },
    {
      id: "it-support",
      name: "24/7 IT Support",
      description: "Round-the-clock IT support and helpdesk services. Remote support, on-site assistance, and proactive monitoring for your IT infrastructure.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      category: "Support",
      features: [
        "24/7 Helpdesk",
        "Remote Support",
        "On-site Assistance",
        "Proactive Monitoring",
        "Issue Resolution",
        "System Maintenance",
        "User Training",
        "Documentation",
        "SLA Guarantees",
        "Expert Technicians"
      ],
      benefits: [
        "Always available",
        "Quick response times",
        "Proactive maintenance",
        "Reduced downtime",
        "Expert support"
      ],
      link: "/it-support",
      popular: true,
      rating: 4.9,
      reviews: 234,
      demo: "https://ziontechgroup.com/demo/it-support"
    },
    {
      id: "hardware-procurement",
      name: "Hardware Procurement & Setup",
      description: "Complete hardware procurement, installation, and configuration services. From workstations to enterprise servers and networking equipment.",
      price: "From $299/setup",
      originalPrice: "$599/setup",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      category: "Hardware",
      features: [
        "Hardware Selection",
        "Procurement Management",
        "Installation & Setup",
        "Configuration",
        "Testing & Validation",
        "Documentation",
        "Warranty Management",
        "Training",
        "Support",
        "Maintenance"
      ],
      benefits: [
        "Right hardware selection",
        "Professional installation",
        "Proper configuration",
        "Warranty coverage",
        "Expert setup"
      ],
      link: "/hardware-procurement",
      popular: false,
      rating: 4.6,
      reviews: 67,
      demo: "https://ziontechgroup.com/demo/hardware-procurement"
    }
  ];

  const categories = [
    { name: "All IT Services", count: itServices.length, active: true },
    { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length },
    { name: "Cybersecurity", count: itServices.filter(s => s.category === "Cybersecurity").length },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length },
    { name: "Database", count: itServices.filter(s => s.category === "Database").length },
    { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length },
    { name: "Data Management", count: itServices.filter(s => s.category === "Data Management").length },
    { name: "Support", count: itServices.filter(s => s.category === "Support").length },
    { name: "Hardware", count: itServices.filter(s => s.category === "Hardware").length }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Technologies Supported", icon: <Code className="w-6 h-6" /> }
  ];

  const technologies = [
    { name: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "DigitalOcean"] },
    { name: "Programming Languages", items: ["JavaScript", "Python", "Java", "C#", "PHP", "Go"] },
    { name: "Frameworks", items: ["React", "Angular", "Vue.js", "Node.js", ".NET", "Django"] },
    { name: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle", "SQL Server"] },
    { name: "DevOps Tools", items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform"] },
    { name: "Security Tools", items: ["Firewalls", "VPN", "SIEM", "Penetration Testing", "Compliance"] }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions & Support</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and 24/7 support. Transform your technology infrastructure."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, custom software, network infrastructure, IT consulting, IT support"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">#1 IT Solutions Provider 2024</span>
            </div>
            
            <ResponsiveText
              as="h1"
              size="6xl"
              weight="bold"
              color="white"
              className="mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                IT Services
              </span>
            </ResponsiveText>
            
            <ResponsiveText
              as="p"
              size="xl"
              color="gray"
              align="center"
              className="mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Comprehensive technology solutions and support services to keep your business running smoothly. 
              From cloud infrastructure to cybersecurity, we provide enterprise-grade IT services that drive efficiency and growth.
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get IT Consultation
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<PlayCircle className="w-5 h-5" />}
              >
                View Our Work
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team is proficient in the latest technologies and tools to deliver cutting-edge solutions
              </p>
            </div>
            <ResponsiveGrid cols={{ default: 2, md: 3, lg: 6 }} className="gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 text-center group-hover:text-green-300 transition-colors">
                    {tech.name}
                  </h3>
                  <div className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="text-sm text-gray-300 text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
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
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} className="gap-8">
              {itServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer h-full"
                  glowColor={service.color.includes('green') ? 'green' : service.color.includes('blue') ? 'blue' : service.color.includes('purple') ? 'purple' : 'pink'}
                >
                  <Link
                    to={service.link}
                    className="block p-6 h-full flex flex-col"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      </div>
                    )}
                    
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-green-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                    
                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-green-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-auto space-y-2">
                      <div className="flex space-x-2">
                        <FuturisticButton
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          Learn More
                        </FuturisticButton>
                        <FuturisticButton
                          href={service.demo}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          icon={<PlayCircle className="w-4 h-4" />}
                        >
                          Demo
                        </FuturisticButton>
                      </div>
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30 relative z-10">
          <ResponsiveContainer className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join hundreds of businesses already using our IT services to optimize their technology infrastructure. 
              Get expert consultation and implementation services tailored to your needs.
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
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
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
                Get IT Consultation
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<PlayCircle className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;