import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Smartphone, Monitor, Headphones, Clock, DollarSign, Globe, Lock, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ITServices() {
  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud transformation services including AWS, Azure, and Google Cloud Platform migration and optimization",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud strategy & planning",
        "AWS/Azure/GCP migration",
        "Cloud cost optimization",
        "Disaster recovery setup",
        "Auto-scaling configuration",
        "Security & compliance",
        "24/7 monitoring & support",
        "Performance optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability & flexibility",
        "Enhance security & compliance",
        "Increase system reliability"
      ],
      category: "Infrastructure",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-suite",
      name: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, and incident response",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "Compliance management",
        "Security audits",
        "Risk assessments"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 85%",
        "Ensure compliance with regulations",
        "Minimize business disruption"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "web-development",
      name: "Custom Web Development",
      description: "Modern web applications built with cutting-edge technologies and best practices for optimal performance",
      price: "From $3,500/project",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "React/Next.js development",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "E-commerce solutions",
        "API integration",
        "Content management",
        "Maintenance & support"
      ],
      benefits: [
        "Increase conversion rates by 35%",
        "Improve page load speeds by 60%",
        "Enhance user experience",
        "Boost search engine rankings"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1156,
      link: "/web-development",
      featured: false
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
      price: "From $5,000/project",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "UI/UX design",
        "App store optimization",
        "Push notifications",
        "Analytics integration",
        "Backend development",
        "App maintenance"
      ],
      benefits: [
        "Reach wider audience",
        "Improve user engagement",
        "Increase brand visibility",
        "Generate new revenue streams"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 743,
      link: "/mobile-development",
      featured: false
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      description: "Comprehensive database solutions including design, optimization, migration, and maintenance",
      price: "From $1,200/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration",
        "Backup & recovery",
        "Security hardening",
        "Monitoring & alerting",
        "Capacity planning",
        "24/7 support"
      ],
      benefits: [
        "Improve query performance by 70%",
        "Reduce downtime by 90%",
        "Enhance data security",
        "Optimize storage costs"
      ],
      category: "Infrastructure",
      rating: 4.8,
      reviews: 634,
      link: "/database-management",
      featured: false
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure & Security",
      description: "Complete network solutions including design, implementation, security, and ongoing management",
      price: "From $1,500/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Network design & planning",
        "Firewall configuration",
        "VPN setup & management",
        "Wireless networking",
        "Network monitoring",
        "Security policies",
        "Disaster recovery",
        "Performance optimization"
      ],
      benefits: [
        "Improve network performance by 50%",
        "Enhance security posture",
        "Reduce network downtime",
        "Optimize bandwidth usage"
      ],
      category: "Infrastructure",
      rating: 4.6,
      reviews: 521,
      link: "/network-infrastructure",
      featured: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Analyze your current IT infrastructure, identify pain points, and understand your business requirements.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive IT strategy tailored to your business goals and technical requirements.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the planned solutions with minimal disruption to your ongoing operations.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security.",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and database management. Transform your business with our expert solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network security" />
        <meta property="og:title" content="IT Services - Zion Tech Group | Comprehensive IT Solutions" />
        <meta property="og:description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and database management. Transform your business with our expert solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive IT solutions. From cloud infrastructure to cybersecurity, we provide expert services to drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group ${
                    service.featured ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {service.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-medium">Featured Service</span>
                    </div>
                  )}
                  
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our experts help you build a robust, secure, and scalable IT environment that drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
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