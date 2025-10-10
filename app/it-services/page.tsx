'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    { 
      name: 'Cloud Services', 
      href: '/cloud-services', 
      icon: Cloud, 
      description: 'Comprehensive cloud solutions including AWS, Azure, and GCP',
      price: 'Starting at $1,500/month',
      features: ['Cloud Architecture', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    { 
      name: 'Cloud Migration', 
      href: '/cloud-migration', 
      icon: Cloud, 
      description: 'Seamless migration to cloud platforms with zero downtime',
      price: 'Starting at $5,000/project',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Post-migration Support']
    },
    { 
      name: 'DevOps & CI/CD', 
      href: '/devops', 
      icon: Settings, 
      description: 'Complete DevOps implementation with automated CI/CD pipelines',
      price: 'Starting at $3,000/month',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Monitoring & Logging', 'Security Integration']
    },
    { 
      name: 'Database Services', 
      href: '/database', 
      icon: Database, 
      description: 'Database design, optimization, and management services',
      price: 'Starting at $1,200/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
    },
    { 
      name: 'Cybersecurity', 
      href: '/cybersecurity', 
      icon: Shield, 
      description: 'Comprehensive security solutions to protect your digital assets',
      price: 'Starting at $2,500/month',
      features: ['Security Assessment', 'Threat Detection', 'Vulnerability Management', 'Incident Response']
    },
    { 
      name: 'Security Monitoring', 
      href: '/security-monitoring', 
      icon: Shield, 
      description: '24/7 security monitoring and threat detection services',
      price: 'Starting at $1,800/month',
      features: ['Real-time Monitoring', 'Threat Intelligence', 'Automated Response', 'Compliance Reporting']
    },
    { 
      name: 'Penetration Testing', 
      href: '/penetration-testing', 
      icon: Shield, 
      description: 'Comprehensive security testing to identify vulnerabilities',
      price: 'Starting at $3,500/test',
      features: ['Network Penetration Testing', 'Web Application Testing', 'Social Engineering', 'Remediation Support']
    },
    { 
      name: 'IT Infrastructure', 
      href: '/it-infrastructure', 
      icon: Cloud, 
      description: 'Complete IT infrastructure setup and management',
      price: 'Starting at $4,000/month',
      features: ['Server Setup', 'Network Configuration', 'Storage Solutions', 'Backup Systems']
    },
    { 
      name: 'Managed IT Services', 
      href: '/managed-it', 
      icon: Settings, 
      description: '24/7 IT support and management for your business',
      price: 'Starting at $2,000/month',
      features: ['Help Desk Support', 'System Maintenance', 'Software Updates', 'Performance Monitoring']
    },
    { 
      name: 'IT Consulting', 
      href: '/it-consulting', 
      icon: Globe, 
      description: 'Strategic IT consulting to optimize your technology stack',
      price: 'Starting at $200/hour',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance']
    },
    { 
      name: 'Data Analytics', 
      href: '/data-analytics', 
      icon: Database, 
      description: 'Advanced data analytics and business intelligence solutions',
      price: 'Starting at $2,200/month',
      features: ['Data Warehousing', 'ETL Processes', 'Dashboard Development', 'Predictive Analytics']
    },
    { 
      name: 'Mobile Development', 
      href: '/mobile-development', 
      icon: Smartphone, 
      description: 'Custom mobile applications for iOS and Android',
      price: 'Starting at $8,000/app',
      features: ['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Optimization']
    },
    { 
      name: 'Web Development', 
      href: '/web-development', 
      icon: Globe, 
      description: 'Modern web applications and e-commerce solutions',
      price: 'Starting at $5,000/project',
      features: ['Responsive Design', 'E-commerce Integration', 'API Development', 'Performance Optimization']
    },
    { 
      name: 'Process Automation', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Workflow automation to improve efficiency and reduce costs',
      price: 'Starting at $3,500/month',
      features: ['Workflow Analysis', 'RPA Implementation', 'Integration Services', 'Monitoring & Maintenance']
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
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
