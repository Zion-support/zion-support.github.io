'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Shield, Settings, Database, Phone, Mail, MapPin, CheckCircle, ArrowRight, Star, TrendingUp, Users, Award, Lock, Code, Smartphone, FileText, Search, Bot, Camera, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap, Target, BarChart, MessageSquare, Eye, Sparkles, Brain, Cpu, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security'],
      link: '/cloud-migration',
      color: 'text-blue-400'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      benefits: ['99.9% threat prevention', '24/7 monitoring', 'Compliance assurance', 'Rapid response'],
      link: '/cybersecurity',
      color: 'text-red-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      benefits: ['80% faster deployments', '90% fewer errors', 'Automated testing', 'Continuous integration'],
      link: '/devops',
      color: 'text-green-400'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      benefits: ['60% performance boost', 'Zero data loss', 'Automated backups', 'Enhanced security'],
      link: '/database',
      color: 'text-purple-400'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation guidance',
      icon: Briefcase,
      price: '$1,099/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      benefits: ['Strategic alignment', 'Technology roadmap', 'Cost optimization', 'Future-proofing'],
      link: '/it-consulting',
      color: 'text-cyan-400'
    },
    {
      title: 'Network Solutions',
      description: 'Comprehensive network design, implementation, and management',
      icon: Wifi,
      price: '$1,399/month',
      features: ['Network Design', 'Security Implementation', 'Performance Monitoring', 'Troubleshooting'],
      benefits: ['99.9% uptime', 'Enhanced security', 'Optimized performance', 'Proactive monitoring'],
      link: '/network-solutions',
      color: 'text-orange-400'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development',
      icon: Smartphone,
      price: '$2,499/month',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization'],
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      link: '/mobile-app-development',
      color: 'text-indigo-400'
    },
    {
      title: 'System Administration',
      description: 'Comprehensive system administration and infrastructure management',
      icon: Cpu,
      price: '$1,299/month',
      features: ['Server Management', 'User Administration', 'System Monitoring', 'Maintenance'],
      benefits: ['Optimized performance', 'Reduced downtime', 'Proactive maintenance', 'Cost efficiency'],
      link: '/system-administration',
      color: 'text-teal-400'
    }
  ];

  const additionalServices = [
    {
      title: 'IT Infrastructure Design',
      description: 'Custom infrastructure solutions tailored to your business needs',
      icon: Building,
      price: '$1,799/month',
      features: ['Architecture Design', 'Hardware Selection', 'Scalability Planning', 'Cost Analysis'],
      benefits: ['Future-proof design', 'Cost optimization', 'Scalable architecture', 'Performance optimization'],
      link: '/it-infrastructure-design',
      color: 'text-yellow-400'
    },
    {
      title: 'Performance Optimization',
      description: 'System and application performance tuning and optimization',
      icon: Zap,
      price: '$1,099/month',
      features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Implementation', 'Monitoring Setup'],
      benefits: ['50% performance boost', 'Reduced resource usage', 'Better user experience', 'Cost savings'],
      link: '/performance-optimization',
      color: 'text-pink-400'
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning',
      icon: Shield,
      price: '$799/month',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Testing & Validation'],
      benefits: ['Zero data loss', 'Quick recovery', 'Compliance assurance', 'Peace of mind'],
      link: '/backup-recovery',
      color: 'text-violet-400'
    },
    {
      title: 'IT Project Management',
      description: 'Professional project management for IT implementations',
      icon: Calendar,
      price: '$1,499/month',
      features: ['Project Planning', 'Resource Management', 'Timeline Control', 'Risk Management'],
      benefits: ['On-time delivery', 'Budget control', 'Quality assurance', 'Stakeholder satisfaction'],
      link: '/it-project-management',
      color: 'text-amber-400'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and IT consulting. Transform your technology infrastructure with our expert solutions."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'IT consulting', 'network solutions', 'system administration', 'IT infrastructure']}
        canonicalUrl="https://ziontechgroup.com/it-services"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'IT Services',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          description: 'Comprehensive IT services including cloud migration, cybersecurity, DevOps, and database management.',
          serviceType: 'Information Technology Services',
          areaServed: 'US',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://ziontechgroup.com/it-services',
            servicePhone: '+1-302-464-0950'
          }
        }}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="IT Services"
              >
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Comprehensive Technology Solutions for Modern Business
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your technology infrastructure with our comprehensive IT services. From cloud migration to cybersecurity, 
                we provide end-to-end solutions that drive efficiency, security, and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
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

          {/* Core IT Services Section */}
          <section className="mb-16" aria-labelledby="core-services-heading">
            <h2 id="core-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Core IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Essential IT services that form the foundation of modern business technology
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

          {/* Additional Services Section */}
          <section className="mb-16" aria-labelledby="additional-services-heading">
            <h2 id="additional-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Additional Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Specialized IT services to enhance your technology infrastructure
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {additionalServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
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

          {/* Why Choose Our IT Services */}
          <section className="mb-16" aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our IT Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Enterprise Security</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bank-level security with SOC 2 Type II certification, 24/7 monitoring, and advanced threat protection.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven Results</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We've helped businesses achieve 99.9% uptime, 50% cost reduction, and 80% faster deployments.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Expert Team</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Certified professionals with years of experience in enterprise IT solutions and cloud technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Transform Your IT Infrastructure?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
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