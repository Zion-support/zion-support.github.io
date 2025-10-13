import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Shield, Cloud, Code, Database, Server, Network, Smartphone, Globe, Zap, Users, Award, Clock, DollarSign, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";

export default function ITServices() {
  const services = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure Management",
      description: "Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Cloud migration strategy and execution",
        "Multi-cloud architecture design",
        "Cost optimization and monitoring",
        "Auto-scaling and load balancing",
        "Disaster recovery planning",
        "Security hardening and compliance",
        "24/7 monitoring and support",
        "Performance optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability and flexibility",
        "Enhance security and compliance",
        "Increase uptime to 99.9%"
      ],
      category: "Cloud Services",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-solutions",
      name: "Advanced Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, incident response, and compliance management",
      price: "From $3,200/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Advanced threat detection and prevention",
        "Security assessment and penetration testing",
        "Incident response and forensics",
        "Compliance management (SOC 2, ISO 27001, GDPR)",
        "Security awareness training",
        "Vulnerability management",
        "24/7 security monitoring",
        "Custom security policies"
      ],
      benefits: [
        "Protect against 99.9% of cyber threats",
        "Reduce security incidents by 95%",
        "Ensure regulatory compliance",
        "Minimize security risks and costs"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "web-development",
      name: "Full-Stack Web Development",
      description: "Modern, responsive web applications using cutting-edge technologies and best practices",
      price: "From $1,800/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "React, Vue.js, and Angular development",
        "Node.js, Python, and PHP backends",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "API development and integration",
        "Performance optimization",
        "SEO and accessibility compliance",
        "Mobile-responsive design"
      ],
      benefits: [
        "Increase conversion rates by 35%",
        "Improve page load speeds by 60%",
        "Enhance user experience",
        "Boost search engine rankings"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 1834,
      link: "/web-development",
      featured: true
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX",
      price: "From $2,200/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Native iOS and Android development",
        "React Native and Flutter apps",
        "Cross-platform solutions",
        "App store optimization",
        "Push notifications and analytics",
        "Offline functionality",
        "Security and encryption",
        "Performance optimization"
      ],
      benefits: [
        "Reach customers on all devices",
        "Increase user engagement by 50%",
        "Improve brand visibility",
        "Generate new revenue streams"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 1456,
      link: "/mobile-development",
      featured: false
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      description: "Comprehensive database services including design, optimization, migration, and maintenance",
      price: "From $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Database design and architecture",
        "Performance tuning and optimization",
        "Data migration and consolidation",
        "Backup and recovery solutions",
        "Security and access control",
        "Monitoring and alerting",
        "Cloud database management",
        "Data warehousing solutions"
      ],
      benefits: [
        "Improve query performance by 70%",
        "Reduce database costs by 30%",
        "Ensure data integrity and security",
        "Scale with business growth"
      ],
      category: "Data Management",
      rating: 4.7,
      reviews: 987,
      link: "/database-management",
      featured: false
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure Solutions",
      description: "Complete network design, implementation, and management for enterprise environments",
      price: "From $2,000/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Network design and architecture",
        "Wireless network solutions",
        "VPN and remote access setup",
        "Network security implementation",
        "Performance monitoring",
        "Disaster recovery planning",
        "Network optimization",
        "24/7 network support"
      ],
      benefits: [
        "Improve network performance by 50%",
        "Enhance security and reliability",
        "Reduce downtime to near zero",
        "Support remote work environments"
      ],
      category: "Infrastructure",
      rating: 4.8,
      reviews: 654,
      link: "/network-infrastructure",
      featured: false
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      description: "Tailored software solutions designed to meet specific business requirements and workflows",
      price: "From $2,800/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Custom application development",
        "Legacy system modernization",
        "API development and integration",
        "Workflow automation",
        "Business process optimization",
        "Third-party integrations",
        "Quality assurance and testing",
        "Ongoing maintenance and support"
      ],
      benefits: [
        "Streamline business processes",
        "Improve operational efficiency",
        "Reduce manual work by 80%",
        "Gain competitive advantages"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1123,
      link: "/custom-software",
      featured: false
    },
    {
      id: "data-analytics",
      name: "Data Analytics & Business Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools",
      price: "From $2,300/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Data warehouse design and implementation",
        "ETL processes and data pipelines",
        "Advanced analytics and machine learning",
        "Interactive dashboards and reports",
        "Real-time data processing",
        "Data visualization and storytelling",
        "Predictive analytics",
        "Custom reporting solutions"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify new business opportunities",
        "Improve operational efficiency",
        "Increase revenue by 25%"
      ],
      category: "Analytics",
      rating: 4.8,
      reviews: 876,
      link: "/data-analytics",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: services.length, active: true },
    { name: "Cloud Services", count: services.filter(s => s.category === "Cloud Services").length, active: false },
    { name: "Security", count: services.filter(s => s.category === "Security").length, active: false },
    { name: "Development", count: services.filter(s => s.category === "Development").length, active: false },
    { name: "Data Management", count: services.filter(s => s.category === "Data Management").length, active: false },
    { name: "Infrastructure", count: services.filter(s => s.category === "Infrastructure").length, active: false },
    { name: "Analytics", count: services.filter(s => s.category === "Analytics").length, active: false }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "10,000+", label: "Hours of Support", icon: <Clock className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      company: "Financial Services Corp",
      role: "CTO",
      content: "Zion Tech Group transformed our entire IT infrastructure. The cloud migration was seamless, and we've seen a 40% reduction in costs while improving performance significantly.",
      rating: 5,
      avatar: "RJ"
    },
    {
      name: "Maria Garcia",
      company: "Healthcare Network",
      role: "IT Director",
      content: "Their cybersecurity solutions are top-notch. We've had zero security incidents since implementation, and our compliance scores are perfect. Highly recommended!",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "VP of Engineering",
      content: "The custom software development exceeded our expectations. The team delivered a solution that perfectly fits our business needs and has improved our efficiency by 60%.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your current IT environment and business requirements to create a comprehensive strategy",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Design & Architecture",
      description: "Our experts design scalable, secure solutions tailored to your specific needs and goals",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Implementation",
      description: "We execute the plan with minimal disruption to your business operations",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Support & Optimization",
      description: "Ongoing monitoring, maintenance, and continuous improvement of your IT infrastructure",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and data analytics. Transform your business with our expert technology solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network solutions, custom software, data analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      <EnhancedSEO
        title="IT Services - Comprehensive Technology Solutions | Zion Tech Group"
        description="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and data analytics. Transform your business with our expert technology solutions."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Professional IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions to power your business growth. From cloud infrastructure to cybersecurity, 
              we provide expert IT services that drive innovation and efficiency.
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
                View Our Work
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to deliver exceptional IT solutions that meet your business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <div className="py-8 bg-black/10 backdrop-blur-sm">
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
        </div>

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
              {services.filter(service => service.featured).map((service, index) => (
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
              {services.map((service, index) => (
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
              Let our expert team help you build a robust, scalable, and secure technology foundation for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get IT Consultation
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