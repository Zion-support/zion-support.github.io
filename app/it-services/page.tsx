import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Monitor, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

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
        "Firewall configuration",
        "Endpoint protection"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Meet compliance requirements",
        "Reduce security incidents by 85%",
        "Improve security posture"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity",
      featured: true
    },
    {
      id: "network-engineering",
      name: "Network Engineering & Design",
      description: "Enterprise-grade network solutions with high availability, security, and performance optimization",
      price: "From $1,200/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Network architecture design",
        "Wireless network setup",
        "VPN configuration",
        "Load balancing",
        "Network monitoring",
        "Troubleshooting & support",
        "Security implementation",
        "Performance optimization"
      ],
      benefits: [
        "Improve network performance by 60%",
        "Reduce downtime by 90%",
        "Enhance security & reliability",
        "Scale with business growth"
      ],
      category: "Infrastructure",
      rating: 4.7,
      reviews: 654,
      link: "/network-engineering",
      featured: false
    },
    {
      id: "devops-automation",
      name: "DevOps & Automation",
      description: "Streamline development workflows with CI/CD pipelines, infrastructure as code, and automated deployment",
      price: "From $1,500/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Container orchestration",
        "Automated testing",
        "Deployment automation",
        "Monitoring & alerting",
        "Version control management",
        "Performance optimization"
      ],
      benefits: [
        "Reduce deployment time by 70%",
        "Improve code quality",
        "Increase development velocity",
        "Minimize human errors"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1083,
      link: "/devops",
      featured: true
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      description: "Comprehensive database services including design, optimization, backup, and recovery solutions",
      price: "From $800/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Backup & recovery planning",
        "Data migration",
        "Security hardening",
        "Monitoring & maintenance",
        "Query optimization",
        "Scalability planning"
      ],
      benefits: [
        "Improve query performance by 80%",
        "Ensure data integrity",
        "Reduce backup time by 50%",
        "Enhance data security"
      ],
      category: "Data",
      rating: 4.6,
      reviews: 456,
      link: "/database-management",
      featured: false
    },
    {
      id: "managed-services",
      name: "Managed IT Services",
      description: "Comprehensive IT support including help desk, system administration, and proactive maintenance",
      price: "From $2,000/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "24/7 help desk support",
        "System administration",
        "Software updates & patches",
        "Proactive monitoring",
        "Remote & on-site support",
        "Asset management",
        "User training",
        "Disaster recovery"
      ],
      benefits: [
        "Reduce IT costs by 35%",
        "Improve system uptime",
        "Enhance user productivity",
        "Minimize IT disruptions"
      ],
      category: "Support",
      rating: 4.8,
      reviews: 1205,
      link: "/managed-services",
      featured: true
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their cloud migration service was seamless and resulted in 40% cost savings.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Enterprises",
      content: "The cybersecurity solutions provided by Zion Tech Group have significantly improved our security posture. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "InnovateTech",
      content: "Their DevOps automation has streamlined our development process. We've seen a 60% reduction in deployment time.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Analyze your current IT infrastructure and identify areas for improvement and optimization.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Planning",
      description: "Develop a comprehensive strategy tailored to your business needs and objectives.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with minimal disruption to your business operations, ensuring smooth transitions.",
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
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, network engineering, DevOps, and managed services. Transform your technology with expert solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud migration, cybersecurity, network engineering, DevOps, managed services, IT consulting, infrastructure, database management"
        />
      </Helmet>
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Professional IT services including cloud infrastructure, cybersecurity, network engineering, DevOps, and managed services. Transform your technology with expert solutions."
        keywords="IT services, cloud migration, cybersecurity, network engineering, DevOps, managed services, IT consulting, infrastructure, database management"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions to transform your business. From cloud infrastructure to cybersecurity, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of IT services designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 ${
                    service.featured ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {service.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
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
                See how we've helped organizations transform their technology infrastructure
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
      </div>
    </>
  );
}