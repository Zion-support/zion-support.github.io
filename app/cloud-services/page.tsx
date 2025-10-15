import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp, Clock } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Zero-downtime migration",
        "Data integrity assurance",
        "Cost optimization",
        "Security compliance"
      ]
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive management of your cloud infrastructure with 24/7 monitoring and support.",
      icon: <Server className="w-8 h-8" />,
      features: [
        "24/7 monitoring",
        "Automated scaling",
        "Performance optimization",
        "Disaster recovery"
      ]
    },
    {
      title: "Cloud Security",
      description: "Advanced security solutions to protect your cloud environment from threats and vulnerabilities.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Multi-layered security",
        "Compliance management",
        "Threat detection",
        "Data encryption"
      ]
    },
    {
      title: "Cloud Cost Optimization",
      description: "Optimize your cloud spending with intelligent resource management and cost analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Cost analysis & reporting",
        "Resource optimization",
        "Budget management",
        "Savings recommendations"
      ]
    },
    {
      title: "Cloud Backup & Recovery",
      description: "Reliable backup and disaster recovery solutions to ensure business continuity.",
      icon: <Database className="w-8 h-8" />,
      features: [
        "Automated backups",
        "Point-in-time recovery",
        "Cross-region replication",
        "RTO/RPO optimization"
      ]
    },
    {
      title: "Cloud Performance Monitoring",
      description: "Real-time monitoring and optimization of your cloud applications and infrastructure.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Real-time monitoring",
        "Performance analytics",
        "Alert management",
        "Capacity planning"
      ]
    }
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Cost Efficiency",
      description: "Reduce operational costs with pay-as-you-use pricing",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Security",
      description: "Enterprise-grade security with compliance standards",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Migration & Infrastructure</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive cloud services. Expert cloud migration, infrastructure management, and security solutions from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cloud Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to management,
              we provide end-to-end cloud services that drive growth and efficiency.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions tailored to meet your business needs and drive digital transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud transformation with our expert guidance and cutting-edge solutions.
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your cloud strategy and help you choose the best platform for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Cloud Migration
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Get Free Assessment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
