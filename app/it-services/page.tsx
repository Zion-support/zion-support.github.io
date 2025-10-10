'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Briefcase, Globe, Code, BarChart, Wrench, Lock, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration with zero downtime and data integrity',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      color: 'text-blue-400',
      category: 'Cloud Computing',
      link: '/cloud-migration'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-400',
      category: 'Security',
      link: '/cybersecurity'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      color: 'text-green-400',
      category: 'Development',
      link: '/devops'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400',
      category: 'Data Management',
      link: '/database'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation and optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      color: 'text-yellow-400',
      category: 'Consulting',
      link: '/it-consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      color: 'text-indigo-400',
      category: 'Infrastructure',
      link: '/network-solutions'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization'],
      color: 'text-pink-400',
      category: 'Mobile Development',
      link: '/mobile-development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization'],
      color: 'text-cyan-400',
      category: 'Web Development',
      link: '/web-development'
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data analytics solutions',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining'],
      color: 'text-orange-400',
      category: 'Analytics',
      link: '/data-analytics'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management'],
      color: 'text-gray-400',
      category: 'Support',
      link: '/it-support'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Blockchain development and cryptocurrency solutions',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions'],
      color: 'text-yellow-500',
      category: 'Blockchain',
      link: '/blockchain'
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things development and implementation',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring'],
      color: 'text-green-500',
      category: 'IoT',
      link: '/iot-solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="IT Services">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive IT solutions designed to modernize your infrastructure and optimize your business operations.
          </p>
        </section>

        {/* IT Services Grid */}
        <section className="mb-16" aria-labelledby="it-services-heading">
          <h2 id="it-services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Our IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            End-to-end IT solutions for modern enterprises
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {itServices.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our IT Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cloud-First Approach</h3>
                <p className="text-gray-300">We design solutions with cloud scalability and flexibility in mind.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-gray-300">Enterprise-grade security is built into every solution we deliver.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock monitoring and support for all your IT infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss how our IT services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;