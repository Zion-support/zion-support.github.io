import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Network, Code, Monitor, Settings, ArrowRight, Phone, Mail, Clock, Users, Zap } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: ['Cloud migration strategy', 'Cost optimization', 'Security hardening', '24/7 monitoring', 'Disaster recovery'],
      benefits: ['Reduce cloud costs by 30%', 'Improve performance by 40%', 'Ensure 99.9% uptime'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: '🔒',
      price: 'Starting at $3,000/month',
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance management'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security costs by 50%', 'Ensure compliance'],
      marketPrice: '$5,000-12,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust'],
      link: 'https://ziontechgroup.com/cybersecurity',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration services.',
      icon: '🔄',
      price: 'Starting at $2,000/month',
      features: ['CI/CD pipeline setup', 'Infrastructure automation', 'Monitoring & alerting', 'Version control', 'Testing automation'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity'],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus'],
      link: 'https://ziontechgroup.com/devops-cicd',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Database Administration',
      description: 'Database design, optimization, backup, and maintenance for SQL and NoSQL databases.',
      icon: '🗄️',
      price: 'Starting at $1,500/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services'],
      benefits: ['Improve query performance by 60%', 'Ensure data integrity', 'Reduce downtime'],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      link: 'https://ziontechgroup.com/database-administration',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Network Infrastructure Setup',
      description: 'Complete network design, implementation, and management for enterprise environments.',
      icon: '🌐',
      price: 'Starting at $2,000/month',
      features: ['Network design', 'Router & switch configuration', 'VPN setup', 'Wireless networks', 'Network monitoring'],
      benefits: ['Improve network performance by 50%', 'Enhance security', 'Reduce downtime'],
      marketPrice: '$3,500-8,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Ubiquiti', 'Palo Alto'],
      link: 'https://ziontechgroup.com/network-infrastructure',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support, helpdesk services, and IT troubleshooting for your organization.',
      icon: '🛠️',
      price: 'Starting at $1,200/month',
      features: ['24/7 support', 'Remote assistance', 'Hardware support', 'Software installation', 'User training'],
      benefits: ['Reduce IT downtime by 70%', 'Improve user satisfaction', 'Lower support costs'],
      marketPrice: '$2,000-4,000/month',
      category: 'Support',
      technologies: ['Remote Desktop', 'Ticketing Systems', 'Monitoring Tools', 'Asset Management', 'Knowledge Base'],
      link: 'https://ziontechgroup.com/it-support',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Software Development',
      description: 'Custom software development, web applications, and mobile app development services.',
      icon: '💻',
      price: 'Starting at $3,500/project',
      features: ['Custom development', 'Web applications', 'Mobile apps', 'API development', 'Legacy modernization'],
      benefits: ['Accelerate digital transformation', 'Improve business processes', 'Enhance user experience'],
      marketPrice: '$6,000-20,000/project',
      category: 'Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'React Native'],
      link: 'https://ziontechgroup.com/software-development',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning for business continuity.',
      icon: '💾',
      price: 'Starting at $800/month',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Offsite storage', 'Recovery testing'],
      benefits: ['Protect against data loss', 'Ensure business continuity', 'Meet compliance requirements'],
      marketPrice: '$1,500-3,500/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      link: 'https://ziontechgroup.com/data-backup-recovery',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['IT strategy planning', 'Technology assessment', 'Digital transformation', 'Vendor management', 'ROI analysis'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve efficiency'],
      marketPrice: '$4,000-10,000/month',
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Lean', 'Six Sigma'],
      link: 'https://ziontechgroup.com/it-consulting',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'System Integration',
      description: 'Integration of disparate systems, APIs, and third-party applications for seamless operations.',
      icon: '🔗',
      price: 'Starting at $2,000/project',
      features: ['System integration', 'API development', 'Data synchronization', 'Workflow automation', 'Legacy integration'],
      benefits: ['Improve data flow', 'Reduce manual processes', 'Enhance productivity'],
      marketPrice: '$3,500-12,000/project',
      category: 'Integration',
      technologies: ['REST APIs', 'GraphQL', 'Message Queues', 'ETL Tools', 'Middleware'],
      link: 'https://ziontechgroup.com/system-integration',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Security Auditing',
      description: 'Comprehensive security assessments, compliance audits, and vulnerability management.',
      icon: '🔍',
      price: 'Starting at $1,800/month',
      features: ['Security assessments', 'Compliance audits', 'Vulnerability scanning', 'Penetration testing', 'Risk analysis'],
      benefits: ['Identify security gaps', 'Ensure compliance', 'Reduce security risks'],
      marketPrice: '$3,000-8,000/month',
      category: 'Security Auditing',
      technologies: ['Nessus', 'OpenVAS', 'Burp Suite', 'OWASP', 'NIST Framework'],
      link: 'https://ziontechgroup.com/security-auditing',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration of applications and data to cloud platforms with minimal downtime.',
      icon: '🚀',
      price: 'Starting at $5,000/project',
      features: ['Migration planning', 'Data migration', 'Application migration', 'Testing & validation', 'Go-live support'],
      benefits: ['Reduce migration risks', 'Minimize downtime', 'Optimize cloud costs'],
      marketPrice: '$8,000-25,000/project',
      category: 'Cloud Migration',
      technologies: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Docker', 'Kubernetes'],
      link: 'https://ziontechgroup.com/cloud-migration',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management, inventory tracking, and optimization services.',
      icon: '📋',
      price: 'Starting at $1,000/month',
      features: ['Asset inventory', 'Lifecycle management', 'License management', 'Cost optimization', 'Compliance tracking'],
      benefits: ['Reduce IT costs by 25%', 'Improve asset utilization', 'Ensure compliance'],
      marketPrice: '$1,800-4,000/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'ManageEngine', 'SCCM', 'JAMF'],
      link: 'https://ziontechgroup.com/it-asset-management',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Performance Monitoring',
      description: '24/7 monitoring of IT infrastructure, applications, and network performance with proactive alerts.',
      icon: '📈',
      price: 'Starting at $1,500/month',
      features: ['Infrastructure monitoring', 'Application monitoring', 'Network monitoring', 'Alert management', 'Performance reports'],
      benefits: ['Prevent downtime', 'Improve performance', 'Reduce support tickets'],
      marketPrice: '$2,500-6,000/month',
      category: 'Monitoring',
      technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'New Relic'],
      link: 'https://ziontechgroup.com/performance-monitoring',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Training & Education',
      description: 'Comprehensive IT training programs for your team on new technologies and best practices.',
      icon: '🎓',
      price: 'Starting at $2,000/month',
      features: ['Technology training', 'Certification programs', 'Best practices', 'Hands-on workshops', 'Online learning'],
      benefits: ['Improve team skills', 'Increase productivity', 'Reduce support needs'],
      marketPrice: '$3,500-8,000/month',
      category: 'Training',
      technologies: ['Virtual Labs', 'Learning Management', 'Video Training', 'Interactive Sessions', 'Certification Prep'],
      link: 'https://ziontechgroup.com/it-training',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Disaster Recovery Planning',
      description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
      icon: '🛡️',
      price: 'Starting at $3,500/project',
      features: ['DR planning', 'Backup strategies', 'Recovery procedures', 'Testing & validation', 'Documentation'],
      benefits: ['Minimize downtime', 'Protect business data', 'Ensure compliance'],
      marketPrice: '$6,000-20,000/project',
      category: 'Disaster Recovery',
      technologies: ['Veeam', 'Zerto', 'AWS DR', 'Azure Site Recovery', 'Google Cloud DR'],
      link: 'https://ziontechgroup.com/disaster-recovery',
      contact: 'kleber@ziontechgroup.com'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud management, cybersecurity, DevOps, and infrastructure solutions for enterprise organizations." />
        <meta name="keywords" content="IT services, cloud management, cybersecurity, DevOps, infrastructure, IT consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
          IT Services & Solutions
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
          Comprehensive IT services to power your digital transformation
        </p>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Our full-spectrum IT services cover everything from cloud infrastructure management to cybersecurity solutions. 
          We help organizations optimize their technology stack, improve security posture, and drive digital innovation.
        </p>
        
        {/* Contact CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="tel:+13024640950"
            className="cyber-button flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: (302) 464-0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="cyber-button flex items-center"
            style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
          >
            <Mail className="w-5 h-5 mr-2" />
            Email: kleber@ziontechgroup.com
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="cyber-card">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">IT Projects Completed</div>
            </div>
            <div className="cyber-card">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="cyber-card">
              <div className="text-4xl font-bold text-purple-400 mb-2">$2.5M+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div className="cyber-card">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="cyber-button">All Categories</button>
          {categories.map((category, index) => (
            <button key={index} className="cyber-button">
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                <div className="text-sm text-gray-400">
                  Market Price: <span className="line-through">{service.marketPrice}</span>
                </div>
                <div className="text-green-400 text-sm font-medium">
                  Save up to 50% with Zion Tech Group
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={service.link}
                  className="w-full cyber-button text-center block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </a>
                <a
                  href={`mailto:${service.contact}?subject=Interest in ${service.title}`}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center block transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Why Choose Zion Tech Group for IT Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Rapid Response</h3>
              <p className="text-gray-300">
                Average response time of 15 minutes for critical issues with 24/7 support coverage.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with SOC 2 compliance and advanced threat protection.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Delivered $2.5M+ in cost savings and 99.9% uptime for enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card hologram-card text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your IT needs and get a custom solution designed for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free IT assessment and consultation</p>
            <p>✓ Custom IT solution development</p>
            <p>✓ 24/7 support and maintenance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;