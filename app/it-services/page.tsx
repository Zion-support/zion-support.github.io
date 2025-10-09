'use client';
import React from 'react';
import { Settings, Cloud, Database, Shield, Cpu, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, TrendingUp, Users, Award, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Comprehensive cloud migration, setup, optimization, and management services for all major cloud providers.',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      price: 'Starting at $1,299/month',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and compliance management.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $1,599/month',
      color: 'text-red-400'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      price: 'Starting at $1,199/month',
      color: 'text-green-400'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and analytics.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      price: 'Starting at $899/month',
      color: 'text-purple-400'
    },
    {
      icon: Cpu,
      title: 'IT Infrastructure',
      description: 'Design and implement robust IT infrastructure solutions with security and performance optimization.',
      features: ['Network Design', 'Server Setup', 'Storage Solutions', 'Monitoring Systems'],
      price: 'Starting at $1,400/month',
      color: 'text-indigo-400'
    },
    {
      icon: Globe,
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization.',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      price: 'Starting at $1,400/month',
      color: 'text-cyan-400'
    }
  ];

  const industries = [
    { name: 'Healthcare', solutions: ['HIPAA Compliance', 'Medical Data Security', 'Telemedicine Infrastructure', 'Patient Management Systems'] },
    { name: 'Finance', solutions: ['PCI DSS Compliance', 'Fraud Detection Systems', 'High-Frequency Trading', 'Risk Management'] },
    { name: 'Manufacturing', solutions: ['IoT Integration', 'Supply Chain Management', 'Quality Control Systems', 'Predictive Maintenance'] },
    { name: 'Retail', solutions: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Payment Processing'] }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We analyze your current IT infrastructure and identify areas for improvement and optimization.',
      icon: Settings
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Develop a comprehensive IT strategy tailored to your business goals and requirements.',
      icon: Cpu
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy and configure IT solutions with minimal disruption to your business operations.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Support',
      description: 'Provide ongoing maintenance, monitoring, and support to ensure optimal performance.',
      icon: Shield
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions for enterprise success."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database services', 'infrastructure', 'IT consulting']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              IT Services
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Comprehensive IT Solutions for Modern Enterprise
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your IT infrastructure with our comprehensive suite of services. From cloud migration 
              to cybersecurity, we provide enterprise-grade solutions that drive efficiency, security, and growth.
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
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">99.9% Uptime</h3>
                <p className="text-gray-300">Enterprise-grade reliability with guaranteed 99.9% uptime for all critical systems.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support and monitoring for uninterrupted operations.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance for your critical data and infrastructure.</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={`font-bold text-lg mb-4 text-center ${service.color}`}>{service.price}</div>
                  <div className="text-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Industry Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our IT Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Case Study */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text text-center">Success Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Global Manufacturing Company</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    We transformed the IT infrastructure for a global manufacturing company, migrating their entire 
                    system to the cloud while improving security and reducing costs by 40%. The new infrastructure 
                    supports 50,000+ users across 25 countries with 99.9% uptime.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">40%</div>
                      <div className="text-gray-300 text-sm">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">99.9%</div>
                      <div className="text-gray-300 text-sm">Uptime Achieved</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Complete cloud migration
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Enhanced security posture
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Improved system performance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Global scalability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your IT?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how our IT services can modernize your infrastructure and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get IT Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
    </>
  );
};

export default ITServicesPage;