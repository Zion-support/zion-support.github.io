import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, Shield, Users, Zap } from 'lucide-react';

const SLAPage: React.FC = () => {
  const slaMetrics = [
    {
      title: 'Uptime Guarantee',
      description: '99.9% uptime for all premium services',
      icon: Clock,
      value: '99.9%'
    },
    {
      title: 'Response Time',
      description: 'Average response time under 200ms',
      icon: Zap,
      value: '< 200ms'
    },
    {
      title: 'Support Response',
      description: '24/7 technical support available',
      icon: Users,
      value: '24/7'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security measures',
      icon: Shield,
      value: '100%'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Level Agreement - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's Service Level Agreement (SLA) including uptime guarantees, response times, and support commitments." />
        <meta name="keywords" content="SLA, service level agreement, uptime guarantee, support, performance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Service Level Agreement
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Our commitment to service quality and reliability
              </p>
            </div>
          </div>
        </section>

        {/* SLA Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Service Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {slaMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{metric.description}</p>
                  <div className="text-3xl font-bold text-blue-600">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">SLA Questions?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our team for more information about our service level commitments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@ziontechgroup.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SLAPage;