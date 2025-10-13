import { ArrowRight, Server, Shield, Cloud, Database, Code, Smartphone, Globe, Users, Settings, CheckCircle, Star, Mail, Phone, MapPin, Zap, Target, TrendingUp, Lock, Wifi, Cpu, HardDrive } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud transformation services including AWS, Azure, and Google Cloud migration, optimization, and management. Reduce costs and improve scalability.",
      price: "Starting at $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization", "Disaster Recovery", "24/7 Monitoring"],
      link: "/cloud-infrastructure",
      category: "Infrastructure",
      popular: true
    },
    {
      name: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions including vulnerability assessments, penetration testing, compliance audits, and incident response. Protect your business from threats.",
      price: "Starting at $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Security Audits", "Penetration Testing", "Compliance (SOC2, GDPR)", "Incident Response", "Security Training", "Threat Monitoring"],
      link: "/cybersecurity",
      category: "Security",
      popular: true
    },
    {
      name: "Network Infrastructure & Design",
      description: "Complete network solutions including design, implementation, and management of enterprise networks, wireless systems, and network security.",
      price: "Starting at $1,200/month",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Network Design", "Wireless Solutions", "VPN Setup", "Network Security", "Performance Optimization", "Remote Access"],
      link: "/network-infrastructure",
      category: "Networking"
    },
    {
      name: "Database Management & Optimization",
      description: "Expert database services including design, optimization, backup, recovery, and migration. Ensure your data is secure, fast, and reliable.",
      price: "Starting at $900/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Data Migration", "Security Hardening", "Monitoring"],
      link: "/database-management",
      category: "Database"
    },
    {
      name: "DevOps & CI/CD Implementation",
      description: "Streamline your development process with automated deployment pipelines, containerization, and infrastructure automation. Accelerate your software delivery.",
      price: "Starting at $1,500/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["CI/CD Pipelines", "Containerization", "Infrastructure Automation", "Monitoring & Logging", "Version Control", "Testing Automation"],
      link: "/devops-solutions",
      category: "DevOps",
      popular: true
    },
    {
      name: "IT Support & Help Desk",
      description: "Comprehensive IT support services including help desk, remote assistance, system maintenance, and user training. Keep your team productive.",
      price: "Starting at $800/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: ["24/7 Help Desk", "Remote Support", "System Maintenance", "User Training", "Hardware Support", "Software Installation"],
      link: "/it-support",
      category: "Support"
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile app development for iOS and Android. From concept to deployment, we create apps that users love.",
      price: "Starting at $5,000/project",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Native iOS/Android", "Cross-platform", "UI/UX Design", "API Integration", "App Store Deployment", "Maintenance & Updates"],
      link: "/mobile-app-development",
      category: "Development"
    },
    {
      name: "Web Development & E-commerce",
      description: "Custom web applications and e-commerce solutions built with modern technologies. Responsive, secure, and scalable websites that drive business growth.",
      price: "Starting at $3,500/project",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Custom Web Apps", "E-commerce Solutions", "Responsive Design", "SEO Optimization", "Performance Tuning", "Security Implementation"],
      link: "/web-development",
      category: "Development"
    },
    {
      name: "Data Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with custom analytics solutions, dashboards, and reporting systems. Make data-driven decisions.",
      price: "Starting at $1,400/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: ["Custom Dashboards", "Data Visualization", "ETL Processes", "Predictive Analytics", "Report Automation", "Data Integration"],
      link: "/data-analytics",
      category: "Analytics"
    },
    {
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting to align technology with business goals. Technology roadmaps, digital transformation, and IT governance.",
      price: "Starting at $200/hour",
      icon: <Target className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["IT Strategy", "Digital Transformation", "Technology Roadmaps", "Vendor Management", "Cost Optimization", "Risk Assessment"],
      link: "/it-consulting",
      category: "Consulting"
    },
    {
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning. Ensure business continuity with automated backups and quick recovery procedures.",
      price: "Starting at $600/month",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: ["Automated Backups", "Disaster Recovery Planning", "Data Replication", "Recovery Testing", "Cloud Storage", "Business Continuity"],
      link: "/backup-recovery",
      category: "Infrastructure"
    },
    {
      name: "IT Security Training & Awareness",
      description: "Comprehensive security training programs for your team. Phishing simulation, security awareness, and best practices to reduce human risk.",
      price: "Starting at $500/session",
      icon: <Lock className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Security Training", "Phishing Simulation", "Policy Development", "Compliance Training", "Incident Response", "Security Awareness"],
      link: "/security-training",
      category: "Security"
    }
  ];

  const categories = ["All", "Infrastructure", "Security", "Networking", "Database", "DevOps", "Support", "Development", "Analytics", "Consulting"];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Manufacturing Corp",
      role: "IT Director",
      content: "Zion Tech Group transformed our entire IT infrastructure. The cloud migration reduced our costs by 40% while improving performance and security.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      company: "Healthcare Systems",
      role: "CTO",
      content: "Their cybersecurity services are exceptional. We passed our SOC2 audit on the first try and our security posture has never been stronger.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      company: "Financial Services",
      role: "VP Technology",
      content: "The DevOps implementation accelerated our deployment cycles by 300%. Our development team is now more productive than ever.",
      rating: 5,
      avatar: "RM"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Server className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, network design, database management, DevOps, mobile development, and IT consulting. Transform your business with expert technology solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, network design, database management, DevOps, mobile development, web development, data analytics, IT consulting, backup recovery, security training"
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
              <span className="text-cyan-400 text-sm font-medium">15+ Years of IT Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}IT Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions to accelerate your business growth and digital transformation. 
              From cloud infrastructure to cybersecurity, we provide end-to-end IT services that drive innovation.
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to accelerate your business growth and digital transformation.
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
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group-hover:scale-105"
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses already using our IT services to drive growth and innovation. 
                Contact us today for a personalized consultation.
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
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Explore All Services
                  <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
