'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users } from 'lucide-react';

const AiEcommerceOptimizerProPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms to optimize your e-commerce performance.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track your business growth.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis to improve conversion rates.'
    }
  ];
=======
import { ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d

const Page: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 10,000 products',
        'Basic AI optimization',
<<<<<<< HEAD
        'Analytics dashboard',
        'Email support'
=======
        'Email support',
        'Analytics dashboard'
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      ]
    },
    {
      name: 'Professional',
<<<<<<< HEAD
      price: '$299',
=======
      price: '$199',
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      period: '/month',
      description: 'Perfect for established online stores',
      features: [
        'Up to 50,000 products',
        'Advanced AI optimization',
<<<<<<< HEAD
        'Real-time analytics',
        'Priority support',
        'Custom integrations'
=======
        'Priority support',
        'Advanced analytics',
        'A/B testing tools'
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      ]
    },
    {
      name: 'Enterprise',
<<<<<<< HEAD
      price: 'Custom',
      period: '',
      description: 'For large-scale e-commerce operations',
      features: [
        'Unlimited products',
        'Full AI suite',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
=======
      price: '$399',
      period: '/month',
      description: 'For large-scale e-commerce operations',
      features: [
        'Unlimited products',
        'Custom AI models',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label options'
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      ]
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered e-commerce optimization solutions. Boost sales, improve conversion rates, and maximize your online store performance." />
        <meta name="keywords" content="AI e-commerce, e-commerce optimization, AI solutions, online store optimization, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI E-commerce <span className="text-blue-600">Optimizer Pro</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your e-commerce business with advanced AI optimization solutions that boost sales, 
              improve conversion rates, and maximize your online store performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View All Services
=======
    <>
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI e-commerce, optimization, Zion Tech Group" />
        <meta property="og:title" content="AI E-commerce Optimizer Pro - Zion Tech Group" />
        <meta property="og:description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-ecommerce-optimizer-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI E-commerce Optimizer Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
              </Link>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI e-commerce optimizer provides comprehensive tools to maximize your online store performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to suit businesses of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Get Started
                </Link>
              </div>
            ))}
=======
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI E-commerce Optimizer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology helps you maximize your e-commerce potential
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "AI-Powered Optimization",
                  description: "Advanced machine learning algorithms optimize your product listings, pricing, and recommendations."
                },
                {
                  icon: <Zap className="w-12 h-12 text-purple-400" />,
                  title: "Real-time Analytics",
                  description: "Get instant insights into customer behavior and sales performance with our comprehensive dashboard."
                },
                {
                  icon: <Shield className="w-12 h-12 text-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your data is protected while maintaining 99.9% uptime."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your E-commerce Store?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI e-commerce optimizer can transform your online business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Optimization
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEcommerceOptimizerProPage;
=======
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
