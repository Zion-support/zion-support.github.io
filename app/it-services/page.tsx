import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink, Server, Cloud, Database, Lock } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform solutions.',
      icon: '☁️',
      price: '$3,500/month',
      features: [
        'Multi-cloud architecture design',
        'Legacy system migration',
        'Container orchestration with Kubernetes',
        'Serverless computing implementation',
        'Cloud security and compliance',
        'Cost optimization and monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      marketPrice: '$8,000-25,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      popular: true
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance.',
      icon: '🛡️',
      price: '$4,000/month',
      features: [
        'Security assessment and penetration testing',
        'Threat detection and monitoring',
        'Incident response and forensics',
        'Compliance management (SOC2, ISO27001)',
        'Security awareness training',
        'Vulnerability management'
      ],
      benefits: [
        'Reduce security incidents by 90%',
        'Ensure regulatory compliance',
        'Protect sensitive data and assets',
        'Minimize business disruption'
      ],
      marketPrice: '$10,000-30,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'XDR', 'Firewalls', 'IDS/IPS', 'VPN'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration.',
      icon: '🔄',
      price: '$2,800/month',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC)',
        'Automated testing and deployment',
        'Monitoring and alerting systems',
        'Version control and branching strategies',
        'Performance optimization'
      ],
      benefits: [
        'Deploy 10x faster with fewer errors',
        'Improve code quality and reliability',
        'Reduce manual deployment tasks',
        'Enable rapid feature delivery'
      ],
      marketPrice: '$6,000-18,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible', 'Chef', 'Puppet'],
      link: 'https://ziontechgroup.com/devops-cicd',
      popular: true
    },
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management, optimization, and migration services.',
      icon: '🗄️',
      price: '$2,200/month',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and disaster recovery',
        'Database migration and upgrades',
        'Security hardening and compliance',
        '24/7 monitoring and support'
      ],
      benefits: [
        'Improve database performance by 60%',
        'Ensure data integrity and availability',
        'Reduce downtime and data loss',
        'Optimize storage and costs'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Database Services',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server'],
      link: 'https://ziontechgroup.com/database-administration'
    },
    {
      title: 'Network Infrastructure & Management',
      description: 'Complete network design, implementation, and ongoing management services.',
      icon: '🌐',
      price: '$2,500/month',
      features: [
        'Network design and architecture',
        'Router and switch configuration',
        'Wireless network setup and optimization',
        'Network security implementation',
        'Performance monitoring and optimization',
        'Disaster recovery planning'
      ],
      benefits: [
        'Improve network performance by 50%',
        'Enhance security and reliability',
        'Reduce network downtime',
        'Support remote work requirements'
      ],
      marketPrice: '$6,000-20,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Meraki', 'SD-WAN'],
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      title: 'IT Support & Help Desk',
      description: 'Comprehensive IT support services with 24/7 monitoring and rapid response.',
      icon: '🆘',
      price: '$1,800/month',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Hardware and software troubleshooting',
        'User account management',
        'Software installation and updates',
        'IT asset management'
      ],
      benefits: [
        'Reduce IT downtime by 70%',
        'Improve user productivity',
        'Centralize IT support processes',
        'Ensure rapid issue resolution'
      ],
      marketPrice: '$3,000-12,000/month',
      category: 'Support Services',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Active Directory', 'Office 365', 'G Suite'],
      link: 'https://ziontechgroup.com/it-support-helpdesk'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive data protection with automated backups and disaster recovery solutions.',
      icon: '💾',
      price: '$1,500/month',
      features: [
        'Automated backup solutions',
        'Disaster recovery planning',
        'Data replication and synchronization',
        'Recovery time optimization',
        'Compliance and audit support',
        'Testing and validation services'
      ],
      benefits: [
        'Minimize data loss and downtime',
        'Ensure business continuity',
        'Meet compliance requirements',
        'Reduce recovery costs'
      ],
      marketPrice: '$3,000-10,000/month',
      category: 'Data Protection',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Veeam', 'Zerto'],
      link: 'https://ziontechgroup.com/data-backup-disaster-recovery'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting.',
      icon: '💡',
      price: '$2,000/month',
      features: [
        'IT strategy and roadmap development',
        'Technology assessment and recommendations',
        'Digital transformation planning',
        'Vendor evaluation and selection',
        'IT governance and compliance',
        'Change management support'
      ],
      benefits: [
        'Align IT with business objectives',
        'Optimize technology investments',
        'Reduce IT complexity and costs',
        'Enable digital transformation'
      ],
      marketPrice: '$4,000-15,000/month',
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Scrum', 'TOGAF', 'PMI'],
      link: 'https://ziontechgroup.com/it-consulting-strategy'
    },
    {
      title: 'Software Development & Custom Solutions',
      description: 'Custom software development, API integration, and legacy system modernization.',
      icon: '💻',
      price: '$4,500/month',
      features: [
        'Custom application development',
        'API development and integration',
        'Legacy system modernization',
        'Mobile app development',
        'Web application development',
        'Quality assurance and testing'
      ],
      benefits: [
        'Develop tailored solutions for your needs',
        'Integrate disparate systems',
        'Modernize legacy applications',
        'Improve operational efficiency'
      ],
      marketPrice: '$10,000-35,000/month',
      category: 'Software Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP'],
      link: 'https://ziontechgroup.com/software-development'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management including procurement, deployment, and disposal.',
      icon: '📋',
      price: '$1,200/month',
      features: [
        'Asset inventory and tracking',
        'Procurement and vendor management',
        'License compliance monitoring',
        'Asset lifecycle management',
        'Cost optimization and reporting',
        'Disposal and recycling services'
      ],
      benefits: [
        'Optimize IT asset utilization',
        'Ensure license compliance',
        'Reduce procurement costs',
        'Improve asset visibility'
      ],
      marketPrice: '$2,500-8,000/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'ManageEngine', 'SCCM', 'JAMF', 'Intune'],
      link: 'https://ziontechgroup.com/it-asset-management'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Compliance management, audit support, and IT governance framework implementation.',
      icon: '📊',
      price: '$2,800/month',
      features: [
        'Compliance framework implementation',
        'Audit preparation and support',
        'Policy development and management',
        'Risk assessment and mitigation',
        'Training and awareness programs',
        'Continuous monitoring and reporting'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit findings',
        'Improve risk management',
        'Streamline governance processes'
      ],
      marketPrice: '$6,000-20,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Risk Management', 'Compliance Software', 'Audit Tools', 'Policy Management', 'Training Platforms'],
      link: 'https://ziontechgroup.com/it-compliance-governance'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification support for your team.',
      icon: '🎓',
      price: '$1,500/month',
      features: [
        'Technical skills training',
        'Certification preparation',
        'Security awareness training',
        'New technology adoption',
        'Custom training programs',
        'Ongoing skill development'
      ],
      benefits: [
        'Improve team technical skills',
        'Increase certification success rates',
        'Reduce security risks',
        'Enable technology adoption'
      ],
      marketPrice: '$3,000-10,000/month',
      category: 'Training',
      technologies: ['Cisco', 'Microsoft', 'AWS', 'CompTIA', 'ISACA', 'PMI'],
      link: 'https://ziontechgroup.com/it-training-certification'
    }
  ];

  const categories = [
    'All Services',
    'Cloud Services',
    'Security',
    'DevOps',
    'Database Services',
    'Networking',
    'Support Services',
    'Data Protection',
    'Consulting',
    'Software Development',
    'Asset Management',
    'Compliance',
    'Training'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Services');

  const filteredServices = selectedCategory === 'All Services' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Transform your technology infrastructure." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, devops, infrastructure, database administration, network management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, and infrastructure management. Transform your technology infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory} Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our comprehensive range of IT services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20 relative ${
                  service.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  <span className="text-sm text-gray-400 ml-2 line-through">{service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-green-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-2">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive technology expertise across all IT domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Services</h3>
              <p className="text-gray-300">AWS, Azure, GCP migration and management</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-300">Comprehensive security solutions and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Infrastructure</h3>
              <p className="text-gray-300">Network, server, and database management</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Management</h3>
              <p className="text-gray-300">Database administration and data protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Our IT services deliver measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Average Cost Reduction</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free IT consultation and custom solution recommendations
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
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 24/7 Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;