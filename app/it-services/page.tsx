import React, { useState, useMemo } from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Package, Server, Network, Wifi, Smartphone, Laptop, Desktop, Router, Switch, Firewall, Database as DatabaseIcon, HardDrive as HardDriveIcon, Cpu as CpuIcon, MemoryStick as MemoryStickIcon, Printer as PrinterIcon, Scanner as ScannerIcon, Fax as FaxIcon, Phone as PhoneIcon, Voicemail as VoicemailIcon, Headset as HeadsetIcon, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, Shuffle2 as Shuffle2Icon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Star as StarIcon, Moon as MoonIcon, Sun as SunIcon, Sunrise as SunriseIcon, Sunset as SunsetIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon, Droplets as DropletsIcon, Thermometer as ThermometerIcon, Gauge as GaugeIcon, Timer as TimerIcon, Stopwatch as StopwatchIcon, Hourglass as HourglassIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ITServices() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itServices = useMemo(() => [
    // Cloud Infrastructure & Services
    {
      id: "cloud-infrastructure-management",
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and multi-cloud support",
      price: "From $2,499/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud architecture design",
        "Automated scaling & load balancing",
        "Disaster recovery & backup solutions",
        "Cost optimization & monitoring",
        "Security hardening & compliance",
        "24/7 infrastructure monitoring",
        "Performance optimization",
        "Migration & modernization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve uptime to 99.99%",
        "Scale resources automatically",
        "Ensure business continuity"
      ],
      category: "Cloud",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure-management",
      featured: true
    },
    {
      id: "cloud-migration-services",
      name: "Cloud Migration Services",
      description: "Expert cloud migration with zero-downtime strategies, data migration, and application modernization",
      price: "From $3,999/month",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Zero-downtime migration strategies",
        "Application modernization",
        "Data migration & synchronization",
        "Security & compliance migration",
        "Performance optimization",
        "Cost analysis & optimization",
        "Training & documentation",
        "Post-migration support"
      ],
      benefits: [
        "Migrate without business disruption",
        "Reduce migration risks by 90%",
        "Optimize cloud costs",
        "Improve application performance"
      ],
      category: "Cloud",
      rating: 4.8,
      reviews: 892,
      link: "/cloud-migration-services",
      featured: true
    },
    {
      id: "cloud-native-development",
      name: "Cloud Native Development",
      description: "Modern cloud-native applications with microservices, containers, and serverless architectures",
      price: "From $4,999/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Microservices architecture design",
        "Container orchestration (Kubernetes)",
        "Serverless application development",
        "API development & management",
        "CI/CD pipeline implementation",
        "Monitoring & observability",
        "Security best practices",
        "Performance optimization"
      ],
      benefits: [
        "Build scalable applications",
        "Reduce development time by 50%",
        "Improve deployment frequency",
        "Enhance application reliability"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 654,
      link: "/cloud-native-development",
      featured: false
    },

    // Cybersecurity Solutions
    {
      id: "cybersecurity-solutions",
      name: "Advanced Cybersecurity Solutions",
      description: "Comprehensive security services with threat detection, incident response, and compliance management",
      price: "From $3,999/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "Advanced threat detection & prevention",
        "24/7 security monitoring & response",
        "Penetration testing & vulnerability assessment",
        "Security awareness training",
        "Compliance management (GDPR, HIPAA, SOX)",
        "Incident response & forensics",
        "Security architecture design",
        "Risk assessment & mitigation"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure compliance requirements",
        "Minimize security risks"
      ],
      category: "Security",
      rating: 4.9,
      reviews: 1156,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "managed-security-services",
      name: "Managed Security Services",
      description: "24/7 managed security operations with threat hunting, incident response, and security monitoring",
      price: "From $2,999/month",
      icon: <Eye className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "24/7 security operations center",
        "Threat hunting & intelligence",
        "Incident response & forensics",
        "Security monitoring & alerting",
        "Vulnerability management",
        "Security policy management",
        "Compliance reporting",
        "Security training & awareness"
      ],
      benefits: [
        "Continuous security protection",
        "Faster incident response",
        "Reduce security overhead",
        "Improve security posture"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 743,
      link: "/managed-security-services",
      featured: false
    },
    {
      id: "network-security",
      name: "Network Security Solutions",
      description: "Comprehensive network security with firewalls, intrusion detection, and network monitoring",
      price: "From $1,999/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Next-generation firewall deployment",
        "Intrusion detection & prevention",
        "Network segmentation & access control",
        "VPN & remote access solutions",
        "Network monitoring & analytics",
        "DDoS protection",
        "Wireless security",
        "Network compliance auditing"
      ],
      benefits: [
        "Secure network infrastructure",
        "Prevent unauthorized access",
        "Monitor network traffic",
        "Ensure network compliance"
      ],
      category: "Security",
      rating: 4.7,
      reviews: 567,
      link: "/network-security",
      featured: false
    },

    // Web & Mobile Development
    {
      id: "web-development",
      name: "Custom Web Development",
      description: "Modern web applications with responsive design, performance optimization, and security best practices",
      price: "From $2,999/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Responsive web design",
        "Frontend & backend development",
        "API development & integration",
        "Performance optimization",
        "SEO optimization",
        "Security implementation",
        "Content management systems",
        "E-commerce solutions"
      ],
      benefits: [
        "Build modern web applications",
        "Improve user experience",
        "Optimize for search engines",
        "Ensure security & performance"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 1456,
      link: "/web-development",
      featured: true
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications with modern UI/UX and performance optimization",
      price: "From $3,999/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Native iOS & Android development",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design & optimization",
        "App store optimization",
        "Push notifications & analytics",
        "Backend integration",
        "Security & compliance",
        "Performance optimization"
      ],
      benefits: [
        "Build engaging mobile apps",
        "Reach wider audience",
        "Improve user engagement",
        "Optimize app performance"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 1123,
      link: "/mobile-development",
      featured: false
    },
    {
      id: "progressive-web-apps",
      name: "Progressive Web Apps (PWA)",
      description: "Modern PWA development with offline capabilities, push notifications, and app-like experience",
      price: "From $2,499/month",
      icon: <Laptop className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "PWA development & optimization",
        "Offline functionality",
        "Push notifications",
        "App-like user experience",
        "Performance optimization",
        "Cross-platform compatibility",
        "SEO optimization",
        "Security implementation"
      ],
      benefits: [
        "Combine web & mobile benefits",
        "Improve user engagement",
        "Reduce development costs",
        "Enhance performance"
      ],
      category: "Development",
      rating: 4.6,
      reviews: 654,
      link: "/progressive-web-apps",
      featured: false
    },

    // Database & Data Management
    {
      id: "database-management",
      name: "Database Management Services",
      description: "Comprehensive database solutions with optimization, backup, security, and performance monitoring",
      price: "From $1,999/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Database design & optimization",
        "Performance tuning & monitoring",
        "Backup & disaster recovery",
        "Security & access control",
        "Data migration & synchronization",
        "Database administration",
        "Compliance & auditing",
        "24/7 monitoring & support"
      ],
      benefits: [
        "Optimize database performance",
        "Ensure data security",
        "Reduce downtime",
        "Improve data reliability"
      ],
      category: "Database",
      rating: 4.8,
      reviews: 876,
      link: "/database-management",
      featured: true
    },
    {
      id: "data-engineering",
      name: "Data Engineering Solutions",
      description: "Advanced data pipelines, ETL processes, and data warehouse solutions for big data analytics",
      price: "From $3,999/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Data pipeline development",
        "ETL/ELT process implementation",
        "Data warehouse design",
        "Big data processing",
        "Real-time data streaming",
        "Data quality & governance",
        "Analytics platform setup",
        "Cloud data solutions"
      ],
      benefits: [
        "Process large data volumes",
        "Enable real-time analytics",
        "Improve data quality",
        "Accelerate insights"
      ],
      category: "Data",
      rating: 4.7,
      reviews: 543,
      link: "/data-engineering",
      featured: false
    },

    // DevOps & Automation
    {
      id: "devops-solutions",
      name: "DevOps & Automation Solutions",
      description: "Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and automation",
      price: "From $2,999/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Monitoring & logging",
        "Automated testing & deployment",
        "Configuration management",
        "Security automation",
        "Performance optimization"
      ],
      benefits: [
        "Accelerate development cycles",
        "Improve deployment reliability",
        "Reduce manual errors",
        "Enhance team productivity"
      ],
      category: "DevOps",
      rating: 4.8,
      reviews: 1234,
      link: "/devops-solutions",
      featured: true
    },
    {
      id: "infrastructure-automation",
      name: "Infrastructure Automation",
      description: "Intelligent infrastructure automation with self-healing systems and predictive maintenance",
      price: "From $2,499/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Infrastructure provisioning automation",
        "Self-healing systems",
        "Predictive maintenance",
        "Resource optimization",
        "Automated scaling",
        "Configuration drift detection",
        "Cost optimization",
        "Performance monitoring"
      ],
      benefits: [
        "Reduce manual operations",
        "Improve system reliability",
        "Optimize resource usage",
        "Lower operational costs"
      ],
      category: "DevOps",
      rating: 4.7,
      reviews: 789,
      link: "/infrastructure-automation",
      featured: false
    },

    // Network Infrastructure
    {
      id: "network-infrastructure",
      name: "Network Infrastructure Solutions",
      description: "Complete network design, implementation, and management with high availability and security",
      price: "From $2,999/month",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Network design & architecture",
        "Router & switch configuration",
        "Wireless network deployment",
        "Network security implementation",
        "Performance monitoring",
        "Network optimization",
        "Disaster recovery planning",
        "24/7 network support"
      ],
      benefits: [
        "Build reliable networks",
        "Improve network performance",
        "Ensure network security",
        "Reduce network downtime"
      ],
      category: "Network",
      rating: 4.8,
      reviews: 987,
      link: "/network-infrastructure",
      featured: true
    },
    {
      id: "sd-wan-solutions",
      name: "SD-WAN Solutions",
      description: "Software-defined WAN solutions for improved performance, security, and cost optimization",
      price: "From $1,999/month",
      icon: <Globe2 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "SD-WAN design & implementation",
        "Performance optimization",
        "Security integration",
        "Cost optimization",
        "Centralized management",
        "Quality of Service (QoS)",
        "Failover & redundancy",
        "Monitoring & analytics"
      ],
      benefits: [
        "Improve network performance",
        "Reduce WAN costs",
        "Enhance security",
        "Simplify management"
      ],
      category: "Network",
      rating: 4.7,
      reviews: 654,
      link: "/sd-wan-solutions",
      featured: false
    },

    // IT Support & Management
    {
      id: "managed-it-services",
      name: "Managed IT Services",
      description: "Comprehensive IT management with 24/7 support, monitoring, and proactive maintenance",
      price: "From $1,999/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "24/7 IT support & monitoring",
        "Proactive maintenance & updates",
        "Help desk services",
        "Asset management",
        "Security management",
        "Backup & disaster recovery",
        "Performance optimization",
        "Strategic IT planning"
      ],
      benefits: [
        "Reduce IT overhead",
        "Improve system reliability",
        "Enhance security posture",
        "Focus on core business"
      ],
      category: "Support",
      rating: 4.8,
      reviews: 1456,
      link: "/managed-it-services",
      featured: true
    },
    {
      id: "it-consulting",
      name: "IT Consulting Services",
      description: "Strategic IT consulting with technology roadmaps, digital transformation, and optimization",
      price: "From $299/hour",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "Technology strategy & planning",
        "Digital transformation consulting",
        "IT architecture design",
        "Technology assessment",
        "Vendor evaluation & selection",
        "Project management",
        "Change management",
        "Training & knowledge transfer"
      ],
      benefits: [
        "Align IT with business goals",
        "Optimize technology investments",
        "Accelerate digital transformation",
        "Improve IT efficiency"
      ],
      category: "Consulting",
      rating: 4.9,
      reviews: 876,
      link: "/it-consulting",
      featured: false
    },

    // Specialized Services
    {
      id: "blockchain-development",
      name: "Blockchain Development",
      description: "Enterprise blockchain solutions with smart contracts, DApps, and blockchain integration",
      price: "From $4,999/month",
      icon: <Layers className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Smart contract development",
        "DApp development",
        "Blockchain integration",
        "Cryptocurrency solutions",
        "NFT marketplace development",
        "DeFi applications",
        "Security auditing",
        "Blockchain consulting"
      ],
      benefits: [
        "Build secure blockchain solutions",
        "Enable decentralized applications",
        "Improve transparency",
        "Reduce transaction costs"
      ],
      category: "Blockchain",
      rating: 4.7,
      reviews: 432,
      link: "/blockchain-development",
      featured: false
    },
    {
      id: "iot-solutions",
      name: "IoT Solutions",
      description: "Internet of Things solutions with device management, data analytics, and connectivity",
      price: "From $3,999/month",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "IoT device development",
        "Connectivity solutions",
        "Data collection & analytics",
        "Device management platforms",
        "Security implementation",
        "Integration services",
        "Monitoring & maintenance",
        "Scalability planning"
      ],
      benefits: [
        "Connect and manage devices",
        "Collect valuable data",
        "Improve operational efficiency",
        "Enable predictive maintenance"
      ],
      category: "IoT",
      rating: 4.6,
      reviews: 567,
      link: "/iot-solutions",
      featured: false
    }
  ], []);

  const categories = useMemo(() => [
    { name: "All", count: itServices.length, active: selectedCategory === "All" },
    { name: "Cloud", count: itServices.filter(s => s.category === "Cloud").length, active: selectedCategory === "Cloud" },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length, active: selectedCategory === "Security" },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length, active: selectedCategory === "Development" },
    { name: "Database", count: itServices.filter(s => s.category === "Database").length, active: selectedCategory === "Database" },
    { name: "Data", count: itServices.filter(s => s.category === "Data").length, active: selectedCategory === "Data" },
    { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length, active: selectedCategory === "DevOps" },
    { name: "Network", count: itServices.filter(s => s.category === "Network").length, active: selectedCategory === "Network" },
    { name: "Support", count: itServices.filter(s => s.category === "Support").length, active: selectedCategory === "Support" },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length, active: selectedCategory === "Consulting" },
    { name: "Blockchain", count: itServices.filter(s => s.category === "Blockchain").length, active: selectedCategory === "Blockchain" },
    { name: "IoT", count: itServices.filter(s => s.category === "IoT").length, active: selectedCategory === "IoT" }
  ], [itServices, selectedCategory]);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") return itServices;
    return itServices.filter(service => service.category === selectedCategory);
  }, [itServices, selectedCategory]);

  const stats = [
    { number: "25+", label: "IT Services", icon: <Server className="w-6 h-6" /> },
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Enterprise Solutions Inc",
      role: "CTO",
      content: "Zion Tech Group's cloud migration services were exceptional. We achieved zero downtime and reduced our infrastructure costs by 45%.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Martinez",
      company: "Financial Services Corp",
      role: "IT Director",
      content: "Their cybersecurity solutions have given us peace of mind. We've had zero security incidents since implementation.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Platform",
      role: "VP Engineering",
      content: "The DevOps solutions accelerated our development cycles by 60%. Our team productivity has never been higher.",
      rating: 5,
      avatar: "RK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, web development, database management, DevOps, and network solutions. Transform your technology infrastructure."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, database management, DevOps, network solutions, managed IT services, IT consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  IT Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services designed to modernize your technology infrastructure, 
                enhance security, and accelerate your digital transformation journey.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">25+ IT services</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">500+ projects completed</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% uptime SLA</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get IT Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="py-8 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most comprehensive and trusted IT services for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.filter(service => service.featured).map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
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
        </div>

        {/* All Services Grid */}
        <div className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete IT services for every technology need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
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
        </div>

        {/* Testimonials */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Client Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how our IT services have transformed businesses across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
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
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your technology with our comprehensive IT services. 
              Get expert consultation and start your digital transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get IT Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}