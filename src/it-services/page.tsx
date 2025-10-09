'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection, prevention, and response capabilities.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response', 'Penetration testing', 'Compliance'],
      price: 'Starting at $1,599/month',
      category: 'Security',
      benefits: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment solutions.',
      icon: Settings,
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Release Management'],
      price: 'Starting at $1,199/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Reduced errors', 'Improved collaboration', 'Better quality'],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered performance tuning.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Monitoring'],
      price: 'Starting at $899/month',
      category: 'Data',
      benefits: ['Optimized performance', 'Data security', 'Reduced downtime', 'Cost efficiency'],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions. Expert IT support for modern businesses."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'IT infrastructure', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              IT Services & Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Comprehensive IT Solutions for Modern Businesses
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our cutting-edge IT services. From cloud migration to cybersecurity, 
              we provide the expertise and technology you need to succeed in the digital age.
            </p>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our IT services can revolutionize your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;