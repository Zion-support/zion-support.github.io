import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Shield, Zap, Globe, Database, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';

export default function ItServices() {
  const itServices = [
    {
      title: "IT Infrastructure Management",
      description: "Comprehensive management of your IT infrastructure with 24/7 monitoring and support.",
      icon: <Server className="w-8 h-8" />,
      features: [
        "24/7 monitoring and support",
        "Proactive maintenance",
        "Performance optimization",
        "Disaster recovery planning"
      ]
    },
    {
      title: "Network Security",
      description: "Advanced security solutions to protect your network from threats and vulnerabilities.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Firewall configuration",
        "Intrusion detection",
        "VPN setup and management",
        "Security audits"
      ]
    },
    {
      title: "System Administration",
      description: "Expert system administration services for Windows, Linux, and cloud environments.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Server configuration",
        "User management",
        "Backup and recovery",
        "System updates"
      ]
    },
    {
      title: "Database Management",
      description: "Professional database administration and optimization services.",
      icon: <Database className="w-8 h-8" />,
      features: [
        "Database design",
        "Performance tuning",
        "Backup strategies",
        "Data migration"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Complete cloud migration and management services for modern businesses.",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Cloud migration",
        "Cost optimization",
        "Security compliance",
        "Scalability planning"
      ]
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Technology assessment",
        "Strategic planning",
        "Vendor evaluation",
        "ROI analysis"
      ]
    }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Cost Effective",
      description: "Reduce IT costs with efficient management",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Reliable",
      description: "99.9% uptime guarantee with proactive monitoring",
      icon: <CheckCircle className="w-8 h-8" />
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

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions tailored to meet your business needs and drive efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-cyan-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of professional IT management with our expert team and cutting-edge solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our IT experts help you streamline your technology infrastructure for maximum efficiency and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your IT Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
