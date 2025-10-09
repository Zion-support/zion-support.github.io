'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, Network, Server, Lock, Users, Phone, Mail, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization'],
      benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', '24/7 Monitoring']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security protection for your digital assets',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      benefits: ['Protection Against Threats', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and secure your data infrastructure',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery'],
      benefits: ['Improved Performance', 'Data Security', 'Reduced Downtime', 'Better Reliability']
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment processes',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      benefits: ['Faster Deployments', 'Reduced Errors', 'Better Collaboration', 'Improved Quality']
    },
    {
      icon: Network,
      title: 'Network Solutions',
      description: 'Robust and secure network infrastructure',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring'],
      benefits: ['Enhanced Connectivity', 'Improved Security', 'Better Performance', 'Reliable Operations']
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration and maintenance',
      features: ['Server Setup', 'Performance Monitoring', 'Security Hardening', 'Maintenance'],
      benefits: ['Optimal Performance', 'Enhanced Security', 'Reduced Downtime', 'Cost Efficiency']
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$299/month',
      description: 'Essential IT services for small businesses',
      features: ['Basic Monitoring', 'Email Support', 'Monthly Reports', 'Standard Security']
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Comprehensive IT solutions for growing companies',
      features: ['Advanced Monitoring', 'Priority Support', 'Weekly Reports', 'Enhanced Security', 'Cloud Management']
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'Full-service IT management for large organizations',
      features: ['24/7 Monitoring', 'Dedicated Support', 'Real-time Reports', 'Advanced Security', 'Custom Solutions']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '80%', label: 'Faster Response' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services & Infrastructure Solutions - Zion Tech Group"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and DevOps. Reliable, secure, and scalable solutions."
        keywords={['IT services', 'cloud infrastructure', 'cybersecurity', 'database management', 'DevOps', 'network solutions']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                IT Services & Infrastructure Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Reliable, secure, and scalable IT infrastructure for your business
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, we provide comprehensive IT services that keep your 
                business running smoothly while protecting your digital assets and data.
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
                  <span>Get Free Assessment</span>
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
          <section className="mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
>>>>>>> cursor/website-audit-and-update-with-deployment-3d8d
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
<<<<<<< HEAD
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.technologies && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="text-xs text-gray-500">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div className="text-cyan-400 font-bold mb-4 text-lg">{service.price}</div>
                {service.contactInfo && (
                  <div className="text-xs text-gray-500 mb-4">
                    {service.contactInfo}
                  </div>
                )}
                <Link
                  href="/contact"
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
=======
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our experts assess your current setup and recommend the best solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Assessment</span>
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