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
      description: 'Complete cloud solutions including AWS, Azure, GCP migration and optimization',
      price: 'Starting at $2,000/month',
      features: ['Cloud Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization']
    },
    { 
      name: 'DevOps & CI/CD Pipeline', 
      href: '/devops', 
      icon: Settings, 
      description: 'Modern DevOps practices with automated CI/CD pipelines and infrastructure as code',
      price: 'Starting at $3,500/month',
      features: ['CI/CD Setup', 'Infrastructure as Code', 'Monitoring', 'Automated Deployments']
    },
    { 
      name: 'Database Management & Optimization', 
      href: '/database', 
      icon: Database, 
      description: 'Database design, optimization, and management for high-performance applications',
      price: 'Starting at $1,500/month',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery']
    },
    { 
      name: 'Advanced Cybersecurity Solutions', 
      href: '/cybersecurity', 
      icon: Shield, 
      description: 'Comprehensive security solutions including threat detection, prevention, and incident response',
      price: 'Starting at $4,000/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
    },
    { 
      name: '24/7 Security Monitoring', 
      href: '/security-monitoring', 
      icon: Shield, 
      description: 'Round-the-clock security monitoring with AI-powered threat detection and response',
      price: 'Starting at $2,500/month',
      features: ['Real-time Monitoring', 'AI Threat Detection', 'Automated Response', 'Security Analytics']
    },
    { 
      name: 'Penetration Testing & Security Audits', 
      href: '/penetration-testing', 
      icon: Shield, 
      description: 'Comprehensive security testing and vulnerability assessments for your systems',
      price: 'Starting at $3,000/project',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Compliance Testing']
    },
    { 
      name: 'IT Infrastructure Design & Setup', 
      href: '/it-infrastructure', 
      icon: Cloud, 
      description: 'Complete IT infrastructure design, setup, and management for modern businesses',
      price: 'Starting at $5,000/month',
      features: ['Infrastructure Design', 'Hardware Setup', 'Network Configuration', 'System Integration']
    },
    { 
      name: 'Managed IT Services', 
      href: '/managed-it', 
      icon: Settings, 
      description: 'Complete IT management including support, maintenance, and optimization',
      price: 'Starting at $2,800/month',
      features: ['24/7 Support', 'Proactive Maintenance', 'System Monitoring', 'Help Desk']
    },
    { 
      name: 'IT Strategy Consulting', 
      href: '/it-consulting', 
      icon: Globe, 
      description: 'Strategic IT consulting to align technology with business objectives',
      price: 'Starting at $3,500/month',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']
    },
    { 
      name: 'Business Intelligence & Analytics', 
      href: '/data-analytics', 
      icon: Database, 
      description: 'Advanced data analytics and business intelligence solutions for data-driven decisions',
      price: 'Starting at $2,200/month',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Dashboards', 'Predictive Analytics']
    },
    { 
      name: 'Mobile App Development', 
      href: '/mobile-development', 
      icon: Smartphone, 
      description: 'Custom mobile applications for iOS and Android with modern development practices',
      price: 'Starting at $8,000/project',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'UI/UX Design']
    },
    { 
      name: 'Web Application Development', 
      href: '/web-development', 
      icon: Globe, 
      description: 'Modern web applications with responsive design and advanced functionality',
      price: 'Starting at $6,000/project',
      features: ['Frontend Development', 'Backend Development', 'API Development', 'Database Integration']
    },
    { 
      name: 'Process Automation & Workflow', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Intelligent process automation to streamline workflows and improve efficiency',
      price: 'Starting at $2,500/month',
      features: ['Workflow Automation', 'Process Optimization', 'Integration Services', 'Performance Monitoring']
    },
    { 
      name: 'Network Solutions & Security', 
      href: '/network-solutions', 
      icon: Globe, 
      description: 'Complete network infrastructure design, implementation, and security solutions',
      price: 'Starting at $3,200/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring']
    },
    { 
      name: 'IT Support & Help Desk', 
      href: '/it-support', 
      icon: Settings, 
      description: 'Comprehensive IT support services with fast response times and expert assistance',
      price: 'Starting at $1,800/month',
      features: ['24/7 Support', 'Remote Assistance', 'Hardware Support', 'Software Support']
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
                <Link
                  key={index}
                  to={service.href}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group hover:bg-slate-800/70"
                >
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
