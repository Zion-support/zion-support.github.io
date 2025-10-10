'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    { 
      name: 'Cloud Infrastructure Solutions', 
      href: '/cloud-services', 
      icon: Cloud, 
      description: 'Complete cloud infrastructure setup and management',
      price: 'Starting at $2,500/month',
      features: ['AWS/Azure/GCP setup', 'Auto-scaling', 'Load balancing', 'Disaster recovery']
    },
    { 
      name: 'Cloud Migration Services', 
      href: '/cloud-migration', 
      icon: Cloud, 
      description: 'Seamless migration to cloud platforms',
      price: 'Starting at $5,000/project',
      features: ['Zero-downtime migration', 'Data integrity', 'Performance optimization', 'Cost optimization']
    },
    { 
      name: 'DevOps & CI/CD Implementation', 
      href: '/devops', 
      icon: Settings, 
      description: 'Complete DevOps pipeline setup and automation',
      price: 'Starting at $3,000/month',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as Code', 'Monitoring setup']
    },
    { 
      name: 'Database Management & Optimization', 
      href: '/database', 
      icon: Database, 
      description: 'Database design, optimization, and management',
      price: 'Starting at $1,500/month',
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Security hardening']
    },
    { 
      name: 'Cybersecurity Solutions', 
      href: '/cybersecurity', 
      icon: Shield, 
      description: 'Comprehensive cybersecurity protection',
      price: 'Starting at $2,000/month',
      features: ['Threat detection', 'Vulnerability assessment', 'Security policies', 'Incident response']
    },
    { 
      name: '24/7 Security Monitoring', 
      href: '/security-monitoring', 
      icon: Shield, 
      description: 'Round-the-clock security monitoring and response',
      price: 'Starting at $1,800/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated response', 'Compliance reporting']
    },
    { 
      name: 'Penetration Testing', 
      href: '/penetration-testing', 
      icon: Shield, 
      description: 'Comprehensive security testing and assessment',
      price: 'Starting at $3,500/test',
      features: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Compliance testing']
    },
    { 
      name: 'IT Infrastructure Setup', 
      href: '/it-infrastructure', 
      icon: Cloud, 
      description: 'Complete IT infrastructure design and implementation',
      price: 'Starting at $10,000/project',
      features: ['Network design', 'Server setup', 'Security implementation', 'Documentation']
    },
    { 
      name: 'Managed IT Services', 
      href: '/managed-it', 
      icon: Settings, 
      description: 'Complete IT management and support',
      price: 'Starting at $1,200/month',
      features: ['24/7 support', 'Proactive monitoring', 'Software updates', 'Help desk services']
    },
    { 
      name: 'IT Strategy Consulting', 
      href: '/it-consulting', 
      icon: Globe, 
      description: 'Strategic IT planning and digital transformation',
      price: 'Starting at $200/hour',
      features: ['Technology assessment', 'Digital transformation', 'ROI analysis', 'Implementation planning']
    },
    { 
      name: 'Data Analytics & BI', 
      href: '/data-analytics', 
      icon: Database, 
      description: 'Business intelligence and data analytics solutions',
      price: 'Starting at $2,800/month',
      features: ['Data warehousing', 'Dashboard creation', 'Predictive analytics', 'Custom reporting']
    },
    { 
      name: 'Mobile App Development', 
      href: '/mobile-development', 
      icon: Smartphone, 
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $15,000/app',
      features: ['iOS/Android development', 'Cross-platform solutions', 'UI/UX design', 'App store deployment']
    },
    { 
      name: 'Web Application Development', 
      href: '/web-development', 
      icon: Globe, 
      description: 'Custom web applications and platforms',
      price: 'Starting at $8,000/project',
      features: ['Custom development', 'Responsive design', 'API integration', 'Performance optimization']
    },
    { 
      name: 'Business Process Automation', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Workflow automation and process optimization',
      price: 'Starting at $2,200/month',
      features: ['Workflow design', 'RPA implementation', 'Integration services', 'Process optimization']
    },
    { 
      name: 'Network Security & Firewall', 
      href: '/network-security', 
      icon: Shield, 
      description: 'Network security implementation and management',
      price: 'Starting at $1,500/month',
      features: ['Firewall configuration', 'VPN setup', 'Network monitoring', 'Security policies']
    },
    { 
      name: 'Backup & Disaster Recovery', 
      href: '/backup-recovery', 
      icon: Cloud, 
      description: 'Comprehensive backup and disaster recovery solutions',
      price: 'Starting at $800/month',
      features: ['Automated backups', 'Disaster recovery planning', 'Testing and validation', 'Cloud backup solutions']
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
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Competitive market pricing</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={service.href}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center block"
                    >
                      Learn More
                    </Link>
                    <div className="text-center">
                      <a 
                        href="tel:+13024640950"
                        className="text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        Call: +1 302 464 0950
                      </a>
                    </div>
                  </div>
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
