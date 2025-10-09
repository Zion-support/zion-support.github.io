'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Phone, 
  Mail,
  ArrowLeft,
  Star,
  Award,
  Zap
} from 'lucide-react';

const SLAPage: React.FC = () => {
  const serviceLevels = [
    {
      tier: 'Basic',
      uptime: '99.0%',
      responseTime: '24 hours',
      availability: 'Business hours',
      price: 'Included',
      features: [
        'Email support',
        'Basic monitoring',
        'Standard response time',
        'Business hours availability'
      ]
    },
    {
      tier: 'Professional',
      uptime: '99.5%',
      responseTime: '8 hours',
      availability: 'Extended hours',
      price: '$99/month',
      features: [
        'Priority email support',
        'Phone support',
        'Advanced monitoring',
        'Extended hours availability',
        'SLA credits for downtime'
      ]
    },
    {
      tier: 'Enterprise',
      uptime: '99.9%',
      responseTime: '2 hours',
      availability: '24/7',
      price: '$299/month',
      features: [
        '24/7 phone support',
        'Dedicated account manager',
        'Real-time monitoring',
        'Guaranteed response time',
        'SLA credits for downtime',
        'Custom escalation procedures'
      ]
    }
  ];

  const metrics = [
    { name: 'Uptime Guarantee', value: '99.9%', icon: Shield },
    { name: 'Response Time', value: '< 2 hours', icon: Clock },
    { name: 'Resolution Time', value: '< 24 hours', icon: CheckCircle },
    { name: 'Customer Satisfaction', value: '98%', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Service Level Agreement
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our commitment to delivering exceptional service with guaranteed uptime, 
            response times, and resolution standards for all our AI and IT solutions.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <metric.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-300">{metric.name}</div>
            </div>
          ))}
        </div>

        {/* Service Level Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Service Level Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLevels.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                tier.tier === 'Enterprise' 
                  ? 'border-cyan-400 ring-2 ring-cyan-400/20' 
                  : 'border-white/20'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.uptime}</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Response Time:</span>
                    <span className="text-white font-semibold">{tier.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Availability:</span>
                    <span className="text-white font-semibold">{tier.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Price:</span>
                    <span className="text-white font-semibold">{tier.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.tier === 'Enterprise'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Choose {tier.tier}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* SLA Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Clock className="w-6 h-6 text-cyan-400 mr-3" />
              Response Time Guarantees
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300">Critical Issues</span>
                <span className="text-red-400 font-semibold">1 hour</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300">High Priority</span>
                <span className="text-orange-400 font-semibold">4 hours</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300">Medium Priority</span>
                <span className="text-yellow-400 font-semibold">8 hours</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-300">Low Priority</span>
                <span className="text-green-400 font-semibold">24 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 text-cyan-400 mr-3" />
              Service Credits
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300">99.0% - 99.4% uptime</span>
                <span className="text-yellow-400 font-semibold">5% credit</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300">95.0% - 98.9% uptime</span>
                <span className="text-orange-400 font-semibold">10% credit</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300">90.0% - 94.9% uptime</span>
                <span className="text-red-400 font-semibold">25% credit</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-300">Below 90% uptime</span>
                <span className="text-red-400 font-semibold">50% credit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Terms and Conditions</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              This Service Level Agreement (SLA) applies to all Zion Tech Group services 
              and is effective from the date of service activation. The SLA guarantees 
              are based on our monitoring systems and exclude scheduled maintenance windows.
            </p>
            <p>
              Service credits will be applied to your next billing cycle and cannot be 
              exchanged for cash. Credits are calculated based on the monthly service fee 
              for the affected service.
            </p>
            <p>
              This SLA does not apply to issues caused by factors outside our control, 
              including but not limited to: third-party services, client-side issues, 
              force majeure events, or scheduled maintenance.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl p-12 border border-cyan-400/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Questions About Our SLA?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you understand our service commitments 
            and answer any questions about our SLA terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SLAPage;