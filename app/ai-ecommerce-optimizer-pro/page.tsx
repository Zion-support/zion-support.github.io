import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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

const Page: React.FC = () => {
import { ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react';
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 10,000 products',
        'Basic AI optimization',
        'Analytics dashboard',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for established online stores',
      features: [
        'Up to 50,000 products',
        'Advanced AI optimization',
        'Real-time analytics',
        'Priority support',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale e-commerce operations',
      features: [
        'Unlimited products',
        'Full AI suite',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-50 to-blue-50">
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered e-commerce optimization solutions. Boost sales, improve conversion rates, and maximize your online store performance." />
        <meta name="keywords" content="AI e-commerce, e-commerce optimization, AI solutions, online store optimization, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20px-4sm:px-6lg:px-8" />
        <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-gray-900 mb-6" />
              AI E-commerce <span className="text-blue-600"  >Optimizer Pro</span>
            </h1>
            <p className="text-xltext-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your e-commerce business with advanced AI optimization solutions that boost sales, 
              improve conversion rates, and maximize your online store performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center" />
              <Link
          to="/contact" 
                className="inline-flex items-center px-8py-4bg-blue-600 text-whitefont-semibold rounded-lg hover:bg-blue-700 transition-colors"
               
        >
          Get Started
                
          <ArrowRight className="ml-2 h-5w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8py-4border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View All Services
                />View All Services
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
          <div className="container mx-auto px-4text-center">
            <h1 className="text-5xlmd:text-6xlfont-bold text-whitemb-6">
              <span className="bg-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI E-commerce Optimizer Pro
              </span>
            </h1>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8py-4rounded-lg font-semibold text-lghover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8py-4rounded-lg font-semibold text-lghover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20bg-white" />
        <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8">
        <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xlfont-bold text-gray-900 mb-4"  />Powerful Features
            </h2>
            <p className="text-xltext-gray-600 max-w-3xl mx-auto">
              Our AI e-commerce optimizer provides comprehensive tools to maximize your online store performance
            </p>
          </div>
          <div className="grid md:grid-cols-2lg:grid-cols-4gap-8" />
            {features.map((feature, index) => (
              <div key={index} className="text-center" />
                <div className="w-16h-16bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" />
                  <feature.icon className="h-8w-8text-blue-600" />
                </div>
                <h3 className="text-xlfont-semibold text-gray-900 mb-3"  >{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20bg-gray-50" />
        <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8">
        <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xlfont-bold text-gray-900 mb-4"  />Choose Your Plan
            </h2>
            <p className="text-xltext-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to suit businesses of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3gap-8" />
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-whiterounded-xl p-8 shadow-lg" />
                <div className="text-centermb-6" />
                  <h3 className="text-2xlfont-bold text-gray-900 mb-2"  >{plan.name}</h3>
                  <div className="text-4xlfont-bold text-blue-600 mb-2" />
                    {plan.price}
                    <span className="text-lgtext-gray-500"  >{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center" />
                      <CheckCircle className="h-5w-5text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"  >{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-blue-600 text-whitepy-3px-6rounded-lg font-semibold hover:bg-blue-700 transition-colors text-centerblock"
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xltext-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8py-4rounded-lg font-semibold text-lghover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8py-4rounded-lg font-semibold text-lghover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
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
