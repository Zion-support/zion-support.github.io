import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Clock, CheckCircle, AlertCircle, Star, Zap, Users, Globe } from 'lucide-react';

const SLAPage: React.FC = () => {
  const slaMetrics = [
    {
      service: 'API Availability',
      target: '99.9%',
      current: '99.95%',
      status: 'exceeded',
      description: 'Core API services uptime',
      icon: Zap,
      color: 'text-green-600'
    },
    {
      service: 'Response Time',
      target: '< 200ms',
      current: '45ms',
      status: 'exceeded',
      description: 'Average API response time',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      service: 'Error Rate',
      target: '< 0.1%',
      current: '0.01%',
      status: 'exceeded',
      description: 'API error rate',
      icon: AlertCircle,
      color: 'text-purple-600'
    },
    {
      service: 'Support Response',
      target: '< 4 hours',
      current: '1.2 hours',
      status: 'exceeded',
      description: 'Average support response time',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const serviceLevels = [
    {
      tier: 'Basic',
      uptime: '99.5%',
      responseTime: '< 500ms',
      support: 'Email only',
      price: 'Free',
      features: [
        'Basic API access',
        'Email support',
        'Community forum',
        'Documentation access'
      ],
      sla: 'Standard SLA applies'
    },
    {
      tier: 'Professional',
      uptime: '99.9%',
      responseTime: '< 200ms',
      support: 'Email + Chat',
      price: '$99/month',
      features: [
        'Priority API access',
        'Email + Chat support',
        'Phone support',
        'Priority bug fixes',
        'SLA guarantees'
      ],
      sla: 'Enhanced SLA with credits'
    },
    {
      tier: 'Enterprise',
      uptime: '99.95%',
      responseTime: '< 100ms',
      support: '24/7 Phone + Chat',
      price: 'Custom',
      features: [
        'Dedicated infrastructure',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom SLA terms',
        'SLA credits + penalties'
      ],
      sla: 'Custom SLA with penalties'
    }
  ];

  const slaTerms = [
    {
      title: 'Service Availability',
      description: 'We guarantee 99.9% uptime for our API services, measured monthly.',
      details: [
        'Uptime measured as percentage of time API is available',
        'Excludes scheduled maintenance windows',
        'Excludes force majeure events',
        'Measured across all API endpoints'
      ]
    },
    {
      title: 'Response Time',
      description: 'We guarantee API response times under 200ms for 95% of requests.',
      details: [
        'Response time measured from request to response',
        'Excludes network latency outside our control',
        'Measured across all geographic regions',
        'Based on 95th percentile performance'
      ]
    },
    {
      title: 'Error Rate',
      description: 'We guarantee error rates below 0.1% for all API requests.',
      details: [
        'Error rate calculated as failed requests / total requests',
        'Excludes client-side errors (4xx status codes)',
        'Excludes rate limiting responses',
        'Measured across all API endpoints'
      ]
    },
    {
      title: 'Support Response',
      description: 'We guarantee response to support requests within 4 hours during business hours.',
      details: [
        'Business hours: Monday-Friday, 9 AM - 6 PM EST',
        'Response time measured from ticket creation',
        'Excludes weekends and holidays',
        'Emergency support available 24/7 for Enterprise'
      ]
    }
  ];

  const credits = [
    {
      uptime: '99.9% - 99.5%',
      credit: '5%',
      description: 'Service credits for minor downtime'
    },
    {
      uptime: '99.5% - 99.0%',
      credit: '10%',
      description: 'Service credits for moderate downtime'
    },
    {
      uptime: '99.0% - 95.0%',
      credit: '25%',
      description: 'Service credits for significant downtime'
    },
    {
      uptime: 'Below 95.0%',
      credit: '50%',
      description: 'Service credits for major downtime'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>SLA Agreement - Zion Tech Group</title>
        <meta name="description" content="Service Level Agreement (SLA) for Zion Tech Group's AI services, including uptime guarantees, response times, and service credits." />
        <meta name="keywords" content="SLA, service level agreement, uptime guarantee, response time, service credits, availability" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Service Level Agreement
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our commitment to providing reliable, high-performance AI services with guaranteed uptime and response times.
          </p>
          <div className="text-sm text-gray-400">
            Effective Date: January 1, 2024 | Last Updated: December 15, 2024
          </div>
        </div>
      </section>

      {/* SLA Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Current SLA Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {slaMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <metric.icon className={`w-8 h-8 ${metric.color} mr-3`} />
                  <h3 className="text-lg font-bold text-gray-900">{metric.service}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Target:</span>
                    <span className="font-semibold text-gray-900">{metric.target}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current:</span>
                    <span className={`font-semibold ${metric.color}`}>{metric.current}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      metric.status === 'exceeded' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {metric.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Level Tiers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLevels.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${
                tier.tier === 'Enterprise' ? 'ring-2 ring-purple-500' : ''
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{tier.price}</div>
                  <div className="text-sm text-gray-600">{tier.sla}</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uptime:</span>
                    <span className="font-semibold text-gray-900">{tier.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-semibold text-gray-900">{tier.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Support:</span>
                    <span className="font-semibold text-gray-900">{tier.support}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  tier.tier === 'Enterprise' 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}>
                  {tier.tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Terms */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SLA Terms & Conditions</h2>
          
          <div className="space-y-8">
            {slaTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{term.title}</h3>
                <p className="text-gray-700 mb-4">{term.description}</p>
                <ul className="space-y-2">
                  {term.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Credits */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Credits</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-8">
              If we fail to meet our SLA commitments, we will provide service credits as compensation. Credits are calculated based on the monthly service fee and the severity of the service disruption.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uptime Range</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Credit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {credits.map((credit, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {credit.uptime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {credit.credit}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {credit.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Service credits are applied to your next billing cycle</li>
                <li>• Credits are calculated based on the affected service tier</li>
                <li>• Maximum service credit per month is 50% of monthly fees</li>
                <li>• Credits must be requested within 30 days of the incident</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Our SLA?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team for more information about our service level agreements and guarantees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sla@ziontechgroup.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact SLA Team
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              General Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SLAPage;