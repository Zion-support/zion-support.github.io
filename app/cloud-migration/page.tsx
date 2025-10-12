import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Cloud, Shield, Zap, Users, BarChart3, Clock, Database, Server, Globe } from 'lucide-react'

export default function CloudMigrationPage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Seamless Migration',
      description: 'Migrate your applications and data to the cloud with zero downtime and minimal disruption.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security First',
      description: 'Ensure your data remains secure throughout the migration process with enterprise-grade security.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Migration',
      description: 'Safely migrate your databases and data with integrity checks and validation.'
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: 'Infrastructure Setup',
      description: 'Set up scalable cloud infrastructure tailored to your business needs.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Multi-Cloud Support',
      description: 'Support for AWS, Azure, Google Cloud, and hybrid cloud environments.'
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a detailed migration strategy with timelines and risk mitigation plans.'
    },
    {
      step: '03',
      title: 'Pilot Migration',
      description: 'Execute a small-scale pilot migration to validate the approach and identify issues.'
    },
    {
      step: '04',
      title: 'Full Migration',
      description: 'Execute the complete migration with monitoring and rollback capabilities.'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Fine-tune performance, security, and costs in the new cloud environment.'
    },
    {
      step: '06',
      title: 'Support & Training',
      description: 'Provide ongoing support and training for your team on the new cloud platform.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,500',
      period: '/project',
      description: 'Perfect for small businesses with basic cloud needs',
      features: [
        'Up to 10 servers',
        'Basic security setup',
        'Email support',
        '30-day warranty',
        'Migration documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: '/project',
      description: 'Ideal for medium to large enterprises',
      features: [
        'Up to 100 servers',
        'Advanced security & compliance',
        'Priority support',
        '90-day warranty',
        'Custom migration strategy',
        'Performance optimization',
        'Team training'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: '',
      description: 'Tailored solutions for complex requirements',
      features: [
        'Unlimited servers',
        'Full compliance suite',
        'Dedicated support team',
        '1-year warranty',
        'Custom architecture',
        'Advanced monitoring',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Migrations', icon: <Cloud className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime During Migration', icon: <Shield className="w-6 h-6" /> },
    { number: '40%', label: 'Average Cost Reduction', icon: <BarChart3 className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group | Expert Cloud Migration Solutions</title>
        <meta name="description" content="Expert cloud migration services for AWS, Azure, and Google Cloud. Seamless migration with zero downtime, enhanced security, and cost optimization. Contact us today!" />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud services, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Migration
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Seamlessly migrate your applications and data to the cloud with our expert migration services. 
            Zero downtime, enhanced security, and significant cost savings guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All IT Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Cloud Migration Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our expert team ensures a smooth, secure, and cost-effective migration to the cloud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Migration Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Migration Process</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven 6-step process that ensures successful cloud migration every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Migration Packages</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the migration package that best fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free assessment and discover how much you can save with cloud migration. 
              Our experts are ready to help you make the move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}