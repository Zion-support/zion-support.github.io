import React, { lazy } from 'react';
import { Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Server, Database } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud;
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption',
      benefits: ['Zero downtime', 'Data integrity', 'Rollback capability']
    },
    {
      icon: Database;
      title: 'Data Migration',
      description: 'Secure and efficient migration of databases and data warehouses',
      benefits: ['Data validation', 'Incremental sync', 'Backup & recovery']
    },
    {
      icon: Server;
      title: 'Infrastructure Setup',
      description: 'Complete cloud infrastructure setup and configuration',
      benefits: ['Auto-scaling', 'Load balancing', 'Security configuration']
    },
    {
      icon: Shield;
      title: 'Security First',
      description: 'Enterprise-grade security throughout the migration process',
      benefits: ['Data encryption', 'Access controls', 'Compliance']
    },
    {
      icon: Zap;
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      benefits: ['Auto-scaling', 'Load balancing', 'Performance monitoring', 'Cost optimization']
    },
    {
      icon: Target;
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement multi-cloud architectures for maximum flexibility and redundancy.',
      benefits: ['Vendor independence', 'Disaster recovery', 'Cost optimization', 'Flexibility']
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      duration: '1-2 weeks',
      icon: CheckCircle;
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design optimal cloud architecture tailored to your business needs.',
      duration: '1-2 weeks',
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Execute the migration with zero downtime and data integrity',
      duration: '2-4 weeks',
      icon: Cloud;
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Optimize performance and provide ongoing support and monitoring.',
      icon: TrendingUp;
      duration: 'Ongoing',
    }
  ];

  const pricingPlans = [
    {
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
      popular: false;
    },
    {
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
      popular: true;
    },
    {
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
      popular: false;
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40% with cloud optimization.',
      percentage: '40%',
    },
    {
      title: 'Improved Performance',
      description: 'Achieve 99.9% uptime with cloud infrastructure.',
      percentage: '99.9%',
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with automated updates and monitoring.',
      percentage: '100%',
    },
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically.',
      percentage: 'Unlimited',
    }
  ];

<<<<<<< HEAD
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">{/* Hero Section */}</div>
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6"></section>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4"></div>
                <Cloud className="w-8 h-8 text-white" />
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className="text-5xl font-bold text-white neon-text">Cloud Migration<p className="text-xl text-gray-300 mb-8 leading-relaxed">Seamlessly migrate your infrastructure to the cloud with our expert migration services.</p>
=======
              <h1 className="text-5xl font-bold text-white neon-text">Cloud Migration</h1><p className="text-xl text-gray-300 mb-8 leading-relaxed">Seamlessly migrate your infrastructure to the cloud with our expert migration services.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.</p>
=======
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                Cloud Migration;
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Seamlessly migrate your infrastructure to the cloud with our expert migration services.
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a;
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                href="/contact"
                className="cyber-button px-8 py-4 text-lg"
<<<<<<< HEAD
              >Start Migration</a>
                <ArrowRight className="w-5 h-5 ml-2" />
              <a
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >Free Assessment</a>
              </a>
            </div>
          </section>

=======
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
          </section>,)
),
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
<<<<<<< HEAD
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
<<<<<<< HEAD
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration<p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud migration services cover every aspect of your infrastructure transition,</p>
=======
            <div className="container mx-auto px-4"></section>
              <div className="text-center mb-16"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud migration services cover every aspect of your infrastructure transition,</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  from planning to optimization.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                      <feature.icon className="w-8 h-8 text-white" />
=======
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our cloud migration services cover every aspect of your infrastructure transition)
                  from planning to optimization.
                </p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover: scale-105 transition-transform duration-300">,
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">,
                      <feature.icon className="w-8 h-8 text-white" />,
                    </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
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
<<<<<<< HEAD
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
<<<<<<< HEAD
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process<p className="text-xl text-gray-300">A proven methodology for successful cloud migrations<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{migrationSteps.map((step, index) => (</div>
=======
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
                <p className="text-xl text-gray-300">A proven methodology for successful cloud migrations</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
                {migrationSteps.map((step, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  <div key={index} className="cyber-card p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
=======
            <div className="max-w-6xl mx-auto"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2><p className="text-xl text-gray-300">A proven methodology for successful cloud migrations</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{migrationSteps.map((step, index) => (</div>
                  <div key={index} className="cyber-card p-6"></div>
                    <div className="flex items-center mb-4"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      {step.icon && (
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
<<<<<<< HEAD
            <div className="max-w-6xl mx-auto">
<<<<<<< HEAD
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?<div className="space-y-6">{benefits.map((benefit, index) => (</div>
=======
              <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">,
                <div>,
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2>,
                  <div className="space-y-6">,
                    {benefits.map((benefit, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
=======
            <div className="max-w-6xl mx-auto"></section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
                <div></div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2><div className="space-y-6">{benefits.map((benefit, index) => (</div>
                      <div key={index} className="flex items-start"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
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
<<<<<<< HEAD
                  <div className="space-y-4">
                    <a;
=======
                  <div className="space-y-4"></div>
                    <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                      href="/contact"
                      className="cyber-button w-full inline-flex items-center justify-center py-3"
<<<<<<< HEAD
                    >Get Free Assessment<a
                      href="/demo"
                      className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                    >Schedule Consultation</a>
=======
                    >
                      Get Free Assessment;
                    </a>
                    <a;
                      href="/demo"
                      className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                    >
                      Schedule Consultation;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50">
<<<<<<< HEAD
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
<<<<<<< HEAD
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing<p className="text-xl text-gray-300">Choose the migration package that fits your needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
=======
            <div className="max-w-6xl mx-auto"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2><p className="text-xl text-gray-300">Choose the migration package that fits your needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
=======
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2>
                <p className="text-xl text-gray-300">Choose the migration package that fits your needs</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div><span className="text-lg text-gray-400">{plan.period}</span>
                      <p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</ul>
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
<<<<<<< HEAD
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>Get Started</button>
=======
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700',}
                        : 'bg-slate-700 text-white hover:bg-slate-600'}
                    }`}>
                      Get Started;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
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
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <button className="cyber-button px-8 py-4 text-lg">Start Your Migration<button className="cyber-button-outline px-8 py-4 text-lg">Contact Our Experts</button>
=======
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Your Migration;
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  Contact Our Experts;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );

CloudMigrationPage.displayName = 'CloudMigrationPage';
,
export default CloudMigrationPage;