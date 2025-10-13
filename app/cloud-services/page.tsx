import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Database, Server, CheckCircle, TrendingUp, Clock, BarChart3 } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud infrastructure setup, monitoring, and optimization. Multi-cloud and hybrid cloud solutions with automated scaling and disaster recovery.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening"]
    },
    {
      title: "Cloud Migration Services",
      description: "Seamless migration to cloud platforms with zero downtime. Assessment, planning, and execution of cloud migration strategies.",
      icon: <Zap className="w-8 h-8" />,
      path: "/cloud-migration-advanced",
      color: "from-green-500 to-emerald-500",
      price: "Custom Pricing",
      features: ["Zero Downtime", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      title: "Cloud Security Solutions",
      description: "Comprehensive cloud security with advanced threat protection, compliance management, and automated security monitoring.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cloud-native-security",
      color: "from-red-500 to-orange-500",
      price: "Starting at $299/month",
      features: ["Threat Protection", "Compliance Management", "Security Monitoring", "Incident Response"]
    },
    {
      title: "Cloud Cost Optimization",
      description: "Intelligent cost management and optimization strategies. Automated resource scaling and cost monitoring to reduce cloud expenses.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/cloud-cost-optimization",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      features: ["Cost Analysis", "Resource Optimization", "Automated Scaling", "Budget Management"]
    },
    {
      title: "Cloud Database Services",
      description: "Managed database solutions with high availability, automated backups, and performance optimization for all major cloud providers.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $179/month",
      features: ["High Availability", "Automated Backups", "Performance Tuning", "Security Hardening"]
    },
    {
      title: "Cloud-Native Development",
      description: "Build and deploy cloud-native applications using modern technologies and best practices for scalability and reliability.",
      icon: <Server className="w-8 h-8" />,
      path: "/cloud-native-development",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $329/month",
      features: ["Microservices", "Container Orchestration", "CI/CD Pipelines", "Monitoring & Logging"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand with automated resource management."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection and compliance management."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems and disaster recovery solutions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized performance with global content delivery and edge computing capabilities."
    }
  ];

  const stats = [
    { number: "500+", label: "Cloud Migrations Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50%", label: "Average Cost Reduction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Comprehensive cloud services including migration, infrastructure management, security, and cost optimization. Expert cloud solutions for modern businesses." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, cloud optimization, AWS, Azure, GCP" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Cloud Services
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud services. From migration to optimization, we provide end-to-end cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium text-lg"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200 group"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-blue-400 mb-2">
                      {service.price}
                    </div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide the expertise and support you need to succeed in the cloud
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-blue-500/20 text-blue-400 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you migrate, optimize, and secure your cloud environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg"
                >
                  Start Your Cloud Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium text-lg"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}