'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Clock, Shield, Zap, Award, AlertTriangle } from 'lucide-react';

const SLAPage: React.FC = () => {
  const slaMetrics = [
    {
      service: 'AI Services',
      uptime: '99.9%',
      responseTime: '< 2 seconds',
      support: '24/7',
      icon: '🤖',
      description: 'AI-powered solutions with guaranteed performance'
    },
    {
      service: 'IT Infrastructure',
      uptime: '99.95%',
      responseTime: '< 1 second',
      support: '24/7',
      icon: '☁️',
      description: 'Enterprise-grade infrastructure with maximum reliability'
    },
    {
      service: 'Support Services',
      uptime: 'N/A',
      responseTime: '< 1 hour',
      support: '24/7',
      icon: '🛠️',
      description: 'Round-the-clock technical support and assistance'
    },
    {
      service: 'Security Services',
      uptime: '99.99%',
      responseTime: '< 30 seconds',
      support: '24/7',
      icon: '🔒',
      description: 'Advanced security monitoring and threat response'
    }
  ];

  const serviceLevels = [
    {
      tier: 'Basic',
      uptime: '99.5%',
      responseTime: '4 hours',
      support: 'Business hours',
      price: 'Included',
      features: [
        'Standard monitoring',
        'Email support',
        'Basic reporting',
        'Monthly reviews'
      ]
    },
    {
      tier: 'Professional',
      uptime: '99.9%',
      responseTime: '2 hours',
      support: 'Extended hours',
      price: 'Premium',
      features: [
        'Advanced monitoring',
        'Phone & email support',
        'Detailed reporting',
        'Weekly reviews',
        'Priority escalation'
      ]
    },
    {
      tier: 'Enterprise',
      uptime: '99.95%',
      responseTime: '1 hour',
      support: '24/7',
      price: 'Custom',
      features: [
        'Real-time monitoring',
        '24/7 phone support',
        'Custom reporting',
        'Daily reviews',
        'Dedicated account manager',
        'SLA guarantees'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Service Level Agreement (SLA)</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our commitment to delivering exceptional service with guaranteed performance metrics and reliability standards.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Level Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.service}</h3>
                <p className="text-gray-300 mb-4 text-sm">{metric.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400 font-semibold">{metric.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-cyan-400 font-semibold">{metric.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Support:</span>
                    <span className="text-purple-400 font-semibold">{metric.support}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Level Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLevels.map((tier, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400 font-semibold">{tier.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-cyan-400 font-semibold">{tier.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Support:</span>
                    <span className="text-purple-400 font-semibold">{tier.support}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SLA Guarantees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Shield className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Performance Guarantees</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  99.9% uptime guarantee for all services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Sub-second response times for critical operations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Automatic failover and redundancy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time monitoring and alerting
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Award className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Support Guarantees</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 technical support availability
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Guaranteed response times for all tickets
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Escalation procedures for critical issues
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Regular performance reviews and reporting
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Questions About Our SLA?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Contact our team to discuss SLA requirements and get a customized service level agreement for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SLAPage;
