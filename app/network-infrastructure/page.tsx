'use client';
import React from 'react';
import { Globe, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const NetworkInfrastructurePage: React.FC = () => {
  const networkServices = [
    {
      title: 'Network Design & Architecture',
      description: 'Design and implement robust network architectures that support your business growth and security requirements.',
      features: ['Network Planning', 'Topology Design', 'Security Integration', 'Scalability Planning', 'Performance Optimization'],
      benefits: ['Reliable connectivity', 'Scalable infrastructure', 'Enhanced security', 'Future-proof design']
    },
    {
      title: 'SD-WAN Solutions',
      description: 'Implement software-defined wide area networking for improved performance, security, and cost efficiency.',
      features: ['Centralized Management', 'Application Optimization', 'Security Integration', 'Cost Reduction', 'Cloud Integration'],
      benefits: ['Better performance', 'Reduced costs', 'Simplified management', 'Enhanced security']
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network security solutions including firewalls, intrusion detection, and access controls.',
      features: ['Firewall Configuration', 'Intrusion Detection', 'Access Control', 'VPN Setup', 'Security Monitoring'],
      benefits: ['Threat protection', 'Compliance readiness', 'Secure remote access', 'Continuous monitoring']
    },
    {
      title: 'Wireless Networks',
      description: 'Design and deploy enterprise-grade wireless networks with optimal coverage and performance.',
      features: ['Wi-Fi 6/6E', 'Access Point Deployment', 'Coverage Optimization', 'Security Configuration', 'Performance Monitoring'],
      benefits: ['High-speed connectivity', 'Seamless roaming', 'Secure access', 'Easy management']
    },
    {
      title: 'Network Monitoring',
      description: '24/7 network monitoring and management to ensure optimal performance and quick issue resolution.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning', 'Troubleshooting'],
      benefits: ['Proactive management', 'Faster issue resolution', 'Performance optimization', 'Reduced downtime']
    },
    {
      title: 'Cloud Network Integration',
      description: 'Integrate your on-premises network with cloud services for hybrid and multi-cloud environments.',
      features: ['Cloud Connectivity', 'Hybrid Cloud', 'Multi-cloud Integration', 'Security Policies', 'Cost Optimization'],
      benefits: ['Cloud integration', 'Flexible architecture', 'Cost efficiency', 'Enhanced security']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Network Infrastructure Solutions - SD-WAN & Security | Zion Tech Group"
        description="Expert network infrastructure services including network design, SD-WAN solutions, wireless networks, and security. Build reliable and secure network infrastructure."
        keywords={['network infrastructure', 'SD-WAN', 'network security', 'wireless networks', 'network monitoring', 'cloud integration']}
        canonicalUrl="https://ziontechgroup.com/network-infrastructure"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Network Infrastructure Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Build reliable, secure, and scalable network infrastructure for your business
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our network infrastructure experts design, implement, and manage robust networking solutions 
              that ensure optimal performance, security, and scalability for your business operations.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {networkServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-indigo-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Network Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Network Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Networks</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive network solutions for large enterprises with multiple locations and complex requirements.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-white mb-3">Small Business Networks</h3>
                <p className="text-gray-300 text-sm">
                  Cost-effective network solutions designed for small and medium-sized businesses.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-white mb-3">Hybrid Cloud Networks</h3>
                <p className="text-gray-300 text-sm">
                  Seamless integration between on-premises and cloud infrastructure for hybrid environments.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare Networks</h3>
                <p className="text-gray-300 text-sm">
                  HIPAA-compliant network solutions for healthcare organizations with strict security requirements.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Networks</h3>
                <p className="text-gray-300 text-sm">
                  High-security network infrastructure for financial institutions with compliance requirements.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-white mb-3">Industrial Networks</h3>
                <p className="text-gray-300 text-sm">
                  Rugged network solutions for industrial environments with specialized requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Network Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Aruba', 'Meraki', 'SD-WAN', 'MPLS', 'BGP', 'OSPF', 'VLAN', 'VPN'].map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">🌐</div>
                  <div className="text-sm font-medium text-white">{tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Network Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">&lt;1ms</div>
                <div className="text-gray-300">Latency</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10Gbps</div>
                <div className="text-gray-300">Bandwidth</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Network?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how our network infrastructure solutions can improve your connectivity and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Network Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NetworkInfrastructurePage;