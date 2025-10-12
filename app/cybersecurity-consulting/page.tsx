import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Brain, CheckCircle } from 'lucide-react';
import Layout from '../layout';

export default function CybersecurityConsulting() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and assess your current security posture'
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements'
    },
    {
      icon: <Eye className="w-6 h-6 text-yellow-400" />,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response with 24/7 monitoring and incident management'
    },
    {
      icon: <Brain className="w-6 h-6 text-green-400" />,
      title: 'AI-Powered Security',
      description: 'Machine learning algorithms for advanced threat detection and automated response'
    }
  ];

  const services = [
    'Security Risk Assessment',
    'Penetration Testing',
    'Vulnerability Management',
    'Incident Response Planning',
    'Security Training & Awareness',
    'Compliance Auditing',
    'Security Architecture Review',
    'Threat Modeling'
  ];

  const pricingPlans = [
    {
      name: 'Basic Security',
      price: '$2,999',
      description: 'Essential security services for small businesses',
      features: [
        'Security Assessment',
        'Basic Compliance Review',
        'Security Recommendations',
        'Email Support',
        '30-day follow-up'
      ],
      popular: false
    },
    {
      name: 'Professional Security',
      price: '$7,999',
      description: 'Comprehensive security for growing enterprises',
      features: [
        'Full Security Audit',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response Plan',
        'Priority Support',
        'Quarterly Reviews'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      price: 'Custom',
      description: 'Advanced security for large organizations',
      features: [
        'Custom Security Framework',
        'Ongoing Monitoring',
        'Dedicated Security Team',
        '24/7 Support',
        'Custom Training',
        'Regular Security Updates'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                {' '}Consulting
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with expert cybersecurity consulting. We provide comprehensive security solutions 
              to safeguard your digital assets and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Security Solutions
              </h2>
              <p className="text-gray-300 text-lg">
                Expert cybersecurity consulting to protect your business from evolving threats
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-400 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Security Services
              </h2>
              <p className="text-gray-300 text-lg">
                Complete cybersecurity solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-white">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Security Packages
              </h2>
              <p className="text-gray-300 text-lg">
                Choose the security package that fits your needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 relative border ${plan.popular ? 'border-red-400' : 'border-gray-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get a free security assessment and discover how we can protect your digital assets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
