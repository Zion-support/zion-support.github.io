import React from 'react';
import Head from 'next/head';
import { Building2, Shield, Database, Cloud, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function EnterpriseIT() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const services = [
    {
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure solutions for enterprise environments",
      features: ["Server Management", "Network Infrastructure", "Storage Solutions", "Backup & Recovery"]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions and compliance management",
      features: ["Cybersecurity", "Data Protection", "Compliance Auditing", "Incident Response"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: ["Cloud Migration", "Multi-Cloud Management", "DevOps Automation", "Cost Optimization"]
    },
    {
      title: "Data Management",
      description: "Enterprise data strategy and management solutions",
      features: ["Data Governance", "Business Intelligence", "Analytics Platforms", "Data Integration"]
    }
  ];

  const benefits = [
    "Reduced IT costs and improved efficiency",
    "Enhanced security and compliance",
    "Scalable and flexible infrastructure",
    "24/7 monitoring and support",
    "Strategic IT planning and consulting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Enterprise IT Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise IT services including infrastructure management, security, cloud solutions, and data management." />
        <meta property="og:title" content="Enterprise IT Services — Zion Tech Group" />
        <meta property="og:description" content="Leading enterprise IT services for large organizations." />
        <meta property="og:url" content="https://ziontechgroup.com/services/enterprise-it" />
        <link rel="canonical" href="https://ziontechgroup.com/services/enterprise-it" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Enterprise IT Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed for enterprise-scale organizations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
              Get Started
            </a>
            <a href="#services" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Enterprise IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
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
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Enterprise IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Enterprise IT?</h2>
          <p className="text-gray-300 mb-8">Contact us today to discuss your enterprise IT needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
