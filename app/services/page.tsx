'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Database, Code, Smartphone, Server, Lock, Brain, Zap } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to automate processes and gain insights',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500 to-pink-500',
      link: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization'],
      color: 'from-blue-500 to-cyan-500',
      link: '/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security Assessment', 'Penetration Testing', '24/7 Monitoring', 'Incident Response'],
      color: 'from-red-500 to-orange-500',
      link: '/cybersecurity-solutions'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Custom Dashboards'],
      color: 'from-green-500 to-emerald-500',
      link: '/data-analytics-bi'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business needs',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      color: 'from-indigo-500 to-purple-500',
      link: '/custom-software'
    },
    {
      icon: Server,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment pipelines',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Container Orchestration'],
      color: 'from-yellow-500 to-orange-500',
      link: '/devops-cicd'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud computing, cybersecurity, and custom development - we have you covered." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, custom development, data analytics, mobile development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive growth. 
                We offer end-to-end services from strategy to implementation and support.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Core Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our flagship services that have helped hundreds of businesses transform and grow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:opacity-90`}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you choose the right services and create a customized solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;