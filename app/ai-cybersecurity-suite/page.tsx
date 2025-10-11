import React from 'react';
import { CheckCircle, ArrowRight, Shield, Eye, Zap, AlertTriangle, Lock, DollarSign, Star, Clock, Users, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AICybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time'
    },
    {
      icon: <Eye className="w-6 h-6 text-green-500" />,
      title: '24/7 Monitoring',
      description: 'Continuous surveillance of your network with instant alerts and automated responses'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Automated Response',
      description: 'AI-powered incident response that isolates threats and minimizes damage automatically'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits with AI-driven vulnerability scanning and recommendations'
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-500" />,
      title: 'Zero Trust Architecture',
      description: 'Implement zero-trust security model with AI-enhanced access controls and verification'
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-500" />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory requirements'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email security',
        '24/7 monitoring',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 endpoints',
        'Advanced AI detection',
        'Full security suite',
        'Incident response',
        'Priority support',
        'Compliance reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'White-label options',
        'Dedicated security team',
        '24/7 phone support',
        'Custom compliance'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: '99.9% Threat Detection',
      description: 'AI-powered detection identifies and blocks 99.9% of cyber threats before they cause damage',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Reduce Response Time',
      description: 'Automated incident response reduces threat containment time from hours to minutes',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Savings',
      description: 'Prevent costly data breaches and reduce security management overhead by up to 60%',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Compliance Ready',
      description: 'Automated compliance monitoring ensures you meet all regulatory requirements',
      icon: <Lock className="w-6 h-6 text-purple-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'FinanceCorp Inc.',
      content: 'The AI cybersecurity suite has been a game-changer. We\'ve prevented 3 major attacks in the last quarter alone.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'HealthTech Solutions',
      content: 'The compliance management feature saved us thousands in audit costs. We\'re now fully HIPAA compliant.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'RetailMax Corp',
      content: 'The automated response system is incredible. Threats are contained before our team even knows about them.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with real-time threat detection, automated response, and compliance management. Protect your business with cutting-edge security technology." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, compliance management, cyber defense" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Cybersecurity</span>
            <br />
            Suite
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with advanced AI-driven cybersecurity solutions. Real-time threat detection, 
            automated response, and comprehensive compliance management for modern enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
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
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered security solutions designed to protect your digital assets
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Security Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your organization's needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-red-500 ring-2 ring-red-500' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 group relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Cybersecurity Suite?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered cybersecurity protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of organizations already protected by our AI cybersecurity suite
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
          <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Get a free security assessment and discover how AI can protect your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
              <Link
                to="#pricing"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
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

export default AICybersecuritySuitePage;