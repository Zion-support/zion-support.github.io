import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Wifi, Zap, Shield, Globe, Users, Clock, DollarSign, Target, Award, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Page5gImplementationPage: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8 text-cyan-400" />,
      title: 'Ultra-Fast Connectivity',
      description: 'Deploy 5G networks with speeds up to 10 Gbps and ultra-low latency under 1ms.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Network Optimization',
      description: 'Advanced network optimization techniques for maximum performance and coverage.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Enterprise Security',
      description: 'Military-grade security protocols and compliance with industry standards.'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-400" />,
      title: 'Global Coverage',
      description: 'Worldwide 5G implementation with seamless roaming and connectivity.'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: 'IoT Integration',
      description: 'Connect millions of IoT devices with reliable 5G infrastructure.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock network monitoring and maintenance services.'
    }
  ];

  const services = [
    {
      title: '5G Network Design',
      description: 'Complete 5G network architecture design and planning',
      price: 'From $50,000',
      duration: '2-4 weeks'
    },
    {
      title: 'Infrastructure Deployment',
      description: 'Full 5G infrastructure deployment and installation',
      price: 'From $150,000',
      duration: '4-8 weeks'
    },
    {
      title: 'Network Testing & Optimization',
      description: 'Comprehensive testing and performance optimization',
      price: 'From $25,000',
      duration: '1-2 weeks'
    },
    {
      title: 'IoT Integration',
      description: 'Connect and manage IoT devices on 5G network',
      price: 'From $75,000',
      duration: '3-6 weeks'
    },
    {
      title: 'Security Implementation',
      description: 'Advanced security protocols and compliance setup',
      price: 'From $40,000',
      duration: '2-3 weeks'
    },
    {
      title: 'Training & Support',
      description: 'Staff training and ongoing technical support',
      price: 'From $15,000',
      duration: '1 week'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Cost Reduction',
      description: 'Up to 60% reduction in operational costs with 5G efficiency'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: 'Performance Boost',
      description: '10x faster data transfer and 100x more device capacity'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Future-Proof',
      description: 'Scalable infrastructure ready for next-generation applications'
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: 'Global Reach',
      description: 'Seamless connectivity across multiple countries and regions'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$50,000',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic 5G network setup',
        'Up to 100 devices',
        'Standard security',
        'Email support',
        '1-year warranty'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$150,000',
      description: 'Ideal for large organizations',
      features: [
        'Advanced 5G infrastructure',
        'Up to 1,000 devices',
        'Enhanced security protocols',
        'Priority support',
        '3-year warranty',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Custom Solution',
      price: 'Quote',
      description: 'Tailored for specific requirements',
      features: [
        'Fully customized 5G network',
        'Unlimited devices',
        'Military-grade security',
        '24/7 dedicated support',
        '5-year warranty',
        'White-label solution',
        'On-site deployment'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services - Next-Gen Network Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive 5G implementation services. Ultra-fast connectivity, IoT integration, and enterprise-grade security. Starting at $50,000." />
        <meta name="keywords" content="5G implementation, 5G network, 5G deployment, IoT integration, network optimization, enterprise 5G" />
        <meta property="og:title" content="5G Implementation Services - Zion Tech Group" />
        <meta property="og:description" content="Professional 5G network implementation with ultra-fast connectivity and enterprise-grade security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/5g-implementation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Implementation
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with next-generation 5G connectivity. Ultra-fast speeds, ultra-low latency, 
                and seamless IoT integration for the modern enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10 Gbps</div>
                  <div className="text-gray-300">Peak Download Speed</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">&lt; 1ms</div>
                  <div className="text-gray-300">Ultra-Low Latency</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                  <div className="text-gray-300">Devices per km²</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced 5G Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technology for next-generation connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Implementation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions from design to deployment
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                    <span className="text-gray-400">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our 5G Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results and industry-leading expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Options
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the package that fits your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105' 
                    : 'border-slate-700 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-bold py-1 px-3 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Deploy 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free consultation and discover how 5G can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page5gImplementationPage;
