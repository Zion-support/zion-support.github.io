'use client';
import React from 'react';
import { Shield, Lock, Eye, ArrowRight, CheckCircle, Star, Users, Clock, Zap, AlertTriangle } from 'lucide-react';

const CybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and response capabilities',
      benefits: ['Real-time monitoring', 'Behavioral analysis', 'Automated response']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and access control solutions',
      benefits: ['End-to-end encryption', 'Access management', 'Data loss prevention']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response services',
      benefits: ['Continuous monitoring', 'Incident response', 'Compliance reporting']
    }
  ];

  const securityServices = [
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure from cyber threats',
      icon: Shield,
      features: ['Firewall management', 'Intrusion detection', 'VPN solutions']
    },
    {
      title: 'Endpoint Security',
      description: 'Secure all devices and endpoints in your organization',
      icon: Lock,
      features: ['Antivirus protection', 'Device encryption', 'Remote management']
    },
    {
      title: 'Security Training',
      description: 'Educate your team on cybersecurity best practices',
      icon: Users,
      features: ['Phishing simulation', 'Security awareness', 'Compliance training']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                Cybersecurity Suite
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business with our comprehensive cybersecurity suite. Advanced threat detection, 
              data protection, and 24/7 monitoring to keep your organization secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Security Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Security Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cybersecurity suite provides multi-layered protection against evolving threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Security Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete security coverage for all aspects of your IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cybersecurity?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">99.9% Uptime</h3>
                    <p className="text-gray-300">Guaranteed security monitoring and protection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Compliance Ready</h3>
                    <p className="text-gray-300">Meet all regulatory requirements and standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300">Round-the-clock security monitoring and response</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Secure Your Business?</h3>
              <p className="text-gray-300 mb-6">
                Get a comprehensive security assessment and customized protection plan 
                for your organization.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't Wait for a Breach
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Cyber threats are constantly evolving. Protect your business with our comprehensive 
            cybersecurity suite before it's too late.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Protected Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecuritySuitePage;