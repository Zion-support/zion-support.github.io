import React from 'react';
import { CheckCircle, Star, ArrowRight, Cloud, Shield, Zap, Clock, Users, Database, Server } from 'lucide-react';
import Link from 'next/link';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Zero Downtime Migration',
      description: 'Migrate your applications and data without any service interruption using advanced migration techniques.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enhanced Security',
      description: 'Implement enterprise-grade security measures and compliance standards during the migration process.'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cost Optimization',
      description: 'Reduce your infrastructure costs by up to 40% with optimized cloud resource allocation and management.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Performance Monitoring',
      description: 'Continuous monitoring and optimization to ensure optimal performance in your new cloud environment.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Disaster Recovery',
      description: 'Implement robust backup and disaster recovery solutions to protect your critical business data.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring to ensure your cloud infrastructure runs smoothly.'
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and creation of a detailed migration roadmap.'
    },
    {
      step: '02',
      title: 'Security & Compliance',
      description: 'Implementation of security measures and ensuring compliance with industry standards and regulations.'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Seamless migration of applications, data, and services with zero downtime and minimal disruption.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing of migrated systems and optimization for performance and cost efficiency.'
    },
    {
      step: '05',
      title: 'Go-Live & Support',
      description: 'Final deployment and ongoing support to ensure smooth operation of your cloud infrastructure.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,999',
      period: '/project',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Email support',
        '30-day warranty',
        'Basic documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/project',
      features: [
        'Up to 100 servers',
        'Advanced migration strategy',
        'Priority support',
        '90-day warranty',
        'Comprehensive documentation',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Custom Solution',
      price: 'Contact us',
      period: '',
      features: [
        'Unlimited servers',
        'Custom migration approach',
        'Dedicated team',
        'Extended warranty',
        'White-label solution',
        'Ongoing support'
      ],
      popular: false
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', icon: '☁️', color: 'text-orange-500' },
    { name: 'Microsoft Azure', icon: '🔵', color: 'text-blue-500' },
    { name: 'Google Cloud', icon: '🔷', color: 'text-blue-400' },
    { name: 'IBM Cloud', icon: '🔵', color: 'text-blue-600' },
    { name: 'Oracle Cloud', icon: '🔴', color: 'text-red-500' },
    { name: 'Alibaba Cloud', icon: '🟠', color: 'text-orange-600' }
  ];

  const benefits = [
    {
      stat: '40%',
      description: 'Average cost reduction'
    },
    {
      stat: '99.9%',
      description: 'Uptime guarantee'
    },
    {
      stat: '50%',
      description: 'Faster deployment times'
    },
    {
      stat: '24/7',
      description: 'Monitoring and support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cloud className="w-4 h-4 mr-2" />
            Professional IT Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Migration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Seamlessly migrate your infrastructure to the cloud with zero downtime, enhanced security, and cost optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#process"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Process
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              See the impact our cloud migration services have on businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {benefit.stat}
                </div>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Migration Services
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need for a successful cloud migration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section id="process" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300">
              A proven 5-step process for successful cloud migration
            </p>
          </div>
          <div className="space-y-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Major Cloud Providers
            </h2>
            <p className="text-xl text-gray-300">
              We work with all leading cloud platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{provider.icon}</div>
                <h3 className={`text-lg font-semibold ${provider.color}`}>
                  {provider.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the migration package that fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free assessment and migration plan tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              📞 Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudMigrationPage;