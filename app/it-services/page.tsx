import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Phone, Laptop, Headphones, Package, Heart, Receipt, Calendar, Clock, Award, Sparkles, CheckCircle, Star, Rocket, DollarSign, Zap as Lightning, Download, Play, Eye, PieChart, LineChart, Activity, MessageSquare, Image, Video, Mic, Search, Filter, Layers, Cpu as CpuIcon, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Wrench, CheckCircle2, AlertTriangle, RefreshCw, GitBranch, Terminal, Layers as LayersIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ITServices() {
  const itServices = [
    {
      title: "Cloud Migration & Infrastructure",
      description: "Complete cloud migration services with application modernization, data migration, and cloud-native architecture design for digital transformation.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-migration",
      color: "from-blue-500 to-cyan-500",
      price: "From $399/month",
      originalPrice: "$799/month",
      features: ["Application Migration", "Data Migration", "Cloud Architecture", "Performance Optimization", "Cost Optimization", "Security Implementation"],
      category: "Cloud Services",
      popular: true,
      capabilities: ["AWS Migration", "Azure Migration", "Google Cloud", "Multi-cloud Strategy"],
      useCases: ["Legacy System Modernization", "Scalability Enhancement", "Cost Reduction", "Disaster Recovery"]
    },
    {
      title: "DevOps & CI/CD Pipeline Solutions",
      description: "Complete DevOps implementation with continuous integration, deployment automation, container orchestration, and infrastructure as code.",
      icon: <GitBranch className="w-8 h-8" />,
      path: "/devops-services",
      color: "from-green-500 to-emerald-500",
      price: "From $229/month",
      originalPrice: "$459/month",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Automated Testing", "Deployment Automation", "Monitoring & Logging"],
      category: "DevOps",
      popular: true,
      capabilities: ["Docker & Kubernetes", "Jenkins & GitLab CI", "Terraform & Ansible", "Monitoring Solutions"],
      useCases: ["Faster Deployments", "Quality Assurance", "Infrastructure Management", "Team Collaboration"]
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting with technology roadmaps, digital transformation planning, and technology assessment for business growth and efficiency.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-purple-500 to-violet-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Technology Roadmaps", "Digital Transformation", "IT Assessment", "Strategic Planning", "Technology Selection", "Implementation Guidance"],
      category: "IT Consulting",
      capabilities: ["Technology Audit", "Digital Strategy", "Process Optimization", "Change Management"],
      useCases: ["Digital Transformation", "Technology Modernization", "Process Improvement", "Strategic Planning"]
    },
    {
      title: "Network Security & Infrastructure",
      description: "Comprehensive network security with firewall management, intrusion detection, VPN solutions, and threat intelligence for enterprise networks.",
      icon: <Shield className="w-8 h-8" />,
      path: "/network-security",
      color: "from-red-500 to-orange-500",
      price: "From $249/month",
      originalPrice: "$499/month",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Threat Intelligence", "Network Segmentation", "Compliance Auditing"],
      category: "Network Security",
      popular: true,
      capabilities: ["Next-Gen Firewalls", "Intrusion Prevention", "Network Monitoring", "Security Auditing"],
      useCases: ["Network Protection", "Compliance Management", "Threat Prevention", "Security Monitoring"]
    },
    {
      title: "Custom Software Development",
      description: "Native and cross-platform software development with modern frameworks, responsive design, and scalable architecture for business applications.",
      icon: <Code className="w-8 h-8" />,
      path: "/software-development",
      color: "from-indigo-500 to-purple-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Custom Applications", "Web Development", "Mobile Apps", "API Development", "Database Design", "UI/UX Design"],
      category: "Software Development",
      capabilities: ["Full-Stack Development", "Mobile Development", "API Integration", "Database Management"],
      useCases: ["Business Applications", "E-commerce Solutions", "Mobile Apps", "API Development"]
    },
    {
      title: "System Integration & API Management",
      description: "Seamless integration of disparate systems with API management, data synchronization, and workflow automation for unified business operations.",
      icon: <Layers className="w-8 h-8" />,
      path: "/system-integration",
      color: "from-teal-500 to-cyan-500",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["API Integration", "Data Synchronization", "Workflow Automation", "Legacy System Integration", "Real-time Processing", "Error Handling"],
      category: "System Integration",
      capabilities: ["API Gateway", "Data Transformation", "Workflow Orchestration", "System Monitoring"],
      useCases: ["Legacy Integration", "Data Synchronization", "Process Automation", "System Unification"]
    },
    {
      title: "Web Development & E-commerce",
      description: "Custom web application development with modern frameworks, responsive design, and scalable architecture for business applications and e-commerce.",
      icon: <Globe className="w-8 h-8" />,
      path: "/web-development",
      color: "from-cyan-500 to-blue-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Custom Web Apps", "Responsive Design", "E-commerce Solutions", "API Development", "Performance Optimization", "SEO Implementation"],
      category: "Web Development",
      capabilities: ["Frontend Development", "Backend Development", "E-commerce Platforms", "Performance Optimization"],
      useCases: ["Business Websites", "E-commerce Stores", "Web Applications", "Portfolio Sites"]
    },
    {
      title: "Database Management & Optimization",
      description: "Comprehensive database solutions with optimization, backup, recovery, and performance monitoring for enterprise applications and data warehouses.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-amber-500 to-yellow-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Database Optimization", "Backup & Recovery", "Performance Monitoring", "Security Hardening", "Scalability Planning", "Migration Services"],
      category: "Database Services",
      capabilities: ["Database Design", "Performance Tuning", "Backup Solutions", "Migration Services"],
      useCases: ["Database Optimization", "Data Migration", "Performance Improvement", "Backup Solutions"]
    },
    {
      title: "IT Support & Help Desk Services",
      description: "24/7 IT support with remote assistance, help desk management, and technical support for end users and IT infrastructure maintenance.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/it-support",
      color: "from-emerald-500 to-green-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["24/7 Support", "Remote Assistance", "Help Desk Management", "User Training", "Issue Resolution", "Preventive Maintenance"],
      category: "IT Support",
      capabilities: ["Remote Support", "Help Desk Software", "User Training", "Maintenance Services"],
      useCases: ["Technical Support", "User Assistance", "System Maintenance", "Training Services"]
    },
    {
      title: "Cybersecurity Audit & Compliance",
      description: "Comprehensive cybersecurity audits with compliance assessment, vulnerability testing, and security recommendations for regulatory requirements.",
      icon: <Lock className="w-8 h-8" />,
      path: "/cybersecurity-audit",
      color: "from-red-500 to-pink-500",
      price: "From $349/month",
      originalPrice: "$699/month",
      features: ["Security Audits", "Compliance Assessment", "Vulnerability Testing", "Penetration Testing", "Risk Assessment", "Remediation Planning"],
      category: "Cybersecurity",
      capabilities: ["Security Assessment", "Compliance Auditing", "Vulnerability Management", "Risk Analysis"],
      useCases: ["Security Audits", "Compliance Management", "Vulnerability Assessment", "Risk Management"]
    },
    {
      title: "Data Center Services & Colocation",
      description: "Secure data center services with colocation, managed hosting, and infrastructure services for enterprise applications and data storage.",
      icon: <Server className="w-8 h-8" />,
      path: "/data-center-services",
      color: "from-slate-600 to-gray-600",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Colocation Services", "Managed Hosting", "Power & Cooling", "Physical Security", "Network Connectivity", "24/7 Monitoring"],
      category: "Data Center",
      capabilities: ["Colocation", "Managed Services", "Infrastructure Management", "Monitoring Solutions"],
      useCases: ["Server Hosting", "Data Storage", "Infrastructure Management", "Disaster Recovery"]
    },
    {
      title: "IT Asset Management Solutions",
      description: "Complete IT asset management with inventory tracking, lifecycle management, and cost optimization for hardware and software assets.",
      icon: <Package className="w-8 h-8" />,
      path: "/asset-management",
      color: "from-violet-500 to-purple-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Asset Inventory", "Lifecycle Management", "Cost Tracking", "License Management", "Depreciation Tracking", "Compliance Reporting"],
      category: "Asset Management",
      capabilities: ["Asset Tracking", "License Management", "Cost Analysis", "Compliance Reporting"],
      useCases: ["Asset Tracking", "License Management", "Cost Optimization", "Compliance Management"]
    }
  ];

  const itCapabilities = [
    {
      title: "Cloud Computing & Migration",
      description: "Complete cloud solutions including migration, architecture design, and optimization for AWS, Azure, and Google Cloud platforms",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "DevOps & Automation",
      description: "End-to-end DevOps implementation with CI/CD pipelines, infrastructure as code, and automated deployment solutions",
      icon: <GitBranch className="w-8 h-8" />,
      technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Ansible", "Terraform"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions including threat detection, compliance management, and security auditing services",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Firewalls", "SIEM", "Penetration Testing", "Compliance Frameworks", "Threat Intelligence"]
    },
    {
      title: "Software Development",
      description: "Full-stack development services with modern frameworks, mobile development, and custom application solutions",
      icon: <Code className="w-8 h-8" />,
      technologies: ["React", "Node.js", "Python", "Java", "Mobile Development", "API Development"]
    },
    {
      title: "Database & Data Management",
      description: "Database design, optimization, and management services with backup, recovery, and performance monitoring",
      icon: <Database className="w-8 h-8" />,
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Data Warehousing", "ETL Processes"]
    },
    {
      title: "Network Infrastructure",
      description: "Network design, implementation, and management with security, monitoring, and optimization services",
      icon: <Network className="w-8 h-8" />,
      technologies: ["Cisco", "Juniper", "SD-WAN", "VPN", "Load Balancing", "Network Monitoring"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      solutions: ["HIPAA Compliance", "Electronic Health Records", "Telemedicine", "Data Security"],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Finance",
      icon: <DollarSign className="w-6 h-6" />,
      solutions: ["PCI Compliance", "Fraud Detection", "Risk Management", "Regulatory Reporting"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Manufacturing",
      icon: <Settings className="w-6 h-6" />,
      solutions: ["IoT Integration", "Supply Chain Management", "Quality Control", "Process Automation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Retail",
      icon: <Package className="w-6 h-6" />,
      solutions: ["E-commerce Platforms", "Inventory Management", "Customer Analytics", "Payment Processing"],
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "Education",
      icon: <Users className="w-6 h-6" />,
      solutions: ["Learning Management Systems", "Student Information Systems", "Online Learning", "Data Analytics"],
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Government",
      icon: <Building className="w-6 h-6" />,
      solutions: ["Citizen Services", "Data Security", "Compliance Management", "Digital Transformation"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle2 className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> },
    { number: "50+", label: "Certified Experts", icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Healthcare Solutions Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our entire IT infrastructure. The cloud migration was seamless, and we've seen a 40% improvement in system performance and 60% reduction in operational costs.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Robert Chen",
      company: "Financial Services Corp",
      role: "IT Director",
      content: "Their cybersecurity solutions are top-notch. We achieved full compliance with industry regulations and significantly improved our security posture. Highly recommended for any business serious about IT security.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Sarah Thompson",
      company: "E-commerce Platform",
      role: "VP of Technology",
      content: "The DevOps implementation was game-changing. We now deploy 10x faster with zero downtime. The team's expertise and dedication to our success is unmatched.",
      rating: 5,
      avatar: "ST"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Complete IT services including cloud migration, DevOps, cybersecurity, software development, system integration, and more. Transform your business with our comprehensive technology solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud migration, DevOps, cybersecurity, software development, system integration, web development, database management, IT consulting, IT support"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 IT Solutions Provider 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                IT Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services designed to accelerate your digital transformation. From cloud migration and DevOps 
              to cybersecurity and software development, we provide end-to-end technology solutions for modern businesses.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* IT Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  IT Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive IT capabilities cover all aspects of modern technology infrastructure and development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {capability.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT services designed to transform your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions are tailored for various industries and use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about working with Zion Tech Group
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our IT solutions to drive growth and efficiency. 
              Start your digital transformation journey today with our comprehensive suite of technology services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your IT Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ai-services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore AI Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}