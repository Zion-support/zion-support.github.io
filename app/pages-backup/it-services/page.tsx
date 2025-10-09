<<<<<<< HEAD
<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

>>>>>>> origin/main
const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      category: 'infrastructure',
      icon: Cloud,
      price: '$1,299/month',
      originalPrice: '$2,499/month',
      description: 'Comprehensive cloud infrastructure setup, management, and optimization for AWS, Azure, and GCP.',
      features: [
        'Multi-cloud strategy implementation',
        'Infrastructure as Code (IaC)',
        'Auto-scaling configuration',
        'Cost optimization',
        'Security hardening',
        'Disaster recovery setup',
        '24/7 monitoring',
        'Performance optimization'
      ],
      benefits: [
        'Reduce cloud costs by 40%',
        'Improve uptime to 99.9%',
        'Automated scaling',
        'Enhanced security posture'
      ],
      marketPrice: '$2,499-4,999/month',
      rating: 4.9,
      reviews: 1247,
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      demo: 'https://ziontechgroup.com/demo/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      category: 'security',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$2,999/month',
      description: 'Comprehensive cybersecurity solution with threat detection, prevention, and incident response.',
      features: [
        '24/7 threat monitoring',
        'Advanced threat detection',
        'Vulnerability assessment',
        'Penetration testing',
        'Security awareness training',
        'Incident response',
        'Compliance management',
        'Security audits'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 95%',
        'Compliance assurance',
        'Peace of mind'
      ],
      marketPrice: '$2,999-5,999/month',
      rating: 4.8,
      reviews: 892,
      link: 'https://ziontechgroup.com/cybersecurity-suite',
      demo: 'https://ziontechgroup.com/demo/cybersecurity-suite'
    },
    {
      id: 'devops-automation',
      name: 'DevOps & CI/CD Automation',
      category: 'devops',
      icon: GitBranch,
      price: '$1,199/month',
      originalPrice: '$2,299/month',
      description: 'Complete DevOps pipeline setup with automated testing, deployment, and monitoring.',
      features: [
        'CI/CD pipeline setup',
        'Automated testing',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring & alerting',
        'Version control management',
        'Code quality gates',
        'Deployment automation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve code quality',
        'Automated workflows'
      ],
      marketPrice: '$2,299-4,599/month',
      rating: 4.9,
      reviews: 1563,
      link: 'https://ziontechgroup.com/devops-automation',
      demo: 'https://ziontechgroup.com/demo/devops-automation'
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      category: 'database',
      icon: Database,
      price: '$899/month',
      originalPrice: '$1,799/month',
      description: 'Professional database administration with performance tuning and optimization.',
      features: [
        'Database design & architecture',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening',
        'Query optimization',
        'Index management',
        'Capacity planning',
        'Migration services'
      ],
      benefits: [
        'Improve query performance by 300%',
        'Reduce downtime by 99%',
        'Optimize storage costs',
        'Enhanced data security'
      ],
      marketPrice: '$1,799-3,599/month',
      rating: 4.8,
      reviews: 743,
      link: 'https://ziontechgroup.com/database-management',
      demo: 'https://ziontechgroup.com/demo/database-management'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure Solutions',
      category: 'networking',
      icon: Network,
      price: '$1,099/month',
      originalPrice: '$2,199/month',
      description: 'Complete network design, implementation, and management for enterprise environments.',
      features: [
        'Network design & planning',
        'Router & switch configuration',
        'Wireless network setup',
        'VPN implementation',
        'Network monitoring',
        'Troubleshooting & support',
        'Security implementation',
        'Performance optimization'
      ],
      benefits: [
        'Improve network performance by 200%',
        'Reduce network downtime by 95%',
        'Enhanced security',
        'Scalable infrastructure'
      ],
      marketPrice: '$2,199-4,399/month',
      rating: 4.7,
      reviews: 1024,
      link: 'https://ziontechgroup.com/network-infrastructure',
      demo: 'https://ziontechgroup.com/demo/network-infrastructure'
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      category: 'managed',
      icon: Settings,
      price: '$999/month',
      originalPrice: '$1,999/month',
      description: 'Comprehensive 24/7 IT management and support for all your technology needs.',
      features: [
        '24/7 help desk support',
        'Proactive monitoring',
        'Software updates & patches',
        'Hardware maintenance',
        'User support & training',
        'Asset management',
        'Vendor management',
        'Strategic IT planning'
      ],
      benefits: [
        'Reduce IT costs by 50%',
        'Minimize downtime',
        'Expert support team',
        'Predictable costs'
      ],
      marketPrice: '$1,999-3,999/month',
      rating: 4.9,
      reviews: 1156,
      link: 'https://ziontechgroup.com/managed-it-services',
      demo: 'https://ziontechgroup.com/demo/managed-it-services'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      category: 'backup',
      icon: HardDrive,
      price: '$599/month',
      originalPrice: '$1,199/month',
      description: 'Comprehensive data protection with automated backups and disaster recovery.',
      features: [
        'Automated daily backups',
        'Cloud & on-premise storage',
        'Disaster recovery planning',
        'Data encryption',
        'Recovery testing',
        'Compliance backup',
        'Version control',
        '24/7 monitoring'
      ],
      benefits: [
        '99.9% data protection',
        'Fast recovery times',
        'Compliance assurance',
        'Peace of mind'
      ],
      marketPrice: '$1,199-2,399/month',
      rating: 4.8,
      reviews: 678,
      link: 'https://ziontechgroup.com/data-backup-recovery',
      demo: 'https://ziontechgroup.com/demo/data-backup-recovery'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy & Consulting',
      category: 'consulting',
      icon: Users,
      price: '$1,499/month',
      originalPrice: '$2,999/month',
      description: 'Strategic IT consulting to align technology with business objectives.',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation',
        'Process optimization',
        'Vendor evaluation',
        'Budget planning',
        'Risk assessment',
        'Implementation planning'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce risks',
        'Strategic guidance'
      ],
      marketPrice: '$2,999-5,999/month',
      rating: 4.9,
      reviews: 456,
      link: 'https://ziontechgroup.com/it-consulting',
      demo: 'https://ziontechgroup.com/demo/it-consulting'
    },
    {
      id: 'endpoint-security',
      name: 'Endpoint Security Management',
      category: 'security',
      icon: Smartphone,
      price: '$799/month',
      originalPrice: '$1,599/month',
      description: 'Comprehensive endpoint protection for all devices across your organization.',
      features: [
        'Antivirus & anti-malware',
        'Device encryption',
        'Remote device management',
        'Application control',
        'Data loss prevention',
        'Mobile device management',
        'Patch management',
        'Threat detection'
      ],
      benefits: [
        'Protect all endpoints',
        'Reduce security risks by 90%',
        'Centralized management',
        'Compliance assurance'
      ],
      marketPrice: '$1,599-3,199/month',
      rating: 4.7,
      reviews: 891,
      link: 'https://ziontechgroup.com/endpoint-security',
      demo: 'https://ziontechgroup.com/demo/endpoint-security'
    },
    {
      id: 'server-management',
      name: 'Server Management & Monitoring',
      category: 'infrastructure',
      icon: Server,
      price: '$1,399/month',
      originalPrice: '$2,799/month',
      description: 'Professional server administration with proactive monitoring and maintenance.',
      features: [
        'Server setup & configuration',
        'Performance monitoring',
        'Capacity planning',
        'Security hardening',
        'Backup management',
        'Patch management',
        'Troubleshooting',
        'Optimization'
      ],
      benefits: [
        'Improve server performance by 200%',
        'Reduce downtime by 95%',
        'Proactive maintenance',
        'Expert administration'
      ],
      marketPrice: '$2,799-5,599/month',
      rating: 4.8,
      reviews: 1023,
      link: 'https://ziontechgroup.com/server-management',
      demo: 'https://ziontechgroup.com/demo/server-management'
    },
    {
      id: 'email-security',
      name: 'Email Security & Compliance',
      category: 'security',
      icon: Mail,
      price: '$499/month',
      originalPrice: '$999/month',
      description: 'Advanced email protection against phishing, malware, and data breaches.',
      features: [
        'Email threat protection',
        'Phishing prevention',
        'Spam filtering',
        'Data loss prevention',
        'Email encryption',
        'Compliance monitoring',
        'User training',
        'Incident response'
      ],
      benefits: [
        'Block 99.9% of email threats',
        'Prevent data breaches',
        'Compliance assurance',
        'User education'
      ],
      marketPrice: '$999-1,999/month',
      rating: 4.6,
      reviews: 567,
      link: 'https://ziontechgroup.com/email-security',
      demo: 'https://ziontechgroup.com/demo/email-security'
    },
    {
      id: 'it-training',
      name: 'IT Training & Certification',
      category: 'training',
      icon: GraduationCap,
      price: '$299/month',
      originalPrice: '$599/month',
      description: 'Comprehensive IT training programs for your team to enhance skills and productivity.',
      features: [
        'Customized training programs',
        'Certification preparation',
        'Hands-on labs',
        'Progress tracking',
        'Expert instructors',
        'Flexible scheduling',
        'Certification vouchers',
        'Ongoing support'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support tickets',
        'Career development'
      ],
      marketPrice: '$599-1,199/month',
      rating: 4.7,
      reviews: 445,
      link: 'https://ziontechgroup.com/it-training',
      demo: 'https://ziontechgroup.com/demo/it-training'
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery Planning',
      category: 'backup',
      icon: AlertTriangle,
      price: '$1,299/month',
      originalPrice: '$2,599/month',
      description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
      features: [
        'Disaster recovery planning',
        'Business continuity planning',
        'Recovery testing',
        'Failover systems',
        'Data replication',
        'Recovery time objectives',
        'Recovery point objectives',
        'Regular testing'
      ],
      benefits: [
        'Minimize downtime',
        'Protect business operations',
        'Compliance assurance',
        'Peace of mind'
      ],
      marketPrice: '$2,599-5,199/month',
      rating: 4.9,
      reviews: 334,
      link: 'https://ziontechgroup.com/disaster-recovery',
      demo: 'https://ziontechgroup.com/demo/disaster-recovery'
    },
    {
      id: 'network-security',
      name: 'Network Security Solutions',
      category: 'security',
      icon: Firewall,
      price: '$1,199/month',
      originalPrice: '$2,399/month',
      description: 'Advanced network security with firewalls, intrusion detection, and threat prevention.',
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'Network segmentation',
        'VPN management',
        'Traffic monitoring',
        'Threat prevention',
        'Security policies',
        'Incident response'
      ],
      benefits: [
        'Protect network infrastructure',
        'Prevent unauthorized access',
        'Monitor network traffic',
        'Enhanced security posture'
      ],
      marketPrice: '$2,399-4,799/month',
      rating: 4.8,
      reviews: 789,
      link: 'https://ziontechgroup.com/network-security',
      demo: 'https://ziontechgroup.com/demo/network-security'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      category: 'migration',
      icon: Upload,
      price: '$1,599/month',
      originalPrice: '$3,199/month',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.',
      features: [
        'Migration planning',
        'Data migration',
        'Application migration',
        'Testing & validation',
        'Performance optimization',
        'Security configuration',
        'Training & support',
        'Post-migration monitoring'
      ],
      benefits: [
        'Smooth cloud transition',
        'Minimize downtime',
        'Optimize performance',
        'Cost savings'
      ],
      marketPrice: '$3,199-6,399/month',
      rating: 4.9,
      reviews: 623,
      link: 'https://ziontechgroup.com/cloud-migration',
      demo: 'https://ziontechgroup.com/demo/cloud-migration'
    },
    {
      id: 'it-compliance',
      name: 'IT Compliance & Auditing',
      category: 'compliance',
      icon: Certificate,
      price: '$1,399/month',
      originalPrice: '$2,799/month',
      description: 'Comprehensive IT compliance management for GDPR, HIPAA, SOX, and other regulations.',
      features: [
        'Compliance assessment',
        'Policy development',
        'Audit preparation',
        'Risk assessment',
        'Documentation management',
        'Training programs',
        'Monitoring & reporting',
        'Remediation support'
      ],
      benefits: [
        'Ensure compliance',
        'Reduce audit risks',
        'Protect sensitive data',
        'Regulatory assurance'
      ],
      marketPrice: '$2,799-5,599/month',
      rating: 4.8,
      reviews: 456,
      link: 'https://ziontechgroup.com/it-compliance',
      demo: 'https://ziontechgroup.com/demo/it-compliance'
    },
    {
      id: 'performance-monitoring',
      name: 'IT Performance Monitoring',
      category: 'monitoring',
      icon: Activity,
      price: '$799/month',
      originalPrice: '$1,599/month',
      description: 'Comprehensive monitoring and alerting for all IT infrastructure components.',
      features: [
        'Real-time monitoring',
        'Performance metrics',
        'Alert management',
        'Capacity planning',
        'Trend analysis',
        'Custom dashboards',
        'Mobile notifications',
        'Historical reporting'
      ],
      benefits: [
        'Proactive issue detection',
        'Improve system performance',
        'Reduce downtime',
        'Data-driven decisions'
      ],
      marketPrice: '$1,599-3,199/month',
      rating: 4.7,
      reviews: 567,
      link: 'https://ziontechgroup.com/performance-monitoring',
      demo: 'https://ziontechgroup.com/demo/performance-monitoring'
    },
    {
      id: 'it-automation',
      name: 'IT Process Automation',
      category: 'automation',
      icon: Zap,
      price: '$1,099/month',
      originalPrice: '$2,199/month',
      description: 'Automate repetitive IT tasks to improve efficiency and reduce human error.',
      features: [
        'Workflow automation',
        'Script development',
        'Task scheduling',
        'Integration APIs',
        'Error handling',
        'Monitoring & logging',
        'Custom solutions',
        'Maintenance & updates'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve accuracy',
        'Increase efficiency',
        'Cost savings'
      ],
      marketPrice: '$2,199-4,399/month',
      rating: 4.8,
      reviews: 678,
      link: 'https://ziontechgroup.com/it-automation',
      demo: 'https://ziontechgroup.com/demo/it-automation'
    },
    {
      id: 'help-desk-support',
      name: '24/7 Help Desk Support',
      category: 'support',
      icon: Headphones,
      price: '$699/month',
      originalPrice: '$1,399/month',
      description: 'Round-the-clock technical support for all your IT needs and issues.',
      features: [
        '24/7 phone & email support',
        'Remote assistance',
        'Ticket management',
        'Knowledge base',
        'User training',
        'Escalation procedures',
        'SLA guarantees',
        'Multi-language support'
      ],
      benefits: [
        'Immediate issue resolution',
        'Reduce downtime',
        'Expert support team',
        'User satisfaction'
      ],
      marketPrice: '$1,399-2,799/month',
      rating: 4.9,
      reviews: 1024,
      link: 'https://ziontechgroup.com/help-desk-support',
      demo: 'https://ziontechgroup.com/demo/help-desk-support'
    }
  ];


  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const totalSavings = itServices.reduce((total, service) => {
    const original = parseInt(service.originalPrice.replace('$', '').replace(',', '').replace('/month', ''));
    const current = parseInt(service.price.replace('$', '').replace(',', '').replace('/month', ''));
    return total + (original - current);
  }, 0);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="relative z-10">
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive IT solutions for your business
              </p>
            </div>
          </section>
        </main>
        <Footer />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and managed services. Starting at $299/month with up to 50% savings." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, devops, managed it services, database management, network security" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-3d">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to optimize your technology infrastructure, 
            enhance security, and drive business growth. Starting at $299/month with up to 50% savings.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-green-400 mb-2">$299</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card holographic-border">
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

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 cyber-card hover:bg-white/10 transition-all duration-300 group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '').replace(',', '').replace('/month', '')) / parseInt(service.originalPrice.replace('$', '').replace(',', '').replace('/month', ''))) * 100)}%
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href={service.demo}
                    className="bg-transparent border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/10 transition-all"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and save up to ${totalSavings.toLocaleString()}/month compared to market prices.
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
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default ITServicesPage;
=======
import React from "react"; export default function Page() { return <div>IT Services</div>; }
>>>>>>> cursor/website-audit-and-update-with-deployment-af41
=======
>>>>>>> main
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ITServicesPage: React.FC = () => {
  const itServices = [
    // Infrastructure & Cloud Services
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud solutions with AWS, Azure, and GCP expertise for scalable, secure, and cost-effective infrastructure.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-cloud strategy', 'Auto-scaling', 'Load balancing', 'Disaster recovery', 'Cost optimization', 'Security hardening'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['99.9% uptime guarantee', 'Reduce infrastructure costs by 30%', 'Scale instantly', 'Global deployment'],
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud environments with unified management and security.',
      icon: <Server className="w-8 h-8" />,
      features: ['Hybrid architecture', 'Data synchronization', 'Unified security', 'Migration planning', 'Cost analysis', 'Performance monitoring'],
      price: 'Starting at $2,000/month',
      category: 'Infrastructure',
      benefits: ['Flexible deployment', 'Reduced migration risks', 'Optimized costs', 'Enhanced security'],
      technologies: ['VMware', 'Azure Arc', 'AWS Outposts', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Infrastructure Design',
      description: 'Enterprise-grade network architecture with high availability, security, and performance optimization.',
      icon: <Network className="w-8 h-8" />,
      features: ['Network architecture', 'SD-WAN implementation', 'Firewall configuration', 'VPN setup', 'Load balancing', 'Monitoring'],
      price: 'Starting at $1,200/month',
      category: 'Infrastructure',
      benefits: ['Improved performance', 'Enhanced security', 'Reduced downtime', 'Scalable design'],
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Juniper', 'SD-WAN', 'MPLS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Colocation services', 'Managed hosting', 'Disaster recovery', 'Backup solutions', 'Monitoring', '24/7 support'],
      price: 'Starting at $800/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced capital costs', 'Expert management', 'Compliance support'],
      technologies: ['VMware', 'Hyper-V', 'SAN Storage', 'Backup Software', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Cybersecurity Services
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      icon: <Shield className="w-8 h-8" />,
      features: ['AI threat detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Vulnerability scanning', 'Penetration testing'],
      price: 'Starting at $2,500/month',
      category: 'Security',
      benefits: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
      icon: <Lock className="w-8 h-8" />,
      features: ['SSO implementation', 'MFA setup', 'Privileged access management', 'Identity governance', 'Access reviews', 'Compliance reporting'],
      price: 'Starting at $1,800/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Improved user experience', 'Compliance support', 'Reduced IT overhead'],
      technologies: ['Azure AD', 'Okta', 'Ping Identity', 'CyberArk', 'SailPoint', 'ForgeRock'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Compliance & Audit',
      description: 'Comprehensive security compliance services for SOC 2, ISO 27001, HIPAA, and other regulatory requirements.',
      icon: <FileText className="w-8 h-8" />,
      features: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk assessment', 'Training programs', 'Ongoing monitoring'],
      price: 'Starting at $3,000/month',
      category: 'Security',
      benefits: ['Achieve compliance', 'Reduce audit time', 'Minimize risks', 'Build trust'],
      technologies: ['GRC Tools', 'Risk Management', 'Compliance Frameworks', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with dedicated security analysts and advanced threat hunting.',
      icon: <Activity className="w-8 h-8" />,
      features: ['24/7 monitoring', 'Threat hunting', 'Incident response', 'Security analytics', 'Threat intelligence', 'Forensic analysis'],
      price: 'Starting at $5,000/month',
      category: 'Security',
      benefits: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Proactive defense'],
      technologies: ['SIEM', 'SOAR', 'EDR', 'Threat Intelligence', 'Forensic Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Database & Data Management
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management with performance tuning, backup strategies, and high availability solutions.',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'High availability', 'Data migration', 'Monitoring', 'Capacity planning'],
      price: 'Starting at $1,500/month',
      category: 'Data',
      benefits: ['Improved performance', 'Reduced downtime', 'Cost optimization', 'Data protection'],
      technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and rapid recovery capabilities.',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Automated backups', 'Disaster recovery planning', 'RTO/RPO optimization', 'Testing & validation', 'Cloud backup', 'Recovery automation'],
      price: 'Starting at $1,200/month',
      category: 'Data',
      benefits: ['Minimize data loss', 'Rapid recovery', 'Business continuity', 'Compliance support'],
      technologies: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Migration Services',
      description: 'Seamless data migration with zero downtime, data validation, and comprehensive testing for all platforms.',
      icon: <ArrowRight className="w-8 h-8" />,
      features: ['Zero-downtime migration', 'Data validation', 'Schema conversion', 'Performance testing', 'Rollback planning', 'Post-migration support'],
      price: 'Starting at $2,500/project',
      category: 'Data',
      benefits: ['Risk-free migration', 'Minimal downtime', 'Data integrity', 'Cost savings'],
      technologies: ['AWS DMS', 'Azure Data Factory', 'Google Cloud Data Transfer', 'Custom Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // DevOps & Development
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring.',
      icon: <Code className="w-8 h-8" />,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning', 'Automated testing'],
      price: 'Starting at $2,000/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Microservices Architecture',
      description: 'Modern microservices architecture design and implementation with containerization and service mesh.',
      icon: <Cog className="w-8 h-8" />,
      features: ['Architecture design', 'Service decomposition', 'API gateway', 'Service mesh', 'Monitoring', 'Scaling strategies'],
      price: 'Starting at $3,500/month',
      category: 'Development',
      benefits: ['Improved scalability', 'Better maintainability', 'Faster development', 'Technology flexibility'],
      technologies: ['Kubernetes', 'Istio', 'Docker', 'API Gateway', 'Service Mesh', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Development & Management',
      description: 'Comprehensive API development with design, implementation, security, and lifecycle management.',
      icon: <Globe className="w-8 h-8" />,
      features: ['API design', 'RESTful APIs', 'GraphQL', 'API security', 'Rate limiting', 'Documentation'],
      price: 'Starting at $1,800/month',
      category: 'Development',
      benefits: ['Better integration', 'Improved security', 'Enhanced performance', 'Developer experience'],
      technologies: ['Node.js', 'Python', 'Java', 'Kong', 'Apigee', 'AWS API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // IT Support & Management
    {
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including help desk, system administration, and proactive maintenance.',
      icon: <Users className="w-8 h-8" />,
      features: ['24/7 help desk', 'Remote support', 'System administration', 'Patch management', 'User training', 'Asset management'],
      price: 'Starting at $1,000/month',
      category: 'Support',
      benefits: ['Reduced IT costs', 'Improved uptime', 'Expert support', 'Proactive maintenance'],
      technologies: ['RMM Tools', 'PSA Software', 'Remote Access', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT planning and consulting to align technology with business objectives and drive digital transformation.',
      icon: <Target className="w-8 h-8" />,
      features: ['IT strategy development', 'Technology assessment', 'Digital transformation', 'Vendor evaluation', 'Budget planning', 'Roadmap creation'],
      price: 'Starting at $2,500/month',
      category: 'Consulting',
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk reduction', 'Competitive advantage'],
      technologies: ['Strategy Frameworks', 'Assessment Tools', 'Planning Software'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with tracking, optimization, and compliance reporting.',
      icon: <Settings className="w-8 h-8" />,
      features: ['Asset tracking', 'License management', 'Lifecycle planning', 'Cost optimization', 'Compliance reporting', 'Vendor management'],
      price: 'Starting at $800/month',
      category: 'Management',
      benefits: ['Cost savings', 'Compliance assurance', 'Better planning', 'Reduced risks'],
      technologies: ['Asset Management Tools', 'License Management', 'CMDB', 'Reporting Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Specialized Services
    {
      title: 'Microsoft 365 Migration & Management',
      description: 'Complete Microsoft 365 migration with security configuration, user training, and ongoing management.',
      icon: <Mail className="w-8 h-8" />,
      features: ['Migration planning', 'Data migration', 'Security configuration', 'User training', 'Ongoing management', 'Compliance setup'],
      price: 'Starting at $1,500/month',
      category: 'Cloud Services',
      benefits: ['Improved collaboration', 'Enhanced security', 'Cost savings', 'Better productivity'],
      technologies: ['Microsoft 365', 'Azure AD', 'PowerShell', 'Migration Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'VoIP & Unified Communications',
      description: 'Modern communication solutions with VoIP, video conferencing, and unified communications platforms.',
      icon: <Phone className="w-8 h-8" />,
      features: ['VoIP implementation', 'Video conferencing', 'Unified communications', 'Call center solutions', 'Integration services', 'Training'],
      price: 'Starting at $1,200/month',
      category: 'Communications',
      benefits: ['Cost savings', 'Improved collaboration', 'Better mobility', 'Enhanced features'],
      technologies: ['Cisco', 'Microsoft Teams', 'Zoom', '8x8', 'RingCentral', 'Avaya'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs for staff development and certification preparation.',
      icon: <Award className="w-8 h-8" />,
      features: ['Technical training', 'Certification prep', 'Security awareness', 'Software training', 'Custom programs', 'Online learning'],
      price: 'Starting at $500/month',
      category: 'Training',
      benefits: ['Improved skills', 'Better productivity', 'Reduced support needs', 'Career development'],
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Expert IT project management with planning, execution, and delivery of complex technology initiatives.',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Project planning', 'Resource management', 'Risk assessment', 'Timeline management', 'Quality assurance', 'Stakeholder communication'],
      price: 'Starting at $2,000/month',
      category: 'Project Management',
      benefits: ['On-time delivery', 'Cost control', 'Quality assurance', 'Risk mitigation'],
      technologies: ['Project Management Tools', 'Agile Methodologies', 'Risk Management Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Data', count: itServices.filter(s => s.category === 'Data').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Management', count: itServices.filter(s => s.category === 'Management').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Communications', count: itServices.filter(s => s.category === 'Communications').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our IT Services
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-600 transition-colors duration-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.technologies && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="text-xs text-gray-500">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="text-cyan-400 font-bold mb-4 text-lg">{service.price}</div>
                
                {service.contactInfo && (
                  <div className="text-xs text-gray-500 mb-4">
                    {service.contactInfo}
                  </div>
                )}

                <Link
                  href="/contact"
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
enhance-and-expand-ziontechgroup-com-services-and-site-caae
  );
};
export default ITServicesPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-b494
