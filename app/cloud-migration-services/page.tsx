import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Shield, Zap, BarChart, CheckCircle, ArrowRight, Phone, Server, Database, Globe, Lock } from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Strategy & Planning',
      description: 'Comprehensive cloud migration strategy tailored to your business needs and objectives.',
      benefits: ['Cloud readiness assessment', 'Migration roadmap', 'Cost optimization analysis']
    },
    {
      icon: Server,
      title: 'Infrastructure Migration',
      description: 'Seamless migration of servers, databases, and applications to cloud platforms.',
      benefits: ['Zero-downtime migration', 'Data integrity assurance', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation with compliance monitoring and auditing.',
      benefits: ['Security hardening', 'Compliance certification', '24/7 monitoring']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Continuous optimization of cloud resources for maximum performance and cost efficiency.',
      benefits: ['Auto-scaling setup', 'Cost monitoring', 'Performance tuning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic cloud setup',
        'Data migration',
        '30 days support',
        'Security configuration'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: 'one-time',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 servers',
        'Advanced cloud architecture',
        'Complete data migration',
        '90 days support',
        'Security & compliance',
        'Performance optimization',
        'Training & documentation'
      ],
      popular: true
    },
    {
      name: 'Custom Solution',
      price: 'Contact Us',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited servers',
        'Custom cloud architecture',
        'Enterprise migration',
        '1 year support',
        'Full security suite',
        'Dedicated team',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Migration Success Rate' },
    { number: '50%', label: 'Average Cost Reduction' },
    { number: '3x', label: 'Performance Improvement' },
    { number: '24/7', label: 'Support Available' }
  ];

  const cloudProviders = [
    { name: 'AWS', description: 'Amazon Web Services' },
    { name: 'Azure', description: 'Microsoft Azure' },
    { name: 'GCP', description: 'Google Cloud Platform' },
    { name: 'IBM Cloud', description: 'IBM Cloud Services' },
    { name: 'Oracle Cloud', description: 'Oracle Cloud Infrastructure' },
    { name: 'DigitalOcean', description: 'DigitalOcean Cloud' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cloud Migration Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 cyber-glow">
              Seamless Cloud Transformation
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Migrate your infrastructure to the cloud with zero downtime and maximum security. 
              Our expert team ensures a smooth transition with 99.9% success rate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center cyber-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Supported Cloud Providers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{provider.name}</h3>
                <p className="text-sm text-gray-400">{provider.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Migration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-4" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
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
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Migration Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get a free cloud migration assessment and discover how much you can save with our expert migration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CloudMigrationServicesPage;
