'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';

const AiCybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time.',
      benefits: ['Real-time monitoring', 'Threat intelligence', 'Behavioral analysis', 'Automated response']
    },
    {
      icon: Eye,
      title: '24/7 Security Monitoring',
      description: 'Continuous monitoring of your systems with AI-powered security operations center.',
      benefits: ['Round-the-clock monitoring', 'Incident detection', 'Threat hunting', 'Security analytics']
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'Enterprise-grade encryption and security protocols to protect your sensitive data.',
      benefits: ['End-to-end encryption', 'Key management', 'Compliance standards', 'Data protection']
    }
  ];

  const securityServices = [
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessment to identify and remediate vulnerabilities.',
      benefits: ['Security scanning', 'Penetration testing', 'Risk assessment', 'Remediation guidance']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response to security incidents with AI-powered investigation and containment.',
      benefits: ['Incident detection', 'Forensic analysis', 'Containment strategies', 'Recovery planning']
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations.',
      benefits: ['Regulatory compliance', 'Audit preparation', 'Policy management', 'Documentation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Security',
      price: '$599',
      period: '/month',
      description: 'Essential security features for small businesses',
      features: [
        'Basic threat detection',
        'Email support',
        'Standard monitoring',
        'Basic reporting',
        '1 security analyst'
      ],
      popular: false
    },
    {
      name: 'Advanced Security',
      price: '$1,299',
      period: '/month',
      description: 'Comprehensive security solution for growing businesses',
      features: [
        'Advanced AI threat detection',
        'Priority support',
        '24/7 monitoring',
        'Advanced analytics',
        'Dedicated security team',
        'Incident response',
        'Compliance management'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      price: 'Custom',
      period: '',
      description: 'Tailored security solutions for large organizations',
      features: [
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited monitoring',
        'Custom integrations',
        'Advanced threat hunting',
        'Executive reporting'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cybersecurity</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered cybersecurity solutions. 
              Detect, prevent, and respond to threats with intelligent security automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Protected
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Security Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Security Features</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered security solutions to protect your business from evolving threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security Services</h2>
            <p className="text-gray-300">Comprehensive security services to keep your business protected</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security Plans</h2>
            <p className="text-gray-300">Choose the security plan that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500 ring-2 ring-cyan-500/50' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Enterprise Security' ? 'Contact Sales' : 'Get Started'}
                  {plan.name !== 'Enterprise Security' && <ArrowRight className="w-4 h-4 ml-2 inline" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Don't wait for a security breach. Protect your business with our advanced AI cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Security Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiCybersecurityPage;