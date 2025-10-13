import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp, Clock } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: ["Identity & Access Management", "Data Encryption", "Security Monitoring", "Compliance Management"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Storage",
      description: "Scalable and secure cloud storage solutions for all your data needs.",
      features: ["Data Backup & Recovery", "File Synchronization", "Content Delivery", "Archive Solutions"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Build and manage robust cloud infrastructure tailored to your business requirements.",
      features: ["Virtual Machines", "Container Orchestration", "Load Balancing", "Auto Scaling"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for maximum performance and cost efficiency.",
      features: ["Cost Analysis", "Resource Optimization", "Performance Tuning", "Monitoring & Alerting"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Cloud Solutions",
      description: "Leverage multiple cloud providers for enhanced reliability and flexibility.",
      features: ["Multi-Cloud Strategy", "Cloud Interconnect", "Disaster Recovery", "Vendor Management"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Reduce IT costs by up to 40% with efficient cloud solutions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Enterprise Cloud Solutions</title>
        <meta name="description" content="Comprehensive cloud services including migration, security, storage, and infrastructure management. Transform your business with our enterprise cloud solutions." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, cloud infrastructure, AWS, Azure, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cloud Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with comprehensive cloud solutions designed for scalability, security, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions tailored to meet your business needs and drive digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of enterprise-grade cloud solutions with our expert guidance and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                    <div className="text-blue-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you migrate, optimize, and secure your infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Start Your Cloud Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}