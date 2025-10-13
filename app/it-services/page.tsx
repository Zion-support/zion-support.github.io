import { ArrowRight, Server, Shield, Cloud, Database, Code, Smartphone, Globe, Mail, Users, Star, CheckCircle, Clock, DollarSign, Wifi, Cpu, HardDrive, Network, Lock, Zap, BarChart3, Settings, Monitor } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      name: "Cloud Infrastructure Management",
      description: "Complete cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support for optimal performance and cost efficiency.",
      price: "From $249/month",
      originalPrice: "$399/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "24/7 Monitoring", "Multi-cloud Support"],
      category: "Infrastructure",
      link: "/cloud-infrastructure",
      popular: true
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, incident response, compliance management, and security training. Protect your business from evolving cyber threats.",
      price: "From $399/month",
      originalPrice: "$599/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Incident Response", "Compliance", "Security Training", "Penetration Testing", "Vulnerability Assessment"],
      category: "Security",
      link: "/cybersecurity-solutions",
      popular: true
    },
    {
      name: "Network Infrastructure",
      description: "Design, implement, and maintain robust network infrastructure. From LAN/WAN setup to wireless networks and network security, we ensure optimal connectivity.",
      price: "From $199/month",
      originalPrice: "$299/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["LAN/WAN Setup", "Wireless Networks", "Network Security", "Performance Monitoring", "Troubleshooting", "Upgrades"],
      category: "Networking",
      link: "/network-infrastructure"
    },
    {
      name: "Database Management",
      description: "Expert database administration, optimization, and maintenance services. Ensure data integrity, performance, and security for your critical business data.",
      price: "From $179/month",
      originalPrice: "$279/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Security", "Migration", "Monitoring"],
      category: "Data Management",
      link: "/database-management"
    },
    {
      name: "Server Administration",
      description: "Complete server management including setup, configuration, monitoring, and maintenance. Windows, Linux, and cloud server support with 24/7 monitoring.",
      price: "From $299/month",
      originalPrice: "$449/month",
      icon: <Server className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Server Setup", "Configuration", "Monitoring", "Maintenance", "Security", "Performance Tuning"],
      category: "Infrastructure",
      link: "/server-administration"
    },
    {
      name: "IT Support & Helpdesk",
      description: "24/7 technical support and helpdesk services. Remote and on-site support for all your IT needs with guaranteed response times and resolution.",
      price: "From $149/month",
      originalPrice: "$199/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["24/7 Support", "Remote Assistance", "On-site Visits", "Hardware Support", "Software Support", "Training"],
      category: "Support",
      link: "/it-support-helpdesk"
    },
    {
      name: "Software Development",
      description: "Custom software development services including web applications, mobile apps, and enterprise solutions. Full-stack development with modern technologies.",
      price: "From $399/month",
      originalPrice: "$599/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Web Development", "Mobile Apps", "API Development", "Database Design", "Testing", "Maintenance"],
      category: "Development",
      link: "/software-development"
    },
    {
      name: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions. Technology roadmaps, digital transformation, and IT strategy development.",
      price: "From $199/hour",
      originalPrice: "$299/hour",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Technology Roadmaps", "Digital Transformation", "IT Strategy", "Vendor Selection", "Cost Optimization", "Risk Assessment"],
      category: "Consulting",
      link: "/it-consulting"
    },
    {
      name: "Data Backup & Recovery",
      description: "Comprehensive data backup and disaster recovery solutions. Automated backups, off-site storage, and rapid recovery to minimize downtime.",
      price: "From $99/month",
      originalPrice: "$149/month",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      features: ["Automated Backups", "Off-site Storage", "Rapid Recovery", "Testing", "Compliance", "Monitoring"],
      category: "Data Management",
      link: "/data-backup-recovery"
    },
    {
      name: "5G Network Solutions",
      description: "Next-generation 5G network implementation and management. Ultra-low latency, massive IoT connectivity, and edge computing capabilities.",
      price: "Custom Pricing",
      originalPrice: null,
      icon: <Wifi className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: ["5G Implementation", "Edge Computing", "IoT Integration", "Performance Monitoring", "Security", "Optimization"],
      category: "5G Technology",
      link: "/5g-network-solutions"
    },
    {
      name: "IT Asset Management",
      description: "Complete IT asset lifecycle management including procurement, deployment, tracking, and disposal. Optimize your IT investments and ensure compliance.",
      price: "From $129/month",
      originalPrice: "$199/month",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: ["Asset Tracking", "Procurement", "Deployment", "Maintenance", "Disposal", "Reporting"],
      category: "Management",
      link: "/it-asset-management"
    },
    {
      name: "IT Compliance & Auditing",
      description: "Ensure your IT infrastructure meets industry standards and regulations. Compliance auditing, gap analysis, and remediation planning.",
      price: "From $299/month",
      originalPrice: "$449/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: ["Compliance Auditing", "Gap Analysis", "Remediation", "Documentation", "Training", "Monitoring"],
      category: "Compliance",
      link: "/it-compliance-auditing"
    }
  ];

  const categories = ["All", "Infrastructure", "Security", "Networking", "Data Management", "Support", "Development", "Consulting", "5G Technology", "Management", "Compliance"];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Star className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Manufacturing Corp",
      role: "IT Director",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their cloud solutions reduced our costs by 40% while improving performance significantly.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      company: "Financial Services",
      role: "CTO",
      content: "The cybersecurity solutions provided by Zion Tech Group have been exceptional. We've had zero security incidents since implementing their services.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      company: "Healthcare Systems",
      role: "IT Manager",
      content: "Their IT support team is incredibly responsive and knowledgeable. They've helped us maintain 99.9% uptime for our critical systems.",
      rating: 5,
      avatar: "RM"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions & Support</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, database administration, server management, and IT consulting. Professional IT solutions for businesses of all sizes."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, network management, database administration, server management, IT consulting, IT support, data backup, 5G solutions, IT compliance"
        />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Server className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Professional IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services designed to keep your business running smoothly and securely. 
              From cloud infrastructure to cybersecurity, we provide end-to-end IT solutions for modern businesses.
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
                <Settings className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category === "All"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
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
                  Our IT Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services designed to optimize your technology infrastructure, 
                enhance security, and drive business growth.
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
                  
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-sm text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">4.9</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
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
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our IT services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
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
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses already using our IT services to enhance their technology infrastructure, 
              improve security, and drive growth. Contact us today for a personalized consultation.
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your IT Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
                <Server className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
