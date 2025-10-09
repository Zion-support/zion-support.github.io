import React from 'react';
import Head from 'next/head';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Cloud, Server, Database, Zap } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const cloudServices = [
    {
      title: 'AI Cloud Migration',
      description: 'Intelligent cloud migration with automated assessment, planning, and execution for seamless transition.',
      icon: '☁️',
      price: '$2,500/month',
      features: [
        'Migration Assessment',
        'Automated Planning',
        'Zero-Downtime Migration',
        'Data Synchronization',
        'Performance Optimization',
        'Cost Optimization'
      ],
      benefits: [
        'Reduce migration time by 70%',
        'Minimize downtime to zero',
        'Optimize cloud costs by 40%',
        'Ensure data integrity'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Cloud Migration',
      technologies: ['AWS', 'Azure', 'GCP', 'Migration Tools', 'AI/ML', 'Automation']
    },
    {
      title: 'AI Cloud Architecture',
      description: 'Intelligent cloud architecture design with AI-powered optimization and scalability planning.',
      icon: '🏗️',
      price: '$3,000/month',
      features: [
        'Architecture Design',
        'Scalability Planning',
        'Performance Optimization',
        'Security Integration',
        'Cost Optimization',
        'Monitoring Setup'
      ],
      benefits: [
        'Design optimal cloud architecture',
        'Ensure scalability and performance',
        'Reduce costs by 50%',
        'Improve reliability by 99.9%'
      ],
      marketPrice: '$6,000-15,000/month',
      category: 'Cloud Architecture',
      technologies: ['Cloud Design', 'AI/ML', 'Auto-scaling', 'Load Balancing', 'Monitoring', 'APIs']
    },
    {
      title: 'AI Cloud Security',
      description: 'Comprehensive cloud security with AI-powered threat detection and automated compliance management.',
      icon: '🔒',
      price: '$2,200/month',
      features: [
        'Security Assessment',
        'Threat Detection',
        'Compliance Management',
        'Access Controls',
        'Data Protection',
        'Incident Response'
      ],
      benefits: [
        'Secure cloud environments',
        'Ensure compliance automatically',
        'Prevent security breaches',
        'Reduce security costs by 60%'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'Cloud Security',
      technologies: ['Cloud Security', 'AI/ML', 'Compliance', 'Encryption', 'Monitoring', 'APIs']
    },
    {
      title: 'AI Cloud Monitoring',
      description: 'Intelligent cloud monitoring with AI-powered analytics and automated alerting and response.',
      icon: '📊',
      price: '$1,800/month',
      features: [
        'Real-time Monitoring',
        'AI-Powered Analytics',
        'Automated Alerts',
        'Performance Optimization',
        'Cost Tracking',
        'Predictive Maintenance'
      ],
      benefits: [
        'Monitor all cloud resources',
        'Prevent issues proactively',
        'Optimize performance automatically',
        'Reduce monitoring costs by 50%'
      ],
      marketPrice: '$3,600-7,200/month',
      category: 'Cloud Monitoring',
      technologies: ['Cloud Monitoring', 'AI/ML', 'Analytics', 'Alerting', 'APIs', 'Dashboards']
    },
    {
      title: 'AI Cloud Cost Optimization',
      description: 'Intelligent cloud cost optimization with AI-powered analysis and automated resource management.',
      icon: '💰',
      price: '$1,500/month',
      features: [
        'Cost Analysis',
        'Resource Optimization',
        'Automated Scaling',
        'Waste Detection',
        'Budget Management',
        'ROI Tracking'
      ],
      benefits: [
        'Reduce cloud costs by 40%',
        'Eliminate resource waste',
        'Optimize spending automatically',
        'Improve ROI by 200%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Analysis', 'AI/ML', 'Auto-scaling', 'Resource Management', 'APIs', 'Analytics']
    },
    {
      title: 'AI Cloud Backup & Recovery',
      description: 'Intelligent backup and disaster recovery with AI-powered data protection and automated recovery.',
      icon: '💾',
      price: '$1,200/month',
      features: [
        'Automated Backups',
        'Disaster Recovery',
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
      marketPrice: '$2,400-4,800/month',
      category: 'Backup & Recovery',
      technologies: ['Backup Solutions', 'Disaster Recovery', 'AI/ML', 'Data Replication', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Cloud Database Management',
      description: 'Intelligent database management with AI-powered optimization and automated maintenance.',
      icon: '🗄️',
      price: '$2,000/month',
      features: [
        'Database Optimization',
        'Performance Tuning',
        'Automated Maintenance',
        'Scaling Management',
        'Security Hardening',
        'Backup Automation'
      ],
      benefits: [
        'Optimize database performance',
        'Reduce maintenance costs by 70%',
        'Ensure data security',
        'Improve scalability'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Database Management',
      technologies: ['Database Systems', 'AI/ML', 'Performance Tuning', 'Automation', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Cloud Networking',
      description: 'Intelligent cloud networking with AI-powered optimization and automated network management.',
      icon: '🌐',
      price: '$1,600/month',
      features: [
        'Network Design',
        'Traffic Optimization',
        'Load Balancing',
        'Security Configuration',
        'Performance Monitoring',
        'Automated Scaling'
      ],
      benefits: [
        'Optimize network performance',
        'Reduce latency by 50%',
        'Improve reliability',
        'Automate network management'
      ],
      marketPrice: '$3,200-6,400/month',
      category: 'Cloud Networking',
      technologies: ['Cloud Networking', 'AI/ML', 'Load Balancing', 'Traffic Management', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Cloud DevOps',
      description: 'Intelligent DevOps with AI-powered CI/CD, automated testing, and deployment optimization.',
      icon: '⚙️',
      price: '$2,800/month',
      features: [
        'CI/CD Automation',
        'Automated Testing',
        'Deployment Optimization',
        'Infrastructure as Code',
        'Monitoring Integration',
        'Performance Optimization'
      ],
      benefits: [
        'Accelerate deployments by 80%',
        'Reduce deployment failures by 90%',
        'Improve code quality',
        'Automate DevOps processes'
      ],
      marketPrice: '$5,600-11,200/month',
      category: 'Cloud DevOps',
      technologies: ['DevOps Tools', 'CI/CD', 'AI/ML', 'Automation', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Cloud Compliance',
      description: 'Intelligent compliance management with AI-powered monitoring and automated compliance reporting.',
      icon: '📋',
      price: '$1,900/month',
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
      marketPrice: '$3,800-7,600/month',
      category: 'Cloud Compliance',
      technologies: ['Compliance Tools', 'AI/ML', 'Risk Assessment', 'Automation', 'APIs', 'Reporting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI Cloud Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Intelligent cloud infrastructure solutions with AI-powered optimization, migration, and management. Transform your cloud infrastructure starting at $1,200/month." />
        <meta name="keywords" content="ai cloud infrastructure, cloud migration, cloud architecture, cloud security, cloud optimization, cloud management" />
      </Head>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Cloud Infrastructure Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your cloud infrastructure with AI-powered optimization, migration, and management solutions for maximum performance and cost efficiency.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$1,200</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Migration</div>
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
            Choose Your Cloud Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
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
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI cloud infrastructure services today and optimize your cloud environment.
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

export default AICloudInfrastructurePage;