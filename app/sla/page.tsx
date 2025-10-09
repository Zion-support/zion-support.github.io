import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Clock, CheckCircle, AlertTriangle, Zap, Award } from 'lucide-react';

const SLAPage: React.FC = () => {
  const serviceLevels = [
    {
      name: 'Basic Support',
      uptime: '99.0%',
      responseTime: '24 hours',
      resolutionTime: '72 hours',
      features: [
        'Email support',
        'Business hours coverage',
        'Basic documentation',
        'Community forum access'
      ],
      price: 'Included'
    },
    {
      name: 'Professional Support',
      uptime: '99.5%',
      responseTime: '8 hours',
      resolutionTime: '48 hours',
      features: [
        'Priority email support',
        'Extended business hours',
        'Phone support',
        'Advanced documentation',
        'Priority bug fixes'
      ],
      price: '$299/month'
    },
    {
      name: 'Enterprise Support',
      uptime: '99.9%',
      responseTime: '2 hours',
      resolutionTime: '24 hours',
      features: [
        '24/7 phone support',
        'Dedicated support engineer',
        'SLA guarantees',
        'Custom integrations',
        'Priority feature requests',
        'Account management'
      ],
      price: '$999/month'
    }
  ];

  const slaMetrics = [
    {
      metric: 'Service Availability',
      target: '99.9%',
      description: 'Monthly uptime guarantee for all services',
      icon: Clock
    },
    {
      metric: 'Response Time',
      target: '< 2 hours',
      description: 'Initial response to support tickets',
      icon: Zap
    },
    {
      metric: 'Resolution Time',
      target: '< 24 hours',
      description: 'Time to resolve critical issues',
      icon: CheckCircle
    },
    {
      metric: 'Security Compliance',
      target: '100%',
      description: 'Maintain security standards and compliance',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Service Level Agreement
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to delivering exceptional service with guaranteed performance metrics and support levels.
          </p>
        </div>

        {/* SLA Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Level Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <metric.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{metric.target}</h3>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">{metric.metric}</h4>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Levels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Support Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLevels.map((level, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 ${
                index === 2 ? 'ring-2 ring-cyan-400' : ''
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{level.uptime}</div>
                  <div className="text-lg text-gray-300">Uptime Guarantee</div>
                  <div className="text-2xl font-bold text-white mt-4">{level.price}</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Response Time:</span>
                    <span className="text-white font-semibold">{level.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Resolution Time:</span>
                    <span className="text-white font-semibold">{level.resolutionTime}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Terms & Conditions</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Service Availability</h3>
                <p>
                  We guarantee 99.9% uptime for all our services. Downtime is calculated as the total 
                  minutes of service unavailability in a calendar month, excluding scheduled maintenance.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Scheduled Maintenance</h3>
                <p>
                  We will provide at least 48 hours notice for scheduled maintenance windows. 
                  Emergency maintenance may be performed with minimal notice to ensure service security.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Service Credits</h3>
                <p>
                  If we fail to meet our SLA commitments, you may be eligible for service credits. 
                  Credits are calculated as a percentage of your monthly service fee based on the 
                  severity and duration of the service interruption.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Exclusions</h3>
                <p>
                  This SLA does not apply to service interruptions caused by factors outside our control, 
                  including but not limited to: third-party service failures, network issues, 
                  force majeure events, or customer-side problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Questions About Our SLA?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your specific requirements and how we can meet your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Contact Support
            </a>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SLAPage;
