import React from 'react';
import { CheckCircle, ArrowRight, Shield, Zap, Globe, DollarSign, Star, BarChart3, Clock, TrendingUp, Users, Settings, Database, AlertTriangle, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AICybersecuritySuitePage() {
  const features = [
    'AI-Powered Threat Detection',
    'Real-time Security Monitoring',
    'Automated Incident Response',
    'Advanced Malware Analysis',
    'Behavioral Analytics',
    'Zero-Trust Architecture',
    'Compliance Management',
    'Security Orchestration'
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
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
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 endpoints',
        'Advanced AI detection',
        'Full security suite',
        'Priority support',
        'Custom policies',
        'Compliance reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'AI-powered SOC',
        'Dedicated security team',
        'Custom integrations',
        'White-label solution',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Threat Intelligence',
      description: 'AI-driven threat detection and prevention with real-time analysis'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Incident Response',
      description: 'Automated response to security incidents with AI-powered remediation'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Protection',
      description: 'Advanced encryption and data loss prevention with AI monitoring'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Security Analytics',
      description: 'Comprehensive security insights and predictive threat modeling'
    }
  ];

  const complianceStandards = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR',
    'HIPAA',
    'PCI DSS',
    'NIST Framework'
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'Financial Services Inc.',
      content: 'The AI threat detection prevented 3 major attacks in the first month. Incredible technology!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Healthcare Solutions',
      content: 'Compliance reporting is now automated. We saved 20 hours per week on security documentation.',
      rating: 5
    },
    {
      name: 'Alex Thompson',
      company: 'E-commerce Platform',
      content: 'The incident response automation reduced our mean time to resolution by 75%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity suite with threat detection, incident response, and compliance management. Protect your business with cutting-edge security technology." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, incident response, compliance management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Cybersecurity Suite
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your business with our comprehensive AI-powered cybersecurity suite. 
            Advanced threat detection, automated incident response, and compliance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet industry compliance requirements with ease
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 text-center">
                <h3 className="text-lg font-semibold text-white">{standard}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect security plan for your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border ${plan.popular ? 'border-purple-500' : 'border-white/20'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free security assessment and discover how our AI-powered cybersecurity suite can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}