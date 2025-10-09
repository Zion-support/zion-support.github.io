import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, Settings, Shield, Server, Users, Clock, ArrowRight } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const SystemAdminPage: React.FC = () => {
  const adminServices = [
    {
      title: 'Server Administration',
      description: 'Comprehensive server management including Windows, Linux, and cloud-based systems with 24/7 monitoring.',
      icon: '🖥️',
      price: '$1,500/month',
      features: [
        'Windows Server Management',
        'Linux Server Administration',
        'Cloud Server Setup',
        'Performance Monitoring',
        'Security Hardening',
        'Backup & Recovery'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Reduce downtime by 80%',
        'Improve system performance by 50%',
        '24/7 expert support'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Server Management',
      technologies: ['Windows Server', 'Linux', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Administration',
      description: 'Complete network infrastructure management including routers, switches, firewalls, and wireless systems.',
      icon: '🌐',
      price: '$1,200/month',
      features: [
        'Network Design & Setup',
        'Router & Switch Configuration',
        'Firewall Management',
        'VPN Setup & Maintenance',
        'Wireless Network Management',
        'Network Security'
      ],
      benefits: [
        'Optimize network performance',
        'Enhance security posture',
        'Reduce network issues by 70%',
        'Improve connectivity reliability'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Network Management',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Ubiquiti', 'Network Monitoring', 'SD-WAN'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'User Account Management',
      description: 'Comprehensive user account administration including Active Directory, user provisioning, and access control.',
      icon: '👥',
      price: '$800/month',
      features: [
        'Active Directory Management',
        'User Provisioning & Deprovisioning',
        'Group Policy Management',
        'Access Control & Permissions',
        'Password Policy Management',
        'Audit & Compliance'
      ],
      benefits: [
        'Streamline user management',
        'Enhance security compliance',
        'Reduce administrative overhead by 60%',
        'Improve access control'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'User Management',
      technologies: ['Active Directory', 'Azure AD', 'LDAP', 'SSO', 'MFA', 'Identity Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant system administration for medical facilities',
      icon: '🏥',
      results: ['99.9% uptime', 'HIPAA compliance', '24/7 support']
    },
    {
      title: 'Financial Services',
      description: 'Secure system administration for banks and financial institutions',
      icon: '🏦',
      results: ['Enhanced security', 'Regulatory compliance', 'Risk mitigation']
    },
    {
      title: 'Manufacturing',
      description: 'Industrial system administration for production environments',
      icon: '🏭',
      results: ['Operational efficiency', 'Minimal downtime', 'Cost optimization']
    },
    {
      title: 'Education',
      description: 'Educational system administration for schools and universities',
      icon: '🎓',
      results: ['Student data security', 'Academic continuity', 'Resource optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>System Administration Services - Zion Tech Group</title>
        <meta name="description" content="Professional system administration services for servers, networks, and user management. 99.9% uptime guarantee with 24/7 expert support." />
        <meta name="keywords" content="system administration, server management, network administration, IT support, system monitoring, infrastructure management" />
        <link rel="canonical" href="https://ziontechgroup.com/system-admin" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Administration</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional system administration services to keep your IT infrastructure running smoothly with 99.9% uptime guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">System Administration Services</h2>
              <p className="text-xl text-gray-300">Comprehensive IT infrastructure management and support</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {adminServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-cyan-400">${service.price.replace('$', '').replace('/month', '')}</span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="tel:+13024640950"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Expertise</h2>
              <p className="text-xl text-gray-300">Specialized system administration for various industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-cyan-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert system administrators keep your IT infrastructure running smoothly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SystemAdminPage;