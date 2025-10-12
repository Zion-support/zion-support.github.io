import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Cpu, Zap, Shield, Globe, DollarSign, Star, Clock, TrendingUp, Users, Target, Award, Brain, BarChart3, Wifi, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IOTEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Edge Processing',
      description: 'Process data locally at the edge to reduce latency and improve response times for critical IoT applications.',
      benefits: ['Real-time processing', 'Low latency', 'Offline capability', 'Bandwidth optimization']
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: '5G Integration',
      description: 'Seamless integration with 5G networks for ultra-fast data transmission and ultra-low latency communication.',
      benefits: ['5G connectivity', 'Ultra-low latency', 'High bandwidth', 'Network slicing']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Intelligent data management and analytics at the edge with AI-powered insights and decision making.',
      benefits: ['Edge analytics', 'AI processing', 'Data filtering', 'Smart storage']
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance features to protect your IoT devices and data.',
      benefits: ['Device security', 'Data encryption', 'Access control', 'Compliance monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small IoT deployments',
      features: [
        'Up to 100 devices',
        'Basic edge processing',
        'Cloud integration',
        'Basic analytics',
        'Email support',
        'Standard security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing IoT networks',
      features: [
        'Up to 1,000 devices',
        'Advanced edge processing',
        '5G integration',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom protocols',
        'Advanced security'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large-scale IoT deployments',
      features: [
        'Unlimited devices',
        'Custom edge solutions',
        'White-label platform',
        'Advanced reporting',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'Multi-tenant support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10K+', label: 'Devices Connected', icon: <Cpu className="w-6 h-6 text-blue-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Target className="w-6 h-6 text-green-400" /> },
    { number: '50ms', label: 'Average Latency', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Monitoring', icon: <Shield className="w-6 h-6 text-orange-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced IoT edge computing solutions with 5G integration, real-time processing, and AI-powered analytics. Connect 10K+ devices with 99.9% uptime." />
        <meta name="keywords" content="IoT edge computing, 5G integration, edge processing, IoT analytics, device management" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IoT Edge Computing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your IoT infrastructure with advanced edge computing solutions that process data locally, 
              integrate with 5G networks, and provide real-time insights. Connect 10K+ devices with 99.9% uptime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Everything you need to build and manage advanced IoT edge computing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the plan that fits your IoT deployment size and requirements. All plans include our core edge computing features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 group ${
                plan.popular 
                  ? 'border-cyan-500 bg-gradient-to-b from-cyan-500/20 to-transparent' 
                  : 'border-white/20 hover:bg-white/15'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
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
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IoT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses connecting 10K+ devices with 99.9% uptime using our advanced IoT edge computing platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

      <Footer />
    </div>
  );
};

export default IOTEdgeComputingPage;