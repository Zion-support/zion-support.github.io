'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud services.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-services',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', '24/7 monitoring']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security assessments and implementations.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/cybersecurity',
      features: ['Security audits', 'Threat detection', 'Compliance management', 'Incident response']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and monitoring.',
      icon: <Settings className="w-8 h-8 text-green-400" />,
      link: '/devops',
      features: ['Automated deployments', 'Infrastructure as code', 'Monitoring & alerting', 'Performance optimization']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      link: '/web-development',
      features: ['React, Next.js, Vue.js', 'Mobile-first design', 'SEO optimization', 'Performance tuning']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      link: '/mobile-development',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'App store optimization', 'Push notifications']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      link: '/data-analytics',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Machine learning']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Server className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '150+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including web development, cloud migration, cybersecurity, and infrastructure management. Trusted by businesses worldwide." />
        <meta name="keywords" content="IT services, web development, cloud migration, cybersecurity, database management, network infrastructure, DevOps, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-400/30">
              <Server className="w-4 h-4" />
              <span>Professional IT Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              From web development to cloud migration, we provide end-to-end IT solutions 
              that drive business growth and digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to modernize your infrastructure and accelerate growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT services can help modernize your infrastructure and accelerate your digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View All Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
