'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Code } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    { 
      name: 'Cloud Services', 
      href: '/cloud-services', 
      icon: Cloud, 
      description: 'Comprehensive cloud solutions including AWS, Azure, and GCP',
      price: 'Starting at $2,000/month',
      features: ['Cloud Architecture', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    { 
      name: 'Cloud Migration', 
      href: '/cloud-migration', 
      icon: Cloud, 
      description: 'Seamless migration to cloud platforms with zero downtime',
      price: 'Starting at $5,000/project',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Validation']
    },
    { 
      name: 'DevOps & CI/CD', 
      href: '/devops', 
      icon: Settings, 
      description: 'Complete DevOps implementation with CI/CD pipelines',
      price: 'Starting at $3,500/month',
      features: ['Pipeline Setup', 'Container Orchestration', 'Monitoring', 'Automated Deployments']
    },
    { 
      name: 'Database Services', 
      href: '/database', 
      icon: Database, 
      description: 'Database design, optimization, and management services',
      price: 'Starting at $1,500/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration']
    },
    { 
      name: 'Cybersecurity', 
      href: '/cybersecurity', 
      icon: Shield, 
      description: 'Comprehensive security solutions to protect your infrastructure',
      price: 'Starting at $2,500/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response']
    },
    { 
      name: 'Security Monitoring', 
      href: '/security-monitoring', 
      icon: Shield, 
      description: '24/7 security monitoring and threat detection',
      price: 'Starting at $1,800/month',
      features: ['Real-time Monitoring', 'SIEM Implementation', 'Threat Intelligence', 'Alert Management']
    },
    { 
      name: 'Penetration Testing', 
      href: '/penetration-testing', 
      icon: Shield, 
      description: 'Comprehensive security testing and vulnerability assessment',
      price: 'Starting at $3,000/test',
      features: ['Network Testing', 'Web Application Testing', 'Social Engineering', 'Compliance Testing']
    },
    { 
      name: 'IT Infrastructure', 
      href: '/it-infrastructure', 
      icon: Cloud, 
      description: 'Complete IT infrastructure setup and management',
      price: 'Starting at $4,000/month',
      features: ['Server Setup', 'Network Configuration', 'Storage Solutions', 'Monitoring Systems']
    },
    { 
      name: 'Managed IT Services', 
      href: '/managed-it', 
      icon: Settings, 
      description: '24/7 IT support and infrastructure management',
      price: 'Starting at $2,200/month',
      features: ['Help Desk Support', 'System Maintenance', 'Software Updates', 'Performance Monitoring']
    },
    { 
      name: 'IT Consulting', 
      href: '/it-consulting', 
      icon: Globe, 
      description: 'Strategic IT consulting and technology roadmap development',
      price: 'Starting at $200/hour',
      features: ['Technology Assessment', 'Digital Transformation', 'IT Strategy', 'Vendor Selection']
    },
    { 
      name: 'Data Analytics', 
      href: '/data-analytics', 
      icon: Database, 
      description: 'Advanced data analytics and business intelligence solutions',
      price: 'Starting at $3,000/month',
      features: ['Data Warehousing', 'ETL Processes', 'Dashboard Development', 'Predictive Analytics']
    },
    { 
      name: 'Mobile Development', 
      href: '/mobile-development', 
      icon: Smartphone, 
      description: 'Custom mobile applications for iOS and Android',
      price: 'Starting at $15,000/app',
      features: ['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Deployment']
    },
    { 
      name: 'Web Development', 
      href: '/web-development', 
      icon: Globe, 
      description: 'Modern web applications and e-commerce solutions',
      price: 'Starting at $8,000/project',
      features: ['Responsive Design', 'E-commerce Integration', 'API Development', 'Performance Optimization']
    },
    { 
      name: 'Process Automation', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Workflow automation and business process optimization',
      price: 'Starting at $2,800/month',
      features: ['RPA Implementation', 'Workflow Design', 'Integration Services', 'Process Monitoring']
    },
    { 
      name: 'API Development', 
      href: '/api-development', 
      icon: Code, 
      description: 'RESTful APIs and microservices architecture',
      price: 'Starting at $5,000/project',
      features: ['API Design', 'Documentation', 'Testing', 'Security Implementation']
    },
    { 
      name: 'System Integration', 
      href: '/system-integration', 
      icon: Settings, 
      description: 'Integration of disparate systems and applications',
      price: 'Starting at $4,500/project',
      features: ['Legacy System Integration', 'Third-party APIs', 'Data Synchronization', 'Error Handling']
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
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT services can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">
                  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center">
                  Email Us
                </a>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-300 mb-2">Visit us at: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p className="text-gray-300">Or visit our website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
