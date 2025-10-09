import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration & Services',
      description: 'Comprehensive cloud migration, setup, optimization, and management services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Disaster Recovery'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Faster deployment', 'Scalable infrastructure'],
      color: 'text-blue-400',
      category: 'Cloud'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Advanced security solutions with threat detection, prevention, and incident response',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance'],
      benefits: ['99.9% threat detection', 'Real-time protection', 'Reduced security risks', 'Compliance ready'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps'],
      benefits: ['80% faster deployment', 'Reduced errors', 'Better collaboration', 'Automated processes'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'AI Optimization', 'Monitoring'],
      benefits: ['60% better performance', 'Zero data loss', 'Automated optimization', 'Cost effective'],
      color: 'text-purple-400',
      category: 'Database'
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise network design, implementation, and optimization with security focus',
      icon: Globe,
      price: '$1,399/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring', 'VPN Setup', 'Load Balancing'],
      benefits: ['99.9% uptime', 'Enhanced security', 'Better performance', 'Scalable design'],
      color: 'text-cyan-400',
      category: 'Networking'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 IT support, maintenance, and management services for business continuity',
      icon: Users,
      price: '$999/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'System Maintenance', 'User Training', 'Help Desk', 'Remote Management'],
      benefits: ['Minimal downtime', 'Faster resolution', 'Proactive maintenance', 'User satisfaction'],
      color: 'text-orange-400',
      category: 'Support'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern technologies',
      icon: Smartphone,
      price: '$1,799/month',
      features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'API Integration', 'App Store Deployment', 'Maintenance'],
      benefits: ['High performance', 'Cross-platform compatibility', 'Modern design', 'Scalable solutions'],
      color: 'text-pink-400',
      category: 'Mobile'
    },
    {
      title: 'System Integration',
      description: 'API development, system integration, and data synchronization services',
      icon: Code,
      price: '$1,499/month',
      features: ['API Development', 'System Integration', 'Data Synchronization', 'Legacy Modernization', 'Third-party Integration', 'Documentation'],
      benefits: ['Seamless integration', 'Data consistency', 'Improved efficiency', 'Future-proof solutions'],
      color: 'text-indigo-400',
      category: 'Integration'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services & Infrastructure - Zion Tech Group"
        description="Comprehensive IT solutions for modern enterprise infrastructure. Cloud migration, cybersecurity, DevOps, database management, and more."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'network infrastructure', 'IT support']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              IT Services & Infrastructure
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
              Comprehensive IT solutions for modern enterprise infrastructure
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Scale, secure, and optimize your technology stack with our comprehensive IT services. 
              From cloud migration to cybersecurity, we provide end-to-end solutions for your business needs.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium text-cyan-400 mb-2">
                      {service.category}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 ml-5">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-3 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/contact" 
                      className="cyber-button px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 inline-block"
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get a free consultation and discover how our IT services can optimize your technology stack and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <Footer />
    </>
  );
};

export default ITServicesPage;
