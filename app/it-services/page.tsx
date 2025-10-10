'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Shield, Settings, Database, Globe, Smartphone, Server, Code, Users, BarChart, Lock, CheckCircle, ArrowRight, Clock, Award, TrendingUp, Zap, Cpu, Layers, PieChart, Activity, Target, Globe2, Monitor, Link as LinkIcon } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Comprehensive cloud solutions with AWS, Azure, and Google Cloud Platform.',
      features: ['Cloud Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      pricing: 'Starting at $1,299/month',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Advanced security solutions to protect your digital assets and data.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance'],
      pricing: 'Starting at $799/month',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing and deployment.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring'],
      pricing: 'Starting at $599/month',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, and management with AI-powered performance tuning.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
      pricing: 'Starting at $399/month',
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30'
    },
    {
      icon: Globe,
      title: 'Network Solutions',
      description: 'Enterprise networking, VPN setup, and network security with 24/7 monitoring.',
      features: ['Network Design', 'VPN Configuration', 'Load Balancing', 'Security Monitoring'],
      pricing: 'Starting at $699/month',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UX design.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization'],
      pricing: 'Starting at $1,999/month',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Complete server administration, monitoring, and maintenance services.',
      features: ['Server Setup', 'Performance Monitoring', 'Security Hardening', 'Backup Management'],
      pricing: 'Starting at $499/month',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business needs.',
      features: ['Web Applications', 'API Development', 'System Integration', 'Legacy Modernization'],
      pricing: 'Starting at $1,500/month',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '99.9% Uptime Guarantee',
      description: 'We ensure maximum availability with our robust infrastructure and monitoring.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your critical business data.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for all IT services.'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Our team holds industry certifications and years of experience.'
    }
  ];

  const technologies = [
    { name: 'AWS', icon: '☁️', description: 'Amazon Web Services' },
    { name: 'Azure', icon: '🔵', description: 'Microsoft Azure' },
    { name: 'GCP', icon: '🌐', description: 'Google Cloud Platform' },
    { name: 'Docker', icon: '🐳', description: 'Containerization' },
    { name: 'Kubernetes', icon: '⚙️', description: 'Container Orchestration' },
    { name: 'Terraform', icon: '🏗️', description: 'Infrastructure as Code' },
    { name: 'Jenkins', icon: '🔧', description: 'CI/CD Pipeline' },
    { name: 'GitLab', icon: '🦊', description: 'DevOps Platform' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, DevOps, database management, and custom development. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database management, network solutions, mobile development" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Comprehensive Technology Solutions for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Our expert IT services help businesses build, secure, and optimize their technology infrastructure. 
            From cloud migration to cybersecurity, we provide end-to-end solutions that drive efficiency and growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              📧 Get Free Consultation
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 ${service.bgColor} ${service.borderColor} border`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${service.bgColor}`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${service.color}`}>{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-4 ${service.color} neon-text`}>
                    {service.pricing}
                  </div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${service.color} border-2 border-current hover:bg-current hover:text-slate-900`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Technologies We Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card hologram-card p-4 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our IT Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment & Planning', description: 'We analyze your current IT infrastructure and identify improvement opportunities.' },
              { step: '02', title: 'Solution Design', description: 'Design a comprehensive IT solution tailored to your business requirements.' },
              { step: '03', title: 'Implementation', description: 'Deploy and configure all systems with minimal business disruption.' },
              { step: '04', title: 'Support & Optimization', description: 'Provide ongoing support and continuous optimization of your IT systems.' }
            ].map((item, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our IT services can help you build a robust, secure, and scalable technology foundation. 
              Get a free consultation and discover the power of modern IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center">
                📧 Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ItServicesPage;