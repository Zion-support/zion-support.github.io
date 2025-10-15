import { ArrowRight, BarChart3, CheckCircle, Shield} from 'lucide-react';
import React, { useState, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';

const AiDatabaseSolutionsPage = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI-Powered Database Optimization",
      description: "Intelligent query optimization and performance tuning using machine learning algorithms to maximize database efficiency."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade security with automated threat detection, encryption, and compliance management for sensitive data."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Live data processing and analytics with AI-driven insights for instant decision making and business intelligence."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scalable Architecture",
      description: "Cloud-native database solutions that automatically scale with your business needs and data growth."
    }
  ];

  const services = [
    {
      title: "AI Database Design",
      description: "Intelligent database architecture design using AI to optimize for your specific use cases and performance requirements.",
      features: ["Automated Schema Design", "Performance Optimization", "Scalability Planning", "Cost Analysis"]
    },
    {
      title: "Data Migration & Integration",
      description: "Seamless migration of existing databases with AI-powered data transformation and integration services.",
      features: ["Zero-Downtime Migration", "Data Validation", "Automated Testing", "Rollback Capabilities"]
    },
    {
      title: "Performance Monitoring",
      description: "AI-driven database monitoring with predictive analytics to prevent issues before they impact your business.",
      features: ["Real-time Monitoring", "Predictive Alerts", "Performance Analytics", "Automated Tuning"]
    },
    {
      title: "Backup & Recovery",
      description: "Intelligent backup strategies with AI-optimized recovery procedures to ensure data protection and business continuity.",
      features: ["Automated Backups", "Point-in-Time Recovery", "Disaster Recovery", "Data Integrity Checks"]
    }
  ];

  const benefits = [
    "99.9% Database Uptime Guarantee",
    "50% Faster Query Performance",
    "Automated Security Monitoring",
    "Real-time Performance Analytics",
    "24/7 AI-Powered Support",
    "Compliance with Industry Standards"
  ];

  return (
    <>
      <Helmet>
        <title>AI Database Solutions - Zion Tech Group | Advanced Database Management</title>
        <meta name="description" content="Revolutionary AI-powered database solutions with intelligent optimization, security, and analytics. Transform your data management with cutting-edge technology." />
        <meta name="keywords" content="AI database, database optimization, data analytics, database security, cloud databases, data management, AI solutions" />
        <meta property="og:title" content="AI Database Solutions - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered database solutions for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Database Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your data management with AI-powered database solutions that deliver 
                intelligent optimization, security, and analytics for maximum performance and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI database solutions combine cutting-edge technology with intelligent automation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI database solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Database Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven database management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 group">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technology Stack</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge technologies for maximum performance and reliability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">PostgreSQL</h3>
                <p className="text-gray-300 text-sm">Advanced open-source database</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">MongoDB</h3>
                <p className="text-gray-300 text-sm">NoSQL document database</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Redis</h3>
                <p className="text-gray-300 text-sm">In-memory data structure store</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Elasticsearch</h3>
                <p className="text-gray-300 text-sm">Search and analytics engine</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Database?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI database solutions revolutionize your data management and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiDatabaseSolutionsPage;