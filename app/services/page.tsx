import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Shield, 
  Cloud, 
  Settings, 
  Globe, 
  Users, 
  Monitor,
  Smartphone,
  Database,
  Network,
  Lock,
  Cpu,
  Wifi,
  Server,
  HardDrive,
  Router,
  Zap,
  BarChart3,
  Target,
  Calendar,
  Mail,
  Phone,
  Award,
  Clock,
  DollarSign,
  ExternalLink,
  Play,
  Download,
  Eye,
  Heart,
  MessageSquare,
  FileText,
  Workflow,
  Bot,
  Search,
  Filter,
  RefreshCw,
  Plus,
  Minus,
  ChevronRight,
  Brain,
  TrendingUp,
  Layers,
  Activity,
  PieChart,
  CircuitBoard,
  Cpu2,
  Database2,
  Network2,
  Layers3,
  Workflow2,
  Bot2,
  Search2,
  Filter2,
  RefreshCw2,
  Plus2,
  Minus2,
  ChevronRight2,
  Building,
  Code,
  Terminal,
  GitBranch,
  Package,
  Wrench,
  Tool,
  Hammer,
  Cog,
  Sliders,
  Palette,
  Image,
  Video,
  Music,
  Headphones,
  Camera,
  Mic,
  Speaker,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Gamepad2,
  Joystick,
  Tv,
  Radio,
  Watch,
  Smartphone as PhoneIcon,
  Tablet,
  Laptop,
  Desktop,
  Server2,
  HardDrive2,
  Router2,
  Wifi2,
  Bluetooth,
  Usb,
  Hdmi,
  Ethernet,
  WifiOff,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Battery,
  BatteryCharging,
  BatteryLow,
  BatteryMedium,
  BatteryHigh,
  BatteryFull,
  Power,
  PowerOff,
  PowerOn,
  Plug,
  PlugZap,
  PlugZap2,
  Zap2,
  Lightning,
  Thunder,
  Storm,
  Rain,
  Snow,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudSun,
  CloudMoon,
  CloudOff,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudWind,
  CloudSunRain,
  CloudMoonRain,
  CloudSnowRain,
  CloudLightningRain,
  CloudSnowLightning,
  CloudHailRain,
  CloudFogRain,
  CloudWindRain,
  CloudSunSnow,
  CloudMoonSnow,
  CloudSnowSnow,
  CloudLightningSnow,
  CloudHailSnow,
  CloudFogSnow,
  CloudWindSnow,
  CloudSunHail,
  CloudMoonHail,
  CloudSnowHail,
  CloudLightningHail,
  CloudHailHail,
  CloudFogHail,
  CloudWindHail,
  CloudSunFog,
  CloudMoonFog,
  CloudSnowFog,
  CloudLightningFog,
  CloudHailFog,
  CloudFogFog,
  CloudWindFog,
  CloudSunWind,
  CloudMoonWind,
  CloudSnowWind,
  CloudLightningWind,
  CloudHailWind,
  CloudFogWind,
  CloudWindWind
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group - IT Services",
    "url": "https://ziontechgroup.com/services",
    "description": "Comprehensive IT services including cloud infrastructure, cybersecurity, network management, software development, and digital transformation solutions.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure Services",
        "description": "Scalable cloud solutions and infrastructure management",
        "price": "299",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity Services",
        "description": "Advanced cybersecurity protection and compliance",
        "price": "499",
        "priceCurrency": "USD"
      }
    ]
  };

  const itServiceCategories = [
    {
      title: "Cloud Infrastructure & Management",
      description: "Scalable cloud solutions and infrastructure management services",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Cloud Infrastructure Services",
          description: "Comprehensive cloud infrastructure solutions including AWS, Azure, and Google Cloud setup, migration, optimization, and ongoing management for scalable business growth.",
          price: "From $299/month",
          features: ["Cloud migration", "Infrastructure setup", "Auto-scaling", "Cost optimization", "24/7 monitoring", "Disaster recovery"],
          icon: <Cloud className="w-6 h-6" />,
          link: "/cloud-infrastructure",
          featured: true,
          rating: 4.9,
          users: "2,800+",
          category: "Cloud Services",
          capabilities: ["Cloud Migration", "Infrastructure Setup", "Auto-scaling", "Cost Optimization"]
        },
        {
          name: "Data Center Services",
          description: "Enterprise-grade data center solutions with colocation, managed hosting, and hybrid cloud services for mission-critical applications and data.",
          price: "From $499/month",
          features: ["Colocation services", "Managed hosting", "Hybrid cloud", "Backup solutions", "Security compliance", "24/7 support"],
          icon: <Server className="w-6 h-6" />,
          link: "/data-center-services",
          rating: 4.8,
          users: "1,500+",
          category: "Data Center",
          capabilities: ["Colocation", "Managed Hosting", "Hybrid Cloud", "Backup Solutions"]
        },
        {
          name: "Cloud Backup & Recovery",
          description: "Automated cloud backup and disaster recovery solutions ensuring business continuity and data protection with 99.9% uptime guarantee.",
          price: "From $199/month",
          features: ["Automated backups", "Disaster recovery", "Data encryption", "Point-in-time recovery", "Cross-region replication", "Compliance reporting"],
          icon: <Database className="w-6 h-6" />,
          link: "/cloud-backup-recovery",
          rating: 4.7,
          users: "3,200+",
          category: "Backup & Recovery",
          capabilities: ["Automated Backups", "Disaster Recovery", "Data Encryption", "Point-in-time Recovery"]
        }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Advanced cybersecurity protection and compliance management",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Cybersecurity Services",
          description: "Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, penetration testing, and security monitoring for complete protection.",
          price: "From $499/month",
          features: ["Threat detection", "Vulnerability assessment", "Penetration testing", "Security monitoring", "Incident response", "Compliance reporting"],
          icon: <Shield className="w-6 h-6" />,
          link: "/cybersecurity-services",
          featured: true,
          rating: 4.9,
          users: "2,100+",
          category: "Cybersecurity",
          capabilities: ["Threat Detection", "Vulnerability Assessment", "Penetration Testing", "Security Monitoring"]
        },
        {
          name: "Compliance Management",
          description: "Automated compliance management for GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements with continuous monitoring and reporting.",
          price: "From $349/month",
          features: ["Regulatory compliance", "Automated reporting", "Risk assessment", "Audit trails", "Policy management", "Training modules"],
          icon: <CheckCircle className="w-6 h-6" />,
          link: "/compliance-management",
          rating: 4.8,
          users: "1,800+",
          category: "Compliance",
          capabilities: ["Regulatory Compliance", "Automated Reporting", "Risk Assessment", "Audit Trails"]
        },
        {
          name: "Security Audit & Assessment",
          description: "Comprehensive security audits and assessments to identify vulnerabilities, assess risks, and provide recommendations for improving security posture.",
          price: "From $299/month",
          features: ["Security audits", "Risk assessment", "Vulnerability scanning", "Compliance checks", "Security recommendations", "Remediation planning"],
          icon: <Search className="w-6 h-6" />,
          link: "/security-audit-assessment",
          rating: 4.7,
          users: "1,600+",
          category: "Security Audit",
          capabilities: ["Security Audits", "Risk Assessment", "Vulnerability Scanning", "Compliance Checks"]
        }
      ]
    },
    {
      title: "Network Infrastructure & Management",
      description: "Advanced network solutions and infrastructure management",
      icon: <Network className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Network Infrastructure",
          description: "Complete network infrastructure solutions including design, implementation, and management of wired and wireless networks for optimal performance and security.",
          price: "From $399/month",
          features: ["Network design", "Implementation", "Wireless solutions", "Security configuration", "Performance optimization", "24/7 monitoring"],
          icon: <Network className="w-6 h-6" />,
          link: "/network-infrastructure",
          featured: true,
          rating: 4.8,
          users: "2,300+",
          category: "Network Services",
          capabilities: ["Network Design", "Implementation", "Wireless Solutions", "Security Configuration"]
        },
        {
          name: "5G Network Solutions",
          description: "Next-generation 5G network implementation and optimization for high-speed connectivity, IoT applications, and edge computing solutions.",
          price: "From $599/month",
          features: ["5G implementation", "Network optimization", "IoT connectivity", "Edge computing", "Performance monitoring", "Future-proofing"],
          icon: <Wifi className="w-6 h-6" />,
          link: "/5g-network-solutions",
          rating: 4.7,
          users: "800+",
          category: "5G Services",
          capabilities: ["5G Implementation", "Network Optimization", "IoT Connectivity", "Edge Computing"]
        },
        {
          name: "SD-WAN Solutions",
          description: "Software-defined wide area network solutions for improved connectivity, security, and performance across multiple locations and cloud services.",
          price: "From $299/month",
          features: ["SD-WAN deployment", "Multi-site connectivity", "Cloud integration", "Security policies", "Performance monitoring", "Centralized management"],
          icon: <Globe className="w-6 h-6" />,
          link: "/sd-wan-solutions",
          rating: 4.6,
          users: "1,200+",
          category: "SD-WAN",
          capabilities: ["SD-WAN Deployment", "Multi-site Connectivity", "Cloud Integration", "Security Policies"]
        }
      ]
    },
    {
      title: "Software Development & Integration",
      description: "Custom software development and system integration services",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "Custom Software Development",
          description: "Tailored software development services including web applications, mobile apps, desktop software, and enterprise solutions built to your specifications.",
          price: "From $199/hour",
          features: ["Custom development", "Web applications", "Mobile apps", "Desktop software", "Enterprise solutions", "Quality assurance"],
          icon: <Code className="w-6 h-6" />,
          link: "/custom-software-development",
          featured: true,
          rating: 4.8,
          users: "1,500+",
          category: "Software Development",
          capabilities: ["Custom Development", "Web Applications", "Mobile Apps", "Desktop Software"]
        },
        {
          name: "System Integration",
          description: "Seamless integration of existing systems and applications to improve efficiency, data flow, and business processes across your organization.",
          price: "From $299/hour",
          features: ["System integration", "API development", "Data migration", "Process automation", "Legacy system modernization", "Testing & validation"],
          icon: <Workflow className="w-6 h-6" />,
          link: "/system-integration",
          rating: 4.7,
          users: "1,200+",
          category: "System Integration",
          capabilities: ["System Integration", "API Development", "Data Migration", "Process Automation"]
        },
        {
          name: "DevOps Solutions",
          description: "DevOps implementation and automation services including CI/CD pipelines, containerization, monitoring, and deployment automation for faster delivery.",
          price: "From $249/hour",
          features: ["CI/CD pipelines", "Containerization", "Monitoring setup", "Deployment automation", "Infrastructure as code", "Performance optimization"],
          icon: <Settings className="w-6 h-6" />,
          link: "/devops-solutions",
          rating: 4.6,
          users: "1,800+",
          category: "DevOps",
          capabilities: ["CI/CD Pipelines", "Containerization", "Monitoring Setup", "Deployment Automation"]
        }
      ]
    },
    {
      title: "IT Support & Management",
      description: "Comprehensive IT support and management services",
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      services: [
        {
          name: "IT Support Services",
          description: "24/7 IT support and helpdesk services including technical assistance, troubleshooting, maintenance, and user training for optimal system performance.",
          price: "From $149/month",
          features: ["24/7 support", "Helpdesk services", "Technical assistance", "Troubleshooting", "System maintenance", "User training"],
          icon: <Users className="w-6 h-6" />,
          link: "/it-support-services",
          featured: true,
          rating: 4.8,
          users: "4,500+",
          category: "IT Support",
          capabilities: ["24/7 Support", "Helpdesk Services", "Technical Assistance", "Troubleshooting"]
        },
        {
          name: "IT Asset Management",
          description: "Comprehensive IT asset management including inventory tracking, lifecycle management, procurement, and disposal of IT equipment and software licenses.",
          price: "From $199/month",
          features: ["Asset inventory", "Lifecycle management", "Procurement", "License management", "Disposal services", "Cost optimization"],
          icon: <BarChart3 className="w-6 h-6" />,
          link: "/it-asset-management",
          rating: 4.7,
          users: "2,200+",
          category: "Asset Management",
          capabilities: ["Asset Inventory", "Lifecycle Management", "Procurement", "License Management"]
        },
        {
          name: "IT Consulting",
          description: "Strategic IT consulting services including technology assessment, digital transformation planning, and technology roadmap development for business growth.",
          price: "From $299/hour",
          features: ["Technology assessment", "Digital transformation", "Technology roadmap", "Strategic planning", "Vendor evaluation", "Implementation guidance"],
          icon: <Target className="w-6 h-6" />,
          link: "/it-consulting",
          rating: 4.6,
          users: "1,000+",
          category: "IT Consulting",
          capabilities: ["Technology Assessment", "Digital Transformation", "Technology Roadmap", "Strategic Planning"]
        }
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Cutting-edge technology solutions and innovation services",
      icon: <Brain className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "IoT Solutions",
          description: "Internet of Things implementation and management including device connectivity, data collection, analytics, and automation for smart business operations.",
          price: "From $399/month",
          features: ["IoT implementation", "Device connectivity", "Data collection", "Analytics", "Automation", "Remote monitoring"],
          icon: <Wifi className="w-6 h-6" />,
          link: "/iot-solutions",
          featured: true,
          rating: 4.7,
          users: "1,300+",
          category: "IoT Services",
          capabilities: ["IoT Implementation", "Device Connectivity", "Data Collection", "Analytics"]
        },
        {
          name: "AR/VR Development",
          description: "Augmented and virtual reality development services including immersive experiences, training simulations, and interactive applications for various industries.",
          price: "From $499/hour",
          features: ["AR/VR development", "Immersive experiences", "Training simulations", "Interactive applications", "Cross-platform support", "Performance optimization"],
          icon: <Monitor className="w-6 h-6" />,
          link: "/ar-vr-development",
          rating: 4.6,
          users: "600+",
          category: "AR/VR Development",
          capabilities: ["AR/VR Development", "Immersive Experiences", "Training Simulations", "Interactive Applications"]
        },
        {
          name: "Blockchain Development",
          description: "Blockchain technology implementation including smart contracts, decentralized applications, and cryptocurrency solutions for secure and transparent operations.",
          price: "From $599/hour",
          features: ["Blockchain implementation", "Smart contracts", "DApps development", "Cryptocurrency solutions", "Security auditing", "Integration services"],
          icon: <Lock className="w-6 h-6" />,
          link: "/blockchain-development",
          rating: 4.5,
          users: "400+",
          category: "Blockchain Development",
          capabilities: ["Blockchain Implementation", "Smart Contracts", "DApps Development", "Cryptocurrency Solutions"]
        }
      ]
    }
  ];

  const stats = [
    { number: "15+", label: "IT Service Categories", icon: <Settings className="w-6 h-6" /> },
    { number: "10,000+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Enterprise Solutions Inc.",
      role: "CTO",
      content: "Zion's IT services have been instrumental in our digital transformation. Their cloud infrastructure and cybersecurity solutions have improved our operations significantly.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Martinez",
      company: "Global Manufacturing Corp",
      role: "IT Director",
      content: "Outstanding network infrastructure and support services. We've achieved 99.9% uptime and reduced IT costs by 30% since partnering with Zion Tech Group.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "Robert Kim",
      company: "Financial Services Ltd",
      role: "Security Officer",
      content: "Their cybersecurity services are top-notch. We've enhanced our security posture and achieved full compliance with industry regulations thanks to their expertise.",
      rating: 5,
      avatar: "RK"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="IT Services | Zion Tech Group - Comprehensive Technology Solutions"
        description="Discover our comprehensive IT services including cloud infrastructure, cybersecurity, network management, software development, and digital transformation. Expert technology solutions for modern businesses."
        keywords="IT services, cloud infrastructure, cybersecurity, network management, software development, digital transformation, IT consulting, technology solutions, managed IT services"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Settings className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Comprehensive IT Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              IT Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
            From cloud infrastructure to cybersecurity, we provide expert IT services that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get IT Consultation
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              Explore IT Services
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* IT Services by Category */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              IT Services by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive collection of IT services, organized by category for easy discovery and implementation.
            </p>
          </div>

          {itServiceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300 text-lg">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                  >
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-cyan-400 font-medium">{service.price}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-gray-300 text-sm">{service.rating}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-300 text-sm">{service.users} users</span>
                      </div>
                      <div className="text-xs text-cyan-400 font-medium">{service.category}</div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-white font-medium mb-2 text-sm">Key Capabilities:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.capabilities.map((capability, capabilityIndex) => (
                          <span key={capabilityIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-white font-medium mb-2 text-sm">Key Features:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-cyan-400 px-2 py-1">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={service.link}
                        className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <FuturisticButton
                        href="/contact"
                        variant="outline"
                        size="sm"
                        icon={<Play className="w-4 h-4" />}
                      >
                        Get Quote
                      </FuturisticButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by IT Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what industry experts say about our IT services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our IT services to drive efficiency, security, and growth. 
            Start your digital transformation journey today with our expert team and proven solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get IT Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;