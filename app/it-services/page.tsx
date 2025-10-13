import { ArrowRight, Server, Shield, Cloud, Database, Code, Smartphone, Globe, CheckCircle, Star, Users, Mail, Settings, Lock, Monitor, Zap, Cpu, Network, HardDrive, Wifi, Smartphone as PhoneIcon, BarChart3, Target, FileText, TrendingUp, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support for enterprise environments.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $249/month",
      features: [
        "Auto-scaling Infrastructure",
        "Disaster Recovery Planning",
        "Cost Optimization",
        "Security Hardening",
        "24/7 Monitoring",
        "Multi-cloud Support",
        "Backup & Recovery",
        "Performance Optimization"
      ],
      color: "from-blue-500 to-cyan-500",
      category: "Cloud Services",
      link: "/cloud-infrastructure",
      popular: true
    },
    {
      name: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, and compliance management. Protect your business from evolving cyber threats.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $399/month",
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Security Auditing",
        "Compliance Management",
        "Incident Response",
        "Security Training",
        "Penetration Testing",
        "24/7 Security Monitoring"
      ],
      color: "from-red-500 to-orange-500",
      category: "Security",
      link: "/cybersecurity-solutions",
      popular: true
    },
    {
      name: "Network Infrastructure",
      description: "Complete network design, implementation, and management services. From LAN/WAN setup to wireless networks and network security.",
      icon: <Network className="w-8 h-8" />,
      price: "From $199/month",
      features: [
        "Network Design & Planning",
        "Wireless Network Setup",
        "Network Security",
        "Performance Monitoring",
        "Troubleshooting & Support",
        "Network Optimization",
        "VPN Configuration",
        "Bandwidth Management"
      ],
      color: "from-green-500 to-emerald-500",
      category: "Networking",
      link: "/network-infrastructure"
    },
    {
      name: "Data Center Services",
      description: "Enterprise-grade data center solutions with high availability, redundancy, and scalability. Physical and virtual infrastructure management.",
      icon: <Server className="w-8 h-8" />,
      price: "From $499/month",
      features: [
        "Server Management",
        "Storage Solutions",
        "Backup & Recovery",
        "Disaster Recovery",
        "Hardware Maintenance",
        "Performance Tuning",
        "Capacity Planning",
        "24/7 Support"
      ],
      color: "from-purple-500 to-pink-500",
      category: "Infrastructure",
      link: "/data-center-services"
    },
    {
      name: "Database Management",
      description: "Comprehensive database administration, optimization, and maintenance services. Support for SQL, NoSQL, and cloud databases.",
      icon: <Database className="w-8 h-8" />,
      price: "From $179/month",
      features: [
        "Database Administration",
        "Performance Optimization",
        "Backup & Recovery",
        "Security Hardening",
        "Migration Services",
        "Monitoring & Alerting",
        "Query Optimization",
        "Capacity Planning"
      ],
      color: "from-indigo-500 to-purple-500",
      category: "Database",
      link: "/database-management"
    },
    {
      name: "IT Support & Helpdesk",
      description: "24/7 technical support and helpdesk services for your employees. Remote and on-site support with quick response times.",
      icon: <Users className="w-8 h-8" />,
      price: "From $99/month",
      features: [
        "24/7 Technical Support",
        "Remote Desktop Support",
        "On-site Support",
        "Hardware Troubleshooting",
        "Software Installation",
        "User Training",
        "Ticket Management",
        "SLA Guarantee"
      ],
      color: "from-teal-500 to-cyan-500",
      category: "Support",
      link: "/it-support-helpdesk"
    },
    {
      name: "Web Development Services",
      description: "Custom web applications, e-commerce solutions, and website development. Modern technologies and responsive design.",
      icon: <Code className="w-8 h-8" />,
      price: "From $299/month",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Security Implementation",
        "Maintenance & Updates",
        "Mobile Optimization"
      ],
      color: "from-yellow-500 to-orange-500",
      category: "Development",
      link: "/web-development-services"
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile application development for iOS and Android. From concept to app store deployment.",
      icon: <PhoneIcon className="w-8 h-8" />,
      price: "From $399/month",
      features: [
        "Native App Development",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Backend Integration",
        "Testing & QA",
        "Maintenance & Updates"
      ],
      color: "from-rose-500 to-pink-500",
      category: "Mobile Development",
      link: "/mobile-app-development"
    },
    {
      name: "IT Consulting & Strategy",
      description: "Strategic IT planning and consulting services. Technology roadmap development and digital transformation guidance.",
      icon: <Target className="w-8 h-8" />,
      price: "From $149/hour",
      features: [
        "IT Strategy Planning",
        "Technology Assessment",
        "Digital Transformation",
        "Vendor Management",
        "Cost Optimization",
        "Risk Assessment",
        "Compliance Consulting",
        "Project Management"
      ],
      color: "from-violet-500 to-purple-500",
      category: "Consulting",
      link: "/it-consulting-strategy"
    },
    {
      name: "System Integration",
      description: "Seamless integration of disparate systems and applications. API development and third-party integrations.",
      icon: <Settings className="w-8 h-8" />,
      price: "From $349/month",
      features: [
        "System Integration",
        "API Development",
        "Third-party Integrations",
        "Data Migration",
        "Workflow Automation",
        "Legacy System Modernization",
        "Testing & Validation",
        "Documentation & Training"
      ],
      color: "from-emerald-500 to-green-500",
      category: "Integration",
      link: "/system-integration"
    },
    {
      name: "IT Asset Management",
      description: "Comprehensive IT asset tracking, management, and optimization. Hardware and software inventory management.",
      icon: <HardDrive className="w-8 h-8" />,
      price: "From $79/month",
      features: [
        "Asset Inventory",
        "License Management",
        "Lifecycle Management",
        "Cost Tracking",
        "Compliance Reporting",
        "Asset Optimization",
        "Procurement Support",
        "Disposal Management"
      ],
      color: "from-amber-500 to-yellow-500",
      category: "Asset Management",
      link: "/it-asset-management"
    },
    {
      name: "Disaster Recovery & Business Continuity",
      description: "Comprehensive disaster recovery planning and business continuity services. Ensure your business can recover from any disruption.",
      icon: <Lock className="w-8 h-8" />,
      price: "From $199/month",
      features: [
        "Disaster Recovery Planning",
        "Business Continuity Planning",
        "Backup Strategy",
        "Recovery Testing",
        "Risk Assessment",
        "Emergency Response",
        "Documentation & Training",
        "Regular Updates"
      ],
      color: "from-cyan-500 to-blue-500",
      category: "Recovery",
      link: "/disaster-recovery-business-continuity"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, network management, database administration, web development, and more. Complete technology solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, network management, database administration, web development, mobile apps, IT consulting, system integration, disaster recovery"
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
              <span className="text-cyan-400 text-sm font-medium">Complete IT Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services and solutions for modern businesses. From cloud infrastructure to cybersecurity, 
              we provide end-to-end technology services that keep your business running smoothly and securely.
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
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">12+</div>
                <div className="text-gray-300 text-sm">IT Services</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300 text-sm">Clients Served</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-gray-300 text-sm">Client Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to support your business operations and drive digital transformation. 
                Choose from our wide range of professional technology solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="relative z-10">
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
                        <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                      <Link
                        to={service.link}
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

        {/* Contact Information Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses already using our IT services to optimize their technology infrastructure. 
                Contact us today for a personalized consultation and assessment.
              </p>
              
              {/* Contact Details */}
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
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your IT Journey
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
          </div>
        </section>
      </div>
    </>
  );
}
