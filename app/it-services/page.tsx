import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Cloud, Code, Database, Globe, Users, Award, Clock, DollarSign, Smartphone, Monitor, Mail, Phone, MapPin, Target, Settings, BarChart3, Zap, Brain, Cpu, HardDrive, Wifi, Lock, Server, Network, Terminal, GitBranch, Layers, Activity, PieChart, TrendingUp, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ITServices() {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud solutions with automated scaling, backup, disaster recovery, and cost optimization across AWS, Azure, and Google Cloud",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $2,500/month",
      originalPrice: "$5,000/month",
      features: ["Multi-cloud management", "Auto-scaling", "Disaster recovery", "Cost optimization", "Security hardening", "24/7 monitoring"],
      category: "Cloud Services",
      popular: true
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, vulnerability assessment, penetration testing, and compliance management",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "From $3,000/month",
      originalPrice: "$6,000/month",
      features: ["Threat detection", "Vulnerability scanning", "Penetration testing", "Compliance management", "Security training", "Incident response"],
      category: "Security",
      popular: true
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies, agile methodologies, and best practices for optimal performance",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "From $150/hour",
      originalPrice: "$300/hour",
      features: ["Custom applications", "API development", "Database design", "UI/UX design", "Testing & QA", "Maintenance & support"],
      category: "Development",
      popular: false
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications using React, Next.js, Node.js, and other cutting-edge technologies",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      price: "From $5,000/project",
      originalPrice: "$10,000/project",
      features: ["Responsive design", "SEO optimization", "Performance optimization", "E-commerce solutions", "CMS integration", "Mobile optimization"],
      category: "Web Development",
      popular: false
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX and advanced features",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      price: "From $8,000/app",
      originalPrice: "$16,000/app",
      features: ["Native iOS/Android", "Cross-platform", "UI/UX design", "App store optimization", "Push notifications", "Analytics integration"],
      category: "Mobile Development",
      popular: false
    },
    {
      title: "Database Management",
      description: "Database design, optimization, migration, and maintenance services for MySQL, PostgreSQL, MongoDB, and other databases",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "From $1,500/month",
      originalPrice: "$3,000/month",
      features: ["Database design", "Performance tuning", "Data migration", "Backup & recovery", "Security hardening", "Monitoring & alerts"],
      category: "Database",
      popular: false
    },
    {
      title: "Network Infrastructure",
      description: "Complete network design, implementation, and management including LAN, WAN, VPN, and wireless solutions",
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      price: "From $2,000/month",
      originalPrice: "$4,000/month",
      features: ["Network design", "Router configuration", "Switch management", "Wireless setup", "VPN implementation", "Network monitoring"],
      category: "Networking",
      popular: false
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines, infrastructure as code, containerization, and continuous integration solutions",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      price: "From $2,200/month",
      originalPrice: "$4,400/month",
      features: ["CI/CD pipelines", "Docker & Kubernetes", "Infrastructure as Code", "Monitoring & logging", "Automated testing", "Deployment automation"],
      category: "DevOps",
      popular: true
    },
    {
      title: "IT Consulting",
      description: "Strategic IT planning, technology assessment, digital transformation, and technology roadmap development",
      icon: <Brain className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      price: "From $200/hour",
      originalPrice: "$400/hour",
      features: ["Technology assessment", "Digital transformation", "IT strategy", "Vendor selection", "Cost optimization", "Risk analysis"],
      category: "Consulting",
      popular: false
    },
    {
      title: "Managed IT Services",
      description: "Complete IT management including helpdesk, monitoring, maintenance, and support for your entire IT infrastructure",
      icon: <Server className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      price: "From $1,800/month",
      originalPrice: "$3,600/month",
      features: ["24/7 helpdesk", "Proactive monitoring", "Patch management", "Security updates", "Backup management", "Performance optimization"],
      category: "Managed Services",
      popular: true
    },
    {
      title: "Data Analytics & BI",
      description: "Business intelligence solutions, data visualization, reporting, and analytics to drive data-driven decisions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "From $2,800/month",
      originalPrice: "$5,600/month",
      features: ["Data visualization", "Custom dashboards", "ETL processes", "Predictive analytics", "Report automation", "Data integration"],
      category: "Analytics",
      popular: false
    },
    {
      title: "System Integration",
      description: "Integration of disparate systems, APIs, and applications to create seamless workflows and data synchronization",
      icon: <Layers className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "From $3,500/project",
      originalPrice: "$7,000/project",
      features: ["API integration", "System migration", "Data synchronization", "Workflow automation", "Legacy system modernization", "Third-party integrations"],
      category: "Integration",
      popular: false
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> },
    { number: "50+", label: "Expert Engineers", icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their cloud migration saved us 40% in costs while improving performance by 60%. The team is incredibly professional and knowledgeable.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "E-commerce Giant",
      role: "VP of Technology",
      content: "The cybersecurity solutions provided by Zion Tech Group are top-notch. We've had zero security incidents since implementation, and our compliance scores are perfect. Highly recommended!",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Sarah Thompson",
      company: "Financial Services Inc",
      role: "IT Director",
      content: "Their DevOps implementation has revolutionized our deployment process. We can now deploy 10x faster with zero downtime. The automation and monitoring capabilities are outstanding.",
      rating: 5,
      avatar: "ST"
    }
  ];

  const categories = [
    { name: "All", count: services.length, active: true },
    { name: "Cloud Services", count: services.filter(s => s.category === "Cloud Services").length, active: false },
    { name: "Security", count: services.filter(s => s.category === "Security").length, active: false },
    { name: "Development", count: services.filter(s => s.category === "Development").length, active: false },
    { name: "Web Development", count: services.filter(s => s.category === "Web Development").length, active: false },
    { name: "Mobile Development", count: services.filter(s => s.category === "Mobile Development").length, active: false },
    { name: "Database", count: services.filter(s => s.category === "Database").length, active: false },
    { name: "Networking", count: services.filter(s => s.category === "Networking").length, active: false },
    { name: "DevOps", count: services.filter(s => s.category === "DevOps").length, active: false },
    { name: "Consulting", count: services.filter(s => s.category === "Consulting").length, active: false },
    { name: "Managed Services", count: services.filter(s => s.category === "Managed Services").length, active: false },
    { name: "Analytics", count: services.filter(s => s.category === "Analytics").length, active: false },
    { name: "Integration", count: services.filter(s => s.category === "Integration").length, active: false }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, custom development, web development, mobile apps, database management, and DevOps. Transform your business with our expert solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, custom development, web development, mobile development, database management, DevOps, managed IT services, IT consulting"
        />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
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
              Comprehensive IT services to transform your business. From cloud infrastructure to cybersecurity, 
              custom development to managed services - we provide end-to-end technology solutions.
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

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
                From infrastructure to applications, we have everything you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to="/contact"
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

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about working with Zion Tech Group for their IT needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses already using our IT services to drive growth and innovation. 
              Contact us today for a personalized consultation and free IT assessment.
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get IT Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Services
                <Server className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}