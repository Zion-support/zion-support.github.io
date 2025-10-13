import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Shield, Zap, Globe, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Lock, Settings, Target, TrendingUp, Cpu, Monitor, Brain, Mail as MailIcon, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ITServices() {
  const itServices = [
    {
      id: "cloud-infrastructure-management",
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and cost optimization for AWS, Azure, and Google Cloud",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud architecture design",
        "Automated scaling & load balancing",
        "Disaster recovery & backup solutions",
        "Cost optimization & monitoring",
        "Security hardening & compliance",
        "24/7 infrastructure monitoring",
        "Performance optimization",
        "Migration & modernization"
      ],
      benefits: [
        "Reduce infrastructure costs by 30%",
        "Improve uptime to 99.9%",
        "Scale resources automatically",
        "Ensure data security & compliance"
      ],
      category: "Cloud Services",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure-management",
      featured: true
    },
    {
      id: "cybersecurity-solutions",
      name: "Advanced Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, vulnerability assessment, penetration testing, and compliance management",
      price: "From $3,200/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Threat detection & response",
        "Vulnerability assessment & scanning",
        "Penetration testing & security audits",
        "Compliance management (GDPR, HIPAA, SOX)",
        "Security awareness training",
        "Incident response planning",
        "Firewall & network security",
        "Endpoint protection & monitoring"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure compliance requirements",
        "Minimize security risks"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "web-development-enterprise",
      name: "Enterprise Web Development",
      description: "Custom web applications, e-commerce platforms, and enterprise solutions built with modern technologies and best practices",
      price: "From $1,800/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Custom web application development",
        "E-commerce platform development",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "Database design & optimization",
        "Performance optimization",
        "SEO & accessibility compliance",
        "Maintenance & support"
      ],
      benefits: [
        "Increase online presence by 200%",
        "Improve user experience",
        "Boost conversion rates",
        "Scale with business growth"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 1834,
      link: "/web-development-enterprise",
      featured: true
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design and advanced features",
      price: "From $2,200/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Native iOS & Android development",
        "Cross-platform React Native apps",
        "UI/UX design & prototyping",
        "App store optimization",
        "Push notifications & analytics",
        "Backend API integration",
        "Security & data protection",
        "Testing & quality assurance"
      ],
      benefits: [
        "Reach mobile users effectively",
        "Improve customer engagement",
        "Increase brand visibility",
        "Generate new revenue streams"
      ],
      category: "Mobile Development",
      rating: 4.8,
      reviews: 1654,
      link: "/mobile-app-development",
      featured: false
    },
    {
      id: "database-management-advanced",
      name: "Advanced Database Management",
      description: "Comprehensive database solutions including design, optimization, migration, and maintenance for SQL and NoSQL databases",
      price: "From $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Database design & architecture",
        "Performance optimization & tuning",
        "Data migration & consolidation",
        "Backup & recovery solutions",
        "Security & access control",
        "Monitoring & maintenance",
        "Cloud database management",
        "Data analytics & reporting"
      ],
      benefits: [
        "Improve database performance by 50%",
        "Reduce data management costs",
        "Ensure data integrity & security",
        "Optimize storage utilization"
      ],
      category: "Database",
      rating: 4.7,
      reviews: 987,
      link: "/database-management-advanced",
      featured: false
    },
    {
      id: "network-infrastructure-design",
      name: "Network Infrastructure Design",
      description: "Complete network solutions including design, implementation, security, and monitoring for enterprise networks",
      price: "From $2,000/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Network architecture design",
        "LAN/WAN implementation",
        "Wireless network solutions",
        "Network security & firewalls",
        "VPN & remote access setup",
        "Network monitoring & management",
        "Disaster recovery planning",
        "Performance optimization"
      ],
      benefits: [
        "Improve network reliability by 40%",
        "Enhance security & compliance",
        "Reduce network downtime",
        "Optimize bandwidth utilization"
      ],
      category: "Networking",
      rating: 4.6,
      reviews: 654,
      link: "/network-infrastructure-design",
      featured: false
    },
    {
      id: "data-analytics-enterprise",
      name: "Enterprise Data Analytics",
      description: "Advanced data analytics solutions with business intelligence, reporting, and predictive analytics for data-driven decisions",
      price: "From $2,800/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Business intelligence dashboards",
        "Data warehousing solutions",
        "Predictive analytics & modeling",
        "Real-time data processing",
        "Custom reporting & visualization",
        "Data integration & ETL",
        "Machine learning implementation",
        "Data governance & compliance"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify business opportunities",
        "Improve operational efficiency",
        "Gain competitive advantages"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1123,
      link: "/data-analytics-enterprise",
      featured: false
    },
    {
      id: "custom-software-development",
      name: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs with modern technologies and agile development",
      price: "From $3,500/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Custom application development",
        "Legacy system modernization",
        "API development & integration",
        "Microservices architecture",
        "Cloud-native applications",
        "DevOps & CI/CD implementation",
        "Quality assurance & testing",
        "Ongoing maintenance & support"
      ],
      benefits: [
        "Streamline business processes",
        "Improve operational efficiency",
        "Reduce manual work by 60%",
        "Scale with business growth"
      ],
      category: "Custom Development",
      rating: 4.8,
      reviews: 876,
      link: "/custom-software-development",
      featured: false
    },
    {
      id: "it-consulting-strategic",
      name: "Strategic IT Consulting",
      description: "Expert IT consulting services to help align technology with business goals and drive digital transformation",
      price: "From $2,200/month",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "IT strategy & planning",
        "Digital transformation consulting",
        "Technology assessment & audit",
        "Vendor selection & management",
        "Project management & oversight",
        "Change management support",
        "Training & knowledge transfer",
        "Ongoing advisory services"
      ],
      benefits: [
        "Align IT with business goals",
        "Reduce technology risks",
        "Optimize IT investments",
        "Accelerate digital transformation"
      ],
      category: "Consulting",
      rating: 4.7,
      reviews: 432,
      link: "/it-consulting-strategic",
      featured: false
    },
    {
      id: "managed-it-services",
      name: "Managed IT Services",
      description: "Comprehensive managed IT services including help desk, monitoring, maintenance, and support for your entire IT infrastructure",
      price: "From $1,200/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "24/7 help desk support",
        "Proactive monitoring & maintenance",
        "Security management & updates",
        "Backup & disaster recovery",
        "Software licensing management",
        "Hardware procurement & maintenance",
        "User training & support",
        "Performance optimization"
      ],
      benefits: [
        "Reduce IT operational costs by 40%",
        "Improve system reliability",
        "Focus on core business activities",
        "Access to expert IT support"
      ],
      category: "Managed Services",
      rating: 4.8,
      reviews: 1456,
      link: "/managed-it-services",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: itServices.length, active: true },
    { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length, active: false },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length, active: false },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length, active: false },
    { name: "Mobile Development", count: itServices.filter(s => s.category === "Mobile Development").length, active: false },
    { name: "Database", count: itServices.filter(s => s.category === "Database").length, active: false },
    { name: "Networking", count: itServices.filter(s => s.category === "Networking").length, active: false },
    { name: "Analytics", count: itServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Custom Development", count: itServices.filter(s => s.category === "Custom Development").length, active: false },
    { name: "Consulting", count: itServices.filter(s => s.category === "Consulting").length, active: false },
    { name: "Managed Services", count: itServices.filter(s => s.category === "Managed Services").length, active: false }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Healthcare Provider",
      role: "IT Director",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their cloud solutions reduced our costs by 35% while improving performance significantly.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Mark Thompson",
      company: "Financial Services",
      role: "CTO",
      content: "The cybersecurity solutions are top-notch. We've had zero security breaches since implementation, and our compliance scores are perfect.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Davis",
      company: "E-commerce Platform",
      role: "CEO",
      content: "Their custom software development team delivered exactly what we needed. The application has improved our operational efficiency by 50%.",
      rating: 5,
      avatar: "SD"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and managed IT services. Transform your business with expert technology solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure, data analytics, custom software, IT consulting, managed IT services"
        />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and managed IT services. Transform your business with expert technology solutions."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Shield className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Comprehensive IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services designed to transform your business operations. 
              From cloud infrastructure to cybersecurity, we provide end-to-end technology solutions that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get IT Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Categories Filter */}
        <section className="py-8 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
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
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most popular IT services trusted by leading organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.filter(service => service.featured).map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete technology solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-1 text-xs font-medium">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">{service.description}</p>

                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Client Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how our IT services have transformed businesses across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
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
        <section className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you build a robust, scalable, and secure IT environment. 
              Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}