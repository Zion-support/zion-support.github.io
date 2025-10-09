'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Target, Users, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Brain, Settings, Lock, BarChart, Globe, Activity, TrendingUp } from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Strategy & Planning',
      description: 'Comprehensive cloud migration strategy tailored to your business needs and goals',
      features: ['Cloud readiness assessment', 'Migration roadmap', 'Cost optimization analysis', 'Risk mitigation planning'],
      benefits: ['30% cost reduction', '99.9% uptime guarantee', 'Scalable infrastructure', 'Enhanced security']
    },
    {
      icon: Server,
      title: 'Infrastructure Migration',
      description: 'Seamless migration of servers, applications, and data to cloud platforms',
      features: ['Server migration', 'Application migration', 'Database migration', 'Zero-downtime migration'],
      benefits: ['Minimal downtime', 'Data integrity', 'Performance optimization', 'Automated scaling']
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Secure and efficient migration of databases to cloud-native solutions',
      features: ['Schema migration', 'Data migration', 'Performance tuning', 'Backup & recovery'],
      benefits: ['Improved performance', 'Enhanced security', 'Automated backups', 'Global availability']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation and compliance management',
      features: ['Security hardening', 'Compliance auditing', 'Access management', 'Threat monitoring'],
      benefits: ['Bank-level security', 'Compliance ready', '24/7 monitoring', 'Incident response']
    }
  ];

  const cloudPlatforms = [
    {
      name: 'Amazon Web Services (AWS)',
      icon: '☁️',
      description: 'Leading cloud platform with comprehensive services',
      features: ['EC2, S3, RDS', 'Lambda functions', 'Auto Scaling', 'Global infrastructure']
    },
    {
      name: 'Microsoft Azure',
      icon: '🔷',
      description: 'Enterprise-focused cloud platform with hybrid capabilities',
      features: ['Virtual Machines', 'Azure SQL', 'Active Directory', 'Hybrid cloud']
    },
    {
      name: 'Google Cloud Platform (GCP)',
      icon: '🔵',
      description: 'AI and machine learning focused cloud platform',
      features: ['Compute Engine', 'BigQuery', 'AI/ML services', 'Kubernetes Engine']
    },
    {
      name: 'Multi-Cloud Solutions',
      icon: '🌐',
      description: 'Hybrid and multi-cloud strategies for maximum flexibility',
      features: ['Cross-cloud management', 'Disaster recovery', 'Cost optimization', 'Vendor independence']
    }
  ];

  const migrationProcess = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure and cloud readiness',
      duration: '1-2 weeks',
      deliverables: ['Infrastructure audit', 'Migration strategy', 'Cost analysis', 'Timeline planning']
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Design cloud architecture and migration approach',
      duration: '2-3 weeks',
      deliverables: ['Cloud architecture', 'Security design', 'Migration plan', 'Testing strategy']
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Execute migration with minimal downtime and maximum security',
      duration: '2-4 weeks',
      deliverables: ['Data migration', 'Application migration', 'Testing & validation', 'Go-live support']
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Post-migration optimization and ongoing support',
      duration: 'Ongoing',
      deliverables: ['Performance tuning', 'Cost optimization', '24/7 support', 'Monitoring setup']
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,999/month',
      marketPrice: '$8,000-15,000/month',
      description: 'Perfect for small businesses with basic cloud needs',
      features: [
        'Up to 10 servers',
        'Basic migration support',
        'Standard security',
        'Email support',
        'Monthly reporting',
        'Basic monitoring'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$7,999/month',
      marketPrice: '$20,000-40,000/month',
      description: 'Comprehensive solution for growing enterprises',
      features: [
        'Up to 100 servers',
        'Advanced migration tools',
        'Enhanced security',
        'Priority support',
        'Real-time monitoring',
        'Custom integrations',
        'Compliance management',
        'Disaster recovery'
      ],
      popular: true
    },
    {
      name: 'Custom Solution',
      price: 'Custom',
      marketPrice: '$50,000-200,000/month',
      description: 'Tailored solution for large organizations',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        'Enterprise security',
        '24/7 dedicated support',
        'Custom monitoring',
        'White-label options',
        'On-premise hybrid',
        'Global deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group migrated our entire infrastructure to AWS with zero downtime. We saved 40% on costs and improved performance by 60%.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Finance Plus',
      role: 'IT Director',
      content: 'The migration was seamless and secure. Our compliance requirements were met perfectly, and we now have 99.9% uptime.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'RetailMax',
      role: 'VP of Technology',
      content: 'Outstanding service and expertise. The team handled our complex multi-cloud migration flawlessly.',
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by 30-50% with cloud optimization',
      stat: '30-50%'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Improve application performance and scalability',
      stat: '60%'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enhanced security with enterprise-grade protection',
      stat: '99.9%'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Deploy applications globally with low latency',
      stat: '200+'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services for AWS, Azure, and GCP. Reduce costs by 30-50% and improve performance by 60%. Zero-downtime migration guaranteed." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, cloud services, infrastructure migration" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
                <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
                <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
                <a href="tel:+13024640950" className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud Migration Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                Seamless Migration to AWS, Azure, and GCP
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional cloud migration services that reduce costs by 30-50%, improve performance by 60%, and ensure zero-downtime migration with enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Get Migration Quote
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

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose Our Cloud Migration Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Cloud Migration Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cloud Platforms Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Supported Cloud Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{platform.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{platform.description}</p>
                  <div className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-cyan-400">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Migration Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Migration Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {migrationProcess.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{step.description}</p>
                  <div className="text-xs text-cyan-400 mb-3">Duration: {step.duration}</div>
                  <div className="space-y-1">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="text-xs text-gray-300">
                        • {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose the migration plan that fits your infrastructure needs. All plans include our core migration services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    {plan.marketPrice !== 'Custom' && (
                      <>
                        <div className="text-sm text-gray-400 mb-2">Market: {plan.marketPrice}</div>
                        <div className="text-sm text-green-400 mb-4">Save 60-80% vs market</div>
                      </>
                    )}
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - Cloud Migration Services`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get a free migration assessment and discover how much you can save with cloud migration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-cyan-500/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Solutions</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Services</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cloud Migration</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Consulting</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Home</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
                  <li><a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudMigrationServicesPage;