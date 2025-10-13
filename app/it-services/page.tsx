import { ArrowRight, Cloud, Shield, Code, Smartphone, Database, Wifi, BarChart3, Server, Lock, Zap, Globe, Users, Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud migration, optimization, and management services. Multi-cloud and hybrid cloud solutions with 99.9% uptime guarantee.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-services",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Disaster Recovery", "24/7 Monitoring"],
      benefits: ["Cost Optimization", "Enhanced Security", "Scalability", "Global Reach"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, vulnerability assessment, and compliance management. Protect your business from evolving cyber threats.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Penetration Testing", "Compliance Audit", "Security Training"],
      benefits: ["Risk Mitigation", "Regulatory Compliance", "Data Protection", "Peace of Mind"]
    },
    {
      title: "Web Development Services",
      description: "Custom web applications, e-commerce solutions, and responsive websites. Modern frameworks and technologies for optimal performance and user experience.",
      icon: <Code className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,500/project",
      features: ["React/Next.js", "E-commerce", "SEO Optimization", "Mobile Responsive"],
      benefits: ["Custom Solutions", "Fast Loading", "SEO Ready", "Mobile First"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. From concept to deployment with ongoing support and maintenance.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $5,000/project",
      features: ["iOS/Android", "Cross-platform", "App Store Optimization", "Push Notifications"],
      benefits: ["Wide Reach", "User Engagement", "Offline Capability", "Native Performance"]
    },
    {
      title: "Database Management",
      description: "Database design, optimization, migration, and maintenance services. Ensure data integrity, performance, and security for your critical business data.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-blue-500",
      price: "Starting at $199/month",
      features: ["MySQL/PostgreSQL", "Performance Tuning", "Backup & Recovery", "Data Migration"],
      benefits: ["Data Integrity", "Performance Boost", "Automated Backups", "Expert Support"]
    },
    {
      title: "Network Infrastructure",
      description: "Complete network design, implementation, and management. From LAN/WAN setup to wireless solutions and network security implementation.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $149/month",
      features: ["LAN/WAN Setup", "Wireless Solutions", "Network Security", "Performance Monitoring"],
      benefits: ["Reliable Connectivity", "Enhanced Security", "Scalable Design", "Remote Management"]
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with our advanced analytics solutions. Custom dashboards, reporting, and business intelligence tools.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/data-analytics",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $249/month",
      features: ["Custom Dashboards", "Real-time Analytics", "Predictive Modeling", "Data Visualization"],
      benefits: ["Data-Driven Decisions", "Competitive Advantage", "Cost Reduction", "Growth Insights"]
    },
    {
      title: "Server Management",
      description: "Complete server administration, monitoring, and maintenance. Ensure optimal performance, security, and uptime for your critical infrastructure.",
      icon: <Server className="w-8 h-8" />,
      path: "/server-management",
      color: "from-gray-500 to-slate-500",
      price: "Starting at $179/month",
      features: ["24/7 Monitoring", "Performance Optimization", "Security Hardening", "Backup Management"],
      benefits: ["Maximum Uptime", "Proactive Maintenance", "Security Updates", "Expert Administration"]
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT planning and consulting services. Technology roadmaps, digital transformation, and IT governance to align technology with business goals.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $150/hour",
      features: ["Technology Roadmap", "Digital Transformation", "IT Governance", "Vendor Management"],
      benefits: ["Strategic Alignment", "Cost Optimization", "Technology Innovation", "Risk Management"]
    }
  ];

  const additionalServices = [
    {
      title: "IT Support & Helpdesk",
      description: "24/7 technical support and helpdesk services for your employees and customers.",
      price: "Starting at $99/month per user"
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to protect your business data.",
      price: "Starting at $129/month"
    },
    {
      title: "Email & Communication Systems",
      description: "Email hosting, collaboration tools, and communication system setup and management.",
      price: "Starting at $79/month per user"
    },
    {
      title: "Software Licensing & Management",
      description: "Software procurement, licensing management, and compliance monitoring for your organization.",
      price: "Starting at $49/month per user"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and network solutions. Professional IT support for businesses of all sizes."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure, data analytics, server management, IT consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}IT Services
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation. 
              From cloud infrastructure to cybersecurity, we provide end-to-end technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  IT Solutions & Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of IT services designed to transform your business infrastructure and operations.
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
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
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

        {/* Additional Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Additional IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT support and management services to keep your business running smoothly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-3">{service.description}</p>
                  <div className="text-green-400 font-bold">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses already using our IT solutions to drive growth and innovation. 
                Contact us today for a personalized consultation and free IT assessment.
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
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your IT Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free IT Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
