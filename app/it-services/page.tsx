import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Smartphone, Monitor, Headphones, Clock, DollarSign, Globe, Lock, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp, Cpu, HardDrive, Wifi, Bluetooth, Usb, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Calendar, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ITServices() {
  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud transformation services including AWS, Azure, and Google Cloud Platform migration and optimization",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud strategy & planning",
        "AWS/Azure/GCP migration",
        "Cloud cost optimization",
        "Disaster recovery setup",
        "Auto-scaling configuration",
        "Security & compliance",
        "24/7 monitoring & support",
        "Performance optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability & flexibility",
        "Enhance security & compliance",
        "Increase system reliability"
      ],
      category: "Infrastructure",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-suite",
      name: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, and incident response",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "Compliance audits (SOC2, ISO27001)",
        "Firewall & endpoint protection",
        "Data encryption & backup"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure regulatory compliance",
        "Minimize business disruption"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-suite",
      featured: true
    },
    {
      id: "network-engineering",
      name: "Network Engineering & Optimization",
      description: "Enterprise network design, implementation, and optimization for maximum performance and reliability",
      price: "From $1,200/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Network architecture design",
        "WAN/LAN optimization",
        "SD-WAN implementation",
        "Network security hardening",
        "Performance monitoring",
        "Bandwidth optimization",
        "VoIP & unified communications",
        "Wireless network setup"
      ],
      benefits: [
        "Improve network performance by 60%",
        "Reduce downtime by 80%",
        "Enhance security posture",
        "Lower operational costs"
      ],
      category: "Networking",
      rating: 4.7,
      reviews: 1567,
      link: "/network-engineering",
      featured: true
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      description: "Expert database administration, optimization, and migration services for all major database platforms",
      price: "From $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Database design & architecture",
        "Performance tuning & optimization",
        "Backup & recovery strategies",
        "Database migration services",
        "High availability setup",
        "Security hardening",
        "Monitoring & alerting",
        "Capacity planning"
      ],
      benefits: [
        "Improve query performance by 70%",
        "Ensure 99.99% uptime",
        "Reduce storage costs by 30%",
        "Enhance data security"
      ],
      category: "Database",
      rating: 4.8,
      reviews: 1123,
      link: "/database-management",
      featured: false
    },
    {
      id: "devops-automation",
      name: "DevOps & Automation Services",
      description: "Complete DevOps transformation with CI/CD pipelines, infrastructure as code, and automated deployments",
      price: "From $2,000/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration (Kubernetes)",
        "Automated testing & deployment",
        "Monitoring & logging solutions",
        "Configuration management",
        "Release management",
        "Performance optimization"
      ],
      benefits: [
        "Deploy 10x faster",
        "Reduce deployment errors by 90%",
        "Improve team productivity",
        "Scale infrastructure efficiently"
      ],
      category: "DevOps",
      rating: 4.9,
      reviews: 1345,
      link: "/devops-automation",
      featured: false
    },
    {
      id: "helpdesk-support",
      name: "24/7 IT Helpdesk & Support",
      description: "Comprehensive IT support services with rapid response times and expert technical assistance",
      price: "From $800/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "24/7 technical support",
        "Remote desktop assistance",
        "Hardware & software support",
        "User training & onboarding",
        "Incident management",
        "Knowledge base maintenance",
        "SLA compliance monitoring",
        "Proactive maintenance"
      ],
      benefits: [
        "Reduce downtime by 75%",
        "Improve user satisfaction",
        "Lower support costs",
        "Increase productivity"
      ],
      category: "Support",
      rating: 4.7,
      reviews: 2156,
      link: "/helpdesk-support",
      featured: false
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile application development for iOS and Android platforms",
      price: "From $3,500/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design & optimization",
        "App store deployment",
        "Performance optimization",
        "Security implementation",
        "Backend integration",
        "Maintenance & updates"
      ],
      benefits: [
        "Reach mobile users effectively",
        "Improve customer engagement",
        "Increase revenue opportunities",
        "Stay competitive in market"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 987,
      link: "/mobile-app-development",
      featured: false
    },
    {
      id: "web-development",
      name: "Web Development & E-commerce",
      description: "Custom web applications, e-commerce solutions, and digital platforms for modern businesses",
      price: "From $2,200/month",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Custom web applications",
        "E-commerce platform development",
        "Content management systems",
        "API development & integration",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Security implementation"
      ],
      benefits: [
        "Increase online presence",
        "Boost conversion rates",
        "Improve user experience",
        "Scale with business growth"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 1456,
      link: "/web-development",
      featured: false
    },
    {
      id: "data-analytics",
      name: "Data Analytics & Business Intelligence",
      description: "Advanced data analytics solutions with real-time insights and predictive modeling capabilities",
      price: "From $1,800/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "Data warehouse design",
        "ETL/ELT pipeline development",
        "Real-time analytics dashboards",
        "Predictive modeling & ML",
        "Data visualization",
        "Report automation",
        "Data governance",
        "Performance monitoring"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify business opportunities",
        "Improve operational efficiency",
        "Increase competitive advantage"
      ],
      category: "Analytics",
      rating: 4.8,
      reviews: 1234,
      link: "/data-analytics",
      featured: false
    },
    {
      id: "it-consulting",
      name: "IT Strategy & Consulting",
      description: "Strategic IT consulting services to align technology with business objectives and drive digital transformation",
      price: "From $1,500/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "IT strategy development",
        "Digital transformation planning",
        "Technology assessment",
        "Vendor evaluation & selection",
        "Project management",
        "Change management",
        "ROI analysis",
        "Risk assessment"
      ],
      benefits: [
        "Align IT with business goals",
        "Optimize technology investments",
        "Reduce implementation risks",
        "Accelerate digital transformation"
      ],
      category: "Consulting",
      rating: 4.9,
      reviews: 876,
      link: "/it-consulting",
      featured: false
    },
    {
      id: "backup-disaster-recovery",
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity",
      price: "From $1,000/month",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Automated backup solutions",
        "Disaster recovery planning",
        "Business continuity testing",
        "Data replication services",
        "Recovery time optimization",
        "Compliance reporting",
        "24/7 monitoring",
        "Emergency response"
      ],
      benefits: [
        "Minimize data loss risks",
        "Ensure business continuity",
        "Meet compliance requirements",
        "Reduce recovery time"
      ],
      category: "Backup",
      rating: 4.7,
      reviews: 654,
      link: "/backup-disaster-recovery",
      featured: false
    },
    {
      id: "managed-it-services",
      name: "Managed IT Services",
      description: "Complete IT management services including monitoring, maintenance, and proactive support",
      price: "From $1,200/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: [
        "Proactive monitoring & maintenance",
        "Patch management",
        "Security updates",
        "Performance optimization",
        "Asset management",
        "License management",
        "Compliance monitoring",
        "Regular reporting"
      ],
      benefits: [
        "Reduce IT management overhead",
        "Improve system reliability",
        "Lower operational costs",
        "Focus on core business"
      ],
      category: "Managed Services",
      rating: 4.8,
      reviews: 1789,
      link: "/managed-it-services",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: itServices.length, active: true },
    { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length, active: false },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length, active: false },
    { name: "Networking", count: itServices.filter(s => s.category === "Networking").length, active: false },
    { name: "Database", count: itServices.filter(s => s.category === "Database").length, active: false },
    { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length, active: false },
    { name: "Support", count: itServices.filter(s => s.category === "Support").length, active: false },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length, active: false },
    { name: "Analytics", count: itServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length, active: false },
    { name: "Backup", count: itServices.filter(s => s.category === "Backup").length, active: false },
    { name: "Managed Services", count: itServices.filter(s => s.category === "Managed Services").length, active: false }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Global Manufacturing Corp",
      role: "CTO",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their cloud migration services reduced our costs by 45% while improving performance significantly.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Martinez",
      company: "Financial Services Inc",
      role: "IT Director",
      content: "The cybersecurity suite has been a game-changer. We've had zero security incidents since implementation, and our compliance audit was flawless.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Solutions",
      role: "CEO",
      content: "Their DevOps automation services helped us deploy 10x faster with zero downtime. The team is incredibly knowledgeable and responsive.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current IT infrastructure, identify pain points, and understand your business objectives.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive IT strategy aligned with your business goals and create a detailed implementation plan.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with minimal disruption to your business operations, ensuring smooth transitions.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security.",
      icon: <Monitor className="w-8 h-8" />
    }
  ];
    {
      title: "Cybersecurity Solutions",
      description: "Enterprise-grade security services including threat detection, vulnerability assessment, compliance management, and incident response.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Vulnerability Scanning", "Compliance Management", "Incident Response", "Security Training", "Penetration Testing"],
      category: "Security",
      popularity: "Enterprise"
    },
    {
      title: "Web Development Services",
      description: "Custom web applications, e-commerce solutions, and responsive websites built with modern technologies and best practices.",
      icon: <Code className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,999/project",
      features: ["Custom Development", "E-commerce Solutions", "Responsive Design", "SEO Optimization", "Performance Optimization", "Maintenance"],
      category: "Development",
      popularity: "Popular"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design and seamless performance.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $4,999/project",
      features: ["Native Development", "Cross-platform", "UI/UX Design", "App Store Optimization", "Push Notifications", "Analytics Integration"],
      category: "Development",
      popularity: "Trending"
    },
    {
      title: "Database Management",
      description: "Comprehensive database services including design, optimization, migration, backup, and performance tuning for all major database systems.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Database Design", "Performance Tuning", "Migration Services", "Backup & Recovery", "Security Hardening", "Monitoring"],
      category: "Data Services",
      popularity: "Recommended"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet specific business requirements with scalable architecture and modern development practices.",
      icon: <Settings className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $5,999/project",
      features: ["Custom Solutions", "Scalable Architecture", "API Development", "Integration Services", "Quality Assurance", "Documentation"],
      category: "Development",
      popularity: "Best Value"
    },
    {
      title: "Network Infrastructure",
      description: "Complete network design, implementation, and management including LAN, WAN, wireless networks, and network security solutions.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-orange-500 to-red-500",
      price: "Starting at $299/month",
      features: ["Network Design", "Implementation", "Security Configuration", "Performance Monitoring", "Troubleshooting", "Upgrades"],
      category: "Infrastructure",
      popularity: "Hot"
    },
    {
      title: "Data Analytics & BI",
      description: "Advanced data analytics services with business intelligence dashboards, reporting, and data visualization for informed decision making.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/data-analytics",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $179/month",
      features: ["Data Visualization", "Business Intelligence", "Custom Reports", "Data Integration", "Predictive Analytics", "Real-time Dashboards"],
      category: "Analytics",
      popularity: "New"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting services to help businesses align technology with business goals and optimize their IT infrastructure.",
      icon: <Brain className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $150/hour",
      features: ["IT Strategy", "Technology Assessment", "Digital Transformation", "Process Optimization", "Vendor Management", "ROI Analysis"],
      category: "Consulting",
      popularity: "Expert"
    },
    {
      title: "DevOps & CI/CD",
      description: "DevOps implementation with continuous integration, continuous deployment, and automated testing for faster, more reliable software delivery.",
      icon: <Zap className="w-8 h-8" />,
      path: "/devops-services",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $229/month",
      features: ["CI/CD Pipeline", "Automated Testing", "Infrastructure as Code", "Monitoring & Logging", "Deployment Automation", "Performance Optimization"],
      category: "DevOps",
      popularity: "Trending"
    },
    {
      title: "IT Support & Maintenance",
      description: "Comprehensive IT support services including help desk, system maintenance, updates, and troubleshooting for uninterrupted operations.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-support",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $99/month",
      features: ["24/7 Help Desk", "System Maintenance", "Software Updates", "Hardware Support", "Remote Assistance", "Preventive Maintenance"],
      category: "Support",
      popularity: "Essential"
    },
    {
      title: "Cloud Migration Services",
      description: "Seamless migration to cloud platforms with minimal downtime, data integrity, and optimized performance for your applications.",
      icon: <Server className="w-8 h-8" />,
      path: "/cloud-migration",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $1,999/project",
      features: ["Migration Planning", "Data Transfer", "Application Modernization", "Testing & Validation", "Go-live Support", "Post-migration Optimization"],
      category: "Cloud Services",
      popularity: "Popular"
    }
  ];

  const categories = ["All", "Cloud Services", "Security", "Development", "Data Services", "Infrastructure", "Analytics", "Consulting", "DevOps", "Support"];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "IT Services", icon: <Settings className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Enterprise Solutions Inc.",
      role: "CTO",
      content: "Zion's IT services transformed our entire infrastructure. The cloud migration was seamless and our systems are now 40% more efficient.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      company: "TechStart Ventures",
      role: "CEO",
      content: "Outstanding cybersecurity solutions and support. Our security posture improved dramatically with their comprehensive approach.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      company: "Digital Agency",
      role: "Operations Director",
      content: "The custom software development exceeded our expectations. Professional, reliable, and delivered on time and within budget.",
      rating: 5,
      avatar: "RM"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic IT Support",
      price: "$99",
      period: "/month",
      description: "Essential IT support for small businesses",
      features: [
        "24/7 Help Desk",
        "Remote Support",
        "Basic Maintenance",
        "Email Support",
        "System Monitoring",
        "Monthly Reports"
      ],
      popular: false
    },
    {
      name: "Professional IT Services",
      price: "$299",
      period: "/month",
      description: "Comprehensive IT services for growing businesses",
      features: [
        "All Basic Features",
        "Proactive Monitoring",
        "Security Management",
        "Cloud Services",
        "Priority Support",
        "Quarterly Reviews",
        "Backup & Recovery",
        "Software Updates"
      ],
      popular: true
    },
    {
      name: "Enterprise IT Solutions",
      price: "$599",
      period: "/month",
      description: "Full-service IT solutions for large organizations",
      features: [
        "All Professional Features",
        "Dedicated Account Manager",
        "Custom Solutions",
        "Advanced Security",
        "Disaster Recovery",
        "Compliance Management",
        "Strategic Consulting",
        "Unlimited Support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, network engineering, DevOps, and managed services. Transform your technology with expert solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud migration, cybersecurity, network engineering, DevOps, managed services, IT consulting, infrastructure, database management"
        />
      </Helmet>
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Professional IT services including cloud infrastructure, cybersecurity, network engineering, DevOps, and managed services. Transform your technology with expert solutions."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
                Comprehensive technology solutions to transform your business. From cloud infrastructure 
                to cybersecurity, we provide expert IT services that drive growth and innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">15+ years experience</span>
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
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Award className="mr-2 h-5 w-5" />
                  View Case Studies
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

        {/* Process Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Process
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
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
                  Featured Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most popular IT services trusted by leading organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.filter(service => service.featured).map((service, index) => (
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
                Comprehensive technology solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
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
                See how we've helped organizations transform their technology infrastructure
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
    </>
  );
}