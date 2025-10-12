import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Zap, CheckCircle, Database } from 'lucide-react';
import Layout from '../layout';

export default function CloudMigrationProPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration across AWS, Azure, and Google Cloud platforms'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance throughout the migration process'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Data Migration',
      description: 'Safe and secure data migration with zero data loss guarantee'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize applications for cloud-native performance and scalability'
    }
  ];

  const migrationSteps = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and applications'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Detailed migration strategy and timeline development'
    },
    {
      step: '3',
      title: 'Migration',
      description: 'Execute migration with minimal downtime and maximum security'
    },
    {
      step: '4',
      title: 'Testing & Validation',
      description: 'Thorough testing to ensure all systems function correctly in the cloud'
    },
    {
      step: '5',
      title: 'Optimization',
      description: 'Fine-tune performance and optimize costs for maximum efficiency'
    },
    {
      step: '6',
      title: 'Support & Monitoring',
      description: 'Ongoing support and monitoring to ensure continued success'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$2,999',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 servers',
        'Basic cloud setup',
        'Data migration',
        'Email support',
        '30-day warranty'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$7,999',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 50 servers',
        'Advanced cloud architecture',
        'Zero-downtime migration',
        'Priority support',
        'Performance optimization',
        '90-day warranty'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited servers',
        'Custom cloud solutions',
        'Dedicated team',
        '24/7 support',
        'Custom SLA',
        '1-year warranty'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime and maximum security. Migrate to AWS, Azure, or Google Cloud with confidence." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cloud Migration
              </span>
              <br />
              <span className="text-white">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional cloud migration services with zero downtime and maximum security. 
              Migrate to AWS, Azure, or Google Cloud with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Migration Service?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional expertise and proven methodologies for successful cloud migration
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 6-step process for successful cloud migration
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Migration Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration package that fits your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your migration needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Migration
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
