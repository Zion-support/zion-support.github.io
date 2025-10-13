import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Smartphone, Monitor, Clock, DollarSign, Globe, Lock, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp, Cpu } from "lucide-react";
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
        "24/7 monitoring & support",
        "Security compliance (SOC 2, ISO 27001)"
      ]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your business from evolving cyber threats",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Security assessment & audit",
        "Penetration testing",
        "Security monitoring & incident response",
        "Employee security training",
        "Compliance management",
        "Advanced threat protection"
      ]
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure",
      description: "Design, implement, and maintain robust network infrastructure for optimal performance",
      price: "From $1,200/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Network design & planning",
        "WiFi optimization",
        "VPN setup & management",
        "Network security",
        "Performance monitoring",
        "Troubleshooting & support"
      ]
    },
    {
      id: "database-management",
      name: "Database Management",
      description: "Expert database administration and optimization for improved performance and reliability",
      price: "From $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      features: [
        "Database design & optimization",
        "Performance tuning",
        "Backup & recovery",
        "Security hardening",
        "Migration services",
        "24/7 monitoring"
      ]
    },
    {
      id: "help-desk",
      name: "IT Help Desk & Support",
      description: "Professional IT support services to keep your business running smoothly",
      price: "From $800/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "24/7 technical support",
        "Remote assistance",
        "Hardware & software support",
        "User training",
        "Ticket management",
        "Knowledge base"
      ]
    },
    {
      id: "backup-recovery",
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to protect your data",
      price: "From $1,000/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Automated backup solutions",
        "Disaster recovery planning",
        "Data encryption",
        "Offsite storage",
        "Recovery testing",
        "Compliance support"
      ]
    }
  ];

  const technologies = [
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🔵" },
    { name: "Google Cloud", icon: "🌐" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Ansible", icon: "🤖" },
    { name: "Jenkins", icon: "🔧" },
    { name: "GitLab", icon: "🦊" },
    { name: "GitHub", icon: "🐙" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redis", icon: "🔴" },
    { name: "Elasticsearch", icon: "🔍" },
    { name: "Prometheus", icon: "📊" },
    { name: "Grafana", icon: "📈" },
    { name: "ELK Stack", icon: "📋" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Technologies Supported", icon: <Cpu className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, database management, and 24/7 support. Trusted by 500+ businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network infrastructure, database management, IT support, managed IT services" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly. 
              From cloud migration to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-cyan-400 mb-6">
                    {service.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.name)}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Technologies We Work With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-gray-300 font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you build a robust, secure, and scalable IT environment 
              that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
      <SEOOptimizer />
    </>
  );
}