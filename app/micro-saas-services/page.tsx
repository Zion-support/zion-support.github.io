import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAASServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Analytics',
      description: 'Comprehensive analytics dashboard with real-time insights and predictive modeling.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API integration'],
      pricing: 'Starting at $29/month',
      link: '/ai-analytics',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Customer Management',
      description: 'Complete CRM solution with automated workflows and customer insights.',
      features: ['Contact management', 'Sales pipeline', 'Automation workflows', 'Customer insights'],
      pricing: 'Starting at $39/month',
      link: '/customer-management',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security Suite',
      description: 'Enterprise-grade security tools for data protection and compliance.',
      features: ['Data encryption', 'Access control', 'Audit logs', 'Compliance reporting'],
      pricing: 'Starting at $49/month',
      link: '/security-suite',
      popular: true
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Time Tracking',
      description: 'Advanced time tracking and productivity monitoring for teams.',
      features: ['Time tracking', 'Productivity metrics', 'Team reports', 'Integration tools'],
      pricing: 'Starting at $19/month',
      link: '/time-tracking',
      popular: false
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      title: 'Financial Management',
      description: 'Complete financial management solution for small to medium businesses.',
      features: ['Invoicing', 'Expense tracking', 'Financial reports', 'Tax preparation'],
      pricing: 'Starting at $59/month',
      link: '/financial-management',
      popular: false
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Project Management',
      description: 'Collaborative project management with AI-powered insights and automation.',
      features: ['Task management', 'Team collaboration', 'AI insights', 'Progress tracking'],
      pricing: 'Starting at $34/month',
      link: '/project-management',
      popular: true
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start with low-cost plans and scale as you grow',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes, not days',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business needs seamlessly',
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your needs',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const stats = [
    { number: '500+', label: 'Micro SAAS Solutions' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '10K+', label: 'Active Users' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including analytics, CRM, security, and project management. Affordable, scalable software solutions for modern businesses." />
        <meta name="keywords" content="micro SAAS, software as a service, analytics, CRM, project management, business tools" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Affordable, scalable software solutions designed to streamline your business operations and drive growth.
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
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of affordable, scalable software solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive software solutions designed to meet your business requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Popular Choice
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Streamline Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get started with our micro SAAS solutions and transform your business operations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;
