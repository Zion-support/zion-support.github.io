'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Cloud,
    {}
      icon: Cloud,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption',
      benefits: ['Zero downtime', 'Data integrity', 'Rollback capability']
    },
    {
      icon: Database,
    {}
      icon: Database,
      title: 'Data Migration',
      description: 'Secure and efficient migration of databases and data warehouses',
      benefits: ['Data validation', 'Incremental sync', 'Backup & recovery']
    },
    {
      icon: Server,
    {}
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Complete cloud infrastructure setup and configuration',
      benefits: ['Auto-scaling', 'Load balancing', 'Security configuration']
    },
    {
      icon: Shield,
    {}
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security throughout the migration process',
      benefits: ['Data encryption', 'Access controls', 'Compliance']
    },
    {
      icon: Zap,
    {}
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
      icon: Target,
    {}
      icon: Target,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement multi-cloud architectures for maximum flexibility and redundancy.',
      benefits: ['Vendor independence', 'Disaster recovery', 'Cost optimization', 'Flexibility']
    }
  ];

  const migrationSteps = [
    {}
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      duration: '1-2 weeks',
      icon: CheckCircle,
    },
    {}
      step: '02',
      title: 'Architecture Design',
      description: 'Design optimal cloud architecture tailored to your business needs.',
      duration: '1-2 weeks'},
    {}
      step: '03',
      title: 'Migration',
      description: 'Execute the migration with zero downtime and data integrity',
      duration: '2-4 weeks',
      icon: Cloud,
    },
    {}
      step: '04',
      title: 'Optimization',
      description: 'Optimize performance and provide ongoing support and monitoring.',
      icon: TrendingUp,
      duration: 'Ongoing'}
  ];

  const pricingPlans = [
    {}
      name: 'Assessment',
      price: '$5,000',
      description: 'Comprehensive infrastructure assessment and migration planning',
      features: [,
        'Infrastructure audit',
        'Migration strategy',
        'Cost analysis',
        'Timeline planning',
        'Risk assessment'
      ],
      popular: false,
    },
    {}
      name: 'Standard Migration',
      price: '$15,000',
      description: 'Complete migration service for small to medium businesses',
      features: [,
        'Everything in Assessment',
        'Data migration',
        'Application migration',
        'Testing and validation',
        '30 days support'
      ],
      popular: true,
    },
    {}
      name: 'Enterprise Migration',
      price: 'Custom',
      description: 'Full-service migration for large enterprises',
      features: [,
        'Everything in Standard',
        'Custom architecture design',
        'Multi-cloud strategy',
        'Advanced security setup',
        '6 months support',
        'Dedicated team'
      ],
      popular: false,
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">{/* Hero Section */}</div>
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6"></section>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4"></div>
                <Cloud className="w-8 h-8 text-white" />
              <h1 className="text-5xl font-bold text-white neon-text">Cloud Migration<p className="text-xl text-gray-300 mb-8 leading-relaxed">Seamlessly migrate your infrastructure to the cloud with our expert migration services.</p>
              <h1 className="text-5xl font-bold text-white neon-text">Cloud Migration</h1><p className="text-xl text-gray-300 mb-8 leading-relaxed">Seamlessly migrate your infrastructure to the cloud with our expert migration services.</p>
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.</p>
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                Cloud Migration;</h1>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Seamlessly migrate your infrastructure to the cloud with our expert migration services.
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg"
              >Start Migration</a>
                <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              <a
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >Free Assessment</a>
              </a>
            </div>
          </section>

              >
                Start Migration;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a;
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Free Assessment;
              </a>)
            </div>)
          </section>)
),
          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4"></div>
              <div className="text-center mb-16"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration<p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud migration services cover every aspect of your infrastructure transition,</p>
            <div className="container mx-auto px-4"></section>
              <div className="text-center mb-16"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud migration services cover every aspect of your infrastructure transition,</p>
                  from planning to optimization.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                      <feature.icon className="w-8 h-8 text-white" />
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our cloud migration services cover every aspect of your infrastructure transition)
                  from planning to optimization.
                </p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
                {features.map((feature, index) => (</div>
                  <div key={index} className="cyber-card p-8 text-center group hover: scale-105 transition-transform duration-300">,</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">,</div>
                      <feature.icon className="w-8 h-8 text-white" />,
                    </div>,
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (}</div>
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (}
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Migration Process Section */}
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process<p className="text-xl text-gray-300">A proven methodology for successful cloud migrations<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{migrationSteps.map((step, index) => (</div>
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
                <p className="text-xl text-gray-300">A proven methodology for successful cloud migrations</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
                {migrationSteps.map((step, index) => (</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {migrationSteps.map((step, index) => (}</div>
                  <div key={index} className="cyber-card p-6"></div>
                    <div className="flex items-center mb-4"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
            <div className="max-w-6xl mx-auto"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2><p className="text-xl text-gray-300">A proven methodology for successful cloud migrations</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{migrationSteps.map((step, index) => (</div>
                  <div key={index} className="cyber-card p-6"></div>
                    <div className="flex items-center mb-4"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      {step.icon && (
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                      {step.icon && (}
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                      )}
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p><div className="text-cyan-400 font-semibold">Duration: {step.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
                <div></div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?<div className="space-y-6">{benefits.map((benefit, index) => (</div>
              <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">,</div>
                <div>,</div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2>,
                  <div className="space-y-6">,
                    {benefits.map((benefit, index) => (</div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (}</div>
                      <div key={index} className="flex items-start"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1"></div>
            <div className="max-w-6xl mx-auto"></section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
                <div></div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2><div className="space-y-6">{benefits.map((benefit, index) => (</div>
                      <div key={index} className="flex items-start"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1"></div>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div></div>
                          <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cyber-card p-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-6">Ready for Cloud Migration?</h3><p className="text-gray-300 mb-6">Get a free assessment of your current infrastructure and migration readiness.</p>
                    Our experts will provide a detailed migration plan and cost estimate.</p>
                  </p>
                  <div className="space-y-4"></div>
                    <a;
                  <div className="space-y-4"></div>
                    <a
                      href="/contact"
                      className="cyber-button w-full inline-flex items-center justify-center py-3"
                    >Get Free Assessment<a
                      href="/demo"
                      className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                    >Schedule Consultation</a>
                    >
                      Get Free Assessment;
                    </a>
                    <a;
                      href="/demo"
                      className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                    >
                      Schedule Consultation;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing<p className="text-xl text-gray-300">Choose the migration package that fits your needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            <div className="max-w-6xl mx-auto"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2><p className="text-xl text-gray-300">Choose the migration package that fits your needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2>
                <p className="text-xl text-gray-300">Choose the migration package that fits your needs</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
                {pricingPlans.map((plan, index) => (</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (}</div>
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                    {plan.popular && (}</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular;
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div><span className="text-lg text-gray-400">{plan.period}</span>
                      <p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</ul>
                    <div className="text-center mb-6"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {plan.price}</div>
                        <span className="text-lg text-gray-400"> {plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (}
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${}
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>Get Started</button>
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'}
                        : 'bg-slate-700 text-white hover:bg-slate-600'}
                    }`}>
                      Get Started;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center"></section>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2><p className="text-xl text-gray-300 mb-8">Join hundreds of businesses that have successfully migrated to the cloud with our expert team.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="cyber-button px-8 py-4 text-lg">Start Your Migration<button className="cyber-button-outline px-8 py-4 text-lg">Contact Our Experts</button>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Your Migration;
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  Contact Our Experts;
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer /></Footer>
    </div>
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudMigrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Migration</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Migration Planning</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive assessment and planning to ensure a smooth cloud migration process.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Infrastructure Assessment</li>
                <li>• Migration Strategy</li>
                <li>• Risk Analysis</li>
                <li>• Timeline Planning</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Migration</h3>
              <p className="text-gray-300 mb-4">
                Secure and efficient migration of your data to cloud platforms.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Database Migration</li>
                <li>• File Transfer</li>
                <li>• Data Validation</li>
                <li>• Backup & Recovery</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Application Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration of your applications to cloud environments.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Application Assessment</li>
                <li>• Code Refactoring</li>
                <li>• Testing & Validation</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
