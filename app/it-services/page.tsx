import { ArrowRight, Server, Shield, Cloud, Database, Code, Smartphone, Globe, Wifi, Settings, Users, Lock, BarChart3, Headphones, CheckCircle, Star, Sparkles, Mail, Smartphone as Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support for enterprise needs.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "From $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "24/7 Monitoring"],
      category: "Cloud Computing",
      popular: true
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced cybersecurity protection with threat detection, vulnerability assessment, and compliance management for enterprise security.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500",
      price: "From $399/month",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Incident Response", "Security Training"],
      category: "Security",
      popular: true
    },
    {
      title: "Network Infrastructure",
      description: "Complete network design, implementation, and management services including LAN, WAN, and wireless solutions for businesses of all sizes.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      features: ["Network Design", "Implementation", "Performance Monitoring", "Troubleshooting", "Upgrade Planning"],
      category: "Networking"
    },
    {
      title: "Database Management",
      description: "Professional database administration, optimization, and maintenance services for MySQL, PostgreSQL, MongoDB, and enterprise databases.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-purple-500 to-pink-500",
      price: "From $179/month",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Security Hardening", "Migration Services"],
      category: "Database"
    },
    {
      title: "IT Support & Help Desk",
      description: "Comprehensive IT support services with 24/7 help desk, remote assistance, and on-site support for all your technology needs.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/it-support-helpdesk",
      color: "from-indigo-500 to-purple-500",
      price: "From $149/month",
      features: ["24/7 Support", "Remote Assistance", "On-site Support", "Ticket Management", "Knowledge Base"],
      category: "Support",
      popular: true
    },
    {
      title: "Server Administration",
      description: "Professional server management including Windows Server, Linux, and cloud server administration with monitoring and maintenance.",
      icon: <Server className="w-8 h-8" />,
      path: "/server-administration",
      color: "from-teal-500 to-cyan-500",
      price: "From $229/month",
      features: ["Server Setup", "Performance Monitoring", "Security Updates", "Backup Management", "Capacity Planning"],
      category: "Server Management"
    },
    {
      title: "Web Development Services",
      description: "Custom web development including responsive websites, web applications, e-commerce solutions, and API development.",
      icon: <Code className="w-8 h-8" />,
      path: "/web-development",
      color: "from-yellow-500 to-orange-500",
      price: "From $299/month",
      features: ["Custom Development", "Responsive Design", "E-commerce Solutions", "API Development", "Maintenance"],
      category: "Development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile app development for iOS and Android with modern frameworks and best practices.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-app-development",
      color: "from-pink-500 to-rose-500",
      price: "From $399/month",
      features: ["Native Development", "Cross-platform", "UI/UX Design", "App Store Optimization", "Maintenance"],
      category: "Mobile Development"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting services to help businesses plan, implement, and optimize their technology infrastructure and processes.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-amber-500 to-yellow-500",
      price: "From $199/hour",
      features: ["Technology Strategy", "Infrastructure Planning", "Digital Transformation", "Process Optimization", "Vendor Management"],
      category: "Consulting"
    },
    {
      title: "Data Backup & Recovery",
      description: "Comprehensive data backup solutions with automated backups, disaster recovery planning, and data restoration services.",
      icon: <Database className="w-8 h-8" />,
      path: "/data-backup-recovery",
      color: "from-emerald-500 to-green-500",
      price: "From $129/month",
      features: ["Automated Backups", "Disaster Recovery", "Data Restoration", "Offsite Storage", "Testing & Validation"],
      category: "Data Management"
    },
    {
      title: "Email & Communication Systems",
      description: "Enterprise email solutions, collaboration tools, and communication system setup and management for improved productivity.",
      icon: <Mail className="w-8 h-8" />,
      path: "/email-communication-systems",
      color: "from-violet-500 to-purple-500",
      price: "From $89/month",
      features: ["Email Hosting", "Collaboration Tools", "Security Features", "Migration Services", "User Training"],
      category: "Communication"
    },
    {
      title: "IT Asset Management",
      description: "Complete IT asset lifecycle management including procurement, deployment, tracking, and disposal of IT equipment and software.",
      icon: <Settings className="w-8 h-8" />,
      path: "/it-asset-management",
      color: "from-slate-500 to-gray-500",
      price: "From $159/month",
      features: ["Asset Tracking", "Procurement Management", "License Management", "Lifecycle Planning", "Disposal Services"],
      category: "Asset Management"
    },
    {
      title: "Network Security",
      description: "Advanced network security solutions including firewall management, intrusion detection, and network monitoring services.",
      icon: <Lock className="w-8 h-8" />,
      path: "/network-security",
      color: "from-red-500 to-pink-500",
      price: "From $279/month",
      features: ["Firewall Management", "Intrusion Detection", "Network Monitoring", "Security Audits", "Incident Response"],
      category: "Security"
    },
    {
      title: "Cloud Migration Services",
      description: "Professional cloud migration services to help businesses move their infrastructure and applications to the cloud securely.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-migration",
      color: "from-cyan-500 to-blue-500",
      price: "From $499/month",
      features: ["Migration Planning", "Data Transfer", "Application Migration", "Testing & Validation", "Post-migration Support"],
      category: "Cloud Computing"
    },
    {
      title: "IT Training & Education",
      description: "Comprehensive IT training programs for your team including technology workshops, certification preparation, and skill development.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-training-education",
      color: "from-orange-500 to-red-500",
      price: "From $99/person",
      features: ["Technology Workshops", "Certification Prep", "Skill Assessment", "Custom Training", "Online Learning"],
      category: "Training"
    },
    {
      title: "IT Compliance & Auditing",
      description: "IT compliance services including security audits, regulatory compliance, and risk assessment for various industry standards.",
      icon: <CheckCircle className="w-8 h-8" />,
      path: "/it-compliance-auditing",
      color: "from-lime-500 to-green-500",
      price: "From $349/month",
      features: ["Security Audits", "Compliance Assessment", "Risk Analysis", "Documentation", "Remediation Planning"],
      category: "Compliance"
    },
    {
      title: "Remote Work Solutions",
      description: "Complete remote work infrastructure including VPN setup, collaboration tools, and secure remote access solutions.",
      icon: <Globe className="w-8 h-8" />,
      path: "/remote-work-solutions",
      color: "from-sky-500 to-blue-500",
      price: "From $199/month",
      features: ["VPN Setup", "Collaboration Tools", "Secure Access", "Device Management", "Support Services"],
      category: "Remote Work"
    },
    {
      title: "IT Project Management",
      description: "Professional IT project management services for complex technology implementations and digital transformation projects.",
      icon: <Settings className="w-8 h-8" />,
      path: "/it-project-management",
      color: "from-rose-500 to-pink-500",
      price: "From $179/hour",
      features: ["Project Planning", "Resource Management", "Timeline Management", "Risk Assessment", "Quality Assurance"],
      category: "Project Management"
    },
    {
      title: "IT Maintenance & Support",
      description: "Ongoing IT maintenance services including system updates, performance optimization, and proactive monitoring for optimal performance.",
      icon: <Settings className="w-8 h-8" />,
      path: "/it-maintenance-support",
      color: "from-emerald-500 to-teal-500",
      price: "From $119/month",
      features: ["System Updates", "Performance Optimization", "Proactive Monitoring", "Preventive Maintenance", "Issue Resolution"],
      category: "Maintenance"
    }
  ];

  const categories = [
    "All", "Cloud Computing", "Security", "Networking", "Database", "Support", 
    "Server Management", "Development", "Mobile Development", "Consulting", 
    "Data Management", "Communication", "Asset Management", "Training", 
    "Compliance", "Remote Work", "Project Management", "Maintenance"
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, network management, database administration, and more. 18+ IT solutions starting from $89/month."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, network management, database administration, server management, web development, mobile development, IT consulting, IT support"
        />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Server className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">18+ IT Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services and technology solutions for modern businesses. 
              From cloud infrastructure to cybersecurity, we provide end-to-end IT support to keep your business running smoothly.
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
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">18+</div>
                <div className="text-gray-300 text-sm">IT Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">5,000+</div>
                <div className="text-gray-300 text-sm">IT Clients</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-gray-300 text-sm">Client Rating</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300 text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
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
                Comprehensive IT services designed to support your business technology needs. 
                From infrastructure management to security solutions, we have everything you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Get Started
                      </Link>
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
              Join thousands of businesses already using our IT services to optimize their technology infrastructure. 
              Start your digital transformation journey today with our comprehensive suite of IT solutions.
            </p>
            
            {/* Contact Information */}
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
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your IT Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free IT Consultation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}