import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle, Star, Server, Shield, Cloud, Users, BarChart3, Clock, Globe, Zap, Database, Network } from 'lucide-react';

const ItSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure design, deployment, and management services across AWS, Azure, and Google Cloud platforms.',
      features: [
        'Multi-cloud architecture design and implementation',
        'Cloud migration and modernization services',
        'Infrastructure as Code (IaC) implementation',
        'Auto-scaling and load balancing configuration',
        'Cloud security and compliance management',
        'Cost optimization and resource monitoring',
        'Disaster recovery and backup solutions',
        '24/7 cloud infrastructure monitoring'
      ],
      pricing: {
        starter: { price: '$2,500', period: '/month', features: ['Up to 10 servers', 'Basic monitoring', 'Email support'] },
        professional: { price: '$7,500', period: '/month', features: ['Up to 50 servers', 'Advanced monitoring', 'Phone support', 'SLA 99.9%'] },
        enterprise: { price: '$15,000', period: '/month', features: ['Unlimited servers', 'Dedicated team', 'SLA 99.99%', 'Custom solutions'] }
      },
      link: '/cloud-infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      category: 'Infrastructure'
    },
    {
      id: 'network-security',
      title: 'Network Security Solutions',
      description: 'Advanced network security implementation including firewall management, intrusion detection, and secure network architecture.',
      features: [
        'Firewall configuration and management',
        'Intrusion Detection and Prevention Systems (IDPS)',
        'VPN setup and management',
        'Network segmentation and micro-segmentation',
        'Security policy implementation',
        'Vulnerability assessment and penetration testing',
        'Network monitoring and threat detection',
        'Compliance auditing and reporting'
      ],
      pricing: {
        starter: { price: '$1,800', period: '/month', features: ['Basic firewall management', 'Monthly security reports', 'Email support'] },
        professional: { price: '$4,500', period: '/month', features: ['Advanced security features', 'Weekly reports', 'Phone support', '24/7 monitoring'] },
        enterprise: { price: '$9,000', period: '/month', features: ['Custom security solutions', 'Daily reports', 'Dedicated security team', 'Compliance management'] }
      },
      link: '/network-security',
      icon: <Shield className="w-8 h-8" />,
      category: 'Security'
    },
    {
      id: 'data-management',
      title: 'Data Management & Analytics',
      description: 'Comprehensive data management solutions including database administration, data warehousing, and business intelligence implementation.',
      features: [
        'Database design and optimization',
        'Data warehousing and ETL processes',
        'Business intelligence dashboard development',
        'Data governance and quality management',
        'Backup and disaster recovery planning',
        'Data migration and integration services',
        'Performance tuning and optimization',
        'Compliance and data privacy management'
      ],
      pricing: {
        starter: { price: '$3,200', period: '/month', features: ['Up to 5 databases', 'Basic BI reports', 'Monthly maintenance'] },
        professional: { price: '$8,500', period: '/month', features: ['Up to 25 databases', 'Advanced analytics', 'Weekly maintenance', 'Custom dashboards'] },
        enterprise: { price: '$18,000', period: '/month', features: ['Unlimited databases', 'Real-time analytics', 'Dedicated DBA team', 'Custom solutions'] }
      },
      link: '/data-management',
      icon: <Database className="w-8 h-8" />,
      category: 'Data & Analytics'
    },
    {
      id: 'helpdesk-support',
      title: 'IT Helpdesk & Support Services',
      description: 'Professional IT support services including helpdesk management, technical support, and user training programs.',
      features: [
        '24/7 helpdesk support services',
        'Remote desktop support and troubleshooting',
        'Hardware and software installation',
        'User training and onboarding programs',
        'IT asset management and tracking',
        'Service level agreement (SLA) management',
        'Knowledge base development',
        'Performance metrics and reporting'
      ],
      pricing: {
        starter: { price: '$1,200', period: '/month', features: ['Up to 25 users', 'Business hours support', 'Email and phone support'] },
        professional: { price: '$3,500', period: '/month', features: ['Up to 100 users', 'Extended hours support', 'Priority support', 'SLA 4 hours'] },
        enterprise: { price: '$7,500', period: '/month', features: ['Unlimited users', '24/7 support', 'Dedicated support team', 'SLA 1 hour'] }
      },
      link: '/helpdesk-support',
      icon: <Users className="w-8 h-8" />,
      category: 'Support'
    },
    {
      id: 'system-integration',
      title: 'System Integration Services',
      description: 'Enterprise system integration services connecting disparate systems and applications for seamless data flow and process automation.',
      features: [
        'API development and integration',
        'Legacy system modernization',
        'Third-party application integration',
        'Data synchronization and mapping',
        'Workflow automation and orchestration',
        'Integration testing and validation',
        'Performance monitoring and optimization',
        'Documentation and training'
      ],
      pricing: {
        starter: { price: '$5,000', period: '/project', features: ['Up to 3 systems', 'Basic integration', 'Project management'] },
        professional: { price: '$15,000', period: '/project', features: ['Up to 10 systems', 'Advanced integration', 'Custom development'] },
        enterprise: { price: '$50,000', period: '/project', features: ['Unlimited systems', 'Complex integrations', 'Dedicated team', 'Ongoing support'] }
      },
      link: '/system-integration',
      icon: <Network className="w-8 h-8" />,
      category: 'Integration'
    },
    {
      id: 'disaster-recovery',
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity during unexpected events.',
      features: [
        'Disaster recovery planning and assessment',
        'Backup strategy design and implementation',
        'Recovery time objective (RTO) optimization',
        'Recovery point objective (RPO) management',
        'Failover and failback procedures',
        'Regular disaster recovery testing',
        'Business continuity planning',
        'Compliance and audit support'
      ],
      pricing: {
        starter: { price: '$2,800', period: '/month', features: ['Basic backup solution', 'Monthly testing', 'Email support'] },
        professional: { price: '$6,500', period: '/month', features: ['Advanced backup solution', 'Weekly testing', 'Phone support', 'RTO < 4 hours'] },
        enterprise: { price: '$15,000', period: '/month', features: ['Comprehensive solution', 'Daily testing', 'Dedicated team', 'RTO < 1 hour'] }
      },
      link: '/disaster-recovery',
      icon: <Zap className="w-8 h-8" />,
      category: 'Business Continuity'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Data & Analytics', 'Support', 'Integration', 'Business Continuity'];

  return (
    <>
      <SEOHead
        title="IT Solutions - Zion Tech Group"
        description="Comprehensive IT solutions including cloud infrastructure management, network security, data management, helpdesk support, system integration, and disaster recovery services."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive IT solutions designed to optimize your technology infrastructure, enhance security, and drive business growth through innovative technology implementations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {itServices.map((service) => (
              <div key={service.id} className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <span className="text-sm text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">4.8/5</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-blue-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Pricing Plans:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="text-sm text-gray-400 capitalize mb-1">{plan}</div>
                        <div className="text-lg font-bold text-white">
                          {details.price}
                          <span className="text-sm text-gray-400">{details.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    View Details
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our IT solutions are designed to enhance your technology capabilities, improve security, and drive operational efficiency across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View All Pricing
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>https://ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItSolutionsPage;