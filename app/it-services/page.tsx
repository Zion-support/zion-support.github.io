import { ArrowRight, Shield, Cloud, Code, Database, Wifi, Server, Smartphone, Globe, Settings, Lock, RefreshCw, Eye, Download, Upload, Search, Filter, Bell, MessageSquare, Calendar, PieChart, LineChart, BarChart, Activity, AlertTriangle, CheckCircle2, XCircle, Info, ExternalLink, Mail, Phone, MapPin, Play, TrendingUp, Clock, Star, CheckCircle, Bot, Users, Target, FileText, Brain, Zap, BarChart3, Database as DatabaseIcon, Code as CodeIcon, Brain as BrainIcon, BarChart3 as BarChart3Icon, Users as UsersIcon, Target as TargetIcon, FileText as FileTextIcon, Settings as SettingsIcon, Lock as LockIcon, RefreshCw as RefreshCwIcon, Eye as EyeIcon, Download as DownloadIcon, Upload as UploadIcon, Search as SearchIcon, Filter as FilterIcon, Bell as BellIcon, MessageSquare as MessageSquareIcon, Calendar as CalendarIcon, PieChart as PieChartIcon, LineChart as LineChartIcon, BarChart as BarChartIcon, Activity as ActivityIcon, AlertTriangle as AlertTriangleIcon, CheckCircle2 as CheckCircle2Icon, XCircle as XCircleIcon, Info as InfoIcon, ExternalLink as ExternalLinkIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Play as PlayIcon, TrendingUp as TrendingUpIcon, Clock as ClockIcon, Star as StarIcon, CheckCircle as CheckCircleIcon, Bot as BotIcon, Cloud as CloudIcon, Wifi as WifiIcon, Server as ServerIcon, Smartphone as SmartphoneIcon, Globe as GlobeIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and multi-cloud support for enterprise-grade reliability.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "Multi-cloud Support", "24/7 Monitoring"],
      category: "Cloud Services",
      popularity: "Most Popular"
    },
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
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and custom software solutions. Transform your business with our technology expertise."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, custom software, network infrastructure, data analytics, IT consulting, DevOps, IT support"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Settings className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">50+ IT Services Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From cloud infrastructure to custom software development, we provide end-to-end IT services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Our IT Solutions
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
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
                >
                  {/* Popularity Badge */}
                  {service.popularity && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.popularity === 'Most Popular' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        service.popularity === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        service.popularity === 'Popular' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        service.popularity === 'Trending' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
                        service.popularity === 'Recommended' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        service.popularity === 'Best Value' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                        service.popularity === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        service.popularity === 'New' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        service.popularity === 'Expert' ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30' :
                        service.popularity === 'Essential' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {service.popularity}
                      </span>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{service.price}</div>
                        <div className="text-xs text-gray-400">{service.category}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30">
                        {service.category}
                      </span>
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

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible IT Service Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the IT service plan that fits your business needs. All plans include our core features and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-green-500/50 shadow-2xl shadow-green-500/25' 
                      : 'border-white/20 hover:border-green-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-green-500/25'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses already using our IT services to drive growth and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to start your IT transformation journey or schedule a personalized consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-green-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-green-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  Start Your IT Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}