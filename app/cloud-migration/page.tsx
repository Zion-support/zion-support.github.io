import React, { lazy } from 'react';
import { Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Server, Database, Users, Clock } from 'lucide-react';
<<<<<<< HEAD

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
const CloudMigrationPage: React.FC = React.memo(() => {
  const features = [
    {
      icon: Cloud,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption',
      benefits: ['Zero downtime', 'Data integrity', 'Rollback capability']
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Secure and efficient migration of databases and data warehouses',
      benefits: ['Data validation', 'Incremental sync', 'Backup & recovery']
    },
    {
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Complete cloud infrastructure setup and configuration',
      benefits: ['Auto-scaling', 'Load balancing', 'Security configuration']
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security throughout the migration process',
      benefits: ['Data encryption', 'Access controls', 'Compliance']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
<<<<<<< HEAD
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
=======
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency',
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      benefits: ['Auto-scaling', 'Load balancing', 'Performance monitoring', 'Cost optimization']
    },
    {
      icon: Target,
      title: 'Multi-Cloud Strategy',
<<<<<<< HEAD
      description: 'Design and implement multi-cloud architectures for maximum flexibility and redundancy.',
=======
      description: 'Design and implement multi-cloud architectures for maximum flexibility and redundancy',
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      benefits: ['Vendor independence', 'Disaster recovery', 'Cost optimization', 'Flexibility']
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      duration: '1-2 weeks',
      icon: CheckCircle
    },
    {
      step: '02',
<<<<<<< HEAD
      title: 'Architecture Design',
      description: 'Design optimal cloud architecture tailored to your business needs.',
      duration: '1-2 weeks'
=======
      title: 'Planning',
      description: 'Create detailed migration plan with timelines and rollback strategies',
      duration: '1-2 weeks',
      icon: Target
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Execute the migration with zero downtime and data integrity',
      duration: '2-4 weeks',
      icon: Cloud
    },
    {
      step: '04',
      title: 'Optimization',
<<<<<<< HEAD
      description: 'Optimize performance and provide ongoing support and monitoring.',
      icon: TrendingUp,
      duration: 'Ongoing'
    }
  ];

=======
      description: 'Post-migration optimization and ongoing support',
      duration: 'Ongoing',
      icon: TrendingUp
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Improve scalability and flexibility',
    'Enhanced security and compliance',
    'Better disaster recovery capabilities',
    'Access to latest cloud technologies',
    'Improved performance and reliability',
    'Simplified IT management',
    '24/7 monitoring and support'
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$5,000',
      description: 'Comprehensive infrastructure assessment and migration planning',
      features: [
        'Infrastructure audit',
        'Migration strategy',
        'Cost analysis',
        'Timeline planning',
        'Risk assessment'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$15,000',
      description: 'Complete migration service for small to medium businesses',
      features: [
        'Everything in Assessment',
        'Data migration',
        'Application migration',
        'Testing and validation',
        '30 days support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      description: 'Full-service migration for large enterprises',
      features: [
        'Everything in Standard',
        'Custom architecture design',
        'Multi-cloud strategy',
        'Advanced security setup',
        '6 months support',
        'Dedicated team'
      ],
      popular: false
    }
  ];

<<<<<<< HEAD
  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40% with cloud optimization.',
      percentage: '40%'
    },
    {
      title: 'Improved Performance',
      description: 'Achieve 99.9% uptime with cloud infrastructure.',
      percentage: '99.9%'
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with automated updates and monitoring.',
      percentage: '100%'
    },
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically.',
      percentage: 'Unlimited'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                Cloud Migration
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Seamlessly migrate your infrastructure to the cloud with our expert migration services. 
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Start Migration
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Free Assessment
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our cloud migration services cover every aspect of your infrastructure transition, 
                  from planning to optimization.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Migration Process Section */}
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
                <p className="text-xl text-gray-300">A proven methodology for successful cloud migrations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {migrationSteps.map((step, index) => (
                  <div key={index} className="cyber-card p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      {step.icon && (
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <div className="text-cyan-400 font-semibold">Duration: {step.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                          <p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Ready for Cloud Migration?</h3>
                  <p className="text-gray-300 mb-6">
                    Get a free assessment of your current infrastructure and migration readiness. 
                    Our experts will provide a detailed migration plan and cost estimate.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="/contact"
                      className="cyber-button w-full inline-flex items-center justify-center py-3"
                    >
                      Get Free Assessment
                    </a>
                    <a
                      href="/demo"
                      className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2>
                <p className="text-xl text-gray-300">Choose the migration package that fits your needs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {plan.price}
                        <span className="text-lg text-gray-400"> {plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses that have successfully migrated to the cloud with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Your Migration
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services with zero downtime. Migrate your infrastructure to AWS, Azure, or GCP." />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Assessment
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud migration solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 4-step process that ensures successful cloud migration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 mb-2">{step.description}</p>
                <p className="text-sm text-blue-400 font-medium">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Migration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of cloud migration with our expert services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Migration Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that fits your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get a free assessment and discover how cloud migration can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Assessment
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      <Footer />
    </div>
  );
});

CloudMigrationPage.displayName = 'CloudMigrationPage';

export default CloudMigrationPage;