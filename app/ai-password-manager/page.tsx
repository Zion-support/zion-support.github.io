import React from 'react';
import { Shield, Lock, Key, Eye, EyeOff, CheckCircle, ArrowRight, Phone, Star, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Security',
      description: 'Advanced AI algorithms detect and prevent security threats in real-time',
      benefits: ['Threat detection', 'Breach monitoring', 'Risk assessment']
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      description: 'Your passwords are encrypted and only you can access them',
      benefits: ['End-to-end encryption', 'Zero-knowledge design', 'Local encryption']
    },
    {
      icon: Key,
      title: 'Smart Password Generation',
      description: 'AI generates strong, unique passwords for all your accounts',
      benefits: ['Customizable rules', 'Strength analysis', 'Auto-generation']
    },
    {
      icon: Eye,
      title: 'Biometric Authentication',
      description: 'Secure access using fingerprint, face ID, or other biometric methods',
      benefits: ['Fingerprint unlock', 'Face recognition', 'Multi-factor auth']
    }
  ];

  const securityFeatures = [
    {
      title: 'Advanced Encryption',
      description: 'Military-grade AES-256 encryption protects your data',
      icon: Lock
    },
    {
      title: 'Secure Sharing',
      description: 'Safely share passwords with team members and family',
      icon: Shield
    },
    {
      title: 'Dark Web Monitoring',
      description: 'AI monitors the dark web for compromised credentials',
      icon: Eye
    },
    {
      title: 'Password Health Score',
      description: 'Get insights into your password security with AI analysis',
      icon: Star
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$2.99',
      period: 'month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        'Unlimited devices',
        'Secure sharing',
        'Dark web monitoring',
        '24/7 support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$4.99',
      period: 'month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Everything in Personal',
        'Team management',
        'Admin dashboard',
        'Advanced reporting',
        'SSO integration',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Everything in Business',
        'Custom integrations',
        'Dedicated support',
        'Compliance reporting',
        'API access',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: Lock, value: '256-bit', label: 'Encryption' },
    { icon: Star, value: '4.9/5', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Password Manager
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Secure your digital life with AI-powered password management. Advanced encryption, 
              biometric authentication, and intelligent security monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI-Powered Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Security Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Advanced Security
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-emerald-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Secure Your Digital Life
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {plan.price}
                      {plan.period && <span className="text-lg text-gray-400">/{plan.period}</span>}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Passwords?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join millions of users who trust our AI-powered password manager to keep their digital life secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline px-8 py-4 text-lg"
              >
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIPasswordManagerPage;