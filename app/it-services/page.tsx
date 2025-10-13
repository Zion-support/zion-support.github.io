import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Smartphone, Monitor, Headphones, Clock, DollarSign, Globe, Lock, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp, Cpu, HardDrive } from "lucide-react";

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
        "Security compliance"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability and flexibility",
        "Enhanced security and compliance",
        "24/7 monitoring and support"
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
      description: "Comprehensive security services to protect your organization from cyber threats and ensure compliance",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Threat detection & prevention",
        "Security audits & assessments",
        "Penetration testing",
        "Incident response planning",
        "Security training & awareness",
        "Compliance management"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Meet industry compliance standards",
        "Reduce security incidents by 85%",
        "24/7 security monitoring"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure",
      description: "Design, implement, and maintain robust network infrastructure for optimal performance and security",
      price: "From $1,200/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Network design & planning",
        "Router & switch configuration",
        "Wireless network setup",
        "Network monitoring",
        "Performance optimization",
        "Troubleshooting & support"
      ],
      benefits: [
        "Improve network performance by 60%",
        "Reduce downtime by 90%",
        "Enhanced security and reliability",
        "Scalable infrastructure"
      ],
      category: "Infrastructure",
      rating: 4.7,
      reviews: 654,
      link: "/network-infrastructure"
    },
    {
      id: "database-management",
      name: "Database Management",
      description: "Expert database administration, optimization, and maintenance services for all major database systems",
      price: "From $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        "Database design & optimization",
        "Performance tuning",
        "Backup & recovery",
        "Security hardening",
        "Migration services",
        "24/7 monitoring"
      ],
      benefits: [
        "Improve query performance by 70%",
        "Ensure data integrity and security",
        "Reduce maintenance overhead",
        "Expert database administration"
      ],
      category: "Data Management",
      rating: 4.8,
      reviews: 423,
      link: "/database-management"
    },
    {
      id: "helpdesk-support",
      name: "IT Helpdesk & Support",
      description: "Comprehensive IT support services to keep your systems running smoothly and your team productive",
      price: "From $800/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "24/7 technical support",
        "Remote assistance",
        "Hardware & software support",
        "User training",
        "Issue tracking & resolution",
        "Knowledge base management"
      ],
      benefits: [
        "Reduce IT support tickets by 50%",
        "Improve user satisfaction",
        "Faster issue resolution",
        "Proactive problem prevention"
      ],
      category: "Support",
      rating: 4.6,
      reviews: 1123,
      link: "/helpdesk-support"
    },
    {
      id: "system-monitoring",
      name: "System Monitoring & Management",
      description: "Advanced monitoring and management solutions to ensure optimal system performance and uptime",
      price: "From $1,000/month",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      features: [
        "Real-time monitoring",
        "Performance analytics",
        "Alert management",
        "Capacity planning",
        "Automated responses",
        "Custom dashboards"
      ],
      benefits: [
        "Prevent 95% of system issues",
        "Improve system uptime",
        "Optimize resource utilization",
        "Proactive maintenance"
      ],
      category: "Monitoring",
      rating: 4.7,
      reviews: 567,
      link: "/system-monitoring"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your IT infrastructure to meet growing business demands"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security to protect your data and systems"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Efficiency",
      description: "Optimize IT costs while improving performance and reliability"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Support",
      description: "24/7 support and monitoring from our global team of experts"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Automation",
      description: "Automate routine tasks to improve efficiency and reduce errors"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Monitoring",
      description: "Real-time monitoring and alerting for optimal system performance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and technical support for modern businesses." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, database administration, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to power your business. From cloud infrastructure to cybersecurity, we provide the technology foundation your organization needs to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {itServices.map((service) => (
              <div key={service.id} className="bg-slate-800/30 rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  {service.featured && (
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                    <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
                  </div>
                  <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                    {service.category}
                  </span>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 mx-auto w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 text-center border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert team help you build, secure, and optimize your IT infrastructure for maximum performance and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Start Your IT Transformation
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
