import React from 'react';
import Link from 'next/link';
import { CheckCircle, Clock, AlertTriangle, Shield, Zap, Users, Headphones } from 'lucide-react';

const SLAPage: React.FC = () => {
  const serviceLevels = [
    {
      plan: 'Free Tier',
      uptime: '99.0%',
      responseTime: '2 seconds',
      support: 'Community Support',
      availability: '24/7',
      sla: 'No SLA',
      features: ['Basic support', 'Community forum', 'Documentation']
    },
    {
      plan: 'Pro Tier',
      uptime: '99.5%',
      responseTime: '1 second',
      support: 'Email Support',
      availability: '24/7',
      sla: 'Standard SLA',
      features: ['Email support', 'Priority response', 'Basic monitoring']
    },
    {
      plan: 'Business Tier',
      uptime: '99.9%',
      responseTime: '500ms',
      support: 'Phone & Email Support',
      availability: '24/7',
      sla: 'Enhanced SLA',
      features: ['Phone support', 'Priority response', 'Advanced monitoring', 'SLA credits']
    },
    {
      plan: 'Enterprise',
      uptime: '99.99%',
      responseTime: '200ms',
      support: 'Dedicated Support',
      availability: '24/7',
      sla: 'Premium SLA',
      features: ['Dedicated support', 'Immediate response', 'Full monitoring', 'SLA credits', 'Custom terms']
    }
  ];

  const slaMetrics = [
    {
      metric: 'Service Availability',
      description: 'Percentage of time our services are operational',
      measurement: 'Monthly uptime percentage',
      target: '99.9%',
      calculation: 'Total uptime / Total time in month'
    },
    {
      metric: 'Response Time',
      description: 'Time taken to respond to API requests',
      measurement: 'Average response time',
      target: '< 500ms',
      calculation: 'Sum of response times / Number of requests'
    },
    {
      metric: 'Support Response Time',
      description: 'Time to respond to support requests',
      measurement: 'Initial response time',
      target: '< 4 hours',
      calculation: 'Time from request to first response'
    },
    {
      metric: 'Resolution Time',
      description: 'Time to resolve support issues',
      measurement: 'Issue resolution time',
      target: '< 24 hours',
      calculation: 'Time from request to resolution'
    }
  ];

  const serviceCredits = [
    {
      uptime: '99.0% - 99.4%',
      credit: '5%',
      description: 'Minor service degradation'
    },
    {
      uptime: '95.0% - 98.9%',
      credit: '10%',
      description: 'Significant service issues'
    },
    {
      uptime: '90.0% - 94.9%',
      credit: '25%',
      description: 'Major service disruption'
    },
    {
      uptime: 'Below 90.0%',
      credit: '50%',
      description: 'Critical service failure'
    }
  ];

  const exclusions = [
    'Scheduled maintenance windows (with 48-hour notice)',
    'Emergency maintenance (with reasonable notice)',
    'Force majeure events (natural disasters, etc.)',
    'Third-party service outages beyond our control',
    'Customer-caused issues or misconfigurations',
    'DDoS attacks or other malicious activities',
    'Internet connectivity issues outside our network',
    'Customer equipment or software failures'
  ];

  const supportChannels = [
    {
      channel: 'Email Support',
      availability: '24/7',
      responseTime: '4 hours',
      description: 'General support and technical questions',
      icon: '📧'
    },
    {
      channel: 'Phone Support',
      availability: 'Business Hours',
      responseTime: 'Immediate',
      description: 'Urgent issues and complex problems',
      icon: '📞'
    },
    {
      channel: 'Live Chat',
      availability: '24/7',
      responseTime: '5 minutes',
      description: 'Quick questions and real-time assistance',
      icon: '💬'
    },
    {
      channel: 'Dedicated Support',
      availability: '24/7',
      responseTime: 'Immediate',
      description: 'Enterprise customers with dedicated support team',
      icon: '👥'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Service Level Agreement
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Our commitment to service quality, availability, and support excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Download SLA
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Legal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SLA Overview
            </h2>
            <p className="text-xl text-gray-600">
              Our service level commitments by plan tier
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceLevels.map((level, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 border-2 ${
                level.plan === 'Enterprise' ? 'border-blue-500' : 'border-gray-200'
              }`}>
                {level.plan === 'Enterprise' && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{level.plan}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uptime:</span>
                    <span className="font-semibold text-gray-900">{level.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-semibold text-gray-900">{level.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Support:</span>
                    <span className="font-semibold text-gray-900">{level.support}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-semibold text-gray-900">{level.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SLA:</span>
                    <span className="font-semibold text-gray-900">{level.sla}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SLA Metrics & Measurement
            </h2>
            <p className="text-xl text-gray-600">
              How we measure and report on our service level commitments
            </p>
          </div>
          <div className="space-y-8">
            {slaMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{metric.metric}</h3>
                    <p className="text-gray-600 mb-4">{metric.description}</p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-sm text-blue-600 font-medium mb-1">Target</div>
                      <div className="text-2xl font-bold text-blue-900">{metric.target}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Measurement</h4>
                    <p className="text-gray-600 mb-4">{metric.measurement}</p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Calculation</h4>
                    <p className="text-gray-600 text-sm font-mono bg-gray-100 p-3 rounded">
                      {metric.calculation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Credits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Credits
            </h2>
            <p className="text-xl text-gray-600">
              Compensation for service level failures
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uptime</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Credit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {serviceCredits.map((credit, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{credit.uptime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {credit.credit}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{credit.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Service Credit Terms</h3>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Service credits are applied to your next billing cycle</li>
                  <li>• Credits are calculated as a percentage of your monthly service fee</li>
                  <li>• Maximum service credit per month is 50% of monthly fees</li>
                  <li>• Credits must be requested within 30 days of the incident</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Channels
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to get help when you need it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.channel}</h3>
                <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className="font-medium text-gray-900">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium text-gray-900">{channel.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SLA Exclusions
            </h2>
            <p className="text-xl text-gray-600">
              Situations where SLA commitments do not apply
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exclusions.map((exclusion, index) => (
                <div key={index} className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{exclusion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Our SLA?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our legal team for SLA-related questions or to request a custom agreement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:legal@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📧 legal@ziontechgroup.com
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>Last updated: December 15, 2024</p>
            <p>This SLA is effective as of the date of your service agreement</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SLAPage;