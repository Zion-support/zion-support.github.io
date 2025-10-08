import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Play, Download, ExternalLink, Server, Cloud, Database, Code, Lock, Settings, Monitor, Wifi, HardDrive, Cpu, Network, Smartphone, Laptop, Headphones } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All IT Services', count: 30 },
    { id: 'cloud', name: 'Cloud Services', count: 8 },
    { id: 'security', name: 'Cybersecurity', count: 6 },
    { id: 'infrastructure', name: 'Infrastructure', count: 8 },
    { id: 'support', name: 'Support & Maintenance', count: 8 }
  ];

  const itServices = [
    // Cloud Services
    {
      id: 1,
      title: 'Cloud Migration & Strategy',
      description: 'Complete cloud transformation services including assessment, planning, migration, and optimization.',
      icon: Cloud,
      price: '$2,999/month',
      originalPrice: '$5,000/month',
      features: ['Cloud assessment', 'Migration planning', 'Data migration', 'Application modernization', 'Cost optimization'],
      benefits: ['Reduce IT costs by 40%', 'Improve scalability', 'Enhance security'],
      marketPrice: '$5,000-12,000/month',
      category: 'cloud',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker'],
      demoUrl: 'https://demo.ziontechgroup.com/cloud-migration',
      documentation: 'https://docs.ziontechgroup.com/cloud-migration',
      rating: 4.9,
      reviews: 145,
      popular: true,
      useCases: ['Legacy system migration', 'Multi-cloud strategy', 'Cost optimization']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: '24/7 management and optimization of your cloud infrastructure with automated scaling and monitoring.',
      icon: Server,
      price: '$1,799/month',
      originalPrice: '$3,200/month',
      features: ['Infrastructure monitoring', 'Auto-scaling', 'Cost optimization', 'Security management', 'Performance tuning'],
      benefits: ['99.9% uptime guarantee', 'Reduce costs by 30%', 'Improve performance'],
      marketPrice: '$3,200-8,000/month',
      category: 'cloud',
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana'],
      demoUrl: 'https://demo.ziontechgroup.com/cloud-infrastructure',
      documentation: 'https://docs.ziontechgroup.com/cloud-infrastructure',
      rating: 4.8,
      reviews: 178,
      popular: true,
      useCases: ['Production workloads', 'DevOps automation', 'Cost management']
    },
    {
      id: 3,
      title: 'Multi-Cloud Solutions',
      description: 'Comprehensive multi-cloud strategy and management across AWS, Azure, and Google Cloud platforms.',
      icon: Globe,
      price: '$3,499/month',
      originalPrice: '$6,000/month',
      features: ['Multi-cloud architecture', 'Cross-platform management', 'Disaster recovery', 'Compliance management', 'Cost optimization'],
      benefits: ['Avoid vendor lock-in', 'Improve resilience', 'Optimize costs'],
      marketPrice: '$6,000-15,000/month',
      category: 'cloud',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible'],
      demoUrl: 'https://demo.ziontechgroup.com/multi-cloud',
      documentation: 'https://docs.ziontechgroup.com/multi-cloud',
      rating: 4.7,
      reviews: 98,
      popular: false,
      useCases: ['Enterprise cloud strategy', 'Disaster recovery', 'Compliance requirements']
    },
    {
      id: 4,
      title: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security services including threat detection, compliance management, and incident response.',
      icon: Lock,
      price: '$2,199/month',
      originalPrice: '$4,000/month',
      features: ['Security assessment', 'Threat detection', 'Compliance monitoring', 'Incident response', 'Security training'],
      benefits: ['Meet compliance requirements', 'Prevent security breaches', 'Reduce risk'],
      marketPrice: '$4,000-10,000/month',
      category: 'security',
      technologies: ['AWS Security', 'Azure Security', 'SIEM', 'WAF', 'DDoS Protection'],
      demoUrl: 'https://demo.ziontechgroup.com/cloud-security',
      documentation: 'https://docs.ziontechgroup.com/cloud-security',
      rating: 4.9,
      reviews: 156,
      popular: true,
      useCases: ['SOC 2 compliance', 'GDPR compliance', 'Security monitoring']
    },
    {
      id: 5,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, and monitoring.',
      icon: Code,
      price: '$2,499/month',
      originalPrice: '$4,500/month',
      features: ['CI/CD pipeline setup', 'Infrastructure as code', 'Automated testing', 'Deployment automation', 'Monitoring & alerting'],
      benefits: ['Deploy 10x faster', 'Reduce errors by 80%', 'Improve team productivity'],
      marketPrice: '$4,500-12,000/month',
      category: 'infrastructure',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform'],
      demoUrl: 'https://demo.ziontechgroup.com/devops',
      documentation: 'https://docs.ziontechgroup.com/devops',
      rating: 4.8,
      reviews: 203,
      popular: true,
      useCases: ['Software development', 'Infrastructure automation', 'Deployment optimization']
    },
    {
      id: 6,
      title: 'Network Infrastructure Design',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity and security.',
      icon: Network,
      price: '$1,999/month',
      originalPrice: '$3,500/month',
      features: ['Network design', 'Implementation', 'Security configuration', 'Performance monitoring', 'Troubleshooting'],
      benefits: ['Improve network performance', 'Enhance security', 'Reduce downtime'],
      marketPrice: '$3,500-8,000/month',
      category: 'infrastructure',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'VPN'],
      demoUrl: 'https://demo.ziontechgroup.com/network-design',
      documentation: 'https://docs.ziontechgroup.com/network-design',
      rating: 4.7,
      reviews: 134,
      popular: false,
      useCases: ['Office network setup', 'Remote work infrastructure', 'Network security']
    },
    {
      id: 7,
      title: 'Database Administration & Optimization',
      description: 'Comprehensive database management including setup, optimization, backup, and disaster recovery.',
      icon: Database,
      price: '$1,599/month',
      originalPrice: '$2,800/month',
      features: ['Database setup', 'Performance tuning', 'Backup & recovery', 'Security management', 'Monitoring'],
      benefits: ['Improve performance by 50%', 'Ensure data security', 'Reduce downtime'],
      marketPrice: '$2,800-6,500/month',
      category: 'infrastructure',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      demoUrl: 'https://demo.ziontechgroup.com/database-admin',
      documentation: 'https://docs.ziontechgroup.com/database-admin',
      rating: 4.8,
      reviews: 167,
      popular: true,
      useCases: ['Database migration', 'Performance optimization', 'Data backup']
    },
    {
      id: 8,
      title: 'Cybersecurity Assessment & Implementation',
      description: 'Comprehensive security assessment, vulnerability testing, and implementation of security measures.',
      icon: Shield,
      price: '$2,799/month',
      originalPrice: '$5,000/month',
      features: ['Security assessment', 'Penetration testing', 'Vulnerability scanning', 'Security implementation', 'Training'],
      benefits: ['Identify security gaps', 'Prevent breaches', 'Meet compliance'],
      marketPrice: '$5,000-15,000/month',
      category: 'security',
      technologies: ['Nessus', 'Metasploit', 'Wireshark', 'SIEM', 'EDR'],
      demoUrl: 'https://demo.ziontechgroup.com/cybersecurity',
      documentation: 'https://docs.ziontechgroup.com/cybersecurity',
      rating: 4.9,
      reviews: 189,
      popular: true,
      useCases: ['Security audit', 'Compliance assessment', 'Threat protection']
    },
    {
      id: 9,
      title: 'IT Support & Help Desk',
      description: '24/7 IT support services with remote assistance, troubleshooting, and proactive monitoring.',
      icon: Headphones,
      price: '$1,299/month',
      originalPrice: '$2,200/month',
      features: ['24/7 support', 'Remote assistance', 'Hardware support', 'Software support', 'User training'],
      benefits: ['Reduce downtime', 'Improve productivity', 'Lower support costs'],
      marketPrice: '$2,200-5,000/month',
      category: 'support',
      technologies: ['Remote Desktop', 'Ticketing System', 'Monitoring Tools', 'Knowledge Base', 'Chat Support'],
      demoUrl: 'https://demo.ziontechgroup.com/it-support',
      documentation: 'https://docs.ziontechgroup.com/it-support',
      rating: 4.7,
      reviews: 245,
      popular: true,
      useCases: ['Employee support', 'Technical troubleshooting', 'System maintenance']
    },
    {
      id: 10,
      title: 'Server Management & Monitoring',
      description: 'Complete server management including setup, configuration, monitoring, and maintenance.',
      icon: Monitor,
      price: '$1,799/month',
      originalPrice: '$3,200/month',
      features: ['Server setup', 'Configuration management', 'Performance monitoring', 'Security updates', 'Backup management'],
      benefits: ['Ensure server reliability', 'Improve performance', 'Reduce maintenance costs'],
      marketPrice: '$3,200-7,500/month',
      category: 'infrastructure',
      technologies: ['Linux', 'Windows Server', 'Docker', 'Prometheus', 'Grafana'],
      demoUrl: 'https://demo.ziontechgroup.com/server-management',
      documentation: 'https://docs.ziontechgroup.com/server-management',
      rating: 4.8,
      reviews: 156,
      popular: false,
      useCases: ['Server administration', 'Performance optimization', 'Security management']
    },
    {
      id: 11,
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      icon: HardDrive,
      price: '$999/month',
      originalPrice: '$1,800/month',
      features: ['Automated backups', 'Disaster recovery planning', 'Data replication', 'Recovery testing', 'Compliance'],
      benefits: ['Protect critical data', 'Minimize downtime', 'Meet compliance requirements'],
      marketPrice: '$1,800-4,500/month',
      category: 'support',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Custom Solutions'],
      demoUrl: 'https://demo.ziontechgroup.com/backup-recovery',
      documentation: 'https://docs.ziontechgroup.com/backup-recovery',
      rating: 4.9,
      reviews: 178,
      popular: true,
      useCases: ['Data protection', 'Business continuity', 'Compliance requirements']
    },
    {
      id: 12,
      title: 'Mobile Device Management',
      description: 'Complete mobile device management including security, app deployment, and device monitoring.',
      icon: Smartphone,
      price: '$1,499/month',
      originalPrice: '$2,500/month',
      features: ['Device enrollment', 'App management', 'Security policies', 'Remote wipe', 'Compliance monitoring'],
      benefits: ['Secure mobile devices', 'Centralize management', 'Ensure compliance'],
      marketPrice: '$2,500-5,500/month',
      category: 'security',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'AirWatch', 'Custom Solutions'],
      demoUrl: 'https://demo.ziontechgroup.com/mobile-management',
      documentation: 'https://docs.ziontechgroup.com/mobile-management',
      rating: 4.6,
      reviews: 123,
      popular: false,
      useCases: ['BYOD management', 'Mobile security', 'App deployment']
    },
    {
      id: 13,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to help you plan, implement, and optimize your technology infrastructure.',
      icon: Settings,
      price: '$2,199/month',
      originalPrice: '$4,000/month',
      features: ['IT strategy planning', 'Technology assessment', 'Vendor management', 'Project management', 'Training'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve efficiency'],
      marketPrice: '$4,000-10,000/month',
      category: 'support',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Project Management', 'Change Management'],
      demoUrl: 'https://demo.ziontechgroup.com/it-consulting',
      documentation: 'https://docs.ziontechgroup.com/it-consulting',
      rating: 4.8,
      reviews: 134,
      popular: true,
      useCases: ['Digital transformation', 'Technology planning', 'Vendor selection']
    },
    {
      id: 14,
      title: 'Virtual Desktop Infrastructure (VDI)',
      description: 'Complete VDI solution for secure, scalable desktop virtualization and remote work capabilities.',
      icon: Laptop,
      price: '$1,899/month',
      originalPrice: '$3,500/month',
      features: ['VDI setup', 'User management', 'Security configuration', 'Performance optimization', 'Support'],
      benefits: ['Enable remote work', 'Improve security', 'Reduce hardware costs'],
      marketPrice: '$3,500-8,000/month',
      category: 'infrastructure',
      technologies: ['VMware Horizon', 'Citrix', 'Microsoft VDI', 'AWS WorkSpaces', 'Azure Virtual Desktop'],
      demoUrl: 'https://demo.ziontechgroup.com/vdi',
      documentation: 'https://docs.ziontechgroup.com/vdi',
      rating: 4.7,
      reviews: 98,
      popular: false,
      useCases: ['Remote work', 'Secure access', 'Desktop management']
    },
    {
      id: 15,
      title: 'Email & Communication Systems',
      description: 'Complete email and communication infrastructure including setup, security, and management.',
      icon: Globe,
      price: '$1,199/month',
      originalPrice: '$2,200/month',
      features: ['Email setup', 'Security configuration', 'Spam filtering', 'Backup & recovery', 'User management'],
      benefits: ['Improve communication', 'Enhance security', 'Reduce spam'],
      marketPrice: '$2,200-5,000/month',
      category: 'infrastructure',
      technologies: ['Microsoft 365', 'Google Workspace', 'Exchange Server', 'Zimbra', 'Custom Solutions'],
      demoUrl: 'https://demo.ziontechgroup.com/email-systems',
      documentation: 'https://docs.ziontechgroup.com/email-systems',
      rating: 4.8,
      reviews: 167,
      popular: true,
      useCases: ['Email migration', 'Communication setup', 'Security enhancement']
    },
    {
      id: 16,
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset tracking, management, and optimization to maximize your technology investments.',
      icon: Settings,
      price: '$899/month',
      originalPrice: '$1,600/month',
      features: ['Asset tracking', 'License management', 'Lifecycle management', 'Cost optimization', 'Reporting'],
      benefits: ['Optimize IT investments', 'Ensure compliance', 'Reduce costs'],
      marketPrice: '$1,600-4,000/month',
      category: 'support',
      technologies: ['ServiceNow', 'Lansweeper', 'PDQ Inventory', 'Custom Solutions', 'API Integration'],
      demoUrl: 'https://demo.ziontechgroup.com/asset-management',
      documentation: 'https://docs.ziontechgroup.com/asset-management',
      rating: 4.6,
      reviews: 112,
      popular: false,
      useCases: ['Asset tracking', 'License compliance', 'Cost optimization']
    },
    {
      id: 17,
      title: 'Network Security & Firewall Management',
      description: 'Advanced network security including firewall configuration, monitoring, and threat protection.',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$2,800/month',
      features: ['Firewall configuration', 'Threat monitoring', 'Intrusion detection', 'VPN management', 'Security updates'],
      benefits: ['Protect network infrastructure', 'Prevent intrusions', 'Ensure compliance'],
      marketPrice: '$2,800-6,500/month',
      category: 'security',
      technologies: ['Fortinet', 'Cisco ASA', 'Palo Alto', 'SonicWall', 'pfSense'],
      demoUrl: 'https://demo.ziontechgroup.com/network-security',
      documentation: 'https://docs.ziontechgroup.com/network-security',
      rating: 4.9,
      reviews: 189,
      popular: true,
      useCases: ['Network protection', 'Threat prevention', 'Compliance management']
    },
    {
      id: 18,
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs for your team including certifications and skill development.',
      icon: Users,
      price: '$1,299/month',
      originalPrice: '$2,200/month',
      features: ['Custom training programs', 'Certification preparation', 'Skill assessment', 'Online learning', 'Hands-on labs'],
      benefits: ['Improve team skills', 'Increase productivity', 'Reduce support needs'],
      marketPrice: '$2,200-5,500/month',
      category: 'support',
      technologies: ['Microsoft Learn', 'AWS Training', 'Cisco Learning', 'Custom Content', 'Virtual Labs'],
      demoUrl: 'https://demo.ziontechgroup.com/it-training',
      documentation: 'https://docs.ziontechgroup.com/it-training',
      rating: 4.7,
      reviews: 145,
      popular: false,
      useCases: ['Team development', 'Certification prep', 'Skill enhancement']
    },
    {
      id: 19,
      title: 'IT Compliance & Audit',
      description: 'Comprehensive compliance management and audit services to meet regulatory requirements.',
      icon: Lock,
      price: '$2,499/month',
      originalPrice: '$4,500/month',
      features: ['Compliance assessment', 'Audit preparation', 'Policy development', 'Risk assessment', 'Documentation'],
      benefits: ['Meet regulatory requirements', 'Reduce audit risks', 'Improve security posture'],
      marketPrice: '$4,500-12,000/month',
      category: 'security',
      technologies: ['GRC Tools', 'Compliance Frameworks', 'Risk Management', 'Documentation', 'Reporting'],
      demoUrl: 'https://demo.ziontechgroup.com/compliance',
      documentation: 'https://docs.ziontechgroup.com/compliance',
      rating: 4.8,
      reviews: 134,
      popular: true,
      useCases: ['SOC 2 compliance', 'HIPAA compliance', 'ISO 27001']
    },
    {
      id: 20,
      title: 'IT Project Management',
      description: 'Professional IT project management services for complex technology implementations and migrations.',
      icon: Settings,
      price: '$1,799/month',
      originalPrice: '$3,200/month',
      features: ['Project planning', 'Resource management', 'Timeline management', 'Risk assessment', 'Quality assurance'],
      benefits: ['Ensure project success', 'Meet deadlines', 'Control costs'],
      marketPrice: '$3,200-8,000/month',
      category: 'support',
      technologies: ['Microsoft Project', 'Jira', 'Confluence', 'Agile', 'Waterfall'],
      demoUrl: 'https://demo.ziontechgroup.com/project-management',
      documentation: 'https://docs.ziontechgroup.com/project-management',
      rating: 4.7,
      reviews: 156,
      popular: false,
      useCases: ['System implementations', 'Technology migrations', 'Infrastructure projects']
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and support. Transform your technology infrastructure with our expert solutions." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, infrastructure, devops, network management, it support" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Matrix background */}
        <div className="absolute inset-0 matrix-bg"></div>
        
        {/* Quantum particles */}
        <div className="quantum-particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="quantum-particle" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
        <div className="quantum-particle" style={{ top: '40%', left: '80%', animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">IT Services</span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, 
            and 24/7 support to keep your business running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Server className="w-5 h-5" />
              <span className="text-lg font-semibold">30+ IT Solutions</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Shield className="w-5 h-5" />
              <span className="text-lg font-semibold">Enterprise Security</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-green-400">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-semibold">24/7 Support</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon text-lg px-8 py-4">
              Get IT Assessment
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black/20 backdrop-blur-md border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-black/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`card-futuristic group cursor-pointer ${
                  hoveredCard === service.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Service Icon */}
                <div className="flex justify-center mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-center leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-300">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-purple-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full btn-neon text-sm py-2">
                    Get Started
                  </button>
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1 py-1 px-2 bg-black/50 border border-cyan-500/30 rounded text-cyan-400 hover:bg-cyan-500/10 transition-colors text-xs"
                    >
                      <Play className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1 py-1 px-2 bg-black/50 border border-purple-500/30 rounded text-purple-400 hover:bg-purple-500/10 transition-colors text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Docs</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders who trust us with their critical IT infrastructure. 
            Get expert support, cutting-edge solutions, and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon text-lg px-8 py-4">
              Start IT Transformation
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg"
            >
              📞 Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
