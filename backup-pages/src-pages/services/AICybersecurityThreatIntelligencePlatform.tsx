import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Target,
  Users,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Brain,
  Clock,
  DollarSign,
  ArrowRight,
  Lock,
  Eye,
  AlertTriangle,
  Network,
  Bug,
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AICybersecurityThreatIntelligencePlatform = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description:
        'Advanced machine learning algorithms analyze network traffic, user behavior, and system logs to identify potential security threats in real-time.',
      benefits: [
        'Detect threats 90% faster',
        'Reduce false positives by 75%',
        '24/7 automated monitoring',
      ],
    },
    {
      icon: Eye,
      title: 'Real-time Threat Intelligence',
      description:
        'Continuous monitoring of global threat landscapes with AI-driven analysis of emerging cyber threats and attack patterns.',
      benefits: [
        'Real-time threat updates',
        'Proactive threat prevention',
        'Global threat awareness',
      ],
    },
    {
      icon: Shield,
      title: 'Automated Incident Response',
      description:
        'Intelligent automation that responds to security incidents immediately, containing threats and minimizing potential damage.',
      benefits: [
        'Instant threat containment',
        'Reduced response time',
        'Minimized damage impact',
      ],
    },
    {
      icon: Network,
      title: 'Behavioral Analytics',
      description:
        'AI-powered user and entity behavior analytics that identify anomalous activities and potential insider threats.',
      benefits: [
        'Detect insider threats',
        'Identify compromised accounts',
        'Behavioral risk scoring',
      ],
    },
  ];

  const integrations = [
    {
      name: 'SIEM Systems',
      description: 'Security information and event management integration',
    },
    {
      name: 'EDR Solutions',
      description: 'Endpoint detection and response platform sync',
    },
    { name: 'Firewalls', description: 'Next-generation firewall integration' },
    {
      name: 'Active Directory',
      description: 'User authentication and access control',
    },
    {
      name: 'Cloud Platforms',
      description: 'AWS, Azure, and Google Cloud security',
    },
    {
      name: 'Ticketing Systems',
      description: 'ServiceNow, Jira, and other ITSM tools',
    },
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: 799,
      period: 'month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Real-time monitoring',
        'Email alerts',
        'Basic reporting',
        'Email support',
        'Standard compliance',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: 1999,
      period: 'month',
      description: 'Ideal for growing organizations',
      features: [
        'Up to 1000 endpoints',
        'Advanced AI features',
        'Threat intelligence',
        'Automated response',
        'Full integrations',
        'Priority support',
        'Custom dashboards',
        'Advanced analytics',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 4999,
      period: 'month',
      description: 'For large enterprises and MSSPs',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'Advanced analytics',
        'API access',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantees',
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'David Chen',
      role: 'CISO',
      company: 'Global Financial Services',
      content:
        'AI Cybersecurity Threat Intelligence Platform has revolutionized our security operations. We detect threats 90% faster and have reduced false positives significantly.',
      rating: 5,
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Security Operations Manager',
      company: 'Tech Innovation Corp',
      content:
        'The automated incident response and real-time threat intelligence have given us unprecedented visibility into our security posture. Our response time has improved dramatically.',
      rating: 5,
    },
    {
      name: 'Michael Thompson',
      role: 'Director of IT Security',
      company: 'Healthcare Network',
      content:
        'The behavioral analytics and insider threat detection features have helped us identify and prevent security incidents before they become major problems.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Cybersecurity Threat Intelligence Platform — Zion Tech Group | Intelligent Cybersecurity"
        description="Transform your cybersecurity with AI-powered threat detection, real-time intelligence, automated response, and behavioral analytics. Detect threats 90% faster and reduce false positives by 75%."
        keywords="AI cybersecurity, threat intelligence, threat detection, incident response, behavioral analytics, security AI"
        canonical="https://ziontechgroup.com/services/ai-cybersecurity-threat-intelligence-platform"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Threat
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                {' '}
                Intelligence Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your cybersecurity with intelligent automation.
              AI-powered threat detection, real-time intelligence, automated
              response, and behavioral analytics to protect your organization
              24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a
                href="/request-quote"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Cybersecurity Threat Intelligence Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                90% Faster Detection
              </h3>
              <p className="text-gray-300">AI-powered threat identification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Real-time Intelligence
              </h3>
              <p className="text-gray-300">24/7 global threat monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                75% Fewer False Positives
              </h3>
              <p className="text-gray-300">Advanced AI filtering</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Behavioral Analytics
              </h3>
              <p className="text-gray-300">Insider threat detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Seamless Security Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-slate-700/50 rounded-lg p-6 border border-slate-600"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {integration.name}
                </h3>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 rounded-xl p-8 border ${
                  tier.popular
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    ${tier.price}
                  </span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/request-quote"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Security Professionals Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-700/50 rounded-lg p-6 border border-slate-600"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Cybersecurity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations already using AI to protect their digital
            assets and stay ahead of evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a
                href="tel:+13024640950"
                className="text-gray-300 hover:text-white"
              >
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-gray-300 hover:text-white"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008
                <br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityThreatIntelligencePlatform;
