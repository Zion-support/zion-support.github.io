import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Zap, DollarSign, Star, Clock, Users, Globe, Database, Server } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with zero business disruption using advanced migration strategies'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security protocols throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Performance Optimization',
      description: 'Optimize your applications for cloud-native performance and scalability'
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Data Migration',
      description: 'Safe and secure data migration with integrity verification and rollback capabilities'
    },
    {
      icon: <Server className="w-6 h-6 text-red-500" />,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning using Infrastructure as Code (IaC) practices'
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement multi-cloud architectures for maximum flexibility and redundancy'
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and objectives',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Pilot Migration',
      description: 'Small-scale pilot migration to validate the strategy and identify potential issues',
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Full Migration',
      description: 'Complete migration of all systems with continuous monitoring and support',
      duration: '4-8 weeks'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Post-migration optimization and performance tuning for maximum efficiency',
      duration: '2-4 weeks'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,500',
      period: 'one-time',
      description: 'Up to 10 servers',
      features: [
        'Basic cloud migration',
        'Standard security setup',
        'Email support',
        '30-day warranty',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: 'one-time',
      description: 'Up to 100 servers',
      features: [
        'Advanced migration strategy',
        'Custom security configuration',
        'Priority support',
        '90-day warranty',
        'Training & documentation',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'us',
      description: 'Large-scale migrations',
      features: [
        'Custom migration strategy',
        'Dedicated migration team',
        '24/7 support',
        'Extended warranty',
        'Ongoing optimization',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Reduce Costs by 40%',
      description: 'Optimize cloud resources and eliminate unnecessary infrastructure overhead',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '99.9% Uptime',
      description: 'Achieve higher availability and reliability with cloud-native architectures',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Enhanced Security',
      description: 'Implement enterprise-grade security measures and compliance standards',
      icon: <Shield className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Global Scalability',
      description: 'Scale your infrastructure globally to meet growing business demands',
      icon: <Globe className="w-6 h-6 text-purple-500" />
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'TechStart Inc.',
      content: 'The cloud migration was seamless. We saved 60% on infrastructure costs and improved performance significantly.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'DataCorp Solutions',
      content: 'Zero downtime migration exceeded our expectations. Our business continued running without any interruption.',
      rating: 5
    },
    {
      name: 'Mark Rodriguez',
      company: 'InnovateTech',
      content: 'The post-migration optimization was incredible. Our applications are now 3x faster than before.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime, enhanced security, and cost optimization. Migrate to AWS, Azure, or GCP with expert guidance." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, cloud services, infrastructure migration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Cloud Migration</span>
            <br />
            Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Seamlessly migrate your infrastructure to the cloud with zero downtime, enhanced security, 
            and cost optimization. Expert guidance for AWS, Azure, and Google Cloud Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Assessment
            </Link>
            <Link
              to="#pricing"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Migration Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud migration services designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 5-step process that ensures successful cloud migration
            </p>
          </div>

          <div className="space-y-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <span className="text-blue-400 font-semibold">Duration: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Migration Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for cloud migration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 group relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 group-hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Migration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional cloud migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses that have successfully migrated to the cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free cloud migration assessment and discover the benefits for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
              <Link
                to="#pricing"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudMigrationPage;