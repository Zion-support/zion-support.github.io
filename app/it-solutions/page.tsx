import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Users, Database, Wrench } from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions to support your business growth.',
      features: [
        'AWS/Azure/GCP Setup',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Disaster Recovery',
        'Cost Optimization',
        'Security Hardening'
      ],
      icon: Cloud
    },
    {
      title: 'Network Security',
      description: 'Comprehensive security solutions to protect your network and data.',
      features: [
        'Firewall Configuration',
        'VPN Setup',
        'Intrusion Detection',
        'Security Monitoring',
        'Vulnerability Assessment',
        'Incident Response'
      ],
      icon: Shield
    },
    {
      title: 'System Administration',
      description: 'Professional system administration and maintenance services.',
      features: [
        'Server Management',
        'User Account Management',
        'Backup & Recovery',
        'System Monitoring',
        'Performance Optimization',
        'Patch Management'
      ],
      icon: Server
    },
    {
      title: 'Database Management',
      description: 'Efficient database design, optimization, and maintenance.',
      features: [
        'Database Design',
        'Query Optimization',
        'Data Migration',
        'Backup Strategies',
        'Performance Tuning',
        'Security Implementation'
      ],
      icon: Database
    },
    {
      title: 'Help Desk Support',
      description: '24/7 technical support for your IT infrastructure and users.',
      features: [
        'Remote Support',
        'Ticket Management',
        'User Training',
        'Documentation',
        'Escalation Procedures',
        'SLA Compliance'
      ],
      icon: Users
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business goals.',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Vendor Management',
        'Budget Planning',
        'Risk Assessment',
        'Compliance Review'
      ],
      icon: Wrench
    }
  ];

  const technologies = [
    'Windows Server',
    'Linux/Unix',
    'VMware/Hyper-V',
    'Microsoft 365',
    'Active Directory',
    'SQL Server',
    'PostgreSQL',
    'Docker/Kubernetes',
    'AWS/Azure',
    'Cisco/Juniper'
  ];

  const supportLevels = [
    {
      level: 'Basic',
      description: 'Essential IT support for small businesses',
      features: [
        'Email Support',
        'Remote Assistance',
        'Basic Monitoring',
        'Monthly Reports',
        '8x5 Support Hours'
      ],
      price: 'Starting at $500/month'
    },
    {
      level: 'Professional',
      description: 'Comprehensive IT support for growing businesses',
      features: [
        'Priority Support',
        'Proactive Monitoring',
        'Security Management',
        'Backup Solutions',
        '24/7 Emergency Support'
      ],
      price: 'Starting at $1,500/month'
    },
    {
      level: 'Enterprise',
      description: 'Full-service IT management for large organizations',
      features: [
        'Dedicated Team',
        'Custom Solutions',
        'Advanced Security',
        'Compliance Management',
        'Strategic Consulting'
      ],
      price: 'Custom Pricing'
    }
  ];

  return (
    <>
      <SEOHead
        title="IT Solutions - Zion Tech Group"
        description="Comprehensive IT services including cloud infrastructure, network security, system administration, and 24/7 support. Professional IT solutions for your business."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to keep your business running smoothly, securely, and efficiently.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="bg-slate-800 p-8 rounded-lg mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies We Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors">
                  <span className="text-gray-300 font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Levels */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Support Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportLevels.map((level, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                  <p className="text-gray-300 mb-4">{level.description}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-6">{level.price}</div>
                  
                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-slate-800 p-8 rounded-lg mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our IT Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <p className="text-gray-300 mb-4">
                  Round-the-clock technical support to ensure your systems are always running smoothly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Proactive Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  We monitor your systems 24/7 to identify and resolve issues before they impact your business.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Our IT solutions grow with your business, adapting to your changing needs and requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Security First</h3>
                <p className="text-gray-300 mb-4">
                  We prioritize security in all our solutions, protecting your data and systems from threats.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-cyan-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your IT?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our IT solutions can improve your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                Get IT Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/pricing" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITSolutionsPage;
