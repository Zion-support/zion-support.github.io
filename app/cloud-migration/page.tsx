import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Zap, Star, Users, Clock, BarChart3, Target, Globe, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function CloudMigrationPage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Strategy & Planning',
      description: 'Comprehensive cloud migration strategy with detailed planning and risk assessment.',
      features: ['Cloud readiness assessment', 'Migration roadmap', 'Cost optimization', 'Security planning', 'Performance analysis', 'Compliance review'],
      price: 'Starting at $2,999/project',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Data Migration',
      description: 'Secure and efficient data migration with zero downtime and data integrity guarantees.',
      features: ['Zero-downtime migration', 'Data validation', 'Backup strategies', 'Rollback plans', 'Performance monitoring', 'Security compliance'],
      price: 'Starting at $4,999/project',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation with compliance monitoring and audit support.',
      features: ['Security architecture', 'Compliance frameworks', 'Access management', 'Encryption setup', 'Audit trails', 'Threat monitoring'],
      price: 'Starting at $3,999/project',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce IT infrastructure costs by up to 40% with optimized cloud solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalability',
      description: 'Scale your infrastructure instantly based on demand and business growth.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Reliability',
      description: 'Achieve 99.9% uptime with enterprise-grade cloud infrastructure.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Security',
      description: 'Enhanced security with advanced threat protection and compliance monitoring.'
    }
  ];

  const cloudProviders = [
    {
      name: 'AWS',
      description: 'Amazon Web Services - Comprehensive cloud platform',
      icon: <Cloud className="w-6 h-6 text-orange-500" />
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-focused cloud solutions and hybrid cloud',
      icon: <Cloud className="w-6 h-6 text-blue-500" />
    },
    {
      name: 'Google Cloud',
      description: 'AI and machine learning optimized cloud platform',
      icon: <Cloud className="w-6 h-6 text-green-500" />
    },
    {
      name: 'Multi-Cloud',
      description: 'Hybrid and multi-cloud strategies for maximum flexibility',
      icon: <Globe className="w-6 h-6 text-purple-500" />
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Migrations' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '99.9%', label: 'Uptime Achieved' },
    { number: '24/7', label: 'Support Available' }
  ];

  const pricing = [
    {
      plan: 'Small Business',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small businesses and startups',
      features: ['Basic cloud migration', 'Single cloud provider', 'Standard security', 'Email support', '30-day warranty', 'Basic monitoring'],
      popular: false
    },
    {
      plan: 'Enterprise',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for mid-size companies and growing businesses',
      features: ['Advanced migration', 'Multi-cloud support', 'Enhanced security', 'Priority support', '90-day warranty', 'Advanced monitoring'],
      popular: true
    },
    {
      plan: 'Large Enterprise',
      price: '$24,999',
      period: '/project',
      description: 'For large organizations and complex infrastructures',
      features: ['Custom migration', 'Hybrid cloud solutions', 'Enterprise security', 'Dedicated support', '1-year warranty', 'Full monitoring suite'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services. Seamlessly migrate your infrastructure to AWS, Azure, Google Cloud with zero downtime and enhanced security." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud, cloud strategy, IT infrastructure" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Cloud Migration Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services. 
              Reduce costs, improve scalability, and enhance security with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cloud Migration Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a successful cloud migration journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{feature.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Platform Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have expertise across all major cloud platforms and can help you choose the best solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{provider.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{provider.name}</h3>
                <p className="text-gray-600">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cloud Migration Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of professional cloud migration with our expert team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Migration Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for cloud migration services based on your infrastructure complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join thousands of businesses that have successfully migrated to the cloud with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Cloud className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link
              to="/it-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}