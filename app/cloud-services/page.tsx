import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp, Clock, Users, BarChart3 } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"],
      price: "Starting at $5,000"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: ["Identity & Access Management", "Data Encryption", "Security Monitoring", "Compliance Management"],
      price: "Starting at $3,000"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Storage",
      description: "Scalable and secure cloud storage solutions for all your data needs.",
      features: ["Data Backup & Recovery", "File Synchronization", "Content Delivery", "Archive Solutions"],
      price: "Starting at $1,500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Build and manage robust cloud infrastructure tailored to your business requirements.",
      features: ["Virtual Machines", "Container Orchestration", "Load Balancing", "Auto Scaling"],
      price: "Starting at $4,000"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for maximum performance and cost efficiency.",
      features: ["Cost Analysis", "Performance Tuning", "Resource Right-sizing", "Automated Scaling"],
      price: "Starting at $2,500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Cloud Strategy",
      description: "Implement a robust multi-cloud strategy to avoid vendor lock-in and maximize flexibility.",
      features: ["Cloud Strategy Planning", "Vendor Management", "Cross-Cloud Integration", "Disaster Recovery"],
      price: "Starting at $6,000"
    }
  ];

  const benefits = [
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: 'Cost Optimization', 
      description: 'Reduce IT costs by up to 40% with efficient cloud solutions' 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: 'Scalability', 
      description: 'Scale resources instantly based on demand' 
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: 'Global Reach', 
      description: 'Access your applications from anywhere in the world' 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: '24/7 Support', 
      description: 'Round-the-clock technical support and monitoring' 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: 'Enhanced Security', 
      description: 'Enterprise-grade security with advanced threat protection' 
    },
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: 'Better Performance', 
      description: 'Improved application performance and user experience' 
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      client: "RetailTech Inc.",
      challenge: "Legacy infrastructure couldn't handle peak traffic",
      solution: "Migrated to AWS with auto-scaling and CDN",
      results: ["99.9% uptime", "50% faster load times", "60% cost reduction"],
      image: "/images/case-studies/ecommerce-cloud.jpg"
    },
    {
      title: "Healthcare Data Security",
      client: "MediCare Solutions",
      challenge: "HIPAA compliance and data security requirements",
      solution: "Azure-based secure cloud infrastructure",
      results: ["100% HIPAA compliance", "Zero security incidents", "40% faster data processing"],
      image: "/images/case-studies/healthcare-cloud.jpg"
    }
  ];

  const stats = [
    { label: "Cloud Migrations", value: "200+", icon: Cloud },
    { label: "Cost Savings", value: "40%", icon: TrendingUp },
    { label: "Uptime", value: "99.9%", icon: Clock },
    { label: "Happy Clients", value: "150+", icon: Users }
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
          content="cloud services, cloud migration, cloud infrastructure, AWS, Azure, GCP, cloud security, cloud optimization"
        />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cloud
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to optimization, we help you leverage the power of the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Cloud Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-blue-400 font-semibold mb-4">
                      {service.price}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Choose Our Cloud Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Success Stories
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 mb-4">{study.challenge}</p>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you migrate, optimize, and secure your cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}