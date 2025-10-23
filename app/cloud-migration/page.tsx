import React, { lazy } from 'react';
import { Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Server, Database } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const CloudMigrationPage: React.FC = () => {
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
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      benefits: ['Auto-scaling', 'Load balancing', 'Performance monitoring', 'Cost optimization']
    },
    {
      icon: Target,
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
      icon: CheckCircle
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design optimal cloud architecture tailored to your business needs.',
      duration: '1-2 weeks'
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
      description: 'Optimize performance and provide ongoing support and monitoring.',
      icon: TrendingUp,
      duration: 'Ongoing'
    }
  ];

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
                <Cloud> </Cloud>div>
              <h1>Cloud Migration
              </h1>
            </div>
            <p>Seamlessly migrate your infrastructure to the cloud with our expert migration services.
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg"
              >
                Start Migration
                <ArrowRight> </ArrowRight>a>
              <a>Free Assessment
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2>Comprehensive Cloud Migration</h2>
                <p>Our cloud migration services cover every aspect of your infrastructure transition,
                  from planning to optimization.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature> </feature>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle>{benefit}
                        </CheckCircle>li>
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
                <h2>Our Migration Process</h2>
                <p>A proven methodology for successful cloud migrations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {migrationSteps.map((step, index) => (
                  <div key={index} className="cyber-card p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        <span>{step.step}</span>
                      </div>
                      {step.icon && (
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <step> </step>div>
                      )}
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div>Duration: {step.duration}</div>
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
                  <h2>Why Choose Our Cloud Migration?</h2>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                          <CheckCircle> </CheckCircle>div>
                        <div>
                          <h3>{benefit.title}</h3>
                          <p>{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cyber-card p-8">
                  <h3>Ready for Cloud Migration?</h3>
                  <p>Get a free assessment of your current infrastructure and migration readiness.
                    Our experts will provide a detailed migration plan and cost estimate.
                  </p>
                  <div className="space-y-4">
                    <a>Get Free Assessment
                    </a>
                    <a>Schedule Consultation
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
                <h2>Transparent Migration Pricing</h2>
                <p>Choose the migration package that fits your needs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span>Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3>{plan.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {plan.price}
                        <span>{plan.period}</span>
                      </div>
                      <p>{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle>{feature}
                        </CheckCircle>li>
                      ))}
                    </ul>
                    <button>Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2>Ready to Migrate to the Cloud?</h2>
              <p>Join hundreds of businesses that have successfully migrated to the cloud with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button>Start Your Migration
                </button>
                <button>Contact Our Experts
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer> </Footer>div>
  );
};

CloudMigrationPage.displayName = 'CloudMigrationPage';

export default CloudMigrationPage;