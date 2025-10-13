import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle, Star, Zap, Brain, Lock, Eye, AlertTriangle, Key, Mail, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AdvancedCybersecuritySuite = () => {
  const features = [
    'AI-Powered Threat Detection',
    'Zero-Trust Security Architecture',
    'Advanced Endpoint Protection',
    'Real-time Security Monitoring',
    'Automated Incident Response',
    'Quantum-Safe Cryptography',
    'Behavioral Analytics',
    'Threat Intelligence Integration',
    'Compliance Automation',
    'Security Orchestration',
    'Penetration Testing Services',
    '24/7 Security Operations Center'
  ];

  const securityCapabilities = [
    {
      name: 'Advanced Threat Protection',
      description: 'AI-driven detection and prevention of sophisticated cyber attacks including APTs, zero-day exploits, and ransomware',
      icon: <Shield className="w-8 h-8" />,
      protection: '99.9%'
    },
    {
      name: 'Quantum-Safe Security',
      description: 'Future-proof cryptography resistant to quantum computing attacks and post-quantum threats',
      icon: <Key className="w-8 h-8" />,
      protection: 'Quantum-Ready'
    },
    {
      name: 'Zero-Trust Architecture',
      description: 'Comprehensive zero-trust implementation with continuous verification and least-privilege access',
      icon: <Lock className="w-8 h-8" />,
      protection: '100% Secure'
    },
    {
      name: 'AI Security Analytics',
      description: 'Machine learning-powered security analytics for predictive threat detection and automated response',
      icon: <Brain className="w-8 h-8" />,
      protection: 'Predictive'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential Security',
      price: '$999',
      period: '/month',
      originalPrice: '$1,999',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 Endpoints',
        'Basic Threat Detection',
        'Email Security',
        'Firewall Management',
        '24/7 Monitoring',
        'Email Support',
        'Monthly Reports',
        'Basic Training'
      ],
      popular: false
    },
    {
      name: 'Professional Security',
      price: '$2,999',
      period: '/month',
      originalPrice: '$5,999',
      description: 'Ideal for mid-size companies',
      features: [
        'Up to 500 Endpoints',
        'Advanced AI Detection',
        'Zero-Trust Implementation',
        'Automated Response',
        'Priority Support',
        'Real-time Alerts',
        'Compliance Automation',
        'Security Training',
        'Threat Intelligence',
        'Custom Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      price: '$9,999',
      period: '/month',
      originalPrice: '$19,999',
      description: 'For large organizations',
      features: [
        'Unlimited Endpoints',
        'Full AI Security Suite',
        'Quantum-Safe Cryptography',
        'Dedicated Security Team',
        'Custom Security Solutions',
        '24/7 SOC Support',
        'White-label Solutions',
        'Executive Reporting',
        'SLA Guarantee',
        'Custom Development'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'James Wilson',
      company: 'Fortune 500 Bank',
      role: 'CISO',
      content: 'Zion Tech Group\'s cybersecurity suite prevented multiple sophisticated attacks. The AI detection is incredibly accurate and the response time is unmatched.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Dr. Maria Garcia',
      company: 'Healthcare Systems',
      role: 'Security Director',
      content: 'The zero-trust implementation and compliance automation saved us months of work. We passed our security audit with flying colors.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Robert Kim',
      company: 'Government Agency',
      role: 'Security Manager',
      content: 'The quantum-safe cryptography gives us confidence for the future. This is the most advanced security solution we\'ve ever implemented.',
      rating: 5,
      avatar: 'RK'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Advanced Cybersecurity Suite - Zion Tech Group | Next-Gen Security Solutions"
        description="Revolutionary cybersecurity suite with AI-powered threat detection, zero-trust architecture, and quantum-safe cryptography. Protect your business with 99.9% threat prevention."
        keywords="cybersecurity, AI security, threat detection, zero-trust, quantum-safe cryptography, security automation, compliance, SOC"
        canonical="https://ziontechgroup.com/advanced-cybersecurity-suite"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Next-Generation Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Advanced Cybersecurity Suite
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary cybersecurity suite powered by AI, quantum-safe cryptography, and zero-trust architecture. 
            Protect your business from the most sophisticated cyber threats with 99.9% accuracy and automated response.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Watch Demo
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Threat Prevention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">&lt;1s</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">SOC Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions powered by cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityCapabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {capability.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-red-300 transition-colors">
                        {capability.name}
                      </h3>
                      <span className="text-lg font-bold text-green-400">{capability.protection}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to protect your business from cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-red-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible security solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-red-500/20' 
                    : 'border-white/20 hover:border-red-500/30'
                }`}
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-gray-500 line-through text-lg mt-2">
                      {plan.originalPrice}{plan.period}
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security professionals say about our advanced cybersecurity suite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Future Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait for a cyber attack to happen. Protect your business with our advanced cybersecurity suite 
            and stay ahead of evolving threats with cutting-edge technology.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-red-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-red-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedCybersecuritySuite;