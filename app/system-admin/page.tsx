import React from 'react';
import Head from 'next/head';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Server, Settings, Shield, Monitor } from 'lucide-react';

const SystemAdminPage: React.FC = () => {
  const adminServices = [
    {
      title: 'AI-Powered System Monitoring',
      description: 'Intelligent system monitoring with AI-powered analytics and automated alerting for proactive issue resolution.',
      icon: '📊',
      price: '$1,200/month',
      features: [
        'Real-time Monitoring',
        'AI-Powered Analytics',
        'Automated Alerts',
        'Performance Optimization',
        'Predictive Maintenance',
        'Custom Dashboards'
      ],
      benefits: [
        'Prevent 95% of system issues',
        'Reduce downtime by 80%',
        'Optimize performance automatically',
        'Reduce monitoring costs by 60%'
      ],
      marketPrice: '$2,400-4,800/month',
      category: 'System Monitoring',
      technologies: ['Monitoring Tools', 'AI/ML', 'Analytics', 'Alerting', 'APIs', 'Dashboards']
    },
    {
      title: 'Intelligent Server Management',
      description: 'AI-powered server management with automated optimization, scaling, and maintenance capabilities.',
      icon: '🖥️',
      price: '$1,800/month',
      features: [
        'Server Optimization',
        'Automated Scaling',
        'Performance Tuning',
        'Resource Management',
        'Maintenance Automation',
        'Security Hardening'
      ],
      benefits: [
        'Optimize server performance',
        'Reduce maintenance costs by 70%',
        'Ensure high availability',
        'Automate server management'
      ],
      marketPrice: '$3,600-7,200/month',
      category: 'Server Management',
      technologies: ['Server Management', 'AI/ML', 'Auto-scaling', 'Performance Tuning', 'APIs', 'Automation']
    },
    {
      title: 'AI Database Administration',
      description: 'Intelligent database administration with AI-powered optimization and automated maintenance.',
      icon: '🗄️',
      price: '$1,500/month',
      features: [
        'Database Optimization',
        'Performance Tuning',
        'Automated Maintenance',
        'Backup Management',
        'Security Hardening',
        'Scaling Management'
      ],
      benefits: [
        'Optimize database performance',
        'Reduce maintenance time by 80%',
        'Ensure data security',
        'Improve scalability'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Database Administration',
      technologies: ['Database Systems', 'AI/ML', 'Performance Tuning', 'Automation', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Network Administration',
      description: 'Intelligent network administration with AI-powered optimization and automated network management.',
      icon: '🌐',
      price: '$1,400/month',
      features: [
        'Network Optimization',
        'Traffic Management',
        'Security Configuration',
        'Performance Monitoring',
        'Automated Scaling',
        'Troubleshooting'
      ],
      benefits: [
        'Optimize network performance',
        'Reduce latency by 50%',
        'Improve network reliability',
        'Automate network management'
      ],
      marketPrice: '$2,800-5,600/month',
      category: 'Network Administration',
      technologies: ['Network Management', 'AI/ML', 'Traffic Optimization', 'Security', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Security Administration',
      description: 'Intelligent security administration with AI-powered threat detection and automated security management.',
      icon: '🔒',
      price: '$2,000/month',
      features: [
        'Security Monitoring',
        'Threat Detection',
        'Access Management',
        'Compliance Management',
        'Incident Response',
        'Security Hardening'
      ],
      benefits: [
        'Enhance security posture',
        'Detect threats automatically',
        'Ensure compliance',
        'Reduce security incidents by 90%'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Security Administration',
      technologies: ['Security Tools', 'AI/ML', 'Threat Detection', 'Compliance', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Backup & Recovery Management',
      description: 'Intelligent backup and recovery management with AI-powered data protection and automated recovery.',
      icon: '💾',
      price: '$1,300/month',
      features: [
        'Automated Backups',
        'Recovery Planning',
        'Data Replication',
        'Recovery Testing',
        'Compliance Management',
        'Performance Optimization'
      ],
      benefits: [
        'Protect 100% of data',
        'Recover in minutes',
        'Ensure business continuity',
        'Reduce backup costs by 60%'
      ],
      marketPrice: '$2,600-5,200/month',
      category: 'Backup & Recovery',
      technologies: ['Backup Solutions', 'Disaster Recovery', 'AI/ML', 'Data Replication', 'APIs', 'Monitoring']
    },
    {
      title: 'AI User Management',
      description: 'Intelligent user management with AI-powered access control and automated user lifecycle management.',
      icon: '👥',
      price: '$1,100/month',
      features: [
        'User Provisioning',
        'Access Control',
        'Role Management',
        'Compliance Monitoring',
        'Audit Logging',
        'Automated Workflows'
      ],
      benefits: [
        'Streamline user management',
        'Ensure proper access control',
        'Automate user workflows',
        'Reduce administrative overhead by 70%'
      ],
      marketPrice: '$2,200-4,400/month',
      category: 'User Management',
      technologies: ['Identity Management', 'AI/ML', 'Access Control', 'Automation', 'APIs', 'Audit']
    },
    {
      title: 'AI Performance Optimization',
      description: 'Intelligent performance optimization with AI-powered analysis and automated system tuning.',
      icon: '⚡',
      price: '$1,600/month',
      features: [
        'Performance Analysis',
        'Automated Tuning',
        'Resource Optimization',
        'Capacity Planning',
        'Bottleneck Detection',
        'Performance Monitoring'
      ],
      benefits: [
        'Optimize system performance',
        'Reduce resource usage by 40%',
        'Improve response times',
        'Automate performance tuning'
      ],
      marketPrice: '$3,200-6,400/month',
      category: 'Performance Optimization',
      technologies: ['Performance Tools', 'AI/ML', 'Resource Optimization', 'Analytics', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Compliance Management',
      description: 'Intelligent compliance management with AI-powered monitoring and automated compliance reporting.',
      icon: '📋',
      price: '$1,700/month',
      features: [
        'Compliance Monitoring',
        'Automated Reporting',
        'Risk Assessment',
        'Audit Preparation',
        'Policy Management',
        'Training Automation'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit preparation time by 80%',
        'Automate compliance reporting',
        'Minimize compliance risks'
      ],
      marketPrice: '$3,400-6,800/month',
      category: 'Compliance Management',
      technologies: ['Compliance Tools', 'AI/ML', 'Risk Assessment', 'Automation', 'APIs', 'Reporting']
    },
    {
      title: 'AI Infrastructure Automation',
      description: 'Intelligent infrastructure automation with AI-powered orchestration and automated system management.',
      icon: '🤖',
      price: '$2,200/month',
      features: [
        'Infrastructure Orchestration',
        'Automated Provisioning',
        'Configuration Management',
        'Deployment Automation',
        'Monitoring Integration',
        'Self-Healing Systems'
      ],
      benefits: [
        'Automate infrastructure management',
        'Reduce manual work by 85%',
        'Improve system reliability',
        'Accelerate deployments by 90%'
      ],
      marketPrice: '$4,400-8,800/month',
      category: 'Infrastructure Automation',
      technologies: ['Orchestration', 'AI/ML', 'Automation', 'Configuration Management', 'APIs', 'Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI System Administration Services - Zion Tech Group</title>
        <meta name="description" content="Intelligent system administration with AI-powered monitoring, optimization, and automation. Streamline your IT operations starting at $1,100/month." />
        <meta name="keywords" content="ai system administration, system monitoring, server management, database administration, network administration, it automation" />
      </Head>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI System Administration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your IT operations with AI-powered system administration, monitoring, and automation for maximum efficiency and reliability.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
              <div className="text-gray-300">Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$1,100</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">70%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Administration Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    Contact: kleber@ziontechgroup.com | +1 302 464 0950
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI system administration services today and streamline your IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemAdminPage;