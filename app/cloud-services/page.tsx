import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp, Clock } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Auto-scaling infrastructure that grows with your business needs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with 24/7 monitoring and threat detection"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized for speed with global CDN and edge computing"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Secure data storage, backup, and disaster recovery solutions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Multi-region deployment for worldwide accessibility"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Complete cloud infrastructure setup and management"
    }
  ];

  const benefits = [
    "99.9% Uptime Guarantee",
    "24/7 Expert Support",
    "Cost Optimization",
    "Compliance Ready",
    "Disaster Recovery",
    "Real-time Monitoring"
  ];

  return (
    <>
      </><Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including infrastructure, security, and scalability services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our comprehensive cloud solutions. 
                Scalable, secure, and optimized for performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
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
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive cloud services designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the benefits of enterprise-grade cloud infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-xl rounded-lg p-4 border border-cyan-500/20"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our cloud experts help you build a robust, scalable infrastructure that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Cloud Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}