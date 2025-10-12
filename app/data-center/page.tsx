import React from 'react';
import { CheckCircle, ArrowRight, Server, Shield, Zap, Star, Users, Clock, BarChart3, Target, Globe, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function DataCenterPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'High-Performance Servers',
      description: 'Enterprise-grade server infrastructure with 99.9% uptime guarantee and 24/7 monitoring.',
      features: ['Dual power supplies', 'Redundant cooling', 'Hardware monitoring', 'Remote management', 'Scalable storage', 'Network redundancy'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Advanced Security',
      description: 'Multi-layered security with physical and digital protection for your critical data.',
      features: ['Biometric access', '24/7 surveillance', 'Fire suppression', 'Environmental monitoring', 'Access logging', 'Compliance certified'],
      price: 'Starting at $199/month',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Comprehensive data storage, backup, and recovery solutions with automated redundancy.',
      features: ['Automated backups', 'Data replication', 'Disaster recovery', 'Storage optimization', 'Data encryption', 'Compliance support'],
      price: 'Starting at $399/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '99.9% Uptime',
      description: 'Guaranteed high availability with redundant systems and proactive monitoring.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Reduce infrastructure costs by 40% compared to on-premise solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable',
      description: 'Scale your infrastructure instantly based on business requirements.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Secure',
      description: 'Enterprise-grade security with multiple layers of protection.'
    }
  ];

  const services = [
    {
      title: 'Colocation',
      description: 'Secure rack space for your own equipment',
      icon: <Server className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Managed Hosting',
      description: 'Fully managed server hosting with 24/7 support',
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and services',
      icon: <Globe className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Monitoring' },
    { number: '40%', label: 'Cost Savings' },
    { number: '100+', label: 'Clients Served' }
  ];

  const pricing = [
    {
      plan: 'Basic',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: ['1U rack space', 'Basic monitoring', 'Email support', 'Standard power', 'Basic security', 'Monthly backups'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and applications',
      features: ['4U rack space', 'Advanced monitoring', 'Priority support', 'Redundant power', 'Enhanced security', 'Daily backups'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations and mission-critical systems',
      features: ['Full rack', '24/7 monitoring', 'Dedicated support', 'Dual power', 'Maximum security', 'Real-time backups'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Data Center Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional data center solutions and colocation services. Enterprise-grade infrastructure with 99.9% uptime guarantee and 24/7 support." />
        <meta name="keywords" content="data center, colocation, server hosting, managed hosting, cloud infrastructure, IT infrastructure" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Data Center Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade data center infrastructure with 99.9% uptime guarantee. 
              Secure, scalable, and reliable hosting solutions for your critical business applications.
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
              Enterprise Data Center Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for reliable, secure, and scalable data center operations.
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

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Center Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive data center solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
              Why Choose Our Data Center Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of enterprise-grade data center infrastructure.
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
              Data Center Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to match your infrastructure requirements.
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
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join leading companies that trust our data center solutions for their critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Server className="w-5 h-5 mr-2" />
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