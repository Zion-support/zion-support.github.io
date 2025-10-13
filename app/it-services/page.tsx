import { ArrowRight, Cloud, Shield, Code, Database, Smartphone, Globe, Server, Wifi, BarChart3, Users, Mail, CheckCircle, Star, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $249/month",
      features: [
        "Auto-scaling Infrastructure",
        "Disaster Recovery Planning",
        "Cost Optimization",
        "Security Hardening",
        "24/7 Monitoring",
        "Multi-cloud Support",
        "Backup & Restore",
        "Performance Optimization"
      ],
      popular: true,
      category: "Infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: [
        "Threat Detection & Response",
        "Security Auditing",
        "Compliance Management",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Incident Response",
        "Security Training",
        "24/7 SOC Monitoring"
      ],
      popular: false,
      category: "Security"
    },
    {
      title: "Web Development Services",
      description: "Custom web applications and websites built with modern technologies, responsive design, and optimal performance.",
      icon: <Code className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,500/project",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "E-commerce Solutions",
        "CMS Development",
        "API Integration",
        "Maintenance & Support"
      ],
      popular: false,
      category: "Development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design and backend integration.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $5,000/project",
      features: [
        "iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "Backend Integration",
        "App Store Publishing",
        "Push Notifications",
        "Analytics Integration",
        "Maintenance & Updates"
      ],
      popular: false,
      category: "Development"
    },
    {
      title: "Database Management",
      description: "Comprehensive database solutions including design, optimization, migration, and maintenance for all major database systems.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      features: [
        "Database Design & Architecture",
        "Performance Optimization",
        "Data Migration",
        "Backup & Recovery",
        "Security Hardening",
        "Monitoring & Maintenance",
        "Scalability Planning",
        "24/7 Support"
      ],
      popular: false,
      category: "Data"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and integrate seamlessly with existing systems.",
      icon: <Code className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $3,500/project",
      features: [
        "Custom Application Development",
        "System Integration",
        "API Development",
        "Legacy System Modernization",
        "Workflow Automation",
        "Quality Assurance",
        "Documentation",
        "Training & Support"
      ],
      popular: false,
      category: "Development"
    },
    {
      title: "Network Infrastructure",
      description: "Complete network design, implementation, and management including LAN, WAN, wireless, and security infrastructure.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $299/month",
      features: [
        "Network Design & Planning",
        "Hardware Installation",
        "Wireless Solutions",
        "Network Security",
        "Performance Monitoring",
        "Troubleshooting",
        "Upgrades & Maintenance",
        "Remote Management"
      ],
      popular: false,
      category: "Infrastructure"
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/data-analytics",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $179/month",
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Custom Dashboards",
        "ETL Processes",
        "Real-time Reporting",
        "Data Warehousing",
        "Machine Learning",
        "Business Intelligence"
      ],
      popular: false,
      category: "Data"
    },
    {
      title: "Server Management",
      description: "Comprehensive server administration including setup, configuration, monitoring, and maintenance for all server types.",
      icon: <Server className="w-8 h-8" />,
      path: "/server-management",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $149/month",
      features: [
        "Server Setup & Configuration",
        "Performance Monitoring",
        "Security Hardening",
        "Backup & Recovery",
        "Patch Management",
        "Load Balancing",
        "Disaster Recovery",
        "24/7 Monitoring"
      ],
      popular: false,
      category: "Infrastructure"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting services to help you plan, implement, and optimize your technology infrastructure and processes.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $150/hour",
      features: [
        "IT Strategy Planning",
        "Technology Assessment",
        "Digital Transformation",
        "Process Optimization",
        "Vendor Management",
        "Project Management",
        "Training & Education",
        "Ongoing Support"
      ],
      popular: false,
      category: "Consulting"
    },
    {
      title: "Email & Communication Systems",
      description: "Complete email and communication infrastructure including setup, migration, security, and management services.",
      icon: <Mail className="w-8 h-8" />,
      path: "/email-systems",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $99/month",
      features: [
        "Email Server Setup",
        "Migration Services",
        "Spam Protection",
        "Email Security",
        "Backup & Archiving",
        "Mobile Device Management",
        "User Training",
        "Technical Support"
      ],
      popular: false,
      category: "Communication"
    },
    {
      title: "IT Support & Helpdesk",
      description: "Comprehensive IT support services including helpdesk, remote assistance, and on-site support for all your technology needs.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-support",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $79/month",
      features: [
        "24/7 Helpdesk Support",
        "Remote Assistance",
        "On-site Support",
        "Hardware Maintenance",
        "Software Installation",
        "User Training",
        "Troubleshooting",
        "Preventive Maintenance"
      ],
      popular: false,
      category: "Support"
    }
  ];

  const categories = [
    { name: "All", count: itServices.length },
    { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length },
    { name: "Data", count: itServices.filter(s => s.category === "Data").length },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length },
    { name: "Communication", count: itServices.filter(s => s.category === "Communication").length },
    { name: "Support", count: itServices.filter(s => s.category === "Support").length }
  ];

  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience in enterprise IT solutions",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support for all your IT infrastructure",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Flexible services that grow with your business needs and requirements",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards for all implementations",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Enterprise Technology Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and custom software solutions. Enterprise-grade technology services."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, custom software, network infrastructure, data analytics, IT consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Star className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">12+ IT Services Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              IT Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 animate-pulse">
                {" "}& Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services and technology solutions designed to accelerate your business growth and digital transformation. 
              From cloud infrastructure to custom development, we provide end-to-end technology services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses that need reliable, scalable, and secure technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of enterprise-grade IT services and solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden ${
                    service.popular ? 'ring-2 ring-green-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
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
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-green-400 font-bold text-lg mb-2">
                        {service.price}
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-gray-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all duration-300"
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our IT services to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Pricing
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}