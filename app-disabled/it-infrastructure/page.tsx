<<<<<<< HEAD
=======
'use client';
import React from 'react';
<<<<<<< HEAD:app/it-infrastructure/page.tsx
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
=======
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Server, Database, Cloud, Lock, Settings, Monitor } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e:app-disabled/it-infrastructure/page.tsx

const PagePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD:app/it-infrastructure/page.tsx
      icon: Brain,
    'Proven track record of success'
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet />
      </Helmet>
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e:app-disabled/it-infrastructure/page.tsx

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
            <h2>Ready to Get Started?</h2>
            </h2>
            <p>Contact our experts to discuss your page needs and get a customized solution.</p>
                <Phone>
                Call Now;
              </button>
              <button>
                <Mail>
                Email Us;
  );
};

export default PagePage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
