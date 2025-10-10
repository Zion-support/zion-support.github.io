'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, BarChart3, ArrowRight, Star, CheckSquare, Smartphone, Users, Target, Globe, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Intelligent Auto-Scaling',
      description: 'AI-powered auto-scaling that predicts traffic patterns and scales resources automatically',
      benefits: ['Predictive scaling', 'Cost optimization', 'Zero downtime', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive cloud security with AI-powered threat detection and automated response',
      benefits: ['Real-time threat detection', 'Automated incident response', 'Compliance management', 'Data encryption']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'AI-driven performance monitoring and optimization for maximum efficiency and speed',
      benefits: ['Real-time monitoring', 'Performance analytics', 'Bottleneck detection', 'Automated optimization']
    },
    {
      icon: BarChart3,
      title: 'Cost Management',
      description: 'Intelligent cost optimization and resource management to reduce cloud spending',
      benefits: ['Cost analysis', 'Resource optimization', 'Budget alerts', 'Usage forecasting']
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      icon: '☁️',
      features: ['EC2, S3, Lambda', 'RDS, DynamoDB', 'CloudFront, Route 53', 'SageMaker, Rekognition'],
      pricing: 'Starting at $500/month'
    },
    {
      name: 'Microsoft Azure',
      icon: '🔷',
      features: ['Virtual Machines', 'Azure SQL Database', 'Azure Functions', 'Cognitive Services'],
      pricing: 'Starting at $450/month'
    },
    {
      name: 'Google Cloud Platform',
      icon: '🔵',
      features: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'AI Platform'],
      pricing: 'Starting at $400/month'
    },
    {
      name: 'Multi-Cloud',
      icon: '🌐',
      features: ['Hybrid cloud solutions', 'Cross-platform management', 'Disaster recovery', 'Vendor independence'],
      pricing: 'Starting at $800/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,299',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        '99.9% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 100 servers',
        'Advanced AI features',
        'Priority support',
        'Enhanced security',
        '99.99% uptime SLA',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited servers',
        'Custom AI models',
        'Dedicated support',
        'Advanced security',
        '99.999% uptime SLA',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'CTO',
      company: 'TechStartup Inc',
      content: 'Our cloud costs reduced by 40% while performance improved by 60%. The AI optimization is incredible.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'IT Director',
      company: 'Global Enterprises',
      content: 'We achieved 99.99% uptime and reduced security incidents by 90%. Outstanding service.',
      rating: 5
    },
    {
      name: 'Sarah Wilson',
      role: 'Cloud Architect',
      company: 'Digital Solutions',
      content: 'The auto-scaling and cost optimization features saved us $50K monthly. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Intelligent cloud infrastructure with AI-powered auto-scaling, security, and optimization. Reduce costs by 40% and improve performance by 60%." />
        <meta name="keywords" content="AI cloud infrastructure, cloud optimization, auto-scaling, cloud security, cloud management" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              AI-Powered Cloud Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent cloud infrastructure with AI-powered auto-scaling, security, and optimization. 
              Reduce costs by 40% and improve performance by 60% with our advanced cloud management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="text-sm text-gray-400">
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div>
          </div>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage artificial intelligence to optimize your cloud infrastructure for maximum performance and cost efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Multi-Cloud Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy and manage your infrastructure across all major cloud providers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{provider.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{provider.name}</h3>
                    <div className="text-blue-400 font-semibold">{provider.pricing}</div>
                  </div>
                  <ul className="space-y-2">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your cloud infrastructure needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckSquare className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transform hover:scale-105' 
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of organizations who have transformed their cloud infrastructure with AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven cloud management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                Questions? Call us at <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AICloudInfrastructurePage;