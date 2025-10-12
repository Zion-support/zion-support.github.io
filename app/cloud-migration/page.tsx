import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Server, Shield, Database, Clock, DollarSign, Star, Users, BarChart3, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function CloudMigrationPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: 'Multi-Cloud Support',
      description: 'Migrate to AWS, Azure, or Google Cloud with expert guidance'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Security First',
      description: 'Enterprise-grade security throughout the migration process'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: 'Zero Downtime',
      description: 'Seamless migration with minimal business disruption'
    },
    {
      icon: <Settings className="w-6 h-6 text-orange-500" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with our optimization strategies'
    }
  ];

  const pricing = [
    {
      plan: 'Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: ['Infrastructure audit', 'Security analysis', 'Cost analysis', 'Migration roadmap', 'Risk assessment'],
      popular: false
    },
    {
      plan: 'Migration',
      price: '$15,000',
      period: 'project',
      description: 'Complete cloud migration service',
      features: ['Full migration', 'Security implementation', 'Performance optimization', 'Training & support', '3-month monitoring'],
      popular: true
    },
    {
      plan: 'Managed Services',
      price: '$2,500',
      period: '/month',
      description: 'Ongoing cloud management and optimization',
      features: ['24/7 monitoring', 'Security management', 'Cost optimization', 'Performance tuning', 'Support & maintenance'],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Reduced Costs',
      description: 'Save up to 40% on infrastructure costs with cloud optimization',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Improved Security',
      description: 'Enhanced security posture with cloud-native security features',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Better Performance',
      description: 'Faster, more reliable systems with cloud infrastructure',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand',
      icon: <Users className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'Enterprise Corp',
      content: 'The cloud migration was flawless. We reduced costs by 45% and improved performance significantly.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'TechStart Inc.',
      content: 'Professional service from start to finish. Our systems are now more secure and scalable.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'DataFlow Systems',
      content: 'Zero downtime migration exceeded our expectations. Highly recommended!',
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and requirements'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed migration strategy and timeline development'
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Seamless migration with minimal business disruption'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Performance tuning and cost optimization post-migration'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services for AWS, Azure, and Google Cloud. Seamless migration with zero downtime and cost optimization." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud, cloud services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Cloud Migration Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert cloud migration services for AWS, Azure, and Google Cloud. 
              Seamless migration with zero downtime and cost optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/it-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cloud Migration?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert migration services with proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Migration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology for successful cloud migrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Benefits of Cloud Migration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your business with cloud technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
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
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the service level that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${plan.popular ? 'ring-2 ring-blue-500 relative' : 'border-gray-200'}`}>
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

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
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
            Let our experts guide you through a seamless cloud migration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Cloud className="w-5 h-5 mr-2" />
              Get Free Assessment
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