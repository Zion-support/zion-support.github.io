'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Globe, Smartphone, Users, Server, HardDrive, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Mic, Speaker, Battery, Power, Wrench, Hammer, Wrench as Screwdriver, Wrench as Tool, Cog, Settings as Gear, Settings2, ArrowRight, CheckCircle, Star, Phone, Zap, Award, Clock, ShieldCheck, FileText, Activity, Code, Target, Mail, Rocket } from 'lucide-react';
import FuturisticNavigation from '../components/FuturisticNavigation';
import FuturisticFooter from '../components/FuturisticFooter';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker']
    },
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      icon: Shield,
      features: ['AI threat detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Vulnerability scanning', 'Penetration testing'],
      price: 'Starting at $2,500/month',
      category: 'Security',
      benefits: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      icon: Settings,
      features: ['CI/CD pipelines', 'Automated testing', 'Container orchestration', 'Monitoring setup', 'Infrastructure as code', 'GitOps'],
      price: 'Starting at $1,200/month',
      category: 'Development',
      benefits: ['80% faster deployment', '90% fewer errors', 'Continuous integration', 'Automated scaling'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Monitoring', 'Migration services'],
      price: 'Starting at $1,000/month',
      category: 'Data',
      benefits: ['50% performance boost', 'Zero data loss', 'Automated backups', 'Real-time monitoring'],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Cloud, Security, DevOps & Database Solutions"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and database management. Expert solutions for modern businesses."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
      />
      <Analytics />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <FuturisticNavigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
                Comprehensive IT Solutions for Modern Businesses
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Expert IT services including cloud migration, cybersecurity, DevOps, and database management. 
                Transform your technology infrastructure with our proven solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free IT Assessment
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

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <service.icon className="w-16 h-16 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xl font-bold text-cyan-400 mb-4 neon-text">{service.price}</div>
                    <a
                      href="/contact"
                      className="cyber-button px-6 py-3 font-semibold"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get a free IT assessment and discover how we can help your business
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Assessment
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

        <FuturisticFooter />
      </div>
    </>
  );
};

export default ITServicesPage;