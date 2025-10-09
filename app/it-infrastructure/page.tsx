'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Server, Database, Cloud, Lock, Settings, Monitor } from 'lucide-react';
const ITInfrastructurePage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure setup, optimization, and management across AWS, Azure, and Google Cloud platforms.',
      icon: '☁️',
      price: '$2,999/month',
      features: [
        'Multi-cloud architecture design',
        'Infrastructure as Code (IaC)',
        'Auto-scaling and load balancing',
        'Cost optimization',
        'Security hardening',
        '24/7 monitoring and support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve system reliability by 99.9%',
        'Scale automatically with demand',
        'Ensure enterprise-grade security'
      ],
      marketPrice: '$5000-10000/month',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps transformation with automated deployment pipelines, testing, and continuous integration.',
      icon: '🔄',
      price: '$1,999/month',
      features: [
        'CI/CD pipeline setup',
        'Automated testing integration',
        'Container orchestration',
        'Infrastructure monitoring',
        'Security scanning',
        'Deployment automation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve team productivity',
        'Ensure consistent deployments'
      ],
      marketPrice: '$3000-6000/month',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management, optimization, and migration services for MySQL, PostgreSQL, MongoDB, and more.',
      icon: '🗄️',
      price: '$1,499/month',
      features: [
        'Database design and optimization',
        'Performance tuning',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        'Monitoring and alerting'
      ],
      benefits: [
        'Improve query performance by 300%',
        'Ensure data security and compliance',
        'Reduce downtime to near zero',
        'Optimize storage costs'
      ],
      marketPrice: '$2500-5000/month',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS RDS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Security & Firewall Management',
      description: 'Advanced network security solutions with firewall configuration, intrusion detection, and threat monitoring.',
      icon: '🛡️',
      price: '$2,499/month',
      features: [
        'Firewall configuration and management',
        'Intrusion detection systems',
        'VPN setup and management',
        'Network monitoring',
        'Security policy implementation',
        'Threat response and mitigation'
      ],
      benefits: [
        'Prevent 99% of security breaches',
        'Ensure compliance with regulations',
        'Reduce security incidents by 95%',
        'Protect sensitive data'
      ],
      marketPrice: '$4000-8000/month',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'pfSense', 'Snort', 'Wireshark'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Server Management & Maintenance',
      description: 'Comprehensive server administration including Windows, Linux, and virtualized environments.',
      icon: '🖥️',
      price: '$1,799/month',
      features: [
        'Server setup and configuration',
        'OS updates and patching',
        'Performance monitoring',
        'Backup and disaster recovery',
        'User management',
        'Security hardening'
      ],
      benefits: [
        'Ensure 99.9% uptime',
        'Reduce maintenance costs by 50%',
        'Improve system performance',
        'Prevent security vulnerabilities'
      ],
      marketPrice: '$3000-6000/month',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Ansible', 'Puppet'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Help Desk',
      description: '24/7 IT support services with remote assistance, ticketing system, and proactive monitoring.',
      icon: '🎧',
      price: '$1,299/month',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Ticketing and issue tracking',
        'Proactive system monitoring',
        'User training and documentation',
        'Hardware and software support'
      ],
      benefits: [
        'Reduce IT downtime by 80%',
        'Improve user satisfaction',
        'Resolve issues faster',
        'Prevent problems proactively'
      ],
      marketPrice: '$2000-4000/month',
      technologies: ['ServiceNow', 'Jira', 'TeamViewer', 'SCCM', 'Active Directory', 'Office 365'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      icon: '💾',
      price: '$999/month',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Data encryption',
        'Offsite storage',
        'Recovery testing',
        'Compliance monitoring'
      ],
      benefits: [
        'Protect against data loss',
        'Ensure business continuity',
        'Meet compliance requirements',
        'Reduce recovery time to minutes'
      ],
      marketPrice: '$1500-3000/month',
      technologies: ['Veeam', 'Acronis', 'AWS Backup', 'Azure Backup', 'Commvault', 'Rubrik'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Email & Communication Systems',
      description: 'Enterprise email solutions with Microsoft 365, Google Workspace, and custom email server management.',
      icon: '📧',
      price: '$799/month',
      features: [
        'Email server setup and management',
        'Microsoft 365 administration',
        'Google Workspace management',
        'Email security and filtering',
        'Mobile device management',
        'User provisioning and deprovisioning'
      ],
      benefits: [
        'Improve email security',
        'Reduce spam and phishing',
        'Ensure email compliance',
        'Enhance productivity'
      ],
      marketPrice: '$1200-2500/month',
      technologies: ['Microsoft 365', 'Google Workspace', 'Exchange Server', 'Postfix', 'SpamAssassin', 'MDM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];
  const infrastructureStats = [
    { metric: '99.9%', description: 'Uptime Guarantee' },
    { metric: '500+', description: 'Servers Managed' },
    { metric: '50+', description: 'Enterprise Clients' },
    { metric: '24/7', description: 'Support Available' },
    { metric: '< 1hr', description: 'Response Time' },
    { metric: '100%', description: 'Security Compliance' }
  ];
  return (
    <>
      <Helmet>
        <title>IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure services including cloud management, DevOps, database administration, and 24/7 support. Enterprise-grade solutions at competitive prices." />
        <meta name="keywords" content="IT infrastructure, cloud management, DevOps, database administration, server management, IT support, cybersecurity" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Infrastructure Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Enterprise-grade IT infrastructure solutions with 99.9% uptime guarantee and 24/7 expert support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  ✉️ Get Free Infrastructure Audit
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Infrastructure Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Infrastructure Track Record
              </h2>
              <p className="text-xl text-gray-600">
                Proven results from our IT infrastructure services
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {infrastructureStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Infrastructure Services?
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade solutions with unmatched reliability and support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with advanced threat protection and compliance monitoring</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
                <p className="text-gray-600">Guaranteed uptime with redundant systems and proactive monitoring</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock expert support with rapid response times</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Reduce IT costs by up to 40% while improving performance and reliability</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive infrastructure solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save up to 50% vs market rates
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Infrastructure Implementation Process
              </h2>
              <p className="text-xl text-gray-600">
                How we design, implement, and manage your IT infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
                <p className="text-gray-600">We analyze your current infrastructure and design an optimal solution</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">We implement the infrastructure with minimal downtime and disruption</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing & Optimization</h3>
                <p className="text-gray-600">We thoroughly test and optimize the system for peak performance</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Support</h3>
                <p className="text-gray-600">We provide ongoing monitoring and 24/7 support for your infrastructure</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our IT infrastructure experts for a free assessment and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ITInfrastructurePage;
