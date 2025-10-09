'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ITService {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup: number;
    enterprise: string;
  };
  category: string;
  icon: string;
  sla: string;
  support: string[];
  technologies: string[];
  status: 'active' | 'beta' | 'coming-soon';
}

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const itServices: ITService[] = [
    // Cloud Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure setup, management, and optimization across AWS, Azure, and Google Cloud with 99.9% uptime guarantee.',
      features: [
        'Multi-cloud Architecture',
        'Auto-scaling Configuration',
        'Load Balancing',
        'Disaster Recovery',
        'Security Hardening',
        'Cost Optimization',
        '24/7 Monitoring',
        'Performance Tuning'
      ],
      benefits: [
        '99.9% Uptime Guarantee',
        '50% Cost Reduction',
        'Enhanced Security',
        'Scalable Architecture',
        'Reduced Downtime',
        'Improved Performance'
      ],
      pricing: { monthly: 999, yearly: 9990, setup: 2000, enterprise: 'Custom' },
      category: 'cloud',
      icon: '☁️',
      sla: '99.9%',
      support: ['24/7 Phone Support', 'Email Support', 'Live Chat', 'Dedicated Account Manager'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      status: 'active'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration of applications, data, and infrastructure to the cloud with zero downtime and comprehensive testing.',
      features: [
        'Zero-downtime Migration',
        'Application Assessment',
        'Data Migration',
        'Security Compliance',
        'Performance Testing',
        'Rollback Planning',
        'Training & Documentation',
        'Post-migration Support'
      ],
      benefits: [
        'Zero Business Disruption',
        'Improved Scalability',
        'Enhanced Security',
        'Cost Optimization',
        'Better Performance',
        'Future-proof Architecture'
      ],
      pricing: { monthly: 0, yearly: 0, setup: 5000, enterprise: 'Custom' },
      category: 'cloud',
      icon: '🚀',
      sla: '100%',
      support: ['Project Manager', 'Technical Lead', '24/7 Support', 'Dedicated Team'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Hyper-V', 'Docker'],
      status: 'active'
    },
    {
      id: 'cloud-security',
      name: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security implementation with compliance management for GDPR, HIPAA, SOX, and other regulatory frameworks.',
      features: [
        'Security Assessment',
        'Compliance Auditing',
        'Identity & Access Management',
        'Data Encryption',
        'Threat Detection',
        'Vulnerability Scanning',
        'Security Monitoring',
        'Incident Response'
      ],
      benefits: [
        'Enhanced Security Posture',
        'Regulatory Compliance',
        'Risk Mitigation',
        'Continuous Monitoring',
        'Automated Threat Response',
        'Audit Readiness'
      ],
      pricing: { monthly: 799, yearly: 7990, setup: 1500, enterprise: 'Custom' },
      category: 'cloud',
      icon: '🔒',
      sla: '99.5%',
      support: ['Security Expert', 'Compliance Officer', '24/7 SOC', 'Incident Response Team'],
      technologies: ['AWS Security', 'Azure Security', 'Google Cloud Security', 'SIEM', 'SOAR', 'WAF'],
      status: 'active'
    },

    // DevOps & Automation
    {
      id: 'devops-automation',
      name: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, and continuous monitoring.',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Alerting',
        'Version Control',
        'Container Orchestration',
        'Performance Optimization'
      ],
      benefits: [
        '10x Faster Deployments',
        'Reduced Manual Errors',
        'Improved Code Quality',
        'Faster Time to Market',
        'Better Collaboration',
        'Cost Efficiency'
      ],
      pricing: { monthly: 1299, yearly: 12990, setup: 3000, enterprise: 'Custom' },
      category: 'devops',
      icon: '⚙️',
      sla: '99.8%',
      support: ['DevOps Engineer', 'Platform Engineer', '24/7 Support', 'Training & Documentation'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      status: 'active'
    },
    {
      id: 'container-orchestration',
      name: 'Container Orchestration & Management',
      description: 'Advanced container orchestration with Kubernetes, Docker, and microservices architecture for scalable applications.',
      features: [
        'Kubernetes Setup',
        'Container Management',
        'Service Mesh',
        'Auto-scaling',
        'Load Balancing',
        'Health Monitoring',
        'Security Hardening',
        'Backup & Recovery'
      ],
      benefits: [
        'Improved Scalability',
        'Better Resource Utilization',
        'Faster Deployments',
        'Enhanced Security',
        'Reduced Costs',
        'High Availability'
      ],
      pricing: { monthly: 899, yearly: 8990, setup: 2000, enterprise: 'Custom' },
      category: 'devops',
      icon: '📦',
      sla: '99.7%',
      support: ['Kubernetes Expert', 'Platform Engineer', '24/7 Support', 'Training & Documentation'],
      technologies: ['Kubernetes', 'Docker', 'Istio', 'Helm', 'Prometheus', 'Grafana'],
      status: 'active'
    },

    // Database Services
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Comprehensive database administration, optimization, and management for SQL and NoSQL databases with 24/7 monitoring.',
      features: [
        'Database Administration',
        'Performance Optimization',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Alerting',
        'Capacity Planning',
        'Query Optimization',
        'Disaster Recovery'
      ],
      benefits: [
        'Improved Performance',
        'Enhanced Security',
        'Reduced Downtime',
        'Cost Optimization',
        'Better Scalability',
        'Data Protection'
      ],
      pricing: { monthly: 599, yearly: 5990, setup: 1000, enterprise: 'Custom' },
      category: 'database',
      icon: '🗄️',
      sla: '99.9%',
      support: ['DBA Expert', 'Performance Engineer', '24/7 Support', 'Emergency Response'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      status: 'active'
    },
    {
      id: 'data-warehousing',
      name: 'Data Warehousing & Analytics',
      description: 'Enterprise data warehousing solutions with ETL processes, data modeling, and business intelligence dashboards.',
      features: [
        'Data Warehouse Design',
        'ETL/ELT Processes',
        'Data Modeling',
        'Business Intelligence',
        'Data Quality Management',
        'Real-time Analytics',
        'Data Governance',
        'Performance Tuning'
      ],
      benefits: [
        'Centralized Data',
        'Better Decision Making',
        'Improved Data Quality',
        'Faster Analytics',
        'Cost Reduction',
        'Scalable Architecture'
      ],
      pricing: { monthly: 799, yearly: 7990, setup: 2500, enterprise: 'Custom' },
      category: 'database',
      icon: '📊',
      sla: '99.5%',
      support: ['Data Architect', 'BI Developer', '24/7 Support', 'Training & Documentation'],
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Tableau', 'Power BI', 'Apache Spark'],
      status: 'active'
    },

    // Network & Security
    {
      id: 'network-management',
      name: 'Network Infrastructure Management',
      description: 'Complete network design, implementation, and management with security, monitoring, and optimization services.',
      features: [
        'Network Design',
        'Security Implementation',
        'Performance Monitoring',
        'Vulnerability Assessment',
        'Firewall Management',
        'VPN Setup',
        'Load Balancing',
        'Disaster Recovery'
      ],
      benefits: [
        'Enhanced Security',
        'Improved Performance',
        'Reduced Downtime',
        'Better Scalability',
        'Cost Optimization',
        'Compliance Ready'
      ],
      pricing: { monthly: 699, yearly: 6990, setup: 1500, enterprise: 'Custom' },
      category: 'network',
      icon: '🌐',
      sla: '99.8%',
      support: ['Network Engineer', 'Security Expert', '24/7 NOC', 'Emergency Response'],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'F5', 'Aruba'],
      status: 'active'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      description: 'Comprehensive cybersecurity solutions including threat detection, incident response, and security compliance management.',
      features: [
        'Threat Detection',
        'Incident Response',
        'Security Assessment',
        'Penetration Testing',
        'Vulnerability Management',
        'Security Training',
        'Compliance Auditing',
        'Risk Assessment'
      ],
      benefits: [
        'Enhanced Security',
        'Risk Mitigation',
        'Compliance Ready',
        'Faster Incident Response',
        'Reduced Security Breaches',
        'Better Security Awareness'
      ],
      pricing: { monthly: 999, yearly: 9990, setup: 2000, enterprise: 'Custom' },
      category: 'network',
      icon: '🛡️',
      sla: '99.9%',
      support: ['Security Analyst', 'Incident Response Team', '24/7 SOC', 'CISO Advisory'],
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'WAF', 'DLP'],
      status: 'active'
    },

    // Application Development
    {
      id: 'custom-development',
      name: 'Custom Application Development',
      description: 'Full-stack application development with modern technologies, microservices architecture, and cloud-native solutions.',
      features: [
        'Full-stack Development',
        'Microservices Architecture',
        'API Development',
        'Mobile Applications',
        'Web Applications',
        'Cloud Integration',
        'Testing & QA',
        'Deployment & Support'
      ],
      benefits: [
        'Custom Solutions',
        'Modern Architecture',
        'Scalable Applications',
        'Faster Time to Market',
        'Cost Effective',
        'Future Proof'
      ],
      pricing: { monthly: 0, yearly: 0, setup: 10000, enterprise: 'Custom' },
      category: 'development',
      icon: '💻',
      sla: '100%',
      support: ['Project Manager', 'Full-stack Developer', 'UI/UX Designer', 'QA Engineer'],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Docker'],
      status: 'active'
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'RESTful and GraphQL API development with comprehensive documentation, testing, and integration services.',
      features: [
        'RESTful API Development',
        'GraphQL Implementation',
        'API Documentation',
        'API Testing',
        'Rate Limiting',
        'Authentication',
        'Monitoring & Analytics',
        'Third-party Integration'
      ],
      benefits: [
        'Better Integration',
        'Improved Performance',
        'Enhanced Security',
        'Developer Friendly',
        'Scalable Architecture',
        'Cost Reduction'
      ],
      pricing: { monthly: 499, yearly: 4990, setup: 1500, enterprise: 'Custom' },
      category: 'development',
      icon: '🔌',
      sla: '99.9%',
      support: ['API Developer', 'Integration Specialist', '24/7 Support', 'Documentation'],
      technologies: ['Node.js', 'Python', 'Java', 'GraphQL', 'Swagger', 'Postman'],
      status: 'active'
    },

    // IT Support & Maintenance
    {
      id: 'it-support',
      name: '24/7 IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk, remote assistance, and proactive monitoring.',
      features: [
        '24/7 Helpdesk',
        'Remote Support',
        'Proactive Monitoring',
        'Incident Management',
        'Change Management',
        'Asset Management',
        'User Training',
        'Knowledge Base'
      ],
      benefits: [
        'Reduced Downtime',
        'Faster Resolution',
        'Proactive Maintenance',
        'Better User Experience',
        'Cost Efficiency',
        'Improved Productivity'
      ],
      pricing: { monthly: 299, yearly: 2990, setup: 500, enterprise: 'Custom' },
      category: 'support',
      icon: '🎧',
      sla: '99.5%',
      support: ['Level 1 Support', 'Level 2 Support', 'Level 3 Support', 'Escalation Management'],
      technologies: ['ServiceNow', 'Jira', 'Confluence', 'Slack', 'Microsoft Teams', 'Zoom'],
      status: 'active'
    },
    {
      id: 'infrastructure-monitoring',
      name: 'Infrastructure Monitoring & Management',
      description: 'Comprehensive infrastructure monitoring with real-time alerts, performance optimization, and capacity planning.',
      features: [
        'Real-time Monitoring',
        'Performance Analytics',
        'Capacity Planning',
        'Alert Management',
        'Trend Analysis',
        'Custom Dashboards',
        'Automated Remediation',
        'Reporting & Insights'
      ],
      benefits: [
        'Proactive Monitoring',
        'Reduced Downtime',
        'Better Performance',
        'Cost Optimization',
        'Improved Reliability',
        'Data-driven Decisions'
      ],
      pricing: { monthly: 399, yearly: 3990, setup: 800, enterprise: 'Custom' },
      category: 'support',
      icon: '📈',
      sla: '99.8%',
      support: ['Monitoring Engineer', 'Performance Analyst', '24/7 NOC', 'Escalation Management'],
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'DataDog', 'Zabbix'],
      status: 'active'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', icon: '💻' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️' },
    { id: 'devops', name: 'DevOps & Automation', icon: '⚙️' },
    { id: 'database', name: 'Database Services', icon: '🗄️' },
    { id: 'network', name: 'Network & Security', icon: '🌐' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'support', name: 'Support & Maintenance', icon: '🎧' }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactClick = (service: ITService) => {
    const message = `Hi! I'm interested in the ${service.name} IT service. Can you provide more information about implementation and pricing?`;
    const whatsappUrl = `https://wa.me/13024640950?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Enterprise-Grade IT Infrastructure & Support
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive IT services designed to optimize your infrastructure, enhance security, and drive business growth. 
            From cloud migration to cybersecurity, we provide end-to-end IT solutions.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
                🔍
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900 cyber-glow'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-cyan-400/30'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div key={service.id} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-4xl mr-4 cyber-scan-line">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      service.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {service.status === 'active' ? '✅ Available' : service.status === 'beta' ? '🧪 Beta' : '🚀 Coming Soon'}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              {/* SLA and Support */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-cyan-400">SLA:</span>
                    <span className="text-white ml-2">{service.sla}</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">Support:</span>
                    <span className="text-white ml-2">{service.support.length} levels</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <span key={index} className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                      {benefit}
                    </span>
                  ))}
                  {service.benefits.length > 3 && (
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                      +{service.benefits.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                      +{service.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="text-center">
                  {service.pricing.monthly > 0 ? (
                    <>
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        ${service.pricing.monthly}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        or ${service.pricing.yearly}/year (save ${(service.pricing.monthly * 12) - service.pricing.yearly})
                      </div>
                      {service.pricing.setup > 0 && (
                        <div className="text-sm text-yellow-400 mt-1">
                          +${service.pricing.setup} setup fee
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      ${service.pricing.setup}
                      <span className="text-lg text-gray-400"> one-time</span>
                    </div>
                  )}
                  <div className="text-sm text-purple-400 mt-1">
                    Enterprise: {service.pricing.enterprise}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick(service)}
                  className="w-full cyber-button text-center py-3"
                >
                  Get Started
                </button>
                
                <div className="flex gap-2">
                  <a
                    href="/contact"
                    className="flex-1 text-center py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex-1 text-center py-2 px-4 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="text-center bg-white/5 rounded-2xl p-12 cyber-glow">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Our IT experts are ready to help you modernize your infrastructure, enhance security, and optimize performance. 
            From cloud migration to cybersecurity, we provide comprehensive IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center py-3 px-8"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center py-3 px-8"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 https://ziontechgroup.com</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;