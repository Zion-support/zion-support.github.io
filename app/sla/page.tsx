'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  BarChart3, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  FileText,
  Award,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Database,
  Settings,
  Activity,
  Target,
  Star,
  Download
} from 'lucide-react';

export default function SlaPage() {
  const slaMetrics = [
    {
      service: 'AI Content Generator',
      uptime: '99.9%',
      responseTime: '120ms',
      availability: '99.9%',
      support: '24/7',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      service: 'AI Chatbot Builder',
      uptime: '99.8%',
      responseTime: '95ms',
      availability: '99.8%',
      support: '24/7',
      icon: <MessageSquare className="w-6 h-6 text-green-400" />
    },
    {
      service: 'Cloud Infrastructure',
      uptime: '99.9%',
      responseTime: '35ms',
      availability: '99.9%',
      support: '24/7',
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      service: 'API Services',
      uptime: '99.8%',
      responseTime: '60ms',
      availability: '99.8%',
      support: '24/7',
      icon: <Code className="w-6 h-6 text-orange-400" />
    },
    {
      service: 'Database Services',
      uptime: '99.9%',
      responseTime: '25ms',
      availability: '99.9%',
      support: '24/7',
      icon: <Database className="w-6 h-6 text-cyan-400" />
    },
    {
      service: 'Security Services',
      uptime: '100%',
      responseTime: '15ms',
      availability: '100%',
      support: '24/7',
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const supportLevels = [
    {
      level: 'Critical',
      description: 'Service completely unavailable or major functionality impaired',
      responseTime: '1 hour',
      resolutionTime: '4 hours',
      availability: '24/7',
      color: 'text-red-400 bg-red-500/20'
    },
    {
      level: 'High',
      description: 'Significant impact on business operations',
      responseTime: '4 hours',
      resolutionTime: '24 hours',
      availability: '24/7',
      color: 'text-orange-400 bg-orange-500/20'
    },
    {
      level: 'Medium',
      description: 'Moderate impact on business operations',
      responseTime: '8 hours',
      resolutionTime: '72 hours',
      availability: 'Business hours',
      color: 'text-yellow-400 bg-yellow-500/20'
    },
    {
      level: 'Low',
      description: 'Minimal impact on business operations',
      responseTime: '24 hours',
      resolutionTime: '5 business days',
      availability: 'Business hours',
      color: 'text-blue-400 bg-blue-500/20'
    }
  ];

  const serviceLevels = [
    {
      tier: 'Basic',
      uptime: '99.5%',
      responseTime: '200ms',
      support: 'Business hours',
      price: 'Included',
      features: [
        'Standard support',
        'Email support',
        'Basic monitoring',
        'Standard SLA'
      ]
    },
    {
      tier: 'Professional',
      uptime: '99.9%',
      responseTime: '100ms',
      support: '24/7',
      price: 'Premium',
      features: [
        'Priority support',
        'Phone & email support',
        'Advanced monitoring',
        'Enhanced SLA',
        'Dedicated account manager'
      ]
    },
    {
      tier: 'Enterprise',
      uptime: '99.95%',
      responseTime: '50ms',
      support: '24/7',
      price: 'Custom',
      features: [
        'Premium support',
        'Multiple contact methods',
        'Real-time monitoring',
        'Custom SLA',
        'Dedicated support team',
        'SLA credits'
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cyan-400" />,
      label: 'Email Support',
      value: 'kleber@ziontechgroup.com',
      description: 'General inquiries and support'
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      label: 'Phone Support',
      value: '+1 (302) 464-0950',
      description: '24/7 emergency support'
    },
    {
      icon: <MapPin className="w-5 h-5 text-green-400" />,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown, DE 19709',
      description: 'Corporate headquarters'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>SLA - Service Level Agreement | Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's Service Level Agreement (SLA) details. Uptime guarantees, response times, and service commitments for our AI and IT solutions." />
        <meta name="keywords" content="SLA, service level agreement, uptime guarantee, response time, service commitment, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Service Level{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Agreement
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our commitment to delivering reliable, high-performance AI and IT services with guaranteed uptime and response times.
          </p>
        </div>

        {/* SLA Overview */}
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-cyan-400 mr-3" />
              SLA Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
                <div className="text-sm text-gray-400 mt-1">Monthly availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1 Hour</div>
                <div className="text-gray-300">Response Time</div>
                <div className="text-sm text-gray-400 mt-1">Critical issues</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
                <div className="text-sm text-gray-400 mt-1">All service levels</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Service Level Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slaMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {metric.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{metric.service}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400 font-medium">{metric.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-cyan-400 font-medium">{metric.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-purple-400 font-medium">{metric.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Support:</span>
                    <span className="text-orange-400 font-medium">{metric.support}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Levels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Support Priority Levels</h2>
          <div className="space-y-4">
            {supportLevels.map((level, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{level.level} Priority</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${level.color}`}>
                    {level.level}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{level.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white ml-2 font-medium">{level.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Resolution Time:</span>
                    <span className="text-white ml-2 font-medium">{level.resolutionTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white ml-2 font-medium">{level.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Tiers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Service Level Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceLevels.map((tier, index) => (
              <div key={index} className={`rounded-xl p-6 border transition-all duration-300 ${
                tier.tier === 'Professional' 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/50' 
                  : 'bg-slate-800/50 border-slate-700'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{tier.uptime}</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-cyan-400 font-medium">{tier.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Support:</span>
                    <span className="text-purple-400 font-medium">{tier.support}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pricing:</span>
                    <span className="text-green-400 font-medium">{tier.price}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SLA Credits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Service Credits</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 mb-6">
              If we fail to meet our SLA commitments, we provide service credits as compensation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Credit Structure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">99.0% - 99.9% uptime:</span>
                    <span className="text-yellow-400">5% credit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">95.0% - 99.0% uptime:</span>
                    <span className="text-orange-400">10% credit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Below 95.0% uptime:</span>
                    <span className="text-red-400">25% credit</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Response Time Credits</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">2x response time:</span>
                    <span className="text-yellow-400">5% credit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">4x response time:</span>
                    <span className="text-orange-400">10% credit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">8x response time:</span>
                    <span className="text-red-400">25% credit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">SLA Support Contact</h2>
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <p className="text-gray-300 mb-6">
              For SLA-related inquiries, service credits, or to report SLA violations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {info.icon}
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Legal Information</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="space-y-4 text-gray-300">
              <p>
                This Service Level Agreement is effective as of October 8, 2024, and applies to all Zion Tech Group services.
              </p>
              <p>
                Service credits are calculated based on the monthly service fee and are applied to the next billing cycle.
                Credits are not transferable and cannot be exchanged for cash.
              </p>
              <p>
                This SLA does not apply to scheduled maintenance windows, which are announced at least 48 hours in advance.
              </p>
              <p>
                Force majeure events, including but not limited to natural disasters, government actions, or third-party failures,
                are excluded from SLA calculations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Our SLA?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss SLA requirements for your specific needs or to upgrade your service level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="/sla-document.pdf"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Download SLA
                <Download className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}