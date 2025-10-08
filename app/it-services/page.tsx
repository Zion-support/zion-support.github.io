import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Phone, Mail, MapPin, Server, Database, Cloud, Lock, Settings, Monitor } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud Infrastructure Services
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure setup, migration, and optimization across AWS, Azure, and Google Cloud platforms.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: [
        'Multi-cloud architecture design',
        'Cloud migration planning & execution',
        'Infrastructure as Code (IaC)',
        'Auto-scaling & load balancing',
        'Cost optimization & monitoring',
        'Disaster recovery planning',
        'Security compliance',
        '24/7 infrastructure monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability & performance',
        'Ensure 99.9% uptime',
        'Simplify cloud management'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Cloud Infrastructure',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
      popular: true,
      link: '/contact?service=cloud-infrastructure'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, containerization, and continuous integration/deployment.',
      icon: '🔄',
      price: 'Starting at $3,000/month',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring & logging',
        'Security scanning',
        'Performance optimization',
        'Team training & support',
        'Best practices implementation'
      ],
      benefits: [
        'Reduce deployment time by 80%',
        'Improve code quality',
        'Enable faster releases',
        'Minimize deployment risks'
      ],
      marketPrice: '$6,000-18,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Prometheus'],
      popular: true,
      link: '/contact?service=devops-cicd'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and incident response.',
      icon: '🛡️',
      price: 'Starting at $4,000/month',
      features: [
        'Security assessment & auditing',
        'Threat detection & monitoring',
        'Vulnerability management',
        'Incident response planning',
        'Security training',
        'Compliance management',
        'Penetration testing',
        'Security policy development'
      ],
      benefits: [
        'Prevent 99% of cyber attacks',
        'Ensure compliance',
        'Reduce security risks',
        'Protect sensitive data'
      ],
      marketPrice: '$8,000-25,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'Firewalls', 'IDS/IPS', 'WAF', 'EDR', 'SOC Tools'],
      popular: true,
      link: '/contact?service=cybersecurity'
    },
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management, optimization, and migration services for improved performance and reliability.',
      icon: '🗄️',
      price: 'Starting at $2,000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery planning',
        'Database migration',
        'Security hardening',
        'Monitoring & alerting',
        'Capacity planning',
        'Disaster recovery'
      ],
      benefits: [
        'Improve database performance by 60%',
        'Ensure data integrity',
        'Reduce downtime',
        'Optimize storage costs'
      ],
      marketPrice: '$4,000-12,000/month',
      category: 'Database Management',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      link: '/contact?service=database-admin'
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security solutions for enterprise-grade connectivity.',
      icon: '🌐',
      price: 'Starting at $2,800/month',
      features: [
        'Network architecture design',
        'Firewall configuration',
        'VPN setup & management',
        'Network monitoring',
        'Load balancing',
        'Traffic optimization',
        'Security policies',
        'Network troubleshooting'
      ],
      benefits: [
        'Improve network performance',
        'Enhance security posture',
        'Reduce network downtime',
        'Optimize bandwidth usage'
      ],
      marketPrice: '$5,500-16,000/month',
      category: 'Network Infrastructure',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Juniper', 'F5', 'Aruba'],
      link: '/contact?service=network-infrastructure'
    },
    {
      title: 'IT Support & Help Desk',
      description: 'Comprehensive IT support services with 24/7 monitoring, troubleshooting, and user assistance.',
      icon: '🖥️',
      price: 'Starting at $1,500/month',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Hardware & software support',
        'User training',
        'System maintenance',
        'Troubleshooting',
        'Software installation',
        'Account management'
      ],
      benefits: [
        'Reduce IT downtime by 70%',
        'Improve user productivity',
        'Minimize support costs',
        'Ensure system reliability'
      ],
      marketPrice: '$3,000-9,000/month',
      category: 'IT Support',
      technologies: ['Remote Desktop', 'Ticketing Systems', 'Monitoring Tools', 'Asset Management'],
      link: '/contact?service=it-support'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive data protection with automated backups, disaster recovery planning, and business continuity.',
      icon: '💾',
      price: 'Starting at $1,800/month',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Data replication',
        'Recovery testing',
        'Offsite storage',
        'Ransomware protection',
        'Compliance backup',
        'Recovery time optimization'
      ],
      benefits: [
        'Prevent data loss',
        'Minimize downtime',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$3,500-10,000/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Cloud Storage'],
      link: '/contact?service=backup-recovery'
    },
    {
      title: 'System Integration & API Development',
      description: 'Seamless integration of disparate systems with custom API development and data synchronization.',
      icon: '🔌',
      price: 'Starting at $3,500/month',
      features: [
        'System integration planning',
        'Custom API development',
        'Data synchronization',
        'Legacy system modernization',
        'Third-party integrations',
        'Real-time data processing',
        'Error handling & monitoring',
        'Documentation & training'
      ],
      benefits: [
        'Streamline business processes',
        'Improve data accuracy',
        'Reduce manual work',
        'Enable real-time operations'
      ],
      marketPrice: '$7,000-20,000/month',
      category: 'System Integration',
      technologies: ['REST APIs', 'GraphQL', 'SOAP', 'Message Queues', 'ETL Tools', 'Microservices'],
      link: '/contact?service=system-integration'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting for business growth.',
      icon: '💡',
      price: 'Starting at $2,000/month',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'Cost optimization',
        'Risk assessment',
        'Implementation planning',
        'Change management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce IT costs',
        'Improve operational efficiency'
      ],
      marketPrice: '$4,000-12,000/month',
      category: 'IT Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Risk Management'],
      link: '/contact?service=it-consulting'
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Specialized cloud security services ensuring compliance with industry standards and regulations.',
      icon: '🔒',
      price: 'Starting at $3,200/month',
      features: [
        'Cloud security assessment',
        'Compliance auditing',
        'Identity & access management',
        'Data encryption',
        'Security monitoring',
        'Compliance reporting',
        'Risk management',
        'Security training'
      ],
      benefits: [
        'Ensure compliance',
        'Protect sensitive data',
        'Reduce security risks',
        'Meet regulatory requirements'
      ],
      marketPrice: '$6,500-18,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'SIEM', 'IAM', 'Encryption'],
      link: '/contact?service=cloud-security'
    },
    {
      title: 'Performance Monitoring & Optimization',
      description: 'Comprehensive system performance monitoring with proactive optimization and capacity planning.',
      icon: '📊',
      price: 'Starting at $2,200/month',
      features: [
        'Real-time monitoring',
        'Performance analysis',
        'Capacity planning',
        'Optimization recommendations',
        'Alert management',
        'Trend analysis',
        'Root cause analysis',
        'Performance reporting'
      ],
      benefits: [
        'Prevent performance issues',
        'Optimize resource usage',
        'Improve user experience',
        'Reduce operational costs'
      ],
      marketPrice: '$4,500-13,000/month',
      category: 'Performance Monitoring',
      technologies: ['APM Tools', 'Monitoring Platforms', 'Log Analysis', 'Metrics Collection'],
      link: '/contact?service=performance-monitoring'
    },
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device management with security, compliance, and application management.',
      icon: '📱',
      price: 'Starting at $1,200/month',
      features: [
        'Device enrollment & management',
        'Security policy enforcement',
        'Application management',
        'Remote device control',
        'Compliance monitoring',
        'Data protection',
        'User training',
        'Support & troubleshooting'
      ],
      benefits: [
        'Secure mobile devices',
        'Ensure compliance',
        'Simplify device management',
        'Protect corporate data'
      ],
      marketPrice: '$2,500-7,000/month',
      category: 'Mobile Management',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf'],
      link: '/contact?service=mobile-management'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control.',
      icon: '📋',
      price: 'Starting at $1,000/month',
      features: [
        'Asset inventory & tracking',
        'Lifecycle management',
        'Cost optimization',
        'License management',
        'Depreciation tracking',
        'Procurement support',
        'Disposal management',
        'Reporting & analytics'
      ],
      benefits: [
        'Optimize IT investments',
        'Reduce costs',
        'Ensure compliance',
        'Improve asset utilization'
      ],
      marketPrice: '$2,000-6,000/month',
      category: 'Asset Management',
      technologies: ['Asset Management Tools', 'CMDB', 'License Management', 'Procurement Systems'],
      link: '/contact?service=asset-management'
    },
    {
      title: 'Virtualization & Containerization',
      description: 'Server virtualization and containerization services for improved efficiency and resource utilization.',
      icon: '📦',
      price: 'Starting at $2,500/month',
      features: [
        'VMware/Hyper-V setup',
        'Docker containerization',
        'Kubernetes orchestration',
        'Resource optimization',
        'High availability setup',
        'Migration services',
        'Performance tuning',
        'Monitoring & management'
      ],
      benefits: [
        'Improve resource utilization',
        'Reduce hardware costs',
        'Enhance scalability',
        'Simplify management'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Virtualization',
      technologies: ['VMware', 'Hyper-V', 'Docker', 'Kubernetes', 'OpenShift', 'Rancher'],
      link: '/contact?service=virtualization'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification support for your team\'s skill development.',
      icon: '🎓',
      price: 'Starting at $800/month',
      features: [
        'Custom training programs',
        'Certification preparation',
        'Hands-on workshops',
        'Online learning platforms',
        'Skill assessments',
        'Progress tracking',
        'Certification support',
        'Ongoing mentorship'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support needs',
        'Boost employee satisfaction'
      ],
      marketPrice: '$1,500-5,000/month',
      category: 'Training & Development',
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs', 'Skill Assessments'],
      link: '/contact?service=it-training'
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management services ensuring successful delivery of complex technology projects.',
      icon: '📈',
      price: 'Starting at $3,000/month',
      features: [
        'Project planning & execution',
        'Resource management',
        'Risk assessment',
        'Quality assurance',
        'Stakeholder communication',
        'Timeline management',
        'Budget control',
        'Post-implementation support'
      ],
      benefits: [
        'Ensure project success',
        'Meet deadlines & budgets',
        'Minimize risks',
        'Improve communication'
      ],
      marketPrice: '$6,000-18,000/month',
      category: 'Project Management',
      technologies: ['Project Management Tools', 'Agile Methodologies', 'Risk Management', 'Quality Assurance'],
      link: '/contact?service=it-project-management'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and system integration. Expert solutions for enterprise technology needs." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, system integration, IT consulting, managed services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Comprehensive IT solutions including cloud infrastructure, cybersecurity, DevOps, and system integration for enterprise technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Explore Services
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  📞 Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert IT solutions delivered by certified professionals with proven industry experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with 10+ years experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock monitoring and support</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Average 99.9% uptime and 40% cost reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive IT solutions designed to optimize your technology infrastructure
              </p>
            </div>
            
            {categories.map(category => (
              <div key={category} className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category} Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {itServices
                    .filter(service => service.category === category)
                    .map((service, index) => (
                      <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                        {service.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              Most Popular
                            </span>
                          </div>
                        )}
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                            <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                          </div>
                          <div className="text-sm text-green-600 font-semibold">
                            Save up to 50% vs market rates
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                          <ul className="space-y-1">
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

                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Business Benefits:</h5>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-900 mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.slice(0, 4).map((tech, techIndex) => (
                              <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
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

                        <a 
                          href={service.link}
                          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                        >
                          Get Consultation
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Comparison
              </h2>
              <p className="text-xl text-gray-600">
                See how our IT services compare to enterprise solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our IT Services</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-4">$1,000-4,000/month</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Certified experts</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ Proactive monitoring</li>
                  <li>✓ Custom solutions</li>
                  <li>✓ Regular updates</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-8 text-center border-2 border-indigo-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$5,000-25,000/month</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Same expertise</li>
                  <li>✓ Limited support</li>
                  <li>✓ Reactive approach</li>
                  <li>✓ Generic solutions</li>
                  <li>✓ Fewer updates</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Savings</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">50%+</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Lower costs</li>
                  <li>✓ Better support</li>
                  <li>✓ More features</li>
                  <li>✓ Faster implementation</li>
                  <li>✓ Custom solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our IT experts for a free consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;