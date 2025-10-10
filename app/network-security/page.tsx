import React from 'react';
import { ArrowRight, CheckCircle, Shield, Lock, Eye, AlertTriangle, Users, Zap } from 'lucide-react';

const NetworkSecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Firewall Configuration',
      description: 'Advanced firewall setup and management to protect your network perimeter.',
      features: ['Next-Gen Firewalls', 'Intrusion Prevention', 'Traffic Filtering', 'Real-time Monitoring']
    },
    {
      icon: Lock,
      title: 'VPN Solutions',
      description: 'Secure remote access and site-to-site connectivity with enterprise VPN.',
      features: ['Site-to-Site VPN', 'Remote Access VPN', 'Multi-factor Authentication', 'Encryption']
    },
    {
      icon: Eye,
      title: 'Network Monitoring',
      description: '24/7 network monitoring and threat detection with AI-powered analytics.',
      features: ['Real-time Monitoring', 'Threat Detection', 'Anomaly Detection', 'Incident Response']
    },
    {
      icon: AlertTriangle,
      title: 'Security Audits',
      description: 'Comprehensive security assessments and vulnerability testing.',
      features: ['Penetration Testing', 'Vulnerability Assessment', 'Compliance Audits', 'Risk Analysis']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security protocols and encryption standards'
    },
    {
      icon: Zap,
      title: '24/7 Monitoring',
      description: 'Round-the-clock network monitoring and threat detection'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified security professionals with years of experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Network Security
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your network infrastructure with comprehensive security solutions designed to defend against modern threats.
          </p>
        </section>

        {/* Services Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Network Security Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive network security solutions to protect your business from cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <service.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Network Security?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our network security solutions provide comprehensive protection and peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Network?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our network security solutions can protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Security Assessment
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NetworkSecurityPage;