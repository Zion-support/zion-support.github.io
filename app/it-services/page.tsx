'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Cpu, BarChart, CheckCircle, TrendingUp, Star, Users, Award, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration and optimization services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Scalable infrastructure'],
      link: '/cloud-migration',
      color: 'text-blue-400'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      benefits: ['99.9% threat detection', '24/7 monitoring', 'Zero breaches'],
      link: '/cybersecurity',
      color: 'text-red-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      benefits: ['80% faster deployment', 'Zero downtime', 'Automated testing'],
      link: '/devops',
      color: 'text-green-400'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      benefits: ['300% performance boost', 'Zero data loss', 'Automated backups'],
      link: '/database',
      color: 'text-purple-400'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services',
      icon: Cpu,
      price: '$1,500/month',
      features: ['Technology Assessment', 'Digital Strategy', 'Architecture Design', 'Implementation Planning'],
      benefits: ['Strategic guidance', 'Cost optimization', 'Future-proof solutions'],
      link: '/it-consulting',
      color: 'text-cyan-400'
    },
    {
      title: 'Infrastructure Management',
      description: 'Complete infrastructure monitoring and management services',
      icon: BarChart,
      price: '$1,200/month',
      features: ['24/7 Monitoring', 'Performance Optimization', 'Capacity Planning', 'Disaster Recovery'],
      benefits: ['99.9% uptime', 'Proactive monitoring', 'Instant alerts'],
      link: '/infrastructure',
      color: 'text-orange-400'
    }
  ];

  const stats = [
    { label: 'Infrastructure Managed', value: '1000+', icon: Cpu },
    { label: 'Security Incidents', value: '0', icon: Shield },
    { label: 'Uptime Achieved', value: '99.9%', icon: TrendingUp },
    { label: 'Cost Savings', value: '40%', icon: Star }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
    'Ansible', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack',
    'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Oracle', 'SQL Server'
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions. Expert IT consulting and support."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database services', 'IT consulting', 'infrastructure management']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              IT Services
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Comprehensive IT Solutions for Modern Enterprises
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              From cloud migration to cybersecurity, our expert IT services help businesses 
              build robust, scalable, and secure technology infrastructure.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our IT Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href={service.link} 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Technologies We Work With
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our IT experts help you build a robust, scalable, and secure technology foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
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