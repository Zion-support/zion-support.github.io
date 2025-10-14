import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Database, Globe, Server } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Footer from '../components/Footer';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
      features: ["Zero-downtime migration", "Data integrity assurance", "Performance optimization", "Cost analysis"],
      icon: <Cloud className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Infrastructure as Code",
      description: "Manage your cloud infrastructure with code for better consistency and automation.",
      features: ["Terraform templates", "Automated provisioning", "Version control", "Environment consistency"],
      icon: <Server className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance solutions for your cloud infrastructure.",
      features: ["Identity management", "Data encryption", "Compliance monitoring", "Security auditing"],
      icon: <Shield className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Auto-scaling",
      description: "Automatically scale your resources based on demand to optimize costs and performance.",
      features: ["Dynamic scaling", "Cost optimization", "Performance monitoring", "Load balancing"],
      icon: <Zap className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Database Solutions",
      description: "Managed database services with high availability and performance optimization.",
      features: ["High availability", "Backup & recovery", "Performance tuning", "Monitoring"],
      icon: <Database className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Global CDN",
      description: "Content delivery network for fast, reliable access to your applications worldwide.",
      features: ["Global edge locations", "DDoS protection", "SSL/TLS encryption", "Analytics"],
      icon: <Globe className="w-12 h-12 text-cyan-400" />
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "50%", label: "Cost Reduction" },
    { value: "3x", label: "Performance Boost" },
    { value: "24/7", label: "Support" }
  ];

  const benefits = [
    "Reduced infrastructure costs",
    "Improved scalability and flexibility",
    "Enhanced security and compliance",
    "Faster deployment and updates",
    "Better disaster recovery",
    "Global accessibility"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Cloud Infrastructure - Zion Tech Group | Scalable Cloud Solutions"
        description="Transform your business with our comprehensive cloud infrastructure services. Migration, security, auto-scaling, and managed services for optimal performance."
        keywords="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, infrastructure as code, cloud security, managed services"
        canonical="https://ziontechgroup.com/cloud-infrastructure"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, deploy, and scale your applications with our comprehensive cloud infrastructure solutions. 
            From migration to optimization, we provide end-to-end cloud services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure solutions designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Cloud Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our cloud infrastructure services are designed to provide reliability, 
                security, and scalability for your business applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Move to the Cloud?</h3>
              <p className="text-gray-300 mb-6">
                Let us help you design and implement the perfect cloud infrastructure for your business.
              </p>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Cloud Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your infrastructure with our expert cloud solutions and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Now
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
"
}

export default CloudInfrastructurePage;
