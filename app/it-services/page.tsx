'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    { 
      name: 'Cloud Infrastructure & Migration', 
      href: '/cloud-services', 
      icon: Cloud, 
      description: 'Complete cloud solutions including AWS, Azure, GCP setup, migration, and optimization',
      price: '$2,000 - $50,000',
      features: ['Cloud architecture design', 'Migration planning & execution', 'Cost optimization', 'Security compliance']
    },
    { 
      name: 'DevOps & CI/CD Pipeline', 
      href: '/devops', 
      icon: Settings, 
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration',
      price: '$3,000 - $25,000',
      features: ['Docker & Kubernetes', 'Jenkins/GitLab CI', 'Infrastructure automation', 'Monitoring & alerting']
    },
    { 
      name: 'Database Design & Optimization', 
      href: '/database', 
      icon: Database, 
      description: 'Database architecture, performance tuning, and data migration services',
      price: '$1,500 - $20,000',
      features: ['Database design', 'Performance optimization', 'Data migration', 'Backup & recovery']
    },
    { 
      name: 'Cybersecurity Solutions', 
      href: '/cybersecurity', 
      icon: Shield, 
      description: 'Comprehensive security assessment, implementation, and monitoring services',
      price: '$5,000 - $100,000',
      features: ['Security audits', 'Penetration testing', 'Compliance (SOC2, GDPR)', 'Incident response']
    },
    { 
      name: 'Managed IT Services', 
      href: '/managed-it', 
      icon: Settings, 
      description: '24/7 IT support, monitoring, and maintenance for your entire infrastructure',
      price: '$500 - $5,000/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Help desk support', 'Security updates']
    },
    { 
      name: 'IT Strategy & Consulting', 
      href: '/it-consulting', 
      icon: Globe, 
      description: 'Strategic IT planning, digital transformation, and technology roadmap development',
      price: '$2,000 - $30,000',
      features: ['IT strategy planning', 'Digital transformation', 'Technology assessment', 'Vendor management']
    },
    { 
      name: 'Data Analytics & BI', 
      href: '/data-analytics', 
      icon: Database, 
      description: 'Business intelligence solutions, data warehousing, and advanced analytics',
      price: '$3,000 - $40,000',
      features: ['Data warehousing', 'BI dashboards', 'Predictive analytics', 'Data visualization']
    },
    { 
      name: 'Mobile App Development', 
      href: '/mobile-development', 
      icon: Smartphone, 
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$10,000 - $150,000',
      features: ['Native iOS/Android', 'Cross-platform (React Native)', 'UI/UX design', 'App store deployment']
    },
    { 
      name: 'Web Application Development', 
      href: '/web-development', 
      icon: Globe, 
      description: 'Custom web applications, e-commerce platforms, and enterprise solutions',
      price: '$5,000 - $100,000',
      features: ['Custom web apps', 'E-commerce platforms', 'API development', 'Performance optimization']
    },
    { 
      name: 'Process Automation', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Workflow automation, RPA implementation, and business process optimization',
      price: '$2,000 - $25,000',
      features: ['RPA implementation', 'Workflow automation', 'API integrations', 'Process optimization']
    },
    { 
      name: 'Network Infrastructure', 
      href: '/network-infrastructure', 
      icon: Globe, 
      description: 'Network design, implementation, and optimization for enterprise environments',
      price: '$3,000 - $35,000',
      features: ['Network design', 'Wireless solutions', 'VPN setup', 'Network security']
    },
    { 
      name: 'Disaster Recovery & Backup', 
      href: '/disaster-recovery', 
      icon: Shield, 
      description: 'Comprehensive backup solutions and disaster recovery planning',
      price: '$1,000 - $15,000',
      features: ['Backup solutions', 'Disaster recovery planning', 'Business continuity', 'Testing & validation']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure management, and more. Expert IT support and consulting." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group hover:bg-slate-800/70"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
