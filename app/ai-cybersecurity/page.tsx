import React from 'react';
import { Shield, Lock, Eye, Zap, Brain, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, AlertTriangle, Database, Globe, Settings } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect threats in real-time',
      benefits: ['99.9% Detection Rate', 'Real-time Analysis', 'Zero False Positives']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Instant threat mitigation and incident response',
      benefits: ['Sub-second Response', 'Automated Quarantine', 'Smart Recovery']
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring and threat hunting',
      benefits: ['Round-the-clock Coverage', 'Expert Analysts', 'Proactive Defense']
    }
  ];

  const threats = [
    {
      icon: AlertTriangle,
      title: 'Malware Protection',
      description: 'Advanced detection and prevention of all types of malware'
    },
    {
      icon: Lock,
      title: 'Data Breach Prevention',
      description: 'Protect sensitive data with encryption and access controls'
    },
    {
      icon: Database,
      title: 'Network Security',
      description: 'Secure your network infrastructure and communications'
    },
    {
      icon: Globe,
      title: 'Cloud Security',
      description: 'Comprehensive protection for cloud-based applications'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Security',
      description: 'Essential protection for small businesses',
      price: '$299',
      period: '/month',
      features: [
        'AI Threat Detection',
        'Basic Monitoring',
        'Email Support',
        'Standard Response'
      ],
      popular: false
    },
    {
      name: 'Professional Security',
      description: 'Advanced protection for growing businesses',
      price: '$599',
      period: '/month',
      features: [
        'Advanced AI Detection',
        '24/7 Monitoring',
        'Priority Support',
        'Automated Response',
        'Compliance Reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      description: 'Complete protection for large organizations',
      price: 'Custom',
      period: '',
      features: [
        'Custom AI Models',
        'Dedicated Security Team',
        'White-glove Support',
        'Custom Integrations',
        'Advanced Analytics'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '<1s', label: 'Response Time' },
    { number: '3000+', label: 'Protected Businesses' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Cybersecurity Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Protect your business with AI-powered security
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Our AI-powered cybersecurity platform provides advanced threat detection, 
            automated response, and 24/7 monitoring to protect your business from evolving cyber threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Security Audit
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Protect Against All Threats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <threat.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{threat.title}</h3>
                <p className="text-gray-300">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13024640950"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Protected
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 3,000+ companies already protected by our AI cybersecurity platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Security Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPage;