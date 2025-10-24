import React from 'react';
import { Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Server, Database, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security protocols throughout the migration process',
      benefits: ['End-to-end encryption', 'Compliance adherence', 'Security audits']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your applications for cloud-native performance and scalability',
      benefits: ['Auto-scaling', 'Load balancing', 'Performance monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$5,000',
      period: 'one-time',
      description: 'Perfect for small businesses looking to migrate to the cloud',
      features: [
        'Up to 5 servers',
        'Basic data migration',
        'Email support',
        '30-day warranty'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$15,000',
      period: 'one-time',
      description: 'Comprehensive migration solution for growing businesses',
      features: [
        'Up to 20 servers',
        'Advanced data migration',
        'Priority support',
        '90-day warranty',
        'Performance optimization',
        'Security hardening'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'quote',
      description: 'Full-scale migration with dedicated support and custom solutions',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        '24/7 dedicated support',
        '1-year post-migration support',
        'Full monitoring suite',
        'Multi-cloud architecture',
        'Dedicated account manager',
        'Custom integrations'
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
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cloud Migration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Seamlessly migrate your infrastructure to the cloud with our expert team. 
              Zero downtime, maximum security, and optimized performance guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Assessment
              </a>
              <a
                href="#features"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <Navigation />

      <main className="relative z-10">
        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Migration?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive approach ensures a smooth, secure, and cost-effective migration to the cloud.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
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

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300">
                See the measurable impact of our cloud migration services
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.percentage}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Migration Packages
              </h2>
              <p className="text-xl text-gray-300">
                Choose the perfect migration package for your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-slate-700'
                } hover:border-cyan-400 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Get a free assessment and discover how much you can save with our cloud migration services.
            </p>
            <a
              href="#contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Free Assessment
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CloudMigrationPage;