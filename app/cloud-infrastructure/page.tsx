'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, CheckCircle, ArrowRight, Shield, Zap, Target, BarChart, Users, Clock, Star, Settings, Globe, Database } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Scalable Cloud Solutions',
      description: 'Build and deploy applications that scale automatically with your business needs.',
      benefits: ['Auto-scaling', 'Load balancing', 'Resource optimization', 'Cost efficiency']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive protection and compliance.',
      benefits: ['Data encryption', 'Access controls', 'Compliance ready', 'Security monitoring']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast performance with optimized infrastructure and global CDN.',
      benefits: ['Global CDN', 'Edge computing', 'Performance optimization', 'Low latency']
    },
    {
      icon: Target,
      title: 'Reliability & Uptime',
      description: '99.9% uptime guarantee with redundant systems and disaster recovery.',
      benefits: ['High availability', 'Disaster recovery', 'Backup solutions', 'Monitoring']
    }
  ];

  const cloudServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud.',
      features: ['Zero-downtime migration', 'Data validation', 'Performance optimization', 'Rollback capability']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Managed database services with automated backups and scaling.',
      features: ['Automated backups', 'Performance tuning', 'Scaling', 'Monitoring']
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with automated pipelines.',
      features: ['CI/CD pipelines', 'Automated testing', 'Deployment automation', 'Monitoring']
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Deploy applications globally with edge computing and CDN.',
      features: ['Global deployment', 'Edge computing', 'CDN integration', 'Multi-region']
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Improve application performance by 60%',
    'Ensure 99.9% uptime and reliability',
    'Scale resources automatically',
    'Enhanced security and compliance',
    'Faster deployment and updates',
    'Global reach and performance',
    '24/7 monitoring and support'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with cloud',
      features: [
        'Basic cloud setup',
        'Email support',
        'Standard monitoring',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with complex cloud needs',
      features: [
        'Advanced cloud architecture',
        'Priority support',
        'Real-time monitoring',
        'Custom integrations',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with extensive cloud requirements',
      features: [
        'Custom cloud solutions',
        'Dedicated support',
        'Advanced security',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions with enterprise-grade security and performance. AWS, Azure, and GCP migration and management services." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, GCP, cloud services, cloud management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud Infrastructure Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build and deploy applications that scale automatically with our enterprise-grade cloud infrastructure solutions. AWS, Azure, and GCP expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn More
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
                Why Choose Our Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our cloud infrastructure solutions deliver unmatched performance, security, and scalability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Services
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Comprehensive cloud services to support your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <service.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
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
                Benefits of Cloud Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of cloud computing for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Choose the plan that fits your cloud needs. All plans include our core infrastructure features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Get a free cloud assessment and discover how we can optimize your infrastructure for better performance and cost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Assessment
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Cloud Team
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CloudInfrastructurePage;