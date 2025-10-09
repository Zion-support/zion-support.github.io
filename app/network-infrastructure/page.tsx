'use client';
import React from 'react';
import { Globe, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const NetworkInfrastructurePage: React.FC = () => {
  const networkServices = [
    {
      title: 'Network Design',
      description: 'Comprehensive network architecture and design solutions',
      features: ['LAN/WAN Design', 'Wireless Networks', 'Network Security', 'Scalability Planning']
    },
    {
      title: 'Security Implementation',
      description: 'Advanced network security and firewall configuration',
      features: ['Firewall Setup', 'VPN Configuration', 'Intrusion Detection', 'Access Control']
    },
    {
      title: 'Performance Optimization',
      description: 'Network performance tuning and optimization',
      features: ['Bandwidth Management', 'QoS Configuration', 'Traffic Analysis', 'Load Balancing']
    },
    {
      title: '24/7 Monitoring',
      description: 'Continuous network monitoring and maintenance',
      features: ['Real-time Monitoring', 'Alert Systems', 'Performance Metrics', 'Proactive Maintenance']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Network Infrastructure Solutions - Zion Tech Group"
        description="Comprehensive network infrastructure services including design, security, optimization, and monitoring. Build robust and secure network solutions."
        keywords={['network infrastructure', 'network design', 'network security', 'network monitoring', 'LAN WAN', 'network optimization']}
        canonicalUrl="https://ziontechgroup.com/network-infrastructure"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Network Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build robust and secure network infrastructure with our comprehensive solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {networkServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Network?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your network infrastructure needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NetworkInfrastructurePage;