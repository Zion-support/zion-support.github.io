'use client';
import React, { useState, useEffect } from 'react';
import { Cpu, Cloud, Shield, Database, Settings, Users, Lock, Globe, Code, Smartphone, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Phone, Mail, MapPin, CheckCircle, ArrowRight, Star, Award, TrendingUp, Zap, Target, BarChart, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      icon: Cloud,
      price: 'Custom Pricing',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      features: [
        'AWS, Azure, GCP migration',
        'Zero-downtime migration',
        'Data security & compliance',
        'Cost optimization',
        'Performance monitoring',
        '24/7 support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery'
      ],
      useCases: [
        'Legacy system modernization',
        'Multi-cloud strategies',
        'Hybrid cloud solutions',
        'Disaster recovery planning'
      ],
      testimonials: [
        {
          name: 'Jennifer Martinez',
          company: 'CloudFirst Corp',
          quote: 'Migration was seamless and we saved 60% on infrastructure costs.',
          rating: 5
        }
      ]
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      icon: Users,
      price: '$150/hour',
      description: 'Strategic IT consulting to align technology with business objectives and drive digital transformation.',
      features: [
        'Technology strategy planning',
        'Digital transformation roadmap',
        'IT infrastructure assessment',
        'Security audit & compliance',
        'Process optimization',
        'Team training & development'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology risks',
        'Improve operational efficiency',
        'Stay ahead of technology trends'
      ],
      useCases: [
        'Digital transformation',
        'IT strategy development',
        'Technology selection',
        'Process improvement'
      ],
      testimonials: [
        {
          name: 'Mark Thompson',
          company: 'InnovateTech',
          quote: 'Their consulting helped us modernize our entire IT infrastructure.',
          rating: 5
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      icon: Shield,
      price: '$299/month',
      description: 'Comprehensive cybersecurity services to protect your business from evolving threats and ensure compliance.',
      features: [
        'Threat detection & response',
        'Security assessment & audit',
        'Penetration testing',
        'Compliance management',
        'Security training',
        'Incident response'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks',
        'Maintain business continuity'
      ],
      useCases: [
        'SOC 2 compliance',
        'GDPR compliance',
        'PCI DSS compliance',
        'General security hardening'
      ],
      testimonials: [
        {
          name: 'Amanda Foster',
          company: 'SecureData Inc',
          quote: 'Our security posture improved dramatically with their solutions.',
          rating: 5
        }
      ]
    },
    {
      id: 'database-management',
      name: 'Database Management',
      icon: Database,
      price: '$199/month',
      description: 'Expert database administration and optimization services for improved performance and reliability.',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening',
        'Monitoring & maintenance',
        'Migration services'
      ],
      benefits: [
        'Improve database performance',
        'Ensure data integrity',
        'Reduce downtime',
        'Optimize costs'
      ],
      useCases: [
        'Database performance issues',
        'Data migration projects',
        'Backup strategy implementation',
        'Database security hardening'
      ],
      testimonials: [
        {
          name: 'Robert Kim',
          company: 'DataFlow Systems',
          quote: 'Database performance improved by 300% with their optimization.',
          rating: 5
        }
      ]
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      icon: Settings,
      price: 'Custom Pricing',
      description: 'Seamless integration of disparate systems to create a unified, efficient technology ecosystem.',
      features: [
        'API development & integration',
        'Legacy system integration',
        'Real-time data synchronization',
        'Custom middleware development',
        'Third-party integrations',
        'Testing & validation'
      ],
      benefits: [
        'Unify disparate systems',
        'Improve data flow',
        'Reduce manual processes',
        'Enhance productivity'
      ],
      useCases: [
        'ERP system integration',
        'CRM integration',
        'E-commerce platform integration',
        'Legacy system modernization'
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          company: 'IntegratePro',
          quote: 'Seamless integration saved us 20 hours per week.',
          rating: 5
        }
      ]
    },
    {
      id: 'network-security',
      name: 'Network Security',
      icon: Lock,
      price: '$249/month',
      description: 'Comprehensive network security solutions to protect your infrastructure from external and internal threats.',
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'VPN setup & management',
        'Network monitoring',
        'Security policy implementation',
        'Incident response'
      ],
      benefits: [
        'Protect network infrastructure',
        'Prevent unauthorized access',
        'Monitor network activity',
        'Ensure compliance'
      ],
      useCases: [
        'Network security hardening',
        'Remote work security',
        'Compliance requirements',
        'Threat prevention'
      ],
      testimonials: [
        {
          name: 'David Wilson',
          company: 'NetSecure LLC',
          quote: 'Network security incidents dropped to zero after implementation.',
          rating: 5
        }
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Stethoscope,
      description: 'HIPAA-compliant IT solutions for healthcare providers',
      services: ['EMR integration', 'Telemedicine platforms', 'Data security', 'Compliance management']
    },
    {
      name: 'Finance',
      icon: CreditCard,
      description: 'Secure financial technology solutions',
      services: ['Payment processing', 'Fraud detection', 'Compliance', 'Risk management']
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Industrial IT solutions for smart manufacturing',
      services: ['IoT integration', 'Supply chain management', 'Quality control', 'Predictive maintenance']
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'E-commerce and retail technology solutions',
      services: ['POS systems', 'Inventory management', 'Customer analytics', 'Omnichannel solutions']
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Educational technology and learning management systems',
      services: ['LMS platforms', 'Student information systems', 'Online learning', 'Assessment tools']
    },
    {
      name: 'Transportation',
      icon: Car,
      description: 'Logistics and transportation management systems',
      services: ['Fleet management', 'Route optimization', 'Tracking systems', 'Compliance monitoring']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, consulting, cybersecurity, database management, system integration, and network security. Expert IT solutions for your business."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'database management', 'system integration', 'network security', 'IT consulting', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Expert IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From cloud migration to cybersecurity, our comprehensive IT services help businesses 
              leverage technology for growth, security, and efficiency. Trust our expert team to 
              handle your technology needs.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 neon-text mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 neon-text mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 neon-text mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 neon-text mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </section>

          {/* IT Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our IT Services
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <article key={service.id} className={`quantum-card p-8 energy-pulse transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-blue-400 mr-2" />
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {service.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm italic mb-2">"{testimonial.quote}"</p>
                      <div className="text-cyan-400 text-sm font-medium">
                        {testimonial.name}, {testimonial.company}
                      </div>
                    </div>
                  ))}

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className="cyber-button w-full text-center justify-center inline-flex items-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Industries We Serve
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={industry.name} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-300 text-sm">{industry.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert team help you build a robust, secure, and scalable IT infrastructure 
                that drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
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
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default ITServicesPage;