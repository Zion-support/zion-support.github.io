import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Building2, Bug, Brain, Shield, Eye, Lock, Zap, Globe, CheckCircle, Star } from 'lucide-react';
import Layout from '../layout';

export default function AiCybersecurityMonitorProPage() {
  const features = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time',
      benefits: ['Behavioral analysis', 'Anomaly detection', 'Threat prediction', 'Zero-day protection']
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring with instant threat response and automated remediation',
      benefits: ['Real-time alerts', 'Automated response', 'Incident management', 'Threat hunting']
    },
    {
      icon: <Eye className="w-5 h-5 ml-2" />,
      title: 'Network Visibility',
      description: 'Complete visibility into your network infrastructure with advanced traffic analysis',
      benefits: ['Network mapping', 'Traffic analysis', 'Device discovery', 'Vulnerability scanning']
    },
    {
      icon: <Lock className="w-5 h-5 ml-2" />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory standards',
      benefits: ['Regulatory compliance', 'Audit trails', 'Policy enforcement', 'Risk assessment']
    },
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Automated Response',
      description: 'Intelligent incident response with automated threat containment and remediation',
      benefits: ['Auto-quarantine', 'Threat isolation', 'System restoration', 'Forensic analysis']
    },
    {
      icon: <Globe className="w-5 h-5 ml-2" />,
      title: 'Global Threat Intelligence',
      description: 'Access to global threat intelligence feeds and security research databases',
      benefits: ['Threat intelligence', 'IOC feeds', 'Malware analysis', 'Attack patterns']
    }
  ];

  const securityCapabilities = [
    {
      category: 'Threat Detection',
      items: ['AI-powered threat detection', 'Behavioral analysis', 'Anomaly detection', 'Zero-day protection', 'Malware analysis', 'Phishing detection']
    },
    {
      category: 'Network Security',
      items: ['Network monitoring', 'Traffic analysis', 'Intrusion detection', 'Firewall management', 'VPN monitoring', 'DDoS protection']
    },
    {
      category: 'Endpoint Security',
      items: ['Device monitoring', 'File integrity checking', 'USB protection', 'Application control', 'Patch management', 'Mobile security']
    },
    {
      category: 'Compliance & Reporting',
      items: ['GDPR compliance', 'HIPAA monitoring', 'SOX compliance', 'Audit trails', 'Risk assessment', 'Compliance reporting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 25 endpoints',
        'Basic threat detection',
        'Email alerts',
        'Standard support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 endpoints',
        'Advanced AI features',
        'Priority support',
        'Custom dashboards',
        'Advanced reporting',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'Financial Services Corp',
      content: 'AI Cybersecurity Monitor Pro detected 3 major threats before they could cause damage. The AI is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare Plus',
      content: 'HIPAA compliance was seamless with this platform. Our auditors were impressed with the security measures.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Tech Manufacturing Inc',
      content: 'The 24/7 monitoring gives us peace of mind. We sleep better knowing our systems are protected.',
      rating: 5
    }
  ];

  return (
    <Layout
      title="AI Cybersecurity Monitor Pro - Advanced Threat Detection | Zion Tech Group"
      description="Protect your business with AI-powered cybersecurity monitoring. Real-time threat detection, 24/7 monitoring, and automated response. Get your free security assessment today."
      keywords="cybersecurity, threat detection, security monitoring, compliance, enterprise security, AI security"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-red-400 mr-3" />
              <span className="text-red-400 font-semibold">AI-Powered Cybersecurity</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Monitor Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with AI-powered cybersecurity monitoring. Real-time threat detection, 
              24/7 monitoring, and automated response to keep your systems secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Security Features</h2>
              <p className="text-xl text-gray-300">Comprehensive protection against the latest cyber threats</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Complete Security Coverage</h2>
              <p className="text-xl text-gray-300">Protect every aspect of your digital infrastructure</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityCapabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.category}</h3>
                  <ul className="space-y-2">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Security Plan</h2>
              <p className="text-xl text-gray-300">Flexible pricing for organizations of all sizes</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2xl shadow-red-500/20' 
                    : 'border-red-500/20 hover:border-red-400/40'
                }`}>
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4 text-red-400">
                      <Star className="w-5 h-5 mr-2" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover:bg-red-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Trusted by Security Professionals</h2>
              <p className="text-xl text-gray-300">See how our platform protects organizations worldwide</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Secure Your Business Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a cyber attack. Get comprehensive protection with AI Cybersecurity Monitor Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300">
                Get Free Security Assessment
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}