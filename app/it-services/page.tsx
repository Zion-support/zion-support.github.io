import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Cloud, Code, Database, Server, Network, Smartphone, Monitor, Globe, Lock, Settings, Target, TrendingUp, Users, Award, BarChart3, Zap, Clock, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Eye, Heart, ThumbsUp, Rocket, Cpu, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ITServices() {
  const services = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure Management",
      description: "Complete cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support with cost optimization.",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud architecture design",
        "Automated scaling and load balancing",
        "Disaster recovery and backup solutions",
        "Cost optimization and monitoring",
        "Security hardening and compliance",
        "24/7 monitoring and support",
        "DevOps integration and CI/CD",
        "Performance optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve uptime to 99.9%",
        "Scale resources automatically",
        "Ensure business continuity"
      ],
      category: "Cloud Services",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-solutions",
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, vulnerability assessment, compliance management, and incident response.",
      price: "From $3,200/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Advanced threat detection and prevention",
        "Vulnerability assessment and penetration testing",
        "Security compliance (GDPR, HIPAA, SOX, PCI-DSS)",
        "24/7 security monitoring and response",
        "Security awareness training",
        "Incident response and forensics",
        "Security architecture design",
        "Risk assessment and management"
      ],
      benefits: [
        "Protect against 99.9% of cyber threats",
        "Reduce security incidents by 95%",
        "Ensure compliance requirements",
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
      name: "Web Development Services",
      description: "Custom web applications, e-commerce solutions, and responsive websites built with modern technologies and best practices.",
      price: "From $1,800/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Custom web application development",
        "E-commerce platform development",
        "Responsive and mobile-first design",
        "Progressive Web App (PWA) development",
        "API development and integration",
        "Performance optimization",
        "SEO optimization and analytics",
        "Maintenance and support"
      ],
      benefits: [
        "Increase website performance by 60%",
        "Improve user experience and engagement",
        "Boost conversion rates by 35%",
        "Ensure mobile compatibility"
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
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design and advanced features.",
      price: "From $2,200/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Native iOS and Android development",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design and prototyping",
        "App store optimization and deployment",
        "Backend integration and API development",
        "Push notifications and analytics",
        "App maintenance and updates",
        "Performance optimization"
      ],
      benefits: [
        "Reach customers on all mobile platforms",
        "Improve user engagement and retention",
        "Increase brand visibility and accessibility",
        "Generate additional revenue streams"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 1654,
      link: "/mobile-development",
      featured: false
    },
    {
      id: "database-management",
      name: "Database Management",
      description: "Database design, optimization, migration, and management services for improved performance and reliability.",
      price: "From $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Database design and architecture",
        "Performance tuning and optimization",
        "Data migration and consolidation",
        "Backup and recovery solutions",
        "Database security and compliance",
        "Monitoring and maintenance",
        "Cloud database management",
        "Data analytics and reporting"
      ],
      benefits: [
        "Improve database performance by 50%",
        "Reduce downtime and data loss",
        "Ensure data security and compliance",
        "Optimize storage and costs"
      ],
      category: "Data Management",
      rating: 4.6,
      reviews: 1123,
      link: "/database-management",
      featured: false
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure",
      description: "Complete network design, implementation, and management services for secure and scalable connectivity.",
      price: "From $2,000/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Network design and architecture",
        "Wireless network implementation",
        "Network security and firewall management",
        "VPN and remote access solutions",
        "Network monitoring and optimization",
        "Disaster recovery planning",
        "Network performance analysis",
        "24/7 network support"
      ],
      benefits: [
        "Improve network reliability by 40%",
        "Enhance security and compliance",
        "Reduce network downtime",
        "Optimize bandwidth and performance"
      ],
      category: "Infrastructure",
      rating: 4.7,
      reviews: 987,
      link: "/network-infrastructure",
      featured: false
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      description: "Bespoke software solutions tailored to your specific business needs and requirements.",
      price: "From $2,800/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Custom application development",
        "Legacy system modernization",
        "API development and integration",
        "Microservices architecture",
        "Quality assurance and testing",
        "Documentation and training",
        "Maintenance and support",
        "Scalability planning"
      ],
      benefits: [
        "Streamline business processes",
        "Improve operational efficiency",
        "Reduce manual work and errors",
        "Gain competitive advantage"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1456,
      link: "/custom-software",
      featured: false
    },
    {
      id: "data-analytics",
      name: "Data Analytics & BI",
      description: "Advanced data analytics, business intelligence, and reporting solutions to drive informed decision-making.",
      price: "From $2,300/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Data warehouse design and implementation",
        "ETL/ELT processes and data pipelines",
        "Business intelligence dashboards",
        "Advanced analytics and machine learning",
        "Real-time reporting and alerts",
        "Data visualization and storytelling",
        "Data governance and quality",
        "Self-service analytics tools"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify new business opportunities",
        "Improve operational efficiency",
        "Gain competitive insights"
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
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      company: "Financial Services Corp",
      role: "CTO",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their cloud solutions reduced our costs by 45% while improving performance and security. Highly recommended!",
      rating: 5,
      avatar: "RJ"
    },
    {
      name: "Maria Garcia",
      company: "Healthcare Network",
      role: "IT Director",
      content: "The cybersecurity solutions are exceptional. We've had zero security incidents since implementation, and our compliance scores are perfect. The team is incredibly knowledgeable.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "VP of Engineering",
      content: "Their web development team delivered an outstanding e-commerce platform. Our conversion rates increased by 40% and the user experience is fantastic. Great partnership!",
      rating: 5,
      avatar: "JW"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current IT infrastructure, identify pain points, and understand your business objectives.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "We develop a comprehensive IT strategy tailored to your needs and create a detailed implementation plan.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team implements the solution with minimal disruption to your business operations.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "We provide ongoing support, monitoring, and continuous optimization to ensure peak performance.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Complete IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and custom software. Transform your business with our expert solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure, custom software, data analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Complete IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and custom software. Transform your business with our expert solutions."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Server className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 IT Services Provider 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Complete technology solutions for modern businesses. From cloud infrastructure to cybersecurity, 
              web development to data analytics - we provide end-to-end IT services that drive growth.
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to deliver exceptional IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.icon}
                    </div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From infrastructure to applications, security to analytics - we provide complete IT services 
                that keep your business running smoothly and securely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}
                  
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-cyan-400 text-center">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <Link
                      to={service.link}
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

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
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
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses that trust Zion Tech Group for their IT needs. 
              Get a free consultation and discover how we can help your business grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <Server className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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