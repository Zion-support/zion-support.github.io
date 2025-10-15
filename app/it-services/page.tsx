import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Shield, Zap, Globe, Database, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';

export default function ItServices() {
  const itServices = [
    {
      title: "AI-Powered IT Infrastructure Management",
      description: "Advanced IT infrastructure management with AI-driven monitoring, predictive maintenance, and automated optimization for maximum uptime and performance.",
      icon: <Server className="w-8 h-8" />,
      price: "From $299/month",
      originalPrice: "$599/month",
      features: [
        "AI-powered 24/7 monitoring",
        "Predictive maintenance alerts",
        "Automated performance optimization",
        "Disaster recovery planning",
        "Multi-cloud infrastructure support",
        "Real-time health dashboards",
        "Automated scaling",
        "Cost optimization analysis"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Reduce downtime by 60%",
        "Lower infrastructure costs by 30%",
        "Proactive issue resolution"
      ],
      category: "Infrastructure",
      popular: true
    },
    {
      title: "Advanced Cybersecurity Solutions",
      description: "Comprehensive cybersecurity protection with AI threat detection, zero-trust architecture, and automated incident response.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $399/month",
      originalPrice: "$799/month",
      features: [
        "AI-powered threat detection",
        "Zero-trust network architecture",
        "Automated incident response",
        "Advanced firewall management",
        "Intrusion detection systems",
        "Security awareness training",
        "Compliance monitoring (GDPR, HIPAA, SOX)",
        "Penetration testing"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure regulatory compliance",
        "24/7 security monitoring"
      ],
      category: "Security",
      popular: true
    },
    {
      title: "Cloud Migration & Modernization",
      description: "Complete cloud transformation services with application modernization, data migration, and cloud-native architecture design.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $499/month",
      originalPrice: "$999/month",
      features: [
        "Application modernization",
        "Data migration strategies",
        "Cloud-native architecture design",
        "Multi-cloud management",
        "Cost optimization",
        "Security implementation",
        "Performance monitoring",
        "Disaster recovery setup"
      ],
      benefits: [
        "Reduce cloud costs by 40%",
        "Improve scalability",
        "Enhance security posture",
        "Faster time to market"
      ],
      category: "Cloud Services",
      popular: true
    },
    {
      title: "AI-Enhanced Database Management",
      description: "Intelligent database administration with AI-powered optimization, automated tuning, and predictive analytics for peak performance.",
      icon: <Database className="w-8 h-8" />,
      price: "From $249/month",
      originalPrice: "$499/month",
      features: [
        "AI-powered performance tuning",
        "Automated backup & recovery",
        "Query optimization",
        "Database security hardening",
        "Scalability planning",
        "Migration services",
        "Real-time monitoring",
        "Custom reporting"
      ],
      benefits: [
        "Improve query performance by 70%",
        "Reduce database costs by 35%",
        "Eliminate data loss risks",
        "Automated maintenance"
      ],
      category: "Database Services",
      popular: true
    },
    {
      title: "DevOps & CI/CD Pipeline Solutions",
      description: "Complete DevOps implementation with automated testing, continuous deployment, and infrastructure as code for faster delivery.",
      icon: <Zap className="w-8 h-8" />,
      price: "From $349/month",
      originalPrice: "$699/month",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as code",
        "Automated testing frameworks",
        "Container orchestration",
        "Monitoring & logging",
        "Security scanning",
        "Deployment automation",
        "Performance optimization"
      ],
      benefits: [
        "Deploy 10x faster",
        "Reduce deployment errors by 90%",
        "Improve code quality",
        "Streamline development workflow"
      ],
      category: "DevOps",
      popular: true
    },
    {
      title: "Network Infrastructure Design",
      description: "Complete network infrastructure solutions with SD-WAN, wireless optimization, and network security for enterprise environments.",
      icon: <Network className="w-8 h-8" />,
      price: "From $279/month",
      originalPrice: "$559/month",
      features: [
        "SD-WAN implementation",
        "Wireless network optimization",
        "Network security design",
        "Performance monitoring",
        "Load balancing",
        "VPN solutions",
        "Network segmentation",
        "Compliance auditing"
      ],
      benefits: [
        "Improve network performance by 50%",
        "Reduce network downtime by 80%",
        "Enhance security posture",
        "Optimize bandwidth usage"
      ],
      category: "Network Services",
      popular: true
    },
    {
      title: "IT Support & Help Desk Services",
      description: "24/7 IT support with AI-powered ticket routing, remote assistance, and proactive issue resolution for maximum productivity.",
      icon: <Headphones className="w-8 h-8" />,
      price: "From $129/month",
      originalPrice: "$259/month",
      features: [
        "24/7 technical support",
        "AI-powered ticket routing",
        "Remote assistance tools",
        "Proactive issue resolution",
        "User training programs",
        "Asset management",
        "Software licensing",
        "Mobile device management"
      ],
      benefits: [
        "Reduce support tickets by 60%",
        "Improve user satisfaction by 85%",
        "Faster issue resolution",
        "Proactive problem prevention"
      ],
      category: "Support Services",
      popular: true
    },
    {
      title: "AI-Powered Data Analytics Platform",
      description: "Advanced data analytics with machine learning insights, real-time dashboards, and automated reporting for data-driven decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $199/month",
      originalPrice: "$399/month",
      features: [
        "Machine learning insights",
        "Real-time dashboards",
        "Automated reporting",
        "Data visualization",
        "Predictive analytics",
        "Custom KPI tracking",
        "Data integration",
        "Mobile analytics"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify business opportunities",
        "Improve operational efficiency",
        "Real-time business insights"
      ],
      category: "Analytics",
      popular: true
    },
    {
      title: "Enterprise Backup & Disaster Recovery",
      description: "Comprehensive backup solutions with automated scheduling, disaster recovery planning, and business continuity services.",
      icon: <HardDrive className="w-8 h-8" />,
      price: "From $159/month",
      originalPrice: "$319/month",
      features: [
        "Automated backup scheduling",
        "Disaster recovery planning",
        "Data encryption",
        "Offsite storage",
        "Recovery testing",
        "Compliance reporting",
        "Multi-site replication",
        "Ransomware protection"
      ],
      benefits: [
        "Eliminate data loss risks",
        "Reduce recovery time by 90%",
        "Ensure business continuity",
        "Compliance assurance"
      ],
      category: "Data Protection",
      popular: true
    },
    {
      title: "IT Asset Management Solutions",
      description: "Complete IT asset lifecycle management with inventory tracking, license management, and cost optimization for hardware and software.",
      icon: <Settings className="w-8 h-8" />,
      price: "From $149/month",
      originalPrice: "$299/month",
      features: [
        "Asset inventory tracking",
        "License management",
        "Cost optimization",
        "Depreciation tracking",
        "Compliance reporting",
        "Vendor management",
        "Automated discovery",
        "Mobile asset tracking"
      ],
      benefits: [
        "Reduce IT costs by 25%",
        "Improve asset utilization",
        "Ensure compliance",
        "Streamline procurement"
      ],
      category: "Asset Management",
      popular: true
    },
    {
      title: "Mobile Device Management (MDM)",
      description: "Comprehensive mobile device management with security policies, app management, and remote device control for enterprise mobility.",
      icon: <Smartphone className="w-8 h-8" />,
      price: "From $89/month",
      originalPrice: "$179/month",
      features: [
        "Device enrollment & provisioning",
        "Security policy enforcement",
        "App management & distribution",
        "Remote device control",
        "Data encryption",
        "Compliance monitoring",
        "Lost device protection",
        "User self-service portal"
      ],
      benefits: [
        "Enhance mobile security",
        "Simplify device management",
        "Reduce support overhead",
        "Ensure compliance"
      ],
      category: "Mobile Management",
      popular: true
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting with technology roadmaps, digital transformation planning, and technology assessment for business growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $199/month",
      originalPrice: "$399/month",
      features: [
        "Technology roadmaps",
        "Digital transformation planning",
        "IT assessment & audit",
        "Vendor evaluation",
        "ROI analysis",
        "Technology selection",
        "Implementation guidance",
        "Change management"
      ],
      benefits: [
        "Align IT with business goals",
        "Optimize technology investments",
        "Reduce implementation risks",
        "Accelerate digital transformation"
      ],
      category: "Consulting",
      popular: true
    }
  ];

  const benefits = [
    {
      title: "24/7 AI-Powered Support",
      description: "Round-the-clock technical support with AI-powered ticket routing and proactive issue resolution",
      icon: <Clock className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Certified Expert Team",
      description: "Certified professionals with 10+ years of experience in enterprise IT solutions",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT costs by up to 40% with efficient management and automation",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "99.9% Uptime SLA",
      description: "Guaranteed uptime with proactive monitoring and automated failover",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI-Driven Insights",
      description: "Get actionable insights with AI-powered analytics and predictive maintenance",
      icon: <Brain className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business from startup to enterprise scale",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const categories = [
    { name: "All", count: itServices.length, active: true },
    { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length, active: false },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length, active: false },
    { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length, active: false },
    { name: "Database Services", count: itServices.filter(s => s.category === "Database Services").length, active: false },
    { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length, active: false },
    { name: "Network Services", count: itServices.filter(s => s.category === "Network Services").length, active: false },
    { name: "Support Services", count: itServices.filter(s => s.category === "Support Services").length, active: false },
    { name: "Analytics", count: itServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Data Protection", count: itServices.filter(s => s.category === "Data Protection").length, active: false },
    { name: "Asset Management", count: itServices.filter(s => s.category === "Asset Management").length, active: false },
    { name: "Mobile Management", count: itServices.filter(s => s.category === "Mobile Management").length, active: false },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length, active: false }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our entire IT infrastructure. The AI-powered monitoring has reduced our downtime by 80% and saved us thousands in costs.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The cloud migration service was exceptional. We moved to the cloud seamlessly and reduced our infrastructure costs by 40% while improving performance.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding cybersecurity solutions and 24/7 support. We've had zero security incidents since implementing their comprehensive security suite.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions</title>
        <meta
          name="description"
          content="Professional IT services including infrastructure management, network security, system administration, and cloud solutions from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="IT services, IT support, network security, system administration, cloud solutions, IT consulting, infrastructure management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional IT services to keep your business running smoothly and securely.
              From infrastructure management to cloud solutions, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

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

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered IT solutions tailored to meet your business needs and drive efficiency.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-cyan-400 mb-4">{service.icon}</div>
                  
                  <div className="mb-2">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center mb-4">
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-gray-500 line-through text-sm ml-2">{service.originalPrice}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-cyan-400 text-center">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </ul>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-green-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Choose Our IT Services?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of AI-powered IT management with our expert team and cutting-edge solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our IT services to drive growth and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
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
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI-powered IT experts help you streamline your technology infrastructure for maximum efficiency, security, and growth.
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your IT Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
