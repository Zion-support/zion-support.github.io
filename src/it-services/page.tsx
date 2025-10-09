'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to AWS, Azure, or GCP with 99.9% uptime guarantee.',
      features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', '24/7 Monitoring'],
      price: 'Starting at $1,299/month',
      category: 'Cloud',
      color: 'text-blue-400'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection, prevention, and incident response capabilities.',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance', 'Penetration Testing'],
      price: 'Starting at $1,599/month',
      category: 'Security',
      color: 'text-red-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring solutions.',
      icon: Settings,
      features: ['CI/CD pipelines', 'Automated testing', 'Container orchestration', 'Monitoring setup', 'Infrastructure as Code', 'Release management'],
      price: 'Starting at $1,200/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Reduced errors', 'Improved collaboration', 'Better quality'],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      color: 'text-green-400'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, migration, and management with AI-powered performance tuning.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services', 'Monitoring'],
      price: 'Starting at $800/month',
      category: 'Data',
      benefits: ['Optimized performance', 'Data security', 'Reliable backups', 'Scalable architecture'],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse'],
      color: 'text-purple-400'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your IT infrastructure up and running in record time with our proven methodologies.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your critical data and systems.'
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to certified professionals with years of experience in enterprise IT.'
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
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Comprehensive IT Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Expert IT solutions for modern businesses
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, our expert IT team provides comprehensive solutions 
                to keep your business running smoothly and securely in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{service.title}</h3>
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
                    <div className="text-center">
                      <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                      <a 
                        href="/contact" 
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our IT solutions can optimize your business operations.
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;
