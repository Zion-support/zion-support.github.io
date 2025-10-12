import React from 'react';
import { CheckCircle, ArrowRight, Lock, Shield, Zap, Globe, DollarSign, Star, BarChart3, Clock, TrendingUp, Users, Settings, Smartphone, Key } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIPasswordManagerPage() {
  const features = [
    'AI-Powered Password Generation',
    'Zero-Knowledge Encryption',
    'Breach Monitoring',
    'Multi-Device Sync',
    'Biometric Authentication',
    'Secure Sharing',
    'Password Health Score',
    'Dark Web Monitoring'
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited passwords',
        'Basic AI features',
        '2FA support',
        'Mobile apps',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$8',
      period: '/month',
      description: 'Ideal for families',
      features: [
        'Up to 6 users',
        'Advanced AI features',
        'Secure sharing',
        'Priority support',
        'Family dashboard',
        'Breach monitoring'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$20',
      period: '/month',
      description: 'For small businesses',
      features: [
        'Up to 25 users',
        'Full AI suite',
        'Admin controls',
        'SSO integration',
        'Advanced reporting',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      icon: <Key className="w-8 h-8 text-blue-500" />,
      title: 'Smart Password Generation',
      description: 'AI creates strong, unique passwords that are easy to remember but impossible to crack'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Advanced Security',
      description: 'Zero-knowledge encryption ensures only you can access your passwords'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Password Health Analytics',
      description: 'Get insights into your password security with AI-powered health scoring'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'Breach Monitoring',
      description: 'Monitor the dark web for compromised credentials and get instant alerts'
    }
  ];

  const securityFeatures = [
    'AES-256 Encryption',
    'Zero-Knowledge Architecture',
    'Two-Factor Authentication',
    'Biometric Login',
    'Secure Password Sharing',
    'Dark Web Monitoring'
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'Marketing Manager',
      content: 'The AI password generation is brilliant! I never have to think about creating secure passwords again.',
      rating: 5
    },
    {
      name: 'Tom Wilson',
      company: 'IT Consultant',
      content: 'The breach monitoring saved me from a major security incident. Highly recommended!',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'Small Business Owner',
      content: 'Managing passwords for my team is now effortless. The admin controls are perfect.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Password Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered password manager with zero-knowledge encryption, breach monitoring, and intelligent password generation. Secure your digital life with cutting-edge technology." />
        <meta name="keywords" content="password manager, AI security, password generation, breach monitoring, zero-knowledge encryption" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Password Manager
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Secure your digital life with our AI-powered password manager. 
            Zero-knowledge encryption, intelligent password generation, and breach monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/micro-saas-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Micro SaaS
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
              Enterprise-grade security powered by artificial intelligence
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

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Key Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for secure password management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Security Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bank-level security for your passwords
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 text-center">
                <Lock className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-white">{feature}</h3>
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
              Choose the perfect plan for your security needs
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
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real users
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
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions of users already protecting their passwords with our AI-powered security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/micro-saas-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All Micro SaaS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}