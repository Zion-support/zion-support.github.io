import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink, Phone, Mail, MapPin, Server, Cloud, Database, Lock, Code, Monitor } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All IT Services', icon: '💻' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️' },
    { id: 'security', name: 'Cybersecurity', icon: '🔒' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'devops', name: 'DevOps', icon: '🔄' },
    { id: 'support', name: 'Support', icon: '🛠️' },
    { id: 'consulting', name: 'Consulting', icon: '💡' }
  ];

  const itServices = [
    // Cloud Services
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Complete cloud migration strategy and implementation for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: '$2,999/month',
      originalPrice: '$5,000/month',
      features: ['Multi-cloud strategy', 'Zero-downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring', '24/7 support'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhanced security', 'Better performance'],
      marketPrice: '$5,000-15,000/month',
      category: 'cloud',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      popular: true,
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Cost Optimization',
      description: 'Optimize your cloud infrastructure costs while maintaining performance and reliability.',
      icon: '💰',
      price: '$1,499/month',
      originalPrice: '$2,500/month',
      features: ['Cost analysis', 'Resource optimization', 'Auto-scaling setup', 'Reserved instances', 'Spot instances', 'Cost monitoring'],
      benefits: ['Save 30-50% on cloud costs', 'Optimize resource usage', 'Better budget control', 'Improved ROI'],
      marketPrice: '$2,000-6,000/month',
      category: 'cloud',
      technologies: ['CloudWatch', 'Azure Monitor', 'Cost Explorer', 'Python', 'Automation Scripts', 'APIs'],
      link: 'https://ziontechgroup.com/cloud-optimization'
    },
    {
      id: 'hybrid-cloud',
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud environments for optimal flexibility.',
      icon: '🔗',
      price: '$3,499/month',
      originalPrice: '$6,000/month',
      features: ['Hybrid architecture design', 'Data synchronization', 'Security integration', 'Network connectivity', 'Monitoring dashboard', 'Disaster recovery'],
      benefits: ['Best of both worlds', 'Flexible deployment', 'Cost-effective scaling', 'Enhanced security'],
      marketPrice: '$6,000-20,000/month',
      category: 'cloud',
      technologies: ['AWS Direct Connect', 'Azure ExpressRoute', 'VPN', 'SD-WAN', 'Kubernetes', 'Istio'],
      link: 'https://ziontechgroup.com/hybrid-cloud'
    },

    // Cybersecurity Services
    {
      id: 'security-assessment',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security assessment and vulnerability testing for your IT infrastructure.',
      icon: '🔍',
      price: '$2,199/month',
      originalPrice: '$4,000/month',
      features: ['Vulnerability scanning', 'Penetration testing', 'Security audit', 'Compliance check', 'Risk assessment', 'Remediation plan'],
      benefits: ['Identify security gaps', 'Meet compliance requirements', 'Reduce security risks', 'Protect sensitive data'],
      marketPrice: '$4,000-12,000/month',
      category: 'security',
      technologies: ['Nessus', 'OpenVAS', 'Burp Suite', 'OWASP ZAP', 'Nmap', 'Metasploit'],
      popular: true,
      link: 'https://ziontechgroup.com/security-assessment'
    },
    {
      id: 'managed-security',
      title: 'Managed Security Services',
      description: '24/7 security monitoring, threat detection, and incident response services.',
      icon: '🛡️',
      price: '$1,799/month',
      originalPrice: '$3,200/month',
      features: ['24/7 SOC monitoring', 'Threat detection', 'Incident response', 'Security updates', 'Compliance reporting', 'Security training'],
      benefits: ['Round-the-clock protection', 'Faster threat response', 'Reduced security costs', 'Expert security team'],
      marketPrice: '$3,000-10,000/month',
      category: 'security',
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Threat Intelligence', 'Machine Learning'],
      link: 'https://ziontechgroup.com/managed-security'
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security Implementation',
      description: 'Implement zero trust security architecture for enhanced protection and access control.',
      icon: '🔐',
      price: '$2,999/month',
      originalPrice: '$5,500/month',
      features: ['Identity verification', 'Device trust', 'Network segmentation', 'Access policies', 'Continuous monitoring', 'Compliance automation'],
      benefits: ['Enhanced security posture', 'Reduced attack surface', 'Better access control', 'Compliance readiness'],
      marketPrice: '$5,000-18,000/month',
      category: 'security',
      technologies: ['Okta', 'Azure AD', 'Cisco', 'Palo Alto', 'Zscaler', 'Identity Management'],
      link: 'https://ziontechgroup.com/zero-trust-security'
    },

    // Infrastructure Services
    {
      id: 'infrastructure-management',
      title: 'Infrastructure Management',
      description: 'Complete management of your IT infrastructure including servers, networks, and storage.',
      icon: '🏗️',
      price: '$1,999/month',
      originalPrice: '$3,500/month',
      features: ['Server management', 'Network monitoring', 'Storage optimization', 'Performance tuning', 'Capacity planning', 'Disaster recovery'],
      benefits: ['Improved uptime', 'Better performance', 'Reduced downtime', 'Cost optimization'],
      marketPrice: '$3,000-10,000/month',
      category: 'infrastructure',
      technologies: ['VMware', 'Hyper-V', 'Cisco', 'Dell EMC', 'NetApp', 'Monitoring Tools'],
      popular: true,
      link: 'https://ziontechgroup.com/infrastructure-management'
    },
    {
      id: 'network-design',
      title: 'Network Design & Implementation',
      description: 'Design and implement secure, scalable network infrastructure for your organization.',
      icon: '🌐',
      price: '$2,499/month',
      originalPrice: '$4,500/month',
      features: ['Network architecture', 'Security implementation', 'Performance optimization', 'Redundancy planning', 'Monitoring setup', 'Documentation'],
      benefits: ['Reliable connectivity', 'Enhanced security', 'Better performance', 'Future-proof design'],
      marketPrice: '$4,000-15,000/month',
      category: 'infrastructure',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS', 'Network Monitoring'],
      link: 'https://ziontechgroup.com/network-design'
    },
    {
      id: 'data-center-services',
      title: 'Data Center Services',
      description: 'Complete data center management including colocation, cloud, and hybrid solutions.',
      icon: '🏢',
      price: '$3,999/month',
      originalPrice: '$7,000/month',
      features: ['Colocation services', 'Cloud integration', 'Backup solutions', 'Disaster recovery', 'Monitoring', 'Compliance support'],
      benefits: ['Reliable infrastructure', 'Cost-effective scaling', 'Enhanced security', '24/7 support'],
      marketPrice: '$7,000-25,000/month',
      category: 'infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Backup Solutions', 'Monitoring'],
      link: 'https://ziontechgroup.com/data-center-services'
    },

    // Development Services
    {
      id: 'custom-development',
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your specific business requirements.',
      icon: '💻',
      price: '$4,999/month',
      originalPrice: '$8,500/month',
      features: ['Requirements analysis', 'Custom development', 'Testing & QA', 'Deployment', 'Documentation', 'Maintenance'],
      benefits: ['Tailored solutions', 'Competitive advantage', 'Scalable architecture', 'Ongoing support'],
      marketPrice: '$8,000-30,000/month',
      category: 'development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Docker'],
      popular: true,
      link: 'https://ziontechgroup.com/custom-development'
    },
    {
      id: 'api-development',
      title: 'API Development & Integration',
      description: 'RESTful and GraphQL API development with third-party integrations and documentation.',
      icon: '🔌',
      price: '$1,999/month',
      originalPrice: '$3,500/month',
      features: ['API design', 'REST/GraphQL APIs', 'Third-party integrations', 'API documentation', 'Testing', 'Monitoring'],
      benefits: ['Improved connectivity', 'Better data flow', 'Enhanced functionality', 'Developer-friendly'],
      marketPrice: '$3,000-12,000/month',
      category: 'development',
      technologies: ['Node.js', 'Express', 'GraphQL', 'Postman', 'Swagger', 'API Gateway'],
      link: 'https://ziontechgroup.com/api-development'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: '📱',
      price: '$3,999/month',
      originalPrice: '$7,000/month',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'Testing', 'App store deployment', 'Maintenance'],
      benefits: ['Mobile presence', 'Better user engagement', 'Increased accessibility', 'Competitive advantage'],
      marketPrice: '$7,000-25,000/month',
      category: 'development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xcode', 'Android Studio'],
      link: 'https://ziontechgroup.com/mobile-development'
    },

    // DevOps Services
    {
      id: 'devops-implementation',
      title: 'DevOps Implementation',
      description: 'Complete DevOps transformation with CI/CD pipelines, automation, and monitoring.',
      icon: '🔄',
      price: '$2,999/month',
      originalPrice: '$5,500/month',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Monitoring setup', 'Team training'],
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Improved quality'],
      marketPrice: '$5,000-20,000/month',
      category: 'devops',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      popular: true,
      link: 'https://ziontechgroup.com/devops-implementation'
    },
    {
      id: 'container-orchestration',
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management for scalable application deployment.',
      icon: '📦',
      price: '$2,499/month',
      originalPrice: '$4,500/month',
      features: ['Kubernetes setup', 'Container management', 'Auto-scaling', 'Service mesh', 'Monitoring', 'Security'],
      benefits: ['Improved scalability', 'Better resource utilization', 'Faster deployments', 'Enhanced reliability'],
      marketPrice: '$4,000-15,000/month',
      category: 'devops',
      technologies: ['Kubernetes', 'Docker', 'Istio', 'Helm', 'Prometheus', 'Grafana'],
      link: 'https://ziontechgroup.com/container-orchestration'
    },

    // Support Services
    {
      id: 'helpdesk-support',
      title: '24/7 Helpdesk Support',
      description: 'Round-the-clock technical support for your IT infrastructure and applications.',
      icon: '🛠️',
      price: '$1,299/month',
      originalPrice: '$2,200/month',
      features: ['24/7 support', 'Multi-channel support', 'Remote assistance', 'Issue tracking', 'Knowledge base', 'SLA guarantees'],
      benefits: ['Always available', 'Faster resolution', 'Reduced downtime', 'Better user experience'],
      marketPrice: '$2,000-8,000/month',
      category: 'support',
      technologies: ['ServiceNow', 'Jira', 'Remote Tools', 'Monitoring', 'Ticketing Systems', 'Chat'],
      link: 'https://ziontechgroup.com/helpdesk-support'
    },
    {
      id: 'system-monitoring',
      title: 'System Monitoring & Alerting',
      description: 'Comprehensive monitoring of your IT infrastructure with proactive alerting and reporting.',
      icon: '📊',
      price: '$899/month',
      originalPrice: '$1,600/month',
      features: ['Infrastructure monitoring', 'Performance tracking', 'Alert management', 'Custom dashboards', 'Reporting', 'Predictive analytics'],
      benefits: ['Proactive issue detection', 'Better performance', 'Reduced downtime', 'Data-driven decisions'],
      marketPrice: '$1,500-6,000/month',
      category: 'support',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Nagios', 'Zabbix', 'Custom Scripts'],
      link: 'https://ziontechgroup.com/system-monitoring'
    },

    // Consulting Services
    {
      id: 'it-strategy-consulting',
      title: 'IT Strategy Consulting',
      description: 'Strategic IT planning and digital transformation consulting for your organization.',
      icon: '💡',
      price: '$1,999/month',
      originalPrice: '$3,500/month',
      features: ['IT strategy development', 'Technology assessment', 'Digital transformation', 'Roadmap planning', 'Vendor evaluation', 'Implementation guidance'],
      benefits: ['Clear IT direction', 'Better technology choices', 'Improved efficiency', 'Competitive advantage'],
      marketPrice: '$3,000-12,000/month',
      category: 'consulting',
      technologies: ['Strategy Frameworks', 'Assessment Tools', 'Planning Software', 'Analytics', 'Reporting', 'Presentations'],
      popular: true,
      link: 'https://ziontechgroup.com/it-strategy-consulting'
    },
    {
      id: 'technology-audit',
      title: 'Technology Audit & Assessment',
      description: 'Comprehensive audit of your current technology stack and recommendations for improvement.',
      icon: '🔍',
      price: '$1,499/month',
      originalPrice: '$2,500/month',
      features: ['Technology inventory', 'Performance analysis', 'Security assessment', 'Compliance review', 'Cost analysis', 'Recommendations'],
      benefits: ['Clear technology picture', 'Cost optimization', 'Security improvements', 'Better planning'],
      marketPrice: '$2,500-8,000/month',
      category: 'consulting',
      technologies: ['Assessment Tools', 'Analytics', 'Reporting', 'Compliance Tools', 'Cost Analysis', 'Documentation'],
      link: 'https://ziontechgroup.com/technology-audit'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const popularServices = itServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and custom development. Transform your technology infrastructure." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, infrastructure, devops, custom development, it consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button text-lg px-8 py-4"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-lg px-8 py-4"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Get Free Assessment
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Most Popular IT Services
            </h2>
            <p className="text-xl text-gray-300">
              Our most requested and highest-performing IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {popularServices.map((service, index) => (
              <div key={service.id} className="cyber-card hologram-card group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400">Market price: {service.marketPrice}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    aria-label="Call to get started"
                  >
                    📞
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All IT Services */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Complete IT Services Portfolio
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive IT solutions for every business need and industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="cyber-card hologram-card group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === service.category)?.name}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-400">Market: {service.marketPrice}</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-cyan-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center inline-flex items-center justify-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="bg-green-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                    aria-label="Call to get started"
                  >
                    📞
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Our IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging cutting-edge technologies and best practices to deliver exceptional IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card text-center">
              <Cloud className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cloud Solutions</h3>
              <p className="text-gray-300 text-sm">Complete cloud migration, optimization, and management services</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">Comprehensive security solutions and managed security services</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Server className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Infrastructure</h3>
              <p className="text-gray-300 text-sm">Complete infrastructure management and optimization services</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Code className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Development</h3>
              <p className="text-gray-300 text-sm">Custom software development and API integration services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with our IT services today. Free assessment, custom solution design, and 24/7 support included.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-2">Infrastructure Modernization</h3>
              <p className="text-gray-300">Transform your IT infrastructure with modern, scalable solutions</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Enhanced Security</h3>
              <p className="text-gray-300">Protect your business with comprehensive cybersecurity solutions</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our IT experts</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-lg px-8 py-4"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-lg px-8 py-4"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Available 24/7 for IT support and consultations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;