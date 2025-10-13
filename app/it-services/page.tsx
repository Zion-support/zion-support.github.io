import { ArrowRight, Server, Shield, Cloud, Database, Network, Cpu, Smartphone, Globe, Users, Settings, Zap, CheckCircle, Star, Mail, Phone, Globe as GlobeIcon, Sparkles, Brain, Code, Lock, Monitor, Workflow, Target, BarChart3, Activity, Layers, Wifi, Smartphone as PhoneIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ITServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support for enterprise needs.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "24/7 Monitoring", "Multi-cloud Support"],
      category: "Infrastructure",
      rating: 4.9,
      users: "1,200+",
      benefits: ["99.9% uptime SLA", "50% cost reduction", "Automated scaling", "Global deployment", "Security compliance", "Expert support"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, incident response, compliance management, and security training for your organization.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Incident Response", "Compliance Management", "Security Training", "Vulnerability Assessment", "Penetration Testing"],
      category: "Security",
      rating: 4.8,
      users: "800+",
      benefits: ["99.9% threat detection", "24/7 monitoring", "Compliance automation", "Expert security team", "Incident response", "Security training"]
    },
    {
      title: "Network Infrastructure",
      description: "Design, implement, and manage robust network infrastructure including LAN, WAN, wireless, and SD-WAN solutions for optimal performance.",
      icon: <Network className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      features: ["Network Design", "Implementation", "Monitoring", "Optimization", "Security", "Maintenance"],
      category: "Infrastructure",
      rating: 4.7,
      users: "1,500+",
      benefits: ["High performance", "Scalable design", "Security integration", "24/7 monitoring", "Expert management", "Cost optimization"]
    },
    {
      title: "Database Management",
      description: "Expert database administration, optimization, backup, and recovery services for SQL, NoSQL, and cloud databases.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $179/month",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Security", "Monitoring", "Migration"],
      category: "Data",
      rating: 4.9,
      users: "900+",
      benefits: ["Performance optimization", "Data security", "Automated backups", "24/7 monitoring", "Expert DBA support", "Scalable solutions"]
    },
    {
      title: "Server Management",
      description: "Complete server administration including setup, configuration, monitoring, maintenance, and optimization for Windows and Linux servers.",
      icon: <Server className="w-8 h-8" />,
      path: "/server-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $149/month",
      features: ["Server Setup", "Configuration", "Monitoring", "Maintenance", "Security", "Backup"],
      category: "Infrastructure",
      rating: 4.8,
      users: "1,100+",
      benefits: ["99.9% uptime", "Expert administration", "Security hardening", "Performance tuning", "Automated maintenance", "24/7 support"]
    },
    {
      title: "IT Support & Helpdesk",
      description: "Professional IT support services with 24/7 helpdesk, remote assistance, and on-site support for all your technology needs.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-support",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $99/month",
      features: ["24/7 Helpdesk", "Remote Support", "On-site Support", "Ticket Management", "Knowledge Base", "Training"],
      category: "Support",
      rating: 4.9,
      users: "2,000+",
      benefits: ["24/7 availability", "Fast response times", "Expert technicians", "Proactive monitoring", "User training", "Documentation"]
    },
    {
      title: "Mobile Device Management",
      description: "Comprehensive mobile device management including device provisioning, security policies, app management, and remote wipe capabilities.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-device-management",
      color: "from-orange-500 to-red-500",
      price: "Starting at $79/month",
      features: ["Device Provisioning", "Security Policies", "App Management", "Remote Wipe", "Compliance", "Monitoring"],
      category: "Mobile",
      rating: 4.7,
      users: "1,300+",
      benefits: ["Centralized management", "Enhanced security", "Compliance automation", "Cost optimization", "User productivity", "Expert support"]
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions with automated backups, disaster recovery planning, and business continuity services.",
      icon: <Lock className="w-8 h-8" />,
      path: "/backup-disaster-recovery",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $129/month",
      features: ["Automated Backups", "Disaster Recovery", "Business Continuity", "Testing", "Monitoring", "Compliance"],
      category: "Data",
      rating: 4.8,
      users: "1,400+",
      benefits: ["Data protection", "Fast recovery", "Compliance ready", "Automated testing", "Expert planning", "24/7 monitoring"]
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting services to help you plan, design, and implement technology solutions that align with your business goals.",
      icon: <Brain className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $299/hour",
      features: ["Strategic Planning", "Technology Assessment", "Architecture Design", "Implementation", "Training", "Ongoing Support"],
      category: "Consulting",
      rating: 4.9,
      users: "500+",
      benefits: ["Strategic guidance", "Technology expertise", "Cost optimization", "Risk mitigation", "Innovation", "Best practices"]
    },
    {
      title: "Software Development",
      description: "Custom software development services including web applications, mobile apps, APIs, and enterprise software solutions.",
      icon: <Code className="w-8 h-8" />,
      path: "/software-development",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $89/hour",
      features: ["Web Development", "Mobile Apps", "API Development", "Database Design", "Testing", "Maintenance"],
      category: "Development",
      rating: 4.8,
      users: "600+",
      benefits: ["Custom solutions", "Modern technologies", "Agile development", "Quality assurance", "Ongoing support", "Scalable architecture"]
    },
    {
      title: "IT Project Management",
      description: "Professional project management services for IT implementations, migrations, and digital transformation projects.",
      icon: <Workflow className="w-8 h-8" />,
      path: "/it-project-management",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $199/hour",
      features: ["Project Planning", "Resource Management", "Timeline Management", "Risk Assessment", "Quality Control", "Reporting"],
      category: "Management",
      rating: 4.7,
      users: "400+",
      benefits: ["On-time delivery", "Budget control", "Risk mitigation", "Quality assurance", "Stakeholder communication", "Expert management"]
    },
    {
      title: "IT Training & Certification",
      description: "Comprehensive IT training programs and certification courses for your team to enhance their technical skills and knowledge.",
      icon: <Target className="w-8 h-8" />,
      path: "/it-training",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $149/person",
      features: ["Technical Training", "Certification Prep", "Hands-on Labs", "Custom Curriculum", "Online & On-site", "Certification"],
      category: "Training",
      rating: 4.9,
      users: "1,800+",
      benefits: ["Skill enhancement", "Certification support", "Flexible delivery", "Expert instructors", "Practical experience", "Career advancement"]
    }
  ];

  const categories = [
    { name: "All", count: itServices.length },
    { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length },
    { name: "Data", count: itServices.filter(s => s.category === "Data").length },
    { name: "Support", count: itServices.filter(s => s.category === "Support").length },
    { name: "Mobile", count: itServices.filter(s => s.category === "Mobile").length },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length },
    { name: "Management", count: itServices.filter(s => s.category === "Management").length },
    { name: "Training", count: itServices.filter(s => s.category === "Training").length }
  ];

  const stats = [
    { number: "5,000+", label: "IT Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "99.9%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, network management, database administration, server management, and IT support. Transform your technology infrastructure."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, network management, database administration, server management, IT support, mobile device management, backup disaster recovery, IT consulting, software development, project management, IT training"
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
              <span className="text-cyan-400 text-sm font-medium">Comprehensive IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services designed to optimize your technology infrastructure, enhance security, 
              and drive business growth. From cloud solutions to cybersecurity, we have everything you need.
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
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Professional IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of IT services designed to transform your technology infrastructure and drive business success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-white text-sm ml-1">{service.rating}</span>
                        </div>
                        <div className="text-gray-400 text-xs">{service.users} clients</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="text-cyan-400 text-xs font-medium bg-cyan-500/20 px-2 py-1 rounded-full border border-cyan-500/30">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{service.price}</div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400 px-2 py-1">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        to={service.path}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group-hover:scale-105"
                      >
                        Contact
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
              Join thousands of businesses already using our IT services to optimize their technology infrastructure and drive growth. 
              Contact us today for a personalized consultation.
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
                  <GlobeIcon className="w-6 h-6 text-white" />
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
                Start Your Journey
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
          </div>
        </section>
      </div>
    </>
  );
}